import { Routes } from '@angular/router';
import { TrainingListRouteComponent } from './trainings/training-list-route/training-list-route.component';
import { TrainingDetailsRouteComponent } from './trainings/training-details-route/training-details-route.component';
import { TrainingExistGuardService } from './trainings/training-exist-guard.service';

export let routes: Routes = [
    { path: 'training', component: TrainingListRouteComponent },
    {
        path: 'training/:id',
        canActivate: [TrainingExistGuardService],
        component: TrainingDetailsRouteComponent
    },
    { path: '**', redirectTo: '/training' }

];
