webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/view-layer/modules-by-route/home/home.module": [
		"../../../../../src/app/view-layer/modules-by-route/home/home.module.ts"
	],
	"app/view-layer/modules-by-route/notfound/notfound.page.module": [
		"../../../../../src/app/view-layer/modules-by-route/notfound/notfound.page.module.ts"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../../../../src/app/app-stage/app.stage.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app-stage/app.stage.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 3;\n      -ms-flex-positive: 3;\n          flex-grow: 3; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app-stage/app.stage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppStageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * This class represents the main application component. Within the @Routes annotation is the configuration of the
 * applications routes, configuring the paths for the lazy loaded components (HomeComponent, AboutComponent).
 */
var AppStageComponent = /** @class */ (function () {
    function AppStageComponent() {
    }
    AppStageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'sd-app-stage',
            styles: [__webpack_require__("../../../../../src/app/app-stage/app.stage.component.scss")],
            template: __webpack_require__("../../../../../src/app/app-stage/app.stage.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], AppStageComponent);
    return AppStageComponent;
}());

//# sourceMappingURL=app.stage.component.js.map

/***/ }),

/***/ "../../../../../src/app/app-stage/app.stage.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppStageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_flex_layout__ = __webpack_require__("../../../flex-layout/@angular/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__view_layer_material_module__ = __webpack_require__("../../../../../src/app/view-layer/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__data_layer_ngrx_data_mock_ngrx_data_module__ = __webpack_require__("../../../../../src/app/data-layer/ngrx-data/mock.ngrx.data.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__business_layer_brokerage_registries_ngrx_broker_registration_service__ = __webpack_require__("../../../../../src/app/business-layer/brokerage/registries/ngrx.broker.registration.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__business_layer_brokerage_brokerage_module__ = __webpack_require__("../../../../../src/app/business-layer/brokerage/brokerage.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__business_layer_pubsub_broker_pubsub_broker_module__ = __webpack_require__("../../../../../src/app/business-layer/pubsub-broker/pubsub.broker.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__view_layer_modules_by_route_home_home_module__ = __webpack_require__("../../../../../src/app/view-layer/modules-by-route/home/home.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__view_layer_modules_by_route_notfound_notfound_page_module__ = __webpack_require__("../../../../../src/app/view-layer/modules-by-route/notfound/notfound.page.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_stage_component__ = __webpack_require__("../../../../../src/app/app-stage/app.stage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__app_stage_routing_module__ = __webpack_require__("../../../../../src/app/app-stage/app.stage.routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








//data layer


//business layer ngrx pubsub-broker brokerage

// handle request from viewlayer to the store by way of a brokerage

/*
  Page views
 */


/*
     Smart Container (components that reference ngrx Store)
 */



var AppStageModule = /** @class */ (function () {
    function AppStageModule(ngrxBRS) {
        this.ngrxBRS = ngrxBRS;
    }
    AppStageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_14__app_stage_component__["a" /* AppStageComponent */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["e" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["j" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_7__view_layer_material_module__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_8__data_layer_ngrx_data_mock_ngrx_data_module__["a" /* MockNGRxDataModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_11__business_layer_pubsub_broker_pubsub_broker_module__["a" /* PubSubBrokerModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_10__business_layer_brokerage_brokerage_module__["a" /* BrokerageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_15__app_stage_routing_module__["a" /* AppStageRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_12__view_layer_modules_by_route_home_home_module__["HomeModule"],
                __WEBPACK_IMPORTED_MODULE_13__view_layer_modules_by_route_notfound_notfound_page_module__["NotfoundPageModule"],
                __WEBPACK_IMPORTED_MODULE_6__angular_flex_layout__["a" /* FlexLayoutModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__business_layer_brokerage_registries_ngrx_broker_registration_service__["a" /* NGRxBrokerRegistrationService */],
                __WEBPACK_IMPORTED_MODULE_16__angular_http__["a" /* BaseRequestOptions */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_2__angular_common__["a" /* APP_BASE_HREF */],
                    useValue: '/'
                }
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_14__app_stage_component__["a" /* AppStageComponent */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_9__business_layer_brokerage_registries_ngrx_broker_registration_service__["a" /* NGRxBrokerRegistrationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__business_layer_brokerage_registries_ngrx_broker_registration_service__["a" /* NGRxBrokerRegistrationService */]) === "function" && _a || Object])
    ], AppStageModule);
    return AppStageModule;
    var _a;
}());

//# sourceMappingURL=app.stage.module.js.map

/***/ }),

/***/ "../../../../../src/app/app-stage/app.stage.routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppStageRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [
    {
        path: '',
        loadChildren: 'app/view-layer/modules-by-route/home/home.module#HomeModule'
    },
    {
        path: 'error',
        loadChildren: 'app/view-layer/modules-by-route/notfound/notfound.page.module#NotfoundPageModule'
    }
];
var AppStageRoutingModule = /** @class */ (function () {
    function AppStageRoutingModule() {
    }
    AppStageRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes, { useHash: true })],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppStageRoutingModule);
    return AppStageRoutingModule;
}());

//# sourceMappingURL=app.stage.routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/business-layer/brokerage/brokerage.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrokerageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__consumers_ngrx_broker_consumer__ = __webpack_require__("../../../../../src/app/business-layer/brokerage/consumers/ngrx.broker.consumer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_layer_ngrx_data_ngrx_data_module__ = __webpack_require__("../../../../../src/app/data-layer/ngrx-data/ngrx.data.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_stubs_index__ = __webpack_require__("../../../../../src/app/business-layer/brokerage/ngrx-stubs/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var BrokerageModule = /** @class */ (function () {
    function BrokerageModule(parentModule) {
        if (parentModule) {
            throw new Error('PubSubBrokerageModule already loaded; Import in root module only.');
        }
    }
    BrokerageModule_1 = BrokerageModule;
    BrokerageModule.forRoot = function () {
        return {
            ngModule: BrokerageModule_1,
            providers: __WEBPACK_IMPORTED_MODULE_4__ngrx_stubs_index__["a" /* BROKER_PROVIDERS */].concat([__WEBPACK_IMPORTED_MODULE_2__consumers_ngrx_broker_consumer__["a" /* NGRxBrokerConsumer */]])
        };
    };
    BrokerageModule = BrokerageModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__data_layer_ngrx_data_ngrx_data_module__["a" /* NGRxDataModule */]],
            providers: __WEBPACK_IMPORTED_MODULE_4__ngrx_stubs_index__["a" /* BROKER_PROVIDERS */].concat([__WEBPACK_IMPORTED_MODULE_2__consumers_ngrx_broker_consumer__["a" /* NGRxBrokerConsumer */]])
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Optional */])()), __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* SkipSelf */])()),
        __metadata("design:paramtypes", [BrokerageModule])
    ], BrokerageModule);
    return BrokerageModule;
    var BrokerageModule_1;
}());

//# sourceMappingURL=brokerage.module.js.map

/***/ }),

/***/ "../../../../../src/app/business-layer/brokerage/consumers/ngrx.broker.consumer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NGRxBrokerConsumer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pubsub_broker_models_broker_response_model__ = __webpack_require__("../../../../../src/app/business-layer/pubsub-broker/models/broker.response.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_stubs_index__ = __webpack_require__("../../../../../src/app/business-layer/brokerage/ngrx-stubs/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NGRxBrokerConsumer = /** @class */ (function () {
    function NGRxBrokerConsumer(brokerGridStore) {
        this.brokerGridStore = brokerGridStore;
    }
    NGRxBrokerConsumer.prototype.ReceiveBrokerAction = function (brokerAction) {
        switch (brokerAction.brokerType) {
            case this.brokerGridStore.brokerLabel:
                this.brokerGridStore.dispatchAction(brokerAction);
                break;
        }
    };
    NGRxBrokerConsumer.prototype.ReceivedBrokerSelectorRequest = function (brokerType) {
        var brokerResponse = new __WEBPACK_IMPORTED_MODULE_1__pubsub_broker_models_broker_response_model__["a" /* BrokerResponse */]();
        switch (brokerType) {
            case this.brokerGridStore.brokerLabel:
                brokerResponse.brokerRequested = this.brokerGridStore.getComponentSupplies();
                break;
        }
        return brokerResponse;
    };
    NGRxBrokerConsumer = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_stubs_index__["b" /* BrokerGridStore */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_stubs_index__["b" /* BrokerGridStore */]) === "function" && _a || Object])
    ], NGRxBrokerConsumer);
    return NGRxBrokerConsumer;
    var _a;
}());

//# sourceMappingURL=ngrx.broker.consumer.js.map

/***/ }),

/***/ "../../../../../src/app/business-layer/brokerage/ngrx-stubs/broker.grid.store.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrokerGridStore; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pubsub_broker_services_broker_action_builder__ = __webpack_require__("../../../../../src/app/business-layer/pubsub-broker/services/broker.action.builder.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_layer_ngrx_data_reducers_index__ = __webpack_require__("../../../../../src/app/data-layer/ngrx-data/reducers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__data_layer_ngrx_data_actions_properties_actions__ = __webpack_require__("../../../../../src/app/data-layer/ngrx-data/actions/properties.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_types_actions_properties_action_types__ = __webpack_require__("../../../../../src/app/business-layer/shared-types/actions/properties.action.types.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__brokerlist__ = __webpack_require__("../../../../../src/app/business-layer/brokerage/ngrx-stubs/brokerlist.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var BrokerGridStore = /** @class */ (function () {
    function BrokerGridStore(store, brkrActnBuilder) {
        this.store = store;
        this.brkrActnBuilder = brkrActnBuilder;
        this.brokerLabel = __WEBPACK_IMPORTED_MODULE_6__brokerlist__["a" /* BrokerList */].BROKER_GRID_STORE;
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__data_layer_ngrx_data_actions_properties_actions__["a" /* GetPropertiesCollection */]());
    }
    BrokerGridStore.prototype.getComponentSupplies = function () {
        return Object.assign({
            brokerLabel: this.brokerLabel,
            storeObs: {
                brokerProperties: this.store.select(__WEBPACK_IMPORTED_MODULE_3__data_layer_ngrx_data_reducers_index__["a" /* getCurrentCollectionProperties */])
            },
            storeDsp: {
                UPDATE_PROPERTY_IN_COLLECTION_ATTEMPT: this.brkrActnBuilder.create(__WEBPACK_IMPORTED_MODULE_5__shared_types_actions_properties_action_types__["UPDATE_PROPERTY_IN_COLLECTION_ATTEMPT"], this.brokerLabel, null)
            }
        });
    };
    BrokerGridStore.prototype.dispatchAction = function (brokerAction) {
        switch (brokerAction.actionType) {
            case __WEBPACK_IMPORTED_MODULE_5__shared_types_actions_properties_action_types__["UPDATE_PROPERTY_IN_COLLECTION_ATTEMPT"]:
                this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__data_layer_ngrx_data_actions_properties_actions__["c" /* UpdatePropertyAttempt */](brokerAction.payLoad));
                break;
        }
    };
    BrokerGridStore = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__pubsub_broker_services_broker_action_builder__["a" /* BrokerActionBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__pubsub_broker_services_broker_action_builder__["a" /* BrokerActionBuilder */]) === "function" && _b || Object])
    ], BrokerGridStore);
    return BrokerGridStore;
    var _a, _b;
}());

//# sourceMappingURL=broker.grid.store.js.map

/***/ }),

/***/ "../../../../../src/app/business-layer/brokerage/ngrx-stubs/brokerlist.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrokerList; });
var BrokerList = Object.assign({
    BROKER_GRID_STORE: 'BrokerGridStore'
});
//# sourceMappingURL=brokerlist.js.map

/***/ }),

/***/ "../../../../../src/app/business-layer/brokerage/ngrx-stubs/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BROKER_PROVIDERS; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__broker_grid_store__ = __webpack_require__("../../../../../src/app/business-layer/brokerage/ngrx-stubs/broker.grid.store.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__broker_grid_store__["a"]; });

var BROKER_PROVIDERS = [
    __WEBPACK_IMPORTED_MODULE_0__broker_grid_store__["a" /* BrokerGridStore */]
];

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/business-layer/brokerage/registries/ngrx.broker.registration.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NGRxBrokerRegistrationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pubsub_broker_outlet_broker_publisher__ = __webpack_require__("../../../../../src/app/business-layer/pubsub-broker/outlet/broker.publisher.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__consumers_ngrx_broker_consumer__ = __webpack_require__("../../../../../src/app/business-layer/brokerage/consumers/ngrx.broker.consumer.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NGRxBrokerRegistrationService = /** @class */ (function () {
    function NGRxBrokerRegistrationService(ngrxBrokerConsumer, brokerPublisher) {
        this.ngrxBrokerConsumer = ngrxBrokerConsumer;
        this.brokerPublisher = brokerPublisher;
        this.brokerPublisher.RegisterBrokerConsumer(this.ngrxBrokerConsumer);
    }
    NGRxBrokerRegistrationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__consumers_ngrx_broker_consumer__["a" /* NGRxBrokerConsumer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__consumers_ngrx_broker_consumer__["a" /* NGRxBrokerConsumer */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__pubsub_broker_outlet_broker_publisher__["a" /* BrokerPublisher */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__pubsub_broker_outlet_broker_publisher__["a" /* BrokerPublisher */]) === "function" && _b || Object])
    ], NGRxBrokerRegistrationService);
    return NGRxBrokerRegistrationService;
    var _a, _b;
}());

//# sourceMappingURL=ngrx.broker.registration.service.js.map

/***/ }),

/***/ "../../../../../src/app/business-layer/helpers/data.structures.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataStructureServices; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by williestreeter on 10/22/17.
 */

var DataStructureServices = /** @class */ (function () {
    function DataStructureServices() {
        this.stateHash = Object.assign({}, { 'AL': 'Alabama',
            'AK': 'Alaska',
            'AS': 'American Samoa',
            'AZ': 'Arizona',
            'AR': 'Arkansas',
            'CA': 'California',
            'CO': 'Colorado',
            'CT': 'Connecticut',
            'DE': 'Delaware',
            'DC': 'District Of Columbia',
            'FM': 'Federated States Of Micronesia',
            'FL': 'Florida',
            'GA': 'Georgia',
            'GU': 'Guam',
            'HI': 'Hawaii',
            'ID': 'Idaho',
            'IL': 'Illinois',
            'IN': 'Indiana',
            'IA': 'Iowa',
            'KS': 'Kansas',
            'KY': 'Kentucky',
            'LA': 'Louisiana',
            'ME': 'Maine',
            'MH': 'Marshall Islands',
            'MD': 'Maryland',
            'MA': 'Massachusetts',
            'MI': 'Michigan',
            'MN': 'Minnesota',
            'MS': 'Mississippi',
            'MO': 'Missouri',
            'MT': 'Montana',
            'NE': 'Nebraska',
            'NV': 'Nevada',
            'NH': 'New Hampshire',
            'NJ': 'New Jersey',
            'NM': 'New Mexico',
            'NY': 'New York',
            'NC': 'North Carolina',
            'ND': 'North Dakota',
            'MP': 'Northern Mariana Islands',
            'OH': 'Ohio',
            'OK': 'Oklahoma',
            'OR': 'Oregon',
            'PW': 'Palau',
            'PA': 'Pennsylvania',
            'PR': 'Puerto Rico',
            'RI': 'Rhode Island',
            'SC': 'South Carolina',
            'SD': 'South Dakota',
            'TN': 'Tennessee',
            'TX': 'Texas',
            'UT': 'Utah',
            'VT': 'Vermont',
            'VI': 'Virgin Islands',
            'VA': 'Virginia',
            'WA': 'Washington',
            'WV': 'West Virginia',
            'WI': 'Wisconsin',
            'WY': 'Wyoming'
        });
    }
    DataStructureServices.prototype.createPropertiesModels = function (propertyData) {
        var _this = this;
        var propertyModels = [];
        propertyData.forEach(function (element) {
            var propModel = _this.buildPropertyModelFromRaw(element);
            propertyModels.push(propModel);
        });
        return propertyModels;
    };
    DataStructureServices.prototype.buildPropertyModelElement = function (element) {
        var zeros = 0;
        var monthlyRent = element.monthlyRent ?
            element.monthlyRent.toFixed(2) : zeros.toFixed(2);
        var listPrice = element.listPrice ?
            element.listPrice.toFixed(2) : zeros.toFixed(2);
        var address1 = element.address1;
        var city = element.city;
        var county = element.county;
        var country = element.country;
        var district = element.district;
        var state = element.state;
        var yearBuilt = element.yearBuilt;
        var propModel = {};
        propModel.id = element.id;
        // address.address1
        propModel.address1 = address1;
        // address.city
        propModel.city = city;
        // address.county
        propModel.county = county;
        // address.country
        propModel.country = country;
        // address.district
        propModel.district = district;
        // address.state
        propModel.state = state;
        // address.zip
        propModel.zip = element.zip;
        // address.zipPlus4
        propModel.zipPlus4 = element.zipPlus4;
        // combined
        propModel.addressCombined = address1 + ' ' + city + ' ' +
            county + ' ' + state + ' ' +
            element.zip + ' ' + country;
        // physical.yearBuilt
        propModel.yearBuilt = yearBuilt;
        // financial.listPrice
        propModel.listPrice = listPrice;
        // financial.monthlyRent
        propModel.monthlyRent = monthlyRent;
        // combined
        propModel.grossYield = this.computeGrossYield(listPrice, monthlyRent);
        return propModel;
    };
    DataStructureServices.prototype.buildPropertyModelFromRaw = function (element) {
        var zeros = 0;
        var monthlyRent = element.financial && element.financial.monthlyRent ?
            element.financial.monthlyRent.toFixed(2) : zeros.toFixed(2);
        var listPrice = element.financial && element.financial.listPrice ?
            element.financial.listPrice.toFixed(2) : zeros.toFixed(2);
        var address1 = element.address.address1 ? element.address.address1 : '';
        var city = element.address.city ? element.address.city : '';
        var county = element.address.county ? element.address.county : '';
        var country = element.address.country ? element.address.country : '';
        var district = element.address.district ? element.address.district : '';
        var state = element.address.state ? element.address.state : '';
        var yearBuilt = element.physical ? element.physical.yearBuilt : 0;
        var propModel = {};
        propModel.id = element.id;
        // address.address1
        propModel.address1 = address1.trim();
        // address.city
        propModel.city = city.trim();
        // address.county
        propModel.county = county.trim();
        // address.country
        propModel.country = country.trim();
        // address.district
        propModel.district = district.trim();
        // address.state
        propModel.state = state;
        // address.zip
        propModel.zip = element.address.zip.trim();
        // address.zipPlus4
        propModel.zipPlus4 = element.address.zipPlus4;
        // combined
        propModel.addressCombined = address1 + ' ' + city + ' ' +
            county + ' ' + state + ' ' +
            element.address.zip + ' ' + country;
        // physical.yearBuilt
        propModel.yearBuilt = yearBuilt;
        // financial.listPrice
        propModel.listPrice = listPrice;
        // financial.monthlyRent
        propModel.monthlyRent = monthlyRent;
        // combined
        propModel.grossYield = this.computeGrossYield(listPrice, monthlyRent);
        return propModel;
    };
    DataStructureServices.prototype.getStatesHash = function () {
        return this.stateHash;
    };
    DataStructureServices.prototype.computeGrossYield = function (listPrice, monthlyRent) {
        if ((listPrice / 1) === 0 || (monthlyRent / 1) === 0) {
            return 0;
        }
        else {
            return parseFloat((monthlyRent * 12 / listPrice).toFixed(4));
        }
    };
    DataStructureServices.prototype.buildNumberWithFixed = function (value, index) {
        var numStr = parseFloat(value).toFixed(index);
        return parseFloat(numStr);
    };
    DataStructureServices = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], DataStructureServices);
    return DataStructureServices;
}());

//# sourceMappingURL=data.structures.service.js.map

/***/ }),

/***/ "../../../../../src/app/business-layer/models/error.model.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=error.model.js.map

/***/ }),

/***/ "../../../../../src/app/business-layer/models/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__error_model__ = __webpack_require__("../../../../../src/app/business-layer/models/error.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__error_model___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__error_model__);
/* unused harmony reexport ErrorModel */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__property_model__ = __webpack_require__("../../../../../src/app/business-layer/models/property.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__property_model___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__property_model__);
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__property_model__, "PropertyModel")) __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__property_model__["PropertyModel"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__propertyCollection_model__ = __webpack_require__("../../../../../src/app/business-layer/models/propertyCollection.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__propertyCollection_model___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__propertyCollection_model__);
/* unused harmony reexport PropertyCollectionModel */



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/business-layer/models/property.model.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=property.model.js.map

/***/ }),

/***/ "../../../../../src/app/business-layer/models/propertyCollection.model.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=propertyCollection.model.js.map

/***/ }),

/***/ "../../../../../src/app/business-layer/pubsub-broker/models/broker.action.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrokerAction; });
var BrokerAction = /** @class */ (function () {
    function BrokerAction() {
    }
    return BrokerAction;
}());

//# sourceMappingURL=broker.action.model.js.map

/***/ }),

/***/ "../../../../../src/app/business-layer/pubsub-broker/models/broker.response.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrokerResponse; });
var BrokerResponse = /** @class */ (function () {
    function BrokerResponse() {
    }
    return BrokerResponse;
}());

//# sourceMappingURL=broker.response.model.js.map

/***/ }),

/***/ "../../../../../src/app/business-layer/pubsub-broker/outlet/abstract.broker.trader.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbstractBrokerTrader; });
var AbstractBrokerTrader = /** @class */ (function () {
    function AbstractBrokerTrader() {
        this._consumers = [];
    }
    // The RegisterBrokderConsumer and RemoveConsumer are fully implemented.
    // Once registered, the consumer will be notified of any changes in state.
    AbstractBrokerTrader.prototype.RegisterBrokerConsumer = function (consumer) {
        this._consumers.push(consumer);
    };
    // Give the consumer a way to de-register
    AbstractBrokerTrader.prototype.RemoveBrokerConsumer = function (consumer) {
        var i = this._consumers.length;
        while (i--) {
            if (this._consumers[i] === consumer) {
                this._consumers.splice(i, 1);
            } // if we found it.
        }
    };
    return AbstractBrokerTrader;
}());

//# sourceMappingURL=abstract.broker.trader.js.map

/***/ }),

/***/ "../../../../../src/app/business-layer/pubsub-broker/outlet/broker.publisher.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrokerPublisher; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__abstract_broker_trader__ = __webpack_require__("../../../../../src/app/business-layer/pubsub-broker/outlet/abstract.broker.trader.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BrokerPublisher = /** @class */ (function (_super) {
    __extends(BrokerPublisher, _super);
    function BrokerPublisher() {
        return _super.call(this) || this;
    }
    // This overrides the empty NotifyObservers() in the base class.
    BrokerPublisher.prototype.NotifyBrokerActionConsumers = function (brokerAction) {
        this._consumers[0].ReceiveBrokerAction(brokerAction);
    };
    BrokerPublisher.prototype.NotifyBrokerSelectorConsumer = function (brokerRequest) {
        return this._consumers[0].ReceivedBrokerSelectorRequest(brokerRequest);
    };
    BrokerPublisher = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], BrokerPublisher);
    return BrokerPublisher;
}(__WEBPACK_IMPORTED_MODULE_1__abstract_broker_trader__["a" /* AbstractBrokerTrader */]));

//# sourceMappingURL=broker.publisher.js.map

/***/ }),

/***/ "../../../../../src/app/business-layer/pubsub-broker/pubsub.broker.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PubSubBrokerModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_broker_action_builder__ = __webpack_require__("../../../../../src/app/business-layer/pubsub-broker/services/broker.action.builder.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_broker_dispatcher_service__ = __webpack_require__("../../../../../src/app/business-layer/pubsub-broker/services/broker.dispatcher.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__outlet_broker_publisher__ = __webpack_require__("../../../../../src/app/business-layer/pubsub-broker/outlet/broker.publisher.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var PubSubBrokerModule = /** @class */ (function () {
    function PubSubBrokerModule(parentModule) {
        if (parentModule) {
            throw new Error('PubSubBroker already loaded; Import in root module only.');
        }
    }
    PubSubBrokerModule_1 = PubSubBrokerModule;
    PubSubBrokerModule.forRoot = function () {
        return {
            ngModule: PubSubBrokerModule_1,
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_broker_action_builder__["a" /* BrokerActionBuilder */],
                __WEBPACK_IMPORTED_MODULE_3__services_broker_dispatcher_service__["a" /* BrokerDispatcherService */],
                __WEBPACK_IMPORTED_MODULE_4__outlet_broker_publisher__["a" /* BrokerPublisher */]]
        };
    };
    PubSubBrokerModule = PubSubBrokerModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_broker_action_builder__["a" /* BrokerActionBuilder */],
                __WEBPACK_IMPORTED_MODULE_3__services_broker_dispatcher_service__["a" /* BrokerDispatcherService */],
                __WEBPACK_IMPORTED_MODULE_4__outlet_broker_publisher__["a" /* BrokerPublisher */]]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Optional */])()), __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* SkipSelf */])()),
        __metadata("design:paramtypes", [PubSubBrokerModule])
    ], PubSubBrokerModule);
    return PubSubBrokerModule;
    var PubSubBrokerModule_1;
}());

//# sourceMappingURL=pubsub.broker.module.js.map

/***/ }),

/***/ "../../../../../src/app/business-layer/pubsub-broker/services/broker.action.builder.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrokerActionBuilder; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_broker_action_model__ = __webpack_require__("../../../../../src/app/business-layer/pubsub-broker/models/broker.action.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var BrokerActionBuilder = /** @class */ (function () {
    function BrokerActionBuilder() {
    }
    BrokerActionBuilder.prototype.create = function (actionType, brokerType, payLoad) {
        var brokerAction = new __WEBPACK_IMPORTED_MODULE_1__models_broker_action_model__["a" /* BrokerAction */]();
        brokerAction.actionType = actionType;
        brokerAction.brokerType = brokerType;
        brokerAction.payLoad = payLoad;
        return brokerAction;
    };
    BrokerActionBuilder = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
    ], BrokerActionBuilder);
    return BrokerActionBuilder;
}());

//# sourceMappingURL=broker.action.builder.js.map

/***/ }),

/***/ "../../../../../src/app/business-layer/pubsub-broker/services/broker.dispatcher.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrokerDispatcherService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__outlet_broker_publisher__ = __webpack_require__("../../../../../src/app/business-layer/pubsub-broker/outlet/broker.publisher.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BrokerDispatcherService = /** @class */ (function () {
    function BrokerDispatcherService(brokerPublisher) {
        this.brokerPublisher = brokerPublisher;
    }
    // This overrides the empty NotifyObservers() in the base class.
    BrokerDispatcherService.prototype.dispatchBrokerAction = function (brokerAction) {
        this.brokerPublisher.NotifyBrokerActionConsumers(brokerAction);
    };
    BrokerDispatcherService.prototype.dispatchBrokerSelector = function (brokerType) {
        return this.brokerPublisher.NotifyBrokerSelectorConsumer(brokerType);
    };
    BrokerDispatcherService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__outlet_broker_publisher__["a" /* BrokerPublisher */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__outlet_broker_publisher__["a" /* BrokerPublisher */]) === "function" && _a || Object])
    ], BrokerDispatcherService);
    return BrokerDispatcherService;
    var _a;
}());

//# sourceMappingURL=broker.dispatcher.service.js.map

/***/ }),

/***/ "../../../../../src/app/business-layer/shared-types/actions/error.action.types.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REPORT_ERROR", function() { return REPORT_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_ERROR", function() { return REMOVE_ERROR; });
var REPORT_ERROR = '[ReportOccurenceOfError] error occured';
var REMOVE_ERROR = '[RemovePreviousError] remove previous error';
//# sourceMappingURL=error.action.types.js.map

/***/ }),

/***/ "../../../../../src/app/business-layer/shared-types/actions/properties.action.types.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_PROPERTIES_COLLECTION_ATTEMPT", function() { return FETCH_PROPERTIES_COLLECTION_ATTEMPT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_PROPERTIES_COLLECTION_SUCCESS", function() { return FETCH_PROPERTIES_COLLECTION_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_PROPERTIES_COLLECTION_FAILURE", function() { return FETCH_PROPERTIES_COLLECTION_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_PROPERTY_IN_COLLECTION_ATTEMPT", function() { return UPDATE_PROPERTY_IN_COLLECTION_ATTEMPT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_PROPERTY_IN_COLLECTION_SUCCESS", function() { return UPDATE_PROPERTY_IN_COLLECTION_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_PROPERTY_IN_COLLECTION_FAILURE", function() { return UPDATE_PROPERTY_IN_COLLECTION_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_PROPERTY_TO_COLLECTION_ATTEMPT", function() { return ADD_PROPERTY_TO_COLLECTION_ATTEMPT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_PROPERTY_TO_COLLECTION_SUCCESS", function() { return ADD_PROPERTY_TO_COLLECTION_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_PROPERTY_TO_COLLECTION_FAILURE", function() { return ADD_PROPERTY_TO_COLLECTION_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_SUBSET_OF_COLLECTION", function() { return SET_SUBSET_OF_COLLECTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_SUBSET_OF_COLLECTION", function() { return GET_SUBSET_OF_COLLECTION; });
var FETCH_PROPERTIES_COLLECTION_ATTEMPT = '[PropertiesActions] fetch properties from apiary api';
var FETCH_PROPERTIES_COLLECTION_SUCCESS = '[PropertiesActions] fetch properties from apiary success';
var FETCH_PROPERTIES_COLLECTION_FAILURE = '[PropertiesActions] fetch properties from apiary failure';
var UPDATE_PROPERTY_IN_COLLECTION_ATTEMPT = '[PropertiesActions] update a property to collection';
var UPDATE_PROPERTY_IN_COLLECTION_SUCCESS = '[PropertiesActions] update a property to collection success';
var UPDATE_PROPERTY_IN_COLLECTION_FAILURE = '[PropertiesActions] update a property to collection failure';
var ADD_PROPERTY_TO_COLLECTION_ATTEMPT = '[PropertiesActions] add a property to collection';
var ADD_PROPERTY_TO_COLLECTION_SUCCESS = '[PropertiesActions] add a property to collection success';
var ADD_PROPERTY_TO_COLLECTION_FAILURE = '[PropertiesActions] add a property to  collection failure';
var SET_SUBSET_OF_COLLECTION = '[PropertiesActions] set subset of property from collection';
var GET_SUBSET_OF_COLLECTION = '[PropertiesActions] get subset of property from collection';
//# sourceMappingURL=properties.action.types.js.map

/***/ }),

/***/ "../../../../../src/app/business-layer/validators/augmented.validator.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AugmentedValidators; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_augmented_wrapper_service__ = __webpack_require__("../../../../../src/app/business-layer/validators/services/augmented.wrapper.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validation_service__ = __webpack_require__("../../../../../src/app/business-layer/validators/services/validation.service.ts");

// const validatorNames = ['isAfter', 'isAlpha', 'isAlphanumeric', 'isAscii',  'isBase64', 'isBefore', 'isBoolean',
//   'isByteLength', 'isCreditCard', 'isCurrency', 'isDataUri', 'isDate', 'isDecimal', 'isEmail', 'isFloat',
//   'isFloat', 'isFQDN', 'isHexColor', 'isHexaDecimal', 'isInt', 'isIP', 'isISBN', 'isJSON', 'isLowerCase',
//   'isMacAddress', 'isNull', 'isNumeric', 'isUpperCase', 'isURL'];

var AugmentedValidators = {
    contains: Object(__WEBPACK_IMPORTED_MODULE_0__services_augmented_wrapper_service__["a" /* getParamValidator */])('contains'),
    equals: Object(__WEBPACK_IMPORTED_MODULE_0__services_augmented_wrapper_service__["a" /* getParamValidator */])('equals'),
    isAfter: Object(__WEBPACK_IMPORTED_MODULE_0__services_augmented_wrapper_service__["a" /* getParamValidator */])('isAfter'),
    isAlpha: Object(__WEBPACK_IMPORTED_MODULE_0__services_augmented_wrapper_service__["a" /* getParamValidator */])('isAlpha'),
    isAlphanumeric: Object(__WEBPACK_IMPORTED_MODULE_0__services_augmented_wrapper_service__["a" /* getParamValidator */])('isAlphanumeric'),
    isAscii: Object(__WEBPACK_IMPORTED_MODULE_0__services_augmented_wrapper_service__["a" /* getParamValidator */])('isAscii'),
    isBase64: Object(__WEBPACK_IMPORTED_MODULE_0__services_augmented_wrapper_service__["a" /* getParamValidator */])('isBase64'),
    isBefore: Object(__WEBPACK_IMPORTED_MODULE_0__services_augmented_wrapper_service__["a" /* getParamValidator */])('isBefore'),
    isBoolean: Object(__WEBPACK_IMPORTED_MODULE_0__services_augmented_wrapper_service__["a" /* getParamValidator */])('isBoolean'),
    isByteLength: Object(__WEBPACK_IMPORTED_MODULE_0__services_augmented_wrapper_service__["a" /* getParamValidator */])('isByteLength'),
    isCreditCard: Object(__WEBPACK_IMPORTED_MODULE_0__services_augmented_wrapper_service__["a" /* getParamValidator */])('isCreditCard'),
    isCurrency: Object(__WEBPACK_IMPORTED_MODULE_0__services_augmented_wrapper_service__["a" /* getParamValidator */])('isCurrency'),
    isDataURI: Object(__WEBPACK_IMPORTED_MODULE_0__services_augmented_wrapper_service__["a" /* getParamValidator */])('isDataURI'),
    isDate: Object(__WEBPACK_IMPORTED_MODULE_0__services_augmented_wrapper_service__["a" /* getParamValidator */])('isDate'),
    isDecimal: Object(__WEBPACK_IMPORTED_MODULE_0__services_augmented_wrapper_service__["a" /* getParamValidator */])('isDecimal'),
    isDivisibleBy: Object(__WEBPACK_IMPORTED_MODULE_0__services_augmented_wrapper_service__["a" /* getParamValidator */])('isDivisibleBy'),
    isEmail: Object(__WEBPACK_IMPORTED_MODULE_0__services_augmented_wrapper_service__["a" /* getParamValidator */])('isEmail'),
    isEmpty: Object(__WEBPACK_IMPORTED_MODULE_0__services_augmented_wrapper_service__["a" /* getParamValidator */])('isEmpty'),
    isFloat: Object(__WEBPACK_IMPORTED_MODULE_0__services_augmented_wrapper_service__["a" /* getParamValidator */])('isFloat'),
    isFQDN: Object(__WEBPACK_IMPORTED_MODULE_0__services_augmented_wrapper_service__["a" /* getParamValidator */])('isFQDN'),
    isFullWidth: Object(__WEBPACK_IMPORTED_MODULE_0__services_augmented_wrapper_service__["a" /* getParamValidator */])('isFullWidth'),
    isHexColor: Object(__WEBPACK_IMPORTED_MODULE_0__services_augmented_wrapper_service__["a" /* getParamValidator */])('isHexColor'),
    isHexaDecimal: Object(__WEBPACK_IMPORTED_MODULE_0__services_augmented_wrapper_service__["a" /* getParamValidator */])('isHexaDecimal'),
    isInt: Object(__WEBPACK_IMPORTED_MODULE_0__services_augmented_wrapper_service__["a" /* getParamValidator */])('isInt'),
    isIP: Object(__WEBPACK_IMPORTED_MODULE_0__services_augmented_wrapper_service__["a" /* getParamValidator */])('isIP'),
    isISBN: Object(__WEBPACK_IMPORTED_MODULE_0__services_augmented_wrapper_service__["a" /* getParamValidator */])('isISBN'),
    isISSN: Object(__WEBPACK_IMPORTED_MODULE_0__services_augmented_wrapper_service__["a" /* getParamValidator */])('isISSN'),
    isISIN: Object(__WEBPACK_IMPORTED_MODULE_0__services_augmented_wrapper_service__["a" /* getParamValidator */])('isISIN'),
    isISO8601: Object(__WEBPACK_IMPORTED_MODULE_0__services_augmented_wrapper_service__["a" /* getParamValidator */])('isISO8601'),
    isIn: Object(__WEBPACK_IMPORTED_MODULE_0__services_augmented_wrapper_service__["a" /* getParamValidator */])('isIn'),
    isJSON: Object(__WEBPACK_IMPORTED_MODULE_0__services_augmented_wrapper_service__["a" /* getParamValidator */])('isJSON'),
    isLength: Object(__WEBPACK_IMPORTED_MODULE_0__services_augmented_wrapper_service__["a" /* getParamValidator */])('isLength'),
    isLowerCase: Object(__WEBPACK_IMPORTED_MODULE_0__services_augmented_wrapper_service__["a" /* getParamValidator */])('isLowerCase'),
    isMACAddress: Object(__WEBPACK_IMPORTED_MODULE_0__services_augmented_wrapper_service__["a" /* getParamValidator */])('isMACAddress'),
    isMD5: Object(__WEBPACK_IMPORTED_MODULE_0__services_augmented_wrapper_service__["a" /* getParamValidator */])('isMD5'),
    isMobilePhone: Object(__WEBPACK_IMPORTED_MODULE_0__services_augmented_wrapper_service__["a" /* getParamValidator */])('isMobilePhone'),
    isMongoId: Object(__WEBPACK_IMPORTED_MODULE_0__services_augmented_wrapper_service__["a" /* getParamValidator */])('isMongoId'),
    isMultibyte: Object(__WEBPACK_IMPORTED_MODULE_0__services_augmented_wrapper_service__["a" /* getParamValidator */])('isMultibyte'),
    isNumeric: Object(__WEBPACK_IMPORTED_MODULE_0__services_augmented_wrapper_service__["a" /* getParamValidator */])('isNumeric'),
    isSurrogatePair: Object(__WEBPACK_IMPORTED_MODULE_0__services_augmented_wrapper_service__["a" /* getParamValidator */])('isSurrogatePair'),
    isUpperCase: Object(__WEBPACK_IMPORTED_MODULE_0__services_augmented_wrapper_service__["a" /* getParamValidator */])('isUpperCase'),
    isURL: Object(__WEBPACK_IMPORTED_MODULE_0__services_augmented_wrapper_service__["a" /* getParamValidator */])('isURL'),
    isUUID: Object(__WEBPACK_IMPORTED_MODULE_0__services_augmented_wrapper_service__["a" /* getParamValidator */])('isUUID'),
    isVariableWidth: Object(__WEBPACK_IMPORTED_MODULE_0__services_augmented_wrapper_service__["a" /* getParamValidator */])('isVariableWidth'),
    isWhiteListed: Object(__WEBPACK_IMPORTED_MODULE_0__services_augmented_wrapper_service__["a" /* getParamValidator */])('isWhiteListed'),
    matches: Object(__WEBPACK_IMPORTED_MODULE_0__services_augmented_wrapper_service__["a" /* getParamValidator */])('matches'),
    //custom
    alphaWithSpaces: __WEBPACK_IMPORTED_MODULE_1__services_validation_service__["a" /* ValidationService */].alphaWithSpacesValidator(),
    alphaNumericWithSpaces: __WEBPACK_IMPORTED_MODULE_1__services_validation_service__["a" /* ValidationService */].alphaNumericWithSpacesValidator(),
    numericFloat: __WEBPACK_IMPORTED_MODULE_1__services_validation_service__["a" /* ValidationService */].numericFloatValidator()
};
//# sourceMappingURL=augmented.validator.js.map

/***/ }),

/***/ "../../../../../src/app/business-layer/validators/services/augmented.wrapper.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getParamValidator;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_validator__ = __webpack_require__("../../../../validator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_validator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_validator__);

/**
 * Wrapper for calling validator js functions
 *
 * @param {any} name name of the validator to be called e.g isEmail
 * @param {any} value value passed from the abstract control
 * @param {any} options optional parameters
 * @returns
 */
var getValidator = function (name, value, options) {
    if (options) {
        return __WEBPACK_IMPORTED_MODULE_0_validator__[name](value, options) ? null : (_a = {},
            _a[name] = {
                valid: false
            },
            _a);
    }
    return __WEBPACK_IMPORTED_MODULE_0_validator__[name](value) ? null : (_b = {},
        _b[name] = {
            valid: false
        },
        _b);
    var _a, _b;
};
/**
 * Gets the validators with parameter.
 * Parameters are optional since some validators do not require them
 *
 * @export
 * @param {string} name name of the validator
 * @returns angular form validator
 */
/**
 *
 *
 * @export
 * @param {string} name
 * @returns
 */
function getParamValidator(name) {
    return function (options) {
        return function (c) {
            return getValidator(name, c.value, options);
        };
    };
}
//# sourceMappingURL=augmented.wrapper.service.js.map

/***/ }),

/***/ "../../../../../src/app/business-layer/validators/services/validation.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidationService; });
var ValidationService = /** @class */ (function () {
    function ValidationService() {
    }
    ValidationService.getValidatorErrorMessage = function (validatorName, validatorValue) {
        var config = {
            'required': 'Required',
            'isAlphanWhtSpc': 'Only Alpha, WhiteSpaces, characters.',
            'isAlphaNumericWhtSpc': 'Only Alpha, Numerical, WhiteSpaces, characters.',
            'isAlphanumeric': 'Only Alpha and Numerical characters.',
            'isAlpha': 'Only Alpha characters.',
            'isNumericalFloat': 'Only Numerical characters and single decimal.',
            'minlength': "Minimum length " + validatorValue.requiredLength,
            'maxlength': "Maximum length " + validatorValue.requiredLength
        };
        return config[validatorName];
    };
    ValidationService.numericFloatValidator = function () {
        // {6,100}           - Assert password is between 6 and 100 characters
        // (?=.*[0-9])       - Assert a string has at least one number
        return function (options) {
            return function (c) {
                if (c.value === null || c.value.length === 0) {
                    return null;
                }
                var regexStr = '^[0-9]+([.][0-9]+)*$';
                var regex = new RegExp(regexStr);
                if (regex.test(c.value)) {
                    return null;
                }
                else {
                    return { 'isNumericalFloat': true };
                }
            };
        };
    };
    ValidationService.alphaWithSpacesValidator = function () {
        return function (options) {
            return function (c) {
                if (c.value === null || c.value.length === 0) {
                    return null;
                }
                var regexStr = '^[A-Za-z- ]*[A-Za-z][A-Za-z- ]*$';
                var regex = new RegExp(regexStr);
                if (regex.test(c.value)) {
                    return null;
                }
                else {
                    return { 'isAlphanWhtSpc': true };
                }
            };
        };
    };
    ValidationService.alphaNumericWithSpacesValidator = function () {
        return function (options) {
            return function (c) {
                if (c.value === null || c.value.length === 0) {
                    return null;
                }
                var regexStr = '^[A-Za-z0-9- ]*[A-Za-z0-9][A-Za-z0-9- ]*$';
                var regex = new RegExp(regexStr);
                if (regex.test(c.value)) {
                    return null;
                }
                else {
                    return { 'isAlphaNumericWhtSpc': true };
                }
            };
        };
    };
    return ValidationService;
}());

//# sourceMappingURL=validation.service.js.map

/***/ }),

/***/ "../../../../../src/app/data-layer/api-services/http.wrapper.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpWrapperService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HttpWrapperService = /** @class */ (function () {
    /*
     These are the methods that are used in the additional api-services,
     where otherwise they would require importing angular 2 http module.
     This keeps the api-services DRY, easier to test, and scalable.
     */
    function HttpWrapperService(http) {
        this.http = http;
    }
    HttpWrapperService.prototype.delete = function (params) {
        var _a = this.configRequest(params.uri), apiUrl = _a.apiUrl, options = _a.options;
        return this.http.get(apiUrl, options)
            .map(function (data) { return ({
            type: params.successActionType,
            payload: data
        }); }, function (err) { return (function (data) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].of({
            type: params.errorActionType,
            payload: {
                action_type: params.specificErrorType,
                message: data.error
            }
        }); }); });
    };
    HttpWrapperService.prototype.get = function (params) {
        var _a = this.configRequest(params.uri), apiUrl = _a.apiUrl, options = _a.options;
        //return this.http.get('http://dev1-sample.azurewebsites.net/properties.json', options)
        return this.http.get(apiUrl, options)
            .map(function (data) { return ({
            type: params.successActionType,
            payload: data
        }); }, function (err) { return (function (data) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].of({
            type: params.errorActionType,
            payload: {
                action_type: params.specificErrorType,
                message: data.error
            }
        }); }); });
    };
    HttpWrapperService.prototype.post = function (params) {
        var _a = this.configRequest(params.uri), apiUrl = _a.apiUrl, options = _a.options;
        return this.http.post(apiUrl, params.payload, options)
            .map(function (data) { return ({
            type: params.successActionType,
            payload: data
        }); }, function (err) { return (function (data) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].of({
            type: params.errorActionType,
            payload: {
                action_type: params.specificErrorType,
                message: data.error
            }
        }); }); });
    };
    HttpWrapperService.prototype.put = function (params) {
        var _a = this.configRequest(params.uri), apiUrl = _a.apiUrl, options = _a.options;
        return this.http.put(apiUrl, params.payload, options)
            .map(function (data) { return ({
            type: params.successActionType,
            payload: data
        }); }, function (err) { return (function (data) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].of({
            type: params.errorActionType,
            payload: {
                action_type: params.specificErrorType,
                message: data.error
            }
        }); }); });
    };
    HttpWrapperService.prototype.configRequest = function (uri) {
        // console.log('HttpWrapperService -- configRequest uri=', uri)
        var apiUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production === true ? __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].HOST + "/" + uri : __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].HOST + "/" + uri;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]().set('Content-Type', 'application/json');
        var options = { headers: headers };
        return { apiUrl: apiUrl, options: options };
    };
    HttpWrapperService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object])
    ], HttpWrapperService);
    return HttpWrapperService;
    var _a;
}());

//# sourceMappingURL=http.wrapper.service.js.map

/***/ }),

/***/ "../../../../../src/app/data-layer/api-services/mock/property.clone.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Property; });
var Property = /** @class */ (function () {
    function Property(values) {
        if (values === void 0) { values = {}; }
        Object.assign(this, values);
    }
    return Property;
}());

//# sourceMappingURL=property.clone.js.map

/***/ }),

/***/ "../../../../../src/app/data-layer/api-services/mock/property.in.mem.data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PropertyInMemDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_in_memory_web_api_http_status_codes__ = __webpack_require__("../../../../angular-in-memory-web-api/http-status-codes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_delay__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/delay.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__property_clone__ = __webpack_require__("../../../../../src/app/data-layer/api-services/mock/property.clone.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by willstreeter on 9/19/17.
 */




var PropertyInMemDataService = /** @class */ (function () {
    function PropertyInMemDataService() {
        this.urlReturnData = {
            "properties": [
                {
                    "id": 1625006,
                    "accountId": 100213,
                    "buyerAccountId": null,
                    "buyerUserId": null,
                    "externalId": null,
                    "programId": null,
                    "isDwellCertified": false,
                    "isAllowOffer": false,
                    "isAllowPreview": false,
                    "isFeatured": false,
                    "isRentGuaranteed": false,
                    "allowRentGuaranteedOptout": false,
                    "isSecuritized": false,
                    "isHot": true,
                    "isNew": false,
                    "isBargain": false,
                    "isDiligenceVaultUnlocked": false,
                    "isPropertyManagerOfferRetain": false,
                    "isHoa": false,
                    "hasAudio": false,
                    "hasDiligenceVaultDocuments": true,
                    "market": 1007,
                    "daysOnMarket": 617,
                    "latitude": 37.7123300000000,
                    "longitude": -122.4511000000000,
                    "propertyName": null,
                    "description": "",
                    "highlights": null,
                    "mainImageUrl": "https://roofstock-cdn.azureedge.net/public/properties/1625006/photo/ef034b62-47e6-4d44-911c-54a5f3c3270d_image_1387552138145_640.jpg",
                    "personalProperties": null,
                    "diligenceVaultSummary": null,
                    "featuredReason": null,
                    "status": "CertificationRejected",
                    "allowedFundingTypes": "All",
                    "allowableSaleTypes": "Individual, Bulk",
                    "visibility": "None",
                    "priceVisibility": "ShowPrice",
                    "propertyType": "Unspecified",
                    "certificationLevel": null,
                    "escrowClosingDate": null,
                    "address": {
                        "address1": "000-X Moneta Way",
                        "address2": "",
                        "city": "San Francisco",
                        "country": "USA",
                        "county": "test",
                        "district": null,
                        "state": "CA",
                        "zip": "94112",
                        "zipPlus4": null
                    },
                    "financial": {
                        "capRate": null,
                        "occupancy": "Occupied",
                        "isSection8": false,
                        "leaseStartDate": "2015-02-01T00:00:00",
                        "leaseEndDate": "2017-01-31T00:00:00",
                        "listPrice": 189000.00,
                        "salePrice": null,
                        "marketValue": null,
                        "monthlyHoa": null,
                        "monthlyManagementFees": null,
                        "monthlyRent": 1599.00,
                        "netYield": null,
                        "turnOverFee": null,
                        "rehabCosts": null,
                        "rehabDate": null,
                        "yearlyInsuranceCost": 600.00,
                        "yearlyPropertyTaxes": 8000.00,
                        "isCashOnly": false
                    },
                    "physical": {
                        "bathRooms": 2.5,
                        "bedRooms": 2.0,
                        "parcelNumber": "",
                        "isPool": false,
                        "lotSize": null,
                        "squareFeet": 1200,
                        "stories": null,
                        "units": null,
                        "yearBuilt": 1952,
                        "zipYearBuilt": null
                    },
                    "score": {
                        "conditionScore": null,
                        "crimeScore": "",
                        "neighborhoodScore": 4,
                        "overallScore": null,
                        "qualityScore": null,
                        "schoolScore": "",
                        "charterSchoolScore": "",
                        "floodRiskScore": "",
                        "walkabilityScore": null
                    },
                    "valuation": {
                        "avmBpoValue": null,
                        "avmBpoAdjValue": null,
                        "avmBpoDate": null,
                        "rsAvmValue": 200000.00,
                        "rsAvmDate": null,
                        "rsBpoMergeValue": null
                    },
                    "resources": {
                        "photos": [{
                                "id": 110007,
                                "guid": "ef034b62-47e6-4d44-911c-54a5f3c3270d",
                                "resourceType": "PropertyPhoto",
                                "isPublic": true,
                                "description": null,
                                "filename": "image_1387552138145_1280.jpg",
                                "sizeInByte": null,
                                "contentType": "image/jpeg",
                                "url": "https://roofstock-cdn.azureedge.net/public/properties/1625006/photo/ef034b62-47e6-4d44-911c-54a5f3c3270d_image_1387552138145_1280.jpg",
                                "urlMedium": "https://roofstock-cdn.azureedge.net/public/properties/1625006/photo/ef034b62-47e6-4d44-911c-54a5f3c3270d_image_1387552138145_640.jpg",
                                "urlSmall": "https://roofstock-cdn.azureedge.net/public/properties/1625006/photo/ef034b62-47e6-4d44-911c-54a5f3c3270d_image_1387552138145_320.jpg",
                                "textContent": null
                            }, {
                                "id": 110009,
                                "guid": "241378bb-4a9e-4715-9a54-570662f0c397",
                                "resourceType": "PropertyPhoto",
                                "isPublic": true,
                                "description": null,
                                "filename": "image_1387552141964_1280.jpg",
                                "sizeInByte": null,
                                "contentType": "image/jpeg",
                                "url": "https://roofstock-cdn.azureedge.net/public/properties/1625006/photo/241378bb-4a9e-4715-9a54-570662f0c397_image_1387552141964_1280.jpg",
                                "urlMedium": "https://roofstock-cdn.azureedge.net/public/properties/1625006/photo/241378bb-4a9e-4715-9a54-570662f0c397_image_1387552141964_640.jpg",
                                "urlSmall": "https://roofstock-cdn.azureedge.net/public/properties/1625006/photo/241378bb-4a9e-4715-9a54-570662f0c397_image_1387552141964_320.jpg",
                                "textContent": null
                            }, {
                                "id": 110011,
                                "guid": "edacfedc-e8c3-48b3-bbcd-2ab8a2dc913e",
                                "resourceType": "PropertyPhoto",
                                "isPublic": true,
                                "description": null,
                                "filename": "image_1387552143775_1280.jpg",
                                "sizeInByte": null,
                                "contentType": "image/jpeg",
                                "url": "https://roofstock-cdn.azureedge.net/public/properties/1625006/photo/edacfedc-e8c3-48b3-bbcd-2ab8a2dc913e_image_1387552143775_1280.jpg",
                                "urlMedium": "https://roofstock-cdn.azureedge.net/public/properties/1625006/photo/edacfedc-e8c3-48b3-bbcd-2ab8a2dc913e_image_1387552143775_640.jpg",
                                "urlSmall": "https://roofstock-cdn.azureedge.net/public/properties/1625006/photo/edacfedc-e8c3-48b3-bbcd-2ab8a2dc913e_image_1387552143775_320.jpg",
                                "textContent": null
                            }, {
                                "id": 110013,
                                "guid": "cffaf6b7-0d88-4f5e-a7c1-2eea5a340b47",
                                "resourceType": "PropertyPhoto",
                                "isPublic": true,
                                "description": null,
                                "filename": "image_1387552146102_1280.jpg",
                                "sizeInByte": null,
                                "contentType": "image/jpeg",
                                "url": "https://roofstock-cdn.azureedge.net/public/properties/1625006/photo/cffaf6b7-0d88-4f5e-a7c1-2eea5a340b47_image_1387552146102_1280.jpg",
                                "urlMedium": "https://roofstock-cdn.azureedge.net/public/properties/1625006/photo/cffaf6b7-0d88-4f5e-a7c1-2eea5a340b47_image_1387552146102_640.jpg",
                                "urlSmall": "https://roofstock-cdn.azureedge.net/public/properties/1625006/photo/cffaf6b7-0d88-4f5e-a7c1-2eea5a340b47_image_1387552146102_320.jpg",
                                "textContent": null
                            }, {
                                "id": 110015,
                                "guid": "e5a38ffb-dff0-4404-a8c5-ec15a0d7e2b8",
                                "resourceType": "PropertyPhoto",
                                "isPublic": true,
                                "description": null,
                                "filename": "image_1387552150042_1280.jpg",
                                "sizeInByte": null,
                                "contentType": "image/jpeg",
                                "url": "https://roofstock-cdn.azureedge.net/public/properties/1625006/photo/e5a38ffb-dff0-4404-a8c5-ec15a0d7e2b8_image_1387552150042_1280.jpg",
                                "urlMedium": "https://roofstock-cdn.azureedge.net/public/properties/1625006/photo/e5a38ffb-dff0-4404-a8c5-ec15a0d7e2b8_image_1387552150042_640.jpg",
                                "urlSmall": "https://roofstock-cdn.azureedge.net/public/properties/1625006/photo/e5a38ffb-dff0-4404-a8c5-ec15a0d7e2b8_image_1387552150042_320.jpg",
                                "textContent": null
                            }, {
                                "id": 110017,
                                "guid": "bb9b2c88-6ee1-42ff-8260-e98ebd5bcd3c",
                                "resourceType": "PropertyPhoto",
                                "isPublic": true,
                                "description": null,
                                "filename": "image_1387552150575_1280.jpg",
                                "sizeInByte": null,
                                "contentType": "image/jpeg",
                                "url": "https://roofstock-cdn.azureedge.net/public/properties/1625006/photo/bb9b2c88-6ee1-42ff-8260-e98ebd5bcd3c_image_1387552150575_1280.jpg",
                                "urlMedium": "https://roofstock-cdn.azureedge.net/public/properties/1625006/photo/bb9b2c88-6ee1-42ff-8260-e98ebd5bcd3c_image_1387552150575_640.jpg",
                                "urlSmall": "https://roofstock-cdn.azureedge.net/public/properties/1625006/photo/bb9b2c88-6ee1-42ff-8260-e98ebd5bcd3c_image_1387552150575_320.jpg",
                                "textContent": null
                            }
                        ],
                        "floorPlans": [{
                                "id": 110005,
                                "guid": "11d6adae-5cd3-4f26-b25c-f9e7a86e7d29",
                                "resourceType": "PropertyFloorPlan",
                                "isPublic": true,
                                "description": null,
                                "filename": "215 Chiquita Cape Coral - no logo_1280.jpg",
                                "sizeInByte": null,
                                "contentType": "image/jpeg",
                                "url": "https://roofstock-cdn.azureedge.net/public/properties/1625006/photo/11d6adae-5cd3-4f26-b25c-f9e7a86e7d29_215_Chiquita_Cape_Coral_-_no_logo_1280.jpg",
                                "urlMedium": "https://roofstock-cdn.azureedge.net/public/properties/1625006/photo/11d6adae-5cd3-4f26-b25c-f9e7a86e7d29_215_Chiquita_Cape_Coral_-_no_logo_640.jpg",
                                "urlSmall": "https://roofstock-cdn.azureedge.net/public/properties/1625006/photo/11d6adae-5cd3-4f26-b25c-f9e7a86e7d29_215_Chiquita_Cape_Coral_-_no_logo_320.jpg",
                                "textContent": null
                            }
                        ],
                        "threeDRenderings": [],
                        "audios": []
                    },
                    "manager": null,
                    "seller": null,
                    "sellerBroker": null,
                    "hoa": null,
                    "lease": {
                        "leaseSummary": {
                            "occupancy": "Occupied",
                            "leasingStatus": null,
                            "marketedRent": null,
                            "paymentStatus": null,
                            "leaseStartDate": "2015-02-01T00:00:00",
                            "leaseEndDate": "2017-01-31T00:00:00",
                            "monthlyRent": 1599.00,
                            "securityDepositAmount": null,
                            "hasPet": null,
                            "petFeeAmount": null,
                            "isPetsDeposit": false,
                            "petsDepositAmount": null,
                            "isLeaseConcessions": false,
                            "isRentersInsuranceRequired": false,
                            "isSection8": false,
                            "isTenantBackgroundChecked": false,
                            "isTenantIncomeAbove3x": false,
                            "isTenantMayTerminateEarly": null,
                            "isTenantPurchaseOption": null
                        },
                        "utilitiesOwnership": {
                            "electric": "Unspecified",
                            "gas": "Unspecified",
                            "water": "Unspecified",
                            "garbage": "Unspecified",
                            "pool": "Unspecified",
                            "landscaping": "Unspecified",
                            "pestControl": "Unspecified"
                        },
                        "applianceOwnership": {
                            "refrigerator": "Unspecified",
                            "dishwasher": "Unspecified",
                            "washer": "Unspecified",
                            "dryer": "Unspecified",
                            "microwave": "Unspecified",
                            "stove": "Unspecified"
                        }
                    },
                    "diligences": [],
                    "googleMapOption": {
                        "hasStreetView": true,
                        "povHeading": 335,
                        "povPitch": 0,
                        "povLatitude": 37.7127533000000,
                        "povLongitude": -122.4489656000000
                    },
                    "inspectionType": null
                },
                {
                    "id": 1625007,
                    "accountId": 100214,
                    "buyerAccountId": 100247,
                    "buyerUserId": 100350,
                    "externalId": null,
                    "programId": null,
                    "isDwellCertified": false,
                    "isAllowOffer": false,
                    "isAllowPreview": false,
                    "isFeatured": false,
                    "isRentGuaranteed": false,
                    "allowRentGuaranteedOptout": false,
                    "isSecuritized": false,
                    "isHot": true,
                    "isNew": false,
                    "isBargain": false,
                    "isDiligenceVaultUnlocked": false,
                    "isPropertyManagerOfferRetain": false,
                    "isHoa": false,
                    "hasAudio": false,
                    "hasDiligenceVaultDocuments": true,
                    "market": 1001,
                    "daysOnMarket": 56,
                    "latitude": 28.0102200000000,
                    "longitude": -80.6594500000000,
                    "propertyName": null,
                    "description": "\r\n* List price is approximately 60% of peak value from late 2006\r\n* Estimated market rent is $165/month above current rent\r\n* 10 miles from Florida Institute of Technology & 15 miles from Melbourne Beach\r\n",
                    "highlights": null,
                    "mainImageUrl": "https://roofstock-cdn.azureedge.net/public/properties/1625007/photo/93c9795a-54db-4bca-8d53-2e021b5d64fb_1-_Front_640.jpg",
                    "personalProperties": null,
                    "diligenceVaultSummary": "<ul><li>Property Valuation:<br/>$117,000</li><li>Estimated Market Rent: $1,150</li><li>Inspection Report:<br/>Estimated Repairs: $1,100</li></ul>",
                    "featuredReason": null,
                    "status": "Sold",
                    "allowedFundingTypes": "All",
                    "allowableSaleTypes": "Individual, Bulk",
                    "visibility": "Public",
                    "priceVisibility": "ShowPrice",
                    "propertyType": "Unspecified",
                    "certificationLevel": "Certified",
                    "escrowClosingDate": "2016-03-06T00:00:00Z",
                    "address": {
                        "address1": "524 Burlington Avenue NE",
                        "address2": null,
                        "city": "Palm Bay",
                        "country": "USA",
                        "county": null,
                        "district": null,
                        "state": "FL",
                        "zip": "32907",
                        "zipPlus4": null
                    },
                    "financial": {
                        "capRate": null,
                        "occupancy": "Occupied",
                        "isSection8": false,
                        "leaseStartDate": "2015-02-13T00:00:00",
                        "leaseEndDate": "2016-02-12T00:00:00",
                        "listPrice": 107000.00,
                        "salePrice": null,
                        "marketValue": null,
                        "monthlyHoa": null,
                        "monthlyManagementFees": null,
                        "monthlyRent": 895.00,
                        "netYield": null,
                        "turnOverFee": null,
                        "rehabCosts": null,
                        "rehabDate": null,
                        "yearlyInsuranceCost": 999.00,
                        "yearlyPropertyTaxes": 2349.00,
                        "isCashOnly": false
                    },
                    "physical": {
                        "bathRooms": 2.0,
                        "bedRooms": 4.0,
                        "parcelNumber": "28 3731FR001790001200",
                        "isPool": false,
                        "lotSize": 15681,
                        "squareFeet": 1512,
                        "stories": null,
                        "units": null,
                        "yearBuilt": 1980,
                        "zipYearBuilt": null
                    },
                    "score": {
                        "conditionScore": null,
                        "crimeScore": "B",
                        "neighborhoodScore": 4,
                        "overallScore": null,
                        "qualityScore": null,
                        "schoolScore": "B",
                        "charterSchoolScore": null,
                        "floodRiskScore": null,
                        "walkabilityScore": null
                    },
                    "valuation": {
                        "avmBpoValue": null,
                        "avmBpoAdjValue": null,
                        "avmBpoDate": null,
                        "rsAvmValue": 120000.00,
                        "rsAvmDate": null,
                        "rsBpoMergeValue": 117000.00
                    },
                    "resources": {
                        "photos": [{
                                "id": 122525,
                                "guid": "93c9795a-54db-4bca-8d53-2e021b5d64fb",
                                "resourceType": "PropertyPhoto",
                                "isPublic": true,
                                "description": null,
                                "filename": "1- Front_1280.jpg",
                                "sizeInByte": null,
                                "contentType": "image/jpeg",
                                "url": "https://roofstock-cdn.azureedge.net/public/properties/1625007/photo/93c9795a-54db-4bca-8d53-2e021b5d64fb_1-_Front_1280.jpg",
                                "urlMedium": "https://roofstock-cdn.azureedge.net/public/properties/1625007/photo/93c9795a-54db-4bca-8d53-2e021b5d64fb_1-_Front_640.jpg",
                                "urlSmall": "https://roofstock-cdn.azureedge.net/public/properties/1625007/photo/93c9795a-54db-4bca-8d53-2e021b5d64fb_1-_Front_320.jpg",
                                "textContent": null
                            }, {
                                "id": 122527,
                                "guid": "c4a11ed8-4aa7-4da8-b3ee-9e8e278bd2b1",
                                "resourceType": "PropertyPhoto",
                                "isPublic": true,
                                "description": null,
                                "filename": "2 - dinning room_1280.jpg",
                                "sizeInByte": null,
                                "contentType": "image/jpeg",
                                "url": "https://roofstock-cdn.azureedge.net/public/properties/1625007/photo/c4a11ed8-4aa7-4da8-b3ee-9e8e278bd2b1_2_-_dinning_room_1280.jpg",
                                "urlMedium": "https://roofstock-cdn.azureedge.net/public/properties/1625007/photo/c4a11ed8-4aa7-4da8-b3ee-9e8e278bd2b1_2_-_dinning_room_640.jpg",
                                "urlSmall": "https://roofstock-cdn.azureedge.net/public/properties/1625007/photo/c4a11ed8-4aa7-4da8-b3ee-9e8e278bd2b1_2_-_dinning_room_320.jpg",
                                "textContent": null
                            }, {
                                "id": 122529,
                                "guid": "78ac2c8b-391b-4431-a67b-6e07f9124a98",
                                "resourceType": "PropertyPhoto",
                                "isPublic": true,
                                "description": null,
                                "filename": "3 - living_1280.jpg",
                                "sizeInByte": null,
                                "contentType": "image/jpeg",
                                "url": "https://roofstock-cdn.azureedge.net/public/properties/1625007/photo/78ac2c8b-391b-4431-a67b-6e07f9124a98_3_-_living_1280.jpg",
                                "urlMedium": "https://roofstock-cdn.azureedge.net/public/properties/1625007/photo/78ac2c8b-391b-4431-a67b-6e07f9124a98_3_-_living_640.jpg",
                                "urlSmall": "https://roofstock-cdn.azureedge.net/public/properties/1625007/photo/78ac2c8b-391b-4431-a67b-6e07f9124a98_3_-_living_320.jpg",
                                "textContent": null
                            }, {
                                "id": 122531,
                                "guid": "dc8906b0-e6b0-4b71-b89f-8119f8e85ab3",
                                "resourceType": "PropertyPhoto",
                                "isPublic": true,
                                "description": null,
                                "filename": "4 - living room_1280.jpg",
                                "sizeInByte": null,
                                "contentType": "image/jpeg",
                                "url": "https://roofstock-cdn.azureedge.net/public/properties/1625007/photo/dc8906b0-e6b0-4b71-b89f-8119f8e85ab3_4_-_living_room_1280.jpg",
                                "urlMedium": "https://roofstock-cdn.azureedge.net/public/properties/1625007/photo/dc8906b0-e6b0-4b71-b89f-8119f8e85ab3_4_-_living_room_640.jpg",
                                "urlSmall": "https://roofstock-cdn.azureedge.net/public/properties/1625007/photo/dc8906b0-e6b0-4b71-b89f-8119f8e85ab3_4_-_living_room_320.jpg",
                                "textContent": null
                            }, {
                                "id": 122533,
                                "guid": "23775248-876a-424d-8c87-076ffb57f864",
                                "resourceType": "PropertyPhoto",
                                "isPublic": true,
                                "description": null,
                                "filename": "5 - 524 Burlington Ave NE (2)_1280.jpg",
                                "sizeInByte": null,
                                "contentType": "image/jpeg",
                                "url": "https://roofstock-cdn.azureedge.net/public/properties/1625007/photo/23775248-876a-424d-8c87-076ffb57f864_5_-_524_Burlington_Ave_NE_(2)_1280.jpg",
                                "urlMedium": "https://roofstock-cdn.azureedge.net/public/properties/1625007/photo/23775248-876a-424d-8c87-076ffb57f864_5_-_524_Burlington_Ave_NE_(2)_640.jpg",
                                "urlSmall": "https://roofstock-cdn.azureedge.net/public/properties/1625007/photo/23775248-876a-424d-8c87-076ffb57f864_5_-_524_Burlington_Ave_NE_(2)_320.jpg",
                                "textContent": null
                            }, {
                                "id": 122535,
                                "guid": "5b3ffc2c-e22c-4d1f-a885-f0d224cd9558",
                                "resourceType": "PropertyPhoto",
                                "isPublic": true,
                                "description": null,
                                "filename": "6 bathrm_1280.jpg",
                                "sizeInByte": null,
                                "contentType": "image/jpeg",
                                "url": "https://roofstock-cdn.azureedge.net/public/properties/1625007/photo/5b3ffc2c-e22c-4d1f-a885-f0d224cd9558_6_bathrm_1280.jpg",
                                "urlMedium": "https://roofstock-cdn.azureedge.net/public/properties/1625007/photo/5b3ffc2c-e22c-4d1f-a885-f0d224cd9558_6_bathrm_640.jpg",
                                "urlSmall": "https://roofstock-cdn.azureedge.net/public/properties/1625007/photo/5b3ffc2c-e22c-4d1f-a885-f0d224cd9558_6_bathrm_320.jpg",
                                "textContent": null
                            }
                        ],
                        "floorPlans": [{
                                "id": 118673,
                                "guid": "4cbef504-cb56-47ef-a0ce-868f49582a12",
                                "resourceType": "PropertyFloorPlan",
                                "isPublic": true,
                                "description": null,
                                "filename": "im-524-burlington_1280.jpg",
                                "sizeInByte": null,
                                "contentType": "image/jpeg",
                                "url": "https://roofstock-cdn.azureedge.net/public/properties/1625007/photo/4cbef504-cb56-47ef-a0ce-868f49582a12_im-524-burlington_1280.jpg",
                                "urlMedium": "https://roofstock-cdn.azureedge.net/public/properties/1625007/photo/4cbef504-cb56-47ef-a0ce-868f49582a12_im-524-burlington_640.jpg",
                                "urlSmall": "https://roofstock-cdn.azureedge.net/public/properties/1625007/photo/4cbef504-cb56-47ef-a0ce-868f49582a12_im-524-burlington_320.jpg",
                                "textContent": null
                            }
                        ],
                        "threeDRenderings": [{
                                "id": 118675,
                                "guid": "12d712e5-bf21-42a4-bc9d-83fa5224e8a4",
                                "resourceType": "Property3DTour",
                                "isPublic": true,
                                "description": null,
                                "filename": "524_BurlingtonAveNE_480p.mp4",
                                "sizeInByte": null,
                                "contentType": "application/octet-stream",
                                "url": "https://rs1pub1content.blob.core.windows.net/public/properties/1625007/photo/12d712e5-bf21-42a4-bc9d-83fa5224e8a4_524_BurlingtonAveNE_480p.mp4",
                                "urlMedium": null,
                                "urlSmall": null,
                                "textContent": null
                            }
                        ],
                        "audios": []
                    },
                    "manager": null,
                    "seller": null,
                    "sellerBroker": null,
                    "hoa": null,
                    "lease": {
                        "leaseSummary": {
                            "occupancy": "Occupied",
                            "leasingStatus": null,
                            "marketedRent": null,
                            "paymentStatus": "Current",
                            "leaseStartDate": "2015-02-13T00:00:00",
                            "leaseEndDate": "2016-02-12T00:00:00",
                            "monthlyRent": 895.00,
                            "securityDepositAmount": 895.00,
                            "hasPet": null,
                            "petFeeAmount": null,
                            "isPetsDeposit": false,
                            "petsDepositAmount": null,
                            "isLeaseConcessions": null,
                            "isRentersInsuranceRequired": true,
                            "isSection8": false,
                            "isTenantBackgroundChecked": true,
                            "isTenantIncomeAbove3x": true,
                            "isTenantMayTerminateEarly": null,
                            "isTenantPurchaseOption": null
                        },
                        "utilitiesOwnership": {
                            "electric": "Tenant",
                            "gas": "Tenant",
                            "water": "Tenant",
                            "garbage": "Tenant",
                            "pool": "NotApplicable",
                            "landscaping": "Tenant",
                            "pestControl": "Tenant"
                        },
                        "applianceOwnership": {
                            "refrigerator": "Owner",
                            "dishwasher": "Owner",
                            "washer": "Tenant",
                            "dryer": "Tenant",
                            "microwave": "Tenant",
                            "stove": "Owner"
                        }
                    },
                    "diligences": [],
                    "googleMapOption": {
                        "hasStreetView": true,
                        "povHeading": -86,
                        "povPitch": 0,
                        "povLatitude": 28.0102160000000,
                        "povLongitude": -80.6594450000000
                    },
                    "inspectionType": null
                }, {
                    "id": 1625008,
                    "accountId": 0,
                    "buyerAccountId": null,
                    "buyerUserId": null,
                    "externalId": null,
                    "programId": null,
                    "isDwellCertified": false,
                    "isAllowOffer": false,
                    "isAllowPreview": false,
                    "isFeatured": false,
                    "isRentGuaranteed": false,
                    "allowRentGuaranteedOptout": false,
                    "isSecuritized": false,
                    "isHot": false,
                    "isNew": false,
                    "isBargain": null,
                    "isDiligenceVaultUnlocked": false,
                    "isPropertyManagerOfferRetain": null,
                    "isHoa": null,
                    "hasAudio": false,
                    "hasDiligenceVaultDocuments": false,
                    "market": 1001,
                    "daysOnMarket": null,
                    "latitude": null,
                    "longitude": null,
                    "propertyName": null,
                    "description": null,
                    "highlights": null,
                    "mainImageUrl": null,
                    "personalProperties": null,
                    "diligenceVaultSummary": null,
                    "featuredReason": null,
                    "status": "OffMarket",
                    "allowedFundingTypes": null,
                    "allowableSaleTypes": null,
                    "visibility": "None",
                    "priceVisibility": "ShowPrice",
                    "propertyType": "Unspecified",
                    "certificationLevel": null,
                    "escrowClosingDate": null,
                    "address": {
                        "address1": "935 Alabama Street",
                        "address2": null,
                        "city": "Titusville",
                        "country": "USA",
                        "county": "Brevard",
                        "district": null,
                        "state": "FL",
                        "zip": "32796",
                        "zipPlus4": null
                    },
                    "financial": null,
                    "physical": null,
                    "score": null,
                    "valuation": null,
                    "resources": null,
                    "manager": null,
                    "seller": null,
                    "sellerBroker": null,
                    "hoa": null,
                    "lease": null,
                    "diligences": null,
                    "googleMapOption": null,
                    "inspectionType": null
                }, {
                    "id": 1625009,
                    "accountId": 100214,
                    "buyerAccountId": 100247,
                    "buyerUserId": 100350,
                    "externalId": null,
                    "programId": null,
                    "isDwellCertified": false,
                    "isAllowOffer": false,
                    "isAllowPreview": false,
                    "isFeatured": false,
                    "isRentGuaranteed": false,
                    "allowRentGuaranteedOptout": false,
                    "isSecuritized": false,
                    "isHot": true,
                    "isNew": false,
                    "isBargain": false,
                    "isDiligenceVaultUnlocked": false,
                    "isPropertyManagerOfferRetain": false,
                    "isHoa": false,
                    "hasAudio": false,
                    "hasDiligenceVaultDocuments": true,
                    "market": 1001,
                    "daysOnMarket": 56,
                    "latitude": 28.0191000000000,
                    "longitude": -80.7250400000000,
                    "propertyName": null,
                    "description": "\r\n* List price is approximately 60% of peak value from late 2006\r\n* Estimated market rent is $150/month above current rent\r\n* 10 miles from Florida Institute of Technology & 15 miles from Melbourne Beach\r\n",
                    "highlights": null,
                    "mainImageUrl": "https://roofstock-cdn.azureedge.net/public/properties/1625009/photo/52f33546-ce40-4611-9b8a-619a094b990a_1_-_front_img1366x768-0_640.jpg",
                    "personalProperties": null,
                    "diligenceVaultSummary": "<ul><li>Property Valuation:<br/>$109,000</li><li>Estimated Market Rent: $1,050</li><li>Inspection Report:<br/>Estimated Repairs: $1,000</li></ul>",
                    "featuredReason": null,
                    "status": "Sold",
                    "allowedFundingTypes": "All",
                    "allowableSaleTypes": "Individual, Bulk",
                    "visibility": "Public",
                    "priceVisibility": "ShowPrice",
                    "propertyType": "Unspecified",
                    "certificationLevel": "Certified",
                    "escrowClosingDate": "2016-03-06T00:00:00Z",
                    "address": {
                        "address1": "1762 NW Glenridge Street",
                        "address2": null,
                        "city": "Palm Bay",
                        "country": "USA",
                        "county": null,
                        "district": null,
                        "state": "FL",
                        "zip": "32907",
                        "zipPlus4": null
                    },
                    "financial": {
                        "capRate": null,
                        "occupancy": "Occupied",
                        "isSection8": false,
                        "leaseStartDate": "2014-12-01T00:00:00",
                        "leaseEndDate": "2016-01-31T00:00:00",
                        "listPrice": 102000.00,
                        "salePrice": null,
                        "marketValue": null,
                        "monthlyHoa": null,
                        "monthlyManagementFees": null,
                        "monthlyRent": 850.00,
                        "netYield": null,
                        "turnOverFee": null,
                        "rehabCosts": null,
                        "rehabDate": null,
                        "yearlyInsuranceCost": 999.00,
                        "yearlyPropertyTaxes": 2084.00,
                        "isCashOnly": false
                    },
                    "physical": {
                        "bathRooms": 2.0,
                        "bedRooms": 3.0,
                        "parcelNumber": "28 3628KN019190000200",
                        "isPool": false,
                        "lotSize": 10018,
                        "squareFeet": 1270,
                        "stories": null,
                        "units": null,
                        "yearBuilt": 1986,
                        "zipYearBuilt": null
                    },
                    "score": {
                        "conditionScore": null,
                        "crimeScore": "B",
                        "neighborhoodScore": 4,
                        "overallScore": null,
                        "qualityScore": null,
                        "schoolScore": "B-",
                        "charterSchoolScore": null,
                        "floodRiskScore": null,
                        "walkabilityScore": null
                    },
                    "valuation": {
                        "avmBpoValue": null,
                        "avmBpoAdjValue": null,
                        "avmBpoDate": null,
                        "rsAvmValue": 106000.00,
                        "rsAvmDate": null,
                        "rsBpoMergeValue": 109000.00
                    },
                    "resources": {
                        "photos": [{
                                "id": 122537,
                                "guid": "52f33546-ce40-4611-9b8a-619a094b990a",
                                "resourceType": "PropertyPhoto",
                                "isPublic": true,
                                "description": null,
                                "filename": "1 - front img1366x768-0_1280.jpg",
                                "sizeInByte": null,
                                "contentType": "image/jpeg",
                                "url": "https://roofstock-cdn.azureedge.net/public/properties/1625009/photo/52f33546-ce40-4611-9b8a-619a094b990a_1_-_front_img1366x768-0_1280.jpg",
                                "urlMedium": "https://roofstock-cdn.azureedge.net/public/properties/1625009/photo/52f33546-ce40-4611-9b8a-619a094b990a_1_-_front_img1366x768-0_640.jpg",
                                "urlSmall": "https://roofstock-cdn.azureedge.net/public/properties/1625009/photo/52f33546-ce40-4611-9b8a-619a094b990a_1_-_front_img1366x768-0_320.jpg",
                                "textContent": null
                            }, {
                                "id": 122539,
                                "guid": "8557140b-0e71-4f05-ab2f-93dec5f02b56",
                                "resourceType": "PropertyPhoto",
                                "isPublic": true,
                                "description": null,
                                "filename": "2 - kitchen_1280.jpg",
                                "sizeInByte": null,
                                "contentType": "image/jpeg",
                                "url": "https://roofstock-cdn.azureedge.net/public/properties/1625009/photo/8557140b-0e71-4f05-ab2f-93dec5f02b56_2_-_kitchen_1280.jpg",
                                "urlMedium": "https://roofstock-cdn.azureedge.net/public/properties/1625009/photo/8557140b-0e71-4f05-ab2f-93dec5f02b56_2_-_kitchen_640.jpg",
                                "urlSmall": "https://roofstock-cdn.azureedge.net/public/properties/1625009/photo/8557140b-0e71-4f05-ab2f-93dec5f02b56_2_-_kitchen_320.jpg",
                                "textContent": null
                            }, {
                                "id": 122541,
                                "guid": "364feb01-42ec-4e28-a8a9-878a3a695a5d",
                                "resourceType": "PropertyPhoto",
                                "isPublic": true,
                                "description": null,
                                "filename": "3 - dinning_1280.jpg",
                                "sizeInByte": null,
                                "contentType": "image/jpeg",
                                "url": "https://roofstock-cdn.azureedge.net/public/properties/1625009/photo/364feb01-42ec-4e28-a8a9-878a3a695a5d_3_-_dinning_1280.jpg",
                                "urlMedium": "https://roofstock-cdn.azureedge.net/public/properties/1625009/photo/364feb01-42ec-4e28-a8a9-878a3a695a5d_3_-_dinning_640.jpg",
                                "urlSmall": "https://roofstock-cdn.azureedge.net/public/properties/1625009/photo/364feb01-42ec-4e28-a8a9-878a3a695a5d_3_-_dinning_320.jpg",
                                "textContent": null
                            }, {
                                "id": 122543,
                                "guid": "ca8e2c24-2820-4e6e-b6f9-f05aeb48b3ff",
                                "resourceType": "PropertyPhoto",
                                "isPublic": true,
                                "description": null,
                                "filename": "4 - 1359 Carr Circle NE-2_1280.jpg",
                                "sizeInByte": null,
                                "contentType": "image/jpeg",
                                "url": "https://roofstock-cdn.azureedge.net/public/properties/1625009/photo/ca8e2c24-2820-4e6e-b6f9-f05aeb48b3ff_4_-_1359_Carr_Circle_NE-2_1280.jpg",
                                "urlMedium": "https://roofstock-cdn.azureedge.net/public/properties/1625009/photo/ca8e2c24-2820-4e6e-b6f9-f05aeb48b3ff_4_-_1359_Carr_Circle_NE-2_640.jpg",
                                "urlSmall": "https://roofstock-cdn.azureedge.net/public/properties/1625009/photo/ca8e2c24-2820-4e6e-b6f9-f05aeb48b3ff_4_-_1359_Carr_Circle_NE-2_320.jpg",
                                "textContent": null
                            }, {
                                "id": 122545,
                                "guid": "e76e122a-ec14-4b0b-8ad6-cc2a36572f18",
                                "resourceType": "PropertyPhoto",
                                "isPublic": true,
                                "description": null,
                                "filename": "5- Living room_1280.jpg",
                                "sizeInByte": null,
                                "contentType": "image/jpeg",
                                "url": "https://roofstock-cdn.azureedge.net/public/properties/1625009/photo/e76e122a-ec14-4b0b-8ad6-cc2a36572f18_5-_Living_room_1280.jpg",
                                "urlMedium": "https://roofstock-cdn.azureedge.net/public/properties/1625009/photo/e76e122a-ec14-4b0b-8ad6-cc2a36572f18_5-_Living_room_640.jpg",
                                "urlSmall": "https://roofstock-cdn.azureedge.net/public/properties/1625009/photo/e76e122a-ec14-4b0b-8ad6-cc2a36572f18_5-_Living_room_320.jpg",
                                "textContent": null
                            }, {
                                "id": 122547,
                                "guid": "04f77933-0c02-4d5a-9a9b-188c41907649",
                                "resourceType": "PropertyPhoto",
                                "isPublic": true,
                                "description": null,
                                "filename": "7 - master bath_1280.jpg",
                                "sizeInByte": null,
                                "contentType": "image/jpeg",
                                "url": "https://roofstock-cdn.azureedge.net/public/properties/1625009/photo/04f77933-0c02-4d5a-9a9b-188c41907649_7_-_master_bath_1280.jpg",
                                "urlMedium": "https://roofstock-cdn.azureedge.net/public/properties/1625009/photo/04f77933-0c02-4d5a-9a9b-188c41907649_7_-_master_bath_640.jpg",
                                "urlSmall": "https://roofstock-cdn.azureedge.net/public/properties/1625009/photo/04f77933-0c02-4d5a-9a9b-188c41907649_7_-_master_bath_320.jpg",
                                "textContent": null
                            }, {
                                "id": 122549,
                                "guid": "946a6744-604d-4b7a-a741-196b49da4422",
                                "resourceType": "PropertyPhoto",
                                "isPublic": true,
                                "description": null,
                                "filename": "8bedroon view_1280.jpg",
                                "sizeInByte": null,
                                "contentType": "image/jpeg",
                                "url": "https://roofstock-cdn.azureedge.net/public/properties/1625009/photo/946a6744-604d-4b7a-a741-196b49da4422_8bedroon_view_1280.jpg",
                                "urlMedium": "https://roofstock-cdn.azureedge.net/public/properties/1625009/photo/946a6744-604d-4b7a-a741-196b49da4422_8bedroon_view_640.jpg",
                                "urlSmall": "https://roofstock-cdn.azureedge.net/public/properties/1625009/photo/946a6744-604d-4b7a-a741-196b49da4422_8bedroon_view_320.jpg",
                                "textContent": null
                            }, {
                                "id": 122551,
                                "guid": "a5eccfbf-b72d-4f6b-8aae-a7ce9c0f3725",
                                "resourceType": "PropertyPhoto",
                                "isPublic": true,
                                "description": null,
                                "filename": "9-back porch_1280.jpg",
                                "sizeInByte": null,
                                "contentType": "image/jpeg",
                                "url": "https://roofstock-cdn.azureedge.net/public/properties/1625009/photo/a5eccfbf-b72d-4f6b-8aae-a7ce9c0f3725_9-back_porch_1280.jpg",
                                "urlMedium": "https://roofstock-cdn.azureedge.net/public/properties/1625009/photo/a5eccfbf-b72d-4f6b-8aae-a7ce9c0f3725_9-back_porch_640.jpg",
                                "urlSmall": "https://roofstock-cdn.azureedge.net/public/properties/1625009/photo/a5eccfbf-b72d-4f6b-8aae-a7ce9c0f3725_9-back_porch_320.jpg",
                                "textContent": null
                            }
                        ],
                        "floorPlans": [{
                                "id": 118723,
                                "guid": "0927ad26-5cde-4cf0-b982-f7e213e7fdc5",
                                "resourceType": "PropertyFloorPlan",
                                "isPublic": true,
                                "description": null,
                                "filename": "im-1762-glenridge_1280.jpg",
                                "sizeInByte": null,
                                "contentType": "image/jpeg",
                                "url": "https://roofstock-cdn.azureedge.net/public/properties/1625009/photo/0927ad26-5cde-4cf0-b982-f7e213e7fdc5_im-1762-glenridge_1280.jpg",
                                "urlMedium": "https://roofstock-cdn.azureedge.net/public/properties/1625009/photo/0927ad26-5cde-4cf0-b982-f7e213e7fdc5_im-1762-glenridge_640.jpg",
                                "urlSmall": "https://roofstock-cdn.azureedge.net/public/properties/1625009/photo/0927ad26-5cde-4cf0-b982-f7e213e7fdc5_im-1762-glenridge_320.jpg",
                                "textContent": null
                            }
                        ],
                        "threeDRenderings": [{
                                "id": 118725,
                                "guid": "3daa239b-a637-4d55-8fb4-fff307e2c64f",
                                "resourceType": "Property3DTour",
                                "isPublic": true,
                                "description": null,
                                "filename": "1762_NWGlenridgeStreet_480p.mp4",
                                "sizeInByte": null,
                                "contentType": "application/octet-stream",
                                "url": "https://rs1pub1content.blob.core.windows.net/public/properties/1625009/photo/3daa239b-a637-4d55-8fb4-fff307e2c64f_1762_NWGlenridgeStreet_480p.mp4",
                                "urlMedium": null,
                                "urlSmall": null,
                                "textContent": null
                            }
                        ],
                        "audios": []
                    },
                    "manager": null,
                    "seller": null,
                    "sellerBroker": null,
                    "hoa": null,
                    "lease": {
                        "leaseSummary": {
                            "occupancy": "Occupied",
                            "leasingStatus": null,
                            "marketedRent": null,
                            "paymentStatus": "Current",
                            "leaseStartDate": "2014-12-01T00:00:00",
                            "leaseEndDate": "2016-01-31T00:00:00",
                            "monthlyRent": 850.00,
                            "securityDepositAmount": 1238.00,
                            "hasPet": null,
                            "petFeeAmount": null,
                            "isPetsDeposit": false,
                            "petsDepositAmount": null,
                            "isLeaseConcessions": null,
                            "isRentersInsuranceRequired": true,
                            "isSection8": false,
                            "isTenantBackgroundChecked": true,
                            "isTenantIncomeAbove3x": true,
                            "isTenantMayTerminateEarly": null,
                            "isTenantPurchaseOption": null
                        },
                        "utilitiesOwnership": {
                            "electric": "Tenant",
                            "gas": "Tenant",
                            "water": "Tenant",
                            "garbage": "Tenant",
                            "pool": "NotApplicable",
                            "landscaping": "Tenant",
                            "pestControl": "Tenant"
                        },
                        "applianceOwnership": {
                            "refrigerator": "Owner",
                            "dishwasher": "Owner",
                            "washer": "Tenant",
                            "dryer": "Tenant",
                            "microwave": "Owner",
                            "stove": "Owner"
                        }
                    },
                    "diligences": [],
                    "googleMapOption": {
                        "hasStreetView": true,
                        "povHeading": -179,
                        "povPitch": 0,
                        "povLatitude": 28.0190960000000,
                        "povLongitude": -80.7250450000000
                    },
                    "inspectionType": null
                }, {
                    "id": 1625010,
                    "accountId": 100214,
                    "buyerAccountId": 100247,
                    "buyerUserId": 100350,
                    "externalId": null,
                    "programId": null,
                    "isDwellCertified": false,
                    "isAllowOffer": false,
                    "isAllowPreview": false,
                    "isFeatured": false,
                    "isRentGuaranteed": false,
                    "allowRentGuaranteedOptout": false,
                    "isSecuritized": false,
                    "isHot": true,
                    "isNew": false,
                    "isBargain": false,
                    "isDiligenceVaultUnlocked": false,
                    "isPropertyManagerOfferRetain": false,
                    "isHoa": false,
                    "hasAudio": false,
                    "hasDiligenceVaultDocuments": true,
                    "market": 1001,
                    "daysOnMarket": 56,
                    "latitude": 28.0149100000000,
                    "longitude": -80.7030600000000,
                    "propertyName": null,
                    "description": "\r\n* List price is approximately 60% of peak value from late 2006\r\n* Estimated market rent is $80/month above current rent\r\n* Rent increased to $970 on 10/27/2015\r\n* 5 miles from melbourne beach & 10 miles from orlando/melbourne international airport\r\n\r\n\r\n",
                    "highlights": null,
                    "mainImageUrl": "https://roofstock-cdn.azureedge.net/public/properties/1625010/photo/5a1bc5e6-08fb-4a26-a65a-cc118f27a67e_1_-_img1366x768-2_640.jpg",
                    "personalProperties": null,
                    "diligenceVaultSummary": "<ul><li>Property Valuation:<br/>$109,000</li><li>Estimated Market Rent: $1,040</li><li>Inspection Report:<br/>Estimated Repairs: $1,425</li></ul>",
                    "featuredReason": null,
                    "status": "Sold",
                    "allowedFundingTypes": "All",
                    "allowableSaleTypes": "Individual, Bulk",
                    "visibility": "Public",
                    "priceVisibility": "ShowPrice",
                    "propertyType": "Unspecified",
                    "certificationLevel": "Certified",
                    "escrowClosingDate": "2016-03-06T00:00:00Z",
                    "address": {
                        "address1": "726 Lime Avenue NW",
                        "address2": null,
                        "city": "Palm Bay",
                        "country": "USA",
                        "county": null,
                        "district": null,
                        "state": "FL",
                        "zip": "32907",
                        "zipPlus4": null
                    },
                    "financial": {
                        "capRate": null,
                        "occupancy": "Occupied",
                        "isSection8": false,
                        "leaseStartDate": "2014-10-27T00:00:00",
                        "leaseEndDate": "2016-04-26T00:00:00",
                        "listPrice": 104000.00,
                        "salePrice": null,
                        "marketValue": null,
                        "monthlyHoa": null,
                        "monthlyManagementFees": null,
                        "monthlyRent": 970.00,
                        "netYield": null,
                        "turnOverFee": null,
                        "rehabCosts": null,
                        "rehabDate": null,
                        "yearlyInsuranceCost": 999.00,
                        "yearlyPropertyTaxes": 2160.00,
                        "isCashOnly": false
                    },
                    "physical": {
                        "bathRooms": 2.0,
                        "bedRooms": 3.0,
                        "parcelNumber": "28 3626KN021490000800 ",
                        "isPool": false,
                        "lotSize": 10454,
                        "squareFeet": 1346,
                        "stories": null,
                        "units": null,
                        "yearBuilt": 1986,
                        "zipYearBuilt": null
                    },
                    "score": {
                        "conditionScore": null,
                        "crimeScore": "B",
                        "neighborhoodScore": 4,
                        "overallScore": null,
                        "qualityScore": null,
                        "schoolScore": "B",
                        "charterSchoolScore": null,
                        "floodRiskScore": null,
                        "walkabilityScore": null
                    },
                    "valuation": {
                        "avmBpoValue": null,
                        "avmBpoAdjValue": null,
                        "avmBpoDate": null,
                        "rsAvmValue": 110000.00,
                        "rsAvmDate": null,
                        "rsBpoMergeValue": 109000.00
                    },
                    "resources": {
                        "photos": [{
                                "id": 122553,
                                "guid": "5a1bc5e6-08fb-4a26-a65a-cc118f27a67e",
                                "resourceType": "PropertyPhoto",
                                "isPublic": true,
                                "description": null,
                                "filename": "1 - img1366x768-2_1280.jpg",
                                "sizeInByte": null,
                                "contentType": "image/jpeg",
                                "url": "https://roofstock-cdn.azureedge.net/public/properties/1625010/photo/5a1bc5e6-08fb-4a26-a65a-cc118f27a67e_1_-_img1366x768-2_1280.jpg",
                                "urlMedium": "https://roofstock-cdn.azureedge.net/public/properties/1625010/photo/5a1bc5e6-08fb-4a26-a65a-cc118f27a67e_1_-_img1366x768-2_640.jpg",
                                "urlSmall": "https://roofstock-cdn.azureedge.net/public/properties/1625010/photo/5a1bc5e6-08fb-4a26-a65a-cc118f27a67e_1_-_img1366x768-2_320.jpg",
                                "textContent": null
                            }, {
                                "id": 122555,
                                "guid": "bb927da2-0b19-48b9-859a-0aa63ca77e86",
                                "resourceType": "PropertyPhoto",
                                "isPublic": true,
                                "description": null,
                                "filename": "2 - kitchen_1280.jpg",
                                "sizeInByte": null,
                                "contentType": "image/jpeg",
                                "url": "https://roofstock-cdn.azureedge.net/public/properties/1625010/photo/bb927da2-0b19-48b9-859a-0aa63ca77e86_2_-_kitchen_1280.jpg",
                                "urlMedium": "https://roofstock-cdn.azureedge.net/public/properties/1625010/photo/bb927da2-0b19-48b9-859a-0aa63ca77e86_2_-_kitchen_640.jpg",
                                "urlSmall": "https://roofstock-cdn.azureedge.net/public/properties/1625010/photo/bb927da2-0b19-48b9-859a-0aa63ca77e86_2_-_kitchen_320.jpg",
                                "textContent": null
                            }, {
                                "id": 122557,
                                "guid": "2091c6f5-e280-41f8-83b6-2e32b053e668",
                                "resourceType": "PropertyPhoto",
                                "isPublic": true,
                                "description": null,
                                "filename": "3 _1280.jpg",
                                "sizeInByte": null,
                                "contentType": "image/jpeg",
                                "url": "https://roofstock-cdn.azureedge.net/public/properties/1625010/photo/2091c6f5-e280-41f8-83b6-2e32b053e668_3__1280.jpg",
                                "urlMedium": "https://roofstock-cdn.azureedge.net/public/properties/1625010/photo/2091c6f5-e280-41f8-83b6-2e32b053e668_3__640.jpg",
                                "urlSmall": "https://roofstock-cdn.azureedge.net/public/properties/1625010/photo/2091c6f5-e280-41f8-83b6-2e32b053e668_3__320.jpg",
                                "textContent": null
                            }, {
                                "id": 122559,
                                "guid": "a81f65bd-e300-46b7-90a7-be93605c03ad",
                                "resourceType": "PropertyPhoto",
                                "isPublic": true,
                                "description": null,
                                "filename": "4- 726 Lime Avenue NW-2_1280.jpg",
                                "sizeInByte": null,
                                "contentType": "image/jpeg",
                                "url": "https://roofstock-cdn.azureedge.net/public/properties/1625010/photo/a81f65bd-e300-46b7-90a7-be93605c03ad_4-_726_Lime_Avenue_NW-2_1280.jpg",
                                "urlMedium": "https://roofstock-cdn.azureedge.net/public/properties/1625010/photo/a81f65bd-e300-46b7-90a7-be93605c03ad_4-_726_Lime_Avenue_NW-2_640.jpg",
                                "urlSmall": "https://roofstock-cdn.azureedge.net/public/properties/1625010/photo/a81f65bd-e300-46b7-90a7-be93605c03ad_4-_726_Lime_Avenue_NW-2_320.jpg",
                                "textContent": null
                            }, {
                                "id": 122561,
                                "guid": "4c823cca-ce71-453e-8634-7da675303814",
                                "resourceType": "PropertyPhoto",
                                "isPublic": true,
                                "description": null,
                                "filename": "5bathroom_1280.jpg",
                                "sizeInByte": null,
                                "contentType": "image/jpeg",
                                "url": "https://roofstock-cdn.azureedge.net/public/properties/1625010/photo/4c823cca-ce71-453e-8634-7da675303814_5bathroom_1280.jpg",
                                "urlMedium": "https://roofstock-cdn.azureedge.net/public/properties/1625010/photo/4c823cca-ce71-453e-8634-7da675303814_5bathroom_640.jpg",
                                "urlSmall": "https://roofstock-cdn.azureedge.net/public/properties/1625010/photo/4c823cca-ce71-453e-8634-7da675303814_5bathroom_320.jpg",
                                "textContent": null
                            }
                        ],
                        "floorPlans": [{
                                "id": 118753,
                                "guid": "62bc8367-de82-4925-8139-fe31f10f5665",
                                "resourceType": "PropertyFloorPlan",
                                "isPublic": true,
                                "description": null,
                                "filename": "im-726-lime_1280.jpg",
                                "sizeInByte": null,
                                "contentType": "image/jpeg",
                                "url": "https://roofstock-cdn.azureedge.net/public/properties/1625010/photo/62bc8367-de82-4925-8139-fe31f10f5665_im-726-lime_1280.jpg",
                                "urlMedium": "https://roofstock-cdn.azureedge.net/public/properties/1625010/photo/62bc8367-de82-4925-8139-fe31f10f5665_im-726-lime_640.jpg",
                                "urlSmall": "https://roofstock-cdn.azureedge.net/public/properties/1625010/photo/62bc8367-de82-4925-8139-fe31f10f5665_im-726-lime_320.jpg",
                                "textContent": null
                            }
                        ],
                        "threeDRenderings": [{
                                "id": 118755,
                                "guid": "77ddfc6c-e95d-49e8-bd8f-77ef255750d1",
                                "resourceType": "Property3DTour",
                                "isPublic": true,
                                "description": null,
                                "filename": "726_LimeAvenueNW_480p.mp4",
                                "sizeInByte": null,
                                "contentType": "application/octet-stream",
                                "url": "https://rs1pub1content.blob.core.windows.net/public/properties/1625010/photo/77ddfc6c-e95d-49e8-bd8f-77ef255750d1_726_LimeAvenueNW_480p.mp4",
                                "urlMedium": null,
                                "urlSmall": null,
                                "textContent": null
                            }
                        ],
                        "audios": []
                    },
                    "manager": null,
                    "seller": null,
                    "sellerBroker": null,
                    "hoa": null,
                    "lease": {
                        "leaseSummary": {
                            "occupancy": "Occupied",
                            "leasingStatus": null,
                            "marketedRent": null,
                            "paymentStatus": "Current",
                            "leaseStartDate": "2014-10-27T00:00:00",
                            "leaseEndDate": "2016-04-26T00:00:00",
                            "monthlyRent": 970.00,
                            "securityDepositAmount": 940.00,
                            "hasPet": null,
                            "petFeeAmount": null,
                            "isPetsDeposit": false,
                            "petsDepositAmount": null,
                            "isLeaseConcessions": null,
                            "isRentersInsuranceRequired": true,
                            "isSection8": false,
                            "isTenantBackgroundChecked": true,
                            "isTenantIncomeAbove3x": true,
                            "isTenantMayTerminateEarly": null,
                            "isTenantPurchaseOption": null
                        },
                        "utilitiesOwnership": {
                            "electric": "Tenant",
                            "gas": "Tenant",
                            "water": "Tenant",
                            "garbage": "Tenant",
                            "pool": "NotApplicable",
                            "landscaping": "Tenant",
                            "pestControl": "Tenant"
                        },
                        "applianceOwnership": {
                            "refrigerator": "Owner",
                            "dishwasher": "Owner",
                            "washer": "Tenant",
                            "dryer": "Tenant",
                            "microwave": "Owner",
                            "stove": "Owner"
                        }
                    },
                    "diligences": [],
                    "googleMapOption": {
                        "hasStreetView": true,
                        "povHeading": 94,
                        "povPitch": 0,
                        "povLatitude": 28.0149100000000,
                        "povLongitude": -80.7030599000000
                    },
                    "inspectionType": null
                }, {
                    "id": 1625011,
                    "accountId": 100214,
                    "buyerAccountId": 100247,
                    "buyerUserId": 100350,
                    "externalId": null,
                    "programId": null,
                    "isDwellCertified": false,
                    "isAllowOffer": false,
                    "isAllowPreview": false,
                    "isFeatured": false,
                    "isRentGuaranteed": false,
                    "allowRentGuaranteedOptout": false,
                    "isSecuritized": false,
                    "isHot": true,
                    "isNew": false,
                    "isBargain": false,
                    "isDiligenceVaultUnlocked": false,
                    "isPropertyManagerOfferRetain": false,
                    "isHoa": false,
                    "hasAudio": false,
                    "hasDiligenceVaultDocuments": false,
                    "market": 1001,
                    "daysOnMarket": 56,
                    "latitude": 28.4736600000000,
                    "longitude": -80.7877300000000,
                    "propertyName": null,
                    "description": "\r\n* List price is approximately 60% of peak value from mid-2006\r\n* Estimated market rent is $170/month above current rent\r\n* Per inspection report roof has more than ten years of remaining life\r\n* 20 miles from Cape Canaveral Air Force Station & 20 miles from Cocoa Beach\r\n",
                    "highlights": null,
                    "mainImageUrl": "https://roofstock-cdn.azureedge.net/public/properties/1625011/photo/01178d1e-af9b-4c75-ab46-0d097fb7d9ac_1_-_front_exterior_640.jpg",
                    "personalProperties": null,
                    "diligenceVaultSummary": "<ul><li>Property Valuation:<br/>$128,000</li><li>Estimated Market Rent: $1,140</li><li>Inspection Report:<br/>Estimated Repairs: $475</li></ul>",
                    "featuredReason": null,
                    "status": "Sold",
                    "allowedFundingTypes": "All",
                    "allowableSaleTypes": "Individual, Bulk",
                    "visibility": "Public",
                    "priceVisibility": "ShowPrice",
                    "propertyType": "Unspecified",
                    "certificationLevel": "Certified",
                    "escrowClosingDate": "2016-03-06T00:00:00Z",
                    "address": {
                        "address1": "4200 Skyway Dr",
                        "address2": null,
                        "city": "Cocoa",
                        "country": "USA",
                        "county": "Brevard",
                        "district": null,
                        "state": "FL",
                        "zip": "32927",
                        "zipPlus4": "8661"
                    },
                    "financial": {
                        "capRate": null,
                        "occupancy": "Occupied",
                        "isSection8": false,
                        "leaseStartDate": "2015-02-14T00:00:00",
                        "leaseEndDate": "2016-02-13T00:00:00",
                        "listPrice": 114000.00,
                        "salePrice": null,
                        "marketValue": null,
                        "monthlyHoa": null,
                        "monthlyManagementFees": null,
                        "monthlyRent": 920.00,
                        "netYield": null,
                        "turnOverFee": null,
                        "rehabCosts": null,
                        "rehabDate": null,
                        "yearlyInsuranceCost": 999.00,
                        "yearlyPropertyTaxes": 2127.00,
                        "isCashOnly": false
                    },
                    "physical": {
                        "bathRooms": 2.0,
                        "bedRooms": 3.0,
                        "parcelNumber": "23-35-23-JM-00052.0-0007.00",
                        "isPool": false,
                        "lotSize": 11761,
                        "squareFeet": 1438,
                        "stories": null,
                        "units": null,
                        "yearBuilt": 1987,
                        "zipYearBuilt": null
                    },
                    "score": {
                        "conditionScore": null,
                        "crimeScore": "D-",
                        "neighborhoodScore": 5,
                        "overallScore": null,
                        "qualityScore": null,
                        "schoolScore": "B+",
                        "charterSchoolScore": "A-",
                        "floodRiskScore": null,
                        "walkabilityScore": null
                    },
                    "valuation": {
                        "avmBpoValue": null,
                        "avmBpoAdjValue": null,
                        "avmBpoDate": null,
                        "rsAvmValue": 120000.00,
                        "rsAvmDate": null,
                        "rsBpoMergeValue": 128000.00
                    },
                    "resources": {
                        "photos": [],
                        "floorPlans": [],
                        "threeDRenderings": [],
                        "audios": []
                    },
                    "manager": null,
                    "seller": null,
                    "sellerBroker": null,
                    "hoa": null,
                    "lease": {
                        "leaseSummary": {
                            "occupancy": "Occupied",
                            "leasingStatus": null,
                            "marketedRent": null,
                            "paymentStatus": "Current",
                            "leaseStartDate": "2015-02-14T00:00:00",
                            "leaseEndDate": "2016-02-13T00:00:00",
                            "monthlyRent": 920.00,
                            "securityDepositAmount": 1750.00,
                            "hasPet": null,
                            "petFeeAmount": null,
                            "isPetsDeposit": true,
                            "petsDepositAmount": 0.00,
                            "isLeaseConcessions": null,
                            "isRentersInsuranceRequired": true,
                            "isSection8": false,
                            "isTenantBackgroundChecked": true,
                            "isTenantIncomeAbove3x": true,
                            "isTenantMayTerminateEarly": null,
                            "isTenantPurchaseOption": null
                        },
                        "utilitiesOwnership": {
                            "electric": "Tenant",
                            "gas": "Tenant",
                            "water": "Tenant",
                            "garbage": "Tenant",
                            "pool": "NotApplicable",
                            "landscaping": "Tenant",
                            "pestControl": "Tenant"
                        },
                        "applianceOwnership": {
                            "refrigerator": "Owner",
                            "dishwasher": "Owner",
                            "washer": "Tenant",
                            "dryer": "Tenant",
                            "microwave": "Tenant",
                            "stove": "Owner"
                        }
                    },
                    "diligences": [],
                    "googleMapOption": {
                        "hasStreetView": true,
                        "povHeading": -4,
                        "povPitch": 0,
                        "povLatitude": 28.4736580000000,
                        "povLongitude": -80.7877340000000
                    },
                    "inspectionType": null
                }, {
                    "id": 1625012,
                    "accountId": 100214,
                    "buyerAccountId": 101076,
                    "buyerUserId": 101236,
                    "externalId": null,
                    "programId": null,
                    "isDwellCertified": false,
                    "isAllowOffer": false,
                    "isAllowPreview": false,
                    "isFeatured": false,
                    "isRentGuaranteed": false,
                    "allowRentGuaranteedOptout": false,
                    "isSecuritized": false,
                    "isHot": true,
                    "isNew": false,
                    "isBargain": false,
                    "isDiligenceVaultUnlocked": false,
                    "isPropertyManagerOfferRetain": false,
                    "isHoa": false,
                    "hasAudio": false,
                    "hasDiligenceVaultDocuments": true,
                    "market": 1001,
                    "daysOnMarket": 95,
                    "latitude": 28.1602200000000,
                    "longitude": -80.6472000000000,
                    "propertyName": null,
                    "description": "\r\n* List price is approximately 60% of peak value from late 2006\r\n* Per inspection report roof has 1-3 years of estimated remaining life. List price has taken this into account.\r\n* Estimated market rent is well above current rent\r\n* 6.5 miles from Indian Harbour Beach & 15 miles from Cocoa Beach\r\n\r\n",
                    "highlights": null,
                    "mainImageUrl": "https://roofstock-cdn.azureedge.net/public/properties/1625012/photo/477c17c1-7784-4055-87a6-ef25505e82ac_1_-_Frontimg1366x768-0_640.jpg",
                    "personalProperties": null,
                    "diligenceVaultSummary": "<ul><li>Property Valuation:<br/>$124,000</li><li>Estimated Market Rent: $1,200</li><li>Inspection Report:<br/>Estimated Repairs: $700</li></ul>",
                    "featuredReason": null,
                    "status": "Sold",
                    "allowedFundingTypes": "All",
                    "allowableSaleTypes": "Individual, Bulk",
                    "visibility": "Public",
                    "priceVisibility": "ShowPrice",
                    "propertyType": "Unspecified",
                    "certificationLevel": "Certified",
                    "escrowClosingDate": "2016-04-25T17:00:00Z",
                    "address": {
                        "address1": "3281 Kent Drive",
                        "address2": null,
                        "city": "Melbourne",
                        "country": "USA",
                        "county": null,
                        "district": null,
                        "state": "FL",
                        "zip": "32935",
                        "zipPlus4": null
                    },
                    "financial": {
                        "capRate": null,
                        "occupancy": "Occupied",
                        "isSection8": false,
                        "leaseStartDate": "2014-10-15T00:00:00",
                        "leaseEndDate": "2016-04-14T00:00:00",
                        "listPrice": 120000.00,
                        "salePrice": null,
                        "marketValue": null,
                        "monthlyHoa": null,
                        "monthlyManagementFees": null,
                        "monthlyRent": 1025.00,
                        "netYield": null,
                        "turnOverFee": null,
                        "rehabCosts": null,
                        "rehabDate": null,
                        "yearlyInsuranceCost": 999.00,
                        "yearlyPropertyTaxes": 2291.00,
                        "isCashOnly": false
                    },
                    "physical": {
                        "bathRooms": 2.0,
                        "bedRooms": 4.0,
                        "parcelNumber": "27 370550000040000500",
                        "isPool": false,
                        "lotSize": 7840,
                        "squareFeet": 1492,
                        "stories": null,
                        "units": null,
                        "yearBuilt": 1977,
                        "zipYearBuilt": null
                    },
                    "score": {
                        "conditionScore": null,
                        "crimeScore": "C+",
                        "neighborhoodScore": 4,
                        "overallScore": null,
                        "qualityScore": null,
                        "schoolScore": "B",
                        "charterSchoolScore": null,
                        "floodRiskScore": null,
                        "walkabilityScore": null
                    },
                    "valuation": {
                        "avmBpoValue": null,
                        "avmBpoAdjValue": null,
                        "avmBpoDate": null,
                        "rsAvmValue": 120000.00,
                        "rsAvmDate": null,
                        "rsBpoMergeValue": 124000.00
                    },
                    "resources": {
                        "photos": [{
                                "id": 122577,
                                "guid": "477c17c1-7784-4055-87a6-ef25505e82ac",
                                "resourceType": "PropertyPhoto",
                                "isPublic": true,
                                "description": null,
                                "filename": "1 - Frontimg1366x768-0_1280.jpg",
                                "sizeInByte": null,
                                "contentType": "image/jpeg",
                                "url": "https://roofstock-cdn.azureedge.net/public/properties/1625012/photo/477c17c1-7784-4055-87a6-ef25505e82ac_1_-_Frontimg1366x768-0_1280.jpg",
                                "urlMedium": "https://roofstock-cdn.azureedge.net/public/properties/1625012/photo/477c17c1-7784-4055-87a6-ef25505e82ac_1_-_Frontimg1366x768-0_640.jpg",
                                "urlSmall": "https://roofstock-cdn.azureedge.net/public/properties/1625012/photo/477c17c1-7784-4055-87a6-ef25505e82ac_1_-_Frontimg1366x768-0_320.jpg",
                                "textContent": null
                            }, {
                                "id": 122579,
                                "guid": "8948d553-38c3-47e8-9d18-beecd58b7981",
                                "resourceType": "PropertyPhoto",
                                "isPublic": true,
                                "description": null,
                                "filename": "2 - kitchen_1280.jpg",
                                "sizeInByte": null,
                                "contentType": "image/jpeg",
                                "url": "https://roofstock-cdn.azureedge.net/public/properties/1625012/photo/8948d553-38c3-47e8-9d18-beecd58b7981_2_-_kitchen_1280.jpg",
                                "urlMedium": "https://roofstock-cdn.azureedge.net/public/properties/1625012/photo/8948d553-38c3-47e8-9d18-beecd58b7981_2_-_kitchen_640.jpg",
                                "urlSmall": "https://roofstock-cdn.azureedge.net/public/properties/1625012/photo/8948d553-38c3-47e8-9d18-beecd58b7981_2_-_kitchen_320.jpg",
                                "textContent": null
                            }, {
                                "id": 122581,
                                "guid": "a14d7149-f87c-4e30-bcfe-0fd05c413cd1",
                                "resourceType": "PropertyPhoto",
                                "isPublic": true,
                                "description": null,
                                "filename": "3-dinning kitchen_1280.jpg",
                                "sizeInByte": null,
                                "contentType": "image/jpeg",
                                "url": "https://roofstock-cdn.azureedge.net/public/properties/1625012/photo/a14d7149-f87c-4e30-bcfe-0fd05c413cd1_3-dinning_kitchen_1280.jpg",
                                "urlMedium": "https://roofstock-cdn.azureedge.net/public/properties/1625012/photo/a14d7149-f87c-4e30-bcfe-0fd05c413cd1_3-dinning_kitchen_640.jpg",
                                "urlSmall": "https://roofstock-cdn.azureedge.net/public/properties/1625012/photo/a14d7149-f87c-4e30-bcfe-0fd05c413cd1_3-dinning_kitchen_320.jpg",
                                "textContent": null
                            }, {
                                "id": 122583,
                                "guid": "1b29dacc-e9f4-489d-9228-f308cd4c6e46",
                                "resourceType": "PropertyPhoto",
                                "isPublic": true,
                                "description": null,
                                "filename": "4- 3281 Kent Drive_1280.jpg",
                                "sizeInByte": null,
                                "contentType": "image/jpeg",
                                "url": "https://roofstock-cdn.azureedge.net/public/properties/1625012/photo/1b29dacc-e9f4-489d-9228-f308cd4c6e46_4-_3281_Kent_Drive_1280.jpg",
                                "urlMedium": "https://roofstock-cdn.azureedge.net/public/properties/1625012/photo/1b29dacc-e9f4-489d-9228-f308cd4c6e46_4-_3281_Kent_Drive_640.jpg",
                                "urlSmall": "https://roofstock-cdn.azureedge.net/public/properties/1625012/photo/1b29dacc-e9f4-489d-9228-f308cd4c6e46_4-_3281_Kent_Drive_320.jpg",
                                "textContent": null
                            }, {
                                "id": 122585,
                                "guid": "3cf3ad35-ca2f-4322-a362-d912af01d8b7",
                                "resourceType": "PropertyPhoto",
                                "isPublic": true,
                                "description": null,
                                "filename": "5 - Bathroom_1280.jpg",
                                "sizeInByte": null,
                                "contentType": "image/jpeg",
                                "url": "https://roofstock-cdn.azureedge.net/public/properties/1625012/photo/3cf3ad35-ca2f-4322-a362-d912af01d8b7_5_-_Bathroom_1280.jpg",
                                "urlMedium": "https://roofstock-cdn.azureedge.net/public/properties/1625012/photo/3cf3ad35-ca2f-4322-a362-d912af01d8b7_5_-_Bathroom_640.jpg",
                                "urlSmall": "https://roofstock-cdn.azureedge.net/public/properties/1625012/photo/3cf3ad35-ca2f-4322-a362-d912af01d8b7_5_-_Bathroom_320.jpg",
                                "textContent": null
                            }
                        ],
                        "floorPlans": [{
                                "id": 118805,
                                "guid": "5eb2494c-2ecc-44a4-bc29-b3757f1c2308",
                                "resourceType": "PropertyFloorPlan",
                                "isPublic": true,
                                "description": null,
                                "filename": "im-3281-kent_1280.jpg",
                                "sizeInByte": null,
                                "contentType": "image/jpeg",
                                "url": "https://roofstock-cdn.azureedge.net/public/properties/1625012/photo/5eb2494c-2ecc-44a4-bc29-b3757f1c2308_im-3281-kent_1280.jpg",
                                "urlMedium": "https://roofstock-cdn.azureedge.net/public/properties/1625012/photo/5eb2494c-2ecc-44a4-bc29-b3757f1c2308_im-3281-kent_640.jpg",
                                "urlSmall": "https://roofstock-cdn.azureedge.net/public/properties/1625012/photo/5eb2494c-2ecc-44a4-bc29-b3757f1c2308_im-3281-kent_320.jpg",
                                "textContent": null
                            }
                        ],
                        "threeDRenderings": [{
                                "id": 118807,
                                "guid": "fbba169f-b3f6-4422-a9f6-cf251d0d108a",
                                "resourceType": "Property3DTour",
                                "isPublic": true,
                                "description": null,
                                "filename": "3281 Kent Drive_480p.mp4",
                                "sizeInByte": null,
                                "contentType": "application/octet-stream",
                                "url": "https://rs1pub1content.blob.core.windows.net/public/properties/1625012/photo/fbba169f-b3f6-4422-a9f6-cf251d0d108a_3281_Kent_Drive_480p.mp4",
                                "urlMedium": null,
                                "urlSmall": null,
                                "textContent": null
                            }
                        ],
                        "audios": []
                    },
                    "manager": null,
                    "seller": null,
                    "sellerBroker": null,
                    "hoa": null,
                    "lease": {
                        "leaseSummary": {
                            "occupancy": "Occupied",
                            "leasingStatus": null,
                            "marketedRent": null,
                            "paymentStatus": "Current",
                            "leaseStartDate": "2014-10-15T00:00:00",
                            "leaseEndDate": "2016-04-14T00:00:00",
                            "monthlyRent": 1025.00,
                            "securityDepositAmount": 1200.00,
                            "hasPet": null,
                            "petFeeAmount": null,
                            "isPetsDeposit": true,
                            "petsDepositAmount": null,
                            "isLeaseConcessions": null,
                            "isRentersInsuranceRequired": true,
                            "isSection8": false,
                            "isTenantBackgroundChecked": true,
                            "isTenantIncomeAbove3x": true,
                            "isTenantMayTerminateEarly": null,
                            "isTenantPurchaseOption": null
                        },
                        "utilitiesOwnership": {
                            "electric": "Tenant",
                            "gas": "Tenant",
                            "water": "Tenant",
                            "garbage": "Tenant",
                            "pool": "NotApplicable",
                            "landscaping": "Tenant",
                            "pestControl": "Tenant"
                        },
                        "applianceOwnership": {
                            "refrigerator": "Owner",
                            "dishwasher": "Owner",
                            "washer": "Tenant",
                            "dryer": "Tenant",
                            "microwave": "Tenant",
                            "stove": "Owner"
                        }
                    },
                    "diligences": [],
                    "googleMapOption": {
                        "hasStreetView": true,
                        "povHeading": 79,
                        "povPitch": 0,
                        "povLatitude": 28.1602170000000,
                        "povLongitude": -80.6472019000000
                    },
                    "inspectionType": null
                }, {
                    "id": 1625013,
                    "accountId": 100214,
                    "buyerAccountId": 100247,
                    "buyerUserId": 100350,
                    "externalId": null,
                    "programId": null,
                    "isDwellCertified": false,
                    "isAllowOffer": false,
                    "isAllowPreview": false,
                    "isFeatured": false,
                    "isRentGuaranteed": false,
                    "allowRentGuaranteedOptout": false,
                    "isSecuritized": false,
                    "isHot": true,
                    "isNew": false,
                    "isBargain": false,
                    "isDiligenceVaultUnlocked": false,
                    "isPropertyManagerOfferRetain": false,
                    "isHoa": false,
                    "hasAudio": false,
                    "hasDiligenceVaultDocuments": true,
                    "market": 1001,
                    "daysOnMarket": 56,
                    "latitude": 27.9274600000000,
                    "longitude": -80.6522900000000,
                    "propertyName": null,
                    "description": "\r\n* List price is approximately 65% of peak value from early 2007\r\n* Estimated market rent is $50.00/month above current rent\r\n* Per inspection report both the roof and a/c have more than ten years of remaining useful life\r\n* 20 miles from Melbourne Beach & 10 miles from the Florida Institute of Technology\r\n* Built in 2002\r\n",
                    "highlights": null,
                    "mainImageUrl": "https://roofstock-cdn.azureedge.net/public/properties/1625013/photo/6410835f-a97e-4388-bd46-0e2b82bc24c9_1_-_img1366x768-2_640.jpg",
                    "personalProperties": null,
                    "diligenceVaultSummary": "<ul><li>Property Valuation:<br/>$120,000</li><li>Estimated Market Rent: $1,040</li><li>Inspection Report:<br/>Estimated Repairs: $450</li></ul>",
                    "featuredReason": null,
                    "status": "Sold",
                    "allowedFundingTypes": "All",
                    "allowableSaleTypes": "Individual, Bulk",
                    "visibility": "Public",
                    "priceVisibility": "ShowPrice",
                    "propertyType": "Unspecified",
                    "certificationLevel": "Certified",
                    "escrowClosingDate": "2016-03-06T00:00:00Z",
                    "address": {
                        "address1": "718 Reading Street SE",
                        "address2": null,
                        "city": "Palm Bay",
                        "country": "USA",
                        "county": null,
                        "district": null,
                        "state": "FL",
                        "zip": "32909",
                        "zipPlus4": null
                    },
                    "financial": {
                        "capRate": null,
                        "occupancy": "Occupied",
                        "isSection8": false,
                        "leaseStartDate": "2015-02-27T00:00:00",
                        "leaseEndDate": "2016-02-26T00:00:00",
                        "listPrice": 108000.00,
                        "salePrice": null,
                        "marketValue": null,
                        "monthlyHoa": null,
                        "monthlyManagementFees": null,
                        "monthlyRent": 950.00,
                        "netYield": null,
                        "turnOverFee": null,
                        "rehabCosts": null,
                        "rehabDate": null,
                        "yearlyInsuranceCost": null,
                        "yearlyPropertyTaxes": 2349.00,
                        "isCashOnly": false
                    },
                    "physical": {
                        "bathRooms": 2.0,
                        "bedRooms": 3.0,
                        "parcelNumber": "29 3729GU011600000400 ",
                        "isPool": false,
                        "lotSize": 10018,
                        "squareFeet": 1461,
                        "stories": null,
                        "units": null,
                        "yearBuilt": 2002,
                        "zipYearBuilt": null
                    },
                    "score": {
                        "conditionScore": null,
                        "crimeScore": "B",
                        "neighborhoodScore": 5,
                        "overallScore": null,
                        "qualityScore": null,
                        "schoolScore": "B+",
                        "charterSchoolScore": "B",
                        "floodRiskScore": null,
                        "walkabilityScore": null
                    },
                    "valuation": {
                        "avmBpoValue": null,
                        "avmBpoAdjValue": null,
                        "avmBpoDate": null,
                        "rsAvmValue": 120000.00,
                        "rsAvmDate": null,
                        "rsBpoMergeValue": 120000.00
                    },
                    "resources": {
                        "photos": [{
                                "id": 122587,
                                "guid": "6410835f-a97e-4388-bd46-0e2b82bc24c9",
                                "resourceType": "PropertyPhoto",
                                "isPublic": true,
                                "description": null,
                                "filename": "1 - img1366x768-2_1280.jpg",
                                "sizeInByte": null,
                                "contentType": "image/jpeg",
                                "url": "https://roofstock-cdn.azureedge.net/public/properties/1625013/photo/6410835f-a97e-4388-bd46-0e2b82bc24c9_1_-_img1366x768-2_1280.jpg",
                                "urlMedium": "https://roofstock-cdn.azureedge.net/public/properties/1625013/photo/6410835f-a97e-4388-bd46-0e2b82bc24c9_1_-_img1366x768-2_640.jpg",
                                "urlSmall": "https://roofstock-cdn.azureedge.net/public/properties/1625013/photo/6410835f-a97e-4388-bd46-0e2b82bc24c9_1_-_img1366x768-2_320.jpg",
                                "textContent": null
                            }, {
                                "id": 122589,
                                "guid": "29a682d1-a331-4961-9a91-3233d37f37ff",
                                "resourceType": "PropertyPhoto",
                                "isPublic": true,
                                "description": null,
                                "filename": "2 - kitchen_1280.jpg",
                                "sizeInByte": null,
                                "contentType": "image/jpeg",
                                "url": "https://roofstock-cdn.azureedge.net/public/properties/1625013/photo/29a682d1-a331-4961-9a91-3233d37f37ff_2_-_kitchen_1280.jpg",
                                "urlMedium": "https://roofstock-cdn.azureedge.net/public/properties/1625013/photo/29a682d1-a331-4961-9a91-3233d37f37ff_2_-_kitchen_640.jpg",
                                "urlSmall": "https://roofstock-cdn.azureedge.net/public/properties/1625013/photo/29a682d1-a331-4961-9a91-3233d37f37ff_2_-_kitchen_320.jpg",
                                "textContent": null
                            }, {
                                "id": 122591,
                                "guid": "fa81d63e-83dd-4004-863c-f2423d853fa2",
                                "resourceType": "PropertyPhoto",
                                "isPublic": true,
                                "description": null,
                                "filename": "3 living room1_1280.jpg",
                                "sizeInByte": null,
                                "contentType": "image/jpeg",
                                "url": "https://roofstock-cdn.azureedge.net/public/properties/1625013/photo/fa81d63e-83dd-4004-863c-f2423d853fa2_3_living_room1_1280.jpg",
                                "urlMedium": "https://roofstock-cdn.azureedge.net/public/properties/1625013/photo/fa81d63e-83dd-4004-863c-f2423d853fa2_3_living_room1_640.jpg",
                                "urlSmall": "https://roofstock-cdn.azureedge.net/public/properties/1625013/photo/fa81d63e-83dd-4004-863c-f2423d853fa2_3_living_room1_320.jpg",
                                "textContent": null
                            }, {
                                "id": 122593,
                                "guid": "11908fce-576f-40fd-a52a-97429caa3fea",
                                "resourceType": "PropertyPhoto",
                                "isPublic": true,
                                "description": null,
                                "filename": "4 - _1280.jpg",
                                "sizeInByte": null,
                                "contentType": "image/jpeg",
                                "url": "https://roofstock-cdn.azureedge.net/public/properties/1625013/photo/11908fce-576f-40fd-a52a-97429caa3fea_4_-__1280.jpg",
                                "urlMedium": "https://roofstock-cdn.azureedge.net/public/properties/1625013/photo/11908fce-576f-40fd-a52a-97429caa3fea_4_-__640.jpg",
                                "urlSmall": "https://roofstock-cdn.azureedge.net/public/properties/1625013/photo/11908fce-576f-40fd-a52a-97429caa3fea_4_-__320.jpg",
                                "textContent": null
                            }, {
                                "id": 122595,
                                "guid": "0f1d6479-d383-48c9-b8cf-e579d44be66a",
                                "resourceType": "PropertyPhoto",
                                "isPublic": true,
                                "description": null,
                                "filename": "5-room_1280.jpg",
                                "sizeInByte": null,
                                "contentType": "image/jpeg",
                                "url": "https://roofstock-cdn.azureedge.net/public/properties/1625013/photo/0f1d6479-d383-48c9-b8cf-e579d44be66a_5-room_1280.jpg",
                                "urlMedium": "https://roofstock-cdn.azureedge.net/public/properties/1625013/photo/0f1d6479-d383-48c9-b8cf-e579d44be66a_5-room_640.jpg",
                                "urlSmall": "https://roofstock-cdn.azureedge.net/public/properties/1625013/photo/0f1d6479-d383-48c9-b8cf-e579d44be66a_5-room_320.jpg",
                                "textContent": null
                            }, {
                                "id": 122597,
                                "guid": "0a779120-4af7-43e7-ad20-9901fe4accb3",
                                "resourceType": "PropertyPhoto",
                                "isPublic": true,
                                "description": null,
                                "filename": "6bathroom1_1280.jpg",
                                "sizeInByte": null,
                                "contentType": "image/jpeg",
                                "url": "https://roofstock-cdn.azureedge.net/public/properties/1625013/photo/0a779120-4af7-43e7-ad20-9901fe4accb3_6bathroom1_1280.jpg",
                                "urlMedium": "https://roofstock-cdn.azureedge.net/public/properties/1625013/photo/0a779120-4af7-43e7-ad20-9901fe4accb3_6bathroom1_640.jpg",
                                "urlSmall": "https://roofstock-cdn.azureedge.net/public/properties/1625013/photo/0a779120-4af7-43e7-ad20-9901fe4accb3_6bathroom1_320.jpg",
                                "textContent": null
                            }
                        ],
                        "floorPlans": [{
                                "id": 118829,
                                "guid": "c6531332-f4f1-4baf-be70-cfac06b5dc2d",
                                "resourceType": "PropertyFloorPlan",
                                "isPublic": true,
                                "description": null,
                                "filename": "im-718-reading_1280.jpg",
                                "sizeInByte": null,
                                "contentType": "image/jpeg",
                                "url": "https://roofstock-cdn.azureedge.net/public/properties/1625013/photo/c6531332-f4f1-4baf-be70-cfac06b5dc2d_im-718-reading_1280.jpg",
                                "urlMedium": "https://roofstock-cdn.azureedge.net/public/properties/1625013/photo/c6531332-f4f1-4baf-be70-cfac06b5dc2d_im-718-reading_640.jpg",
                                "urlSmall": "https://roofstock-cdn.azureedge.net/public/properties/1625013/photo/c6531332-f4f1-4baf-be70-cfac06b5dc2d_im-718-reading_320.jpg",
                                "textContent": null
                            }
                        ],
                        "threeDRenderings": [{
                                "id": 118831,
                                "guid": "b69944cf-0533-45e2-879d-30fa67009788",
                                "resourceType": "Property3DTour",
                                "isPublic": true,
                                "description": null,
                                "filename": "718_ReadingSt_480p.mp4",
                                "sizeInByte": null,
                                "contentType": "application/octet-stream",
                                "url": "https://rs1pub1content.blob.core.windows.net/public/properties/1625013/photo/b69944cf-0533-45e2-879d-30fa67009788_718_ReadingSt_480p.mp4",
                                "urlMedium": null,
                                "urlSmall": null,
                                "textContent": null
                            }
                        ],
                        "audios": []
                    },
                    "manager": null,
                    "seller": null,
                    "sellerBroker": null,
                    "hoa": null,
                    "lease": {
                        "leaseSummary": {
                            "occupancy": "Occupied",
                            "leasingStatus": null,
                            "marketedRent": null,
                            "paymentStatus": "Current",
                            "leaseStartDate": "2015-02-27T00:00:00",
                            "leaseEndDate": "2016-02-26T00:00:00",
                            "monthlyRent": 950.00,
                            "securityDepositAmount": 950.00,
                            "hasPet": null,
                            "petFeeAmount": null,
                            "isPetsDeposit": true,
                            "petsDepositAmount": 0.00,
                            "isLeaseConcessions": null,
                            "isRentersInsuranceRequired": true,
                            "isSection8": false,
                            "isTenantBackgroundChecked": true,
                            "isTenantIncomeAbove3x": true,
                            "isTenantMayTerminateEarly": null,
                            "isTenantPurchaseOption": null
                        },
                        "utilitiesOwnership": {
                            "electric": "Tenant",
                            "gas": "Tenant",
                            "water": "Tenant",
                            "garbage": "Tenant",
                            "pool": "NotApplicable",
                            "landscaping": "Tenant",
                            "pestControl": "Tenant"
                        },
                        "applianceOwnership": {
                            "refrigerator": "Owner",
                            "dishwasher": "Owner",
                            "washer": "Tenant",
                            "dryer": "Tenant",
                            "microwave": "Owner",
                            "stove": "Owner"
                        }
                    },
                    "diligences": [],
                    "googleMapOption": {
                        "hasStreetView": true,
                        "povHeading": 136,
                        "povPitch": 0,
                        "povLatitude": 27.9274640000000,
                        "povLongitude": -80.6522890000000
                    },
                    "inspectionType": null
                }, {
                    "id": 1625014,
                    "accountId": 100214,
                    "buyerAccountId": 100247,
                    "buyerUserId": 100350,
                    "externalId": null,
                    "programId": null,
                    "isDwellCertified": false,
                    "isAllowOffer": false,
                    "isAllowPreview": false,
                    "isFeatured": false,
                    "isRentGuaranteed": false,
                    "allowRentGuaranteedOptout": false,
                    "isSecuritized": false,
                    "isHot": true,
                    "isNew": false,
                    "isBargain": false,
                    "isDiligenceVaultUnlocked": false,
                    "isPropertyManagerOfferRetain": false,
                    "isHoa": false,
                    "hasAudio": false,
                    "hasDiligenceVaultDocuments": true,
                    "market": 1001,
                    "daysOnMarket": 56,
                    "latitude": 28.0001200000000,
                    "longitude": -80.6450600000000,
                    "propertyName": null,
                    "description": "\r\n* List price is approximately 60% of peak value from mid-2006\r\n* Estimated market rent is $150/month above current rent\r\n* Less than 2 miles from Eastern Florida State College & 15 miles from Melbourne Beach\r\n",
                    "highlights": null,
                    "mainImageUrl": "https://roofstock-cdn.azureedge.net/public/properties/1625014/photo/198e7500-62bc-4696-8a00-72be6155b491_1_-_img1366x768-1_640.jpg",
                    "personalProperties": null,
                    "diligenceVaultSummary": "<ul><li>Property Valuation:<br/>$117,000</li><li>Estimated Market Rent: $980</li><li>Inspection Report:<br/>Estimated Repairs: $350</li></ul>",
                    "featuredReason": null,
                    "status": "Sold",
                    "allowedFundingTypes": "All",
                    "allowableSaleTypes": "Individual, Bulk",
                    "visibility": "Public",
                    "priceVisibility": "ShowPrice",
                    "propertyType": "Unspecified",
                    "certificationLevel": "Certified",
                    "escrowClosingDate": "2016-03-06T00:00:00Z",
                    "address": {
                        "address1": "971 Fairhaven Street NE",
                        "address2": null,
                        "city": "Palm Bay",
                        "country": "USA",
                        "county": null,
                        "district": null,
                        "state": "FL",
                        "zip": "32907",
                        "zipPlus4": null
                    },
                    "financial": {
                        "capRate": null,
                        "occupancy": "Occupied",
                        "isSection8": false,
                        "leaseStartDate": "2014-09-02T00:00:00",
                        "leaseEndDate": "2016-09-01T00:00:00",
                        "listPrice": 100000.00,
                        "salePrice": null,
                        "marketValue": null,
                        "monthlyHoa": null,
                        "monthlyManagementFees": null,
                        "monthlyRent": 800.00,
                        "netYield": null,
                        "turnOverFee": null,
                        "rehabCosts": null,
                        "rehabDate": null,
                        "yearlyInsuranceCost": 999.00,
                        "yearlyPropertyTaxes": 2065.00,
                        "isCashOnly": false
                    },
                    "physical": {
                        "bathRooms": 2.0,
                        "bedRooms": 3.0,
                        "parcelNumber": "28 3732FS002890002200",
                        "isPool": false,
                        "lotSize": 9583,
                        "squareFeet": 1140,
                        "stories": null,
                        "units": null,
                        "yearBuilt": 1992,
                        "zipYearBuilt": null
                    },
                    "score": {
                        "conditionScore": null,
                        "crimeScore": "B",
                        "neighborhoodScore": 4,
                        "overallScore": null,
                        "qualityScore": null,
                        "schoolScore": "B",
                        "charterSchoolScore": null,
                        "floodRiskScore": null,
                        "walkabilityScore": null
                    },
                    "valuation": {
                        "avmBpoValue": null,
                        "avmBpoAdjValue": null,
                        "avmBpoDate": null,
                        "rsAvmValue": 117000.00,
                        "rsAvmDate": null,
                        "rsBpoMergeValue": 117000.00
                    },
                    "resources": {
                        "photos": [{
                                "id": 122599,
                                "guid": "198e7500-62bc-4696-8a00-72be6155b491",
                                "resourceType": "PropertyPhoto",
                                "isPublic": true,
                                "description": null,
                                "filename": "1 - img1366x768-1_1280.jpg",
                                "sizeInByte": null,
                                "contentType": "image/jpeg",
                                "url": "https://roofstock-cdn.azureedge.net/public/properties/1625014/photo/198e7500-62bc-4696-8a00-72be6155b491_1_-_img1366x768-1_1280.jpg",
                                "urlMedium": "https://roofstock-cdn.azureedge.net/public/properties/1625014/photo/198e7500-62bc-4696-8a00-72be6155b491_1_-_img1366x768-1_640.jpg",
                                "urlSmall": "https://roofstock-cdn.azureedge.net/public/properties/1625014/photo/198e7500-62bc-4696-8a00-72be6155b491_1_-_img1366x768-1_320.jpg",
                                "textContent": null
                            }, {
                                "id": 122601,
                                "guid": "3cc86862-cb7d-4bc2-aec6-104b90ba5f34",
                                "resourceType": "PropertyPhoto",
                                "isPublic": true,
                                "description": null,
                                "filename": "2- range_1280.jpg",
                                "sizeInByte": null,
                                "contentType": "image/jpeg",
                                "url": "https://roofstock-cdn.azureedge.net/public/properties/1625014/photo/3cc86862-cb7d-4bc2-aec6-104b90ba5f34_2-_range_1280.jpg",
                                "urlMedium": "https://roofstock-cdn.azureedge.net/public/properties/1625014/photo/3cc86862-cb7d-4bc2-aec6-104b90ba5f34_2-_range_640.jpg",
                                "urlSmall": "https://roofstock-cdn.azureedge.net/public/properties/1625014/photo/3cc86862-cb7d-4bc2-aec6-104b90ba5f34_2-_range_320.jpg",
                                "textContent": null
                            }, {
                                "id": 122603,
                                "guid": "a1708af2-a246-4673-9b24-0c215ab2179e",
                                "resourceType": "PropertyPhoto",
                                "isPublic": true,
                                "description": null,
                                "filename": "3 - master bedroom 1_1280.jpg",
                                "sizeInByte": null,
                                "contentType": "image/jpeg",
                                "url": "https://roofstock-cdn.azureedge.net/public/properties/1625014/photo/a1708af2-a246-4673-9b24-0c215ab2179e_3_-_master_bedroom_1_1280.jpg",
                                "urlMedium": "https://roofstock-cdn.azureedge.net/public/properties/1625014/photo/a1708af2-a246-4673-9b24-0c215ab2179e_3_-_master_bedroom_1_640.jpg",
                                "urlSmall": "https://roofstock-cdn.azureedge.net/public/properties/1625014/photo/a1708af2-a246-4673-9b24-0c215ab2179e_3_-_master_bedroom_1_320.jpg",
                                "textContent": null
                            }, {
                                "id": 122605,
                                "guid": "22712e12-60b5-4a11-8391-19087bb188d2",
                                "resourceType": "PropertyPhoto",
                                "isPublic": true,
                                "description": null,
                                "filename": "4 - 971 Fairhaven Street NE-2_1280.jpg",
                                "sizeInByte": null,
                                "contentType": "image/jpeg",
                                "url": "https://roofstock-cdn.azureedge.net/public/properties/1625014/photo/22712e12-60b5-4a11-8391-19087bb188d2_4_-_971_Fairhaven_Street_NE-2_1280.jpg",
                                "urlMedium": "https://roofstock-cdn.azureedge.net/public/properties/1625014/photo/22712e12-60b5-4a11-8391-19087bb188d2_4_-_971_Fairhaven_Street_NE-2_640.jpg",
                                "urlSmall": "https://roofstock-cdn.azureedge.net/public/properties/1625014/photo/22712e12-60b5-4a11-8391-19087bb188d2_4_-_971_Fairhaven_Street_NE-2_320.jpg",
                                "textContent": null
                            }
                        ],
                        "floorPlans": [{
                                "id": 118855,
                                "guid": "7757db77-dbe5-415f-a5aa-17739de0b078",
                                "resourceType": "PropertyFloorPlan",
                                "isPublic": true,
                                "description": null,
                                "filename": "971 Fairhaven_1280.jpg",
                                "sizeInByte": null,
                                "contentType": "image/jpeg",
                                "url": "https://roofstock-cdn.azureedge.net/public/properties/1625014/photo/7757db77-dbe5-415f-a5aa-17739de0b078_971_Fairhaven_1280.jpg",
                                "urlMedium": "https://roofstock-cdn.azureedge.net/public/properties/1625014/photo/7757db77-dbe5-415f-a5aa-17739de0b078_971_Fairhaven_640.jpg",
                                "urlSmall": "https://roofstock-cdn.azureedge.net/public/properties/1625014/photo/7757db77-dbe5-415f-a5aa-17739de0b078_971_Fairhaven_320.jpg",
                                "textContent": null
                            }
                        ],
                        "threeDRenderings": [{
                                "id": 118857,
                                "guid": "d2cfa64c-db1f-4571-8438-03bd1f5f4c67",
                                "resourceType": "Property3DTour",
                                "isPublic": true,
                                "description": null,
                                "filename": "971_Fairhaven_Street_480p.mp4",
                                "sizeInByte": null,
                                "contentType": "application/octet-stream",
                                "url": "https://rs1pub1content.blob.core.windows.net/public/properties/1625014/photo/d2cfa64c-db1f-4571-8438-03bd1f5f4c67_971_Fairhaven_Street_480p.mp4",
                                "urlMedium": null,
                                "urlSmall": null,
                                "textContent": null
                            }
                        ],
                        "audios": []
                    },
                    "manager": null,
                    "seller": null,
                    "sellerBroker": null,
                    "hoa": null,
                    "lease": {
                        "leaseSummary": {
                            "occupancy": "Occupied",
                            "leasingStatus": null,
                            "marketedRent": null,
                            "paymentStatus": "Current",
                            "leaseStartDate": "2014-09-02T00:00:00",
                            "leaseEndDate": "2016-09-01T00:00:00",
                            "monthlyRent": 800.00,
                            "securityDepositAmount": 1200.00,
                            "hasPet": null,
                            "petFeeAmount": null,
                            "isPetsDeposit": false,
                            "petsDepositAmount": 0.00,
                            "isLeaseConcessions": null,
                            "isRentersInsuranceRequired": true,
                            "isSection8": false,
                            "isTenantBackgroundChecked": true,
                            "isTenantIncomeAbove3x": true,
                            "isTenantMayTerminateEarly": null,
                            "isTenantPurchaseOption": null
                        },
                        "utilitiesOwnership": {
                            "electric": "Tenant",
                            "gas": "Tenant",
                            "water": "Tenant",
                            "garbage": "Tenant",
                            "pool": "NotApplicable",
                            "landscaping": "Tenant",
                            "pestControl": "Tenant"
                        },
                        "applianceOwnership": {
                            "refrigerator": "Owner",
                            "dishwasher": "Owner",
                            "washer": "Tenant",
                            "dryer": "Tenant",
                            "microwave": "Owner",
                            "stove": "Owner"
                        }
                    },
                    "diligences": [],
                    "googleMapOption": {
                        "hasStreetView": true,
                        "povHeading": -7,
                        "povPitch": 0,
                        "povLatitude": 28.0001180000000,
                        "povLongitude": -80.6450570000000
                    },
                    "inspectionType": null
                }, {
                    "id": 1625015,
                    "accountId": 0,
                    "buyerAccountId": null,
                    "buyerUserId": null,
                    "externalId": null,
                    "programId": null,
                    "isDwellCertified": false,
                    "isAllowOffer": false,
                    "isAllowPreview": false,
                    "isFeatured": false,
                    "isRentGuaranteed": false,
                    "allowRentGuaranteedOptout": false,
                    "isSecuritized": false,
                    "isHot": false,
                    "isNew": false,
                    "isBargain": null,
                    "isDiligenceVaultUnlocked": false,
                    "isPropertyManagerOfferRetain": null,
                    "isHoa": null,
                    "hasAudio": false,
                    "hasDiligenceVaultDocuments": false,
                    "market": 1001,
                    "daysOnMarket": null,
                    "latitude": null,
                    "longitude": null,
                    "propertyName": null,
                    "description": null,
                    "highlights": null,
                    "mainImageUrl": null,
                    "personalProperties": null,
                    "diligenceVaultSummary": null,
                    "featuredReason": null,
                    "status": "OffMarket",
                    "allowedFundingTypes": null,
                    "allowableSaleTypes": null,
                    "visibility": "None",
                    "priceVisibility": "ShowPrice",
                    "propertyType": "Unspecified",
                    "certificationLevel": null,
                    "escrowClosingDate": null,
                    "address": {
                        "address1": "1359 Carr Circle NE",
                        "address2": null,
                        "city": "Palm Bay",
                        "country": "USA",
                        "county": null,
                        "district": null,
                        "state": "FL",
                        "zip": "32905",
                        "zipPlus4": null
                    },
                    "financial": null,
                    "physical": null,
                    "score": null,
                    "valuation": null,
                    "resources": null,
                    "manager": null,
                    "seller": null,
                    "sellerBroker": null,
                    "hoa": null,
                    "lease": null,
                    "diligences": null,
                    "googleMapOption": null,
                    "inspectionType": null
                }
            ]
        };
    }
    PropertyInMemDataService.prototype.get = function (reqInfo) {
        // console.log('PropertyInMemDataService  get for reqInfo', reqInfo.resourceUrl);
    };
    PropertyInMemDataService.prototype.put = function (reqInfo) {
        var _this = this;
        var options;
        switch (reqInfo.id) {
            case "update":
                var updateItem = new __WEBPACK_IMPORTED_MODULE_3__property_clone__["a" /* Property */](reqInfo.req['body']);
                this.updateLocalStorageName('update', 'properties', updateItem);
                var data = updateItem;
                options = { body: { data: data }, status: __WEBPACK_IMPORTED_MODULE_1_angular_in_memory_web_api_http_status_codes__["a" /* STATUS */].OK };
                break;
        }
        return reqInfo.utils.createResponse$(function () {
            return _this.finishOptions(options, reqInfo);
        });
    };
    PropertyInMemDataService.prototype.post = function (reqInfo) {
        var _this = this;
        var options;
        switch (reqInfo.id) {
            case "add":
                var newItem = Object.assign({}, reqInfo.req['body'], { id: this.getLocalStorage('poperties').length });
                var updateItem = new __WEBPACK_IMPORTED_MODULE_3__property_clone__["a" /* Property */](newItem);
                this.updateLocalStorageName('add', 'properties', updateItem);
                var data = updateItem;
                options = { body: { data: data }, status: __WEBPACK_IMPORTED_MODULE_1_angular_in_memory_web_api_http_status_codes__["a" /* STATUS */].OK };
                break;
        }
        return reqInfo.utils.createResponse$(function () {
            return _this.finishOptions(options, reqInfo);
        });
    };
    PropertyInMemDataService.prototype.createDb = function (reqInfo) {
        var localProperties = this.urlReturnData['properties'];
        var properties = localProperties;
        this.setLocalStorage('properties', properties);
        return { properties: properties };
    };
    PropertyInMemDataService.prototype.finishOptions = function (options, _a) {
        var headers = _a.headers, url = _a.url;
        options.statusText = Object(__WEBPACK_IMPORTED_MODULE_1_angular_in_memory_web_api_http_status_codes__["b" /* getStatusText */])(options.status);
        options.headers = headers;
        options.url = url;
        return options;
    };
    PropertyInMemDataService.prototype.updateLocalStorageName = function (type, collectionName, itemUpdate) {
        var localCollection = this.getLocalStorage(collectionName);
        if (type === 'update') {
            var updateCollection = localCollection.map(function (item) {
                if (item.id === itemUpdate.id) {
                    item = Object.assign({}, item, itemUpdate);
                }
                return item;
            });
            this.setLocalStorage(collectionName, updateCollection);
        }
        else {
            localCollection = localCollection.concat([itemUpdate]);
            this.setLocalStorage(collectionName, localCollection);
        }
    };
    PropertyInMemDataService.prototype.setLocalStorage = function (itemName, colleciton) {
        localStorage.setItem(itemName, JSON.stringify(colleciton));
    };
    PropertyInMemDataService.prototype.getLocalStorage = function (itemName) {
        return JSON.parse(localStorage.getItem(itemName)) || [];
    };
    PropertyInMemDataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
    ], PropertyInMemDataService);
    return PropertyInMemDataService;
}());

//# sourceMappingURL=property.in.mem.data.service.js.map

/***/ }),

/***/ "../../../../../src/app/data-layer/api-services/properties.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PropertiesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_wrapper_service__ = __webpack_require__("../../../../../src/app/data-layer/api-services/http.wrapper.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PropertiesService = /** @class */ (function () {
    function PropertiesService(httpWrapperService) {
        this.httpWrapperService = httpWrapperService;
        this.initialPropertyUrl = 'http://dev1-sample.azurewebsites.net/properties.json';
        this.propertiesUrl = 'api/properties'; // URL to web api
    }
    PropertiesService.prototype.getProperties = function (ErrorActionType, SpecificErrorType, SuccessType) {
        var _this = this;
        var getParams = {
            errorActionType: ErrorActionType,
            specificErrorType: SpecificErrorType,
            responseObject: 'properties',
            successActionType: SuccessType,
            uri: "" + this.propertiesUrl
        };
        return this.httpWrapperService.get(getParams).map(function (response) { return (_this.checkForClientDev(response)); });
    };
    PropertiesService.prototype.getProperty = function (payload, ErrorActionType, SpecificErrorType, SuccessType) {
        var _this = this;
        var getParams = {
            errorActionType: ErrorActionType,
            specificErrorType: SpecificErrorType,
            payload: payload,
            responseObject: 'property',
            successActionType: SuccessType,
            uri: this.propertiesUrl + "/" + payload.id
        };
        return this.httpWrapperService.post(getParams).map(function (response) { return (_this.checkForClientDev(response)); });
    };
    PropertiesService.prototype.addProperty = function (payload, ErrorActionType, SpecificErrorType, SuccessType) {
        var _this = this;
        var postParams = {
            errorActionType: ErrorActionType,
            specificErrorType: SpecificErrorType,
            payload: payload,
            responseObject: 'property',
            successActionType: SuccessType,
            uri: this.propertiesUrl + "/add"
        };
        return this.httpWrapperService.post(postParams).map(function (response) { return _this.checkForClientDev(response); });
    };
    PropertiesService.prototype.updateProperty = function (payload, ErrorActionType, SpecificErrorType, SuccessType) {
        var _this = this;
        var postParams = {
            errorActionType: ErrorActionType,
            specificErrorType: SpecificErrorType,
            payload: payload,
            responseObject: 'property',
            successActionType: SuccessType,
            uri: this.propertiesUrl + "/update"
        };
        return this.httpWrapperService.put(postParams).map(function (response) { return _this.checkForClientDev(response); });
    };
    PropertiesService.prototype.deleteProperty = function (payload, ErrorActionType, SpecificErrorType, SuccessType) {
        var postParams = {
            errorActionType: ErrorActionType,
            specificErrorType: SpecificErrorType,
            payload: payload,
            responseObject: 'property',
            successActionType: SuccessType,
            uri: this.propertiesUrl + "/delete"
        };
        return this.httpWrapperService.post(postParams);
    };
    PropertiesService.prototype.checkForClientDev = function (response) {
        // because I am using api in memory  am commenting this out
        //console.log('checkForClientDev response = ',response)
        if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
            //return response;
            return Object.assign(response, { payload: response.payload['data'] });
        }
        else {
            return Object.assign(response, { payload: response.payload['data'] });
        }
    };
    PropertiesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__http_wrapper_service__["a" /* HttpWrapperService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__http_wrapper_service__["a" /* HttpWrapperService */]) === "function" && _a || Object])
    ], PropertiesService);
    return PropertiesService;
    var _a;
}());

//# sourceMappingURL=properties.service.js.map

/***/ }),

/***/ "../../../../../src/app/data-layer/ngrx-data/actions/error.actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorTypes; });
/* unused harmony export ReportError */
/* unused harmony export RemoveError */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__business_layer_shared_types_actions_error_action_types__ = __webpack_require__("../../../../../src/app/business-layer/shared-types/actions/error.action.types.ts");

var ErrorTypes = __WEBPACK_IMPORTED_MODULE_0__business_layer_shared_types_actions_error_action_types__;
var ReportError = /** @class */ (function () {
    function ReportError(payload) {
        this.payload = payload;
        this.type = __WEBPACK_IMPORTED_MODULE_0__business_layer_shared_types_actions_error_action_types__["REPORT_ERROR"];
    }
    return ReportError;
}());

var RemoveError = /** @class */ (function () {
    function RemoveError(payload) {
        this.payload = payload;
        this.type = __WEBPACK_IMPORTED_MODULE_0__business_layer_shared_types_actions_error_action_types__["REMOVE_ERROR"];
    }
    return RemoveError;
}());

//# sourceMappingURL=error.actions.js.map

/***/ }),

/***/ "../../../../../src/app/data-layer/ngrx-data/actions/properties.actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PropertiesTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetPropertiesCollection; });
/* unused harmony export GetPropertiesCollectionFailure */
/* unused harmony export GetPropertiesCollectionSuccess */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return UpdatePropertyAttempt; });
/* unused harmony export UpdatePropertyFailure */
/* unused harmony export UpdatePropertySuccess */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__business_layer_shared_types_actions_properties_action_types__ = __webpack_require__("../../../../../src/app/business-layer/shared-types/actions/properties.action.types.ts");

var PropertiesTypes = __WEBPACK_IMPORTED_MODULE_0__business_layer_shared_types_actions_properties_action_types__;
var GetPropertiesCollection = /** @class */ (function () {
    function GetPropertiesCollection() {
        this.type = __WEBPACK_IMPORTED_MODULE_0__business_layer_shared_types_actions_properties_action_types__["FETCH_PROPERTIES_COLLECTION_ATTEMPT"];
    }
    return GetPropertiesCollection;
}());

var GetPropertiesCollectionFailure = /** @class */ (function () {
    function GetPropertiesCollectionFailure(payload) {
        this.payload = payload;
        this.type = __WEBPACK_IMPORTED_MODULE_0__business_layer_shared_types_actions_properties_action_types__["FETCH_PROPERTIES_COLLECTION_FAILURE"];
    }
    return GetPropertiesCollectionFailure;
}());

var GetPropertiesCollectionSuccess = /** @class */ (function () {
    function GetPropertiesCollectionSuccess(payload) {
        this.payload = payload;
        this.type = __WEBPACK_IMPORTED_MODULE_0__business_layer_shared_types_actions_properties_action_types__["FETCH_PROPERTIES_COLLECTION_SUCCESS"];
    }
    return GetPropertiesCollectionSuccess;
}());

var UpdatePropertyAttempt = /** @class */ (function () {
    function UpdatePropertyAttempt(payload) {
        this.payload = payload;
        this.type = __WEBPACK_IMPORTED_MODULE_0__business_layer_shared_types_actions_properties_action_types__["UPDATE_PROPERTY_IN_COLLECTION_ATTEMPT"];
    }
    return UpdatePropertyAttempt;
}());

var UpdatePropertyFailure = /** @class */ (function () {
    function UpdatePropertyFailure(payload) {
        this.payload = payload;
        this.type = __WEBPACK_IMPORTED_MODULE_0__business_layer_shared_types_actions_properties_action_types__["UPDATE_PROPERTY_IN_COLLECTION_FAILURE"];
    }
    return UpdatePropertyFailure;
}());

var UpdatePropertySuccess = /** @class */ (function () {
    function UpdatePropertySuccess(payload) {
        this.payload = payload;
        this.type = __WEBPACK_IMPORTED_MODULE_0__business_layer_shared_types_actions_properties_action_types__["UPDATE_PROPERTY_IN_COLLECTION_SUCCESS"];
    }
    return UpdatePropertySuccess;
}());

//# sourceMappingURL=properties.actions.js.map

/***/ }),

/***/ "../../../../../src/app/data-layer/ngrx-data/effects/error.effects.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__actions_error_actions__ = __webpack_require__("../../../../../src/app/data-layer/ngrx-data/actions/error.actions.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ErrorEffects = /** @class */ (function () {
    function ErrorEffects(actions$, router) {
        var _this = this;
        this.actions$ = actions$;
        this.router = router;
        this.catchAllRemoteError$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_7__actions_error_actions__["a" /* ErrorTypes */].REPORT_ERROR)
            .map(function (action) { return action.payload; })
            .switchMap(function (payload) {
            return __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["a" /* Observable */].of(_this.router.navigateByUrl('/error'));
        });
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_6__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], ErrorEffects.prototype, "catchAllRemoteError$", void 0);
    ErrorEffects = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__ngrx_effects__["a" /* Actions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__ngrx_effects__["a" /* Actions */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* Router */]) === "function" && _b || Object])
    ], ErrorEffects);
    return ErrorEffects;
    var _a, _b;
}());

//# sourceMappingURL=error.effects.js.map

/***/ }),

/***/ "../../../../../src/app/data-layer/ngrx-data/effects/properties.effects.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PropertiesEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_withLatestFrom__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/withLatestFrom.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_mergeMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__actions_error_actions__ = __webpack_require__("../../../../../src/app/data-layer/ngrx-data/actions/error.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__actions_properties_actions__ = __webpack_require__("../../../../../src/app/data-layer/ngrx-data/actions/properties.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__api_services_properties_service__ = __webpack_require__("../../../../../src/app/data-layer/api-services/properties.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var PropertiesEffects = /** @class */ (function () {
    function PropertiesEffects(store, propertiesService, actions$) {
        var _this = this;
        this.store = store;
        this.propertiesService = propertiesService;
        this.actions$ = actions$;
        this.fetchPropertiesCollection = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_12__actions_properties_actions__["b" /* PropertiesTypes */].FETCH_PROPERTIES_COLLECTION_ATTEMPT)
            .switchMap(function () {
            return _this.propertiesService.getProperties(__WEBPACK_IMPORTED_MODULE_11__actions_error_actions__["a" /* ErrorTypes */].REPORT_ERROR, __WEBPACK_IMPORTED_MODULE_12__actions_properties_actions__["b" /* PropertiesTypes */].FETCH_PROPERTIES_COLLECTION_FAILURE, __WEBPACK_IMPORTED_MODULE_12__actions_properties_actions__["b" /* PropertiesTypes */].FETCH_PROPERTIES_COLLECTION_SUCCESS);
        });
        this.updatePropertyInCollectionAttempt = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_12__actions_properties_actions__["b" /* PropertiesTypes */].UPDATE_PROPERTY_IN_COLLECTION_ATTEMPT)
            .map(function (action) { return action.payload; })
            .switchMap(function (payload) {
            return _this.propertiesService.updateProperty(payload, __WEBPACK_IMPORTED_MODULE_11__actions_error_actions__["a" /* ErrorTypes */].REPORT_ERROR, __WEBPACK_IMPORTED_MODULE_12__actions_properties_actions__["b" /* PropertiesTypes */].UPDATE_PROPERTY_IN_COLLECTION_FAILURE, __WEBPACK_IMPORTED_MODULE_12__actions_properties_actions__["b" /* PropertiesTypes */].UPDATE_PROPERTY_IN_COLLECTION_SUCCESS);
        });
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_10__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["a" /* Observable */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["a" /* Observable */]) === "function" && _a || Object)
    ], PropertiesEffects.prototype, "fetchPropertiesCollection", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_10__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], PropertiesEffects.prototype, "updatePropertyInCollectionAttempt", void 0);
    PropertiesEffects = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_9__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__ngrx_store__["b" /* Store */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_13__api_services_properties_service__["a" /* PropertiesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_13__api_services_properties_service__["a" /* PropertiesService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_10__ngrx_effects__["a" /* Actions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__ngrx_effects__["a" /* Actions */]) === "function" && _d || Object])
    ], PropertiesEffects);
    return PropertiesEffects;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=properties.effects.js.map

/***/ }),

/***/ "../../../../../src/app/data-layer/ngrx-data/mock.ngrx.data.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MockNGRxDataModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_services_properties_service__ = __webpack_require__("../../../../../src/app/data-layer/api-services/properties.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api_services_http_wrapper_service__ = __webpack_require__("../../../../../src/app/data-layer/api-services/http.wrapper.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__api_services_mock_property_in_mem_data_service__ = __webpack_require__("../../../../../src/app/data-layer/api-services/mock/property.in.mem.data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular_in_memory_web_api__ = __webpack_require__("../../../../angular-in-memory-web-api/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__reducers_index__ = __webpack_require__("../../../../../src/app/data-layer/ngrx-data/reducers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__effects_error_effects__ = __webpack_require__("../../../../../src/app/data-layer/ngrx-data/effects/error.effects.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__effects_properties_effects__ = __webpack_require__("../../../../../src/app/data-layer/ngrx-data/effects/properties.effects.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







/*
     ngrx base library
 */



/*
     effects
 */


/*
   Routes and Guards
 */
var MockNGRxDataModule = /** @class */ (function () {
    function MockNGRxDataModule(parentModule) {
        if (parentModule) {
            throw new Error('MockNGRxDataModule already loaded; Import in root module only.');
        }
    }
    MockNGRxDataModule_1 = MockNGRxDataModule;
    MockNGRxDataModule.forRoot = function () {
        return {
            ngModule: MockNGRxDataModule_1,
            providers: [__WEBPACK_IMPORTED_MODULE_4__api_services_http_wrapper_service__["a" /* HttpWrapperService */],
                __WEBPACK_IMPORTED_MODULE_3__api_services_properties_service__["a" /* PropertiesService */]]
        };
    };
    MockNGRxDataModule = MockNGRxDataModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_7__ngrx_store__["c" /* StoreModule */].forRoot(__WEBPACK_IMPORTED_MODULE_9__reducers_index__["c" /* reducers */], { metaReducers: __WEBPACK_IMPORTED_MODULE_9__reducers_index__["b" /* metaReducers */] }),
                __WEBPACK_IMPORTED_MODULE_6_angular_in_memory_web_api__["a" /* InMemoryWebApiModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__api_services_mock_property_in_mem_data_service__["a" /* PropertyInMemDataService */]),
                __WEBPACK_IMPORTED_MODULE_8__ngrx_effects__["c" /* EffectsModule */].forRoot([]),
                __WEBPACK_IMPORTED_MODULE_8__ngrx_effects__["c" /* EffectsModule */].forFeature([__WEBPACK_IMPORTED_MODULE_10__effects_error_effects__["a" /* ErrorEffects */],
                    __WEBPACK_IMPORTED_MODULE_11__effects_properties_effects__["a" /* PropertiesEffects */]])],
            exports: [],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__api_services_http_wrapper_service__["a" /* HttpWrapperService */],
                __WEBPACK_IMPORTED_MODULE_3__api_services_properties_service__["a" /* PropertiesService */]
            ]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Optional */])()), __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* SkipSelf */])()),
        __metadata("design:paramtypes", [MockNGRxDataModule])
    ], MockNGRxDataModule);
    return MockNGRxDataModule;
    var MockNGRxDataModule_1;
}());

//# sourceMappingURL=mock.ngrx.data.module.js.map

/***/ }),

/***/ "../../../../../src/app/data-layer/ngrx-data/ngrx.data.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NGRxDataModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_services_http_wrapper_service__ = __webpack_require__("../../../../../src/app/data-layer/api-services/http.wrapper.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__business_layer_helpers_data_structures_service__ = __webpack_require__("../../../../../src/app/business-layer/helpers/data.structures.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__api_services_properties_service__ = __webpack_require__("../../../../../src/app/data-layer/api-services/properties.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__reducers_index__ = __webpack_require__("../../../../../src/app/data-layer/ngrx-data/reducers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__effects_error_effects__ = __webpack_require__("../../../../../src/app/data-layer/ngrx-data/effects/error.effects.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__effects_properties_effects__ = __webpack_require__("../../../../../src/app/data-layer/ngrx-data/effects/properties.effects.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






/*
     ngrx base library
 */



/*
     effects
 */


/*
   Routes and Guards
 */
var NGRxDataModule = /** @class */ (function () {
    function NGRxDataModule(parentModule) {
        if (parentModule) {
            throw new Error('NGRxDataModule already loaded; Import in root module only.');
        }
    }
    NGRxDataModule_1 = NGRxDataModule;
    NGRxDataModule.forRoot = function () {
        return {
            ngModule: NGRxDataModule_1,
            providers: [__WEBPACK_IMPORTED_MODULE_3__api_services_http_wrapper_service__["a" /* HttpWrapperService */],
                __WEBPACK_IMPORTED_MODULE_4__business_layer_helpers_data_structures_service__["a" /* DataStructureServices */],
                __WEBPACK_IMPORTED_MODULE_5__api_services_properties_service__["a" /* PropertiesService */]]
        };
    };
    NGRxDataModule = NGRxDataModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_6__ngrx_store__["c" /* StoreModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__reducers_index__["c" /* reducers */], { metaReducers: __WEBPACK_IMPORTED_MODULE_8__reducers_index__["b" /* metaReducers */] }),
                __WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["c" /* EffectsModule */].forRoot([]),
                __WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["c" /* EffectsModule */].forFeature([__WEBPACK_IMPORTED_MODULE_9__effects_error_effects__["a" /* ErrorEffects */],
                    __WEBPACK_IMPORTED_MODULE_10__effects_properties_effects__["a" /* PropertiesEffects */]])],
            exports: [],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__api_services_http_wrapper_service__["a" /* HttpWrapperService */],
                __WEBPACK_IMPORTED_MODULE_4__business_layer_helpers_data_structures_service__["a" /* DataStructureServices */],
                __WEBPACK_IMPORTED_MODULE_5__api_services_properties_service__["a" /* PropertiesService */]
            ]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Optional */])()), __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* SkipSelf */])()),
        __metadata("design:paramtypes", [NGRxDataModule])
    ], NGRxDataModule);
    return NGRxDataModule;
    var NGRxDataModule_1;
}());

//# sourceMappingURL=ngrx.data.module.js.map

/***/ }),

/***/ "../../../../../src/app/data-layer/ngrx-data/reducers/error/error.reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export initialState */
/* harmony export (immutable) */ __webpack_exports__["c"] = reducer;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getIds; });
/* unused harmony export getAll */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__business_layer_shared_types_actions_error_action_types__ = __webpack_require__("../../../../../src/app/business-layer/shared-types/actions/error.action.types.ts");


var initialState = {
    ids: [],
    entities: {}
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_1__business_layer_shared_types_actions_error_action_types__["REPORT_ERROR"]: {
            var errorObj = Object.assign({}, action.payload, { id: (Date.now()).toString() });
            var error = action.payload;
            return {
                ids: state.ids.concat([error.id]),
                entities: Object.assign({}, state.entities, (_a = {}, _a[error.id] = error, _a))
            };
        }
        case __WEBPACK_IMPORTED_MODULE_1__business_layer_shared_types_actions_error_action_types__["REMOVE_ERROR"]: {
            var errorId_1 = action.payload;
            if (state.ids.indexOf(errorId_1) > -1) {
                return state;
            }
            var errorIdsPostRemoval = state.ids.filter(function (id) { return id !== errorId_1; });
            var errorEntities = Object.assign({}, state.entities);
            delete errorEntities[errorId_1];
            return Object.assign({}, state, {
                ids: errorIdsPostRemoval,
                entities: errorEntities
            });
        }
        default: {
            return state;
        }
    }
    var _a;
}
var getEntities = function (state) { return state.entities; };
var getIds = function (state) { return state.ids; };
var getAll = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["f" /* createSelector */])(getEntities, getIds, function (entities, ids) {
    return ids.map(function (id) { return entities[id]; });
});
//# sourceMappingURL=error.reducer.js.map

/***/ }),

/***/ "../../../../../src/app/data-layer/ngrx-data/reducers/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return reducers; });
/* unused harmony export logger */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return metaReducers; });
/* unused harmony export getErrorState */
/* unused harmony export getErrorIds */
/* unused harmony export getErrorEntities */
/* unused harmony export getPropertiesState */
/* unused harmony export getPropertiesIds */
/* unused harmony export getCurrentCollectionId */
/* unused harmony export getPropertiesEntities */
/* unused harmony export getCurrentPropertiesCollection */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getCurrentCollectionProperties; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngrx_store_freeze__ = __webpack_require__("../../../../ngrx-store-freeze/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngrx_store_freeze___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ngrx_store_freeze__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__error_error_reducer__ = __webpack_require__("../../../../../src/app/data-layer/ngrx-data/reducers/error/error.reducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__properties_properties_reducer__ = __webpack_require__("../../../../../src/app/data-layer/ngrx-data/reducers/properties/properties.reducer.ts");


/**
 * storeFreeze prevents state from being mutated. When mutation occurs, an
 * exception will be thrown. This is useful during development mode to
 * ensure that none of the reducers accidentally mutates the state.
 */

/**
 * Every reducer module's default export is the reducer function itself. In
 * addition, each module should export a type or interface that describes
 * the state of the reducer plus any selector functions. The `* as`
 * notation packages up all of the exports into a single object.
 */


/**
 * Because metareducers take a reducer function and return a new reducer,
 * we can use our compose helper to chain them together. Here we are
 * using combineReducers to make our top level reducer, and then
 * wrapping that in storeLogger. Remember that compose applies
 * the result from right to left.
 */
var reducers = {
    errors: __WEBPACK_IMPORTED_MODULE_3__error_error_reducer__["c" /* reducer */],
    properties: __WEBPACK_IMPORTED_MODULE_4__properties_properties_reducer__["f" /* reducer */],
};
// console.log all actions
function logger(reducer) {
    return function (state, action) {
        console.log('state', state);
        console.log('action', action);
        return reducer(state, action);
    };
}
/**
 * By default, @ngrx/store uses combineReducers with the reducer map to compose
 * the root meta-reducer. To add more meta-reducers, provide an array of meta-reducers
 * that will be composed to form the root meta-reducer.
 */
var metaReducers = !__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].production
    ? [logger, __WEBPACK_IMPORTED_MODULE_2_ngrx_store_freeze__["storeFreeze"]]
    : [];
/**
 * Just like with the books selectors, we also have to compose the search
 * reducer's and collection reducer's selectors.
 */
var getErrorState = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["e" /* createFeatureSelector */])('errors');
var getErrorIds = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["f" /* createSelector */])(getErrorState, __WEBPACK_IMPORTED_MODULE_3__error_error_reducer__["b" /* getIds */]);
var getErrorEntities = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["f" /* createSelector */])(getErrorState, __WEBPACK_IMPORTED_MODULE_3__error_error_reducer__["a" /* getEntities */]);
var getPropertiesState = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["e" /* createFeatureSelector */])('properties');
var getPropertiesIds = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["f" /* createSelector */])(getPropertiesState, __WEBPACK_IMPORTED_MODULE_4__properties_properties_reducer__["e" /* getIds */]);
var getCurrentCollectionId = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["f" /* createSelector */])(getPropertiesState, __WEBPACK_IMPORTED_MODULE_4__properties_properties_reducer__["a" /* getCurrentCollectionId */]);
var getPropertiesEntities = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["f" /* createSelector */])(getPropertiesState, __WEBPACK_IMPORTED_MODULE_4__properties_properties_reducer__["d" /* getEntities */]);
var getCurrentPropertiesCollection = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["f" /* createSelector */])(getPropertiesState, __WEBPACK_IMPORTED_MODULE_4__properties_properties_reducer__["b" /* getCurrentPropertiesCollection */]);
var getCurrentCollectionProperties = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["f" /* createSelector */])(getPropertiesState, __WEBPACK_IMPORTED_MODULE_4__properties_properties_reducer__["c" /* getCurrentPropertiesCollectionProperties */]);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/data-layer/ngrx-data/reducers/properties/properties.reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export initialState */
/* harmony export (immutable) */ __webpack_exports__["f"] = reducer;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getCurrentCollectionId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getCurrentPropertiesCollection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getCurrentPropertiesCollectionProperties; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__business_layer_helpers_data_structures_service__ = __webpack_require__("../../../../../src/app/business-layer/helpers/data.structures.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__business_layer_shared_types_actions_properties_action_types__ = __webpack_require__("../../../../../src/app/business-layer/shared-types/actions/properties.action.types.ts");



var initialState = {
    ids: [],
    entities: {},
    currentCollectionId: ''
};
var dataStructureServices = new __WEBPACK_IMPORTED_MODULE_1__business_layer_helpers_data_structures_service__["a" /* DataStructureServices */]();
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_2__business_layer_shared_types_actions_properties_action_types__["FETCH_PROPERTIES_COLLECTION_SUCCESS"]: {
            if (action.payload) {
                var propertiesCollection = {};
                propertiesCollection.id = '' + state.ids.length + Math.floor(Math.random() * (100 - 1)) + 1,
                    propertiesCollection.properties = dataStructureServices.createPropertiesModels(action.payload);
                if (state.ids.indexOf(propertiesCollection.id) > -1) {
                    return state;
                }
                state = Object.assign({
                    ids: state.ids.concat([propertiesCollection.id]),
                    entities: Object.assign({}, state.entities, (_a = {},
                        _a[propertiesCollection.id] = propertiesCollection,
                        _a)),
                    currentCollectionId: propertiesCollection.id,
                });
            }
            return state;
        }
        case __WEBPACK_IMPORTED_MODULE_2__business_layer_shared_types_actions_properties_action_types__["UPDATE_PROPERTY_IN_COLLECTION_SUCCESS"]: {
            if (action.payload) {
                var propertyUpdate_1 = (action.payload);
                var currentPropertyCollection = state.entities[state.currentCollectionId];
                var propertyProducts = currentPropertyCollection.properties.slice();
                propertyProducts = propertyProducts.map(function (product) {
                    if (product.id === propertyUpdate_1.id) {
                        product = dataStructureServices.buildPropertyModelElement(propertyUpdate_1);
                    }
                    return product;
                });
                state = Object.assign({
                    ids: state.ids,
                    entities: Object.assign({}, state.entities, (_b = {},
                        _b[currentPropertyCollection.id] = ({
                            id: currentPropertyCollection.id,
                            properties: propertyProducts
                        }),
                        _b)),
                    currentCollectionId: state.currentCollectionId
                });
            }
            return state;
        }
        default: {
            return state;
        }
    }
    var _a, _b;
}
/**
 * Because the data structure is defined within the reducer it is optimal to
 * locate our selector functions at this level. If store is to be thought of
 * as a database, and reducers the tables, selectors can be considered the
 * queries into said database. Remember to keep your selectors small and
 * focused so they can be combined and composed to fit each particular
 * use-case.
 */
var getEntities = function (state) { return state.entities; };
var getIds = function (state) { return state.ids; };
var getCurrentCollectionId = function (state) { return state.currentCollectionId; };
var getCurrentPropertiesCollection = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["f" /* createSelector */])(getEntities, getCurrentCollectionId, function (entities, currentCollectionId) {
    return entities[currentCollectionId];
});
var getCurrentPropertiesCollectionProperties = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["f" /* createSelector */])(getEntities, getCurrentCollectionId, function (entities, currentCollectionId) {
    var properties = currentCollectionId && entities && entities[currentCollectionId] ? entities[currentCollectionId].properties : null;
    return properties ? properties : [];
});
//# sourceMappingURL=properties.reducer.js.map

/***/ }),

/***/ "../../../../../src/app/view-layer/common-views/custom-validators/control.messaging.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ControlMessagesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__business_layer_validators_services_validation_service__ = __webpack_require__("../../../../../src/app/business-layer/validators/services/validation.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ControlMessagesComponent = /** @class */ (function () {
    function ControlMessagesComponent() {
    }
    Object.defineProperty(ControlMessagesComponent.prototype, "errorMessage", {
        get: function () {
            for (var propertyName in this.control.errors) {
                if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
                    return __WEBPACK_IMPORTED_MODULE_2__business_layer_validators_services_validation_service__["a" /* ValidationService */].getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
                }
            }
            return null;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]) === "function" && _a || Object)
    ], ControlMessagesComponent.prototype, "control", void 0);
    ControlMessagesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'control-messages',
            styles: ['div { color:#D73117; padding:10px; font-size:12px; margin-top:10px; }'],
            template: "<div *ngIf=\"errorMessage !== null\">{{errorMessage}}</div>"
        })
    ], ControlMessagesComponent);
    return ControlMessagesComponent;
    var _a;
}());

//# sourceMappingURL=control.messaging.component.js.map

/***/ }),

/***/ "../../../../../src/app/view-layer/common-views/grid-row/grid.row.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- ngrx smart-container-->\n <form novalidate fxLayout=\"row\"\n           class=\"grid-row\"\n           (ngSubmit)=\"onSubmit(updatedProperty)\" [formGroup]=\"updatedProperty\"  >\n     <div fxLayout=\"column\" fxFlex=\"5\">\n          <md-checkbox [checked]=\"isChecked\"\n                       [disabled]=\"rowUpdateState\"\n                       (change)=\"turnPublishingOn()\"></md-checkbox>\n     </div>\n     <div   *ngIf=\"isReadOnly === true\" class=\"property-address\" fxLayout=\"column\" fxFlex=\"45\">\n         {{property.addressCombined}}\n     </div>\n         <div   *ngIf=\"isReadOnly === false\"\n              class=\"property-address-revealed\"\n              fxLayout=\"column\" fxFlex=\"40\"    formGroupName=\"model\">\n          <div  fxLayout=\"row\" fxFlex=\"100\" class=\"live-edit\">\n              <md-form-field class=\"property-input-address\">\n                  <input  mdInput\n                          type=\"text\"\n                          placeholder=\"Street Address\"\n                          formControlName=\"address1\">\n              </md-form-field>\n              <control-messages [control]=\"updatedProperty.controls.model.controls.address1\"></control-messages>\n          </div>\n          <div  fxLayout=\"row\" fxFlex=\"100\">\n             <div fxLayout=\"column\">\n                  <md-form-field class=\"property-input-container\">\n                      <input  mdInput\n                              type=\"text\"\n                              placeholder=\"City\"\n\n                              formControlName=\"city\">\n                  </md-form-field>\n                  <control-messages [control]=\"updatedProperty.controls.model.controls.city\"></control-messages>\n              </div>\n\n             <div fxLayout=\"column\">\n                  <md-form-field class=\"property-input-container\">\n                      <input  mdInput\n                              type=\"text\"\n                              placeholder=\"District\"\n                              formControlName=\"district\">\n                  </md-form-field>\n                  <control-messages [control]=\"updatedProperty.controls.model.controls.district\"></control-messages>\n              </div>\n          </div>\n\n          <div  fxLayout=\"row\" fxFlex=\"100\">\n             <div fxLayout=\"column\">\n                  <md-form-field class=\"property-input-container\">\n                      <input  mdInput\n                              type=\"text\"\n                              placeholder=\"County\"\n                              formControlName=\"county\">\n                  </md-form-field>\n                  <control-messages [control]=\"updatedProperty.controls.model.controls.county\"></control-messages>\n              </div>\n\n             <div fxLayout=\"column\">\n                  <md-form-field class=\"property-input-container\">\n                      <input  mdInput\n                              type=\"text\"\n                              placeholder=\"Country\"\n                              formControlName=\"country\">\n                  </md-form-field>\n                  <control-messages [control]=\"updatedProperty.controls.model.controls.country\"></control-messages>\n              </div>\n          </div>\n\n\n          <div  fxLayout=\"row\" fxFlex=\"100\">\n             <div fxLayout=\"column\" fxFlex=\"50\">\n                  <md-form-field class=\"property-input-container\">\n                      <input  mdInput\n                              type=\"text\"\n                              placeholder=\"Zip Code\"\n                              formControlName=\"zip\">\n                  </md-form-field>\n              <control-messages [control]=\"updatedProperty.controls.model.controls.zip\"></control-messages>\n\n             </div>\n             <div fxLayout=\"column\">\n                     <div fxLayout=\"row\">\n                        <label class=\"state-label\"> State</label>\n                        <button md-button type=\"button\"  [mdMenuTriggerFor]=\"typeState\" class=\"type-btn-trigger\">\n                             {{ stateSelected}}\n                        </button>\n                        <md-menu #typeState=\"mdMenu\">\n                          <button md-menu-item\n                                  type=\"button\"\n                                   *ngFor=\"let key of statesAbrKeys\"\n                                   (click)=\"stateMenuChange(key)\">{{statesAbr[key]}}</button>\n                        </md-menu>\n                     </div>\n             </div>\n          </div>\n\n     </div>\n     <div fxLayout=\"column\" fxFlex=\"55\"   fxLayoutAlign=\"start center\">\n             <div fxLayout=\"row\" fxFlex=\"100\">\n                     <div class=\"property-year-built\" fxLayout=\"column\" fxFlex=\"25\" formGroupName=\"model\" [className]=\"liveInput_Class\">\n                          <md-form-field class=\"property-input-container\">\n                              <input  mdInput\n                                      type=\"text\"\n                                      [readonly]=\"isReadOnly\"\n                                      placeholder=\"Year Built\"\n                                      formControlName=\"yearBuilt\">\n                          </md-form-field>\n                          <control-messages [control]=\"updatedProperty.controls.model.controls.yearBuilt\"></control-messages>\n                     </div>\n                     <div class=\"property-list-price\" fxLayout=\"column\" fxFlex=\"30\"  formGroupName=\"model\" [className]=\"liveInput_Class\">\n                          <md-form-field class=\"property-input-container\" >\n                              <input  mdInput\n                                      type=\"text\"\n                                      [readonly]=\"isReadOnly\"\n                                      placeholder=\"List Price\"\n                                      (focusout)=\"grossYieldCompute()\"\n                                      formControlName=\"listPrice\">\n                          </md-form-field>\n                          <control-messages [control]=\"updatedProperty.controls.model.controls.listPrice\"></control-messages>\n                     </div>\n                     <div class=\"property-monthly-rent\" fxLayout=\"column\" fxFlex=\"25\"   formGroupName=\"model\" [className]=\"liveInput_Class\">\n                          <md-form-field class=\"property-input-container\">\n                              <input  mdInput\n                                      type=\"text\"\n                                      [readonly]=\"isReadOnly\"\n                                      (focusout)=\"grossYieldCompute()\"\n                                      placeholder=\"Monthly Rent\"\n                                      formControlName=\"monthlyRent\">\n                          </md-form-field>\n                          <control-messages [control]=\"updatedProperty.controls.model.controls.monthlyRent\"></control-messages>\n                     </div>\n                     <div class=\"property-gross-yield\" fxLayout=\"column\" fxFlex=\"20\" [className]=\"liveInput_Class\">\n                         <label class=\"gross-label\"> {{formattedGrossYield}}</label>\n                     </div>\n             </div>\n             <div  *ngIf=\"!isReadOnly\"   fxLayout=\"row\" fxFlex=\"100\" fxLayoutAlign=\"end bottom\">\n                <button md-button  type=\"submit\"    class=\"save-button\">\n                        Save\n                 </button>\n             </div>\n   </div>\n </form>\n"

/***/ }),

/***/ "../../../../../src/app/view-layer/common-views/grid-row/grid.row.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".grid-row {\n  border-bottom-style: solid;\n  border-width: 1px;\n  border-bottom-color: #DBDBDB;\n  min-height: 55px;\n  color: #5e5e5e; }\n\nmd-checkbox {\n  margin: auto;\n  color: #0082CB; }\n\n.input-on {\n  border-color: black; }\n\n.state-label {\n  line-height: 40px; }\n\nlabel.state-label {\n  vertical-align: middle;\n  margin-right: 10px; }\n\nbutton.type-btn-trigger {\n  color: #0082CB;\n  background-color: #c4c4c4; }\n\n.property-address,\n.property-year-built,\n.property-list-price,\n.property-monthly-rent,\n.property-gross-yield {\n  margin: auto; }\n\n.property-type input {\n  text-align: left; }\n\n.property-address input,\n.property-year-built input,\n.property-list-price input,\n.property-monthly-rent input,\n.property-gross-yield input {\n  text-align: left; }\n\n.property-address-revealed {\n  padding-top: 15px;\n  padding-bottom: 15px; }\n\n.property-input-address {\n  width: 75% !important;\n  color: #0082CB; }\n\n.property-input-container {\n  font-size: 15px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  width: 75%;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding-left: 0.35em;\n  padding-right: 0.35em;\n  color: #0082CB; }\n\n.property-placeholder-address-label {\n  color: #0082CB; }\n\n.un-revealed .property-input-container {\n  color: #5e5e5e; }\n\n.property-year-built.do-reveal {\n  margin-left: 10%; }\n\n.do-reveal.property-placeholder-label {\n  color: #0096ea;\n  visibility: visible; }\n\n.un-revealed label.gross-label {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding-top: 15%; }\n\n.do-reveal {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding-top: 20%; }\n\n.do-reveal label.gross-label {\n  padding-bottom: 5%; }\n\n.save-button {\n  margin-top: auto;\n  margin-bottom: 20px;\n  background-color: #0096ea;\n  color: #fefefe; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/view-layer/common-views/grid-row/grid.row.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GridRowComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__business_layer_validators_augmented_validator__ = __webpack_require__("../../../../../src/app/business-layer/validators/augmented.validator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__business_layer_models__ = __webpack_require__("../../../../../src/app/business-layer/models/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__business_layer_helpers_data_structures_service__ = __webpack_require__("../../../../../src/app/business-layer/helpers/data.structures.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GridRowComponent = /** @class */ (function () {
    function GridRowComponent(fb) {
        this.fb = fb;
        this.updatePropertyModel = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.dataService = new __WEBPACK_IMPORTED_MODULE_4__business_layer_helpers_data_structures_service__["a" /* DataStructureServices */]();
        this.isChecked = false;
        this.isReadOnly = true;
        this.liveInput_Class = 'un-revealed';
        this.stateSelected = '';
        this.formattedGrossYield = '';
        this.statesAbr = this.dataService.getStatesHash();
        this.statesAbrKeys = Object.keys(this.statesAbr);
    }
    GridRowComponent.prototype.ngOnChanges = function (changes) {
        if (changes['property']) {
            var grossYieldConversion = changes['property'].currentValue.grossYield > 0 ?
                parseFloat(changes['property'].currentValue.grossYield).toFixed(4) :
                0;
            this.stateSelected = changes['property'].currentValue.state;
            this.formattedGrossYield = '% ' + grossYieldConversion;
            this.originalProperty = (Object.assign(changes['property'].currentValue));
        }
    };
    GridRowComponent.prototype.ngOnInit = function () {
        this.setReactiveForms(this.property);
    };
    GridRowComponent.prototype.setReactiveForms = function (fromModel) {
        this.updatedProperty = this.fb.group({
            model: this.fb.group({
                address1: [fromModel.address1.trim(), [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required,
                        __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].minLength(5),
                        __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].maxLength(50),
                        __WEBPACK_IMPORTED_MODULE_2__business_layer_validators_augmented_validator__["a" /* AugmentedValidators */].alphaNumericWithSpaces()]],
                city: [fromModel.city.trim(), [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].maxLength(20),
                        __WEBPACK_IMPORTED_MODULE_2__business_layer_validators_augmented_validator__["a" /* AugmentedValidators */].alphaWithSpaces()]],
                county: [fromModel.county.trim(), [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].maxLength(20),
                        __WEBPACK_IMPORTED_MODULE_2__business_layer_validators_augmented_validator__["a" /* AugmentedValidators */].alphaWithSpaces()]],
                country: [fromModel.country.trim(), [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].minLength(2),
                        __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].maxLength(20),
                        __WEBPACK_IMPORTED_MODULE_2__business_layer_validators_augmented_validator__["a" /* AugmentedValidators */].alphaWithSpaces()]],
                district: [fromModel.district.trim(), [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].maxLength(15),
                        __WEBPACK_IMPORTED_MODULE_2__business_layer_validators_augmented_validator__["a" /* AugmentedValidators */].alphaWithSpaces()]],
                zip: [fromModel.zip.toString(), [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required,
                        __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].minLength(5),
                        __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].maxLength(5),
                        __WEBPACK_IMPORTED_MODULE_2__business_layer_validators_augmented_validator__["a" /* AugmentedValidators */].isNumeric()]],
                yearBuilt: [fromModel.yearBuilt.toString(), [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].minLength(1),
                        __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].maxLength(4),
                        __WEBPACK_IMPORTED_MODULE_2__business_layer_validators_augmented_validator__["a" /* AugmentedValidators */].isNumeric()]],
                listPrice: [fromModel.listPrice, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required,
                        __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].minLength(1),
                        __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].maxLength(120),
                        __WEBPACK_IMPORTED_MODULE_2__business_layer_validators_augmented_validator__["a" /* AugmentedValidators */].numericFloat()]],
                monthlyRent: [fromModel.monthlyRent, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required,
                        __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].minLength(1),
                        __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].maxLength(7),
                        __WEBPACK_IMPORTED_MODULE_2__business_layer_validators_augmented_validator__["a" /* AugmentedValidators */].numericFloat()]]
            })
        });
    };
    GridRowComponent.prototype.stateMenuChange = function (value) {
        this.stateSelected = value;
    };
    GridRowComponent.prototype.grossYieldCompute = function ($event) {
        this.formattedGrossYield = '% ' + this.dataService.computeGrossYield(this.updatedProperty.value.model.listPrice, this.updatedProperty.value.model.monthlyRent);
    };
    GridRowComponent.prototype.turnPublishingOn = function () {
        this.isChecked = !this.isChecked;
        if (this.isChecked) {
            // return to origianal state
            this.isReadOnly = false;
            this.liveInput_Class = 'do-reveal';
        }
        else {
            this.setReactiveForms(this.originalProperty);
            if ((this.originalProperty.monthlyRent / 1) === 0 || (this.originalProperty.listPrice / 1) === 0) {
                this.formattedGrossYield = '% ' + 0;
            }
            else {
                this.formattedGrossYield = '% ' + this.dataService.computeGrossYield(this.originalProperty.listPrice, this.originalProperty.monthlyRent);
            }
            this.isReadOnly = true;
            this.liveInput_Class = 'un-revealed';
        }
    };
    GridRowComponent.prototype.onSubmit = function (propertyUpdate) {
        var propsChanges = this.propsAreDifferent(propertyUpdate.value.model, this.originalProperty);
        if (propertyUpdate.valid && propsChanges) {
            var monthlyRentTabulate = this.dataService.buildNumberWithFixed(propertyUpdate.value.model.monthlyRent, 2);
            var listPriceTabulate = this.dataService.buildNumberWithFixed(propertyUpdate.value.model.listPrice, 2);
            var updateProperty = {
                id: this.property.id,
                address1: propertyUpdate.value.model.address1,
                city: propertyUpdate.value.model.city,
                country: propertyUpdate.value.model.country,
                county: propertyUpdate.value.model.county,
                district: propertyUpdate.value.model.district,
                state: this.stateSelected,
                zip: propertyUpdate.value.model.zip,
                zipPlus4: propertyUpdate.value.model.zipPlus4,
                addressCombined: '',
                yearBuilt: parseInt(propertyUpdate.value.model.yearBuilt, 10),
                listPrice: listPriceTabulate,
                monthlyRent: monthlyRentTabulate
            };
            //console.log('onSubmit() emit updateProperty =', updateProperty);
            this.updatePropertyModel.emit(updateProperty);
        }
        else {
            this.turnPublishingOn();
        }
    };
    GridRowComponent.prototype.propsAreDifferent = function (sbmtProp, orgnlProp) {
        if (orgnlProp.state !== this.stateSelected) {
            return true;
        }
        var result = false;
        var keySet = Object.keys(sbmtProp);
        var n = keySet.length;
        while (n >= 0) {
            if (orgnlProp[keySet[n]] && sbmtProp[keySet[n]] &&
                orgnlProp[keySet[n]].toString() !== sbmtProp[keySet[n]].toString()) {
                result = true;
                n = 0;
            }
            n--;
        }
        return result;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__business_layer_models__["a" /* PropertyModel */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__business_layer_models__["a" /* PropertyModel */]) === "function" && _a || Object)
    ], GridRowComponent.prototype, "property", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Boolean)
    ], GridRowComponent.prototype, "rowUpdateState", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
        __metadata("design:type", Object)
    ], GridRowComponent.prototype, "updatePropertyModel", void 0);
    GridRowComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-grid-row',
            template: __webpack_require__("../../../../../src/app/view-layer/common-views/grid-row/grid.row.component.html"),
            styles: [__webpack_require__("../../../../../src/app/view-layer/common-views/grid-row/grid.row.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]) === "function" && _b || Object])
    ], GridRowComponent);
    return GridRowComponent;
    var _a, _b;
}());

//# sourceMappingURL=grid.row.component.js.map

/***/ }),

/***/ "../../../../../src/app/view-layer/common-views/grid-toolbar/grid.toolbar.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Created by willstreeter on 9/10/17. -->\n\n<div fxLayout=\"row\" class=\"grid-toolbar-row\">\n     <div class=\"property-toolbar-address\" fxLayout=\"column\" fxFlex=\"45\">\n        <span>\n          Address\n        </span>\n     </div>\n     <div class=\"property-toolbar-year-built\" fxLayout=\"column\" fxFlex=\"10\">\n        <span>\n          Year Built\n        </span>\n     </div>\n     <div class=\"property-toolbar-list-price\" fxLayout=\"column\" fxFlex=\"10\">\n        <span>\n          List Price\n        </span>\n     </div>\n     <div class=\"property-toolbar-monthly-rent\" fxLayout=\"column\" fxFlex=\"10\">\n        <span>\n          Monthly Rent\n        </span>\n     </div>\n     <div class=\"property-toolbar-gross-yield\" fxLayout=\"column\" fxFlex=\"10\">\n        <span>\n          Gross Yield\n        </span>\n     </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/view-layer/common-views/grid-toolbar/grid.toolbar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".grid-toolbar-row {\n  border-bottom-style: solid;\n  border-width: 1px;\n  border-bottom-color: #DBDBDB;\n  min-height: 55px; }\n\n.arrw-hidden {\n  display: none; }\n\n.property-toolbar-address,\n.property-toolbar-year-built,\n.property-toolbar-list-price,\n.property-toolbar-monthly-rent,\n.property-toolbar-gross-yield {\n  margin: auto;\n  color: #2b2b2b; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/view-layer/common-views/grid-toolbar/grid.toolbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GridToolbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by willstreeter on 9/10/17.
 */

var GridToolbarComponent = /** @class */ (function () {
    function GridToolbarComponent() {
    }
    GridToolbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'grid-toolbar',
            template: __webpack_require__("../../../../../src/app/view-layer/common-views/grid-toolbar/grid.toolbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/view-layer/common-views/grid-toolbar/grid.toolbar.component.scss")]
        })
    ], GridToolbarComponent);
    return GridToolbarComponent;
}());

//# sourceMappingURL=grid.toolbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/view-layer/common-views/properties-grid/properties.grid.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- ngrx smart-container-->\n<div class='flex-container' fxFlexFill>\n   <div class='grid-layout' fxLayout='column' fxFlex='100'  >\n       <grid-toolbar></grid-toolbar>\n       <app-grid-row *ngFor=' let property of currentProperties | async'\n                 (updatePropertyModel)='propertyModelUpdate($event)'\n                 [property]='property'></app-grid-row>\n   </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/view-layer/common-views/properties-grid/properties.grid.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".flex-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n.nav-link.active-btn {\n  color: #03538a; }\n\nbutton.mat-button {\n  background-color: transparent;\n  backgroundcolor: transparent;\n  font-size: 1em;\n  line-height: 36px;\n  font-weight: 500;\n  color: #522B11; }\n  button.mat-button:hover {\n    color: #A88A6E; }\n  button.mat-button:active {\n    color: #035994; }\n\na.nav-link {\n  background-color: transparent;\n  backgroundcolor: transparent;\n  font-size: 18px;\n  line-height: 36px;\n  font-weight: 500;\n  color: #522B11; }\n  a.nav-link:hover {\n    color: #A88A6E; }\n  a.nav-link:active {\n    color: #035994; }\n\nmd-toolbar.md-mainNav-theme {\n  background: #BFB405;\n  background: linear-gradient(to bottom, #BFB405 0%, #b0a605 100%); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/view-layer/common-views/properties-grid/properties.grid.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PropertiesGridComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__business_layer_pubsub_broker_services_broker_dispatcher_service__ = __webpack_require__("../../../../../src/app/business-layer/pubsub-broker/services/broker.dispatcher.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__business_layer_brokerage_ngrx_stubs_brokerlist__ = __webpack_require__("../../../../../src/app/business-layer/brokerage/ngrx-stubs/brokerlist.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PropertiesGridComponent = /** @class */ (function () {
    function PropertiesGridComponent(bDS) {
        this.bDS = bDS;
        var brokerResponse = this.bDS.dispatchBrokerSelector(__WEBPACK_IMPORTED_MODULE_2__business_layer_brokerage_ngrx_stubs_brokerlist__["a" /* BrokerList */].BROKER_GRID_STORE);
        this.brokerRef = brokerResponse.brokerRequested;
    }
    PropertiesGridComponent.prototype.ngOnInit = function () {
        this.currentProperties = this.brokerRef.storeObs.brokerProperties;
    };
    PropertiesGridComponent.prototype.propertyModelUpdate = function (property) {
        var note = this.brokerRef.storeDsp.UPDATE_PROPERTY_IN_COLLECTION_ATTEMPT;
        note.payLoad = property;
        this.bDS.dispatchBrokerAction(note);
    };
    PropertiesGridComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-properties-grid',
            template: __webpack_require__("../../../../../src/app/view-layer/common-views/properties-grid/properties.grid.component.html"),
            styles: [__webpack_require__("../../../../../src/app/view-layer/common-views/properties-grid/properties.grid.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__business_layer_pubsub_broker_services_broker_dispatcher_service__["a" /* BrokerDispatcherService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__business_layer_pubsub_broker_services_broker_dispatcher_service__["a" /* BrokerDispatcherService */]) === "function" && _a || Object])
    ], PropertiesGridComponent);
    return PropertiesGridComponent;
    var _a;
}());

//# sourceMappingURL=properties.grid.component.js.map

/***/ }),

/***/ "../../../../../src/app/view-layer/common-views/properties-grid/properties.grid.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PropertyGridModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__custom_validators_control_messaging_component__ = __webpack_require__("../../../../../src/app/view-layer/common-views/custom-validators/control.messaging.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__business_layer_validators_services_validation_service__ = __webpack_require__("../../../../../src/app/business-layer/validators/services/validation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__business_layer_helpers_data_structures_service__ = __webpack_require__("../../../../../src/app/business-layer/helpers/data.structures.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_flex_layout__ = __webpack_require__("../../../flex-layout/@angular/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__properties_grid_component__ = __webpack_require__("../../../../../src/app/view-layer/common-views/properties-grid/properties.grid.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__grid_row_grid_row_component__ = __webpack_require__("../../../../../src/app/view-layer/common-views/grid-row/grid.row.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__grid_toolbar_grid_toolbar_component__ = __webpack_require__("../../../../../src/app/view-layer/common-views/grid-toolbar/grid.toolbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__material_module__ = __webpack_require__("../../../../../src/app/view-layer/material.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var PropertyGridModule = /** @class */ (function () {
    function PropertyGridModule() {
    }
    PropertyGridModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_10__material_module__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_flex_layout__["a" /* FlexLayoutModule */]],
            providers: [__WEBPACK_IMPORTED_MODULE_3__business_layer_validators_services_validation_service__["a" /* ValidationService */],
                __WEBPACK_IMPORTED_MODULE_4__business_layer_helpers_data_structures_service__["a" /* DataStructureServices */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common__["c" /* CurrencyPipe */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_7__properties_grid_component__["a" /* PropertiesGridComponent */],
                __WEBPACK_IMPORTED_MODULE_2__custom_validators_control_messaging_component__["a" /* ControlMessagesComponent */],
                __WEBPACK_IMPORTED_MODULE_9__grid_toolbar_grid_toolbar_component__["a" /* GridToolbarComponent */],
                __WEBPACK_IMPORTED_MODULE_8__grid_row_grid_row_component__["a" /* GridRowComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_7__properties_grid_component__["a" /* PropertiesGridComponent */],
                __WEBPACK_IMPORTED_MODULE_2__custom_validators_control_messaging_component__["a" /* ControlMessagesComponent */],
                __WEBPACK_IMPORTED_MODULE_9__grid_toolbar_grid_toolbar_component__["a" /* GridToolbarComponent */],
                __WEBPACK_IMPORTED_MODULE_8__grid_row_grid_row_component__["a" /* GridRowComponent */]]
        })
    ], PropertyGridModule);
    return PropertyGridModule;
}());

//# sourceMappingURL=properties.grid.module.js.map

/***/ }),

/***/ "../../../../../src/app/view-layer/material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by willstreeter on 9/18/17.
 */


var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MdButtonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MdInputModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MdMenuModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MdToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MdIconModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdCardModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MdButtonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MdMenuModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MdInputModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MdToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MdIconModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdCardModule */]
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());

//# sourceMappingURL=material.module.js.map

/***/ }),

/***/ "../../../../../src/app/view-layer/modules-by-route/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div fxFlexlayout=\"row\" fxFlexFill  fxLayoutAlign=\"center center\">\n  <div class=\"grid-layout\" fxLayout=\"column\">\n       <app-properties-grid></app-properties-grid>\n   </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/view-layer/modules-by-route/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n.grid-layout {\n  width: 1200px;\n  min-height: 900px;\n  border-style: solid;\n  border-width: 1px;\n  border-color: #DBDBDB;\n  padding: 20px 40px;\n  color: #b0b0b0; }\n\n/*\n    do media query for for phone tablet\n\n*/\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/view-layer/modules-by-route/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * This class represents the lazy loaded HomeComponent.
 */
var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-sd-home',
            template: __webpack_require__("../../../../../src/app/view-layer/modules-by-route/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/view-layer/modules-by-route/home/home.component.scss")],
        })
    ], HomeComponent);
    return HomeComponent;
}());

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/view-layer/modules-by-route/home/home.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_component__ = __webpack_require__("../../../../../src/app/view-layer/modules-by-route/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_views_properties_grid_properties_grid_module__ = __webpack_require__("../../../../../src/app/view-layer/common-views/properties-grid/properties.grid.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_routing_module__ = __webpack_require__("../../../../../src/app/view-layer/modules-by-route/home/home.routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__ = __webpack_require__("../../../flex-layout/@angular/flex-layout.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_3__home_routing_module__["a" /* HomeRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__common_views_properties_grid_properties_grid_module__["a" /* PropertyGridModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__["a" /* FlexLayoutModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_1__home_component__["a" /* HomeComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__home_component__["a" /* HomeComponent */], __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__["a" /* FlexLayoutModule */]]
        })
    ], HomeModule);
    return HomeModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ "../../../../../src/app/view-layer/modules-by-route/home/home.routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_component__ = __webpack_require__("../../../../../src/app/view-layer/modules-by-route/home/home.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomeRoutingModule = /** @class */ (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild([
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__home_component__["a" /* HomeComponent */] }
                ])
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], HomeRoutingModule);
    return HomeRoutingModule;
}());

//# sourceMappingURL=home.routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/view-layer/modules-by-route/notfound/notfound.page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\" >\n    <div class=\"not-found\" fxFlex fxFlexlayout=\"row\" fxLayoutAlign=\"center center\" >\n        <div class=\"not-found-info\" fxFlex fxLayout=\"column\"  fxLayoutAlign=\"center center\">\n            <h1>404</h1>\n            <p>Oops! Something is wrong.</p>\n        </div>\n    </div>\n</div>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/view-layer/modules-by-route/notfound/notfound.page.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n.wrapper {\n  background-color: #007aff;\n  width: 100%;\n  color: #fff;\n  font-size: 100%;\n  line-height: 1.5;\n  font-family: \"Roboto\", sans-serif;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 100%;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  /* align items in Main Axis */\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n  /* align items in Cross Axis */\n  -ms-flex-line-pack: stretch;\n      align-content: stretch;\n  /* Extra space in Cross Axis */ }\n\n.not-found {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1;\n          flex: 1 1;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n  /* align items in Cross Axis */\n  -ms-flex-line-pack: stretch;\n      align-content: stretch; }\n\n.not-found-info {\n  min-width: 100%; }\n\n.button {\n  font-weight: 300;\n  color: #fff;\n  font-size: 1.2em;\n  text-decoration: none;\n  border: 1px solid #efefef;\n  padding: .5em;\n  border-radius: 3px;\n  transition: all .3s linear; }\n\n.button:hover {\n  background-color: #007aff;\n  color: #fff; }\n\np {\n  font-size: 2em;\n  text-align: center;\n  font-weight: 100; }\n\nh1 {\n  text-align: center;\n  font-size: 15em;\n  font-weight: 100;\n  text-shadow: #0062cc 1px 1px, #0062cc 2px 2px, #0062cc 3px 3px, #0062cd 4px 4px, #0062cd 5px 5px, #0062cd 6px 6px, #0062cd 7px 7px, #0062ce 8px 8px, #0063ce 9px 9px, #0063ce 10px 10px, #0063ce 11px 11px, #0063cf 12px 12px, #0063cf 13px 13px, #0063cf 14px 14px, #0063cf 15px 15px, #0063d0 16px 16px, #0064d0 17px 17px, #0064d0 18px 18px, #0064d0 19px 19px, #0064d1 20px 20px, #0064d1 21px 21px, #0064d1 22px 22px, #0064d1 23px 23px, #0064d2 24px 24px, #0065d2 25px 25px, #0065d2 26px 26px, #0065d2 27px 27px, #0065d3 28px 28px, #0065d3 29px 29px, #0065d3 30px 30px, #0065d3 31px 31px, #0065d4 32px 32px, #0065d4 33px 33px, #0066d4 34px 34px, #0066d4 35px 35px, #0066d5 36px 36px, #0066d5 37px 37px, #0066d5 38px 38px, #0066d5 39px 39px, #0066d6 40px 40px, #0066d6 41px 41px, #0067d6 42px 42px, #0067d6 43px 43px, #0067d7 44px 44px, #0067d7 45px 45px, #0067d7 46px 46px, #0067d7 47px 47px, #0067d8 48px 48px, #0067d8 49px 49px, #0068d8 50px 50px, #0068d9 51px 51px, #0068d9 52px 52px, #0068d9 53px 53px, #0068d9 54px 54px, #0068da 55px 55px, #0068da 56px 56px, #0068da 57px 57px, #0068da 58px 58px, #0069db 59px 59px, #0069db 60px 60px, #0069db 61px 61px, #0069db 62px 62px, #0069dc 63px 63px, #0069dc 64px 64px, #0069dc 65px 65px, #0069dc 66px 66px, #006add 67px 67px, #006add 68px 68px, #006add 69px 69px, #006add 70px 70px, #006ade 71px 71px, #006ade 72px 72px, #006ade 73px 73px, #006ade 74px 74px, #006bdf 75px 75px, #006bdf 76px 76px, #006bdf 77px 77px, #006bdf 78px 78px, #006be0 79px 79px, #006be0 80px 80px, #006be0 81px 81px, #006be0 82px 82px, #006be1 83px 83px, #006ce1 84px 84px, #006ce1 85px 85px, #006ce1 86px 86px, #006ce2 87px 87px, #006ce2 88px 88px, #006ce2 89px 89px, #006ce2 90px 90px, #006ce3 91px 91px, #006de3 92px 92px, #006de3 93px 93px, #006de3 94px 94px, #006de4 95px 95px, #006de4 96px 96px, #006de4 97px 97px, #006de4 98px 98px, #006de5 99px 99px, #006ee5 100px 100px, #006ee5 101px 101px, #006ee6 102px 102px, #006ee6 103px 103px, #006ee6 104px 104px, #006ee6 105px 105px, #006ee7 106px 106px, #006ee7 107px 107px, #006ee7 108px 108px, #006fe7 109px 109px, #006fe8 110px 110px, #006fe8 111px 111px, #006fe8 112px 112px, #006fe8 113px 113px, #006fe9 114px 114px, #006fe9 115px 115px, #006fe9 116px 116px, #0070e9 117px 117px, #0070ea 118px 118px, #0070ea 119px 119px, #0070ea 120px 120px, #0070ea 121px 121px, #0070eb 122px 122px, #0070eb 123px 123px, #0070eb 124px 124px, #0071eb 125px 125px, #0071ec 126px 126px, #0071ec 127px 127px, #0071ec 128px 128px, #0071ec 129px 129px, #0071ed 130px 130px, #0071ed 131px 131px, #0071ed 132px 132px, #0071ed 133px 133px, #0072ee 134px 134px, #0072ee 135px 135px, #0072ee 136px 136px, #0072ee 137px 137px, #0072ef 138px 138px, #0072ef 139px 139px, #0072ef 140px 140px, #0072ef 141px 141px, #0073f0 142px 142px, #0073f0 143px 143px, #0073f0 144px 144px, #0073f0 145px 145px, #0073f1 146px 146px, #0073f1 147px 147px, #0073f1 148px 148px, #0073f1 149px 149px, #0074f2 150px 150px, #0074f2 151px 151px, #0074f2 152px 152px, #0074f3 153px 153px, #0074f3 154px 154px, #0074f3 155px 155px, #0074f3 156px 156px, #0074f4 157px 157px, #0074f4 158px 158px, #0075f4 159px 159px, #0075f4 160px 160px, #0075f5 161px 161px, #0075f5 162px 162px, #0075f5 163px 163px, #0075f5 164px 164px, #0075f6 165px 165px, #0075f6 166px 166px, #0076f6 167px 167px, #0076f6 168px 168px, #0076f7 169px 169px, #0076f7 170px 170px, #0076f7 171px 171px, #0076f7 172px 172px, #0076f8 173px 173px, #0076f8 174px 174px, #0077f8 175px 175px, #0077f8 176px 176px, #0077f9 177px 177px, #0077f9 178px 178px, #0077f9 179px 179px, #0077f9 180px 180px, #0077fa 181px 181px, #0077fa 182px 182px, #0077fa 183px 183px, #0078fa 184px 184px, #0078fb 185px 185px, #0078fb 186px 186px, #0078fb 187px 187px, #0078fb 188px 188px, #0078fc 189px 189px, #0078fc 190px 190px, #0078fc 191px 191px, #0079fc 192px 192px, #0079fd 193px 193px, #0079fd 194px 194px, #0079fd 195px 195px, #0079fd 196px 196px, #0079fe 197px 197px, #0079fe 198px 198px, #0079fe 199px 199px, #007aff 200px 200px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/view-layer/modules-by-route/notfound/notfound.page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotfoundPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NotfoundPageComponent = /** @class */ (function () {
    function NotfoundPageComponent() {
    }
    NotfoundPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'notfound-page',
            template: __webpack_require__("../../../../../src/app/view-layer/modules-by-route/notfound/notfound.page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/view-layer/modules-by-route/notfound/notfound.page.component.scss")],
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectionStrategy */].OnPush,
        })
    ], NotfoundPageComponent);
    return NotfoundPageComponent;
}());

//# sourceMappingURL=notfound.page.component.js.map

/***/ }),

/***/ "../../../../../src/app/view-layer/modules-by-route/notfound/notfound.page.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotfoundPageModule", function() { return NotfoundPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notfound_page_routing_module__ = __webpack_require__("../../../../../src/app/view-layer/modules-by-route/notfound/notfound.page.routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notfound_page_component__ = __webpack_require__("../../../../../src/app/view-layer/modules-by-route/notfound/notfound.page.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var NotfoundPageModule = /** @class */ (function () {
    function NotfoundPageModule() {
    }
    NotfoundPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_2__notfound_page_routing_module__["a" /* NotfoundPageRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__notfound_page_component__["a" /* NotfoundPageComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_3__notfound_page_component__["a" /* NotfoundPageComponent */]]
        })
    ], NotfoundPageModule);
    return NotfoundPageModule;
}());

//# sourceMappingURL=notfound.page.module.js.map

/***/ }),

/***/ "../../../../../src/app/view-layer/modules-by-route/notfound/notfound.page.routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotfoundPageRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notfound_page_component__ = __webpack_require__("../../../../../src/app/view-layer/modules-by-route/notfound/notfound.page.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '**',
        component: __WEBPACK_IMPORTED_MODULE_2__notfound_page_component__["a" /* NotfoundPageComponent */]
    }
];
var NotfoundPageRoutingModule = /** @class */ (function () {
    function NotfoundPageRoutingModule() {
    }
    NotfoundPageRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], NotfoundPageRoutingModule);
    return NotfoundPageRoutingModule;
}());

//# sourceMappingURL=notfound.page.routing.module.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    API: 'api',
    HOST: ''
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_stage_app_stage_module__ = __webpack_require__("../../../../../src/app/app-stage/app.stage.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/**
 * Bootstraps the application and makes the ROUTER_PROVIDERS and the APP_BASE_HREF available to it.
 * @see https://angular.io/docs/ts/latest/api/platform-browser-dynamic/index/bootstrap-function.html
 */

// The browser platform with a compiler

// The app module


if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_stage_app_stage_module__["a" /* AppStageModule */]);
// });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map