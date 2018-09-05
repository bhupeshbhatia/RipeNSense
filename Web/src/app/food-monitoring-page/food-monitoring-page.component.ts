import { Component, OnInit, ViewChild } from '@angular/core'
import { MatSort, MatSortable, MatTableDataSource } from '@angular/material'

@Component({
  selector: 'component-food-monitoring-page',
  templateUrl: './food-monitoring-page.component.html',
  styleUrls: ['./food-monitoring-page.component.css']
})
export class FoodMonitoringPageComponent implements OnInit {
  displayedColumns = ['item', 'name', 'location', 'status', 'expiry']
  ELEMENT_DATA: Element[] = [
    {item: 19901235464, name: 'Granny Smith Apples', location: 'Aisle 1 - Box 1', status: '', expiry: '30/04/2018'},
    {item: 10012348567, name: 'Red Delicious Apples', location: 'Aisle 1 - Box 2', status: '', expiry: '30/04/2018'},
    {item: 11248665345, name: 'Asian Pears', location: 'Aisle 1 - Box 3', status: '', expiry: '30/04/2018'},
    {item: 10023854647, name: 'Black Plums', location: 'Aisle 1 - Box 4', status: '', expiry: '05/05/2018'},
    {item: 11457893275, name: 'Brazilian Avocado', location: 'Aisle 2 - Box 1', status: '', expiry: '05/05/2018'},
    {item: 10000247567, name: 'California Oranges', location: 'Aisle 2 - Box 2', status: '', expiry: '07/05/2018'}
  ]

  dataSource = new MatTableDataSource(this.ELEMENT_DATA)
  title = 'Food Monitoring'

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
  name: string
  item: number
  location: string
  status: string
  expiry: string
}
