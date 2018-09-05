import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { CommonModule } from '@angular/common'

import { ModalDialogboxComponent } from './components/modal-dialogbox/modal-dialogbox.component'

@NgModule({
  declarations: [
    ModalDialogboxComponent
  ],
  imports: [
    BrowserModule,
    CommonModule
  ],
  providers: [],
  entryComponents: [
    ModalDialogboxComponent
  ],
  exports: [ModalDialogboxComponent]
})
export class SharedComponentsModule {}
