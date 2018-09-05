import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from '../app-routing.module'

// Font-Awesome
import fontawesome from '@fortawesome/fontawesome'
import {
  faBolt,
  faChartLine,
  faCheckCircle,
  faExclamationTriangle,
  faFileAlt,
  faHistory,
  faLemon,
  faUsers
} from '@fortawesome/fontawesome-free-solid'

// Material Components
import {
  MatCardModule,
  MatChipsModule
} from '@angular/material'

import { DashIconComponent } from './components/dash-icon/dash-icon.component'
import { DashboardComponent } from './containers/dashboard/dashboard.component'
import { EmployeeDashboardComponent } from './containers/employee-dashboard/employee-dashboard.component'

// Add Font-Awesome being used icons here
fontawesome.library.add(
  faBolt,
  faChartLine,
  faCheckCircle,
  faExclamationTriangle,
  faFileAlt,
  faHistory,
  faLemon,
  faUsers
)

@NgModule({
  declarations: [
    DashboardComponent,
    DashIconComponent,
    EmployeeDashboardComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    MatCardModule,
    MatChipsModule
  ],
  providers: [],
  exports: [
    DashboardComponent,
    EmployeeDashboardComponent
  ]
})
export class DashboardModule {}
