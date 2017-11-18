import { CameraProvider } from '../../providers/util/camera.provider';
import { Component } from '@angular/core';
import {
  NavController,
  Platform,
  ActionSheetController,
  LoadingController,
  IonicPage,
  NavParams } from 'ionic-angular';

import { ProfilePage } from '../profile/profile';

import { Product } from '../../models/product/product.interface';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Localstorage } from '../../providers/localstorage';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';

@IonicPage()
@Component({
  selector: 'page-edit-work',
  templateUrl: 'edit-work.html',
})
export class EditWorkPage {

  product = {} as Product;

  placeholder = 'assets/img/avatar/girl-avatar.png';
  chosenPicture: any;

  constructor(
    public navCtrl: NavController,
    public actionsheetCtrl: ActionSheetController,
    public cameraProvider: CameraProvider,
    public platform: Platform,
    public loadingCtrl: LoadingController,
    public navParams: NavParams,
    private http: Http,
    public localstorage:Localstorage
  ) {

    this.localstorage = localstorage;

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
      postImageUrl: 'assets/img/background/background-2.jpg',
      title: 'Título do Produto',
      text: `I believe in being strong when everything seems to be going wrong.
             I believe that happy girls are the prettiest girls.
             I believe that tomorrow is another day and I believe in miracles.`,
      date: 'November 5, 2016',
      likes: 12,
      comments: 4
    },
  ];

  addProduto(product : Product):void {

      var headers = new Headers();
      headers.append("Accept", 'application/json');
      headers.append('Content-Type', 'application/json' );
  
      let options = new RequestOptions({ headers: headers });

      this.localstorage.getUser('ts').then((dados) => {
          let res = dados;

          let data = JSON.stringify({
            productTitle: product.title,
            productorID: res._id,
            productorName: res.name,
            productDescription: product.description,
            productImage: 'goo.gl/awyHW5'
          });
          
          new Promise((resolve, reject) => {
            this.http.post('https://imagine-art.herokuapp.com/product/newproduct/',data, options)
            .toPromise()
            .then((response) =>
            {
              
              if (response.json().code === 200) {
      
                  // IMPORTAR PAGINA PARA IR PARA O PROFILE PAGE AQUI
                  console.log(response.json().data);
                  this.navCtrl.push(ProfilePage);
                
              }
      
              resolve(response.json());
              
            })
            .catch((error) =>
            {
              console.error('API Error : ', error.status);
              console.error('API Error : ', JSON.stringify(error));
              reject(error.json());
            });
          });

      })
      .catch((err) => {
          console.log("Error occurred :", err);
      });
      
  }
  
}
