import { Injectable } from '@angular/core';
import { Router, CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { TrainingService } from './training.service';
import { Observable } from 'rxjs';

@Injectable()
export class TrainingExistGuardService implements CanActivate {

    constructor(private trainingService: TrainingService,
    private router: Router) {

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        const id = parseInt(route.params['id']);
        return this.trainingService.getById(id)
        .first()
        .map(training => !!training)
        .catch(arr => {
            alert('training wurde nicht gefunden');
            this.router.navigate(['/trainings']);
            return Observable.of(false);
        })
    }

}
