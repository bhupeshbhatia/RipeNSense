import { Component } from '@angular/core'
import { ModalDialogboxComponent } from './../modal-dialogbox/modal-dialogbox.component'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'component-user-permissions',
  templateUrl: './user-permissions.component.html',
  styleUrls: ['./user-permissions.component.css']
})

export class UserPermissionsComponent {
  constructor(private modalService: NgbModal) { }

  open(popupTitle: string, content: string, buttons: string[]): void {
    const modalRef = this.modalService.open(ModalDialogboxComponent)
    modalRef.componentInstance.model = {
      title: popupTitle.valueOf(),
      content: content.valueOf(),
      buttons: buttons.values()
    }
  }
}
