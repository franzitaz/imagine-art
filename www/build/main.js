webpackJsonp([13],{

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile_profile__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__search_search__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__add_work_add_work__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__chat_chats__ = __webpack_require__(160);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TabsPage = (function () {
    function TabsPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_6__chat_chats__["a" /* ChatsPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__profile_profile__["a" /* ProfilePage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_5__add_work_add_work__["a" /* AddWorkPage */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_4__search_search__["a" /* SearchPage */];
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\imagine-art\src\pages\tabs\tabs.html"*/'<ion-tabs [selectedIndex]="2">\n  <ion-tab [root]="tab4Root" tabIcon="md-add-circle"></ion-tab>\n  <ion-tab [root]="tab2Root" tabIcon="mail"></ion-tab>\n  <ion-tab [root]="tab1Root" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab3Root" tabIcon="md-contact"></ion-tab>\n  <ion-tab [root]="tab5Root" tabIcon="md-search"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"C:\imagine-art\src\pages\tabs\tabs.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimelineComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TimelineItemComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return TimelineTimeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TimelineComponent = (function () {
    // tslint:disable-next-line:no-empty
    function TimelineComponent() {
        this.endIcon = 'ionic';
    }
    return TimelineComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('endIcon'),
    __metadata("design:type", Object)
], TimelineComponent.prototype, "endIcon", void 0);
TimelineComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'timeline',template:/*ion-inline-start:"C:\imagine-art\src\components\timeline\timeline.html"*/'<div class="timeline">\n  <ng-content></ng-content>\n\n  <timeline-item>\n    <ion-icon class="" [name]="endIcon"></ion-icon>\n  </timeline-item>\n\n</div>\n'/*ion-inline-end:"C:\imagine-art\src\components\timeline\timeline.html"*/
    }),
    __metadata("design:paramtypes", [])
], TimelineComponent);

var TimelineItemComponent = (function () {
    // tslint:disable-next-line:no-empty
    function TimelineItemComponent() {
    }
    return TimelineItemComponent;
}());
TimelineItemComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'timeline-item',
        template: '<ng-content></ng-content>'
    }),
    __metadata("design:paramtypes", [])
], TimelineItemComponent);

var TimelineTimeComponent = (function () {
    // tslint:disable-next-line:no-empty
    function TimelineTimeComponent() {
        this.time = {};
    }
    return TimelineTimeComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('time'),
    __metadata("design:type", Object)
], TimelineTimeComponent.prototype, "time", void 0);
TimelineTimeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'timeline-time',
        template: '<span>{{time.subtitle}}</span> <span>{{time.title}}</span>'
    }),
    __metadata("design:paramtypes", [])
], TimelineTimeComponent);

//# sourceMappingURL=timeline.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddWorkPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_util_camera_provider__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_localstorage__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_image_resizer__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_base64__ = __webpack_require__(61);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









// imagem base64

var AddWorkPage = (function () {
    function AddWorkPage(navCtrl, actionsheetCtrl, cameraProvider, platform, loadingCtrl, navParams, http, localstorage, base64, imageResizer, toastCtrl) {
        this.navCtrl = navCtrl;
        this.actionsheetCtrl = actionsheetCtrl;
        this.cameraProvider = cameraProvider;
        this.platform = platform;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.http = http;
        this.localstorage = localstorage;
        this.base64 = base64;
        this.imageResizer = imageResizer;
        this.toastCtrl = toastCtrl;
        this.product = {};
        this.placeholder = 'assets/img/background/artesanato.jpg';
        this.posts = [
            {
                postImageUrl: 'assets/img/background/artesanato.jpg'
            },
        ];
        this.localstorage = localstorage;
    }
    AddWorkPage.prototype.showToast = function (position) {
        // tslint:disable-next-line:prefer-const
        var toast = this.toastCtrl.create({
            message: 'Projeto adicionado com SUCESSO!',
            duration: 2000,
            // tslint:disable-next-line:object-literal-shorthand
            position: position,
            cssClass: 'center'
        });
        toast.present(toast);
    };
    AddWorkPage.prototype.showToastFuck = function (position) {
        // tslint:disable-next-line:prefer-const
        var toast = this.toastCtrl.create({
            message: 'Não foi possível salvar a imagem!',
            duration: 2000,
            // tslint:disable-next-line:object-literal-shorthand
            position: position,
            cssClass: 'center'
        });
        toast.present(toast);
    };
    AddWorkPage.prototype.showToast1 = function (position) {
        // tslint:disable-next-line:prefer-const
        var toast = this.toastCtrl.create({
            message: 'Altere tudo para poder adicionar!',
            duration: 2000,
            // tslint:disable-next-line:object-literal-shorthand
            position: position,
            cssClass: 'center'
        });
        toast.present(toast);
    };
    AddWorkPage.prototype.changePicture = function () {
        var _this = this;
        var actionsheet = this.actionsheetCtrl.create({
            title: 'upload picture',
            buttons: [
                {
                    text: 'camera',
                    icon: !this.platform.is('ios') ? 'camera' : null,
                    handler: function () {
                        _this.takePicture();
                    }
                },
                {
                    text: !this.platform.is('ios') ? 'gallery' : 'camera roll',
                    icon: !this.platform.is('ios') ? 'image' : null,
                    handler: function () {
                        _this.getPicture();
                    }
                },
                {
                    text: 'cancel',
                    icon: !this.platform.is('ios') ? 'close' : null,
                    role: 'destructive',
                    handler: function () {
                        console.log('the user has cancelled the interaction.');
                    }
                }
            ]
        });
        return actionsheet.present();
    };
    AddWorkPage.prototype.takePicture = function () {
        var _this = this;
        var loading = this.loadingCtrl.create();
        loading.present();
        return this.cameraProvider.getPictureFromCamera().then(function (picture) {
            if (picture) {
                _this.chosenPicture = picture;
            }
            loading.dismiss();
        }, function (error) {
            alert(error);
        });
    };
    AddWorkPage.prototype.getPicture = function () {
        var _this = this;
        var loading = this.loadingCtrl.create();
        loading.present();
        return this.cameraProvider.getPictureFromPhotoLibrary().then(function (picture) {
            if (picture) {
                _this.chosenPicture = picture;
            }
            loading.dismiss();
        }, function (error) {
            alert(error);
        });
    };
    AddWorkPage.prototype.tools_replaceAll = function (str, find, replace) {
        return str.replace(new RegExp(find, 'g'), replace);
    };
    AddWorkPage.prototype.addProduto = function (product) {
        var _this = this;
        var loading = this.loadingCtrl.create();
        loading.present();
        if (this.chosenPicture === undefined || this.chosenPicture === '' ||
            product.categoria === undefined || product.categoria === '' ||
            product.description === undefined || product.description === '' ||
            product.title === undefined || product.title === '') {
            loading.dismiss();
            this.showToast1('middle');
        }
        else {
            // let filePath: string = this.chosenPicture;
            var filePath = this.chosenPicture;
            this.base64.encodeFile(filePath).then(function (base64File) {
                _this.imagem64 = base64File;
                if (_this.imagem64 === undefined || _this.imagem64 === ''
                    || _this.imagem64 === null) {
                    _this.showToastFuck('middle');
                }
                // tslint:disable-next-line:no-var-keyword
                var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
                headers.append('Accept', 'application/json');
                headers.append('Content-Type', 'application/json');
                // tslint:disable-next-line:prefer-const
                var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: headers });
                _this.localstorage.getUser('ts').then(function (dados) {
                    // tslint:disable-next-line:prefer-const
                    var res = dados;
                    // tslint:disable-next-line:prefer-const
                    var data = JSON.stringify({
                        productTitle: product.title,
                        productorID: res._id,
                        productorName: res.name,
                        productCategory: product.categoria,
                        productDescription: product.description,
                        productImage: _this.imagem64
                    });
                    new Promise(function (resolve, reject) {
                        _this.http.post('https://imagine-art.herokuapp.com/product/newproduct/', data, options)
                            .toPromise()
                            .then(function (response) {
                            if (response.json().code === 200) {
                                loading.dismiss();
                                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
                                _this.showToast('middle');
                            }
                            console.log(response.json());
                            product = {};
                            loading.dismiss();
                            resolve(response.json());
                        })
                            .catch(function (error) {
                            reject(error.json());
                        });
                    });
                })
                    .catch(function (err) {
                    console.log('Error occurred :', err);
                });
            }, function (err) {
                console.log(err);
            });
        }
    };
    return AddWorkPage;
}());
AddWorkPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'page-add-work',template:/*ion-inline-start:"C:\imagine-art\src\pages\add-work\add-work.html"*/'<ion-header>\n    \n  <ion-navbar>\n    <ion-title>✔ Adicionando sua arte...</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding class="background">\n  <div>\n    <div id="posts">\n      <ion-card *ngFor="let post of posts">\n        <img [src]="chosenPicture || placeholder" onerror="post.postImageUrl">\n        <!--<ion-card-content>\n          <h2 class="padding-title"><strong>{{post.title}}</strong></h2>\n          <p>{{post.text}}</p>\n        </ion-card-content>-->\n      </ion-card>\n\n        <button ion-button color="dark" class="button-edit-posts" (click)="changePicture()">\n            <ion-icon name="md-brush"></ion-icon>\n        </button>\n\n\n        <ion-item>\n          <ion-label>Título:</ion-label>\n            <ion-input type="text" [(ngModel)]=\'product.title\' [attr.maxlength]="60"></ion-input>\n          </ion-item>\n\n      <ion-item>\n        <ion-label>Categoria:</ion-label>\n        <ion-select  [(ngModel)]="product.categoria" interface="popover">\n            <ion-option value="Biscuit" checked="true">Biscuit</ion-option>\n            <ion-option value="Book Pop-Up">Book PopUP</ion-option>\n            <ion-option value="Bordado">Bordado</ion-option>\n            <ion-option value="Corte e Costura">Corte e Costura</ion-option>\n            <ion-option value="Feltro">Feltro</ion-option>\n            <ion-option value="Madeira">Madeira</ion-option>\n            <ion-option value="Patchwork">Patchwork</ion-option>\n            <ion-option value="Pinturas">Pinturas</ion-option>\n            <ion-option value="Reciclagem">Reciclagem</ion-option>\n            <ion-option value="Scrapbook">ScrapBook</ion-option>\n          </ion-select>\n      </ion-item>\n\n          <ion-item>  \n            <ion-label>Descrição:</ion-label>\n              <ion-textarea type="text" [(ngModel)]=\'product.description\' autosize></ion-textarea>\n          </ion-item>           \n\n  \n          <button ion-button (click)="addProduto(product)" class="pronto-button center">PRONTO</button>\n    \n\n    </div>\n  </div>\n</ion-content>'/*ion-inline-end:"C:\imagine-art\src\pages\add-work\add-work.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* ActionSheetController */],
        __WEBPACK_IMPORTED_MODULE_0__providers_util_camera_provider__["a" /* CameraProvider */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_5__providers_localstorage__["a" /* Localstorage */],
        __WEBPACK_IMPORTED_MODULE_9__ionic_native_base64__["a" /* Base64 */],
        __WEBPACK_IMPORTED_MODULE_8__ionic_native_image_resizer__["a" /* ImageResizer */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* ToastController */]])
], AddWorkPage);

//# sourceMappingURL=add-work.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__works_works__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_localstorage__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = (function () {
    function HomePage(navCtrl, localstorage) {
        this.navCtrl = navCtrl;
        this.localstorage = localstorage;
        this.localstorage = localstorage;
    }
    HomePage.prototype.goToList = function (categoria) {
        this.localstorage.setCategoria(categoria);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__works_works__["a" /* WorksPage */]);
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-home',template:/*ion-inline-start:"C:\imagine-art\src\pages\home\home.html"*/'<ion-content class="background">\n  <div>\n    <ion-card class="category feltro" (click)="goToList(\'Feltro\')">\n      <div class="card-title">Feltro</div>\n    </ion-card>\n    <ion-card class="category biscuit" (click)="goToList(\'Biscuit\')">\n      <div class="card-title">Biscuit</div>\n    </ion-card>\n    <ion-card class="category madeira" (click)="goToList(\'Madeira\')">\n      <div class="card-title">Madeira</div>\n    </ion-card>\n    <ion-card class="category bordado" (click)="goToList(\'Bordado\')">\n      <div class="card-title">Bordado</div>\n    </ion-card>\n    <ion-card class="category scrapbook" (click)="goToList(\'Scrapbook\')">\n      <div class="card-title">ScrapBook</div>\n    </ion-card>\n    <ion-card class="category bookpopup" (click)="goToList(\'Book Pop-Up\')">\n      <div class="card-title">Book PopUp</div>\n    </ion-card>\n    <ion-card class="category corteecostura" (click)="goToList(\'Corte e Costura\')">\n      <div class="card-title">Corte e Costura</div>\n    </ion-card>\n    <!--<ion-card class="category decoupage" (click)="goToList(\'Découpage\')">\n      <div class="card-title">Découpage</div>\n    </ion-card>-->\n    <ion-card class="category patchwork" (click)="goToList(\'Patchwork\')">\n      <div class="card-title">Patchwork</div>\n    </ion-card>\n    <ion-card class="category pintura" (click)="goToList(\'Pinturas\')">\n      <div class="card-title">Pinturas</div>\n    </ion-card>\n    <ion-card class="category reciclagem" (click)="goToList(\'Reciclagem\')">\n      <div class="card-title">Reciclagem</div>\n    </ion-card>\n\n  </div>\n</ion-content>\n  '/*ion-inline-end:"C:\imagine-art\src\pages\home\home.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_localstorage__["a" /* Localstorage */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_util_toast_service__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_localstorage__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profile_profile__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_chat_messages_messages__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_catch__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









// tslint:disable-next-line:no-duplicate-imports

var ShowPage = (function () {
    // following = false;
    /*
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
    };*/
    function ShowPage(navCtrl, toastCtrl, http, localstorage, cdr, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.http = http;
        this.localstorage = localstorage;
        this.cdr = cdr;
        this.loadingCtrl = loadingCtrl;
        this.productInformation = [];
        this.localstorage = localstorage;
        this.localstorage.getUser('').then(function (userInformation) {
            _this.userID = userInformation._id;
        });
        this.localstorage.setChatID('');
        this.getProductInformation();
    }
    ShowPage.prototype.goToMessages = function (productorCallback) {
        // console.log(')))))))))))))))))');
        // console.log(productorCallback);
        // console.log(')))))))))))))))))');
        var produtor = {
            productorID: productorCallback.productorID,
            productorName: productorCallback.productorName,
            productTitle: productorCallback.productTitle
        };
        this.localstorage.setProductor(produtor);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__pages_chat_messages_messages__["a" /* MessagesPage */]);
    };
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
    ShowPage.prototype.getProductInformation = function () {
        var _this = this;
        var loading = this.loadingCtrl.create();
        loading.present();
        this.localstorage.getProductID().then(function (productIDCallback) {
            // tslint:disable-next-line:no-var-keyword
            var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
            headers.append('Accept', 'application/json');
            headers.append('Content-Type', 'application/json');
            // tslint:disable-next-line:object-literal-shorthand
            var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: headers });
            // tslint:disable-next-line:prefer-const
            var data = JSON.stringify({
                productID: productIDCallback
            });
            new Promise(function (resolve, reject) {
                _this.http.post('https://imagine-art.herokuapp.com/product/getUpdateProduct/', data, options)
                    .toPromise()
                    .then(function (response) {
                    _this.productInformation = response.json().product;
                    // console.log(response.json().product);
                    _this.cdr.markForCheck();
                    loading.dismiss();
                    resolve(response.json());
                })
                    .catch(function (error) {
                    console.error('API Error : ', error.status);
                    console.error('API Error : ', JSON.stringify(error));
                    reject(error.json());
                });
            });
        }).catch(function (err) {
            // tslint:disable-next-line:quotemark
            console.log("Error occurred :", err);
        });
    };
    // ------------------------------------//
    // FIM PEGAR INFORMACOES SOBRE PRODUTO //
    // ------------------------------------//
    // ************************************//
    // ------------------------------------//
    // --- IR PARA PERFIL DO PRODUTOR -----//
    // ------------------------------------//
    ShowPage.prototype.goToPerfil = function (produtorID) {
        this.localstorage.setProfileID(produtorID);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__profile_profile__["a" /* ProfilePage */]);
    };
    return ShowPage;
}());
ShowPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        changeDetection: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectionStrategy"].OnPush,
        selector: 'page-show',template:/*ion-inline-start:"C:\imagine-art\src\pages\show\show.html"*/'<ion-content padding class="transparent-header">\n  <ion-header>\n      <ion-navbar>\n      </ion-navbar>\n  </ion-header>\n<div id="posts">\n  <ion-card>\n    <ion-item  (click)="goToPerfil(productInformation.productorID)">\n      <!--<ion-avatar item-start>\n        <img [src]="productInformation.productImage">\n      </ion-avatar>-->\n      <h2 class="sticky">{{productInformation.productorName}}</h2>\n      <p style="color:rgb(89, 117, 201);">Entrar no perfil</p>\n    </ion-item>\n    <img [src]="productInformation.productImage">\n    <ion-card-content>\n      <strong>{{productInformation.productTitle}}</strong>\n      <p>{{productInformation.productDescription}}</p>\n    </ion-card-content>\n    <ion-row>\n      <!--<ion-col col-4>\n        <button ion-button color="purple" clear small icon-left (click)="like(post)">\n            <ion-icon name=\'thumbs-up\'></ion-icon>\n            {{post.likes}} Likes\n          </button>\n      </ion-col>-->\n      <ion-col col-5 *ngIf="userID !== productInformation.productorID">\n        <button ion-button no-padding color="purple" clear small icon-left (click)="goToMessages(productInformation)">\n            <ion-icon name=\'text\'></ion-icon>\n              Conversar\n          </button>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n</div>\n</ion-content>'/*ion-inline-end:"C:\imagine-art\src\pages\show\show.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_0__providers_util_toast_service__["a" /* ToastService */],
        __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__providers_localstorage__["a" /* Localstorage */],
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* LoadingController */]])
], ShowPage);

//# sourceMappingURL=show.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditWorkPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_util_camera_provider__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile_profile__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_localstorage__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_base64__ = __webpack_require__(61);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









// tslint:disable-next-line:no-duplicate-imports

var EditWorkPage = (function () {
    function EditWorkPage(navCtrl, actionsheetCtrl, cameraProvider, platform, loadingCtrl, navParams, http, localstorage, base64, cdr, toastCtrl) {
        this.navCtrl = navCtrl;
        this.actionsheetCtrl = actionsheetCtrl;
        this.cameraProvider = cameraProvider;
        this.platform = platform;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.http = http;
        this.localstorage = localstorage;
        this.base64 = base64;
        this.cdr = cdr;
        this.toastCtrl = toastCtrl;
        this.product = {};
        this.placeholder = 'assets/img/background/artesanato.jpg';
        this.posts = {};
        this.productInformation = [];
        this.localstorage = localstorage;
        this.getProduto();
    }
    // -----------------------------------------//
    // ----------- IMAGEM DE PRODUTO -----------//
    // -----------------------------------------//
    EditWorkPage.prototype.changePicture = function () {
        var _this = this;
        var actionsheet = this.actionsheetCtrl.create({
            title: 'upload picture',
            buttons: [
                {
                    text: 'camera',
                    icon: !this.platform.is('ios') ? 'camera' : null,
                    handler: function () {
                        _this.takePicture();
                    }
                },
                {
                    text: !this.platform.is('ios') ? 'gallery' : 'camera roll',
                    icon: !this.platform.is('ios') ? 'image' : null,
                    handler: function () {
                        _this.getPicture();
                    }
                },
                {
                    text: 'cancel',
                    icon: !this.platform.is('ios') ? 'close' : null,
                    role: 'destructive',
                    handler: function () {
                        console.log('the user has cancelled the interaction.');
                    }
                }
            ]
        });
        return actionsheet.present();
    };
    EditWorkPage.prototype.takePicture = function () {
        var _this = this;
        var loading = this.loadingCtrl.create();
        loading.present();
        return this.cameraProvider.getPictureFromCamera().then(function (picture) {
            if (picture) {
                _this.chosenPicture = picture;
            }
            loading.dismiss();
        }, function (error) {
            alert(error);
        });
    };
    EditWorkPage.prototype.getPicture = function () {
        var _this = this;
        var loading = this.loadingCtrl.create();
        loading.present();
        return this.cameraProvider.getPictureFromPhotoLibrary().then(function (picture) {
            if (picture) {
                _this.chosenPicture = picture;
            }
            loading.dismiss();
        }, function (error) {
            alert(error);
        });
    };
    // -----------------------------------------//
    // --------FIM IMAGEM DE PRODUTO -----------//
    // -----------------------------------------//
    // *****************************************//
    // -----------------------------------------//
    // ----------- GET ----- PRODUTO -----------//
    // -----------------------------------------//
    EditWorkPage.prototype.getProduto = function () {
        var _this = this;
        var loading = this.loadingCtrl.create();
        loading.present();
        this.localstorage.getProductID().then(function (productIDCallback) {
            // tslint:disable-next-line:no-var-keyword
            var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
            headers.append('Accept', 'application/json');
            headers.append('Content-Type', 'application/json');
            // tslint:disable-next-line:object-literal-shorthand
            var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: headers });
            // tslint:disable-next-line:prefer-const
            var data = JSON.stringify({
                productID: productIDCallback
            });
            new Promise(function (resolve, reject) {
                _this.http.post('https://imagine-art.herokuapp.com/product/getUpdateProduct/', data, options)
                    .toPromise()
                    .then(function (response) {
                    _this.productInformation = response.json().product;
                    _this.chosenPicture = response.json().product.productImage;
                    _this.localstorage.setProduct(response.json().product);
                    loading.dismiss();
                    resolve(response.json());
                    _this.cdr.markForCheck();
                    return response.json().user;
                })
                    .catch(function (error) {
                    console.error('API Error : ', error.status);
                    console.error('API Error : ', JSON.stringify(error));
                    reject(error.json());
                });
            });
        });
    };
    // -----------------------------------------//
    // --------FIM GET ----- PRODUTO -----------//
    // -----------------------------------------//
    // *****************************************//
    // -----------------------------------------//
    // ----------- REMOVER PRODUTO -----------//
    // -----------------------------------------//
    EditWorkPage.prototype.showToast = function (position) {
        // tslint:disable-next-line:prefer-const
        var toast = this.toastCtrl.create({
            message: 'Um projeto foi excluído!',
            duration: 3000,
            // tslint:disable-next-line:object-literal-shorthand
            position: position,
            cssClass: 'center'
        });
        toast.present(toast);
    };
    EditWorkPage.prototype.removerProduto = function (removerProdutoID) {
        var _this = this;
        var loading = this.loadingCtrl.create();
        loading.present();
        // tslint:disable-next-line:no-var-keyword
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');
        // tslint:disable-next-line:object-literal-shorthand
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: headers });
        // tslint:disable-next-line:prefer-const
        var data = JSON.stringify({
            productID: removerProdutoID
        });
        new Promise(function (resolve, reject) {
            _this.http.post('https://imagine-art.herokuapp.com/product/deleteProduct/', data, options)
                .toPromise()
                .then(function (response) {
                loading.dismiss();
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__profile_profile__["a" /* ProfilePage */]);
                _this.showToast('middle');
                return response.json().user;
            })
                .catch(function (error) {
                console.error('API Error : ', error.status);
                console.error('API Error : ', JSON.stringify(error));
                reject(error.json());
            });
        });
    };
    // -----------------------------------------//
    // --------FIM REMOVER PRODUTO -------------//
    // -----------------------------------------//
    // *****************************************//
    EditWorkPage.prototype.showToast1 = function (position) {
        // tslint:disable-next-line:prefer-const
        var toast = this.toastCtrl.create({
            message: 'Um projeto foi editado!',
            duration: 3000,
            // tslint:disable-next-line:object-literal-shorthand
            position: position,
            cssClass: 'center'
        });
        toast.present(toast);
    };
    EditWorkPage.prototype.editProduto = function (produtoInformacao) {
        var _this = this;
        var loading = this.loadingCtrl.create();
        loading.present();
        this.localstorage.getProductID().then(function (productIDCallback) {
            if (_this.chosenPicture === null || _this.chosenPicture === '') {
                // console.log('ADICIONAR IMAGEM');
            }
            else {
                _this.localstorage.getProduct().then(function (produtoAntesEdicao) {
                    if (_this.chosenPicture === produtoAntesEdicao.productImage) {
                        // tslint:disable-next-line:no-var-keyword
                        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
                        headers.append('Accept', 'application/json');
                        headers.append('Content-Type', 'application/json');
                        // tslint:disable-next-line:object-literal-shorthand
                        var options_1 = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: headers });
                        // tslint:disable-next-line:prefer-const
                        var data_1 = JSON.stringify({
                            productID: productIDCallback,
                            productTitle: produtoInformacao.title,
                            productCategory: produtoInformacao.productCategory,
                            productImage: _this.chosenPicture,
                            productDescription: produtoInformacao.description
                        });
                        // console.log('CONSOLE DATA', data);
                        new Promise(function (resolve, reject) {
                            _this.http.post('https://imagine-art.herokuapp.com/product/updateProduct/', data_1, options_1)
                                .toPromise()
                                .then(function (response) {
                                console.log('CONSOLE LOG DA VARIAVEL response.json()', response.json());
                                if (response.json().code === 200) {
                                    resolve(response.json());
                                }
                                loading.dismiss();
                                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__profile_profile__["a" /* ProfilePage */]);
                                _this.showToast1('middle');
                            })
                                .catch(function (error) {
                                console.error('API Error : ', error.status);
                                console.error('API Error : ', JSON.stringify(error));
                                reject(error.json());
                            });
                        });
                    }
                    else {
                        // tslint:disable-next-line:prefer-const
                        var filePath = _this.chosenPicture;
                        _this.base64.encodeFile(filePath).then(function (base64File) {
                            // console.log('productIDCallback', productIDCallback);
                            // tslint:disable-next-line:no-var-keyword
                            var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
                            headers.append('Accept', 'application/json');
                            headers.append('Content-Type', 'application/json');
                            // tslint:disable-next-line:object-literal-shorthand
                            var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: headers });
                            // tslint:disable-next-line:prefer-const
                            var data = JSON.stringify({
                                productID: productIDCallback,
                                productTitle: produtoInformacao.title,
                                productCategory: produtoInformacao.productCategory,
                                productImage: base64File,
                                productDescription: produtoInformacao.description
                            });
                            // console.log('CONSOLE DATA', data);
                            new Promise(function (resolve, reject) {
                                _this.http.post('https://imagine-art.herokuapp.com/product/updateProduct/', data, options)
                                    .toPromise()
                                    .then(function (response) {
                                    // console.log('CONSOLE LOG DA VARIAVEL response.json()',response.json());
                                    if (response.json().code === 200) {
                                        loading.dismiss();
                                        resolve(response.json());
                                    }
                                    loading.dismiss();
                                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__profile_profile__["a" /* ProfilePage */]);
                                    _this.showToast1('middle');
                                })
                                    .catch(function (error) {
                                    console.error('API Error : ', error.status);
                                    console.error('API Error : ', JSON.stringify(error));
                                    reject(error.json());
                                });
                            });
                        });
                    }
                });
            }
        }).catch(function (err) {
            // tslint:disable-next-line:quotemark
            console.log("Error occurred :", err);
        });
    };
    return EditWorkPage;
}());
EditWorkPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'page-edit-work',template:/*ion-inline-start:"C:\imagine-art\src\pages\edit-work\edit-work.html"*/'<ion-header>\n    \n  <ion-navbar>\n    <ion-title>✎ Editando sua arte...</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <div>\n    <div id="posts">\n      <ion-card>\n        <img [src]="chosenPicture || placeholder" onerror="post.postImageUrl">\n        <!--<ion-card-content>\n          <h2 class="padding-title"><strong>{{post.title}}</strong></h2>\n          <p>{{post.text}}</p>\n        </ion-card-content>-->\n      </ion-card>\n\n        <button ion-button color="dark" class="button-edit-posts" (click)="changePicture()">\n            <ion-icon name="md-brush"></ion-icon>\n        </button>\n\n\n        <ion-item>\n          <ion-label>Título:</ion-label>\n            <ion-input type="text" [(ngModel)]=\'product.title\' [value]=\'productInformation.productTitle\' [attr.maxlength]="60"></ion-input>\n          </ion-item>\n\n      <ion-item>\n        <ion-label>Categoria:</ion-label>\n        <ion-select  [(ngModel)]="product.productCategory"  interface="popover">\n          <ion-option *ngIf="productInformation.productCategory" value="productInformation.productCategory" [selected]=true >{{productInformation.productCategory}}</ion-option>\n          <ion-option value="Biscuit">Biscuit</ion-option>\n          <ion-option value="Book Pop-Up">Book PopUp</ion-option>\n          <ion-option value="Bordado">Bordado</ion-option>\n          <ion-option value="Corte e Costura">Corte e Costura</ion-option>\n          <ion-option value="Feltro">Feltro</ion-option>\n          <ion-option value="Madeira">Madeira</ion-option>\n          <ion-option value="Patchwork">Patchwork</ion-option>\n          <ion-option value="Pinturas">Pinturas</ion-option>\n          <ion-option value="Reciclagem">Reciclagem</ion-option>\n          <ion-option value="Scrapbook">ScrapBook</ion-option>\n        </ion-select>\n      </ion-item>\n\n          <ion-item>  \n            <ion-label>Descrição:</ion-label>\n              <ion-textarea type="text" [(ngModel)]=\'product.description\' [value]=\'productInformation.productDescription\' autosize></ion-textarea>\n          </ion-item>           \n      \n          <button ion-button class="border-radius color-excluir" (click)="removerProduto(productInformation._id)">Excluir</button>\n\n          <button ion-button (click)="editProduto(product)" class="pronto-button right">PRONTO</button>\n      \n    </div>\n  </div>\n</ion-content>'/*ion-inline-end:"C:\imagine-art\src\pages\edit-work\edit-work.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* ActionSheetController */],
        __WEBPACK_IMPORTED_MODULE_0__providers_util_camera_provider__["a" /* CameraProvider */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_5__providers_localstorage__["a" /* Localstorage */],
        __WEBPACK_IMPORTED_MODULE_8__ionic_native_base64__["a" /* Base64 */],
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* ToastController */]])
], EditWorkPage);

//# sourceMappingURL=edit-work.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_util_camera_provider__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile_profile__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_localstorage__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_base64__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_catch__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// tslint:disable-next-line:no-duplicate-imports








var EditProfilePage = (function () {
    function EditProfilePage(navCtrl, actionsheetCtrl, cameraProvider, platform, loadingCtrl, http, localstorage, base64, cdr, toastCtrl) {
        this.navCtrl = navCtrl;
        this.actionsheetCtrl = actionsheetCtrl;
        this.cameraProvider = cameraProvider;
        this.platform = platform;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.localstorage = localstorage;
        this.base64 = base64;
        this.cdr = cdr;
        this.toastCtrl = toastCtrl;
        this.placeholder = 'assets/img/icon/icon-o.png';
        this.placeholder1 = 'assets/img/icon/icon-o.png';
        this.userObj = [{
                name: '',
                backgroundimage: '',
                avatar: ''
            }];
        this.user = {};
        this.localstorage = localstorage;
    }
    EditProfilePage.prototype.showToast = function (position) {
        // tslint:disable-next-line:prefer-const
        var toast = this.toastCtrl.create({
            message: 'Seu perfil foi editado!',
            duration: 2000,
            // tslint:disable-next-line:object-literal-shorthand
            position: position,
            cssClass: 'center'
        });
        toast.present(toast);
    };
    EditProfilePage.prototype.ionViewWillEnter = function () {
        this.getProfileInfo();
    };
    // -----------------------------------------//
    // ------- SALVAR INFORMACOES DO PROFILE ---//
    // -----------------------------------------//
    EditProfilePage.prototype.updateProfile = function (userInformation) {
        /*const loading = this.loadingCtrl.create();
        loading.present();*/
        var _this = this;
        var data;
        this.localstorage.getUser('').then(function (userLocalStorage) {
            if (_this.chosenBackGroundPicture === undefined || _this.chosenBackGroundPicture === '' ||
                _this.chosenAvatarPicture === undefined || _this.chosenAvatarPicture === '') {
                // Se o usuario quiser alterar somente o background
                if (_this.chosenAvatarPicture === _this.userObj[0].avatar) {
                    // tslint:disable-next-line:prefer-const
                    var filePath = _this.chosenBackGroundPicture;
                    _this.base64.encodeFile(filePath).then(function (base64File) {
                        data = JSON.stringify({
                            userID: userLocalStorage._id,
                            name: userInformation.nome,
                            cidade: userInformation.cidade,
                            estado: userInformation.estado,
                            telefone: userInformation.telefone,
                            backgroundimage: base64File
                        });
                    });
                    _this.fnSalvarAlteracoes(data).then(function (result) {
                        console.log('');
                    });
                }
                // Se o usuario quiser alterar somente a imagem de avatar
                if (_this.chosenBackGroundPicture === _this.userObj[0].backgroundimage) {
                    // tslint:disable-next-line:prefer-const
                    var filePath = _this.chosenAvatarPicture;
                    _this.base64.encodeFile(filePath).then(function (base64File) {
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
                    _this.fnSalvarAlteracoes(data).then(function (result) {
                        console.log('');
                    });
                }
                // Se o nao quiser alterar avatar nem background
                if (_this.chosenAvatarPicture === _this.userObj[0].avatar &&
                    _this.chosenBackGroundPicture === _this.userObj[0].backgroundimage) {
                    // tslint:disable-next-line:prefer-const
                    data = JSON.stringify({
                        userID: userLocalStorage._id,
                        name: userInformation.nome,
                        cidade: userInformation.cidade,
                        estado: userInformation.estado,
                        telefone: userInformation.telefone
                    });
                    _this.fnSalvarAlteracoes(data).then(function (result) {
                        console.log('');
                    });
                }
                // Se usuario vai alterar imagem de background e avatar
            }
            else {
                // transforma a imagem selecionada do background em base64
                // tslint:disable-next-line:prefer-const
                var fileBackGroundPath = _this.chosenBackGroundPicture;
                _this.base64.encodeFile(fileBackGroundPath).then(function (base64BackGroundFile) {
                    // transforma a imagem selecionada do avatar em base64
                    // tslint:disable-next-line:prefer-const
                    var fileAvatarPath = _this.chosenAvatarPicture;
                    _this.base64.encodeFile(fileAvatarPath).then(function (base64AvatarFile) {
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
                        _this.fnSalvarAlteracoes(data).then(function (result) {
                            console.log('');
                        });
                    });
                });
            }
        });
    };
    // -----------------------------------------//
    // --- FIM SALVAR INFORMACOES DO PROFILE ---//
    // -----------------------------------------//
    // *****************************************//
    // -----------------------------------------//
    // -FUNCAO SALVAR INFORMACOES DO PROFILE ---//
    // -----------------------------------------//
    EditProfilePage.prototype.fnSalvarAlteracoes = function (data) {
        var _this = this;
        var loading = this.loadingCtrl.create();
        loading.present();
        // tslint:disable-next-line:no-var-keyword prefer-const
        var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Headers */]();
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');
        // tslint:disable-next-line:object-literal-shorthand
        var options = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["d" /* RequestOptions */]({ headers: headers });
        new Promise(function (resolve, reject) {
            _this.http.post('https://imagine-art.herokuapp.com/user/updateProfile/', data, options)
                .toPromise()
                .then(function (response) {
                if (response.json().code === 200) {
                    loading.dismiss();
                    resolve(response.json());
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__profile_profile__["a" /* ProfilePage */]);
                    _this.showToast('middle');
                }
            })
                .catch(function (error) {
                console.error('API Error : ', error.status);
                console.error('API Error : ', JSON.stringify(error));
                reject(error.json());
            });
        });
    };
    // -----------------------------------------//
    // FIM FUNCAO SALVAR INFORMACOES DO PROFILE-//
    // -----------------------------------------//
    // *****************************************//
    // -----------------------------------------//
    // --- PEGAR INFORMACOES DO PROFILE --------//
    // -----------------------------------------//
    EditProfilePage.prototype.getProfileInfo = function () {
        var _this = this;
        var loading = this.loadingCtrl.create();
        loading.present();
        this.localstorage.getUser('').then(function (user) {
            // tslint:disable-next-line:no-var-keyword
            var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Headers */]();
            headers.append('Accept', 'application/json');
            headers.append('Content-Type', 'application/json');
            // tslint:disable-next-line:object-literal-shorthand
            var options = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["d" /* RequestOptions */]({ headers: headers });
            // tslint:disable-next-line:prefer-const
            var data = JSON.stringify({
                userID: user._id
            });
            new Promise(function (resolve, reject) {
                _this.http.post('https://imagine-art.herokuapp.com/user/getUpdateProfile/', data, options)
                    .toPromise()
                    .then(function (response) {
                    // console.log('CONSOLE LOG DA VARIAVEL response.json()',response.json());
                    if (response.json().code === 200) {
                        _this.userObj = response.json().user;
                        _this.chosenAvatarPicture = response.json().user.avatar;
                        _this.chosenBackGroundPicture = response.json().user.backgroundimage;
                        _this.teste = response.json().user.name;
                        loading.dismiss();
                        resolve(response.json());
                        _this.cdr.markForCheck();
                        return response.json().user;
                    }
                })
                    .catch(function (error) {
                    console.error('API Error : ', error.status);
                    console.error('API Error : ', JSON.stringify(error));
                    reject(error.json());
                });
            });
        })
            .catch(function (err) {
            // tslint:disable-next-line:quotemark
            console.log("Error occurred :", err);
        });
    };
    // -----------------------------------------//
    // --- FIM PEGAR INFORMACOES DO PROFILE ----//
    // -----------------------------------------//
    // *****************************************//
    // -----------------------------------------//
    // ----------- IMAGEM DE BACKGROUND --------//
    // -----------------------------------------//
    EditProfilePage.prototype.changeBackGroundPicture = function () {
        var _this = this;
        var actionsheet = this.actionsheetCtrl.create({
            title: 'upload picture',
            buttons: [
                {
                    text: 'camera',
                    icon: !this.platform.is('ios') ? 'camera' : null,
                    handler: function () {
                        _this.takeBackGroundPicture();
                    }
                },
                {
                    text: !this.platform.is('ios') ? 'gallery' : 'camera roll',
                    icon: !this.platform.is('ios') ? 'image' : null,
                    handler: function () {
                        _this.getBackGroundPicture();
                    }
                },
                {
                    text: 'cancel',
                    icon: !this.platform.is('ios') ? 'close' : null,
                    role: 'destructive',
                    handler: function () {
                        console.log('the user has cancelled the interaction.');
                    }
                }
            ]
        });
        return actionsheet.present();
    };
    EditProfilePage.prototype.takeBackGroundPicture = function () {
        var _this = this;
        var loading = this.loadingCtrl.create();
        loading.present();
        return this.cameraProvider.getPictureFromCamera().then(function (picture) {
            if (picture) {
                _this.chosenBackGroundPicture = picture;
                _this.cdr.markForCheck();
            }
            loading.dismiss();
        }, function (error) {
            alert(error);
        });
    };
    EditProfilePage.prototype.getBackGroundPicture = function () {
        var _this = this;
        var loading = this.loadingCtrl.create();
        loading.present();
        return this.cameraProvider.getPictureFromPhotoLibrary().then(function (picture) {
            if (picture) {
                _this.chosenBackGroundPicture = picture;
                _this.cdr.markForCheck();
            }
            loading.dismiss();
        }, function (error) {
            alert(error);
        });
    };
    // -----------------------------------------//
    // ------- FIM IMAGEM DE BACKGROUND --------//
    // -----------------------------------------//
    // *****************************************//
    // -----------------------------------------//
    // ----------- IMAGEM DE AVATAR ------------//
    // -----------------------------------------//
    EditProfilePage.prototype.changeAvatarPicture = function () {
        var _this = this;
        var actionsheet = this.actionsheetCtrl.create({
            title: 'upload picture',
            buttons: [
                {
                    text: 'camera',
                    icon: !this.platform.is('ios') ? 'camera' : null,
                    handler: function () {
                        _this.takeAvatarPicture();
                    }
                },
                {
                    text: !this.platform.is('ios') ? 'gallery' : 'camera roll',
                    icon: !this.platform.is('ios') ? 'image' : null,
                    handler: function () {
                        _this.getAvatarPicture();
                    }
                },
                {
                    text: 'cancel',
                    icon: !this.platform.is('ios') ? 'close' : null,
                    role: 'destructive',
                    handler: function () {
                        console.log('the user has cancelled the interaction.');
                    }
                }
            ]
        });
        return actionsheet.present();
    };
    EditProfilePage.prototype.takeAvatarPicture = function () {
        var _this = this;
        var loading = this.loadingCtrl.create();
        loading.present();
        return this.cameraProvider.getPictureFromCamera().then(function (picture) {
            if (picture) {
                _this.chosenAvatarPicture = picture;
                _this.cdr.markForCheck();
            }
            loading.dismiss();
        }, function (error) {
            alert(error);
        });
    };
    EditProfilePage.prototype.getAvatarPicture = function () {
        var _this = this;
        var loading = this.loadingCtrl.create();
        loading.present();
        return this.cameraProvider.getPictureFromPhotoLibrary().then(function (picture) {
            if (picture) {
                _this.chosenAvatarPicture = picture;
                _this.cdr.markForCheck();
            }
            loading.dismiss();
        }, function (error) {
            alert(error);
        });
    };
    return EditProfilePage;
}());
EditProfilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'page-edit-profile',template:/*ion-inline-start:"C:\imagine-art\src\pages\edit-profile\edit-profile.html"*/'<ion-content padding>\n  <ion-header>\n    <ion-navbar>\n      <ion-title>✎ Editando perfil...</ion-title>\n    </ion-navbar>\n  </ion-header>\n  <div id="profile-bg" [ngStyle]="{\'background-image\': \'url(\' + chosenBackGroundPicture + \')\'}"></div>\n  <div id="content">\n    <div style="margin-top: -10vh;">\n      <button ion-button color="dark" class="button-edit-posts" (click)="changeBackGroundPicture()">\n          <ion-icon name="md-brush"></ion-icon>\n      </button>\n    </div>\n\n    <hr style="margin-top: 10vh"/>\n\n    <div id="profile-info" padding>\n      <img id="profile-image" [src]="chosenAvatarPicture">\n    </div>\n    <div style="margin-top: -25vh;">\n      <button ion-button color="dark" class="button-edit-posts" (click)="changeAvatarPicture()">\n          <ion-icon name="md-brush"></ion-icon>\n      </button> \n    </div>\n\n    <hr style="margin-top: 10vh"/>\n\n    <div id="profile-info2" padding>\n\n      <ion-item>\n        <ion-label>Nome:</ion-label>\n        <ion-input type="text" [(ngModel)]="user.nome" value="{{userObj.name}}" [attr.maxlength]="20"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Cidade:</ion-label>\n        <ion-input type="text" [(ngModel)]="user.cidade" value="{{userObj.city}}" [attr.maxlength]="15"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Estado:</ion-label>\n        <ion-input type="text" [(ngModel)]="user.estado" value="{{userObj.state}}" [attr.maxlength]="15"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Telefone:</ion-label>\n        <ion-input type="text" [(ngModel)]="user.telefone" value="{{userObj.cellphone}}" [maxlength]="16"></ion-input>\n      </ion-item>\n\n    </div>\n\n  <ion-row>\n      <button ion-button (click)="editProfile" class="pronto-button center" (click)="updateProfile(user)">PRONTO</button>\n    </ion-row>\n\n</div>\n</ion-content>'/*ion-inline-end:"C:\imagine-art\src\pages\edit-profile\edit-profile.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* ActionSheetController */],
        __WEBPACK_IMPORTED_MODULE_0__providers_util_camera_provider__["a" /* CameraProvider */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_4__providers_localstorage__["a" /* Localstorage */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_native_base64__["a" /* Base64 */],
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* ToastController */]])
], EditProfilePage);

//# sourceMappingURL=edit-profile.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_localstorage__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__works_works__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_user__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SearchPage = (function () {
    function SearchPage(navCtrl, navParams, http, localstorage, toastCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.localstorage = localstorage;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.search = {};
        this.error = false;
    }
    SearchPage.prototype.showToast = function (position) {
        // tslint:disable-next-line:prefer-const
        var toast = this.toastCtrl.create({
            message: 'Digite algo para buscar!',
            duration: 2000,
            // tslint:disable-next-line:object-literal-shorthand
            position: position,
            cssClass: 'center'
        });
        toast.present(toast);
    };
    SearchPage.prototype.searchfn = function (search) {
        var _this = this;
        var loading = this.loadingCtrl.create();
        var search1 = search.busca;
        if (search1 === undefined || search1 === '') {
            this.showToast('middle');
        }
        else {
            loading.present();
            if (search.tipo === 'nome') {
                // tslint:disable-next-line:no-var-keyword
                var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
                headers.append('Accept', 'application/json');
                headers.append('Content-Type', 'application/json');
                // tslint:disable-next-line:object-literal-shorthand
                var options_1 = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
                // tslint:disable-next-line:prefer-const
                var data_1 = JSON.stringify({
                    name: search.busca
                });
                new Promise(function (resolve, reject) {
                    _this.http.post('https://imagine-art.herokuapp.com/user/searchProfile/', data_1, options_1)
                        .toPromise()
                        .then(function (response) {
                        _this.localstorage.setSearch(response.json().user);
                        console.log(response.json());
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__user_user__["a" /* UserPage */]);
                        loading.dismiss();
                        resolve(response.json());
                    })
                        .catch(function (error) {
                        console.error('API Error : ', error.status);
                        console.error('API Error : ', JSON.stringify(error));
                        reject(error.json());
                    });
                })
                    .catch(function (err) {
                    // tslint:disable-next-line:quotemark
                    console.log("Error occurred :", err);
                });
            }
            // **************************************************************************
            // **********************BUSCA  POR NOME DO PRODUTO**************************
            // **************************************************************************
            if (search.tipo === 'titulo') {
                // tslint:disable-next-line:no-var-keyword
                var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
                headers.append('Accept', 'application/json');
                headers.append('Content-Type', 'application/json');
                // tslint:disable-next-line:object-literal-shorthand
                var options_2 = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
                // tslint:disable-next-line:prefer-const
                var data_2 = JSON.stringify({
                    productTitle: search.busca
                });
                new Promise(function (resolve, reject) {
                    _this.http.post('https://imagine-art.herokuapp.com/product/searchProduct/', data_2, options_2)
                        .toPromise()
                        .then(function (response) {
                        _this.localstorage.setSearch(response.json().product);
                        console.log(response.json());
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__works_works__["a" /* WorksPage */]);
                        loading.dismiss();
                        resolve(response.json());
                    })
                        .catch(function (error) {
                        console.error('API Error : ', error.status);
                        console.error('API Error : ', JSON.stringify(error));
                        reject(error.json());
                    });
                })
                    .catch(function (err) {
                    // tslint:disable-next-line:quotemark
                    console.log("Error occurred :", err);
                });
            }
        }
    };
    return SearchPage;
}());
SearchPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-search',template:/*ion-inline-start:"C:\imagine-art\src\pages\search\search.html"*/'<ion-content padding class="background">\n  <ion-row>\n    <!--<img  class="center icon-p" src="assets/img/icon/icon-pb.png">-->\n  </ion-row>\n\n  <ion-row class="padding-top">\n      <img  class="center icon-b" src="assets/img/icon/written-b.png">\n    </ion-row>\n\n  <!--<ion-row class="margin center text">\n    <p class="margin-bottom"></p>\n  </ion-row>-->\n\n  <ion-item class="ion-select">\n      <!--<ion-label>Gênero</ion-label>-->\n      <ion-select interface="popover" placeholder="Nome Artesão / Título da Arte" class="ion-select" [(ngModel)]="search.tipo">\n        <ion-option class="ion-select" value="nome">Nome do artesão</ion-option>\n        <ion-option class="ion-select" value="titulo">Título da arte</ion-option>\n      </ion-select>\n  </ion-item>\n\n  <ion-item class="input">\n    <ion-input type="text" [(ngModel)]="search.busca"></ion-input>\n  </ion-item>\n\n  <button ion-button icon-end color="dark" class="center size buscar-button text-transform" (click)="searchfn(search)">\n        Buscar\n      <ion-icon name="md-search" class="" ></ion-icon>\n  </button>\n\n</ion-content>\n'/*ion-inline-end:"C:\imagine-art\src\pages\search\search.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__providers_localstorage__["a" /* Localstorage */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */]])
], SearchPage);

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_localstorage__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_profile__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UserPage = (function () {
    function UserPage(navCtrl, navParams, 
        // public toastCtrl: ToastController,
        http, localstorage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.localstorage = localstorage;
        this.users = [];
        this.searchResult = [];
        this.localstorage = localstorage;
        this.localstorage.getSearch().then(function (search) {
            if (search === undefined || search === null) {
                _this.getUsers();
            }
            else {
                _this.localstorage.getUser('').then(function (user) {
                    _this.users = search;
                    _this.currentlyUserID = user._id;
                    // console.log('++++++++++++++++');
                    // console.log(search);
                    // console.log('------------------');
                    // console.log(this.currentlyUserID);
                    // console.log('++++++++++++++++');
                    _this.localstorage.setSearch(undefined);
                });
            }
        });
    }
    UserPage.prototype.goToProfile = function (userID) {
        this.localstorage.setProfileID(userID);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__profile_profile__["a" /* ProfilePage */]);
    };
    UserPage.prototype.getUsers = function () {
        var _this = this;
        this.localstorage.getSearch().then(function (nome) {
            // tslint:disable-next-line:no-var-keyword
            var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
            headers.append('Accept', 'application/json');
            headers.append('Content-Type', 'application/json');
            // tslint:disable-next-line:object-literal-shorthand
            var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
            // tslint:disable-next-line:prefer-const
            var data = JSON.stringify({
                name: nome
            });
            new Promise(function (resolve, reject) {
                _this.http.post('https://imagine-art.herokuapp.com/user/searchProfile/', data, options)
                    .toPromise()
                    .then(function (response) {
                    // console.log(response.json().data);
                    _this.users = response.json().data;
                    resolve(response.json());
                })
                    .catch(function (error) {
                    console.error('API Error : ', error.status);
                    console.error('API Error : ', JSON.stringify(error));
                    reject(error.json());
                });
            });
        })
            .catch(function (err) {
            // tslint:disable-next-line:quotemark
            console.log("Error occurred :", err);
        });
    };
    return UserPage;
}());
UserPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-user',template:/*ion-inline-start:"C:\imagine-art\src\pages\user\user.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Perfils</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="transparent-header">\n  <div class="pins">\n    <div *ngFor="let user of users" style="width:48%; float:left; padding:0; margin:0;" >\n      <ion-card class="pin" *ngIf="user._id != currentlyUserID" (click)="goToProfile(user._id)" >\n        <!--<img src="{{user.productImage}}"/>-->\n            <img [src]="user.avatar">\n        \n        <ion-item style="text-align: center;" class="post-description">\n          <p class="text"><strong>{{ user.name }}</strong></p>\n          <!--<p><small class="text">{{ user.name }}</small></p>-->\n        </ion-item>\n      </ion-card>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\imagine-art\src\pages\user\user.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_2__providers_localstorage__["a" /* Localstorage */]])
], UserPage);

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 16:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Localstorage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(171);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { Http } from '@angular/http';


/*
  Generated class for the Localstorage provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var Localstorage = (function () {
    function Localstorage(storage) {
        this.storage = storage;
    }
    // store the email address
    Localstorage.prototype.setUser = function (user) {
        this.storage.set('user', user);
    };
    Localstorage.prototype.getUser = function (nome) {
        return this.storage.get('user').then(function (user) {
            return user;
        });
    };
    // store the email address
    Localstorage.prototype.setProduct = function (product) {
        this.storage.set('product', product);
    };
    Localstorage.prototype.getProduct = function () {
        return this.storage.get('product').then(function (product) {
            return product;
        });
    };
    Localstorage.prototype.setCategoria = function (categoria) {
        this.storage.set('categoria', categoria);
    };
    Localstorage.prototype.getCategoria = function () {
        return this.storage.get('categoria').then(function (categoria) {
            return categoria;
        });
    };
    Localstorage.prototype.setProfileID = function (profileID) {
        this.storage.set('profileID', profileID);
    };
    Localstorage.prototype.getProfileID = function () {
        return this.storage.get('profileID').then(function (profileID) {
            return profileID;
        });
    };
    Localstorage.prototype.setSearch = function (search) {
        this.storage.set('search', search);
    };
    Localstorage.prototype.getSearch = function () {
        return this.storage.get('search').then(function (search) {
            return search;
        });
    };
    Localstorage.prototype.setProductID = function (productID) {
        this.storage.set('productID', productID);
    };
    Localstorage.prototype.getProductID = function () {
        return this.storage.get('productID').then(function (productID) {
            return productID;
        });
    };
    Localstorage.prototype.setProductor = function (productor) {
        this.storage.set('productor', productor);
    };
    Localstorage.prototype.getProductor = function () {
        return this.storage.get('productor').then(function (productor) {
            return productor;
        });
    };
    Localstorage.prototype.setChatID = function (chatID) {
        this.storage.set('chatID', chatID);
    };
    Localstorage.prototype.getChatID = function () {
        return this.storage.get('chatID').then(function (chatID) {
            return chatID;
        });
    };
    // clear the whole local storage
    Localstorage.prototype.clearStorage = function () {
        this.storage.clear().then(function () {
            console.log('all keys are cleared');
        });
    };
    return Localstorage;
}());
Localstorage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
], Localstorage);

//# sourceMappingURL=localstorage.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chat_messages_messages__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_localstorage__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ChatsPage = ChatsPage_1 = (function () {
    function ChatsPage(navCtrl, http, localstorage, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.localstorage = localstorage;
        this.loadingCtrl = loadingCtrl;
        this.chats = [];
        // window.location.reload();
        this.localstorage = localstorage;
        this.getChat();
    }
    ChatsPage.prototype.reload = function () {
        var _this = this;
        setTimeout(function () {
            _this.navCtrl.setRoot(ChatsPage_1);
        }, 100);
    };
    ChatsPage.prototype.getChat = function () {
        var _this = this;
        var loading = this.loadingCtrl.create();
        loading.present();
        this.localstorage.getUser('').then(function (user) {
            _this.userID = user._id;
            // tslint:disable-next-line:no-var-keyword
            var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
            headers.append('Accept', 'application/json');
            headers.append('Content-Type', 'application/json');
            // tslint:disable-next-line:object-literal-shorthand
            var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: headers });
            // tslint:disable-next-line:prefer-const
            var data = JSON.stringify({
                personSender: _this.userID
            });
            new Promise(function (resolve, reject) {
                _this.http.post('https://imagine-art.herokuapp.com/message/getChat/', data, options)
                    .toPromise()
                    .then(function (response) {
                    _this.chats = response.json().chat;
                    loading.dismiss();
                    resolve(response.json());
                })
                    .catch(function (error) {
                    console.error('API Error : ', error.status);
                    console.error('API Error : ', JSON.stringify(error));
                    reject(error.json());
                });
            });
        })
            .catch(function (err) {
            // tslint:disable-next-line:quotemark
            console.log("Error occurred :", err);
        });
    };
    ChatsPage.prototype.viewMessages = function (chat) {
        this.localstorage.setChatID(chat);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__chat_messages_messages__["a" /* MessagesPage */], { chatId: chat._id });
    };
    return ChatsPage;
}());
ChatsPage = ChatsPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\imagine-art\src\pages\chat\chats.html"*/'<ion-header>\n  <ion-navbar primary>\n    <ion-title>\n      Mensagens\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content class="chats">\n  <!--<ion-refresher (ionRefresh)="doRefresh($event)">\n  <ion-refresher-content>-->\n  <button ion-button color="dark" icon-end class="text-transform center margin" (click)="reload()">\n      Atualizar   \n      <ion-icon name="md-refresh"></ion-icon>\n  </button>\n\n  <ion-list>\n    <ion-item *ngFor="let chat of chats" (click)="viewMessages(chat)">\n      <!--<ion-avatar item-start (click)="viewMessages(chat)">\n        <img [src]="chat.imageUrl">\n      </ion-avatar>-->\n      <h2>{{chat.title}}</h2>\n      <p>{{chat.lastMessage}}</p>\n      <ion-note item-end></ion-note>\n    </ion-item>\n  </ion-list>\n\n  <!--<ion-list>\n    <ion-list-header>Last Week</ion-list-header>\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="assets/img/avatar/marty-avatar.png">\n      </ion-avatar>\n      <h2>McFly</h2>\n      <p>Lorem ipsum dolor sit amet..</p>\n      <ion-note item-end>11:11 pm</ion-note>\n    </ion-item>\n  </ion-list>-->\n<!--</ion-refresher-content>\n</ion-refresher>-->\n</ion-content>\n'/*ion-inline-end:"C:\imagine-art\src\pages\chat\chats.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_3__providers_localstorage__["a" /* Localstorage */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */]])
], ChatsPage);

var ChatsPage_1;
//# sourceMappingURL=chats.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(86);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SignupPage = (function () {
    function SignupPage(navCtrl, navParams, database, toastCtrl, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.database = database;
        this.toastCtrl = toastCtrl;
        this.http = http;
        this.user = {};
        this.tamanhosenha = 0;
        this.error = '';
        this.type = 'password';
        this.showPass = false;
        this.userRef$ = this.database.list('user');
    }
    SignupPage.prototype.showToast = function (position) {
        // tslint:disable-next-line:prefer-const
        var toast = this.toastCtrl.create({
            message: 'Você se inscreveu com SUCESSO!',
            duration: 2000,
            // tslint:disable-next-line:object-literal-shorthand
            position: position,
            cssClass: 'center'
        });
        toast.present(toast);
    };
    SignupPage.prototype.showToastEmailUsado = function (position) {
        // tslint:disable-next-line:prefer-const
        var toast = this.toastCtrl.create({
            message: 'Email já está em uso.',
            duration: 2000,
            // tslint:disable-next-line:object-literal-shorthand
            position: position,
            cssClass: 'center'
        });
        toast.present(toast);
    };
    SignupPage.prototype.showToast1 = function (position) {
        // tslint:disable-next-line:prefer-const
        var toast = this.toastCtrl.create({
            message: 'Algo deu errado! Verifique sua internet.',
            duration: 2000,
            // tslint:disable-next-line:object-literal-shorthand
            position: position,
            cssClass: 'center'
        });
        toast.present(toast);
    };
    SignupPage.prototype.showToastEmailIncorreto = function (position) {
        // tslint:disable-next-line:prefer-const
        var toast = this.toastCtrl.create({
            message: 'Email está em formato incorreto',
            duration: 2000,
            // tslint:disable-next-line:object-literal-shorthand
            position: position,
            cssClass: 'center'
        });
        toast.present(toast);
    };
    SignupPage.prototype.isValid = function (email) {
        // tslint:disable-next-line:max-line-length
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
        if (re) {
            return { invalidEmail: false };
        }
        return { invalidEmail: true };
    };
    SignupPage.prototype.register = function (user) {
        var _this = this;
        var userEmail = user.email;
        var userSenha = user.senha;
        var userNome = user.nome;
        var emailValid = this.isValid(userEmail);
        if (emailValid.invalidEmail === true) {
            this.showToastEmailIncorreto('middle');
        }
        else {
            // tslint:disable-next-line:no-empty
            if (userSenha === undefined || userSenha === '') {
            }
            else {
                this.tamanhosenha = userSenha.length;
                // console.log(this.tamanhosenha);
            }
            // console.log(userEmail, 'USEREMAIL');
            if (userNome === undefined || userNome === '' ||
                userEmail === undefined || userEmail === '' ||
                userSenha === undefined || userSenha === '' || this.tamanhosenha <= 2) {
                if (userNome === undefined || userNome === '') {
                    // console.log('nome');
                    if (this.error === '') {
                        this.error = 'Necessário digitar o seu nome.';
                    }
                }
                else {
                    this.error = '';
                }
                if (userSenha === undefined || userSenha === '') {
                    // console.log('senha');
                    if (this.error === '') {
                        this.error = 'Nessário digitar a senha.';
                    }
                }
                else {
                    if (this.tamanhosenha <= 2) {
                        if (this.error === '') {
                            this.error = 'Senha de no mínimo 3 caracteres.';
                        }
                    }
                }
            }
            else {
                // tslint:disable-next-line:no-var-keyword
                var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
                headers.append('Accept', 'application/json');
                headers.append('Content-Type', 'application/json');
                // tslint:disable-next-line:prefer-const
                var options_1 = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
                new Promise(function (resolve, reject) {
                    _this.http.post('https://imagine-art.herokuapp.com/user/signup/', JSON.stringify({
                        email: user.email,
                        password: user.senha,
                        name: user.nome,
                    }), options_1)
                        .toPromise()
                        .then(function (response) {
                        if (response.json().code === 11000) {
                            _this.showToastEmailUsado('middle');
                        }
                        else {
                            // console.log('API Response : ', response.json());
                            // console.log('DATA');
                            localStorage.setItem('user', JSON.stringify(response));
                            resolve(response.json());
                            _this.showToast('middle');
                            // this.navCtrl.pop();
                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */]);
                        }
                    })
                        .catch(function (error) {
                        console.error('API Error : ', error.status);
                        console.error('API Error : ', JSON.stringify(error));
                        _this.showToast1('middle');
                        reject(error.json());
                    });
                });
                user = {};
            }
        }
    };
    SignupPage.prototype.showPassword = function () {
        this.showPass = !this.showPass;
        if (this.showPass) {
            this.type = 'text';
        }
        else {
            this.type = 'password';
        }
    };
    return SignupPage;
}());
SignupPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-signup',template:/*ion-inline-start:"C:\imagine-art\src\pages\signup\signup.html"*/'<!--\n  Generated template for the SignupPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!--<ion-header>\n <ion-navbar>\n    <ion-title>signup</ion-title>\n    \n  </ion-navbar>-->\n  <!--<ion-title padding class="transparent-header"><p class="text-transform2">Inscreva-se</p></ion-title>\n</ion-header>-->\n\n\n<ion-content padding class="ion-content">\n  \n  <!--<ion-icon class="invert" name="ios-umbrella-outline" outline></ion-icon>-->\n  <img  class="center icon-pb" src="assets/img/icon/icon-pb.png">\n  <img  class="center written" src="assets/img/icon/written-p.png">\n \n  <!--<p class="text-transform2">Inscreva-se</p>-->\n  \n  <ion-list>\n    <ion-item>\n      <ion-input type="text" [(ngModel)]=\'user.nome\' placeholder="Nome" [attr.maxlength]="20"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-input type="email" [(ngModel)]=\'user.email\' placeholder="Email" style="height: -10%;" [attr.maxlength]="104"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-input type="{{type}}" [(ngModel)]=\'user.senha\' placeholder="Senha"  required pattern=".{3,10}" [attr.maxlength]="104"></ion-input>\n      <!--<ion-input type="{{type}}" name="password" ngModel #password="ngModel"></ion-input>-->\n      \n      <button *ngIf="!showPass" ion-button clear color="dark" type="button" item-right (click)="showPassword()"> <ion-icon name="md-eye-off"></ion-icon></button>\n      <button *ngIf="showPass" ion-button clear color="dark" type="button" item-right (click)="showPassword()"> <ion-icon name="md-eye"></ion-icon></button>\n    </ion-item>\n\n    <!--<ion-item class="ion-select">\n      <ion-label>Gênero</ion-label>\n      <ion-select [(ngModel)]=\'user.genero\' interface="popover">\n        <ion-option value="f" checked="true">Feminino</ion-option>\n        <ion-option value="m">Masculino</ion-option>\n        <ion-option value="o">Outros</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item class="ion-select">\n      <ion-label style="color: #949494;">Data de Nascimento</ion-label>\n    </ion-item>\n    <ion-item class="ion-select">\n      <ion-label>Data</ion-label>\n      <ion-select [(ngModel)]="data">\n          <ion-option value="01" checked="true">1</ion-option>\n          <ion-option value="02">2</ion-option>\n          <ion-option value="03">3</ion-option>\n          <ion-option value="04">4</ion-option>\n          <ion-option value="05">5</ion-option>\n          <ion-option value="06">6</ion-option>\n          <ion-option value="07">7</ion-option>\n          <ion-option value="08">8</ion-option>\n          <ion-option value="09">9</ion-option>\n          <ion-option value="10">10</ion-option>\n          <ion-option value="11">11</ion-option>\n          <ion-option value="12">12</ion-option>\n          <ion-option value="13">13</ion-option>\n          <ion-option value="14">14</ion-option>\n          <ion-option value="15">15</ion-option>\n          <ion-option value="16">16</ion-option>\n          <ion-option value="17">17</ion-option>\n          <ion-option value="18">18</ion-option>\n          <ion-option value="19">19</ion-option>\n          <ion-option value="20">20</ion-option>\n          <ion-option value="21">21</ion-option>\n          <ion-option value="22">22</ion-option>\n          <ion-option value="23">23</ion-option>\n          <ion-option value="24">24</ion-option>\n          <ion-option value="25">25</ion-option>\n          <ion-option value="26">26</ion-option>\n          <ion-option value="27">27</ion-option>\n          <ion-option value="28">28</ion-option>\n          <ion-option value="29">29</ion-option>\n          <ion-option value="30">30</ion-option>\n          <ion-option value="31">31</ion-option>\n      </ion-select>\n      </ion-item>\n\n      <ion-item style="padding-left: 14vw;">\n      <ion-label>Mês</ion-label>\n      <ion-select  [(ngModel)]="mes" interface="popover">\n          <ion-option value="01" checked="true">Janeiro</ion-option>\n          <ion-option value="02">Fevereiro</ion-option>\n          <ion-option value="03">Março</ion-option>\n          <ion-option value="04">Abril</ion-option>\n          <ion-option value="05">Maio</ion-option>\n          <ion-option value="06">Junho</ion-option>\n          <ion-option value="07">Julho</ion-option>\n          <ion-option value="08">Agosto</ion-option>\n          <ion-option value="09">Setembro</ion-option>\n          <ion-option value="10">Outubro</ion-option>\n          <ion-option value="11">Novembro</ion-option>\n          <ion-option value="12">Dezembro</ion-option>\n        </ion-select>\n      </ion-item>\n      \n      <ion-item style="padding-left: 14vw;"> \n        <ion-label>Ano</ion-label>\n        <ion-select [(ngModel)]="ano" interface="popover">\n          <ion-option>1989</ion-option>\n          <ion-option>1990</ion-option>\n          <ion-option>1991</ion-option>\n          <ion-option checked="true">1992</ion-option>\n          <ion-option>1993</ion-option>\n          <ion-option>1994</ion-option>\n          <ion-option>1995</ion-option>\n          <ion-option>1996</ion-option>\n          <ion-option>1997</ion-option>\n          <ion-option>1998</ion-option>\n          <ion-option>1999</ion-option>\n        </ion-select>\n    </ion-item>-->\n  </ion-list>\n  <ion-row>\n    <ion-label class="label-error" *ngIf="error"> {{error}} </ion-label>\n  </ion-row>\n  <ion-buttons class="center">\n    <button ion-button (click)="register(user)" class="pronto-button">Pronto</button>\n  </ion-buttons>\n</ion-content>\n\n<ion-footer class="ion-footer-shadow">\n  <ion-toolbar>\n      <ion-buttons>\n        <button ion-button navPop class="text-transform"><span>Fechar</span></button>\n      </ion-buttons>\n  </ion-toolbar>\n</ion-footer>\n\n'/*ion-inline-end:"C:\imagine-art\src\pages\signup\signup.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]])
], SignupPage);

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 169:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 169;

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return MODULES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return PIPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return PROVIDERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return COMPONENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DIRECTIVES; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_global__ = __webpack_require__(438);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_localstorage__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_util_toast_service__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_util_alert_service__ = __webpack_require__(558);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_util_camera_provider__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_native_google_maps_native_google_maps__ = __webpack_require__(559);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_card_io__ = __webpack_require__(560);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_barcode_scanner__ = __webpack_require__(561);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_diagnostic__ = __webpack_require__(562);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_geolocation__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_google_maps__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_sliding_drawer_sliding_drawer__ = __webpack_require__(563);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_autosize_autosize__ = __webpack_require__(564);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_countdown_timer_timer__ = __webpack_require__(565);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_timer_progress_timer_progress__ = __webpack_require__(566);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_expandable_header_expandable_header__ = __webpack_require__(567);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_flash_card_flash_card__ = __webpack_require__(568);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_accordion_list_accordion_list__ = __webpack_require__(569);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_timeline_timeline__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pipes_moment_pipe__ = __webpack_require__(570);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pipes_temperature_pipe__ = __webpack_require__(572);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pipes_orderby_pipe__ = __webpack_require__(573);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pipes_shorten_pipe__ = __webpack_require__(574);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pipes_capitalize_pipe__ = __webpack_require__(575);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_angular2_swing__ = __webpack_require__(576);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_angular2_swing___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_27_angular2_swing__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__ionic_native_base64__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__ionic_native_image_resizer__ = __webpack_require__(116);
// Global state (used for theming)


// Providers




// Ionic native providers








// Directives


// Components






// tslint:disable-next-line:no-duplicate-imports

// tslint:disable-next-line:no-duplicate-imports

// Pipes





// Modules





var MODULES = [
    __WEBPACK_IMPORTED_MODULE_27_angular2_swing__["SwingModule"],
    __WEBPACK_IMPORTED_MODULE_28__angular_platform_browser__["a" /* BrowserModule */],
    __WEBPACK_IMPORTED_MODULE_29__angular_http__["c" /* HttpModule */],
];
var PIPES = [
    __WEBPACK_IMPORTED_MODULE_23__pipes_temperature_pipe__["a" /* TemperaturePipe */],
    __WEBPACK_IMPORTED_MODULE_22__pipes_moment_pipe__["a" /* MomentPipe */],
    __WEBPACK_IMPORTED_MODULE_24__pipes_orderby_pipe__["a" /* OrderByPipe */],
    __WEBPACK_IMPORTED_MODULE_26__pipes_capitalize_pipe__["a" /* CapitalizePipe */],
    __WEBPACK_IMPORTED_MODULE_25__pipes_shorten_pipe__["a" /* ShortenStringPipe */]
];
var PROVIDERS = [
    __WEBPACK_IMPORTED_MODULE_3__providers_util_alert_service__["a" /* AlertService */],
    __WEBPACK_IMPORTED_MODULE_2__providers_util_toast_service__["a" /* ToastService */],
    __WEBPACK_IMPORTED_MODULE_0__app_global__["a" /* AppState */],
    __WEBPACK_IMPORTED_MODULE_4__providers_util_camera_provider__["a" /* CameraProvider */],
    __WEBPACK_IMPORTED_MODULE_5__providers_native_google_maps_native_google_maps__["a" /* NativeGoogleMapsProvider */],
    // Ionic native specific providers
    __WEBPACK_IMPORTED_MODULE_7__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
    __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__["a" /* Camera */],
    __WEBPACK_IMPORTED_MODULE_9__ionic_native_diagnostic__["a" /* Diagnostic */],
    __WEBPACK_IMPORTED_MODULE_10__ionic_native_geolocation__["a" /* Geolocation */],
    __WEBPACK_IMPORTED_MODULE_6__ionic_native_card_io__["a" /* CardIO */],
    __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */],
    __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__["a" /* SplashScreen */],
    __WEBPACK_IMPORTED_MODULE_13__ionic_native_google_maps__["a" /* GoogleMaps */],
    __WEBPACK_IMPORTED_MODULE_1__providers_localstorage__["a" /* Localstorage */],
    Storage,
    __WEBPACK_IMPORTED_MODULE_30__ionic_native_base64__["a" /* Base64 */],
    __WEBPACK_IMPORTED_MODULE_31__ionic_native_image_resizer__["a" /* ImageResizer */]
];
var COMPONENTS = [
    __WEBPACK_IMPORTED_MODULE_19__components_flash_card_flash_card__["a" /* FlashCardComponent */],
    __WEBPACK_IMPORTED_MODULE_17__components_timer_progress_timer_progress__["a" /* TimerProgress */],
    __WEBPACK_IMPORTED_MODULE_16__components_countdown_timer_timer__["a" /* Timer */],
    __WEBPACK_IMPORTED_MODULE_18__components_expandable_header_expandable_header__["a" /* ExpandableHeader */],
    __WEBPACK_IMPORTED_MODULE_15__components_autosize_autosize__["a" /* Autosize */],
    __WEBPACK_IMPORTED_MODULE_20__components_accordion_list_accordion_list__["a" /* AccordionListComponent */],
    __WEBPACK_IMPORTED_MODULE_21__components_timeline_timeline__["a" /* TimelineComponent */],
    __WEBPACK_IMPORTED_MODULE_21__components_timeline_timeline__["b" /* TimelineItemComponent */],
    __WEBPACK_IMPORTED_MODULE_21__components_timeline_timeline__["c" /* TimelineTimeComponent */]
];
var DIRECTIVES = [
    __WEBPACK_IMPORTED_MODULE_14__components_sliding_drawer_sliding_drawer__["a" /* SlidingDrawer */],
    __WEBPACK_IMPORTED_MODULE_16__components_countdown_timer_timer__["a" /* Timer */],
    __WEBPACK_IMPORTED_MODULE_15__components_autosize_autosize__["a" /* Autosize */],
];
//# sourceMappingURL=app.imports.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ToastService = (function () {
    function ToastService(toastCtrl) {
        this.toastCtrl = toastCtrl;
    }
    ToastService.prototype.create = function (message, ok, duration) {
        if (ok === void 0) { ok = false; }
        if (duration === void 0) { duration = 2000; }
        if (this.toast) {
            this.toast.dismiss();
        }
        this.toast = this.toastCtrl.create({
            message: message,
            duration: ok ? null : duration,
            position: 'bottom',
            showCloseButton: ok,
            closeButtonText: 'OK'
        });
        this.toast.present();
    };
    return ToastService;
}());
ToastService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
], ToastService);

//# sourceMappingURL=toast.service.js.map

/***/ }),

/***/ 213:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-work/add-work.module": [
		587,
		12
	],
	"../pages/chat/chats.module": [
		595,
		11
	],
	"../pages/chat/messages/messages.module": [
		588,
		10
	],
	"../pages/edit-profile/edit-profile.module": [
		589,
		9
	],
	"../pages/edit-work/edit-work.module": [
		590,
		8
	],
	"../pages/home/home.module": [
		591,
		7
	],
	"../pages/login/login.module": [
		592,
		6
	],
	"../pages/profile/profile.module": [
		593,
		5
	],
	"../pages/search/search.module": [
		598,
		4
	],
	"../pages/show/show.module": [
		594,
		3
	],
	"../pages/signup/signup.module": [
		596,
		2
	],
	"../pages/user/user.module": [
		597,
		1
	],
	"../pages/works/works.module": [
		599,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 213;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 419:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_imports__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_0__app_imports__["d" /* PIPES */],
            __WEBPACK_IMPORTED_MODULE_0__app_imports__["b" /* DIRECTIVES */],
            __WEBPACK_IMPORTED_MODULE_0__app_imports__["a" /* COMPONENTS */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicModule */],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_0__app_imports__["d" /* PIPES */],
            __WEBPACK_IMPORTED_MODULE_0__app_imports__["a" /* COMPONENTS */]
        ]
    })
], SharedModule);

//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ 420:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(437);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);



Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 437:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_module__ = __webpack_require__(419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_component__ = __webpack_require__(585);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_imports__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2__ = __webpack_require__(586);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_storage__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_login_login__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_signup_signup__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_home_home__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_works_works__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_profile_profile__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_search_search__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_add_work_add_work__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_edit_work_edit_work__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_edit_profile_edit_profile__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_show_show__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_user_user__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_chat_chats__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_chat_messages_messages__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_localstorage__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_base64__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_native_image_resizer__ = __webpack_require__(116);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


/*************/



























var firebaseConfig = {
    apiKey: 'AIzaSyBV0Ok42A28Bk-Una68NNbtvZvVIfMaYzg',
    authDomain: 'imagine-art.firebaseapp.com',
    databaseURL: 'https://imagine-art.firebaseio.com',
    projectId: 'imagine-art',
    storageBucket: 'imagine-art.appspot.com',
    messagingSenderId: '652379659523'
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
        declarations: [
            // App Core
            __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_signup_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_works_works__["a" /* WorksPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_profile_profile__["a" /* ProfilePage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_search_search__["a" /* SearchPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_add_work_add_work__["a" /* AddWorkPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_edit_work_edit_work__["a" /* EditWorkPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_edit_profile_edit_profile__["a" /* EditProfilePage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_show_show__["a" /* ShowPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_user_user__["a" /* UserPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_chat_chats__["a" /* ChatsPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_chat_messages_messages__["a" /* MessagesPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_6__app_imports__["c" /* MODULES */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["g" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* MyApp */], { tabsHideOnSubPages: true }, {
                links: [
                    { loadChildren: '../pages/add-work/add-work.module#AddWorkPageModule', name: 'AddWorkPage', segment: 'add-work', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/chat/messages/messages.module#MessagesPageModule', name: 'MessagesPage', segment: 'messages', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/edit-profile/edit-profile.module#EditProfilePageModule', name: 'EditProfilePage', segment: 'edit-profile', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/edit-work/edit-work.module#EditWorkPageModule', name: 'EditWorkPage', segment: 'edit-work', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/show/show.module#ShowPageModule', name: 'ShowPage', segment: 'show', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/chat/chats.module#ChatsPageModule', name: 'ChatsPage', segment: 'chats', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/user/user.module#UserPageModule', name: 'UserPage', segment: 'user', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/search/search.module#SearchPageModule', name: 'SearchPage', segment: 'search', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/works/works.module#WorksPageModule', name: 'WorksPage', segment: 'works', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_0__shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
            // AngularFireModule.initializeApp(FIREBASE_CREDENTIALS),
            __WEBPACK_IMPORTED_MODULE_7_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
            __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__["b" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_9__angular_http__["c" /* HttpModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["e" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_signup_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_works_works__["a" /* WorksPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_profile_profile__["a" /* ProfilePage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_search_search__["a" /* SearchPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_add_work_add_work__["a" /* AddWorkPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_edit_work_edit_work__["a" /* EditWorkPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_edit_profile_edit_profile__["a" /* EditProfilePage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_show_show__["a" /* ShowPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_user_user__["a" /* UserPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_chat_chats__["a" /* ChatsPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_chat_messages_messages__["a" /* MessagesPage */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_6__app_imports__["e" /* PROVIDERS */], __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */], { provide: __WEBPACK_IMPORTED_MODULE_3__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["f" /* IonicErrorHandler */] }, __WEBPACK_IMPORTED_MODULE_26__providers_localstorage__["a" /* Localstorage */], Storage, __WEBPACK_IMPORTED_MODULE_27__ionic_native_base64__["a" /* Base64 */], __WEBPACK_IMPORTED_MODULE_28__ionic_native_image_resizer__["a" /* ImageResizer */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 438:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppState; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppState = (function () {
    function AppState() {
        this._state = {};
    }
    Object.defineProperty(AppState.prototype, "state", {
        // already return a clone of the current state
        get: function () {
            return this._state = this.clone(this._state);
        },
        // never allow mutation
        set: function (value) {
            throw new Error('do not mutate the `.state` directly');
        },
        enumerable: true,
        configurable: true
    });
    AppState.prototype.get = function (prop) {
        // use our state getter for the clone
        var state = this.state;
        return state.hasOwnProperty(prop) ? state[prop] : state;
    };
    AppState.prototype.set = function (prop, value) {
        // internally mutate our state
        return this._state[prop] = value;
    };
    AppState.prototype.clone = function (object) {
        // simple object clone
        return JSON.parse(JSON.stringify(object));
    };
    return AppState;
}());
AppState = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], AppState);

//# sourceMappingURL=app.global.js.map

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_util_camera_provider__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__edit_work_edit_work__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__edit_profile_edit_profile__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_chat_messages_messages__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_localstorage__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_toPromise__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_catch__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ProfilePage = (function () {
    function ProfilePage(navCtrl, actionsheetCtrl, cameraProvider, platform, loadingCtrl, http, localstorage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.actionsheetCtrl = actionsheetCtrl;
        this.cameraProvider = cameraProvider;
        this.platform = platform;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.localstorage = localstorage;
        this.data = '';
        this.produtos = [];
        this.productInformation = [];
        // user = [];
        this.user = [{
                // avatar: 'assets/img/icon/icon-o.png',
                // backgroundimage: 'assets/img/background/wood2.jpg'
                city: 'Cidade',
                state: 'Estado',
                cellphone: '(99) 99999-9999'
            }];
        // tslint:disable-next-line:max-line-length
        this.userConfirm = false; // Esta variavel vai verificar se o usuario eh o mesmo do perfil, para liberar os botoes de editar
        this.placeholder = 'assets/img/icon/icon-o.png';
        this.placeholder1 = 'assets/img/background/wood2.jpg';
        this.localstorage = localstorage;
        this.localstorage.getProfileID().then(function (profileID) {
            if (profileID === null || profileID === '') {
                _this.getProfileInformation('');
            }
            else {
                _this.getProfileInformation(profileID);
                _this.localstorage.setProfileID('');
            }
        });
    }
    ProfilePage.prototype.getProfileInformation = function (profileID) {
        // console.log('AKIII');
        var _this = this;
        var loading = this.loadingCtrl.create();
        loading.present();
        this.localstorage.getUser('').then(function (userID) {
            // console.log('profileID:', profileID);
            // tslint:disable-next-line:no-var-keyword
            var headers = new __WEBPACK_IMPORTED_MODULE_7__angular_http__["a" /* Headers */]();
            headers.append('Accept', 'application/json');
            headers.append('Content-Type', 'application/json');
            // tslint:disable-next-line:prefer-const
            var options = new __WEBPACK_IMPORTED_MODULE_7__angular_http__["d" /* RequestOptions */]({ headers: headers });
            // console.log(profileID);
            // tslint:disable-next-line:prefer-const
            if (profileID === null || profileID === '') {
                // console.log('Profile ID está nulo. estamos dentro do if nulo:', userID);
                _this.data = JSON.stringify({
                    userID: userID._id
                });
            }
            else {
                // console.log('Profile ID está nao nulo. estamos dentro do if nao nulo:', profileID);
                _this.data = JSON.stringify({
                    userID: profileID
                });
            }
            new Promise(function (resolve, reject) {
                _this.http.post('https://imagine-art.herokuapp.com/user/getUserProfile/', _this.data, options)
                    .toPromise()
                    .then(function (response) {
                    _this.localstorage.getUser('').then(function (userLoggedID) {
                        // console.log(profileID, '++++++++++++++++');
                        // console.log(userLoggedID._id, '++++++++++++++++');
                        if (response.json().user._id === userLoggedID._id) {
                            _this.userConfirm = true;
                        }
                    });
                    _this.produtos = response.json().product;
                    _this.user = response.json().user;
                    loading.dismiss();
                    resolve(response.json());
                })
                    .catch(function (error) {
                    console.error('API Error : ', error.status);
                    console.error('API Error : ', JSON.stringify(error));
                    reject(error.json());
                });
            });
        })
            .catch(function (err) {
            console.log('Error occurred :', err);
        });
    };
    ProfilePage.prototype.getOwnProfileInformation = function () {
        var _this = this;
        var loading = this.loadingCtrl.create();
        loading.present();
        this.localstorage.getProfileID().then(function (profileID) {
            // console.log('profileID:', profileID);
            // tslint:disable-next-line:no-var-keyword
            var headers = new __WEBPACK_IMPORTED_MODULE_7__angular_http__["a" /* Headers */]();
            headers.append('Accept', 'application/json');
            headers.append('Content-Type', 'application/json');
            // tslint:disable-next-line:prefer-const
            var options = new __WEBPACK_IMPORTED_MODULE_7__angular_http__["d" /* RequestOptions */]({ headers: headers });
            // console.log(profileID);
            // tslint:disable-next-line:prefer-const
            var data = JSON.stringify({
                userID: profileID
            });
            new Promise(function (resolve, reject) {
                _this.http.post('https://imagine-art.herokuapp.com/user/getUserProfile/', data, options)
                    .toPromise()
                    .then(function (response) {
                    _this.localstorage.getUser('').then(function (userLoggedID) {
                        // console.log(profileID, '++++++++++++++++');
                        // console.log(userLoggedID._id, '++++++++++++++++');
                        if (profileID === userLoggedID._id) {
                            _this.userConfirm = true;
                        }
                    });
                    _this.produtos = response.json().product;
                    _this.user = response.json().user;
                    loading.dismiss();
                    resolve(response.json());
                })
                    .catch(function (error) {
                    console.error('API Error : ', error.status);
                    console.error('API Error : ', JSON.stringify(error));
                    reject(error.json());
                });
            });
        })
            .catch(function (err) {
            console.log('Error occurred :', err);
        });
    };
    ProfilePage.prototype.goToEditProfile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__edit_profile_edit_profile__["a" /* EditProfilePage */]);
    };
    ProfilePage.prototype.goToEditWork = function (productID) {
        // console.log('setProductID');
        // console.log(productID);
        // console.log('setProductID');
        this.localstorage.setProductID(productID);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__edit_work_edit_work__["a" /* EditWorkPage */]);
    };
    ProfilePage.prototype.goToMessages = function (productorCallback) {
        var produtor = {
            productorID: productorCallback.productorID,
            productorName: productorCallback.productorName,
            productTitle: productorCallback.productTitle
        };
        this.localstorage.setChatID('');
        // console.log('-----------------');
        // console.log(produtor);
        // console.log('-----------------');
        this.localstorage.setProductor(produtor);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages_chat_messages_messages__["a" /* MessagesPage */]);
    };
    return ProfilePage;
}());
ProfilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'page-profile',template:/*ion-inline-start:"C:\imagine-art\src\pages\profile\profile.html"*/'<ion-header >\n  <ion-navbar >\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title *ngIf="userConfirm === false">Perfil de {{user.name}}</ion-title>\n    <ion-title *ngIf="userConfirm === true">Meu Perfil</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div id="profile-bg" [ngStyle]="{\'background-image\': \'url(\' + user.backgroundimage +\')\'}"></div>\n  <!--<div id="profile-bg">\n    <img [src]="user.backgroundimage || placeholder1">\n  </div>-->\n  <div id="content">\n\n    <div id="profile-info" padding>\n      <img id="profile-image" [src]="user.avatar">\n      <h3 id="profile-name">{{user.name}}</h3>\n      <p>{{user.city}} &bull; {{user.state}}</p>\n      <p class="profile-description">{{user.cellphone}}</p>  \n      <!--<button ion-button *ngIf="!following" small color="purple" (click)="follow()">Follow</button>-->\n      <ion-row>\n      <div class="margin-top" *ngIf="userConfirm">\n        <button ion-button color="dark" class="button-edit-posts" (click)="goToEditProfile()">\n            <ion-icon name="md-brush"></ion-icon>\n        </button>\n    </div>\n  </ion-row>\n      <!--<button ion-button *ngIf="following" class="follow-button" small color="purple" (click)="follow()">Following<ion-icon name="checkmark"></ion-icon></button>-->\n    </div>\n\n    <hr/>\n\n    <!--<ion-row class="profile-numbers">\n      <ion-col>\n        <p>Likes</p>\n        <span>user.likes</span>\n      </ion-col>\n      <ion-col style="margin-left: 0vw;">\n        <p>Posts</p>\n        <span>user.posts</span>\n      </ion-col>\n    </ion-row>-->\n\n    <div id="posts">\n      <ion-card *ngFor="let produto of produtos">\n        <img [src]="produto.productImage" onerror="">\n        <ion-card-content>\n          <h2 class="padding-title"><strong>{{produto.productTitle}}</strong></h2>\n          <p>{{produto.productDescription}}</p>\n        </ion-card-content>\n        \n        <ion-row>\n          <!--<ion-col col-4>\n            <button ion-button color="purple" clear small icon-left (click)="like(post)">\n                <ion-icon name=\'thumbs-up\'></ion-icon>\n                post.likes Likes\n              </button>\n          </ion-col>-->\n          <ion-col col-5 *ngIf="!userConfirm">\n            <button ion-button no-padding color="purple" clear small icon-left (click)="goToMessages(produto)">\n                <ion-icon name=\'text\'></ion-icon>\n                Conversar!\n              </button>\n          </ion-col>\n          <ion-col col-15 align-self-center text-center *ngIf="userConfirm">\n              <button ion-button color="dark" class="button-edit-posts" (click)="goToEditWork(produto._id)">\n                  <ion-icon name="md-brush"></ion-icon>\n              </button>\n          </ion-col>\n        </ion-row>\n      </ion-card>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\imagine-art\src\pages\profile\profile.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* ActionSheetController */],
        __WEBPACK_IMPORTED_MODULE_0__providers_util_camera_provider__["a" /* CameraProvider */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_7__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_6__providers_localstorage__["a" /* Localstorage */]])
], ProfilePage);

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 558:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlertService = (function () {
    function AlertService(alertCtrl) {
        this.alertCtrl = alertCtrl;
    }
    AlertService.prototype.presentAlert = function (title, message) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: message,
            buttons: [
                {
                    text: 'OK'
                }
            ]
        });
        return alert.present();
    };
    AlertService.prototype.presentErrorAlert = function (message) {
        return this.presentAlert('An error has occurred.', message);
    };
    AlertService.prototype.presentAlertWithCallback = function (title, message) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var confirm = _this.alertCtrl.create({
                title: title,
                message: message,
                buttons: [{
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function () {
                            confirm.dismiss().then(function () { return resolve(false); });
                            return false;
                        }
                    }, {
                        text: 'Yes',
                        handler: function () {
                            confirm.dismiss().then(function () { return resolve(true); });
                            return false;
                        }
                    }]
            });
            return confirm.present();
        });
    };
    return AlertService;
}());
AlertService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], AlertService);

//# sourceMappingURL=alert.service.js.map

/***/ }),

/***/ 559:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NativeGoogleMapsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_google_maps__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(296);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NativeGoogleMapsProvider = (function () {
    function NativeGoogleMapsProvider(geolocation, googleMaps) {
        this.geolocation = geolocation;
        this.googleMaps = googleMaps;
    }
    // Note: Call this method on ngAfterViewInit
    NativeGoogleMapsProvider.prototype.create = function (element) {
        var cameraPosition = {
            zoom: 18,
            tilt: 10
        };
        var options = {
            mapType: __WEBPACK_IMPORTED_MODULE_1__ionic_native_google_maps__["d" /* GoogleMapsMapTypeId */].NORMAL,
            styles: [],
            camera: cameraPosition,
            backgroundColor: 'white',
            controls: {
                compass: true,
                myLocationButton: true,
                indoorPicker: true,
                zoom: true
            },
            gestures: {
                scroll: true,
                tilt: true,
                rotate: true,
                zoom: true
            },
            preferences: null,
        };
        this.map = this.googleMaps.create(element.nativeElement, options);
        return this.map.one(__WEBPACK_IMPORTED_MODULE_1__ionic_native_google_maps__["c" /* GoogleMapsEvent */].MAP_READY);
    };
    NativeGoogleMapsProvider.prototype.centerToGeolocation = function () {
        var _this = this;
        return this.getGeolocationPosition().then(function (position) {
            return _this.centerToPosition(position);
        }, function (error) {
            return Promise.reject(error);
        });
    };
    NativeGoogleMapsProvider.prototype.getGeolocationPosition = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.geolocation.getCurrentPosition().then(function (position) {
                var latLng = new __WEBPACK_IMPORTED_MODULE_1__ionic_native_google_maps__["e" /* LatLng */](position.coords.latitude, position.coords.longitude);
                resolve(latLng);
            }, function (error) {
                reject(error);
            });
        });
    };
    NativeGoogleMapsProvider.prototype.centerToPosition = function (latLng, zoom, tilt) {
        var cameraPosition = {
            target: latLng,
            zoom: zoom || 18,
            tilt: tilt || 10
        };
        return this.map.moveCamera(cameraPosition);
    };
    NativeGoogleMapsProvider.prototype.addMarker = function (position, title, infoClickCallback, animated) {
        if (animated === void 0) { animated = true; }
        var markerOptions = {
            position: position,
            title: title,
            animation: animated ? __WEBPACK_IMPORTED_MODULE_1__ionic_native_google_maps__["b" /* GoogleMapsAnimation */].BOUNCE : null,
            infoWindowAnchor: infoClickCallback
        };
        return this.map.addMarker(markerOptions);
    };
    NativeGoogleMapsProvider.prototype.addMarkerToGeolocation = function (title, infoClickCallback, animated) {
        var _this = this;
        this.getGeolocationPosition().then(function (position) {
            _this.addMarker(position, title, infoClickCallback, animated);
        });
    };
    return NativeGoogleMapsProvider;
}());
NativeGoogleMapsProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */],
        __WEBPACK_IMPORTED_MODULE_1__ionic_native_google_maps__["a" /* GoogleMaps */]])
], NativeGoogleMapsProvider);

//# sourceMappingURL=native-google-maps.js.map

/***/ }),

/***/ 563:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlidingDrawer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SlidingDrawer = (function () {
    function SlidingDrawer(element, renderer, domCtrl, platform) {
        this.element = element;
        this.renderer = renderer;
        this.domCtrl = domCtrl;
        this.platform = platform;
        this.handleHeight = 50;
        this.bounceBack = true;
        this.thresholdTop = 200;
        this.thresholdBottom = 200;
    }
    SlidingDrawer.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (this.options.handleHeight) {
            this.handleHeight = this.options.handleHeight;
        }
        if (this.options.bounceBack) {
            this.bounceBack = this.options.bounceBack;
        }
        if (this.options.thresholdFromBottom) {
            this.thresholdBottom = this.options.thresholdFromBottom;
        }
        if (this.options.thresholdFromTop) {
            this.thresholdTop = this.options.thresholdFromTop;
        }
        this.renderer.setElementStyle(this.element.nativeElement, 'top', this.platform.height() - this.handleHeight + 'px');
        this.renderer.setElementStyle(this.element.nativeElement, 'padding-top', this.handleHeight + 'px');
        var hammer = new window['Hammer'](this.element.nativeElement);
        hammer.get('pan').set({ direction: window['Hammer'].DIRECTION_VERTICAL });
        hammer.on('pan', function (ev) {
            _this.handlePan(ev);
        });
    };
    SlidingDrawer.prototype.handlePan = function (ev) {
        var _this = this;
        var newTop = ev.center.y;
        var bounceToBottom = false;
        var bounceToTop = false;
        if (this.bounceBack && ev.isFinal) {
            var topDiff = newTop - this.thresholdTop;
            var bottomDiff = (this.platform.height() - this.thresholdBottom) - newTop;
            topDiff >= bottomDiff ? bounceToBottom = true : bounceToTop = true;
        }
        if ((newTop < this.thresholdTop && ev.additionalEvent === 'panup') || bounceToTop) {
            this.domCtrl.write(function () {
                _this.renderer.setElementStyle(_this.element.nativeElement, 'transition', 'top 0.5s');
                _this.renderer.setElementStyle(_this.element.nativeElement, 'top', '0px');
            });
        }
        else if (((this.platform.height() - newTop) < this.thresholdBottom && ev.additionalEvent === 'pandown')
            || bounceToBottom) {
            this.domCtrl.write(function () {
                _this.renderer.setElementStyle(_this.element.nativeElement, 'transition', 'top 0.5s');
                _this.renderer.setElementStyle(_this.element.nativeElement, 'top', _this.platform.height() - _this.handleHeight + 'px');
            });
        }
        else {
            this.renderer.setElementStyle(this.element.nativeElement, 'transition', 'none');
            if (newTop > 0 && newTop < (this.platform.height() - this.handleHeight)) {
                if (ev.additionalEvent === 'panup' || ev.additionalEvent === 'pandown') {
                    this.domCtrl.write(function () {
                        _this.renderer.setElementStyle(_this.element.nativeElement, 'top', newTop + 'px');
                    });
                }
            }
        }
    };
    return SlidingDrawer;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('options'),
    __metadata("design:type", Object)
], SlidingDrawer.prototype, "options", void 0);
SlidingDrawer = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'sliding-drawer',template:/*ion-inline-start:"C:\imagine-art\src\components\sliding-drawer\sliding-drawer.html"*/'<ion-content>\n  <ng-content></ng-content>\n</ion-content>'/*ion-inline-end:"C:\imagine-art\src\components\sliding-drawer\sliding-drawer.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* DomController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */]])
], SlidingDrawer);

//# sourceMappingURL=sliding-drawer.js.map

/***/ }),

/***/ 564:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Autosize; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Autosize = (function () {
    function Autosize(element) {
        this.element = element;
    }
    Autosize.prototype.onInput = function (textArea) {
        this.adjust();
    };
    Autosize.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () { return _this.adjust(); }, 0);
    };
    Autosize.prototype.adjust = function () {
        var textArea = this.element.nativeElement.getElementsByTagName('textarea')[0];
        textArea.style.overflow = 'hidden';
        textArea.style.height = 'auto';
        textArea.style.height = textArea.scrollHeight + 'px';
    };
    return Autosize;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('input', ['$event.target']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [HTMLTextAreaElement]),
    __metadata("design:returntype", void 0)
], Autosize.prototype, "onInput", null);
Autosize = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: 'ion-textarea[autosize]'
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
], Autosize);

//# sourceMappingURL=autosize.js.map

/***/ }),

/***/ 565:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Timer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Timer = (function () {
    function Timer() {
    }
    Timer.prototype.ngOnInit = function () {
        this.initTimer();
    };
    Timer.prototype.hasFinished = function () {
        return this.timer.hasFinished;
    };
    Timer.prototype.initTimer = function () {
        if (!this.timeInSeconds) {
            this.timeInSeconds = 0;
        }
        this.timer = {
            seconds: this.timeInSeconds,
            runTimer: false,
            hasStarted: false,
            hasFinished: false,
            secondsRemaining: this.timeInSeconds
        };
        this.timer.displayTime = this.getSecondsAsDigitalClock(this.timer.secondsRemaining);
    };
    Timer.prototype.startTimer = function () {
        this.timer.hasStarted = true;
        this.timer.runTimer = true;
        this.timerTick();
    };
    Timer.prototype.pauseTimer = function () {
        this.timer.runTimer = false;
    };
    Timer.prototype.resumeTimer = function () {
        this.startTimer();
    };
    Timer.prototype.timerTick = function () {
        var _this = this;
        setTimeout(function () {
            if (!_this.timer.runTimer) {
                return;
            }
            _this.timer.secondsRemaining--;
            _this.timer.displayTime = _this.getSecondsAsDigitalClock(_this.timer.secondsRemaining);
            if (_this.timer.secondsRemaining > 0) {
                _this.timerTick();
            }
            else {
                _this.timer.hasFinished = true;
            }
        }, 1000);
    };
    Timer.prototype.getSecondsAsDigitalClock = function (inputSeconds) {
        var secNum = parseInt(inputSeconds.toString(), 10); // don't forget the second param
        var hours = Math.floor(secNum / 3600);
        var minutes = Math.floor((secNum - (hours * 3600)) / 60);
        var seconds = secNum - (hours * 3600) - (minutes * 60);
        var hoursString = '';
        var minutesString = '';
        var secondsString = '';
        hoursString = (hours < 10) ? '0' + hours : hours.toString();
        minutesString = (minutes < 10) ? '0' + minutes : minutes.toString();
        secondsString = (seconds < 10) ? '0' + seconds : seconds.toString();
        return hoursString + ':' + minutesString + ':' + secondsString;
    };
    return Timer;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], Timer.prototype, "timeInSeconds", void 0);
Timer = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'timer',template:/*ion-inline-start:"C:\imagine-art\src\components\countdown-timer\timer.html"*/'<ion-card *ngIf="timer">\n	<ion-card-header>\n		<button ion-button *ngIf="timeInSeconds && timeInSeconds > 0" large block clear class="timer-button x-large">{{timer.displayTime}}</button>\n		<button ion-button *ngIf="!timeInSeconds || timeInSeconds == 0" large block clear class="timer-button">Timer set up incorrectly</button>\n	</ion-card-header>\n	<ion-item *ngIf="timeInSeconds && timeInSeconds > 0">\n		<button ion-button clear class="large" color="danger" (click)="initTimer()" item-start *ngIf="!timer.runTimer && (timer.hasStarted || timer.hasFinished) || timer.hasFinished">\n            <ion-icon name="refresh"></ion-icon>\n            Restart\n        </button>\n		<button ion-button clear class="large" (click)="pauseTimer()" item-end *ngIf="timer.runTimer && timer.hasStarted && !timer.hasFinished">\n            <ion-icon name="pause"></ion-icon>\n            Pause\n        </button>\n		<button ion-button clear class="large" (click)="resumeTimer()" item-end *ngIf="!timer.runTimer && timer.hasStarted && !timer.hasFinished">\n            <ion-icon name="play"></ion-icon>\n            Resume\n        </button>\n		<button ion-button clear class="large" (click)="startTimer()" item-end *ngIf="!timer.hasStarted">\n            <ion-icon name="play"></ion-icon>\n            Start\n        </button>\n	</ion-item>\n</ion-card>\n'/*ion-inline-end:"C:\imagine-art\src\components\countdown-timer\timer.html"*/
    })
], Timer);

//# sourceMappingURL=timer.js.map

/***/ }),

/***/ 566:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimerProgress; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TimerProgress = (function () {
    function TimerProgress(sanitizer) {
        this.sanitizer = sanitizer;
    }
    TimerProgress.prototype.ngOnInit = function () {
        this.initTimer();
    };
    TimerProgress.prototype.hasFinished = function () {
        return this.timer.hasFinished;
    };
    TimerProgress.prototype.initProgressBar = function () {
        this.percent = 100;
        this.increment = 180 / 100;
        var progress = 'rotate(' + this.increment * this.percent + 'deg)';
        this.transform = this.sanitizer.bypassSecurityTrustStyle(progress);
        this.fixTransform = this.sanitizer.bypassSecurityTrustStyle(progress);
    };
    TimerProgress.prototype.initTimer = function () {
        this.initProgressBar();
        if (!this.timeInSeconds) {
            this.timeInSeconds = 0;
        }
        this.timer = {
            seconds: this.timeInSeconds,
            runTimer: false,
            hasStarted: false,
            hasFinished: false,
            secondsRemaining: this.timeInSeconds
        };
        this.timer.displayTime = this.getSecondsAsDigitalClock(this.timer.secondsRemaining);
    };
    TimerProgress.prototype.startTimer = function () {
        this.timer.hasStarted = true;
        this.timer.runTimer = true;
        this.timerTick();
    };
    TimerProgress.prototype.pauseTimer = function () {
        this.timer.runTimer = false;
    };
    TimerProgress.prototype.resumeTimer = function () {
        this.startTimer();
    };
    TimerProgress.prototype.timerTick = function () {
        var _this = this;
        setTimeout(function () {
            if (!_this.timer.runTimer) {
                return;
            }
            _this.timer.secondsRemaining--;
            _this.timer.displayTime = _this.getSecondsAsDigitalClock(_this.timer.secondsRemaining);
            _this.percent = _this.timer.secondsRemaining / _this.timer.seconds * 100;
            _this.increment = 180 / 100;
            var progress = 'rotate(' + _this.increment * _this.percent + 'deg)';
            _this.transform = _this.sanitizer.bypassSecurityTrustStyle(progress);
            _this.fixTransform = _this.sanitizer.bypassSecurityTrustStyle(progress);
            if (_this.timer.secondsRemaining > 0) {
                _this.timerTick();
            }
            else {
                _this.timer.hasFinished = true;
            }
        }, 1000);
    };
    TimerProgress.prototype.getSecondsAsDigitalClock = function (inputSeconds) {
        var secNum = parseInt(inputSeconds.toString(), 10); // don't forget the second param
        var hours = Math.floor(secNum / 3600);
        var minutes = Math.floor((secNum - (hours * 3600)) / 60);
        var seconds = secNum - (hours * 3600) - (minutes * 60);
        var hoursString = '';
        var minutesString = '';
        var secondsString = '';
        hoursString = (hours < 10) ? '0' + hours : hours.toString();
        minutesString = (minutes < 10) ? '0' + minutes : minutes.toString();
        secondsString = (seconds < 10) ? '0' + seconds : seconds.toString();
        return hoursString + ':' + minutesString + ':' + secondsString;
    };
    return TimerProgress;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], TimerProgress.prototype, "timeInSeconds", void 0);
TimerProgress = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'timer-progress',template:/*ion-inline-start:"C:\imagine-art\src\components\timer-progress\timer-progress.html"*/'<ion-card *ngIf="timer">\n	<ion-card-header>\n         <div class="radial-progress" data-progress="0">\n            <div class="circle">\n                <div class="mask full" [style.transform]="transform">\n                <div class="fill" [style.transform]="transform"></div>\n                </div>\n                <div class="mask half">\n                <div class="fill" [style.transform]="transform"></div>\n                <div class="fill fix" [style.transform]="fixTransform"></div>\n                </div>\n                <div class="shadow"></div>\n            </div>\n            <div class="inset">\n                <div class="percentage">{{timer.displayTime}}</div>\n            </div>\n        </div>\n		<button ion-button *ngIf="!timeInSeconds || timeInSeconds == 0" large block clear class="timer-button">Timer set up incorrectly</button>\n	</ion-card-header>\n	<ion-item *ngIf="timeInSeconds && timeInSeconds > 0">\n		<button ion-button clear class="large" color="danger" (click)="initTimer()" item-start *ngIf="!timer.runTimer && (timer.hasStarted || timer.hasFinished) || timer.hasFinished">\n            <ion-icon name="refresh"></ion-icon>\n            Restart\n        </button>\n		<button ion-button clear class="large" (click)="pauseTimer()" item-end *ngIf="timer.runTimer && timer.hasStarted && !timer.hasFinished">\n            <ion-icon name="pause"></ion-icon>\n            Pause\n        </button>\n		<button ion-button clear class="large" (click)="resumeTimer()" item-end *ngIf="!timer.runTimer && timer.hasStarted && !timer.hasFinished">\n            <ion-icon name="play"></ion-icon>\n            Resume\n        </button>\n		<button ion-button clear class="large" (click)="startTimer()" item-end *ngIf="!timer.hasStarted">\n            <ion-icon name="play"></ion-icon>\n            Start\n        </button>\n	</ion-item>\n</ion-card>\n'/*ion-inline-end:"C:\imagine-art\src\components\timer-progress\timer-progress.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]])
], TimerProgress);

//# sourceMappingURL=timer-progress.js.map

/***/ }),

/***/ 567:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExpandableHeader; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ExpandableHeader = (function () {
    function ExpandableHeader(element, renderer) {
        this.element = element;
        this.renderer = renderer;
    }
    ExpandableHeader.prototype.ngOnInit = function () {
        var _this = this;
        this.renderer.setElementStyle(this.element.nativeElement, 'height', this.headerHeight + 'px');
        this.scrollArea.ionScroll.subscribe(function (ev) {
            _this.resizeHeader(ev);
        });
    };
    ExpandableHeader.prototype.resizeHeader = function (ev) {
        var _this = this;
        ev.domWrite(function () {
            _this.newHeaderHeight = _this.headerHeight - ev.scrollTop;
            if (_this.newHeaderHeight < 0) {
                _this.newHeaderHeight = 0;
            }
            _this.renderer.setElementStyle(_this.element.nativeElement, 'height', _this.newHeaderHeight + 'px');
            for (var _i = 0, _a = _this.element.nativeElement.children; _i < _a.length; _i++) {
                var headerElement = _a[_i];
                var totalHeight = headerElement.offsetTop + headerElement.clientHeight;
                if (totalHeight > _this.newHeaderHeight && !headerElement.isHidden) {
                    headerElement.isHidden = true;
                    _this.renderer.setElementStyle(headerElement, 'opacity', '0');
                }
                else if (totalHeight <= _this.newHeaderHeight && headerElement.isHidden) {
                    headerElement.isHidden = false;
                    _this.renderer.setElementStyle(headerElement, 'opacity', '0.7');
                }
            }
        });
    };
    return ExpandableHeader;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('scrollArea'),
    __metadata("design:type", Object)
], ExpandableHeader.prototype, "scrollArea", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('headerHeight'),
    __metadata("design:type", Number)
], ExpandableHeader.prototype, "headerHeight", void 0);
ExpandableHeader = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'expandable-header',template:/*ion-inline-start:"C:\imagine-art\src\components\expandable-header\expandable-header.html"*/'<ng-content></ng-content>\n'/*ion-inline-end:"C:\imagine-art\src\components\expandable-header\expandable-header.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]])
], ExpandableHeader);

//# sourceMappingURL=expandable-header.js.map

/***/ }),

/***/ 568:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlashCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FlashCardComponent = (function () {
    function FlashCardComponent() {
        this.toggled = false;
    }
    FlashCardComponent.prototype.ngAfterViewChecked = function () {
        var frontH = this.fcFront.nativeElement.querySelector('.fc-front').offsetHeight + 40;
        var backH = this.fcBack.nativeElement.querySelector('.fc-back').offsetHeight + 40;
        var h = ((frontH > backH) ? frontH : backH) + 'px';
        this.fcContainer.nativeElement.style.height = h;
        this.fcBack.nativeElement.style.height = h;
        this.fcFront.nativeElement.style.height = h;
    };
    FlashCardComponent.prototype.toggle = function () {
        this.toggled = !this.toggled;
    };
    return FlashCardComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fcContainer'),
    __metadata("design:type", Object)
], FlashCardComponent.prototype, "fcContainer", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('front'),
    __metadata("design:type", Object)
], FlashCardComponent.prototype, "fcFront", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('back'),
    __metadata("design:type", Object)
], FlashCardComponent.prototype, "fcBack", void 0);
FlashCardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'flash-card',template:/*ion-inline-start:"C:\imagine-art\src\components\flash-card\flash-card.html"*/'<ion-card class="fc-container" (click)="toggle()" [class.fc-back]="toggled" #fcContainer>\n    <div class="front" #front>\n        <ng-content class="" select=".fc-front"></ng-content>\n    </div>\n \n    <div class="back" #back>\n        <ng-content select=".fc-back"></ng-content>\n    </div>\n</ion-card>'/*ion-inline-end:"C:\imagine-art\src\components\flash-card\flash-card.html"*/
    })
], FlashCardComponent);

//# sourceMappingURL=flash-card.js.map

/***/ }),

/***/ 569:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccordionListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AccordionListComponent = (function () {
    function AccordionListComponent(renderer) {
        this.renderer = renderer;
        this.headerColor = '#F53D3D';
        this.textColor = '#FFF';
        this.contentColor = '#F9F9F9';
        this.hasMargin = true;
        this.expanded = false;
    }
    AccordionListComponent.prototype.ngAfterViewInit = function () {
        this.viewHeight = this.elementView.nativeElement.offsetHeight;
        this.renderer.setElementStyle(this.elementView.nativeElement, 'height', 0 + 'px');
    };
    AccordionListComponent.prototype.toggleAccordion = function () {
        this.expanded = !this.expanded;
        var newHeight = this.expanded ? '100%' : '0px';
        this.renderer.setElementStyle(this.elementView.nativeElement, 'height', newHeight);
    };
    return AccordionListComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], AccordionListComponent.prototype, "headerColor", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], AccordionListComponent.prototype, "textColor", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], AccordionListComponent.prototype, "contentColor", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], AccordionListComponent.prototype, "title", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], AccordionListComponent.prototype, "hasMargin", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('accordionContent'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
], AccordionListComponent.prototype, "elementView", void 0);
AccordionListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'accordion-list',template:/*ion-inline-start:"C:\imagine-art\src\components\accordion-list\accordion-list.html"*/'<ion-list class="accordion-list">\n  <ion-list-header no-lines no-padding>\n    <button ion-item detail-none\n            [style.background]="headerColor"\n            (click)="toggleAccordion()"\n            class="accordion-header"\n            [class.active]="expanded">\n        <ion-icon\n          item-left\n          name="ios-arrow-forward">\n        </ion-icon>\n        {{ title }}\n    </button>\n    <section #accordionContent\n             [style.background]="contentColor"\n             [class.active]="expanded"\n             class="accordion-content">\n      <ng-content></ng-content>\n    </section>\n  </ion-list-header>\n</ion-list>\n'/*ion-inline-end:"C:\imagine-art\src\components\accordion-list\accordion-list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]])
], AccordionListComponent);

//# sourceMappingURL=accordion-list.js.map

/***/ }),

/***/ 570:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MomentPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MomentPipe = (function () {
    function MomentPipe() {
    }
    MomentPipe.prototype.transform = function (value, args) {
        args = args || '';
        return args === 'ago' ? __WEBPACK_IMPORTED_MODULE_1_moment___default()(value).fromNow() : __WEBPACK_IMPORTED_MODULE_1_moment___default()(value).format(args);
    };
    return MomentPipe;
}());
MomentPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'moment'
    })
], MomentPipe);

//# sourceMappingURL=moment.pipe.js.map

/***/ }),

/***/ 571:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 298,
	"./af.js": 298,
	"./ar": 299,
	"./ar-dz": 300,
	"./ar-dz.js": 300,
	"./ar-kw": 301,
	"./ar-kw.js": 301,
	"./ar-ly": 302,
	"./ar-ly.js": 302,
	"./ar-ma": 303,
	"./ar-ma.js": 303,
	"./ar-sa": 304,
	"./ar-sa.js": 304,
	"./ar-tn": 305,
	"./ar-tn.js": 305,
	"./ar.js": 299,
	"./az": 306,
	"./az.js": 306,
	"./be": 307,
	"./be.js": 307,
	"./bg": 308,
	"./bg.js": 308,
	"./bn": 309,
	"./bn.js": 309,
	"./bo": 310,
	"./bo.js": 310,
	"./br": 311,
	"./br.js": 311,
	"./bs": 312,
	"./bs.js": 312,
	"./ca": 313,
	"./ca.js": 313,
	"./cs": 314,
	"./cs.js": 314,
	"./cv": 315,
	"./cv.js": 315,
	"./cy": 316,
	"./cy.js": 316,
	"./da": 317,
	"./da.js": 317,
	"./de": 318,
	"./de-at": 319,
	"./de-at.js": 319,
	"./de-ch": 320,
	"./de-ch.js": 320,
	"./de.js": 318,
	"./dv": 321,
	"./dv.js": 321,
	"./el": 322,
	"./el.js": 322,
	"./en-au": 323,
	"./en-au.js": 323,
	"./en-ca": 324,
	"./en-ca.js": 324,
	"./en-gb": 325,
	"./en-gb.js": 325,
	"./en-ie": 326,
	"./en-ie.js": 326,
	"./en-nz": 327,
	"./en-nz.js": 327,
	"./eo": 328,
	"./eo.js": 328,
	"./es": 329,
	"./es-do": 330,
	"./es-do.js": 330,
	"./es.js": 329,
	"./et": 331,
	"./et.js": 331,
	"./eu": 332,
	"./eu.js": 332,
	"./fa": 333,
	"./fa.js": 333,
	"./fi": 334,
	"./fi.js": 334,
	"./fo": 335,
	"./fo.js": 335,
	"./fr": 336,
	"./fr-ca": 337,
	"./fr-ca.js": 337,
	"./fr-ch": 338,
	"./fr-ch.js": 338,
	"./fr.js": 336,
	"./fy": 339,
	"./fy.js": 339,
	"./gd": 340,
	"./gd.js": 340,
	"./gl": 341,
	"./gl.js": 341,
	"./gom-latn": 342,
	"./gom-latn.js": 342,
	"./he": 343,
	"./he.js": 343,
	"./hi": 344,
	"./hi.js": 344,
	"./hr": 345,
	"./hr.js": 345,
	"./hu": 346,
	"./hu.js": 346,
	"./hy-am": 347,
	"./hy-am.js": 347,
	"./id": 348,
	"./id.js": 348,
	"./is": 349,
	"./is.js": 349,
	"./it": 350,
	"./it.js": 350,
	"./ja": 351,
	"./ja.js": 351,
	"./jv": 352,
	"./jv.js": 352,
	"./ka": 353,
	"./ka.js": 353,
	"./kk": 354,
	"./kk.js": 354,
	"./km": 355,
	"./km.js": 355,
	"./kn": 356,
	"./kn.js": 356,
	"./ko": 357,
	"./ko.js": 357,
	"./ky": 358,
	"./ky.js": 358,
	"./lb": 359,
	"./lb.js": 359,
	"./lo": 360,
	"./lo.js": 360,
	"./lt": 361,
	"./lt.js": 361,
	"./lv": 362,
	"./lv.js": 362,
	"./me": 363,
	"./me.js": 363,
	"./mi": 364,
	"./mi.js": 364,
	"./mk": 365,
	"./mk.js": 365,
	"./ml": 366,
	"./ml.js": 366,
	"./mr": 367,
	"./mr.js": 367,
	"./ms": 368,
	"./ms-my": 369,
	"./ms-my.js": 369,
	"./ms.js": 368,
	"./my": 370,
	"./my.js": 370,
	"./nb": 371,
	"./nb.js": 371,
	"./ne": 372,
	"./ne.js": 372,
	"./nl": 373,
	"./nl-be": 374,
	"./nl-be.js": 374,
	"./nl.js": 373,
	"./nn": 375,
	"./nn.js": 375,
	"./pa-in": 376,
	"./pa-in.js": 376,
	"./pl": 377,
	"./pl.js": 377,
	"./pt": 378,
	"./pt-br": 379,
	"./pt-br.js": 379,
	"./pt.js": 378,
	"./ro": 380,
	"./ro.js": 380,
	"./ru": 381,
	"./ru.js": 381,
	"./sd": 382,
	"./sd.js": 382,
	"./se": 383,
	"./se.js": 383,
	"./si": 384,
	"./si.js": 384,
	"./sk": 385,
	"./sk.js": 385,
	"./sl": 386,
	"./sl.js": 386,
	"./sq": 387,
	"./sq.js": 387,
	"./sr": 388,
	"./sr-cyrl": 389,
	"./sr-cyrl.js": 389,
	"./sr.js": 388,
	"./ss": 390,
	"./ss.js": 390,
	"./sv": 391,
	"./sv.js": 391,
	"./sw": 392,
	"./sw.js": 392,
	"./ta": 393,
	"./ta.js": 393,
	"./te": 394,
	"./te.js": 394,
	"./tet": 395,
	"./tet.js": 395,
	"./th": 396,
	"./th.js": 396,
	"./tl-ph": 397,
	"./tl-ph.js": 397,
	"./tlh": 398,
	"./tlh.js": 398,
	"./tr": 399,
	"./tr.js": 399,
	"./tzl": 400,
	"./tzl.js": 400,
	"./tzm": 401,
	"./tzm-latn": 402,
	"./tzm-latn.js": 402,
	"./tzm.js": 401,
	"./uk": 403,
	"./uk.js": 403,
	"./ur": 404,
	"./ur.js": 404,
	"./uz": 405,
	"./uz-latn": 406,
	"./uz-latn.js": 406,
	"./uz.js": 405,
	"./vi": 407,
	"./vi.js": 407,
	"./x-pseudo": 408,
	"./x-pseudo.js": 408,
	"./yo": 409,
	"./yo.js": 409,
	"./zh-cn": 410,
	"./zh-cn.js": 410,
	"./zh-hk": 411,
	"./zh-hk.js": 411,
	"./zh-tw": 412,
	"./zh-tw.js": 412
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 571;

/***/ }),

/***/ 572:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TemperaturePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TemperaturePipe = (function () {
    function TemperaturePipe() {
    }
    TemperaturePipe.prototype.transform = function (value, args) {
        var c = Math.round(parseInt(value, 10) - 273.15);
        var f = Math.round(parseInt(value, 10) * 9 / 5 - 459.67);
        return args === 'c' ? c + " \u00B0C" : f + " \u00B0F";
    };
    return TemperaturePipe;
}());
TemperaturePipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'temperature'
    }),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], TemperaturePipe);

//# sourceMappingURL=temperature.pipe.js.map

/***/ }),

/***/ 573:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderByPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var OrderByPipe = OrderByPipe_1 = (function () {
    function OrderByPipe() {
        this.value = [];
    }
    OrderByPipe.orderByComparator = function (a, b) {
        if (a === null || typeof a === 'undefined') {
            a = 0;
        }
        if (b === null || typeof b === 'undefined') {
            b = 0;
        }
        if ((isNaN(parseFloat(a)) ||
            !isFinite(a)) ||
            (isNaN(parseFloat(b)) || !isFinite(b))) {
            // Isn"t a number so lowercase the string to properly compare
            a = a.toString();
            b = b.toString();
            if (a.toLowerCase() < b.toLowerCase()) {
                return -1;
            }
            if (a.toLowerCase() > b.toLowerCase()) {
                return 1;
            }
        }
        else {
            // Parse strings as numbers to compare properly
            if (parseFloat(a) < parseFloat(b)) {
                return -1;
            }
            if (parseFloat(a) > parseFloat(b)) {
                return 1;
            }
        }
        return 0; // equal each other
    };
    OrderByPipe.prototype.transform = function (input, config) {
        if (config === void 0) { config = '+'; }
        if (!input) {
            return input;
        }
        // make a copy of the input"s reference
        this.value = input.slice();
        var value = this.value;
        if (!Array.isArray(value)) {
            return value;
        }
        if (!Array.isArray(config) || (Array.isArray(config) && config.length === 1)) {
            var propertyToCheck = !Array.isArray(config) ? config : config[0];
            var desc_1 = propertyToCheck.substr(0, 1) === '-';
            // Basic array
            if (!propertyToCheck || propertyToCheck === '-' || propertyToCheck === '+') {
                return !desc_1 ? value.sort() : value.sort().reverse();
            }
            else {
                var property_1 = propertyToCheck.substr(0, 1) === '+' || propertyToCheck.substr(0, 1) === '-'
                    ? propertyToCheck.substr(1)
                    : propertyToCheck;
                return value.sort(function (a, b) {
                    var aValue = a[property_1];
                    var bValue = b[property_1];
                    var propertySplit = property_1.split('.');
                    if (typeof aValue === 'undefined' && typeof bValue === 'undefined' && propertySplit.length > 1) {
                        aValue = a;
                        bValue = b;
                        for (var j = 0; j < propertySplit.length; j++) {
                            aValue = aValue[propertySplit[j]];
                            bValue = bValue[propertySplit[j]];
                        }
                    }
                    return !desc_1
                        ? OrderByPipe_1.orderByComparator(aValue, bValue)
                        : -OrderByPipe_1.orderByComparator(aValue, bValue);
                });
            }
        }
        else {
            // Loop over property of the array in order and sort
            return value.sort(function (a, b) {
                for (var i = 0; i < config.length; i++) {
                    var desc = config[i].substr(0, 1) === '-';
                    var property = config[i].substr(0, 1) === '+' || config[i].substr(0, 1) === '-'
                        ? config[i].substr(1)
                        : config[i];
                    var aValue = a[property];
                    var bValue = b[property];
                    var propertySplit = property.split('.');
                    if (typeof aValue === 'undefined' && typeof bValue === 'undefined' && propertySplit.length > 1) {
                        aValue = a;
                        bValue = b;
                        for (var j = 0; j < propertySplit.length; j++) {
                            aValue = aValue[propertySplit[j]];
                            bValue = bValue[propertySplit[j]];
                        }
                    }
                    var comparison = !desc
                        ? OrderByPipe_1.orderByComparator(aValue, bValue)
                        : -OrderByPipe_1.orderByComparator(aValue, bValue);
                    // Don't return 0 yet in case of needing to sort by next property
                    if (comparison !== 0) {
                        return comparison;
                    }
                }
                return 0; // equal each other
            });
        }
    };
    return OrderByPipe;
}());
OrderByPipe = OrderByPipe_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'orderBy', pure: false })
], OrderByPipe);

var OrderByPipe_1;
//# sourceMappingURL=orderby.pipe.js.map

/***/ }),

/***/ 574:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShortenStringPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ShortenStringPipe = (function () {
    function ShortenStringPipe() {
    }
    // Shortens the string to a given length.
    // Input: {{'This is a very long string' | shorten:18}}
    // Output: This is a very lon...
    ShortenStringPipe.prototype.transform = function (value, maxWidth, suffix) {
        if (maxWidth === void 0) { maxWidth = 30; }
        if (suffix === void 0) { suffix = '...'; }
        if (value && value.length > maxWidth) {
            value = value.substring(0, maxWidth) + suffix;
        }
        return value;
    };
    return ShortenStringPipe;
}());
ShortenStringPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'shorten'
    })
], ShortenStringPipe);

//# sourceMappingURL=shorten.pipe.js.map

/***/ }),

/***/ 575:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CapitalizePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CapitalizePipe = (function () {
    function CapitalizePipe() {
    }
    // Autocapitalizes the first letter of each word in a phrase.
    // Input: {{'john doe' | capitalize}}
    // Output: John Doe
    CapitalizePipe.prototype.transform = function (value) {
        if (value) {
            var words = value.split(' ');
            value = words.map(function (word) { return word.substring(0, 1).toUpperCase() + word.substring(1); }).join(' ');
        }
        return value;
    };
    return CapitalizePipe;
}());
CapitalizePipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'capitalize'
    })
], CapitalizePipe);

//# sourceMappingURL=capitalize.pipe.js.map

/***/ }),

/***/ 585:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(86);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\imagine-art\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>'/*ion-inline-end:"C:\imagine-art\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CameraProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__ = __webpack_require__(214);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CameraProvider = (function () {
    function CameraProvider(camera) {
        this.camera = camera;
    }
    CameraProvider.prototype.getPictureFromCamera = function () {
        return this.getImage(this.camera.PictureSourceType.CAMERA, true);
    };
    CameraProvider.prototype.getPictureFromPhotoLibrary = function () {
        return this.getImage(this.camera.PictureSourceType.PHOTOLIBRARY);
    };
    // This method takes optional parameters to make it more customizable
    CameraProvider.prototype.getImage = function (pictureSourceType, crop, quality, allowEdit, saveToAlbum) {
        if (crop === void 0) { crop = false; }
        if (quality === void 0) { quality = 50; }
        if (allowEdit === void 0) { allowEdit = true; }
        if (saveToAlbum === void 0) { saveToAlbum = true; }
        var options = {
            quality: quality,
            allowEdit: allowEdit,
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: pictureSourceType,
            encodingType: this.camera.EncodingType.PNG,
            saveToPhotoAlbum: saveToAlbum
        };
        // If set to crop, restricts the image to a square of 600 by 600
        if (crop) {
            options['targetWidth'] = 600;
            options['targetHeight'] = 600;
        }
        return this.camera.getPicture(options).then(function (imageData) {
            var base64Image = 'data:image/png;base64,' + imageData;
            return base64Image;
        }, function (error) {
            console.log('CAMERA ERROR -> ' + JSON.stringify(error));
        });
    };
    return CameraProvider;
}());
CameraProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__["a" /* Camera */]])
], CameraProvider);

//# sourceMappingURL=camera.provider.js.map

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_localstorage__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







// tslint:disable-next-line:no-duplicate-imports

// import { FormGroup } from '@angular/forms/src/model';
var MessagesPage = (function () {
    function MessagesPage(navCtrl, http, cdr, localstorage, loadingCtrl, formBuilder) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.http = http;
        this.cdr = cdr;
        this.localstorage = localstorage;
        this.loadingCtrl = loadingCtrl;
        this.formBuilder = formBuilder;
        this.lista = [];
        this.messages = [];
        this.chatID = [];
        this.localstorage = localstorage;
        this.localstorage.getProductor().then(function (produtorInformation) {
            _this.localstorage.getChatID().then(function (chatCallback) {
                if (produtorInformation === null || produtorInformation === undefined || !produtorInformation) {
                    _this.getMessages();
                }
                else {
                    _this.chatPeloProduto(produtorInformation);
                }
            });
        });
        this.mensagem = '';
        this.scrollToBottom();
    }
    MessagesPage.prototype.onPageWillLeave = function () {
        // enable the root left menu when leaving the tutorial page
        // console.log('SAINDO DA PAGINA');
    };
    MessagesPage.prototype.chatPeloProduto = function (produtorInformation) {
        var _this = this;
        var loading = this.loadingCtrl.create();
        loading.present();
        var product = produtorInformation;
        var messageText = ('Olá, gostaria de conversar sobre o produto: ' + produtorInformation.productTitle);
        this.localstorage.getUser('').then(function (userInformation) {
            _this.userID = userInformation._id;
            // tslint:disable-next-line:no-var-keyword
            var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
            headers.append('Accept', 'application/json');
            headers.append('Content-Type', 'application/json');
            // tslint:disable-next-line:object-literal-shorthand
            var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: headers });
            // tslint:disable-next-line:prefer-const
            _this.data = JSON.stringify({
                chatID: '',
                senderID: userInformation._id,
                senderName: userInformation.name,
                personTwo: product.productorID,
                personTwoName: product.productorName,
                text: messageText
            });
            new Promise(function (resolve, reject) {
                _this.http.post('https://imagine-art.herokuapp.com/message/newMessage/', _this.data, options)
                    .toPromise()
                    .then(function (response) {
                    _this.messages = response.json().Message;
                    var chatInfo = {
                        chatID: response.json().chat.chat._id,
                        personTwoName: response.json().chat.chat.personTwoName,
                        personTwo: response.json().chat.chat.personTwo,
                        personOneName: response.json().chat.chat.personOneName,
                        personOne: response.json().chat.chat.personOne
                    };
                    if (chatInfo.personTwoName === userInformation) {
                        _this.chatNome = chatInfo.personOneName;
                    }
                    else {
                        _this.chatNome = chatInfo.personTwoName;
                    }
                    _this.localstorage.setChatID('');
                    _this.localstorage.setChatID(chatInfo);
                    _this.localstorage.setProductor('');
                    _this.cdr.markForCheck();
                    _this.scrollToBottom();
                    loading.dismiss();
                    resolve(response.json());
                })
                    .catch(function (error) {
                    console.error('API Error : ', error.status);
                    console.error('API Error : ', JSON.stringify(error));
                    reject(error.json());
                });
            });
        });
    };
    MessagesPage.prototype.scrollToBottom = function () {
        var _this = this;
        setTimeout(function () {
            _this.content.scrollToBottom();
        }, 100);
    };
    MessagesPage.prototype.sendMessage = function (message) {
        var _this = this;
        this.localstorage.getChatID().then(function (chatCallback) {
            _this.localstorage.getUser('').then(function (userInformation) {
                _this.userID = userInformation._id;
                // tslint:disable-next-line:no-var-keyword
                var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
                headers.append('Accept', 'application/json');
                headers.append('Content-Type', 'application/json');
                // tslint:disable-next-line:object-literal-shorthand
                var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: headers });
                // tslint:disable-next-line:prefer-const
                _this.data = JSON.stringify({
                    chatID: chatCallback.chatID,
                    senderID: userInformation._id,
                    senderName: userInformation.name,
                    text: message
                });
                new Promise(function (resolve, reject) {
                    _this.http.post('https://imagine-art.herokuapp.com/message/newMessage/', _this.data, options)
                        .toPromise()
                        .then(function (response) {
                        var setMessage = {
                            chatID: chatCallback.chatID,
                            senderID: userInformation._id,
                            senderName: userInformation.name,
                            text: message
                        };
                        console.log(response.json());
                        _this.messages.push(setMessage);
                        // this.localstorage.setChatID('');
                        _this.mensagem = '';
                        _this.cdr.markForCheck();
                        _this.scrollToBottom();
                        resolve(response.json());
                    })
                        .catch(function (error) {
                        console.error('API Error : ', error.status);
                        console.error('API Error : ', JSON.stringify(error));
                        reject(error.json());
                    });
                });
            });
        });
    };
    MessagesPage.prototype.getMessages = function () {
        var _this = this;
        var loading = this.loadingCtrl.create();
        loading.present();
        this.localstorage.getUser('').then(function (userInformation) {
            _this.userID = userInformation._id;
            _this.localstorage.getChatID().then(function (chatIDCallback) {
                if (chatIDCallback.title === userInformation) {
                    _this.chatNome = 'Você mesmo';
                }
                else {
                    _this.chatNome = chatIDCallback.title;
                }
                // tslint:disable-next-line:no-var-keyword
                var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
                headers.append('Accept', 'application/json');
                headers.append('Content-Type', 'application/json');
                // tslint:disable-next-line:object-literal-shorthand
                var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: headers });
                // tslint:disable-next-line:prefer-const
                var data = JSON.stringify({
                    chatID: chatIDCallback.chatID
                });
                new Promise(function (resolve, reject) {
                    _this.http.post('https://imagine-art.herokuapp.com/message/getAllMessagesByMember/', data, options)
                        .toPromise()
                        .then(function (response) {
                        _this.messages = response.json().Message;
                        _this.scrollToBottom();
                        loading.dismiss();
                        resolve(response.json());
                    })
                        .catch(function (error) {
                        console.error('API Error : ', error.status);
                        console.error('API Error : ', JSON.stringify(error));
                        reject(error.json());
                    });
                });
            });
        });
    };
    return MessagesPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* Content */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* Content */])
], MessagesPage.prototype, "content", void 0);
MessagesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'page-messages',template:/*ion-inline-start:"C:\imagine-art\src\pages\chat\messages\messages.html"*/'<!--<ion-header>\n	<ion-navbar>\n	  <ion-title>Chat</ion-title>\n	</ion-navbar>\n  </ion-header>\n  <ion-content padding>\n	<ion-list>\n	  <ion-item>\n		<ion-label floating>Mensagem</ion-label>\n		<ion-input type="text" [(ngModel)]="mensagem"></ion-input>\n	  </ion-item>\n	  <ion-item>\n		<button ion-button (click)="enviar()">Enviar</button>\n	  </ion-item>\n	  <ion-item *ngFor="let item of lista | async">\n		<p>{{item.texto}}</p>\n		<ion-note item-right>\n		  {{item.data | date:\'HH:mm\'}}\n		</ion-note>\n	  </ion-item>\n	</ion-list>\n  </ion-content>-->\n\n<ion-header>\n	<ion-navbar>\n		<ion-title>{{chatNome}}</ion-title>\n	</ion-navbar>\n</ion-header>\n<ion-content>\n	<div *ngIf="messages">\n		<div  *ngFor="let item of messages" class="message-wrapper" on-hold="onMessageHold($event, $index, message)">\n			<div *ngIf="item.senderID !== userID">\n				<!--<img  class="profile-pic left" onerror="onProfilePicError(this)" />-->\n				<!--  wave-->\n				<div class="chat-bubble left slide-left">\n\n					<div class="message" [innerHTML]="item.text" autolinker>\n							\n					</div>\n					\n\n				</div>\n			</div>\n\n			<div *ngIf="item.senderID === userID">\n\n				<!--<img  class="profile-pic right"  onerror="onProfilePicError(this)" />-->\n\n				<div class="chat-bubble right slide-right">\n\n					<div class="message" [innerHTML]="item.text" autolinker>\n							\n					</div>\n				\n\n				</div>\n\n			</div>\n\n		</div>\n\n		<div class="cf"></div>\n\n	</div>\n</ion-content>\n<ion-footer>\n\n		<ion-item>\n			<ion-input type="text" [(ngModel)]="mensagem" placeholder="Send  a message..."></ion-input>\n			<button ion-button clear (click)="sendMessage(mensagem)" item-end><ion-icon class="footer-btn" name="send"></ion-icon></button>\n		</ion-item>\n\n</ion-footer>\n'/*ion-inline-end:"C:\imagine-art\src\pages\chat\messages\messages.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"],
        __WEBPACK_IMPORTED_MODULE_3__providers_localstorage__["a" /* Localstorage */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_0__angular_forms__["a" /* FormBuilder */]])
], MessagesPage);

//# sourceMappingURL=messages.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorksPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__show_show__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_localstorage__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// tslint:disable-next-line:no-duplicate-imports






var WorksPage = (function () {
    function WorksPage(navCtrl, navParams, http, localstorage, loadingCtrl, cdr) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.localstorage = localstorage;
        this.loadingCtrl = loadingCtrl;
        this.cdr = cdr;
        this.titlework = '';
        this.produtos = [];
        this.searchResult = [];
        this.localstorage = localstorage;
        this.localstorage.getSearch().then(function (search) {
            if (search === undefined || search === null) {
                _this.getProdutos();
                _this.searchConfirm = false;
            }
            else {
                // console.log(search);
                _this.produtos = search;
                _this.searchConfirm = true;
                _this.localstorage.setSearch(undefined);
            }
        });
    }
    WorksPage.prototype.goToShow = function (productorID) {
        this.localstorage.setProductID(productorID);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__show_show__["a" /* ShowPage */]);
    };
    // tslint:disable-next-line:no-empty
    WorksPage.prototype.ionViewDidLoad = function () {
    };
    WorksPage.prototype.getProdutos = function () {
        var _this = this;
        var loading = this.loadingCtrl.create();
        loading.present();
        this.localstorage.getCategoria().then(function (categoria) {
            // tslint:disable-next-line:no-var-keyword
            var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
            headers.append('Accept', 'application/json');
            headers.append('Content-Type', 'application/json');
            // tslint:disable-next-line:object-literal-shorthand
            var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: headers });
            // tslint:disable-next-line:prefer-const
            var data = JSON.stringify({
                category: categoria
            });
            new Promise(function (resolve, reject) {
                _this.http.post('https://imagine-art.herokuapp.com/product/getAllProductsByCategory/', data, options)
                    .toPromise()
                    .then(function (response) {
                    _this.titlework = categoria;
                    // // console.log ('categoria!!!!!!!');
                    // console.log (categoria);
                    // console.log ('categoria!!!!!!!');
                    _this.cdr.markForCheck();
                    // console.log(response.json().data);
                    _this.produtos = response.json().data;
                    loading.dismiss();
                    resolve(response.json());
                })
                    .catch(function (error) {
                    console.error('API Error : ', error.status);
                    console.error('API Error : ', JSON.stringify(error));
                    reject(error.json());
                });
            });
        })
            .catch(function (err) {
            // tslint:disable-next-line:quotemark
            console.log("Error occurred :", err);
        });
    };
    return WorksPage;
}());
WorksPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-works',template:/*ion-inline-start:"C:\imagine-art\src\pages\works\works.html"*/'<ion-header>\n    <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title *ngIf="searchConfirm === false">{{titlework}}</ion-title>\n      <ion-title *ngIf="searchConfirm === true"> Artes </ion-title>\n    </ion-navbar>\n  </ion-header>\n\n<ion-content padding class="transparent-header">\n  <!--<ion-header>\n      <ion-navbar>\n        <p>{{ titlework }}</p>\n      </ion-navbar>\n  </ion-header>-->\n  <div class="pins">\n    <ion-card class="pin" *ngFor="let produto of produtos" (click)="goToShow(produto._id)">\n      <img [src]="produto.productImage"/>\n      <!--<div *ngIf="produto.productDescription" class="post-description">\n        <small>{{ produto.productDescription }} {{ titlework }}</small>\n      </div>-->\n      <ion-item class="text1">\n        <!--<ion-avatar item-start>\n          <img src="assets/img/avatar/marty-avatar.png">\n        </ion-avatar>-->\n        <p class="text"><strong>{{ produto.productTitle }}</strong></p>\n        <!--<p><small>{{ produto.productCategory }}</small></p>-->\n      </ion-item>\n    </ion-card>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\imagine-art\src\pages\works\works.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_3__providers_localstorage__["a" /* Localstorage */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]])
], WorksPage);

//# sourceMappingURL=works.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_signup__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_localstorage__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_catch__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var LoginPage = (function () {
    function LoginPage(navCtrl, database, http, localstorage, loadingCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.database = database;
        this.http = http;
        this.localstorage = localstorage;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.user = {};
        this.error = false;
    }
    LoginPage.prototype.showToast = function (position) {
        // tslint:disable-next-line:prefer-const
        var toast = this.toastCtrl.create({
            message: 'Algo deu errado! Verifique sua internet.',
            duration: 2000,
            // tslint:disable-next-line:object-literal-shorthand
            position: position,
            cssClass: 'center'
        });
        toast.present(toast);
    };
    LoginPage.prototype.goToSignup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__signup_signup__["a" /* SignupPage */]);
    };
    LoginPage.prototype.goToTabs = function (user) {
        var _this = this;
        var loading = this.loadingCtrl.create();
        loading.present();
        var email = user.email;
        var senha = user.senha;
        if (email === undefined || senha === undefined || email === '' || senha === '') {
            loading.dismiss();
            this.error = true;
        }
        else {
            // tslint:disable-next-line:no-var-keyword
            // tslint:disable-next-line:prefer-const
            var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Headers */]();
            headers.append('Accept', 'application/json');
            headers.append('Content-Type', 'application/json');
            // tslint:disable-next-line:prefer-const
            // tslint:disable-next-line:object-literal-shorthand
            var options_1 = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["d" /* RequestOptions */]({ headers: headers });
            // tslint:disable-next-line:prefer-const
            var data_1 = JSON.stringify({
                email: user.email,
                password: user.senha
            });
            new Promise(function (resolve, reject) {
                _this.http.post('https://imagine-art.herokuapp.com/user/login/', data_1, options_1)
                    .toPromise()
                    .then(function (response) {
                    if (response.json().code === 200) {
                        _this.localstorage.setUser(response.json().user);
                        _this.localstorage.setSearch(undefined);
                        // console.log(response.json().user, 'este é o user bro');
                        _this.localstorage.getUser('').then(function (userID) {
                            // console.log('Esta eh a resposta do localstorage getuser brow', userID);
                        });
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
                    }
                    else {
                        _this.error = true;
                    }
                    loading.dismiss();
                    resolve(response.json());
                })
                    .catch(function (error) {
                    console.error('API Error : ', error.status);
                    console.error('API Error : ', JSON.stringify(error));
                    loading.dismiss();
                    _this.showToast('middle');
                    reject(error.json());
                });
            });
        }
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-login',template:/*ion-inline-start:"C:\imagine-art\src\pages\login\login.html"*/'<ion-content padding class="transparent-header">\n    <ion-header>\n      <ion-navbar>\n      </ion-navbar>\n    </ion-header>\n    <ion-row class="padding-top">\n      <img  class="center icon-b" src="assets/img/icon/icon-b.png">\n    </ion-row>\n    <ion-row>\n        <img  class="center written" src="assets/img/icon/written-b.png">\n    </ion-row>\n    <div padding>\n      <ion-item>\n        <ion-input type="text" [(ngModel)]="user.email" placeholder="Email" required></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-input type="password" [(ngModel)]="user.senha" placeholder="Senha" required></ion-input>\n        \n      </ion-item>\n      \n      <ion-row>\n        <ion-label class="label-error" *ngIf="error"> -Email ou senha incorretos-</ion-label>\n      </ion-row>\n      \n      <button ion-button block outline (click)="goToTabs(user)" color="light" class="login-button" >Login</button>\n      \n\n    </div>\n    <!--<div class="strike">\n      <span>OR</span>\n    </div>-->\n    <!--<button ion-button block clear (click)="login()" color="light" class="login-button"><ion-icon name="logo-facebook"></ion-icon> Login with Facebook</button>-->\n  </ion-content>\n  \n  <ion-footer>\n    <ion-toolbar class="footer">\n      <div (click)="goToSignup()">\n        <ion-row><span style="margin: 0 auto 0;">Não tem uma conta? <strong>Inscreva-se!</strong></span></ion-row>\n      </div>\n    </ion-toolbar>\n  </ion-footer>\n  '/*ion-inline-end:"C:\imagine-art\src\pages\login\login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_6__providers_localstorage__["a" /* Localstorage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ })

},[420]);
//# sourceMappingURL=main.js.map