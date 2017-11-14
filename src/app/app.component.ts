import { Component } from '@angular/core';
import { Training } from "./trainings/training.model";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    public trainings: Training[];

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
            }
        ];
    }
}
