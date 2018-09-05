import { Component, Input } from '@angular/core'
import { ModalDialogboxComponent } from './../modal-dialogbox/modal-dialogbox.component'
import {NgbModal} from '@ng-bootstrap/ng-bootstrap'
import { MAT_SORT_HEADER_INTL_PROVIDER_FACTORY } from '@angular/material'

const ELEMENT_DATA: Element[] = [
  { serialNumber: 'RS35648GD', modelNumber: 'A1000B', status: 'Connected', location: 'Aisle 1 - Box 1', deleteSensor: 'close' },
  { serialNumber: 'RS69745GG', modelNumber: 'A1000B', status: 'Connected', location: 'Aisle 1 - Box 2', deleteSensor: 'close' },
  { serialNumber: 'RS19874HI', modelNumber: 'A1000B', status: 'Connected', location: 'Aisle 1 - Box 3', deleteSensor: 'close' },
  { serialNumber: 'RS8663SC', modelNumber: 'A1000B', status: 'Connected', location: 'Aisle 1 - Box 4', deleteSensor: 'close' }
]

export interface Element {
  serialNumber: string
  modelNumber: string
  status: string
  location: string
  deleteSensor: string
}

@Component({
  selector: 'component-sensor-tab',
  templateUrl: './sensor-tab.component.html',
  styleUrls: ['./sensor-tab.component.css']
})
export class SensorTabComponent {

  displayedColumns = ['serialNumber', 'modelNumber', 'status', 'location', 'deleteSensor']
  dataSource = ELEMENT_DATA

  constructor(private modalService: NgbModal) {}

  open(popupTitle: string, content: string, button: string[]): void {
    const modalRef = this.modalService.open(ModalDialogboxComponent)
    modalRef.componentInstance.model = {
      title: popupTitle.valueOf(),
      content: content.valueOf(),
      buttons: button.values()
    }
  }

  // applyFilter(filterValue: string): void {
  //   filterValue = filterValue.trim() // Remove whitespace
  //   filterValue = filterValue.toLowerCase() // MatTableDataSource defaults to lowercase matches
  //   this.dataSource.filter = filterValue
  // }

}
