import { Component } from '@angular/core'

@Component({
  selector: 'component-corp-account-setting',
  templateUrl: './corp-account-setting.component.html',
  styleUrls: ['./corp-account-setting.component.css']
})
export class CorpAccountSettingComponent {

  isEmployee = true // Hide tab when user is employee

}
