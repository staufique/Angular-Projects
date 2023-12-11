import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import {MatSliderModule} from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';@NgModule({



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatSliderModule,
    MatButtonModule
  ],
  exports:[
    LoginComponent
  ],
  providers: [],
  bootstrap: [LoginComponent]
})
export class UserAuthModule { }
