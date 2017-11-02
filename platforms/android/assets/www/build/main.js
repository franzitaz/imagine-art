webpackJsonp([10],{

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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__works_works__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_localstorage__ = __webpack_require__(35);
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
        console.log(categoria);
        this.localstorage.setCategoria(categoria);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__works_works__["a" /* WorksPage */]);
    };
    HomePage.prototype.goToFeltro = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__works_works__["a" /* WorksPage */]);
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-home',template:/*ion-inline-start:"C:\imagine-art\src\pages\home\home.html"*/'<ion-content class="background">\n  <div>\n    <ion-card class="category feltro" (click)="goToList(\'Feltro\')">\n      <div class="card-title">Feltro</div>\n    </ion-card>\n    <ion-card class="category biscuit" (click)="goToList(\'Biscuit\')">\n      <div class="card-title">Biscuit</div>\n    </ion-card>\n    <ion-card class="category madeira" (click)="goToList(\'Madeira\')">\n      <div class="card-title">Madeira</div>\n    </ion-card>\n    <ion-card class="category bordado" (click)="goToList(\'Bordado\')">\n      <div class="card-title">Bordado</div>\n    </ion-card>\n    <ion-card class="category scrapbook" (click)="goToList(\'SrapBook\')">\n      <div class="card-title">ScrapBook</div>\n    </ion-card>\n    <ion-card class="category bookpopup" (click)="goToList(\'Biscuit\')">\n      <div class="card-title">Book PopUp</div>\n    </ion-card>\n    <ion-card class="category corteecostura" (click)="goToList(\'Madeira\')">\n      <div class="card-title">Corte e Costura</div>\n    </ion-card>\n    <ion-card class="category decoupage" (click)="goToList(\'Bordado\')">\n      <div class="card-title">Découpage</div>\n    </ion-card>\n    <ion-card class="category patchwork" (click)="goToList(\'Feltro\')">\n      <div class="card-title">Patchwork</div>\n    </ion-card>\n    <ion-card class="category pintura" (click)="goToList(\'Biscuit\')">\n      <div class="card-title">Pintura</div>\n    </ion-card>\n    <ion-card class="category reciclagem" (click)="goToList(\'Madeira\')">\n      <div class="card-title">Reciclagem</div>\n    </ion-card>\n\n  </div>\n</ion-content>\n  '/*ion-inline-end:"C:\imagine-art\src\pages\home\home.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_localstorage__["a" /* Localstorage */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorksPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_profile__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_localstorage__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__(52);
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








var WorksPage = (function () {
    function WorksPage(navCtrl, navParams, toastCtrl, http, localstorage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.http = http;
        this.localstorage = localstorage;
        this.produtos = [];
        this.localstorage = localstorage;
        this.getProdutos();
    }
    WorksPage.prototype.goToProfile = function (profileID) {
        this.localstorage.setProfileID(profileID);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__profile_profile__["a" /* ProfilePage */]);
    };
    WorksPage.prototype.ionViewDidLoad = function () {
    };
    WorksPage.prototype.getProdutos = function () {
        var _this = this;
        this.localstorage.getCategoria().then(function (categoria) {
            var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
            headers.append("Accept", 'application/json');
            headers.append('Content-Type', 'application/json');
            var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: headers });
            var data = JSON.stringify({
                category: categoria
            });
            new Promise(function (resolve, reject) {
                _this.http.post('https://imagine-art.herokuapp.com/product/getAllProductsByCategory/', data, options)
                    .toPromise()
                    .then(function (response) {
                    console.log(response.json().data);
                    _this.produtos = response.json().data;
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
            console.log("Error occurred :", err);
        });
    };
    return WorksPage;
}());
WorksPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-works',template:/*ion-inline-start:"C:\imagine-art\src\pages\works\works.html"*/'\n<ion-content padding class="transparent-header">\n  <ion-header>\n      <ion-navbar>\n      </ion-navbar>\n  </ion-header>\n  <div class="pins">\n    <ion-card class="pin" *ngFor="let produto of produtos" (click)="goToProfile(produto.productorID)">\n      <img src="{{produto.productImage}}"/>\n      <div *ngIf="produto.productDescription" class="post-description">\n        <small>{{ produto.productDescription }}</small>\n      </div>\n      <ion-item>\n        <ion-avatar item-start>\n          <img src="assets/img/avatar/marty-avatar.png">\n        </ion-avatar>\n        <small>{{ produto.productTitle }}</small>\n        <p><small>{{ produto.productCategory }}</small></p>\n      </ion-item>\n    </ion-card>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\imagine-art\src\pages\works\works.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_3__providers_localstorage__["a" /* Localstorage */]])
], WorksPage);

//# sourceMappingURL=works.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_util_camera_provider__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditProfilePage = (function () {
    function EditProfilePage(navCtrl, actionsheetCtrl, cameraProvider, platform, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.actionsheetCtrl = actionsheetCtrl;
        this.cameraProvider = cameraProvider;
        this.platform = platform;
        this.loadingCtrl = loadingCtrl;
        this.placeholder = 'assets/img/avatar/girl-avatar.png';
        this.user = {
            name: 'Paula Bolliger',
            profileImage: 'assets/img/avatar/girl-avatar.png',
            coverImage: 'assets/img/background/background-5.jpg',
            city: 'Votuporanga',
            state: 'São Paulo',
            phone: '',
            likes: 456,
            posts: 35
        };
    }
    EditProfilePage.prototype.changePicture = function () {
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
    EditProfilePage.prototype.takePicture = function () {
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
    EditProfilePage.prototype.getPicture = function () {
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
    return EditProfilePage;
}());
EditProfilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'page-edit-profile',template:/*ion-inline-start:"C:\imagine-art\src\pages\edit-profile\edit-profile.html"*/'<ion-content padding>\n  <ion-header>\n    <ion-navbar>\n      <ion-title>Editando perfil...</ion-title>\n    </ion-navbar>\n  </ion-header>\n  <div id="profile-bg" [ngStyle]="{\'background-image\': \'url(\' + user.coverImage +\')\'}"></div>\n  <div id="content">\n    <div style="margin-top: -10vh;">\n      <button ion-button color="dark" class="button-edit-posts" (click)="changePicture()">\n          <ion-icon name="md-brush"></ion-icon>\n      </button>\n    </div>\n\n    <hr style="margin-top: 10vh"/>\n\n    <div id="profile-info" padding>\n      <img id="profile-image" [src]="user.profileImage">\n    </div>\n    <div style="margin-top: -25vh;">\n      <button ion-button color="dark" class="button-edit-posts" (click)="changePicture()">\n          <ion-icon name="md-brush"></ion-icon>\n      </button>\n    </div>\n\n    <hr style="margin-top: 10vh"/>\n\n    <div id="profile-info2" padding>\n      <ion-item>\n        <ion-label>Nome:</ion-label>\n        <ion-input type="text"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Cidade:</ion-label>\n        <ion-input type="text"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Estado:</ion-label>\n        <ion-input type="text"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Telefone:</ion-label>\n        <ion-input type="text"></ion-input>\n      </ion-item>\n     <!--<h3 id="profile-name">{{user.name}}</h3>\n      <p>{{user.occupation}} &bull; {{user.location}}</p>\n      <p class="profile-description">{{user.description}}</p>-->\n    </div>\n\n  <ion-row>\n      <button ion-button (click)="editProfile" class="pronto-button center">PRONTO</button>\n    </ion-row>\n\n</div>\n</ion-content>'/*ion-inline-end:"C:\imagine-art\src\pages\edit-profile\edit-profile.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* ActionSheetController */],
        __WEBPACK_IMPORTED_MODULE_0__providers_util_camera_provider__["a" /* CameraProvider */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* LoadingController */]])
], EditProfilePage);

//# sourceMappingURL=edit-profile.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SearchPage = (function () {
    function SearchPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SearchPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SearchPage');
    };
    return SearchPage;
}());
SearchPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-search',template:/*ion-inline-start:"C:\imagine-art\src\pages\search\search.html"*/'<ion-content padding class="background">\n  <ion-row>\n    <!--<img  class="center icon-p" src="assets/img/icon/icon-pb.png">-->\n  </ion-row>\n\n  <ion-row class="margin center text">\n    <p class="margin-bottom">Digite o que você procura!</p>\n  </ion-row>\n\n  <ion-item class="ion-select">\n      <!--<ion-label>Gênero</ion-label>-->\n      <ion-select interface="popover" placeholder="Título da Arte / Nome Artesão">\n        <ion-option value="nome" checked="true">Nome do artesão</ion-option>\n        <ion-option value="titulo">Título da arte</ion-option>\n      </ion-select>\n  </ion-item>\n\n  <ion-item>\n    <ion-input type="text"></ion-input>\n  </ion-item>\n   \n  <button ion-button icon-end color="dark" class="center size buscar-button text-transform">\n        Buscar\n      <ion-icon name="md-search" class="" ></ion-icon>\n  </button>\n\n</ion-content>\n'/*ion-inline-end:"C:\imagine-art\src\pages\search\search.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], SearchPage);

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_signup__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_localstorage__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_catch__ = __webpack_require__(52);
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
    function LoginPage(navCtrl, database, http, localstorage) {
        this.navCtrl = navCtrl;
        this.database = database;
        this.http = http;
        this.localstorage = localstorage;
        this.user = {};
    }
    LoginPage.prototype.goToSignup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__signup_signup__["a" /* SignupPage */]);
    };
    LoginPage.prototype.goToTabs = function (user) {
        var _this = this;
        console.log(user);
        var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Headers */]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var data = JSON.stringify({
            email: user.email,
            password: user.senha
        });
        new Promise(function (resolve, reject) {
            _this.http.post('https://imagine-art.herokuapp.com/user/login/', data, options)
                .toPromise()
                .then(function (response) {
                if (response.json().code === 200) {
                    _this.localstorage.setUser(response.json().user);
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
                }
                resolve(response.json());
            })
                .catch(function (error) {
                console.error('API Error : ', error.status);
                console.error('API Error : ', JSON.stringify(error));
                reject(error.json());
            });
        });
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-login',template:/*ion-inline-start:"C:\imagine-art\src\pages\login\login.html"*/'<ion-content padding class="transparent-header">\n    <ion-header>\n      <ion-navbar>\n      </ion-navbar>\n    </ion-header>\n    <ion-row class="padding-top">\n      <img  class="center icon-b" src="assets/img/icon/icon-b.png">\n    </ion-row>\n    <ion-row>\n        <img  class="center written" src="assets/img/icon/written-b.png">\n    </ion-row>\n    <div padding>\n      <ion-item>\n        <ion-input type="text" [(ngModel)]="user.email" placeholder="Email"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-input type="password" [(ngModel)]="user.senha" placeholder="Senha"></ion-input>\n      </ion-item>\n      <button ion-button block outline (click)="goToTabs(user)" color="light" class="login-button">Login</button>\n\n    </div>\n    <!--<div class="strike">\n      <span>OR</span>\n    </div>-->\n    <!--<button ion-button block clear (click)="login()" color="light" class="login-button"><ion-icon name="logo-facebook"></ion-icon> Login with Facebook</button>\n  </ion-content>-->\n  <ion-footer>\n    <ion-toolbar class="footer">\n      <!--<button ion-button full (click)="irFilmes()">-->\n      <div (click)="goToSignup()">\n        <span>Não tem uma conta? <strong>Inscreva-se!</strong></span>\n      </div>\n    </ion-toolbar>\n  </ion-footer>\n  '/*ion-inline-end:"C:\imagine-art\src\pages\login\login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_6__providers_localstorage__["a" /* Localstorage */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
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
        this.type = 'password';
        this.showPass = false;
        this.userRef$ = this.database.list('user');
    }
    SignupPage.prototype.showToast = function (position) {
        var toast = this.toastCtrl.create({
            message: 'Você se inscreveu com SUCESSO!',
            duration: 4000,
            position: position
        });
        toast.present(toast);
    };
    SignupPage.prototype.register = function (user) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
        new Promise(function (resolve, reject) {
            _this.http.post('https://imagine-art.herokuapp.com/user/signup/', JSON.stringify({
                email: user.email,
                password: user.senha,
                name: user.nome,
            }), options)
                .toPromise()
                .then(function (response) {
                console.log('API Response : ', response.json());
                console.log("DATA");
                localStorage.setItem('user', JSON.stringify(response));
                resolve(response.json());
            })
                .catch(function (error) {
                console.error('API Error : ', error.status);
                console.error('API Error : ', JSON.stringify(error));
                reject(error.json());
            });
        });
        user = {};
        this.navCtrl.pop();
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
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage');
    };
    return SignupPage;
}());
SignupPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-signup',template:/*ion-inline-start:"C:\imagine-art\src\pages\signup\signup.html"*/'<!--\n  Generated template for the SignupPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!--<ion-header>\n <ion-navbar>\n    <ion-title>signup</ion-title>\n    \n  </ion-navbar>-->\n  <!--<ion-title padding class="transparent-header"><p class="text-transform2">Inscreva-se</p></ion-title>\n</ion-header>-->\n\n\n<ion-content padding class="ion-content">\n  \n  <!--<ion-icon class="invert" name="ios-umbrella-outline" outline></ion-icon>-->\n  <img  class="center icon-pb" src="assets/img/icon/icon-pb.png">\n  <img  class="center written" src="assets/img/icon/written-p.png">\n \n  <!--<p class="text-transform2">Inscreva-se</p>-->\n  \n  <ion-list>\n    <ion-item>\n      <ion-input type="text" [(ngModel)]=\'user.nome\' placeholder="Nome"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-input type="email" [(ngModel)]=\'user.email\' placeholder="Email" style="height: -10%;"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-input type="{{type}}" [(ngModel)]=\'user.senha\' placeholder="Senha"  required pattern=".{4,10}"></ion-input>\n      <!--<ion-input type="{{type}}" name="password" ngModel #password="ngModel"></ion-input>-->\n      \n      <button *ngIf="!showPass" ion-button clear color="dark" type="button" item-right (click)="showPassword()"> <ion-icon name="md-eye-off"></ion-icon></button>\n      <button *ngIf="showPass" ion-button clear color="dark" type="button" item-right (click)="showPassword()"> <ion-icon name="md-eye"></ion-icon></button>\n    </ion-item>\n\n    <ion-item class="ion-select">\n      <ion-label>Gênero</ion-label>\n      <ion-select [(ngModel)]=\'user.genero\' interface="popover">\n        <ion-option value="f" checked="true">Feminino</ion-option>\n        <ion-option value="m">Masculino</ion-option>\n        <ion-option value="o">Outros</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item class="ion-select">\n      <ion-label style="color: #949494;">Data de Nascimento</ion-label>\n    </ion-item>\n    <!--<ion-item class="ion-select">\n      <ion-label>Data</ion-label>\n      <ion-select [(ngModel)]="data">\n          <ion-option value="01" checked="true">1</ion-option>\n          <ion-option value="02">2</ion-option>\n          <ion-option value="03">3</ion-option>\n          <ion-option value="04">4</ion-option>\n          <ion-option value="05">5</ion-option>\n          <ion-option value="06">6</ion-option>\n          <ion-option value="07">7</ion-option>\n          <ion-option value="08">8</ion-option>\n          <ion-option value="09">9</ion-option>\n          <ion-option value="10">10</ion-option>\n          <ion-option value="11">11</ion-option>\n          <ion-option value="12">12</ion-option>\n          <ion-option value="13">13</ion-option>\n          <ion-option value="14">14</ion-option>\n          <ion-option value="15">15</ion-option>\n          <ion-option value="16">16</ion-option>\n          <ion-option value="17">17</ion-option>\n          <ion-option value="18">18</ion-option>\n          <ion-option value="19">19</ion-option>\n          <ion-option value="20">20</ion-option>\n          <ion-option value="21">21</ion-option>\n          <ion-option value="22">22</ion-option>\n          <ion-option value="23">23</ion-option>\n          <ion-option value="24">24</ion-option>\n          <ion-option value="25">25</ion-option>\n          <ion-option value="26">26</ion-option>\n          <ion-option value="27">27</ion-option>\n          <ion-option value="28">28</ion-option>\n          <ion-option value="29">29</ion-option>\n          <ion-option value="30">30</ion-option>\n          <ion-option value="31">31</ion-option>\n      </ion-select>\n      </ion-item>-->\n\n      <ion-item style="padding-left: 14vw;">\n      <ion-label>Mês</ion-label>\n      <ion-select  [(ngModel)]="mes" interface="popover">\n          <ion-option value="01" checked="true">Janeiro</ion-option>\n          <ion-option value="02">Fevereiro</ion-option>\n          <ion-option value="03">Março</ion-option>\n          <ion-option value="04">Abril</ion-option>\n          <ion-option value="05">Maio</ion-option>\n          <ion-option value="06">Junho</ion-option>\n          <ion-option value="07">Julho</ion-option>\n          <ion-option value="08">Agosto</ion-option>\n          <ion-option value="09">Setembro</ion-option>\n          <ion-option value="10">Outubro</ion-option>\n          <ion-option value="11">Novembro</ion-option>\n          <ion-option value="12">Dezembro</ion-option>\n        </ion-select>\n      </ion-item>\n      \n      <ion-item style="padding-left: 14vw;"> \n        <ion-label>Ano</ion-label>\n        <ion-select [(ngModel)]="ano" interface="popover">\n          <ion-option>1989</ion-option>\n          <ion-option>1990</ion-option>\n          <ion-option>1991</ion-option>\n          <ion-option checked="true">1992</ion-option>\n          <ion-option>1993</ion-option>\n          <ion-option>1994</ion-option>\n          <ion-option>1995</ion-option>\n          <ion-option>1996</ion-option>\n          <ion-option>1997</ion-option>\n          <ion-option>1998</ion-option>\n          <ion-option>1999</ion-option>\n        </ion-select>\n    </ion-item>\n  </ion-list>\n\n  <ion-buttons class="center">\n    <button ion-button (click)="register(user)" (click)="showToast(\'middle\')" class="pronto-button">Pronto</button>\n  </ion-buttons>\n\n<ion-footer class="ion-footer-shadow">\n  <ion-toolbar>\n      <ion-buttons>\n        <button ion-button navPop class="text-transform"><span>Fechar</span></button>\n      </ion-buttons>\n  </ion-toolbar>\n</ion-footer>\n\n'/*ion-inline-end:"C:\imagine-art\src\pages\signup\signup.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]])
], SignupPage);

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 166:
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
webpackEmptyAsyncContext.id = 166;

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return MODULES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return PIPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return PROVIDERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return COMPONENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DIRECTIVES; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_global__ = __webpack_require__(435);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_localstorage__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_util_toast_service__ = __webpack_require__(440);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_util_alert_service__ = __webpack_require__(550);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_util_camera_provider__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_native_google_maps_native_google_maps__ = __webpack_require__(551);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_card_io__ = __webpack_require__(552);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_barcode_scanner__ = __webpack_require__(553);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_diagnostic__ = __webpack_require__(554);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_geolocation__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_google_maps__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_sliding_drawer_sliding_drawer__ = __webpack_require__(555);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_autosize_autosize__ = __webpack_require__(556);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_countdown_timer_timer__ = __webpack_require__(557);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_timer_progress_timer_progress__ = __webpack_require__(558);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_expandable_header_expandable_header__ = __webpack_require__(559);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_flash_card_flash_card__ = __webpack_require__(560);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_accordion_list_accordion_list__ = __webpack_require__(561);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_timeline_timeline__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pipes_moment_pipe__ = __webpack_require__(562);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pipes_temperature_pipe__ = __webpack_require__(564);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pipes_orderby_pipe__ = __webpack_require__(565);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pipes_shorten_pipe__ = __webpack_require__(566);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pipes_capitalize_pipe__ = __webpack_require__(567);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_angular2_swing__ = __webpack_require__(568);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_angular2_swing___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_27_angular2_swing__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__angular_http__ = __webpack_require__(30);
// Global state (used for theming)


// Providers




// Ionic native providers








// Directives


// Components








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
    Storage
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

/***/ 209:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-work/add-work.module": [
		581,
		9
	],
	"../pages/edit-profile/edit-profile.module": [
		586,
		8
	],
	"../pages/edit-work/edit-work.module": [
		583,
		7
	],
	"../pages/home/home.module": [
		579,
		6
	],
	"../pages/login/login.module": [
		584,
		5
	],
	"../pages/logout/logout.module": [
		580,
		0
	],
	"../pages/profile/profile.module": [
		587,
		4
	],
	"../pages/search/search.module": [
		582,
		3
	],
	"../pages/signup/signup.module": [
		585,
		2
	],
	"../pages/works/works.module": [
		588,
		1
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
webpackAsyncContext.id = 209;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile_profile__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__search_search__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__add_work_add_work__ = __webpack_require__(90);
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
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_4__search_search__["a" /* SearchPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__profile_profile__["a" /* ProfilePage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_5__add_work_add_work__["a" /* AddWorkPage */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_4__search_search__["a" /* SearchPage */];
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\imagine-art\src\pages\tabs\tabs.html"*/'<ion-tabs [selectedIndex]="2">\n  <ion-tab [root]="tab4Root" tabIcon="md-add-circle"></ion-tab>\n  <ion-tab [root]="tab2Root" tabIcon="mail"></ion-tab>\n  <ion-tab [root]="tab1Root" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab3Root" tabIcon="md-contact"></ion-tab>\n  <ion-tab [root]="tab5Root" tabIcon="md-search"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"C:\imagine-art\src\pages\tabs\tabs.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Localstorage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(168);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the Localstorage provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var Localstorage = (function () {
    function Localstorage(http, storage) {
        this.http = http;
        this.storage = storage;
        console.log('Hello Localstorage Provider');
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
        console.log("4444444444444444");
        return this.storage.get('profileID').then(function (profileID) {
            console.log("5555555555555555");
            return profileID;
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
], Localstorage);

//# sourceMappingURL=localstorage.js.map

/***/ }),

/***/ 415:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditWorkPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_util_camera_provider__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile_profile__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_localstorage__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch__ = __webpack_require__(52);
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








var EditWorkPage = (function () {
    function EditWorkPage(navCtrl, actionsheetCtrl, cameraProvider, platform, loadingCtrl, navParams, http, localstorage) {
        this.navCtrl = navCtrl;
        this.actionsheetCtrl = actionsheetCtrl;
        this.cameraProvider = cameraProvider;
        this.platform = platform;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.http = http;
        this.localstorage = localstorage;
        this.product = {};
        this.placeholder = 'assets/img/avatar/girl-avatar.png';
        this.posts = [
            {
                postImageUrl: 'assets/img/background/background-2.jpg',
                title: 'Título do Produto',
                text: "I believe in being strong when everything seems to be going wrong.\n             I believe that happy girls are the prettiest girls.\n             I believe that tomorrow is another day and I believe in miracles.",
                date: 'November 5, 2016',
                likes: 12,
                comments: 4
            },
        ];
        this.localstorage = localstorage;
    }
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
    EditWorkPage.prototype.addProduto = function (product) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.localstorage.getUser('ts').then(function (dados) {
            var res = dados;
            var data = JSON.stringify({
                productTitle: product.title,
                productorID: res._id,
                productorName: res.name,
                productDescription: product.description,
                productImage: 'goo.gl/awyHW5'
            });
            new Promise(function (resolve, reject) {
                _this.http.post('https://imagine-art.herokuapp.com/product/newproduct/', data, options)
                    .toPromise()
                    .then(function (response) {
                    if (response.json().code === 200) {
                        // IMPORTAR PAGINA PARA IR PARA O PROFILE PAGE AQUI
                        console.log(response.json().data);
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__profile_profile__["a" /* ProfilePage */]);
                    }
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
            console.log("Error occurred :", err);
        });
    };
    return EditWorkPage;
}());
EditWorkPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'page-edit-work',template:/*ion-inline-start:"C:\imagine-art\src\pages\edit-work\edit-work.html"*/'<ion-header>\n    \n  <ion-navbar>\n    <ion-title>Editando sua arte...</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <div>\n    <div id="posts">\n      <ion-card *ngFor="let post of posts">\n        <img [src]="chosenPicture || placeholder" onerror="post.postImageUrl">\n        <!--<ion-card-content>\n          <h2 class="padding-title"><strong>{{post.title}}</strong></h2>\n          <p>{{post.text}}</p>\n        </ion-card-content>-->\n      </ion-card>\n\n        <button ion-button color="dark" class="button-edit-posts" (click)="changePicture()">\n            <ion-icon name="md-brush"></ion-icon>\n        </button>\n\n\n        <ion-item>\n          <ion-label>Título:</ion-label>\n            <ion-input type="text" [(ngModel)]=\'product.title\'></ion-input>\n          </ion-item>\n\n      <ion-item>\n        <ion-label>Categoria:</ion-label>\n        <ion-select  [(ngModel)]="mes" interface="popover">\n            <ion-option value="bordado" checked="true">Bordado</ion-option>\n            <ion-option value="feltro">Feltro</ion-option>\n            <ion-option value="bookpopup">Book Pop-Up</ion-option>\n            <ion-option value="scrapbook">Scrap-Book</ion-option>\n            <ion-option value="Biscuit">Biscuit</ion-option>\n            <ion-option value="patchwork">Patchwork</ion-option>\n            <ion-option value="pinturas">Pinturas</ion-option>\n            <ion-option value="reciclagem">Reciclagem</ion-option>\n            <ion-option value="cec">Corte e Costura</ion-option>\n            <ion-option value="decoupage">Decoupage</ion-option>\n            <ion-option value="madeira">Madeira</ion-option>\n          </ion-select>\n      </ion-item>\n\n          <ion-item>  \n            <ion-label>Descrição:</ion-label>\n              <ion-textarea type="text" [(ngModel)]=\'product.description\' autosize></ion-textarea>\n          </ion-item>           \n      \n          <button ion-button class="border-radius color-excluir" (click)="addProduto(product)">Excluir</button>\n\n          <button ion-button (click)="addProduto(product)" class="pronto-button right">PRONTO</button>\n      \n    </div>\n  </div>\n</ion-content>'/*ion-inline-end:"C:\imagine-art\src\pages\edit-work\edit-work.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* ActionSheetController */],
        __WEBPACK_IMPORTED_MODULE_0__providers_util_camera_provider__["a" /* CameraProvider */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_5__providers_localstorage__["a" /* Localstorage */]])
], EditWorkPage);

//# sourceMappingURL=edit-work.js.map

/***/ }),

/***/ 416:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(433);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 433:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_module__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_component__ = __webpack_require__(577);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_imports__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__firebase_credenciais__ = __webpack_require__(578);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_storage__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_tabs_tabs__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_login_login__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_signup_signup__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_home_home__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_works_works__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_profile_profile__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_search_search__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_add_work_add_work__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_edit_work_edit_work__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_edit_profile_edit_profile__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_localstorage__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


/*************/






















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
            __WEBPACK_IMPORTED_MODULE_13__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_signup_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_works_works__["a" /* WorksPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_profile_profile__["a" /* ProfilePage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_search_search__["a" /* SearchPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_add_work_add_work__["a" /* AddWorkPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_edit_work_edit_work__["a" /* EditWorkPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_edit_profile_edit_profile__["a" /* EditProfilePage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_6__app_imports__["c" /* MODULES */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/logout/logout.module#LogoutPageModule', name: 'LogoutPage', segment: 'logout', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/add-work/add-work.module#AddWorkPageModule', name: 'AddWorkPage', segment: 'add-work', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/search/search.module#SearchPageModule', name: 'SearchPage', segment: 'search', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/edit-work/edit-work.module#EditWorkPageModule', name: 'EditWorkPage', segment: 'edit-work', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/edit-profile/edit-profile.module#EditProfilePageModule', name: 'EditProfilePage', segment: 'edit-profile', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/works/works.module#WorksPageModule', name: 'WorksPage', segment: 'works', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_0__shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_7_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_9__firebase_credenciais__["a" /* FIREBASE_CREDENTIALS */]),
            __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__["b" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_10__angular_http__["c" /* HttpModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["d" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_13__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_signup_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_works_works__["a" /* WorksPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_profile_profile__["a" /* ProfilePage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_search_search__["a" /* SearchPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_add_work_add_work__["a" /* AddWorkPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_edit_work_edit_work__["a" /* EditWorkPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_edit_profile_edit_profile__["a" /* EditProfilePage */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_6__app_imports__["e" /* PROVIDERS */], __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */], { provide: __WEBPACK_IMPORTED_MODULE_3__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["e" /* IonicErrorHandler */] }, __WEBPACK_IMPORTED_MODULE_23__providers_localstorage__["a" /* Localstorage */], Storage]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 434:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_imports__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
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
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicModule */],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_0__app_imports__["d" /* PIPES */],
            __WEBPACK_IMPORTED_MODULE_0__app_imports__["a" /* COMPONENTS */]
        ]
    })
], SharedModule);

//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ 435:
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

/***/ 440:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
], ToastService);

//# sourceMappingURL=toast.service.js.map

/***/ }),

/***/ 550:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
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

/***/ 551:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NativeGoogleMapsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_google_maps__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(292);
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

/***/ 555:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlidingDrawer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
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
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* DomController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */]])
], SlidingDrawer);

//# sourceMappingURL=sliding-drawer.js.map

/***/ }),

/***/ 556:
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

/***/ 557:
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

/***/ 558:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimerProgress; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(29);
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

/***/ 559:
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

/***/ 560:
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

/***/ 561:
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

/***/ 562:
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

/***/ 563:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 294,
	"./af.js": 294,
	"./ar": 295,
	"./ar-dz": 296,
	"./ar-dz.js": 296,
	"./ar-kw": 297,
	"./ar-kw.js": 297,
	"./ar-ly": 298,
	"./ar-ly.js": 298,
	"./ar-ma": 299,
	"./ar-ma.js": 299,
	"./ar-sa": 300,
	"./ar-sa.js": 300,
	"./ar-tn": 301,
	"./ar-tn.js": 301,
	"./ar.js": 295,
	"./az": 302,
	"./az.js": 302,
	"./be": 303,
	"./be.js": 303,
	"./bg": 304,
	"./bg.js": 304,
	"./bn": 305,
	"./bn.js": 305,
	"./bo": 306,
	"./bo.js": 306,
	"./br": 307,
	"./br.js": 307,
	"./bs": 308,
	"./bs.js": 308,
	"./ca": 309,
	"./ca.js": 309,
	"./cs": 310,
	"./cs.js": 310,
	"./cv": 311,
	"./cv.js": 311,
	"./cy": 312,
	"./cy.js": 312,
	"./da": 313,
	"./da.js": 313,
	"./de": 314,
	"./de-at": 315,
	"./de-at.js": 315,
	"./de-ch": 316,
	"./de-ch.js": 316,
	"./de.js": 314,
	"./dv": 317,
	"./dv.js": 317,
	"./el": 318,
	"./el.js": 318,
	"./en-au": 319,
	"./en-au.js": 319,
	"./en-ca": 320,
	"./en-ca.js": 320,
	"./en-gb": 321,
	"./en-gb.js": 321,
	"./en-ie": 322,
	"./en-ie.js": 322,
	"./en-nz": 323,
	"./en-nz.js": 323,
	"./eo": 324,
	"./eo.js": 324,
	"./es": 325,
	"./es-do": 326,
	"./es-do.js": 326,
	"./es.js": 325,
	"./et": 327,
	"./et.js": 327,
	"./eu": 328,
	"./eu.js": 328,
	"./fa": 329,
	"./fa.js": 329,
	"./fi": 330,
	"./fi.js": 330,
	"./fo": 331,
	"./fo.js": 331,
	"./fr": 332,
	"./fr-ca": 333,
	"./fr-ca.js": 333,
	"./fr-ch": 334,
	"./fr-ch.js": 334,
	"./fr.js": 332,
	"./fy": 335,
	"./fy.js": 335,
	"./gd": 336,
	"./gd.js": 336,
	"./gl": 337,
	"./gl.js": 337,
	"./gom-latn": 338,
	"./gom-latn.js": 338,
	"./he": 339,
	"./he.js": 339,
	"./hi": 340,
	"./hi.js": 340,
	"./hr": 341,
	"./hr.js": 341,
	"./hu": 342,
	"./hu.js": 342,
	"./hy-am": 343,
	"./hy-am.js": 343,
	"./id": 344,
	"./id.js": 344,
	"./is": 345,
	"./is.js": 345,
	"./it": 346,
	"./it.js": 346,
	"./ja": 347,
	"./ja.js": 347,
	"./jv": 348,
	"./jv.js": 348,
	"./ka": 349,
	"./ka.js": 349,
	"./kk": 350,
	"./kk.js": 350,
	"./km": 351,
	"./km.js": 351,
	"./kn": 352,
	"./kn.js": 352,
	"./ko": 353,
	"./ko.js": 353,
	"./ky": 354,
	"./ky.js": 354,
	"./lb": 355,
	"./lb.js": 355,
	"./lo": 356,
	"./lo.js": 356,
	"./lt": 357,
	"./lt.js": 357,
	"./lv": 358,
	"./lv.js": 358,
	"./me": 359,
	"./me.js": 359,
	"./mi": 360,
	"./mi.js": 360,
	"./mk": 361,
	"./mk.js": 361,
	"./ml": 362,
	"./ml.js": 362,
	"./mr": 363,
	"./mr.js": 363,
	"./ms": 364,
	"./ms-my": 365,
	"./ms-my.js": 365,
	"./ms.js": 364,
	"./my": 366,
	"./my.js": 366,
	"./nb": 367,
	"./nb.js": 367,
	"./ne": 368,
	"./ne.js": 368,
	"./nl": 369,
	"./nl-be": 370,
	"./nl-be.js": 370,
	"./nl.js": 369,
	"./nn": 371,
	"./nn.js": 371,
	"./pa-in": 372,
	"./pa-in.js": 372,
	"./pl": 373,
	"./pl.js": 373,
	"./pt": 374,
	"./pt-br": 375,
	"./pt-br.js": 375,
	"./pt.js": 374,
	"./ro": 376,
	"./ro.js": 376,
	"./ru": 377,
	"./ru.js": 377,
	"./sd": 378,
	"./sd.js": 378,
	"./se": 379,
	"./se.js": 379,
	"./si": 380,
	"./si.js": 380,
	"./sk": 381,
	"./sk.js": 381,
	"./sl": 382,
	"./sl.js": 382,
	"./sq": 383,
	"./sq.js": 383,
	"./sr": 384,
	"./sr-cyrl": 385,
	"./sr-cyrl.js": 385,
	"./sr.js": 384,
	"./ss": 386,
	"./ss.js": 386,
	"./sv": 387,
	"./sv.js": 387,
	"./sw": 388,
	"./sw.js": 388,
	"./ta": 389,
	"./ta.js": 389,
	"./te": 390,
	"./te.js": 390,
	"./tet": 391,
	"./tet.js": 391,
	"./th": 392,
	"./th.js": 392,
	"./tl-ph": 393,
	"./tl-ph.js": 393,
	"./tlh": 394,
	"./tlh.js": 394,
	"./tr": 395,
	"./tr.js": 395,
	"./tzl": 396,
	"./tzl.js": 396,
	"./tzm": 397,
	"./tzm-latn": 398,
	"./tzm-latn.js": 398,
	"./tzm.js": 397,
	"./uk": 399,
	"./uk.js": 399,
	"./ur": 400,
	"./ur.js": 400,
	"./uz": 401,
	"./uz-latn": 402,
	"./uz-latn.js": 402,
	"./uz.js": 401,
	"./vi": 403,
	"./vi.js": 403,
	"./x-pseudo": 404,
	"./x-pseudo.js": 404,
	"./yo": 405,
	"./yo.js": 405,
	"./zh-cn": 406,
	"./zh-cn.js": 406,
	"./zh-hk": 407,
	"./zh-hk.js": 407,
	"./zh-tw": 408,
	"./zh-tw.js": 408
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
webpackContext.id = 563;

/***/ }),

/***/ 564:
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

/***/ 565:
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

/***/ 566:
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

/***/ 567:
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

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_util_camera_provider__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add_work_add_work__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__edit_profile_edit_profile__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_localstorage__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_catch__ = __webpack_require__(52);
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









var ProfilePage = (function () {
    function ProfilePage(navCtrl, actionsheetCtrl, cameraProvider, platform, loadingCtrl, http, localstorage) {
        this.navCtrl = navCtrl;
        this.actionsheetCtrl = actionsheetCtrl;
        this.cameraProvider = cameraProvider;
        this.platform = platform;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.localstorage = localstorage;
        this.placeholder = 'assets/img/avatar/girl-avatar.png';
        this.produtos = [];
        this.user = [];
        this.userConfirm = false; // Esta variavel vai verificar se o usuario eh o mesmo do perfil, para liberar os botoes de editar
        this.localstorage = localstorage;
        this.getProfileInformation();
    }
    ProfilePage.prototype.getProfileInformation = function () {
        var _this = this;
        console.log("---------------------");
        this.localstorage.getProfileID().then(function (profileID) {
            var headers = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* Headers */]();
            headers.append("Accept", 'application/json');
            headers.append('Content-Type', 'application/json');
            var options = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["d" /* RequestOptions */]({ headers: headers });
            console.log(profileID);
            var data = JSON.stringify({
                userID: profileID
            });
            new Promise(function (resolve, reject) {
                _this.http.post('https://imagine-art.herokuapp.com/user/getUserProfile/', data, options)
                    .toPromise()
                    .then(function (response) {
                    _this.localstorage.getUser('').then(function (userLoggedID) {
                        console.log('+++++++++++++++++++++++++');
                        console.log(profileID);
                        console.log(userLoggedID);
                        console.log('+++++++++++++++++++++++++');
                        if (profileID === userLoggedID._id) {
                            _this.userConfirm = true;
                        }
                    });
                    _this.produtos = response.json().product;
                    _this.user = response.json().user;
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
            console.log("Error occurred :", err);
        });
    };
    ProfilePage.prototype.goToEditProfile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__edit_profile_edit_profile__["a" /* EditProfilePage */]);
    };
    ProfilePage.prototype.goToAddWork = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__add_work_add_work__["a" /* AddWorkPage */]);
    };
    return ProfilePage;
}());
ProfilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'page-profile',template:/*ion-inline-start:"C:\imagine-art\src\pages\profile\profile.html"*/'<ion-content padding class="transparent-header">\n  <ion-header>\n    <ion-navbar>\n    </ion-navbar>\n  </ion-header>\n  <div id="profile-bg" [ngStyle]="{\'background-image\': \'url(\' + user.coverImage +\')\'}"></div>\n  <div id="content">\n\n    <div id="profile-info" padding>\n      <img id="profile-image" [src]="user.profileImage">\n      <h3 id="profile-name">{{user.name}}</h3>\n      <p>user.city &bull; user.state</p>\n      <p class="profile-description">user.phone</p>  \n      <!--<button ion-button *ngIf="!following" small color="purple" (click)="follow()">Follow</button>-->\n      <div class="margin-top" *ngIf="userConfirm">\n        <button ion-button color="dark" class="button-edit-posts" (click)="goToEditProfile()">\n            <ion-icon name="md-brush"></ion-icon>\n        </button>\n    </div>\n      <!--<button ion-button *ngIf="following" class="follow-button" small color="purple" (click)="follow()">Following<ion-icon name="checkmark"></ion-icon></button>-->\n    </div>\n\n    <hr/>\n\n    <ion-row class="profile-numbers">\n      <ion-col>\n        <p>Likes</p>\n        <span>user.likes</span>\n      </ion-col>\n      <ion-col style="margin-left: -30vw;">\n        <p>Posts</p>\n        <span>user.posts</span>\n      </ion-col>\n    </ion-row>\n\n    <div id="posts">\n      <ion-card *ngFor="let produto of produtos">\n        <img [src]="chosenPicture || placeholder" onerror="post.postImageUrl">\n        <ion-card-content>\n          <h2 class="padding-title"><strong>{{produto.productTitle}}</strong></h2>\n          <p>{{produto.productDescription}}</p>\n        </ion-card-content>\n        \n        <ion-row>\n          <ion-col col-4>\n            <button ion-button color="purple" clear small icon-left (click)="like(post)">\n                <ion-icon name=\'thumbs-up\'></ion-icon>\n                post.likes Likes\n              </button>\n          </ion-col>\n          <ion-col col-5>\n            <button ion-button no-padding color="purple" clear small icon-left (click)="comment(post)">\n                <ion-icon name=\'text\'></ion-icon>\n                Conversar!\n              </button>\n          </ion-col>\n          <ion-col col-3 align-self-center text-center *ngIf="userConfirm">\n              <button ion-button color="dark" class="button-edit-posts" (click)="goToAddWork()">\n                  <ion-icon name="md-brush"></ion-icon>\n              </button>\n          </ion-col>\n        </ion-row>\n      </ion-card>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\imagine-art\src\pages\profile\profile.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* ActionSheetController */],
        __WEBPACK_IMPORTED_MODULE_0__providers_util_camera_provider__["a" /* CameraProvider */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_5__providers_localstorage__["a" /* Localstorage */]])
], ProfilePage);

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 577:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(157);
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 578:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FIREBASE_CREDENTIALS; });
var FIREBASE_CREDENTIALS = {
    apiKey: "AIzaSyBV0Ok42A28Bk-Una68NNbtvZvVIfMaYzg",
    authDomain: "imagine-art.firebaseapp.com",
    databaseURL: "https://imagine-art.firebaseio.com",
    projectId: "imagine-art",
    storageBucket: "",
    messagingSenderId: "652379659523"
};
//# sourceMappingURL=firebase.credenciais.js.map

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CameraProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__ = __webpack_require__(210);
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

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddWorkPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_util_camera_provider__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile_profile__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_localstorage__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch__ = __webpack_require__(52);
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








var AddWorkPage = (function () {
    function AddWorkPage(navCtrl, actionsheetCtrl, cameraProvider, platform, loadingCtrl, navParams, http, localstorage) {
        this.navCtrl = navCtrl;
        this.actionsheetCtrl = actionsheetCtrl;
        this.cameraProvider = cameraProvider;
        this.platform = platform;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.http = http;
        this.localstorage = localstorage;
        this.product = {};
        this.placeholder = 'assets/img/avatar/girl-avatar.png';
        this.posts = [
            {
                postImageUrl: 'assets/img/background/background-2.jpg',
                title: 'Título do Produto',
                text: "I believe in being strong when everything seems to be going wrong.\n             I believe that happy girls are the prettiest girls.\n             I believe that tomorrow is another day and I believe in miracles.",
                date: 'November 5, 2016',
                likes: 12,
                comments: 4
            },
        ];
        this.localstorage = localstorage;
    }
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
    AddWorkPage.prototype.addProduto = function (product) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.localstorage.getUser('ts').then(function (dados) {
            var res = dados;
            var data = JSON.stringify({
                productTitle: product.title,
                productorID: res._id,
                productorName: res.name,
                productCategory: product.categoria,
                productDescription: product.description,
                productImage: 'goo.gl/awyHW5'
            });
            new Promise(function (resolve, reject) {
                _this.http.post('https://imagine-art.herokuapp.com/product/newproduct/', data, options)
                    .toPromise()
                    .then(function (response) {
                    if (response.json().code === 200) {
                        // IMPORTAR PAGINA PARA IR PARA O PROFILE PAGE AQUI
                        console.log(response.json().data);
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__profile_profile__["a" /* ProfilePage */]);
                    }
                    console.log(response.json());
                    product = {};
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
            console.log("Error occurred :", err);
        });
    };
    return AddWorkPage;
}());
AddWorkPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'page-add-work',template:/*ion-inline-start:"C:\imagine-art\src\pages\add-work\add-work.html"*/'<ion-header>\n    \n  <ion-navbar>\n    <ion-title>Adicionando sua arte...</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding class="background">\n  <div>\n    <div id="posts">\n      <ion-card *ngFor="let post of posts">\n        <img [src]="chosenPicture || placeholder" onerror="post.postImageUrl">\n        <!--<ion-card-content>\n          <h2 class="padding-title"><strong>{{post.title}}</strong></h2>\n          <p>{{post.text}}</p>\n        </ion-card-content>-->\n      </ion-card>\n\n        <button ion-button color="dark" class="button-edit-posts" (click)="changePicture()">\n            <ion-icon name="md-brush"></ion-icon>\n        </button>\n\n\n        <ion-item>\n          <ion-label>Título:</ion-label>\n            <ion-input type="text" [(ngModel)]=\'product.title\'></ion-input>\n          </ion-item>\n\n      <ion-item>\n        <ion-label>Categoria:</ion-label>\n        <ion-select  [(ngModel)]="product.categoria" interface="popover">\n            <ion-option value="Bordado" checked="true">Bordado</ion-option>\n            <ion-option value="Feltro">Feltro</ion-option>\n            <ion-option value="Book Pop-Up">Book Pop-Up</ion-option>\n            <ion-option value="Scrapbook">Scrapbook</ion-option>\n            <ion-option value="Biscuit">Biscuit</ion-option>\n            <ion-option value="Patchwork">Patchwork</ion-option>\n            <ion-option value="Pinturas">Pinturas</ion-option>\n            <ion-option value="Reciclagem">Reciclagem</ion-option>\n            <ion-option value="Corte e Costura">Corte e Costura</ion-option>\n            <ion-option value="Decoupage">Decoupage</ion-option>\n            <ion-option value="Madeira">Madeira</ion-option>\n          </ion-select>\n      </ion-item>\n\n          <ion-item>  \n            <ion-label>Descrição:</ion-label>\n              <ion-textarea type="text" [(ngModel)]=\'product.description\' autosize></ion-textarea>\n          </ion-item>           \n\n  \n          <button ion-button (click)="addProduto(product)" class="pronto-button center">PRONTO</button>\n    \n\n    </div>\n  </div>\n</ion-content>'/*ion-inline-end:"C:\imagine-art\src\pages\add-work\add-work.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* ActionSheetController */],
        __WEBPACK_IMPORTED_MODULE_0__providers_util_camera_provider__["a" /* CameraProvider */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_5__providers_localstorage__["a" /* Localstorage */]])
], AddWorkPage);

//# sourceMappingURL=add-work.js.map

/***/ })

},[416]);
//# sourceMappingURL=main.js.map