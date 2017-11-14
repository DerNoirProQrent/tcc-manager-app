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
                imageUrl: 'assets/images/trainings/angular2-shield.svg',
                description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna'
            },
            {
                id: 2,
                name: 'TypeScript',
                imageUrl: 'assets/images/trainings/typescript-logo.svg',
                description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna'
            },
            {
                id: 3,
                name: 'JavaScript',
                description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna'
            },
            {
                id: 4,
                name: 'PHP',
                description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna'
            }
        ];
    }

    onItemClick(training: Training) {
        this.clickedTraining = training;
    }
}
