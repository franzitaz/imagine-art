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
import { UserPage } from '../pages/user/user';
import { ChatsPage } from '../pages/chat/chats';
import { MessagesPage } from '../pages/chat/messages/messages';

import { Localstorage } from '../providers/localstorage';
import { Base64 } from '@ionic-native/base64';
import { ImageResizer } from '@ionic-native/image-resizer';

export const firebaseConfig = {
  apiKey: 'AIzaSyBV0Ok42A28Bk-Una68NNbtvZvVIfMaYzg',
  authDomain: 'imagine-art.firebaseapp.com',
  databaseURL: 'https://imagine-art.firebaseio.com',
  projectId: 'imagine-art',
  storageBucket: 'imagine-art.appspot.com',
  messagingSenderId: '652379659523'
};

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
    ShowPage,
    UserPage,
    ChatsPage,
    MessagesPage
  ],
  imports: [
    MODULES,
    IonicModule.forRoot(MyApp, { tabsHideOnSubPages: true }),
    SharedModule,
    BrowserModule,
    // AngularFireModule.initializeApp(FIREBASE_CREDENTIALS),
    AngularFireModule.initializeApp(firebaseConfig),
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
    ShowPage,
    UserPage,
    ChatsPage,
    MessagesPage
  ],
  providers: [PROVIDERS, StatusBar,
    SplashScreen,{ provide: ErrorHandler, useClass: IonicErrorHandler },Localstorage, Storage,Base64,ImageResizer]
})
export class AppModule { }
