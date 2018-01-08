import { CameraProvider } from '../../providers/util/camera.provider';
import { Component, Injectable } from '@angular/core';
import { NavController, Platform, ActionSheetController, LoadingController, 
  IonicPage, NavParams, ToastController } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';

import { Product } from '../../models/product/product.interface';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Localstorage } from '../../providers/localstorage';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';

import { ImageResizer, ImageResizerOptions } from '@ionic-native/image-resizer';

// imagem base64
import { Base64 } from '@ionic-native/base64';
import { File, Camera, Transfer } from 'ionic-native';

@IonicPage()
@Component({
  selector: 'page-add-work',
  templateUrl: 'add-work.html',
})
export class AddWorkPage {

  product = {} as Product;

  placeholder = 'assets/img/background/artesanato.jpg';
  chosenPicture: any;
  imagem64;
  cordova: any;

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
    private imageResizer: ImageResizer,
    public toastCtrl: ToastController
  ) {

    this.localstorage = localstorage;

  }

  showToast (position: string) {
    // tslint:disable-next-line:prefer-const
    let toast = this.toastCtrl.create({
      message: 'Projeto adicionado com SUCESSO!',
      duration: 2000,
      // tslint:disable-next-line:object-literal-shorthand
      position: position,
      cssClass: 'center'
    });

    toast.present(toast);
  }

  showToastFuck (position: string) {
    // tslint:disable-next-line:prefer-const
    let toast = this.toastCtrl.create({
      message: 'Não foi possível salvar a imagem!',
      duration: 2000,
      // tslint:disable-next-line:object-literal-shorthand
      position: position,
      cssClass: 'center'
    });

    toast.present(toast);
  }

  showToast1 (position: string) {
    // tslint:disable-next-line:prefer-const
    let toast = this.toastCtrl.create({
      message: 'Altere tudo para poder adicionar!',
      duration: 2000,
      // tslint:disable-next-line:object-literal-shorthand
      position: position,
      cssClass: 'center'
    });

    toast.present(toast);
  }

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

  posts = [
    {
      postImageUrl: 'assets/img/background/artesanato.jpg'
    },
  ];

  tools_replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
  }

  addProduto(product : Product):void {

    const loading = this.loadingCtrl.create();
    loading.present();

    if (this.chosenPicture === undefined || this.chosenPicture === '' ||
       product.categoria === undefined || product.categoria === '' ||
       product.description === undefined || product.description === '' ||
       product.title === undefined || product.title === '') {

      loading.dismiss(); 
      this.showToast1('middle');

    } else {

      // let filePath: string = this.chosenPicture;
      let filePath: string = this.chosenPicture;
      this.base64.encodeFile(filePath).then((base64File: string) => {

        this.imagem64 = base64File;

        if (this.imagem64 === undefined || this.imagem64 === '' 
      || this.imagem64 === null) { 
          this.showToastFuck('middle');
        }

        // tslint:disable-next-line:no-var-keyword
        var headers = new Headers();
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');

      // tslint:disable-next-line:prefer-const
        let options = new RequestOptions({ headers: headers });

        this.localstorage.getUser('ts').then((dados) => {
        // tslint:disable-next-line:prefer-const
          let res = dados;

        // tslint:disable-next-line:prefer-const
          let data = JSON.stringify({
            productTitle: product.title,
            productorID: res._id,
            productorName: res.name,
            productCategory: product.categoria,
            productDescription: product.description,
            productImage: this.imagem64
          });
            
          new Promise((resolve, reject) => {
            this.http.post('https://imagine-art.herokuapp.com/product/newproduct/',data, options)
              .toPromise()
              .then((response) => {
                
                if (response.json().code === 200) {
                  
                  loading.dismiss(); 
                  this.navCtrl.push(TabsPage);
                  this.showToast('middle');
                  
                }
                console.log(response.json());
                product = {} as Product;
                
                loading.dismiss(); 
                resolve(response.json());
                
              })
              .catch((error) => {
                reject(error.json());
              });
          });

        })
        .catch((err) => {
          console.log('Error occurred :', err);
        });

      }, (err) => {
        console.log(err);
      });

    }
      
  }
  
}
