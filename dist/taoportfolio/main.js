"use strict";
(self["webpackChunkTAOPortfolio"] = self["webpackChunkTAOPortfolio"] || []).push([["main"],{

/***/ 4114:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _shared_components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/components/page-not-found/page-not-found.component */ 8003);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);




const routes = [{
  path: '',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_tech_tech_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./tech/tech.module */ 8721)).then(m => m.TechModule)
}, {
  path: 'music',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_music_music_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./music/music.module */ 2231)).then(m => m.MusicModule)
}, {
  path: '404',
  component: _shared_components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_0__.PageNotFoundComponent
}, {
  path: '**',
  component: _shared_components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_0__.PageNotFoundComponent
}];
class AppRoutingModule {
  static {
    this.ɵfac = function AppRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AppRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, {
        scrollPositionRestoration: 'top'
      }), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 92:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 5072);


class AppComponent {
  constructor() {
    this.title = 'TAOPortfolio';
  }
  static {
    this.ɵfac = function AppComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AppComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
      styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxnS0FBZ0siLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 635:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 4114);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 92);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/shared.module */ 3887);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);






class AppModule {
  static {
    this.ɵfac = function AppModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AppModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule]
  });
})();

/***/ }),

/***/ 8925:
/*!************************************************************************!*\
  !*** ./src/app/shared/components/blog-detail/blog-detail.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BlogDetailComponent: () => (/* binding */ BlogDetailComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class BlogDetailComponent {
  static {
    this.ɵfac = function BlogDetailComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || BlogDetailComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BlogDetailComponent,
      selectors: [["app-blog-detail"]],
      decls: 2,
      vars: 0,
      template: function BlogDetailComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "blog-detail works!");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJibG9nLWRldGFpbC5jb21wb25lbnQuc2NzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvYmxvZy1kZXRhaWwvYmxvZy1kZXRhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLHdLQUF3SyIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 8397:
/*!************************************************************!*\
  !*** ./src/app/shared/components/blogs/blogs.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BlogsComponent: () => (/* binding */ BlogsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class BlogsComponent {
  static {
    this.ɵfac = function BlogsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || BlogsComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BlogsComponent,
      selectors: [["app-blogs"]],
      decls: 2,
      vars: 0,
      template: function BlogsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "blogs works!");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJibG9ncy5jb21wb25lbnQuc2NzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvYmxvZ3MvYmxvZ3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLGdLQUFnSyIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 1765:
/*!**************************************************************!*\
  !*** ./src/app/shared/components/footer/footer.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FooterComponent: () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);


function FooterComponent_p_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.content.eyebrowText, " ");
  }
}
function FooterComponent_p_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.content.bodyText, " ");
  }
}
function FooterComponent_a_8_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function FooterComponent_a_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FooterComponent_a_8_ng_container_1_Template, 1, 0, "ng-container", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const footerButtonContent_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r0.content.buttonHref, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", footerButtonContent_r2);
  }
}
function FooterComponent_ng_template_9_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function FooterComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FooterComponent_ng_template_9_ng_container_1_Template, 1, 0, "ng-container", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const footerButtonContent_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", footerButtonContent_r2);
  }
}
function FooterComponent_ng_template_11__svg_svg_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "rect", 35)(2, "path", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function FooterComponent_ng_template_11__svg_svg_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function FooterComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FooterComponent_ng_template_11__svg_svg_0_Template, 3, 0, "svg", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FooterComponent_ng_template_11__svg_svg_3_Template, 2, 0, "svg", 33);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.content.buttonIcon === "mail" || ctx_r0.content.buttonIcon === "mail-arrow");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.content.buttonText);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.content.buttonIcon === "arrow" || ctx_r0.content.buttonIcon === "mail-arrow");
  }
}
function FooterComponent_a_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 38)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u2192");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r0.content.secondaryLink.href, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.content.secondaryLink.eyebrow);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r0.content.secondaryLink.label, " ");
  }
}
function FooterComponent_a_23_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function FooterComponent_a_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FooterComponent_a_23_ng_container_1_Template, 1, 0, "ng-container", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const githubSvg_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r0.socialLinks.github, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", githubSvg_r3);
  }
}
function FooterComponent_ng_template_24_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function FooterComponent_ng_template_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FooterComponent_ng_template_24_ng_container_1_Template, 1, 0, "ng-container", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const githubSvg_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", githubSvg_r3);
  }
}
function FooterComponent_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function FooterComponent_a_28_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function FooterComponent_a_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FooterComponent_a_28_ng_container_1_Template, 1, 0, "ng-container", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const linkedinSvg_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r0.socialLinks.linkedin, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", linkedinSvg_r4);
  }
}
function FooterComponent_ng_template_29_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function FooterComponent_ng_template_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FooterComponent_ng_template_29_ng_container_1_Template, 1, 0, "ng-container", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const linkedinSvg_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", linkedinSvg_r4);
  }
}
function FooterComponent_ng_template_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function FooterComponent_a_33_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function FooterComponent_a_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FooterComponent_a_33_ng_container_1_Template, 1, 0, "ng-container", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const emailSvg_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", "mailto:" + ctx_r0.socialLinks.email, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", emailSvg_r5);
  }
}
function FooterComponent_ng_template_34_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function FooterComponent_ng_template_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FooterComponent_ng_template_34_ng_container_1_Template, 1, 0, "ng-container", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const emailSvg_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", emailSvg_r5);
  }
}
function FooterComponent_ng_template_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "rect", 35)(2, "path", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function FooterComponent_a_38_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function FooterComponent_a_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FooterComponent_a_38_ng_container_1_Template, 1, 0, "ng-container", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const twitchSvg_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r0.socialLinks.twitch, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", twitchSvg_r6);
  }
}
function FooterComponent_ng_template_39_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function FooterComponent_ng_template_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FooterComponent_ng_template_39_ng_container_1_Template, 1, 0, "ng-container", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const twitchSvg_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", twitchSvg_r6);
  }
}
function FooterComponent_ng_template_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
const DEFAULT_FOOTER_CONFIG = {
  eyebrowText: 'LET’S CONNECT',
  showEyebrow: false,
  headerText: "Have an idea? Let's make it happen.",
  bodyText: "Whether it's software, an interesting collaboration, or just a conversation about technology; my inbox is open.",
  showBody: true,
  buttonText: 'Get in touch',
  buttonIcon: 'mail-arrow',
  buttonHref: 'mailto:taocudjoe@gmail.com'
};
class FooterComponent {
  constructor() {
    this.config = {};
    this.socialLinks = {
      linkedin: 'https://www.linkedin.com/in/tcudjoe2401/',
      twitch: 'https://www.twitch.tv/taocudjoe',
      github: 'https://github.com/tcudjoe',
      email: 'taocudjoe@gmail.com'
    };
    this.currentYear = new Date().getFullYear();
  }
  get content() {
    return {
      ...DEFAULT_FOOTER_CONFIG,
      ...this.config
    };
  }
  static {
    this.ɵfac = function FooterComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FooterComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      inputs: {
        config: "config"
      },
      decls: 43,
      vars: 15,
      consts: [["staticFooterButton", ""], ["footerButtonContent", ""], ["githubIcon", ""], ["githubSvg", ""], ["linkedinIcon", ""], ["linkedinSvg", ""], ["emailIcon", ""], ["emailSvg", ""], ["twitchIcon", ""], ["twitchSvg", ""], [1, "site-footer"], [1, "site-footer__inner"], ["aria-labelledby", "footer-heading", 1, "site-footer__callout"], ["class", "site-footer__eyebrow", 4, "ngIf"], ["id", "footer-heading", 1, "site-footer__heading"], ["class", "site-footer__body", 4, "ngIf"], [1, "site-footer__actions"], ["class", "site-footer__button", 3, "href", 4, "ngIf", "ngIfElse"], ["class", "site-footer__secondary-link", 3, "href", 4, "ngIf"], [1, "site-footer__bottom"], [1, "site-footer__brand"], [1, "site-footer__tagline"], [1, "site-footer__copyright"], ["aria-label", "Social links", 1, "site-footer__socials"], ["target", "_blank", "rel", "noopener noreferrer", "aria-label", "GitHub", 3, "href", 4, "ngIf", "ngIfElse"], ["target", "_blank", "rel", "noopener noreferrer", "aria-label", "LinkedIn", 3, "href", 4, "ngIf", "ngIfElse"], ["aria-label", "Email", 3, "href", 4, "ngIf", "ngIfElse"], ["target", "_blank", "rel", "noopener noreferrer", "aria-label", "Twitch", 3, "href", 4, "ngIf", "ngIfElse"], [1, "site-footer__eyebrow"], [1, "site-footer__body"], [1, "site-footer__button", 3, "href"], [4, "ngTemplateOutlet"], ["type", "button", 1, "site-footer__button"], ["class", "site-footer__icon", "viewBox", "0 0 24 24", "fill", "none", "aria-hidden", "true", 4, "ngIf"], ["viewBox", "0 0 24 24", "fill", "none", "aria-hidden", "true", 1, "site-footer__icon"], ["x", "3", "y", "5", "width", "18", "height", "14", "rx", "2", "stroke", "currentColor", "stroke-width", "2"], ["d", "m4 7 8 6 8-6", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M5 12h14m-6-6 6 6-6 6", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "site-footer__secondary-link", 3, "href"], ["aria-hidden", "true"], ["target", "_blank", "rel", "noopener noreferrer", "aria-label", "GitHub", 3, "href"], ["role", "img", "aria-label", "GitHub"], ["viewBox", "0 0 24 24", "aria-hidden", "true"], ["d", "M12 .8a11.2 11.2 0 0 0-3.54 21.83c.56.1.77-.24.77-.54v-2.1c-3.13.68-3.79-1.33-3.79-1.33-.5-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.12.08 1.71 1.16 1.71 1.16 1 .7 2.62.5 3.26.38.1-.73.39-1.23.7-1.52-2.5-.28-5.13-1.25-5.13-5.55 0-1.22.44-2.22 1.16-3-.12-.28-.5-1.42.11-2.96 0 0 .95-.3 3.08 1.15a10.7 10.7 0 0 1 5.6 0c2.14-1.45 3.08-1.15 3.08-1.15.62 1.54.23 2.68.12 2.96.72.78 1.15 1.78 1.15 3 0 4.31-2.63 5.26-5.14 5.54.4.35.75 1.03.75 2.08v3.08c0 .3.2.65.78.54A11.2 11.2 0 0 0 12 .8Z", "fill", "currentColor"], ["target", "_blank", "rel", "noopener noreferrer", "aria-label", "LinkedIn", 3, "href"], ["role", "img", "aria-label", "LinkedIn"], ["d", "M5.16 3a2.16 2.16 0 1 0 0 4.32 2.16 2.16 0 0 0 0-4.32ZM3.3 9h3.72v12H3.3V9Zm5.95 0h3.56v1.64h.05c.5-.94 1.7-1.93 3.5-1.93 3.74 0 4.43 2.46 4.43 5.66V21h-3.72v-5.88c0-1.4-.03-3.2-1.95-3.2-1.96 0-2.26 1.52-2.26 3.1V21H9.25V9Z", "fill", "currentColor"], ["aria-label", "Email", 3, "href"], ["role", "img", "aria-label", "Email"], ["viewBox", "0 0 24 24", "fill", "none", "aria-hidden", "true"], ["target", "_blank", "rel", "noopener noreferrer", "aria-label", "Twitch", 3, "href"], ["role", "img", "aria-label", "Twitch"], ["d", "M4 3h18v12l-5 5h-4l-3 3v-3H6V7l-2-4Zm4 3v11h4v2l2-2h4l3-3V6H8Zm4 2h2v5h-2V8Zm5 0h2v5h-2V8Z", "fill", "currentColor"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 10)(1, "div", 11)(2, "section", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FooterComponent_p_3_Template, 2, 1, "p", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FooterComponent_p_6_Template, 2, 1, "p", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, FooterComponent_a_8_Template, 2, 2, "a", 17)(9, FooterComponent_ng_template_9_Template, 2, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"])(11, FooterComponent_ng_template_11_Template, 4, 3, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"])(13, FooterComponent_a_13_Template, 7, 3, "a", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 19)(15, "div")(16, "p", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "TC.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Built with curiosity.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "nav", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, FooterComponent_a_23_Template, 2, 2, "a", 24)(24, FooterComponent_ng_template_24_Template, 2, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"])(26, FooterComponent_ng_template_26_Template, 2, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"])(28, FooterComponent_a_28_Template, 2, 2, "a", 25)(29, FooterComponent_ng_template_29_Template, 2, 1, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"])(31, FooterComponent_ng_template_31_Template, 2, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"])(33, FooterComponent_a_33_Template, 2, 2, "a", 26)(34, FooterComponent_ng_template_34_Template, 2, 1, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"])(36, FooterComponent_ng_template_36_Template, 3, 0, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"])(38, FooterComponent_a_38_Template, 2, 2, "a", 27)(39, FooterComponent_ng_template_39_Template, 2, 1, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"])(41, FooterComponent_ng_template_41_Template, 2, 0, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          const staticFooterButton_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
          const githubIcon_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](25);
          const linkedinIcon_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](30);
          const emailIcon_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](35);
          const twitchIcon_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](40);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.content.showEyebrow && ctx.content.eyebrowText);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.content.headerText);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.content.showBody && ctx.content.bodyText);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.content.buttonHref)("ngIfElse", staticFooterButton_r7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.content.secondaryLink);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A9 ", ctx.currentYear, " \u00B7 All rights reserved.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.socialLinks.github)("ngIfElse", githubIcon_r8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.socialLinks.linkedin)("ngIfElse", linkedinIcon_r9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.socialLinks.email)("ngIfElse", emailIcon_r10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.socialLinks.twitch)("ngIfElse", twitchIcon_r11);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgTemplateOutlet],
      styles: [".site-footer[_ngcontent-%COMP%] {\n  background: var(--color-primary);\n  color: var(--color-white);\n  padding: clamp(3rem, 7vw, 6rem) clamp(1.5rem, 4vw, 3.5rem) 1.5rem;\n}\n\n.site-footer__inner[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  max-width: 76rem;\n}\n\n.site-footer__callout[_ngcontent-%COMP%] {\n  padding-bottom: clamp(3rem, 6vw, 5rem);\n}\n\n.site-footer__eyebrow[_ngcontent-%COMP%] {\n  color: var(--color-soft-blue);\n  font-family: var(--font-mono);\n  font-size: var(--text-xs);\n  letter-spacing: 0.08em;\n  margin: 0 0 0.75rem;\n  text-transform: uppercase;\n}\n\n.site-footer__heading[_ngcontent-%COMP%] {\n  color: inherit;\n  font-size: var(--text-h2);\n  margin: 0;\n  max-width: 48rem;\n}\n\n.site-footer__body[_ngcontent-%COMP%] {\n  color: var(--color-soft-blue);\n  font-family: var(--font-mono);\n  font-size: var(--text-sm);\n  line-height: var(--leading-body);\n  margin: 1rem 0 1.75rem;\n  max-width: 56rem;\n}\n\n.site-footer__actions[_ngcontent-%COMP%] {\n  align-items: flex-end;\n  display: flex;\n  gap: 2rem;\n  justify-content: space-between;\n}\n\n.site-footer__button[_ngcontent-%COMP%] {\n  align-items: center;\n  background: var(--color-warm-white);\n  border: 0;\n  border-radius: 0.75rem;\n  color: var(--color-primary);\n  cursor: pointer;\n  display: inline-flex;\n  font: 600 var(--text-base) var(--font-body);\n  gap: 0.75rem;\n  min-height: 3.25rem;\n  padding: 0.75rem 1.25rem;\n  transition: background-color 160ms ease, transform 160ms ease;\n}\n\n.site-footer__button[_ngcontent-%COMP%]:hover {\n  background: var(--color-soft-blue);\n  transform: translateY(-1px);\n}\n\n.site-footer__button[_ngcontent-%COMP%]:focus-visible {\n  outline: 3px solid var(--color-accent);\n  outline-offset: 3px;\n}\n\n.site-footer__icon[_ngcontent-%COMP%] {\n  height: 1.25rem;\n  width: 1.25rem;\n}\n\n.site-footer__secondary-link[_ngcontent-%COMP%] {\n  color: var(--color-white);\n  display: grid;\n  gap: 0.3rem;\n  justify-items: end;\n  text-align: right;\n  text-decoration: none;\n}\n\n.site-footer__secondary-link[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  color: var(--color-soft-blue);\n  font-family: var(--font-mono);\n  font-size: var(--text-xs);\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n}\n\n.site-footer__secondary-link[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: var(--text-base);\n  transition: color 160ms ease;\n}\n\n.site-footer__secondary-link[_ngcontent-%COMP%]:hover   strong[_ngcontent-%COMP%] {\n  color: var(--color-soft-blue);\n}\n\n.site-footer__secondary-link[_ngcontent-%COMP%]:focus-visible {\n  border-radius: 0.2rem;\n  outline: 3px solid var(--color-accent);\n  outline-offset: 4px;\n}\n\n.site-footer__bottom[_ngcontent-%COMP%] {\n  align-items: center;\n  border-top: 1px solid #38516D;\n  display: flex;\n  gap: 2rem;\n  justify-content: space-between;\n  padding-top: 1.25rem;\n}\n\n.site-footer__socials[_ngcontent-%COMP%] {\n  align-items: center;\n  color: var(--color-soft-blue);\n  display: flex;\n  gap: 1.25rem;\n}\n\n.site-footer__socials[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], \n.site-footer__socials[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  align-items: center;\n  color: inherit;\n  display: inline-flex;\n  transition: color 160ms ease, transform 160ms ease;\n}\n\n.site-footer__socials[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: var(--color-white);\n  transform: translateY(-2px);\n}\n\n.site-footer__socials[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  height: 1.4rem;\n  width: 1.4rem;\n}\n\n.site-footer__brand[_ngcontent-%COMP%], \n.site-footer__tagline[_ngcontent-%COMP%], \n.site-footer__copyright[_ngcontent-%COMP%] {\n  font-family: var(--font-mono);\n  margin: 0;\n}\n\n.site-footer__brand[_ngcontent-%COMP%] {\n  font-family: var(--font-heading);\n  font-size: var(--text-h4);\n  font-weight: 700;\n}\n\n.site-footer__tagline[_ngcontent-%COMP%], \n.site-footer__copyright[_ngcontent-%COMP%] {\n  color: var(--color-soft-blue);\n  font-size: var(--text-xs);\n}\n\n.site-footer__copyright[_ngcontent-%COMP%] {\n  margin-top: 0.75rem;\n}\n\n@media (max-width: 36rem) {\n  .site-footer__actions[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    flex-direction: column;\n    gap: 1.25rem;\n  }\n  .site-footer__secondary-link[_ngcontent-%COMP%] {\n    justify-items: start;\n    text-align: left;\n  }\n  .site-footer__bottom[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    flex-direction: column-reverse;\n    gap: 1.5rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdDQUFBO0VBQ0EseUJBQUE7RUFDQSxpRUFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxzQ0FBQTtBQUNGOztBQUVBO0VBQ0UsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLGdDQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtFQUNBLDhCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLG1DQUFBO0VBQ0EsU0FBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSwyQ0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0VBQ0EsNkRBQUE7QUFDRjs7QUFFQTtFQUNFLGtDQUFBO0VBQ0EsMkJBQUE7QUFDRjs7QUFFQTtFQUNFLHNDQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0FBQ0Y7O0FBRUE7RUFDRSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSwyQkFBQTtFQUNBLDRCQUFBO0FBQ0Y7O0FBRUE7RUFDRSw2QkFBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7RUFDQSxzQ0FBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7RUFDQSw4QkFBQTtFQUNBLG9CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTs7RUFFRSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtFQUNBLGtEQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtFQUNBLDJCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUVBOzs7RUFHRSw2QkFBQTtFQUNBLFNBQUE7QUFDRjs7QUFFQTtFQUNFLGdDQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBOztFQUVFLDZCQUFBO0VBQ0EseUJBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLHVCQUFBO0lBQ0Esc0JBQUE7SUFDQSxZQUFBO0VBQ0Y7RUFFQTtJQUNFLG9CQUFBO0lBQ0EsZ0JBQUE7RUFBRjtFQUdBO0lBQ0UsdUJBQUE7SUFDQSw4QkFBQTtJQUNBLFdBQUE7RUFERjtBQUNGIiwiZmlsZSI6ImZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaXRlLWZvb3RlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xuICBjb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpO1xuICBwYWRkaW5nOiBjbGFtcCgzcmVtLCA3dncsIDZyZW0pIGNsYW1wKDEuNXJlbSwgNHZ3LCAzLjVyZW0pIDEuNXJlbTtcbn1cblxuLnNpdGUtZm9vdGVyX19pbm5lciB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXgtd2lkdGg6IDc2cmVtO1xufVxuXG4uc2l0ZS1mb290ZXJfX2NhbGxvdXQge1xuICBwYWRkaW5nLWJvdHRvbTogY2xhbXAoM3JlbSwgNnZ3LCA1cmVtKTtcbn1cblxuLnNpdGUtZm9vdGVyX19leWVicm93IHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXNvZnQtYmx1ZSk7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LW1vbm8pO1xuICBmb250LXNpemU6IHZhcigtLXRleHQteHMpO1xuICBsZXR0ZXItc3BhY2luZzogMC4wOGVtO1xuICBtYXJnaW46IDAgMCAwLjc1cmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uc2l0ZS1mb290ZXJfX2hlYWRpbmcge1xuICBjb2xvcjogaW5oZXJpdDtcbiAgZm9udC1zaXplOiB2YXIoLS10ZXh0LWgyKTtcbiAgbWFyZ2luOiAwO1xuICBtYXgtd2lkdGg6IDQ4cmVtO1xufVxuXG4uc2l0ZS1mb290ZXJfX2JvZHkge1xuICBjb2xvcjogdmFyKC0tY29sb3Itc29mdC1ibHVlKTtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtbW9ubyk7XG4gIGZvbnQtc2l6ZTogdmFyKC0tdGV4dC1zbSk7XG4gIGxpbmUtaGVpZ2h0OiB2YXIoLS1sZWFkaW5nLWJvZHkpO1xuICBtYXJnaW46IDFyZW0gMCAxLjc1cmVtO1xuICBtYXgtd2lkdGg6IDU2cmVtO1xufVxuXG4uc2l0ZS1mb290ZXJfX2FjdGlvbnMge1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMnJlbTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uc2l0ZS1mb290ZXJfX2J1dHRvbiB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLXdhcm0td2hpdGUpO1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDAuNzVyZW07XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgZm9udDogNjAwIHZhcigtLXRleHQtYmFzZSkgdmFyKC0tZm9udC1ib2R5KTtcbiAgZ2FwOiAwLjc1cmVtO1xuICBtaW4taGVpZ2h0OiAzLjI1cmVtO1xuICBwYWRkaW5nOiAwLjc1cmVtIDEuMjVyZW07XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMTYwbXMgZWFzZSwgdHJhbnNmb3JtIDE2MG1zIGVhc2U7XG59XG5cbi5zaXRlLWZvb3Rlcl9fYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3Itc29mdC1ibHVlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xufVxuXG4uc2l0ZS1mb290ZXJfX2J1dHRvbjpmb2N1cy12aXNpYmxlIHtcbiAgb3V0bGluZTogM3B4IHNvbGlkIHZhcigtLWNvbG9yLWFjY2VudCk7XG4gIG91dGxpbmUtb2Zmc2V0OiAzcHg7XG59XG5cbi5zaXRlLWZvb3Rlcl9faWNvbiB7XG4gIGhlaWdodDogMS4yNXJlbTtcbiAgd2lkdGg6IDEuMjVyZW07XG59XG5cbi5zaXRlLWZvb3Rlcl9fc2Vjb25kYXJ5LWxpbmsge1xuICBjb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpO1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6IDAuM3JlbTtcbiAganVzdGlmeS1pdGVtczogZW5kO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uc2l0ZS1mb290ZXJfX3NlY29uZGFyeS1saW5rID4gc3BhbiB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1zb2Z0LWJsdWUpO1xuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1tb25vKTtcbiAgZm9udC1zaXplOiB2YXIoLS10ZXh0LXhzKTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDZlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLnNpdGUtZm9vdGVyX19zZWNvbmRhcnktbGluayBzdHJvbmcge1xuICBmb250LXNpemU6IHZhcigtLXRleHQtYmFzZSk7XG4gIHRyYW5zaXRpb246IGNvbG9yIDE2MG1zIGVhc2U7XG59XG5cbi5zaXRlLWZvb3Rlcl9fc2Vjb25kYXJ5LWxpbms6aG92ZXIgc3Ryb25nIHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXNvZnQtYmx1ZSk7XG59XG5cbi5zaXRlLWZvb3Rlcl9fc2Vjb25kYXJ5LWxpbms6Zm9jdXMtdmlzaWJsZSB7XG4gIGJvcmRlci1yYWRpdXM6IDAuMnJlbTtcbiAgb3V0bGluZTogM3B4IHNvbGlkIHZhcigtLWNvbG9yLWFjY2VudCk7XG4gIG91dGxpbmUtb2Zmc2V0OiA0cHg7XG59XG5cbi5zaXRlLWZvb3Rlcl9fYm90dG9tIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMzODUxNkQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMnJlbTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nLXRvcDogMS4yNXJlbTtcbn1cblxuLnNpdGUtZm9vdGVyX19zb2NpYWxzIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXNvZnQtYmx1ZSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMS4yNXJlbTtcbn1cblxuLnNpdGUtZm9vdGVyX19zb2NpYWxzIGEsXG4uc2l0ZS1mb290ZXJfX3NvY2lhbHMgc3BhbiB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiBpbmhlcml0O1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgdHJhbnNpdGlvbjogY29sb3IgMTYwbXMgZWFzZSwgdHJhbnNmb3JtIDE2MG1zIGVhc2U7XG59XG5cbi5zaXRlLWZvb3Rlcl9fc29jaWFscyBhOmhvdmVyIHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xufVxuXG4uc2l0ZS1mb290ZXJfX3NvY2lhbHMgc3ZnIHtcbiAgaGVpZ2h0OiAxLjRyZW07XG4gIHdpZHRoOiAxLjRyZW07XG59XG5cbi5zaXRlLWZvb3Rlcl9fYnJhbmQsXG4uc2l0ZS1mb290ZXJfX3RhZ2xpbmUsXG4uc2l0ZS1mb290ZXJfX2NvcHlyaWdodCB7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LW1vbm8pO1xuICBtYXJnaW46IDA7XG59XG5cbi5zaXRlLWZvb3Rlcl9fYnJhbmQge1xuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1oZWFkaW5nKTtcbiAgZm9udC1zaXplOiB2YXIoLS10ZXh0LWg0KTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLnNpdGUtZm9vdGVyX190YWdsaW5lLFxuLnNpdGUtZm9vdGVyX19jb3B5cmlnaHQge1xuICBjb2xvcjogdmFyKC0tY29sb3Itc29mdC1ibHVlKTtcbiAgZm9udC1zaXplOiB2YXIoLS10ZXh0LXhzKTtcbn1cblxuLnNpdGUtZm9vdGVyX19jb3B5cmlnaHQge1xuICBtYXJnaW4tdG9wOiAwLjc1cmVtO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMzZyZW0pIHtcbiAgLnNpdGUtZm9vdGVyX19hY3Rpb25zIHtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMS4yNXJlbTtcbiAgfVxuXG4gIC5zaXRlLWZvb3Rlcl9fc2Vjb25kYXJ5LWxpbmsge1xuICAgIGp1c3RpZnktaXRlbXM6IHN0YXJ0O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIH1cblxuICAuc2l0ZS1mb290ZXJfX2JvdHRvbSB7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuICAgIGdhcDogMS41cmVtO1xuICB9XG59XG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdDQUFBO0VBQ0EseUJBQUE7RUFDQSxpRUFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxzQ0FBQTtBQUNGOztBQUVBO0VBQ0UsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLGdDQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtFQUNBLDhCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLG1DQUFBO0VBQ0EsU0FBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSwyQ0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0VBQ0EsNkRBQUE7QUFDRjs7QUFFQTtFQUNFLGtDQUFBO0VBQ0EsMkJBQUE7QUFDRjs7QUFFQTtFQUNFLHNDQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0FBQ0Y7O0FBRUE7RUFDRSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSwyQkFBQTtFQUNBLDRCQUFBO0FBQ0Y7O0FBRUE7RUFDRSw2QkFBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7RUFDQSxzQ0FBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7RUFDQSw4QkFBQTtFQUNBLG9CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTs7RUFFRSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtFQUNBLGtEQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtFQUNBLDJCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUVBOzs7RUFHRSw2QkFBQTtFQUNBLFNBQUE7QUFDRjs7QUFFQTtFQUNFLGdDQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBOztFQUVFLDZCQUFBO0VBQ0EseUJBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLHVCQUFBO0lBQ0Esc0JBQUE7SUFDQSxZQUFBO0VBQ0Y7RUFFQTtJQUNFLG9CQUFBO0lBQ0EsZ0JBQUE7RUFBRjtFQUdBO0lBQ0UsdUJBQUE7SUFDQSw4QkFBQTtJQUNBLFdBQUE7RUFERjtBQUNGO0FBQ0EsdzNOQUF3M04iLCJzb3VyY2VzQ29udGVudCI6WyIuc2l0ZS1mb290ZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlKTtcbiAgcGFkZGluZzogY2xhbXAoM3JlbSwgN3Z3LCA2cmVtKSBjbGFtcCgxLjVyZW0sIDR2dywgMy41cmVtKSAxLjVyZW07XG59XG5cbi5zaXRlLWZvb3Rlcl9faW5uZXIge1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWF4LXdpZHRoOiA3NnJlbTtcbn1cblxuLnNpdGUtZm9vdGVyX19jYWxsb3V0IHtcbiAgcGFkZGluZy1ib3R0b206IGNsYW1wKDNyZW0sIDZ2dywgNXJlbSk7XG59XG5cbi5zaXRlLWZvb3Rlcl9fZXllYnJvdyB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1zb2Z0LWJsdWUpO1xuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1tb25vKTtcbiAgZm9udC1zaXplOiB2YXIoLS10ZXh0LXhzKTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDhlbTtcbiAgbWFyZ2luOiAwIDAgMC43NXJlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLnNpdGUtZm9vdGVyX19oZWFkaW5nIHtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogdmFyKC0tdGV4dC1oMik7XG4gIG1hcmdpbjogMDtcbiAgbWF4LXdpZHRoOiA0OHJlbTtcbn1cblxuLnNpdGUtZm9vdGVyX19ib2R5IHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXNvZnQtYmx1ZSk7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LW1vbm8pO1xuICBmb250LXNpemU6IHZhcigtLXRleHQtc20pO1xuICBsaW5lLWhlaWdodDogdmFyKC0tbGVhZGluZy1ib2R5KTtcbiAgbWFyZ2luOiAxcmVtIDAgMS43NXJlbTtcbiAgbWF4LXdpZHRoOiA1NnJlbTtcbn1cblxuLnNpdGUtZm9vdGVyX19hY3Rpb25zIHtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDJyZW07XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLnNpdGUtZm9vdGVyX19idXR0b24ge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci13YXJtLXdoaXRlKTtcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItcmFkaXVzOiAwLjc1cmVtO1xuICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGZvbnQ6IDYwMCB2YXIoLS10ZXh0LWJhc2UpIHZhcigtLWZvbnQtYm9keSk7XG4gIGdhcDogMC43NXJlbTtcbiAgbWluLWhlaWdodDogMy4yNXJlbTtcbiAgcGFkZGluZzogMC43NXJlbSAxLjI1cmVtO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDE2MG1zIGVhc2UsIHRyYW5zZm9ybSAxNjBtcyBlYXNlO1xufVxuXG4uc2l0ZS1mb290ZXJfX2J1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLXNvZnQtYmx1ZSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcbn1cblxuLnNpdGUtZm9vdGVyX19idXR0b246Zm9jdXMtdmlzaWJsZSB7XG4gIG91dGxpbmU6IDNweCBzb2xpZCB2YXIoLS1jb2xvci1hY2NlbnQpO1xuICBvdXRsaW5lLW9mZnNldDogM3B4O1xufVxuXG4uc2l0ZS1mb290ZXJfX2ljb24ge1xuICBoZWlnaHQ6IDEuMjVyZW07XG4gIHdpZHRoOiAxLjI1cmVtO1xufVxuXG4uc2l0ZS1mb290ZXJfX3NlY29uZGFyeS1saW5rIHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlKTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiAwLjNyZW07XG4gIGp1c3RpZnktaXRlbXM6IGVuZDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLnNpdGUtZm9vdGVyX19zZWNvbmRhcnktbGluayA+IHNwYW4ge1xuICBjb2xvcjogdmFyKC0tY29sb3Itc29mdC1ibHVlKTtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtbW9ubyk7XG4gIGZvbnQtc2l6ZTogdmFyKC0tdGV4dC14cyk7XG4gIGxldHRlci1zcGFjaW5nOiAwLjA2ZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5zaXRlLWZvb3Rlcl9fc2Vjb25kYXJ5LWxpbmsgc3Ryb25nIHtcbiAgZm9udC1zaXplOiB2YXIoLS10ZXh0LWJhc2UpO1xuICB0cmFuc2l0aW9uOiBjb2xvciAxNjBtcyBlYXNlO1xufVxuXG4uc2l0ZS1mb290ZXJfX3NlY29uZGFyeS1saW5rOmhvdmVyIHN0cm9uZyB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1zb2Z0LWJsdWUpO1xufVxuXG4uc2l0ZS1mb290ZXJfX3NlY29uZGFyeS1saW5rOmZvY3VzLXZpc2libGUge1xuICBib3JkZXItcmFkaXVzOiAwLjJyZW07XG4gIG91dGxpbmU6IDNweCBzb2xpZCB2YXIoLS1jb2xvci1hY2NlbnQpO1xuICBvdXRsaW5lLW9mZnNldDogNHB4O1xufVxuXG4uc2l0ZS1mb290ZXJfX2JvdHRvbSB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMzg1MTZEO1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDJyZW07XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZy10b3A6IDEuMjVyZW07XG59XG5cbi5zaXRlLWZvb3Rlcl9fc29jaWFscyB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1zb2Z0LWJsdWUpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDEuMjVyZW07XG59XG5cbi5zaXRlLWZvb3Rlcl9fc29jaWFscyBhLFxuLnNpdGUtZm9vdGVyX19zb2NpYWxzIHNwYW4ge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogaW5oZXJpdDtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIHRyYW5zaXRpb246IGNvbG9yIDE2MG1zIGVhc2UsIHRyYW5zZm9ybSAxNjBtcyBlYXNlO1xufVxuXG4uc2l0ZS1mb290ZXJfX3NvY2lhbHMgYTpob3ZlciB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbn1cblxuLnNpdGUtZm9vdGVyX19zb2NpYWxzIHN2ZyB7XG4gIGhlaWdodDogMS40cmVtO1xuICB3aWR0aDogMS40cmVtO1xufVxuXG4uc2l0ZS1mb290ZXJfX2JyYW5kLFxuLnNpdGUtZm9vdGVyX190YWdsaW5lLFxuLnNpdGUtZm9vdGVyX19jb3B5cmlnaHQge1xuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1tb25vKTtcbiAgbWFyZ2luOiAwO1xufVxuXG4uc2l0ZS1mb290ZXJfX2JyYW5kIHtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtaGVhZGluZyk7XG4gIGZvbnQtc2l6ZTogdmFyKC0tdGV4dC1oNCk7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5zaXRlLWZvb3Rlcl9fdGFnbGluZSxcbi5zaXRlLWZvb3Rlcl9fY29weXJpZ2h0IHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXNvZnQtYmx1ZSk7XG4gIGZvbnQtc2l6ZTogdmFyKC0tdGV4dC14cyk7XG59XG5cbi5zaXRlLWZvb3Rlcl9fY29weXJpZ2h0IHtcbiAgbWFyZ2luLXRvcDogMC43NXJlbTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDM2cmVtKSB7XG4gIC5zaXRlLWZvb3Rlcl9fYWN0aW9ucyB7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDEuMjVyZW07XG4gIH1cblxuICAuc2l0ZS1mb290ZXJfX3NlY29uZGFyeS1saW5rIHtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBzdGFydDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB9XG5cbiAgLnNpdGUtZm9vdGVyX19ib3R0b20ge1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcbiAgICBnYXA6IDEuNXJlbTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 3083:
/*!**************************************************************!*\
  !*** ./src/app/shared/components/navbar/navbar.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavbarComponent: () => (/* binding */ NavbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 5072);


const _c0 = () => ({
  exact: true
});
class NavbarComponent {
  constructor() {
    this.isMenuOpen = false;
  }
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  closeMenu() {
    this.isMenuOpen = false;
  }
  static {
    this.ɵfac = function NavbarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || NavbarComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavbarComponent,
      selectors: [["app-navbar"]],
      decls: 23,
      vars: 5,
      consts: [[1, "navbar", "navbar-expand-md", "navbar-dark", "site-nav"], [1, "container-fluid", "site-nav__inner"], ["routerLink", "/", "aria-label", "Tyra Cudjoe home", 1, "navbar-brand", "site-nav__brand", 3, "click"], ["type", "button", "aria-controls", "primary-navigation", "aria-label", "Toggle navigation", 1, "navbar-toggler", 3, "click"], [1, "navbar-toggler-icon"], ["id", "primary-navigation", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "ms-auto", "site-nav__links"], [1, "nav-item"], ["routerLink", "/", "routerLinkActive", "site-nav__link--active", 1, "nav-link", "site-nav__link", 3, "click", "routerLinkActiveOptions"], ["routerLink", "/work", "routerLinkActive", "site-nav__link--active", 1, "nav-link", "site-nav__link", 3, "click"], ["routerLink", "/writing", "routerLinkActive", "site-nav__link--active", 1, "nav-link", "site-nav__link", 3, "click"], ["routerLink", "/about", "routerLinkActive", "site-nav__link--active", 1, "nav-link", "site-nav__link", 3, "click"], ["routerLink", "/music", "routerLinkActive", "site-nav__link--active", 1, "nav-link", "site-nav__link", 3, "click"]],
      template: function NavbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1)(2, "a", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_2_listener() {
            return ctx.closeMenu();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "TC.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_button_click_4_listener() {
            return ctx.toggleMenu();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5)(7, "ul", 6)(8, "li", 7)(9, "a", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_9_listener() {
            return ctx.closeMenu();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Home");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 7)(12, "a", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_12_listener() {
            return ctx.closeMenu();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Work");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 7)(15, "a", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_15_listener() {
            return ctx.closeMenu();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Writing");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 7)(18, "a", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_18_listener() {
            return ctx.closeMenu();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "About");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 7)(21, "a", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_21_listener() {
            return ctx.closeMenu();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Music");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", ctx.isMenuOpen);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("show", ctx.isMenuOpen);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkActive],
      styles: [".site-nav[_ngcontent-%COMP%] {\n  background-color: var(--color-primary);\n  color: var(--color-white);\n  padding-block: 0;\n}\n\n.site-nav__inner[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  max-width: 76rem;\n  min-height: 4.5rem;\n  padding-inline: clamp(1.5rem, 4vw, 3.5rem);\n}\n\n.site-nav__brand[_ngcontent-%COMP%], \n.site-nav__brand[_ngcontent-%COMP%]:hover {\n  color: var(--color-white);\n  font-family: var(--font-heading);\n  font-size: var(--text-sm);\n  font-weight: 700;\n  letter-spacing: 0.04em;\n}\n\n.site-nav__links[_ngcontent-%COMP%] {\n  gap: clamp(0.75rem, 2vw, 1.75rem);\n}\n\n.site-nav[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  color: var(--color-white);\n  font-size: var(--text-sm);\n  transition: color 160ms ease;\n}\n\n.site-nav[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover, \n.site-nav[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link.site-nav__link--active[_ngcontent-%COMP%] {\n  color: var(--color-soft-blue);\n}\n\n.site-nav[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%] {\n  border-color: color-mix(in srgb, var(--color-soft-blue) 55%, transparent);\n}\n\n.site-nav[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 0.2rem color-mix(in srgb, var(--color-accent) 55%, transparent);\n}\n\n.site-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:focus-visible, \n.site-nav__brand[_ngcontent-%COMP%]:focus-visible {\n  border-radius: 0.2rem;\n  outline: 2px solid var(--color-accent);\n  outline-offset: 4px;\n}\n\n@media (max-width: 47.999rem) {\n  .site-nav__inner[_ngcontent-%COMP%] {\n    min-height: 4rem;\n    padding-inline: 1.25rem;\n  }\n  .site-nav__links[_ngcontent-%COMP%] {\n    gap: 0;\n    padding-block: 0.4rem 0.9rem;\n  }\n  .site-nav[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n    padding-block: 0.65rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNDQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQ0FBQTtBQUNGOztBQUVBOztFQUVFLHlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7QUFDRjs7QUFFQTtFQUNFLGlDQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsNEJBQUE7QUFDRjs7QUFFQTs7RUFFRSw2QkFBQTtBQUNGOztBQUVBO0VBQ0UseUVBQUE7QUFDRjs7QUFFQTtFQUNFLGlGQUFBO0FBQ0Y7O0FBRUE7O0VBRUUscUJBQUE7RUFDQSxzQ0FBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGdCQUFBO0lBQ0EsdUJBQUE7RUFDRjtFQUVBO0lBQ0UsTUFBQTtJQUNBLDRCQUFBO0VBQUY7RUFHQTtJQUNFLHNCQUFBO0VBREY7QUFDRiIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2l0ZS1uYXYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlKTtcbiAgcGFkZGluZy1ibG9jazogMDtcbn1cblxuLnNpdGUtbmF2X19pbm5lciB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXgtd2lkdGg6IDc2cmVtO1xuICBtaW4taGVpZ2h0OiA0LjVyZW07XG4gIHBhZGRpbmctaW5saW5lOiBjbGFtcCgxLjVyZW0sIDR2dywgMy41cmVtKTtcbn1cblxuLnNpdGUtbmF2X19icmFuZCxcbi5zaXRlLW5hdl9fYnJhbmQ6aG92ZXIge1xuICBjb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpO1xuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1oZWFkaW5nKTtcbiAgZm9udC1zaXplOiB2YXIoLS10ZXh0LXNtKTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDRlbTtcbn1cblxuLnNpdGUtbmF2X19saW5rcyB7XG4gIGdhcDogY2xhbXAoMC43NXJlbSwgMnZ3LCAxLjc1cmVtKTtcbn1cblxuLnNpdGUtbmF2IC5uYXZiYXItbmF2IC5uYXYtbGluayB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XG4gIGZvbnQtc2l6ZTogdmFyKC0tdGV4dC1zbSk7XG4gIHRyYW5zaXRpb246IGNvbG9yIDE2MG1zIGVhc2U7XG59XG5cbi5zaXRlLW5hdiAubmF2YmFyLW5hdiAubmF2LWxpbms6aG92ZXIsXG4uc2l0ZS1uYXYgLm5hdmJhci1uYXYgLm5hdi1saW5rLnNpdGUtbmF2X19saW5rLS1hY3RpdmUge1xuICBjb2xvcjogdmFyKC0tY29sb3Itc29mdC1ibHVlKTtcbn1cblxuLnNpdGUtbmF2IC5uYXZiYXItdG9nZ2xlciB7XG4gIGJvcmRlci1jb2xvcjogY29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLWNvbG9yLXNvZnQtYmx1ZSkgNTUlLCB0cmFuc3BhcmVudCk7XG59XG5cbi5zaXRlLW5hdiAubmF2YmFyLXRvZ2dsZXI6Zm9jdXMge1xuICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gY29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLWNvbG9yLWFjY2VudCkgNTUlLCB0cmFuc3BhcmVudCk7XG59XG5cbi5zaXRlLW5hdiAubmF2LWxpbms6Zm9jdXMtdmlzaWJsZSxcbi5zaXRlLW5hdl9fYnJhbmQ6Zm9jdXMtdmlzaWJsZSB7XG4gIGJvcmRlci1yYWRpdXM6IDAuMnJlbTtcbiAgb3V0bGluZTogMnB4IHNvbGlkIHZhcigtLWNvbG9yLWFjY2VudCk7XG4gIG91dGxpbmUtb2Zmc2V0OiA0cHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA0Ny45OTlyZW0pIHtcbiAgLnNpdGUtbmF2X19pbm5lciB7XG4gICAgbWluLWhlaWdodDogNHJlbTtcbiAgICBwYWRkaW5nLWlubGluZTogMS4yNXJlbTtcbiAgfVxuXG4gIC5zaXRlLW5hdl9fbGlua3Mge1xuICAgIGdhcDogMDtcbiAgICBwYWRkaW5nLWJsb2NrOiAwLjRyZW0gMC45cmVtO1xuICB9XG5cbiAgLnNpdGUtbmF2IC5uYXZiYXItbmF2IC5uYXYtbGluayB7XG4gICAgcGFkZGluZy1ibG9jazogMC42NXJlbTtcbiAgfVxufVxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNDQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQ0FBQTtBQUNGOztBQUVBOztFQUVFLHlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7QUFDRjs7QUFFQTtFQUNFLGlDQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsNEJBQUE7QUFDRjs7QUFFQTs7RUFFRSw2QkFBQTtBQUNGOztBQUVBO0VBQ0UseUVBQUE7QUFDRjs7QUFFQTtFQUNFLGlGQUFBO0FBQ0Y7O0FBRUE7O0VBRUUscUJBQUE7RUFDQSxzQ0FBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGdCQUFBO0lBQ0EsdUJBQUE7RUFDRjtFQUVBO0lBQ0UsTUFBQTtJQUNBLDRCQUFBO0VBQUY7RUFHQTtJQUNFLHNCQUFBO0VBREY7QUFDRjtBQUNBLDRxRkFBNHFGIiwic291cmNlc0NvbnRlbnQiOlsiLnNpdGUtbmF2IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XG4gIHBhZGRpbmctYmxvY2s6IDA7XG59XG5cbi5zaXRlLW5hdl9faW5uZXIge1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWF4LXdpZHRoOiA3NnJlbTtcbiAgbWluLWhlaWdodDogNC41cmVtO1xuICBwYWRkaW5nLWlubGluZTogY2xhbXAoMS41cmVtLCA0dncsIDMuNXJlbSk7XG59XG5cbi5zaXRlLW5hdl9fYnJhbmQsXG4uc2l0ZS1uYXZfX2JyYW5kOmhvdmVyIHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlKTtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtaGVhZGluZyk7XG4gIGZvbnQtc2l6ZTogdmFyKC0tdGV4dC1zbSk7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjA0ZW07XG59XG5cbi5zaXRlLW5hdl9fbGlua3Mge1xuICBnYXA6IGNsYW1wKDAuNzVyZW0sIDJ2dywgMS43NXJlbSk7XG59XG5cbi5zaXRlLW5hdiAubmF2YmFyLW5hdiAubmF2LWxpbmsge1xuICBjb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpO1xuICBmb250LXNpemU6IHZhcigtLXRleHQtc20pO1xuICB0cmFuc2l0aW9uOiBjb2xvciAxNjBtcyBlYXNlO1xufVxuXG4uc2l0ZS1uYXYgLm5hdmJhci1uYXYgLm5hdi1saW5rOmhvdmVyLFxuLnNpdGUtbmF2IC5uYXZiYXItbmF2IC5uYXYtbGluay5zaXRlLW5hdl9fbGluay0tYWN0aXZlIHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXNvZnQtYmx1ZSk7XG59XG5cbi5zaXRlLW5hdiAubmF2YmFyLXRvZ2dsZXIge1xuICBib3JkZXItY29sb3I6IGNvbG9yLW1peChpbiBzcmdiLCB2YXIoLS1jb2xvci1zb2Z0LWJsdWUpIDU1JSwgdHJhbnNwYXJlbnQpO1xufVxuXG4uc2l0ZS1uYXYgLm5hdmJhci10b2dnbGVyOmZvY3VzIHtcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIGNvbG9yLW1peChpbiBzcmdiLCB2YXIoLS1jb2xvci1hY2NlbnQpIDU1JSwgdHJhbnNwYXJlbnQpO1xufVxuXG4uc2l0ZS1uYXYgLm5hdi1saW5rOmZvY3VzLXZpc2libGUsXG4uc2l0ZS1uYXZfX2JyYW5kOmZvY3VzLXZpc2libGUge1xuICBib3JkZXItcmFkaXVzOiAwLjJyZW07XG4gIG91dGxpbmU6IDJweCBzb2xpZCB2YXIoLS1jb2xvci1hY2NlbnQpO1xuICBvdXRsaW5lLW9mZnNldDogNHB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNDcuOTk5cmVtKSB7XG4gIC5zaXRlLW5hdl9faW5uZXIge1xuICAgIG1pbi1oZWlnaHQ6IDRyZW07XG4gICAgcGFkZGluZy1pbmxpbmU6IDEuMjVyZW07XG4gIH1cblxuICAuc2l0ZS1uYXZfX2xpbmtzIHtcbiAgICBnYXA6IDA7XG4gICAgcGFkZGluZy1ibG9jazogMC40cmVtIDAuOXJlbTtcbiAgfVxuXG4gIC5zaXRlLW5hdiAubmF2YmFyLW5hdiAubmF2LWxpbmsge1xuICAgIHBhZGRpbmctYmxvY2s6IDAuNjVyZW07XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 8003:
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/page-not-found/page-not-found.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PageNotFoundComponent: () => (/* binding */ PageNotFoundComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class PageNotFoundComponent {
  static {
    this.ɵfac = function PageNotFoundComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || PageNotFoundComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PageNotFoundComponent,
      selectors: [["app-page-not-found"]],
      decls: 2,
      vars: 0,
      template: function PageNotFoundComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "page-not-found works!");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuc2NzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLDRLQUE0SyIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 3887:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SharedModule: () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/page-not-found/page-not-found.component */ 8003);
/* harmony import */ var _components_blogs_blogs_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/blogs/blogs.component */ 8397);
/* harmony import */ var _components_blog_detail_blog_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/blog-detail/blog-detail.component */ 8925);
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/navbar/navbar.component */ 3083);
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/footer/footer.component */ 1765);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);








class SharedModule {
  static {
    this.ɵfac = function SharedModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SharedModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
      type: SharedModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](SharedModule, {
    declarations: [_components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_0__.PageNotFoundComponent, _components_blogs_blogs_component__WEBPACK_IMPORTED_MODULE_1__.BlogsComponent, _components_blog_detail_blog_detail_component__WEBPACK_IMPORTED_MODULE_2__.BlogDetailComponent, _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__.NavbarComponent, _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__.FooterComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule],
    exports: [_components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_0__.PageNotFoundComponent, _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__.NavbarComponent, _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__.FooterComponent]
  });
})();

/***/ }),

/***/ 4429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 635);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map