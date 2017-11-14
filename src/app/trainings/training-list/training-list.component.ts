import { Component, OnInit, Input } from '@angular/core';
import { Training } from '../training.model';

@Component({
    selector: 'app-training-list',
    templateUrl: './training-list.component.html',
    styleUrls: ['./training-list.component.css'],
})
export class TrainingListComponent implements OnInit {
    @Input() public trainingsArray: Training[];

    constructor() {
    }

    onListItemClicked($event: MouseEvent, training: Training) {
      console.log($event, training);
    }

    ngOnInit() {
    }

}
