import { Component } from '@angular/core';
import { Training } from "./trainings/training.model";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    public trainings: Training[];
    public clickedTraining: Training;

    constructor() {
        this.trainings = [
            {
                id: 1,
                name: 'Angular',
                description: 'Lorem Ipsum de lorm Angular'
            },
            {
                id: 2,
                name: 'TypeScript',
                description: 'Lorem Ipsum de lorm TypeScript'
            },
            {
                id: 2,
                name: 'JavaScript',
                description: 'Lorem Ipsum de lorm JavaScript'
            }
        ];
    }

    onItemClick(training: Training) {
        this.clickedTraining = training;
    }
}
