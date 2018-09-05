import { Component, Input } from '@angular/core'
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'
import { PopupDataModel } from './PopupDataModel'

@Component({
  selector: 'component-modal-dialogbox',
  templateUrl: './modal-dialogbox.component.html',
  styleUrls: ['./modal-dialogbox.component.css']
})
export class ModalDialogboxComponent {

  @Input() model: PopupDataModel

  constructor(public activeModal: NgbActiveModal) { }

  // Put an if conditions to check if multiple buttons required - if not you can change the variable content
}
