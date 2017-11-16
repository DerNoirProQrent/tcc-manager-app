import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Training } from '../training.model';
import { Subscription } from 'rxjs';
import { TrainingService } from '../training.service';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-training-details-route',
  templateUrl: './training-details-route.component.html',
  styleUrls: ['./training-details-route.component.scss'],
})
export class TrainingDetailsRouteComponent implements OnInit,OnDestroy {
  trainingDetailItem: Training;
  subscripter: Subscription;

  constructor(private route: ActivatedRoute,
              private trainingService: TrainingService) {
  }

  ngOnInit() {
    this.subscripter = this.route.params
        .map(params => parseInt(params['id']))
        .switchMap(id => this.trainingService.getById(id))
        .subscribe(t => this.trainingDetailItem = t);
  }

  ngOnDestroy() {
      this.subscripter.unsubscribe();
  }
}
