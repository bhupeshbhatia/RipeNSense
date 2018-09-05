import { Component, OnInit } from '@angular/core'
import { MatIconModule, MatTooltipModule } from '@angular/material'
import { Router } from '@angular/router'

@Component({
  selector: 'component-menu-employee-auth',
  templateUrl: './menu-employee-auth.component.html',
  styleUrls: ['./menu-employee-auth.component.css']
})
export class MenuEmployeeAuthComponent {
  isNavbarCollapsed = true

  constructor(public router: Router) {}

  navigateToThisPage(goingTo: string): void {
    this.router.navigate([goingTo])
    .catch(console.log)
  }
}
