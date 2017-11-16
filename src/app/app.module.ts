import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';


import { AppComponent } from './app.component';
import { TrainingsModule } from './trainings/trainings.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    TrainingsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
