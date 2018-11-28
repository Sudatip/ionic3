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
  selector: 'page-digimonS',
  templateUrl: 'digimonS.html',
})
export class digimonSPage {
  slides = [
    {
      title: "",
      description: "",
      image: "https://firebasestorage.googleapis.com/v0/b/project-8285769933273444381.appspot.com/o/Digimon_S_1.JPG?alt=media&token=b0c0e2b1-f94c-4e3b-8e35-5d58813f7deb",
    }
  ];
  a:any;
  text:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad digimonSPage');
  }
  comingsoon(){
    this.navCtrl.push(comingsoonPage)
  }
}
