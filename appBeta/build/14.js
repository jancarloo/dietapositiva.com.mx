webpackJsonp([14],{

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoriteListPageModule", function() { return FavoriteListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__favorite_list__ = __webpack_require__(353);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// import { PipesModule } from '../../pipes/pipes.module';

var FavoriteListPageModule = (function () {
    function FavoriteListPageModule() {
    }
    FavoriteListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__favorite_list__["a" /* FavoriteListPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__favorite_list__["a" /* FavoriteListPage */])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__favorite_list__["a" /* FavoriteListPage */]
            ]
        })
    ], FavoriteListPageModule);
    return FavoriteListPageModule;
}());

//# sourceMappingURL=favorite-list.module.js.map

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoriteListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_restaurant_service_mock__ = __webpack_require__(203);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FavoriteListPage = (function () {
    function FavoriteListPage(navCtrl, service) {
        this.navCtrl = navCtrl;
        this.service = service;
        this.favorites = [];
        this.getFavorites();
        // console.log(this.favorites);
    }
    FavoriteListPage.prototype.itemTapped = function (favorite) {
        this.navCtrl.push('page-restaurant-detail', {
            'id': favorite.restaurant.id
        });
    };
    FavoriteListPage.prototype.deleteItem = function (favorite) {
        var _this = this;
        this.service.unfavorite(favorite)
            .then(function () {
            _this.getFavorites();
        })
            .catch(function (error) { return alert(JSON.stringify(error)); });
    };
    FavoriteListPage.prototype.getFavorites = function () {
        var _this = this;
        this.service.getFavorites()
            .then(function (data) { return _this.favorites = data; });
    };
    FavoriteListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-favorite-list',template:/*ion-inline-start:"/Users/juanmartinez/ionic/DietaPositiva/src/pages/favorite-list/favorite-list.html"*/'<ion-header>\n    <ion-navbar color="primary">\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>\n        	<span ion-text>Favorite Restaurants</span>\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="lightest-bg">\n\n	<ion-grid no-padding fixed>\n		<ion-row no-padding>\n			<ion-col>\n\n				<ion-card *ngIf="!favorites.length" class="primary-bg" margin-top>\n					<ion-card-content>\n						<p text-center class="text-white">You have no favorite restaurants.</p>\n					</ion-card-content>\n				</ion-card>\n\n				<ion-list>\n						<ion-item-sliding *ngFor="let favorite of favorites">\n								<button ion-item (click)="itemTapped(favorite)">\n										<ion-thumbnail item-left>\n												<img src="{{favorite.restaurant.thumbnail}}"/>\n										</ion-thumbnail>\n										<h2>{{favorite.restaurant.title}}</h2>\n										<p>{{favorite.restaurant.city}}, {{favorite.restaurant.state}} ∙ {{favorite.restaurant.price}}</p>\n								</button>\n								<ion-item-options>\n										<button ion-button color="danger" (click)="deleteItem(favorite)">Delete</button>\n								</ion-item-options>\n						</ion-item-sliding>\n				</ion-list>\n\n			</ion-col>\n		</ion-row>\n	</ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"/Users/juanmartinez/ionic/DietaPositiva/src/pages/favorite-list/favorite-list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_restaurant_service_mock__["a" /* RestaurantService */]])
    ], FavoriteListPage);
    return FavoriteListPage;
}());

//# sourceMappingURL=favorite-list.js.map

/***/ })

});
//# sourceMappingURL=14.js.map