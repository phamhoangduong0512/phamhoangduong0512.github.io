(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-bootstrap/app-bootstrap.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/app-bootstrap/app-bootstrap.module.ts ***!
  \*******************************************************/
/*! exports provided: AppBoostrapModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppBoostrapModule", function() { return AppBoostrapModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/index.js");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "./node_modules/ngx-bootstrap/tooltip/index.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/collapse */ "./node_modules/ngx-bootstrap/collapse/index.js");
/* harmony import */ var ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/accordion */ "./node_modules/ngx-bootstrap/accordion/index.js");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "./node_modules/ngx-bootstrap/tabs/index.js");
/* harmony import */ var ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/alert */ "./node_modules/ngx-bootstrap/alert/index.js");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "./node_modules/ngx-bootstrap/carousel/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppBoostrapModule = /** @class */ (function () {
    function AppBoostrapModule() {
    }
    AppBoostrapModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_2__["BsDropdownModule"].forRoot(),
                ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_3__["TooltipModule"].forRoot(),
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["ModalModule"].forRoot(),
                ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_5__["CollapseModule"].forRoot(),
                ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_6__["AccordionModule"].forRoot(),
                ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_7__["TabsModule"].forRoot(),
                ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_8__["AlertModule"].forRoot(),
                ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_9__["CarouselModule"].forRoot()
            ],
            exports: [
                ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_9__["CarouselModule"],
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_2__["BsDropdownModule"],
                ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_3__["TooltipModule"],
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["ModalModule"],
                ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_5__["CollapseModule"],
                ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_6__["AccordionModule"],
                ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_7__["TabsModule"],
                ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_8__["AlertModule"]
            ]
        })
    ], AppBoostrapModule);
    return AppBoostrapModule;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_error404_error404_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/error404/error404.component */ "./src/app/core/error404/error404.component.ts");
/* harmony import */ var _config_app_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config/app-config */ "./src/app/config/app-config.ts");
/* harmony import */ var _high_chart_high_chart_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./high-chart/high-chart.component */ "./src/app/high-chart/high-chart.component.ts");
/* harmony import */ var _user_control_user_control_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-control/user-control.component */ "./src/app/user-control/user-control.component.ts");
/* harmony import */ var _table_data_table_data_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./table-data/table-data.component */ "./src/app/table-data/table-data.component.ts");
/* harmony import */ var _knowledge_storage_knowledge_storage_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./knowledge-storage/knowledge-storage.component */ "./src/app/knowledge-storage/knowledge-storage.component.ts");
/* harmony import */ var _drag_drop_drag_drop_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./drag-drop/drag-drop.component */ "./src/app/drag-drop/drag-drop.component.ts");
/* harmony import */ var _react_js_intro_react_js_intro_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./react-js-intro/react-js-intro.component */ "./src/app/react-js-intro/react-js-intro.component.ts");
/* harmony import */ var _gulp_gulp_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./gulp/gulp.component */ "./src/app/gulp/gulp.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Import Component









var routes = [
    { path: '', component: _knowledge_storage_knowledge_storage_component__WEBPACK_IMPORTED_MODULE_7__["KnowledgeTabComponent"] },
    { path: _config_app_config__WEBPACK_IMPORTED_MODULE_3__["AppConfig"].routes.error404, component: _core_error404_error404_component__WEBPACK_IMPORTED_MODULE_2__["Error404Component"] },
    { path: _config_app_config__WEBPACK_IMPORTED_MODULE_3__["AppConfig"].routes.home, component: _core_error404_error404_component__WEBPACK_IMPORTED_MODULE_2__["Error404Component"] },
    { path: _config_app_config__WEBPACK_IMPORTED_MODULE_3__["AppConfig"].routes.highChart, component: _high_chart_high_chart_component__WEBPACK_IMPORTED_MODULE_4__["ChartComponent"] },
    { path: _config_app_config__WEBPACK_IMPORTED_MODULE_3__["AppConfig"].routes.userControl, component: _user_control_user_control_component__WEBPACK_IMPORTED_MODULE_5__["UserControlComponent"] },
    { path: _config_app_config__WEBPACK_IMPORTED_MODULE_3__["AppConfig"].routes.tableData, component: _table_data_table_data_component__WEBPACK_IMPORTED_MODULE_6__["TableDataComponent"] },
    { path: _config_app_config__WEBPACK_IMPORTED_MODULE_3__["AppConfig"].routes.dragDrop, component: _drag_drop_drag_drop_component__WEBPACK_IMPORTED_MODULE_8__["DragDropComponent"] },
    { path: _config_app_config__WEBPACK_IMPORTED_MODULE_3__["AppConfig"].routes.reactJs, component: _react_js_intro_react_js_intro_component__WEBPACK_IMPORTED_MODULE_9__["ReactJSIntroduceComponent"] },
    { path: _config_app_config__WEBPACK_IMPORTED_MODULE_3__["AppConfig"].routes.gulp, component: _gulp_gulp_component__WEBPACK_IMPORTED_MODULE_10__["GulpComponent"] },
    { path: '**', component: _core_error404_error404_component__WEBPACK_IMPORTED_MODULE_2__["Error404Component"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fa-heart {\r\n    color: hotpink;\r\n  }\r\n\r\n  .footer {\r\n    position: fixed;\r\n    left: 0;\r\n    bottom: 0;\r\n    width: 100%;\r\n    background-color: #e7e7e7;\r\n    color: #777;\r\n    text-align: center;\r\n    height: 50px;\r\n    line-height: 50px;\r\n }"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- BEGIN HEADER -->\n<app-nav></app-nav>\n<!-- END HEADER -->\n\n<!-- BEGIN MAIN CONTENT -->\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>\n<!-- END MAIN CONTENT -->\n\n<!-- BEGIN FOOTER -->\n<div class=\"footer\">\n  <p>{{ 'footer.information' | translate }}</p>\n</div>\n<!-- END FOOTER -->"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    // TODO: Move all nav to another component
    function AppComponent() {
        this.title = 'Angular6Demo';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_bootstrap_app_bootstrap_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-bootstrap/app-bootstrap.module */ "./src/app/app-bootstrap/app-bootstrap.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _core_services_services_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/services/services.module */ "./src/app/core/services/services.module.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _drag_drop_drag_drop_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./drag-drop/drag-drop.module */ "./src/app/drag-drop/drag-drop.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _core_error404_error404_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./core/error404/error404.component */ "./src/app/core/error404/error404.component.ts");
/* harmony import */ var _core_nav_nav_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./core/nav/nav.component */ "./src/app/core/nav/nav.component.ts");
/* harmony import */ var _knowledge_storage_passing_data_passing_data_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./knowledge-storage/passing-data/passing-data.component */ "./src/app/knowledge-storage/passing-data/passing-data.component.ts");
/* harmony import */ var _high_chart_high_chart_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./high-chart/high-chart.component */ "./src/app/high-chart/high-chart.component.ts");
/* harmony import */ var _high_chart_line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./high-chart/line-chart/line-chart.component */ "./src/app/high-chart/line-chart/line-chart.component.ts");
/* harmony import */ var _high_chart_pie_chart_pie_chart_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./high-chart/pie-chart/pie-chart.component */ "./src/app/high-chart/pie-chart/pie-chart.component.ts");
/* harmony import */ var _user_control_user_control_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./user-control/user-control.component */ "./src/app/user-control/user-control.component.ts");
/* harmony import */ var _user_control_accordion_tut_accordion_tut_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./user-control/accordion-tut/accordion-tut.component */ "./src/app/user-control/accordion-tut/accordion-tut.component.ts");
/* harmony import */ var _user_control_alert_tut_alert_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./user-control/alert-tut/alert.component */ "./src/app/user-control/alert-tut/alert.component.ts");
/* harmony import */ var _user_control_carousel_tut_carousel_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./user-control/carousel-tut/carousel.component */ "./src/app/user-control/carousel-tut/carousel.component.ts");
/* harmony import */ var _high_chart_bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./high-chart/bar-chart/bar-chart.component */ "./src/app/high-chart/bar-chart/bar-chart.component.ts");
/* harmony import */ var _table_data_table_data_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./table-data/table-data.component */ "./src/app/table-data/table-data.component.ts");
/* harmony import */ var _knowledge_storage_knowledge_storage_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./knowledge-storage/knowledge-storage.component */ "./src/app/knowledge-storage/knowledge-storage.component.ts");
/* harmony import */ var _react_js_intro_react_js_intro_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./react-js-intro/react-js-intro.component */ "./src/app/react-js-intro/react-js-intro.component.ts");
/* harmony import */ var _knowledge_storage_vote_root_vote_root_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./knowledge-storage/vote-root/vote-root.component */ "./src/app/knowledge-storage/vote-root/vote-root.component.ts");
/* harmony import */ var _gulp_gulp_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./gulp/gulp.component */ "./src/app/gulp/gulp.component.ts");
/* harmony import */ var _drag_drop_drag_drop_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./drag-drop/drag-drop.component */ "./src/app/drag-drop/drag-drop.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _app_translate_factory__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./app.translate.factory */ "./src/app/app.translate.factory.ts");
/* harmony import */ var angular_highcharts__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! angular-highcharts */ "./node_modules/angular-highcharts/angular-highcharts.es5.js");
/* harmony import */ var _knowledge_storage_voter_voter_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./knowledge-storage/voter/voter.component */ "./src/app/knowledge-storage/voter/voter.component.ts");
/* harmony import */ var _knowledge_storage_vote_taker_votetaker_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./knowledge-storage/vote-taker/votetaker.component */ "./src/app/knowledge-storage/vote-taker/votetaker.component.ts");
/* harmony import */ var ngx_draggable_widget__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ngx-draggable-widget */ "./node_modules/ngx-draggable-widget/main.js");
/* harmony import */ var _beyerleinf_ngx_dnd__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @beyerleinf/ngx-dnd */ "./node_modules/@beyerleinf/ngx-dnd/fesm5/beyerleinf-ngx-dnd.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// Import Module






// Import Component

















//Test

// Import ngx-translate and the http loader


// Import High Chart

// Test


// Import NgDragAndDropable


var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _drag_drop_drag_drop_component__WEBPACK_IMPORTED_MODULE_27__["DragDropComponent"],
                _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                _core_error404_error404_component__WEBPACK_IMPORTED_MODULE_11__["Error404Component"],
                _core_nav_nav_component__WEBPACK_IMPORTED_MODULE_12__["AppNavComponent"],
                _knowledge_storage_passing_data_passing_data_component__WEBPACK_IMPORTED_MODULE_13__["PassingDataComponet"],
                _high_chart_high_chart_component__WEBPACK_IMPORTED_MODULE_14__["ChartComponent"],
                _high_chart_line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_15__["LineChartComponent"],
                _high_chart_pie_chart_pie_chart_component__WEBPACK_IMPORTED_MODULE_16__["PieaChartComponent"],
                _user_control_user_control_component__WEBPACK_IMPORTED_MODULE_17__["UserControlComponent"],
                _user_control_accordion_tut_accordion_tut_component__WEBPACK_IMPORTED_MODULE_18__["AccordionTutComponent"],
                _user_control_alert_tut_alert_component__WEBPACK_IMPORTED_MODULE_19__["AlertTutComponent"],
                _user_control_carousel_tut_carousel_component__WEBPACK_IMPORTED_MODULE_20__["CarouselTutComponent"],
                _high_chart_bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_21__["BarChartComponent"],
                _table_data_table_data_component__WEBPACK_IMPORTED_MODULE_22__["TableDataComponent"],
                _knowledge_storage_knowledge_storage_component__WEBPACK_IMPORTED_MODULE_23__["KnowledgeTabComponent"],
                _react_js_intro_react_js_intro_component__WEBPACK_IMPORTED_MODULE_24__["ReactJSIntroduceComponent"],
                //Test
                _knowledge_storage_voter_voter_component__WEBPACK_IMPORTED_MODULE_31__["VoterComponent"],
                _knowledge_storage_vote_taker_votetaker_component__WEBPACK_IMPORTED_MODULE_32__["VoteTakerComponent"],
                _knowledge_storage_vote_root_vote_root_component__WEBPACK_IMPORTED_MODULE_25__["VoteRootComponent"],
                _gulp_gulp_component__WEBPACK_IMPORTED_MODULE_26__["GulpComponent"]
            ],
            imports: [
                _drag_drop_drag_drop_module__WEBPACK_IMPORTED_MODULE_8__["DragDropModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _beyerleinf_ngx_dnd__WEBPACK_IMPORTED_MODULE_34__["DndModule"],
                ngx_draggable_widget__WEBPACK_IMPORTED_MODULE_33__["NgDraggableWidgetModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_7__["DataTablesModule"],
                angular_highcharts__WEBPACK_IMPORTED_MODULE_30__["ChartModule"],
                _core_services_services_module__WEBPACK_IMPORTED_MODULE_6__["ServicesModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_bootstrap_app_bootstrap_module__WEBPACK_IMPORTED_MODULE_4__["AppBoostrapModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_28__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_28__["TranslateLoader"],
                        useFactory: _app_translate_factory__WEBPACK_IMPORTED_MODULE_29__["HttpLoaderFactory"],
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]]
                    }
                }),
                _beyerleinf_ngx_dnd__WEBPACK_IMPORTED_MODULE_34__["DndModule"].forRoot(),
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.translate.factory.ts":
/*!******************************************!*\
  !*** ./src/app/app.translate.factory.ts ***!
  \******************************************/
/*! exports provided: HttpLoaderFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/esm5/ngx-translate-http-loader.js");

function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_0__["TranslateHttpLoader"](http);
}


/***/ }),

/***/ "./src/app/config/app-config.ts":
/*!**************************************!*\
  !*** ./src/app/config/app-config.ts ***!
  \**************************************/
/*! exports provided: AppConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppConfig", function() { return AppConfig; });
var AppConfig = {
    routes: {
        error404: '404',
        home: 'home',
        userControl: 'user-control',
        tableData: 'table-data',
        highChart: 'high-chart',
        dragDrop: 'drag-drop',
        reactJs: 'react-js',
        gulp: 'gulp'
    },
    apiUrl: {
        // heroes: 'https://nodejs-example-app.herokuapp.com/heroes'
        heroes: 'http://localhost:57139/api/custom/GetHeroesList'
    }
};


/***/ }),

/***/ "./src/app/core/error404/error404.component.css":
/*!******************************************************!*\
  !*** ./src/app/core/error404/error404.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(https://fonts.googleapis.com/css?family=Raleway:300,700);\r\n\r\nbody {\r\n  width:100%;\r\n  height:100%;\r\n  background:#48A9E6;\r\n  font-family: 'Raleway', sans-serif;\r\n  font-weight:300;\r\n  margin:0;\r\n  padding:0;\r\n}\r\n\r\n#title {\r\n  text-align:center;\r\n  font-size:40px;\r\n  margin-top:40px;\r\n  margin-bottom:-40px;\r\n  position:relative;\r\n  color:#fff;\r\n}\r\n\r\n.circles:after {\r\n  content:'';\r\n  display:inline-block;\r\n  width:100%;\r\n  height:100px;\r\n  background:#fff;\r\n  position:absolute;\r\n  top:-50px;\r\n  left:0;\r\n  transform:skewY(-4deg);\r\n  -webkit-transform:skewY(-4deg);\r\n}\r\n\r\n.circles { \r\n\tbackground:#fff;\r\n\ttext-align: center;\r\n\tposition: relative;\r\n  margin-top:-60px;\r\n  box-shadow:inset -1px -4px 4px rgba(0,0,0,0.2);\r\n}\r\n\r\n.circles p {\r\n\tfont-size: 240px;\r\n\tcolor: #fff;\r\n\tpadding-top: 60px;\r\n\tposition: relative;\r\n  z-index: 9;\r\n  line-height: 100%;\r\n}\r\n\r\n.circles p small { \r\n  font-size: 40px; \r\n  line-height: 100%; \r\n  vertical-align: top;   \r\n}\r\n\r\n.circles .circle.small {\r\n\twidth: 140px;\r\n\theight: 140px;\r\n\tborder-radius: 50%;\r\n\tbackground: #48A9E6;\r\n\tposition: absolute;\r\n\tz-index: 1;\r\n\ttop: 80px;\r\n\tleft: 50%;\r\n\tanimation: 7s smallmove infinite cubic-bezier(1,.22,.71,.98);\t\r\n\t-webkit-animation: 7s smallmove infinite cubic-bezier(1,.22,.71,.98);\r\n\tanimation-delay: 1.2s;\r\n\t-webkit-animation-delay: 1.2s;\r\n}\r\n\r\n.circles .circle.med {\r\n\twidth: 200px;\r\n\theight: 200px;\r\n\tborder-radius: 50%;\r\n\tbackground: #48A9E6;\r\n\tposition: absolute;\r\n\tz-index: 1;\r\n\ttop: 0;\r\n\tleft: 10%;\r\n\tanimation: 7s medmove infinite cubic-bezier(.32,.04,.15,.75);\t\r\n\t-webkit-animation: 7s medmove infinite cubic-bezier(.32,.04,.15,.75);\r\n\tanimation-delay: 0.4s;\r\n\t-webkit-animation-delay: 0.4s;\r\n}\r\n\r\n.circles .circle.big {\r\n\twidth: 400px;\r\n\theight: 400px;\r\n\tborder-radius: 50%;\r\n\tbackground: #48A9E6;\r\n\tposition: absolute;\r\n\tz-index: 1;\r\n\ttop: 200px;\r\n\tright: 0;\r\n\tanimation: 8s bigmove infinite;\t\r\n\t-webkit-animation: 8s bigmove infinite;\r\n\tanimation-delay: 3s;\r\n\t-webkit-animation-delay: 1s;\r\n}\r\n\r\n@-webkit-keyframes smallmove {\r\n\t0% { top: 10px; left: 45%; opacity: 1; }\r\n\t25% { top: 300px; left: 40%; opacity:0.7; }\r\n\t50% { top: 240px; left: 55%; opacity:0.4; }\r\n\t75% { top: 100px; left: 40%;  opacity:0.6; }\r\n\t100% { top: 10px; left: 45%; opacity: 1; }\r\n}\r\n\r\n@keyframes smallmove {\r\n\t0% { top: 10px; left: 45%; opacity: 1; }\r\n\t25% { top: 300px; left: 40%; opacity:0.7; }\r\n\t50% { top: 240px; left: 55%; opacity:0.4; }\r\n\t75% { top: 100px; left: 40%;  opacity:0.6; }\r\n\t100% { top: 10px; left: 45%; opacity: 1; }\r\n}\r\n\r\n@-webkit-keyframes medmove {\r\n\t0% { top: 0px; left: 20%; opacity: 1; }\r\n\t25% { top: 300px; left: 80%; opacity:0.7; }\r\n\t50% { top: 240px; left: 55%; opacity:0.4; }\r\n\t75% { top: 100px; left: 40%;  opacity:0.6; }\r\n\t100% { top: 0px; left: 20%; opacity: 1; }\r\n}\r\n\r\n@keyframes medmove {\r\n\t0% { top: 0px; left: 20%; opacity: 1; }\r\n\t25% { top: 300px; left: 80%; opacity:0.7; }\r\n\t50% { top: 240px; left: 55%; opacity:0.4; }\r\n\t75% { top: 100px; left: 40%;  opacity:0.6; }\r\n\t100% { top: 0px; left: 20%; opacity: 1; }\r\n}\r\n\r\n@-webkit-keyframes bigmove {\r\n\t0% { top: 0px; right: 4%; opacity: 0.5; }\r\n\t25% { top: 100px; right: 40%; opacity:0.4; }\r\n\t50% { top: 240px; right: 45%; opacity:0.8; }\r\n\t75% { top: 100px; right: 35%;  opacity:0.6; }\r\n\t100% { top: 0px; right: 4%; opacity: 0.5; }\r\n}\r\n\r\n@keyframes bigmove {\r\n\t0% { top: 0px; right: 4%; opacity: 0.5; }\r\n\t25% { top: 100px; right: 40%; opacity:0.4; }\r\n\t50% { top: 240px; right: 45%; opacity:0.8; }\r\n\t75% { top: 100px; right: 35%;  opacity:0.6; }\r\n\t100% { top: 0px; right: 4%; opacity: 0.5; }\r\n}\r\n"

/***/ }),

/***/ "./src/app/core/error404/error404.component.html":
/*!*******************************************************!*\
  !*** ./src/app/core/error404/error404.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>{{passingMessage}}</h1>\r\n\r\n<body>\r\n    <section id=\"not-found\">\r\n        <div id=\"title\">Simple Pure CSS3 &bull; 404 Error Page</div>\r\n        <div class=\"circles\">\r\n            <p>404\r\n                <br>\r\n                <small>PAGE NOT FOUND</small>\r\n            </p>\r\n            <span class=\"circle big\"></span>\r\n            <span class=\"circle med\"></span>\r\n            <span class=\"circle small\"></span>\r\n        </div>\r\n    </section>\r\n</body>"

/***/ }),

/***/ "./src/app/core/error404/error404.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/core/error404/error404.component.ts ***!
  \*****************************************************/
/*! exports provided: Error404Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Error404Component", function() { return Error404Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Error404Component = /** @class */ (function () {
    function Error404Component() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], Error404Component.prototype, "passingMessage", void 0);
    Error404Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'error404',
            template: __webpack_require__(/*! ./error404.component.html */ "./src/app/core/error404/error404.component.html"),
            styles: [__webpack_require__(/*! ./error404.component.css */ "./src/app/core/error404/error404.component.css")]
        })
    ], Error404Component);
    return Error404Component;
}());



/***/ }),

/***/ "./src/app/core/nav/nav.component.css":
/*!********************************************!*\
  !*** ./src/app/core/nav/nav.component.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/core/nav/nav.component.html":
/*!*********************************************!*\
  !*** ./src/app/core/nav/nav.component.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"navbar-header\">\r\n      <button type=\"button\" class=\"navbar-toggle collapsed\" (click)=\"isCollapsed = !isCollapsed\" aria-expanded=\"false\">\r\n        <span class=\"sr-only\">Toggle navigation</span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n      </button>\r\n    </div>\r\n    <div class=\"collapse navbar-collapse\" [collapse]=\"isCollapsed\">\r\n      <ul class=\"nav navbar-nav\">\r\n        <li *ngFor=\"let item of menuItems\">\r\n          <a routerLink=\"{{item.link}}\">\r\n            {{item.name}}\r\n          </a>\r\n        </li>\r\n        <li dropdown>\r\n          <a dropdownToggle class=\"dropdown-toggle\">{{ 'changeLanguage' | translate}}</a>\r\n          <ul id=\"dropdown-basic\" *dropdownMenu class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"button-basic\">\r\n            <li role=\"menuitem\">\r\n              <a class=\"dropdown-item\" (click)=\"changeLanguage('en')\">English</a>\r\n            </li>\r\n            <li class=\"divider dropdown-divider\"></li>\r\n            <li role=\"menuitem\">\r\n              <a class=\"dropdown-item\" (click)=\"changeLanguage('vi')\">Vietnamese</a>\r\n            </li>\r\n          </ul>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>"

/***/ }),

/***/ "./src/app/core/nav/nav.component.ts":
/*!*******************************************!*\
  !*** ./src/app/core/nav/nav.component.ts ***!
  \*******************************************/
/*! exports provided: AppNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppNavComponent", function() { return AppNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _config_app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/app-config */ "./src/app/config/app-config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppNavComponent = /** @class */ (function () {
    function AppNavComponent(translateService) {
        this.translateService = translateService;
        translateService.setDefaultLang('en');
        translateService.use('en');
    }
    AppNavComponent.prototype.ngOnInit = function () {
        this.loadMenus();
    };
    AppNavComponent.prototype.changeLanguage = function (language) {
        var _this = this;
        this.translateService.use(language).subscribe(function () {
            _this.loadMenus();
        });
    };
    AppNavComponent.prototype.loadMenus = function () {
        var _this = this;
        this.translateService.get(['home', 'userControl', 'tableData', 'highChartText', 'dragDrop', 'reactJs', 'gulp']).subscribe(function (texts) {
            _this.menuItems = [
                { link: '/', name: texts['home'] },
                { link: '/' + _config_app_config__WEBPACK_IMPORTED_MODULE_2__["AppConfig"].routes.userControl, name: texts['userControl'] },
                { link: '/' + _config_app_config__WEBPACK_IMPORTED_MODULE_2__["AppConfig"].routes.tableData, name: texts['tableData'] },
                { link: '/' + _config_app_config__WEBPACK_IMPORTED_MODULE_2__["AppConfig"].routes.highChart, name: texts['highChartText'] },
                { link: '/' + _config_app_config__WEBPACK_IMPORTED_MODULE_2__["AppConfig"].routes.dragDrop, name: texts['dragDrop'] },
                { link: '/' + _config_app_config__WEBPACK_IMPORTED_MODULE_2__["AppConfig"].routes.reactJs, name: texts['reactJs'] },
                { link: '/' + _config_app_config__WEBPACK_IMPORTED_MODULE_2__["AppConfig"].routes.gulp, name: texts['gulp'] }
            ];
        });
    };
    AppNavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/core/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/core/nav/nav.component.css")]
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]])
    ], AppNavComponent);
    return AppNavComponent;
}());



/***/ }),

/***/ "./src/app/core/services/common/common.service.ts":
/*!********************************************************!*\
  !*** ./src/app/core/services/common/common.service.ts ***!
  \********************************************************/
/*! exports provided: CommonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonService", function() { return CommonService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _config_app_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../config/app-config */ "./src/app/config/app-config.ts");
/* harmony import */ var _log_log_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../log/log.service */ "./src/app/core/services/log/log.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CommonService = /** @class */ (function () {
    function CommonService(http) {
        this.http = http;
        this.heroesUrl = _config_app_config__WEBPACK_IMPORTED_MODULE_4__["AppConfig"].apiUrl.heroes;
    }
    CommonService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            _log_log_service__WEBPACK_IMPORTED_MODULE_5__["LoggerService"].log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    CommonService.prototype.getDataTest = function () {
        return this.http.get(this.heroesUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (heroes) { return _log_log_service__WEBPACK_IMPORTED_MODULE_5__["LoggerService"].log("fetched heroes"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getHeroes', [])));
    };
    CommonService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CommonService);
    return CommonService;
}());



/***/ }),

/***/ "./src/app/core/services/log/log.service.ts":
/*!**************************************************!*\
  !*** ./src/app/core/services/log/log.service.ts ***!
  \**************************************************/
/*! exports provided: LoggerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggerService", function() { return LoggerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LoggerService = /** @class */ (function () {
    function LoggerService() {
    }
    LoggerService.log = function (msg) {
        console.log(msg);
    };
    LoggerService.error = function (msg, obj) {
        if (obj === void 0) { obj = {}; }
        console.error(msg, obj);
    };
    LoggerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], LoggerService);
    return LoggerService;
}());



/***/ }),

/***/ "./src/app/core/services/services.module.ts":
/*!**************************************************!*\
  !*** ./src/app/core/services/services.module.ts ***!
  \**************************************************/
/*! exports provided: ServicesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesModule", function() { return ServicesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/common.service */ "./src/app/core/services/common/common.service.ts");
/* harmony import */ var _log_log_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./log/log.service */ "./src/app/core/services/log/log.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ServicesModule = /** @class */ (function () {
    function ServicesModule() {
    }
    ServicesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [],
            exports: [],
            providers: [
                _common_common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"],
                _log_log_service__WEBPACK_IMPORTED_MODULE_2__["LoggerService"]
            ]
        })
    ], ServicesModule);
    return ServicesModule;
}());



/***/ }),

/***/ "./src/app/drag-drop/drag-drop.component.css":
/*!***************************************************!*\
  !*** ./src/app/drag-drop/drag-drop.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "accordion{\r\n    margin-bottom: 66px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/drag-drop/drag-drop.component.html":
/*!****************************************************!*\
  !*** ./src/app/drag-drop/drag-drop.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<accordion [closeOthers]=\"true\">\r\n    <accordion-group heading=\"{{ 'dragDrop1' | translate}}\"  [isOpen]=\"true\">\r\n        <drag-drop-1></drag-drop-1>\r\n    </accordion-group>\r\n    <accordion-group heading=\"{{ 'dragDrop2' | translate}}\">\r\n        <drag-drop-2></drag-drop-2>\r\n    </accordion-group>\r\n    <accordion-group heading=\"{{ 'dragDrop3' | translate}}\">\r\n        <drag-drop-3></drag-drop-3>\r\n    </accordion-group>\r\n    <accordion-group heading=\"{{ 'dragDrop4' | translate}}\">\r\n        <drag-drop-4></drag-drop-4>\r\n    </accordion-group>\r\n    <accordion-group heading=\"{{ 'dragDrop5' | translate}}\">\r\n        <drag-drop5></drag-drop5>\r\n    </accordion-group>\r\n    <accordion-group heading=\"{{ 'dragDrop6' | translate}}\">\r\n        <drag-drop6></drag-drop6>\r\n    </accordion-group>\r\n    <accordion-group heading=\"{{ 'dragDrop7' | translate}}\">\r\n        <drag-drop7></drag-drop7>\r\n    </accordion-group>\r\n    <accordion-group heading=\"{{ 'dragDrop8' | translate}}\">\r\n        <drag-drop8></drag-drop8>\r\n    </accordion-group>\r\n    <accordion-group heading=\"{{ 'dragDrop9' | translate}}\">\r\n        <drag-drop9></drag-drop9>\r\n    </accordion-group>\r\n    <accordion-group heading=\"{{ 'dragDrop10' | translate}}\">\r\n        <drag-drop10></drag-drop10>\r\n    </accordion-group>\r\n    <accordion-group heading=\"{{ 'dragDrop11' | translate}}\">\r\n        <!-- <drag-drop11></drag-drop11> -->\r\n    </accordion-group>\r\n    <accordion-group heading=\"{{ 'dragDrop12' | translate}}\">\r\n        <drag-drop12></drag-drop12>\r\n    </accordion-group>\r\n</accordion>"

/***/ }),

/***/ "./src/app/drag-drop/drag-drop.component.ts":
/*!**************************************************!*\
  !*** ./src/app/drag-drop/drag-drop.component.ts ***!
  \**************************************************/
/*! exports provided: DragDropComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragDropComponent", function() { return DragDropComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var DragDropComponent = /** @class */ (function () {
    function DragDropComponent() {
        this.listOne = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArray"]([
            new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('Coffee'),
            new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('Orange Juice'),
            new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('Red Wine'),
            new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('Unhealty drink!'),
            new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('Water')
        ]);
    }
    DragDropComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'drag-drop',
            template: __webpack_require__(/*! ./drag-drop.component.html */ "./src/app/drag-drop/drag-drop.component.html"),
            styles: [__webpack_require__(/*! ./drag-drop.component.css */ "./src/app/drag-drop/drag-drop.component.css")]
        })
    ], DragDropComponent);
    return DragDropComponent;
}());



/***/ }),

/***/ "./src/app/drag-drop/drag-drop.module.ts":
/*!***********************************************!*\
  !*** ./src/app/drag-drop/drag-drop.module.ts ***!
  \***********************************************/
/*! exports provided: DragDropModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragDropModule", function() { return DragDropModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _beyerleinf_ngx_dnd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @beyerleinf/ngx-dnd */ "./node_modules/@beyerleinf/ngx-dnd/fesm5/beyerleinf-ngx-dnd.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _drag_drop1_drag_drop1_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./drag-drop1/drag-drop1.component */ "./src/app/drag-drop/drag-drop1/drag-drop1.component.ts");
/* harmony import */ var _drag_drop2_drag_drop2_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./drag-drop2/drag-drop2.component */ "./src/app/drag-drop/drag-drop2/drag-drop2.component.ts");
/* harmony import */ var _drag_drop3_drag_drop3_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./drag-drop3/drag-drop3.component */ "./src/app/drag-drop/drag-drop3/drag-drop3.component.ts");
/* harmony import */ var _drag_drop4_drag_drop4_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./drag-drop4/drag-drop4.component */ "./src/app/drag-drop/drag-drop4/drag-drop4.component.ts");
/* harmony import */ var _drag_drop5_drag_drop5_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./drag-drop5/drag-drop5.component */ "./src/app/drag-drop/drag-drop5/drag-drop5.component.ts");
/* harmony import */ var _drag_drop6_drag_drop6_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./drag-drop6/drag-drop6.component */ "./src/app/drag-drop/drag-drop6/drag-drop6.component.ts");
/* harmony import */ var _drag_drop7_drag_drop7_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./drag-drop7/drag-drop7.component */ "./src/app/drag-drop/drag-drop7/drag-drop7.component.ts");
/* harmony import */ var _drag_drop8_drag_drop8_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./drag-drop8/drag-drop8.component */ "./src/app/drag-drop/drag-drop8/drag-drop8.component.ts");
/* harmony import */ var _drag_drop9_drag_drop9_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./drag-drop9/drag-drop9.component */ "./src/app/drag-drop/drag-drop9/drag-drop9.component.ts");
/* harmony import */ var _drag_drop10_drag_drop10_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./drag-drop10/drag-drop10.component */ "./src/app/drag-drop/drag-drop10/drag-drop10.component.ts");
/* harmony import */ var _drag_drop11_drag_drop11_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./drag-drop11/drag-drop11.component */ "./src/app/drag-drop/drag-drop11/drag-drop11.component.ts");
/* harmony import */ var _drag_drop12_drag_drop12_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./drag-drop12/drag-drop12.component */ "./src/app/drag-drop/drag-drop12/drag-drop12.component.ts");
/* harmony import */ var _drag_drop4_handle_data_handle_data_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./drag-drop4/handle-data/handle-data.component */ "./src/app/drag-drop/drag-drop4/handle-data/handle-data.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// Import Component













var DragDropModule = /** @class */ (function () {
    function DragDropModule() {
    }
    DragDropModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _beyerleinf_ngx_dnd__WEBPACK_IMPORTED_MODULE_3__["DndModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
            ],
            exports: [
                _drag_drop1_drag_drop1_component__WEBPACK_IMPORTED_MODULE_5__["DragDrop1Component"],
                _drag_drop2_drag_drop2_component__WEBPACK_IMPORTED_MODULE_6__["DragDrop2Component"],
                _drag_drop3_drag_drop3_component__WEBPACK_IMPORTED_MODULE_7__["DragDrop3Component"],
                _drag_drop4_drag_drop4_component__WEBPACK_IMPORTED_MODULE_8__["DragDrop4Component"],
                _drag_drop5_drag_drop5_component__WEBPACK_IMPORTED_MODULE_9__["DragDrop5Component"],
                _drag_drop6_drag_drop6_component__WEBPACK_IMPORTED_MODULE_10__["DragDrop6Component"],
                _drag_drop7_drag_drop7_component__WEBPACK_IMPORTED_MODULE_11__["DragDrop7Component"],
                _drag_drop8_drag_drop8_component__WEBPACK_IMPORTED_MODULE_12__["DragDrop8Component"],
                _drag_drop9_drag_drop9_component__WEBPACK_IMPORTED_MODULE_13__["DragDrop9Component"],
                _drag_drop10_drag_drop10_component__WEBPACK_IMPORTED_MODULE_14__["DragDrop10Component"],
                _drag_drop11_drag_drop11_component__WEBPACK_IMPORTED_MODULE_15__["DragDrop11Component"],
                _drag_drop12_drag_drop12_component__WEBPACK_IMPORTED_MODULE_16__["DragDrop12Component"],
                _drag_drop4_handle_data_handle_data_component__WEBPACK_IMPORTED_MODULE_17__["HandleDataComponent"]
            ],
            declarations: [
                _drag_drop1_drag_drop1_component__WEBPACK_IMPORTED_MODULE_5__["DragDrop1Component"],
                _drag_drop2_drag_drop2_component__WEBPACK_IMPORTED_MODULE_6__["DragDrop2Component"],
                _drag_drop3_drag_drop3_component__WEBPACK_IMPORTED_MODULE_7__["DragDrop3Component"],
                _drag_drop4_drag_drop4_component__WEBPACK_IMPORTED_MODULE_8__["DragDrop4Component"],
                _drag_drop5_drag_drop5_component__WEBPACK_IMPORTED_MODULE_9__["DragDrop5Component"],
                _drag_drop6_drag_drop6_component__WEBPACK_IMPORTED_MODULE_10__["DragDrop6Component"],
                _drag_drop7_drag_drop7_component__WEBPACK_IMPORTED_MODULE_11__["DragDrop7Component"],
                _drag_drop8_drag_drop8_component__WEBPACK_IMPORTED_MODULE_12__["DragDrop8Component"],
                _drag_drop9_drag_drop9_component__WEBPACK_IMPORTED_MODULE_13__["DragDrop9Component"],
                _drag_drop10_drag_drop10_component__WEBPACK_IMPORTED_MODULE_14__["DragDrop10Component"],
                _drag_drop11_drag_drop11_component__WEBPACK_IMPORTED_MODULE_15__["DragDrop11Component"],
                _drag_drop12_drag_drop12_component__WEBPACK_IMPORTED_MODULE_16__["DragDrop12Component"],
                _drag_drop4_handle_data_handle_data_component__WEBPACK_IMPORTED_MODULE_17__["HandleDataComponent"]
            ]
        })
    ], DragDropModule);
    return DragDropModule;
}());



/***/ }),

/***/ "./src/app/drag-drop/drag-drop1/drag-drop1.component.html":
/*!****************************************************************!*\
  !*** ./src/app/drag-drop/drag-drop1/drag-drop1.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4>Simple Drag-and-Drop</h4>\r\n<div class=\"row\">\r\n    <div class=\"col-sm-3\">\r\n        <div class=\"panel panel-success\">\r\n            <div class=\"panel-heading\">Available to drag</div>\r\n            <div class=\"panel-body\">\r\n                <div class=\"panel panel-default\" dnd-draggable [dragEnabled]=\"true\">\r\n                    <div class=\"panel-body\">\r\n                        <div>Drag Me</div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-sm-3\">\r\n        <div dnd-droppable class=\"panel panel-info\" (onDropSuccess)=\"simpleDrop=$event\">\r\n            <div class=\"panel-heading\">Place to drop</div>\r\n            <div class=\"panel-body\">\r\n                <div *ngIf=\"simpleDrop\">Item was dropped here</div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/drag-drop/drag-drop1/drag-drop1.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/drag-drop/drag-drop1/drag-drop1.component.ts ***!
  \**************************************************************/
/*! exports provided: DragDrop1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragDrop1Component", function() { return DragDrop1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DragDrop1Component = /** @class */ (function () {
    function DragDrop1Component() {
    }
    DragDrop1Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'drag-drop-1',
            template: __webpack_require__(/*! ./drag-drop1.component.html */ "./src/app/drag-drop/drag-drop1/drag-drop1.component.html")
        })
    ], DragDrop1Component);
    return DragDrop1Component;
}());



/***/ }),

/***/ "./src/app/drag-drop/drag-drop10/drag-drop10.component.html":
/*!******************************************************************!*\
  !*** ./src/app/drag-drop/drag-drop10/drag-drop10.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4>Simple sortable With Drop into something, without delete it</h4>\r\n<div class=\"row\">\r\n    <div class=\"col-sm-3\">\r\n        <div class=\"panel panel-warning\"\r\n            dnd-sortable-container [sortableData]=\"sourceList\" [dropZones]=\"['source-dropZone']\">\r\n            <div class=\"panel-heading\">Source List</div>\r\n            <div class=\"panel-body\">\r\n                <ul class=\"list-group\">\r\n                    <li *ngFor=\"let source of sourceList; let x = index\" class=\"list-group-item\"\r\n                        dnd-sortable [sortableIndex]=\"x\" [dragEnabled]=\"true\"\r\n                        [dragData]=\"source\">{{source.name}}</li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-sm-6\">\r\n        <div class=\"panel panel-info\">\r\n            <div class=\"panel-heading\">Target List</div>\r\n            <div class=\"panel-body\" dnd-droppable (onDropSuccess)=\"addTo($event)\" [dropZones]=\"['source-dropZone']\">\r\n                <ul class=\"list-group\">\r\n                    <li *ngFor=\"let target of targetList\" class=\"list-group-item\">\r\n                        {{target.name}}\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/drag-drop/drag-drop10/drag-drop10.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/drag-drop/drag-drop10/drag-drop10.component.ts ***!
  \****************************************************************/
/*! exports provided: DragDrop10Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragDrop10Component", function() { return DragDrop10Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DragDrop10Component = /** @class */ (function () {
    function DragDrop10Component() {
        this.sourceList = [
            new Widget('1'), new Widget('2'),
            new Widget('3'), new Widget('4'),
            new Widget('5'), new Widget('6')
        ];
        this.targetList = [];
    }
    DragDrop10Component.prototype.addTo = function ($event) {
        this.targetList.push($event.dragData);
    };
    DragDrop10Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'drag-drop10',
            template: __webpack_require__(/*! ./drag-drop10.component.html */ "./src/app/drag-drop/drag-drop10/drag-drop10.component.html"),
        })
    ], DragDrop10Component);
    return DragDrop10Component;
}());

var Widget = /** @class */ (function () {
    function Widget(name) {
        this.name = name;
    }
    return Widget;
}());


/***/ }),

/***/ "./src/app/drag-drop/drag-drop11/drag-drop11.component.html":
/*!******************************************************************!*\
  !*** ./src/app/drag-drop/drag-drop11/drag-drop11.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<h4>Move items between multi list sortable containers</h4>\r\n<div class=\"row\">\r\n    <div class=\"col-sm-3\">\r\n        Drag Containers <input type=\"checkbox\" [(ngModel)]=\"dragOperation\"/>\r\n        <div dnd-sortable-container [sortableData]=\"containers\" [dropZones]=\"['container-dropZone']\">\r\n            <div class=\"col-sm3\" *ngFor=\"let container of containers; let i = index\" dnd-sortable [sortableIndex]=\"i\" [dragEnabled]=\"dragOperation\">\r\n                <div class=\"panel panel-warning\" dnd-sortable-container [sortableData]=\"container.widgets\" [dropZones]=\"['widget-dropZone']\">\r\n                    <div class=\"panel-heading\">\r\n                        {{container.id}} - {{container.name}}\r\n                    </div>\r\n                    <div class=\"panel-body\">\r\n                        <ul class=\"list-group\">\r\n                            <li *ngFor=\"let widget of container.widgets; let x = index\" class=\"list-group-item\"\r\n                                dnd-sortable [sortableIndex]=\"x\" [dragEnabled]=\"!dragOperation\"\r\n                                [dragData]=\"widget\">{{widget.name}}</li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"col-sm-6\">\r\n        <div class=\"panel panel-info\">\r\n            <div class=\"panel-heading\">Widgets</div>\r\n            <div class=\"panel-body\" dnd-droppable (onDropSuccess)=\"addTo($event)\" [dropZones]=\"['widget-dropZone']\">\r\n                <div *ngFor=\"let widget of widgets\" class=\"panel panel-default\">\r\n                    <div class=\"panel-body\">\r\n                        {{widget.name}}\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/drag-drop/drag-drop11/drag-drop11.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/drag-drop/drag-drop11/drag-drop11.component.ts ***!
  \****************************************************************/
/*! exports provided: DragDrop11Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragDrop11Component", function() { return DragDrop11Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DragDrop11Component = /** @class */ (function () {
    function DragDrop11Component() {
        this.dragOperation = false;
        this.containers = [
            new Container(1, 'Container 1', [new Widget('1'), new Widget('2')]),
            new Container(2, 'Container 2', [new Widget('3'), new Widget('4')]),
            new Container(3, 'Container 3', [new Widget('5'), new Widget('6')])
        ];
        this.widgets = [];
    }
    DragDrop11Component.prototype.addTo = function ($event) {
        if ($event) {
            this.widgets.push($event.dragData);
        }
    };
    DragDrop11Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'drag-drop11',
            template: __webpack_require__(/*! ./drag-drop11.component.html */ "./src/app/drag-drop/drag-drop11/drag-drop11.component.html"),
        })
    ], DragDrop11Component);
    return DragDrop11Component;
}());

var Container = /** @class */ (function () {
    function Container(id, name, widgets) {
        this.id = id;
        this.name = name;
        this.widgets = widgets;
    }
    return Container;
}());
var Widget = /** @class */ (function () {
    function Widget(name) {
        this.name = name;
    }
    return Widget;
}());


/***/ }),

/***/ "./src/app/drag-drop/drag-drop12/drag-drop12.component.html":
/*!******************************************************************!*\
  !*** ./src/app/drag-drop/drag-drop12/drag-drop12.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4>Simple FormArray sortable</h4>\r\n<div class=\"row\">\r\n    <div class=\"col-sm-3\">\r\n        <div class=\"panel panel-success\">\r\n            <div class=\"panel-heading\">\r\n                Favorite drinks\r\n            </div>\r\n            <div class=\"panel-body\">\r\n                <ul class=\"list-group\" dnd-sortable-container [sortableData]=\"listOne\">\r\n                    <li *ngFor=\"let item of listOne.controls; let i = index\" class=\"list-group-item\" dnd-sortable [sortableIndex]=\"i\"><input type=\"text\" [formControl]=\"item\"></li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-sm-6\">\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-body\">\r\n                My prefences:<br/>\r\n                <span *ngFor=\"let item of listOne.controls; let i = index\">{{i + 1}}) {{item.value}}<br/></span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/drag-drop/drag-drop12/drag-drop12.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/drag-drop/drag-drop12/drag-drop12.component.ts ***!
  \****************************************************************/
/*! exports provided: DragDrop12Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragDrop12Component", function() { return DragDrop12Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var DragDrop12Component = /** @class */ (function () {
    function DragDrop12Component() {
        this.listOne = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArray"]([
            new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('Coffee'),
            new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('Orange Juice'),
            new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('Red Wine'),
            new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('Unhealty drink!'),
            new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('Water')
        ]);
    }
    DragDrop12Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'drag-drop12',
            template: __webpack_require__(/*! ./drag-drop12.component.html */ "./src/app/drag-drop/drag-drop12/drag-drop12.component.html"),
        })
    ], DragDrop12Component);
    return DragDrop12Component;
}());



/***/ }),

/***/ "./src/app/drag-drop/drag-drop2/drag-drop2.component.html":
/*!****************************************************************!*\
  !*** ./src/app/drag-drop/drag-drop2/drag-drop2.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4>Simple Drag-and-Drop with handle</h4>\r\n<div class=\"row\">\r\n    <div class=\"col-sm-3\">\r\n        <div class=\"panel panel-success\">\r\n            <div class=\"panel-heading\">Available to drag</div>\r\n            <div class=\"panel-body\">\r\n                <div class=\"panel panel-default\" dnd-draggable [dragEnabled]=\"true\">\r\n                    <div class=\"panel-body\">\r\n                        <div>\r\n                            <span dnd-draggable-handle>=</span>&nbsp;\r\n                            Drag Handle\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-sm-3\">\r\n        <div dnd-droppable class=\"panel panel-info\" (onDropSuccess)=\"simpleDrop=$event\">\r\n            <div class=\"panel-heading\">Place to drop</div>\r\n            <div class=\"panel-body\">\r\n                <div *ngIf=\"simpleDrop\">Item was dropped here</div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/drag-drop/drag-drop2/drag-drop2.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/drag-drop/drag-drop2/drag-drop2.component.ts ***!
  \**************************************************************/
/*! exports provided: DragDrop2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragDrop2Component", function() { return DragDrop2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DragDrop2Component = /** @class */ (function () {
    function DragDrop2Component() {
        this.simpleDrop = null;
    }
    DragDrop2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'drag-drop-2',
            template: __webpack_require__(/*! ./drag-drop2.component.html */ "./src/app/drag-drop/drag-drop2/drag-drop2.component.html")
        })
    ], DragDrop2Component);
    return DragDrop2Component;
}());



/***/ }),

/***/ "./src/app/drag-drop/drag-drop3/drag-drop3.component.html":
/*!****************************************************************!*\
  !*** ./src/app/drag-drop/drag-drop3/drag-drop3.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4>Restricted Drag-and-Drop with zones</h4>\r\n<div class=\"row\">\r\n    <div class=\"col-sm-3\">\r\n        <div class=\"panel panel-primary\">\r\n            <div class=\"panel-heading\">Available to drag</div>\r\n            <div class=\"panel-body\">\r\n                <div class=\"panel panel-default\" dnd-draggable [dragEnabled]=\"true\" [dropZones]=\"['zone1']\">\r\n                    <div class=\"panel-body\">\r\n                        <div>Drag Me</div>\r\n                        <div>Zone 1 only</div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"panel panel-success\">\r\n            <div class=\"panel-heading\">Available to drag</div>\r\n            <div class=\"panel-body\">\r\n                <div class=\"panel panel-default\" dnd-draggable [dragEnabled]=\"true\" [dropZones]=\"['zone1', 'zone2']\">\r\n                    <div class=\"panel-body\">\r\n                        <div>Drag Me</div>\r\n                        <div>Zone 1 & 2</div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-sm-3\">\r\n        <div dnd-droppable class=\"panel panel-info\" [dropZones]=\"['zone1']\" (onDropSuccess)=\"restrictedDrop1=$event\">\r\n            <div class=\"panel-heading\">Zone 1</div>\r\n            <div class=\"panel-body\">\r\n                <div *ngIf=\"restrictedDrop1\">Item was dropped here</div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-sm-3\">\r\n        <div dnd-droppable class=\"panel panel-warning\" [dropZones]=\"['zone2']\" (onDropSuccess)=\"restrictedDrop2=$event\">\r\n            <div class=\"panel-heading\">Zone 2</div>\r\n            <div class=\"panel-body\">\r\n                <div *ngIf=\"restrictedDrop2\">Item was dropped here</div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/drag-drop/drag-drop3/drag-drop3.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/drag-drop/drag-drop3/drag-drop3.component.ts ***!
  \**************************************************************/
/*! exports provided: DragDrop3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragDrop3Component", function() { return DragDrop3Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DragDrop3Component = /** @class */ (function () {
    function DragDrop3Component() {
        this.restrictedDrop1 = null;
        this.restrictedDrop2 = null;
    }
    DragDrop3Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'drag-drop-3',
            template: __webpack_require__(/*! ./drag-drop3.component.html */ "./src/app/drag-drop/drag-drop3/drag-drop3.component.html")
        })
    ], DragDrop3Component);
    return DragDrop3Component;
}());



/***/ }),

/***/ "./src/app/drag-drop/drag-drop4/drag-drop4.component.html":
/*!****************************************************************!*\
  !*** ./src/app/drag-drop/drag-drop4/drag-drop4.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4>Transfer custom data in Drag-and-Drop</h4>\r\n<div class=\"row\">\r\n    <div class=\"col-sm-3\">\r\n        <div class=\"panel panel-success\">\r\n            <div class=\"panel-heading\">Available to drag</div>\r\n            <div class=\"panel-body\">\r\n                <div class=\"panel panel-default\" dnd-draggable [dragEnabled]=\"true\" [dragData]=\"transferData\">\r\n                    <div class=\"panel-body\">\r\n                        <div>Drag Me</div>\r\n                        <div>{{transferData | json}}</div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-sm-3\">\r\n        <div dnd-droppable class=\"panel panel-info\" (onDropSuccess)=\"transferDataSuccess($event)\">\r\n            <div class=\"panel-heading\">Place to drop (Items:{{receivedData.length}})</div>\r\n            <div class=\"panel-body\">\r\n                <div [hidden]=\"!receivedData.length > 0\" *ngFor=\"let data of receivedData\">{{data | json}}</div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/drag-drop/drag-drop4/drag-drop4.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/drag-drop/drag-drop4/drag-drop4.component.ts ***!
  \**************************************************************/
/*! exports provided: DragDrop4Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragDrop4Component", function() { return DragDrop4Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DragDrop4Component = /** @class */ (function () {
    function DragDrop4Component() {
        this.transferData = { id: 1, msg: 'Hello' };
        this.receivedData = [];
    }
    DragDrop4Component.prototype.transferDataSuccess = function ($event) {
        this.receivedData.push($event);
    };
    DragDrop4Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'drag-drop-4',
            template: __webpack_require__(/*! ./drag-drop4.component.html */ "./src/app/drag-drop/drag-drop4/drag-drop4.component.html")
        })
    ], DragDrop4Component);
    return DragDrop4Component;
}());



/***/ }),

/***/ "./src/app/drag-drop/drag-drop4/handle-data/handle-data.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/drag-drop/drag-drop4/handle-data/handle-data.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm-3\">\r\n    <div dnd-droppable class=\"panel panel-info\">\r\n        <div class=\"panel-heading\">Place to drop (Items:{{receivedData.length}})</div>\r\n        <div class=\"panel-body\">\r\n            <div [hidden]=\"!receivedData.length > 0\" *ngFor=\"let data of receivedData\">{{data | json}}</div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/drag-drop/drag-drop4/handle-data/handle-data.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/drag-drop/drag-drop4/handle-data/handle-data.component.ts ***!
  \***************************************************************************/
/*! exports provided: HandleDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HandleDataComponent", function() { return HandleDataComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HandleDataComponent = /** @class */ (function () {
    function HandleDataComponent() {
        this.onDropSuccess = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], HandleDataComponent.prototype, "name", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], HandleDataComponent.prototype, "onDropSuccess", void 0);
    HandleDataComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'handle-data',
            template: __webpack_require__(/*! ./handle-data.component.html */ "./src/app/drag-drop/drag-drop4/handle-data/handle-data.component.html")
        })
    ], HandleDataComponent);
    return HandleDataComponent;
}());



/***/ }),

/***/ "./src/app/drag-drop/drag-drop5/drag-drop5.component.html":
/*!****************************************************************!*\
  !*** ./src/app/drag-drop/drag-drop5/drag-drop5.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4>Use a custom function to determine where dropping is allowed</h4>\r\n<div class=\"row\">\r\n    <div class=\"col-sm-3\">\r\n        <div class=\"panel panel-success\">\r\n            <div class=\"panel-heading\">Available to drag</div>\r\n            <div class=\"panel-body\">\r\n                <div class=\"panel panel-default\" dnd-draggable [dragData]=\"6\">\r\n                    <div class=\"panel-body\">dragData = 6</div>\r\n                </div>\r\n                <div class=\"panel panel-default\" dnd-draggable [dragData]=\"10\">\r\n                    <div class=\"panel-body\">dragData = 10</div>\r\n                </div>\r\n                <div class=\"panel panel-default\" dnd-draggable [dragData]=\"30\">\r\n                    <div class=\"panel-body\">dragData = 30</div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-sm-6\">\r\n        <pre>allowDropFunction(baseInteger: any): any {{ '{' }}\r\n  return (dragData: any) => dragData % baseInteger === 0;\r\n{{ '}' }}</pre>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-6\">\r\n                <div dnd-droppable class=\"panel panel-info\" [allowDrop]=\"allowDropFunction(box1Integer)\" (onDropSuccess)=\"addTobox1Items($event)\">\r\n                    <div class=\"panel-heading\">\r\n                        Multiples of\r\n                        <input type=\"number\" [(ngModel)]=\"box1Integer\" style=\"width: 4em\">\r\n                        only\r\n                    </div>\r\n                    <div class=\"panel-body\">\r\n                        <div *ngFor=\"let item of box1Items\">dragData = {{item}}</div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-6\">\r\n                <div dnd-droppable class=\"panel panel-warning\" [allowDrop]=\"allowDropFunction(box2Integer)\" (onDropSuccess)=\"addTobox2Items($event)\">\r\n                    <div class=\"panel-heading\">\r\n                        Multiples of\r\n                        <input type=\"number\" [(ngModel)]=\"box2Integer\" style=\"width: 4em\">\r\n                        only\r\n                    </div>\r\n                    <div class=\"panel-body\">\r\n                        <div *ngFor=\"let item of box2Items\">dragData = {{item}}</div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/drag-drop/drag-drop5/drag-drop5.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/drag-drop/drag-drop5/drag-drop5.component.ts ***!
  \**************************************************************/
/*! exports provided: DragDrop5Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragDrop5Component", function() { return DragDrop5Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DragDrop5Component = /** @class */ (function () {
    function DragDrop5Component() {
        this.box1Integer = 3;
        this.box2Integer = 10;
        this.box1Items = [];
        this.box2Items = [];
    }
    DragDrop5Component.prototype.allowDropFunction = function (baseInteger) {
        return function (dragData) { return dragData % baseInteger === 0; };
    };
    DragDrop5Component.prototype.addTobox1Items = function ($event) {
        this.box1Items.push($event.dragData);
    };
    DragDrop5Component.prototype.addTobox2Items = function ($event) {
        this.box2Items.push($event.dragData);
    };
    DragDrop5Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'drag-drop5',
            template: __webpack_require__(/*! ./drag-drop5.component.html */ "./src/app/drag-drop/drag-drop5/drag-drop5.component.html"),
        })
    ], DragDrop5Component);
    return DragDrop5Component;
}());



/***/ }),

/***/ "./src/app/drag-drop/drag-drop6/drag-drop6.component.html":
/*!****************************************************************!*\
  !*** ./src/app/drag-drop/drag-drop6/drag-drop6.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4>Drag-and-Drop - Shopping basket</h4>\r\n<div class=\"row\">\r\n\r\n    <div class=\"col-sm-3\">\r\n        <div class=\"panel panel-success\">\r\n            <div class=\"panel-heading\">Available products</div>\r\n            <div class=\"panel-body\">\r\n                <div *ngFor=\"let product of availableProducts\" class=\"panel panel-default\"\r\n                    dnd-draggable [dragEnabled]=\"product.quantity>0\" [dragData]=\"product\" (onDragSuccess)=\"orderedProduct($event)\" [dropZones]=\"['demo1']\">\r\n                    <div class=\"panel-body\">\r\n                        <div [hidden]=\"product.quantity===0\">{{product.name}} - \\${{product.cost}}<br>(available: {{product.quantity}})</div>\r\n                        <div [hidden]=\"product.quantity>0\"><del>{{product.name}}</del><br>(NOT available)</div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-sm-3\">\r\n        <div dnd-droppable (onDropSuccess)=\"addToBasket($event)\" [dropZones]=\"['demo1']\" class=\"panel panel-info\">\r\n            <div class=\"panel-heading\">Shopping Basket<br>(to pay: \\${{totalCost()}})</div>\r\n            <div class=\"panel-body\">\r\n                <div *ngFor=\"let product of shoppingBasket\" class=\"panel panel-default\">\r\n                    <div class=\"panel-body\">\r\n                    {{product.name}}<br>(ordered: {{product.quantity}}<br>cost: \\${{product.cost * product.quantity}})\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/drag-drop/drag-drop6/drag-drop6.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/drag-drop/drag-drop6/drag-drop6.component.ts ***!
  \**************************************************************/
/*! exports provided: DragDrop6Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragDrop6Component", function() { return DragDrop6Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DragDrop6Component = /** @class */ (function () {
    function DragDrop6Component() {
        this.availableProducts = [];
        this.shoppingBasket = [];
        this.availableProducts.push(new Product('Blue Shoes', 3, 35));
        this.availableProducts.push(new Product('Good Jacket', 1, 90));
        this.availableProducts.push(new Product('Red Shirt', 5, 12));
        this.availableProducts.push(new Product('Blue Jeans', 4, 60));
    }
    DragDrop6Component.prototype.orderedProduct = function ($event) {
        var orderedProduct = $event.dragData;
        orderedProduct.quantity--;
    };
    DragDrop6Component.prototype.addToBasket = function ($event) {
        var newProduct = $event.dragData;
        for (var indx in this.shoppingBasket) {
            var product = this.shoppingBasket[indx];
            if (product.name === newProduct.name) {
                product.quantity++;
                return;
            }
        }
        this.shoppingBasket.push(new Product(newProduct.name, 1, newProduct.cost));
        this.shoppingBasket.sort(function (a, b) {
            return a.name.localeCompare(b.name);
        });
    };
    DragDrop6Component.prototype.totalCost = function () {
        var cost = 0;
        for (var indx in this.shoppingBasket) {
            var product = this.shoppingBasket[indx];
            cost += (product.cost * product.quantity);
        }
        return cost;
    };
    DragDrop6Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'drag-drop6',
            template: __webpack_require__(/*! ./drag-drop6.component.html */ "./src/app/drag-drop/drag-drop6/drag-drop6.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], DragDrop6Component);
    return DragDrop6Component;
}());

var Product = /** @class */ (function () {
    function Product(name, quantity, cost) {
        this.name = name;
        this.quantity = quantity;
        this.cost = cost;
    }
    return Product;
}());


/***/ }),

/***/ "./src/app/drag-drop/drag-drop7/drag-drop7.component.html":
/*!****************************************************************!*\
  !*** ./src/app/drag-drop/drag-drop7/drag-drop7.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4>Simple sortable</h4>\r\n<div class=\"row\">\r\n    <div class=\"col-sm-3\">\r\n        <div class=\"panel panel-success\">\r\n            <div class=\"panel-heading\">\r\n                Favorite drinks\r\n            </div>\r\n            <div class=\"panel-body\">\r\n                <ul class=\"list-group\" dnd-sortable-container [sortableData]=\"listOne\">\r\n                    <li *ngFor=\"let item of listOne; let i = index\" class=\"list-group-item\" dnd-sortable [sortableIndex]=\"i\">{{item}}</li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-sm-6\">\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-body\">\r\n                My prefences:<br/>\r\n                <span *ngFor=\"let item of listOne; let i = index\">{{i + 1}}) {{item}}<br/></span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/drag-drop/drag-drop7/drag-drop7.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/drag-drop/drag-drop7/drag-drop7.component.ts ***!
  \**************************************************************/
/*! exports provided: DragDrop7Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragDrop7Component", function() { return DragDrop7Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DragDrop7Component = /** @class */ (function () {
    function DragDrop7Component() {
        this.listOne = ['Coffee', 'Orange Juice', 'Red Wine', 'Unhealty drink!', 'Water'];
    }
    DragDrop7Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'drag-drop7',
            template: __webpack_require__(/*! ./drag-drop7.component.html */ "./src/app/drag-drop/drag-drop7/drag-drop7.component.html"),
        })
    ], DragDrop7Component);
    return DragDrop7Component;
}());



/***/ }),

/***/ "./src/app/drag-drop/drag-drop8/drag-drop8.component.html":
/*!****************************************************************!*\
  !*** ./src/app/drag-drop/drag-drop8/drag-drop8.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4>Simple sortable handle</h4>\r\n<div class=\"row\">\r\n    <div class=\"col-sm-3\">\r\n        <div class=\"panel panel-success\">\r\n            <div class=\"panel-heading\">\r\n                Favorite drinks\r\n            </div>\r\n            <div class=\"panel-body\">\r\n                <ul class=\"list-group\" dnd-sortable-container [sortableData]=\"listOne\">\r\n                    <li *ngFor=\"let item of listOne; let i = index\" class=\"list-group-item\" dnd-sortable [sortableIndex]=\"i\">\r\n                      <span dnd-sortable-handle>=</span>&nbsp;\r\n                      {{item}}\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-sm-6\">\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-body\">\r\n                My prefences:<br/>\r\n                <span *ngFor=\"let item of listOne; let i = index\">{{i + 1}}) {{item}}<br/></span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/drag-drop/drag-drop8/drag-drop8.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/drag-drop/drag-drop8/drag-drop8.component.ts ***!
  \**************************************************************/
/*! exports provided: DragDrop8Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragDrop8Component", function() { return DragDrop8Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DragDrop8Component = /** @class */ (function () {
    function DragDrop8Component() {
        this.listOne = ['Coffee', 'Orange Juice', 'Red Wine', 'Unhealty drink!', 'Water'];
    }
    DragDrop8Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'drag-drop8',
            template: __webpack_require__(/*! ./drag-drop8.component.html */ "./src/app/drag-drop/drag-drop8/drag-drop8.component.html"),
        })
    ], DragDrop8Component);
    return DragDrop8Component;
}());



/***/ }),

/***/ "./src/app/drag-drop/drag-drop9/drag-drop9.component.html":
/*!****************************************************************!*\
  !*** ./src/app/drag-drop/drag-drop9/drag-drop9.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4>Simple sortable With Drop into recycle bin</h4>\r\n<div class=\"row\">\r\n    <div class=\"col-sm-3\">\r\n        <div class=\"panel panel-success\">\r\n            <div class=\"panel-heading\">\r\n                Favorite drinks\r\n            </div>\r\n            <div class=\"panel-body\" dnd-sortable-container [sortableData]=\"listOne\" [dropZones]=\"['delete-dropZone']\">\r\n                <ul class=\"list-group\">\r\n                    <li *ngFor=\"let item of listOne; let i = index\" class=\"list-group-item\"\r\n                    dnd-sortable [sortableIndex]=\"i\">{{item}}</li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-sm-6\">\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-body\" dnd-sortable-container [dropZones]=\"['delete-dropZone']\" [sortableData]=\"listRecycled\">\r\n                Recycle bin: Drag into me to delete it<br/>\r\n            </div>\r\n        </div>\r\n        <div *ngIf=\"listRecycled.length\">\r\n        <b>Recycled:</b> <span>{{listRecycled.toString()}} </span>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/drag-drop/drag-drop9/drag-drop9.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/drag-drop/drag-drop9/drag-drop9.component.ts ***!
  \**************************************************************/
/*! exports provided: DragDrop9Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragDrop9Component", function() { return DragDrop9Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DragDrop9Component = /** @class */ (function () {
    function DragDrop9Component() {
        this.listOne = ['Coffee', 'Orange Juice', 'Red Wine', 'Unhealty drink!', 'Water'];
        this.listRecycled = [];
    }
    DragDrop9Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'drag-drop9',
            template: __webpack_require__(/*! ./drag-drop9.component.html */ "./src/app/drag-drop/drag-drop9/drag-drop9.component.html"),
        })
    ], DragDrop9Component);
    return DragDrop9Component;
}());



/***/ }),

/***/ "./src/app/gulp/gulp.component.html":
/*!******************************************!*\
  !*** ./src/app/gulp/gulp.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p><span>Reference Link: </span>https://semaphoreci.com/community/tutorials/getting-started-with-gulp-js</p>\r\n\r\n<b>The readable.pipe() method attaches a Writable stream to the readable, \r\n    causing it to switch automatically into flowing mode and push all of its \r\n    data to the attached Writable. The flow of data will be automatically managed \r\n    so that the destination Writable stream is not overwhelmed by a faster Readable stream.\r\n</b>\r\n\r\n<p>So in Gulp you can chain multiple tasks together using the pipe() method</p>"

/***/ }),

/***/ "./src/app/gulp/gulp.component.ts":
/*!****************************************!*\
  !*** ./src/app/gulp/gulp.component.ts ***!
  \****************************************/
/*! exports provided: GulpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GulpComponent", function() { return GulpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GulpComponent = /** @class */ (function () {
    function GulpComponent() {
    }
    GulpComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'gulp-component',
            template: __webpack_require__(/*! ./gulp.component.html */ "./src/app/gulp/gulp.component.html")
        })
    ], GulpComponent);
    return GulpComponent;
}());



/***/ }),

/***/ "./src/app/high-chart/bar-chart/bar-chart.component.css":
/*!**************************************************************!*\
  !*** ./src/app/high-chart/bar-chart/bar-chart.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/high-chart/bar-chart/bar-chart.component.html":
/*!***************************************************************!*\
  !*** ./src/app/high-chart/bar-chart/bar-chart.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <!-- <button class=\"btn btn-primary btn-sm m-t-38\" (click)=\"add()\">Add Point!</button> -->\r\n    <div [chart]=\"chart\"></div>\r\n</div>"

/***/ }),

/***/ "./src/app/high-chart/bar-chart/bar-chart.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/high-chart/bar-chart/bar-chart.component.ts ***!
  \*************************************************************/
/*! exports provided: BarChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarChartComponent", function() { return BarChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_highcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-highcharts */ "./node_modules/angular-highcharts/angular-highcharts.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var BarChartComponent = /** @class */ (function () {
    function BarChartComponent() {
        this.chart = new angular_highcharts__WEBPACK_IMPORTED_MODULE_1__["Chart"]({
            chart: {
                type: 'bar'
            },
            title: {
                text: 'Stacked bar chart'
            },
            xAxis: {
                categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Total fruit consumption'
                }
            },
            legend: {
                reversed: true
            },
            plotOptions: {
                series: {
                    stacking: 'normal'
                }
            },
            series: [{
                    name: 'John',
                    data: [5, 3, 4, 7, 2]
                }, {
                    name: 'Jane',
                    data: [2, 2, 3, 2, 1]
                }, {
                    name: 'Joe',
                    data: [3, 4, 4, 2, 5]
                }]
        });
    }
    BarChartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'bar-chart',
            template: __webpack_require__(/*! ./bar-chart.component.html */ "./src/app/high-chart/bar-chart/bar-chart.component.html"),
            styles: [__webpack_require__(/*! ./bar-chart.component.css */ "./src/app/high-chart/bar-chart/bar-chart.component.css")]
        })
    ], BarChartComponent);
    return BarChartComponent;
}());



/***/ }),

/***/ "./src/app/high-chart/high-chart.component.css":
/*!*****************************************************!*\
  !*** ./src/app/high-chart/high-chart.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/high-chart/high-chart.component.html":
/*!******************************************************!*\
  !*** ./src/app/high-chart/high-chart.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <tabset>\r\n        <tab heading=\"{{ 'lineChart' | translate }}\" id=\"tab1\"><line-chart></line-chart></tab>\r\n        <tab heading=\"{{ 'pieChart' | translate }}\"><pie-chart></pie-chart></tab>\r\n        <tab heading=\"{{ 'barChart' | translate}}\"><bar-chart></bar-chart></tab>\r\n    </tabset>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/high-chart/high-chart.component.ts":
/*!****************************************************!*\
  !*** ./src/app/high-chart/high-chart.component.ts ***!
  \****************************************************/
/*! exports provided: ChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartComponent", function() { return ChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ChartComponent = /** @class */ (function () {
    function ChartComponent() {
    }
    ChartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'high-chart',
            template: __webpack_require__(/*! ./high-chart.component.html */ "./src/app/high-chart/high-chart.component.html"),
            styles: [__webpack_require__(/*! ./high-chart.component.css */ "./src/app/high-chart/high-chart.component.css")]
        })
    ], ChartComponent);
    return ChartComponent;
}());



/***/ }),

/***/ "./src/app/high-chart/line-chart/line-chart.component.css":
/*!****************************************************************!*\
  !*** ./src/app/high-chart/line-chart/line-chart.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".m-t-38{\r\n    margin-top: 38px !important;\r\n}"

/***/ }),

/***/ "./src/app/high-chart/line-chart/line-chart.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/high-chart/line-chart/line-chart.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <!-- <button class=\"btn btn-primary btn-sm m-t-38\" (click)=\"add()\">Add Point!</button> -->\r\n    <div [chart]=\"chart\"></div>\r\n</div>"

/***/ }),

/***/ "./src/app/high-chart/line-chart/line-chart.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/high-chart/line-chart/line-chart.component.ts ***!
  \***************************************************************/
/*! exports provided: LineChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineChartComponent", function() { return LineChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_highcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-highcharts */ "./node_modules/angular-highcharts/angular-highcharts.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var LineChartComponent = /** @class */ (function () {
    function LineChartComponent() {
        this.chart = new angular_highcharts__WEBPACK_IMPORTED_MODULE_1__["Chart"]({
            chart: {
                type: 'line'
            },
            title: {
                text: 'Linechart'
            },
            credits: {
                enabled: false
            },
            series: [
                {
                    name: 'Line 1',
                    data: [1, 2, 3]
                }
            ]
        });
    }
    // add point to chart serie
    LineChartComponent.prototype.add = function () {
        this.chart.addPoint(Math.floor(Math.random() * 10));
    };
    LineChartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'line-chart',
            template: __webpack_require__(/*! ./line-chart.component.html */ "./src/app/high-chart/line-chart/line-chart.component.html"),
            styles: [__webpack_require__(/*! ./line-chart.component.css */ "./src/app/high-chart/line-chart/line-chart.component.css")]
        })
    ], LineChartComponent);
    return LineChartComponent;
}());



/***/ }),

/***/ "./src/app/high-chart/pie-chart/pie-chart.component.css":
/*!**************************************************************!*\
  !*** ./src/app/high-chart/pie-chart/pie-chart.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".m-t-38{\r\n    margin-top: 38px !important;\r\n}"

/***/ }),

/***/ "./src/app/high-chart/pie-chart/pie-chart.component.html":
/*!***************************************************************!*\
  !*** ./src/app/high-chart/pie-chart/pie-chart.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <!-- <button class=\"btn btn-primary btn-sm m-t-38\" (click)=\"add()\">Add Point!</button> -->\r\n    <div [chart]=\"chart\"></div>\r\n</div>"

/***/ }),

/***/ "./src/app/high-chart/pie-chart/pie-chart.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/high-chart/pie-chart/pie-chart.component.ts ***!
  \*************************************************************/
/*! exports provided: PieaChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PieaChartComponent", function() { return PieaChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_highcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-highcharts */ "./node_modules/angular-highcharts/angular-highcharts.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var PieaChartComponent = /** @class */ (function () {
    function PieaChartComponent() {
        this.chart = new angular_highcharts__WEBPACK_IMPORTED_MODULE_1__["Chart"]({
            chart: {
                type: 'pie'
            },
            title: {
                text: 'PIE CHART'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                    }
                }
            },
            series: [{
                    data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
                }]
        });
    }
    // add point to chart serie
    PieaChartComponent.prototype.add = function () {
        this.chart.addPoint(Math.floor(Math.random() * 10));
    };
    PieaChartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'pie-chart',
            template: __webpack_require__(/*! ./pie-chart.component.html */ "./src/app/high-chart/pie-chart/pie-chart.component.html"),
            styles: [__webpack_require__(/*! ./pie-chart.component.css */ "./src/app/high-chart/pie-chart/pie-chart.component.css")]
        })
    ], PieaChartComponent);
    return PieaChartComponent;
}());



/***/ }),

/***/ "./src/app/knowledge-storage/knowledge-storage.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/knowledge-storage/knowledge-storage.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "accordion{\r\n    margin-bottom: 66px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/knowledge-storage/knowledge-storage.component.html":
/*!********************************************************************!*\
  !*** ./src/app/knowledge-storage/knowledge-storage.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<accordion [closeOthers]=\"true\">\r\n    <accordion-group heading=\"{{ 'accordion1' | translate}}\" [isOpen]=\"false\">\r\n        <passing-data></passing-data>\r\n    </accordion-group>\r\n    <accordion-group heading=\"{{ 'accordion2' | translate}}\" [isOpen]=\"true\">\r\n        <vote-root></vote-root>\r\n    </accordion-group>\r\n</accordion>"

/***/ }),

/***/ "./src/app/knowledge-storage/knowledge-storage.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/knowledge-storage/knowledge-storage.component.ts ***!
  \******************************************************************/
/*! exports provided: KnowledgeTabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KnowledgeTabComponent", function() { return KnowledgeTabComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_common_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/services/common/common.service */ "./src/app/core/services/common/common.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var KnowledgeTabComponent = /** @class */ (function () {
    function KnowledgeTabComponent(commonService) {
        this.commonService = commonService;
    }
    KnowledgeTabComponent.prototype.ngOnInit = function () {
        this.commonService.getDataTest().subscribe(function (data) {
            console.log(data);
        });
    };
    KnowledgeTabComponent.prototype.fireEvent = function () {
        // this.passingDataComponent.handleFunctionEvent();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], KnowledgeTabComponent.prototype, "fireEvent", null);
    KnowledgeTabComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'knowledge-storage',
            template: __webpack_require__(/*! ./knowledge-storage.component.html */ "./src/app/knowledge-storage/knowledge-storage.component.html"),
            styles: [__webpack_require__(/*! ./knowledge-storage.component.css */ "./src/app/knowledge-storage/knowledge-storage.component.css")]
        }),
        __metadata("design:paramtypes", [_core_services_common_common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"]])
    ], KnowledgeTabComponent);
    return KnowledgeTabComponent;
}());



/***/ }),

/***/ "./src/app/knowledge-storage/passing-data/passing-data.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/knowledge-storage/passing-data/passing-data.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pro-button, .pro-label {\r\n    text-transform: uppercase;\r\n}\r\n\r\n#carbonads a, .native-ad a, a {\r\n    text-decoration: none;\r\n}\r\n\r\n#nav, .content.menu li, .sidebar ul {\r\n    list-style-type: none;\r\n}\r\n\r\n#nav .nav-dropdown, .label-new, .tag-item, code {\r\n        white-space: nowrap;\r\n    }\r\n\r\n.gutter pre {\r\n    color: #999;\r\n}\r\n\r\npre {\r\n    color: #525252;\r\n}\r\n\r\npre .constant, pre .function .keyword {\r\n        color: #0092db;\r\n    }\r\n\r\npre .meta {\r\n        color: #1c90f3;\r\n        font-weight: 700;\r\n    }\r\n\r\npre .attribute, pre .keyword {\r\n        color: #c678dd;\r\n    }\r\n\r\npre .literal, pre .number {\r\n        color: #ae81ff;\r\n    }\r\n\r\npre .change, pre .clojure .built_in, pre .flow, pre .lisp .title, pre .nginx .title, pre .tag, pre .tag .title, pre .tex .special, pre .winutils {\r\n        color: #2973b7;\r\n    }\r\n\r\npre .class .title {\r\n        color: #fff;\r\n    }\r\n\r\npre .regexp, pre .symbol, pre .symbol .string, pre .value {\r\n        color: #f16624;\r\n    }\r\n\r\npre .title {\r\n        color: #91cb1c;\r\n    }\r\n\r\npre .addition, pre .apache .cbracket, pre .apache .tag, pre .attr_selector, pre .built_in, pre .django .filter .argument, pre .django .template_tag, pre .django .variable, pre .envvar, pre .haskell .type, pre .javadoc, pre .preprocessor, pre .prompt, pre .pseudo, pre .ruby .class .parent, pre .smalltalk .array, pre .smalltalk .class, pre .smalltalk .localvars, pre .sql .aggregate, pre .stream, pre .string, pre .subst, pre .tag .value, pre .tex .command {\r\n        color: #f16624;\r\n    }\r\n\r\npre .apache .sqbracket, pre .comment, pre .deletion, pre .doctype, pre .java .annotation, pre .pi, pre .python .decorator, pre .shebang, pre .template_comment, pre .tex .formula {\r\n        color: #b3b3b3;\r\n    }\r\n\r\npre .coffeescript .javascript, pre .javascript .xml, pre .tex .formula, pre .xml .cdata, pre .xml .css, pre .xml .javascript, pre .xml .vbscript {\r\n        opacity: .5;\r\n    }\r\n\r\npre .string {\r\n        color: #42b983;\r\n    }\r\n\r\npre .substr {\r\n        color: #f66;\r\n    }\r\n\r\npre .attr {\r\n        color: #f16624;\r\n    }\r\n\r\na, body {\r\n    color: #34495e;\r\n}\r\n\r\nbody {\r\n    font-family: sofia-pro,sans-serif;\r\n    font-size: 15px;\r\n    -webkit-font-smoothing: antialiased;\r\n    -moz-osx-font-smoothing: grayscale;\r\n    background-color: #fff;\r\n    margin: 0;\r\n}\r\n\r\nbody.docs {\r\n        padding-top: 61px;\r\n    }\r\n\r\n@media screen and (max-width:900px) {\r\n    body.docs {\r\n        padding-top: 0;\r\n    }\r\n}\r\n\r\nimg {\r\n    border: 0;\r\n}\r\n\r\nh1, h2, h3, h4, strong {\r\n    font-weight: 600;\r\n    color: #2c3e50;\r\n    font-family: Palanquin,sans-serif;\r\n}\r\n\r\ncode, pre {\r\n    font-family: droid-sans-mono,monospace;\r\n    font-size: .9em;\r\n    background-color: #f8f8f8;\r\n    -webkit-font-smoothing: initial;\r\n    -moz-osx-font-smoothing: initial;\r\n}\r\n\r\ncode {\r\n    color: #e96900;\r\n    padding: 3px 5px;\r\n    margin: 0 2px;\r\n    border-radius: 2px;\r\n}\r\n\r\nem {\r\n    color: #7f8c8d;\r\n}\r\n\r\np {\r\n    word-spacing: .05em;\r\n}\r\n\r\na.button {\r\n    padding: .75em 2em;\r\n    border-radius: 2em;\r\n    display: inline-block;\r\n    color: #fff;\r\n    background-color: #f27236;\r\n    transition: all .15s ease;\r\n    box-sizing: border-box;\r\n    border: 1px solid #f27236;\r\n}\r\n\r\na.button.white {\r\n        background-color: #fff;\r\n        color: #f16624;\r\n    }\r\n\r\n.highlight {\r\n    overflow-x: auto;\r\n    position: relative;\r\n    background-color: #f8f8f8;\r\n    padding: .8em .8em .4em;\r\n    line-height: 1.1em;\r\n    border-radius: 2px;\r\n}\r\n\r\n.highlight table, .highlight td, .highlight tr {\r\n        width: 100%;\r\n        border-collapse: collapse;\r\n        padding: 0;\r\n        margin: 0;\r\n    }\r\n\r\n.highlight .gutter {\r\n        width: 1.5em;\r\n    }\r\n\r\n.highlight .code pre {\r\n        padding: 1.2em 1.4em;\r\n        line-height: 1.5em;\r\n        margin: 0;\r\n    }\r\n\r\n#ad, #ad-bottom, #ad-sidebar {\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.highlight .code .line {\r\n    min-height: 1.5em;\r\n}\r\n\r\n.highlight.bash .code:after, .highlight.css .code:after, .highlight.html .code:after, .highlight.js .code:after, .highlight.json .code:after, .highlight.scss .code:after, .highlight.shell .code:after, .highlight.typescript .code:after {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    color: #ccc;\r\n    text-align: right;\r\n    font-size: .75em;\r\n    padding: 5px 10px 0;\r\n    line-height: 15px;\r\n    height: 15px;\r\n    font-weight: 600;\r\n}\r\n\r\n.highlight.html .code:after {\r\n    content: 'HTML';\r\n}\r\n\r\n.highlight.js .code:after {\r\n    content: 'JS';\r\n}\r\n\r\n.highlight.bash .code:after {\r\n    content: 'Shell';\r\n}\r\n\r\n.highlight.css .code:after {\r\n    content: 'CSS';\r\n}\r\n\r\n.highlight.scss .code:after {\r\n    content: 'SCSS';\r\n}\r\n\r\n.highlight.typescript .code:after {\r\n    content: 'TypeScript';\r\n}\r\n\r\n.highlight.shell .code:after {\r\n    content: 'Command Line';\r\n}\r\n\r\n.highlight.json .code:after {\r\n    content: 'JSON';\r\n}\r\n\r\n#main {\r\n    position: relative;\r\n    z-index: 1;\r\n    padding: 0 60px 30px;\r\n    overflow-x: hidden;\r\n}\r\n\r\n#ad {\r\n    width: 100%;\r\n    min-height: 150px;\r\n    max-height: 350px;\r\n    overflow: hidden;\r\n    display: block;\r\n    z-index: 99;\r\n    padding: 5px;\r\n}\r\n\r\n.tpmHasAccess.pro-ad {\r\n    display: none;\r\n}\r\n\r\n#ad-bottom {\r\n    min-height: 20px;\r\n    max-height: 120px;\r\n    width: auto;\r\n}\r\n\r\n#ad-sidebar {\r\n    height: 250px;\r\n}\r\n\r\n#nav .nav-link {\r\n    cursor: pointer;\r\n}\r\n\r\n#nav .nav-dropdown-container .nav-link:hover {\r\n    border-bottom: 0;\r\n}\r\n\r\n#nav .nav-dropdown-container:hover .nav-dropdown {\r\n    display: block;\r\n}\r\n\r\n#nav .nav-dropdown-container.language {\r\n    margin-left: 20px;\r\n}\r\n\r\n#nav .nav-dropdown-container .arrow {\r\n    pointer-events: none;\r\n}\r\n\r\n#nav .nav-dropdown {\r\n    display: none;\r\n    box-sizing: border-box;\r\n    max-height: calc(100vh - 61px);\r\n    overflow-y: auto;\r\n    position: absolute;\r\n    top: 100%;\r\n    right: -15px;\r\n    background-color: #fff;\r\n    padding: 10px 0;\r\n    border: 1px solid #ddd;\r\n    border-bottom-color: #ccc;\r\n    text-align: left;\r\n    border-radius: 4px;\r\n}\r\n\r\n#nav .nav-dropdown li {\r\n        line-height: 1.8em;\r\n        margin: 0;\r\n        display: block;\r\n    }\r\n\r\n#nav .nav-dropdown li > ul {\r\n            padding-left: 0;\r\n        }\r\n\r\n#nav .nav-dropdown li:first-child h4 {\r\n            margin-top: 0;\r\n            padding-top: 0;\r\n            border-top: 0;\r\n        }\r\n\r\n#nav .nav-dropdown a, #nav .nav-dropdown h4 {\r\n        padding: 0 24px 0 20px;\r\n    }\r\n\r\n#nav .nav-dropdown h4 {\r\n        margin: .45em 0 0;\r\n        padding-top: .45em;\r\n        border-top: 1px solid #eee;\r\n    }\r\n\r\n#nav .nav-dropdown a {\r\n        color: #3a5169;\r\n        font-size: .9em;\r\n        display: block;\r\n    }\r\n\r\n#nav .nav-dropdown a:hover {\r\n            color: #f16624;\r\n        }\r\n\r\n#nav .arrow {\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    margin-top: -1px;\r\n    margin-left: 6px;\r\n    margin-right: -14px;\r\n    width: 0;\r\n    height: 0;\r\n    border-left: 4px solid transparent;\r\n    border-right: 4px solid transparent;\r\n    border-top: 5px solid #ccc;\r\n}\r\n\r\n.content-image {\r\n    width: auto;\r\n    height: auto;\r\n    display: block;\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.tag-list {\r\n    padding-left: 0 !important;\r\n    margin: 15px 0;\r\n    list-style: none;\r\n}\r\n\r\n.tag-list .tag-list-item {\r\n        display: inline;\r\n        border: 1px solid #ddd;\r\n        font-weight: 600;\r\n        padding: 5px;\r\n        margin: 0 3px;\r\n    }\r\n\r\n.tag-list .tag-list-item a {\r\n            color: #70cca2;\r\n        }\r\n\r\n.pro-member {\r\n    color: #42b983;\r\n    font-weight: 700;\r\n    display: none;\r\n}\r\n\r\n.pro-member.tpmHasAccess {\r\n        display: block !important;\r\n    }\r\n\r\n.expired-preview {\r\n    color: #f66;\r\n    font-weight: 700;\r\n    display: none;\r\n}\r\n\r\n.expired-preview.tpmExpired {\r\n        display: block !important;\r\n    }\r\n\r\n.free-preview {\r\n    color: #1c90f3;\r\n    font-weight: 700;\r\n    display: none;\r\n}\r\n\r\n.pro-button, .pro-link {\r\n    color: #fff !important;\r\n    transition: all .15s ease;\r\n    cursor: pointer;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.free-preview.tpmMetered {\r\n    display: block !important;\r\n}\r\n\r\n.signup.tpmHasAccess {\r\n    display: none;\r\n}\r\n\r\n.pro-logo {\r\n    text-align: center;\r\n    cursor: pointer;\r\n}\r\n\r\n.pro-link {\r\n    padding: .75em 2em;\r\n    border-radius: 2em;\r\n    display: inline-block;\r\n    background-color: #f27236;\r\n    border: 1px solid #f27236;\r\n}\r\n\r\n.main-signup {\r\n    font-size: 1.1em;\r\n    padding: 10px auto;\r\n    width: 100%;\r\n    max-width: 600px;\r\n    text-align: center;\r\n    margin: auto;\r\n}\r\n\r\n.main-signup .detail {\r\n        text-align: left;\r\n    }\r\n\r\n#carbonSide, #gde, #highlights .inner, .author-bio, .native-cta, .slack-bar {\r\n    text-align: center;\r\n}\r\n\r\n.videoWrapper {\r\n    position: relative;\r\n    padding-bottom: 56.25%;\r\n    padding-top: 25px;\r\n    height: 0;\r\n}\r\n\r\n.videoWrapper iframe {\r\n        position: absolute;\r\n        top: 0;\r\n        left: 0;\r\n        width: 100%;\r\n        height: 100%;\r\n    }\r\n\r\n.pro-basic, .pro-only, .pro-only2, .pro-video {\r\n    display: none;\r\n}\r\n\r\n.locked-snippet {\r\n    display: flex;\r\n    min-height: 300px;\r\n    background: #f8f8f8;\r\n    align-items: center;\r\n    justify-content: center;\r\n    flex-direction: column;\r\n    padding: 1em 3em;\r\n    position: relative;\r\n    top: -70px;\r\n}\r\n\r\n.pro-button {\r\n    margin: 15px 0;\r\n    background: #42b983;\r\n    border-radius: 0;\r\n    padding: .75em 2em;\r\n}\r\n\r\n.icon-blue, .icon-green, .icon-orange, .icon-pink, .icon-purple, .icon-red, .icon-yellow {\r\n    font-size: 1.4em;\r\n    margin-left: 5px;\r\n}\r\n\r\n.ep-label, .pro-label {\r\n    color: #fff;\r\n    border-radius: 5px;\r\n    padding: 2px 5px;\r\n    margin-top: 5px;\r\n    display: inline-block;\r\n}\r\n\r\n.pro-button:hover {\r\n    background: #3ba776 !important;\r\n    transition: background .25s ease;\r\n}\r\n\r\n.pro-label {\r\n    background: #42b983;\r\n    font-weight: 700;\r\n}\r\n\r\n.ep-label {\r\n    background: #b9c0c0;\r\n    font-weight: light;\r\n}\r\n\r\n#gde, #highlights {\r\n    background-color: #fff;\r\n}\r\n\r\n.color-orange {\r\n    color: #f16624 !important;\r\n}\r\n\r\n.color-blue {\r\n    color: #1c90f3 !important;\r\n}\r\n\r\n.color-green {\r\n    color: #42b983 !important;\r\n}\r\n\r\n.color-red {\r\n    color: #f66 !important;\r\n}\r\n\r\n.color-purple {\r\n    color: #764abc !important;\r\n}\r\n\r\n.color-yellow {\r\n    color: #ffcc2d !important;\r\n}\r\n\r\n.color-pink {\r\n    color: #d81b60 !important;\r\n}\r\n\r\n.icon-orange {\r\n    color: #f16624 !important;\r\n}\r\n\r\n.icon-green {\r\n    color: #42b983 !important;\r\n}\r\n\r\n.icon-blue {\r\n    color: #1c90f3 !important;\r\n}\r\n\r\n.icon-purple {\r\n    color: #764abc !important;\r\n}\r\n\r\n.icon-red {\r\n    color: #f66 !important;\r\n}\r\n\r\n.icon-pink {\r\n    color: #d81b60 !important;\r\n}\r\n\r\n.icon-yellow {\r\n    color: #ffcc2d !important;\r\n}\r\n\r\n.tweetbox {\r\n    display: inline-block;\r\n    font-family: sofia-pro,sans-serif !important;\r\n    min-width: 400px;\r\n    margin: 10px 5px;\r\n}\r\n\r\n@media(max-width:991px) {\r\n    .mobile-only {\r\n        display: block !important;\r\n    }\r\n\r\n    .desktop-only {\r\n        display: none !important;\r\n    }\r\n}\r\n\r\n#gde img, #highlights .point, .dot {\r\n    display: inline-block;\r\n}\r\n\r\n#highlights {\r\n    padding-bottom: 10px;\r\n}\r\n\r\n#highlights .inner {\r\n        /* max-width: $width;\r\n        margin: 0 auto; */\r\n    }\r\n\r\n#highlights .point {\r\n        width: 33%;\r\n        vertical-align: top;\r\n        box-sizing: border-box;\r\n        padding: 0 2em;\r\n    }\r\n\r\n#highlights .point h2 {\r\n            color: #f16624;\r\n            font-size: 1.5em;\r\n            font-weight: 400;\r\n            margin: 0;\r\n            padding: .5em 0;\r\n        }\r\n\r\n#highlights .point p {\r\n            color: #7f8c8d;\r\n        }\r\n\r\n#gde {\r\n    padding: 5px 40px 45px;\r\n}\r\n\r\n#gde .inner {\r\n        max-width: 700px;\r\n        margin: 0 auto;\r\n    }\r\n\r\n#gde img {\r\n        width: 100%;\r\n        height: auto;\r\n        max-width: 420px;\r\n        vertical-align: middle;\r\n    }\r\n\r\n.dot {\r\n    height: 8px;\r\n    width: 8px;\r\n    background-color: #42b983;\r\n    border-radius: 50%;\r\n    position: relative;\r\n    bottom: 5px;\r\n    right: 2px;\r\n}\r\n\r\n.slack-bar {\r\n    padding: 30px 20px;\r\n    font-size: 1.5em;\r\n}\r\n\r\n.tooltip, [data-tooltip] {\r\n    position: relative;\r\n    cursor: help;\r\n}\r\n\r\n.tooltip:after, .tooltip:before, [data-tooltip]:after, [data-tooltip]:before {\r\n        position: absolute;\r\n        visibility: hidden;\r\n        text-align: center;\r\n        font-family: sofia-pro,sans-serif !important;\r\n        font-size: 12px !important;\r\n        text-transform: uppercase;\r\n        font-weight: 400 !important;\r\n        cursor: help;\r\n        opacity: 0;\r\n        transition: opacity .15s ease-in-out,visibility .15s ease-in-out,-webkit-transform .15s cubic-bezier(.71,1.7,.77,1.24);\r\n        transition: opacity .15s ease-in-out,visibility .15s ease-in-out,transform .15s cubic-bezier(.71,1.7,.77,1.24);\r\n        transition: opacity .15s ease-in-out,visibility .15s ease-in-out,transform .15s cubic-bezier(.71,1.7,.77,1.24),-webkit-transform .15s cubic-bezier(.71,1.7,.77,1.24);\r\n        -webkit-transform: translate3d(0,0,0);\r\n        transform: translate3d(0,0,0);\r\n        pointer-events: none;\r\n    }\r\n\r\n.tooltip:focus:after, .tooltip:focus:before, .tooltip:hover:after, .tooltip:hover:before, [data-tooltip]:focus:after, [data-tooltip]:focus:before, [data-tooltip]:hover:after, [data-tooltip]:hover:before {\r\n        visibility: visible;\r\n        opacity: 1;\r\n    }\r\n\r\n.tooltip:before, [data-tooltip]:before {\r\n        z-index: 1001;\r\n        border: 6px solid transparent;\r\n        background: 0 0;\r\n        content: \"\";\r\n    }\r\n\r\n.tooltip:after, [data-tooltip]:after {\r\n        z-index: 1000;\r\n        padding: 8px;\r\n        width: 160px;\r\n        background-color: #000;\r\n        background-color: rgba(51,51,51,.9);\r\n        color: #fff;\r\n        content: attr(data-tooltip);\r\n        font-size: 14px;\r\n        line-height: 1.2;\r\n    }\r\n\r\n.native-cta, .native-sponsor {\r\n    width: 100%;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.tooltip-top:after, .tooltip-top:before, .tooltip:after, .tooltip:before, [data-tooltip]:after, [data-tooltip]:before {\r\n    bottom: 100%;\r\n    left: 50%;\r\n}\r\n\r\n.tooltip-top:before, .tooltip:before, [data-tooltip]:before {\r\n    margin-left: -6px;\r\n    margin-bottom: -12px;\r\n    border-top-color: #000;\r\n    border-top-color: rgba(51,51,51,.9);\r\n}\r\n\r\n.tooltip-bottom:before, .tooltip-left:before, .tooltip-right:before {\r\n    margin-bottom: 0;\r\n    border-top-color: transparent;\r\n}\r\n\r\n.tooltip-top:after, .tooltip:after, [data-tooltip]:after {\r\n    margin-left: -80px;\r\n}\r\n\r\n.tooltip-top:focus:after, .tooltip-top:focus:before, .tooltip-top:hover:after, .tooltip-top:hover:before, .tooltip:focus:after, .tooltip:focus:before, .tooltip:hover:after, .tooltip:hover:before, [data-tooltip]:focus:after, [data-tooltip]:focus:before, [data-tooltip]:hover:after, [data-tooltip]:hover:before {\r\n    -webkit-transform: translateY(-12px);\r\n    transform: translateY(-12px);\r\n}\r\n\r\n.tooltip-left:after, .tooltip-left:before {\r\n    right: 100%;\r\n    bottom: 50%;\r\n    left: auto;\r\n}\r\n\r\n.tooltip-left:before {\r\n    margin-left: 0;\r\n    margin-right: -12px;\r\n    border-left-color: #000;\r\n    border-left-color: rgba(51,51,51,.9);\r\n}\r\n\r\n.tooltip-left:focus:after, .tooltip-left:focus:before, .tooltip-left:hover:after, .tooltip-left:hover:before {\r\n    -webkit-transform: translateX(-12px);\r\n    transform: translateX(-12px);\r\n}\r\n\r\n.tooltip-bottom:after, .tooltip-bottom:before {\r\n    top: 100%;\r\n    bottom: auto;\r\n    left: 50%;\r\n}\r\n\r\n.tooltip-bottom:before {\r\n    margin-top: -12px;\r\n    border-bottom-color: #000;\r\n    border-bottom-color: rgba(51,51,51,.9);\r\n}\r\n\r\n.tooltip-bottom:focus:after, .tooltip-bottom:focus:before, .tooltip-bottom:hover:after, .tooltip-bottom:hover:before {\r\n    -webkit-transform: translateY(12px);\r\n    transform: translateY(12px);\r\n}\r\n\r\n.tooltip-right:after, .tooltip-right:before {\r\n    bottom: 50%;\r\n    left: 100%;\r\n}\r\n\r\n.tooltip-right:before {\r\n    margin-left: -12px;\r\n    border-right-color: #000;\r\n    border-right-color: rgba(51,51,51,.9);\r\n}\r\n\r\n.tooltip-right:focus:after, .tooltip-right:focus:before, .tooltip-right:hover:after, .tooltip-right:hover:before {\r\n    -webkit-transform: translateX(12px);\r\n    transform: translateX(12px);\r\n}\r\n\r\n.tooltip-left:before, .tooltip-right:before {\r\n    top: 3px;\r\n}\r\n\r\n.native-show {\r\n    display: block;\r\n}\r\n\r\n.native-ad {\r\n    z-index: 99;\r\n    position: fixed;\r\n    visibility: hidden;\r\n    right: 20px;\r\n    bottom: 20px;\r\n    overflow: hidden;\r\n    max-width: 180px;\r\n    border: 1px solid #e6e6e6;\r\n    background-color: #fff;\r\n    box-shadow: 1px 1px 15px 0 rgba(0,0,0,.15);\r\n    font-size: 13px;\r\n    line-height: 1.5;\r\n    -webkit-animation: fadein 1.2s;\r\n            animation: fadein 1.2s;\r\n    display: flex;\r\n    aligin-items: column;\r\n    flex-direction: column;\r\n}\r\n\r\n.ad-close {\r\n    z-index: 99999;\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    padding: 3px 5px;\r\n    background-color: #ddd;\r\n    color: #000;\r\n    font-size: 9px;\r\n    line-height: 1;\r\n    cursor: pointer;\r\n}\r\n\r\n.main-grid {\r\n    display: -ms-grid;\r\n    display: grid;\r\n    grid-gap: 12px;\r\n    -ms-grid-columns: (245px)[3];\r\n        grid-template-columns: repeat(3,245px);\r\n}\r\n\r\n.native-ad a, .native-ad span {\r\n    display: block;\r\n}\r\n\r\n.native-show {\r\n    opacity: 1;\r\n    visibility: visible;\r\n}\r\n\r\n.native-ad a {\r\n    color: #111;\r\n}\r\n\r\n#carbonads a, #carbonads a:hover {\r\n    color: inherit;\r\n}\r\n\r\n.native-wrap {\r\n    padding: 5px;\r\n    position: relative;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.native-cta {\r\n    border-bottom: solid 1px #eee;\r\n    font-size: 10px;\r\n    line-height: 1;\r\n    padding: 6px 0;\r\n    letter-spacing: .5px;\r\n}\r\n\r\n.native-img {\r\n    max-width: 50%;\r\n}\r\n\r\n.native-desc {\r\n    font-size: 13px;\r\n    padding: 8px 10px;\r\n    margin-bottom: 30px;\r\n}\r\n\r\n.native-desc strong {\r\n        font-weight: 600;\r\n    }\r\n\r\n.native-sponsor {\r\n    font-size: 9px;\r\n    position: absolute;\r\n    bottom: 0;\r\n    background: repeating-linear-gradient(-45deg,transparent,transparent 5px,rgba(0,0,0,.025) 5px,rgba(0,0,0,.025) 10px) rgba(227,230,232,.3);\r\n    padding: 8px 10px;\r\n    letter-spacing: .2px;\r\n}\r\n\r\n#carbonSide, #header {\r\n    background-color: #fff;\r\n}\r\n\r\n#carbonSide {\r\n    display: block;\r\n    overflow: hidden;\r\n    margin-bottom: 8px;\r\n    padding: 15px;\r\n}\r\n\r\n#carbonads span {\r\n    display: block;\r\n    overflow: hidden;\r\n}\r\n\r\n.carbon-img {\r\n    display: block;\r\n    margin: 0 auto 8px;\r\n    line-height: 1;\r\n}\r\n\r\n.carbon-text {\r\n    display: block;\r\n    margin-bottom: 8px;\r\n    font-size: 12px;\r\n}\r\n\r\n.carbon-poweredby {\r\n    display: block;\r\n    text-transform: uppercase;\r\n    letter-spacing: 1px;\r\n    font-size: 8px;\r\n    line-height: 1;\r\n}\r\n\r\n#algolia-brand {\r\n    display: flex;\r\n    align-items: flex-end;\r\n    flex-direction: column;\r\n}\r\n\r\n#algolia-brand img {\r\n        width: auto;\r\n        max-width: 120px;\r\n    }\r\n\r\n.author-bio {\r\n    min-height: 50vh;\r\n    margin: auto;\r\n    padding: 0 10vw 30px;\r\n    font-weight: 300;\r\n}\r\n\r\n.new-label, .pro {\r\n    color: #fff;\r\n    font-weight: 700;\r\n}\r\n\r\n.author-bio p {\r\n    font-size: 1.5em;\r\n    text-align: justify;\r\n}\r\n\r\n.author-bio img {\r\n    border-radius: 50%;\r\n    max-width: 120px !important;\r\n    border: 5px solid #d9dddd;\r\n}\r\n\r\n.course-link {\r\n    margin: 20px 0 5px;\r\n    display: block;\r\n}\r\n\r\n#mobile-bar, #nav .break {\r\n    display: none;\r\n}\r\n\r\n#header {\r\n    height: 40px;\r\n    padding: 10px 60px;\r\n    position: relative;\r\n    z-index: 2;\r\n}\r\n\r\nbody.docs #header {\r\n    position: fixed;\r\n    width: 100%;\r\n    top: 0;\r\n}\r\n\r\nbody.docs #nav {\r\n    position: fixed;\r\n}\r\n\r\n#nav {\r\n    margin: 0;\r\n    padding: 0;\r\n    position: absolute;\r\n    right: 30px;\r\n    top: 10px;\r\n    height: 40px;\r\n    line-height: 40px;\r\n}\r\n\r\n#logo, #nav li {\r\n        display: inline-block;\r\n    }\r\n\r\n#nav li {\r\n        position: relative;\r\n        margin: 0 .6em;\r\n    }\r\n\r\n.nav-link {\r\n    padding-bottom: 3px;\r\n}\r\n\r\n.nav-link.current, .nav-link:hover {\r\n        border-bottom: 3px solid #f16624;\r\n    }\r\n\r\n.nav-link.shop {\r\n        margin-left: 8px;\r\n    }\r\n\r\n.pro {\r\n    background: #70cca2;\r\n    padding: 2px 5px;\r\n    border-radius: 5px;\r\n    transition: .5s background ease;\r\n    margin-left: 0;\r\n}\r\n\r\n.pro.current, .pro:hover {\r\n        border-bottom: 0;\r\n        background: #42b983;\r\n        transition: .5s background ease;\r\n    }\r\n\r\n.new-label {\r\n    position: absolute;\r\n    top: 3px;\r\n    left: 110%;\r\n    background-color: #f16624;\r\n    line-height: 16px;\r\n    height: 16px;\r\n    font-size: 9px;\r\n    font-family: droid-sans-mono,monospace;\r\n    padding: 1px 4px 0 6px;\r\n    border-radius: 4px;\r\n}\r\n\r\n#logo, .lesson-preview .preview-content a, .search-query {\r\n    color: #2c3e50;\r\n}\r\n\r\n.search-query {\r\n    height: 30px;\r\n    line-height: 30px;\r\n    box-sizing: border-box;\r\n    padding: 0 15px 0 30px;\r\n    border: 1px solid #e3e3e3;\r\n    outline: 0;\r\n    border-radius: 15px;\r\n    margin-right: 10px;\r\n    transition: border-color .2s ease;\r\n    /* background: url(../images/search.png) 8px 5px no-repeat #fff; */\r\n    background-size: 20px;\r\n    vertical-align: middle !important;\r\n}\r\n\r\n.search-query:focus {\r\n        border-color: #f16624;\r\n    }\r\n\r\n.search-query input {\r\n        font-family: sofia-pro,sans-serif;\r\n        font-size: .95em;\r\n        outline: 0;\r\n        border: 0;\r\n    }\r\n\r\n#logo {\r\n    font-size: 1.5em;\r\n    line-height: 40px;\r\n    font-weight: 800;\r\n    font-family: Palanquin,sans-serif;\r\n}\r\n\r\n#logo img {\r\n        vertical-align: middle;\r\n        margin-right: 6px;\r\n        width: 40px;\r\n        height: 40px;\r\n    }\r\n\r\n#mobile-bar {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 40px;\r\n    background-color: #fff;\r\n    z-index: 9;\r\n    box-shadow: 0 0 2px rgba(0,0,0,.25);\r\n}\r\n\r\n#mobile-bar .menu-button {\r\n        position: absolute;\r\n        width: 24px;\r\n        height: 24px;\r\n        top: 8px;\r\n        left: 12px;\r\n        /* background: url(../images/menu.png) center center no-repeat; */\r\n        background-size: 24px;\r\n    }\r\n\r\n#mobile-bar .logo {\r\n        position: absolute;\r\n        width: 30px;\r\n        height: 30px;\r\n        /* background: url(../images/logo.png) center center no-repeat; */\r\n        top: 5px;\r\n        left: 50%;\r\n        margin-left: -15px;\r\n        background-size: 30px;\r\n    }\r\n\r\n#search-button {\r\n    cursor: pointer;\r\n}\r\n\r\n#search-wrapper {\r\n    display: flex;\r\n    -webkit-transform: scale(0);\r\n            transform: scale(0);\r\n    visibility: hidden;\r\n    opacity: 0;\r\n    position: fixed;\r\n    height: 100%;\r\n    width: 100%;\r\n    color: #fff;\r\n    left: 0;\r\n    right: 0;\r\n    background: #000;\r\n    z-index: 99;\r\n    margin: auto;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    transition: -webkit-transform .2s ease;\r\n    transition: transform .2s ease;\r\n    transition: transform .2s ease, -webkit-transform .2s ease;\r\n}\r\n\r\n#search-wrapper em {\r\n        color: #1c90f3;\r\n        font-weight: 700;\r\n        font-style: normal;\r\n    }\r\n\r\n#search-wrapper.show-search {\r\n        -webkit-transform: scale(1);\r\n                transform: scale(1);\r\n        transition: -webkit-transform .2s ease;\r\n        transition: transform .2s ease;\r\n        transition: transform .2s ease, -webkit-transform .2s ease;\r\n        visibility: visible;\r\n        opacity: .9;\r\n    }\r\n\r\n#searchInner {\r\n    width: 75vw;\r\n    overflow: auto;\r\n}\r\n\r\n#hits {\r\n    overflow-y: scroll;\r\n}\r\n\r\n#search-input {\r\n    font-family: inherit;\r\n    font-size: 7vw;\r\n    line-height: 1;\r\n    display: block;\r\n    box-sizing: border-box;\r\n    padding: .05em 0;\r\n    color: #f7a37c;\r\n    border: 0;\r\n    outline: 0;\r\n    background: 0 0;\r\n    border-bottom: 5px solid;\r\n    margin-top: 3vh;\r\n}\r\n\r\n#search-close {\r\n    font-size: 2em;\r\n    color: #f7a37c;\r\n    cursor: pointer;\r\n    padding: 1em;\r\n    align-self: flex-end;\r\n}\r\n\r\n.hit-content {\r\n    padding: 5px;\r\n    word-wrap: break-word;\r\n}\r\n\r\n.hit-content a {\r\n        color: #fff;\r\n        font-family: droid-sans-mono,monospace;\r\n        transition: color .33s ease;\r\n    }\r\n\r\n.hit-content a:hover {\r\n            color: #1c90f3;\r\n            transition: color .33s ease;\r\n        }\r\n\r\n.hit-content .hit-icon {\r\n        display: none;\r\n    }\r\n\r\n.hit-content .fa-code.hit-icon.hit-post, .hit-content .fa-newspaper-o.hit-icon.hit-page {\r\n        display: inline;\r\n    }\r\n\r\n#search-info {\r\n    font-size: 90%;\r\n    font-weight: 700;\r\n    display: block;\r\n    margin: 0 auto;\r\n    padding: .85em 0;\r\n    text-align: right;\r\n    color: #f7a37c;\r\n}\r\n\r\n.label-new {\r\n    display: inline-block;\r\n    padding: .25em .4em;\r\n    font-size: 75%;\r\n    font-weight: 700;\r\n    line-height: 1;\r\n    text-align: center;\r\n    vertical-align: baseline;\r\n    border-radius: .25rem;\r\n    background: #ff8585;\r\n    color: #fff;\r\n    position: relative;\r\n    top: -5px;\r\n    left: 4px;\r\n}\r\n\r\n#demo, .content .demo, .demo {\r\n    border: 1px solid #eee;\r\n    border-radius: 2px;\r\n    padding: 25px 35px;\r\n    margin-top: 1em;\r\n    margin-bottom: 40px;\r\n    font-size: 1.2em;\r\n    line-height: 1.5em;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    user-select: none;\r\n    overflow-x: auto;\r\n}\r\n\r\n.toc .big:active, .toc .big:focus, .toc .big:hover, .toc .sub:active, .toc .sub:focus, .toc .sub:hover, .toc .toc-item a:active, .toc .toc-item a:focus, .toc .toc-item a:hover {\r\n    border-bottom: 1px #f16624 solid;\r\n}\r\n\r\n#demo h1, .content .demo h1, .demo h1 {\r\n    margin: 0 0 .5em;\r\n    font-size: 1.8em;\r\n}\r\n\r\n#demo ol, #demo ul, .content .demo ol, .content .demo ul, .demo ol, .demo ul {\r\n    padding-left: 1.5em;\r\n    padding-bottom: .2em !important;\r\n}\r\n\r\n#demo ol:first-child, #demo ul:first-child, .content .demo ol:first-child, .content .demo ul:first-child, .demo ol:first-child, .demo ul:first-child {\r\n        margin-top: 0;\r\n    }\r\n\r\n#demo ol:last-child, #demo ul:last-child, .content .demo ol:last-child, .content .demo ul:last-child, .demo ol:last-child, .demo ul:last-child {\r\n        margin-bottom: 0;\r\n    }\r\n\r\n#demo li, .content .demo li, .demo li {\r\n    color: #34495e;\r\n}\r\n\r\n#demo li.done, .content .demo li.done, .demo li.done {\r\n        color: #7f8c8d;\r\n        text-decoration: line-through;\r\n    }\r\n\r\n#demo p, .content .demo p, .demo p {\r\n    margin: 0 !important;\r\n    padding: 0 !important;\r\n}\r\n\r\n#demo p:first-child, .content .demo p:first-child, .demo p:first-child {\r\n        margin-top: 0;\r\n    }\r\n\r\n#demo p:last-child, .content .demo p:last-child, .demo p:last-child {\r\n        margin-bottom: 0;\r\n    }\r\n\r\n#demo textarea, .content .demo textarea, .demo textarea {\r\n    width: 100%;\r\n    resize: vertical;\r\n}\r\n\r\nul#demo li, ul.demo li {\r\n    margin-left: 1.5em;\r\n}\r\n\r\n@media screen and (max-width:900px) {\r\n    #demo, .demo {\r\n        margin-left: 0;\r\n    }\r\n}\r\n\r\n.benchmark-table {\r\n    margin: 0 auto;\r\n    text-align: center;\r\n}\r\n\r\n.benchmark-table tbody > tr > th {\r\n        text-align: right;\r\n    }\r\n\r\n.benchmark-table td, .benchmark-table th {\r\n        padding: 3px 7px;\r\n    }\r\n\r\n.sponsors-page a, .sponsors-page img {\r\n    width: 120px;\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n}\r\n\r\n.sponsors-page a {\r\n    margin: 10px 20px;\r\n}\r\n\r\n.content.guide[class*=migration] h2 > sup, .content.guide[class*=migration] h3 > sup {\r\n    margin-left: .3em;\r\n    color: #b9465c;\r\n}\r\n\r\n.content.guide[class*=migration] .upgrade-path {\r\n    margin-top: 2em;\r\n    padding: 2em;\r\n    background: rgba(73,195,140,.1);\r\n    border-radius: 2px;\r\n}\r\n\r\n.content.guide[class*=migration] .upgrade-path > h4 {\r\n        margin-top: 0;\r\n    }\r\n\r\n.content.guide[class*=migration] .upgrade-path > p:last-child {\r\n        margin-bottom: 0;\r\n        padding-bottom: 0;\r\n    }\r\n\r\n.toc {\r\n    list-style: none;\r\n    padding-left: 0;\r\n}\r\n\r\n.toc .toc-child {\r\n        list-style: none;\r\n        padding-left: 10px;\r\n    }\r\n\r\n.toc .toc-item.toc-level-2 a {\r\n        font-weight: 700;\r\n        font-size: 1em;\r\n    }\r\n\r\n.toc .toc-item.toc-level-3 a {\r\n        font-weight: 400;\r\n        font-size: .9em;\r\n    }\r\n\r\n.toc .big {\r\n        font-weight: 700;\r\n        font-size: 1.1em;\r\n    }\r\n\r\n.toc .sub {\r\n        margin-left: 7px;\r\n    }\r\n\r\n.sidebar {\r\n    background: #fff;\r\n    position: absolute;\r\n    z-index: 10;\r\n    top: 61px;\r\n    padding-top: 50px;\r\n    left: 0;\r\n    bottom: 0;\r\n    overflow-x: hidden;\r\n    overflow-y: auto;\r\n    -webkit-overflow-scrolling: touch;\r\n    -ms-overflow-style: none;\r\n}\r\n\r\n.sidebar::-webkit-scrollbar-thumb {\r\n        background-color: #7f8c8d;\r\n    }\r\n\r\n.sidebar::-webkit-scrollbar {\r\n        width: 5px;\r\n        background-color: #f5f5f5;\r\n    }\r\n\r\n.sidebar::-webkit-scrollbar-track {\r\n        -webkit-box-shadow: inset 0 0 2px rgba(0,0,0,.2);\r\n        /* background-color: #f8f8f8; */\r\n    }\r\n\r\n.sidebar h2 {\r\n        margin-top: .2em;\r\n    }\r\n\r\n.sidebar ul {\r\n        margin: 0;\r\n        line-height: 1.5em;\r\n        padding-left: 1em;\r\n    }\r\n\r\n.sidebar .sidebar-link.new:after, .sidebar .version-select {\r\n        margin-left: 5px;\r\n        vertical-align: middle;\r\n    }\r\n\r\n.sidebar li {\r\n        margin-top: .5em;\r\n    }\r\n\r\n.sidebar .sidebar-inner {\r\n        width: 260px;\r\n        padding: 40px 20px 60px 60px;\r\n    }\r\n\r\n.sidebar .menu-root {\r\n        padding-left: 0;\r\n    }\r\n\r\n.sidebar .menu-sub {\r\n        font-size: .85em;\r\n    }\r\n\r\n.sidebar .sidebar-link {\r\n        color: #7f8c8d;\r\n    }\r\n\r\n.sidebar .sidebar-link.current {\r\n            font-weight: 600;\r\n            color: #f16624;\r\n        }\r\n\r\n.sidebar .sidebar-link.new:after {\r\n            content: \"NEW\";\r\n            display: inline-block;\r\n            font-size: 10px;\r\n            font-weight: 600;\r\n            color: #fff;\r\n            background-color: #f16624;\r\n            line-height: 14px;\r\n            padding: 0 4px;\r\n            border-radius: 3px;\r\n            position: relative;\r\n            top: -1px;\r\n        }\r\n\r\n.sidebar .sidebar-link:hover {\r\n            border-bottom: 1px solid #f16624;\r\n        }\r\n\r\n.sidebar .section-link.active {\r\n        font-weight: 700;\r\n        color: #f16624;\r\n    }\r\n\r\n.sidebar .main-menu {\r\n        margin-bottom: 20px;\r\n        display: none;\r\n    }\r\n\r\n.sidebar .become-backer, .sidebar .main-sponsor a, .sidebar .main-sponsor img {\r\n        display: inline-block;\r\n        width: 125px;\r\n    }\r\n\r\n.sidebar .main-sponsor {\r\n        color: #7f8c8d;\r\n        font-size: .85em;\r\n    }\r\n\r\n.sidebar .main-sponsor .logo {\r\n            color: #7f8c8d;\r\n            margin: 10px 0;\r\n            padding: 10px 0;\r\n            text-align: center;\r\n            font-weight: 700;\r\n        }\r\n\r\n.sidebar .become-backer {\r\n        border: 1px solid #f16624;\r\n        border-radius: 2em;\r\n        color: #f16624;\r\n        font-size: .8em;\r\n        padding: 4px 0;\r\n        text-align: center;\r\n        margin-bottom: 20px;\r\n    }\r\n\r\n.sidebar .nav-dropdown h4 {\r\n        font-weight: 400;\r\n        margin: 0;\r\n    }\r\n\r\n@media screen and (max-width:900px) {\r\n    .sidebar {\r\n        position: fixed;\r\n        z-index: 10;\r\n        background-color: #f9f9f9;\r\n        height: 100%;\r\n        top: 0;\r\n        left: 0;\r\n        box-shadow: 0 0 10px rgba(0,0,0,.2);\r\n        transition: all .4s cubic-bezier(.4,0,0,1);\r\n        -webkit-transform: translate(-280px,0);\r\n        transform: translate(-280px,0);\r\n    }\r\n\r\n        .sidebar .sidebar-inner {\r\n            padding: 50px 10px 10px 20px;\r\n            box-sizing: border-box;\r\n        }\r\n\r\n        .sidebar .sidebar-inner-index {\r\n            padding: 10px 10px 10px 20px;\r\n        }\r\n\r\n        .sidebar .search-query {\r\n            width: 200px;\r\n            margin-bottom: 10px;\r\n        }\r\n\r\n        .sidebar .main-menu {\r\n            display: block;\r\n        }\r\n\r\n        .sidebar.open {\r\n            -webkit-transform: translate(0,0);\r\n            transform: translate(0,0);\r\n        }\r\n}\r\n\r\n.content.menu {\r\n    font-size: 1.2em;\r\n}\r\n\r\n.content.menu .menu-root {\r\n        padding-left: 0;\r\n    }\r\n\r\n.content.menu #search-form, .content.menu .algolia-autocomplete, .content.menu input {\r\n        width: 100%;\r\n    }\r\n\r\n.content.menu .aa-dropdown-menu {\r\n        box-sizing: border-box;\r\n    }\r\n\r\n.content.menu h3 {\r\n        margin: 1.5em 0 .75em;\r\n    }\r\n\r\n.content.menu h3:after, .content.menu h3:before {\r\n            display: none;\r\n        }\r\n\r\n.content.menu li {\r\n        margin-top: .1em;\r\n    }\r\n\r\n#header {\r\n    box-shadow: 0 0 1px rgba(0,0,0,.25);\r\n    transition: background-color .3s ease-in-out;\r\n}\r\n\r\n.list-description {\r\n    margin-bottom: 50px;\r\n}\r\n\r\n.lesson-preview {\r\n    width: 100%;\r\n    padding: 10px 0;\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n    border-bottom: 1px solid #ddd;\r\n    display: flex;\r\n    flex-direction: row;\r\n}\r\n\r\n.lesson-preview .featured-image {\r\n        display: inline-block;\r\n        width: 25%;\r\n    }\r\n\r\n.lesson-preview .featured-image img {\r\n            width: 100%;\r\n            max-width: 200px;\r\n            height: auto;\r\n        }\r\n\r\n.lesson-preview .preview-content {\r\n        display: inline-block;\r\n        width: 75%;\r\n        padding-left: 25px;\r\n    }\r\n\r\n.lesson-preview .preview-content h2 {\r\n            padding: 0;\r\n            margin: 0;\r\n            border: 0;\r\n        }\r\n\r\n.lesson-preview .preview-content.lite {\r\n            width: 100%;\r\n            padding-left: 0;\r\n        }\r\n\r\n.content {\r\n    position: relative;\r\n    padding: 2.2em 0 2.2em 30px;\r\n    margin: 0 auto;\r\n}\r\n\r\n.content.api > a:first-of-type > h2 {\r\n        margin-top: 0;\r\n        padding-top: 0;\r\n    }\r\n\r\n.content.api ul {\r\n        padding-left: 1.25em;\r\n        line-height: 1.4em;\r\n    }\r\n\r\n.content.api ul p:not(.tip), .content.api ul ul {\r\n            padding-bottom: 0;\r\n            margin: 1.2em 0;\r\n        }\r\n\r\n.content a.button {\r\n        font-size: .9em;\r\n        color: #fff;\r\n        margin: .2em 0;\r\n        width: 180px;\r\n        text-align: center;\r\n        padding: 12px 24px;\r\n        display: inline-block;\r\n        vertical-align: middle;\r\n    }\r\n\r\n.content img {\r\n        max-width: 100%;\r\n    }\r\n\r\n.content span.light {\r\n        color: #7f8c8d;\r\n    }\r\n\r\n.content span.info {\r\n        font-size: .85em;\r\n        display: inline-block;\r\n        vertical-align: middle;\r\n        width: 280px;\r\n        margin-left: 20px;\r\n    }\r\n\r\n.content h1 {\r\n        margin: 0 0 1em;\r\n    }\r\n\r\n.content h2:before, .content h3:before {\r\n        content: '';\r\n        display: block;\r\n        margin-top: -91px;\r\n        height: 91px;\r\n        visibility: hidden;\r\n    }\r\n\r\n.content h2 {\r\n        margin: 45px 0 .8em;\r\n        padding-bottom: .7em;\r\n        border-bottom: 1px solid #ddd;\r\n        z-index: -1;\r\n    }\r\n\r\n.content h3 {\r\n        margin: 52px 0 1.2em;\r\n        position: relative;\r\n        z-index: -1;\r\n    }\r\n\r\n.content h3:after {\r\n            content: \"#\";\r\n            color: #f16624;\r\n            position: absolute;\r\n            left: -.7em;\r\n            bottom: -2px;\r\n            font-size: 1.2em;\r\n            font-weight: 700;\r\n        }\r\n\r\n.content figure {\r\n        margin: 1.2em 0;\r\n    }\r\n\r\n.content ol, .content p, .content ul {\r\n        line-height: 1.6em;\r\n        margin: 1.2em 0 -1.2em;\r\n        padding-bottom: 1.2em;\r\n        position: relative;\r\n        z-index: 1;\r\n    }\r\n\r\n.content ol, .content ul {\r\n        padding-left: 1.5em;\r\n        position: inherit;\r\n    }\r\n\r\n.content a {\r\n        color: #1c90f3;\r\n        font-weight: 600;\r\n    }\r\n\r\n.content blockquote {\r\n        margin: 2em 0;\r\n        padding-left: 20px;\r\n        border-left: 4px solid #f16624;\r\n    }\r\n\r\n.content blockquote p {\r\n            font-weight: 600;\r\n            margin-left: 0;\r\n            margin-bottom: 0;\r\n            padding-bottom: 0;\r\n        }\r\n\r\n.content iframe {\r\n        margin: 1em 0;\r\n    }\r\n\r\n.content > table {\r\n        border-spacing: 0;\r\n        border-collapse: collapse;\r\n        margin: 1.2em auto;\r\n        padding: 0;\r\n        display: block;\r\n        overflow-x: auto;\r\n    }\r\n\r\n.content > table td, .content > table th {\r\n            line-height: 1.5em;\r\n            padding: .4em .8em;\r\n            border: 0;\r\n            border: 1px solid #ddd;\r\n        }\r\n\r\n.content > table th {\r\n            font-weight: 700;\r\n            text-align: left;\r\n        }\r\n\r\n.content > table th, .content > table tr:nth-child(2n) {\r\n            background-color: #f8f8f8;\r\n        }\r\n\r\n.content div.success code, .content div.tip code, .content div.warn code, .content p.success code, .content p.tip code, .content p.warn code, .content > table th code, .content > table tr:nth-child(2n) code {\r\n                background-color: #efefef;\r\n            }\r\n\r\n.content div.success, .content div.tip, .content div.warn, .content p.success, .content p.tip, .content p.warn {\r\n        padding: 12px 24px 12px 30px;\r\n        margin: 2em 0;\r\n        border-left-width: 4px;\r\n        border-left-style: solid;\r\n        position: relative;\r\n        border-radius: 2px;\r\n    }\r\n\r\n.content div.success:before, .content div.tip:before, .content div.warn:before, .content p.success:before, .content p.tip:before, .content p.warn:before {\r\n            position: absolute;\r\n            top: 14px;\r\n            left: -12px;\r\n            color: #fff;\r\n            width: 20px;\r\n            height: 20px;\r\n            border-radius: 100%;\r\n            text-align: center;\r\n            line-height: 20px;\r\n            font-weight: 700;\r\n            font-family: Palanquin,sans-serif;\r\n            font-size: 14px;\r\n        }\r\n\r\ndiv.tip.health .sm, div.tip.health ul {\r\n    font-size: .85em;\r\n    color: #7f8c8d;\r\n}\r\n\r\n.content div.success em, .content div.tip em, .content div.warn em, .content p.success em, .content p.tip em, .content p.warn em {\r\n    color: #34495e;\r\n}\r\n\r\n.content div.tip, .content p.tip {\r\n    border-left-color: #1c90f3;\r\n    background-color: #c6e3fc;\r\n    color: #074981;\r\n}\r\n\r\n.content div.tip a, .content p.tip a {\r\n        color: #074981;\r\n    }\r\n\r\n.content div.tip:before, .content p.tip:before {\r\n        content: '?';\r\n        background-color: #1c90f3;\r\n    }\r\n\r\n.content div.success, .content p.success {\r\n    border-left-color: #42b983;\r\n    background-color: #cfeee0;\r\n    color: #215d42;\r\n}\r\n\r\n.content div.success a, .content p.success a {\r\n        color: #215d42;\r\n    }\r\n\r\n.content div.success:before, .content p.success:before {\r\n        content: 'âœ”';\r\n        background-color: #42b983;\r\n    }\r\n\r\n.content div.warn, .content p.warn {\r\n    border-left-color: #f66;\r\n    background-color: #ffd9d9;\r\n    color: #b20000;\r\n}\r\n\r\n.content div.warn a, .content p.warn a {\r\n        color: #b20000;\r\n    }\r\n\r\n.content div.warn:before, .content p.warn:before {\r\n        content: '!';\r\n        background-color: #f66;\r\n    }\r\n\r\ndiv.tip.health {\r\n    border-left-color: #d81b60;\r\n    background-color: #f8f8f8;\r\n    color: #2c3e50;\r\n}\r\n\r\ndiv.tip.health:before {\r\n        content: 'â™¥';\r\n        background-color: #ec6596;\r\n    }\r\n\r\ndiv.tip.health ul {\r\n        list-style: none;\r\n        padding-left: 0;\r\n        font-family: droid-sans-mono,monospace;\r\n        font-weight: 700;\r\n    }\r\n\r\n.guide-links {\r\n    margin-top: 2em;\r\n    height: 1em;\r\n}\r\n\r\n.footer {\r\n    color: #7f8c8d;\r\n    margin-top: 2em;\r\n    padding-top: 2em;\r\n    border-top: 1px solid #e5e5e5;\r\n    font-size: .9em;\r\n    border-bottom: 1px solid #e5e5e5;\r\n    margin-bottom: 2em;\r\n    padding-bottom: 2em;\r\n}\r\n\r\n#main.fix-sidebar .sidebar {\r\n    position: fixed;\r\n}\r\n\r\n@media screen and (min-width:1590px) {\r\n    #header {\r\n        background-color: rgba(255,255,255,.4);\r\n    }\r\n}\r\n\r\n@media screen and (max-width:5000px) {\r\n    .content.with-sidebar {\r\n        margin-left: 290px;\r\n    }\r\n\r\n    #ad {\r\n        z-index: 7;\r\n        position: relative;\r\n        bottom: 0;\r\n        right: 0;\r\n        float: right;\r\n        padding: 0 0 20px 30px;\r\n    }\r\n}\r\n\r\n@media screen and (max-width:900px) {\r\n    body {\r\n        -webkit-text-size-adjust: none;\r\n        font-size: 14px;\r\n    }\r\n\r\n    #header, #logo {\r\n        display: none;\r\n    }\r\n\r\n    .nav-link {\r\n        padding-bottom: 1px;\r\n    }\r\n\r\n        .nav-link.current, .nav-link:hover {\r\n            border-bottom: 2px solid #f16624;\r\n        }\r\n\r\n    #mobile-bar {\r\n        display: block;\r\n    }\r\n\r\n    #main {\r\n        padding: 2em 1.4em 0;\r\n    }\r\n\r\n    .highlight pre {\r\n        padding: 1.2em 1em;\r\n    }\r\n\r\n    .content {\r\n        padding-left: 0;\r\n    }\r\n\r\n        .content.with-sidebar {\r\n            margin: auto;\r\n        }\r\n\r\n        .content h2:before, .content h3:before {\r\n            content: '';\r\n            display: block;\r\n            margin-top: -70px;\r\n            height: 70px;\r\n            visibility: hidden;\r\n        }\r\n\r\n    .footer {\r\n        margin-left: 0;\r\n        text-align: center;\r\n    }\r\n}\r\n\r\n@media screen and (max-width:560px) {\r\n    #downloads {\r\n        text-align: center;\r\n        margin-bottom: 25px;\r\n    }\r\n\r\n        #downloads .info {\r\n            margin-top: 5px;\r\n            margin-left: 0;\r\n        }\r\n\r\n    iframe {\r\n        margin: 0 !important;\r\n    }\r\n}\r\n\r\n.featured-image a img {\r\n    box-shadow: 3px 3px 3px 0 #c6c6c6;\r\n    transition: box-shadow .2s ease;\r\n}\r\n\r\n.featured-image a img:hover {\r\n        box-shadow: 4px 4px 4px 1px #a0a0a0;\r\n        transition: box-shadow .2s ease;\r\n    }\r\n\r\n.pricing {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n    width: 100%;\r\n    margin: 0 auto 1.5em;\r\n}\r\n\r\n.pricing__item {\r\n    position: relative;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: stretch;\r\n    text-align: center;\r\n    flex: 0 1 220px;\r\n    cursor: pointer;\r\n}\r\n\r\n.pricing__feature-list {\r\n    text-align: left;\r\n    color: #444;\r\n}\r\n\r\n.pricing__action {\r\n    color: inherit;\r\n    border: 0;\r\n    background: 0 0;\r\n}\r\n\r\n.pricing__action:focus {\r\n        outline: 0;\r\n    }\r\n\r\n.pricing--jinpa .pricing__item {\r\n    font-family: Palanquin,sans-serif;\r\n    margin: 1.5em 0;\r\n    padding: 2em;\r\n    cursor: pointer;\r\n    color: #fff;\r\n    border: 1px solid #cbffc8;\r\n    transition: background-color .6s,color .3s;\r\n}\r\n\r\n.pricing--jinpa .pricing__item:nth-child(2) {\r\n        border-right: 0;\r\n        border-left: 0;\r\n    }\r\n\r\n.pricing--jinpa .pricing__item:hover {\r\n        color: #444;\r\n        background: #cbffc8;\r\n    }\r\n\r\n.pricing--jinpa .pricing__title {\r\n    font-size: 2em;\r\n    width: 100%;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n.pricing--jinpa .pricing__price {\r\n    font-size: 1.45em;\r\n    font-weight: 700;\r\n    line-height: 95px;\r\n    width: 100px;\r\n    height: 100px;\r\n    margin: 1.15em auto 1em;\r\n    border-radius: 50%;\r\n    background: #ea716e;\r\n    transition: color .3s,background .3s;\r\n}\r\n\r\n.pricing--jinpa .pricing__item:first-child .pricing__price {\r\n    background: #eac36e;\r\n}\r\n\r\n.pricing--jinpa .pricing__item:nth-child(2) .pricing__price {\r\n    background: #eaa36e;\r\n}\r\n\r\n.pricing--jinpa .pricing__item:hover .pricing__price {\r\n    color: #fff;\r\n    background: #82c57e;\r\n}\r\n\r\n.pricing--jinpa .pricing__sentence {\r\n    font-weight: 700;\r\n    color: #444;\r\n}\r\n\r\n.pricing--jinpa .pricing__feature-list {\r\n    margin: 0;\r\n    padding: 1em .5em 1em 1em;\r\n    list-style: none;\r\n    text-align: center;\r\n}\r\n\r\n.pricing--jinpa .pricing__action {\r\n    font-weight: 700;\r\n    margin-top: auto;\r\n    padding: .75em 2em;\r\n    opacity: 0;\r\n    color: #fff;\r\n    background: #82c57e;\r\n    cursor: pointer;\r\n    transition: opacity .3s,-webkit-transform .3s;\r\n    transition: transform .3s,opacity .3s;\r\n    transition: transform .3s,opacity .3s,-webkit-transform .3s;\r\n    -webkit-transform: translate3d(0,-15px,0);\r\n    transform: translate3d(0,-15px,0);\r\n}\r\n\r\n.pricing--jinpa .pricing__item:hover .pricing__action {\r\n    opacity: 1;\r\n    -webkit-transform: translate3d(0,0,0);\r\n    transform: translate3d(0,0,0);\r\n}\r\n\r\n.pricing--jinpa .pricing__action:focus, .pricing--jinpa .pricing__action:hover {\r\n    background: #6ea76b;\r\n}\r\n\r\n@media screen and (max-width:60em) {\r\n    .pricing--jinpa .pricing__item {\r\n        max-width: none;\r\n        width: 90%;\r\n        flex: none;\r\n    }\r\n\r\n        .pricing--jinpa .pricing__item:nth-child(2) {\r\n            border: 1px solid #fff;\r\n        }\r\n}\r\n\r\n.tag-filters {\r\n    border-bottom: 1px solid #e0e0e0;\r\n    padding-bottom: 10px;\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n}\r\n\r\n.tag-item {\r\n    background: #1c90f3;\r\n    color: #fff;\r\n    margin: 5px 3px;\r\n    font-weight: 600 !important;\r\n    text-transform: uppercase;\r\n    letter-spacing: .1rem;\r\n    align-items: center;\r\n    border-radius: 2px;\r\n    display: inline-flex;\r\n    font-size: .75rem;\r\n    height: 2em;\r\n    justify-content: center;\r\n    line-height: 1.5;\r\n    padding-left: .75em;\r\n    padding-right: .75em;\r\n}\r\n\r\n.tag-blue svg, .tag-dark svg, .tag-green svg, .tag-orange svg, .tag-pink svg, .tag-purple svg, .tag-red svg, .tag-yellow svg {\r\n    padding-right: 5px;\r\n}\r\n\r\n.tag-item:first-child {\r\n    margin-left: 0;\r\n}\r\n\r\n.tag-green {\r\n    background: #8cd6b5;\r\n    border-left: solid 5px #359469;\r\n    color: #215d42 !important;\r\n}\r\n\r\n.tag-blue {\r\n    background: #77bcf8;\r\n    border-left: solid 5px #0b74ce;\r\n    color: #074981 !important;\r\n}\r\n\r\n.tag-purple {\r\n    background: #ad92d7;\r\n    border-left: solid 5px #5e3999;\r\n    color: #3b2360 !important;\r\n}\r\n\r\n.tag-yellow {\r\n    background: #ffdc6f;\r\n    border-left: solid 5px #d8a400;\r\n    color: #876600 !important;\r\n}\r\n\r\n.tag-orange {\r\n    background: #f7a37c;\r\n    border-left: solid 5px #d04c0d;\r\n    color: #823008 !important;\r\n}\r\n\r\n.tag-red {\r\n    background: #ffa3a3;\r\n    border-left: solid 5px #ff1f1f;\r\n    color: #b20000 !important;\r\n}\r\n\r\n.tag-pink {\r\n    background: #ff5cbf;\r\n    border-left: solid 5px #be0073;\r\n    color: #770048 !important;\r\n}\r\n\r\n.tag-dark {\r\n    background: #6a8bad;\r\n    border-left: solid 5px #233240;\r\n    color: #161f28 !important;\r\n}\r\n"

/***/ }),

/***/ "./src/app/knowledge-storage/passing-data/passing-data.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/knowledge-storage/passing-data/passing-data.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 id=\"Parent-to-Child-Sharing-Data-via-Input\">\r\n    <a href=\"#Parent-to-Child-Sharing-Data-via-Input\" class=\"headerlink\" title=\"Parent to Child: Sharing Data via Input\"></a>\r\n    Parent to Child: Sharing Data via Input\r\n</h2>\r\n<hr>\r\n<p>This is probably the most common and straightforward method of sharing data. It works by using the\r\n    <a href=\"https://angular.io/docs/ts/latest/api/core/index/Input-interface.html\" target=\"_blank\" rel=\"noopener\">\r\n        <code>@Input()</code> decorator</a> to allow data to be passed via the template.\r\n</p>\r\n<h3 id=\"parent-component-ts\">\r\n    <a href=\"#parent-component-ts\" class=\"headerlink\" title=\"parent.component.ts\"></a>parent.component.ts</h3>\r\n<figure class=\"highlight typescript\">\r\n    <table>\r\n        <tbody>\r\n            <tr>\r\n                <td class=\"code\">\r\n                    <pre><span class=\"line\"><span class=\"keyword\">import</span> {{'{'}} Component {{'}'}} <span class=\"keyword\">from</span> <span class=\"string\">'@angular/core'</span>;</span><br><span class=\"line\"></span><br><span class=\"line\"><span class=\"meta\">@Component</span>({{'{'}}</span><br><span class=\"line\">  selector: <span class=\"string\">'app-parent'</span>,</span><br><span class=\"line\">  template: <span class=\"string\">`</span></span><br><span class=\"line\"><span class=\"string\">    &lt;app-child [childMessage]=\"parentMessage\"&gt;&lt;/app-child&gt;</span></span><br><span class=\"line\"><span class=\"string\">  `</span>,</span><br><span class=\"line\">  styleUrls: [<span class=\"string\">'./parent.component.css'</span>]</span><br><span class=\"line\">{{'}'}})</span><br><span class=\"line\"><span class=\"keyword\">export</span> <span class=\"keyword\">class</span> ParentComponent{{'{'}}</span><br><span class=\"line\">  parentMessage = <span class=\"string\">\"message from parent\"</span></span><br><span class=\"line\">  <span class=\"keyword\">constructor</span>(<span class=\"params\"></span>) {{'{'}} {{'}'}}</span><br><span class=\"line\">{{'}'}}</span><br></pre>\r\n                </td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n</figure>\r\n<h3 id=\"child-component-ts\">\r\n    <a href=\"#child-component-ts\" class=\"headerlink\" title=\"child.component.ts\"></a>child.component.ts</h3>\r\n<figure class=\"highlight typescript\">\r\n    <table>\r\n        <tbody>\r\n            <tr>\r\n                <td class=\"code\">\r\n                    <pre><span class=\"line\"><span class=\"keyword\">import</span> {{'{'}} Component, Input {{'}'}} <span class=\"keyword\">from</span> <span class=\"string\">'@angular/core'</span>;</span><br><span class=\"line\"></span><br><span class=\"line\"><span class=\"meta\">@Component</span>({{'{'}}</span><br><span class=\"line\">  selector: <span class=\"string\">'app-child'</span>,</span><br><span class=\"line\">  template: <span class=\"string\">`</span></span><br><span class=\"line\"><span class=\"string\">      Say {{ message }}</span></span><br><span class=\"line\"><span class=\"string\">  `</span>,</span><br><span class=\"line\">  styleUrls: [<span class=\"string\">'./child.component.css'</span>]</span><br><span class=\"line\">{{'}'}})</span><br><span class=\"line\"><span class=\"keyword\">export</span> <span class=\"keyword\">class</span> ChildComponent {{'{'}}</span><br><span class=\"line\"></span><br><span class=\"line\">  <span class=\"meta\">@Input</span>() childMessage: <span class=\"built_in\">string</span>;</span><br><span class=\"line\"></span><br><span class=\"line\">  <span class=\"keyword\">constructor</span>(<span class=\"params\"></span>) {{'{'}} {{'}'}}</span><br><span class=\"line\"></span><br><span class=\"line\">{{'}'}}</span><br></pre>\r\n                </td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n</figure>\r\n<h2 id=\"Child-to-Parent-Sharing-Data-via-ViewChild\">\r\n    <a href=\"#Child-to-Parent-Sharing-Data-via-ViewChild\" class=\"headerlink\" title=\"Child to Parent: Sharing Data via ViewChild\"></a>Child to Parent: Sharing Data via ViewChild</h2>\r\n<p>\r\n    <a href=\"https://angular.io/api/core/ViewChild\" target=\"_blank\" rel=\"noopener\">ViewChild</a> allows a one component to be injected into another, giving the parent access to its attributes and functions.\r\n    One caveat, however, is that child won’t be available until after the view has been initialized. This means we need to\r\n    implement the AfterViewInit lifecycle hook to receive the data from the child. </p>\r\n<h3 id=\"parent-component-ts-1\">\r\n    <a href=\"#parent-component-ts-1\" class=\"headerlink\" title=\"parent.component.ts\"></a>parent.component.ts</h3>\r\n<figure class=\"highlight typescript\">\r\n    <table>\r\n        <tbody>\r\n            <tr>\r\n                <td class=\"code\">\r\n                    <pre><span class=\"line\"><span class=\"keyword\">import</span> {{'{'}} Component, ViewChild, AfterViewInit {{'}'}} <span class=\"keyword\">from</span> <span class=\"string\">'@angular/core'</span>;</span><br><span class=\"line\"><span class=\"keyword\">import</span> {{'{'}} ChildComponent {{'}'}} <span class=\"keyword\">from</span> <span class=\"string\">\"../child/child.component\"</span>;</span><br><span class=\"line\"></span><br><span class=\"line\"><span class=\"meta\">@Component</span>({{'{'}}</span><br><span class=\"line\">  selector: <span class=\"string\">'app-parent'</span>,</span><br><span class=\"line\">  template: <span class=\"string\">`</span></span><br><span class=\"line\"><span class=\"string\">    Message: {{ message }}</span></span><br><span class=\"line\"><span class=\"string\">    &lt;app-child&gt;&lt;/app-child&gt;</span></span><br><span class=\"line\"><span class=\"string\">  `</span>,</span><br><span class=\"line\">  styleUrls: [<span class=\"string\">'./parent.component.css'</span>]</span><br><span class=\"line\">{{'}'}})</span><br><span class=\"line\"><span class=\"keyword\">export</span> <span class=\"keyword\">class</span> ParentComponent <span class=\"keyword\">implements</span> AfterViewInit {{'{'}}</span><br><span class=\"line\"></span><br><span class=\"line\">  <span class=\"meta\">@ViewChild</span>(ChildComponent) child;</span><br><span class=\"line\"></span><br><span class=\"line\">  <span class=\"keyword\">constructor</span>(<span class=\"params\"></span>) {{'{'}} {{'}'}}</span><br><span class=\"line\"></span><br><span class=\"line\">  message:<span class=\"built_in\">string</span>;</span><br><span class=\"line\"></span><br><span class=\"line\">  ngAfterViewInit() {{'{'}}</span><br><span class=\"line\">    <span class=\"keyword\">this</span>.message = <span class=\"keyword\">this</span>.child.message</span><br><span class=\"line\">  {{'}'}}</span><br><span class=\"line\">{{'}'}}</span><br></pre>\r\n                </td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n</figure>\r\n<h3 id=\"child-component-ts-1\">\r\n    <a href=\"#child-component-ts-1\" class=\"headerlink\" title=\"child.component.ts\"></a>child.component.ts</h3>\r\n<figure class=\"highlight typescript\">\r\n    <table>\r\n        <tbody>\r\n            <tr>\r\n                <td class=\"code\">\r\n                    <pre><span class=\"line\"><span class=\"keyword\">import</span> {{'{'}} Component {{'}'}} <span class=\"keyword\">from</span> <span class=\"string\">'@angular/core'</span>;</span><br><span class=\"line\"></span><br><span class=\"line\"><span class=\"meta\">@Component</span>({{'{'}}</span><br><span class=\"line\">  selector: <span class=\"string\">'app-child'</span>,</span><br><span class=\"line\">  template: <span class=\"string\">`</span></span><br><span class=\"line\"><span class=\"string\">  `</span>,</span><br><span class=\"line\">  styleUrls: [<span class=\"string\">'./child.component.css'</span>]</span><br><span class=\"line\">{{'}'}})</span><br><span class=\"line\"><span class=\"keyword\">export</span> <span class=\"keyword\">class</span> ChildComponent {{'{'}}</span><br><span class=\"line\"></span><br><span class=\"line\">  message = <span class=\"string\">'Hola Mundo!'</span>;</span><br><span class=\"line\"></span><br><span class=\"line\">  <span class=\"keyword\">constructor</span>(<span class=\"params\"></span>) {{'{'}} {{'}'}}</span><br><span class=\"line\"></span><br><span class=\"line\">{{'}'}}</span><br></pre>\r\n                </td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n</figure>\r\n<h2 id=\"Child-to-Parent-Sharing-Data-via-Output-and-EventEmitter\">\r\n    <a href=\"#Child-to-Parent-Sharing-Data-via-Output-and-EventEmitter\" class=\"headerlink\" title=\"Child to Parent: Sharing Data via Output() and EventEmitter\"></a>Child to Parent: Sharing Data via Output() and EventEmitter</h2>\r\n<p>Another way to share data is to emit data from the child, which can be listed to by the parent. This approach is ideal when\r\n    you want to share data changes that occur on things like button clicks, form entires, and other user events.</p>\r\n<p>In the parent, we create a function to receive the message and set it equal to the message variable.</p>\r\n<p>In the child, we declare a messageEvent variable with the Output decorator and set it equal to a new event emitter. Then\r\n    we create a function named sendMessage that calls emit on this event with the message we want to send. Lastly, we create\r\n    a button to trigger this function.</p>\r\n<p>The parent can now subscribe to this messageEvent that’s outputted by the child component, then run the receive message function\r\n    whenever this event occurs.</p>\r\n<h3 id=\"parent-component-ts-2\">\r\n    <a href=\"#parent-component-ts-2\" class=\"headerlink\" title=\"parent.component.ts\"></a>parent.component.ts</h3>\r\n<figure class=\"highlight typescript\">\r\n    <table>\r\n        <tbody>\r\n            <tr>\r\n                <td class=\"code\">\r\n                    <pre><span class=\"line\"><span class=\"keyword\">import</span> {{'{'}} Component {{'}'}} <span class=\"keyword\">from</span> <span class=\"string\">'@angular/core'</span>;</span><br><span class=\"line\"></span><br><span class=\"line\"><span class=\"meta\">@Component</span>({{'{'}}</span><br><span class=\"line\">  selector: <span class=\"string\">'app-parent'</span>,</span><br><span class=\"line\">  template: <span class=\"string\">`</span></span><br><span class=\"line\"><span class=\"string\">    Message: {{message}}</span></span><br><span class=\"line\"><span class=\"string\">    &lt;app-child (messageEvent)=\"receiveMessage($event)\"&gt;&lt;/app-child&gt;</span></span><br><span class=\"line\"><span class=\"string\">  `</span>,</span><br><span class=\"line\">  styleUrls: [<span class=\"string\">'./parent.component.css'</span>]</span><br><span class=\"line\">{{'}'}})</span><br><span class=\"line\"><span class=\"keyword\">export</span> <span class=\"keyword\">class</span> ParentComponent {{'{'}}</span><br><span class=\"line\"></span><br><span class=\"line\">  <span class=\"keyword\">constructor</span>(<span class=\"params\"></span>) {{'{'}} {{'}'}}</span><br><span class=\"line\"></span><br><span class=\"line\">  message:<span class=\"built_in\">string</span>;</span><br><span class=\"line\"></span><br><span class=\"line\">  receiveMessage($event) {{'{'}}</span><br><span class=\"line\">    <span class=\"keyword\">this</span>.message = $event</span><br><span class=\"line\">  {{'}'}}</span><br><span class=\"line\">{{'}'}}</span><br></pre>\r\n                </td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n</figure>\r\n<h3 id=\"child-component-ts-2\">\r\n    <a href=\"#child-component-ts-2\" class=\"headerlink\" title=\"child.component.ts\"></a>child.component.ts</h3>\r\n<figure class=\"highlight typescript\">\r\n    <table>\r\n        <tbody>\r\n            <tr>\r\n                <td class=\"code\">\r\n                    <pre><span class=\"line\"><span class=\"keyword\">import</span> {{'{'}} Component, Output, EventEmitter {{'}'}} <span class=\"keyword\">from</span> <span class=\"string\">'@angular/core'</span>;</span><br><span class=\"line\"></span><br><span class=\"line\"><span class=\"meta\">@Component</span>({{'{'}}</span><br><span class=\"line\">  selector: <span class=\"string\">'app-child'</span>,</span><br><span class=\"line\">  template: <span class=\"string\">`</span></span><br><span class=\"line\"><span class=\"string\">      &lt;button (click)=\"sendMessage()\"&gt;Send Message&lt;/button&gt;</span></span><br><span class=\"line\"><span class=\"string\">  `</span>,</span><br><span class=\"line\">  styleUrls: [<span class=\"string\">'./child.component.css'</span>]</span><br><span class=\"line\">{{'}'}})</span><br><span class=\"line\"><span class=\"keyword\">export</span> <span class=\"keyword\">class</span> ChildComponent {{'{'}}</span><br><span class=\"line\"></span><br><span class=\"line\">  message: <span class=\"built_in\">string</span> = <span class=\"string\">\"Hola Mundo!\"</span></span><br><span class=\"line\"></span><br><span class=\"line\">  <span class=\"meta\">@Output</span>() messageEvent = <span class=\"keyword\">new</span> EventEmitter&lt;<span class=\"built_in\">string</span>&gt;();</span><br><span class=\"line\"></span><br><span class=\"line\">  <span class=\"keyword\">constructor</span>(<span class=\"params\"></span>) {{'{'}} {{'}'}}</span><br><span class=\"line\"></span><br><span class=\"line\">  sendMessage() {{'{'}}</span><br><span class=\"line\">    <span class=\"keyword\">this</span>.messageEvent.emit(<span class=\"keyword\">this</span>.message)</span><br><span class=\"line\">  {{'}'}}</span><br><span class=\"line\">{{'}'}}</span><br></pre>\r\n                </td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n</figure>\r\n<h2 id=\"Unrelated-Components-Sharing-Data-with-a-Service\">\r\n    <a href=\"#Unrelated-Components-Sharing-Data-with-a-Service\" class=\"headerlink\" title=\"Unrelated Components: Sharing Data with a Service\"></a>Unrelated Components: Sharing Data with a Service</h2>\r\n<p>When passing data between components that lack a direct connection, such as siblings, grandchildren, etc, you should you\r\n    a shared service. When you have data that should aways been in sync, I find the\r\n    <a href=\"https://xgrommx.github.io/rx-book/content/subjects/behavior_subject/index.html\" target=\"_blank\" rel=\"noopener\">RxJS BehaviorSubject</a> very useful in this situation.</p>\r\n<p>You can also use a regular RxJS Subject for sharing data via the service, but here’s why I prefer a BehaviorSubject.</p>\r\n<ul>\r\n    <li>It will always return the current value on subscription - there is no need to call\r\n        <code>onnext</code>\r\n    </li>\r\n    <li>It has a\r\n        <code>getValue()</code> function to extract the last value as raw data.</li>\r\n    <li>It ensures that the component always receives the most recent data.</li>\r\n</ul>\r\n<p>In the service, we create a private BehaviorSubject that will hold the current value of the message. We define a currentMessage\r\n    variable handle this data stream as an observable that will be used by the components. Lastly, we create function that\r\n    calls next on the BehaviorSubject to change its value.</p>\r\n<p>The parent, child, and sibling components all receive the same treatment. We inject the DataService in the constructor, then\r\n    subscribe to the currentMessage observable and set its value equal to the message variable.</p>\r\n<p>Now if we create a function in any one of these components that changes the value of the message. when this function is executed\r\n    the new data it’s automatically broadcast to all other components.</p>\r\n<h3 id=\"data-service-ts\">\r\n    <a href=\"#data-service-ts\" class=\"headerlink\" title=\"data.service.ts\"></a>data.service.ts</h3>\r\n<figure class=\"highlight typescript\">\r\n    <table>\r\n        <tbody>\r\n            <tr>\r\n                <td class=\"code\">\r\n                    <pre><span class=\"line\"><span class=\"keyword\">import</span> {{'{'}} Injectable {{'}'}} <span class=\"keyword\">from</span> <span class=\"string\">'@angular/core'</span>;</span><br><span class=\"line\"><span class=\"keyword\">import</span> {{'{'}} BehaviorSubject {{'}'}} <span class=\"keyword\">from</span> <span class=\"string\">'rxjs'</span>;</span><br><span class=\"line\"></span><br><span class=\"line\"><span class=\"meta\">@Injectable</span>()</span><br><span class=\"line\"><span class=\"keyword\">export</span> <span class=\"keyword\">class</span> DataService {{'{'}}</span><br><span class=\"line\"></span><br><span class=\"line\">  <span class=\"keyword\">private</span> messageSource = <span class=\"keyword\">new</span> BehaviorSubject(<span class=\"string\">'default message'</span>);</span><br><span class=\"line\">  currentMessage = <span class=\"keyword\">this</span>.messageSource.asObservable();</span><br><span class=\"line\"></span><br><span class=\"line\">  <span class=\"keyword\">constructor</span>(<span class=\"params\"></span>) {{'{'}} {{'}'}}</span><br><span class=\"line\"></span><br><span class=\"line\">  changeMessage(message: <span class=\"built_in\">string</span>) {{'{'}}</span><br><span class=\"line\">    <span class=\"keyword\">this</span>.messageSource.next(message)</span><br><span class=\"line\">  {{'}'}}</span><br><span class=\"line\"></span><br><span class=\"line\">{{'}'}}</span><br></pre>\r\n                </td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n</figure>\r\n<h3 id=\"parent-component-ts-3\">\r\n    <a href=\"#parent-component-ts-3\" class=\"headerlink\" title=\"parent.component.ts\"></a>parent.component.ts</h3>\r\n<figure class=\"highlight typescript\">\r\n    <table>\r\n        <tbody>\r\n            <tr>\r\n                <td class=\"code\">\r\n                    <pre><span class=\"line\"><span class=\"keyword\">import</span> {{'{'}} Component, OnInit {{'}'}} <span class=\"keyword\">from</span> <span class=\"string\">'@angular/core'</span>;</span><br><span class=\"line\"><span class=\"keyword\">import</span> {{'{'}} DataService {{'}'}} <span class=\"keyword\">from</span> <span class=\"string\">\"../data.service\"</span>;</span><br><span class=\"line\"></span><br><span class=\"line\"><span class=\"meta\">@Component</span>({{'{'}}</span><br><span class=\"line\">  selector: <span class=\"string\">'app-parent'</span>,</span><br><span class=\"line\">  template: <span class=\"string\">`</span></span><br><span class=\"line\"><span class=\"string\">    {{message}}</span></span><br><span class=\"line\"><span class=\"string\">  `</span>,</span><br><span class=\"line\">  styleUrls: [<span class=\"string\">'./sibling.component.css'</span>]</span><br><span class=\"line\">{{'}'}})</span><br><span class=\"line\"><span class=\"keyword\">export</span> <span class=\"keyword\">class</span> ParentComponent <span class=\"keyword\">implements</span> OnInit {{'{'}}</span><br><span class=\"line\"></span><br><span class=\"line\">  message:<span class=\"built_in\">string</span>;</span><br><span class=\"line\"></span><br><span class=\"line\">  <span class=\"keyword\">constructor</span>(<span class=\"params\"><span class=\"keyword\">private</span> data: DataService</span>) {{'{'}} {{'}'}}</span><br><span class=\"line\"></span><br><span class=\"line\">  ngOnInit() {{'{'}}</span><br><span class=\"line\">    <span class=\"keyword\">this</span>.data.currentMessage.subscribe(<span class=\"function\"><span class=\"params\">message</span> =&gt;</span> <span class=\"keyword\">this</span>.message = message)</span><br><span class=\"line\">  {{'}'}}</span><br><span class=\"line\"></span><br><span class=\"line\">{{'}'}}</span><br></pre>\r\n                </td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n</figure>\r\n<h3 id=\"sibling-component-ts\">\r\n    <a href=\"#sibling-component-ts\" class=\"headerlink\" title=\"sibling.component.ts\"></a>sibling.component.ts</h3>\r\n<figure class=\"highlight typescript\">\r\n    <table>\r\n        <tbody>\r\n            <tr>\r\n                <td class=\"code\">\r\n                    <pre><span class=\"line\"><span class=\"keyword\">import</span> {{'{'}} Component, OnInit {{'}'}} <span class=\"keyword\">from</span> <span class=\"string\">'@angular/core'</span>;</span><br><span class=\"line\"><span class=\"keyword\">import</span> {{'{'}} DataService {{'}'}} <span class=\"keyword\">from</span> <span class=\"string\">\"../data.service\"</span>;</span><br><span class=\"line\"></span><br><span class=\"line\"><span class=\"meta\">@Component</span>({{'{'}}</span><br><span class=\"line\">  selector: <span class=\"string\">'app-sibling'</span>,</span><br><span class=\"line\">  template: <span class=\"string\">`</span></span><br><span class=\"line\"><span class=\"string\">    {{message}}</span></span><br><span class=\"line\"><span class=\"string\">    &lt;button (click)=\"newMessage()\"&gt;New Message&lt;/button&gt;</span></span><br><span class=\"line\"><span class=\"string\">  `</span>,</span><br><span class=\"line\">  styleUrls: [<span class=\"string\">'./sibling.component.css'</span>]</span><br><span class=\"line\">{{'}'}})</span><br><span class=\"line\"><span class=\"keyword\">export</span> <span class=\"keyword\">class</span> SiblingComponent <span class=\"keyword\">implements</span> OnInit {{'{'}}</span><br><span class=\"line\"></span><br><span class=\"line\">  message:<span class=\"built_in\">string</span>;</span><br><span class=\"line\"></span><br><span class=\"line\">  <span class=\"keyword\">constructor</span>(<span class=\"params\"><span class=\"keyword\">private</span> data: DataService</span>) {{'{'}} {{'}'}}</span><br><span class=\"line\"></span><br><span class=\"line\">  ngOnInit() {{'{'}}</span><br><span class=\"line\">    <span class=\"keyword\">this</span>.data.currentMessage.subscribe(<span class=\"function\"><span class=\"params\">message</span> =&gt;</span> <span class=\"keyword\">this</span>.message = message)</span><br><span class=\"line\">  {{'}'}}</span><br><span class=\"line\"></span><br><span class=\"line\">  newMessage() {{'{'}}</span><br><span class=\"line\">    <span class=\"keyword\">this</span>.data.changeMessage(<span class=\"string\">\"Hello from Sibling\"</span>)</span><br><span class=\"line\">  {{'}'}}</span><br><span class=\"line\"></span><br><span class=\"line\">{{'}'}}</span><br></pre>\r\n                </td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n</figure>"

/***/ }),

/***/ "./src/app/knowledge-storage/passing-data/passing-data.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/knowledge-storage/passing-data/passing-data.component.ts ***!
  \**************************************************************************/
/*! exports provided: PassingDataComponet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PassingDataComponet", function() { return PassingDataComponet; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PassingDataComponet = /** @class */ (function () {
    function PassingDataComponet() {
    }
    PassingDataComponet.prototype.ngOnInit = function () {
        for (var i = 1; i <= 5; i++) {
            setTimeout(function () {
                console.log(i);
            }, 0);
        }
    };
    PassingDataComponet.prototype.handleFunctionEvent = function () {
        alert('Success');
    };
    PassingDataComponet = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'passing-data',
            template: __webpack_require__(/*! ./passing-data.component.html */ "./src/app/knowledge-storage/passing-data/passing-data.component.html"),
            styles: [__webpack_require__(/*! ./passing-data.component.css */ "./src/app/knowledge-storage/passing-data/passing-data.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PassingDataComponet);
    return PassingDataComponet;
}());



/***/ }),

/***/ "./src/app/knowledge-storage/vote-root/vote-root.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/knowledge-storage/vote-root/vote-root.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<vote-taker></vote-taker>"

/***/ }),

/***/ "./src/app/knowledge-storage/vote-root/vote-root.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/knowledge-storage/vote-root/vote-root.component.ts ***!
  \********************************************************************/
/*! exports provided: VoteRootComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoteRootComponent", function() { return VoteRootComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var VoteRootComponent = /** @class */ (function () {
    function VoteRootComponent() {
    }
    VoteRootComponent.prototype.onVoted = function (agreed) {
        console.log('test');
    };
    VoteRootComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'vote-root',
            template: __webpack_require__(/*! ./vote-root.component.html */ "./src/app/knowledge-storage/vote-root/vote-root.component.html")
        })
    ], VoteRootComponent);
    return VoteRootComponent;
}());



/***/ }),

/***/ "./src/app/knowledge-storage/vote-taker/votetaker.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/knowledge-storage/vote-taker/votetaker.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<voter [name]=\"voter\"><voter>"

/***/ }),

/***/ "./src/app/knowledge-storage/vote-taker/votetaker.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/knowledge-storage/vote-taker/votetaker.component.ts ***!
  \*********************************************************************/
/*! exports provided: VoteTakerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoteTakerComponent", function() { return VoteTakerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var VoteTakerComponent = /** @class */ (function () {
    function VoteTakerComponent() {
        this.agreed = 0;
        this.disagreed = 0;
        // onVoted(agreed: boolean) {
        //     console.log('test');
        //     agreed ? this.agreed++ : this.disagreed++;
        // }
    }
    VoteTakerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'vote-taker',
            template: __webpack_require__(/*! ./votetaker.component.html */ "./src/app/knowledge-storage/vote-taker/votetaker.component.html")
        })
    ], VoteTakerComponent);
    return VoteTakerComponent;
}());



/***/ }),

/***/ "./src/app/knowledge-storage/voter/voter.component.html":
/*!**************************************************************!*\
  !*** ./src/app/knowledge-storage/voter/voter.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button (click)=\"vote(true)\" [disabled]=\"didVote\">TestEvent</button>"

/***/ }),

/***/ "./src/app/knowledge-storage/voter/voter.component.ts":
/*!************************************************************!*\
  !*** ./src/app/knowledge-storage/voter/voter.component.ts ***!
  \************************************************************/
/*! exports provided: VoterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoterComponent", function() { return VoterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VoterComponent = /** @class */ (function () {
    function VoterComponent() {
        this.voted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.didVote = false;
    }
    VoterComponent.prototype.vote = function (agreed) {
        this.voted.emit(agreed);
        this.didVote = true;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], VoterComponent.prototype, "name", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], VoterComponent.prototype, "voted", void 0);
    VoterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'voter',
            template: __webpack_require__(/*! ./voter.component.html */ "./src/app/knowledge-storage/voter/voter.component.html")
        })
    ], VoterComponent);
    return VoterComponent;
}());



/***/ }),

/***/ "./src/app/react-js-intro/react-js-intro.component.html":
/*!**************************************************************!*\
  !*** ./src/app/react-js-intro/react-js-intro.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>React JS</h1>"

/***/ }),

/***/ "./src/app/react-js-intro/react-js-intro.component.ts":
/*!************************************************************!*\
  !*** ./src/app/react-js-intro/react-js-intro.component.ts ***!
  \************************************************************/
/*! exports provided: ReactJSIntroduceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactJSIntroduceComponent", function() { return ReactJSIntroduceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ReactJSIntroduceComponent = /** @class */ (function () {
    function ReactJSIntroduceComponent() {
    }
    ReactJSIntroduceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'react-js-intro',
            template: __webpack_require__(/*! ./react-js-intro.component.html */ "./src/app/react-js-intro/react-js-intro.component.html")
        })
    ], ReactJSIntroduceComponent);
    return ReactJSIntroduceComponent;
}());



/***/ }),

/***/ "./src/app/table-data/table-data.component.css":
/*!*****************************************************!*\
  !*** ./src/app/table-data/table-data.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/table-data/table-data.component.html":
/*!******************************************************!*\
  !*** ./src/app/table-data/table-data.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group\">\r\n  <label>Data get from this API</label>\r\n  <input class=\"form-control\" [(ngModel)]=\"apiURLValue\">\r\n</div>\r\n\r\n<div class=\"col-md-6\">\r\n  <h2> User Details</h2>\r\n  <button class=\"btn btn-danger\" (click)=\"addUser()\"> Add User</button>\r\n  <table class=\"table table-striped\">\r\n    <thead>\r\n    <tr>\r\n      <th>Id</th>\r\n      <th>Name</th>\r\n      <th>Alter Ego</th>\r\n      <th>Likes</th>\r\n      <th>Action</th>\r\n    </tr>\r\n    </thead>\r\n    <tbody>\r\n    <tr *ngFor=\"let user of dataSource\">\r\n      <td>{{user.id}}</td>\r\n      <td>{{user.name}}</td>\r\n      <td>{{user.alterEgo}}</td>\r\n      <td>{{user.likes}}</td>\r\n      <td><button class=\"btn btn-danger\" (click)=\"deleteUser(user)\"> Delete</button>\r\n        <button class=\"btn btn-danger\" (click)=\"editUser(user)\" style=\"margin-left: 20px;\"> Edit</button></td>\r\n    </tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/table-data/table-data.component.ts":
/*!****************************************************!*\
  !*** ./src/app/table-data/table-data.component.ts ***!
  \****************************************************/
/*! exports provided: TableDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableDataComponent", function() { return TableDataComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_common_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/services/common/common.service */ "./src/app/core/services/common/common.service.ts");
/* harmony import */ var _config_app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/app-config */ "./src/app/config/app-config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TableDataComponent = /** @class */ (function () {
    function TableDataComponent(commonService) {
        this.commonService = commonService;
        this.apiURLValue = _config_app_config__WEBPACK_IMPORTED_MODULE_2__["AppConfig"].apiUrl.heroes;
    }
    TableDataComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.commonService.getDataTest().subscribe(function (data) {
            _this.dataSource = JSON.parse(data.toString());
        });
    };
    TableDataComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'table-data',
            template: __webpack_require__(/*! ./table-data.component.html */ "./src/app/table-data/table-data.component.html"),
            styles: [__webpack_require__(/*! ./table-data.component.css */ "./src/app/table-data/table-data.component.css")]
        }),
        __metadata("design:paramtypes", [_core_services_common_common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"]])
    ], TableDataComponent);
    return TableDataComponent;
}());



/***/ }),

/***/ "./src/app/user-control/accordion-tut/accordion-tut.component.css":
/*!************************************************************************!*\
  !*** ./src/app/user-control/accordion-tut/accordion-tut.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bs-datepicker {\r\n    display: flex;\r\n    align-items: stretch;\r\n    flex-flow: row wrap;\r\n    background: #fff;\r\n    box-shadow: 0 0 10px 0 #aaa;\r\n    position: relative;\r\n    z-index: 1;\r\n}\r\n\r\n    .bs-datepicker:after {\r\n        clear: both;\r\n        content: '';\r\n        display: block;\r\n    }\r\n\r\n    .bs-datepicker bs-day-picker {\r\n        float: left;\r\n    }\r\n\r\n    .bs-datepicker button:active, .bs-datepicker button:focus, .bs-datepicker button:hover, .bs-datepicker input:active, .bs-datepicker input:focus, .bs-datepicker input:hover, .bs-datepicker-btns button:active, .bs-datepicker-btns button:focus, .bs-datepicker-btns button:hover, .bs-datepicker-predefined-btns button:active, .bs-datepicker-predefined-btns button:focus {\r\n        outline: 0;\r\n    }\r\n\r\n    .bs-datepicker-head {\r\n    min-width: 270px;\r\n    height: 50px;\r\n    padding: 10px;\r\n    border-radius: 3px 3px 0 0;\r\n    text-align: justify;\r\n}\r\n\r\n    .bs-datepicker-head:after {\r\n        content: \"\";\r\n        display: inline-block;\r\n        vertical-align: top;\r\n        width: 100%;\r\n    }\r\n\r\n    .bs-datepicker-head button {\r\n        display: inline-block;\r\n        vertical-align: top;\r\n        padding: 0;\r\n        height: 30px;\r\n        line-height: 30px;\r\n        border: 0;\r\n        background: 0 0;\r\n        text-align: center;\r\n        cursor: pointer;\r\n        color: #fff;\r\n        transition: .3s;\r\n    }\r\n\r\n    .bs-datepicker-head button[disabled], .bs-datepicker-head button[disabled]:active, .bs-datepicker-head button[disabled]:hover {\r\n            background: rgba(221,221,221,.3);\r\n            color: #f5f5f5;\r\n            cursor: not-allowed;\r\n        }\r\n\r\n    .bs-datepicker-head button.next, .bs-datepicker-head button.previous {\r\n            border-radius: 50%;\r\n            width: 30px;\r\n            height: 30px;\r\n        }\r\n\r\n    .bs-datepicker-head button.next span, .bs-datepicker-head button.previous span {\r\n                font-size: 28px;\r\n                line-height: 1;\r\n                display: inline-block;\r\n                position: relative;\r\n                height: 100%;\r\n                width: 100%;\r\n                border-radius: 50%;\r\n            }\r\n\r\n    .bs-datepicker-head button.current {\r\n            border-radius: 15px;\r\n            max-width: 155px;\r\n            padding: 0 13px;\r\n        }\r\n\r\n    .bs-datepicker-head button:hover {\r\n            background-color: rgba(0,0,0,.1);\r\n        }\r\n\r\n    .bs-datepicker-head button:active {\r\n            background-color: rgba(0,0,0,.2);\r\n        }\r\n\r\n    .bs-datepicker-body {\r\n    padding: 10px;\r\n    border-radius: 0 0 3px 3px;\r\n    min-height: 232px;\r\n    min-width: 278px;\r\n    border: 1px solid #e9edf0;\r\n}\r\n\r\n    .bs-datepicker-body .days.weeks {\r\n        position: relative;\r\n        z-index: 1;\r\n    }\r\n\r\n    .bs-datepicker-body table {\r\n        width: 100%;\r\n        border-collapse: separate;\r\n        border-spacing: 0;\r\n    }\r\n\r\n    .bs-datepicker-body table th {\r\n            font-size: 13px;\r\n            color: #9aaec1;\r\n            font-weight: 400;\r\n            text-align: center;\r\n        }\r\n\r\n    .bs-datepicker-body table td {\r\n            color: #54708b;\r\n            text-align: center;\r\n            position: relative;\r\n            padding: 0;\r\n        }\r\n\r\n    .bs-datepicker-body table td span {\r\n                display: block;\r\n                margin: 0 auto;\r\n                font-size: 13px;\r\n                border-radius: 50%;\r\n                position: relative;\r\n                -moz-user-select: none;\r\n                -webkit-user-select: none;\r\n                -ms-user-select: none;\r\n            }\r\n\r\n    .bs-datepicker-body table td:not(.disabled) span {\r\n                cursor: pointer;\r\n            }\r\n\r\n    .bs-datepicker-body table td span.is-highlighted:not(.disabled):not(.selected), .bs-datepicker-body table td.is-highlighted:not(.disabled):not(.selected) span {\r\n                background-color: #e9edf0;\r\n                transition: 0s;\r\n            }\r\n\r\n    .bs-datepicker-body table td span.disabled, .bs-datepicker-body table td.disabled span {\r\n                color: #9aaec1;\r\n            }\r\n\r\n    .bs-datepicker-body table td span.selected, .bs-datepicker-body table td.selected span {\r\n                color: #fff;\r\n            }\r\n\r\n    .bs-datepicker-body table td.active {\r\n                position: relative;\r\n            }\r\n\r\n    .bs-datepicker-body table td.active.select-start:before {\r\n                    left: 35%;\r\n                }\r\n\r\n    .bs-datepicker-body table td.active.select-end:before {\r\n                    left: -85%;\r\n                }\r\n\r\n    .bs-datepicker-body table td span.active.select-end:after, .bs-datepicker-body table td span.active.select-start:after, .bs-datepicker-body table td.active.select-end span:after, .bs-datepicker-body table td.active.select-start span:after {\r\n                    content: \"\";\r\n                    display: block;\r\n                    position: absolute;\r\n                    z-index: -1;\r\n                    width: 100%;\r\n                    height: 100%;\r\n                    transition: .3s;\r\n                    top: 0;\r\n                    border-radius: 50%;\r\n                }\r\n\r\n    .bs-datepicker-body table td span:before, .bs-datepicker-body table td:before {\r\n                content: \"\";\r\n                display: block;\r\n                position: absolute;\r\n                z-index: -1;\r\n                top: 6px;\r\n                bottom: 6px;\r\n                left: -2px;\r\n                right: -2px;\r\n                box-sizing: content-box;\r\n                background: 0 0;\r\n            }\r\n\r\n    .bs-datepicker-body table td.active.select-start + td.active:before {\r\n                left: -20%;\r\n            }\r\n\r\n    .bs-datepicker-body table td:last-child.active:before {\r\n                border-radius: 0 3px 3px 0;\r\n                width: 125%;\r\n                left: -25%;\r\n            }\r\n\r\n    .bs-datepicker-body table td span[class*=select-], .bs-datepicker-body table td[class*=select-] span {\r\n                border-radius: 50%;\r\n                color: #fff;\r\n            }\r\n\r\n    .bs-datepicker-body table.days span.active:not(.select-start):before, .bs-datepicker-body table.days span.in-range:not(.select-start):before, .bs-datepicker-body table.days td.active:not(.select-start):before, .bs-datepicker-body table.days td.in-range:not(.select-start):before {\r\n            background: #e9edf0;\r\n        }\r\n\r\n    .bs-datepicker-body table.days span {\r\n            width: 32px;\r\n            height: 32px;\r\n            line-height: 32px;\r\n        }\r\n\r\n    .bs-datepicker-body table.days span.select-start {\r\n                z-index: 2;\r\n            }\r\n\r\n    .bs-datepicker-body table.days span.in-range.select-end:before, .bs-datepicker-body table.days span.is-highlighted.in-range:before {\r\n                background: 0 0;\r\n                right: 0;\r\n                left: 0;\r\n            }\r\n\r\n    .bs-datepicker-body table.days td.active + td.is-highlighted:before, .bs-datepicker-body table.days td.active + td.select-end:before, .bs-datepicker-body table.days td.in-range + td.is-highlighted:before, .bs-datepicker-body table.days td.in-range + td.select-end:before, .bs-datepicker-body table.days td.select-start + td.is-highlighted:before, .bs-datepicker-body table.days td.select-start + td.select-end:before {\r\n            background: #e9edf0;\r\n            width: 100%;\r\n        }\r\n\r\n    .bs-datepicker-body table.weeks tr td:nth-child(2).active:before {\r\n            border-radius: 3px 0 0 3px;\r\n            left: 0;\r\n            width: 100%;\r\n        }\r\n\r\n    .bs-datepicker-body table:not(.weeks) tr td:first-child:before {\r\n            border-radius: 3px 0 0 3px;\r\n        }\r\n\r\n    .bs-datepicker-body table.years td span {\r\n            width: 46px;\r\n            height: 46px;\r\n            line-height: 45px;\r\n            margin: 0 auto;\r\n        }\r\n\r\n    .bs-datepicker-body table.years tr:not(:last-child) td span {\r\n            margin-bottom: 8px;\r\n        }\r\n\r\n    .bs-datepicker-body table.months td {\r\n            height: 52px;\r\n        }\r\n\r\n    .bs-datepicker-body table.months td span {\r\n                padding: 6px;\r\n                border-radius: 15px;\r\n            }\r\n\r\n    .bs-datepicker .current-timedate {\r\n    color: #54708b;\r\n    font-size: 15px;\r\n    text-align: center;\r\n    height: 30px;\r\n    line-height: 30px;\r\n    border-radius: 20px;\r\n    border: 1px solid #e9edf0;\r\n    margin-bottom: 10px;\r\n    cursor: pointer;\r\n    text-transform: uppercase;\r\n    -moz-user-select: none;\r\n    -webkit-user-select: none;\r\n    -ms-user-select: none;\r\n}\r\n\r\n    .bs-datepicker .current-timedate span:not(:empty):before {\r\n        content: \"\";\r\n        width: 15px;\r\n        height: 16px;\r\n        display: inline-block;\r\n        margin-right: 4px;\r\n        vertical-align: text-bottom;\r\n        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAQCAYAAADJViUEAAABMklEQVQoU9VTwW3CQBCcOUgBtEBKSAukAnBKME+wFCAlYIhk8sQlxFABtJAScAsuAPBEewYcxCP8ouxrPDsza61uiVN1o6RNHD4htSCmq49RfO71BvMJqBBkITRf1kmUW49nQRC9h1I5AZlBClaL8aP1fKgOOxCx8aSLs+Q19eZuNO8QmPqJRtDFguy7OAcDbJPs+/BKVPDIPrvD2ZJgWAmVe7O0rI0Vqs1seyWUXpuJoppYCa5L+U++NpNPkr5OE2oMdARsb3gykJT5ydZcL8Z9Ww60nxg2LhjON9li9OwXZzo+xLbp3nC2s9CL2RrueGyVrgwNm8HpsCzZ9EEW6kqXlo1GQe03FzP/7W8Hl0dBtu7Bf7zt6mIwvX1RvzDCm7+q3mAW0Dl/GPdUCeXrZLT9BrDrGkm4qlPvAAAAAElFTkSuQmCC);\r\n    }\r\n\r\n    .bs-datepicker-multiple {\r\n    display: inline-block;\r\n    border-radius: 4px 0 0 4px;\r\n}\r\n\r\n    .bs-datepicker-multiple + .bs-datepicker-multiple {\r\n        margin-left: 10px;\r\n    }\r\n\r\n    .bs-datepicker-multiple .bs-datepicker {\r\n        box-shadow: none;\r\n        position: relative;\r\n    }\r\n\r\n    .bs-datepicker-multiple .bs-datepicker:not(:last-child) {\r\n            padding-right: 10px;\r\n        }\r\n\r\n    .bs-datepicker-multiple .bs-datepicker + .bs-datepicker:after {\r\n            content: \"\";\r\n            display: block;\r\n            width: 14px;\r\n            height: 10px;\r\n            background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAKCAYAAABrGwT5AAAA1ElEQVQoU42RsQrCUAxF77VuDu7O4oMWW//BURBBpZvgKk4uIrjoqKOTf+DopIO4uYggtFTfw3+pkQqCW1/G5J7kJiFy4m5MxUlxAzgIPHX+lzMPzupRYlYgxiR7vqsOP8YKzsTx0yxFMCUZ+q7aZzlr+OvgoWcAFyAHgat2jLWu48252DdqAihDJGSSJNUUxYmQjs3+hPQBlAh2rG2LCOPnaw3IiGDX99TRCs7ASJsNhUOA7d/LcuHvRG22FIZvsNXw1MX6VZExCilOQKEfeLXr/10+aC9Ho7arh7oAAAAASUVORK5CYII=);\r\n            position: absolute;\r\n            top: 25px;\r\n            left: -8px;\r\n        }\r\n\r\n    .bs-datepicker-multiple .bs-datepicker .left {\r\n            float: left;\r\n        }\r\n\r\n    .bs-datepicker-multiple .bs-datepicker .right {\r\n            float: right;\r\n        }\r\n\r\n    .bs-datepicker-container {\r\n    padding: 15px;\r\n}\r\n\r\n    .bs-datepicker-custom-range {\r\n    padding: 15px;\r\n    background: #eee;\r\n}\r\n\r\n    .bs-datepicker-predefined-btns button {\r\n    width: 100%;\r\n    display: block;\r\n    height: 30px;\r\n    background-color: #9aaec1;\r\n    border-radius: 4px;\r\n    color: #fff;\r\n    border: 0;\r\n    margin-bottom: 10px;\r\n    padding: 0 18px;\r\n    text-align: left;\r\n    transition: .3s;\r\n}\r\n\r\n    .bs-datepicker-predefined-btns button:active, .bs-datepicker-predefined-btns button:hover {\r\n        background-color: #54708b;\r\n    }\r\n\r\n    .bs-datepicker .is-other-month {\r\n    color: rgba(0,0,0,.25);\r\n}\r\n\r\n    .bs-datepicker-buttons {\r\n    display: flex;\r\n    flex-flow: row wrap;\r\n    justify-content: flex-end;\r\n    padding-top: 10px;\r\n    border-top: 1px solid #e9edf0;\r\n}\r\n\r\n    .bs-datepicker-buttons .btn-default {\r\n        margin-left: 10px;\r\n    }\r\n\r\n    .bs-timepicker-container {\r\n    padding: 10px 0;\r\n}\r\n\r\n    .bs-timepicker-label {\r\n    color: #54708b;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n    .bs-timepicker-controls {\r\n    display: inline-block;\r\n    vertical-align: top;\r\n    margin-right: 10px;\r\n}\r\n\r\n    .bs-timepicker-controls button {\r\n        width: 20px;\r\n        height: 20px;\r\n        border-radius: 50%;\r\n        border: 0;\r\n        background-color: #e9edf0;\r\n        color: #54708b;\r\n        font-size: 16px;\r\n        font-weight: 700;\r\n        vertical-align: middle;\r\n        line-height: 0;\r\n        padding: 0;\r\n        transition: .3s;\r\n    }\r\n\r\n    .bs-timepicker-controls button:hover {\r\n            background-color: #d5dadd;\r\n        }\r\n\r\n    .bs-timepicker-controls input {\r\n        width: 35px;\r\n        height: 25px;\r\n        border-radius: 13px;\r\n        text-align: center;\r\n        border: 1px solid #e9edf0;\r\n    }\r\n\r\n    .bs-timepicker .switch-time-format {\r\n    text-transform: uppercase;\r\n    min-width: 54px;\r\n    height: 25px;\r\n    border-radius: 20px;\r\n    border: 1px solid #e9edf0;\r\n    background: #fff;\r\n    color: #54708b;\r\n    font-size: 13px;\r\n}\r\n\r\n    .bs-timepicker .switch-time-format img {\r\n        vertical-align: initial;\r\n        margin-left: 4px;\r\n    }\r\n\r\n    bs-datepicker-container, bs-daterangepicker-container {\r\n    z-index: 1080;\r\n}\r\n\r\n    @media (max-width:768px) {\r\n    .bs-datepicker-multiple {\r\n        display: flex;\r\n    }\r\n\r\n        .bs-datepicker-multiple + .bs-datepicker-multiple {\r\n            margin-top: 10px;\r\n            margin-left: 0;\r\n        }\r\n}\r\n\r\n    .theme-default .bs-datepicker-body table td span.selected, .theme-default .bs-datepicker-body table td span[class*=select-]:after, .theme-default .bs-datepicker-body table td.selected span, .theme-default .bs-datepicker-body table td[class*=select-] span:after, .theme-default .bs-datepicker-head {\r\n    background-color: #777;\r\n}\r\n\r\n    .theme-default .bs-datepicker-body table td.week span {\r\n    color: #777;\r\n}\r\n\r\n    .theme-green .bs-datepicker-body table td span.selected, .theme-green .bs-datepicker-body table td span[class*=select-]:after, .theme-green .bs-datepicker-body table td.selected span, .theme-green .bs-datepicker-body table td[class*=select-] span:after, .theme-green .bs-datepicker-head {\r\n    background-color: #5cb85c;\r\n}\r\n\r\n    .theme-green .bs-datepicker-body table td.week span {\r\n    color: #5cb85c;\r\n}\r\n\r\n    .theme-blue .bs-datepicker-body table td span.selected, .theme-blue .bs-datepicker-body table td span[class*=select-]:after, .theme-blue .bs-datepicker-body table td.selected span, .theme-blue .bs-datepicker-body table td[class*=select-] span:after, .theme-blue .bs-datepicker-head {\r\n    background-color: #5bc0de;\r\n}\r\n\r\n    .theme-blue .bs-datepicker-body table td.week span {\r\n    color: #5bc0de;\r\n}\r\n\r\n    .theme-dark-blue .bs-datepicker-body table td span.selected, .theme-dark-blue .bs-datepicker-body table td span[class*=select-]:after, .theme-dark-blue .bs-datepicker-body table td.selected span, .theme-dark-blue .bs-datepicker-body table td[class*=select-] span:after, .theme-dark-blue .bs-datepicker-head {\r\n    background-color: #337ab7;\r\n}\r\n\r\n    .theme-dark-blue .bs-datepicker-body table td.week span {\r\n    color: #337ab7;\r\n}\r\n\r\n    .theme-red .bs-datepicker-body table td span.selected, .theme-red .bs-datepicker-body table td span[class*=select-]:after, .theme-red .bs-datepicker-body table td.selected span, .theme-red .bs-datepicker-body table td[class*=select-] span:after, .theme-red .bs-datepicker-head {\r\n    background-color: #d9534f;\r\n}\r\n\r\n    .theme-red .bs-datepicker-body table td.week span {\r\n    color: #d9534f;\r\n}\r\n\r\n    .theme-orange .bs-datepicker-body table td span.selected, .theme-orange .bs-datepicker-body table td span[class*=select-]:after, .theme-orange .bs-datepicker-body table td.selected span, .theme-orange .bs-datepicker-body table td[class*=select-] span:after, .theme-orange .bs-datepicker-head {\r\n    background-color: #f0ad4e;\r\n}\r\n\r\n    .theme-orange .bs-datepicker-body table td.week span {\r\n    color: #f0ad4e;\r\n}\r\n\r\n    html {\r\n    box-sizing: border-box;\r\n    font-family: sans-serif;\r\n    line-height: 1.15;\r\n    -webkit-text-size-adjust: 100%;\r\n    -ms-text-size-adjust: 100%;\r\n    -ms-overflow-style: scrollbar;\r\n    -webkit-tap-highlight-color: transparent;\r\n}\r\n\r\n    *, ::after, ::before {\r\n    box-sizing: inherit;\r\n}\r\n\r\n    @-ms-viewport {\r\n    width: device-width;\r\n}\r\n\r\n    article, aside, dialog, figcaption, figure, footer, header, hgroup, main, nav, section {\r\n    display: block;\r\n}\r\n\r\n    body {\r\n    margin: 0;\r\n    font-family: -apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif;\r\n    font-size: 1rem;\r\n    font-weight: 400;\r\n    line-height: 1.5;\r\n    color: #212529;\r\n    background-color: #fff;\r\n    min-width: 320px;\r\n}\r\n\r\n    [tabindex=\"-1\"]:focus {\r\n    outline: 0 !important;\r\n}\r\n\r\n    hr {\r\n    box-sizing: content-box;\r\n    height: 0;\r\n    overflow: visible;\r\n}\r\n\r\n    h1, h2, h3, h4, h5, h6 {\r\n    margin-top: 0;\r\n    margin-bottom: .5rem;\r\n}\r\n\r\n    dl, ol, p, ul {\r\n    margin-top: 0;\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n    abbr[data-original-title], abbr[title] {\r\n    text-decoration: underline;\r\n    -webkit-text-decoration: underline dotted;\r\n    text-decoration: underline dotted;\r\n    cursor: help;\r\n    border-bottom: 0;\r\n}\r\n\r\n    address {\r\n    margin-bottom: 1rem;\r\n    font-style: normal;\r\n    line-height: inherit;\r\n}\r\n\r\n    ol ol, ol ul, ul ol, ul ul {\r\n    margin-bottom: 0;\r\n}\r\n\r\n    dt {\r\n    font-weight: 700;\r\n}\r\n\r\n    dd {\r\n    margin-bottom: .5rem;\r\n    margin-left: 0;\r\n}\r\n\r\n    blockquote, figure {\r\n    margin: 0 0 1rem;\r\n}\r\n\r\n    dfn {\r\n    font-style: italic;\r\n}\r\n\r\n    b, strong {\r\n    font-weight: bolder;\r\n}\r\n\r\n    small {\r\n    font-size: 80%;\r\n}\r\n\r\n    sub, sup {\r\n    position: relative;\r\n    font-size: 75%;\r\n    line-height: 0;\r\n    vertical-align: baseline;\r\n}\r\n\r\n    sub {\r\n    bottom: -.25em;\r\n}\r\n\r\n    sup {\r\n    top: -.5em;\r\n}\r\n\r\n    a {\r\n    color: #007bff;\r\n    text-decoration: none;\r\n    background-color: transparent;\r\n    -webkit-text-decoration-skip: objects;\r\n}\r\n\r\n    a:hover {\r\n        color: #0056b3;\r\n        text-decoration: none;\r\n    }\r\n\r\n    a:not([href]):not([tabindex]), a:not([href]):not([tabindex]):focus, a:not([href]):not([tabindex]):hover {\r\n        text-decoration: none;\r\n    }\r\n\r\n    a:not([href]):not([tabindex]):focus, h1:focus, h2:focus, h3:focus, h4:focus {\r\n            outline: 0;\r\n        }\r\n\r\n    code, kbd, pre, samp {\r\n    font-family: monospace,monospace;\r\n    font-size: 1em;\r\n}\r\n\r\n    pre {\r\n    margin-top: 0;\r\n    margin-bottom: 1rem;\r\n    overflow: auto;\r\n}\r\n\r\n    img {\r\n    vertical-align: middle;\r\n    border-style: none;\r\n}\r\n\r\n    svg:not(:root) {\r\n    overflow: hidden;\r\n}\r\n\r\n    [role=button], a, area, button, input, label, select, summary, textarea {\r\n    touch-action: manipulation;\r\n}\r\n\r\n    table {\r\n    border-collapse: collapse;\r\n}\r\n\r\n    caption {\r\n    padding-top: .75rem;\r\n    padding-bottom: .75rem;\r\n    color: #868e96;\r\n    text-align: left;\r\n    caption-side: bottom;\r\n}\r\n\r\n    th {\r\n    text-align: left;\r\n}\r\n\r\n    label {\r\n    display: inline-block;\r\n    margin-bottom: .5rem;\r\n}\r\n\r\n    button:focus {\r\n    outline: dotted 1px;\r\n    outline: -webkit-focus-ring-color auto 5px;\r\n}\r\n\r\n    button, input, optgroup, select, textarea {\r\n    margin: 0;\r\n    font-family: inherit;\r\n    font-size: inherit;\r\n    line-height: inherit;\r\n}\r\n\r\n    button, input {\r\n    overflow: visible;\r\n}\r\n\r\n    button, select {\r\n    text-transform: none;\r\n}\r\n\r\n    [type=reset], [type=submit], button, html [type=button] {\r\n    -webkit-appearance: button;\r\n}\r\n\r\n    [type=button]::-moz-focus-inner, [type=reset]::-moz-focus-inner, [type=submit]::-moz-focus-inner, button::-moz-focus-inner {\r\n        padding: 0;\r\n        border-style: none;\r\n    }\r\n\r\n    input[type=checkbox], input[type=radio] {\r\n    box-sizing: border-box;\r\n    padding: 0;\r\n}\r\n\r\n    input[type=date], input[type=datetime-local], input[type=month], input[type=time] {\r\n    -webkit-appearance: listbox;\r\n}\r\n\r\n    textarea {\r\n    overflow: auto;\r\n    resize: vertical;\r\n}\r\n\r\n    fieldset {\r\n    min-width: 0;\r\n    padding: 0;\r\n    margin: 0;\r\n    border: 0;\r\n}\r\n\r\n    legend {\r\n    display: block;\r\n    width: 100%;\r\n    max-width: 100%;\r\n    padding: 0;\r\n    margin-bottom: .5rem;\r\n    font-size: 1.5rem;\r\n    line-height: inherit;\r\n    color: inherit;\r\n    white-space: normal;\r\n}\r\n\r\n    progress {\r\n    vertical-align: baseline;\r\n}\r\n\r\n    [type=number]::-webkit-inner-spin-button, [type=number]::-webkit-outer-spin-button {\r\n    height: auto;\r\n}\r\n\r\n    [type=search] {\r\n    outline-offset: -2px;\r\n    -webkit-appearance: none;\r\n}\r\n\r\n    [type=search]::-webkit-search-cancel-button, [type=search]::-webkit-search-decoration {\r\n        -webkit-appearance: none;\r\n    }\r\n\r\n    ::-webkit-file-upload-button {\r\n    font: inherit;\r\n    -webkit-appearance: button;\r\n}\r\n\r\n    output {\r\n    display: inline-block;\r\n}\r\n\r\n    summary {\r\n    display: list-item;\r\n}\r\n\r\n    template {\r\n    display: none;\r\n}\r\n\r\n    .hidden, [hidden] {\r\n    display: none !important;\r\n}\r\n\r\n    html {\r\n    touch-action: manipulation;\r\n    -webkit-touch-callout: none;\r\n    -webkit-font-smoothing: antialiased;\r\n    -moz-osx-font-smoothing: grayscale;\r\n    font-size: inherit;\r\n}\r\n\r\n    code {\r\n    word-break: normal;\r\n}\r\n\r\n    .header {\r\n    min-height: 64px;\r\n    padding: 12px 20px;\r\n    background-color: #1976d2;\r\n    display: flex;\r\n    flex-flow: row nowrap;\r\n}\r\n\r\n    .header .logo {\r\n        color: #fff;\r\n        margin-bottom: 0;\r\n        font-size: 1.375rem;\r\n        cursor: pointer;\r\n        transition: all .3s;\r\n    }\r\n\r\n    .header .logo img {\r\n            display: block;\r\n        }\r\n\r\n    .header .logo:hover {\r\n            opacity: .8;\r\n        }\r\n\r\n    .header .logo:active {\r\n            -webkit-transform: scale(.95);\r\n            transform: scale(.95);\r\n        }\r\n\r\n    .header-info {\r\n    margin-left: auto;\r\n    display: flex;\r\n    flex-flow: row nowrap;\r\n    align-items: center;\r\n}\r\n\r\n    .header-list {\r\n    margin: 0;\r\n    padding: 0;\r\n    list-style: none;\r\n    display: flex;\r\n    flex-flow: row nowrap;\r\n}\r\n\r\n    .header-list li {\r\n        width: 21px;\r\n        height: 21px;\r\n        margin-left: 16px;\r\n    }\r\n\r\n    .header-list li a {\r\n            display: block;\r\n            opacity: .7;\r\n        }\r\n\r\n    .header-list li a:hover {\r\n                opacity: 1;\r\n            }\r\n\r\n    .header-list li img {\r\n            width: 100%;\r\n            height: 100%;\r\n            display: block;\r\n        }\r\n\r\n    .header .prev-docs {\r\n    line-height: 21px;\r\n    color: #fff;\r\n}\r\n\r\n    .header .prev-docs .dropdown-toggle {\r\n        opacity: .7;\r\n        cursor: pointer;\r\n    }\r\n\r\n    .header .prev-docs .dropdown-toggle:hover {\r\n            opacity: 1;\r\n        }\r\n\r\n    .main {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n}\r\n\r\n    .entry {\r\n    padding: 75px 0;\r\n}\r\n\r\n    .entry .slogan {\r\n        padding: 30px 0 20px;\r\n        margin: 0;\r\n        text-transform: uppercase;\r\n    }\r\n\r\n    .entry .btn-block {\r\n        margin: 40px 0 20px;\r\n    }\r\n\r\n    .entry .btn-block .btn {\r\n            width: 160px;\r\n            margin: 0 13px;\r\n            padding: 12px 0;\r\n            cursor: pointer;\r\n            text-transform: uppercase;\r\n            letter-spacing: 2px;\r\n        }\r\n\r\n    .entry .version {\r\n        font-weight: 400;\r\n        color: #666;\r\n        margin: 0;\r\n    }\r\n\r\n    .advantages {\r\n    background: #f8f8f8;\r\n}\r\n\r\n    .advantages .holder {\r\n        padding: 80px 10%;\r\n    }\r\n\r\n    .advantages .holder .col-12 {\r\n            padding-top: 40px;\r\n            padding-bottom: 40px;\r\n        }\r\n\r\n    .advantages .img-holder {\r\n        flex: 0 0 80px;\r\n        max-width: 80px;\r\n        height: 60px;\r\n        margin-bottom: 15px;\r\n        padding-right: 10px;\r\n    }\r\n\r\n    .advantages .img-holder img {\r\n            display: block;\r\n            max-width: 100%;\r\n        }\r\n\r\n    .advantages .txt-holder {\r\n        flex: 0 0 calc(100% - 80px);\r\n        max-width: calc(100% - 80px);\r\n    }\r\n\r\n    .advantages .txt-holder h4 {\r\n            color: #333;\r\n        }\r\n\r\n    .advantages .txt-holder p {\r\n            margin: 15px 0 0;\r\n            color: #666;\r\n        }\r\n\r\n    .sidebar {\r\n    order: 0;\r\n    flex: 0 0 16.666667%;\r\n    max-width: 16.666667%;\r\n    border-right: 1px solid #dadada;\r\n    border-bottom: 1px solid #dadada;\r\n}\r\n\r\n    .sidebar-search {\r\n    padding: 15px 19px 15px 20px;\r\n    border-bottom: 1px solid #dadada;\r\n}\r\n\r\n    .sidebar-search input {\r\n        outline-offset: -2px;\r\n        -webkit-appearance: none;\r\n        margin: 0;\r\n        display: block;\r\n        width: 100%;\r\n        padding: .5rem .75rem;\r\n        font-size: 1rem;\r\n        line-height: 1.25;\r\n        color: #495057;\r\n        background-color: #fff;\r\n        background-image: none;\r\n        background-clip: padding-box;\r\n        border: 1px solid rgba(0,0,0,.15);\r\n        border-radius: .25rem;\r\n        transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;\r\n    }\r\n\r\n    .sidebar-search:focus {\r\n        border-color: #1976d2;\r\n        box-shadow: 0 0 0 3px rgba(25,118,210,.15);\r\n    }\r\n\r\n    .sidebar .bootstrap-version {\r\n    padding: 15px 19px 10px 20px;\r\n    display: flex;\r\n    flex-flow: row wrap;\r\n    align-items: center;\r\n    border-bottom: 1px solid #dadada;\r\n}\r\n\r\n    .sidebar .bootstrap-version span {\r\n        margin-right: 4px;\r\n    }\r\n\r\n    .sidebar .bootstrap-version .btn {\r\n        cursor: pointer;\r\n        text-align: center;\r\n        white-space: nowrap;\r\n        vertical-align: middle;\r\n        -webkit-user-select: none;\r\n        -moz-user-select: none;\r\n        -ms-user-select: none;\r\n        user-select: none;\r\n        border: 1px solid transparent;\r\n        background-color: #dadadd;\r\n        padding: 6px 8px;\r\n        font-size: .8125rem;\r\n        line-height: 1.25;\r\n        transition: all .15s ease-in-out;\r\n    }\r\n\r\n    .sidebar .bootstrap-version .btn:first-of-type {\r\n            border-radius: .25rem 0 0 .25rem;\r\n        }\r\n\r\n    .sidebar .bootstrap-version .btn:last-of-type {\r\n            border-radius: 0 .25rem .25rem 0;\r\n        }\r\n\r\n    .sidebar .bootstrap-version .btn.selected {\r\n            background-color: #1976d2;\r\n            color: #fff;\r\n        }\r\n\r\n    .sidebar .bootstrap-version .btn:focus {\r\n            outline: 0;\r\n            box-shadow: none;\r\n        }\r\n\r\n    .sidebar-content {\r\n    padding: 15px 19px 15px 20px;\r\n    overflow: auto;\r\n    max-height: calc(100vh - 194px);\r\n}\r\n\r\n    .sidebar-list {\r\n    margin: 0;\r\n    padding: 0;\r\n    list-style: none;\r\n}\r\n\r\n    .sidebar-list li a {\r\n        display: block;\r\n        color: #666;\r\n        padding: 9px 0;\r\n        line-height: 1;\r\n        text-decoration: none;\r\n    }\r\n\r\n    .sidebar-list li.active a, .sidebar-list li:hover a {\r\n        color: #1976d2;\r\n        text-decoration: none;\r\n    }\r\n\r\n    .sidebar-title {\r\n    font-size: 1.125rem;\r\n    color: #333;\r\n    margin-top: 25px;\r\n}\r\n\r\n    .main-container {\r\n    flex: 0 0 66.666667%;\r\n    max-width: 66.666667%;\r\n}\r\n\r\n    .content {\r\n    /* padding: 30px 30px 120px; */\r\n}\r\n\r\n    .content h2[id] {\r\n        margin-top: 58px;\r\n    }\r\n\r\n    .content h2[id] .anchor-link, .content h3[id] .anchor-link {\r\n            display: none;\r\n        }\r\n\r\n    .content h2[id]:hover .anchor-link, .content h3[id]:hover .anchor-link {\r\n            display: inline-block;\r\n        }\r\n\r\n    .content ng-sample-box .section {\r\n        margin-bottom: 60px;\r\n    }\r\n\r\n    .content ng-sample-box .section.bd-example {\r\n            margin-bottom: 10px;\r\n        }\r\n\r\n    .content ng-sample-box .tab-content .prettyprint {\r\n        border-top: none;\r\n        border-top-left-radius: 0;\r\n        border-top-right-radius: 0;\r\n    }\r\n\r\n    .content .main-logo {\r\n        margin-top: 30px;\r\n        margin-bottom: 20px;\r\n    }\r\n\r\n    .api-doc-component > h3 {\r\n    margin-top: 20px;\r\n}\r\n\r\n    .api-doc-component .table td {\r\n    padding: 1rem;\r\n}\r\n\r\n    .api-doc-component .table td p {\r\n        margin-bottom: 0;\r\n    }\r\n\r\n    .api-doc-component .table-b {\r\n    overflow-x: auto;\r\n}\r\n\r\n    .panel-body {\r\n    padding: 15px;\r\n}\r\n\r\n    .add-nav {\r\n    flex: 0 0 16.666667%;\r\n    max-width: 16.666667%;\r\n    padding-right: 5px;\r\n    position: -webkit-sticky;\r\n    position: sticky;\r\n    top: 84px;\r\n    left: 83.33%;\r\n    right: 0;\r\n    max-height: calc(100vh - 104px);\r\n    overflow: auto;\r\n    direction: rtl;\r\n}\r\n\r\n    .add-nav ul {\r\n        margin: 0;\r\n        padding: 0 0 0 20px;\r\n        font-size: 14px;\r\n        list-style: none;\r\n        direction: ltr;\r\n    }\r\n\r\n    .add-nav ul li a {\r\n            word-break: break-all;\r\n            word-break: break-word;\r\n            display: block;\r\n            padding: 5px 0;\r\n            line-height: 1.2;\r\n            color: #666;\r\n        }\r\n\r\n    .add-nav ul li a:hover {\r\n                color: #1976d2;\r\n            }\r\n\r\n    .add-nav > ul {\r\n        border-left: 1px solid #dadada;\r\n    }\r\n\r\n    .app-footer {\r\n    border-top: 1px solid #dadada;\r\n    padding: 30px 30px 41px;\r\n}\r\n\r\n    .app-footer p {\r\n        line-height: 1.1;\r\n        margin: 0;\r\n        padding: 9px 0;\r\n        font-size: 1rem;\r\n        color: #878787;\r\n    }\r\n\r\n    .app-footer p a {\r\n            color: #262626;\r\n            text-decoration: none;\r\n        }\r\n\r\n    .app-footer p a:focus, .app-footer p a:hover {\r\n                text-decoration: underline;\r\n            }\r\n\r\n    .landing-footer .app-footer {\r\n    border-top: none;\r\n    height: 330px;\r\n    padding-top: 120px;\r\n    text-align: center;\r\n    background: #fff;\r\n}\r\n\r\n    .bd-example {\r\n    position: relative;\r\n}\r\n\r\n    .bd-example:after {\r\n        content: \"\";\r\n        display: table;\r\n        clear: both;\r\n    }\r\n\r\n    .tooltip.customClass.fade {\r\n    transition: opacity 1s;\r\n}\r\n\r\n    .tooltip.customClass .tooltip-inner {\r\n    color: #800;\r\n    background-color: #ff6;\r\n    box-shadow: 0 6px 12px rgba(0,0,0,.175);\r\n}\r\n\r\n    .tooltip.customClass .arrow:before, .tooltip.customClass .tooltip-arrow {\r\n    border-top-color: #ffff75;\r\n}\r\n\r\n    .popover.customClass, .popover.customClass .popover-content {\r\n    background: #94bada;\r\n}\r\n\r\n    .popover.customClass.top > .arrow:after {\r\n        border-top-color: #94bada;\r\n    }\r\n\r\n    .nav-item.customClass {\r\n    float: right;\r\n}\r\n\r\n    .nav-item.customClass:first-child {\r\n        margin-left: auto;\r\n    }\r\n\r\n    .nav-item.customClass a {\r\n        background-color: #50ff50;\r\n    }\r\n\r\n    .card.customClass, .card.customClass .card-header, .panel.customClass {\r\n    background-color: #5bc0de;\r\n    color: #fff;\r\n}\r\n\r\n    .panel.customClass .panel-body {\r\n        background-color: #337aa7;\r\n    }\r\n\r\n    .code-preview {\r\n    display: block;\r\n    padding: 10px;\r\n    margin: 0 0 10px;\r\n    font-size: 13px;\r\n    line-height: 1.4;\r\n    color: #333;\r\n    word-break: break-all;\r\n    word-wrap: break-word;\r\n    background-color: #f5f5f5;\r\n    border: 1px solid #ccc;\r\n    border-radius: 4px;\r\n}\r\n\r\n    @media (min-width:768px) {\r\n    .header {\r\n        position: fixed;\r\n        width: 100%;\r\n        top: 0;\r\n        z-index: 1090;\r\n    }\r\n\r\n    .header-dropdown {\r\n        z-index: 1090;\r\n    }\r\n\r\n    .main {\r\n        padding-top: 64px;\r\n    }\r\n\r\n    .modal-backdrop {\r\n        z-index: 2000;\r\n    }\r\n\r\n    .modal {\r\n        z-index: 2001;\r\n    }\r\n\r\n    .sidebar {\r\n        position: -webkit-sticky;\r\n        position: sticky;\r\n        top: 64px;\r\n        max-height: calc(100vh - 64px);\r\n    }\r\n\r\n    #mobile-main-menu {\r\n        display: none;\r\n    }\r\n}\r\n\r\n    @media (max-width:1199px) {\r\n    .add-nav {\r\n        display: none;\r\n    }\r\n\r\n    .main-container {\r\n        flex: 0 0 75%;\r\n        max-width: 75%;\r\n    }\r\n\r\n    .content h2[id] .anchor-link, .content h3[id] .anchor-link {\r\n        display: inline-block;\r\n    }\r\n\r\n    .advantages .holder {\r\n        padding-left: 5%;\r\n        padding-right: 5%;\r\n    }\r\n\r\n    .sidebar {\r\n        flex: 0 0 25%;\r\n        max-width: 25%;\r\n    }\r\n}\r\n\r\n    @media (max-width:991px) {\r\n    .advantages .img-holder, .advantages .txt-holder {\r\n        flex: 0 0 100%;\r\n        max-width: 100%;\r\n    }\r\n}\r\n\r\n    @media (max-width:767px) {\r\n    .header {\r\n        min-height: 54px;\r\n        padding: 15px;\r\n    }\r\n\r\n        .header .logo {\r\n            font-size: 1.25rem;\r\n        }\r\n\r\n    .advantages .holder {\r\n        padding: 30px 0;\r\n    }\r\n\r\n    .main-container, .sidebar {\r\n        flex: 0 0 100%;\r\n        max-width: 100%;\r\n    }\r\n\r\n    .sidebar {\r\n        border-right: none;\r\n        border-bottom: none;\r\n        position: relative;\r\n    }\r\n\r\n        .sidebar .sidebar-search {\r\n            display: flex;\r\n            flex-flow: row nowrap;\r\n            justify-content: space-between;\r\n        }\r\n\r\n    .isOpenMenu {\r\n        overflow: hidden;\r\n    }\r\n\r\n    #mobile-main-menu {\r\n        cursor: pointer;\r\n        border-color: transparent;\r\n        background: 0 0;\r\n        padding: 0;\r\n        margin-left: 15px;\r\n    }\r\n\r\n    .mobile-menu {\r\n        position: absolute;\r\n        left: 100%;\r\n        width: 100%;\r\n        height: calc(100vh - 123px);\r\n        background: #fff;\r\n        z-index: 2;\r\n        transition: left .4s;\r\n        padding-bottom: 10px;\r\n        border-bottom: 1px solid #dadada;\r\n    }\r\n\r\n    .isOpenMenu .mobile-menu {\r\n        top: 100%;\r\n        left: 0;\r\n    }\r\n\r\n    .main {\r\n        overflow: hidden;\r\n    }\r\n\r\n    .content {\r\n        padding: 20px 15px 90px;\r\n    }\r\n\r\n        .content h2[id] {\r\n            margin-top: 43px;\r\n        }\r\n\r\n    .api-doc-component h3 {\r\n        word-break: break-all;\r\n    }\r\n\r\n    .app-footer {\r\n        padding: 30px 15px;\r\n    }\r\n}\r\n\r\n    @media (max-width:575px) {\r\n    .entry .btn-block .btn {\r\n        display: block;\r\n        width: 300px;\r\n        margin: 0 auto;\r\n    }\r\n\r\n        .entry .btn-block .btn:first-child {\r\n            margin-bottom: 15px;\r\n        }\r\n\r\n    .advantages .img-holder, .advantages .txt-holder {\r\n        padding: 0;\r\n        margin: 0;\r\n        text-align: center;\r\n    }\r\n\r\n        .advantages .img-holder img {\r\n            margin: 0 auto 10px;\r\n        }\r\n\r\n    .advantages .holder .col-12 {\r\n        padding-top: 30px;\r\n        padding-bottom: 30px;\r\n    }\r\n\r\n        .advantages .holder .col-12:last-child {\r\n            padding-bottom: 0;\r\n        }\r\n}\r\n\r\n    @media (max-width:479px) {\r\n    .header .prev-docs {\r\n        display: none;\r\n    }\r\n}\r\n\r\n    .prettyprint {\r\n    white-space: pre-wrap;\r\n    background: #f5f6f7;\r\n    font-family: Monaco,\"Lucida Console\",monospace;\r\n    color: #5c707a;\r\n    width: auto;\r\n    overflow: auto;\r\n    position: relative;\r\n    padding: 16px 32px;\r\n    font-size: 13px;\r\n    line-height: 24px;\r\n    margin-bottom: 24px;\r\n    border-radius: 4px;\r\n}\r\n\r\n    .prettyprint.linenums, .prettyprint[class*=\" linenums:\"], .prettyprint[class^=\"linenums:\"] {\r\n        padding: 0;\r\n    }\r\n\r\n    .prettyprint.is-showcase {\r\n        border: 4px solid #0273d4;\r\n    }\r\n\r\n    .prettyprint code {\r\n        background: 0 0;\r\n        font-size: 13px;\r\n        padding: 0;\r\n    }\r\n\r\n    .prettyprint ol {\r\n        background: #f5f6f7;\r\n        padding: 16px 32px 16px 56px;\r\n        margin: 0;\r\n        overflow: auto;\r\n        font-size: 13px;\r\n    }\r\n\r\n    .prettyprint .tag, .prettyprint ol li {\r\n            color: #7a8b94;\r\n            background: 0 0;\r\n            margin-bottom: 5px;\r\n            line-height: normal;\r\n            list-style-type: decimal;\r\n            font-size: 12px;\r\n            white-space: pre;\r\n        }\r\n\r\n    .prettyprint ol li:last-child {\r\n                margin-bottom: 0;\r\n            }\r\n\r\n    .prettyprint ol li code {\r\n                background: 0 0;\r\n                font-size: 13px;\r\n            }\r\n\r\n    .prettyprint .blk, .prettyprint .pnk {\r\n        border-radius: 4px;\r\n        padding: 2px 4px;\r\n    }\r\n\r\n    .prettyprint .pnk {\r\n        background: #cfd8dc;\r\n        color: #5c707a;\r\n    }\r\n\r\n    .prettyprint .blk {\r\n        background: #e0e0e0;\r\n    }\r\n\r\n    .prettyprint .otl {\r\n        outline: rgba(169,169,169,.56) solid 1px;\r\n    }\r\n\r\n    .prettyprint .kwd, .prettyprint .tag, .prettyprint .typ {\r\n        color: #d43669;\r\n    }\r\n\r\n    .prettyprint .atv, .prettyprint .str {\r\n        color: #647f11;\r\n    }\r\n\r\n    .prettyprint .atn {\r\n        color: #31708f;\r\n    }\r\n\r\n    .prettyprint .com, .prettyprint .lit {\r\n        color: #647f11;\r\n    }\r\n\r\n    .prettyprint .pun {\r\n        color: #7a8b94;\r\n    }\r\n\r\n    .prettyprint .pln {\r\n        color: #5c707a;\r\n    }\r\n\r\n    .prettyprint .dec {\r\n        color: #647f11;\r\n    }\r\n\r\n    @media print {\r\n    .prettyprint {\r\n        background: #f5f6f7;\r\n        border: none;\r\n        box-shadow: none;\r\n    }\r\n\r\n        .prettyprint ol {\r\n            background: #f5f6f7;\r\n        }\r\n\r\n        .prettyprint .kwd, .prettyprint .tag, .prettyprint .typ {\r\n            color: #d43669;\r\n        }\r\n\r\n        .prettyprint .atv, .prettyprint .str {\r\n            color: #647f11;\r\n        }\r\n\r\n        .prettyprint .atn {\r\n            color: #31708f;\r\n        }\r\n\r\n        .prettyprint .com, .prettyprint .lit {\r\n            color: #647f11;\r\n        }\r\n\r\n        .prettyprint .pun {\r\n            color: #7a8b94;\r\n        }\r\n\r\n        .prettyprint .pln {\r\n            color: #5c707a;\r\n        }\r\n\r\n        .prettyprint .dec {\r\n            color: #647f11;\r\n        }\r\n}\r\n\r\n    h1 .prettyprint, h2 .prettyprint, h3 .prettyprint, h4 .prettyprint {\r\n    background: 0 0;\r\n    font-family: Monaco,\"Lucida Console\",monospace;\r\n    color: #253238;\r\n    overflow: hidden;\r\n    position: relative;\r\n    font-size: 15px;\r\n    font-weight: 600;\r\n    line-height: 24px;\r\n    margin: 0;\r\n    border: none;\r\n    box-shadow: none;\r\n    padding: 0;\r\n}\r\n\r\n    h1 .prettyprint code, h2 .prettyprint code, h3 .prettyprint code, h4 .prettyprint code {\r\n        background: 0 0;\r\n        font-size: 15px;\r\n        padding: 0;\r\n    }\r\n\r\n    h1 .prettyprint .kwd, h2 .prettyprint .kwd, h3 .prettyprint .kwd, h4 .prettyprint .kwd {\r\n        color: #253238;\r\n    }\r\n\r\n    h1 .prettyprint .tag, h1 .prettyprint .typ, h2 .prettyprint .tag, h2 .prettyprint .typ, h3 .prettyprint .tag, h3 .prettyprint .typ, h4 .prettyprint .tag, h4 .prettyprint .typ {\r\n        color: #b52e31;\r\n    }\r\n\r\n    h1 .prettyprint .atv, h1 .prettyprint .str, h2 .prettyprint .atv, h2 .prettyprint .str, h3 .prettyprint .atv, h3 .prettyprint .str, h4 .prettyprint .atv, h4 .prettyprint .str {\r\n        color: #9d8d00;\r\n    }\r\n\r\n    h1 .prettyprint .atn, h2 .prettyprint .atn, h3 .prettyprint .atn, h4 .prettyprint .atn {\r\n        color: #71a436;\r\n    }\r\n\r\n    h1 .prettyprint .com, h2 .prettyprint .com, h3 .prettyprint .com, h4 .prettyprint .com {\r\n        color: #afbec5;\r\n    }\r\n\r\n    h1 .prettyprint .lit, h2 .prettyprint .lit, h3 .prettyprint .lit, h4 .prettyprint .lit {\r\n        color: #9d8d00;\r\n    }\r\n\r\n    h1 .prettyprint .pln, h1 .prettyprint .pun, h2 .prettyprint .pln, h2 .prettyprint .pun, h3 .prettyprint .pln, h3 .prettyprint .pun, h4 .prettyprint .pln, h4 .prettyprint .pun {\r\n        color: #000;\r\n    }\r\n\r\n    h1 .prettyprint .dec, h2 .prettyprint .dec, h3 .prettyprint .dec, h4 .prettyprint .dec {\r\n        color: #8762c6;\r\n    }\r\n"

/***/ }),

/***/ "./src/app/user-control/accordion-tut/accordion-tut.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/user-control/accordion-tut/accordion-tut.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"main-container\">\r\n    <div class=\"content\">\r\n        <div class=\"content-header\">\r\n            <!---->\r\n            <h1>Accordion\r\n                <a rel=\"noopener\" target=\"_blank\" href=\"https://github.com/valor-software/ngx-bootstrap/tree/development/src/accordion\">\r\n                    <img alt=\"component on github\" src=\"https://valor-software.com/ngx-bootstrap/assets/images/link-doc.png\">\r\n                </a>\r\n            </h1>\r\n        </div>\r\n    </div>\r\n</section>\r\n<hr>\r\n<p>Displays collapsible content panels for presenting information in a limited amount of space</p>\r\n<p>The accordion component builds on top of the collapse directive to provide a list of items, with collapsible bodies that\r\n    are collapsed or expanded by clicking on the item's header.</p>\r\n<h3 id=\"parent-component-ts\">\r\n    <a href=\"#parent-component-ts\" class=\"headerlink\"></a>\r\n    Usage\r\n</h3>\r\n<figure class=\"highlight typescript\">\r\n    <table>\r\n        <tbody>\r\n            <tr>\r\n                <td class=\"code\">\r\n                    <img src=\"assets/images/accordion_tut.png\">\r\n                </td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n</figure>\r\n<h3 id=\"parent-component-ts\">\r\n    <a href=\"#parent-component-ts\" class=\"headerlink\"></a>\r\n    Example\r\n</h3>\r\n<p>Click headers to expand/collapse content that is broken into logical sections, much like tabs.</p>\r\n<accordion class=\"panel-group\" role=\"tablist\" style=\"display: block\" aria-multiselectable=\"false\">\r\n    <accordion-group class=\"panel\" heading=\"Static Header, initially expanded\" style=\"display: block\">\r\n        <div class=\"panel card panel-default\">\r\n            <div class=\"panel-heading card-header\" role=\"tab\">\r\n                <div class=\"panel-title\">\r\n                    <div class=\"accordion-toggle\" role=\"button\" aria-expanded=\"false\">\r\n                        <!---->\r\n                        <button class=\"btn btn-link\"> Static Header, initially expanded </button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"panel-collapse collapse\" role=\"tabpanel\" aria-expanded=\"false\" aria-hidden=\"true\" style=\"display: none;\">\r\n                <div class=\"panel-body card-block card-body\">\r\n                    This content is straight in the template.\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </accordion-group>\r\n    <accordion-group class=\"panel\" heading=\"Another group\" style=\"display: block\">\r\n        <div class=\"panel card panel-default\">\r\n            <div class=\"panel-heading card-header\" role=\"tab\">\r\n                <div class=\"panel-title\">\r\n                    <div class=\"accordion-toggle\" role=\"button\" aria-expanded=\"false\">\r\n                        <!---->\r\n                        <button class=\"btn btn-link\"> Another group </button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"panel-collapse collapse\" role=\"tabpanel\" aria-expanded=\"false\" aria-hidden=\"true\" style=\"display: none;\">\r\n                <div class=\"panel-body card-block card-body\">\r\n                    <p>Some content</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </accordion-group>\r\n    <accordion-group class=\"panel\" heading=\"Another group\" style=\"display: block\">\r\n        <div class=\"panel card panel-default\">\r\n            <div class=\"panel-heading card-header\" role=\"tab\">\r\n                <div class=\"panel-title\">\r\n                    <div class=\"accordion-toggle\" role=\"button\" aria-expanded=\"false\">\r\n                        <!---->\r\n                        <button class=\"btn btn-link\"> Another group </button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"panel-collapse collapse\" role=\"tabpanel\" aria-expanded=\"false\" aria-hidden=\"true\" style=\"display: none;\">\r\n                <div class=\"panel-body card-block card-body\">\r\n                    <p>Some content</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </accordion-group>\r\n    <accordion-group class=\"panel\" heading=\"Another group\" style=\"display: block\">\r\n        <div class=\"panel card panel-default\">\r\n            <div class=\"panel-heading card-header\" role=\"tab\">\r\n                <div class=\"panel-title\">\r\n                    <div class=\"accordion-toggle\" role=\"button\" aria-expanded=\"false\">\r\n                        <!---->\r\n                        <button class=\"btn btn-link\"> Another group </button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"panel-collapse collapse\" role=\"tabpanel\" aria-expanded=\"false\" aria-hidden=\"true\" style=\"display: none;\">\r\n                <div class=\"panel-body card-block card-body\">\r\n                    <p>Some content</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </accordion-group>\r\n</accordion>\r\n\r\n<div>\r\n    <tabset>\r\n        <tab heading=\"template\" class=\"tab-pane active\">\r\n            <pre class=\"prettyprint linenums lang-html prettyprinted\" style=\"\"><ol class=\"linenums\"><li class=\"L0\"><span class=\"tag\">&lt;accordion&gt;</span></li><li class=\"L1\"><span class=\"pln\">  </span><span class=\"tag\">&lt;accordion-group</span><span class=\"pln\"> </span><span class=\"atn\">heading</span><span class=\"pun\">=</span><span class=\"atv\">\"Static Header, initially expanded\"</span><span class=\"tag\">&gt;</span></li><li class=\"L2\"><span class=\"pln\">    This content is straight in the template.</span></li><li class=\"L3\"><span class=\"pln\">  </span><span class=\"tag\">&lt;/accordion-group&gt;</span></li><li class=\"L4\"><span class=\"pln\">  </span><span class=\"tag\">&lt;accordion-group</span><span class=\"pln\"> </span><span class=\"atn\">heading</span><span class=\"pun\">=</span><span class=\"atv\">\"Another group\"</span><span class=\"tag\">&gt;</span></li><li class=\"L5\"><span class=\"pln\">    </span><span class=\"tag\">&lt;p&gt;</span><span class=\"pln\">Some content</span><span class=\"tag\">&lt;/p&gt;</span></li><li class=\"L6\"><span class=\"pln\">  </span><span class=\"tag\">&lt;/accordion-group&gt;</span></li><li class=\"L7\"><span class=\"pln\">  </span><span class=\"tag\">&lt;accordion-group</span><span class=\"pln\"> </span><span class=\"atn\">heading</span><span class=\"pun\">=</span><span class=\"atv\">\"Another group\"</span><span class=\"tag\">&gt;</span></li><li class=\"L8\"><span class=\"pln\">    </span><span class=\"tag\">&lt;p&gt;</span><span class=\"pln\">Some content</span><span class=\"tag\">&lt;/p&gt;</span></li><li class=\"L9\"><span class=\"pln\">  </span><span class=\"tag\">&lt;/accordion-group&gt;</span></li><li class=\"L0\"><span class=\"pln\">  </span><span class=\"tag\">&lt;accordion-group</span><span class=\"pln\"> </span><span class=\"atn\">heading</span><span class=\"pun\">=</span><span class=\"atv\">\"Another group\"</span><span class=\"tag\">&gt;</span></li><li class=\"L1\"><span class=\"pln\">    </span><span class=\"tag\">&lt;p&gt;</span><span class=\"pln\">Some content</span><span class=\"tag\">&lt;/p&gt;</span></li><li class=\"L2\"><span class=\"pln\">  </span><span class=\"tag\">&lt;/accordion-group&gt;</span></li><li class=\"L3\"><span class=\"tag\">&lt;/accordion&gt;</span></li></ol></pre>\r\n        </tab>\r\n        <tab heading=\"component\" class=\"tab-pane\">\r\n            <pre class=\"prettyprint linenums lang-js prettyprinted\" style=\"\"><ol class=\"linenums\"><li class=\"L0\"><span class=\"kwd\">import</span><span class=\"pln\"> </span><span class=\"pun\">{{'{'}}</span><span class=\"pln\"> </span><span class=\"typ\">Component</span><span class=\"pln\"> </span><span class=\"pun\">}</span><span class=\"pln\"> from </span><span class=\"str\">'@angular/core'</span><span class=\"pun\">;</span></li><li class=\"L1\"><span class=\"pln\">&nbsp;</span></li><li class=\"L2\"><span class=\"lit\">@Component</span><span class=\"pun\">({{'{'}}</span></li><li class=\"L3\"><span class=\"pln\">  selector</span><span class=\"pun\">:</span><span class=\"pln\"> </span><span class=\"str\">'demo-accordion-basic'</span><span class=\"pun\">,</span></li><li class=\"L4\"><span class=\"pln\">  templateUrl</span><span class=\"pun\">:</span><span class=\"pln\"> </span><span class=\"str\">'./basic.html'</span></li><li class=\"L5\"><span class=\"pun\">})</span></li><li class=\"L6\"><span class=\"kwd\">export</span><span class=\"pln\"> </span><span class=\"kwd\">class</span><span class=\"pln\"> </span><span class=\"typ\">DemoAccordionBasicComponent</span><span class=\"pln\"> </span><span class=\"pun\">{{'{'}}{{'}'}}</span></li></ol></pre>\r\n        </tab>\r\n    </tabset>\r\n</div>"

/***/ }),

/***/ "./src/app/user-control/accordion-tut/accordion-tut.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/user-control/accordion-tut/accordion-tut.component.ts ***!
  \***********************************************************************/
/*! exports provided: AccordionTutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionTutComponent", function() { return AccordionTutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AccordionTutComponent = /** @class */ (function () {
    function AccordionTutComponent() {
    }
    AccordionTutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'accordion-tut',
            template: __webpack_require__(/*! ./accordion-tut.component.html */ "./src/app/user-control/accordion-tut/accordion-tut.component.html"),
            styles: [__webpack_require__(/*! ./accordion-tut.component.css */ "./src/app/user-control/accordion-tut/accordion-tut.component.css")]
        })
    ], AccordionTutComponent);
    return AccordionTutComponent;
}());



/***/ }),

/***/ "./src/app/user-control/alert-tut/alert.component.css":
/*!************************************************************!*\
  !*** ./src/app/user-control/alert-tut/alert.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bs-datepicker {\r\n    display: flex;\r\n    align-items: stretch;\r\n    flex-flow: row wrap;\r\n    background: #fff;\r\n    box-shadow: 0 0 10px 0 #aaa;\r\n    position: relative;\r\n    z-index: 1;\r\n}\r\n\r\n    .bs-datepicker:after {\r\n        clear: both;\r\n        content: '';\r\n        display: block;\r\n    }\r\n\r\n    .bs-datepicker bs-day-picker {\r\n        float: left;\r\n    }\r\n\r\n    .bs-datepicker button:active, .bs-datepicker button:focus, .bs-datepicker button:hover, .bs-datepicker input:active, .bs-datepicker input:focus, .bs-datepicker input:hover, .bs-datepicker-btns button:active, .bs-datepicker-btns button:focus, .bs-datepicker-btns button:hover, .bs-datepicker-predefined-btns button:active, .bs-datepicker-predefined-btns button:focus {\r\n        outline: 0;\r\n    }\r\n\r\n    .bs-datepicker-head {\r\n    min-width: 270px;\r\n    height: 50px;\r\n    padding: 10px;\r\n    border-radius: 3px 3px 0 0;\r\n    text-align: justify;\r\n}\r\n\r\n    .bs-datepicker-head:after {\r\n        content: \"\";\r\n        display: inline-block;\r\n        vertical-align: top;\r\n        width: 100%;\r\n    }\r\n\r\n    .bs-datepicker-head button {\r\n        display: inline-block;\r\n        vertical-align: top;\r\n        padding: 0;\r\n        height: 30px;\r\n        line-height: 30px;\r\n        border: 0;\r\n        background: 0 0;\r\n        text-align: center;\r\n        cursor: pointer;\r\n        color: #fff;\r\n        transition: .3s;\r\n    }\r\n\r\n    .bs-datepicker-head button[disabled], .bs-datepicker-head button[disabled]:active, .bs-datepicker-head button[disabled]:hover {\r\n            background: rgba(221,221,221,.3);\r\n            color: #f5f5f5;\r\n            cursor: not-allowed;\r\n        }\r\n\r\n    .bs-datepicker-head button.next, .bs-datepicker-head button.previous {\r\n            border-radius: 50%;\r\n            width: 30px;\r\n            height: 30px;\r\n        }\r\n\r\n    .bs-datepicker-head button.next span, .bs-datepicker-head button.previous span {\r\n                font-size: 28px;\r\n                line-height: 1;\r\n                display: inline-block;\r\n                position: relative;\r\n                height: 100%;\r\n                width: 100%;\r\n                border-radius: 50%;\r\n            }\r\n\r\n    .bs-datepicker-head button.current {\r\n            border-radius: 15px;\r\n            max-width: 155px;\r\n            padding: 0 13px;\r\n        }\r\n\r\n    .bs-datepicker-head button:hover {\r\n            background-color: rgba(0,0,0,.1);\r\n        }\r\n\r\n    .bs-datepicker-head button:active {\r\n            background-color: rgba(0,0,0,.2);\r\n        }\r\n\r\n    .bs-datepicker-body {\r\n    padding: 10px;\r\n    border-radius: 0 0 3px 3px;\r\n    min-height: 232px;\r\n    min-width: 278px;\r\n    border: 1px solid #e9edf0;\r\n}\r\n\r\n    .bs-datepicker-body .days.weeks {\r\n        position: relative;\r\n        z-index: 1;\r\n    }\r\n\r\n    .bs-datepicker-body table {\r\n        width: 100%;\r\n        border-collapse: separate;\r\n        border-spacing: 0;\r\n    }\r\n\r\n    .bs-datepicker-body table th {\r\n            font-size: 13px;\r\n            color: #9aaec1;\r\n            font-weight: 400;\r\n            text-align: center;\r\n        }\r\n\r\n    .bs-datepicker-body table td {\r\n            color: #54708b;\r\n            text-align: center;\r\n            position: relative;\r\n            padding: 0;\r\n        }\r\n\r\n    .bs-datepicker-body table td span {\r\n                display: block;\r\n                margin: 0 auto;\r\n                font-size: 13px;\r\n                border-radius: 50%;\r\n                position: relative;\r\n                -moz-user-select: none;\r\n                -webkit-user-select: none;\r\n                -ms-user-select: none;\r\n            }\r\n\r\n    .bs-datepicker-body table td:not(.disabled) span {\r\n                cursor: pointer;\r\n            }\r\n\r\n    .bs-datepicker-body table td span.is-highlighted:not(.disabled):not(.selected), .bs-datepicker-body table td.is-highlighted:not(.disabled):not(.selected) span {\r\n                background-color: #e9edf0;\r\n                transition: 0s;\r\n            }\r\n\r\n    .bs-datepicker-body table td span.disabled, .bs-datepicker-body table td.disabled span {\r\n                color: #9aaec1;\r\n            }\r\n\r\n    .bs-datepicker-body table td span.selected, .bs-datepicker-body table td.selected span {\r\n                color: #fff;\r\n            }\r\n\r\n    .bs-datepicker-body table td.active {\r\n                position: relative;\r\n            }\r\n\r\n    .bs-datepicker-body table td.active.select-start:before {\r\n                    left: 35%;\r\n                }\r\n\r\n    .bs-datepicker-body table td.active.select-end:before {\r\n                    left: -85%;\r\n                }\r\n\r\n    .bs-datepicker-body table td span.active.select-end:after, .bs-datepicker-body table td span.active.select-start:after, .bs-datepicker-body table td.active.select-end span:after, .bs-datepicker-body table td.active.select-start span:after {\r\n                    content: \"\";\r\n                    display: block;\r\n                    position: absolute;\r\n                    z-index: -1;\r\n                    width: 100%;\r\n                    height: 100%;\r\n                    transition: .3s;\r\n                    top: 0;\r\n                    border-radius: 50%;\r\n                }\r\n\r\n    .bs-datepicker-body table td span:before, .bs-datepicker-body table td:before {\r\n                content: \"\";\r\n                display: block;\r\n                position: absolute;\r\n                z-index: -1;\r\n                top: 6px;\r\n                bottom: 6px;\r\n                left: -2px;\r\n                right: -2px;\r\n                box-sizing: content-box;\r\n                background: 0 0;\r\n            }\r\n\r\n    .bs-datepicker-body table td.active.select-start + td.active:before {\r\n                left: -20%;\r\n            }\r\n\r\n    .bs-datepicker-body table td:last-child.active:before {\r\n                border-radius: 0 3px 3px 0;\r\n                width: 125%;\r\n                left: -25%;\r\n            }\r\n\r\n    .bs-datepicker-body table td span[class*=select-], .bs-datepicker-body table td[class*=select-] span {\r\n                border-radius: 50%;\r\n                color: #fff;\r\n            }\r\n\r\n    .bs-datepicker-body table.days span.active:not(.select-start):before, .bs-datepicker-body table.days span.in-range:not(.select-start):before, .bs-datepicker-body table.days td.active:not(.select-start):before, .bs-datepicker-body table.days td.in-range:not(.select-start):before {\r\n            background: #e9edf0;\r\n        }\r\n\r\n    .bs-datepicker-body table.days span {\r\n            width: 32px;\r\n            height: 32px;\r\n            line-height: 32px;\r\n        }\r\n\r\n    .bs-datepicker-body table.days span.select-start {\r\n                z-index: 2;\r\n            }\r\n\r\n    .bs-datepicker-body table.days span.in-range.select-end:before, .bs-datepicker-body table.days span.is-highlighted.in-range:before {\r\n                background: 0 0;\r\n                right: 0;\r\n                left: 0;\r\n            }\r\n\r\n    .bs-datepicker-body table.days td.active + td.is-highlighted:before, .bs-datepicker-body table.days td.active + td.select-end:before, .bs-datepicker-body table.days td.in-range + td.is-highlighted:before, .bs-datepicker-body table.days td.in-range + td.select-end:before, .bs-datepicker-body table.days td.select-start + td.is-highlighted:before, .bs-datepicker-body table.days td.select-start + td.select-end:before {\r\n            background: #e9edf0;\r\n            width: 100%;\r\n        }\r\n\r\n    .bs-datepicker-body table.weeks tr td:nth-child(2).active:before {\r\n            border-radius: 3px 0 0 3px;\r\n            left: 0;\r\n            width: 100%;\r\n        }\r\n\r\n    .bs-datepicker-body table:not(.weeks) tr td:first-child:before {\r\n            border-radius: 3px 0 0 3px;\r\n        }\r\n\r\n    .bs-datepicker-body table.years td span {\r\n            width: 46px;\r\n            height: 46px;\r\n            line-height: 45px;\r\n            margin: 0 auto;\r\n        }\r\n\r\n    .bs-datepicker-body table.years tr:not(:last-child) td span {\r\n            margin-bottom: 8px;\r\n        }\r\n\r\n    .bs-datepicker-body table.months td {\r\n            height: 52px;\r\n        }\r\n\r\n    .bs-datepicker-body table.months td span {\r\n                padding: 6px;\r\n                border-radius: 15px;\r\n            }\r\n\r\n    .bs-datepicker .current-timedate {\r\n    color: #54708b;\r\n    font-size: 15px;\r\n    text-align: center;\r\n    height: 30px;\r\n    line-height: 30px;\r\n    border-radius: 20px;\r\n    border: 1px solid #e9edf0;\r\n    margin-bottom: 10px;\r\n    cursor: pointer;\r\n    text-transform: uppercase;\r\n    -moz-user-select: none;\r\n    -webkit-user-select: none;\r\n    -ms-user-select: none;\r\n}\r\n\r\n    .bs-datepicker .current-timedate span:not(:empty):before {\r\n        content: \"\";\r\n        width: 15px;\r\n        height: 16px;\r\n        display: inline-block;\r\n        margin-right: 4px;\r\n        vertical-align: text-bottom;\r\n        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAQCAYAAADJViUEAAABMklEQVQoU9VTwW3CQBCcOUgBtEBKSAukAnBKME+wFCAlYIhk8sQlxFABtJAScAsuAPBEewYcxCP8ouxrPDsza61uiVN1o6RNHD4htSCmq49RfO71BvMJqBBkITRf1kmUW49nQRC9h1I5AZlBClaL8aP1fKgOOxCx8aSLs+Q19eZuNO8QmPqJRtDFguy7OAcDbJPs+/BKVPDIPrvD2ZJgWAmVe7O0rI0Vqs1seyWUXpuJoppYCa5L+U++NpNPkr5OE2oMdARsb3gykJT5ydZcL8Z9Ww60nxg2LhjON9li9OwXZzo+xLbp3nC2s9CL2RrueGyVrgwNm8HpsCzZ9EEW6kqXlo1GQe03FzP/7W8Hl0dBtu7Bf7zt6mIwvX1RvzDCm7+q3mAW0Dl/GPdUCeXrZLT9BrDrGkm4qlPvAAAAAElFTkSuQmCC);\r\n    }\r\n\r\n    .bs-datepicker-multiple {\r\n    display: inline-block;\r\n    border-radius: 4px 0 0 4px;\r\n}\r\n\r\n    .bs-datepicker-multiple + .bs-datepicker-multiple {\r\n        margin-left: 10px;\r\n    }\r\n\r\n    .bs-datepicker-multiple .bs-datepicker {\r\n        box-shadow: none;\r\n        position: relative;\r\n    }\r\n\r\n    .bs-datepicker-multiple .bs-datepicker:not(:last-child) {\r\n            padding-right: 10px;\r\n        }\r\n\r\n    .bs-datepicker-multiple .bs-datepicker + .bs-datepicker:after {\r\n            content: \"\";\r\n            display: block;\r\n            width: 14px;\r\n            height: 10px;\r\n            background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAKCAYAAABrGwT5AAAA1ElEQVQoU42RsQrCUAxF77VuDu7O4oMWW//BURBBpZvgKk4uIrjoqKOTf+DopIO4uYggtFTfw3+pkQqCW1/G5J7kJiFy4m5MxUlxAzgIPHX+lzMPzupRYlYgxiR7vqsOP8YKzsTx0yxFMCUZ+q7aZzlr+OvgoWcAFyAHgat2jLWu48252DdqAihDJGSSJNUUxYmQjs3+hPQBlAh2rG2LCOPnaw3IiGDX99TRCs7ASJsNhUOA7d/LcuHvRG22FIZvsNXw1MX6VZExCilOQKEfeLXr/10+aC9Ho7arh7oAAAAASUVORK5CYII=);\r\n            position: absolute;\r\n            top: 25px;\r\n            left: -8px;\r\n        }\r\n\r\n    .bs-datepicker-multiple .bs-datepicker .left {\r\n            float: left;\r\n        }\r\n\r\n    .bs-datepicker-multiple .bs-datepicker .right {\r\n            float: right;\r\n        }\r\n\r\n    .bs-datepicker-container {\r\n    padding: 15px;\r\n}\r\n\r\n    .bs-datepicker-custom-range {\r\n    padding: 15px;\r\n    background: #eee;\r\n}\r\n\r\n    .bs-datepicker-predefined-btns button {\r\n    width: 100%;\r\n    display: block;\r\n    height: 30px;\r\n    background-color: #9aaec1;\r\n    border-radius: 4px;\r\n    color: #fff;\r\n    border: 0;\r\n    margin-bottom: 10px;\r\n    padding: 0 18px;\r\n    text-align: left;\r\n    transition: .3s;\r\n}\r\n\r\n    .bs-datepicker-predefined-btns button:active, .bs-datepicker-predefined-btns button:hover {\r\n        background-color: #54708b;\r\n    }\r\n\r\n    .bs-datepicker .is-other-month {\r\n    color: rgba(0,0,0,.25);\r\n}\r\n\r\n    .bs-datepicker-buttons {\r\n    display: flex;\r\n    flex-flow: row wrap;\r\n    justify-content: flex-end;\r\n    padding-top: 10px;\r\n    border-top: 1px solid #e9edf0;\r\n}\r\n\r\n    .bs-datepicker-buttons .btn-default {\r\n        margin-left: 10px;\r\n    }\r\n\r\n    .bs-timepicker-container {\r\n    padding: 10px 0;\r\n}\r\n\r\n    .bs-timepicker-label {\r\n    color: #54708b;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n    .bs-timepicker-controls {\r\n    display: inline-block;\r\n    vertical-align: top;\r\n    margin-right: 10px;\r\n}\r\n\r\n    .bs-timepicker-controls button {\r\n        width: 20px;\r\n        height: 20px;\r\n        border-radius: 50%;\r\n        border: 0;\r\n        background-color: #e9edf0;\r\n        color: #54708b;\r\n        font-size: 16px;\r\n        font-weight: 700;\r\n        vertical-align: middle;\r\n        line-height: 0;\r\n        padding: 0;\r\n        transition: .3s;\r\n    }\r\n\r\n    .bs-timepicker-controls button:hover {\r\n            background-color: #d5dadd;\r\n        }\r\n\r\n    .bs-timepicker-controls input {\r\n        width: 35px;\r\n        height: 25px;\r\n        border-radius: 13px;\r\n        text-align: center;\r\n        border: 1px solid #e9edf0;\r\n    }\r\n\r\n    .bs-timepicker .switch-time-format {\r\n    text-transform: uppercase;\r\n    min-width: 54px;\r\n    height: 25px;\r\n    border-radius: 20px;\r\n    border: 1px solid #e9edf0;\r\n    background: #fff;\r\n    color: #54708b;\r\n    font-size: 13px;\r\n}\r\n\r\n    .bs-timepicker .switch-time-format img {\r\n        vertical-align: initial;\r\n        margin-left: 4px;\r\n    }\r\n\r\n    bs-datepicker-container, bs-daterangepicker-container {\r\n    z-index: 1080;\r\n}\r\n\r\n    @media (max-width:768px) {\r\n    .bs-datepicker-multiple {\r\n        display: flex;\r\n    }\r\n\r\n        .bs-datepicker-multiple + .bs-datepicker-multiple {\r\n            margin-top: 10px;\r\n            margin-left: 0;\r\n        }\r\n}\r\n\r\n    .theme-default .bs-datepicker-body table td span.selected, .theme-default .bs-datepicker-body table td span[class*=select-]:after, .theme-default .bs-datepicker-body table td.selected span, .theme-default .bs-datepicker-body table td[class*=select-] span:after, .theme-default .bs-datepicker-head {\r\n    background-color: #777;\r\n}\r\n\r\n    .theme-default .bs-datepicker-body table td.week span {\r\n    color: #777;\r\n}\r\n\r\n    .theme-green .bs-datepicker-body table td span.selected, .theme-green .bs-datepicker-body table td span[class*=select-]:after, .theme-green .bs-datepicker-body table td.selected span, .theme-green .bs-datepicker-body table td[class*=select-] span:after, .theme-green .bs-datepicker-head {\r\n    background-color: #5cb85c;\r\n}\r\n\r\n    .theme-green .bs-datepicker-body table td.week span {\r\n    color: #5cb85c;\r\n}\r\n\r\n    .theme-blue .bs-datepicker-body table td span.selected, .theme-blue .bs-datepicker-body table td span[class*=select-]:after, .theme-blue .bs-datepicker-body table td.selected span, .theme-blue .bs-datepicker-body table td[class*=select-] span:after, .theme-blue .bs-datepicker-head {\r\n    background-color: #5bc0de;\r\n}\r\n\r\n    .theme-blue .bs-datepicker-body table td.week span {\r\n    color: #5bc0de;\r\n}\r\n\r\n    .theme-dark-blue .bs-datepicker-body table td span.selected, .theme-dark-blue .bs-datepicker-body table td span[class*=select-]:after, .theme-dark-blue .bs-datepicker-body table td.selected span, .theme-dark-blue .bs-datepicker-body table td[class*=select-] span:after, .theme-dark-blue .bs-datepicker-head {\r\n    background-color: #337ab7;\r\n}\r\n\r\n    .theme-dark-blue .bs-datepicker-body table td.week span {\r\n    color: #337ab7;\r\n}\r\n\r\n    .theme-red .bs-datepicker-body table td span.selected, .theme-red .bs-datepicker-body table td span[class*=select-]:after, .theme-red .bs-datepicker-body table td.selected span, .theme-red .bs-datepicker-body table td[class*=select-] span:after, .theme-red .bs-datepicker-head {\r\n    background-color: #d9534f;\r\n}\r\n\r\n    .theme-red .bs-datepicker-body table td.week span {\r\n    color: #d9534f;\r\n}\r\n\r\n    .theme-orange .bs-datepicker-body table td span.selected, .theme-orange .bs-datepicker-body table td span[class*=select-]:after, .theme-orange .bs-datepicker-body table td.selected span, .theme-orange .bs-datepicker-body table td[class*=select-] span:after, .theme-orange .bs-datepicker-head {\r\n    background-color: #f0ad4e;\r\n}\r\n\r\n    .theme-orange .bs-datepicker-body table td.week span {\r\n    color: #f0ad4e;\r\n}\r\n\r\n    html {\r\n    box-sizing: border-box;\r\n    font-family: sans-serif;\r\n    line-height: 1.15;\r\n    -webkit-text-size-adjust: 100%;\r\n    -ms-text-size-adjust: 100%;\r\n    -ms-overflow-style: scrollbar;\r\n    -webkit-tap-highlight-color: transparent;\r\n}\r\n\r\n    *, ::after, ::before {\r\n    box-sizing: inherit;\r\n}\r\n\r\n    @-ms-viewport {\r\n    width: device-width;\r\n}\r\n\r\n    article, aside, dialog, figcaption, figure, footer, header, hgroup, main, nav, section {\r\n    display: block;\r\n}\r\n\r\n    body {\r\n    margin: 0;\r\n    font-family: -apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif;\r\n    font-size: 1rem;\r\n    font-weight: 400;\r\n    line-height: 1.5;\r\n    color: #212529;\r\n    background-color: #fff;\r\n    min-width: 320px;\r\n}\r\n\r\n    [tabindex=\"-1\"]:focus {\r\n    outline: 0 !important;\r\n}\r\n\r\n    hr {\r\n    box-sizing: content-box;\r\n    height: 0;\r\n    overflow: visible;\r\n}\r\n\r\n    h1, h2, h3, h4, h5, h6 {\r\n    margin-top: 0;\r\n    margin-bottom: .5rem;\r\n}\r\n\r\n    dl, ol, p, ul {\r\n    margin-top: 0;\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n    abbr[data-original-title], abbr[title] {\r\n    text-decoration: underline;\r\n    -webkit-text-decoration: underline dotted;\r\n    text-decoration: underline dotted;\r\n    cursor: help;\r\n    border-bottom: 0;\r\n}\r\n\r\n    address {\r\n    margin-bottom: 1rem;\r\n    font-style: normal;\r\n    line-height: inherit;\r\n}\r\n\r\n    ol ol, ol ul, ul ol, ul ul {\r\n    margin-bottom: 0;\r\n}\r\n\r\n    dt {\r\n    font-weight: 700;\r\n}\r\n\r\n    dd {\r\n    margin-bottom: .5rem;\r\n    margin-left: 0;\r\n}\r\n\r\n    blockquote, figure {\r\n    margin: 0 0 1rem;\r\n}\r\n\r\n    dfn {\r\n    font-style: italic;\r\n}\r\n\r\n    b, strong {\r\n    font-weight: bolder;\r\n}\r\n\r\n    small {\r\n    font-size: 80%;\r\n}\r\n\r\n    sub, sup {\r\n    position: relative;\r\n    font-size: 75%;\r\n    line-height: 0;\r\n    vertical-align: baseline;\r\n}\r\n\r\n    sub {\r\n    bottom: -.25em;\r\n}\r\n\r\n    sup {\r\n    top: -.5em;\r\n}\r\n\r\n    a {\r\n    color: #007bff;\r\n    text-decoration: none;\r\n    background-color: transparent;\r\n    -webkit-text-decoration-skip: objects;\r\n}\r\n\r\n    a:hover {\r\n        color: #0056b3;\r\n        text-decoration: none;\r\n    }\r\n\r\n    a:not([href]):not([tabindex]), a:not([href]):not([tabindex]):focus, a:not([href]):not([tabindex]):hover {\r\n        text-decoration: none;\r\n    }\r\n\r\n    a:not([href]):not([tabindex]):focus, h1:focus, h2:focus, h3:focus, h4:focus {\r\n            outline: 0;\r\n        }\r\n\r\n    code, kbd, pre, samp {\r\n    font-family: monospace,monospace;\r\n    font-size: 1em;\r\n}\r\n\r\n    pre {\r\n    margin-top: 0;\r\n    margin-bottom: 1rem;\r\n    overflow: auto;\r\n}\r\n\r\n    img {\r\n    vertical-align: middle;\r\n    border-style: none;\r\n}\r\n\r\n    svg:not(:root) {\r\n    overflow: hidden;\r\n}\r\n\r\n    [role=button], a, area, button, input, label, select, summary, textarea {\r\n    touch-action: manipulation;\r\n}\r\n\r\n    table {\r\n    border-collapse: collapse;\r\n}\r\n\r\n    caption {\r\n    padding-top: .75rem;\r\n    padding-bottom: .75rem;\r\n    color: #868e96;\r\n    text-align: left;\r\n    caption-side: bottom;\r\n}\r\n\r\n    th {\r\n    text-align: left;\r\n}\r\n\r\n    label {\r\n    display: inline-block;\r\n    margin-bottom: .5rem;\r\n}\r\n\r\n    button:focus {\r\n    outline: dotted 1px;\r\n    outline: -webkit-focus-ring-color auto 5px;\r\n}\r\n\r\n    button, input, optgroup, select, textarea {\r\n    margin: 0;\r\n    font-family: inherit;\r\n    font-size: inherit;\r\n    line-height: inherit;\r\n}\r\n\r\n    button, input {\r\n    overflow: visible;\r\n}\r\n\r\n    button, select {\r\n    text-transform: none;\r\n}\r\n\r\n    [type=reset], [type=submit], button, html [type=button] {\r\n    -webkit-appearance: button;\r\n}\r\n\r\n    [type=button]::-moz-focus-inner, [type=reset]::-moz-focus-inner, [type=submit]::-moz-focus-inner, button::-moz-focus-inner {\r\n        padding: 0;\r\n        border-style: none;\r\n    }\r\n\r\n    input[type=checkbox], input[type=radio] {\r\n    box-sizing: border-box;\r\n    padding: 0;\r\n}\r\n\r\n    input[type=date], input[type=datetime-local], input[type=month], input[type=time] {\r\n    -webkit-appearance: listbox;\r\n}\r\n\r\n    textarea {\r\n    overflow: auto;\r\n    resize: vertical;\r\n}\r\n\r\n    fieldset {\r\n    min-width: 0;\r\n    padding: 0;\r\n    margin: 0;\r\n    border: 0;\r\n}\r\n\r\n    legend {\r\n    display: block;\r\n    width: 100%;\r\n    max-width: 100%;\r\n    padding: 0;\r\n    margin-bottom: .5rem;\r\n    font-size: 1.5rem;\r\n    line-height: inherit;\r\n    color: inherit;\r\n    white-space: normal;\r\n}\r\n\r\n    progress {\r\n    vertical-align: baseline;\r\n}\r\n\r\n    [type=number]::-webkit-inner-spin-button, [type=number]::-webkit-outer-spin-button {\r\n    height: auto;\r\n}\r\n\r\n    [type=search] {\r\n    outline-offset: -2px;\r\n    -webkit-appearance: none;\r\n}\r\n\r\n    [type=search]::-webkit-search-cancel-button, [type=search]::-webkit-search-decoration {\r\n        -webkit-appearance: none;\r\n    }\r\n\r\n    ::-webkit-file-upload-button {\r\n    font: inherit;\r\n    -webkit-appearance: button;\r\n}\r\n\r\n    output {\r\n    display: inline-block;\r\n}\r\n\r\n    summary {\r\n    display: list-item;\r\n}\r\n\r\n    template {\r\n    display: none;\r\n}\r\n\r\n    .hidden, [hidden] {\r\n    display: none !important;\r\n}\r\n\r\n    html {\r\n    touch-action: manipulation;\r\n    -webkit-touch-callout: none;\r\n    -webkit-font-smoothing: antialiased;\r\n    -moz-osx-font-smoothing: grayscale;\r\n    font-size: inherit;\r\n}\r\n\r\n    code {\r\n    word-break: normal;\r\n}\r\n\r\n    .header {\r\n    min-height: 64px;\r\n    padding: 12px 20px;\r\n    background-color: #1976d2;\r\n    display: flex;\r\n    flex-flow: row nowrap;\r\n}\r\n\r\n    .header .logo {\r\n        color: #fff;\r\n        margin-bottom: 0;\r\n        font-size: 1.375rem;\r\n        cursor: pointer;\r\n        transition: all .3s;\r\n    }\r\n\r\n    .header .logo img {\r\n            display: block;\r\n        }\r\n\r\n    .header .logo:hover {\r\n            opacity: .8;\r\n        }\r\n\r\n    .header .logo:active {\r\n            -webkit-transform: scale(.95);\r\n            transform: scale(.95);\r\n        }\r\n\r\n    .header-info {\r\n    margin-left: auto;\r\n    display: flex;\r\n    flex-flow: row nowrap;\r\n    align-items: center;\r\n}\r\n\r\n    .header-list {\r\n    margin: 0;\r\n    padding: 0;\r\n    list-style: none;\r\n    display: flex;\r\n    flex-flow: row nowrap;\r\n}\r\n\r\n    .header-list li {\r\n        width: 21px;\r\n        height: 21px;\r\n        margin-left: 16px;\r\n    }\r\n\r\n    .header-list li a {\r\n            display: block;\r\n            opacity: .7;\r\n        }\r\n\r\n    .header-list li a:hover {\r\n                opacity: 1;\r\n            }\r\n\r\n    .header-list li img {\r\n            width: 100%;\r\n            height: 100%;\r\n            display: block;\r\n        }\r\n\r\n    .header .prev-docs {\r\n    line-height: 21px;\r\n    color: #fff;\r\n}\r\n\r\n    .header .prev-docs .dropdown-toggle {\r\n        opacity: .7;\r\n        cursor: pointer;\r\n    }\r\n\r\n    .header .prev-docs .dropdown-toggle:hover {\r\n            opacity: 1;\r\n        }\r\n\r\n    .main {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n}\r\n\r\n    .entry {\r\n    padding: 75px 0;\r\n}\r\n\r\n    .entry .slogan {\r\n        padding: 30px 0 20px;\r\n        margin: 0;\r\n        text-transform: uppercase;\r\n    }\r\n\r\n    .entry .btn-block {\r\n        margin: 40px 0 20px;\r\n    }\r\n\r\n    .entry .btn-block .btn {\r\n            width: 160px;\r\n            margin: 0 13px;\r\n            padding: 12px 0;\r\n            cursor: pointer;\r\n            text-transform: uppercase;\r\n            letter-spacing: 2px;\r\n        }\r\n\r\n    .entry .version {\r\n        font-weight: 400;\r\n        color: #666;\r\n        margin: 0;\r\n    }\r\n\r\n    .advantages {\r\n    background: #f8f8f8;\r\n}\r\n\r\n    .advantages .holder {\r\n        padding: 80px 10%;\r\n    }\r\n\r\n    .advantages .holder .col-12 {\r\n            padding-top: 40px;\r\n            padding-bottom: 40px;\r\n        }\r\n\r\n    .advantages .img-holder {\r\n        flex: 0 0 80px;\r\n        max-width: 80px;\r\n        height: 60px;\r\n        margin-bottom: 15px;\r\n        padding-right: 10px;\r\n    }\r\n\r\n    .advantages .img-holder img {\r\n            display: block;\r\n            max-width: 100%;\r\n        }\r\n\r\n    .advantages .txt-holder {\r\n        flex: 0 0 calc(100% - 80px);\r\n        max-width: calc(100% - 80px);\r\n    }\r\n\r\n    .advantages .txt-holder h4 {\r\n            color: #333;\r\n        }\r\n\r\n    .advantages .txt-holder p {\r\n            margin: 15px 0 0;\r\n            color: #666;\r\n        }\r\n\r\n    .sidebar {\r\n    order: 0;\r\n    flex: 0 0 16.666667%;\r\n    max-width: 16.666667%;\r\n    border-right: 1px solid #dadada;\r\n    border-bottom: 1px solid #dadada;\r\n}\r\n\r\n    .sidebar-search {\r\n    padding: 15px 19px 15px 20px;\r\n    border-bottom: 1px solid #dadada;\r\n}\r\n\r\n    .sidebar-search input {\r\n        outline-offset: -2px;\r\n        -webkit-appearance: none;\r\n        margin: 0;\r\n        display: block;\r\n        width: 100%;\r\n        padding: .5rem .75rem;\r\n        font-size: 1rem;\r\n        line-height: 1.25;\r\n        color: #495057;\r\n        background-color: #fff;\r\n        background-image: none;\r\n        background-clip: padding-box;\r\n        border: 1px solid rgba(0,0,0,.15);\r\n        border-radius: .25rem;\r\n        transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;\r\n    }\r\n\r\n    .sidebar-search:focus {\r\n        border-color: #1976d2;\r\n        box-shadow: 0 0 0 3px rgba(25,118,210,.15);\r\n    }\r\n\r\n    .sidebar .bootstrap-version {\r\n    padding: 15px 19px 10px 20px;\r\n    display: flex;\r\n    flex-flow: row wrap;\r\n    align-items: center;\r\n    border-bottom: 1px solid #dadada;\r\n}\r\n\r\n    .sidebar .bootstrap-version span {\r\n        margin-right: 4px;\r\n    }\r\n\r\n    .sidebar .bootstrap-version .btn {\r\n        cursor: pointer;\r\n        text-align: center;\r\n        white-space: nowrap;\r\n        vertical-align: middle;\r\n        -webkit-user-select: none;\r\n        -moz-user-select: none;\r\n        -ms-user-select: none;\r\n        user-select: none;\r\n        border: 1px solid transparent;\r\n        background-color: #dadadd;\r\n        padding: 6px 8px;\r\n        font-size: .8125rem;\r\n        line-height: 1.25;\r\n        transition: all .15s ease-in-out;\r\n    }\r\n\r\n    .sidebar .bootstrap-version .btn:first-of-type {\r\n            border-radius: .25rem 0 0 .25rem;\r\n        }\r\n\r\n    .sidebar .bootstrap-version .btn:last-of-type {\r\n            border-radius: 0 .25rem .25rem 0;\r\n        }\r\n\r\n    .sidebar .bootstrap-version .btn.selected {\r\n            background-color: #1976d2;\r\n            color: #fff;\r\n        }\r\n\r\n    .sidebar .bootstrap-version .btn:focus {\r\n            outline: 0;\r\n            box-shadow: none;\r\n        }\r\n\r\n    .sidebar-content {\r\n    padding: 15px 19px 15px 20px;\r\n    overflow: auto;\r\n    max-height: calc(100vh - 194px);\r\n}\r\n\r\n    .sidebar-list {\r\n    margin: 0;\r\n    padding: 0;\r\n    list-style: none;\r\n}\r\n\r\n    .sidebar-list li a {\r\n        display: block;\r\n        color: #666;\r\n        padding: 9px 0;\r\n        line-height: 1;\r\n        text-decoration: none;\r\n    }\r\n\r\n    .sidebar-list li.active a, .sidebar-list li:hover a {\r\n        color: #1976d2;\r\n        text-decoration: none;\r\n    }\r\n\r\n    .sidebar-title {\r\n    font-size: 1.125rem;\r\n    color: #333;\r\n    margin-top: 25px;\r\n}\r\n\r\n    .main-container {\r\n    flex: 0 0 66.666667%;\r\n    max-width: 66.666667%;\r\n}\r\n\r\n    .content {\r\n    /* padding: 30px 30px 120px; */\r\n}\r\n\r\n    .content h2[id] {\r\n        margin-top: 58px;\r\n    }\r\n\r\n    .content h2[id] .anchor-link, .content h3[id] .anchor-link {\r\n            display: none;\r\n        }\r\n\r\n    .content h2[id]:hover .anchor-link, .content h3[id]:hover .anchor-link {\r\n            display: inline-block;\r\n        }\r\n\r\n    .content ng-sample-box .section {\r\n        margin-bottom: 60px;\r\n    }\r\n\r\n    .content ng-sample-box .section.bd-example {\r\n            margin-bottom: 10px;\r\n        }\r\n\r\n    .content ng-sample-box .tab-content .prettyprint {\r\n        border-top: none;\r\n        border-top-left-radius: 0;\r\n        border-top-right-radius: 0;\r\n    }\r\n\r\n    .content .main-logo {\r\n        margin-top: 30px;\r\n        margin-bottom: 20px;\r\n    }\r\n\r\n    .api-doc-component > h3 {\r\n    margin-top: 20px;\r\n}\r\n\r\n    .api-doc-component .table td {\r\n    padding: 1rem;\r\n}\r\n\r\n    .api-doc-component .table td p {\r\n        margin-bottom: 0;\r\n    }\r\n\r\n    .api-doc-component .table-b {\r\n    overflow-x: auto;\r\n}\r\n\r\n    .panel-body {\r\n    padding: 15px;\r\n}\r\n\r\n    .add-nav {\r\n    flex: 0 0 16.666667%;\r\n    max-width: 16.666667%;\r\n    padding-right: 5px;\r\n    position: -webkit-sticky;\r\n    position: sticky;\r\n    top: 84px;\r\n    left: 83.33%;\r\n    right: 0;\r\n    max-height: calc(100vh - 104px);\r\n    overflow: auto;\r\n    direction: rtl;\r\n}\r\n\r\n    .add-nav ul {\r\n        margin: 0;\r\n        padding: 0 0 0 20px;\r\n        font-size: 14px;\r\n        list-style: none;\r\n        direction: ltr;\r\n    }\r\n\r\n    .add-nav ul li a {\r\n            word-break: break-all;\r\n            word-break: break-word;\r\n            display: block;\r\n            padding: 5px 0;\r\n            line-height: 1.2;\r\n            color: #666;\r\n        }\r\n\r\n    .add-nav ul li a:hover {\r\n                color: #1976d2;\r\n            }\r\n\r\n    .add-nav > ul {\r\n        border-left: 1px solid #dadada;\r\n    }\r\n\r\n    .app-footer {\r\n    border-top: 1px solid #dadada;\r\n    padding: 30px 30px 41px;\r\n}\r\n\r\n    .app-footer p {\r\n        line-height: 1.1;\r\n        margin: 0;\r\n        padding: 9px 0;\r\n        font-size: 1rem;\r\n        color: #878787;\r\n    }\r\n\r\n    .app-footer p a {\r\n            color: #262626;\r\n            text-decoration: none;\r\n        }\r\n\r\n    .app-footer p a:focus, .app-footer p a:hover {\r\n                text-decoration: underline;\r\n            }\r\n\r\n    .landing-footer .app-footer {\r\n    border-top: none;\r\n    height: 330px;\r\n    padding-top: 120px;\r\n    text-align: center;\r\n    background: #fff;\r\n}\r\n\r\n    .bd-example {\r\n    position: relative;\r\n}\r\n\r\n    .bd-example:after {\r\n        content: \"\";\r\n        display: table;\r\n        clear: both;\r\n    }\r\n\r\n    .tooltip.customClass.fade {\r\n    transition: opacity 1s;\r\n}\r\n\r\n    .tooltip.customClass .tooltip-inner {\r\n    color: #800;\r\n    background-color: #ff6;\r\n    box-shadow: 0 6px 12px rgba(0,0,0,.175);\r\n}\r\n\r\n    .tooltip.customClass .arrow:before, .tooltip.customClass .tooltip-arrow {\r\n    border-top-color: #ffff75;\r\n}\r\n\r\n    .popover.customClass, .popover.customClass .popover-content {\r\n    background: #94bada;\r\n}\r\n\r\n    .popover.customClass.top > .arrow:after {\r\n        border-top-color: #94bada;\r\n    }\r\n\r\n    .nav-item.customClass {\r\n    float: right;\r\n}\r\n\r\n    .nav-item.customClass:first-child {\r\n        margin-left: auto;\r\n    }\r\n\r\n    .nav-item.customClass a {\r\n        background-color: #50ff50;\r\n    }\r\n\r\n    .card.customClass, .card.customClass .card-header, .panel.customClass {\r\n    background-color: #5bc0de;\r\n    color: #fff;\r\n}\r\n\r\n    .panel.customClass .panel-body {\r\n        background-color: #337aa7;\r\n    }\r\n\r\n    .code-preview {\r\n    display: block;\r\n    padding: 10px;\r\n    margin: 0 0 10px;\r\n    font-size: 13px;\r\n    line-height: 1.4;\r\n    color: #333;\r\n    word-break: break-all;\r\n    word-wrap: break-word;\r\n    background-color: #f5f5f5;\r\n    border: 1px solid #ccc;\r\n    border-radius: 4px;\r\n}\r\n\r\n    @media (min-width:768px) {\r\n    .header {\r\n        position: fixed;\r\n        width: 100%;\r\n        top: 0;\r\n        z-index: 1090;\r\n    }\r\n\r\n    .header-dropdown {\r\n        z-index: 1090;\r\n    }\r\n\r\n    .main {\r\n        padding-top: 64px;\r\n    }\r\n\r\n    .modal-backdrop {\r\n        z-index: 2000;\r\n    }\r\n\r\n    .modal {\r\n        z-index: 2001;\r\n    }\r\n\r\n    .sidebar {\r\n        position: -webkit-sticky;\r\n        position: sticky;\r\n        top: 64px;\r\n        max-height: calc(100vh - 64px);\r\n    }\r\n\r\n    #mobile-main-menu {\r\n        display: none;\r\n    }\r\n}\r\n\r\n    @media (max-width:1199px) {\r\n    .add-nav {\r\n        display: none;\r\n    }\r\n\r\n    .main-container {\r\n        flex: 0 0 75%;\r\n        max-width: 75%;\r\n    }\r\n\r\n    .content h2[id] .anchor-link, .content h3[id] .anchor-link {\r\n        display: inline-block;\r\n    }\r\n\r\n    .advantages .holder {\r\n        padding-left: 5%;\r\n        padding-right: 5%;\r\n    }\r\n\r\n    .sidebar {\r\n        flex: 0 0 25%;\r\n        max-width: 25%;\r\n    }\r\n}\r\n\r\n    @media (max-width:991px) {\r\n    .advantages .img-holder, .advantages .txt-holder {\r\n        flex: 0 0 100%;\r\n        max-width: 100%;\r\n    }\r\n}\r\n\r\n    @media (max-width:767px) {\r\n    .header {\r\n        min-height: 54px;\r\n        padding: 15px;\r\n    }\r\n\r\n        .header .logo {\r\n            font-size: 1.25rem;\r\n        }\r\n\r\n    .advantages .holder {\r\n        padding: 30px 0;\r\n    }\r\n\r\n    .main-container, .sidebar {\r\n        flex: 0 0 100%;\r\n        max-width: 100%;\r\n    }\r\n\r\n    .sidebar {\r\n        border-right: none;\r\n        border-bottom: none;\r\n        position: relative;\r\n    }\r\n\r\n        .sidebar .sidebar-search {\r\n            display: flex;\r\n            flex-flow: row nowrap;\r\n            justify-content: space-between;\r\n        }\r\n\r\n    .isOpenMenu {\r\n        overflow: hidden;\r\n    }\r\n\r\n    #mobile-main-menu {\r\n        cursor: pointer;\r\n        border-color: transparent;\r\n        background: 0 0;\r\n        padding: 0;\r\n        margin-left: 15px;\r\n    }\r\n\r\n    .mobile-menu {\r\n        position: absolute;\r\n        left: 100%;\r\n        width: 100%;\r\n        height: calc(100vh - 123px);\r\n        background: #fff;\r\n        z-index: 2;\r\n        transition: left .4s;\r\n        padding-bottom: 10px;\r\n        border-bottom: 1px solid #dadada;\r\n    }\r\n\r\n    .isOpenMenu .mobile-menu {\r\n        top: 100%;\r\n        left: 0;\r\n    }\r\n\r\n    .main {\r\n        overflow: hidden;\r\n    }\r\n\r\n    .content {\r\n        padding: 20px 15px 90px;\r\n    }\r\n\r\n        .content h2[id] {\r\n            margin-top: 43px;\r\n        }\r\n\r\n    .api-doc-component h3 {\r\n        word-break: break-all;\r\n    }\r\n\r\n    .app-footer {\r\n        padding: 30px 15px;\r\n    }\r\n}\r\n\r\n    @media (max-width:575px) {\r\n    .entry .btn-block .btn {\r\n        display: block;\r\n        width: 300px;\r\n        margin: 0 auto;\r\n    }\r\n\r\n        .entry .btn-block .btn:first-child {\r\n            margin-bottom: 15px;\r\n        }\r\n\r\n    .advantages .img-holder, .advantages .txt-holder {\r\n        padding: 0;\r\n        margin: 0;\r\n        text-align: center;\r\n    }\r\n\r\n        .advantages .img-holder img {\r\n            margin: 0 auto 10px;\r\n        }\r\n\r\n    .advantages .holder .col-12 {\r\n        padding-top: 30px;\r\n        padding-bottom: 30px;\r\n    }\r\n\r\n        .advantages .holder .col-12:last-child {\r\n            padding-bottom: 0;\r\n        }\r\n}\r\n\r\n    @media (max-width:479px) {\r\n    .header .prev-docs {\r\n        display: none;\r\n    }\r\n}\r\n\r\n    .prettyprint {\r\n    white-space: pre-wrap;\r\n    background: #f5f6f7;\r\n    font-family: Monaco,\"Lucida Console\",monospace;\r\n    color: #5c707a;\r\n    width: auto;\r\n    overflow: auto;\r\n    position: relative;\r\n    padding: 16px 32px;\r\n    font-size: 13px;\r\n    line-height: 24px;\r\n    margin-bottom: 24px;\r\n    border-radius: 4px;\r\n}\r\n\r\n    .prettyprint.linenums, .prettyprint[class*=\" linenums:\"], .prettyprint[class^=\"linenums:\"] {\r\n        padding: 0;\r\n    }\r\n\r\n    .prettyprint.is-showcase {\r\n        border: 4px solid #0273d4;\r\n    }\r\n\r\n    .prettyprint code {\r\n        background: 0 0;\r\n        font-size: 13px;\r\n        padding: 0;\r\n    }\r\n\r\n    .prettyprint ol {\r\n        background: #f5f6f7;\r\n        padding: 16px 32px 16px 56px;\r\n        margin: 0;\r\n        overflow: auto;\r\n        font-size: 13px;\r\n    }\r\n\r\n    .prettyprint .tag, .prettyprint ol li {\r\n            color: #7a8b94;\r\n            background: 0 0;\r\n            margin-bottom: 5px;\r\n            line-height: normal;\r\n            list-style-type: decimal;\r\n            font-size: 12px;\r\n            white-space: pre;\r\n        }\r\n\r\n    .prettyprint ol li:last-child {\r\n                margin-bottom: 0;\r\n            }\r\n\r\n    .prettyprint ol li code {\r\n                background: 0 0;\r\n                font-size: 13px;\r\n            }\r\n\r\n    .prettyprint .blk, .prettyprint .pnk {\r\n        border-radius: 4px;\r\n        padding: 2px 4px;\r\n    }\r\n\r\n    .prettyprint .pnk {\r\n        background: #cfd8dc;\r\n        color: #5c707a;\r\n    }\r\n\r\n    .prettyprint .blk {\r\n        background: #e0e0e0;\r\n    }\r\n\r\n    .prettyprint .otl {\r\n        outline: rgba(169,169,169,.56) solid 1px;\r\n    }\r\n\r\n    .prettyprint .kwd, .prettyprint .tag, .prettyprint .typ {\r\n        color: #d43669;\r\n    }\r\n\r\n    .prettyprint .atv, .prettyprint .str {\r\n        color: #647f11;\r\n    }\r\n\r\n    .prettyprint .atn {\r\n        color: #31708f;\r\n    }\r\n\r\n    .prettyprint .com, .prettyprint .lit {\r\n        color: #647f11;\r\n    }\r\n\r\n    .prettyprint .pun {\r\n        color: #7a8b94;\r\n    }\r\n\r\n    .prettyprint .pln {\r\n        color: #5c707a;\r\n    }\r\n\r\n    .prettyprint .dec {\r\n        color: #647f11;\r\n    }\r\n\r\n    @media print {\r\n    .prettyprint {\r\n        background: #f5f6f7;\r\n        border: none;\r\n        box-shadow: none;\r\n    }\r\n\r\n        .prettyprint ol {\r\n            background: #f5f6f7;\r\n        }\r\n\r\n        .prettyprint .kwd, .prettyprint .tag, .prettyprint .typ {\r\n            color: #d43669;\r\n        }\r\n\r\n        .prettyprint .atv, .prettyprint .str {\r\n            color: #647f11;\r\n        }\r\n\r\n        .prettyprint .atn {\r\n            color: #31708f;\r\n        }\r\n\r\n        .prettyprint .com, .prettyprint .lit {\r\n            color: #647f11;\r\n        }\r\n\r\n        .prettyprint .pun {\r\n            color: #7a8b94;\r\n        }\r\n\r\n        .prettyprint .pln {\r\n            color: #5c707a;\r\n        }\r\n\r\n        .prettyprint .dec {\r\n            color: #647f11;\r\n        }\r\n}\r\n\r\n    h1 .prettyprint, h2 .prettyprint, h3 .prettyprint, h4 .prettyprint {\r\n    background: 0 0;\r\n    font-family: Monaco,\"Lucida Console\",monospace;\r\n    color: #253238;\r\n    overflow: hidden;\r\n    position: relative;\r\n    font-size: 15px;\r\n    font-weight: 600;\r\n    line-height: 24px;\r\n    margin: 0;\r\n    border: none;\r\n    box-shadow: none;\r\n    padding: 0;\r\n}\r\n\r\n    h1 .prettyprint code, h2 .prettyprint code, h3 .prettyprint code, h4 .prettyprint code {\r\n        background: 0 0;\r\n        font-size: 15px;\r\n        padding: 0;\r\n    }\r\n\r\n    h1 .prettyprint .kwd, h2 .prettyprint .kwd, h3 .prettyprint .kwd, h4 .prettyprint .kwd {\r\n        color: #253238;\r\n    }\r\n\r\n    h1 .prettyprint .tag, h1 .prettyprint .typ, h2 .prettyprint .tag, h2 .prettyprint .typ, h3 .prettyprint .tag, h3 .prettyprint .typ, h4 .prettyprint .tag, h4 .prettyprint .typ {\r\n        color: #b52e31;\r\n    }\r\n\r\n    h1 .prettyprint .atv, h1 .prettyprint .str, h2 .prettyprint .atv, h2 .prettyprint .str, h3 .prettyprint .atv, h3 .prettyprint .str, h4 .prettyprint .atv, h4 .prettyprint .str {\r\n        color: #9d8d00;\r\n    }\r\n\r\n    h1 .prettyprint .atn, h2 .prettyprint .atn, h3 .prettyprint .atn, h4 .prettyprint .atn {\r\n        color: #71a436;\r\n    }\r\n\r\n    h1 .prettyprint .com, h2 .prettyprint .com, h3 .prettyprint .com, h4 .prettyprint .com {\r\n        color: #afbec5;\r\n    }\r\n\r\n    h1 .prettyprint .lit, h2 .prettyprint .lit, h3 .prettyprint .lit, h4 .prettyprint .lit {\r\n        color: #9d8d00;\r\n    }\r\n\r\n    h1 .prettyprint .pln, h1 .prettyprint .pun, h2 .prettyprint .pln, h2 .prettyprint .pun, h3 .prettyprint .pln, h3 .prettyprint .pun, h4 .prettyprint .pln, h4 .prettyprint .pun {\r\n        color: #000;\r\n    }\r\n\r\n    h1 .prettyprint .dec, h2 .prettyprint .dec, h3 .prettyprint .dec, h4 .prettyprint .dec {\r\n        color: #8762c6;\r\n    }\r\n"

/***/ }),

/***/ "./src/app/user-control/alert-tut/alert.component.html":
/*!*************************************************************!*\
  !*** ./src/app/user-control/alert-tut/alert.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"main-container\">\r\n    <div class=\"content\">\r\n        <div class=\"content-header\">\r\n            <!---->\r\n            <h1>Accordion\r\n                <a rel=\"noopener\" target=\"_blank\" href=\"https://github.com/valor-software/ngx-bootstrap/tree/development/src/alert\">\r\n                    <img alt=\"component on github\" src=\"https://valor-software.com/ngx-bootstrap/assets/images/link-doc.png\">\r\n                </a>\r\n            </h1>\r\n        </div>\r\n    </div>\r\n</section>\r\n<hr>\r\n<p>Provides contextual feedback messages for typical user actions with the handful of available and flexible alert messages</p>\r\n<h3 id=\"parent-component-ts\">\r\n    <a href=\"#parent-component-ts\" class=\"headerlink\"></a>\r\n    Usage\r\n</h3>\r\n<figure class=\"highlight typescript\">\r\n    <table>\r\n        <tbody>\r\n            <tr>\r\n                <td class=\"code\">\r\n                    <img src=\"assets/images/alert_tut.png\">\r\n                </td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n</figure>\r\n<h3 id=\"parent-component-ts\">\r\n    <a href=\"#parent-component-ts\" class=\"headerlink\"></a>\r\n    Example\r\n</h3>\r\n<p>Alerts are available for any length of text, as well as an optional dismiss button. For proper styling, use one of the four\r\n    required contextual classes (e.g., .alert-success). For inline dismissal, use the dismissible property.</p>\r\n<div class=\"section bd-example\">\r\n    <alert type=\"success\">\r\n        <strong>Well done!</strong> You successfully read this important alert message.\r\n    </alert>\r\n    <alert type=\"info\">\r\n        <strong>Heads up!</strong> This alert needs your attention, but it's not super important.\r\n    </alert>\r\n    <alert type=\"warning\">\r\n        <strong>Warning!</strong> Better check yourself, you're not looking too good.\r\n    </alert>\r\n    <alert type=\"danger\">\r\n        <strong>Oh snap!</strong> Change a few things up and try submitting again.\r\n    </alert>\r\n</div>\r\n<div>\r\n    <tabset>\r\n        <tab heading=\"template\" class=\"tab-pane active\">\r\n            <pre class=\"prettyprint linenums lang-html prettyprinted\" style=\"\"><ol class=\"linenums\"><li class=\"L0\"><span class=\"tag\">&lt;alert</span><span class=\"pln\"> </span><span class=\"atn\">type</span><span class=\"pun\">=</span><span class=\"atv\">\"success\"</span><span class=\"tag\">&gt;</span></li><li class=\"L1\"><span class=\"pln\">  </span><span class=\"tag\">&lt;strong&gt;</span><span class=\"pln\">Well done!</span><span class=\"tag\">&lt;/strong&gt;</span><span class=\"pln\"> You successfully read this important alert message.</span></li><li class=\"L2\"><span class=\"tag\">&lt;/alert&gt;</span></li><li class=\"L3\"><span class=\"tag\">&lt;alert</span><span class=\"pln\"> </span><span class=\"atn\">type</span><span class=\"pun\">=</span><span class=\"atv\">\"info\"</span><span class=\"tag\">&gt;</span></li><li class=\"L4\"><span class=\"pln\">  </span><span class=\"tag\">&lt;strong&gt;</span><span class=\"pln\">Heads up!</span><span class=\"tag\">&lt;/strong&gt;</span><span class=\"pln\"> This alert needs your attention, but it's not super important.</span></li><li class=\"L5\"><span class=\"tag\">&lt;/alert&gt;</span></li><li class=\"L6\"><span class=\"tag\">&lt;alert</span><span class=\"pln\"> </span><span class=\"atn\">type</span><span class=\"pun\">=</span><span class=\"atv\">\"warning\"</span><span class=\"tag\">&gt;</span></li><li class=\"L7\"><span class=\"pln\">  </span><span class=\"tag\">&lt;strong&gt;</span><span class=\"pln\">Warning!</span><span class=\"tag\">&lt;/strong&gt;</span><span class=\"pln\"> Better check yourself, you're not looking too good.</span></li><li class=\"L8\"><span class=\"tag\">&lt;/alert&gt;</span></li><li class=\"L9\"><span class=\"tag\">&lt;alert</span><span class=\"pln\"> </span><span class=\"atn\">type</span><span class=\"pun\">=</span><span class=\"atv\">\"danger\"</span><span class=\"tag\">&gt;</span></li><li class=\"L0\"><span class=\"pln\">  </span><span class=\"tag\">&lt;strong&gt;</span><span class=\"pln\">Oh snap!</span><span class=\"tag\">&lt;/strong&gt;</span><span class=\"pln\"> Change a few things up and try submitting again.</span></li><li class=\"L1\"><span class=\"tag\">&lt;/alert&gt;</span></li></ol></pre>\r\n        </tab>\r\n        <tab heading=\"component\" class=\"tab-pane\">\r\n                <pre class=\"prettyprint linenums lang-js prettyprinted\" style=\"\"><ol class=\"linenums\"><li class=\"L0\"><span class=\"kwd\">import</span><span class=\"pln\"> </span><span class=\"pun\">{{'{'}}</span><span class=\"pln\"> </span><span class=\"typ\">Component</span><span class=\"pln\"> </span><span class=\"pun\">{{'}'}}</span><span class=\"pln\"> from </span><span class=\"str\">'@angular/core'</span><span class=\"pun\">;</span></li><li class=\"L1\"><span class=\"pln\">&nbsp;</span></li><li class=\"L2\"><span class=\"lit\">@Component</span><span class=\"pun\">({{'{'}}</span></li><li class=\"L3\"><span class=\"pln\">  selector</span><span class=\"pun\">:</span><span class=\"pln\"> </span><span class=\"str\">'demo-alert-basic'</span><span class=\"pun\">,</span></li><li class=\"L4\"><span class=\"pln\">  templateUrl</span><span class=\"pun\">:</span><span class=\"pln\"> </span><span class=\"str\">'./basic.html'</span></li><li class=\"L5\"><span class=\"pun\">{{'}'}})</span></li><li class=\"L6\"><span class=\"kwd\">export</span><span class=\"pln\"> </span><span class=\"kwd\">class</span><span class=\"pln\"> </span><span class=\"typ\">DemoAlertBasicComponent</span><span class=\"pln\"> </span><span class=\"pun\">{{'{'}}{{'}'}}</span></li></ol></pre>\r\n        </tab>\r\n    </tabset>\r\n</div>"

/***/ }),

/***/ "./src/app/user-control/alert-tut/alert.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/user-control/alert-tut/alert.component.ts ***!
  \***********************************************************/
/*! exports provided: AlertTutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertTutComponent", function() { return AlertTutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AlertTutComponent = /** @class */ (function () {
    function AlertTutComponent() {
    }
    AlertTutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'alert-tut',
            template: __webpack_require__(/*! ./alert.component.html */ "./src/app/user-control/alert-tut/alert.component.html"),
            styles: [__webpack_require__(/*! ./alert.component.css */ "./src/app/user-control/alert-tut/alert.component.css")]
        })
    ], AlertTutComponent);
    return AlertTutComponent;
}());



/***/ }),

/***/ "./src/app/user-control/carousel-tut/carousel.component.css":
/*!******************************************************************!*\
  !*** ./src/app/user-control/carousel-tut/carousel.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user-control/carousel-tut/carousel.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/user-control/carousel-tut/carousel.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"main-container\">\r\n    <div class=\"content\">\r\n        <div class=\"content-header\">\r\n            <!---->\r\n            <h1>Carousel\r\n                <a rel=\"noopener\" target=\"_blank\" href=\"https://github.com/valor-software/ngx-bootstrap/tree/development/src/carousel\">\r\n                    <img alt=\"component on github\" src=\"https://valor-software.com/ngx-bootstrap/assets/images/link-doc.png\">\r\n                </a>\r\n            </h1>\r\n        </div>\r\n    </div>\r\n</section>\r\n<hr>\r\n<p> A slideshow component for cycling through elements—images or slides of text—like a carousel. Nested carousels are not supported.</p>\r\n<h3 id=\"parent-component-ts\">\r\n    <a href=\"#parent-component-ts\" class=\"headerlink\"></a>\r\n    Usage\r\n</h3>\r\n<figure class=\"highlight typescript\">\r\n    <table>\r\n        <tbody>\r\n            <tr>\r\n                <td class=\"code\">\r\n                    <img src=\"assets/images/carousel_tut.png\">\r\n                </td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n</figure>\r\n<h3 id=\"parent-component-ts\">\r\n    <a href=\"#parent-component-ts\" class=\"headerlink\"></a>\r\n    Example\r\n</h3>\r\n<div class=\"section bd-example\">\r\n    <carousel>\r\n        <div class=\"carousel slide\">\r\n            <!---->\r\n            <ol class=\"carousel-indicators\">\r\n                <!---->\r\n                <li class=\"\"></li>\r\n                <li class=\"active\"></li>\r\n                <li class=\"\"></li>\r\n            </ol>\r\n            <div class=\"carousel-inner\">\r\n                <slide aria-hidden=\"true\" class=\"item carousel-item\">\r\n                    <div class=\"item\">\r\n\r\n                        <img alt=\"first slide\" src=\"https://valor-software.com/ngx-bootstrap/assets/images/nature/1.jpg\" style=\"display: block; width: 100%;\">\r\n\r\n                    </div>\r\n                </slide>\r\n                <slide aria-hidden=\"false\" class=\"item carousel-item active\">\r\n                    <div class=\"item active\">\r\n\r\n                        <img alt=\"second slide\" src=\"https://valor-software.com/ngx-bootstrap/assets/images/nature/2.jpg\" style=\"display: block; width: 100%;\">\r\n\r\n                    </div>\r\n                </slide>\r\n                <slide aria-hidden=\"true\" class=\"item carousel-item\">\r\n                    <div class=\"item\">\r\n\r\n                        <img alt=\"third slide\" src=\"https://valor-software.com/ngx-bootstrap/assets/images/nature/3.jpg\" style=\"display: block; width: 100%;\">\r\n\r\n                    </div>\r\n                </slide>\r\n            </div>\r\n            <!---->\r\n            <a class=\"left carousel-control carousel-control-prev\">\r\n                <span aria-hidden=\"true\" class=\"icon-prev carousel-control-prev-icon\"></span>\r\n                <!---->\r\n            </a>\r\n            <!---->\r\n            <a class=\"right carousel-control carousel-control-next\">\r\n                <span aria-hidden=\"true\" class=\"icon-next carousel-control-next-icon\"></span>\r\n                <span class=\"sr-only\">Next</span>\r\n            </a>\r\n        </div>\r\n    </carousel>\r\n</div>\r\n<div>\r\n    <tabset>\r\n        <tab heading=\"template\" class=\"tab-pane active\">\r\n            <pre class=\"prettyprint linenums lang-html prettyprinted\" style=\"\"><ol class=\"linenums\"><li class=\"L0\"><span class=\"tag\">&lt;carousel&gt;</span></li><li class=\"L1\"><span class=\"pln\">  </span><span class=\"tag\">&lt;slide&gt;</span></li><li class=\"L2\"><span class=\"pln\">    </span><span class=\"tag\">&lt;img</span><span class=\"pln\"> </span><span class=\"atn\">src</span><span class=\"pun\">=</span><span class=\"atv\">\"assets/images/nature/4.jpg\"</span><span class=\"pln\"> </span><span class=\"atn\">alt</span><span class=\"pun\">=</span><span class=\"atv\">\"first slide\"</span><span class=\"pln\"> </span><span class=\"atn\">style</span><span class=\"pun\">=</span><span class=\"atv\">\"</span><span class=\"pln\">display</span><span class=\"pun\">:</span><span class=\"pln\"> block</span><span class=\"pun\">;</span><span class=\"pln\"> width</span><span class=\"pun\">:</span><span class=\"pln\"> </span><span class=\"lit\">100</span><span class=\"pun\">%;</span><span class=\"atv\">\"</span><span class=\"tag\">&gt;</span></li><li class=\"L3\"><span class=\"pln\">    </span><span class=\"tag\">&lt;div</span><span class=\"pln\"> </span><span class=\"atn\">class</span><span class=\"pun\">=</span><span class=\"atv\">\"carousel-caption d-none d-md-block\"</span><span class=\"tag\">&gt;</span></li><li class=\"L4\"><span class=\"pln\">      </span><span class=\"tag\">&lt;h3&gt;</span><span class=\"pln\">First slide label</span><span class=\"tag\">&lt;/h3&gt;</span></li><li class=\"L5\"><span class=\"pln\">      </span><span class=\"tag\">&lt;p&gt;</span><span class=\"pln\">Nulla vitae elit libero, a pharetra augue mollis interdum.</span><span class=\"tag\">&lt;/p&gt;</span></li><li class=\"L6\"><span class=\"pln\">    </span><span class=\"tag\">&lt;/div&gt;</span></li><li class=\"L7\"><span class=\"pln\">  </span><span class=\"tag\">&lt;/slide&gt;</span></li><li class=\"L8\"><span class=\"pln\">  </span><span class=\"tag\">&lt;slide&gt;</span></li><li class=\"L9\"><span class=\"pln\">    </span><span class=\"tag\">&lt;img</span><span class=\"pln\"> </span><span class=\"atn\">src</span><span class=\"pun\">=</span><span class=\"atv\">\"assets/images/nature/5.jpg\"</span><span class=\"pln\"> </span><span class=\"atn\">alt</span><span class=\"pun\">=</span><span class=\"atv\">\"second slide\"</span><span class=\"pln\"> </span><span class=\"atn\">style</span><span class=\"pun\">=</span><span class=\"atv\">\"</span><span class=\"pln\">display</span><span class=\"pun\">:</span><span class=\"pln\"> block</span><span class=\"pun\">;</span><span class=\"pln\"> width</span><span class=\"pun\">:</span><span class=\"pln\"> </span><span class=\"lit\">100</span><span class=\"pun\">%;</span><span class=\"atv\">\"</span><span class=\"tag\">&gt;</span></li><li class=\"L0\"><span class=\"pln\">    </span><span class=\"tag\">&lt;div</span><span class=\"pln\"> </span><span class=\"atn\">class</span><span class=\"pun\">=</span><span class=\"atv\">\"carousel-caption d-none d-md-block\"</span><span class=\"tag\">&gt;</span></li><li class=\"L1\"><span class=\"pln\">      </span><span class=\"tag\">&lt;h3&gt;</span><span class=\"pln\">Second slide label</span><span class=\"tag\">&lt;/h3&gt;</span></li><li class=\"L2\"><span class=\"pln\">      </span><span class=\"tag\">&lt;p&gt;</span><span class=\"pln\">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span><span class=\"tag\">&lt;/p&gt;</span></li><li class=\"L3\"><span class=\"pln\">    </span><span class=\"tag\">&lt;/div&gt;</span></li><li class=\"L4\"><span class=\"pln\">  </span><span class=\"tag\">&lt;/slide&gt;</span></li><li class=\"L5\"><span class=\"pln\">  </span><span class=\"tag\">&lt;slide&gt;</span></li><li class=\"L6\"><span class=\"pln\">    </span><span class=\"tag\">&lt;img</span><span class=\"pln\"> </span><span class=\"atn\">src</span><span class=\"pun\">=</span><span class=\"atv\">\"assets/images/nature/6.jpg\"</span><span class=\"pln\"> </span><span class=\"atn\">alt</span><span class=\"pun\">=</span><span class=\"atv\">\"third slide\"</span><span class=\"pln\"> </span><span class=\"atn\">style</span><span class=\"pun\">=</span><span class=\"atv\">\"</span><span class=\"pln\">display</span><span class=\"pun\">:</span><span class=\"pln\"> block</span><span class=\"pun\">;</span><span class=\"pln\"> width</span><span class=\"pun\">:</span><span class=\"pln\"> </span><span class=\"lit\">100</span><span class=\"pun\">%;</span><span class=\"atv\">\"</span><span class=\"tag\">&gt;</span></li><li class=\"L7\"><span class=\"pln\">    </span><span class=\"tag\">&lt;div</span><span class=\"pln\"> </span><span class=\"atn\">class</span><span class=\"pun\">=</span><span class=\"atv\">\"carousel-caption d-none d-md-block\"</span><span class=\"tag\">&gt;</span></li><li class=\"L8\"><span class=\"pln\">      </span><span class=\"tag\">&lt;h3&gt;</span><span class=\"pln\">Third slide label</span><span class=\"tag\">&lt;/h3&gt;</span></li><li class=\"L9\"><span class=\"pln\">      </span><span class=\"tag\">&lt;p&gt;</span><span class=\"pln\">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</span><span class=\"tag\">&lt;/p&gt;</span></li><li class=\"L0\"><span class=\"pln\">    </span><span class=\"tag\">&lt;/div&gt;</span></li><li class=\"L1\"><span class=\"pln\">  </span><span class=\"tag\">&lt;/slide&gt;</span></li><li class=\"L2\"><span class=\"tag\">&lt;/carousel&gt;</span></li></ol></pre>\r\n        </tab>\r\n        <tab heading=\"component\" class=\"tab-pane\">\r\n                <pre class=\"prettyprint linenums lang-js prettyprinted\" style=\"\"><ol class=\"linenums\"><li class=\"L0\"><span class=\"kwd\">import</span><span class=\"pln\"> </span><span class=\"pun\">{{'{'}}</span><span class=\"pln\"> </span><span class=\"typ\">Component</span><span class=\"pln\"> </span><span class=\"pun\">{{'}'}}</span><span class=\"pln\"> from </span><span class=\"str\">'@angular/core'</span><span class=\"pun\">;</span></li><li class=\"L1\"><span class=\"pln\">&nbsp;</span></li><li class=\"L2\"><span class=\"lit\">@Component</span><span class=\"pun\">({{'{'}}</span></li><li class=\"L3\"><span class=\"pln\">  selector</span><span class=\"pun\">:</span><span class=\"pln\"> </span><span class=\"str\">'demo-carousel-captions'</span><span class=\"pun\">,</span></li><li class=\"L4\"><span class=\"pln\">  templateUrl</span><span class=\"pun\">:</span><span class=\"pln\"> </span><span class=\"str\">'./captions.html'</span></li><li class=\"L5\"><span class=\"pun\">{{'}'}})</span></li><li class=\"L6\"><span class=\"kwd\">export</span><span class=\"pln\"> </span><span class=\"kwd\">class</span><span class=\"pln\"> </span><span class=\"typ\">DemoCarouselCaptionsComponent</span><span class=\"pln\"> </span><span class=\"pun\">{{'{'}}{{'}'}}</span></li></ol></pre>\r\n        </tab>\r\n    </tabset>\r\n</div>"

/***/ }),

/***/ "./src/app/user-control/carousel-tut/carousel.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/user-control/carousel-tut/carousel.component.ts ***!
  \*****************************************************************/
/*! exports provided: CarouselTutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselTutComponent", function() { return CarouselTutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CarouselTutComponent = /** @class */ (function () {
    function CarouselTutComponent() {
    }
    CarouselTutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'carousel-tut',
            template: __webpack_require__(/*! ./carousel.component.html */ "./src/app/user-control/carousel-tut/carousel.component.html"),
            styles: [__webpack_require__(/*! ./carousel.component.css */ "./src/app/user-control/carousel-tut/carousel.component.css")]
        })
    ], CarouselTutComponent);
    return CarouselTutComponent;
}());



/***/ }),

/***/ "./src/app/user-control/user-control.component.css":
/*!*********************************************************!*\
  !*** ./src/app/user-control/user-control.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pro-button, .pro-label {\r\n    text-transform: uppercase;\r\n}\r\n\r\n#carbonads a, .native-ad a, a {\r\n    text-decoration: none;\r\n}\r\n\r\n#nav, .content.menu li, .sidebar ul {\r\n    list-style-type: none;\r\n}\r\n\r\n#nav .nav-dropdown, .label-new, .tag-item, code {\r\n        white-space: nowrap;\r\n    }\r\n\r\n.gutter pre {\r\n    color: #999;\r\n}\r\n\r\npre {\r\n    color: #525252;\r\n}\r\n\r\npre .constant, pre .function .keyword {\r\n        color: #0092db;\r\n    }\r\n\r\npre .meta {\r\n        color: #1c90f3;\r\n        font-weight: 700;\r\n    }\r\n\r\npre .attribute, pre .keyword {\r\n        color: #c678dd;\r\n    }\r\n\r\npre .literal, pre .number {\r\n        color: #ae81ff;\r\n    }\r\n\r\npre .change, pre .clojure .built_in, pre .flow, pre .lisp .title, pre .nginx .title, pre .tag, pre .tag .title, pre .tex .special, pre .winutils {\r\n        color: #2973b7;\r\n    }\r\n\r\npre .class .title {\r\n        color: #fff;\r\n    }\r\n\r\npre .regexp, pre .symbol, pre .symbol .string, pre .value {\r\n        color: #f16624;\r\n    }\r\n\r\npre .title {\r\n        color: #91cb1c;\r\n    }\r\n\r\npre .addition, pre .apache .cbracket, pre .apache .tag, pre .attr_selector, pre .built_in, pre .django .filter .argument, pre .django .template_tag, pre .django .variable, pre .envvar, pre .haskell .type, pre .javadoc, pre .preprocessor, pre .prompt, pre .pseudo, pre .ruby .class .parent, pre .smalltalk .array, pre .smalltalk .class, pre .smalltalk .localvars, pre .sql .aggregate, pre .stream, pre .string, pre .subst, pre .tag .value, pre .tex .command {\r\n        color: #f16624;\r\n    }\r\n\r\npre .apache .sqbracket, pre .comment, pre .deletion, pre .doctype, pre .java .annotation, pre .pi, pre .python .decorator, pre .shebang, pre .template_comment, pre .tex .formula {\r\n        color: #b3b3b3;\r\n    }\r\n\r\npre .coffeescript .javascript, pre .javascript .xml, pre .tex .formula, pre .xml .cdata, pre .xml .css, pre .xml .javascript, pre .xml .vbscript {\r\n        opacity: .5;\r\n    }\r\n\r\npre .string {\r\n        color: #42b983;\r\n    }\r\n\r\npre .substr {\r\n        color: #f66;\r\n    }\r\n\r\npre .attr {\r\n        color: #f16624;\r\n    }\r\n\r\na, body {\r\n    color: #34495e;\r\n}\r\n\r\nbody {\r\n    font-family: sofia-pro,sans-serif;\r\n    font-size: 15px;\r\n    -webkit-font-smoothing: antialiased;\r\n    -moz-osx-font-smoothing: grayscale;\r\n    background-color: #fff;\r\n    margin: 0;\r\n}\r\n\r\nbody.docs {\r\n        padding-top: 61px;\r\n    }\r\n\r\n@media screen and (max-width:900px) {\r\n    body.docs {\r\n        padding-top: 0;\r\n    }\r\n}\r\n\r\nimg {\r\n    border: 0;\r\n}\r\n\r\nh1, h2, h3, h4, strong {\r\n    font-weight: 600;\r\n    color: #2c3e50;\r\n    font-family: Palanquin,sans-serif;\r\n}\r\n\r\ncode, pre {\r\n    font-family: droid-sans-mono,monospace;\r\n    font-size: .9em;\r\n    background-color: #f8f8f8;\r\n    -webkit-font-smoothing: initial;\r\n    -moz-osx-font-smoothing: initial;\r\n}\r\n\r\ncode {\r\n    color: #e96900;\r\n    padding: 3px 5px;\r\n    margin: 0 2px;\r\n    border-radius: 2px;\r\n}\r\n\r\nem {\r\n    color: #7f8c8d;\r\n}\r\n\r\np {\r\n    word-spacing: .05em;\r\n}\r\n\r\na.button {\r\n    padding: .75em 2em;\r\n    border-radius: 2em;\r\n    display: inline-block;\r\n    color: #fff;\r\n    background-color: #f27236;\r\n    transition: all .15s ease;\r\n    box-sizing: border-box;\r\n    border: 1px solid #f27236;\r\n}\r\n\r\na.button.white {\r\n        background-color: #fff;\r\n        color: #f16624;\r\n    }\r\n\r\n.highlight {\r\n    overflow-x: auto;\r\n    position: relative;\r\n    background-color: #f8f8f8;\r\n    padding: .8em .8em .4em;\r\n    line-height: 1.1em;\r\n    border-radius: 2px;\r\n}\r\n\r\n.highlight table, .highlight td, .highlight tr {\r\n        width: 100%;\r\n        border-collapse: collapse;\r\n        padding: 0;\r\n        margin: 0;\r\n    }\r\n\r\n.highlight .gutter {\r\n        width: 1.5em;\r\n    }\r\n\r\n.highlight .code pre {\r\n        padding: 1.2em 1.4em;\r\n        line-height: 1.5em;\r\n        margin: 0;\r\n    }\r\n\r\n#ad, #ad-bottom, #ad-sidebar {\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.highlight .code .line {\r\n    min-height: 1.5em;\r\n}\r\n\r\n.highlight.bash .code:after, .highlight.css .code:after, .highlight.html .code:after, .highlight.js .code:after, .highlight.json .code:after, .highlight.scss .code:after, .highlight.shell .code:after, .highlight.typescript .code:after {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    color: #ccc;\r\n    text-align: right;\r\n    font-size: .75em;\r\n    padding: 5px 10px 0;\r\n    line-height: 15px;\r\n    height: 15px;\r\n    font-weight: 600;\r\n}\r\n\r\n.highlight.html .code:after {\r\n    content: 'HTML';\r\n}\r\n\r\n.highlight.js .code:after {\r\n    content: 'JS';\r\n}\r\n\r\n.highlight.bash .code:after {\r\n    content: 'Shell';\r\n}\r\n\r\n.highlight.css .code:after {\r\n    content: 'CSS';\r\n}\r\n\r\n.highlight.scss .code:after {\r\n    content: 'SCSS';\r\n}\r\n\r\n.highlight.typescript .code:after {\r\n    content: 'TypeScript';\r\n}\r\n\r\n.highlight.shell .code:after {\r\n    content: 'Command Line';\r\n}\r\n\r\n.highlight.json .code:after {\r\n    content: 'JSON';\r\n}\r\n\r\n#main {\r\n    position: relative;\r\n    z-index: 1;\r\n    padding: 0 60px 30px;\r\n    overflow-x: hidden;\r\n}\r\n\r\n#ad {\r\n    width: 100%;\r\n    min-height: 150px;\r\n    max-height: 350px;\r\n    overflow: hidden;\r\n    display: block;\r\n    z-index: 99;\r\n    padding: 5px;\r\n}\r\n\r\n.tpmHasAccess.pro-ad {\r\n    display: none;\r\n}\r\n\r\n#ad-bottom {\r\n    min-height: 20px;\r\n    max-height: 120px;\r\n    width: auto;\r\n}\r\n\r\n#ad-sidebar {\r\n    height: 250px;\r\n}\r\n\r\n#nav .nav-link {\r\n    cursor: pointer;\r\n}\r\n\r\n#nav .nav-dropdown-container .nav-link:hover {\r\n    border-bottom: 0;\r\n}\r\n\r\n#nav .nav-dropdown-container:hover .nav-dropdown {\r\n    display: block;\r\n}\r\n\r\n#nav .nav-dropdown-container.language {\r\n    margin-left: 20px;\r\n}\r\n\r\n#nav .nav-dropdown-container .arrow {\r\n    pointer-events: none;\r\n}\r\n\r\n#nav .nav-dropdown {\r\n    display: none;\r\n    box-sizing: border-box;\r\n    max-height: calc(100vh - 61px);\r\n    overflow-y: auto;\r\n    position: absolute;\r\n    top: 100%;\r\n    right: -15px;\r\n    background-color: #fff;\r\n    padding: 10px 0;\r\n    border: 1px solid #ddd;\r\n    border-bottom-color: #ccc;\r\n    text-align: left;\r\n    border-radius: 4px;\r\n}\r\n\r\n#nav .nav-dropdown li {\r\n        line-height: 1.8em;\r\n        margin: 0;\r\n        display: block;\r\n    }\r\n\r\n#nav .nav-dropdown li > ul {\r\n            padding-left: 0;\r\n        }\r\n\r\n#nav .nav-dropdown li:first-child h4 {\r\n            margin-top: 0;\r\n            padding-top: 0;\r\n            border-top: 0;\r\n        }\r\n\r\n#nav .nav-dropdown a, #nav .nav-dropdown h4 {\r\n        padding: 0 24px 0 20px;\r\n    }\r\n\r\n#nav .nav-dropdown h4 {\r\n        margin: .45em 0 0;\r\n        padding-top: .45em;\r\n        border-top: 1px solid #eee;\r\n    }\r\n\r\n#nav .nav-dropdown a {\r\n        color: #3a5169;\r\n        font-size: .9em;\r\n        display: block;\r\n    }\r\n\r\n#nav .nav-dropdown a:hover {\r\n            color: #f16624;\r\n        }\r\n\r\n#nav .arrow {\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    margin-top: -1px;\r\n    margin-left: 6px;\r\n    margin-right: -14px;\r\n    width: 0;\r\n    height: 0;\r\n    border-left: 4px solid transparent;\r\n    border-right: 4px solid transparent;\r\n    border-top: 5px solid #ccc;\r\n}\r\n\r\n.content-image {\r\n    width: auto;\r\n    height: auto;\r\n    display: block;\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.tag-list {\r\n    padding-left: 0 !important;\r\n    margin: 15px 0;\r\n    list-style: none;\r\n}\r\n\r\n.tag-list .tag-list-item {\r\n        display: inline;\r\n        border: 1px solid #ddd;\r\n        font-weight: 600;\r\n        padding: 5px;\r\n        margin: 0 3px;\r\n    }\r\n\r\n.tag-list .tag-list-item a {\r\n            color: #70cca2;\r\n        }\r\n\r\n.pro-member {\r\n    color: #42b983;\r\n    font-weight: 700;\r\n    display: none;\r\n}\r\n\r\n.pro-member.tpmHasAccess {\r\n        display: block !important;\r\n    }\r\n\r\n.expired-preview {\r\n    color: #f66;\r\n    font-weight: 700;\r\n    display: none;\r\n}\r\n\r\n.expired-preview.tpmExpired {\r\n        display: block !important;\r\n    }\r\n\r\n.free-preview {\r\n    color: #1c90f3;\r\n    font-weight: 700;\r\n    display: none;\r\n}\r\n\r\n.pro-button, .pro-link {\r\n    color: #fff !important;\r\n    transition: all .15s ease;\r\n    cursor: pointer;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.free-preview.tpmMetered {\r\n    display: block !important;\r\n}\r\n\r\n.signup.tpmHasAccess {\r\n    display: none;\r\n}\r\n\r\n.pro-logo {\r\n    text-align: center;\r\n    cursor: pointer;\r\n}\r\n\r\n.pro-link {\r\n    padding: .75em 2em;\r\n    border-radius: 2em;\r\n    display: inline-block;\r\n    background-color: #f27236;\r\n    border: 1px solid #f27236;\r\n}\r\n\r\n.main-signup {\r\n    font-size: 1.1em;\r\n    padding: 10px auto;\r\n    width: 100%;\r\n    max-width: 600px;\r\n    text-align: center;\r\n    margin: auto;\r\n}\r\n\r\n.main-signup .detail {\r\n        text-align: left;\r\n    }\r\n\r\n#carbonSide, #gde, #highlights .inner, .author-bio, .native-cta, .slack-bar {\r\n    text-align: center;\r\n}\r\n\r\n.videoWrapper {\r\n    position: relative;\r\n    padding-bottom: 56.25%;\r\n    padding-top: 25px;\r\n    height: 0;\r\n}\r\n\r\n.videoWrapper iframe {\r\n        position: absolute;\r\n        top: 0;\r\n        left: 0;\r\n        width: 100%;\r\n        height: 100%;\r\n    }\r\n\r\n.pro-basic, .pro-only, .pro-only2, .pro-video {\r\n    display: none;\r\n}\r\n\r\n.locked-snippet {\r\n    display: flex;\r\n    min-height: 300px;\r\n    background: #f8f8f8;\r\n    align-items: center;\r\n    justify-content: center;\r\n    flex-direction: column;\r\n    padding: 1em 3em;\r\n    position: relative;\r\n    top: -70px;\r\n}\r\n\r\n.pro-button {\r\n    margin: 15px 0;\r\n    background: #42b983;\r\n    border-radius: 0;\r\n    padding: .75em 2em;\r\n}\r\n\r\n.icon-blue, .icon-green, .icon-orange, .icon-pink, .icon-purple, .icon-red, .icon-yellow {\r\n    font-size: 1.4em;\r\n    margin-left: 5px;\r\n}\r\n\r\n.ep-label, .pro-label {\r\n    color: #fff;\r\n    border-radius: 5px;\r\n    padding: 2px 5px;\r\n    margin-top: 5px;\r\n    display: inline-block;\r\n}\r\n\r\n.pro-button:hover {\r\n    background: #3ba776 !important;\r\n    transition: background .25s ease;\r\n}\r\n\r\n.pro-label {\r\n    background: #42b983;\r\n    font-weight: 700;\r\n}\r\n\r\n.ep-label {\r\n    background: #b9c0c0;\r\n    font-weight: light;\r\n}\r\n\r\n#gde, #highlights {\r\n    background-color: #fff;\r\n}\r\n\r\n.color-orange {\r\n    color: #f16624 !important;\r\n}\r\n\r\n.color-blue {\r\n    color: #1c90f3 !important;\r\n}\r\n\r\n.color-green {\r\n    color: #42b983 !important;\r\n}\r\n\r\n.color-red {\r\n    color: #f66 !important;\r\n}\r\n\r\n.color-purple {\r\n    color: #764abc !important;\r\n}\r\n\r\n.color-yellow {\r\n    color: #ffcc2d !important;\r\n}\r\n\r\n.color-pink {\r\n    color: #d81b60 !important;\r\n}\r\n\r\n.icon-orange {\r\n    color: #f16624 !important;\r\n}\r\n\r\n.icon-green {\r\n    color: #42b983 !important;\r\n}\r\n\r\n.icon-blue {\r\n    color: #1c90f3 !important;\r\n}\r\n\r\n.icon-purple {\r\n    color: #764abc !important;\r\n}\r\n\r\n.icon-red {\r\n    color: #f66 !important;\r\n}\r\n\r\n.icon-pink {\r\n    color: #d81b60 !important;\r\n}\r\n\r\n.icon-yellow {\r\n    color: #ffcc2d !important;\r\n}\r\n\r\n.tweetbox {\r\n    display: inline-block;\r\n    font-family: sofia-pro,sans-serif !important;\r\n    min-width: 400px;\r\n    margin: 10px 5px;\r\n}\r\n\r\n@media(max-width:991px) {\r\n    .mobile-only {\r\n        display: block !important;\r\n    }\r\n\r\n    .desktop-only {\r\n        display: none !important;\r\n    }\r\n}\r\n\r\n#gde img, #highlights .point, .dot {\r\n    display: inline-block;\r\n}\r\n\r\n#highlights {\r\n    padding-bottom: 10px;\r\n}\r\n\r\n#highlights .inner {\r\n        /* max-width: $width;\r\n        margin: 0 auto; */\r\n    }\r\n\r\n#highlights .point {\r\n        width: 33%;\r\n        vertical-align: top;\r\n        box-sizing: border-box;\r\n        padding: 0 2em;\r\n    }\r\n\r\n#highlights .point h2 {\r\n            color: #f16624;\r\n            font-size: 1.5em;\r\n            font-weight: 400;\r\n            margin: 0;\r\n            padding: .5em 0;\r\n        }\r\n\r\n#highlights .point p {\r\n            color: #7f8c8d;\r\n        }\r\n\r\n#gde {\r\n    padding: 5px 40px 45px;\r\n}\r\n\r\n#gde .inner {\r\n        max-width: 700px;\r\n        margin: 0 auto;\r\n    }\r\n\r\n#gde img {\r\n        width: 100%;\r\n        height: auto;\r\n        max-width: 420px;\r\n        vertical-align: middle;\r\n    }\r\n\r\n.dot {\r\n    height: 8px;\r\n    width: 8px;\r\n    background-color: #42b983;\r\n    border-radius: 50%;\r\n    position: relative;\r\n    bottom: 5px;\r\n    right: 2px;\r\n}\r\n\r\n.slack-bar {\r\n    padding: 30px 20px;\r\n    font-size: 1.5em;\r\n}\r\n\r\n.tooltip, [data-tooltip] {\r\n    position: relative;\r\n    cursor: help;\r\n}\r\n\r\n.tooltip:after, .tooltip:before, [data-tooltip]:after, [data-tooltip]:before {\r\n        position: absolute;\r\n        visibility: hidden;\r\n        text-align: center;\r\n        font-family: sofia-pro,sans-serif !important;\r\n        font-size: 12px !important;\r\n        text-transform: uppercase;\r\n        font-weight: 400 !important;\r\n        cursor: help;\r\n        opacity: 0;\r\n        transition: opacity .15s ease-in-out,visibility .15s ease-in-out,-webkit-transform .15s cubic-bezier(.71,1.7,.77,1.24);\r\n        transition: opacity .15s ease-in-out,visibility .15s ease-in-out,transform .15s cubic-bezier(.71,1.7,.77,1.24);\r\n        transition: opacity .15s ease-in-out,visibility .15s ease-in-out,transform .15s cubic-bezier(.71,1.7,.77,1.24),-webkit-transform .15s cubic-bezier(.71,1.7,.77,1.24);\r\n        -webkit-transform: translate3d(0,0,0);\r\n        transform: translate3d(0,0,0);\r\n        pointer-events: none;\r\n    }\r\n\r\n.tooltip:focus:after, .tooltip:focus:before, .tooltip:hover:after, .tooltip:hover:before, [data-tooltip]:focus:after, [data-tooltip]:focus:before, [data-tooltip]:hover:after, [data-tooltip]:hover:before {\r\n        visibility: visible;\r\n        opacity: 1;\r\n    }\r\n\r\n.tooltip:before, [data-tooltip]:before {\r\n        z-index: 1001;\r\n        border: 6px solid transparent;\r\n        background: 0 0;\r\n        content: \"\";\r\n    }\r\n\r\n.tooltip:after, [data-tooltip]:after {\r\n        z-index: 1000;\r\n        padding: 8px;\r\n        width: 160px;\r\n        background-color: #000;\r\n        background-color: rgba(51,51,51,.9);\r\n        color: #fff;\r\n        content: attr(data-tooltip);\r\n        font-size: 14px;\r\n        line-height: 1.2;\r\n    }\r\n\r\n.native-cta, .native-sponsor {\r\n    width: 100%;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.tooltip-top:after, .tooltip-top:before, .tooltip:after, .tooltip:before, [data-tooltip]:after, [data-tooltip]:before {\r\n    bottom: 100%;\r\n    left: 50%;\r\n}\r\n\r\n.tooltip-top:before, .tooltip:before, [data-tooltip]:before {\r\n    margin-left: -6px;\r\n    margin-bottom: -12px;\r\n    border-top-color: #000;\r\n    border-top-color: rgba(51,51,51,.9);\r\n}\r\n\r\n.tooltip-bottom:before, .tooltip-left:before, .tooltip-right:before {\r\n    margin-bottom: 0;\r\n    border-top-color: transparent;\r\n}\r\n\r\n.tooltip-top:after, .tooltip:after, [data-tooltip]:after {\r\n    margin-left: -80px;\r\n}\r\n\r\n.tooltip-top:focus:after, .tooltip-top:focus:before, .tooltip-top:hover:after, .tooltip-top:hover:before, .tooltip:focus:after, .tooltip:focus:before, .tooltip:hover:after, .tooltip:hover:before, [data-tooltip]:focus:after, [data-tooltip]:focus:before, [data-tooltip]:hover:after, [data-tooltip]:hover:before {\r\n    -webkit-transform: translateY(-12px);\r\n    transform: translateY(-12px);\r\n}\r\n\r\n.tooltip-left:after, .tooltip-left:before {\r\n    right: 100%;\r\n    bottom: 50%;\r\n    left: auto;\r\n}\r\n\r\n.tooltip-left:before {\r\n    margin-left: 0;\r\n    margin-right: -12px;\r\n    border-left-color: #000;\r\n    border-left-color: rgba(51,51,51,.9);\r\n}\r\n\r\n.tooltip-left:focus:after, .tooltip-left:focus:before, .tooltip-left:hover:after, .tooltip-left:hover:before {\r\n    -webkit-transform: translateX(-12px);\r\n    transform: translateX(-12px);\r\n}\r\n\r\n.tooltip-bottom:after, .tooltip-bottom:before {\r\n    top: 100%;\r\n    bottom: auto;\r\n    left: 50%;\r\n}\r\n\r\n.tooltip-bottom:before {\r\n    margin-top: -12px;\r\n    border-bottom-color: #000;\r\n    border-bottom-color: rgba(51,51,51,.9);\r\n}\r\n\r\n.tooltip-bottom:focus:after, .tooltip-bottom:focus:before, .tooltip-bottom:hover:after, .tooltip-bottom:hover:before {\r\n    -webkit-transform: translateY(12px);\r\n    transform: translateY(12px);\r\n}\r\n\r\n.tooltip-right:after, .tooltip-right:before {\r\n    bottom: 50%;\r\n    left: 100%;\r\n}\r\n\r\n.tooltip-right:before {\r\n    margin-left: -12px;\r\n    border-right-color: #000;\r\n    border-right-color: rgba(51,51,51,.9);\r\n}\r\n\r\n.tooltip-right:focus:after, .tooltip-right:focus:before, .tooltip-right:hover:after, .tooltip-right:hover:before {\r\n    -webkit-transform: translateX(12px);\r\n    transform: translateX(12px);\r\n}\r\n\r\n.tooltip-left:before, .tooltip-right:before {\r\n    top: 3px;\r\n}\r\n\r\n.native-show {\r\n    display: block;\r\n}\r\n\r\n.native-ad {\r\n    z-index: 99;\r\n    position: fixed;\r\n    visibility: hidden;\r\n    right: 20px;\r\n    bottom: 20px;\r\n    overflow: hidden;\r\n    max-width: 180px;\r\n    border: 1px solid #e6e6e6;\r\n    background-color: #fff;\r\n    box-shadow: 1px 1px 15px 0 rgba(0,0,0,.15);\r\n    font-size: 13px;\r\n    line-height: 1.5;\r\n    -webkit-animation: fadein 1.2s;\r\n            animation: fadein 1.2s;\r\n    display: flex;\r\n    aligin-items: column;\r\n    flex-direction: column;\r\n}\r\n\r\n.ad-close {\r\n    z-index: 99999;\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    padding: 3px 5px;\r\n    background-color: #ddd;\r\n    color: #000;\r\n    font-size: 9px;\r\n    line-height: 1;\r\n    cursor: pointer;\r\n}\r\n\r\n.main-grid {\r\n    display: -ms-grid;\r\n    display: grid;\r\n    grid-gap: 12px;\r\n    -ms-grid-columns: (245px)[3];\r\n        grid-template-columns: repeat(3,245px);\r\n}\r\n\r\n.native-ad a, .native-ad span {\r\n    display: block;\r\n}\r\n\r\n.native-show {\r\n    opacity: 1;\r\n    visibility: visible;\r\n}\r\n\r\n.native-ad a {\r\n    color: #111;\r\n}\r\n\r\n#carbonads a, #carbonads a:hover {\r\n    color: inherit;\r\n}\r\n\r\n.native-wrap {\r\n    padding: 5px;\r\n    position: relative;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.native-cta {\r\n    border-bottom: solid 1px #eee;\r\n    font-size: 10px;\r\n    line-height: 1;\r\n    padding: 6px 0;\r\n    letter-spacing: .5px;\r\n}\r\n\r\n.native-img {\r\n    max-width: 50%;\r\n}\r\n\r\n.native-desc {\r\n    font-size: 13px;\r\n    padding: 8px 10px;\r\n    margin-bottom: 30px;\r\n}\r\n\r\n.native-desc strong {\r\n        font-weight: 600;\r\n    }\r\n\r\n.native-sponsor {\r\n    font-size: 9px;\r\n    position: absolute;\r\n    bottom: 0;\r\n    background: repeating-linear-gradient(-45deg,transparent,transparent 5px,rgba(0,0,0,.025) 5px,rgba(0,0,0,.025) 10px) rgba(227,230,232,.3);\r\n    padding: 8px 10px;\r\n    letter-spacing: .2px;\r\n}\r\n\r\n#carbonSide, #header {\r\n    background-color: #fff;\r\n}\r\n\r\n#carbonSide {\r\n    display: block;\r\n    overflow: hidden;\r\n    margin-bottom: 8px;\r\n    padding: 15px;\r\n}\r\n\r\n#carbonads span {\r\n    display: block;\r\n    overflow: hidden;\r\n}\r\n\r\n.carbon-img {\r\n    display: block;\r\n    margin: 0 auto 8px;\r\n    line-height: 1;\r\n}\r\n\r\n.carbon-text {\r\n    display: block;\r\n    margin-bottom: 8px;\r\n    font-size: 12px;\r\n}\r\n\r\n.carbon-poweredby {\r\n    display: block;\r\n    text-transform: uppercase;\r\n    letter-spacing: 1px;\r\n    font-size: 8px;\r\n    line-height: 1;\r\n}\r\n\r\n#algolia-brand {\r\n    display: flex;\r\n    align-items: flex-end;\r\n    flex-direction: column;\r\n}\r\n\r\n#algolia-brand img {\r\n        width: auto;\r\n        max-width: 120px;\r\n    }\r\n\r\n.author-bio {\r\n    min-height: 50vh;\r\n    margin: auto;\r\n    padding: 0 10vw 30px;\r\n    font-weight: 300;\r\n}\r\n\r\n.new-label, .pro {\r\n    color: #fff;\r\n    font-weight: 700;\r\n}\r\n\r\n.author-bio p {\r\n    font-size: 1.5em;\r\n    text-align: justify;\r\n}\r\n\r\n.author-bio img {\r\n    border-radius: 50%;\r\n    max-width: 120px !important;\r\n    border: 5px solid #d9dddd;\r\n}\r\n\r\n.course-link {\r\n    margin: 20px 0 5px;\r\n    display: block;\r\n}\r\n\r\n#mobile-bar, #nav .break {\r\n    display: none;\r\n}\r\n\r\n#header {\r\n    height: 40px;\r\n    padding: 10px 60px;\r\n    position: relative;\r\n    z-index: 2;\r\n}\r\n\r\nbody.docs #header {\r\n    position: fixed;\r\n    width: 100%;\r\n    top: 0;\r\n}\r\n\r\nbody.docs #nav {\r\n    position: fixed;\r\n}\r\n\r\n#nav {\r\n    margin: 0;\r\n    padding: 0;\r\n    position: absolute;\r\n    right: 30px;\r\n    top: 10px;\r\n    height: 40px;\r\n    line-height: 40px;\r\n}\r\n\r\n#logo, #nav li {\r\n        display: inline-block;\r\n    }\r\n\r\n#nav li {\r\n        position: relative;\r\n        margin: 0 .6em;\r\n    }\r\n\r\n.nav-link {\r\n    padding-bottom: 3px;\r\n}\r\n\r\n.nav-link.current, .nav-link:hover {\r\n        border-bottom: 3px solid #f16624;\r\n    }\r\n\r\n.nav-link.shop {\r\n        margin-left: 8px;\r\n    }\r\n\r\n.pro {\r\n    background: #70cca2;\r\n    padding: 2px 5px;\r\n    border-radius: 5px;\r\n    transition: .5s background ease;\r\n    margin-left: 0;\r\n}\r\n\r\n.pro.current, .pro:hover {\r\n        border-bottom: 0;\r\n        background: #42b983;\r\n        transition: .5s background ease;\r\n    }\r\n\r\n.new-label {\r\n    position: absolute;\r\n    top: 3px;\r\n    left: 110%;\r\n    background-color: #f16624;\r\n    line-height: 16px;\r\n    height: 16px;\r\n    font-size: 9px;\r\n    font-family: droid-sans-mono,monospace;\r\n    padding: 1px 4px 0 6px;\r\n    border-radius: 4px;\r\n}\r\n\r\n#logo, .lesson-preview .preview-content a, .search-query {\r\n    color: #2c3e50;\r\n}\r\n\r\n.search-query {\r\n    height: 30px;\r\n    line-height: 30px;\r\n    box-sizing: border-box;\r\n    padding: 0 15px 0 30px;\r\n    border: 1px solid #e3e3e3;\r\n    outline: 0;\r\n    border-radius: 15px;\r\n    margin-right: 10px;\r\n    transition: border-color .2s ease;\r\n    /* background: url(../images/search.png) 8px 5px no-repeat #fff; */\r\n    background-size: 20px;\r\n    vertical-align: middle !important;\r\n}\r\n\r\n.search-query:focus {\r\n        border-color: #f16624;\r\n    }\r\n\r\n.search-query input {\r\n        font-family: sofia-pro,sans-serif;\r\n        font-size: .95em;\r\n        outline: 0;\r\n        border: 0;\r\n    }\r\n\r\n#logo {\r\n    font-size: 1.5em;\r\n    line-height: 40px;\r\n    font-weight: 800;\r\n    font-family: Palanquin,sans-serif;\r\n}\r\n\r\n#logo img {\r\n        vertical-align: middle;\r\n        margin-right: 6px;\r\n        width: 40px;\r\n        height: 40px;\r\n    }\r\n\r\n#mobile-bar {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 40px;\r\n    background-color: #fff;\r\n    z-index: 9;\r\n    box-shadow: 0 0 2px rgba(0,0,0,.25);\r\n}\r\n\r\n#mobile-bar .menu-button {\r\n        position: absolute;\r\n        width: 24px;\r\n        height: 24px;\r\n        top: 8px;\r\n        left: 12px;\r\n        /* background: url(../images/menu.png) center center no-repeat; */\r\n        background-size: 24px;\r\n    }\r\n\r\n#mobile-bar .logo {\r\n        position: absolute;\r\n        width: 30px;\r\n        height: 30px;\r\n        /* background: url(../images/logo.png) center center no-repeat; */\r\n        top: 5px;\r\n        left: 50%;\r\n        margin-left: -15px;\r\n        background-size: 30px;\r\n    }\r\n\r\n#search-button {\r\n    cursor: pointer;\r\n}\r\n\r\n#search-wrapper {\r\n    display: flex;\r\n    -webkit-transform: scale(0);\r\n            transform: scale(0);\r\n    visibility: hidden;\r\n    opacity: 0;\r\n    position: fixed;\r\n    height: 100%;\r\n    width: 100%;\r\n    color: #fff;\r\n    left: 0;\r\n    right: 0;\r\n    background: #000;\r\n    z-index: 99;\r\n    margin: auto;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    transition: -webkit-transform .2s ease;\r\n    transition: transform .2s ease;\r\n    transition: transform .2s ease, -webkit-transform .2s ease;\r\n}\r\n\r\n#search-wrapper em {\r\n        color: #1c90f3;\r\n        font-weight: 700;\r\n        font-style: normal;\r\n    }\r\n\r\n#search-wrapper.show-search {\r\n        -webkit-transform: scale(1);\r\n                transform: scale(1);\r\n        transition: -webkit-transform .2s ease;\r\n        transition: transform .2s ease;\r\n        transition: transform .2s ease, -webkit-transform .2s ease;\r\n        visibility: visible;\r\n        opacity: .9;\r\n    }\r\n\r\n#searchInner {\r\n    width: 75vw;\r\n    overflow: auto;\r\n}\r\n\r\n#hits {\r\n    overflow-y: scroll;\r\n}\r\n\r\n#search-input {\r\n    font-family: inherit;\r\n    font-size: 7vw;\r\n    line-height: 1;\r\n    display: block;\r\n    box-sizing: border-box;\r\n    padding: .05em 0;\r\n    color: #f7a37c;\r\n    border: 0;\r\n    outline: 0;\r\n    background: 0 0;\r\n    border-bottom: 5px solid;\r\n    margin-top: 3vh;\r\n}\r\n\r\n#search-close {\r\n    font-size: 2em;\r\n    color: #f7a37c;\r\n    cursor: pointer;\r\n    padding: 1em;\r\n    align-self: flex-end;\r\n}\r\n\r\n.hit-content {\r\n    padding: 5px;\r\n    word-wrap: break-word;\r\n}\r\n\r\n.hit-content a {\r\n        color: #fff;\r\n        font-family: droid-sans-mono,monospace;\r\n        transition: color .33s ease;\r\n    }\r\n\r\n.hit-content a:hover {\r\n            color: #1c90f3;\r\n            transition: color .33s ease;\r\n        }\r\n\r\n.hit-content .hit-icon {\r\n        display: none;\r\n    }\r\n\r\n.hit-content .fa-code.hit-icon.hit-post, .hit-content .fa-newspaper-o.hit-icon.hit-page {\r\n        display: inline;\r\n    }\r\n\r\n#search-info {\r\n    font-size: 90%;\r\n    font-weight: 700;\r\n    display: block;\r\n    margin: 0 auto;\r\n    padding: .85em 0;\r\n    text-align: right;\r\n    color: #f7a37c;\r\n}\r\n\r\n.label-new {\r\n    display: inline-block;\r\n    padding: .25em .4em;\r\n    font-size: 75%;\r\n    font-weight: 700;\r\n    line-height: 1;\r\n    text-align: center;\r\n    vertical-align: baseline;\r\n    border-radius: .25rem;\r\n    background: #ff8585;\r\n    color: #fff;\r\n    position: relative;\r\n    top: -5px;\r\n    left: 4px;\r\n}\r\n\r\n#demo, .content .demo, .demo {\r\n    border: 1px solid #eee;\r\n    border-radius: 2px;\r\n    padding: 25px 35px;\r\n    margin-top: 1em;\r\n    margin-bottom: 40px;\r\n    font-size: 1.2em;\r\n    line-height: 1.5em;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    user-select: none;\r\n    overflow-x: auto;\r\n}\r\n\r\n.toc .big:active, .toc .big:focus, .toc .big:hover, .toc .sub:active, .toc .sub:focus, .toc .sub:hover, .toc .toc-item a:active, .toc .toc-item a:focus, .toc .toc-item a:hover {\r\n    border-bottom: 1px #f16624 solid;\r\n}\r\n\r\n#demo h1, .content .demo h1, .demo h1 {\r\n    margin: 0 0 .5em;\r\n    font-size: 1.8em;\r\n}\r\n\r\n#demo ol, #demo ul, .content .demo ol, .content .demo ul, .demo ol, .demo ul {\r\n    padding-left: 1.5em;\r\n    padding-bottom: .2em !important;\r\n}\r\n\r\n#demo ol:first-child, #demo ul:first-child, .content .demo ol:first-child, .content .demo ul:first-child, .demo ol:first-child, .demo ul:first-child {\r\n        margin-top: 0;\r\n    }\r\n\r\n#demo ol:last-child, #demo ul:last-child, .content .demo ol:last-child, .content .demo ul:last-child, .demo ol:last-child, .demo ul:last-child {\r\n        margin-bottom: 0;\r\n    }\r\n\r\n#demo li, .content .demo li, .demo li {\r\n    color: #34495e;\r\n}\r\n\r\n#demo li.done, .content .demo li.done, .demo li.done {\r\n        color: #7f8c8d;\r\n        text-decoration: line-through;\r\n    }\r\n\r\n#demo p, .content .demo p, .demo p {\r\n    margin: 0 !important;\r\n    padding: 0 !important;\r\n}\r\n\r\n#demo p:first-child, .content .demo p:first-child, .demo p:first-child {\r\n        margin-top: 0;\r\n    }\r\n\r\n#demo p:last-child, .content .demo p:last-child, .demo p:last-child {\r\n        margin-bottom: 0;\r\n    }\r\n\r\n#demo textarea, .content .demo textarea, .demo textarea {\r\n    width: 100%;\r\n    resize: vertical;\r\n}\r\n\r\nul#demo li, ul.demo li {\r\n    margin-left: 1.5em;\r\n}\r\n\r\n@media screen and (max-width:900px) {\r\n    #demo, .demo {\r\n        margin-left: 0;\r\n    }\r\n}\r\n\r\n.benchmark-table {\r\n    margin: 0 auto;\r\n    text-align: center;\r\n}\r\n\r\n.benchmark-table tbody > tr > th {\r\n        text-align: right;\r\n    }\r\n\r\n.benchmark-table td, .benchmark-table th {\r\n        padding: 3px 7px;\r\n    }\r\n\r\n.sponsors-page a, .sponsors-page img {\r\n    width: 120px;\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n}\r\n\r\n.sponsors-page a {\r\n    margin: 10px 20px;\r\n}\r\n\r\n.content.guide[class*=migration] h2 > sup, .content.guide[class*=migration] h3 > sup {\r\n    margin-left: .3em;\r\n    color: #b9465c;\r\n}\r\n\r\n.content.guide[class*=migration] .upgrade-path {\r\n    margin-top: 2em;\r\n    padding: 2em;\r\n    background: rgba(73,195,140,.1);\r\n    border-radius: 2px;\r\n}\r\n\r\n.content.guide[class*=migration] .upgrade-path > h4 {\r\n        margin-top: 0;\r\n    }\r\n\r\n.content.guide[class*=migration] .upgrade-path > p:last-child {\r\n        margin-bottom: 0;\r\n        padding-bottom: 0;\r\n    }\r\n\r\n.toc {\r\n    list-style: none;\r\n    padding-left: 0;\r\n}\r\n\r\n.toc .toc-child {\r\n        list-style: none;\r\n        padding-left: 10px;\r\n    }\r\n\r\n.toc .toc-item.toc-level-2 a {\r\n        font-weight: 700;\r\n        font-size: 1em;\r\n    }\r\n\r\n.toc .toc-item.toc-level-3 a {\r\n        font-weight: 400;\r\n        font-size: .9em;\r\n    }\r\n\r\n.toc .big {\r\n        font-weight: 700;\r\n        font-size: 1.1em;\r\n    }\r\n\r\n.toc .sub {\r\n        margin-left: 7px;\r\n    }\r\n\r\n.sidebar {\r\n    background: #fff;\r\n    position: absolute;\r\n    z-index: 10;\r\n    top: 61px;\r\n    padding-top: 50px;\r\n    left: 0;\r\n    bottom: 0;\r\n    overflow-x: hidden;\r\n    overflow-y: auto;\r\n    -webkit-overflow-scrolling: touch;\r\n    -ms-overflow-style: none;\r\n}\r\n\r\n.sidebar::-webkit-scrollbar-thumb {\r\n        background-color: #7f8c8d;\r\n    }\r\n\r\n.sidebar::-webkit-scrollbar {\r\n        width: 5px;\r\n        background-color: #f5f5f5;\r\n    }\r\n\r\n.sidebar::-webkit-scrollbar-track {\r\n        -webkit-box-shadow: inset 0 0 2px rgba(0,0,0,.2);\r\n        /* background-color: #f8f8f8; */\r\n    }\r\n\r\n.sidebar h2 {\r\n        margin-top: .2em;\r\n    }\r\n\r\n.sidebar ul {\r\n        margin: 0;\r\n        line-height: 1.5em;\r\n        padding-left: 1em;\r\n    }\r\n\r\n.sidebar .sidebar-link.new:after, .sidebar .version-select {\r\n        margin-left: 5px;\r\n        vertical-align: middle;\r\n    }\r\n\r\n.sidebar li {\r\n        margin-top: .5em;\r\n    }\r\n\r\n.sidebar .sidebar-inner {\r\n        width: 260px;\r\n        padding: 40px 20px 60px 60px;\r\n    }\r\n\r\n.sidebar .menu-root {\r\n        padding-left: 0;\r\n    }\r\n\r\n.sidebar .menu-sub {\r\n        font-size: .85em;\r\n    }\r\n\r\n.sidebar .sidebar-link {\r\n        color: #7f8c8d;\r\n    }\r\n\r\n.sidebar .sidebar-link.current {\r\n            font-weight: 600;\r\n            color: #f16624;\r\n        }\r\n\r\n.sidebar .sidebar-link.new:after {\r\n            content: \"NEW\";\r\n            display: inline-block;\r\n            font-size: 10px;\r\n            font-weight: 600;\r\n            color: #fff;\r\n            background-color: #f16624;\r\n            line-height: 14px;\r\n            padding: 0 4px;\r\n            border-radius: 3px;\r\n            position: relative;\r\n            top: -1px;\r\n        }\r\n\r\n.sidebar .sidebar-link:hover {\r\n            border-bottom: 1px solid #f16624;\r\n        }\r\n\r\n.sidebar .section-link.active {\r\n        font-weight: 700;\r\n        color: #f16624;\r\n    }\r\n\r\n.sidebar .main-menu {\r\n        margin-bottom: 20px;\r\n        display: none;\r\n    }\r\n\r\n.sidebar .become-backer, .sidebar .main-sponsor a, .sidebar .main-sponsor img {\r\n        display: inline-block;\r\n        width: 125px;\r\n    }\r\n\r\n.sidebar .main-sponsor {\r\n        color: #7f8c8d;\r\n        font-size: .85em;\r\n    }\r\n\r\n.sidebar .main-sponsor .logo {\r\n            color: #7f8c8d;\r\n            margin: 10px 0;\r\n            padding: 10px 0;\r\n            text-align: center;\r\n            font-weight: 700;\r\n        }\r\n\r\n.sidebar .become-backer {\r\n        border: 1px solid #f16624;\r\n        border-radius: 2em;\r\n        color: #f16624;\r\n        font-size: .8em;\r\n        padding: 4px 0;\r\n        text-align: center;\r\n        margin-bottom: 20px;\r\n    }\r\n\r\n.sidebar .nav-dropdown h4 {\r\n        font-weight: 400;\r\n        margin: 0;\r\n    }\r\n\r\n@media screen and (max-width:900px) {\r\n    .sidebar {\r\n        position: fixed;\r\n        z-index: 10;\r\n        background-color: #f9f9f9;\r\n        height: 100%;\r\n        top: 0;\r\n        left: 0;\r\n        box-shadow: 0 0 10px rgba(0,0,0,.2);\r\n        transition: all .4s cubic-bezier(.4,0,0,1);\r\n        -webkit-transform: translate(-280px,0);\r\n        transform: translate(-280px,0);\r\n    }\r\n\r\n        .sidebar .sidebar-inner {\r\n            padding: 50px 10px 10px 20px;\r\n            box-sizing: border-box;\r\n        }\r\n\r\n        .sidebar .sidebar-inner-index {\r\n            padding: 10px 10px 10px 20px;\r\n        }\r\n\r\n        .sidebar .search-query {\r\n            width: 200px;\r\n            margin-bottom: 10px;\r\n        }\r\n\r\n        .sidebar .main-menu {\r\n            display: block;\r\n        }\r\n\r\n        .sidebar.open {\r\n            -webkit-transform: translate(0,0);\r\n            transform: translate(0,0);\r\n        }\r\n}\r\n\r\n.content.menu {\r\n    font-size: 1.2em;\r\n}\r\n\r\n.content.menu .menu-root {\r\n        padding-left: 0;\r\n    }\r\n\r\n.content.menu #search-form, .content.menu .algolia-autocomplete, .content.menu input {\r\n        width: 100%;\r\n    }\r\n\r\n.content.menu .aa-dropdown-menu {\r\n        box-sizing: border-box;\r\n    }\r\n\r\n.content.menu h3 {\r\n        margin: 1.5em 0 .75em;\r\n    }\r\n\r\n.content.menu h3:after, .content.menu h3:before {\r\n            display: none;\r\n        }\r\n\r\n.content.menu li {\r\n        margin-top: .1em;\r\n    }\r\n\r\n#header {\r\n    box-shadow: 0 0 1px rgba(0,0,0,.25);\r\n    transition: background-color .3s ease-in-out;\r\n}\r\n\r\n.list-description {\r\n    margin-bottom: 50px;\r\n}\r\n\r\n.lesson-preview {\r\n    width: 100%;\r\n    padding: 10px 0;\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n    border-bottom: 1px solid #ddd;\r\n    display: flex;\r\n    flex-direction: row;\r\n}\r\n\r\n.lesson-preview .featured-image {\r\n        display: inline-block;\r\n        width: 25%;\r\n    }\r\n\r\n.lesson-preview .featured-image img {\r\n            width: 100%;\r\n            max-width: 200px;\r\n            height: auto;\r\n        }\r\n\r\n.lesson-preview .preview-content {\r\n        display: inline-block;\r\n        width: 75%;\r\n        padding-left: 25px;\r\n    }\r\n\r\n.lesson-preview .preview-content h2 {\r\n            padding: 0;\r\n            margin: 0;\r\n            border: 0;\r\n        }\r\n\r\n.lesson-preview .preview-content.lite {\r\n            width: 100%;\r\n            padding-left: 0;\r\n        }\r\n\r\n.content {\r\n    position: relative;\r\n    padding: 2.2em 0 2.2em 30px;\r\n    margin: 0 auto;\r\n}\r\n\r\n.content.api > a:first-of-type > h2 {\r\n        margin-top: 0;\r\n        padding-top: 0;\r\n    }\r\n\r\n.content.api ul {\r\n        padding-left: 1.25em;\r\n        line-height: 1.4em;\r\n    }\r\n\r\n.content.api ul p:not(.tip), .content.api ul ul {\r\n            padding-bottom: 0;\r\n            margin: 1.2em 0;\r\n        }\r\n\r\n.content a.button {\r\n        font-size: .9em;\r\n        color: #fff;\r\n        margin: .2em 0;\r\n        width: 180px;\r\n        text-align: center;\r\n        padding: 12px 24px;\r\n        display: inline-block;\r\n        vertical-align: middle;\r\n    }\r\n\r\n.content img {\r\n        max-width: 100%;\r\n    }\r\n\r\n.content span.light {\r\n        color: #7f8c8d;\r\n    }\r\n\r\n.content span.info {\r\n        font-size: .85em;\r\n        display: inline-block;\r\n        vertical-align: middle;\r\n        width: 280px;\r\n        margin-left: 20px;\r\n    }\r\n\r\n.content h1 {\r\n        margin: 0 0 1em;\r\n    }\r\n\r\n.content h2:before, .content h3:before {\r\n        content: '';\r\n        display: block;\r\n        margin-top: -91px;\r\n        height: 91px;\r\n        visibility: hidden;\r\n    }\r\n\r\n.content h2 {\r\n        margin: 45px 0 .8em;\r\n        padding-bottom: .7em;\r\n        border-bottom: 1px solid #ddd;\r\n        z-index: -1;\r\n    }\r\n\r\n.content h3 {\r\n        margin: 52px 0 1.2em;\r\n        position: relative;\r\n        z-index: -1;\r\n    }\r\n\r\n.content h3:after {\r\n            content: \"#\";\r\n            color: #f16624;\r\n            position: absolute;\r\n            left: -.7em;\r\n            bottom: -2px;\r\n            font-size: 1.2em;\r\n            font-weight: 700;\r\n        }\r\n\r\n.content figure {\r\n        margin: 1.2em 0;\r\n    }\r\n\r\n.content ol, .content p, .content ul {\r\n        line-height: 1.6em;\r\n        margin: 1.2em 0 -1.2em;\r\n        padding-bottom: 1.2em;\r\n        position: relative;\r\n        z-index: 1;\r\n    }\r\n\r\n.content ol, .content ul {\r\n        padding-left: 1.5em;\r\n        position: inherit;\r\n    }\r\n\r\n.content a {\r\n        color: #1c90f3;\r\n        font-weight: 600;\r\n    }\r\n\r\n.content blockquote {\r\n        margin: 2em 0;\r\n        padding-left: 20px;\r\n        border-left: 4px solid #f16624;\r\n    }\r\n\r\n.content blockquote p {\r\n            font-weight: 600;\r\n            margin-left: 0;\r\n            margin-bottom: 0;\r\n            padding-bottom: 0;\r\n        }\r\n\r\n.content iframe {\r\n        margin: 1em 0;\r\n    }\r\n\r\n.content > table {\r\n        border-spacing: 0;\r\n        border-collapse: collapse;\r\n        margin: 1.2em auto;\r\n        padding: 0;\r\n        display: block;\r\n        overflow-x: auto;\r\n    }\r\n\r\n.content > table td, .content > table th {\r\n            line-height: 1.5em;\r\n            padding: .4em .8em;\r\n            border: 0;\r\n            border: 1px solid #ddd;\r\n        }\r\n\r\n.content > table th {\r\n            font-weight: 700;\r\n            text-align: left;\r\n        }\r\n\r\n.content > table th, .content > table tr:nth-child(2n) {\r\n            background-color: #f8f8f8;\r\n        }\r\n\r\n.content div.success code, .content div.tip code, .content div.warn code, .content p.success code, .content p.tip code, .content p.warn code, .content > table th code, .content > table tr:nth-child(2n) code {\r\n                background-color: #efefef;\r\n            }\r\n\r\n.content div.success, .content div.tip, .content div.warn, .content p.success, .content p.tip, .content p.warn {\r\n        padding: 12px 24px 12px 30px;\r\n        margin: 2em 0;\r\n        border-left-width: 4px;\r\n        border-left-style: solid;\r\n        position: relative;\r\n        border-radius: 2px;\r\n    }\r\n\r\n.content div.success:before, .content div.tip:before, .content div.warn:before, .content p.success:before, .content p.tip:before, .content p.warn:before {\r\n            position: absolute;\r\n            top: 14px;\r\n            left: -12px;\r\n            color: #fff;\r\n            width: 20px;\r\n            height: 20px;\r\n            border-radius: 100%;\r\n            text-align: center;\r\n            line-height: 20px;\r\n            font-weight: 700;\r\n            font-family: Palanquin,sans-serif;\r\n            font-size: 14px;\r\n        }\r\n\r\ndiv.tip.health .sm, div.tip.health ul {\r\n    font-size: .85em;\r\n    color: #7f8c8d;\r\n}\r\n\r\n.content div.success em, .content div.tip em, .content div.warn em, .content p.success em, .content p.tip em, .content p.warn em {\r\n    color: #34495e;\r\n}\r\n\r\n.content div.tip, .content p.tip {\r\n    border-left-color: #1c90f3;\r\n    background-color: #c6e3fc;\r\n    color: #074981;\r\n}\r\n\r\n.content div.tip a, .content p.tip a {\r\n        color: #074981;\r\n    }\r\n\r\n.content div.tip:before, .content p.tip:before {\r\n        content: '?';\r\n        background-color: #1c90f3;\r\n    }\r\n\r\n.content div.success, .content p.success {\r\n    border-left-color: #42b983;\r\n    background-color: #cfeee0;\r\n    color: #215d42;\r\n}\r\n\r\n.content div.success a, .content p.success a {\r\n        color: #215d42;\r\n    }\r\n\r\n.content div.success:before, .content p.success:before {\r\n        content: 'âœ”';\r\n        background-color: #42b983;\r\n    }\r\n\r\n.content div.warn, .content p.warn {\r\n    border-left-color: #f66;\r\n    background-color: #ffd9d9;\r\n    color: #b20000;\r\n}\r\n\r\n.content div.warn a, .content p.warn a {\r\n        color: #b20000;\r\n    }\r\n\r\n.content div.warn:before, .content p.warn:before {\r\n        content: '!';\r\n        background-color: #f66;\r\n    }\r\n\r\ndiv.tip.health {\r\n    border-left-color: #d81b60;\r\n    background-color: #f8f8f8;\r\n    color: #2c3e50;\r\n}\r\n\r\ndiv.tip.health:before {\r\n        content: 'â™¥';\r\n        background-color: #ec6596;\r\n    }\r\n\r\ndiv.tip.health ul {\r\n        list-style: none;\r\n        padding-left: 0;\r\n        font-family: droid-sans-mono,monospace;\r\n        font-weight: 700;\r\n    }\r\n\r\n.guide-links {\r\n    margin-top: 2em;\r\n    height: 1em;\r\n}\r\n\r\n.footer {\r\n    color: #7f8c8d;\r\n    margin-top: 2em;\r\n    padding-top: 2em;\r\n    border-top: 1px solid #e5e5e5;\r\n    font-size: .9em;\r\n    border-bottom: 1px solid #e5e5e5;\r\n    margin-bottom: 2em;\r\n    padding-bottom: 2em;\r\n}\r\n\r\n#main.fix-sidebar .sidebar {\r\n    position: fixed;\r\n}\r\n\r\n@media screen and (min-width:1590px) {\r\n    #header {\r\n        background-color: rgba(255,255,255,.4);\r\n    }\r\n}\r\n\r\n@media screen and (max-width:5000px) {\r\n    .content.with-sidebar {\r\n        margin-left: 290px;\r\n    }\r\n\r\n    #ad {\r\n        z-index: 7;\r\n        position: relative;\r\n        bottom: 0;\r\n        right: 0;\r\n        float: right;\r\n        padding: 0 0 20px 30px;\r\n    }\r\n}\r\n\r\n@media screen and (max-width:900px) {\r\n    body {\r\n        -webkit-text-size-adjust: none;\r\n        font-size: 14px;\r\n    }\r\n\r\n    #header, #logo {\r\n        display: none;\r\n    }\r\n\r\n    .nav-link {\r\n        padding-bottom: 1px;\r\n    }\r\n\r\n        .nav-link.current, .nav-link:hover {\r\n            border-bottom: 2px solid #f16624;\r\n        }\r\n\r\n    #mobile-bar {\r\n        display: block;\r\n    }\r\n\r\n    #main {\r\n        padding: 2em 1.4em 0;\r\n    }\r\n\r\n    .highlight pre {\r\n        padding: 1.2em 1em;\r\n    }\r\n\r\n    .content {\r\n        padding-left: 0;\r\n    }\r\n\r\n        .content.with-sidebar {\r\n            margin: auto;\r\n        }\r\n\r\n        .content h2:before, .content h3:before {\r\n            content: '';\r\n            display: block;\r\n            margin-top: -70px;\r\n            height: 70px;\r\n            visibility: hidden;\r\n        }\r\n\r\n    .footer {\r\n        margin-left: 0;\r\n        text-align: center;\r\n    }\r\n}\r\n\r\n@media screen and (max-width:560px) {\r\n    #downloads {\r\n        text-align: center;\r\n        margin-bottom: 25px;\r\n    }\r\n\r\n        #downloads .info {\r\n            margin-top: 5px;\r\n            margin-left: 0;\r\n        }\r\n\r\n    iframe {\r\n        margin: 0 !important;\r\n    }\r\n}\r\n\r\n.featured-image a img {\r\n    box-shadow: 3px 3px 3px 0 #c6c6c6;\r\n    transition: box-shadow .2s ease;\r\n}\r\n\r\n.featured-image a img:hover {\r\n        box-shadow: 4px 4px 4px 1px #a0a0a0;\r\n        transition: box-shadow .2s ease;\r\n    }\r\n\r\n.pricing {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n    width: 100%;\r\n    margin: 0 auto 1.5em;\r\n}\r\n\r\n.pricing__item {\r\n    position: relative;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: stretch;\r\n    text-align: center;\r\n    flex: 0 1 220px;\r\n    cursor: pointer;\r\n}\r\n\r\n.pricing__feature-list {\r\n    text-align: left;\r\n    color: #444;\r\n}\r\n\r\n.pricing__action {\r\n    color: inherit;\r\n    border: 0;\r\n    background: 0 0;\r\n}\r\n\r\n.pricing__action:focus {\r\n        outline: 0;\r\n    }\r\n\r\n.pricing--jinpa .pricing__item {\r\n    font-family: Palanquin,sans-serif;\r\n    margin: 1.5em 0;\r\n    padding: 2em;\r\n    cursor: pointer;\r\n    color: #fff;\r\n    border: 1px solid #cbffc8;\r\n    transition: background-color .6s,color .3s;\r\n}\r\n\r\n.pricing--jinpa .pricing__item:nth-child(2) {\r\n        border-right: 0;\r\n        border-left: 0;\r\n    }\r\n\r\n.pricing--jinpa .pricing__item:hover {\r\n        color: #444;\r\n        background: #cbffc8;\r\n    }\r\n\r\n.pricing--jinpa .pricing__title {\r\n    font-size: 2em;\r\n    width: 100%;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n.pricing--jinpa .pricing__price {\r\n    font-size: 1.45em;\r\n    font-weight: 700;\r\n    line-height: 95px;\r\n    width: 100px;\r\n    height: 100px;\r\n    margin: 1.15em auto 1em;\r\n    border-radius: 50%;\r\n    background: #ea716e;\r\n    transition: color .3s,background .3s;\r\n}\r\n\r\n.pricing--jinpa .pricing__item:first-child .pricing__price {\r\n    background: #eac36e;\r\n}\r\n\r\n.pricing--jinpa .pricing__item:nth-child(2) .pricing__price {\r\n    background: #eaa36e;\r\n}\r\n\r\n.pricing--jinpa .pricing__item:hover .pricing__price {\r\n    color: #fff;\r\n    background: #82c57e;\r\n}\r\n\r\n.pricing--jinpa .pricing__sentence {\r\n    font-weight: 700;\r\n    color: #444;\r\n}\r\n\r\n.pricing--jinpa .pricing__feature-list {\r\n    margin: 0;\r\n    padding: 1em .5em 1em 1em;\r\n    list-style: none;\r\n    text-align: center;\r\n}\r\n\r\n.pricing--jinpa .pricing__action {\r\n    font-weight: 700;\r\n    margin-top: auto;\r\n    padding: .75em 2em;\r\n    opacity: 0;\r\n    color: #fff;\r\n    background: #82c57e;\r\n    cursor: pointer;\r\n    transition: opacity .3s,-webkit-transform .3s;\r\n    transition: transform .3s,opacity .3s;\r\n    transition: transform .3s,opacity .3s,-webkit-transform .3s;\r\n    -webkit-transform: translate3d(0,-15px,0);\r\n    transform: translate3d(0,-15px,0);\r\n}\r\n\r\n.pricing--jinpa .pricing__item:hover .pricing__action {\r\n    opacity: 1;\r\n    -webkit-transform: translate3d(0,0,0);\r\n    transform: translate3d(0,0,0);\r\n}\r\n\r\n.pricing--jinpa .pricing__action:focus, .pricing--jinpa .pricing__action:hover {\r\n    background: #6ea76b;\r\n}\r\n\r\n@media screen and (max-width:60em) {\r\n    .pricing--jinpa .pricing__item {\r\n        max-width: none;\r\n        width: 90%;\r\n        flex: none;\r\n    }\r\n\r\n        .pricing--jinpa .pricing__item:nth-child(2) {\r\n            border: 1px solid #fff;\r\n        }\r\n}\r\n\r\n.tag-filters {\r\n    border-bottom: 1px solid #e0e0e0;\r\n    padding-bottom: 10px;\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n}\r\n\r\n.tag-item {\r\n    background: #1c90f3;\r\n    color: #fff;\r\n    margin: 5px 3px;\r\n    font-weight: 600 !important;\r\n    text-transform: uppercase;\r\n    letter-spacing: .1rem;\r\n    align-items: center;\r\n    border-radius: 2px;\r\n    display: inline-flex;\r\n    font-size: .75rem;\r\n    height: 2em;\r\n    justify-content: center;\r\n    line-height: 1.5;\r\n    padding-left: .75em;\r\n    padding-right: .75em;\r\n}\r\n\r\n.tag-blue svg, .tag-dark svg, .tag-green svg, .tag-orange svg, .tag-pink svg, .tag-purple svg, .tag-red svg, .tag-yellow svg {\r\n    padding-right: 5px;\r\n}\r\n\r\n.tag-item:first-child {\r\n    margin-left: 0;\r\n}\r\n\r\n.tag-green {\r\n    background: #8cd6b5;\r\n    border-left: solid 5px #359469;\r\n    color: #215d42 !important;\r\n}\r\n\r\n.tag-blue {\r\n    background: #77bcf8;\r\n    border-left: solid 5px #0b74ce;\r\n    color: #074981 !important;\r\n}\r\n\r\n.tag-purple {\r\n    background: #ad92d7;\r\n    border-left: solid 5px #5e3999;\r\n    color: #3b2360 !important;\r\n}\r\n\r\n.tag-yellow {\r\n    background: #ffdc6f;\r\n    border-left: solid 5px #d8a400;\r\n    color: #876600 !important;\r\n}\r\n\r\n.tag-orange {\r\n    background: #f7a37c;\r\n    border-left: solid 5px #d04c0d;\r\n    color: #823008 !important;\r\n}\r\n\r\n.tag-red {\r\n    background: #ffa3a3;\r\n    border-left: solid 5px #ff1f1f;\r\n    color: #b20000 !important;\r\n}\r\n\r\n.tag-pink {\r\n    background: #ff5cbf;\r\n    border-left: solid 5px #be0073;\r\n    color: #770048 !important;\r\n}\r\n\r\n.tag-dark {\r\n    background: #6a8bad;\r\n    border-left: solid 5px #233240;\r\n    color: #161f28 !important;\r\n}\r\n\r\naccordion{\r\n    margin-bottom: 66px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/user-control/user-control.component.html":
/*!**********************************************************!*\
  !*** ./src/app/user-control/user-control.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 _ngcontent-c3=\"\" id=\"Parent-to-Child-Sharing-Data-via-Input\">\r\n    <a _ngcontent-c3=\"\" class=\"headerlink\" href=\"#Parent-to-Child-Sharing-Data-via-Input\"></a>\r\n    This site using [Ngx Bootstrap] with bootstrap v3\r\n</h2>\r\n\r\n<accordion [closeOthers]=\"true\">\r\n    <accordion-group heading=\"Accordion\" [isOpen]=\"true\">\r\n        <accordion-tut></accordion-tut>\r\n    </accordion-group>\r\n    <accordion-group heading=\"Alert\">\r\n        <alert-tut></alert-tut>\r\n    </accordion-group>\r\n    <accordion-group heading=\"Carousel\">\r\n        <carousel-tut></carousel-tut>\r\n    </accordion-group>\r\n</accordion>"

/***/ }),

/***/ "./src/app/user-control/user-control.component.ts":
/*!********************************************************!*\
  !*** ./src/app/user-control/user-control.component.ts ***!
  \********************************************************/
/*! exports provided: UserControlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserControlComponent", function() { return UserControlComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/accordion */ "./node_modules/ngx-bootstrap/accordion/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var UserControlComponent = /** @class */ (function () {
    function UserControlComponent() {
    }
    UserControlComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'user-control',
            template: __webpack_require__(/*! ./user-control.component.html */ "./src/app/user-control/user-control.component.html"),
            styles: [__webpack_require__(/*! ./user-control.component.css */ "./src/app/user-control/user-control.component.css")],
            providers: [ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_1__["AccordionComponent"]]
        })
    ], UserControlComponent);
    return UserControlComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Project\Angular\Angular6Demo\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map