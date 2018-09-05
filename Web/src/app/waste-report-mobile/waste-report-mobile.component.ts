import { Component, OnInit, ViewChild } from '@angular/core'
import { MatSort, MatSortable, MatTableDataSource } from '@angular/material'

@Component({
  selector: 'component-waste-report-mobile',
  templateUrl: './waste-report-mobile.component.html',
  styleUrls: ['./waste-report-mobile.component.css']
})
export class WasteReportMobileComponent implements OnInit {
  displayedColumns = ['sensorNo', 'foodItemName', 'wastedProduce', 'unsoldProduce', 'priceSaved']
  ELEMENT_DATA: Element[] = [
    {
      sensorNo: 'Banana-A1-01',
      foodItemName: 'Banana', wastedProduce: 10, unsoldProduce: 10,
      priceSaved: 15
    },
    {
      sensorNo: 'Tomato-A1-01',
      foodItemName: 'Tomato', wastedProduce: 10, unsoldProduce: 10,
      priceSaved: 15
    },
    {
      sensorNo: 'Orange-A1-01',
      foodItemName: 'Orange', wastedProduce: 10, unsoldProduce: 10,
      priceSaved: 15
    },
    {
      sensorNo: 'Mango=A1-01',
      foodItemName: 'Mango', wastedProduce: 10, unsoldProduce: 10,
      priceSaved: 15
    },
    {
      sensorNo: 'Peach-A1-01',
      foodItemName: 'Peach', wastedProduce: 10, unsoldProduce: 10,
      priceSaved: 15
    },
    {
      sensorNo: 'Grapes-A1-01',
      foodItemName: 'Grapes', wastedProduce: 10, unsoldProduce: 10,
      priceSaved: 15
    }
  ]
  dataSource = new MatTableDataSource(this.ELEMENT_DATA)
  title = 'Food Waste Report: 1-Mar-18'

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
  wastedProduce: number
  unsoldProduce: number
  priceSaved: number
}
