import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { HomeRoutingModule } from './home-routing.module';
import { FormsModule } from '@angular/forms';
import { MessageErrorModule } from '../generic/message-error/message-error.module';

@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent,
    CreateAccountComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    MessageErrorModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
