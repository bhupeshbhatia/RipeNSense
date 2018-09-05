import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { CommonModule } from '@angular/common'

import {HttpClientModule} from '@angular/common/http'

import { LoginService } from './login.service'
import { RegistrationService } from './registration.service'
import { UserService } from './user.service'

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [
    LoginService,
    RegistrationService,
    UserService
  ]
})
export class AuthServiceModule {}
