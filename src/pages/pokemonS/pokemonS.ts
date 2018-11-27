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
  selector: 'page-pokemonS',
  templateUrl: 'pokemonS.html',
})
export class pokemonSPage {
  slides = [
    {
      title: "",
      description: "",
      image: "../../assets/imgs/pokemon_s_1.jpg",
    },
    {
      title: "",
      description: "",
      image: "../../assets/imgs/pokemon_s_2.jpg",
    }
    
  ];
  a:any;
  text:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad pokemonSPage');
  }
}
