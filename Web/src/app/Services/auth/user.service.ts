import { Inject, Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import { Router } from '@angular/router'
import * as jwt_decode from 'jwt-decode'

import { LoginModel } from '../../Models/login.model'
import { TokenModel } from '../../Models/token.model'

import { LoginService } from './login.service'
import { RegistrationService } from './registration.service'

export const TOKEN_NAME = 'access_token'

@Injectable()
export class UserService {

  constructor(
    @Inject(Router)
    private router: Router,
    @Inject(LoginService)
    private loginService: LoginService,
    @Inject(RegistrationService)
    private registrationService: RegistrationService
  ) {}

  getToken = (): TokenModel => {
    return {
      access_token: localStorage.getItem(TOKEN_NAME)
    }
  }

  setToken = (token: TokenModel): void => {
    localStorage.setItem(TOKEN_NAME, token.access_token)
  }

  getTokenExpirationDate = (token: string): Date => {
    const decoded = jwt_decode(token)
    if (decoded.exp === undefined) {
      return undefined
    }
    const date = new Date(0)
    date.setUTCSeconds(decoded.exp)

    return date
  }

  isTokenExpired = (token?: string): boolean => {
    token = token || this.getToken().access_token
    if (!token) {
      return true
    }
    const date = this.getTokenExpirationDate(token)
    if (date) {
      return !(date.valueOf() > new Date().valueOf())
    }

    return false
  }

  isAuthenticated = (token?: string): boolean => {
    return !this.isTokenExpired(token)
  }

  logout = (): void  => {
    localStorage.removeItem(TOKEN_NAME)
    this.router.navigate(['/auth'])
      .catch(console.log)
  }

  login = async (loginModel: LoginModel): Promise<boolean> => {
    try {
      const loginResult = await this.loginService.login(loginModel)
      this.setToken(loginResult)
      this.router.navigate(['/'])
        .catch(console.log)

      return true
    }
    catch (e) {
      return false
    }
  }

  register = async (userModel: LoginModel): Promise<boolean> => {
    try {
      const loginResult = await this.registrationService.register(userModel)
      this.router.navigate(['/'])
        .catch(console.log)

      return true
    }
    catch (e) {
      return false
    }
  }

}
