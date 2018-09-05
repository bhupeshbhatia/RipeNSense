import { Router } from '@angular/router'
import { Component, Input } from '@angular/core'

@Component({
  selector: 'component-navbar-logo',
  templateUrl: './navbar-logo.component.html',
  styleUrls: ['./navbar-logo.component.css']
})
export class NavbarLogoComponent {
  @Input() src = '/static/logo.png'

  constructor(public router: Router) {}

  navigateToThisPage(goingTo: string): void {
    this.router.navigate([goingTo])
    .catch(console.log)
  }
}
