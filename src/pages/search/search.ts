import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';

import { Http, Headers, RequestOptions } from '@angular/http' ;
import { Localstorage } from '../../providers/localstorage';
import { Search } from '../../models/searchmodel/search.interface';
import { WorksPage } from '../works/works';
import { UserPage } from '../user/user';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  search = {} as Search;

  error = false;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private http: Http, private localstorage:Localstorage,
              public toastCtrl: ToastController, public loadingCtrl: LoadingController) {
  }

  showToast (position: string) {
    // tslint:disable-next-line:prefer-const
    let toast = this.toastCtrl.create({
      message: 'Digite algo para buscar!',
      duration: 2000,
      // tslint:disable-next-line:object-literal-shorthand
      position: position,
      cssClass: 'center'
    });

    toast.present(toast);
  }

  searchfn(search) {

    const loading = this.loadingCtrl.create();
    
    const search1 = search.busca;

    if (search1 === undefined || search1 === '') {
      this.showToast('middle');
    } else {
      loading.present();
      if (search.tipo === 'nome') {
      // tslint:disable-next-line:no-var-keyword
        var headers = new Headers();
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');

      // tslint:disable-next-line:object-literal-shorthand
        let options = new RequestOptions({ headers: headers });

      // tslint:disable-next-line:prefer-const
        let data = JSON.stringify({
          name: search.busca
        });

        new Promise((resolve, reject) => {
          this.http.post('https://imagine-art.herokuapp.com/user/searchProfile/',data, options)
        .toPromise()
        .then((response) => {

          this.localstorage.setSearch(response.json().user);
          console.log(response.json());
          this.navCtrl.push(UserPage);
          loading.dismiss();
          resolve(response.json());
          
        })
        .catch((error) => {
          console.error('API Error : ', error.status);
          console.error('API Error : ', JSON.stringify(error));
          reject(error.json());
        });
        })
      .catch((err) => {
        // tslint:disable-next-line:quotemark
        console.log("Error occurred :", err);
      });
      }

    // **************************************************************************
    // **********************BUSCA  POR NOME DO PRODUTO**************************
    // **************************************************************************
      if (search.tipo === 'titulo') {
      // tslint:disable-next-line:no-var-keyword
        var headers = new Headers();
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');

      // tslint:disable-next-line:object-literal-shorthand
        let options = new RequestOptions({ headers: headers });

      // tslint:disable-next-line:prefer-const
        let data = JSON.stringify({
          productTitle: search.busca
        });

        new Promise((resolve, reject) => {
          this.http.post('https://imagine-art.herokuapp.com/product/searchProduct/',data, options)
        .toPromise()
        .then((response) => {

          this.localstorage.setSearch(response.json().product);
          
          console.log(response.json());
          this.navCtrl.push(WorksPage);
          loading.dismiss();
          resolve(response.json());
          
        })
        .catch((error) => {
          console.error('API Error : ', error.status);
          console.error('API Error : ', JSON.stringify(error));
          reject(error.json());
        });
        })
      .catch((err) => {
        // tslint:disable-next-line:quotemark
        console.log("Error occurred :", err);
      });
      }
    }
  }
}
