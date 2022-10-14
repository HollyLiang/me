import { Lab1Component } from './lab1/lab1.component';
import { Lab1SubComponent } from './lab1/lab1-sub.component';
import { Lab2Component } from './lab2/lab2.component';
import { Lab3Component } from './lab3/lab3.component';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { TrainingComponent } from './training.component';

const routes: Route[] = [
  { path: '', redirectTo: 'lab1', pathMatch: 'full' },
  { path: 'lab1', component: Lab1Component },
  { path: 'lab2', component: Lab2Component },
  { path: 'lab3', component: Lab3Component },
];

const COMPONENTS = [
  TrainingComponent,
  Lab1Component,
  Lab1SubComponent,
  Lab2Component,
  Lab3Component,
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
  ],
  exports: [],
  declarations: [
    ...COMPONENTS
  ],
  providers: [],
})
export class TrainingModule { }
