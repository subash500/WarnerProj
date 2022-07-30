import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { loginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';



@NgModule({
  declarations: [
    AppComponent,
    loginComponent,
    HomeComponent,
 
   
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
    MaterialModule
    
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
