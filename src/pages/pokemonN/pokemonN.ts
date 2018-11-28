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
  selector: 'page-pokemonN',
  templateUrl: 'pokemonN.html',
})
export class pokemonNPage {
  slides = [
    {
      title: "",
      description: "",
      image: "https://firebasestorage.googleapis.com/v0/b/project-8285769933273444381.appspot.com/o/Pokemon_N_1.JPG?alt=media&token=9eef11fd-a8af-46c0-85ac-ae7893da5062",
    },
    {
      title: "",
      description: "",
      image: "https://firebasestorage.googleapis.com/v0/b/project-8285769933273444381.appspot.com/o/Pokemon_N_2.JPG?alt=media&token=4a36cbd8-c9dd-40a7-92c6-84ad22cabaeb",
    },
    {
      title: "",
      description: "",
      image: "https://firebasestorage.googleapis.com/v0/b/project-8285769933273444381.appspot.com/o/Pokemon_N_3.JPG?alt=media&token=00f23a83-d36b-46c7-b165-3e560efdc8af",
    }
  ];
  a:any;
  text:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad pokemonNPage');
  }
  comingsoon(){
    this.navCtrl.push(comingsoonPage)
  }
}
