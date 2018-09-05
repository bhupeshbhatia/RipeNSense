import { Component, OnInit, ViewChild } from '@angular/core'
import { MatSort, MatSortable, MatTableDataSource } from '@angular/material'
import { format } from 'date-fns'

@Component({
  selector: 'component-temperature-report',
  templateUrl: './temperature-report.component.html',
  styleUrls: ['./temperature-report.component.css']
})
export class TemperatureReportComponent implements OnInit {

  displayedColumns = ['itemNo', 'sensor', 'fruitId',
    'timeStamp', 'temperature', 'status', 'humidity']
  ELEMENT_DATA: Element[] = [
    {
      itemNo: 1, sensor: 'Banana-A1-01', fruitId: 'Banana-01',
      timeStamp: this.createDate(1, 1), temperature: 30.00, status: 'Normal', humidity : 40
    },
    {
      itemNo: 2, sensor: 'Banana-A1-01', fruitId: 'Banana-01',
      timeStamp: this.createDate(1, 1), temperature: 30.00, status: 'Normal', humidity: 40
    },
    {
      itemNo: 3, sensor: 'Banana-A1-01', fruitId: 'Banana-01',
      timeStamp: this.createDate(1, 1), temperature: 30.00, status: 'Normal', humidity: 40
    },
    {
      itemNo: 4, sensor: 'Banana-A1-01', fruitId: 'Banana-01',
      timeStamp: this.createDate(1, 1), temperature: 30.00, status: 'Normal', humidity: 40
    },
    {
      itemNo: 5, sensor: 'Banana-A1-01', fruitId: 'Banana-01',
      timeStamp: this.createDate(1, 1), temperature: 30.00, status: 'Normal', humidity: 40
    },
    {
      itemNo: 6, sensor: 'Banana-A1-01', fruitId: 'Banana-01',
      timeStamp: this.createDate(1, 1), temperature: 30.00, status: 'Normal', humidity: 40
    }
  ]
  dataSource = new MatTableDataSource(this.ELEMENT_DATA)
  title = 'Temperature/Humidity Report: 1-Mar-18'

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
  itemNo: number
  sensor: string
  fruitId: string
  timeStamp: string
  temperature: number
  status: string
  humidity: number
}
