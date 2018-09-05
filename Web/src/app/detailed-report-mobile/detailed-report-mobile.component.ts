import { Component, OnInit, ViewChild } from '@angular/core'
import { MatSort, MatSortable, MatTableDataSource } from '@angular/material'

@Component({
  selector: 'component-detailed-report-mobile',
  templateUrl: './detailed-report-mobile.component.html',
  styleUrls: ['./detailed-report-mobile.component.css']
})
export class DetailedReportMobileComponent implements OnInit {

  displayedColumns = ['sensor', 'maintenanceDate', 'maintenanceStatus', 'maintenancePersonnel']
  ELEMENT_DATA: Element[] = [
    {
      sensor: 'Apple-A1-01',
      maintenanceDate: new Date(2018, 2, 1), maintenanceStatus: 'OK',
      maintenancePersonnel: 'Brandon Boodhoo'
    },
    {
      sensor: 'Apple-A1-02',
      maintenanceDate: new Date(2018, 2, 2), maintenanceStatus: 'OK',
      maintenancePersonnel: 'Brandon Boodhoo'
    },
    {
      sensor: 'Apple-A1-03',
      maintenanceDate: new Date(2018, 2, 3), maintenanceStatus: 'REPLACE',
      maintenancePersonnel: 'Brandon Boodhoo'
    },
    {
      sensor: 'Apple-A1-04',
      maintenanceDate: new Date(2018, 2, 4), maintenanceStatus: 'OK',
      maintenancePersonnel: 'Brandon Boodhoo'
    },
    {
      sensor: 'Apple-A1-05',
      maintenanceDate: new Date(2018, 2, 5), maintenanceStatus: 'OK',
      maintenancePersonnel: 'Brandon Boodhoo'
    },
    {
      sensor: 'Apple-A1-06',
      maintenanceDate: new Date(2018, 2, 6), maintenanceStatus: 'CALIBRATE',
      maintenancePersonnel: 'Brandon Boodhoo'
    }
  ]
  dataSource = new MatTableDataSource(this.ELEMENT_DATA)
  title = 'Detailed Sensor Report: 1-Mar-18'

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
  maintenanceDate: Date
  maintenanceStatus: string
  maintenancePersonnel: string
}
