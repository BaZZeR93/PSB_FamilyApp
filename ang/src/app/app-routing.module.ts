import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BudgetComponent } from './pages/budget/budget.component';
import { LogInComponent } from './pages/log-in/log-in.component';
import { MainViewComponent } from './pages/main-view/main-view.component';
import { RecoverPasswordComponent } from './pages/recover-password/recover-password.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  { path: '', component: LogInComponent, pathMatch: 'full'},
  { path: 'budget', component: BudgetComponent},
  { path: 'dashboard/budget', component: BudgetComponent},
  { path: 'login', component: LogInComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'dashboard', component: MainViewComponent},
  { path: 'recover-password', component: RecoverPasswordComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
