import { GetHelpPageComponent } from './../../../get-help-page/get-help-page.component'
import { Component, OnInit } from '@angular/core'
import { MatIconModule, MatTooltipModule } from '@angular/material'
import { Router } from '@angular/router'

@Component({
  selector: 'component-menu-corporate-auth',
  templateUrl: './menu-corporate-auth.component.html',
  styleUrls: ['./menu-corporate-auth.component.css']
})
export class MenuCorporateAuthComponent {

  constructor(public router: Router) {}

  isNavbarCollapsed = true

  navigateToThisPage(goingTo: string): void {
    this.router.navigate([goingTo])
    .catch(console.log)
  }
}
