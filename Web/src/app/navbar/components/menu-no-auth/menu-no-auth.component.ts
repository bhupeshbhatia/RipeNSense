import { Component } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'component-menu-no-auth',
  templateUrl: './menu-no-auth.component.html',
  styleUrls: ['./menu-no-auth.component.css']
})
export class MenuNoAuthComponent {
  isNavbarCollapsed = true

  constructor(public router: Router) {}

  navigateToThisPage(goingTo: string): void {
    this.router.navigate([goingTo])
    .catch(console.log)
  }
}
