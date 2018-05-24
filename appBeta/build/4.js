webpackJsonp([4],{

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalkthroughPageModule", function() { return WalkthroughPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__walkthrough__ = __webpack_require__(365);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var WalkthroughPageModule = (function () {
    function WalkthroughPageModule() {
    }
    WalkthroughPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__walkthrough__["a" /* WalkthroughPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__walkthrough__["a" /* WalkthroughPage */])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__walkthrough__["a" /* WalkthroughPage */]
            ]
        })
    ], WalkthroughPageModule);
    return WalkthroughPageModule;
}());

//# sourceMappingURL=walkthrough.module.js.map

/***/ }),

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WalkthroughPage; });
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


var WalkthroughPage = (function () {
    function WalkthroughPage(navCtrl, menu) {
        this.navCtrl = navCtrl;
        this.menu = menu;
        this.showSkip = true;
        this.dir = 'ltr';
        this.slideList = [
            {
                title: "Dieta <strong>Positiva</strong>",
                description: "Dieta Positiva es una aplicación que te ayudará a crear una dieta dirigida estrictamente a tus necesidades y objetivos, sustentada y realizada por nutriólogos especialistas en el control de peso.",
                image: "assets/img/welcome/1.png",
            },
            {
                title: "Deja las excusas",
                description: " No pierdas más el tiempo con dietas sin supervisión de un nutriólogo profesional.",
                image: "assets/img/welcome/2.png",
            },
            {
                title: " Consigue tu objetivo personal sin gastar tanto dinero y desde la palma de tu mano.",
                description: "Con App Dieta Positiva tienes la posibilidad de reforzar tu dieta hecha por tu nutriólogo de confianza, o te mostramos un directorio para que elijas y conozcas a tu nuevo especialista en nutrición.",
                image: "assets/img/welcome/3.png",
            },
            {
                title: "Mantén comunicación constante con tu nutriólogo para modificar tu dieta si es necesario.",
                description: " Es una aplicación interactiva que mantendrá tu motivación y compromiso para  lograr tu objetivo en un tiempo específico. ",
                image: "assets/img/welcome/5.png",
            },
            {
                title: "Dieta <strong>Positiva</strong>",
                description: "Comparte tu objetivo diariamente en Facebook y Twitter y mantén contacto con nuestros miles de usuarios, y al mismo tiempo conviértete en un ejemplo para tus amigos, y motívelos a comenzar su dieta.",
                image: "assets/img/welcome/7.png",
            }
        ];
        this.menu.swipeEnable(false);
        this.menu.enable(false);
    }
    WalkthroughPage.prototype.onSlideNext = function () {
        this.slides.slideNext(300);
    };
    WalkthroughPage.prototype.onSlidePrev = function () {
        this.slides.slidePrev(300);
    };
    WalkthroughPage.prototype.onLastSlide = function () {
        this.slides.slideTo(this.slideList.length, 300);
    };
    WalkthroughPage.prototype.openHomePage = function () {
        this.navCtrl.setRoot('page-home');
    };
    WalkthroughPage.prototype.openAuthPage = function () {
        this.navCtrl.setRoot('page-auth');
    };
    WalkthroughPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WalkthroughPage');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Slides */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Slides */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Slides */]) === "function" && _a || Object)
    ], WalkthroughPage.prototype, "slides", void 0);
    WalkthroughPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-walkthrough',template:/*ion-inline-start:"/Users/juanmartinez/ionic/DietaPositiva/src/pages/walkthrough/walkthrough.html"*/'<ion-content padding class="animated fadeIn profiles-bg">\n  <video webkit-playsinline autoplay loop muted class="video-bg">\n    <source src="assets/video/beach-waves-loop.mp4" type=\'video/mp4; codecs="h.264"\'>\n    <source src="assets/video/beach-waves-loop.webm" type="video/webm">\n  </video>\n	<ion-grid no-padding fixed>\n		<ion-row no-padding>\n			<ion-col>\n			  <ion-slides pager="true" dir="{{dir}}">\n			    <ion-slide *ngFor="let slide of slideList">\n			      <ion-toolbar fixed>\n			        <ion-buttons end>\n			          <button ion-button color="light" (click)="onLastSlide()">Saltar</button>\n			        </ion-buttons>\n			      </ion-toolbar>\n			      <img [src]="slide.image" class="slide-image">\n			      <h3 class="slide-title text-white" [innerHTML]="slide.title"></h3>\n			      <p [innerHTML]="slide.description" class="text-white"></p>\n						<div padding>\n				      <button ion-button round block color="secondary" margin-top icon-end class="boton" (click)="onSlideNext()">\n				      	Siguiente\n				      	<ion-icon name="arrow-round-forward" color="light"></ion-icon>\n				    	</button>\n			    	</div>\n			    </ion-slide>\n			    <ion-slide>\n			      <ion-toolbar>\n			      </ion-toolbar>\n			      <img src="assets/img/foodIonic-ico.png" class="slide-image" margin-top>\n			      <h2 class="slide-title text-white">¿Listo para empezar?</h2>\n			      <div padding>\n			        <button ion-button block round color="secondary" margin-top (click)="openAuthPage()">\n			          Entrar / Registrarse\n			        </button>\n			        <button ion-button block round color="dark" margin-top (click)="openHomePage()" disabled="disabled" >\n			          Sin Regsitro\n			        </button>\n			      </div>\n			    </ion-slide>\n			  </ion-slides>\n			</ion-col>\n		</ion-row>\n	</ion-grid>\n</ion-content>'/*ion-inline-end:"/Users/juanmartinez/ionic/DietaPositiva/src/pages/walkthrough/walkthrough.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */]) === "function" && _c || Object])
    ], WalkthroughPage);
    return WalkthroughPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=walkthrough.js.map

/***/ })

});
//# sourceMappingURL=4.js.map