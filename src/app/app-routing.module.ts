import { AuthComponent } from './auth/auth.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { MynameComponent } from './myname/myname.component';
import { DashboardComponent } from './dashboard/dashboard.component';

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
    path: "dashboard", component: DashboardComponent,
  },
  {
    path: "show-myname", component: MynameComponent,
  },
  {
    path: "component", children: [{
      path: "auth", component: AuthComponent,
    },
    {
      path: "show-myname", component: MynameComponent,
    }]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
