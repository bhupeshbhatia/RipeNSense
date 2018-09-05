import { Component, OnInit, ViewChild } from '@angular/core'
import { MatSort, MatSortable, MatTableDataSource } from '@angular/material'

@Component({
  selector: 'component-temperature-report-mobile',
  templateUrl: './temperature-report-mobile.component.html',
  styleUrls: ['./temperature-report-mobile.component.css']
})
export class TemperatureReportMobileComponent implements OnInit {

  displayedColumns = ['sensor', 'fruitId', 'temperature', 'humidity']
  ELEMENT_DATA: Element[] = [
    {
      sensor: 'Banana-A1-01', fruitId: 'Banana-01', temperature: 30.00, humidity: 40
    },
    {
      sensor: 'Banana-A1-01', fruitId: 'Banana-01', temperature: 30.00, humidity: 40
    },
    {
      sensor: 'Banana-A1-01', fruitId: 'Banana-01', temperature: 30.00, humidity: 40
    },
    {
      sensor: 'Banana-A1-01', fruitId: 'Banana-01', temperature: 30.00, humidity: 40
    },
    {
      sensor: 'Banana-A1-01', fruitId: 'Banana-01', temperature: 30.00, humidity: 40
    },
    {
      sensor: 'Banana-A1-01', fruitId: 'Banana-01', temperature: 30.00, humidity: 40
    }
  ]
  dataSource = new MatTableDataSource(this.ELEMENT_DATA)
  title = 'Temp./Humidity Report: 1-Mar-18'

  @ViewChild(MatSort) sort: MatSort

  /**
   * Set the sort after the view init since this component will
   * be able to query its view for the initialized sort.
   */
  ngOnInit(): void {
    this.dataSource.sort = this.sort
  }
}

export interface Element {
  sensor: string
  fruitId: string
  // timeStamp: Date
  temperature: number
  humidity: number
}
