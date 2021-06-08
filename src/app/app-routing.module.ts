import { AuthComponent } from './auth/auth.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth/auth.guard';
import { MyAccountComponent } from './my-account/my-account.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: "/auth",
    pathMatch: "full",
   
  },
  {
    path: "auth", component: AuthComponent, 
  },
  {
    path: "dashboard", canActivate: [AuthGuard], component: DashboardComponent,
  },
  {
    path: "my-account", canActivate: [AuthGuard], component: MyAccountComponent,
  },
  {
    path: "home", component: HomeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
