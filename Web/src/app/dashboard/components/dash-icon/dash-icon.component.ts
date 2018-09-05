import { Component, Input } from '@angular/core'

@Component({
  selector: 'component-dash-icon',
  templateUrl: './dash-icon.component.html',
  styleUrls: ['./dash-icon.component.css']
})
export class DashIconComponent {
  @Input() color: string
  @Input() icon: string
  @Input() hasBadge: false = false
  @Input() badgeText: string
  @Input() text: string
  @Input() url: string
}
