import { Component, OnInit, ViewChild } from '@angular/core'
import { MatSort, MatSortable, MatTableDataSource } from '@angular/material'

@Component({
  selector: 'component-manage-user-table',
  templateUrl: './manage-user-table.component.html',
  styleUrls: ['./manage-user-table.component.css']
})
export class ManageUserTableComponent implements OnInit {

  displayedColumns = ['username', 'name', 'accountType']
  ELEMENT_DATA: Element[] = [
    {
      username: 'danny.santhos', name: 'Danny Santhos', accountType: 'Corporate'
    },
    {
      username: 'kevin.timmins', name: 'Kevin Timmins', accountType: 'Corporate'
    },
    {
      username: 'keylly74', name: 'Kelly River', accountType: 'Employee'
    },
    {
      username: 'josh.s', name: 'Josh Stones', accountType: 'Employee'
    },
    {
      username: 'jerry.kotuba', name: 'Jerry Kotuba', accountType: 'Employee'
    },
    {
      username: 'martha.smith', name: 'Martha Smith', accountType: 'Manager'
    }
  ]
  dataSource = new MatTableDataSource(this.ELEMENT_DATA)
  title = 'Manage Users'

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
  username: string
  name: string
  accountType: string
}
