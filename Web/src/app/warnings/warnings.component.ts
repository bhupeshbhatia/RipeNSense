import { Component, OnInit, ViewChild } from '@angular/core'
import { MatSort, MatSortable, MatTableDataSource } from '@angular/material'
import { format } from 'date-fns'

@Component({
  selector: 'component-warnings',
  templateUrl: './warnings.component.html',
  styleUrls: ['./warnings.component.css']
})
export class WarningsComponent implements OnInit {
  displayedColumns = ['date', 'time', 'warning']
  ELEMENT_DATA: Element[] = [
    {date: this.createDate(6, 7), time: '6:15 pm', warning: 'Asian pears in Aisle 1 - Box 4 are expiring tomorrow.'},
    {date: this.createDate(6, 7), time: '11:47 am', warning: 'Ripe&Sense (RS784KD) in Aisle 2 - Box 3 is not connected.'},
    {date: this.createDate(6, 7), time: '10:06 am', warning: 'Temperature and humidity around Aisle 4 - Box 7 is too high.'},
    {date: this.createDate(5, 31), time: '5:37 pm', warning: 'Apples in Aisle 2 - Box 6 are ripening too fast.'},
    {date: this.createDate(5, 31), time: '9:26 am', warning: 'Plums in Aisle 1 - Box 3 are expiring in 3 days.'},
    {date: this.createDate(5, 31), time: '8:04 am', warning: 'Peaches in Aisle 1 - Box 2 are expiring in 2 days.'}
  ]
  dataSource = new MatTableDataSource(this.ELEMENT_DATA)
  title = 'Warnings'
  noOfWarnings = '6'

  @ViewChild(MatSort) sort: MatSort

  /**
   * Set the sort after the view init since this component will
   * be able to query its view for the initialized sort.
   */
  ngOnInit(): void {
    this.dataSource.sort = this.sort
  }

  createDate(dayOfTheMonth: number, monthOfTheYear: number): string {
    return  format(new Date(2018, monthOfTheYear, dayOfTheMonth), 'DD/MMM/YYYY')
  }
}
export interface Element {
  date: string
  time: string
  warning: string
}
