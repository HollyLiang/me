import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';
import { HomePage } from './routes/home/home';

const routes: Routes = [
  { path: 'auth', loadChildren: () => import('./routes/auth/auth.module').then(m => m.AuthModule) },
  {
    path: '', component: LayoutComponent,
    children: [
      { path: '', component: HomePage, pathMatch: 'full' },
      {
        path: 'research',
        loadChildren: () => import('./routes/research/research.module').then(m => m.ResearchModule)
      }
    ]
  },
  {
    path: 'root', outlet: 'dialog',
    loadChildren: () => import('./routes/page1/page1.module').then(m => m.Page1Module)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
