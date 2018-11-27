import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';



import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CartoonPage } from '../pages/cartoon/Cartoon';
import { doraemonPage } from '../pages/doraemon/doraemon';
import { pokemonPage } from '../pages/pokemon/pokemon';
import { doraemonPageModule } from '../pages/doraemon/doraemon.module';
import { digimonPage } from '../pages/digimon/digimon';
import { welcomePage } from '../pages/welcome/welcome';
import { developerPage } from '../pages/developer/developer';

//แปลภาษาหน้าเวปไซต์
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {TranslateModule,TranslateLoader} from '@ngx-translate/core';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';

//firebase_auth_email
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FIREBASE_INFO } from './firebase.info';


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
    RegisterPage
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
    RegisterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
