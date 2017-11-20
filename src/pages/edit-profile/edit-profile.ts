import { CameraProvider } from '../../providers/util/camera.provider';
import { Component } from '@angular/core';
// tslint:disable-next-line:no-duplicate-imports
import { ChangeDetectorRef, ChangeDetectionStrategy  } from '@angular/core';
import {
  NavController, Platform, ActionSheetController, LoadingController,
  IonicPage, ToastController } from 'ionic-angular';

import { ProfilePage } from '../profile/profile';

import { User } from '../../models/user/user.interface';
import { Localstorage } from '../../providers/localstorage';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Base64 } from '@ionic-native/base64';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';

@IonicPage()
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'page-edit-profile',
  templateUrl: 'edit-profile.html'
})
export class EditProfilePage {

  placeholder = 'assets/img/avatar/girl-avatar.png';
  chosenBackGroundPicture: any;
  chosenAvatarPicture: any;
  imagem64;
  userObj = [{ 
    name: '',
    backgroundimage: '',
    avatar: '' }];
  
  teste;

  user = {} as User;

  constructor(
    public navCtrl: NavController,
    public actionsheetCtrl: ActionSheetController,
    public cameraProvider: CameraProvider,
    public platform: Platform,
    public loadingCtrl: LoadingController,
    private http: Http,
    public localstorage:Localstorage,
    private base64: Base64,
    public cdr:ChangeDetectorRef,
    public toastCtrl: ToastController
  ) {
    
    this.localstorage = localstorage;
    
  }

  showToast (position: string) {
    // tslint:disable-next-line:prefer-const
    let toast = this.toastCtrl.create({
      message: 'Seu perfil foi editado!',
      duration: 3000,
      // tslint:disable-next-line:object-literal-shorthand
      position: position,
      cssClass: 'center'
    });

    toast.present(toast);
  }

  ionViewWillEnter() {

    this.getProfileInfo();

  }
  
  // -----------------------------------------//
  // ------- SALVAR INFORMACOES DO PROFILE ---//
  // -----------------------------------------//

  updateProfile(userInformation) {

    let data;

    console.log('UPDATE PROFILE');

    this.localstorage.getUser('').then((userLocalStorage) => {

      if (this.chosenBackGroundPicture === undefined || this.chosenBackGroundPicture === '' ||
          this.chosenAvatarPicture === undefined || this.chosenAvatarPicture === '') {

            // Se o usuario quiser alterar somente o background
        if (this.chosenAvatarPicture === this.userObj[0].avatar) {
              
              // tslint:disable-next-line:prefer-const
          let filePath: string = this.chosenBackGroundPicture;
          this.base64.encodeFile(filePath).then((base64File: string) => {
              
            data = JSON.stringify({
              userID: userLocalStorage._id,
              name: userInformation.nome,
              cidade: userInformation.cidade,
              estado: userInformation.estado,
              telefone: userInformation.telefone,
              backgroundimage: base64File
            });

          });

          this.fnSalvarAlteracoes(data).then((result) => {
                
            console.log('');
                
          });

        }

            // Se o usuario quiser alterar somente a imagem de avatar
        if (this.chosenBackGroundPicture === this.userObj[0].backgroundimage) {

              // tslint:disable-next-line:prefer-const
          let filePath: string = this.chosenAvatarPicture;
          this.base64.encodeFile(filePath).then((base64File: string) => {
              
                // tslint:disable-next-line:prefer-const
            data = JSON.stringify({
              userID: userLocalStorage._id,
              name: userInformation.nome,
              cidade: userInformation.cidade,
              estado: userInformation.estado,
              telefone: userInformation.telefone,
              avatar: base64File
            });

          });

          this.fnSalvarAlteracoes(data).then((result) => {
                
            console.log('');
                
          });
              
        }

            // Se o nao quiser alterar avatar nem background
        if (this.chosenAvatarPicture === this.userObj[0].avatar && 
                this.chosenBackGroundPicture === this.userObj[0].backgroundimage) {
              
              // tslint:disable-next-line:prefer-const
          data = JSON.stringify({
            userID: userLocalStorage._id,
            name: userInformation.nome,
            cidade: userInformation.cidade,
            estado: userInformation.estado,
            telefone: userInformation.telefone
          });

          this.fnSalvarAlteracoes(data).then((result) => {
                
            console.log('');
                
          });

        }
         
      // Se usuario vai alterar imagem de background e avatar
      } else {

        console.log('ELSEEEEEEEEEEEEEEEEEEEEEEE');
    
        // transforma a imagem selecionada do background em base64
        // tslint:disable-next-line:prefer-const
        let fileBackGroundPath: string = this.chosenBackGroundPicture;
        this.base64.encodeFile(fileBackGroundPath).then((base64BackGroundFile: string) => {

          console.log('+9+9+9++++++++++++++++++++');
          console.log(base64BackGroundFile);
          console.log('+9+9+9++++++++++++++++++++');
          
          // transforma a imagem selecionada do avatar em base64
          // tslint:disable-next-line:prefer-const
          let fileAvatarPath: string = this.chosenAvatarPicture;
          this.base64.encodeFile(fileAvatarPath).then((base64AvatarFile: string) => {

            console.log('+9+9+9++++++++++++++++++++');
            console.log(base64BackGroundFile);
            console.log('+9+9+9++++++++++++++++++++');
  
            // tslint:disable-next-line:prefer-const
            data = JSON.stringify({
              userID: userLocalStorage._id,
              name: userInformation.nome,
              cidade: userInformation.cidade,
              estado: userInformation.estado,
              telefone: userInformation.telefone,
              backgroundimage: base64BackGroundFile,
              avatar: base64AvatarFile
            });
            
            this.fnSalvarAlteracoes(data).then((result) => {
              
              console.log('');
              
            });
  
          });
          
        });

      }

    });
  }

  // -----------------------------------------//
  // --- FIM SALVAR INFORMACOES DO PROFILE ---//
  // -----------------------------------------//

  // *****************************************//

  // -----------------------------------------//
  // -FUNCAO SALVAR INFORMACOES DO PROFILE ---//
  // -----------------------------------------//

  fnSalvarAlteracoes(data):any {

    // tslint:disable-next-line:no-var-keyword prefer-const
    var headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
      
    // tslint:disable-next-line:object-literal-shorthand
    let options = new RequestOptions({ headers: headers });

    console.log('fnSalvarAlteracoes');
    console.log('CONSOLE DATA', data);
    console.log('fnSalvarAlteracoes');
    
    new Promise((resolve, reject) => {
      this.http.post('https://imagine-art.herokuapp.com/user/updateProfile/',data, options)
            .toPromise()
            .then((response) => {
    
              if (response.json().code === 200) {
                resolve(response.json());
                this.navCtrl.setRoot(ProfilePage);
                this.showToast('middle');
              }
    
            })
            .catch((error) => {
              console.error('API Error : ', error.status);
              console.error('API Error : ', JSON.stringify(error));
              reject(error.json());
            });
    });
    
  }

  // -----------------------------------------//
  // FIM FUNCAO SALVAR INFORMACOES DO PROFILE-//
  // -----------------------------------------//

  // *****************************************//

  // -----------------------------------------//
  // --- PEGAR INFORMACOES DO PROFILE --------//
  // -----------------------------------------//

  getProfileInfo():any {

    this.localstorage.getUser('').then((user) => {

      console.log('getProfileInfo', user);

      // tslint:disable-next-line:no-var-keyword
      var headers = new Headers();
      headers.append('Accept', 'application/json');
      headers.append('Content-Type', 'application/json');
  
      // tslint:disable-next-line:object-literal-shorthand
      let options = new RequestOptions({ headers: headers });

      // tslint:disable-next-line:prefer-const
      let data = JSON.stringify({
        userID: user._id
      });

      console.log('CONSOLE DATA', data);

      new Promise((resolve, reject) => {
        this.http.post('https://imagine-art.herokuapp.com/user/getUpdateProfile/',data, options)
        .toPromise()
        .then((response) => {

          console.log('CONSOLE LOG DA VARIAVEL response.json()',response.json());

          if (response.json().code === 200) {

            this.userObj = response.json().user;
            this.chosenAvatarPicture = response.json().user.avatar;
            this.chosenBackGroundPicture = response.json().user.backgroundimage;
            this.teste = response.json().user.name;
            resolve(response.json());
            this.cdr.markForCheck();
            return response.json().user;
          }

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

  // -----------------------------------------//
  // --- FIM PEGAR INFORMACOES DO PROFILE ----//
  // -----------------------------------------//

  // *****************************************//

  // -----------------------------------------//
  // ----------- IMAGEM DE BACKGROUND --------//
  // -----------------------------------------//

  changeBackGroundPicture() {
    
    const actionsheet = this.actionsheetCtrl.create({
      title: 'upload picture',
      buttons: [
        {
          text: 'camera',
          icon: !this.platform.is('ios') ? 'camera' : null,
          handler: () => {
            this.takeBackGroundPicture();
          }
        },
        {
          text: !this.platform.is('ios') ? 'gallery' : 'camera roll',
          icon: !this.platform.is('ios') ? 'image' : null,
          handler: () => {
            this.getBackGroundPicture();
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
    
  takeBackGroundPicture() {
    const loading = this.loadingCtrl.create();
    
    loading.present();
    return this.cameraProvider.getPictureFromCamera().then(picture => {
      if (picture) {
        this.chosenBackGroundPicture = picture;
      }
      loading.dismiss();
    }, error => {
      alert(error);
    });
  }
    
  getBackGroundPicture() {
    const loading = this.loadingCtrl.create();
    
    loading.present();
    return this.cameraProvider.getPictureFromPhotoLibrary().then(picture => {
      if (picture) {
        this.chosenBackGroundPicture = picture;
      }
      loading.dismiss();
    }, error => {
      alert(error);
    });
  }

  // -----------------------------------------//
  // ------- FIM IMAGEM DE BACKGROUND --------//
  // -----------------------------------------//

   // *****************************************//

  // -----------------------------------------//
  // ----------- IMAGEM DE AVATAR ------------//
  // -----------------------------------------//

  changeAvatarPicture() {
    
    const actionsheet = this.actionsheetCtrl.create({
      title: 'upload picture',
      buttons: [
        {
          text: 'camera',
          icon: !this.platform.is('ios') ? 'camera' : null,
          handler: () => {
            this.takeAvatarPicture();
          }
        },
        {
          text: !this.platform.is('ios') ? 'gallery' : 'camera roll',
          icon: !this.platform.is('ios') ? 'image' : null,
          handler: () => {
            this.getAvatarPicture();
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
    
  takeAvatarPicture() {
    const loading = this.loadingCtrl.create();
    
    loading.present();
    return this.cameraProvider.getPictureFromCamera().then(picture => {
      if (picture) {
        this.chosenAvatarPicture = picture;
      }
      loading.dismiss();
    }, error => {
      alert(error);
    });
  }
    
  getAvatarPicture() {
    const loading = this.loadingCtrl.create();
    
    loading.present();
    return this.cameraProvider.getPictureFromPhotoLibrary().then(picture => {
      if (picture) {
        this.chosenAvatarPicture = picture;
      }
      loading.dismiss();
    }, error => {
      alert(error);
    });
  }

  // -----------------------------------------//
  // ------- FIM IMAGEM DE AVATAR ------------//
  // -----------------------------------------//

   // *****************************************//

}
