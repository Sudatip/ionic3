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
  selector: 'page-doraemonN',
  templateUrl: 'doraemonN.html',
})
export class doraemonNPage {
  slides = [
    {
      title: "",
      description: "",
      image: "https://firebasestorage.googleapis.com/v0/b/project-8285769933273444381.appspot.com/o/Doraemon_N_1.jpg?alt=media&token=12cdcbbe-1960-437c-aaa7-57c2f42dc057",
    },
    {
      title: "",
      description: "",
      image: "https://firebasestorage.googleapis.com/v0/b/project-8285769933273444381.appspot.com/o/Doraemon_N_2.jpg?alt=media&token=22c1ae1e-e6b6-4ebe-8fbe-60006a83251f",
    },
    {
      title: "",
      description: "",
      image: "https://firebasestorage.googleapis.com/v0/b/project-8285769933273444381.appspot.com/o/Doraemon_N_3.jpg?alt=media&token=d3b297b2-3c51-4d48-9746-06400c45635a",
    }
  ];
  a:any;
  text:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad doraemonNPage');
  }
  comingsoon(){
    this.navCtrl.push(comingsoonPage)
  }
}
