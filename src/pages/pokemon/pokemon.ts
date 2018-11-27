import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { pokemonNPage } from '../pokemonN/pokemonN';
import { pokemonSPage } from '../pokemonS/pokemonS';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pokemon',
  templateUrl: 'pokemon.html',
})
export class pokemonPage {
  a:any;
  text:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad pokemonPage');
  }
  next_normal(){
    this.navCtrl.push(pokemonNPage)
  }
  next_special(){
    this.navCtrl.push(pokemonSPage)
    
  }

}
