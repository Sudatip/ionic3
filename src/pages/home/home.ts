import { Component } from '@angular/core';
import { NavController,ToastController } from 'ionic-angular';
import { CartoonPage } from '../cartoon/Cartoon';
//import { welcomePage } from '../welcome/welcome';
import { LoginPage } from '../login/login';
import { Facebook} from '@ionic-native/facebook'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  userData = null;
  id:any;
  pass:any;
  constructor(private toast: ToastController,private facebook:Facebook,public navCtrl: NavController) {

  }
  next(){
    if(this.id=="admin"&&this.pass=="1234"){
        this.navCtrl.push(CartoonPage)
    }
    else {
      alert("Username and Paseeword Error !!!");
    }
  }
  next2(){
    this.navCtrl.push(LoginPage)
  }
  async facebookeiei(){
    /*this.facebook.login(['email','public_profile'],).then((response:FacebookLoginResponse)=> {
      this.facebook.api('me?fields=id,name,email,first_name,picture.width(720).height(720).as(picture_large)',[]).then(profile => {
        this.userData = {email:profile['email'],first_name:profile['first_name'],picture:profile['picture_large']['data']['url'] , username:profile['name']};
      })
    })*/
    
  
  try{
    const info = await this.facebook.login(['public_profile', 'user_friends', 'email']);

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

}