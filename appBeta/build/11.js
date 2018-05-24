webpackJsonp([11],{

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageListPageModule", function() { return MessageListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__message_list__ = __webpack_require__(355);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MessageListPageModule = (function () {
    function MessageListPageModule() {
    }
    MessageListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__message_list__["a" /* MessageListPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__message_list__["a" /* MessageListPage */])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__message_list__["a" /* MessageListPage */]
            ]
        })
    ], MessageListPageModule);
    return MessageListPageModule;
}());

//# sourceMappingURL=message-list.module.js.map

/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_message_service_mock__ = __webpack_require__(207);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MessageListPage = (function () {
    function MessageListPage(navCtrl, service) {
        this.navCtrl = navCtrl;
        this.service = service;
        this.messages = [];
        this.getMessages();
        // console.log(this.messages);
    }
    MessageListPage.prototype.itemTapped = function (message) {
        // console.log('itemTapped: ', message);
        this.navCtrl.push('page-message-detail', {
            'id': message.id
        });
    };
    MessageListPage.prototype.deleteItem = function (message) {
        this.service.delMessage(message);
    };
    MessageListPage.prototype.getMessages = function () {
        this.messages = this.service.getMessages();
    };
    MessageListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-message-list',template:/*ion-inline-start:"/Users/juanmartinez/ionic/DietaPositiva/src/pages/message-list/message-list.html"*/'<ion-header>\n    <ion-navbar color="primary">\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>\n        	<span ion-text> <ion-icon name="chatbubbles"> </ion-icon> Mensajes</span>\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="lightest-bg">\n\n	<ion-grid no-padding fixed>\n		<ion-row no-padding>\n			<ion-col>\n				<ion-card *ngIf="!messages.length" class="primary-bg" margin-top>\n					<ion-card-content>\n						<p text-center class="text-white">You have no messages yet.</p>\n					</ion-card-content>\n				</ion-card>\n\n				<ion-list>\n					<ion-item-sliding *ngFor="let message of messages">\n						<button ion-item (click)="itemTapped(message)" [ngClass]="{\'light-bg\': !message.read}">\n							<h2 [ngClass]="{\'fw700\': !message.read}">\n								<ion-icon name="mail" color="primary" *ngIf="!message.read"></ion-icon>\n								<ion-icon name="mail-open" color="primary" *ngIf="message.read"></ion-icon>\n								{{message.title}}\n							</h2>\n							<p>{{message.senderName}} ∙ {{message.date | date: \'MM/dd/yyyy\'}}</p>\n						</button>\n						<ion-item-options>\n							<button ion-button color="danger" (click)="deleteItem(message)">Delete</button>\n						</ion-item-options>\n					</ion-item-sliding>\n				</ion-list>\n			</ion-col>\n		</ion-row>\n	</ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"/Users/juanmartinez/ionic/DietaPositiva/src/pages/message-list/message-list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_message_service_mock__["a" /* MessageService */]])
    ], MessageListPage);
    return MessageListPage;
}());

//# sourceMappingURL=message-list.js.map

/***/ })

});
//# sourceMappingURL=11.js.map