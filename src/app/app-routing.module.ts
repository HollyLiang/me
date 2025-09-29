import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';
import { routes as authRoutes } from './routes/auth/auth-routing';
import { HomePage } from './routes/home/home';
import { authGuardGuard } from './shared/guard/auth-guard.guard';

const noteRoutes: Routes = [
  {
    path: 'lodash/math',
    loadComponent: () => import('./routes/note/lodash/math/math.component').then(m => m.MathComponent)
  },
  {
    path: 'animations',
    loadComponent: () => import('./routes/note/animations/animations.component').then(m => m.AnimationsComponent)
  }
];

const routes: Routes = [
  { path: 'auth', children: authRoutes },
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
        children: noteRoutes
      },
      {
        path: 'profile',
        loadComponent: () => import('./routes/profile/profile.component').then(m => m.ProfileComponent),
        canActivate: [authGuardGuard]
      },
      {
        path: 'status',
        children: [
          {
            path: '401',
            loadComponent: () => import('./routes/status/401/401.component').then(m => m.Status401Component)
          }
        ]
      },
      {
        path: '401',
        loadComponent: () => import('./routes/status/401/401.component').then(m => m.Status401Component)
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
