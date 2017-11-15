import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TrainingListComponent } from './training-list/training-list.component';
import { TrainingDetailsComponent } from './training-details/training-details.component';

@NgModule({
  declarations: [TrainingListComponent,  TrainingDetailsComponent],
  imports: [CommonModule, FormsModule],
  exports: [TrainingListComponent, TrainingDetailsComponent]
})
export class TrainingsModule { }
