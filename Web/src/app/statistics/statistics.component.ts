import { FlashSalesComponent } from './../flash-sales/flash-sales.component'
import { Component, Input } from '@angular/core'

@Component({
  selector: 'component-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent {

  title = 'Statistics'

  foods = [
    {value: 'apple-0', viewValue: 'Apple-01'},
    {value: 'Banana-1', viewValue: 'Banana-01'},
    {value: 'Orange-2', viewValue: 'Orange-01'}
  ]

  dates = [
    {value: 'today-0', viewValue: 'Today'},
    {value: 'week-1', viewValue: 'Week'},
    {value: 'two-weeks-2', viewValue: 'Two weeks'},
    {value: 'month-3', viewValue: 'Month'},
    {value: 'three-months-4', viewValue: 'Three months'},
    {value: 'six-months-5', viewValue: 'Six months'},
    {value: 'one-year-6', viewValue: 'One year'}
  ]

  checked = false
  indeterminate = false
  align = 'start'
  disabled = false
}
