import { AuthModule } from './auth/auth.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { AddEditItemComponent } from './add-edit-item/add-edit-item.component';
import { ListItemsComponent } from './list-items/list-items.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpConfigInterceptor } from './utils/http-config-interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { OrderComponent } from './order/order.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { AddEditUserComponent } from './dashboard/add-edit-user/add-edit-user.component';
import { AddEditProductsComponent } from './dashboard/add-edit-products/add-edit-products.component';
import { AddEditCategoriesComponent } from './dashboard/add-edit-categories/add-edit-categories.component';
import { CategoryPreviewComponent } from './categories/category-preview/category-preview.component';
import { ProductPreviewComponent } from './products/product-preview/product-preview.component';
import { UserPriviewComponent } from './component/user-priview/user-priview.component';
import {MatFormFieldModule, MatLabel, MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIcon, MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { ListCategoriesComponent } from './categories/list-categories/list-categories.component';
import {MatSelectModule} from '@angular/material/select';







@NgModule({
  declarations: [
    AppComponent,
    AddEditItemComponent,
    ListItemsComponent,
    DashboardComponent,
    HomeComponent,
    CategoriesComponent,
    ProductDetailsComponent,
    OrderComponent,
    MyAccountComponent,
    AddEditUserComponent,
    AddEditProductsComponent,
    AddEditCategoriesComponent,
    CategoryPreviewComponent,
    ProductPreviewComponent,
    UserPriviewComponent,
    ListCategoriesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AuthModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatGridListModule,
    MatSelectModule,
    
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true
  }],
  bootstrap: [AppComponent],
})
export class AppModule {}
