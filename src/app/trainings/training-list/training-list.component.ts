import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Training } from '../training.model';

@Component({
    selector: 'app-training-list',
    templateUrl: './training-list.component.html',
    styleUrls: ['./training-list.component.css'],
})
export class TrainingListComponent implements OnInit {
    @Input() public trainingsCollection: Training[];
    @Output() public  trainingSelected = new EventEmitter<Training>();
    activeTraining: Training;

    constructor() {
    }

    onListItemClicked($event: MouseEvent, training: Training) {
        this.activeTraining = training;
        this.trainingSelected.emit(training);
    }

    ngOnInit() {
    }

}
