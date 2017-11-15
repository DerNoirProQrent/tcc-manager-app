import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TrainingListComponent } from './training-list/training-list.component';
import { TrainingDetailsComponent } from './training-details/training-details.component';
import { TrainingService } from './training.service';
import { TakePlaceSoonPipe } from './take-place-soon.pipe';

@NgModule({
  declarations: [TrainingListComponent, TrainingDetailsComponent, TakePlaceSoonPipe],
  imports: [CommonModule, FormsModule],
  exports: [TrainingListComponent, TrainingDetailsComponent],
  providers:[TrainingService, TakePlaceSoonPipe]
})
export class TrainingsModule { }
