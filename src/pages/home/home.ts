import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { WorksPage } from '../works/works';
import { Localstorage } from '../../providers/localstorage';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, private localstorage:Localstorage) {
    this.localstorage = localstorage;
  }
    
  goToList(categoria):void {

    this.localstorage.setCategoria(categoria);
    this.navCtrl.push(WorksPage);
  }

}
