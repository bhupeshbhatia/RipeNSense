import { Component, OnInit, ViewChild } from '@angular/core'
import { MatSort, MatSortable, MatTableDataSource } from '@angular/material'

@Component({
  selector: 'component-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  selected = 'today'
  displayedColumns = ['date', 'time', 'change']
  ELEMENT_DATA: Element[] = [
    {date: '26/05/2018', time: '9:39 am', change: 'Martha Smith donated 20 lbs of red plums (item number: 10098542212) to food bank.'},
    {date: '26/05/2018', time: '9:36 am', change: 'Martha Smith added Green apples (item number: 1554662285) to food monitoring.'},
    {date: '26/05/2018', time: '9:32 am', change: 'Martha Smith added Brazilian avocadoes (item number: 10099521543) to food monitoring.'},
    {date: '26/05/2018', time: '9:29 am', change: 'Martha Smith added California oranges (item number: 11226549852) to food monitoring.'},
    {date: '26/05/2018', time: '9:26 am',
    change: 'Martha Smith added Red Delicious apples (item number: 100098544521) to food monitoring.'},
    {date: '26/05/2018', time: '8:04 am', change: 'Ripe&Sense (RS41152KC) was registered. Transaction requested by Martha Smith.'}
  ]

  dataSource = new MatTableDataSource(this.ELEMENT_DATA)
  title = 'History'

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
  date: string
  time: string
  change: string
}
