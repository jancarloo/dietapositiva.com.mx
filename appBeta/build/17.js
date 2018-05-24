webpackJsonp([17],{

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Login5PageModule", function() { return Login5PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login5__ = __webpack_require__(349);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Login5PageModule = (function () {
    function Login5PageModule() {
    }
    Login5PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login5__["a" /* Login5Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login5__["a" /* Login5Page */]),
            ],
        })
    ], Login5PageModule);
    return Login5PageModule;
}());

//# sourceMappingURL=login5.module.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Login5Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Login5Page = (function () {
    function Login5Page(_fb, nav, forgotCtrl, menu, toastCtrl) {
        this._fb = _fb;
        this.nav = nav;
        this.forgotCtrl = forgotCtrl;
        this.menu = menu;
        this.toastCtrl = toastCtrl;
        this.menu.swipeEnable(false);
    }
    // ionViewDidLoad() {
    //   console.log('ionViewDidLoad Login1Page');
    // }
    Login5Page.prototype.ngOnInit = function () {
        this.onLoginForm = this._fb.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required
                ])],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required
                ])]
        });
    };
    Login5Page.prototype.forgotPass = function () {
        var _this = this;
        var forgot = this.forgotCtrl.create({
            title: 'Forgot Password?',
            message: "Enter you email address to send a reset link password.",
            inputs: [
                {
                    name: 'email',
                    placeholder: 'Email',
                    type: 'email'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Send',
                    handler: function (data) {
                        console.log('Send clicked');
                        var toast = _this.toastCtrl.create({
                            message: 'Email was sended successfully',
                            duration: 3000,
                            position: 'top',
                            closeButtonText: 'OK',
                            showCloseButton: true
                        });
                        toast.present();
                    }
                }
            ]
        });
        forgot.present();
    };
    Login5Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login5',template:/*ion-inline-start:"/Users/juanmartinez/ionic/DietaPositiva/src/pages/extras/login5/login5.html"*/'<ion-header class="animated fadeInDown">\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n    	Login 5 (Video Bg)\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n<!-- -->\n<ion-content padding class="animated fadeIn profiles-bg">\n  <video webkit-playsinline autoplay loop muted class="video-bg">\n    <source src="assets/video/beach-waves-loop.mp4" type=\'video/mp4; codecs="h.264"\'>\n    <source src="assets/video/beach-waves-loop.webm" type="video/webm">\n  </video>\n\n  <div class="auth-content">\n\n    <!-- Logo -->\n    <div padding-horizontal margin-bottom text-center class="animated fadeInDown">\n			<div class="logo">\n				<img src="assets/img/foodIonic-ico.png">\n			</div>\n			<h2 ion-text class="text-secondary" no-margin>\n				<strong>Food</strong>Ionic\n			</h2>\n    </div>\n\n    <!-- Login form -->\n    <form [formGroup]="onLoginForm" class="list-form">\n      <ion-item class="animated fadeInUp">\n        <ion-label floating>\n          <ion-icon name="mail" item-start class="text-white"></ion-icon>\n          Email\n        </ion-label>\n        <ion-input type="email" formControlName="email"></ion-input>\n      </ion-item>\n      <p ion-text color="danger" class="text-1x has-error" *ngIf="onLoginForm.get(\'email\').touched && onLoginForm.get(\'email\').hasError(\'required\')">This field is required</p>\n\n      <ion-item class="animated fadeInUp">\n        <ion-label floating>\n          <ion-icon name="lock" item-start class="text-white"></ion-icon>\n          Password\n        </ion-label>\n        <ion-input type="password" formControlName="password"></ion-input>\n      </ion-item>\n      <p ion-text color="danger" class="text-1x has-error" *ngIf="onLoginForm.get(\'password\').touched && onLoginForm.get(\'password\').hasError(\'required\')">This field is required</p>\n    </form>\n\n    <p text-right ion-text color="light" tappable (click)="forgotPass()"><strong>Forgot Password?</strong></p>\n\n    <div>\n      <button ion-button icon-start block color="dark" tappable [disabled]="!onLoginForm.valid">\n        <ion-icon name="log-in"></ion-icon>\n        SIGN IN\n      </button>\n\n      <p text-center ion-text color="light">Or Sign in with:</p>\n\n      <ion-grid class="btn-group">\n        <ion-row>\n          <button ion-button icon-only block class="btn-facebook col col-4">\n            <ion-icon name="logo-facebook"></ion-icon>\n          </button>\n          <button ion-button icon-only block class="btn-twitter col col-4">\n            <ion-icon name="logo-twitter"></ion-icon>\n          </button>\n          <button ion-button icon-only block class="btn-gplus col col-4">\n            <ion-icon name="logo-googleplus"></ion-icon>\n          </button>\n        </ion-row>\n      </ion-grid>\n\n    </div>\n\n\n    <!-- Other links -->\n    <div text-center margin-top>\n      <span ion-text color="light" tappable>New here? <strong>Sign up</strong></span>\n    </div>\n\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/juanmartinez/ionic/DietaPositiva/src/pages/extras/login5/login5.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["q" /* ToastController */]])
    ], Login5Page);
    return Login5Page;
}());

//# sourceMappingURL=login5.js.map

/***/ })

});
//# sourceMappingURL=17.js.map