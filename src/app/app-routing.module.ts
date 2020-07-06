import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';
import { HomePage } from './routes/home/home';

const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      { path: '', component: HomePage },
      {
        path: 'research',
        loadChildren: () => import('./routes/research/research.module').then(m => m.ResearchModule)
      }
    ]
  },
  {
    path: 'root', outlet: 'dialog',
    loadChildren: () => import('./routes/research/research.module').then(m => m.ResearchModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
