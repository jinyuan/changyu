(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _gameboard_gameboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameboard/gameboard.component */ "./src/app/gameboard/gameboard.component.ts");





const routes = [
    { path: '', component: _gameboard_gameboard_component__WEBPACK_IMPORTED_MODULE_2__["GameboardComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'chengyu-game';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _gameboard_gameboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gameboard/gameboard.component */ "./src/app/gameboard/gameboard.component.ts");
/* harmony import */ var _gamepiece_gamepiece_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gamepiece/gamepiece.component */ "./src/app/gamepiece/gamepiece.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");












class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeModule"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__["ModalModule"].forRoot()
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _gameboard_gameboard_component__WEBPACK_IMPORTED_MODULE_5__["GameboardComponent"],
        _gamepiece_gamepiece_component__WEBPACK_IMPORTED_MODULE_6__["GamepieceComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__["ModalModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _gameboard_gameboard_component__WEBPACK_IMPORTED_MODULE_5__["GameboardComponent"],
                    _gamepiece_gamepiece_component__WEBPACK_IMPORTED_MODULE_6__["GamepieceComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeModule"],
                    ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__["ModalModule"].forRoot()
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/gameboard/gameboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/gameboard/gameboard.component.ts ***!
  \**************************************************/
/*! exports provided: GameboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameboardComponent", function() { return GameboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _models_GamePiece__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/GamePiece */ "./src/app/models/GamePiece.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
/* harmony import */ var _providers_idioms_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../providers/idioms.service */ "./src/app/providers/idioms.service.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _gamepiece_gamepiece_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../gamepiece/gamepiece.component */ "./src/app/gamepiece/gamepiece.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");













const _c0 = ["gameEndModal"];
const _c1 = ["helpModal"];
function GameboardComponent_div_1_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const idiom_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", idiom_r9, " ");
} }
function GameboardComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Solution");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, GameboardComponent_div_1_ng_container_5_Template, 2, 1, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.idioms.keys());
} }
function GameboardComponent_div_11_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-gamepiece", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickEvent", function GameboardComponent_div_11_div_1_Template_app_gamepiece_clickEvent_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r14.pieceClick($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const gamePiece_r13 = ctx.$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", gamePiece_r13)("gameStarted", ctx_r12.gameStarted);
} }
function GameboardComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GameboardComponent_div_11_div_1_Template, 2, 2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", row_r10);
} }
const _c2 = function (a0) { return { "active": a0 }; };
function GameboardComponent_label_14_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function GameboardComponent_label_14_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.selectedDifficulty = $event; })("change", function GameboardComponent_label_14_Template_input_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.onDifficultyChange(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const difficulty_r16 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c2, ctx_r2.selectedDifficulty == difficulty_r16));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", difficulty_r16)("ngModel", ctx_r2.selectedDifficulty);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", difficulty_r16.name, " ");
} }
function GameboardComponent_button_19_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameboardComponent_button_19_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.startGame(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Start");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GameboardComponent_ng_template_20_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "You Won!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GameboardComponent_ng_template_20_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Game over");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GameboardComponent_ng_template_20_li_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const idiom_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", idiom_r25, " ");
} }
function GameboardComponent_ng_template_20_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GameboardComponent_ng_template_20_span_2_Template, 2, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GameboardComponent_ng_template_20_span_3_Template, 2, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameboardComponent_ng_template_20_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r26.modalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Answer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, GameboardComponent_ng_template_20_li_13_Template, 2, 1, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.selectedDifficulty.numOfIdioms === ctx_r5.score);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.selectedDifficulty.numOfIdioms !== ctx_r5.score);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" You score ", ctx_r5.score, "/", ctx_r5.selectedDifficulty.numOfIdioms, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.idioms.keys());
} }
const _c3 = function () { return ["fab", "github"]; };
function GameboardComponent_ng_template_22_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " How to play the game ? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameboardComponent_ng_template_22_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r28.modalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ol");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Choose your difficulty level");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Tap on the start button or any tile to start");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Select two tiles to swap the characters to form idioms");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Tap on the same tile to unselect");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "fa-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Github ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c3));
} }
const _c4 = function () { return ["fas", "clipboard"]; };
const _c5 = function () { return ["fas", "stopwatch"]; };
const _c6 = function () { return ["fas", "info"]; };
class GameboardComponent {
    constructor(library, idiomService, modalService, route) {
        this.library = library;
        this.idiomService = idiomService;
        this.modalService = modalService;
        this.route = route;
        this.selectedPieces = [];
        this.score = 0;
        this.gameStarted = false;
        this.secondsRemaining = 0;
        this.debug = false;
        library.addIcons(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faStopwatch"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faClipboard"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faInfo"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faGithub"]);
    }
    ngAfterViewInit() {
        if (localStorage.getItem('page.visited') !== 'true') {
            localStorage.setItem('page.visited', 'true');
            this.openModal(this.helpModal);
        }
    }
    ngOnInit() {
        this.idiomService.getDifficulties().subscribe((data) => {
            this.difficulties = data;
            this.selectedDifficulty = this.difficulties[1];
            this.resetGame();
        });
        Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(1000).subscribe((i) => {
            if (this.gameStarted && this.secondsRemaining <= 0) {
                this.stopGame();
            }
        });
        this.route.queryParams.subscribe(params => {
            this.debug = params['debug'] === 'true';
        });
    }
    pieceClick(gamePiece) {
        if (!this.gameStarted) {
            this.startGame();
        }
        else {
            if (this.selectedPieces.length < 1) {
                gamePiece.selected = true;
                this.selectedPieces.push(gamePiece);
            }
            else if (this.selectedPieces.length === 1) {
                const previousPiece = this.selectedPieces.pop();
                if (previousPiece == gamePiece) {
                    gamePiece.selected = false;
                }
                else {
                    this.swapPieces(previousPiece, gamePiece);
                    previousPiece.selected = false;
                    gamePiece.selected = false;
                    this.validateBoard();
                }
            }
        }
    }
    swapPieces(piece1, piece2) {
        const tmp = piece1.character;
        piece1.character = piece2.character;
        piece2.character = tmp;
    }
    populateBoard() {
        this.idiomService.getIdioms(this.selectedDifficulty).subscribe((data) => {
            this.idioms = new Map();
            let pieces = new Array();
            data.forEach(idiom => this.idioms.set(idiom.toString(), idiom));
            Promise.all(data.map(idiom => {
                pieces = pieces.concat(idiom.getCharacters()
                    .map(char => new _models_GamePiece__WEBPACK_IMPORTED_MODULE_2__["GamePiece"](char)));
            })).then(() => {
                this.shuffle(pieces);
                this.gamePieces = this.chunkData(pieces, 4);
            });
        });
    }
    validateBoard() {
        this.gamePieces.forEach(row => {
            if (!row[0].disabled) {
                Promise.all(row.map(piece => piece.character)).then((data => {
                    if (this.idioms.has(data.join(''))) {
                        this.score++;
                        row.forEach(piece => piece.disabled = true);
                        if (this.score === this.selectedDifficulty.numOfIdioms) {
                            console.log("game ended");
                            this.stopGame();
                        }
                    }
                }));
            }
        });
    }
    startGame() {
        this.populateBoard();
        this.gameStarted = true;
        this.secondsRemaining = this.selectedDifficulty.timeLimit;
        this.timer = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(1000).subscribe((i) => {
            this.secondsRemaining -= 1;
        });
    }
    stopGame() {
        this.gameStarted = false;
        this.timer.unsubscribe();
        this.openModal(this.gameEndModal);
    }
    resetGame() {
        this.timer ? this.timer.unsubscribe() : null;
        this.gameStarted = false;
        this.secondsRemaining = this.selectedDifficulty.timeLimit;
        this.score = 0;
        this.selectedPieces = [];
        this.populateBoard();
    }
    chunkData(array, size) {
        const result = [];
        while (array.length) {
            result.push(array.splice(0, size));
        }
        return result;
    }
    shuffle(array) {
        let currentIndex = array.length, temporaryValue, randomIndex;
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }
    onDifficultyChange() {
        this.resetGame();
    }
    openModal(template) {
        this.modalRef = this.modalService.show(template);
    }
}
GameboardComponent.ɵfac = function GameboardComponent_Factory(t) { return new (t || GameboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FaIconLibrary"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_providers_idioms_service__WEBPACK_IMPORTED_MODULE_6__["IdiomsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__["BsModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"])); };
GameboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GameboardComponent, selectors: [["app-gameboard"]], viewQuery: function GameboardComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.gameEndModal = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.helpModal = _t.first);
    } }, decls: 24, vars: 13, consts: [[1, "container"], ["class", "card mt-2", 4, "ngIf"], [1, "card", "bg-light", "mt-5"], [1, "card-header"], [1, "float-left"], [3, "icon"], [1, "float-right"], [1, "card-body"], ["class", "row card-body", 4, "ngFor", "ngForOf"], [1, "card-footer"], ["data-toggle", "buttons", 1, "btn-group", "btn-group-sm", "btn-group-toggle", "float-left"], ["class", "btn btn-secondary", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "btn", "btn-sm", "btn-primary", "float-right", 3, "click"], [1, "btn", "btn-sm", "btn-danger", "float-right", 3, "click"], ["class", "btn btn-sm btn-success float-right", 3, "click", 4, "ngIf"], ["gameEndModal", ""], ["helpModal", ""], [1, "card", "mt-2"], [4, "ngFor", "ngForOf"], [1, "row", "card-body"], ["class", "col-3 p-0", 4, "ngFor", "ngForOf"], [1, "col-3", "p-0"], [3, "data", "gameStarted", "clickEvent"], [1, "btn", "btn-secondary", 3, "ngClass"], ["type", "radio", "name", "difficulty", 3, "value", "ngModel", "ngModelChange", "change"], [1, "btn", "btn-sm", "btn-success", "float-right", 3, "click"], [1, "modal-header"], [1, "modal-title"], [4, "ngIf"], ["type", "button", "aria-label", "Close", 1, "close", "pull-right", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "modal-footer"], ["target", "_blank", "href", "https://github.com/jinyuan/chengyu", 1, "btn", "btn-sm", "btn-dark", "mr-auto"]], template: function GameboardComponent_Template(rf, ctx) { if (rf & 1) {
        const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GameboardComponent_div_1_Template, 6, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "fa-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h5", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "fa-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, GameboardComponent_div_11_Template, 2, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, GameboardComponent_label_14_Template, 3, 6, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameboardComponent_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23); return ctx.openModal(_r6); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "fa-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameboardComponent_Template_button_click_17_listener() { return ctx.resetGame(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Reset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, GameboardComponent_button_19_Template, 2, 0, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, GameboardComponent_ng_template_20_Template, 14, 5, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, GameboardComponent_ng_template_22_Template, 20, 2, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.debug);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx.score, "/", ctx.selectedDifficulty.numOfIdioms, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.secondsRemaining, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.gamePieces);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.difficulties);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c6));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.gameStarted);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FaIconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _gamepiece_gamepiece_component__WEBPACK_IMPORTED_MODULE_10__["GamepieceComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dhbWVib2FyZC9nYW1lYm9hcmQuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GameboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-gameboard',
                templateUrl: './gameboard.component.html',
                styleUrls: ['./gameboard.component.css']
            }]
    }], function () { return [{ type: _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FaIconLibrary"] }, { type: _providers_idioms_service__WEBPACK_IMPORTED_MODULE_6__["IdiomsService"] }, { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__["BsModalService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] }]; }, { gameEndModal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['gameEndModal']
        }], helpModal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['helpModal']
        }] }); })();


/***/ }),

/***/ "./src/app/gamepiece/gamepiece.component.ts":
/*!**************************************************!*\
  !*** ./src/app/gamepiece/gamepiece.component.ts ***!
  \**************************************************/
/*! exports provided: GamepieceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamepieceComponent", function() { return GamepieceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function GamepieceComponent_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.data.character);
} }
function GamepieceComponent_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "***");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0, a1, a2) { return { "btn-primary": a0, "btn-light": a1, "btn-success": a2 }; };
class GamepieceComponent {
    constructor() {
        this.clickEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    onClick(event) {
        this.clickEvent.emit(this.data);
    }
}
GamepieceComponent.ɵfac = function GamepieceComponent_Factory(t) { return new (t || GamepieceComponent)(); };
GamepieceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GamepieceComponent, selectors: [["app-gamepiece"]], inputs: { data: "data", gameStarted: "gameStarted" }, outputs: { clickEvent: "clickEvent" }, decls: 3, vars: 8, consts: [["type", "button", 1, "btn", "btn-lg", "btn-block", "border-dark", 3, "disabled", "ngClass", "click"], [4, "ngIf"]], template: function GamepieceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GamepieceComponent_Template_button_click_0_listener($event) { return ctx.onClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GamepieceComponent_span_1_Template, 2, 1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GamepieceComponent_span_2_Template, 2, 0, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.data.disabled)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](4, _c0, ctx.data.selected, !ctx.data.selected && !ctx.data.disabled, ctx.data.disabled));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.gameStarted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.gameStarted);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".btn[_ngcontent-%COMP%]:focus {\n  outline: none !important;\n  box-shadow: 0 0 0 0;\n}\n\n.btn-outline-secondary[_ngcontent-%COMP%]:hover {\n  cursor: default;\n  color: white !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZXBpZWNlL2dhbWVwaWVjZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0JBQXdCO0VBQ3hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZix1QkFBdUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9nYW1lcGllY2UvZ2FtZXBpZWNlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiAwIDAgMCAwO1xufVxuXG4uYnRuLW91dGxpbmUtc2Vjb25kYXJ5OmhvdmVyIHtcbiAgY3Vyc29yOiBkZWZhdWx0O1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GamepieceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-gamepiece',
                templateUrl: './gamepiece.component.html',
                styleUrls: ['./gamepiece.component.css']
            }]
    }], function () { return []; }, { data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], clickEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], gameStarted: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/models/Difficulty.ts":
/*!**************************************!*\
  !*** ./src/app/models/Difficulty.ts ***!
  \**************************************/
/*! exports provided: Difficulty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Difficulty", function() { return Difficulty; });
class Difficulty {
    constructor(name, numOfIdioms, timeLimit, startRange, endRange) {
        this.name = name;
        this.numOfIdioms = numOfIdioms;
        this.timeLimit = timeLimit;
        this.startRange = startRange;
        this.endRange = endRange;
    }
}



/***/ }),

/***/ "./src/app/models/GamePiece.ts":
/*!*************************************!*\
  !*** ./src/app/models/GamePiece.ts ***!
  \*************************************/
/*! exports provided: GamePiece */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamePiece", function() { return GamePiece; });
class GamePiece {
    constructor(character) {
        this.character = character;
        this.selected = false;
        this.disabled = false;
    }
}



/***/ }),

/***/ "./src/app/models/Idiom.ts":
/*!*********************************!*\
  !*** ./src/app/models/Idiom.ts ***!
  \*********************************/
/*! exports provided: Idiom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Idiom", function() { return Idiom; });
class Idiom {
    constructor(idiom) {
        if (idiom.length !== 4) {
            throw new Error("invalid idiom length");
        }
        this.idiom = idiom.normalize();
        this.characters = idiom.split('');
    }
    equals(obj) {
        return this.idiom === obj.idiom;
    }
    getCharacters() {
        return this.characters;
    }
    toString() {
        return this.idiom;
    }
    static shuffle(str) {
        const a = str.split("");
        const n = a.length;
        for (let i = n - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const tmp = a[i];
            a[i] = a[j];
            a[j] = tmp;
        }
        return a.join("");
    }
}



/***/ }),

/***/ "./src/app/providers/idioms.service.ts":
/*!*********************************************!*\
  !*** ./src/app/providers/idioms.service.ts ***!
  \*********************************************/
/*! exports provided: IdiomsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdiomsService", function() { return IdiomsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _models_Idiom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/Idiom */ "./src/app/models/Idiom.ts");
/* harmony import */ var _models_Difficulty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/Difficulty */ "./src/app/models/Difficulty.ts");





class IdiomsService {
    constructor() {
        this.idioms = new Array();
        this.idioms.push(new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('爱不释手'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('按部就班'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('百折不挠'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('半途而废'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('包罗万象'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('变本加厉'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('别出心裁'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('宾至如归'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('不可救药'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('不劳而获'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('不务正业'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('不省人事'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('不遗余力'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('不择手段'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('不自量力'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('长年累月'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('趁火打劫'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('愁眉不展'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('川流不息'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('唇亡齿寒'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('从容不迫'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('措手不及'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('打草惊蛇'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('大刀阔斧'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('大公无私'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('道听途说'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('得意忘形'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('对牛弹琴'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('发扬光大'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('奋不顾身'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('奉公守法'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('各有千秋'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('光明正大'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('海底捞针'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('好逸恶劳'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('和睦共处'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('狐假虎威'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('胡思乱想'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('胡作非为'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('花言巧语'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('画蛇添足'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('家喻户晓'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('见利忘义'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('津津有味'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('进退两难'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('井井有条'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('刻苦耐劳'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('口是心非'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('苦口婆心'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('理直气壮'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('力不从心'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('了如指掌'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('路不拾遗'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('落花流水'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('慢条斯理'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('面目全非'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('明目张胆'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('默守成规'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('普天同庆'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('千篇一律'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('情同手足'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('人云亦云'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('荣华富贵'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('三思而行'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('僧多粥少'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('舍己为人'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('事半功倍'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('视死如归'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('守望相助'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('守株待兔'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('熟能生巧'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('水落石出'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('似是而非'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('滔滔不绝'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('提心吊胆'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('同甘共苦'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('投机取巧'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('图劳无功'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('望尘莫及'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('忘恩负义'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('为非作歹'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('无微不至'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('相安无事'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('心灰意懒'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('兴高采烈'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('袖手旁观'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('鸦雀无声'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('言行一致'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('一败涂地'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('一帆风顺'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('一视同仁'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('一事无成'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('以卵击石'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('以身作则'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('易如反掌'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('饮水思源'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('迎刃而解'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('有勇无谋'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('执迷不悟'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('趾高气扬'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('纸上谈兵'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('志同道合'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('置之不理'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('装聋作哑'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('自暴自弃'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('自力更生'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('坐井观天'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('爱屋及鸟'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('百年树人'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('班门弄斧'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('标新立异'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('重蹈覆辙'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('德高望重'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('耳濡目染'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('风驰电掣'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('凤毛麟角'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('敷衍塞责'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('功亏一篑'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('画龙点睛'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('居安思危'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('开源节流'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('脍炙人口'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('明哲保身'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('潛移默化'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('束手无策'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('温故知新'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('信口开河'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('忠言逆耳'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('闭门造车'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('不耻下问'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('不攻自破'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('不可思议'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('不翼而飞'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('出类拔萃'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('吹毛求疵'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('垂涎三尺'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('从善如流'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('大言不惭'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('当机立断'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('得寸进尺'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('得过且过'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('废寝忘食'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('改过自新'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('高瞻远瞩'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('高枕无忧'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('隔岸观火'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('根深蒂固'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('钩心斗角'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('苟且偷安'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('孤陋寡闻'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('孤掌难鸣'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('孤注一掷'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('沽名钓誉'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('古色古香'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('拐弯抹角'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('含辛茹苦'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('好高务远'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('挥金如土'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('混水摸鱼'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('鸡犬不宁'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('集思广益'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('假公济私'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('见异思迁'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('见义勇为'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('捷足先登'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('精益求精'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('鞠躬尽瘁'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('举一反三'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('举足轻重'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('开门见山'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('慷慨解囊'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('滥竽充数'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('老马识途'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('励精图治'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('临渴掘井'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('流离失所'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('络绎不绝'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('满载而归'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('毛遂自荐'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('每况愈下'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('明知故犯'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('目中无人'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('弄巧反拙'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('破釜沉舟'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('杞人忧天'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('千钧一发'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('千载难逢'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('前车之鉴'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('强词夺理'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('青出于蓝'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('倾家荡产'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('人浮于事'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('任劳任怨'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('如火如荼'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('如释重负'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('杀鸡取卵'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('手不释卷'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('守口如瓶'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('水到渠成'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('顺手牵羊'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('司空见惯'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('随遇而安'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('挑拨离间'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('挺而走险'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('同归于尽'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('同流合污'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('同舟共济'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('推陈出新'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('未雨绸缪'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('无病呻吟'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('无动于衷'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('五体投地'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('息事宁人'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('相辅相成'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('心旷神怡'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('欣欣向荣'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('胸有成竹'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('栩栩如生'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('悬崖勒马'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('削足适履'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('寻根究底'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('循循善诱'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('雅俗共赏'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('养尊处优'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('摇摇欲坠'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('一见如故'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('一举两得'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('一蹶不振'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('一劳永逸'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('一落千丈'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('一毛不拔'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('一目了然'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('一暴十寒'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('一网打尽'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('一意孤行'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('一针见血'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('一知半解'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('以牙还牙'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('异想天开'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('应接不暇'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('优柔寡断'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('游手好闲'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('有目共睹'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('与日俱增'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('再接再厉'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('蒸蒸日上'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('真知灼见'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('自投罗网'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('自相矛盾'), new _models_Idiom__WEBPACK_IMPORTED_MODULE_2__["Idiom"]('坐享其成'));
    }
    getIdioms(difficulty) {
        const selectedIdioms = new Map();
        while (selectedIdioms.size !== difficulty.numOfIdioms) {
            let random = this.randomInteger(difficulty.startRange, difficulty.endRange);
            if (!selectedIdioms.has(random)) {
                selectedIdioms.set(random, this.idioms[random]);
            }
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(Array.from(selectedIdioms.values()));
    }
    getDifficulties() {
        const difficulties = new Array();
        difficulties.push(new _models_Difficulty__WEBPACK_IMPORTED_MODULE_3__["Difficulty"]('Easy', 4, 180, 0, 79), new _models_Difficulty__WEBPACK_IMPORTED_MODULE_3__["Difficulty"]('Normal', 4, 120, 80, 159), new _models_Difficulty__WEBPACK_IMPORTED_MODULE_3__["Difficulty"]('Hard', 6, 120, 160, 249));
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(difficulties);
    }
    randomInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}
IdiomsService.ɵfac = function IdiomsService_Factory(t) { return new (t || IdiomsService)(); };
IdiomsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: IdiomsService, factory: IdiomsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IdiomsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/runner/work/chengyu/chengyu/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map