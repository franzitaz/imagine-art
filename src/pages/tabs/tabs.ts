import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';
import { ProfilePage } from '../profile/profile';
import { SearchPage } from '../search/search';
import { AddWorkPage } from '../add-work/add-work';
import { ChatsPage } from '../chat/chats';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ChatsPage;
  tab3Root = ProfilePage;
  tab4Root = AddWorkPage;
  tab5Root = SearchPage;

  constructor(public navCtrl: NavController) {
  }

}
