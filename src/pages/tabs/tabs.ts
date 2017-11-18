import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';
import { ProfilePage } from '../profile/profile';
import { SearchPage } from '../search/search';
import { AddWorkPage } from '../add-work/add-work';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  reload: any;
  refresh: any;
  nav: any;

  tab1Root: any = HomePage;
  tab2Root: any = SearchPage;
  tab3Root: any = ProfilePage;
  tab4Root: any = AddWorkPage;
  tab5Root: any = SearchPage;

  constructor(public navCtrl: NavController) {
  }

  /*ionViewCanEnter() {
    if (undefined !== this.navCtrl.getActive()) {
      if (this.navCtrl.length() > 1)
        return false;
    }
  }

  ionSelect() {
    this.navCtrl.setRoot(TabsPage);
  }

  ionSelected() {
    //this.scrollArea.scrollToTop();
    this.nav.getActive(TabsPage);
  } */

}
