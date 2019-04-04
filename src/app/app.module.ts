import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { UserModule } from './user/user.module';
import { CustomerModule } from './customer/customer.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [ AppComponent ],
  imports: [ 
    BrowserModule, 
    UserModule,
    CustomerModule,
    /* AppRoutingModule 등록 */
    AppRoutingModule
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }