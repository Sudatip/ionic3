import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-digimonS',
  templateUrl: 'digimonS.html',
})
export class digimonSPage {
  slides = [
    {
      title: "",
      description: "",
      image: "../../assets/imgs/digimon_S_1.jpg",
    }
  ];
  a:any;
  text:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad digimonSPage');
  }
}
