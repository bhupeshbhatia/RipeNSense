import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { CommonModule } from '@angular/common'

import { FooterComponent } from './containers/footer.component'

@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    BrowserModule,
    CommonModule
  ],
  providers: [],
  exports: [FooterComponent]
})
export class FooterModule {}
