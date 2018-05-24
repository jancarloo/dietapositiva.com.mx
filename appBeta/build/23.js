webpackJsonp([23],{

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomPagesPageModule", function() { return CustomPagesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__custom_pages__ = __webpack_require__(342);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CustomPagesPageModule = (function () {
    function CustomPagesPageModule() {
    }
    CustomPagesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__custom_pages__["a" /* CustomPagesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__custom_pages__["a" /* CustomPagesPage */]),
            ],
        })
    ], CustomPagesPageModule);
    return CustomPagesPageModule;
}());

//# sourceMappingURL=custom-pages.module.js.map

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomPagesPage; });
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


var CustomPagesPage = (function () {
    function CustomPagesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.cpagesItems = [
            { title: 'Login', component: "page-login-list", icon: 'log-in' },
            { title: 'Register', component: 'page-register', icon: 'document' },
            { title: 'Order Timeline', component: 'page-timeline', icon: 'clock' }
        ];
    }
    CustomPagesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CustomPagesPage');
    };
    CustomPagesPage.prototype.openPage = function (page) {
        console.log(page);
        this.navCtrl.push(page);
    };
    CustomPagesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-custom-pages',template:/*ion-inline-start:"/Users/juanmartinez/ionic/DietaPositiva/src/pages/extras/custom-pages/custom-pages.html"*/'<ion-header class="animated fadeInDown">\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n    	Extra Pages\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-list class="animated fadeInLeft">\n    <button ion-item *ngFor="let page of cpagesItems" (click)="openPage(page.component)">\n      <ion-icon item-left class="text-primary" [name]="page.icon"></ion-icon>\n      <span ion-text color="primary">{{ page.title }}</span>\n    </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/juanmartinez/ionic/DietaPositiva/src/pages/extras/custom-pages/custom-pages.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], CustomPagesPage);
    return CustomPagesPage;
}());

//# sourceMappingURL=custom-pages.js.map

/***/ })

});
//# sourceMappingURL=23.js.map