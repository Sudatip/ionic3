import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { doraemonNPage } from '../doraemonN/doraemonN';
import { doraemonSPage } from '../doraemonS/doraemonS';


/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-doraemon',
  templateUrl: 'doraemon.html',
})
export class doraemonPage {
  a:any;
  text:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad doraemonPage');
  }
  next_normal(){
    this.navCtrl.push(doraemonNPage)
  }
  next_special(){
    this.navCtrl.push(doraemonSPage)
  }
}
