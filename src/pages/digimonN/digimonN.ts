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
  selector: 'page-digimonN',
  templateUrl: 'digimonN.html',
})
export class digimonNPage {
  slides = [
    {
      title: "",
      description: "",
      image: "../../assets/imgs/digimon_N_1.jpg",
    }
  ];
  a:any;
  text:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad digimonNPage');
  }
}
