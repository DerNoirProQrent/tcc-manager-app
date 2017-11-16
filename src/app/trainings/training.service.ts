import { Injectable } from '@angular/core';
import { Training } from "./training.model";
import { TRAININGS } from './training.mock';
import { Observable, ReplaySubject } from 'rxjs';

import 'rxjs/add/operator/do';

@Injectable()
export class TrainingService {
    private subject = new ReplaySubject<Training[]>(1);

    constructor() {
        this.subject.next(TRAININGS);
    }

    getAll(): Observable<Training[]> {
        return this.subject.asObservable();
    }

    getById(id: number): Observable<Training> {
        return this.getAll()
        .map((trainingsAll: Training[]) => trainingsAll.find((training: Training) => training.id === id))
        .do(training => {
            if (!training) {
                throw new Error(`Can not find training with id: ${id}`);
            }
        });
    }
}
