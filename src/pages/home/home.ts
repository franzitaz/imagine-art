import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { WorksPage } from '../works/works';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }
    
    goToFeltro():void
    {
      this.navCtrl.push(WorksPage);
    }

}
