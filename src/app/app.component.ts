import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TranslateService } from '@ngx-translate/core';

import { HomePage } from '../pages/home/home';
import { CartoonPage } from '../pages/cartoon/Cartoon';
import { doraemonPage } from '../pages/doraemon/doraemon';
import { pokemonPage } from '../pages/pokemon/pokemon';
import { digimonPage } from '../pages/digimon/digimon';
import { welcomePage } from '../pages/welcome/welcome';
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

  constructor(platform: Platform,private menu: MenuController ,statusBar: StatusBar, splashScreen: SplashScreen, public translate: TranslateService) {
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
    this.nav.push(welcomePage)
    this.menu.toggle();
  }
  Developer(){
    this.nav.push(developerPage)
    this.menu.toggle();
  }
}

