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
  selector: 'page-doraemonS',
  templateUrl: 'doraemonS.html',
})
export class doraemonSPage {
  slides = [
    {
      title: "",
      description: "",
      image: "https://firebasestorage.googleapis.com/v0/b/project-8285769933273444381.appspot.com/o/Doraemon_S_1.jpg?alt=media&token=d80518dd-963d-42ec-aee7-0dc6f0720d4b",
    }
  ];
  a:any;
  text:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad doraemonSPage');
  }
  comingsoon(){
    this.navCtrl.push(comingsoonPage)
  }
}
