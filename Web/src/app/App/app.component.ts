import { Component, Inject, Input } from '@angular/core'

import { UserService } from '../Services/auth/user.service'

@Component({
  selector: 'component-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppContainer {

  constructor(
    @Inject(UserService)
    private userService: UserService
  ) {}

  isAuthenticated = this.userService.isAuthenticated

}
