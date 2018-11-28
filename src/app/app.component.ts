import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, MenuController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AlertController } from 'ionic-angular';

//ฟังก์ชันแปลภาษา : Translate
import { TranslateService } from '@ngx-translate/core';

// เกี่ยวกับหน้าล็อกอินและสมัครเข้าสู่ระบบ
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';

//เกี่ยวกับหน้าการ์ตูนทั้งหมด
import { CartoonPage } from '../pages/cartoon/Cartoon';
import { doraemonPage } from '../pages/doraemon/doraemon';
import { doraemonNPage } from '../pages/doraemonN/doraemonN';
import { doraemonSPage } from '../pages/doraemonS/doraemonS';
import { pokemonPage } from '../pages/pokemon/pokemon';
import { pokemonNPage } from '../pages/pokemonN/pokemonN';
import { pokemonSPage } from '../pages/pokemonS/pokemonS';
import { digimonPage } from '../pages/digimon/digimon';
import { digimonNPage } from '../pages/digimonN/digimonN';
import { digimonSPage } from '../pages/digimonS/digimonS';
import { comingsoonPage } from '../pages/comingsoon/comingsoon';

//สมาชิกในกลุ่ม : Developer
import { developerPage } from '../pages/developer/developer';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  lang:any;
  [x: string]: any;
  rootPage:any = HomePage;
  page:Array<{title:string,Component:any,icon:any}>;
  @ViewChild(Nav)nav:Nav;

  constructor(platform: Platform,public alerCtrl: AlertController,private menu: MenuController ,statusBar: StatusBar, splashScreen: SplashScreen, public translate: TranslateService) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.lang = 'en';
      this.translate.setDefaultLang('en');
      this.translate.use('en');
    });
  }
  switchLanguage() {
    this.translate.use(this.lang);
  }
  titlecartoon(){
    this.nav.push(CartoonPage)
    this.menu.toggle();
  }
  login(){
      let confirm = this.alerCtrl.create({
        title: 'Sure to Logout?',
        message: 'Do you agree to logout?',
        buttons: [
          {
            text: 'Disagree',
            handler: () => {
              
            }
          },
          {
            text: 'Agree',
            handler: () => {
              this.nav.push(HomePage)
              this.menu.toggle();
            }
          }
        ]
      });
      confirm.present()
    /*this.nav.push(LoginPage)
    this.menu.toggle();*/

  }
  Developer(){
    this.nav.push(developerPage)
    this.menu.toggle();
  }
}

