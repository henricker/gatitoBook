import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent,
    CreateAccountComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
