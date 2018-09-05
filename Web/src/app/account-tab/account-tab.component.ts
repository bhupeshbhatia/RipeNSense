import { Component } from '@angular/core'

@Component({
  selector: 'component-account-tab',
  templateUrl: './account-tab.component.html',
  styleUrls: ['./account-tab.component.css']
})
export class AccountTabComponent {
  username_label = 'Username'
  email_label = 'Email'
  name_label = 'Name'
  account_type_label = 'Account Type'

  username_value = 'martha.smith'
  email_value = 'martha.smith@gmail.com'
  name_value = 'Martha Smith'
  account_type_value = 'Manager'
}
