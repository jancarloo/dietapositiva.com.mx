webpackJsonp([10],{

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAccountPageModule", function() { return MyAccountPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_account__ = __webpack_require__(356);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MyAccountPageModule = (function () {
    function MyAccountPageModule() {
    }
    MyAccountPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__my_account__["a" /* MyAccountPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__my_account__["a" /* MyAccountPage */])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__my_account__["a" /* MyAccountPage */]
            ]
        })
    ], MyAccountPageModule);
    return MyAccountPageModule;
}());

//# sourceMappingURL=my-account.module.js.map

/***/ }),

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyAccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MyAccountPage = (function () {
    function MyAccountPage(navCtrl, loadingCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.profiledata = true;
        var data = localStorage.getItem('userData');
        //var jmyData = JSON.parse(localStorage.getItem('jmyData'));
        if (data != undefined) {
            this.userData.username = data.username;
        }
        console.log(data); //data.username
        //console.log(jmyData); //data.username
    }
    // process send button
    MyAccountPage.prototype.sendData = function () {
        var _this = this;
        // send booking info
        var loader = this.loadingCtrl.create({
            content: "Please wait..."
        });
        // show message
        var toast = this.toastCtrl.create({
            showCloseButton: true,
            cssClass: 'profiles-bg',
            message: 'Your Data was Edited!',
            duration: 3000,
            position: 'bottom'
        });
        loader.present();
        setTimeout(function () {
            loader.dismiss();
            toast.present();
            // back to home page
            _this.navCtrl.setRoot('page-home');
        }, 3000);
    };
    MyAccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-my-account',template:/*ion-inline-start:"/Users/juanmartinez/ionic/DietaPositiva/src/pages/my-account/my-account.html"*/'<ion-header>\n    <ion-navbar color="primary">\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>\n            <span ion-text>Mi perfil</span>\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="profile light-bg">\n\n    <ion-card>\n      <ion-card-content class="profiles-bg">\n				<ion-grid no-padding fixed>\n					<ion-row no-padding>\n						<ion-col>\n							<img src="assets/img/avatar.jpeg">\n							<h2 class="fw500">João Firmino</h2>\n							<h3 ion-text color="light">Customer</h3>\n							<button ion-button icon-start block outline margin-top color="light">\n								<ion-icon name="photos"></ion-icon>\n								Edit / Insert Avatar\n							</button>\n						</ion-col>\n					</ion-row>\n				</ion-grid>\n      </ion-card-content>\n\n			<ion-grid no-padding fixed>\n				<ion-row no-padding>\n					<ion-col>\n						<div padding>\n							<ion-list>\n\n								<ion-item>\n									<ion-label color="dark" stacked>Nombre completo:</ion-label>\n									<ion-input type="text" placeholder="Ej: " value=""></ion-input>\n								</ion-item>\n\n								<ion-item>\n									<ion-label color="dark" stacked>Email:</ion-label>\n									<ion-input type="email" placeholder="Ex.: joe@doe.com" value="firminoata@gmail.com"></ion-input>\n								</ion-item>\n\n								<ion-item>\n									<ion-label color="dark" stacked>Address:</ion-label>\n									<ion-input type="text" placeholder="Ex.: Abey Road 5"></ion-input>\n								</ion-item>\n\n								<ion-item>\n									<ion-label color="dark">City</ion-label>\n									<ion-select>\n										<ion-option value="nes">New York</ion-option>\n										<ion-option value="n64">Los Angeles</ion-option>\n										<ion-option value="ps">London</ion-option>\n										<ion-option value="genesis">Paris</ion-option>\n										<ion-option value="saturn">São Paulo</ion-option>\n										<ion-option value="snes">Tokyo</ion-option>\n										<ion-option value="snes">New Delhi</ion-option>\n									</ion-select>\n								</ion-item>\n\n								<ion-item>\n									<ion-label color="dark">State</ion-label>\n									<ion-select>\n										<ion-option value="nes">NY</ion-option>\n										<ion-option value="n64">CA</ion-option>\n										<ion-option value="ps">Greater London</ion-option>\n										<ion-option value="genesis">Paris</ion-option>\n										<ion-option value="saturn">SP</ion-option>\n										<ion-option value="snes">Kantō</ion-option>\n										<ion-option value="snes">Delhi</ion-option>\n									</ion-select>\n								</ion-item>\n\n								<ion-list radio-group margin-top margin-bottom>\n									<ion-list-header no-margin no-padding>\n										<span ion-text color="dark" class="fw500">User Type</span>\n									</ion-list-header>\n\n									<ion-item>\n										<ion-label color="dark">Customer</ion-label>\n										<ion-radio checked="true" value="customer"></ion-radio>\n									</ion-item>\n\n									<ion-item>\n										<ion-label color="dark">Restaurant Owner</ion-label>\n										<ion-radio value="owner"></ion-radio>\n									</ion-item>\n\n									<ion-item>\n										<ion-label color="dark">Chef</ion-label>\n										<ion-radio value="chef"></ion-radio>\n									</ion-item>\n								</ion-list>\n\n								<ion-item>\n									<ion-label>Available to receive promo or app messages?</ion-label>\n								<ion-checkbox></ion-checkbox>\n							</ion-item>\n							</ion-list>\n						</div>\n\n						<button ion-button large full color="dark" (click)="sendData()">Edit</button>\n					</ion-col>\n				</ion-row>\n			</ion-grid>\n    </ion-card>\n\n    <div padding>\n      <p ion-text color="dark" no-margin>\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum odio placeat incidunt nesciunt atque ratione quisquam, fugit omnis maxime adipisci excepturi dignissimos aliquam asperiores itaque unde sequi? Minus, quia, dolore?\n      </p>\n    </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/juanmartinez/ionic/DietaPositiva/src/pages/my-account/my-account.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */]) === "function" && _c || Object])
    ], MyAccountPage);
    return MyAccountPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=my-account.js.map

/***/ })

});
//# sourceMappingURL=10.js.map