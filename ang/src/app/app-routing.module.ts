import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BudgetComponent } from './pages/budget/budget.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { FamilyTreeComponent } from './pages/family-tree/family-tree.component';
import { LogInComponent } from './pages/log-in/log-in.component';
import { RecoverPasswordComponent } from './pages/recover-password/recover-password.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  { path: '', component: LogInComponent, pathMatch: 'full'},
  { path: 'budget', component: BudgetComponent},
  { path: 'dashboard/budget', component: BudgetComponent},
  { path: 'dashboard/familytree', component: FamilyTreeComponent},
  { path: 'login', component: LogInComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'dashboard', component: DashboardPageComponent},
  { path: 'recover-password', component: RecoverPasswordComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
