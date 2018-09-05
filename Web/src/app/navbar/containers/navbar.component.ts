import { Component, Input } from '@angular/core'

@Component({
  selector: 'component-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Input() authLevel: number
}
