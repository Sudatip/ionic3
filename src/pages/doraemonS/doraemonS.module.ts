import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { doraemonSPage } from './doraemonS';

@NgModule({
  declarations: [
    doraemonSPage,
  ],
  imports: [
    IonicPageModule.forChild(doraemonSPage),
  ],
})
export class doraemonSPageModule {}
