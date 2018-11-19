import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { welcomePage } from './welcome';

@NgModule({
  declarations: [
    welcomePage,
  ],
  imports: [
    IonicPageModule.forChild(welcomePage),
  ],
})
export class welcomPageModule {}
