import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { developerPage } from './developer';

@NgModule({
  declarations: [
    developerPage,
  ],
  imports: [
    IonicPageModule.forChild(developerPage),
  ],
})
export class developerPageModule {}
