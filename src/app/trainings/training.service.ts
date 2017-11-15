import { Injectable } from '@angular/core';
import { Training } from "./training.model";
import { TRAININGS } from './training.mock';
import { Observable, ReplaySubject } from 'rxjs';

@Injectable()
export class TrainingService {
  private subject = new ReplaySubject<Training[]>(1);

  constructor() {
    this.subject.next(TRAININGS);
  }

  getAll(): Observable<Training[]> {
    return this.subject.asObservable();
  }
}
