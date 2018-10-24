import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CustomerService } from './services/customer.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { HeaderComponent } from './header/header.component';
import {RouterModule} from '@angular/router';
import { ContactComponent } from './contact/contact.component';


@NgModule({
   declarations: [
      AppComponent,
      CustomerComponent,
      HeaderComponent,
      ContactComponent
   ],
   imports: [
      FormsModule,
      BrowserModule,
      HttpClientModule,
      AppRoutingModule
   ],
   providers: [
      CustomerService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
