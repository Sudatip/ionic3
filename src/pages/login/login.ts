import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { User } from '../../models/user';
import { RegisterPage } from '../register/register';
import { HomePage } from '../home/home';
import { CartoonPage } from '../cartoon/Cartoon';
import { LoadingController } from 'ionic-angular';


//ล็อกอินทั้งหมด
import { Facebook} from '@ionic-native/facebook'
import { AngularFireAuth } from 'angularfire2/auth';
import firebase from 'firebase';




@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {} as User;

  constructor(private fireAuth: AngularFireAuth,public facebook:Facebook,public loadingCtrl: LoadingController,private toast: ToastController,public navCtrl: NavController, public navParams: NavParams,) {
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
  async facebookeiei(): Promise<any> {
    return this.facebook.login(['email'])
      .then( response => {
        const facebookCredential = firebase.auth.FacebookAuthProvider
          .credential(response.authResponse.accessToken);
  
        firebase.auth().signInWithCredential(facebookCredential)
          .then( success => { 
            console.log("Firebase success: " + JSON.stringify(success)); 
          });
      if(facebookCredential){
        this.navCtrl.push(CartoonPage);
      }
        }).catch((error) => { console.log(error) });
    
    }
}
