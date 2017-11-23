import { CameraProvider } from '../../providers/util/camera.provider';
import { Component } from '@angular/core';
import {
  NavController, Platform, ActionSheetController, LoadingController,
  IonicPage, NavParams, ToastController } from 'ionic-angular';

import { ProfilePage } from '../profile/profile';
// import { HomePage } from '../home/home';

import { Product } from '../../models/product/product.interface';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Localstorage } from '../../providers/localstorage';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';

import { Base64 } from '@ionic-native/base64';
// tslint:disable-next-line:no-duplicate-imports
import { ChangeDetectorRef, ChangeDetectionStrategy  } from '@angular/core';
import { TabsPage } from '../tabs/tabs';
import { IonicTapInput } from 'ionic-angular/util/form';
import { Tabs } from 'ionic-angular/components/tabs/tabs';

@IonicPage()
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'page-edit-work',
  templateUrl: 'edit-work.html',
})
export class EditWorkPage {
  myApp: any;

  product = {} as Product;

  placeholder = 'assets/img/background/artesanato.jpg';
  posts = {};
  chosenPicture: any;
  productInformation = [];
  imagem64;

  constructor(
    public navCtrl: NavController,
    public actionsheetCtrl: ActionSheetController,
    public cameraProvider: CameraProvider,
    public platform: Platform,
    public loadingCtrl: LoadingController,
    public navParams: NavParams,
    private http: Http,
    public localstorage:Localstorage,
    private base64: Base64,
    public cdr:ChangeDetectorRef,
    public toastCtrl: ToastController
  ) {

    this.localstorage = localstorage;
    this.getProduto();

  }

  // -----------------------------------------//
  // ----------- IMAGEM DE PRODUTO -----------//
  // -----------------------------------------//

  changePicture() {
    
    const actionsheet = this.actionsheetCtrl.create({
      title: 'upload picture',
      buttons: [
        {
          text: 'camera',
          icon: !this.platform.is('ios') ? 'camera' : null,
          handler: () => {
            this.takePicture();
          }
        },
        {
          text: !this.platform.is('ios') ? 'gallery' : 'camera roll',
          icon: !this.platform.is('ios') ? 'image' : null,
          handler: () => {
            this.getPicture();
          }
        },
        {
          text: 'cancel',
          icon: !this.platform.is('ios') ? 'close' : null,
          role: 'destructive',
          handler: () => {
            console.log('the user has cancelled the interaction.');
          }
        }
      ]
    });
    return actionsheet.present();
  }
    
  takePicture() {
    const loading = this.loadingCtrl.create();

    loading.present();
    return this.cameraProvider.getPictureFromCamera().then(picture => {
      if (picture) {
        this.chosenPicture = picture;
      }
      loading.dismiss();
    }, error => {
      alert(error);
    });
  }

  getPicture() {
    const loading = this.loadingCtrl.create();

    loading.present();
    return this.cameraProvider.getPictureFromPhotoLibrary().then(picture => {
      if (picture) {
        this.chosenPicture = picture;
      }
      loading.dismiss();
    }, error => {
      alert(error);
    });
  }

  // -----------------------------------------//
  // --------FIM IMAGEM DE PRODUTO -----------//
  // -----------------------------------------//

  // *****************************************//

  // -----------------------------------------//
  // ----------- GET ----- PRODUTO -----------//
  // -----------------------------------------//

  getProduto() {

    const loading = this.loadingCtrl.create();
    loading.present();

    this.localstorage.getProductID().then((productIDCallback) => {

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
          this.chosenPicture = response.json().product.productImage;
          this.localstorage.setProduct(response.json().product);
          
          loading.dismiss();
          resolve(response.json());
          this.cdr.markForCheck();
          return response.json().user;
          
        })
        .catch((error) => {
          console.error('API Error : ', error.status);
          console.error('API Error : ', JSON.stringify(error));
          reject(error.json());
        });
      });

    });

  }

  // -----------------------------------------//
  // --------FIM GET ----- PRODUTO -----------//
  // -----------------------------------------//

  // *****************************************//

  // -----------------------------------------//
  // ----------- REMOVER PRODUTO -----------//
  // -----------------------------------------//

  showToast (position: string) {
    // tslint:disable-next-line:prefer-const
    let toast = this.toastCtrl.create({
      message: 'Um projeto foi excluído!',
      duration: 3000,
      // tslint:disable-next-line:object-literal-shorthand
      position: position,
      cssClass: 'center'
    });

    toast.present(toast);
  }

  removerProduto(removerProdutoID) {

    const loading = this.loadingCtrl.create();
    loading.present();

    // tslint:disable-next-line:no-var-keyword
    var headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');

    // tslint:disable-next-line:object-literal-shorthand
    let options = new RequestOptions({ headers: headers });

    // tslint:disable-next-line:prefer-const
    let data = JSON.stringify({
      productID: removerProdutoID
    });

    new Promise((resolve, reject) => {
      this.http.post('https://imagine-art.herokuapp.com/product/deleteProduct/',data, options)
      .toPromise()
      .then((response) => {
       
        loading.dismiss();
        this.navCtrl.setRoot(ProfilePage);
        this.showToast('middle');
        return response.json().user;

      })
      .catch((error) => {
        console.error('API Error : ', error.status);
        console.error('API Error : ', JSON.stringify(error));
        reject(error.json());
      });
    });

  }

  // -----------------------------------------//
  // --------FIM REMOVER PRODUTO -------------//
  // -----------------------------------------//

  // *****************************************//

  showToast1 (position: string) {
    // tslint:disable-next-line:prefer-const
    let toast = this.toastCtrl.create({
      message: 'Um projeto foi editado!',
      duration: 3000,
      // tslint:disable-next-line:object-literal-shorthand
      position: position,
      cssClass: 'center'
    });

    toast.present(toast);
  }

  editProduto(produtoInformacao):void {

    const loading = this.loadingCtrl.create();
    loading.present();

    this.localstorage.getProductID().then((productIDCallback) => {

      if (this.chosenPicture === null || this.chosenPicture === '') {

        console.log('ADICIONAR IMAGEM');

      } else {

        this.localstorage.getProduct().then((produtoAntesEdicao) => {

          if (this.chosenPicture === produtoAntesEdicao.productImage) {

            // tslint:disable-next-line:no-var-keyword
            var headers = new Headers();
            headers.append('Accept', 'application/json');
            headers.append('Content-Type', 'application/json');
              
            // tslint:disable-next-line:object-literal-shorthand
            let options = new RequestOptions({ headers: headers });
            
            // tslint:disable-next-line:prefer-const
            let data = JSON.stringify({
              productID: productIDCallback,
              productTitle: produtoInformacao.title,
              productCategory: produtoInformacao.productCategory,
              productImage: this.chosenPicture,
              productDescription: produtoInformacao.description
            });
            
            console.log('CONSOLE DATA', data);
            
            new Promise((resolve, reject) => {
              this.http.post('https://imagine-art.herokuapp.com/product/updateProduct/',data, options)
                    .toPromise()
                    .then((response) => {
            
                      console.log('CONSOLE LOG DA VARIAVEL response.json()',response.json());
            
                      if (response.json().code === 200) {
                        resolve(response.json());
                      }

                      loading.dismiss();
                      this.navCtrl.setRoot(ProfilePage);
                      this.showToast1('middle');
                    })
                    .catch((error) => {
                      console.error('API Error : ', error.status);
                      console.error('API Error : ', JSON.stringify(error));
                      reject(error.json());
                    });
            });

          } else {

            // tslint:disable-next-line:prefer-const
            let filePath: string = this.chosenPicture;
            this.base64.encodeFile(filePath).then((base64File: string) => {
            
              console.log('productIDCallback', productIDCallback);
              
              // tslint:disable-next-line:no-var-keyword
              var headers = new Headers();
              headers.append('Accept', 'application/json');
              headers.append('Content-Type', 'application/json');
                
              // tslint:disable-next-line:object-literal-shorthand
              let options = new RequestOptions({ headers: headers });
              
              // tslint:disable-next-line:prefer-const
              let data = JSON.stringify({
                productID: productIDCallback,
                productTitle: produtoInformacao.title,
                productCategory: produtoInformacao.productCategory,
                productImage: base64File,
                productDescription: produtoInformacao.description
              });
              
              console.log('CONSOLE DATA', data);
              
              new Promise((resolve, reject) => {
                this.http.post('https://imagine-art.herokuapp.com/product/updateProduct/',data, options)
                      .toPromise()
                      .then((response) => {
              
                        console.log('CONSOLE LOG DA VARIAVEL response.json()',response.json());
              
                        if (response.json().code === 200) {
                          
                          loading.dismiss();
                          resolve(response.json());

                        }

                        loading.dismiss();
                        this.navCtrl.setRoot(ProfilePage);
                        this.showToast1('middle');
                        
                      })
                      .catch((error) => {
                        console.error('API Error : ', error.status);
                        console.error('API Error : ', JSON.stringify(error));
                        reject(error.json());
                      });
              });
        
            });

          }

        });

      }

    }).catch((err) => {
      // tslint:disable-next-line:quotemark
      console.log("Error occurred :", err);
    });

  }
  
}
