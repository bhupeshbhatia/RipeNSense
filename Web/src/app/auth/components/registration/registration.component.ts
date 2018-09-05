import { Component } from '@angular/core'
import { FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'component-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  companyNameFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(5),
    Validators.maxLength(20)
  ])

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ])
}
