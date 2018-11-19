import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { doraemonPage } from '../doraemon/doraemon';
//import { pokemonPage } from '../pokemon/pokemon';
//import { digimonPage } from '../digimon/digimon';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class welcomePage {
  a:any;
  text:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  /*next(){
    this.navCtrl.push(doraemonPage)
  }
  next_pokemon(){
    this.navCtrl.push(pokemonPage)
  }
  next_digimon(){
    this.navCtrl.push(digimonPage)
  }
  */

  ionViewDidLoad() {
    console.log('ionViewDidLoad welcomPage');
  }

}
