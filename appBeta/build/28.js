webpackJsonp([28],{

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPageModule", function() { return CartPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cart__ = __webpack_require__(338);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CartPageModule = (function () {
    function CartPageModule() {
    }
    CartPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cart__["a" /* CartPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cart__["a" /* CartPage */])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__cart__["a" /* CartPage */]
            ]
        })
    ], CartPageModule);
    return CartPageModule;
}());

//# sourceMappingURL=cart.module.js.map

/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_cart_service_mock__ = __webpack_require__(204);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CartPage = (function () {
    function CartPage(navCtrl, navParams, cartService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.cartService = cartService;
        this.orders = [];
        this.totalVal = 0;
        this.getOrders();
    }
    CartPage.prototype.removeOrder = function (order) {
        var _this = this;
        this.cartService.removefromCart(order)
            .then(function () {
            _this.getOrders();
        })
            .catch(function (error) { return alert(JSON.stringify(error)); });
    };
    CartPage.prototype.getOrders = function () {
        var _this = this;
        this.cartService.getOrders().then(function (orders) {
            _this.orders = orders;
            _this.totalVal = 0;
            _this.orders.forEach(function (val, i) {
                _this.totalVal = _this.totalVal + (val.order.price * val.qtd);
            });
        });
    };
    // minus adult when click minus button
    CartPage.prototype.minusQtd = function (order) {
        var _this = this;
        this.cartService.editQtdOrder(order, 'minus')
            .then(function () {
            _this.getOrders();
        })
            .catch(function (error) { return alert(JSON.stringify(error)); });
    };
    // plus adult when click plus button
    CartPage.prototype.plusQtd = function (order) {
        var _this = this;
        this.cartService.editQtdOrder(order, 'plus')
            .then(function () {
            _this.getOrders();
        })
            .catch(function (error) { return alert(JSON.stringify(error)); });
    };
    CartPage.prototype.openCheckout = function () {
        this.navCtrl.push('page-checkout', { orders: this.orders });
    };
    CartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cart',template:/*ion-inline-start:"/Users/juanmartinez/ionic/DietaPositiva/src/pages/cart/cart.html"*/'<ion-header>\n    <ion-navbar color="primary">\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>\n        	<span ion-text>Cart</span>\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content class="lightest-bg">\n\n	<ion-grid no-padding fixed>\n		<ion-row no-padding>\n			<ion-col>\n				<ion-card *ngIf="!orders.length" class="primary-bg" margin-top>\n					<ion-card-content>\n						<p text-center class="text-white">You still haven\'t any item.</p>\n					</ion-card-content>\n				</ion-card>\n\n				<ion-list no-margin>\n					<ion-item-sliding *ngFor="let order of orders">\n							<div ion-item>\n								<!-- (click)="itemTapped(favorite)" -->\n									<ion-thumbnail item-left>\n											<img src="{{order.order.picture}}"/>\n									</ion-thumbnail>\n										<h2 ion-text color="dark" class="fw700">{{order.order.name}}</h2>\n										<ion-grid class="filters" no-padding>\n											<ion-row>\n												<ion-col text-center col-2>\n													<ion-icon name="remove-circle" class="text-22x" tappable (click)="minusQtd(order)" [hidden]="order.qtd < 2"\n																		color="secondary"></ion-icon>\n												</ion-col>\n												<ion-col text-center col-3>\n													<h2 ion-text color="primary" class="text-18x">\n														<span>{{ order.qtd }}</span>\n													</h2>\n												</ion-col>\n												<ion-col text-center col-2>\n													<ion-icon name="add-circle" class="text-22x" tappable (click)="plusQtd(order)" color="secondary"></ion-icon>\n												</ion-col>\n											</ion-row>\n										</ion-grid>\n									<div item-right>\n										<ion-badge>{{ order.order.price * order.qtd | currency }}</ion-badge>\n									</div>\n							</div>\n							<ion-item-options>\n									<button ion-button color="danger" (click)="removeOrder(order)">Delete</button>\n							</ion-item-options>\n					</ion-item-sliding>\n				</ion-list>\n\n				<ion-card class="primary-bg" *ngIf="orders.length">\n					<ion-card-content>\n						<p ion-text color="light">Delivery Tax (30 - 60min): <span class="fw700">FREE</span></p>\n\n						<hr>\n\n						<p ion-text color="light">Total Order Value</p>\n						<h2 ion-text class="text-white fw700">{{ totalVal | currency }}</h2>\n					</ion-card-content>\n				</ion-card>\n			</ion-col>\n		</ion-row>\n	</ion-grid>\n</ion-content>\n\n<ion-footer *ngIf="orders.length" class="no-padding">\n	<button ion-button full large color="dark" no-margin icon-right (click)="openCheckout()">\n		Checkout\n		<ion-icon name="card"></ion-icon>\n	</button>\n</ion-footer>\n'/*ion-inline-end:"/Users/juanmartinez/ionic/DietaPositiva/src/pages/cart/cart.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_cart_service_mock__["a" /* CartService */]])
    ], CartPage);
    return CartPage;
}());

//# sourceMappingURL=cart.js.map

/***/ })

});
//# sourceMappingURL=28.js.map