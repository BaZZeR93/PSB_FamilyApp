import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BudgetComponent } from './pages/budget/budget.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { LogInComponent } from './pages/log-in/log-in.component';
import { RecoverPasswordComponent } from './pages/recover-password/recover-password.component';
import { RegisterComponent } from './pages/register/register.component';
import { AlbumComponent } from './pages/album/album.component'

const routes: Routes = [
  { path: '', component: LogInComponent, pathMatch: 'full'},
  { path: 'budget', component: BudgetComponent},
  { path: 'dashboard/budget', component: BudgetComponent},
  { path: 'login', component: LogInComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'dashboard', component: DashboardPageComponent},
  { path: 'recover-password', component: RecoverPasswordComponent},
  { path: 'album', component: AlbumComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
