import { Component, OnInit } from '@angular/core';
import { Training } from "./trainings/training.model";
import { TrainingService } from './trainings/training.service';
import { Observable } from 'rxjs';

import 'rxjs/add/operator/map';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    public trainings: Observable<Training[]>;
    public trainingsCount: Observable<number>;
    public trainingDetailItem: Training;

    constructor(private trainingService: TrainingService) {
    }

    onItemClick(training: Training) {
        this.trainingDetailItem = training;
    }

    ngOnInit() {
        this.trainings = this.trainingService.getAll();

        this.trainingsCount = this.trainings.map(
            trainings => trainings.length
        );
    }
}
