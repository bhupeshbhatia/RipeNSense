import { Component, OnInit, ViewChild } from '@angular/core'
import { MatSort, MatSortable, MatTableDataSource } from '@angular/material'
import { format } from 'date-fns'

@Component({
  selector: 'component-ethylene-report-mobile',
  templateUrl: './ethylene-report-mobile.component.html',
  styleUrls: ['./ethylene-report-mobile.component.css']
})
export class EthyleneReportMobileComponent implements OnInit {

  displayedColumns = ['sensor', 'fruitId', 'timeStamp', 'expiryTime']
  ELEMENT_DATA: Element[] = [
    {
      sensor: 'Banana-A1-01', fruitId: 'Banana-01',
      timeStamp: this.createDate(1, 1), expiryTime: 5
    },
    {
      sensor: 'Banana-A1-01', fruitId: 'Banana-01',
      timeStamp: this.createDate(1, 1), expiryTime: 5
    },
    {
      sensor: 'Banana-A1-01', fruitId: 'Banana-01',
      timeStamp: this.createDate(1, 1), expiryTime: 5
    },
    {
      sensor: 'Banana-A1-01', fruitId: 'Banana-01',
      timeStamp: this.createDate(1, 1), expiryTime: 5
    },
    {
      sensor: 'Banana-A1-01', fruitId: 'Banana-01',
      timeStamp: this.createDate(1, 1), expiryTime: 5
    },
    {
      sensor: 'Banana-A1-01', fruitId: 'Banana-01',
      timeStamp: this.createDate(1, 1), expiryTime: 5
    }
  ]
  dataSource = new MatTableDataSource(this.ELEMENT_DATA)
  title = 'Ethylene Report: 1-Mar-18'

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
  sensor: string
  fruitId: string
  timeStamp: string
  expiryTime: number
}
