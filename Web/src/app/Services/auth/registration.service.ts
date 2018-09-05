import { Inject, Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { config } from '../../config'

import { TokenModel } from '../../Models/token.model'
import { LoginModel } from '../../Models/login.model'

@Injectable()
export class RegistrationService {
  constructor(
    @Inject(HttpClient)
    private http: HttpClient
  ) {}

  async register(userModel: LoginModel): Promise<TokenModel> {
    const response = this.http.post<TokenModel>(
      `${config.baseApi}/register`, userModel
    )
    .toPromise()

    return response
  }
}
