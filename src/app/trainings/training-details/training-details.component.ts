import { Component, OnInit, Input } from '@angular/core';
import { Training } from '../training.model';

@Component({
    selector: 'app-training-details',
    templateUrl: './training-details.component.html',
    styleUrls: ['./training-details.component.scss'],
})
export class TrainingDetailsComponent implements OnInit {
    @Input() public trainingDetail: Training;

    constructor() {
    }

    ngOnInit() {
    }

}
