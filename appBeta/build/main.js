webpackJsonp([31],{

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return jmyapis; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_common__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var jmyapis = (function () {
    function jmyapis(http, authService, common, toastCtrl) {
        this.http = http;
        this.authService = authService;
        this.common = common;
        this.toastCtrl = toastCtrl;
        /* variables de session */
        this.uPD = {
            "user_id": "",
            "token": "",
            "api": "",
            "empresa": "",
            "head": {},
            "body": {},
            "fn": ""
        };
        this.json_head = {
            "nombre": ""
        };
        /* Colocar las API´s o Modulos disponibles en esta aplicación */
        this.hostApisList = {
            "938a6b38e5092f1ccaede78f57665fdc": {
                "nombre": "Modulo",
                "version": "1.0"
            },
            "826478886fbc555e3993205022e35fa8": {
                "nombre": "ClinicaPatologiaPage",
                "version": "1.0"
            },
            "e7e549ace5363b1d33c50874923af0d7": {
                "nombre": "ClinicaAlimentosPage",
                "version": "1.0"
            },
            "708a1d14ea2f2b9281e039fafa97866c": {
                "nombre": "ClinicaDoctoresPage",
                "version": "1.0"
            },
            "56f8341f38cf95ce4d972859ed961e08": {
                "nombre": "ClinicaSucursalesPage",
                "version": "1.0"
            }
        };
    }
    /* NO EDITAR A PARTIR DE AQUI */
    /* funciones para alta, baja y cambios de registros por apis, empresas y permisos */
    jmyapis.prototype.borrar = function (datos) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            datos.head.borrar = true;
            _this.resultado = _this.guardar(datos);
            if (_this.resultado != undefined) {
                resolve(_this.resultado);
            }
            else {
                reject({ error: 'no data user' });
            }
        });
    };
    jmyapis.prototype.guardar = function (datos) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var data = JSON.parse(localStorage.getItem('userData'));
            if (data != undefined) {
                _this.userDetails = data.userData;
                _this.uPD.user_id = _this.userDetails.user_id;
                _this.uPD.token = _this.userDetails.token;
                _this.uPD.head = datos.head;
                _this.uPD.body = datos.body;
                _this.uPD.api = datos.head.API;
                _this.uPD.fn = (datos.head.borrar) ? "borrar" : "guardar";
                _this.uPD.empresa = _this.empresaactual();
                _this.common.presentLoading();
                _this.authService.postData(_this.uPD, "apibd")
                    .then(function (result) {
                    _this.resultado = result;
                    console.log(_this.resultado);
                    resolve(_this.resultado);
                }, function (err) {
                    _this.resultado = err;
                    reject({ error: 'send', err: err });
                });
                _this.common.closeLoading();
            }
            else {
                reject({ error: 'no data user' });
            }
        });
    };
    jmyapis.prototype.ver = function (datos) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var data = JSON.parse(localStorage.getItem('userData'));
            if (data != undefined) {
                _this.userDetails = data.userData;
                _this.uPD.user_id = _this.userDetails.user_id;
                _this.uPD.token = _this.userDetails.token;
                _this.uPD.head = datos.head;
                _this.uPD.body = datos.body;
                _this.uPD.api = datos.head.API;
                _this.uPD.fn = "ver";
                _this.uPD.empresa = _this.empresaactual();
                //this.common.presentLoading();
                console.log(_this.uPD);
                _this.authService.postData(_this.uPD, "apibd")
                    .then(function (result) {
                    _this.resultado = result;
                    if (_this.resultado != undefined) {
                        if (_this.resultado.error == 'ninguno' && _this.resultado.ver.otKey != null) {
                            resolve(_this.resultado);
                        }
                        else {
                            _this.alerta("Error al conectar con el servidor Error:" + _this.resultado.error);
                        }
                    }
                    else {
                        reject({ error: 'no data user' });
                    }
                }, function (err) {
                    _this.resultado = err;
                    reject({ error: 'send', err: err });
                });
            }
            else {
                reject({ error: 'no data user' });
            }
        });
    };
    jmyapis.prototype.empresaactual = function () {
        var d = JSON.parse(localStorage.getItem('jmyData'));
        if (d != undefined)
            return d.primerempresa;
    };
    jmyapis.prototype.datosEmpresa = function (id) {
        var em = this.verempresas();
        if (em != undefined) {
            for (var i = 0; i < em.length; i++) {
                this.tm = em[i];
                if (this.tm.id_empresa == id)
                    return this.tm;
            }
        }
    };
    jmyapis.prototype.alerta = function (men) {
        var toast = this.toastCtrl.create({
            message: men,
            duration: 9000,
            position: 'top'
        });
        toast.present();
    };
    /* funciones para el menu */
    jmyapis.prototype.vermenu = function (idEmpresa) {
        var data = JSON.parse(localStorage.getItem('jmyData'));
        return (data.menu[idEmpresa] != undefined) ? data.menu[idEmpresa] : [];
    };
    jmyapis.prototype.verempresas = function () {
        var data = JSON.parse(localStorage.getItem('jmyData'));
        return (data != null) ? data.empresaDisp : [];
    };
    jmyapis.prototype.verempresasapis = function (idEmpresa) {
        var data = JSON.parse(localStorage.getItem('jmyData'));
        console.log(data);
        if (data != undefined && idEmpresa != undefined) {
            return (data.empresasApis[idEmpresa] != null) ? data.empresasApis[idEmpresa] : 0;
        }
    };
    jmyapis.prototype.empresaapi = function (idEmpresa) {
        if (idEmpresa != undefined) {
            var data = JSON.parse(localStorage.getItem('jmyData'));
            if (data != null) {
                this.cambiarempresa(idEmpresa);
                if (data.empresaApi[idEmpresa] != undefined) {
                    return data.empresaApi[idEmpresa].api;
                }
                else {
                    return null;
                }
            }
        }
        else {
            return [];
        }
    };
    jmyapis.prototype.cambiarempresa = function (idEmpresa) {
        var data = JSON.parse(localStorage.getItem('jmyData'));
        if (data != undefined) {
            data.primerempresa = idEmpresa;
            localStorage.removeItem("jmyData");
            localStorage.setItem('jmyData', JSON.stringify(data));
        }
    };
    jmyapis.prototype.empresadefault = function () {
        var data = JSON.parse(localStorage.getItem('jmyData'));
        return (data != undefined) ? data.primerempresa : 0;
    };
    jmyapis = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_4__providers_common__["a" /* Common */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["q" /* ToastController */]])
    ], jmyapis);
    return jmyapis;
}());

//# sourceMappingURL=jmyapis.js.map

/***/ }),

/***/ 118:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 118;

/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about/about.module": [
		305,
		30
	],
	"../pages/auth/auth.module": [
		304,
		29
	],
	"../pages/cart/cart.module": [
		306,
		28
	],
	"../pages/category/category.module": [
		307,
		27
	],
	"../pages/checkout/checkout.module": [
		308,
		26
	],
	"../pages/dish-detail/dish-detail.module": [
		309,
		25
	],
	"../pages/dish-list/dish-list.module": [
		311,
		24
	],
	"../pages/extras/custom-pages/custom-pages.module": [
		310,
		23
	],
	"../pages/extras/login-list/login-list.module": [
		312,
		22
	],
	"../pages/extras/login1/login1.module": [
		313,
		21
	],
	"../pages/extras/login2/login2.module": [
		314,
		20
	],
	"../pages/extras/login3/login3.module": [
		315,
		19
	],
	"../pages/extras/login4/login4.module": [
		316,
		18
	],
	"../pages/extras/login5/login5.module": [
		317,
		17
	],
	"../pages/extras/register/register.module": [
		318,
		16
	],
	"../pages/extras/timeline/timeline.module": [
		319,
		15
	],
	"../pages/favorite-list/favorite-list.module": [
		321,
		14
	],
	"../pages/home/home.module": [
		320,
		13
	],
	"../pages/message-detail/message-detail.module": [
		322,
		12
	],
	"../pages/message-list/message-list.module": [
		323,
		11
	],
	"../pages/my-account/my-account.module": [
		324,
		10
	],
	"../pages/nearby/nearby.module": [
		325,
		2
	],
	"../pages/notifications/notifications.module": [
		326,
		9
	],
	"../pages/orders/orders.module": [
		327,
		8
	],
	"../pages/restaurant-detail/restaurant-detail.module": [
		329,
		1
	],
	"../pages/restaurant-filter/restaurant-filter.module": [
		330,
		7
	],
	"../pages/restaurant-list/restaurant-list.module": [
		328,
		0
	],
	"../pages/settings/settings.module": [
		331,
		6
	],
	"../pages/support/support.module": [
		332,
		5
	],
	"../pages/walkthrough/walkthrough.module": [
		333,
		4
	],
	"../pages/your-restaurant/your-restaurant.module": [
		334,
		3
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 159;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return jmyfatkit; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_common__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var jmyfatkit = (function () {
    function jmyfatkit(common, toastCtrl, authService) {
        this.common = common;
        this.toastCtrl = toastCtrl;
        this.authService = authService;
        this.uPD = {
            "user_id": "",
            "token": "",
            "body": { "usuario": "",
                "empresa": "",
                "id_usuario": "",
                "data": {}
            },
            "fn": ""
        };
        this.fm = { "id_empresa": "",
            "id_usuario": "",
            "nombre": "",
            "nickname": "",
            "pass": "",
            "pass_ant": "",
            "correo": "",
            "permisos": {},
        };
        var d = JSON.parse(localStorage.getItem('userData'));
        if (d != undefined) {
            this.uD = d.userData;
            this.uPD.user_id = this.uD.user_id;
            this.uPD.token = this.uD.token;
        }
    }
    jmyfatkit.prototype.guardarPassUsuario = function (data) {
        this.guardar(data);
    };
    jmyfatkit.prototype.guardarEditarUsuario = function (data) {
        this.guardar(data);
    };
    jmyfatkit.prototype.infoUsuario = function () {
        var _this = this;
        this.uPD.fn = "verUsrEdit";
        var d = JSON.parse(localStorage.getItem('userData'));
        if (d != undefined) {
            this.uPD.body.usuario = d.userData.email;
            this.common.presentLoading();
            this.authService.postData(this.uPD, "usuarios").then(function (r) {
                _this.rD = r;
                console.log(_this.rD);
                if (_this.rD.count > 0) {
                    _this.fm.id_usuario = _this.rD.feedData.user_id;
                    _this.fm.nombre = _this.rD.feedData.name;
                    _this.fm.nickname = _this.rD.feedData.username;
                    _this.fm.correo = _this.rD.feedData.email;
                    _this.user = _this.fm;
                    console.log(_this.fm);
                }
                else {
                }
            }, function (err) {
                //Connection failed message
            });
            this.common.closeLoading();
        }
    };
    jmyfatkit.prototype.guardar = function (data) {
        var _this = this;
        console.log(this.uPD);
        this.fm.nombre = data.nombre;
        this.fm.correo = data.correo;
        this.fm.pass = data.pass;
        this.fm.pass_ant = data.pass_ant;
        this.uPD.fn = "guardarUsrEdit";
        this.uPD.body.data = this.fm;
        this.uPD.body.id_usuario = this.uD.user_id;
        this.common.presentLoading();
        this.authService.postData(this.uPD, "usuarios").then(function (result) {
            _this.rD = result;
            console.log(_this.rD);
            if (_this.rD.error != 'ninguno')
                _this.alerta(_this.rD.error);
            else
                _this.alerta("Actualizado correctamente");
            _this.infoUsuario();
            _this.fm.pass = "";
            _this.fm.pass_ant = "";
        }, function (err) {
            _this.fm.pass = "";
            _this.fm.pass_ant = "";
        });
        this.common.closeLoading();
    };
    jmyfatkit.prototype.alerta = function (men) {
        var toast = this.toastCtrl.create({
            message: men,
            duration: 9000,
            position: 'top'
        });
        toast.present();
    };
    jmyfatkit = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_common__["a" /* Common */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__["a" /* AuthService */]])
    ], jmyfatkit);
    return jmyfatkit;
}());

//# sourceMappingURL=jmy-fat-kit.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestaurantService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mock_restaurants__ = __webpack_require__(269);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var RestaurantService = (function () {
    function RestaurantService() {
        this.favoriteCounter = 0;
        this.favorites = [];
        this.restaurants = __WEBPACK_IMPORTED_MODULE_1__mock_restaurants__["a" /* default */];
    }
    RestaurantService.prototype.findAll = function () {
        return Promise.resolve(__WEBPACK_IMPORTED_MODULE_1__mock_restaurants__["a" /* default */]);
    };
    RestaurantService.prototype.getRestaurants = function () {
        return this.restaurants;
    };
    RestaurantService.prototype.findById = function (id) {
        return Promise.resolve(__WEBPACK_IMPORTED_MODULE_1__mock_restaurants__["a" /* default */][id - 1]);
    };
    RestaurantService.prototype.getItem = function (id) {
        for (var i = 0; i < this.restaurants.length; i++) {
            if (this.restaurants[i].id === parseInt(id)) {
                return this.restaurants[i];
            }
        }
        return null;
    };
    RestaurantService.prototype.findByName = function (searchKey) {
        var key = searchKey.toUpperCase();
        return Promise.resolve(__WEBPACK_IMPORTED_MODULE_1__mock_restaurants__["a" /* default */].filter(function (restaurant) {
            return (restaurant.title + ' ' + restaurant.address + ' ' + restaurant.city + ' ' + restaurant.description).toUpperCase().indexOf(key) > -1;
        }));
    };
    RestaurantService.prototype.getFavorites = function () {
        return Promise.resolve(this.favorites);
    };
    RestaurantService.prototype.favorite = function (restaurant) {
        this.favoriteCounter = this.favoriteCounter + 1;
        this.favorites.push({ id: this.favoriteCounter, restaurant: restaurant });
        return Promise.resolve();
    };
    RestaurantService.prototype.unfavorite = function (favorite) {
        var index = this.favorites.indexOf(favorite);
        if (index > -1) {
            this.favorites.splice(index, 1);
        }
        return Promise.resolve();
    };
    RestaurantService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], RestaurantService);
    return RestaurantService;
}());

//# sourceMappingURL=restaurant-service-mock.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// import restaurants from './mock-restaurants';
var CartService = (function () {
    function CartService() {
        this.orderCounter = 0;
        this.orders = [];
        // findAll() {
        //   return Promise.resolve(restaurants);
        // }
        // findById(id) {
        //   return Promise.resolve(restaurants[id - 1]);
        // }
        // findByName(searchKey: string) {
        //   let key: string = searchKey.toUpperCase();
        //   return Promise.resolve(restaurants.filter((restaurant: any) =>
        //       (restaurant.title +  ' ' +restaurant.address +  ' ' + restaurant.city + ' ' + restaurant.description).toUpperCase().indexOf(key) > -1));
        // }
        // getFavorites() {
        //   return Promise.resolve(this.favorites);
        // }
        // favorite(restaurant) {
        //   this.favoriteCounter = this.favoriteCounter + 1;
        //   this.favorites.push({id: this.favoriteCounter, restaurant: restaurant});
        //   return Promise.resolve();
        // }
        // unfavorite(favorite) {
        //   let index = this.favorites.indexOf(favorite);
        //   if (index > -1) {
        //     this.favorites.splice(index, 1);
        //   }
        //   return Promise.resolve();
        // }
    }
    CartService.prototype.addtoCart = function (order, qtd) {
        this.orderCounter = this.orderCounter + 1;
        this.orders.push({ id: this.orderCounter, order: order, qtd: qtd });
        return Promise.resolve();
    };
    CartService.prototype.getOrders = function () {
        return Promise.resolve(this.orders);
    };
    CartService.prototype.removefromCart = function (order) {
        var index = this.orders.indexOf(order);
        if (index > -1) {
            this.orders.splice(index, 1);
        }
        return Promise.resolve();
    };
    CartService.prototype.editQtdOrder = function (order, op) {
        // let order = this.orders[id - 1]
        // let index = this.orders.indexOf(order);
        // let order;
        //   if (index > -1) {
        //     this.orders[index];
        //   }
        for (var i in this.orders) {
            if (this.orders[i].id === order.id) {
                if (op === 'minus') {
                    this.orders[i].qtd--;
                    break;
                }
                if (op === 'plus') {
                    this.orders[i].qtd++;
                    break;
                }
            }
        }
        return Promise.resolve();
    };
    CartService.prototype.cleanCart = function () {
        this.orders = [];
    };
    CartService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], CartService);
    return CartService;
}());

//# sourceMappingURL=cart-service-mock.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DishService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mock_dishes__ = __webpack_require__(268);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var DishService = (function () {
    function DishService() {
        this.dishes = __WEBPACK_IMPORTED_MODULE_1__mock_dishes__["a" /* default */];
    }
    DishService.prototype.findAll = function () {
        return this.dishes;
    };
    DishService.prototype.findById = function (id) {
        return Promise.resolve(this.dishes[id - 1]);
    };
    DishService.prototype.getItem = function (id) {
        for (var i = 0; i < this.dishes.length; i++) {
            if (this.dishes[i].id === parseInt(id)) {
                return this.dishes[i];
            }
        }
        return null;
    };
    DishService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], DishService);
    return DishService;
}());

//# sourceMappingURL=dish-service-mock.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var OrdersService = (function () {
    function OrdersService() {
        this.orderCounter = 0;
        this.orders = [];
    }
    OrdersService.prototype.saveOrder = function (order, total, orderNumber) {
        this.orderCounter = this.orderCounter + 1;
        this.orders.push({ id: this.orderCounter, order: order, total: total, onumber: orderNumber });
        return Promise.resolve();
    };
    OrdersService.prototype.getOrders = function () {
        return Promise.resolve(this.orders);
    };
    OrdersService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], OrdersService);
    return OrdersService;
}());

//# sourceMappingURL=orders-service-mock.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mock_messages__ = __webpack_require__(270);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessageService = (function () {
    function MessageService() {
        this.messageCounter = 0;
        this.messages = __WEBPACK_IMPORTED_MODULE_1__mock_messages__["a" /* default */];
        // console.log('mock messages: ', messages);
        // console.log(this.messages)
    }
    MessageService.prototype.findById = function (id) {
        // console.log(id)
        return Promise.resolve(this.messages[id - 1]);
    };
    MessageService.prototype.getMessages = function () {
        return this.messages;
    };
    MessageService.prototype.message = function (message) {
        this.messageCounter = this.messageCounter + 1;
        this.messages.push({ id: this.messageCounter, message: message });
        return Promise.resolve();
    };
    MessageService.prototype.getItem = function (id) {
        for (var i = 0; i < this.messages.length; i++) {
            if (this.messages[i].id === parseInt(id)) {
                return this.messages[i];
            }
        }
        return null;
    };
    MessageService.prototype.delMessage = function (message) {
        this.messages.splice(this.messages.indexOf(message), 1);
    };
    MessageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], MessageService);
    return MessageService;
}());

//# sourceMappingURL=message-service-mock.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mock_categories__ = __webpack_require__(264);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var CategoryService = (function () {
    function CategoryService() {
    }
    CategoryService.prototype.findAll = function () {
        return Promise.resolve(__WEBPACK_IMPORTED_MODULE_1__mock_categories__["a" /* default */]);
    };
    CategoryService.prototype.findById = function (id) {
        return Promise.resolve(__WEBPACK_IMPORTED_MODULE_1__mock_categories__["a" /* default */][id - 1]);
    };
    CategoryService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], CategoryService);
    return CategoryService;
}());

//# sourceMappingURL=category-service-mock.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export pipes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__term_search__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__capitalize_pipe__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__orderby_pipe__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shorten_pipe__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__temperature_pipe__ = __webpack_require__(275);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var pipes = [
    __WEBPACK_IMPORTED_MODULE_1__term_search__["a" /* TermSearchPipe */],
    __WEBPACK_IMPORTED_MODULE_2__capitalize_pipe__["a" /* CapitalizePipe */],
    __WEBPACK_IMPORTED_MODULE_3__orderby_pipe__["a" /* OrderByPipe */],
    __WEBPACK_IMPORTED_MODULE_4__shorten_pipe__["a" /* ShortenStringPipe */],
    __WEBPACK_IMPORTED_MODULE_5__temperature_pipe__["a" /* TemperaturePipe */],
];
var PipesModule = (function () {
    function PipesModule() {
    }
    PipesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [pipes],
            exports: [pipes]
        })
    ], PipesModule);
    return PipesModule;
}());

//# sourceMappingURL=pipes.module.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_module__ = __webpack_require__(233);



// this is the magic wand
Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_14" /* enableProdMode */])();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_common__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_jmydb__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_jmyapis__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_jmy_fat_kit__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_http__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pipes_pipes_module__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_message_service_mock__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_restaurant_service_mock__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_dish_service_mock__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_category_service_mock__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_cart_service_mock__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_orders_service_mock__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_splash_screen__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_keyboard__ = __webpack_require__(303);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* foodIonicApp */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* foodIonicApp */], {
                    preloadModules: true,
                    scrollPadding: false,
                    scrollAssist: true,
                    autoFocusAssist: false
                }, {
                    links: [
                        { loadChildren: '../pages/auth/auth.module#AuthPageModule', name: 'page-auth', segment: 'auth', priority: 'high', defaultHistory: [] },
                        { loadChildren: '../pages/about/about.module#AboutPageModule', name: 'page-about', segment: 'about', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cart/cart.module#CartPageModule', name: 'page-cart', segment: 'cart', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/category/category.module#CategoryPageModule', name: 'page-category', segment: 'category', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/checkout/checkout.module#CheckoutPageModule', name: 'page-checkout', segment: 'checkout', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dish-detail/dish-detail.module#DishDetailPageModule', name: 'page-dish-detail', segment: 'dish/:id', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/extras/custom-pages/custom-pages.module#CustomPagesPageModule', name: 'page-custom-pages', segment: 'extras', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dish-list/dish-list.module#DishListPageModule', name: 'page-dish-list', segment: 'dish-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/extras/login-list/login-list.module#LoginListPageModule', name: 'page-login-list', segment: 'extras/login-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/extras/login1/login1.module#Login1PageModule', name: 'page-login1', segment: 'extras/login-list/login1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/extras/login2/login2.module#Login2PageModule', name: 'page-login2', segment: 'extras/login-list/login2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/extras/login3/login3.module#Login3PageModule', name: 'page-login3', segment: 'extras/login-list/login3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/extras/login4/login4.module#Login4PageModule', name: 'page-login4', segment: 'extras/login-list/login4', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/extras/login5/login5.module#Login5PageModule', name: 'page-login5', segment: 'extras/login-list/login5', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/extras/register/register.module#RegisterPageModule', name: 'page-register', segment: 'extras/register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/extras/timeline/timeline.module#TimelinePageModule', name: 'page-timeline', segment: 'extras/timeline', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'page-home', segment: 'home', priority: 'high', defaultHistory: [] },
                        { loadChildren: '../pages/favorite-list/favorite-list.module#FavoriteListPageModule', name: 'page-favorite-list', segment: 'favorites', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/message-detail/message-detail.module#MessageDetailPageModule', name: 'page-message-detail', segment: 'message/:id', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/message-list/message-list.module#MessageListPageModule', name: 'page-message-list', segment: 'message-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/my-account/my-account.module#MyAccountPageModule', name: 'page-my-account', segment: 'my-account', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nearby/nearby.module#OrdersPageModule', name: 'page-nearby', segment: 'nearby', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notifications/notifications.module#NotificationsPageModule', name: 'page-notifications', segment: 'notifications', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/orders/orders.module#OrdersPageModule', name: 'page-orders', segment: 'orders', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/restaurant-list/restaurant-list.module#RestaurantListPageModule', name: 'page-restaurant-list', segment: 'restaurant-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/restaurant-detail/restaurant-detail.module#RestaurantDetailPageModule', name: 'page-restaurant-detail', segment: 'restaurant/:id', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/restaurant-filter/restaurant-filter.module#RestaurantFilterPageModule', name: 'page-restaurant-filter', segment: 'restaurant-filter', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'page-settings', segment: 'settings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/support/support.module#SupportPageModule', name: 'page-support', segment: 'support', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/walkthrough/walkthrough.module#WalkthroughPageModule', name: 'page-walkthrough', segment: 'walkthrough', priority: 'high', defaultHistory: [] },
                        { loadChildren: '../pages/your-restaurant/your-restaurant.module#YourRestaurantPageModule', name: 'page-your-restaurant', segment: 'your-restaurant', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["a" /* IonicStorageModule */].forRoot({
                    name: '__foodIonicDB',
                    driverOrder: ['indexeddb', 'sqlite', 'websql']
                }),
                __WEBPACK_IMPORTED_MODULE_12__pipes_pipes_module__["a" /* PipesModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* foodIonicApp */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_keyboard__["a" /* Keyboard */],
                __WEBPACK_IMPORTED_MODULE_14__providers_restaurant_service_mock__["a" /* RestaurantService */],
                __WEBPACK_IMPORTED_MODULE_15__providers_dish_service_mock__["a" /* DishService */],
                __WEBPACK_IMPORTED_MODULE_16__providers_category_service_mock__["a" /* CategoryService */],
                __WEBPACK_IMPORTED_MODULE_13__providers_message_service_mock__["a" /* MessageService */],
                __WEBPACK_IMPORTED_MODULE_17__providers_cart_service_mock__["a" /* CartService */],
                __WEBPACK_IMPORTED_MODULE_18__providers_orders_service_mock__["a" /* OrdersService */], __WEBPACK_IMPORTED_MODULE_6__providers_common__["a" /* Common */], __WEBPACK_IMPORTED_MODULE_8__providers_jmyapis__["a" /* jmyapis */], __WEBPACK_IMPORTED_MODULE_7__providers_jmydb__["a" /* JMYDB */], __WEBPACK_IMPORTED_MODULE_9__providers_jmy_fat_kit__["a" /* jmyfatkit */], __WEBPACK_IMPORTED_MODULE_5__providers_auth_service__["a" /* AuthService */],
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var categories = [
    {
        id: 1,
        name: "Clinicas",
        picture: "assets/img/restaurants/restaurant01.jpg",
        quantity: 41
    }
];
/* harmony default export */ __webpack_exports__["a"] = (categories);
//# sourceMappingURL=mock-categories.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var dishes = [
    {
        id: 1,
        name: "Texas Burguer",
        ingredients: "Pan, Carne, Jitomate, Queso",
        description: "CARGANDO MODO DE PREPARACIÓN....",
        picture: "assets/img/dishes/dish05.jpg",
        price: 300,
        qtd: 0
    }
];
/* harmony default export */ __webpack_exports__["a"] = (dishes);
//# sourceMappingURL=mock-dishes.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var restaurants = [
    {
        id: 1,
        address: "Cadiz, los Alamos ",
        city: "Ciudad de México",
        state: "CDMX",
        zip: "03400",
        title: "Mejorando tu imagen",
        phone: "01 55 5530 9702",
        long: 19.3983502,
        lat: -99.1389318,
        picture: "assets/img/restaurants/restaurant01.jpg",
        thumbnail: "assets/img/restaurants/restaurant01sq.jpg",
        images: [
            "assets/img/restaurants/restaurant01.jpg",
            "assets/img/restaurants/restaurant03.jpg",
            "assets/img/restaurants/restaurant05.jpg",
            "assets/img/restaurants/restaurant07.jpg"
        ],
        tags: "Clinica",
        description: "LOGRAR QUE NUESTROS PACIENTES ALCANCEN SU PESO IDEAL, ASÍ COMO SUS METAS PERSONALES PARA SER FACTOR EN SU BIENESTAR GENERAL POR QUÉ SABEMOS QUE UNA BUENA NUTRICIÓN MEJORA TU SALUD FÍSICA Y EMOCIONAL.",
        label: "Abierto",
        period: "10 - 18 hrs",
        price: "$$$",
        rating: 4.4,
        dishes: {
            id: 1,
            name: "Caroline Seymor",
            title: "Senior Broker",
            picture: "assets/img/dishes/caroline_seymor.jpg"
        },
        reviews: [
            {
                id: 1,
                username: "Boscotron",
                from: "Mérida, Yucatán",
                title: "Excelente lugar",
                content: "Muy crca del metro y me atendio cuando pase rápido por la Ciudad.",
                rating: 4
            }
        ]
    },
];
/* harmony default export */ __webpack_exports__["a"] = (restaurants);
//# sourceMappingURL=mock-restaurants.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var d = new Date();
var messages = [
    {
        id: 1,
        title: "Bienvenido a Dieta Positiva PRO",
        date: "2018/04/17 12:00",
        senderId: 2,
        senderName: "Dieta Positiva",
        email: "contacto@dietapositiva.com.mx",
        message: "En este apartado se podra comunicar con el nutriologo que tenga activo para llevar a cabo su control de peso, si requiere algún tipo de asistencia por favor dirigase al manu pricipal seleccione 'Ayuda' para brindarle Asistencia con algún asessor o soporte técnico",
        read: false
    }
];
/* harmony default export */ __webpack_exports__["a"] = (messages);
//# sourceMappingURL=mock-messages.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermSearchPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TermSearchPipe = (function () {
    function TermSearchPipe() {
    }
    TermSearchPipe.prototype.transform = function (value, query, field) {
        return query ? value.reduce(function (prev, next) {
            if (next[field].includes(query)) {
                prev.push(next);
            }
            return prev;
        }, []) : value;
    };
    TermSearchPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'termSearch',
            pure: false
        }),
        __metadata("design:paramtypes", [])
    ], TermSearchPipe);
    return TermSearchPipe;
}());

//# sourceMappingURL=term-search.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CapitalizePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CapitalizePipe = (function () {
    function CapitalizePipe() {
    }
    // Autocapitalizes the first letter of each word in a phrase.
    // Input: {{'john doe' | capitalize}}
    // Output: John Doe
    CapitalizePipe.prototype.transform = function (value) {
        if (value) {
            var words = value.split(' ');
            value = words.map(function (word) { return word.substring(0, 1).toUpperCase() + word.substring(1); }).join(' ');
        }
        return value;
    };
    CapitalizePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'capitalize'
        })
    ], CapitalizePipe);
    return CapitalizePipe;
}());

//# sourceMappingURL=capitalize.pipe.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderByPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var OrderByPipe = (function () {
    function OrderByPipe() {
        this.value = [];
    }
    OrderByPipe_1 = OrderByPipe;
    OrderByPipe.orderByComparator = function (a, b) {
        if (a === null || typeof a === 'undefined') {
            a = 0;
        }
        if (b === null || typeof b === 'undefined') {
            b = 0;
        }
        if ((isNaN(parseFloat(a)) ||
            !isFinite(a)) ||
            (isNaN(parseFloat(b)) || !isFinite(b))) {
            // Isn"t a number so lowercase the string to properly compare
            a = a.toString();
            b = b.toString();
            if (a.toLowerCase() < b.toLowerCase()) {
                return -1;
            }
            if (a.toLowerCase() > b.toLowerCase()) {
                return 1;
            }
        }
        else {
            // Parse strings as numbers to compare properly
            if (parseFloat(a) < parseFloat(b)) {
                return -1;
            }
            if (parseFloat(a) > parseFloat(b)) {
                return 1;
            }
        }
        return 0; // equal each other
    };
    OrderByPipe.prototype.transform = function (input, config) {
        if (config === void 0) { config = '+'; }
        if (!input) {
            return input;
        }
        // make a copy of the input"s reference
        this.value = input.slice();
        var value = this.value;
        if (!Array.isArray(value)) {
            return value;
        }
        if (!Array.isArray(config) || (Array.isArray(config) && config.length === 1)) {
            var propertyToCheck = !Array.isArray(config) ? config : config[0];
            var desc_1 = propertyToCheck.substr(0, 1) === '-';
            // Basic array
            if (!propertyToCheck || propertyToCheck === '-' || propertyToCheck === '+') {
                return !desc_1 ? value.sort() : value.sort().reverse();
            }
            else {
                var property_1 = propertyToCheck.substr(0, 1) === '+' || propertyToCheck.substr(0, 1) === '-'
                    ? propertyToCheck.substr(1)
                    : propertyToCheck;
                return value.sort(function (a, b) {
                    var aValue = a[property_1];
                    var bValue = b[property_1];
                    var propertySplit = property_1.split('.');
                    if (typeof aValue === 'undefined' && typeof bValue === 'undefined' && propertySplit.length > 1) {
                        aValue = a;
                        bValue = b;
                        for (var j = 0; j < propertySplit.length; j++) {
                            aValue = aValue[propertySplit[j]];
                            bValue = bValue[propertySplit[j]];
                        }
                    }
                    return !desc_1
                        ? OrderByPipe_1.orderByComparator(aValue, bValue)
                        : -OrderByPipe_1.orderByComparator(aValue, bValue);
                });
            }
        }
        else {
            // Loop over property of the array in order and sort
            return value.sort(function (a, b) {
                for (var i = 0; i < config.length; i++) {
                    var desc = config[i].substr(0, 1) === '-';
                    var property = config[i].substr(0, 1) === '+' || config[i].substr(0, 1) === '-'
                        ? config[i].substr(1)
                        : config[i];
                    var aValue = a[property];
                    var bValue = b[property];
                    var propertySplit = property.split('.');
                    if (typeof aValue === 'undefined' && typeof bValue === 'undefined' && propertySplit.length > 1) {
                        aValue = a;
                        bValue = b;
                        for (var j = 0; j < propertySplit.length; j++) {
                            aValue = aValue[propertySplit[j]];
                            bValue = bValue[propertySplit[j]];
                        }
                    }
                    var comparison = !desc
                        ? OrderByPipe_1.orderByComparator(aValue, bValue)
                        : -OrderByPipe_1.orderByComparator(aValue, bValue);
                    // Don't return 0 yet in case of needing to sort by next property
                    if (comparison !== 0) {
                        return comparison;
                    }
                }
                return 0; // equal each other
            });
        }
    };
    OrderByPipe = OrderByPipe_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({ name: 'orderBy', pure: false })
    ], OrderByPipe);
    return OrderByPipe;
    var OrderByPipe_1;
}());

//# sourceMappingURL=orderby.pipe.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShortenStringPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ShortenStringPipe = (function () {
    function ShortenStringPipe() {
    }
    // Shortens the string to a given length.
    // Input: {{'This is a very long string' | shorten:18}}
    // Output: This is a very lon...
    ShortenStringPipe.prototype.transform = function (value, maxWidth, suffix) {
        if (maxWidth === void 0) { maxWidth = 30; }
        if (suffix === void 0) { suffix = '...'; }
        if (value && value.length > maxWidth) {
            value = value.substring(0, maxWidth) + suffix;
        }
        return value;
    };
    ShortenStringPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'shorten'
        })
    ], ShortenStringPipe);
    return ShortenStringPipe;
}());

//# sourceMappingURL=shorten.pipe.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TemperaturePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TemperaturePipe = (function () {
    function TemperaturePipe() {
    }
    TemperaturePipe.prototype.transform = function (value, args) {
        var c = Math.round(parseInt(value, 10) - 273.15);
        var f = Math.round(parseInt(value, 10) * 9 / 5 - 459.67);
        return args === 'c' ? c + " \u00B0C" : f + " \u00B0F";
    };
    TemperaturePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'temperature'
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], TemperaturePipe);
    return TemperaturePipe;
}());

//# sourceMappingURL=temperature.pipe.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JMYDB; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_common__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the Common provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var JMYDB = (function () {
    //public loader: any;
    function JMYDB(loadingCtrl, toastCtrl, authService, common) {
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.authService = authService;
        this.common = common;
        this.userPostData = {
            "user_id": "",
            "token": "",
            "head": {},
            "body": {},
            "fn": ""
        };
        console.log('jmydb inc');
    }
    JMYDB.prototype.jmy = function (datos) {
        var _this = this;
        var data = JSON.parse(localStorage.getItem('userData'));
        if (data != undefined) {
            this.userDetails = data.userData;
            this.userPostData.user_id = this.userDetails.user_id;
            this.userPostData.token = this.userDetails.token;
            this.userPostData.fn = datos.fn;
            this.userPostData.head = datos.head;
            this.userPostData.body = datos.body;
            console.log(this.userPostData);
            //this.common.presentLoading();
            this
                .authService
                .postData(this.userPostData, "jmydb")
                .then(function (result) {
                _this.resultado = result;
                //if(datos.titulo!=undefined)
                console.log(datos.titulo);
                console.log(_this.resultado);
            }, function (err) {
                //Connection failed message
            });
        }
    };
    JMYDB.prototype.jmyUsuarios = function (datos) {
        var _this = this;
        var data = JSON.parse(localStorage.getItem('userData'));
        this.userDetails = data.userData;
        this.userPostData.user_id = this.userDetails.user_id;
        this.userPostData.token = this.userDetails.token;
        console.log(this.userPostData);
        //this.common.presentLoading();
        this
            .authService
            .postData(this.userPostData, "listaUsuarios")
            .then(function (result) {
            _this.resultado = result;
            console.log(_this.resultado);
        }, function (err) {
        });
    };
    JMYDB.prototype.alerta = function (men) {
        var toast = this.toastCtrl.create({ message: men, duration: 9000, position: 'top' });
        toast.present();
    };
    JMYDB = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3__providers_common__["a" /* Common */]])
    ], JMYDB);
    return JMYDB;
}());

//# sourceMappingURL=jmydb.js.map

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return foodIonicApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_jmyapis__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_jmy_fat_kit__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var foodIonicApp = (function () {
    function foodIonicApp(platform, statusBar, splashScreen, jmyApis, jmyFatKit, alertCtrl, toastCtrl, menu) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.jmyApis = jmyApis;
        this.jmyFatKit = jmyFatKit;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.menu = menu;
        this.tabsPlacement = 'bottom';
        this.tabsLayout = 'icon-top';
        this.rootPage = 'page-walkthrough';
        this.showMenu = true;
        this.initializeApp();
        this.homeItem = { component: 'page-home' };
        this.messagesItem = { component: 'page-message-list' };
        this.appMenuItems = [
            { title: 'Clinicas', component: 'page-restaurant-list', icon: 'home' },
            { title: 'Recetas', component: 'page-dish-list', icon: 'pizza' },
        ];
        this.accountMenuItems = [
            { title: 'Entrar', component: 'page-auth', icon: 'log-in' },
            { title: 'Mi perfil', component: 'page-my-account', icon: 'contact' },
            { title: 'Salir', component: 'page-auth', icon: 'log-out' },
        ];
        this.helpMenuItems = [
            { title: 'Acerca', component: 'page-about', icon: 'information-circle' },
            { title: 'Ayuda', component: 'page-support', icon: 'call' },
            { title: 'Configuración de la app', component: 'page-settings', icon: 'cog' }
        ];
    }
    foodIonicApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.overlaysWebView(false);
            _this.splashScreen.hide();
        });
        if (!this.platform.is('mobile')) {
            this.tabsPlacement = 'top';
            this.tabsLayout = 'icon-left';
        }
    };
    foodIonicApp.prototype.salirConfirmar = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Estas seguro',
            message: '¿que ya deseas salir?',
            buttons: [{
                    text: 'Regresar',
                    handler: function () { }
                }, {
                    text: 'Salir',
                    handler: function () {
                        _this.alerta("Hasta luego! ");
                        _this.logout();
                    }
                }]
        });
        confirm.present();
    };
    foodIonicApp.prototype.logout = function () {
        localStorage.clear();
        this.menu.enable(false);
        this.openPage('page-auth');
        //location.reload();
    };
    foodIonicApp.prototype.nombreUsuario = function () {
        var d = JSON.parse(localStorage.getItem('userData'));
        if (d != undefined) {
            return (this.jmyFatKit.user != undefined) ? this.jmyFatKit.user.nombre : d.userData.name;
        }
    };
    foodIonicApp.prototype.alerta = function (men) {
        var toast = this.toastCtrl.create({
            message: men,
            duration: 9000,
            position: 'top'
        });
        toast.present();
    };
    foodIonicApp.prototype.openPage = function (page) {
        this.nav.setRoot(page.component);
    };
    foodIonicApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */]) === "function" && _a || Object)
    ], foodIonicApp.prototype, "nav", void 0);
    foodIonicApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/juanmartinez/ionic/DietaPositiva/src/app/app.html"*/'<ion-split-pane when="lg">\n\n	<ion-menu side="left" id="authenticated" [content]="content" class="menu-bg">\n\n	  <ion-header>\n	    <ion-toolbar class="user-profile">\n\n	      <div class="user-profile">\n	        <ion-list no-margin>\n	          <ion-item>\n\n	            <ion-avatar item-left>\n	              <img src="assets/img/welcome/7.png">\n	            </ion-avatar>\n\n	            <h2 ion-text class="text-white fw700 text-15x">\n	              {{nombreUsuario()}}\n	            </h2>\n	            <p ion-text color="light">Ciudad de México</p>\n\n					    <button ion-button icon-left round color="primary" menuClose (click)="openPage(accountMenuItems[1])">\n					      <ion-icon [name]="accountMenuItems[1].icon"></ion-icon>\n					      {{accountMenuItems[1].title}}\n					    </button>\n\n	          </ion-item>\n	        </ion-list>\n	      </div>\n\n	    </ion-toolbar>\n	  </ion-header>\n\n	  <ion-content color="dark" class="profile-bg">\n	    <button ion-button icon-left full color="secondary" no-margin menuClose (click)="salirConfirmar()">\n	      <ion-icon [name]="log-out"></ion-icon>\n	      Salir\n	    </button>\n\n	    <ion-list class="user-list">\n	      <button menuClose ion-item (click)="openPage(homeItem)">\n	        <ion-icon item-left name="browsers"></ion-icon>\n	        Inicio\n	      </button>\n\n	      <button menuClose ion-item (click)="openPage(messagesItem)">\n	        <ion-icon item-left name="mail"></ion-icon>\n	        Mensajes\n	        <ion-badge color="dark">\n	          2\n	        </ion-badge>\n	      </button>\n	    </ion-list>\n\n\n	    <ion-list class="user-list">\n	      <ion-list-header no-margin>\n	        <span ion-text color="light" class="fw500">Menu</span>\n	      </ion-list-header>\n	      <button menuClose ion-item *ngFor="let menuItem of appMenuItems" (click)="openPage(menuItem)">\n	        <ion-icon item-left [name]="menuItem.icon"></ion-icon>\n	        {{menuItem.title}}\n	      </button>\n	    </ion-list>\n\n	    <ion-list class="user-list">\n	      <ion-list-header no-margin>\n	        <span ion-text color="light" class="fw500">Ayuda y configuración</span>\n	      </ion-list-header>\n	      <button menuClose ion-item *ngFor="let menuItem of helpMenuItems" (click)="openPage(menuItem)">\n	        <ion-icon item-left [name]="menuItem.icon"></ion-icon>\n	        {{menuItem.title}}\n	      </button>\n	    </ion-list>\n\n	  </ion-content>\n\n	</ion-menu>\n\n	<ion-nav [root]="rootPage" main #content swipeBackEnabled="false"></ion-nav>\n\n</ion-split-pane>\n'/*ion-inline-end:"/Users/juanmartinez/ionic/DietaPositiva/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__providers_jmyapis__["a" /* jmyapis */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_jmyapis__["a" /* jmyapis */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__providers_jmy_fat_kit__["a" /* jmyfatkit */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_jmy_fat_kit__["a" /* jmyfatkit */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */]) === "function" && _j || Object])
    ], foodIonicApp);
    return foodIonicApp;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//let apiUrl = "http://localhost/ionic/PHP-Slim-Restful/api/"; 
var apiUrl = 'https://comsis.mx/api/auth/v1/';
/*
  Generated class for the AuthService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        console.log('Hello AuthService Provider');
    }
    AuthService.prototype.postData = function (credentials, type) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.http.post(apiUrl + type, JSON.stringify(credentials), { headers: headers }).
                subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], AuthService);
    return AuthService;
}());

//# sourceMappingURL=auth-service.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Common; });
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


/*
  Generated class for the Common provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var Common = (function () {
    function Common(loadingCtrl) {
        this.loadingCtrl = loadingCtrl;
        console.log('Hello Common Provider');
    }
    Common.prototype.presentLoading = function () {
        this.loader = this.loadingCtrl.create({ content: "Por favor espere..." });
        this.loader.present();
    };
    Common.prototype.closeLoading = function () {
        this.loader.dismiss();
    };
    Common = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
    ], Common);
    return Common;
}());

//# sourceMappingURL=common.js.map

/***/ })

},[211]);
//# sourceMappingURL=main.js.map