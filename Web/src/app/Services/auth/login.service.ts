import { Inject, Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { config } from '../../config'

import { LoginModel } from '../../Models/login.model'
import { TokenModel } from '../../Models/token.model'

@Injectable()
export class LoginService {
  constructor(
    @Inject(HttpClient)
    private http: HttpClient
  ) {}

  async login(loginModel: LoginModel): Promise<TokenModel> {
    const response = this.http.post<TokenModel>(
      `${config.baseApi}/token-auth`, loginModel
    )
    .toPromise()

    return response
  }
}
