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
  selector: 'page-pokemonS',
  templateUrl: 'pokemonS.html',
})
export class pokemonSPage {
  slides = [
    {
      title: "",
      description: "",
      image: "https://firebasestorage.googleapis.com/v0/b/project-8285769933273444381.appspot.com/o/Pokemon_S_1.jpg?alt=media&token=805895d9-2479-4476-b086-8a7ef2d4fb14",
    },
    {
      title: "",
      description: "",
      image: "https://firebasestorage.googleapis.com/v0/b/project-8285769933273444381.appspot.com/o/Pokemon_S_2.jpg?alt=media&token=5ef628fa-63e4-4698-8224-c7418e1cabd5",
    }
    
  ];
  a:any;
  text:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad pokemonSPage');
  }
  comingsoon(){
    this.navCtrl.push(comingsoonPage)
  }
}
