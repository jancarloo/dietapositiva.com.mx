webpackJsonp([30],{

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageModule", function() { return AboutPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about__ = __webpack_require__(337);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AboutPageModule = (function () {
    function AboutPageModule() {
    }
    AboutPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__about__["a" /* AboutPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__about__["a" /* AboutPage */])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__about__["a" /* AboutPage */]
            ]
        })
    ], AboutPageModule);
    return AboutPageModule;
}());

//# sourceMappingURL=about.module.js.map

/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
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


var AboutPage = (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/Users/juanmartinez/ionic/DietaPositiva/src/pages/about/about.html"*/'<ion-header>\n    <ion-navbar color="primary">\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>\n            <span ion-text>Acerca de Dieta Positiva</span>\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n	<div class="about-header profiles-bg" padding>\n			<img src="assets/img/foodIonic-ico220.png">\n	</div>\n\n	<ion-grid no-padding fixed>\n		<ion-row no-padding>\n			<ion-col>\n				<div padding class="about-info">\n\n						<h4 ion-text color="dark">Dieta Positiva</h4>\n\n						<p>\n							Dieta Positiva es una aplicación que te ayudará a crear una dieta dirigida estrictamente a tus necesidades y objetivos, sustentada y realizada por nutriólogos especialistas en el control de peso.</p>\n\n						<p>\n 							No pierdas más el tiempo con dietas sin supervisión de un nutriólogo profesional.</p>\n\n						<p>\n 							Consigue tu objetivo personal sin gastar tanto dinero y desde la palma de tu mano.</p>\n\n						<p>\n							Con App Dieta Positiva tienes la posibilidad de reforzar tu dieta hecha por tu nutriólogo de confianza, o te mostramos un directorio para que elijas y conozcas a tu nuevo especialista en nutrición.</p>\n\n						<p>\n							Mantén comunicación constante con tu nutriólogo para modificar tu dieta si es necesario. </p>\n\n						<p>\n 							Es una aplicación interactiva que mantendrá tu motivación y compromiso para  lograr tu objetivo en un tiempo específico. \n							Comparte tu objetivo diariamente en Facebook y Twitter y mantén contacto con nuestros miles de usuarios, y al mismo tiempo conviértete en un ejemplo para tus amigos, y motívelos a comenzar su dieta. </p>\n\n						<p>\n 							<strong>\n							¡Qué esperas más! Usa la aplicación y comienza a cambiar positivamente tu cuerpo.\n							</strong>\n						</p>\n\n				</div>\n			</ion-col>\n		</ion-row>\n	</ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"/Users/juanmartinez/ionic/DietaPositiva/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ })

});
//# sourceMappingURL=30.js.map