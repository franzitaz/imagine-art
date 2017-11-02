import { SharedModule } from './shared.module';

import { MyApp } from './app.component';

/*************/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MODULES, PROVIDERS } from './app.imports';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FIREBASE_CREDENTIALS } from './firebase.credenciais';

import { HttpModule } from '@angular/http';

import { IonicStorageModule } from '@ionic/storage';

import { StatusBar } from '@ionic-native/status-bar';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { HomePage } from '../pages/home/home';
import { WorksPage } from '../pages/works/works';
import { ProfilePage } from '../pages/profile/profile';
import { SearchPage } from '../pages/search/search';
import { AddWorkPage } from '../pages/add-work/add-work';
import { EditWorkPage } from '../pages/edit-work/edit-work';
import { EditProfilePage } from '../pages/edit-profile/edit-profile';
import { ShowPage } from '../pages/show/show';

import { Localstorage } from '../providers/localstorage';

@NgModule({
  declarations: [
    // App Core
    MyApp,
    TabsPage,
    LoginPage,
    SignupPage,
    HomePage,
    WorksPage,
    ProfilePage,
    SearchPage,
    AddWorkPage,
    EditWorkPage,
    EditProfilePage,
    ShowPage
  ],
  imports: [
    MODULES,
    IonicModule.forRoot(MyApp),
    SharedModule,
    BrowserModule,
    AngularFireModule.initializeApp(FIREBASE_CREDENTIALS),
    AngularFireDatabaseModule,
    IonicStorageModule.forRoot(),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    LoginPage,
    SignupPage,
    HomePage,
    WorksPage,
    ProfilePage,
    SearchPage,
    AddWorkPage,
    EditWorkPage,
    EditProfilePage,
    ShowPage
  ],
  providers: [PROVIDERS, StatusBar,
    SplashScreen,{ provide: ErrorHandler, useClass: IonicErrorHandler },Localstorage, Storage]
})
export class AppModule { }
