import { RegistrationService } from './Services/auth/registration.service'
import { LoginService } from './Services/auth/login.service'
import { RegistrationComponent } from './auth/components/registration/registration.component'
import { LoginComponent } from './auth/components/login/login.component'
import { UserService } from './Services/auth/user.service'
// Core Imports
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { CommonModule } from '@angular/common'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

// Material Components Here
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatSelectModule,
  MatSlideToggleModule,
  MatTableModule,
  MatTabsModule,
  MatTooltipModule

} from '@angular/material'

// Font-Awesome
import fontawesome from '@fortawesome/fontawesome'
import {
  faLemon
} from '@fortawesome/fontawesome-free-solid'

import { AppRoutingModule } from './app-routing.module'

import { AppContainer } from './App/app.component'

import { FoodMonitoringPageComponent } from './food-monitoring-page/food-monitoring-page.component'
import { AddFoodItemComponent } from './add-food-item/add-food-item.component'
import { UpdateFoodItemComponent } from './update-food-item/update-food-item.component'
import { CorpAccountSettingComponent } from './corp-account-setting/corp-account-setting.component'
import { AccountTabComponent } from './account-tab/account-tab.component'
import { PasswordTabComponent } from './password-tab/password-tab.component'
import { SensorTabComponent } from './sensor-tab/sensor-tab.component'
import { ModalDialogboxComponent } from './modal-dialogbox/modal-dialogbox.component'
import { WarningsComponent } from './warnings/warnings.component'
import { FlashSalesComponent } from './flash-sales/flash-sales.component'
import { AddFlashSaleComponent } from './add-flash-sale/add-flash-sale.component'
import { UpdateFlashSaleComponent } from './update-flash-sale/update-flash-sale.component'
import { FoodDecisionsComponent } from './food-decisions/food-decisions.component'
import { DonateFoodPageComponent } from './donate-food-page/donate-food-page.component'
import { DisposeFoodPageComponent } from './dispose-food-page/dispose-food-page.component'
import { AddDonationComponent } from './add-donation/add-donation.component'
import { UpdateDonationComponent } from './update-donation/update-donation.component'
import { AddDisposalComponent } from './add-disposal/add-disposal.component'
import { UpdateDisposalComponent } from './update-disposal/update-disposal.component'
import { StatisticsComponent } from './statistics/statistics.component'
import { ReportMainComponent } from './report-main/report-main.component'
import { SensorDetailedReportComponent } from './sensor-detailed-report/sensor-detailed-report.component'
import { DetailedReportMobileComponent } from './detailed-report-mobile/detailed-report-mobile.component'
import { SensorReportComponent } from './sensor-report/sensor-report.component'
import { SavingsReportComponent } from './savings-report/savings-report.component'
import { SavingsReportMobileComponent } from './savings-report-mobile/savings-report-mobile.component'
import { WasteReportComponent } from './waste-report/waste-report.component'
import { WasteReportMobileComponent } from './waste-report-mobile/waste-report-mobile.component'
import { EthyleneReportComponent } from './ethylene-report/ethylene-report.component'
import { EthyleneReportMobileComponent } from './ethylene-report-mobile/ethylene-report-mobile.component'
import { StatisticsMobileComponent } from './statistics-mobile/statistics-mobile.component'
import { TemperatureReportComponent } from './temperature-report/temperature-report.component'
import { TemperatureReportMobileComponent } from './temperature-report-mobile/temperature-report-mobile.component'
import { SavingsSummaryComponent } from './savings-summary/savings-summary.component'
import { WasteSummaryComponent } from './waste-summary/waste-summary.component'
import { EthyleneSummaryComponent } from './ethylene-summary/ethylene-summary.component'
import { TemperatureSummaryComponent } from './temperature-summary/temperature-summary.component'
import { ManageUserAddComponent } from './manage-user-add/manage-user-add.component'
import { ManageUserTableComponent } from './manage-user-table/manage-user-table.component'
import { ManageUserUpdateComponent } from './manage-user-update/manage-user-update.component'
import { HistoryComponent } from './history/history.component'
import { ContactComponent } from './contact/contact.component'
import { AboutComponent } from './about/about.component'
import { ServiceModules } from './Services/service.modules.index'
import { SharedComponentsModule } from './Shared/shared-components.module'
import { AuthModule } from './auth/auth.module'
import { DashboardModule } from './dashboard/dashboard.module'
import { FooterModule } from './footer/footer.module'
import { ManageUsersModule } from './manage-users/manage-users.module'
import { NavbarModule } from './navbar/navbar.module'
import { GetHelpPageComponent } from './get-help-page/get-help-page.component'
import { StoreLocationPageComponent } from './store-location-page/store-location-page.component'
// import { MenuNoAuthComponent } from './navbar/components/menu-no-auth/menu-no-auth.component'
// import { MenuEmployeeAuthComponent } from './navbar/components/menu-employee-auth/menu-employee-auth.component'
// import { MenuCorporateAuthComponent } from './navbar/components/menu-corporate-auth/menu-corporate-auth.component'
// import { NavbarLogoComponent } from './navbar/components/navbar-logo/navbar-logo.component'
// import { UserPermissionsComponent } from './user-permissions/user-permissions.component'
// import { UserPermissionsPageComponent } from './user-permissions-page/user-permissions-page.component'
// import { DashIconComponent } from './dashboard/components/dash-icon/dash-icon.component'
// Add Font-Awesome being used icons here
fontawesome.library.add(
  faLemon
)

@NgModule({
  declarations: [
    AppContainer,
    FoodMonitoringPageComponent,
    AddFoodItemComponent,
    UpdateFoodItemComponent,
    CorpAccountSettingComponent,
    AccountTabComponent,
    PasswordTabComponent,
    SensorTabComponent,
    ModalDialogboxComponent,
    WarningsComponent,
    FlashSalesComponent,
    AddFlashSaleComponent,
    UpdateFlashSaleComponent,
    FoodDecisionsComponent,
    DonateFoodPageComponent,
    DisposeFoodPageComponent,
    AddDonationComponent,
    UpdateDonationComponent,
    AddDisposalComponent,
    UpdateDisposalComponent,
    ReportMainComponent,
    StatisticsComponent,
    SensorDetailedReportComponent,
    DetailedReportMobileComponent,
    SensorReportComponent,
    SavingsReportComponent,
    SavingsReportMobileComponent,
    WasteReportComponent,
    WasteReportMobileComponent,
    EthyleneReportComponent,
    EthyleneReportMobileComponent,
    StatisticsMobileComponent,
    TemperatureReportComponent,
    TemperatureReportMobileComponent,
    SavingsSummaryComponent,
    WasteSummaryComponent,
    EthyleneSummaryComponent,
    TemperatureSummaryComponent,
    ManageUserAddComponent,
    ManageUserTableComponent,
    ManageUserUpdateComponent,
    HistoryComponent,
    ContactComponent,
    AboutComponent,
    GetHelpPageComponent,
    StoreLocationPageComponent
    // MenuEmployeeAuthComponent,
    // MenuNoAuthComponent
    // MenuCorporateAuthComponent,
    // NavbarLogoComponent
    // UserPermissionsComponent,
    // UserPermissionsPageComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CommonModule,
    // Dev Modules
    DashboardModule,
    FooterModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    // Material Components Here
    MatCardModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatSelectModule,
    MatTableModule,
    MatTabsModule,
    MatTooltipModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatChipsModule,
    ...ServiceModules,
    SharedComponentsModule,
    // Dev Modules
    AuthModule,
    ManageUsersModule,
    NavbarModule

  ],
  providers: [
    UserService,
    LoginService,
    RegistrationService
  ],
  entryComponents: [
    ModalDialogboxComponent,
    UpdateFoodItemComponent,
    UpdateFlashSaleComponent
  ],
  bootstrap: [AppContainer]
})
export class AppModule {}
