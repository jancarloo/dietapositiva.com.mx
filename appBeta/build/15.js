webpackJsonp([15],{

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelinePageModule", function() { return TimelinePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__timeline__ = __webpack_require__(351);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TimelinePageModule = (function () {
    function TimelinePageModule() {
    }
    TimelinePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__timeline__["a" /* TimelinePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__timeline__["a" /* TimelinePage */])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__timeline__["a" /* TimelinePage */]
            ]
        })
    ], TimelinePageModule);
    return TimelinePageModule;
}());

//# sourceMappingURL=timeline.module.js.map

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimelinePage; });
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


var TimelinePage = (function () {
    function TimelinePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.items = [
            {
                title: 'Confirm payment',
                content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo culpa eum sed dolores officia delectus vitae nostrum eligendi quaerat dolore reprehenderit, dolorum quo animi laborum veritatis maiores vero totam magni.",
                icon: 'calendar',
                dir: 'direction-r',
                time: { subtitle: '1/16/2018', title: '21:30' }
            },
            {
                title: 'Delivery!',
                content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus cupiditate nam, itaque doloribus provident illum quis distinctio, sunt iste, odio earum ad. Repellat quaerat, enim nesciunt dolorem porro perspiciatis sequi? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum accusamus, minima, illum natus, perspiciatis quibusdam maxime nemo ex cupiditate fugit molestiae similique tempore totam necessitatibus nam, adipisci modi vero libero.",
                icon: 'calendar',
                dir: 'direction-l',
                time: { subtitle: 'January', title: '29' }
            },
            {
                title: 'Order Contact',
                content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit ipsa explicabo, voluptate amet, suscipit accusantium quaerat blanditiis, magnam rerum iste nobis excepturi, aliquam perferendis iure magni molestias cum sunt voluptates.",
                icon: 'calendar',
                dir: 'direction-r',
                time: { title: 'Short Text' }
            }
        ];
    }
    TimelinePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TimelinePage');
    };
    TimelinePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-timeline',template:/*ion-inline-start:"/Users/juanmartinez/ionic/DietaPositiva/src/pages/extras/timeline/timeline.html"*/'<ion-header>\n	<ion-navbar color="primary">\n    <button ion-button menuToggle>\n        <ion-icon name="menu" color="primary"></ion-icon>\n    </button>\n    <ion-title>\n      Order Timeline\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding class="lightest-bg">\n	<ul class="timeline">\n\n		<li *ngFor="let item of items">\n			<div [class]="item.dir">\n				<div class="flag-wrapper">\n					<span class="flag">{{item.title}}</span>\n					<span class="time-wrapper"><span class="time">{{item.time.subtitle}} {{item.time.title}}</span></span>\n				</div>\n				<div class="desc">{{item.content}}</div>\n			</div>\n		</li>\n\n	</ul>\n</ion-content>\n'/*ion-inline-end:"/Users/juanmartinez/ionic/DietaPositiva/src/pages/extras/timeline/timeline.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], TimelinePage);
    return TimelinePage;
}());

//# sourceMappingURL=timeline.js.map

/***/ })

});
//# sourceMappingURL=15.js.map