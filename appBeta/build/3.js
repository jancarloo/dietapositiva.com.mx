webpackJsonp([3],{

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YourRestaurantPageModule", function() { return YourRestaurantPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__your_restaurant__ = __webpack_require__(366);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var YourRestaurantPageModule = (function () {
    function YourRestaurantPageModule() {
    }
    YourRestaurantPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__your_restaurant__["a" /* YourRestaurantPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__your_restaurant__["a" /* YourRestaurantPage */])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__your_restaurant__["a" /* YourRestaurantPage */]
            ]
        })
    ], YourRestaurantPageModule);
    return YourRestaurantPageModule;
}());

//# sourceMappingURL=your-restaurant.module.js.map

/***/ }),

/***/ 366:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YourRestaurantPage; });
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



var YourRestaurantPage = (function () {
    function YourRestaurantPage(_fb, navCtrl, loadingCtrl, toastCtrl) {
        this._fb = _fb;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
    }
    YourRestaurantPage.prototype.ngOnInit = function () {
        this.onYourRestaurantForm = this._fb.group({
            profiledata: [true, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required
                ])],
            restaurantTitle: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required
                ])],
            restaurantAddress: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required
                ])],
            restaurantType: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required
                ])]
        });
    };
    // process send button
    YourRestaurantPage.prototype.sendData = function () {
        var _this = this;
        // send booking info
        var loader = this.loadingCtrl.create({
            content: "Please wait..."
        });
        // show message
        var toast = this.toastCtrl.create({
            showCloseButton: true,
            cssClass: 'profiles-bg',
            message: 'Your restaurant was registered!',
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
    YourRestaurantPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'your-restaurant',template:/*ion-inline-start:"/Users/juanmartinez/ionic/DietaPositiva/src/pages/your-restaurant/your-restaurant.html"*/'<ion-header>\n    <ion-navbar  color="primary">\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>\n            <span ion-text>Your Restaurant</span>\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="your-restaurant lightest-bg">\n\n	<ion-grid no-padding fixed>\n		<ion-row no-padding>\n			<ion-col>\n				<ion-card class="primary-bg">\n					<ion-card-content>\n						<p class="text-white">Complete the form with your restaurant data and register it.</p>\n					</ion-card-content>\n				</ion-card>\n\n				<ion-card>\n					<ion-card-content>\n						<form [formGroup]="onYourRestaurantForm" class="list-form">\n							<ion-list margin-bottom>\n								<ion-item>\n									<ion-label>Complement with my account/profile data:</ion-label>\n									<ion-checkbox formControlName="profiledata"></ion-checkbox>\n								</ion-item>\n								<p ion-text color="danger" class="text-1x has-error" *ngIf="onYourRestaurantForm.get(\'profiledata\').touched && onYourRestaurantForm.get(\'profiledata\').hasError(\'required\')">This field is required</p>\n\n								<ion-item>\n									<ion-label color="primary" stacked>Restaurant title:</ion-label>\n									<ion-input type="text" placeholder="Type here..." formControlName="restaurantTitle"></ion-input>\n								</ion-item>\n								<p ion-text color="danger" class="text-1x has-error" *ngIf="onYourRestaurantForm.get(\'restaurantTitle\').touched && onYourRestaurantForm.get(\'restaurantTitle\').hasError(\'required\')">This field is required</p>\n\n								<ion-item>\n									<ion-label color="primary" stacked>Restaurant Address:</ion-label>\n									<ion-input type="text" placeholder="Type here..." formControlName="restaurantAddress"></ion-input>\n								</ion-item>\n								<p ion-text color="danger" class="text-1x has-error" *ngIf="onYourRestaurantForm.get(\'restaurantAddress\').touched && onYourRestaurantForm.get(\'restaurantAddress\').hasError(\'required\')">This field is required</p>\n\n								<ion-item>\n									<ion-label color="primary" stacked>Restaurant Type:</ion-label>\n									<ion-select formControlName="restaurantType">\n										<ion-option value="house">Pasta</ion-option>\n										<ion-option value="mansion">Pizza</ion-option>\n										<ion-option value="Apartment">Fast Food</ion-option>\n										<ion-option value="comroom">Street Food</ion-option>\n										<ion-option value="farm">Barbecue</ion-option>\n										<ion-option value="farm">Veggie</ion-option>\n									</ion-select>\n								</ion-item>\n\n\n							</ion-list>\n\n							<div padding-vertical>\n								<h5 ion-text color="dark" margin-bottom class="fw500">Add Images of Restaurant <span ion-text class="fw300">(Max. 5)</span></h5>\n								<button ion-button icon-only color="light">\n									<ion-icon name="photos" color="dark"></ion-icon>\n								</button>\n								<button ion-button icon-only color="light">\n									<ion-icon name="photos" color="dark"></ion-icon>\n								</button>\n								<button ion-button icon-only color="light">\n									<ion-icon name="photos" color="dark"></ion-icon>\n								</button>\n								<button ion-button icon-only color="light">\n									<ion-icon name="photos" color="dark"></ion-icon>\n								</button>\n								<button ion-button icon-only color="light">\n									<ion-icon name="photos" color="dark"></ion-icon>\n								</button>\n							</div>\n\n							<div padding-vertical>\n								<h5 ion-text color="dark" margin-bottom class="fw500">Add Dishes</h5>\n\n								<ion-list margin-bottom>\n									<ion-item>\n										<ion-label color="primary" stacked>Dish Name:</ion-label>\n										<ion-input type="text" placeholder="Type here..."></ion-input>\n									</ion-item>\n									<ion-item>\n										<ion-label color="primary" stacked>Dish Type:</ion-label>\n										<ion-select formControlName="restaurantType">\n											<ion-option value="house">Pasta</ion-option>\n											<ion-option value="mansion">Pizza</ion-option>\n											<ion-option value="Apartment">Fast Food</ion-option>\n											<ion-option value="comroom">Street Food</ion-option>\n											<ion-option value="farm">Barbecue</ion-option>\n											<ion-option value="farm">Veggie</ion-option>\n										</ion-select>\n									</ion-item>\n									<ion-item>\n										<ion-label color="primary" stacked>Dish Ingredients:</ion-label>\n										<ion-textarea rows="5" placeholder="Type here..."></ion-textarea>\n									</ion-item>\n									<ion-item>\n										<ion-label color="primary" stacked>Dish Price:</ion-label>\n										<ion-input type="text" placeholder="Type here..."></ion-input>\n									</ion-item>\n									<ion-item>\n										<h6 ion-text color="dark" margin-bottom class="fw500">Add Images of Dish <span ion-text class="fw300">(Max. 5)</span></h6>\n										<button ion-button icon-only color="light">\n											<ion-icon name="photos" color="dark"></ion-icon>\n										</button>\n										<button ion-button icon-only color="light">\n											<ion-icon name="photos" color="dark"></ion-icon>\n										</button>\n										<button ion-button icon-only color="light">\n											<ion-icon name="photos" color="dark"></ion-icon>\n										</button>\n										<button ion-button icon-only color="light">\n											<ion-icon name="photos" color="dark"></ion-icon>\n										</button>\n										<button ion-button icon-only color="light">\n											<ion-icon name="photos" color="dark"></ion-icon>\n										</button>\n									</ion-item>\n								</ion-list>\n							</div>\n\n							<button ion-button block color="dark" (click)="sendData()" [disabled]="!onYourRestaurantForm.valid">Register</button>\n						</form>\n					</ion-card-content>\n				</ion-card>\n\n			</ion-col>\n		</ion-row>\n	</ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"/Users/juanmartinez/ionic/DietaPositiva/src/pages/your-restaurant/your-restaurant.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["q" /* ToastController */]])
    ], YourRestaurantPage);
    return YourRestaurantPage;
}());

//# sourceMappingURL=your-restaurant.js.map

/***/ })

});
//# sourceMappingURL=3.js.map