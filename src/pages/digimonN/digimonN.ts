import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { comingsoonPage } from '../comingsoon/comingsoon';


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
      image: "https://firebasestorage.googleapis.com/v0/b/project-8285769933273444381.appspot.com/o/Digimon_N_1.JPG?alt=media&token=2c468ec8-5ea8-4f50-be8a-cef2a4ea8826",
    }
  ];
  a:any;
  text:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad digimonNPage');
  }
  comingsoon(){
    this.navCtrl.push(comingsoonPage)
  }
}
