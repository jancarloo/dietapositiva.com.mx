webpackJsonp([18],{

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Login4PageModule", function() { return Login4PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login4__ = __webpack_require__(348);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Login4PageModule = (function () {
    function Login4PageModule() {
    }
    Login4PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login4__["a" /* Login4Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login4__["a" /* Login4Page */]),
            ],
        })
    ], Login4PageModule);
    return Login4PageModule;
}());

//# sourceMappingURL=login4.module.js.map

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Login4Page; });
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



var Login4Page = (function () {
    function Login4Page(_fb, nav, forgotCtrl, menu, toastCtrl) {
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
    Login4Page.prototype.ngOnInit = function () {
        this.onLoginForm = this._fb.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required
                ])],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required
                ])]
        });
    };
    Login4Page.prototype.forgotPass = function () {
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
    Login4Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login4',template:/*ion-inline-start:"/Users/juanmartinez/ionic/DietaPositiva/src/pages/extras/login4/login4.html"*/'<ion-header class="animated fadeInDown">\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n    	Login 4\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n<!-- -->\n<ion-content padding class="animated fadeIn profiles-bg">\n  <div class="auth-content">\n\n    <!-- Logo -->\n    <div padding-horizontal margin-bottom text-center class="animated fadeInDown">\n			<div class="logo">\n				<img src="assets/img/foodIonic-ico.png">\n			</div>\n			<h2 ion-text class="text-secondary" no-margin>\n				<strong>Food</strong>Ionic\n			</h2>\n    </div>\n\n    <!-- Login form -->\n    <form [formGroup]="onLoginForm" class="list-form">\n\n      <ion-item class="animated fadeIn ringe">\n        <ion-input type="email" formControlName="email" placeholder="Email"></ion-input>\n      </ion-item>\n      <p ion-text class="text-1x has-error" *ngIf="onLoginForm.get(\'email\').touched && onLoginForm.get(\'email\').hasError(\'required\')">This field is required</p>\n\n      <ion-item class="animated fadeIn ringe">\n        <ion-input type="password" formControlName="password" placeholder="Password"></ion-input>\n      </ion-item>\n      <p ion-text color="danger" class="text-1x has-error" *ngIf="onLoginForm.get(\'password\').touched && onLoginForm.get(\'password\').hasError(\'required\')">This field is required</p>\n\n    </form>\n\n    <p text-right ion-text color="light" tappable (click)="forgotPass()"><strong>Forgot Password?</strong></p>\n\n    <div>\n\n      <button ion-button large icon-start block color="dark" tappable class="animated zoomIn" [disabled]="!onLoginForm.valid">\n        <ion-icon name="log-in"></ion-icon>\n        SIGN IN\n      </button>\n      <button ion-button large icon-start block color="secondary" class="animated zoomIn" tappable>\n        <ion-icon name="log-in"></ion-icon>\n        SIGN UP\n      </button>\n\n      <p text-center ion-text color="light">Or Sign in with:</p>\n\n      <ion-grid class="btn-group">\n        <ion-row>\n          <button ion-button icon-only block class="btn-facebook col col-4">\n            <ion-icon name="logo-facebook"></ion-icon>\n          </button>\n          <button ion-button icon-only block class="btn-twitter col col-4">\n            <ion-icon name="logo-twitter"></ion-icon>\n          </button>\n          <button ion-button icon-only block class="btn-gplus col col-4">\n            <ion-icon name="logo-googleplus"></ion-icon>\n          </button>\n        </ion-row>\n      </ion-grid>\n\n    </div>\n\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/juanmartinez/ionic/DietaPositiva/src/pages/extras/login4/login4.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["q" /* ToastController */]])
    ], Login4Page);
    return Login4Page;
}());

//# sourceMappingURL=login4.js.map

/***/ })

});
//# sourceMappingURL=18.js.map