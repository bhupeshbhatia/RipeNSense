import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { AppContainer } from './App/app.component'

import { DashboardComponent } from './dashboard/containers/dashboard/dashboard.component'
import { FoodMonitoringPageComponent } from './food-monitoring-page/food-monitoring-page.component'
import { AddFoodItemComponent } from './add-food-item/add-food-item.component'
import { UpdateFoodItemComponent } from './update-food-item/update-food-item.component'
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
import { AboutComponent } from './about/about.component'
import { AuthComponent } from './auth/containers/auth/auth.component'
import { ManageUserMainComponent } from './manage-users/containers/manage-user-main/manage-user-main.component'
import { GetHelpPageComponent } from './get-help-page/get-help-page.component'
import { ContactComponent } from './contact/contact.component'
import { CorpAccountSettingComponent } from './corp-account-setting/corp-account-setting.component'
import { StoreLocationPageComponent } from './store-location-page/store-location-page.component'

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'food-monitor',
    component: FoodMonitoringPageComponent
  },
  {
    path: 'update-food-item',
    component: UpdateFoodItemComponent
  },
  {
    path: 'add-food-item',
    component: AddFoodItemComponent
  },
  {
    path: 'warning',
    component: WarningsComponent
  },
  {
    path: 'flash-sale',
    component: FlashSalesComponent
  },
  {
    path: 'add-sale',
    component: AddFlashSaleComponent
  },
  {
    path: 'update-sale',
    component: UpdateFlashSaleComponent
  },
  {
    path: 'food-decision',
    component: FoodDecisionsComponent
  },
  {
    path: 'donate-food',
    component: DonateFoodPageComponent
  },
  {
    path: 'add-donate-food',
    component: AddDonationComponent
  },
  {
    path: 'dispose-food',
    component: DisposeFoodPageComponent
  },
  {
    path: 'food-item-disposal',
    component: AddDisposalComponent
  },
  {
    path: 'update-disposal',
    component: UpdateDisposalComponent
  },
  {
    path: 'stats',
    component: StatisticsComponent
  },
  {
    path: 'report-main',
    component: ReportMainComponent
  },
  {
    path: 'sensor-detailed',
    component: SensorReportComponent
  },
  {
    path: 'detailed-sensor-report',
    component: SensorDetailedReportComponent
  },
  {
    path: 'savings-detailed',
    component: SavingsReportComponent
  },
  {
    path: 'waste-details',
    component: WasteReportComponent
  },
  {
    path: 'ethylene-detail',
    component: EthyleneReportComponent
  },
  {
    path: 'update-donation',
    component: UpdateDonationComponent
  },
  {
    path: 'temperature-detail',
    component: TemperatureReportComponent
  },
  {
    path: 'savings-summary',
    component: SavingsSummaryComponent
  },
  {
    path: 'waste-summary',
    component: WasteSummaryComponent
  },
  {
    path: 'ethylene-summary',
    component: EthyleneSummaryComponent
  },
  {
    path: 'temp-summary',
    component: TemperatureSummaryComponent
  },
  {
    path: 'manage-user',
    component: ManageUserTableComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'add-user',
    component: ManageUserAddComponent
  },
  {
    path: 'update-user',
    component: ManageUserUpdateComponent
  },
  {
    path: 'history',
    component: HistoryComponent
  },
  {
    path: 'get-help',
    component: GetHelpPageComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'auth',
    component: AuthComponent
  },
  {
    path: 'manage-users',
    component: ManageUserMainComponent
  },
  {
    path: 'account-setting',
    component: CorpAccountSettingComponent
  },
  {
    path: 'store-locations',
    component: StoreLocationPageComponent
  },
  {
    path: '**',
    component: DashboardComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
