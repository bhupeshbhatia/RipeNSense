import { Component, OnInit, ViewChild } from '@angular/core'
import { MatSort, MatSortable, MatTableDataSource } from '@angular/material'
import { format } from 'date-fns'

@Component({
  selector: 'component-sensor-detailed-report',
  templateUrl: './sensor-detailed-report.component.html',
  styleUrls: ['./sensor-detailed-report.component.css']
})
export class SensorDetailedReportComponent implements OnInit {
''
  displayedColumns = ['sensor', 'dateInstalled', 'maintenanceDate', 'maintenanceStatus', 'maintenancePersonnel', 'sensorReplaced', 'reason']
  ELEMENT_DATA: Element[] = [
    { sensor: 'Apple-A1-01', dateInstalled: this.createDate(1, 1), maintenanceDate: this.createDate(1, 2), maintenanceStatus: 'OK',
      maintenancePersonnel: 'Brandon Boodhoo', sensorReplaced: 'No', reason: ''  },
      { sensor: 'Apple-A1-02', dateInstalled: this.createDate(2, 1), maintenanceDate: this.createDate(2, 2), maintenanceStatus: 'OK',
      maintenancePersonnel: 'Brandon Boodhoo', sensorReplaced: 'No', reason: ''  },
    { sensor: 'Apple-A1-03', dateInstalled: this.createDate(3, 1), maintenanceDate: this.createDate(3, 2), maintenanceStatus: 'REPLACE',
      maintenancePersonnel: 'Brandon Boodhoo', sensorReplaced: 'Yes', reason: 'Mot Working'  },
    { sensor: 'Apple-A1-04', dateInstalled: this.createDate(4, 1), maintenanceDate: this.createDate(4, 2), maintenanceStatus: 'OK',
      maintenancePersonnel: 'Brandon Boodhoo', sensorReplaced: 'No', reason: ''  },
    { sensor: 'Apple-A1-05', dateInstalled: this.createDate(5, 1), maintenanceDate: this.createDate(5, 2), maintenanceStatus: 'OK',
      maintenancePersonnel: 'Brandon Boodhoo', sensorReplaced: 'No', reason: ''  },
    { sensor: 'Apple-A1-06', dateInstalled: this.createDate(6, 1), maintenanceDate: this.createDate(6, 2), maintenanceStatus: 'CALIBRATE',
      maintenancePersonnel: 'Brandon Boodhoo', sensorReplaced: 'Yes', reason: 'Not Working'  }
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

  createDate(dayOfTheMonth: number, monthOfTheYear: number): string {
    return  format(new Date(2018, monthOfTheYear, dayOfTheMonth), 'DD/MMM/YYYY')
  }
}
export interface Element {
  sensor: string
  dateInstalled: string
  maintenanceDate: string
  maintenanceStatus: string
  maintenancePersonnel: string
  sensorReplaced: string
  reason: string
}
