import { Component, OnInit } from '@angular/core';
import { Training } from "../training.model";
import { TrainingService } from '../training.service';
import { Observable } from 'rxjs';

import 'rxjs/add/operator/map';

@Component({
  selector: 'app-training-list-route',
  templateUrl: './training-list-route.component.html',
  styleUrls: ['./training-list-route.component.scss']
})
export class TrainingListRouteComponent implements OnInit {

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
