import { Component, OnInit, ViewChild } from '@angular/core'
import { MatSort, MatSortable, MatTableDataSource } from '@angular/material'
import { format } from 'date-fns'

@Component({
  selector: 'component-ethylene-report',
  templateUrl: './ethylene-report.component.html',
  styleUrls: ['./ethylene-report.component.css']
})
export class EthyleneReportComponent implements OnInit {

  displayedColumns = ['id', 'sensor', 'fruitId', 'ethyleneReleased',
    'timeStamp', 'status', 'expiryTime']
  ELEMENT_DATA: Element[] = [
    {
      id: 1, sensor: 'Banana-A1-01', fruitId: 'Banana-01',
      ethyleneReleased: 50, timeStamp: this.createDate(1, 1), status: 'Normal', expiryTime: 5
    },
    {
      id: 1, sensor: 'Banana-A1-01', fruitId: 'Banana-01',
      ethyleneReleased: 50, timeStamp: this.createDate(2, 1), status: 'Normal', expiryTime: 5
    },
    {
      id: 1, sensor: 'Banana-A1-01', fruitId: 'Banana-01',
      ethyleneReleased: 50, timeStamp: this.createDate(3, 1), status: 'Normal', expiryTime: 5
    },
    {
      id: 1, sensor: 'Banana-A1-01', fruitId: 'Banana-01',
      ethyleneReleased: 50, timeStamp: this.createDate(4, 1), status: 'Normal', expiryTime: 5
    },
    {
      id: 1, sensor: 'Banana-A1-01', fruitId: 'Banana-01',
      ethyleneReleased: 50, timeStamp: this.createDate(5, 1), status: 'Normal', expiryTime: 5
    },
    {
      id: 1, sensor: 'Banana-A1-01', fruitId: 'Banana-01',
      ethyleneReleased: 50, timeStamp: this.createDate(6, 1), status: 'Normal', expiryTime: 5
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
  id: number
  sensor: string
  fruitId: string
  ethyleneReleased: number
  timeStamp: string
  status: string
  expiryTime: number
}
