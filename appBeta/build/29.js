webpackJsonp([29],{

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthPageModule", function() { return AuthPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth__ = __webpack_require__(336);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AuthPageModule = (function () {
    function AuthPageModule() {
    }
    AuthPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__auth__["a" /* AuthPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__auth__["a" /* AuthPage */])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__auth__["a" /* AuthPage */]
            ]
        })
    ], AuthPageModule);
    return AuthPageModule;
}());

//# sourceMappingURL=auth.module.js.map

/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_jmyapis__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthPage = (function () {
    function AuthPage(_fb, nav, forgotCtrl, menu, toastCtrl, jmyApis, authService) {
        this._fb = _fb;
        this.nav = nav;
        this.forgotCtrl = forgotCtrl;
        this.menu = menu;
        this.toastCtrl = toastCtrl;
        this.jmyApis = jmyApis;
        this.authService = authService;
        this.auth = "login";
        this.userData = { "username": "",
            "password": "",
            "rpassword": "",
            "email": "",
            "reemail": "",
            "apis": {},
            "name": "",
            "body": {
                "apk_key": "",
                "permiso": "",
                "empresa": ""
            },
            "error": false,
        };
        this.fromRegistro = { "username": "",
            "nombre": "",
            "name": "",
            "email": "",
            "reemail": "",
            "password": "",
            "rpassword": "",
            "error": false,
            "errorMensaje": "",
            "body": {
                "apk_key": "",
                "permiso": "",
                "empresa": ""
            },
        };
        this.loginRegistrar = {
            "descripcion": "Registrate ",
            "email": "Usuario o Email",
            "recuperar": false,
            "botonLogin": false,
            "nuevoUsuario": true,
        };
        this.menu.swipeEnable(false);
        this.menu.enable(false);
        var data = JSON.parse(localStorage.getItem('tmpData'));
        if (data != undefined) {
            this.userData.username = data.username;
            this.fromRegistro.errorMensaje = "Usuario no valido";
        }
        console.log(data); //data.username
        this.userData.error = false;
        this.loginRegistrar = {
            "descripcion": " ",
            "email": "Usuario o Email",
            "recuperar": false,
            "botonLogin": true,
            "nuevoUsuario": true,
        };
    }
    AuthPage.prototype.randomIntFromInterval = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
    AuthPage.prototype.registro = function () {
        var _this = this;
        console.log(this.fromRegistro);
        if (this.fromRegistro.nombre != "" &&
            this.fromRegistro.email != "" &&
            this.fromRegistro.reemail != "" &&
            this.fromRegistro.password != "" &&
            this.fromRegistro.rpassword != "") {
            this.fromRegistro.username = this.fromRegistro.email.split("@", 1);
            var rand = this.randomIntFromInterval(10, 99);
            this.fromRegistro.username = this.fromRegistro.username + rand;
            // apk Key de registro inicial
            this.fromRegistro.body.apk_key = "938a6b38e5092f1ccaede78f57665fdc";
            // permiso inicial 
            this.fromRegistro.body.permiso = "1";
            // empresa inicial 
            this.fromRegistro.body.empresa = "67";
            this.fromRegistro.name = this.fromRegistro.nombre;
            this.fromRegistro.error = false;
            console.log(this.fromRegistro);
            this.authService.postData(this.fromRegistro, "signup").then(function (result) {
                _this.resposeData = result;
                console.log(_this.resposeData);
                _this.tmpBSK = _this.resposeData.userData;
                console.log(_this.tmpBSK);
                if (_this.tmpBSK === undefined) {
                    console.log("no se pudo registrar por falta de criterios");
                    _this.fromRegistro.error = true;
                    if (!_this.resposeData.ex.emain_check)
                        _this.fromRegistro.errorMensaje = "Correo Electronico no valido";
                    if (!_this.resposeData.ex.password_check)
                        _this.fromRegistro.errorMensaje = "Contraseña no valido devé contener mas de 6 caracteres";
                    if (!_this.resposeData.ex.username_check)
                        _this.fromRegistro.errorMensaje = "Usuario no valido";
                }
                else {
                    localStorage.setItem('tmpData', JSON.stringify({ "username": _this.fromRegistro.username }));
                    _this.userData.username = _this.fromRegistro.username;
                    _this.userData.password = _this.fromRegistro.password;
                    _this.login();
                }
            }, function (err) {
                _this.presentToast("Ocurrio un error de conexión, por favor verifica tu conexión a internet");
            });
        }
        else {
            this.userData.error = true;
        }
    };
    AuthPage.prototype.registrate = function () {
        this.loginRegistrar = {
            "descripcion": "Se parte de nuestra comunidad",
            "email": "Email",
            "recuperar": true,
            "botonLogin": false,
            "nuevoUsuario": false,
        };
    };
    AuthPage.prototype.registrateRegresar = function () {
        this.loginRegistrar = {
            "descripcion": " ",
            "email": "Usuario o Email",
            "recuperar": false,
            "botonLogin": true,
            "nuevoUsuario": true,
        };
        this.userData.error = false;
    };
    AuthPage.prototype.ngOnInit = function () {
        this.onLoginForm = this._fb.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required
                ])],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required
                ])]
        });
        this.onRegisterForm = this._fb.group({
            fullName: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required
                ])],
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required
                ])],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required
                ])]
        });
    };
    // go to register page
    // register() {
    //   this.nav.setRoot(RegisterPage);
    // }
    // login and go to home page
    AuthPage.prototype.login = function () {
        var _this = this;
        console.log(this.userData);
        if (this.userData.username && this.userData.password) {
            this.userData.apis = this.jmyApis.hostApisList;
            this.authService.postData(this.userData, "login").then(function (result) {
                _this.resposeData = result;
                console.log(_this.resposeData);
                console.log(_this.jmyApis.hostApisList);
                if (_this.resposeData.userData) {
                    localStorage.setItem('userData', JSON.stringify(_this.resposeData));
                    localStorage.setItem('jmyData', JSON.stringify(_this.resposeData.jmyapi));
                    localStorage.setItem('userDataSend', JSON.stringify(_this.userData));
                    _this.nav.setRoot('page-home');
                    _this.presentToast("Acceso correcto");
                }
                else {
                    _this.presentToast("El usuario o contraseña no es valido");
                }
            }, function (err) {
                _this.presentToast("Ocurrio un error de conexión, por favor verifica tu conexión a internet");
            });
        }
        else {
            this.presentToast("Se requiere de un usuario y contraseña");
        }
    };
    AuthPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 6000
        });
        toast.present();
    };
    AuthPage.prototype.forgotPass = function () {
        var _this = this;
        var forgot = this.forgotCtrl.create({
            title: '¿Olvidó su contraseña?',
            message: "Coloque su correo electrónico para enviarle el link re recuperación de contraseña.",
            inputs: [
                {
                    name: 'email',
                    placeholder: 'Email',
                    type: 'email'
                },
            ],
            buttons: [
                {
                    text: 'Cancelar',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Recuperar',
                    handler: function (data) {
                        console.log('Send clicked');
                        var toast = _this.toastCtrl.create({
                            message: 'Email was sended successfully',
                            duration: 3000,
                            position: 'top',
                            cssClass: 'dark-trans',
                            closeButtonText: 'OK',
                            showCloseButton: true
                        });
                        toast.present();
                    }
                }
            ]
        });
        forgot.present();
    };
    AuthPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-auth',template:/*ion-inline-start:"/Users/juanmartinez/ionic/DietaPositiva/src/pages/auth/auth.html"*/'\n<!-- -->\n<ion-content padding class="animated fadeIn profiles-bg">\n  <video webkit-playsinline autoplay loop muted class="video-bg">\n    <source src="assets/video/beach-waves-loop.mp4" type=\'video/mp4; codecs="h.264"\'>\n    <source src="assets/video/beach-waves-loop.webm" type="video/webm">\n  </video>\n\n  <div class="auth-content">\n\n    <!-- Logo -->\n    <div padding-horizontal margin-bottom text-center class="animated fadeInDown">\n			<div class="logo">\n				<img src="assets/img/foodIonic-ico.png">\n			</div>\n			<h2 ion-text class="text-secondary" no-margin>\n				Dieta <strong>Positiva</strong> \n			</h2>\n      <p *ngIf="!loginRegistrar.recuperar">\n        {{loginRegistrar.descripcion}}\n      </p>\n    </div>\n\n    <!-- Login form -->\n    <form [formGroup]="onLoginForm" class="list-form" *ngIf="!loginRegistrar.recuperar">\n\n\n\n      <ion-item class="animated fadeInUp" >\n        <ion-label floating>\n          <ion-icon name="mail" item-start class="text-white"></ion-icon>\n          {{loginRegistrar.email}}\n        </ion-label>\n        <ion-input type="email" formControlName="email" [(ngModel)]="userData.username" ></ion-input>\n      </ion-item>\n      <p ion-text color="danger" class="text-1x has-error" *ngIf="onLoginForm.get(\'email\').touched && onLoginForm.get(\'email\').hasError(\'required\')">El correo es necesario</p>\n\n\n      <ion-item class="animated fadeInUp">\n        <ion-label floating>\n          <ion-icon name="lock" item-start class="text-white"></ion-icon>\n          Contraseña\n        </ion-label>\n        <ion-input type="password" formControlName="password" [(ngModel)]="userData.password" ></ion-input>\n      </ion-item>\n      <p ion-text color="danger" class="text-1x has-error" *ngIf="onLoginForm.get(\'password\').touched && onLoginForm.get(\'password\').hasError(\'required\')">Es necesario que tenga una cotraseña de acceso </p>\n\n\n    </form>\n\n    <!-- Singup form -->\n    <form class="list-form" *ngIf="!!loginRegistrar.recuperar">\n\n\n\n      <p ion-text color="danger" class="text-1x has-error" *ngIf="!!fromRegistro.error">\n      {{fromRegistro.errorMensaje}} \n    </p>\n\n\n\n\n      <ion-item class="animated fadeInUp">\n        <ion-label floating>\n          <ion-icon name="contact" item-start class="text-white"></ion-icon>\n          Nombre completo\n        </ion-label>\n        <ion-input type="text" [(ngModel)]="fromRegistro.nombre" name="nombre"></ion-input>\n      </ion-item>\n\n      <ion-item class="animated fadeInUp">\n        <ion-label floating>\n          <ion-icon name="mail" item-start class="text-white"></ion-icon>\n          {{loginRegistrar.email}}\n        </ion-label>\n        <ion-input type="email" [(ngModel)]="fromRegistro.email" name="email"></ion-input>\n      </ion-item>\n\n      <ion-item class="animated fadeInUp">\n        <ion-label floating>\n          <ion-icon name="mail" item-start class="text-white"></ion-icon>\n          Repitir {{loginRegistrar.email}}\n        </ion-label>\n        <ion-input type="email" [(ngModel)]="fromRegistro.reemail" name="reemail"></ion-input>\n      </ion-item>\n\n      <ion-item class="animated fadeInUp">\n        <ion-label floating>\n          <ion-icon name="lock" item-start class="text-white"></ion-icon>\n          Contraseña\n        </ion-label>\n        <ion-input type="password" [(ngModel)]="fromRegistro.password" name="password"></ion-input>\n      </ion-item>\n\n      <ion-item class="animated fadeInUp" >\n        <ion-label floating>\n          <ion-icon name="lock" item-start class="text-white"></ion-icon>\n          Repita la contraseña\n        </ion-label>\n        <ion-input type="password" [(ngModel)]="fromRegistro.rpassword" name="rpassword"></ion-input>\n      </ion-item>\n    \n\n    </form>\n\n\n\n\n\n\n    <p text-right ion-text color="light" tappable *ngIf="!loginRegistrar.recuperar" (click)="forgotPass()"><strong>¿Olvidó su contraseña?</strong></p>\n\n    <div>\n      <button ion-button icon-start block color="dark" tappable  *ngIf="!loginRegistrar.recuperar" [disabled]="!onLoginForm.valid" (click)="login()">\n        <ion-icon name="log-in"></ion-icon>\n        Entrar\n      </button>\n\n      <button ion-button icon-start block color="dark" tappable *ngIf="!!loginRegistrar.recuperar" (click)="registro()"> \n        <ion-icon name="sing-up"></ion-icon>\n        Registrate\n      </button>\n\n      \n\n    </div>\n\n\n    <!-- Other links -->\n    <div text-center margin-top *ngIf="!loginRegistrar.recuperar"> \n      <span ion-text color="light" tappable>¿Eres nuevo? <strong (click)="registrate();">¡Registrate aquí!</strong></span>\n    </div>\n    <!-- Other links -->\n    <div text-center margin-top *ngIf="!!loginRegistrar.recuperar">\n      <span ion-text color="light" tappable><strong (click)="registrateRegresar();">Regresar</strong></span>\n    </div>\n\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/juanmartinez/ionic/DietaPositiva/src/pages/auth/auth.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* MenuController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* MenuController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["q" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["q" /* ToastController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__providers_jmyapis__["a" /* jmyapis */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_jmyapis__["a" /* jmyapis */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_3__providers_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_auth_service__["a" /* AuthService */]) === "function" && _g || Object])
    ], AuthPage);
    return AuthPage;
    var _a, _b, _c, _d, _e, _f, _g;
}());

//# sourceMappingURL=auth.js.map

/***/ })

});
//# sourceMappingURL=29.js.map