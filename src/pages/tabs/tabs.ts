import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';
import { ProfilePage } from '../profile/profile';
import { SearchPage } from '../search/search';
import { LoginPage } from '../login/login';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = SearchPage;
  tab3Root = ProfilePage;
  tab4Root = SearchPage;
  tab5Root = LoginPage;

  constructor(public navCtrl: NavController) {
  }

  goToLogin()
  {

    this.navCtrl.push(LoginPage);
  }
  
}
