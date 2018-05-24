webpackJsonp([24],{

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DishListPageModule", function() { return DishListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dish_list__ = __webpack_require__(343);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DishListPageModule = (function () {
    function DishListPageModule() {
    }
    DishListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__dish_list__["a" /* DishListPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__dish_list__["a" /* DishListPage */])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__dish_list__["a" /* DishListPage */]
            ]
        })
    ], DishListPageModule);
    return DishListPageModule;
}());

//# sourceMappingURL=dish-list.module.js.map

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DishListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_dish_service_mock__ = __webpack_require__(205);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DishListPage = (function () {
    function DishListPage(navCtrl, dishService) {
        this.navCtrl = navCtrl;
        this.dishService = dishService;
        this.dishes = this.dishService.findAll();
    }
    DishListPage.prototype.openDishDetail = function (dish) {
        this.navCtrl.push('page-dish-detail', {
            'id': dish.id
        });
    };
    DishListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dish-list',template:/*ion-inline-start:"/Users/juanmartinez/ionic/DietaPositiva/src/pages/dish-list/dish-list.html"*/'<ion-header>\n	<ion-navbar color="primary">\n		<button ion-button menuToggle>\n			<ion-icon name="menu"></ion-icon>\n		</button>\n		<ion-title>\n			<span ion-text>Recetas</span>\n		</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content class="lightest-bg">\n\n	<ion-grid no-padding fixed>\n		<ion-row no-padding>\n			<ion-col>\n				<ion-list>\n\n					<ion-item *ngFor="let dish of dishes" tapplable (click)="openDishDetail(dish)">\n					<ion-thumbnail item-start>\n						<img src="{{dish.picture}}">\n					</ion-thumbnail>\n					<h2 ion-text color="dark" class="fw500">{{dish.name}}</h2>\n					<p ion-text color="primary" class="text-11x">{{ dish.ingredients }}</p>\n					<button ion-button clear class="green-bg text-white" item-end>{{ dish.price  }} Cal</button>\n					</ion-item>\n\n				</ion-list>\n			</ion-col>\n		</ion-row>\n	</ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"/Users/juanmartinez/ionic/DietaPositiva/src/pages/dish-list/dish-list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_dish_service_mock__["a" /* DishService */]])
    ], DishListPage);
    return DishListPage;
}());

//# sourceMappingURL=dish-list.js.map

/***/ })

});
//# sourceMappingURL=24.js.map