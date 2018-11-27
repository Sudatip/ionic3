import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { pokemonSPage } from './pokemonS';

@NgModule({
  declarations: [
    pokemonSPage,
  ],
  imports: [
    IonicPageModule.forChild(pokemonSPage),
  ],
})
export class pokemonSPageModule {}
