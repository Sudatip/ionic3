import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//import { doraemonPage } from '../doraemon/doraemon';
//import { pokemonPage } from '../pokemon/pokemon';
//import { digimonPage } from '../digimon/digimon';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-developer',
  templateUrl: 'developer.html',
})
export class developerPage {
  a:any;
  text:any;
  public press: number = 180;
  public pan: number = 0;
  public swipe: number = 0;
  public tap: number = 155;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad developerPage');
  }
  pressEvent(e) {
    this.press++
  }
  panEvent(e) {
    this.pan++
  }
  swipeEvent(e) {
    this.swipe++
  }
  tapEvent(e) {
    this.tap++
  }
  bowurl(){
    window.open("https://www.facebook.com/bolove083",'_system', 'location=yes');
  }
  noonaurl(){
    window.open("https://www.facebook.com/noonanattharikan.chuaymit",'_system', 'location=yes');
  }
  eyeurl(){
    window.open("https://www.facebook.com/tawita.wichachai",'_system', 'location=yes');
  }
  chanon(){
    window.open("https://www.facebook.com/chanon.ponsiriwong",'_system', 'location=yes');
  }
  chinurl(){
    window.open("https://www.facebook.com/pasit.thanadamkerng",'_system', 'location=yes');
  }
  iceurl(){
    window.open("https://www.facebook.com/sudatip.taweesuk",'_system', 'location=yes');
  }
}
