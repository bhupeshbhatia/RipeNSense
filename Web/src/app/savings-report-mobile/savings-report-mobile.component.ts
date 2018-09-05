import { Component, OnInit, ViewChild } from '@angular/core'
import { MatSort, MatSortable, MatTableDataSource } from '@angular/material'

@Component({
  selector: 'component-savings-report-mobile',
  templateUrl: './savings-report-mobile.component.html',
  styleUrls: ['./savings-report-mobile.component.css']
})
export class SavingsReportMobileComponent implements OnInit {
  displayedColumns = ['sensorNo', 'foodItemName', 'soldProduce', 'unsoldProduce', 'priceSaved']
  ELEMENT_DATA: Element[] = [
    {
      sensorNo: 'Banana-A1-01',
      foodItemName: 'Banana', soldProduce: 10, unsoldProduce: 10,
      priceSaved: 15
    },
    {
      sensorNo: 'Tomato-A1-01',
      foodItemName: 'Tomato', soldProduce: 10, unsoldProduce: 10,
      priceSaved: 15
    },
    {
      sensorNo: 'Orange-A1-01',
      foodItemName: 'Orange', soldProduce: 10, unsoldProduce: 10,
      priceSaved: 15
    },
    {
      sensorNo: 'Mango=A1-01',
      foodItemName: 'Mango', soldProduce: 10, unsoldProduce: 10,
      priceSaved: 15
    },
    {
      sensorNo: 'Peach-A1-01',
      foodItemName: 'Peach', soldProduce: 10, unsoldProduce: 10,
      priceSaved: 15
    },
    {
      sensorNo: 'Grapes-A1-01',
      foodItemName: 'Grapes', soldProduce: 10, unsoldProduce: 10,
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
}

export interface Element {
  sensorNo: string
  foodItemName: string
  soldProduce: number
  unsoldProduce: number
  priceSaved: number
}
