import { Component } from '@angular/core'
import {FormControl} from '@angular/forms'

@Component({
  selector: 'component-update-flash-sale',
  templateUrl: './update-flash-sale.component.html',
  styleUrls: ['./update-flash-sale.component.css']
})
export class UpdateFlashSaleComponent {
  title = 'Flash Sale:'
  subtitle = 'Update Flash Sale'

  date1 = new FormControl(new Date('4/26/2018'))
  date2 = new FormControl(new Date('4/27/2018'))
}
