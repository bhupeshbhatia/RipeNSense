import { Component, OnInit, ViewChild } from '@angular/core'
import { MatSort, MatSortable, MatTableDataSource } from '@angular/material'

@Component({
  selector: 'component-flash-sales',
  templateUrl: './flash-sales.component.html',
  styleUrls: ['./flash-sales.component.css']
})
export class FlashSalesComponent implements OnInit {
  displayedColumns = ['item', 'name', 'orgPrice', 'salePrice', 'startDate', 'endDate']
  ELEMENT_DATA: Element[] = [
    {
      item: 19901235464,
      name: 'Granny Smith Apples',
      orgPrice: '$1.26 per lbs',
      salePrice: '$0.99 per lbs',
      startDate: '26/04/2018',
      endDate: '27/04/2018'
    },
    {
      item: 10012348567,
      name: 'Red Delicious Apples',
      orgPrice: '$1.67 per lbs',
      salePrice: '$0.99 per lbs',
      startDate: '26/04/2018',
      endDate: '27/04/2018'
    },
    {
      item: 11248665345,
      name: 'Asian Pears',
      orgPrice: '$2.96 per lbs',
      salePrice: '$1.50 per lbs',
      startDate: '26/04/2018',
      endDate: '27/04/2018'
    }
  ]

  dataSource = new MatTableDataSource(this.ELEMENT_DATA)
  title = 'Flash Sales'

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
  item: number
  name: string
  orgPrice: string
  salePrice: string
  startDate: string
  endDate: string
}
