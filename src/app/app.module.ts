import { AuthModule } from './auth/auth.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { MynameComponent } from './myname/myname.component';
import { AddEditItemComponent } from './add-edit-item/add-edit-item.component';
import { ListItemsComponent } from './list-items/list-items.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpConfigInterceptor } from './utils/http-config-interceptor';


@NgModule({
  declarations: [
    AppComponent,
    LifecycleComponent,
    MynameComponent,
    AddEditItemComponent,
    ListItemsComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AuthModule,
    HttpClientModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true
  }],
  bootstrap: [AppComponent],
})
export class AppModule {}
