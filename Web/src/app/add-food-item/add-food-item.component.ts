import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Component, ElementRef, ViewChild } from '@angular/core'
import { ModalDialogboxComponent } from './../modal-dialogbox/modal-dialogbox.component'
import {NgbModal} from '@ng-bootstrap/ng-bootstrap'
import { Router } from '@angular/router'

@Component({
  selector: 'component-add-food-item',
  templateUrl: './add-food-item.component.html',
  styleUrls: ['./add-food-item.component.css']
})
export class AddFoodItemComponent {
  title = 'Food Monitoring:'
  subtitle = 'Add Food Item'
  isValidate = true

  fg: FormGroup

  // @ViewChild('form')
  // form: ElementRef

  itemNumberFormControl = new FormControl('', [
    Validators.required
  ])

  foodNameFormControl = new FormControl('', [
    Validators.required
  ])

  arrivalDateFormControl = new FormControl('', [
    Validators.required
  ])

  quantityMonitoredFormControl = new FormControl('', [
    Validators.required
  ])

  priceFormControl = new FormControl('', [
    Validators.required
  ])

  deviceSerialFormControl = new FormControl('', [
    Validators.required
  ])

  locationFormControl = new FormControl('', [
    Validators.required
  ])

  constructor(private modalService: NgbModal, public router: Router) {}

  open(popupTitle: string, content: string, button: string[]): void {
    const modalRef = this.modalService.open(ModalDialogboxComponent)
    modalRef.componentInstance.model = {
      title: popupTitle.valueOf(),
      content: content.valueOf(),
      buttons: button.values()
    }
  }

  checkRequiredFields(): void {
    const isFormErrored = this.itemNumberFormControl.errors
                    || this.foodNameFormControl.errors
                    || this.arrivalDateFormControl.errors
                    || this.quantityMonitoredFormControl.errors
                    || this.priceFormControl.errors
                    || this.deviceSerialFormControl.errors
                    || this.locationFormControl.errors

    // this.open('Remove Sensor?', 'Are you sure you want to delete the sensor?', ['Yes', 'No'])
    if (!isFormErrored) {
      this.router.navigate(['/food-monitor'])
        .catch(console.log)
    }
  }
}
