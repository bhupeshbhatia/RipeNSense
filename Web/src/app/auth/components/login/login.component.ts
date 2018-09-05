import { Component, Inject } from '@angular/core'
import { FormControl, Validators } from '@angular/forms'

import { UserService } from './../../../Services/auth/user.service'

@Component({
  selector: 'component-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formControls = {
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(20)
    ]),
    password: new FormControl('', [
      Validators.required
    ])
  }

  isPasswordInputVisible = false
    loginModel = {
      username: '',
      password: ''
    }

  isLoginFailed = false

  constructor(
    @Inject(UserService)
    private userService: UserService
  ) {}

  login = async (): Promise<boolean> => {
    const isFormErrored = Object.keys(this.formControls)
                          .some(c => !!(this.formControls[c].errors))

    if (!isFormErrored) {
      this.isLoginFailed = !await this.userService
                                  .login(this.loginModel)

      return true
    }

    return !this.isLoginFailed
  }
}
