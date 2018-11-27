import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { User } from '../../models/user';
import { AngularFireAuth } from 'angularfire2/auth';
import { RegisterPage } from '../register/register';
import { HomePage } from '../home/home';
import { CartoonPage } from '../cartoon/Cartoon';
import { LoadingController } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {} as User;

  constructor(public loadingCtrl: LoadingController,private toast: ToastController,private fireAuth: AngularFireAuth,public navCtrl: NavController, public navParams: NavParams,) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  async login(user: User){
    const loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 2000,
  });
  loader.present();
    try{
      const info = await this.fireAuth.auth.signInWithEmailAndPassword(user.email, user.password);
      

      if(info){
        await this.navCtrl.push(CartoonPage);
      }
    }
    catch(e){
      this.toast.create({
        message: " Check your password again.",
        duration : 1000,
        cssClass:"error"
      }).present();
    }
  }
  register(){
    this.navCtrl.push(RegisterPage);
  }
}
