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
  selector: 'page-doraemonN',
  templateUrl: 'doraemonN.html',
})
export class doraemonNPage {
  slides = [
    {
      title: "",
      description: "",
      image: "../../assets/imgs/Doraemon_N_1.jpg",
    },
    {
      title: "",
      description: "",
      image: "../../assets/imgs/Doraemon_N_2.jpg",
    },
    {
      title: "",
      description: "",
      image: "../../assets/imgs/Doraemon_N_3.jpg",
    }
  ];
  a:any;
  text:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad doraemonNPage');
  }
}
