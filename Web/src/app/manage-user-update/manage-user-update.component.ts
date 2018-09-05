import { Component } from '@angular/core'
import { ModalDialogboxComponent } from './../modal-dialogbox/modal-dialogbox.component'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'component-manage-user-update',
  templateUrl: './manage-user-update.component.html',
  styleUrls: ['./manage-user-update.component.css']
})
export class ManageUserUpdateComponent {
    title = 'Manage Users: Update User'

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
