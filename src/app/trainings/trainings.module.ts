import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TrainingListComponent } from './training-list/training-list.component';
import { TrainingDetailsComponent } from './training-details/training-details.component';
import { TrainingService } from './training.service';
import { TakePlaceSoonPipe } from './take-place-soon.pipe';
import { TrainingListRouteComponent } from './training-list-route/training-list-route.component';
import { TrainingDetailsRouteComponent } from './training-details-route/training-details-route.component';
import { RouterModule } from '@angular/router';
import { TrainingExistGuardService } from './training-exist-guard.service';

@NgModule({
  declarations: [TrainingListComponent, TrainingDetailsComponent, TakePlaceSoonPipe, TrainingListRouteComponent, TrainingDetailsRouteComponent],
  imports: [CommonModule, FormsModule, RouterModule, ReactiveFormsModule],
  exports: [TrainingListComponent, TrainingDetailsComponent],
  providers:[TrainingService, TakePlaceSoonPipe, TrainingExistGuardService]
})
export class TrainingsModule { }
