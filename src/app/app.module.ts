import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';

// เกี่ยวกับหน้าล็อกอินและสมัครเข้าสู่ระบบ
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';

//เกี่ยวกับหน้าการ์ตูนทั้งหมด
import { CartoonPage } from '../pages/cartoon/Cartoon';
import { doraemonPage } from '../pages/doraemon/doraemon';
import { pokemonPage } from '../pages/pokemon/pokemon';
import { digimonPage } from '../pages/digimon/digimon';
import { welcomePage } from '../pages/welcome/welcome';
import { developerPage } from '../pages/developer/developer';
import { doraemonNPage } from '../pages/doraemonN/doraemonN';
import { doraemonSPage } from '../pages/doraemonS/doraemonS';
import { pokemonNPage } from '../pages/pokemonN/pokemonN';
import { pokemonSPage } from '../pages/pokemonS/pokemonS';
import { digimonNPage } from '../pages/digimonN/digimonN';
import { digimonSPage } from '../pages/digimonS/digimonS';
import { comingsoonPage } from '../pages/comingsoon/comingsoon';

//ฟังก์ชันแปลภาษา : Translate
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {TranslateModule,TranslateLoader} from '@ngx-translate/core';


//ฟังก์ชันล็อกอิน : Email - Google - Facebook 
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FIREBASE_INFO } from './firebase.info';
import {Facebook} from '@ionic-native/facebook'


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CartoonPage,
    doraemonPage,
    pokemonPage,
    digimonPage,
    welcomePage,
    developerPage,
    LoginPage,
    RegisterPage,
    doraemonNPage,
    doraemonSPage,
    pokemonNPage,
    pokemonSPage,
    digimonNPage,
    digimonSPage,
    comingsoonPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{
      menuType: 'push',
      platform:{
        ios:{
          menuType:'overlay',
           }
        }
      }),
      AngularFireAuthModule,
      AngularFireModule.initializeApp(FIREBASE_INFO),
    HttpClientModule,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
      }),
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CartoonPage,
    doraemonPage,
    pokemonPage,
    digimonPage,
    welcomePage,
    developerPage,
    LoginPage,
    RegisterPage,
    doraemonNPage,
    doraemonSPage,
    pokemonNPage,
    pokemonSPage,
    digimonNPage,
    digimonSPage,
    comingsoonPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Facebook
  ]
})
export class AppModule {}
