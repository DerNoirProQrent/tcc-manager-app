import { Component, OnInit, Input } from '@angular/core';
import { Training } from '../training.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-training-details',
    templateUrl: './training-details.component.html',
    styleUrls: ['./training-details.component.scss'],
})
export class TrainingDetailsComponent implements OnInit {
    @Input() public trainingDetail: Training;
    public form: FormGroup;

    constructor(private router: Router) {
    }

    ngOnInit() {
        this.form = new FormGroup({
            name: new FormControl(this.trainingDetail.name,Validators.required),
            description: new FormControl(this.trainingDetail.description, Validators.minLength(10)),
            nextRun: new FormControl(this.trainingDetail.nextRun),
            discontinued: new FormControl(this.trainingDetail.discontinued)
        });
    }

    onSubmit() {
        Object.assign(this.trainingDetail, this.form.value);
        this.router.navigate(['/training'])
    }
}
