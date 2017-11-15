import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TrainingListComponent } from './training-list/training-list.component';
import { TrainingDetailsComponent } from './training-details/training-details.component';
import { TrainingService } from './training.service';

@NgModule({
  declarations: [TrainingListComponent, TrainingDetailsComponent],
  imports: [CommonModule, FormsModule],
  exports: [TrainingListComponent, TrainingDetailsComponent],
  providers:[TrainingService]
})
export class TrainingsModule { }
