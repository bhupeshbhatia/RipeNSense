import { Component, Inject } from '@angular/core'
import { MatSort, MatSortable, MatTableDataSource } from '@angular/material'
import { Router } from '@angular/router'

const ELEMENT_DATA: Element[] = [
  {storeNumber: 100, storeName: 'Sobeys Front Street', storeAddress: '784 Front Street, Toronto, ON, M5K 6L9 Canada'},
  {storeNumber: 101, storeName: 'Sobeys Front Street', storeAddress: '784 Front Street, Toronto, ON, M5K 6L9 Canada'},
  {storeNumber: 102, storeName: 'Sobeys Front Street', storeAddress: '784 Front Street, Toronto, ON, M5K 6L9 Canada'},
  {storeNumber: 103, storeName: 'Sobeys Front Street', storeAddress: '784 Front Street, Toronto, ON, M5K 6L9 Canada'},
  {storeNumber: 104, storeName: 'Sobeys Front Street', storeAddress: '784 Front Street, Toronto, ON, M5K 6L9 Canada'}
]

export interface Element {
  storeNumber: number
  storeName: String
  storeAddress: String
}

@Component({
  selector: 'component-store-location-page',
  templateUrl: './store-location-page.component.html',
  styleUrls: ['./store-location-page.component.css']
})
export class StoreLocationPageComponent {
  displayedColumns = [
    'storeNumber',
    'storeName',
    'storeAddress'
  ]
  dataSource = ELEMENT_DATA
  hasRequestFailed = false
  title = 'Store Locations'

  constructor(@Inject(Router) private router: Router) {}

  onSelectedRow(row): void {
    this.router.navigate(['./dashboard'])
    .catch(() => this.hasRequestFailed = true)
  }
}
