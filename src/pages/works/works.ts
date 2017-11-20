import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { ToastController } from 'ionic-angular';

// import { ProfilePage } from '../profile/profile';
import { ShowPage } from '../show/show';
import { Localstorage } from '../../providers/localstorage';
import { Http, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';

@IonicPage()
@Component({
  selector: 'page-works',
  templateUrl: 'works.html',
})
export class WorksPage {

  titlework = '';
  produtos = [];
  searchResult = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, 
      // public toastCtrl: ToastController,
      private http: Http,
      public localstorage:Localstorage) {

    this.localstorage = localstorage;
    this.localstorage.getSearch().then((search) => {

      if (search === undefined || search === null) {

        this.getProdutos();
        
      } else {

        console.log(search);
        this.produtos = search;
        this.localstorage.setSearch(undefined);
  
      }

    });

  }

  goToShow(productorID):void {

    console.log('kkkkkkkkkkkkkkkkkkkkkk');
    console.log(productorID);
    console.log('kkkkkkkkkkkkkkkkkkkkkk');    
    this.localstorage.setProductID(productorID);
    this.navCtrl.push(ShowPage);
    
  }
    
  // tslint:disable-next-line:no-empty
  ionViewDidLoad() {
  }

  getProdutos() {

    this.localstorage.getCategoria().then((categoria) => {

      // tslint:disable-next-line:no-var-keyword
      var headers = new Headers();
      headers.append('Accept', 'application/json');
      headers.append('Content-Type', 'application/json');
  
      // tslint:disable-next-line:object-literal-shorthand
      let options = new RequestOptions({ headers: headers });

      // tslint:disable-next-line:prefer-const
      let data = JSON.stringify({
        category: categoria
      });

      new Promise((resolve, reject) => {
        this.http.post('https://imagine-art.herokuapp.com/product/getAllProductsByCategory/',data, options)
        .toPromise()
        .then((response) => {

          this.titlework = categoria;
          console.log(response.json().data);
          this.produtos = response.json().data;
          resolve(response.json());
          
        })
        .catch((error) => {
          console.error('API Error : ', error.status);
          console.error('API Error : ', JSON.stringify(error));
          reject(error.json());
        });
      });

    })
  .catch((err) => {
    // tslint:disable-next-line:quotemark
    console.log("Error occurred :", err);
  });

  }

}
