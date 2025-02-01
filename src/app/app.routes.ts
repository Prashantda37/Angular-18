import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './components/layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
import { authGuard, loginGuard } from './services/auth.guard';
import { PropertyComponent } from './pages/property/property.component';
import { MethodComponent } from './pages/method/method.component';
import { ParamsComponent } from './pages/params/params.component';
import { DecoratorsLayoutComponent } from './components/decorators-layout/decorators-layout.component';
import { ClassComponent } from './pages/class/class.component';
import { EmployeesComponent } from './pages/employees/employees.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'App Login page',
    canActivate: [loginGuard]
  },
  {
    path: '',
    component: LayoutComponent,
    title: 'App page',
    canActivate: [authGuard],
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'decorator',
        component: DecoratorsLayoutComponent,
        children: [
          {
            path: '',
            component: ClassComponent
          },
          {
            path: 'property',
            component: PropertyComponent
          },
          {
            path: 'method',
            component: MethodComponent
          },
          {
            path: 'params',
            component: ParamsComponent
          }
        ]
      },
      {
        path: 'employees',
        component: EmployeesComponent
      }
    ]
  }
];
