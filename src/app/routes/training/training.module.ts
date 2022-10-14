import { Lab1Component } from './lab1/lab1.component';
import { Lab1SubComponent } from './lab1/lab1-sub.component';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { TrainingComponent } from './training.component';
import { SharedModule } from '@shared/shared.module';
import { Lab2Component } from './lab2/lab2.component';

const routes: Route[] = [
  { path: '', redirectTo: 'lab1', pathMatch: 'full' },
  { path: 'lab1', component: Lab1Component },
  { path: 'lab2', component: Lab2Component },
];

const COMPONENTS = [
  TrainingComponent,
  Lab1Component,
  Lab1SubComponent,
  Lab2Component,
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
