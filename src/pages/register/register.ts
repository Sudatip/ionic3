import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , ToastController } from 'ionic-angular';
import { User } from '../../models/user';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginPage } from '../login/login';
import { LoadingController } from 'ionic-angular';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  user ={} as User;

  constructor(public loadingCtrl: LoadingController,private toast: ToastController,private fireAuth: AngularFireAuth,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  async register(user: User){
    const loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 2000,
  });
  loader.present();
    try{
      const info = await this.fireAuth.auth.createUserWithEmailAndPassword(user.email,user.password);
    if(info){
      this.navCtrl.push(LoginPage);
    }
    }
    catch(e){
      this.toast.create({
        message: "All fields are required! Password Must be at least 6 character long",
        duration : 3000,
        cssClass:"error"
      }).present();
    }
  }

}
