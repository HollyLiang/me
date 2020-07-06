import { RouterOutletComponent } from './dialog/router-outlet/router-outlet.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DialogComponent } from './dialog/dialog.component';
import { Page1Component } from './dialog/page1/page1.component';


const routes: Routes = [
  { path: '', redirectTo: '/dialog', pathMatch: 'full' },
  { path: 'dialog', component: DialogComponent, pathMatch: 'full' },
  { path: 'page1', component: Page1Component }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ResearchRoutingModule { }
