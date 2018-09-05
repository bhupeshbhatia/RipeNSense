import { Component, OnInit, ViewChild } from '@angular/core'
import { MatSort, MatSortable, MatTableDataSource } from '@angular/material'

@Component({
  selector: 'component-donate-food-page',
  templateUrl: './donate-food-page.component.html',
  styleUrls: ['./donate-food-page.component.css']
})
export class DonateFoodPageComponent implements OnInit {
  displayedColumns = ['itemNo', 'name', 'qtyDonated', 'donatedTo', 'date']
  ELEMENT_DATA: Element[] = [
    {
      itemNo: 100985922221, name: 'Black Plums', qtyDonated: 10, donatedTo: 'Food bank', date: '4/26/2018'
    },
    {
      itemNo: 199855226214, name: 'Florida Strawberries', qtyDonated: 12, donatedTo: 'Food bank', date: '4/24/2018'
    },
    {
      itemNo: 192120045223, name: 'Avocadoes', qtyDonated: 25, donatedTo: 'Food bank', date: '4/19/2018'
    },
    {
      itemNo: 185200255645, name: 'Mangoes', qtyDonated: 29, donatedTo: 'Homeless shelter', date: '4/19/2018'
    }
  ]
  dataSource = new MatTableDataSource(this.ELEMENT_DATA)
  title = 'Donate Food'

  @ViewChild(MatSort) sort: MatSort

  ngOnInit(): void {
    this.dataSource.sort = this.sort
  }
}
export interface Element {
  itemNo: number
  name: string
  qtyDonated: number
  donatedTo: string
  date: string
}
