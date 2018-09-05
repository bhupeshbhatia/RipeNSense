import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { CommonModule } from '@angular/common'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

// Material Components
import {
  MatIconModule,
  MatMenuModule
} from '@angular/material'

import { NavbarComponent } from './containers/navbar.component'
import { NavbarLogoComponent } from './components/navbar-logo/navbar-logo.component'

import {
  MenuCorporateAuthComponent
} from './components/menu-corporate-auth/menu-corporate-auth.component'
import {
  MenuEmployeeAuthComponent
} from './components/menu-employee-auth/menu-employee-auth.component'
import {
  MenuNoAuthComponent
} from './components/menu-no-auth/menu-no-auth.component'

@NgModule({
  declarations: [
    NavbarComponent,
    MenuCorporateAuthComponent,
    MenuEmployeeAuthComponent,
    MenuNoAuthComponent,
    NavbarLogoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    NgbModule.forRoot(),
    // Material Components Here
    MatIconModule,
    MatMenuModule
  ],
  providers: [],
  exports: [NavbarComponent]
})
export class NavbarModule {}
