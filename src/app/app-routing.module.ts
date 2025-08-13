import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
      },
      {
        path: 'training',
        loadChildren: () => import('./routes/training/training.module').then(m => m.TrainingModule)
      },
      {
        path: 'note',
        children: [
          {
            path: 'lodash/math',
            loadComponent: () => import('./routes/note/lodash/math/math.component').then(m => m.MathComponent)
          },
          {
            path: 'animations',
            loadComponent: () => import('./routes/note/animations/animations.component').then(m => m.AnimationsComponent)
          }
        ]
      },
    ]
  },
  {
    path: 'root', outlet: 'dialog',
    loadChildren: () => import('./routes/page1/page1.module').then(m => m.Page1Module)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
