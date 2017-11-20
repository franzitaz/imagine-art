import { ToastService } from '../../providers/util/toast.service';
import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

import { Localstorage } from '../../providers/localstorage';
import { Http, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';

// tslint:disable-next-line:no-duplicate-imports
import { ChangeDetectorRef, ChangeDetectionStrategy  } from '@angular/core';

@IonicPage()
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'page-show',
  templateUrl: 'show.html'
})
export class ShowPage {

  // following = false;
  productInformation = [];
  user = {
    name: 'Paula Bolliger',
    profileImage: 'assets/img/avatar/girl-avatar.png',
    coverImage: 'assets/img/background/background-5.jpg',
    occupation: 'Designer',
    location: 'Seattle, WA',
    description: 'A wise man once said: The more you do something, the better you will become at it.',
    followers: 456,
    following: 1052,
    posts: 35
  };

  constructor(public navCtrl: NavController, public toastCtrl: ToastService,
              private http: Http, public localstorage:Localstorage,
              public cdr:ChangeDetectorRef) { 


                console.log('TESTEEEEEEEEEEEEEEEEE');
    this.localstorage = localstorage;
    this.getProductInformation();

  }

  ionViewDidLoad() {
    console.log('Hello ProfileFour Page');
  }

  /*follow() {
    this.following = !this.following;
    this.toastCtrl.create('Follow user clicked');
  }

  imageTapped(post) {
    this.toastCtrl.create('Post image clicked');
  }

  comment(post) {
    this.toastCtrl.create('Comments clicked');
  }

  like(post) {
    this.toastCtrl.create('Like clicked');
  }*/

  // ------------------------------------//
  // - PEGAR INFORMACOES SOBRE O PRODUTO-//
  // ------------------------------------//

  getProductInformation() {

    this.localstorage.getProductID().then((productIDCallback) => {

      console.log('/-------------------------------/');
      console.log(productIDCallback);
      console.log('/-------------------------------/');

      

      // tslint:disable-next-line:no-var-keyword
      var headers = new Headers();
      headers.append('Accept', 'application/json');
      headers.append('Content-Type', 'application/json');

      // tslint:disable-next-line:object-literal-shorthand
      let options = new RequestOptions({ headers: headers });

      // tslint:disable-next-line:prefer-const
      let data = JSON.stringify({
        productID: productIDCallback
      });

      new Promise((resolve, reject) => {
        this.http.post('https://imagine-art.herokuapp.com/product/getUpdateProduct/',data, options)
        .toPromise()
        .then((response) => {

          this.productInformation = response.json().product;
          console.log(response.json().product);
          this.cdr.markForCheck();
          resolve(response.json());
          
        })
        .catch((error) => {
          console.error('API Error : ', error.status);
          console.error('API Error : ', JSON.stringify(error));
          reject(error.json());
        });
      });

    }).catch((err) => {
      // tslint:disable-next-line:quotemark
      console.log("Error occurred :", err);
    });

  }

  // ------------------------------------//
  // FIM PEGAR INFORMACOES SOBRE PRODUTO //
  // ------------------------------------//

  // ************************************//
}
