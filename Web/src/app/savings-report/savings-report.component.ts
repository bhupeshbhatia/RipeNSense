import { Component, OnInit, ViewChild } from '@angular/core'
import { MatSort, MatSortable, MatTableDataSource } from '@angular/material'
import { format } from 'date-fns'

@Component({
  selector: 'component-savings-report',
  templateUrl: './savings-report.component.html',
  styleUrls: ['./savings-report.component.css']
})
export class SavingsReportComponent implements OnInit {

  displayedColumns = ['itemNo', 'sensorNo', 'installationDate', 'foodItemName',
                      'totalProduce', 'soldProduce', 'unsoldProduce', 'priceSaved']
  ELEMENT_DATA: Element[] = [
    {
      itemNo: 1, sensorNo: 'Banana-A1-01', installationDate: this.createDate(1, 1),
      foodItemName: 'Banana', totalProduce: 20, soldProduce: 10, unsoldProduce: 10,
      priceSaved: 15
    },
    {
      itemNo: 2, sensorNo: 'Tomato-A1-01', installationDate: this.createDate(1, 1),
      foodItemName: 'Tomato', totalProduce: 20, soldProduce: 10, unsoldProduce: 10,
      priceSaved: 15
    },
    {
      itemNo: 3, sensorNo: 'Orange-A1-01', installationDate: this.createDate(1, 1),
      foodItemName: 'Orange', totalProduce: 20, soldProduce: 10, unsoldProduce: 10,
      priceSaved: 15
    },
    {
      itemNo: 4, sensorNo: 'Mango=A1-01', installationDate: this.createDate(1, 1),
      foodItemName: 'Mango', totalProduce: 20, soldProduce: 10, unsoldProduce: 10,
      priceSaved: 15
    },
    {
      itemNo: 5, sensorNo: 'Peach-A1-01', installationDate: this.createDate(1, 1),
      foodItemName: 'Peach', totalProduce: 20, soldProduce: 10, unsoldProduce: 10,
      priceSaved: 15
    },
    {
      itemNo: 6, sensorNo: 'Grapes-A1-01', installationDate: this.createDate(1, 1),
      foodItemName: 'Grapes', totalProduce: 20, soldProduce: 10, unsoldProduce: 10,
      priceSaved: 15
    }
  ]
  dataSource = new MatTableDataSource(this.ELEMENT_DATA)
  title = 'Savings Report: 1-Mar-18'

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
  sensorNo: string
  installationDate: string
  foodItemName: string
  totalProduce: number
  soldProduce: number
  unsoldProduce: number
  priceSaved: number
}
