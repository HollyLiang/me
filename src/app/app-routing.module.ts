import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';
import { routes as authRoutes } from './routes/auth/auth-routing';
import { HomePage } from './routes/home/home';
import { authGuard } from './shared/guard/auth-guard.guard';

const noteRoutes: Route = {
  path: 'note',
  children: [
    {
      path: 'animations',
      loadComponent: () => import('./routes/note/animations/animations.component').then(m => m.AnimationsComponent)
    },
    {
      path: 'lodash',
      children: [
        {
          path: 'math',
          loadComponent: () => import('./routes/note/lodash/math/math.component').then(m => m.MathComponent)
        }
      ]
    },
    {
      path: 'jp',
      children: [
        {
          path: 'manage',
          loadComponent: () => import('./routes/note/jp/manage/manage.component').then(m => m.JpManageComponent)
        },
        {
          path: 'book',
          loadComponent: () => import('./routes/note/jp/book/book.component').then(m => m.BookComponent)
        }
      ]
    }
  ]
};

const profileRoutes: Route = {
  path: 'profile',
  loadComponent: () => import('./routes/profile/profile.component').then(m => m.ProfileComponent),
};

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
        path: 'status',
        children: [
          {
            path: '401',
            loadComponent: () => import('./routes/status/401/401.component').then(m => m.Status401Component)
          }
        ]
      },
      {
        path: '',
        canActivate: [authGuard],
        children: [
          noteRoutes,
          profileRoutes
        ]
      }
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
