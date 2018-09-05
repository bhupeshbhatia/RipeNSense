import { Component, OnInit, ViewChild } from '@angular/core'
import { MatSort, MatSortable, MatTableDataSource } from '@angular/material'

@Component({
  selector: 'component-dispose-food-page',
  templateUrl: './dispose-food-page.component.html',
  styleUrls: ['./dispose-food-page.component.css']
})
export class DisposeFoodPageComponent implements OnInit {
  displayedColumns = ['itemNo', 'name', 'qtyDisposed', 'date']
  ELEMENT_DATA: Element[] = [
    {
      itemNo: 100985922221, name: 'Black Plums', qtyDisposed: 5, date: '4/26/2018'
    },
    {
      itemNo: 199855226214, name: 'Florida Strawberries', qtyDisposed: 8, date: '4/24/2018'
    },
    {
      itemNo: 192120045223, name: 'Avocadoes', qtyDisposed: 10, date: '4/19/2018'
    }
  ]
  dataSource = new MatTableDataSource(this.ELEMENT_DATA)
  title = 'Dispose Food'

  @ViewChild(MatSort) sort: MatSort

  ngOnInit(): void {
    this.dataSource.sort = this.sort
  }
}
export interface Element {
  itemNo: number
  name: string
  qtyDisposed: number
  date: string
}
