import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { CommonModule } from '@angular/common'

import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

// Material Components
import {
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatSelectModule,
  MatTableModule,
  MatTabsModule
} from '@angular/material'

import { SharedComponentsModule } from '../Shared/shared-components.module'

import { ManageUserMainComponent } from './containers/manage-user-main/manage-user-main.component'
import { UserAddComponent } from './components/user-add/user-add.component'
import { UserTableComponent } from './components/user-table/user-table.component'
import { UserUpdateComponent } from './components/user-update/user-update.component'

@NgModule({
  declarations: [
    ManageUserMainComponent,
    UserAddComponent,
    UserTableComponent,
    UserUpdateComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    // Material Components
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    MatTabsModule,
    SharedComponentsModule
  ],
  providers: [],
  exports: [
    ManageUserMainComponent
  ]
})
export class ManageUsersModule {}
