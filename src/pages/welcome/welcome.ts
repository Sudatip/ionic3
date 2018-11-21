import { Component, ViewChild } from '@angular/core';
import { IonicPage,Nav, NavController, NavParams, MenuController } from 'ionic-angular';
import { doraemonPage } from '../doraemon/doraemon';
import { pokemonPage } from '../pokemon/pokemon';
import { digimonPage } from '../digimon/digimon';
import { CartoonPage } from '../cartoon/Cartoon';

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
  @ViewChild(Nav)nav:Nav;
  constructor(private menu: MenuController ,public navCtrl: NavController, public navParams: NavParams) {
  }
  next(){
    this.navCtrl.push(CartoonPage)
    //this.menu.toggle();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad welcomPage');
  }
}
