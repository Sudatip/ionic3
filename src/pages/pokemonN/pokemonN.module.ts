import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { pokemonNPage } from './pokemonN';

@NgModule({
  declarations: [
    pokemonNPage,
  ],
  imports: [
    IonicPageModule.forChild(pokemonNPage),
  ],
})
export class pokemonNPageModule {}
