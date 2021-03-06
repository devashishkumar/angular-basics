import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { SitenavComponent } from './sitenav/sitenav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormHandlingComponent } from './form-handling/form-handling.component';
import { FormsModule } from '@angular/forms';
import { UsersModule } from './users/users.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    NotfoundComponent,
    SitenavComponent,
    DashboardComponent,
    FormHandlingComponent
  ],
  imports: [
    UsersModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
