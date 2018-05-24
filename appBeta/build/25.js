webpackJsonp([25],{

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DishDetailPageModule", function() { return DishDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dish_detail__ = __webpack_require__(341);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DishDetailPageModule = (function () {
    function DishDetailPageModule() {
    }
    DishDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__dish_detail__["a" /* DishDetailPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__dish_detail__["a" /* DishDetailPage */])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__dish_detail__["a" /* DishDetailPage */]
            ]
        })
    ], DishDetailPageModule);
    return DishDetailPageModule;
}());

//# sourceMappingURL=dish-detail.module.js.map

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DishDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_dish_service_mock__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_cart_service_mock__ = __webpack_require__(204);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DishDetailPage = (function () {
    function DishDetailPage(navCtrl, navParams, toastCtrl, dishService, cartService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.dishService = dishService;
        this.cartService = cartService;
        this.qtd = 1;
        this.param = this.navParams.get('id');
        this.dish = this.dishService.getItem(this.param) ? this.dishService.getItem(this.param) : this.dishService.findAll()[0];
    }
    // minus adult when click minus button
    DishDetailPage.prototype.minusQtd = function () {
        this.qtd--;
    };
    // plus adult when click plus button
    DishDetailPage.prototype.plusQtd = function () {
        this.qtd++;
    };
    DishDetailPage.prototype.addcart = function (dish, qtd) {
        var _this = this;
        this.cartService.addtoCart(dish, qtd).then(function (dish) {
            var toast = _this.toastCtrl.create({
                message: 'Dish added to Cart',
                cssClass: 'mytoast',
                duration: 2000
            });
            toast.present(toast);
        });
    };
    DishDetailPage.prototype.openCart = function () {
        this.navCtrl.push('page-cart');
    };
    DishDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dish-detail',template:/*ion-inline-start:"/Users/juanmartinez/ionic/DietaPositiva/src/pages/dish-detail/dish-detail.html"*/'<ion-header>\n    <ion-navbar color="primary">\n        <ion-title>\n            <span ion-text>{{dish.name}}</span>\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="dish lightest-bg">\n\n  <ion-card class="dish-card">\n\n    <ion-card-content class="profiles-bg">\n      <img [src]="dish.picture">\n			<div padding>\n	      <ion-grid class="filters" no-padding fixed>\n	        <ion-row margin-bottom>\n	          <ion-col text-center>\n	          	<h4 ion-text color="light">Calorías</h4>\n	            <h1 ion-text class="text-white fw700">{{ dish.price }}</h1>\n	            <hr margin-vertical>\n	          </ion-col>\n	        </ion-row>\n	        \n	        <ion-row>\n				<ion-col text-center>\n		      <!--<button ion-button color="secondary" icon-left tappable (click)="addcart(dish, qtd)">-->\n		      <button ion-button color="secondary" icon-left tappable >\n		      	<ion-icon name="heart"></ion-icon>\n		      		Agregar a favoritos\n		      </button>\n				</ion-col>\n	        </ion-row>\n	      </ion-grid>\n			</div>\n    </ion-card-content>\n\n  </ion-card>\n\n  <ion-card>\n    <ion-card-content>\n      <h2 ion-text color="primary" class="fw500">Ingredients</h2>\n      <p ion-text>{{dish.ingredients}}</p>\n			<hr>\n      <h2 ion-text color="primary" class="fw500">Description</h2>\n      <p ion-text>{{dish.description}}</p>\n    </ion-card-content>\n  </ion-card>\n\n  <br><br><br><br><br>\n\n  <ion-fab bottom right>\n    <button ion-fab round icon-only color="dark" (click)="openCart()">\n      <ion-icon name="cart" class="text-white"></ion-icon>\n    </button>\n  </ion-fab>\n\n</ion-content>\n'/*ion-inline-end:"/Users/juanmartinez/ionic/DietaPositiva/src/pages/dish-detail/dish-detail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__providers_dish_service_mock__["a" /* DishService */], __WEBPACK_IMPORTED_MODULE_3__providers_cart_service_mock__["a" /* CartService */]])
    ], DishDetailPage);
    return DishDetailPage;
}());

//# sourceMappingURL=dish-detail.js.map

/***/ })

});
//# sourceMappingURL=25.js.map