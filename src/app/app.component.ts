import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, MenuController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AlertController } from 'ionic-angular';

import { TranslateService } from '@ngx-translate/core';

import { HomePage } from '../pages/home/home';
import { CartoonPage } from '../pages/cartoon/Cartoon';
import { doraemonPage } from '../pages/doraemon/doraemon';
import { pokemonPage } from '../pages/pokemon/pokemon';
import { digimonPage } from '../pages/digimon/digimon';
import { welcomePage } from '../pages/welcome/welcome';
import { developerPage } from '../pages/developer/developer';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';


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
              this.nav.push(LoginPage)
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

