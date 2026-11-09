"use strict";
(self["webpackChunkTAOPortfolio"] = self["webpackChunkTAOPortfolio"] || []).push([["src_app_tech_tech_module_ts"],{

/***/ 113:
/*!***********************************************!*\
  !*** ./src/app/tech/about/about.component.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AboutComponent: () => (/* binding */ AboutComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);




function AboutComponent_li_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 41)(1, "p", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 43)(4, "p", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div")(8, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const index_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.period);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 5, index_r2 + 1, "2.0"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.organization);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.description);
  }
}
class AboutComponent {
  constructor() {
    this.experience = [{
      period: 'FEB 2026 – PRESENT',
      title: 'Software Engineer',
      organization: 'FD Mediagroep',
      description: 'Building production software and growing in system design, architecture and backend engineering.'
    }, {
      period: 'JAN 2023 – ONGOING',
      title: 'Founder & Software Engineer',
      organization: 'Hibera Agency',
      description: 'Delivering custom software, working directly with clients and combining engineering with entrepreneurship.'
    }, {
      period: 'APR 2024 – JAN 2026',
      title: 'Java Software Engineer',
      organization: 'Dutch Customs (Douane)',
      description: 'Building and maintaining software for real-world systems and complex workflows.'
    }, {
      period: 'AUG 2022 – MAR 2024',
      title: 'Software Engineer',
      organization: 'Vatworks',
      description: 'Working across product development, backend services and user-facing applications.'
    }, {
      period: 'JUL 2021 – JUL 2022',
      title: 'Junior Frontend Developer',
      organization: 'Bloqhouse Technologies',
      description: 'Building frontend experiences and developing a strong foundation in software engineering.'
    }];
  }
  static {
    this.ɵfac = function AboutComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AboutComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AboutComponent,
      selectors: [["app-about"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 91,
      vars: 1,
      consts: [[1, "about-page"], ["aria-labelledby", "about-heading", 1, "about-hero"], [1, "about-hero__inner"], [1, "about-hero__copy"], [1, "about-hero__eyebrow"], ["id", "about-heading"], [1, "about-hero__intro"], ["role", "img", "aria-label", "Portrait placeholder", 1, "about-hero__portrait"], ["aria-hidden", "true", 1, "about-hero__silhouette"], ["aria-labelledby", "about-story-heading", 1, "about-story"], [1, "about-story__inner"], [1, "about-story__copy"], [1, "about-story__eyebrow"], ["id", "about-story-heading"], ["role", "img", "aria-label", "Creative portrait placeholder", 1, "about-story__image"], ["aria-hidden", "true", 1, "about-story__silhouette"], ["aria-labelledby", "experience-heading", 1, "about-experience"], [1, "about-experience__inner"], [1, "about-experience__header"], [1, "about-experience__eyebrow"], ["id", "experience-heading"], [1, "about-experience__intro"], [1, "experience-list"], ["class", "experience-item", 4, "ngFor", "ngForOf"], ["aria-labelledby", "approach-heading", 1, "about-approach"], [1, "about-approach__inner"], [1, "about-approach__eyebrow"], ["id", "approach-heading"], [1, "about-approach__intro"], [1, "approach-grid"], [1, "approach-card"], ["aria-labelledby", "beyond-heading", 1, "about-beyond"], [1, "about-beyond__inner"], [1, "about-beyond__copy"], [1, "about-beyond__eyebrow"], ["id", "beyond-heading"], [1, "about-beyond__content"], ["role", "img", "aria-label", "Music and creativity image placeholder", 1, "about-beyond__image"], [1, "about-beyond__text"], ["routerLink", "/music"], ["aria-hidden", "true"], [1, "experience-item"], [1, "experience-item__period"], [1, "experience-item__details"], [1, "experience-item__number"], [1, "experience-item__organization"], [1, "experience-item__description"]],
      template: function AboutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0)(1, "section", 1)(2, "div", 2)(3, "div", 3)(4, "p", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "A little more about me");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Engineer by profession.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Curious by nature.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Software engineer, entrepreneur and creative mind. I love understanding how things work, solving problems and turning ideas into something meaningful.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Portrait placeholder");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "section", 9)(17, "div", 10)(18, "div", 11)(19, "p", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "My story");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h2", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "It started with curiosity.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "I\u2019ve always been fascinated by how technology works \u2014 and even more by what I could create with it.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "That curiosity grew into a career in software engineering, working on real-world applications and eventually starting my own software development agency.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Today, I\u2019m focused on understanding systems more deeply, building thoughtful software and sharing what I learn along the way.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Photo placeholder");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "section", 16)(34, "div", 17)(35, "header", 18)(36, "p", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Professional experience");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h2", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "The journey so far");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "The teams, projects and responsibilities that shaped me as an engineer.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "ol", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, AboutComponent_li_43_Template, 14, 8, "li", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "section", 24)(45, "div", 25)(46, "p", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "How I approach engineering");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h2", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Good engineering is more than working code.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "For me, engineering means understanding the problem, questioning assumptions and taking responsibility for the decisions behind the software.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 29)(53, "article", 30)(54, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Curiosity");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Understanding how systems work and questioning why things are built the way they are.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "article", 30)(59, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Ownership");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Taking responsibility for technical decisions and the consequences they create.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "article", 30)(64, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Craftsmanship");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Building software thoughtfully, not just making something that works.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "article", 30)(69, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Community");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Sharing knowledge, learning from others and helping engineers grow.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "section", 31)(74, "div", 32)(75, "div", 33)(76, "p", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Beyond the code");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "h2", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "There is more to life than code.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 36)(81, "div", 37)(82, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Music image placeholder");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 38)(85, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Music is another huge part of my life. Whether I\u2019m performing, collaborating or creating something new, it\u2019s another way I connect with people.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "a", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Explore My Music ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "span", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "\u2192");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](43);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.experience);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.DecimalPipe, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
      styles: [".about-hero[_ngcontent-%COMP%] {\n  background: var(--color-primary);\n  color: var(--color-white);\n  padding: clamp(3rem, 7vw, 6rem) clamp(1.5rem, 4vw, 3.5rem);\n}\n\n.about-hero__inner[_ngcontent-%COMP%] {\n  align-items: center;\n  display: grid;\n  gap: clamp(3rem, 8vw, 7rem);\n  grid-template-columns: minmax(0, 1fr) minmax(15rem, 20rem);\n  margin: 0 auto;\n  max-width: 76rem;\n  min-height: min(31rem, 62vh);\n}\n\n.about-hero__eyebrow[_ngcontent-%COMP%], \n.about-story__eyebrow[_ngcontent-%COMP%], \n.about-experience__eyebrow[_ngcontent-%COMP%], \n.about-approach__eyebrow[_ngcontent-%COMP%], \n.about-beyond__eyebrow[_ngcontent-%COMP%] {\n  font-family: var(--font-mono);\n  font-size: var(--text-xs);\n  letter-spacing: 0.08em;\n  margin: 0 0 0.75rem;\n  text-transform: uppercase;\n}\n\n.about-hero__eyebrow[_ngcontent-%COMP%], \n.about-hero__intro[_ngcontent-%COMP%], \n.about-hero__website[_ngcontent-%COMP%] {\n  color: var(--color-soft-blue);\n}\n\n.about-hero__copy[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: var(--color-white);\n  font-size: var(--text-h1);\n  line-height: var(--leading-tight);\n  margin: 0;\n  max-width: 44rem;\n}\n\n.about-hero__intro[_ngcontent-%COMP%] {\n  font-size: var(--text-base);\n  line-height: var(--leading-body);\n  margin: 1rem 0 0;\n  max-width: 39rem;\n}\n\n.about-hero__website[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-family: var(--font-mono);\n  font-size: var(--text-xs);\n  font-weight: 600;\n  margin-top: clamp(2rem, 5vw, 4rem);\n}\n\n.about-hero__website[_ngcontent-%COMP%]:hover {\n  color: var(--color-white);\n}\n\n.about-hero__portrait[_ngcontent-%COMP%], \n.about-story__image[_ngcontent-%COMP%] {\n  align-items: flex-end;\n  aspect-ratio: 4/5;\n  background: linear-gradient(145deg, var(--color-secondary), var(--color-primary-dark));\n  border: 1px solid color-mix(in srgb, var(--color-soft-blue) 28%, transparent);\n  border-radius: 0.8rem;\n  box-shadow: 0 0.6rem 1.2rem color-mix(in srgb, var(--color-primary-dark) 28%, transparent);\n  display: flex;\n  justify-content: center;\n  max-height: 26rem;\n  overflow: hidden;\n  position: relative;\n}\n\n.about-hero__portrait[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%], \n.about-story__image[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  background: color-mix(in srgb, var(--color-primary) 75%, transparent);\n  color: var(--color-soft-blue);\n  font-family: var(--font-mono);\n  font-size: var(--text-xs);\n  margin: 0.75rem;\n  padding: 0.35rem 0.5rem;\n  position: relative;\n  text-transform: uppercase;\n}\n\n.about-hero__silhouette[_ngcontent-%COMP%], \n.about-story__silhouette[_ngcontent-%COMP%] {\n  background: var(--color-neutral-900);\n  border-radius: 48% 48% 0 0;\n  bottom: 0;\n  height: 48%;\n  position: absolute;\n  width: 75%;\n}\n\n.about-hero__silhouette[_ngcontent-%COMP%]::before, \n.about-story__silhouette[_ngcontent-%COMP%]::before {\n  background: var(--color-neutral-200);\n  border-radius: 50%;\n  content: \"\";\n  height: 7.5rem;\n  left: 50%;\n  position: absolute;\n  top: -6.7rem;\n  transform: translateX(-50%);\n  width: 6.5rem;\n}\n\n.about-hero__silhouette[_ngcontent-%COMP%]::after, \n.about-story__silhouette[_ngcontent-%COMP%]::after {\n  background: var(--color-neutral-400);\n  border-radius: 50% 50% 0 0;\n  content: \"\";\n  height: 1.8rem;\n  left: 50%;\n  position: absolute;\n  top: -0.4rem;\n  transform: translateX(-50%);\n  width: 9rem;\n}\n\n.about-story[_ngcontent-%COMP%] {\n  background: var(--color-warm-white);\n  color: var(--color-primary);\n  padding: clamp(3rem, 7vw, 6rem) clamp(1.5rem, 4vw, 3.5rem);\n}\n\n.about-story__inner[_ngcontent-%COMP%] {\n  align-items: center;\n  display: grid;\n  gap: clamp(3rem, 8vw, 7rem);\n  grid-template-columns: minmax(0, 1fr) minmax(14rem, 19rem);\n  margin: 0 auto;\n  max-width: 76rem;\n}\n\n.about-story__eyebrow[_ngcontent-%COMP%], \n.about-beyond__eyebrow[_ngcontent-%COMP%] {\n  color: var(--color-soft-blue);\n}\n\n.about-story__copy[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.about-beyond__copy[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: var(--color-primary);\n  font-size: var(--text-h3);\n  margin: 0 0 1rem;\n}\n\n.about-story__copy[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%]:not(.about-story__eyebrow) {\n  color: var(--color-neutral-700);\n  margin: 0 0 0.9rem;\n  max-width: 43rem;\n}\n\n.about-story__image[_ngcontent-%COMP%] {\n  background: linear-gradient(145deg, var(--color-music-cream), var(--color-music-rose));\n  border-color: color-mix(in srgb, var(--color-primary) 18%, transparent);\n}\n\n.about-story__silhouette[_ngcontent-%COMP%] {\n  background: var(--color-music-primary);\n}\n\n.about-story__silhouette[_ngcontent-%COMP%]::before {\n  background: var(--color-music-cream);\n}\n\n.about-story__silhouette[_ngcontent-%COMP%]::after {\n  background: var(--color-music-rose);\n}\n\n.about-experience[_ngcontent-%COMP%] {\n  background: var(--color-soft-blue);\n  color: var(--color-primary);\n  padding: clamp(3rem, 7vw, 6rem) clamp(1.5rem, 4vw, 3.5rem);\n}\n\n.about-experience__inner[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  max-width: 76rem;\n}\n\n.about-experience__header[_ngcontent-%COMP%] {\n  border-bottom: 1px solid color-mix(in srgb, var(--color-primary) 14%, transparent);\n  padding-bottom: 1.25rem;\n}\n\n.about-experience__eyebrow[_ngcontent-%COMP%] {\n  color: var(--color-primary);\n}\n\n.about-experience__header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: var(--color-primary);\n  font-size: var(--text-h3);\n  margin: 0;\n}\n\n.about-experience__intro[_ngcontent-%COMP%] {\n  color: color-mix(in srgb, var(--color-primary) 65%, transparent);\n  font-family: var(--font-mono);\n  font-size: var(--text-xs);\n  margin: 0.4rem 0 0;\n}\n\n.experience-list[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.experience-item[_ngcontent-%COMP%] {\n  border-bottom: 1px solid color-mix(in srgb, var(--color-primary) 14%, transparent);\n  display: grid;\n  gap: 1.5rem;\n  grid-template-columns: minmax(9rem, 0.2fr) minmax(0, 1fr);\n  padding: 1.5rem 0;\n}\n\n.experience-item__period[_ngcontent-%COMP%], \n.experience-item__number[_ngcontent-%COMP%], \n.experience-item__organization[_ngcontent-%COMP%], \n.experience-item__description[_ngcontent-%COMP%] {\n  font-family: var(--font-mono);\n  font-size: var(--text-xs);\n}\n\n.experience-item__period[_ngcontent-%COMP%] {\n  color: color-mix(in srgb, var(--color-primary) 68%, transparent);\n  margin: 0.3rem 0 0;\n}\n\n.experience-item__details[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1rem;\n  grid-template-columns: 2rem minmax(0, 1fr);\n}\n\n.experience-item__number[_ngcontent-%COMP%] {\n  color: color-mix(in srgb, var(--color-primary) 55%, transparent);\n  margin: 0.5rem 0 0;\n}\n\n.experience-item[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: var(--color-primary);\n  font-size: var(--text-h4);\n  margin: 0;\n}\n\n.experience-item__organization[_ngcontent-%COMP%] {\n  color: var(--color-primary);\n  margin: 0.3rem 0;\n}\n\n.experience-item__description[_ngcontent-%COMP%] {\n  color: color-mix(in srgb, var(--color-primary) 70%, transparent);\n  margin: 0;\n  max-width: 54rem;\n}\n\n.about-approach[_ngcontent-%COMP%] {\n  background: var(--color-primary);\n  color: var(--color-white);\n  padding: clamp(3rem, 7vw, 6rem) clamp(1.5rem, 4vw, 3.5rem);\n}\n\n.about-approach__inner[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  max-width: 76rem;\n}\n\n.about-approach__eyebrow[_ngcontent-%COMP%] {\n  color: var(--color-soft-blue);\n}\n\n.about-approach__inner[_ngcontent-%COMP%]    > h2[_ngcontent-%COMP%] {\n  color: var(--color-white);\n  font-size: var(--text-h3);\n  margin: 0;\n}\n\n.about-approach__intro[_ngcontent-%COMP%] {\n  color: var(--color-soft-blue);\n  font-family: var(--font-mono);\n  font-size: var(--text-xs);\n  margin: 0.6rem 0 1.75rem;\n  max-width: 52rem;\n}\n\n.approach-grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1.5rem;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n\n.approach-card[_ngcontent-%COMP%] {\n  background: color-mix(in srgb, var(--color-soft-blue) 78%, var(--color-white));\n  border-radius: 0.75rem;\n  color: var(--color-primary);\n  padding: 1.25rem;\n}\n\n.approach-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: var(--color-primary);\n  font-size: var(--text-h4);\n  margin: 0;\n}\n\n.approach-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: color-mix(in srgb, var(--color-primary) 78%, transparent);\n  font-family: var(--font-mono);\n  font-size: var(--text-xs);\n  margin: 0.5rem 0 0;\n}\n\n.about-beyond[_ngcontent-%COMP%] {\n  background: var(--color-warm-white);\n  color: var(--color-primary);\n  padding: clamp(3rem, 7vw, 6rem) clamp(1.5rem, 4vw, 3.5rem);\n}\n\n.about-beyond__inner[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  max-width: 76rem;\n}\n\n.about-beyond__eyebrow[_ngcontent-%COMP%] {\n  color: var(--color-soft-blue);\n}\n\n.about-beyond__copy[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n\n.about-beyond__content[_ngcontent-%COMP%] {\n  align-items: center;\n  display: grid;\n  gap: clamp(2rem, 6vw, 5rem);\n  grid-template-columns: minmax(14rem, 0.8fr) minmax(0, 1fr);\n}\n\n.about-beyond__image[_ngcontent-%COMP%] {\n  align-items: center;\n  aspect-ratio: 4/5;\n  background-color: var(--color-soft-blue);\n  background-image: linear-gradient(153deg, transparent calc(50% - 1px), color-mix(in srgb, var(--color-primary) 30%, transparent) 50%, transparent calc(50% + 1px)), linear-gradient(27deg, transparent calc(50% - 1px), color-mix(in srgb, var(--color-primary) 30%, transparent) 50%, transparent calc(50% + 1px));\n  border: 1px solid color-mix(in srgb, var(--color-primary) 35%, transparent);\n  border-radius: 0.75rem;\n  color: var(--color-primary);\n  display: flex;\n  justify-content: center;\n  max-width: 22rem;\n}\n\n.about-beyond__image[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background: var(--color-soft-blue);\n  font-family: var(--font-mono);\n  font-size: var(--text-xs);\n  padding: 0.4rem 0.6rem;\n}\n\n.about-beyond__text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--color-neutral-700);\n  font-family: var(--font-mono);\n  font-size: var(--text-sm);\n  margin: 0;\n}\n\n.about-beyond__text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--color-primary);\n  display: inline-block;\n  font-size: var(--text-sm);\n  font-weight: 600;\n  margin-top: 1rem;\n}\n\n.about-beyond__text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: var(--color-secondary);\n}\n\n.about-beyond__text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus-visible {\n  outline: 3px solid var(--color-accent);\n  outline-offset: 3px;\n}\n\n@media (max-width: 48rem) {\n  .about-hero__inner[_ngcontent-%COMP%] {\n    gap: 2rem;\n    grid-template-columns: minmax(0, 1fr) minmax(11rem, 15rem);\n    min-height: auto;\n  }\n  .about-hero__copy[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: clamp(2rem, 5vw, 3rem);\n  }\n  .about-story__inner[_ngcontent-%COMP%] {\n    gap: 2rem;\n    grid-template-columns: minmax(0, 1fr) minmax(12rem, 16rem);\n  }\n  .experience-item[_ngcontent-%COMP%] {\n    gap: 0.75rem;\n    grid-template-columns: 1fr;\n  }\n  .about-beyond__content[_ngcontent-%COMP%] {\n    gap: 2rem;\n  }\n}\n@media (max-width: 36rem) {\n  .about-hero[_ngcontent-%COMP%] {\n    padding: 3rem 1.25rem 4rem;\n  }\n  .about-hero__inner[_ngcontent-%COMP%], \n   .about-story__inner[_ngcontent-%COMP%], \n   .about-beyond__content[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .about-hero__portrait[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .about-story[_ngcontent-%COMP%], \n   .about-experience[_ngcontent-%COMP%], \n   .about-approach[_ngcontent-%COMP%], \n   .about-beyond[_ngcontent-%COMP%] {\n    padding-inline: 1.25rem;\n  }\n  .about-story__image[_ngcontent-%COMP%] {\n    justify-self: center;\n    max-width: 19rem;\n    width: 100%;\n  }\n  .approach-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .about-beyond__image[_ngcontent-%COMP%] {\n    max-width: 18rem;\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,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QUFJQTtFQUNFLCtCQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLFNBQUE7QUFERjs7QUFJQTtFQUNFLDJCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFERjs7QUFJQTtFQUNFLDZCQUFBO0FBREY7O0FBSUE7RUFDRSxzQ0FBQTtFQUNBLG1CQUFBO0FBREY7O0FBSUE7RUFDRTtJQUNFLFNBQUE7SUFDQSwwREFBQTtJQUNBLGdCQUFBO0VBREY7RUFJQTtJQUNFLGlDQUFBO0VBRkY7RUFLQTtJQUNFLFNBQUE7SUFDQSwwREFBQTtFQUhGO0VBTUE7SUFDRSxZQUFBO0lBQ0EsMEJBQUE7RUFKRjtFQU9BO0lBQ0UsU0FBQTtFQUxGO0FBQ0Y7QUFRQTtFQUNFO0lBQ0UsMEJBQUE7RUFORjtFQVNBOzs7SUFHRSwwQkFBQTtFQVBGO0VBVUE7SUFDRSxhQUFBO0VBUkY7RUFXQTs7OztJQUlFLHVCQUFBO0VBVEY7RUFZQTtJQUNFLG9CQUFBO0lBQ0EsZ0JBQUE7SUFDQSxXQUFBO0VBVkY7RUFhQTtJQUNFLDBCQUFBO0VBWEY7RUFjQTtJQUNFLGdCQUFBO0lBQ0EsV0FBQTtFQVpGO0FBQ0YiLCJmaWxlIjoiYWJvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWJvdXQtaGVybyB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xuICBjb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpO1xuICBwYWRkaW5nOiBjbGFtcCgzcmVtLCA3dncsIDZyZW0pIGNsYW1wKDEuNXJlbSwgNHZ3LCAzLjVyZW0pO1xufVxuXG4uYWJvdXQtaGVyb19faW5uZXIge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6IGNsYW1wKDNyZW0sIDh2dywgN3JlbSk7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDAsIDFmcikgbWlubWF4KDE1cmVtLCAyMHJlbSk7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXgtd2lkdGg6IDc2cmVtO1xuICBtaW4taGVpZ2h0OiBtaW4oMzFyZW0sIDYydmgpO1xufVxuXG4uYWJvdXQtaGVyb19fZXllYnJvdyxcbi5hYm91dC1zdG9yeV9fZXllYnJvdyxcbi5hYm91dC1leHBlcmllbmNlX19leWVicm93LFxuLmFib3V0LWFwcHJvYWNoX19leWVicm93LFxuLmFib3V0LWJleW9uZF9fZXllYnJvdyB7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LW1vbm8pO1xuICBmb250LXNpemU6IHZhcigtLXRleHQteHMpO1xuICBsZXR0ZXItc3BhY2luZzogMC4wOGVtO1xuICBtYXJnaW46IDAgMCAwLjc1cmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uYWJvdXQtaGVyb19fZXllYnJvdyxcbi5hYm91dC1oZXJvX19pbnRybyxcbi5hYm91dC1oZXJvX193ZWJzaXRlIHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXNvZnQtYmx1ZSk7XG59XG5cbi5hYm91dC1oZXJvX19jb3B5IGgxIHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlKTtcbiAgZm9udC1zaXplOiB2YXIoLS10ZXh0LWgxKTtcbiAgbGluZS1oZWlnaHQ6IHZhcigtLWxlYWRpbmctdGlnaHQpO1xuICBtYXJnaW46IDA7XG4gIG1heC13aWR0aDogNDRyZW07XG59XG5cbi5hYm91dC1oZXJvX19pbnRybyB7XG4gIGZvbnQtc2l6ZTogdmFyKC0tdGV4dC1iYXNlKTtcbiAgbGluZS1oZWlnaHQ6IHZhcigtLWxlYWRpbmctYm9keSk7XG4gIG1hcmdpbjogMXJlbSAwIDA7XG4gIG1heC13aWR0aDogMzlyZW07XG59XG5cbi5hYm91dC1oZXJvX193ZWJzaXRlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1tb25vKTtcbiAgZm9udC1zaXplOiB2YXIoLS10ZXh0LXhzKTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luLXRvcDogY2xhbXAoMnJlbSwgNXZ3LCA0cmVtKTtcbn1cblxuLmFib3V0LWhlcm9fX3dlYnNpdGU6aG92ZXIge1xuICBjb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpO1xufVxuXG4uYWJvdXQtaGVyb19fcG9ydHJhaXQsXG4uYWJvdXQtc3RvcnlfX2ltYWdlIHtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBhc3BlY3QtcmF0aW86IDQgLyA1O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTQ1ZGVnLCB2YXIoLS1jb2xvci1zZWNvbmRhcnkpLCB2YXIoLS1jb2xvci1wcmltYXJ5LWRhcmspKTtcbiAgYm9yZGVyOiAxcHggc29saWQgY29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLWNvbG9yLXNvZnQtYmx1ZSkgMjglLCB0cmFuc3BhcmVudCk7XG4gIGJvcmRlci1yYWRpdXM6IDAuOHJlbTtcbiAgYm94LXNoYWRvdzogMCAwLjZyZW0gMS4ycmVtIGNvbG9yLW1peChpbiBzcmdiLCB2YXIoLS1jb2xvci1wcmltYXJ5LWRhcmspIDI4JSwgdHJhbnNwYXJlbnQpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWF4LWhlaWdodDogMjZyZW07XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmFib3V0LWhlcm9fX3BvcnRyYWl0ID4gc3Bhbixcbi5hYm91dC1zdG9yeV9faW1hZ2UgPiBzcGFuIHtcbiAgYmFja2dyb3VuZDogY29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLWNvbG9yLXByaW1hcnkpIDc1JSwgdHJhbnNwYXJlbnQpO1xuICBjb2xvcjogdmFyKC0tY29sb3Itc29mdC1ibHVlKTtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtbW9ubyk7XG4gIGZvbnQtc2l6ZTogdmFyKC0tdGV4dC14cyk7XG4gIG1hcmdpbjogMC43NXJlbTtcbiAgcGFkZGluZzogMC4zNXJlbSAwLjVyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmFib3V0LWhlcm9fX3NpbGhvdWV0dGUsXG4uYWJvdXQtc3RvcnlfX3NpbGhvdWV0dGUge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1uZXV0cmFsLTkwMCk7XG4gIGJvcmRlci1yYWRpdXM6IDQ4JSA0OCUgMCAwO1xuICBib3R0b206IDA7XG4gIGhlaWdodDogNDglO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA3NSU7XG59XG5cbi5hYm91dC1oZXJvX19zaWxob3VldHRlOjpiZWZvcmUsXG4uYWJvdXQtc3RvcnlfX3NpbGhvdWV0dGU6OmJlZm9yZSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLW5ldXRyYWwtMjAwKTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBjb250ZW50OiAnJztcbiAgaGVpZ2h0OiA3LjVyZW07XG4gIGxlZnQ6IDUwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC02LjdyZW07XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgd2lkdGg6IDYuNXJlbTtcbn1cblxuLmFib3V0LWhlcm9fX3NpbGhvdWV0dGU6OmFmdGVyLFxuLmFib3V0LXN0b3J5X19zaWxob3VldHRlOjphZnRlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLW5ldXRyYWwtNDAwKTtcbiAgYm9yZGVyLXJhZGl1czogNTAlIDUwJSAwIDA7XG4gIGNvbnRlbnQ6ICcnO1xuICBoZWlnaHQ6IDEuOHJlbTtcbiAgbGVmdDogNTAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTAuNHJlbTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICB3aWR0aDogOXJlbTtcbn1cblxuLmFib3V0LXN0b3J5IHtcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3Itd2FybS13aGl0ZSk7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbiAgcGFkZGluZzogY2xhbXAoM3JlbSwgN3Z3LCA2cmVtKSBjbGFtcCgxLjVyZW0sIDR2dywgMy41cmVtKTtcbn1cblxuLmFib3V0LXN0b3J5X19pbm5lciB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogY2xhbXAoM3JlbSwgOHZ3LCA3cmVtKTtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMCwgMWZyKSBtaW5tYXgoMTRyZW0sIDE5cmVtKTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1heC13aWR0aDogNzZyZW07XG59XG5cbi5hYm91dC1zdG9yeV9fZXllYnJvdyxcbi5hYm91dC1iZXlvbmRfX2V5ZWJyb3cge1xuICBjb2xvcjogdmFyKC0tY29sb3Itc29mdC1ibHVlKTtcbn1cblxuLmFib3V0LXN0b3J5X19jb3B5IGgyLFxuLmFib3V0LWJleW9uZF9fY29weSBoMiB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbiAgZm9udC1zaXplOiB2YXIoLS10ZXh0LWgzKTtcbiAgbWFyZ2luOiAwIDAgMXJlbTtcbn1cblxuLmFib3V0LXN0b3J5X19jb3B5ID4gcDpub3QoLmFib3V0LXN0b3J5X19leWVicm93KSB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1uZXV0cmFsLTcwMCk7XG4gIG1hcmdpbjogMCAwIDAuOXJlbTtcbiAgbWF4LXdpZHRoOiA0M3JlbTtcbn1cblxuLmFib3V0LXN0b3J5X19pbWFnZSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNDVkZWcsIHZhcigtLWNvbG9yLW11c2ljLWNyZWFtKSwgdmFyKC0tY29sb3ItbXVzaWMtcm9zZSkpO1xuICBib3JkZXItY29sb3I6IGNvbG9yLW1peChpbiBzcmdiLCB2YXIoLS1jb2xvci1wcmltYXJ5KSAxOCUsIHRyYW5zcGFyZW50KTtcbn1cblxuLmFib3V0LXN0b3J5X19zaWxob3VldHRlIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItbXVzaWMtcHJpbWFyeSk7XG59XG5cbi5hYm91dC1zdG9yeV9fc2lsaG91ZXR0ZTo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItbXVzaWMtY3JlYW0pO1xufVxuXG4uYWJvdXQtc3RvcnlfX3NpbGhvdWV0dGU6OmFmdGVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItbXVzaWMtcm9zZSk7XG59XG5cbi5hYm91dC1leHBlcmllbmNlIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3Itc29mdC1ibHVlKTtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xuICBwYWRkaW5nOiBjbGFtcCgzcmVtLCA3dncsIDZyZW0pIGNsYW1wKDEuNXJlbSwgNHZ3LCAzLjVyZW0pO1xufVxuXG4uYWJvdXQtZXhwZXJpZW5jZV9faW5uZXIge1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWF4LXdpZHRoOiA3NnJlbTtcbn1cblxuLmFib3V0LWV4cGVyaWVuY2VfX2hlYWRlciB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBjb2xvci1taXgoaW4gc3JnYiwgdmFyKC0tY29sb3ItcHJpbWFyeSkgMTQlLCB0cmFuc3BhcmVudCk7XG4gIHBhZGRpbmctYm90dG9tOiAxLjI1cmVtO1xufVxuXG4uYWJvdXQtZXhwZXJpZW5jZV9fZXllYnJvdyB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbn1cblxuLmFib3V0LWV4cGVyaWVuY2VfX2hlYWRlciBoMiB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbiAgZm9udC1zaXplOiB2YXIoLS10ZXh0LWgzKTtcbiAgbWFyZ2luOiAwO1xufVxuXG4uYWJvdXQtZXhwZXJpZW5jZV9faW50cm8ge1xuICBjb2xvcjogY29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLWNvbG9yLXByaW1hcnkpIDY1JSwgdHJhbnNwYXJlbnQpO1xuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1tb25vKTtcbiAgZm9udC1zaXplOiB2YXIoLS10ZXh0LXhzKTtcbiAgbWFyZ2luOiAwLjRyZW0gMCAwO1xufVxuXG4uZXhwZXJpZW5jZS1saXN0IHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4uZXhwZXJpZW5jZS1pdGVtIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGNvbG9yLW1peChpbiBzcmdiLCB2YXIoLS1jb2xvci1wcmltYXJ5KSAxNCUsIHRyYW5zcGFyZW50KTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiAxLjVyZW07XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDlyZW0sIDAuMmZyKSBtaW5tYXgoMCwgMWZyKTtcbiAgcGFkZGluZzogMS41cmVtIDA7XG59XG5cbi5leHBlcmllbmNlLWl0ZW1fX3BlcmlvZCxcbi5leHBlcmllbmNlLWl0ZW1fX251bWJlcixcbi5leHBlcmllbmNlLWl0ZW1fX29yZ2FuaXphdGlvbixcbi5leHBlcmllbmNlLWl0ZW1fX2Rlc2NyaXB0aW9uIHtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtbW9ubyk7XG4gIGZvbnQtc2l6ZTogdmFyKC0tdGV4dC14cyk7XG59XG5cbi5leHBlcmllbmNlLWl0ZW1fX3BlcmlvZCB7XG4gIGNvbG9yOiBjb2xvci1taXgoaW4gc3JnYiwgdmFyKC0tY29sb3ItcHJpbWFyeSkgNjglLCB0cmFuc3BhcmVudCk7XG4gIG1hcmdpbjogMC4zcmVtIDAgMDtcbn1cblxuLmV4cGVyaWVuY2UtaXRlbV9fZGV0YWlscyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogMXJlbTtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAycmVtIG1pbm1heCgwLCAxZnIpO1xufVxuXG4uZXhwZXJpZW5jZS1pdGVtX19udW1iZXIge1xuICBjb2xvcjogY29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLWNvbG9yLXByaW1hcnkpIDU1JSwgdHJhbnNwYXJlbnQpO1xuICBtYXJnaW46IDAuNXJlbSAwIDA7XG59XG5cbi5leHBlcmllbmNlLWl0ZW0gaDMge1xuICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG4gIGZvbnQtc2l6ZTogdmFyKC0tdGV4dC1oNCk7XG4gIG1hcmdpbjogMDtcbn1cblxuLmV4cGVyaWVuY2UtaXRlbV9fb3JnYW5pemF0aW9uIHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xuICBtYXJnaW46IDAuM3JlbSAwO1xufVxuXG4uZXhwZXJpZW5jZS1pdGVtX19kZXNjcmlwdGlvbiB7XG4gIGNvbG9yOiBjb2xvci1taXgoaW4gc3JnYiwgdmFyKC0tY29sb3ItcHJpbWFyeSkgNzAlLCB0cmFuc3BhcmVudCk7XG4gIG1hcmdpbjogMDtcbiAgbWF4LXdpZHRoOiA1NHJlbTtcbn1cblxuLmFib3V0LWFwcHJvYWNoIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XG4gIHBhZGRpbmc6IGNsYW1wKDNyZW0sIDd2dywgNnJlbSkgY2xhbXAoMS41cmVtLCA0dncsIDMuNXJlbSk7XG59XG5cbi5hYm91dC1hcHByb2FjaF9faW5uZXIge1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWF4LXdpZHRoOiA3NnJlbTtcbn1cblxuLmFib3V0LWFwcHJvYWNoX19leWVicm93IHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXNvZnQtYmx1ZSk7XG59XG5cbi5hYm91dC1hcHByb2FjaF9faW5uZXIgPiBoMiB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XG4gIGZvbnQtc2l6ZTogdmFyKC0tdGV4dC1oMyk7XG4gIG1hcmdpbjogMDtcbn1cblxuLmFib3V0LWFwcHJvYWNoX19pbnRybyB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1zb2Z0LWJsdWUpO1xuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1tb25vKTtcbiAgZm9udC1zaXplOiB2YXIoLS10ZXh0LXhzKTtcbiAgbWFyZ2luOiAwLjZyZW0gMCAxLjc1cmVtO1xuICBtYXgtd2lkdGg6IDUycmVtO1xufVxuXG4uYXBwcm9hY2gtZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogMS41cmVtO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBtaW5tYXgoMCwgMWZyKSk7XG59XG5cbi5hcHByb2FjaC1jYXJkIHtcbiAgYmFja2dyb3VuZDogY29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLWNvbG9yLXNvZnQtYmx1ZSkgNzglLCB2YXIoLS1jb2xvci13aGl0ZSkpO1xuICBib3JkZXItcmFkaXVzOiAwLjc1cmVtO1xuICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG4gIHBhZGRpbmc6IDEuMjVyZW07XG59XG5cbi5hcHByb2FjaC1jYXJkIGgzIHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xuICBmb250LXNpemU6IHZhcigtLXRleHQtaDQpO1xuICBtYXJnaW46IDA7XG59XG5cbi5hcHByb2FjaC1jYXJkIHAge1xuICBjb2xvcjogY29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLWNvbG9yLXByaW1hcnkpIDc4JSwgdHJhbnNwYXJlbnQpO1xuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1tb25vKTtcbiAgZm9udC1zaXplOiB2YXIoLS10ZXh0LXhzKTtcbiAgbWFyZ2luOiAwLjVyZW0gMCAwO1xufVxuXG4uYWJvdXQtYmV5b25kIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3Itd2FybS13aGl0ZSk7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbiAgcGFkZGluZzogY2xhbXAoM3JlbSwgN3Z3LCA2cmVtKSBjbGFtcCgxLjVyZW0sIDR2dywgMy41cmVtKTtcbn1cblxuLmFib3V0LWJleW9uZF9faW5uZXIge1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWF4LXdpZHRoOiA3NnJlbTtcbn1cblxuLmFib3V0LWJleW9uZF9fZXllYnJvdyB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1zb2Z0LWJsdWUpO1xufVxuXG4uYWJvdXQtYmV5b25kX19jb3B5IGgyIHtcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xufVxuXG4uYWJvdXQtYmV5b25kX19jb250ZW50IHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiBjbGFtcCgycmVtLCA2dncsIDVyZW0pO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgxNHJlbSwgMC44ZnIpIG1pbm1heCgwLCAxZnIpO1xufVxuXG4uYWJvdXQtYmV5b25kX19pbWFnZSB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGFzcGVjdC1yYXRpbzogNCAvIDU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXNvZnQtYmx1ZSk7XG4gIGJhY2tncm91bmQtaW1hZ2U6XG4gICAgbGluZWFyLWdyYWRpZW50KDE1M2RlZywgdHJhbnNwYXJlbnQgY2FsYyg1MCUgLSAxcHgpLCBjb2xvci1taXgoaW4gc3JnYiwgdmFyKC0tY29sb3ItcHJpbWFyeSkgMzAlLCB0cmFuc3BhcmVudCkgNTAlLCB0cmFuc3BhcmVudCBjYWxjKDUwJSArIDFweCkpLFxuICAgIGxpbmVhci1ncmFkaWVudCgyN2RlZywgdHJhbnNwYXJlbnQgY2FsYyg1MCUgLSAxcHgpLCBjb2xvci1taXgoaW4gc3JnYiwgdmFyKC0tY29sb3ItcHJpbWFyeSkgMzAlLCB0cmFuc3BhcmVudCkgNTAlLCB0cmFuc3BhcmVudCBjYWxjKDUwJSArIDFweCkpO1xuICBib3JkZXI6IDFweCBzb2xpZCBjb2xvci1taXgoaW4gc3JnYiwgdmFyKC0tY29sb3ItcHJpbWFyeSkgMzUlLCB0cmFuc3BhcmVudCk7XG4gIGJvcmRlci1yYWRpdXM6IDAuNzVyZW07XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1heC13aWR0aDogMjJyZW07XG59XG5cbi5hYm91dC1iZXlvbmRfX2ltYWdlIHNwYW4ge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1zb2Z0LWJsdWUpO1xuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1tb25vKTtcbiAgZm9udC1zaXplOiB2YXIoLS10ZXh0LXhzKTtcbiAgcGFkZGluZzogMC40cmVtIDAuNnJlbTtcbn1cblxuLmFib3V0LWJleW9uZF9fdGV4dCBwIHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLW5ldXRyYWwtNzAwKTtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtbW9ubyk7XG4gIGZvbnQtc2l6ZTogdmFyKC0tdGV4dC1zbSk7XG4gIG1hcmdpbjogMDtcbn1cblxuLmFib3V0LWJleW9uZF9fdGV4dCBhIHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogdmFyKC0tdGV4dC1zbSk7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbi10b3A6IDFyZW07XG59XG5cbi5hYm91dC1iZXlvbmRfX3RleHQgYTpob3ZlciB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xufVxuXG4uYWJvdXQtYmV5b25kX190ZXh0IGE6Zm9jdXMtdmlzaWJsZSB7XG4gIG91dGxpbmU6IDNweCBzb2xpZCB2YXIoLS1jb2xvci1hY2NlbnQpO1xuICBvdXRsaW5lLW9mZnNldDogM3B4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNDhyZW0pIHtcbiAgLmFib3V0LWhlcm9fX2lubmVyIHtcbiAgICBnYXA6IDJyZW07XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMCwgMWZyKSBtaW5tYXgoMTFyZW0sIDE1cmVtKTtcbiAgICBtaW4taGVpZ2h0OiBhdXRvO1xuICB9XG5cbiAgLmFib3V0LWhlcm9fX2NvcHkgaDEge1xuICAgIGZvbnQtc2l6ZTogY2xhbXAoMnJlbSwgNXZ3LCAzcmVtKTtcbiAgfVxuXG4gIC5hYm91dC1zdG9yeV9faW5uZXIge1xuICAgIGdhcDogMnJlbTtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgwLCAxZnIpIG1pbm1heCgxMnJlbSwgMTZyZW0pO1xuICB9XG5cbiAgLmV4cGVyaWVuY2UtaXRlbSB7XG4gICAgZ2FwOiAwLjc1cmVtO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICB9XG5cbiAgLmFib3V0LWJleW9uZF9fY29udGVudCB7XG4gICAgZ2FwOiAycmVtO1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAzNnJlbSkge1xuICAuYWJvdXQtaGVybyB7XG4gICAgcGFkZGluZzogM3JlbSAxLjI1cmVtIDRyZW07XG4gIH1cblxuICAuYWJvdXQtaGVyb19faW5uZXIsXG4gIC5hYm91dC1zdG9yeV9faW5uZXIsXG4gIC5hYm91dC1iZXlvbmRfX2NvbnRlbnQge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICB9XG5cbiAgLmFib3V0LWhlcm9fX3BvcnRyYWl0IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLmFib3V0LXN0b3J5LFxuICAuYWJvdXQtZXhwZXJpZW5jZSxcbiAgLmFib3V0LWFwcHJvYWNoLFxuICAuYWJvdXQtYmV5b25kIHtcbiAgICBwYWRkaW5nLWlubGluZTogMS4yNXJlbTtcbiAgfVxuXG4gIC5hYm91dC1zdG9yeV9faW1hZ2Uge1xuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICAgIG1heC13aWR0aDogMTlyZW07XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAuYXBwcm9hY2gtZ3JpZCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIH1cblxuICAuYWJvdXQtYmV5b25kX19pbWFnZSB7XG4gICAgbWF4LXdpZHRoOiAxOHJlbTtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdGVjaC9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdDQUFBO0VBQ0EseUJBQUE7RUFDQSwwREFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSwwREFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0FBQ0Y7O0FBRUE7Ozs7O0VBS0UsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQUNGOztBQUVBOzs7RUFHRSw2QkFBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7RUFDQSx5QkFBQTtFQUNBLGlDQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSwyQkFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQ0FBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7QUFDRjs7QUFFQTs7RUFFRSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0ZBQUE7RUFDQSw2RUFBQTtFQUNBLHFCQUFBO0VBQ0EsMEZBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTs7RUFFRSxxRUFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFDRjs7QUFFQTs7RUFFRSxvQ0FBQTtFQUNBLDBCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFDRjs7QUFFQTs7RUFFRSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBRUE7O0VBRUUsb0NBQUE7RUFDQSwwQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0UsbUNBQUE7RUFDQSwyQkFBQTtFQUNBLDBEQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLDBEQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7O0VBRUUsNkJBQUE7QUFDRjs7QUFFQTs7RUFFRSwyQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0Usc0ZBQUE7RUFDQSx1RUFBQTtBQUNGOztBQUVBO0VBQ0Usc0NBQUE7QUFDRjs7QUFFQTtFQUNFLG9DQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQ0FBQTtBQUNGOztBQUVBO0VBQ0Usa0NBQUE7RUFDQSwyQkFBQTtFQUNBLDBEQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGtGQUFBO0VBQ0EsdUJBQUE7QUFDRjs7QUFFQTtFQUNFLDJCQUFBO0FBQ0Y7O0FBRUE7RUFDRSwyQkFBQTtFQUNBLHlCQUFBO0VBQ0EsU0FBQTtBQUNGOztBQUVBO0VBQ0UsZ0VBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFDRjs7QUFFQTtFQUNFLGtGQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSx5REFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7Ozs7RUFJRSw2QkFBQTtFQUNBLHlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnRUFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsU0FBQTtFQUNBLDBDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnRUFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSwyQkFBQTtFQUNBLHlCQUFBO0VBQ0EsU0FBQTtBQUNGOztBQUVBO0VBQ0UsMkJBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0VBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGdDQUFBO0VBQ0EseUJBQUE7RUFDQSwwREFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSw2QkFBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7RUFDQSx5QkFBQTtFQUNBLFNBQUE7QUFDRjs7QUFFQTtFQUNFLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLHdCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsZ0RBQUE7QUFDRjs7QUFFQTtFQUNFLDhFQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSwyQkFBQTtFQUNBLHlCQUFBO0VBQ0EsU0FBQTtBQUNGOztBQUVBO0VBQ0UsZ0VBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLG1DQUFBO0VBQ0EsMkJBQUE7RUFDQSwwREFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSw2QkFBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsMERBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSx3Q0FBQTtFQUNBLG1UQUNFO0VBRUYsMkVBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUFERjs7QUFJQTtFQUNFLGtDQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0FBREY7O0FBSUE7RUFDRSwrQkFBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSxTQUFBO0FBREY7O0FBSUE7RUFDRSwyQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBREY7O0FBSUE7RUFDRSw2QkFBQTtBQURGOztBQUlBO0VBQ0Usc0NBQUE7RUFDQSxtQkFBQTtBQURGOztBQUlBO0VBQ0U7SUFDRSxTQUFBO0lBQ0EsMERBQUE7SUFDQSxnQkFBQTtFQURGO0VBSUE7SUFDRSxpQ0FBQTtFQUZGO0VBS0E7SUFDRSxTQUFBO0lBQ0EsMERBQUE7RUFIRjtFQU1BO0lBQ0UsWUFBQTtJQUNBLDBCQUFBO0VBSkY7RUFPQTtJQUNFLFNBQUE7RUFMRjtBQUNGO0FBUUE7RUFDRTtJQUNFLDBCQUFBO0VBTkY7RUFTQTs7O0lBR0UsMEJBQUE7RUFQRjtFQVVBO0lBQ0UsYUFBQTtFQVJGO0VBV0E7Ozs7SUFJRSx1QkFBQTtFQVRGO0VBWUE7SUFDRSxvQkFBQTtJQUNBLGdCQUFBO0lBQ0EsV0FBQTtFQVZGO0VBYUE7SUFDRSwwQkFBQTtFQVhGO0VBY0E7SUFDRSxnQkFBQTtJQUNBLFdBQUE7RUFaRjtBQUNGO0FBQ0EsbzlpQkFBbzlpQiIsInNvdXJjZXNDb250ZW50IjpbIi5hYm91dC1oZXJvIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XG4gIHBhZGRpbmc6IGNsYW1wKDNyZW0sIDd2dywgNnJlbSkgY2xhbXAoMS41cmVtLCA0dncsIDMuNXJlbSk7XG59XG5cbi5hYm91dC1oZXJvX19pbm5lciB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogY2xhbXAoM3JlbSwgOHZ3LCA3cmVtKTtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMCwgMWZyKSBtaW5tYXgoMTVyZW0sIDIwcmVtKTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1heC13aWR0aDogNzZyZW07XG4gIG1pbi1oZWlnaHQ6IG1pbigzMXJlbSwgNjJ2aCk7XG59XG5cbi5hYm91dC1oZXJvX19leWVicm93LFxuLmFib3V0LXN0b3J5X19leWVicm93LFxuLmFib3V0LWV4cGVyaWVuY2VfX2V5ZWJyb3csXG4uYWJvdXQtYXBwcm9hY2hfX2V5ZWJyb3csXG4uYWJvdXQtYmV5b25kX19leWVicm93IHtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtbW9ubyk7XG4gIGZvbnQtc2l6ZTogdmFyKC0tdGV4dC14cyk7XG4gIGxldHRlci1zcGFjaW5nOiAwLjA4ZW07XG4gIG1hcmdpbjogMCAwIDAuNzVyZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5hYm91dC1oZXJvX19leWVicm93LFxuLmFib3V0LWhlcm9fX2ludHJvLFxuLmFib3V0LWhlcm9fX3dlYnNpdGUge1xuICBjb2xvcjogdmFyKC0tY29sb3Itc29mdC1ibHVlKTtcbn1cblxuLmFib3V0LWhlcm9fX2NvcHkgaDEge1xuICBjb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpO1xuICBmb250LXNpemU6IHZhcigtLXRleHQtaDEpO1xuICBsaW5lLWhlaWdodDogdmFyKC0tbGVhZGluZy10aWdodCk7XG4gIG1hcmdpbjogMDtcbiAgbWF4LXdpZHRoOiA0NHJlbTtcbn1cblxuLmFib3V0LWhlcm9fX2ludHJvIHtcbiAgZm9udC1zaXplOiB2YXIoLS10ZXh0LWJhc2UpO1xuICBsaW5lLWhlaWdodDogdmFyKC0tbGVhZGluZy1ib2R5KTtcbiAgbWFyZ2luOiAxcmVtIDAgMDtcbiAgbWF4LXdpZHRoOiAzOXJlbTtcbn1cblxuLmFib3V0LWhlcm9fX3dlYnNpdGUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LW1vbm8pO1xuICBmb250LXNpemU6IHZhcigtLXRleHQteHMpO1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW4tdG9wOiBjbGFtcCgycmVtLCA1dncsIDRyZW0pO1xufVxuXG4uYWJvdXQtaGVyb19fd2Vic2l0ZTpob3ZlciB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XG59XG5cbi5hYm91dC1oZXJvX19wb3J0cmFpdCxcbi5hYm91dC1zdG9yeV9faW1hZ2Uge1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIGFzcGVjdC1yYXRpbzogNCAvIDU7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNDVkZWcsIHZhcigtLWNvbG9yLXNlY29uZGFyeSksIHZhcigtLWNvbG9yLXByaW1hcnktZGFyaykpO1xuICBib3JkZXI6IDFweCBzb2xpZCBjb2xvci1taXgoaW4gc3JnYiwgdmFyKC0tY29sb3Itc29mdC1ibHVlKSAyOCUsIHRyYW5zcGFyZW50KTtcbiAgYm9yZGVyLXJhZGl1czogMC44cmVtO1xuICBib3gtc2hhZG93OiAwIDAuNnJlbSAxLjJyZW0gY29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLWNvbG9yLXByaW1hcnktZGFyaykgMjglLCB0cmFuc3BhcmVudCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXgtaGVpZ2h0OiAyNnJlbTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uYWJvdXQtaGVyb19fcG9ydHJhaXQgPiBzcGFuLFxuLmFib3V0LXN0b3J5X19pbWFnZSA+IHNwYW4ge1xuICBiYWNrZ3JvdW5kOiBjb2xvci1taXgoaW4gc3JnYiwgdmFyKC0tY29sb3ItcHJpbWFyeSkgNzUlLCB0cmFuc3BhcmVudCk7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1zb2Z0LWJsdWUpO1xuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1tb25vKTtcbiAgZm9udC1zaXplOiB2YXIoLS10ZXh0LXhzKTtcbiAgbWFyZ2luOiAwLjc1cmVtO1xuICBwYWRkaW5nOiAwLjM1cmVtIDAuNXJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uYWJvdXQtaGVyb19fc2lsaG91ZXR0ZSxcbi5hYm91dC1zdG9yeV9fc2lsaG91ZXR0ZSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLW5ldXRyYWwtOTAwKTtcbiAgYm9yZGVyLXJhZGl1czogNDglIDQ4JSAwIDA7XG4gIGJvdHRvbTogMDtcbiAgaGVpZ2h0OiA0OCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDc1JTtcbn1cblxuLmFib3V0LWhlcm9fX3NpbGhvdWV0dGU6OmJlZm9yZSxcbi5hYm91dC1zdG9yeV9fc2lsaG91ZXR0ZTo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItbmV1dHJhbC0yMDApO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGNvbnRlbnQ6ICcnO1xuICBoZWlnaHQ6IDcuNXJlbTtcbiAgbGVmdDogNTAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTYuN3JlbTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICB3aWR0aDogNi41cmVtO1xufVxuXG4uYWJvdXQtaGVyb19fc2lsaG91ZXR0ZTo6YWZ0ZXIsXG4uYWJvdXQtc3RvcnlfX3NpbGhvdWV0dGU6OmFmdGVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItbmV1dHJhbC00MDApO1xuICBib3JkZXItcmFkaXVzOiA1MCUgNTAlIDAgMDtcbiAgY29udGVudDogJyc7XG4gIGhlaWdodDogMS44cmVtO1xuICBsZWZ0OiA1MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMC40cmVtO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIHdpZHRoOiA5cmVtO1xufVxuXG4uYWJvdXQtc3Rvcnkge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci13YXJtLXdoaXRlKTtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xuICBwYWRkaW5nOiBjbGFtcCgzcmVtLCA3dncsIDZyZW0pIGNsYW1wKDEuNXJlbSwgNHZ3LCAzLjVyZW0pO1xufVxuXG4uYWJvdXQtc3RvcnlfX2lubmVyIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiBjbGFtcCgzcmVtLCA4dncsIDdyZW0pO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgwLCAxZnIpIG1pbm1heCgxNHJlbSwgMTlyZW0pO1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWF4LXdpZHRoOiA3NnJlbTtcbn1cblxuLmFib3V0LXN0b3J5X19leWVicm93LFxuLmFib3V0LWJleW9uZF9fZXllYnJvdyB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1zb2Z0LWJsdWUpO1xufVxuXG4uYWJvdXQtc3RvcnlfX2NvcHkgaDIsXG4uYWJvdXQtYmV5b25kX19jb3B5IGgyIHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xuICBmb250LXNpemU6IHZhcigtLXRleHQtaDMpO1xuICBtYXJnaW46IDAgMCAxcmVtO1xufVxuXG4uYWJvdXQtc3RvcnlfX2NvcHkgPiBwOm5vdCguYWJvdXQtc3RvcnlfX2V5ZWJyb3cpIHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLW5ldXRyYWwtNzAwKTtcbiAgbWFyZ2luOiAwIDAgMC45cmVtO1xuICBtYXgtd2lkdGg6IDQzcmVtO1xufVxuXG4uYWJvdXQtc3RvcnlfX2ltYWdlIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE0NWRlZywgdmFyKC0tY29sb3ItbXVzaWMtY3JlYW0pLCB2YXIoLS1jb2xvci1tdXNpYy1yb3NlKSk7XG4gIGJvcmRlci1jb2xvcjogY29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLWNvbG9yLXByaW1hcnkpIDE4JSwgdHJhbnNwYXJlbnQpO1xufVxuXG4uYWJvdXQtc3RvcnlfX3NpbGhvdWV0dGUge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1tdXNpYy1wcmltYXJ5KTtcbn1cblxuLmFib3V0LXN0b3J5X19zaWxob3VldHRlOjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1tdXNpYy1jcmVhbSk7XG59XG5cbi5hYm91dC1zdG9yeV9fc2lsaG91ZXR0ZTo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1tdXNpYy1yb3NlKTtcbn1cblxuLmFib3V0LWV4cGVyaWVuY2Uge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1zb2Z0LWJsdWUpO1xuICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG4gIHBhZGRpbmc6IGNsYW1wKDNyZW0sIDd2dywgNnJlbSkgY2xhbXAoMS41cmVtLCA0dncsIDMuNXJlbSk7XG59XG5cbi5hYm91dC1leHBlcmllbmNlX19pbm5lciB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXgtd2lkdGg6IDc2cmVtO1xufVxuXG4uYWJvdXQtZXhwZXJpZW5jZV9faGVhZGVyIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGNvbG9yLW1peChpbiBzcmdiLCB2YXIoLS1jb2xvci1wcmltYXJ5KSAxNCUsIHRyYW5zcGFyZW50KTtcbiAgcGFkZGluZy1ib3R0b206IDEuMjVyZW07XG59XG5cbi5hYm91dC1leHBlcmllbmNlX19leWVicm93IHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xufVxuXG4uYWJvdXQtZXhwZXJpZW5jZV9faGVhZGVyIGgyIHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xuICBmb250LXNpemU6IHZhcigtLXRleHQtaDMpO1xuICBtYXJnaW46IDA7XG59XG5cbi5hYm91dC1leHBlcmllbmNlX19pbnRybyB7XG4gIGNvbG9yOiBjb2xvci1taXgoaW4gc3JnYiwgdmFyKC0tY29sb3ItcHJpbWFyeSkgNjUlLCB0cmFuc3BhcmVudCk7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LW1vbm8pO1xuICBmb250LXNpemU6IHZhcigtLXRleHQteHMpO1xuICBtYXJnaW46IDAuNHJlbSAwIDA7XG59XG5cbi5leHBlcmllbmNlLWxpc3Qge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5leHBlcmllbmNlLWl0ZW0ge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgY29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLWNvbG9yLXByaW1hcnkpIDE0JSwgdHJhbnNwYXJlbnQpO1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6IDEuNXJlbTtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoOXJlbSwgMC4yZnIpIG1pbm1heCgwLCAxZnIpO1xuICBwYWRkaW5nOiAxLjVyZW0gMDtcbn1cblxuLmV4cGVyaWVuY2UtaXRlbV9fcGVyaW9kLFxuLmV4cGVyaWVuY2UtaXRlbV9fbnVtYmVyLFxuLmV4cGVyaWVuY2UtaXRlbV9fb3JnYW5pemF0aW9uLFxuLmV4cGVyaWVuY2UtaXRlbV9fZGVzY3JpcHRpb24ge1xuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1tb25vKTtcbiAgZm9udC1zaXplOiB2YXIoLS10ZXh0LXhzKTtcbn1cblxuLmV4cGVyaWVuY2UtaXRlbV9fcGVyaW9kIHtcbiAgY29sb3I6IGNvbG9yLW1peChpbiBzcmdiLCB2YXIoLS1jb2xvci1wcmltYXJ5KSA2OCUsIHRyYW5zcGFyZW50KTtcbiAgbWFyZ2luOiAwLjNyZW0gMCAwO1xufVxuXG4uZXhwZXJpZW5jZS1pdGVtX19kZXRhaWxzIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiAxcmVtO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJyZW0gbWlubWF4KDAsIDFmcik7XG59XG5cbi5leHBlcmllbmNlLWl0ZW1fX251bWJlciB7XG4gIGNvbG9yOiBjb2xvci1taXgoaW4gc3JnYiwgdmFyKC0tY29sb3ItcHJpbWFyeSkgNTUlLCB0cmFuc3BhcmVudCk7XG4gIG1hcmdpbjogMC41cmVtIDAgMDtcbn1cblxuLmV4cGVyaWVuY2UtaXRlbSBoMyB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbiAgZm9udC1zaXplOiB2YXIoLS10ZXh0LWg0KTtcbiAgbWFyZ2luOiAwO1xufVxuXG4uZXhwZXJpZW5jZS1pdGVtX19vcmdhbml6YXRpb24ge1xuICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG4gIG1hcmdpbjogMC4zcmVtIDA7XG59XG5cbi5leHBlcmllbmNlLWl0ZW1fX2Rlc2NyaXB0aW9uIHtcbiAgY29sb3I6IGNvbG9yLW1peChpbiBzcmdiLCB2YXIoLS1jb2xvci1wcmltYXJ5KSA3MCUsIHRyYW5zcGFyZW50KTtcbiAgbWFyZ2luOiAwO1xuICBtYXgtd2lkdGg6IDU0cmVtO1xufVxuXG4uYWJvdXQtYXBwcm9hY2gge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlKTtcbiAgcGFkZGluZzogY2xhbXAoM3JlbSwgN3Z3LCA2cmVtKSBjbGFtcCgxLjVyZW0sIDR2dywgMy41cmVtKTtcbn1cblxuLmFib3V0LWFwcHJvYWNoX19pbm5lciB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXgtd2lkdGg6IDc2cmVtO1xufVxuXG4uYWJvdXQtYXBwcm9hY2hfX2V5ZWJyb3cge1xuICBjb2xvcjogdmFyKC0tY29sb3Itc29mdC1ibHVlKTtcbn1cblxuLmFib3V0LWFwcHJvYWNoX19pbm5lciA+IGgyIHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlKTtcbiAgZm9udC1zaXplOiB2YXIoLS10ZXh0LWgzKTtcbiAgbWFyZ2luOiAwO1xufVxuXG4uYWJvdXQtYXBwcm9hY2hfX2ludHJvIHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXNvZnQtYmx1ZSk7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LW1vbm8pO1xuICBmb250LXNpemU6IHZhcigtLXRleHQteHMpO1xuICBtYXJnaW46IDAuNnJlbSAwIDEuNzVyZW07XG4gIG1heC13aWR0aDogNTJyZW07XG59XG5cbi5hcHByb2FjaC1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiAxLjVyZW07XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIG1pbm1heCgwLCAxZnIpKTtcbn1cblxuLmFwcHJvYWNoLWNhcmQge1xuICBiYWNrZ3JvdW5kOiBjb2xvci1taXgoaW4gc3JnYiwgdmFyKC0tY29sb3Itc29mdC1ibHVlKSA3OCUsIHZhcigtLWNvbG9yLXdoaXRlKSk7XG4gIGJvcmRlci1yYWRpdXM6IDAuNzVyZW07XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbiAgcGFkZGluZzogMS4yNXJlbTtcbn1cblxuLmFwcHJvYWNoLWNhcmQgaDMge1xuICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG4gIGZvbnQtc2l6ZTogdmFyKC0tdGV4dC1oNCk7XG4gIG1hcmdpbjogMDtcbn1cblxuLmFwcHJvYWNoLWNhcmQgcCB7XG4gIGNvbG9yOiBjb2xvci1taXgoaW4gc3JnYiwgdmFyKC0tY29sb3ItcHJpbWFyeSkgNzglLCB0cmFuc3BhcmVudCk7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LW1vbm8pO1xuICBmb250LXNpemU6IHZhcigtLXRleHQteHMpO1xuICBtYXJnaW46IDAuNXJlbSAwIDA7XG59XG5cbi5hYm91dC1iZXlvbmQge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci13YXJtLXdoaXRlKTtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xuICBwYWRkaW5nOiBjbGFtcCgzcmVtLCA3dncsIDZyZW0pIGNsYW1wKDEuNXJlbSwgNHZ3LCAzLjVyZW0pO1xufVxuXG4uYWJvdXQtYmV5b25kX19pbm5lciB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXgtd2lkdGg6IDc2cmVtO1xufVxuXG4uYWJvdXQtYmV5b25kX19leWVicm93IHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXNvZnQtYmx1ZSk7XG59XG5cbi5hYm91dC1iZXlvbmRfX2NvcHkgaDIge1xuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG59XG5cbi5hYm91dC1iZXlvbmRfX2NvbnRlbnQge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6IGNsYW1wKDJyZW0sIDZ2dywgNXJlbSk7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDE0cmVtLCAwLjhmcikgbWlubWF4KDAsIDFmcik7XG59XG5cbi5hYm91dC1iZXlvbmRfX2ltYWdlIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYXNwZWN0LXJhdGlvOiA0IC8gNTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itc29mdC1ibHVlKTtcbiAgYmFja2dyb3VuZC1pbWFnZTpcbiAgICBsaW5lYXItZ3JhZGllbnQoMTUzZGVnLCB0cmFuc3BhcmVudCBjYWxjKDUwJSAtIDFweCksIGNvbG9yLW1peChpbiBzcmdiLCB2YXIoLS1jb2xvci1wcmltYXJ5KSAzMCUsIHRyYW5zcGFyZW50KSA1MCUsIHRyYW5zcGFyZW50IGNhbGMoNTAlICsgMXB4KSksXG4gICAgbGluZWFyLWdyYWRpZW50KDI3ZGVnLCB0cmFuc3BhcmVudCBjYWxjKDUwJSAtIDFweCksIGNvbG9yLW1peChpbiBzcmdiLCB2YXIoLS1jb2xvci1wcmltYXJ5KSAzMCUsIHRyYW5zcGFyZW50KSA1MCUsIHRyYW5zcGFyZW50IGNhbGMoNTAlICsgMXB4KSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGNvbG9yLW1peChpbiBzcmdiLCB2YXIoLS1jb2xvci1wcmltYXJ5KSAzNSUsIHRyYW5zcGFyZW50KTtcbiAgYm9yZGVyLXJhZGl1czogMC43NXJlbTtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWF4LXdpZHRoOiAyMnJlbTtcbn1cblxuLmFib3V0LWJleW9uZF9faW1hZ2Ugc3BhbiB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLXNvZnQtYmx1ZSk7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LW1vbm8pO1xuICBmb250LXNpemU6IHZhcigtLXRleHQteHMpO1xuICBwYWRkaW5nOiAwLjRyZW0gMC42cmVtO1xufVxuXG4uYWJvdXQtYmV5b25kX190ZXh0IHAge1xuICBjb2xvcjogdmFyKC0tY29sb3ItbmV1dHJhbC03MDApO1xuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1tb25vKTtcbiAgZm9udC1zaXplOiB2YXIoLS10ZXh0LXNtKTtcbiAgbWFyZ2luOiAwO1xufVxuXG4uYWJvdXQtYmV5b25kX190ZXh0IGEge1xuICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiB2YXIoLS10ZXh0LXNtKTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbn1cblxuLmFib3V0LWJleW9uZF9fdGV4dCBhOmhvdmVyIHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXNlY29uZGFyeSk7XG59XG5cbi5hYm91dC1iZXlvbmRfX3RleHQgYTpmb2N1cy12aXNpYmxlIHtcbiAgb3V0bGluZTogM3B4IHNvbGlkIHZhcigtLWNvbG9yLWFjY2VudCk7XG4gIG91dGxpbmUtb2Zmc2V0OiAzcHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA0OHJlbSkge1xuICAuYWJvdXQtaGVyb19faW5uZXIge1xuICAgIGdhcDogMnJlbTtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgwLCAxZnIpIG1pbm1heCgxMXJlbSwgMTVyZW0pO1xuICAgIG1pbi1oZWlnaHQ6IGF1dG87XG4gIH1cblxuICAuYWJvdXQtaGVyb19fY29weSBoMSB7XG4gICAgZm9udC1zaXplOiBjbGFtcCgycmVtLCA1dncsIDNyZW0pO1xuICB9XG5cbiAgLmFib3V0LXN0b3J5X19pbm5lciB7XG4gICAgZ2FwOiAycmVtO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDAsIDFmcikgbWlubWF4KDEycmVtLCAxNnJlbSk7XG4gIH1cblxuICAuZXhwZXJpZW5jZS1pdGVtIHtcbiAgICBnYXA6IDAuNzVyZW07XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIH1cblxuICAuYWJvdXQtYmV5b25kX19jb250ZW50IHtcbiAgICBnYXA6IDJyZW07XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDM2cmVtKSB7XG4gIC5hYm91dC1oZXJvIHtcbiAgICBwYWRkaW5nOiAzcmVtIDEuMjVyZW0gNHJlbTtcbiAgfVxuXG4gIC5hYm91dC1oZXJvX19pbm5lcixcbiAgLmFib3V0LXN0b3J5X19pbm5lcixcbiAgLmFib3V0LWJleW9uZF9fY29udGVudCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIH1cblxuICAuYWJvdXQtaGVyb19fcG9ydHJhaXQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAuYWJvdXQtc3RvcnksXG4gIC5hYm91dC1leHBlcmllbmNlLFxuICAuYWJvdXQtYXBwcm9hY2gsXG4gIC5hYm91dC1iZXlvbmQge1xuICAgIHBhZGRpbmctaW5saW5lOiAxLjI1cmVtO1xuICB9XG5cbiAgLmFib3V0LXN0b3J5X19pbWFnZSB7XG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gICAgbWF4LXdpZHRoOiAxOXJlbTtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5hcHByb2FjaC1ncmlkIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgfVxuXG4gIC5hYm91dC1iZXlvbmRfX2ltYWdlIHtcbiAgICBtYXgtd2lkdGg6IDE4cmVtO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 8588:
/*!************************************************************!*\
  !*** ./src/app/tech/components/layout/layout.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LayoutComponent: () => (/* binding */ LayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/components/navbar/navbar.component */ 3083);
/* harmony import */ var _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/footer/footer.component */ 1765);




class LayoutComponent {
  constructor() {
    this.footerConfig = {};
  }
  onRouteActivate(component) {
    const page = component;
    this.footerConfig = page.footerConfig ?? {};
  }
  static {
    this.ɵfac = function LayoutComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || LayoutComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: LayoutComponent,
      selectors: [["app-layout"]],
      decls: 3,
      vars: 1,
      consts: [[3, "activate"], [3, "config"]],
      template: function LayoutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-navbar");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "router-outlet", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("activate", function LayoutComponent_Template_router_outlet_activate_1_listener($event) {
            return ctx.onRouteActivate($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "app-footer", 1);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("config", ctx.footerConfig);
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent, _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent],
      styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsYXlvdXQuY29tcG9uZW50LnNjc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdGVjaC9jb21wb25lbnRzL2xheW91dC9sYXlvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLG9LQUFvSyIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 9599:
/*!*********************************************************!*\
  !*** ./src/app/tech/experience/experience.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExperienceComponent: () => (/* binding */ ExperienceComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class ExperienceComponent {
  static {
    this.ɵfac = function ExperienceComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ExperienceComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ExperienceComponent,
      selectors: [["app-experience"]],
      decls: 2,
      vars: 0,
      template: function ExperienceComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "experience works!");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJleHBlcmllbmNlLmNvbXBvbmVudC5zY3NzIn0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdGVjaC9leHBlcmllbmNlL2V4cGVyaWVuY2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLHdLQUF3SyIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 1881:
/*!*********************************************!*\
  !*** ./src/app/tech/home/home.component.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeComponent: () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);



const _c0 = a0 => ["/work", a0];
const _c1 = a0 => ["/writing", a0];
function HomeComponent_a_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 48)(1, "div", 49)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Project image placeholder");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 21)(5, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const project_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, project_r1.slug));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r1.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r1.title);
  }
}
function HomeComponent_div_57_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 50)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Image placeholder");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const image_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "home-about-preview__image--" + image_r2.variant);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", image_r2.label);
  }
}
function HomeComponent_a_82_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 51)(1, "p", 52)(2, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u00B7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const article_r3 = ctx.$implicit;
    const index_r4 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c1, article_r3.slug));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 6, index_r4 + 1, "2.0"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](article_r3.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](article_r3.readTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](article_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](article_r3.description);
  }
}
class HomeComponent {
  constructor() {
    this.homeArticles = [{
      slug: 'documenting-architecture-decisions',
      category: 'Software Architecture',
      readTime: '6 min read',
      title: 'Why I document architecture decisions.',
      description: 'Good code explains what happens. Good documentation explains why.'
    }, {
      slug: 'building-a-monitoring-platform',
      category: 'Building in Public',
      readTime: '8 min read',
      title: 'Building my own monitoring platform.',
      description: 'From an idea to a system that understands dependencies and service health.'
    }, {
      slug: 'engineering-and-ai',
      category: 'Engineering & AI',
      readTime: '5 min read',
      title: "Just because it works doesn't mean it works well.",
      description: 'Thoughts on AI-assisted development and engineering responsibility.'
    }];
    this.aboutImages = [{
      label: 'Music performance photo placeholder',
      variant: 'performance'
    }, {
      label: 'Guitar photo placeholder',
      variant: 'guitar'
    }, {
      label: 'Portrait photo placeholder',
      variant: 'portrait'
    }, {
      label: 'Studio portrait placeholder',
      variant: 'studio'
    }];
    this.featuredProject = {
      slug: 'compliance-management-platform',
      category: 'Client work · Hibera',
      title: 'Compliance Management Platform',
      description: 'Designing and developing a platform to make compliance workflows easier to manage.'
    };
    this.projects = [{
      slug: 'my-homelab',
      category: 'Personal · Infrastructure',
      title: 'My Homelab'
    }, {
      slug: 'monitoring-platform',
      category: 'Personal · Building in public',
      title: 'Monitoring Platform'
    }];
  }
  static {
    this.ɵfac = function HomeComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || HomeComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 99,
      vars: 9,
      consts: [[1, "home-page"], ["aria-labelledby", "hero-heading", 1, "home-hero"], [1, "home-hero__inner"], [1, "home-hero__copy"], [1, "home-hero__eyebrow"], ["id", "hero-heading", 1, "home-hero__heading"], [1, "home-hero__intro"], ["aria-label", "Core technologies", 1, "home-hero__skills"], ["href", "https://taocudjoe.com", 1, "home-hero__website"], ["role", "img", "aria-label", "Temporary portrait placeholder", 1, "home-hero__portrait"], ["aria-hidden", "true", 1, "home-hero__silhouette"], [1, "home-hero__portrait-label"], ["aria-labelledby", "projects-heading", 1, "home-projects"], [1, "home-projects__inner"], [1, "home-projects__header"], ["id", "projects-heading", 1, "home-projects__heading"], [1, "home-projects__intro"], ["routerLink", "/work", 1, "home-projects__all-link"], ["aria-hidden", "true"], [1, "project-card", "project-card--featured", 3, "routerLink"], ["role", "img", "aria-label", "Project image placeholder", 1, "project-card__image", "project-card__image--wide"], [1, "project-card__content"], [1, "project-card__category"], [1, "project-card__title"], [1, "project-card__description"], [1, "home-projects__grid"], ["class", "project-card", 3, "routerLink", 4, "ngFor", "ngForOf"], ["aria-labelledby", "about-preview-heading", 1, "home-about-preview"], [1, "home-about-preview__inner"], ["aria-label", "A little about me", 1, "home-about-preview__gallery"], ["class", "home-about-preview__image", "role", "img", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "home-about-preview__copy"], ["id", "about-preview-heading", 1, "home-about-preview__heading"], ["routerLink", "/about", 1, "home-about-preview__link"], ["aria-labelledby", "home-writing-heading", 1, "home-writing"], [1, "home-writing__inner"], [1, "home-writing__header"], ["id", "home-writing-heading", 1, "home-writing__heading"], [1, "home-writing__intro"], ["routerLink", "/writing", 1, "home-writing__all-link"], [1, "home-writing__list"], ["class", "home-writing__item", 3, "routerLink", 4, "ngFor", "ngForOf"], ["aria-labelledby", "home-music-heading", 1, "home-music-preview"], [1, "home-music-preview__inner"], ["id", "home-music-heading", 1, "home-music-preview__heading"], ["role", "img", "aria-label", "Music and creativity image placeholder", 1, "home-music-preview__image"], [1, "home-music-preview__copy"], ["routerLink", "/music"], [1, "project-card", 3, "routerLink"], ["role", "img", "aria-label", "Project image placeholder", 1, "project-card__image"], ["role", "img", 1, "home-about-preview__image", 3, "ngClass"], [1, "home-writing__item", 3, "routerLink"], [1, "home-writing__meta"], [1, "home-writing__number"], [1, "home-writing__title"], [1, "home-writing__description"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0)(1, "section", 1)(2, "div", 2)(3, "div", 3)(4, "p", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u2014 Java Software Engineer");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Tyra Afoley");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Okai Cudjoe");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "I build things that work. Sometimes, they make you go \u2018wow\u2019.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ul", 7)(13, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Angular");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Java");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Spring");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Docker");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Postgres");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "taocudjoe.com");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Portrait placeholder");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "section", 12)(30, "div", 13)(31, "header", 14)(32, "div")(33, "h2", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Things I\u2019ve Built");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "A selection of products, experiments, and systems.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "All Projects ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "\u2192");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 19)(42, "div", 20)(43, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Project image placeholder");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 21)(46, "p", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h3", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, HomeComponent_a_53_Template, 9, 5, "a", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "section", 27)(55, "div", 28)(56, "div", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, HomeComponent_div_57_Template, 3, 2, "div", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 31)(59, "h2", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Curiosity is what drives me.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "I\u2019ve always been curious about how things work, and even more curious about how I could make them better. That curiosity led me into software engineering, building products and exploring new technologies.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "But code isn\u2019t my only creative outlet. Music has always been a huge part of my life. Whether I\u2019m building software or making music, I love creating something meaningful and sharing it with others.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "a", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "More About Me ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "span", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "\u2192");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "section", 34)(70, "div", 35)(71, "header", 36)(72, "div")(73, "h2", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Thoughts, Lessons & Experiments");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "p", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Documenting what I build, what I learn, and what I\u2019d do differently.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "a", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "All Writing ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "span", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "\u2192");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](82, HomeComponent_a_82_Template, 15, 11, "a", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "section", 42)(84, "div", 43)(85, "h2", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Different Craft. Same Passion.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 45)(88, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Music image placeholder");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 46)(91, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Music & Creativity");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "From writing code to making music, creativity has always been a part of who I am. Whether I\u2019m performing, collaborating or experimenting with new sounds, I love bringing ideas to life.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "a", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Explore My Music ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "span", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "\u2192");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](41);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx.featuredProject.slug));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.featuredProject.category);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.featuredProject.title);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.featuredProject.description);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.projects);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.aboutImages);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.homeArticles);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_1__.DecimalPipe],
      styles: [".home-page[_ngcontent-%COMP%] {\n  background: var(--color-primary);\n}\n\n.home-hero[_ngcontent-%COMP%] {\n  background: var(--color-primary);\n  color: var(--color-white);\n  padding: clamp(3rem, 8vw, 6rem) clamp(1.5rem, 4vw, 3.5rem);\n}\n\n.home-hero__inner[_ngcontent-%COMP%] {\n  align-items: center;\n  display: grid;\n  gap: clamp(3rem, 8vw, 7rem);\n  grid-template-columns: minmax(0, 1fr) minmax(15rem, 21rem);\n  margin: 0 auto;\n  max-width: 76rem;\n  min-height: min(36rem, 68vh);\n}\n\n.home-hero__copy[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n\n.home-hero__eyebrow[_ngcontent-%COMP%], \n.home-hero__website[_ngcontent-%COMP%] {\n  color: var(--color-soft-blue);\n  font-family: var(--font-mono);\n  font-size: var(--text-xs);\n}\n\n.home-hero__eyebrow[_ngcontent-%COMP%] {\n  margin: 0 0 0.8rem;\n}\n\n.home-hero__heading[_ngcontent-%COMP%] {\n  color: var(--color-white);\n  font-size: var(--text-display);\n  font-weight: 700;\n  letter-spacing: -0.035em;\n  line-height: var(--leading-tight);\n  margin: 0;\n}\n\n.home-hero__intro[_ngcontent-%COMP%] {\n  color: var(--color-soft-blue);\n  font-size: var(--text-lg);\n  line-height: var(--leading-body);\n  margin: 1rem 0 0;\n  max-width: 38rem;\n}\n\n.home-hero__skills[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.6rem;\n  list-style: none;\n  margin: 1rem 0 0;\n  padding: 0;\n}\n\n.home-hero__skills[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  border: 1px solid color-mix(in srgb, var(--color-soft-blue) 35%, transparent);\n  border-radius: 0.25rem;\n  color: var(--color-neutral-100);\n  font-size: var(--text-xs);\n  padding: 0.3rem 0.65rem;\n}\n\n.home-hero__website[_ngcontent-%COMP%] {\n  font-weight: 600;\n  margin-top: clamp(2.5rem, 6vw, 4.5rem);\n}\n\n.home-hero__website[_ngcontent-%COMP%]:hover {\n  color: var(--color-white);\n}\n\n.home-projects[_ngcontent-%COMP%] {\n  background: var(--color-soft-blue);\n  color: var(--color-primary);\n  padding: clamp(3rem, 6vw, 5.5rem) clamp(1.5rem, 4vw, 3.5rem);\n}\n\n.home-projects__inner[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  max-width: 76rem;\n}\n\n.home-projects__header[_ngcontent-%COMP%] {\n  align-items: end;\n  display: flex;\n  gap: 2rem;\n  justify-content: space-between;\n  margin-bottom: 1.5rem;\n}\n\n.home-projects__heading[_ngcontent-%COMP%] {\n  color: var(--color-primary);\n  font-size: var(--text-h3);\n  margin: 0;\n}\n\n.home-projects__intro[_ngcontent-%COMP%] {\n  color: var(--color-neutral-700);\n  font-family: var(--font-mono);\n  font-size: var(--text-xs);\n  margin: 0.35rem 0 0;\n}\n\n.home-projects__all-link[_ngcontent-%COMP%] {\n  color: var(--color-primary);\n  flex-shrink: 0;\n  font-size: var(--text-sm);\n  font-weight: 600;\n  padding-bottom: 0.15rem;\n}\n\n.home-projects__all-link[_ngcontent-%COMP%]:hover {\n  color: var(--color-secondary);\n}\n\n.project-card[_ngcontent-%COMP%] {\n  background: color-mix(in srgb, var(--color-white) 38%, var(--color-soft-blue));\n  border: 1px solid color-mix(in srgb, var(--color-white) 30%, transparent);\n  border-radius: 0.75rem;\n  color: var(--color-primary);\n  display: block;\n  overflow: hidden;\n  padding: 0.75rem;\n  transition: transform 180ms ease, box-shadow 180ms ease;\n}\n\n.project-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0.75rem 1.75rem color-mix(in srgb, var(--color-primary) 16%, transparent);\n  color: var(--color-primary);\n  transform: translateY(-3px);\n}\n\n.project-card[_ngcontent-%COMP%]:focus-visible, \n.home-projects__all-link[_ngcontent-%COMP%]:focus-visible {\n  outline: 3px solid var(--color-accent);\n  outline-offset: 3px;\n}\n\n.project-card--featured[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n\n.project-card__image[_ngcontent-%COMP%] {\n  align-items: center;\n  aspect-ratio: 16/9;\n  background-color: var(--color-warm-white);\n  background-image: linear-gradient(153deg, transparent calc(50% - 1px), color-mix(in srgb, var(--color-neutral-500) 48%, transparent) 50%, transparent calc(50% + 1px)), linear-gradient(27deg, transparent calc(50% - 1px), color-mix(in srgb, var(--color-neutral-500) 48%, transparent) 50%, transparent calc(50% + 1px));\n  border-radius: 0.4rem;\n  color: var(--color-neutral-500);\n  display: flex;\n  justify-content: center;\n  overflow: hidden;\n  position: relative;\n}\n\n.project-card__image[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background: var(--color-warm-white);\n  font-family: var(--font-mono);\n  font-size: var(--text-xs);\n  padding: 0.35rem 0.5rem;\n}\n\n.project-card__image--wide[_ngcontent-%COMP%] {\n  aspect-ratio: 3.2/1;\n}\n\n.project-card__content[_ngcontent-%COMP%] {\n  padding: 0.75rem 0.25rem 0.25rem;\n}\n\n.project-card__category[_ngcontent-%COMP%] {\n  color: color-mix(in srgb, var(--color-primary) 62%, transparent);\n  font-family: var(--font-mono);\n  font-size: var(--text-xs);\n  letter-spacing: 0.04em;\n  margin: 0 0 0.3rem;\n  text-transform: uppercase;\n}\n\n.project-card__title[_ngcontent-%COMP%] {\n  color: var(--color-primary);\n  font-size: var(--text-h4);\n  margin: 0;\n}\n\n.project-card__description[_ngcontent-%COMP%] {\n  color: var(--color-neutral-700);\n  font-family: var(--font-mono);\n  font-size: var(--text-xs);\n  margin: 0.4rem 0 0;\n}\n\n.home-projects__grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: clamp(1rem, 3vw, 2.5rem);\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n\n.home-about-preview[_ngcontent-%COMP%] {\n  background: var(--color-warm-white);\n  color: var(--color-primary);\n  padding: clamp(3rem, 7vw, 6rem) clamp(1.5rem, 4vw, 3.5rem);\n}\n\n.home-about-preview__inner[_ngcontent-%COMP%] {\n  align-items: center;\n  display: grid;\n  gap: clamp(2rem, 5vw, 4rem);\n  grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.05fr);\n  margin: 0 auto;\n  max-width: 76rem;\n}\n\n.home-about-preview__gallery[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1rem;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n\n.home-about-preview__image[_ngcontent-%COMP%] {\n  align-items: flex-end;\n  aspect-ratio: 4/5;\n  background-color: var(--color-neutral-200);\n  background-image: linear-gradient(145deg, color-mix(in srgb, var(--color-soft-blue) 55%, transparent), transparent 70%);\n  border: 1px solid var(--color-border-default);\n  border-radius: 0.75rem;\n  box-shadow: 0 0.5rem 1rem color-mix(in srgb, var(--color-primary) 16%, transparent);\n  display: flex;\n  overflow: hidden;\n  padding: 0.75rem;\n  position: relative;\n}\n\n.home-about-preview__image[_ngcontent-%COMP%]::before {\n  background: var(--color-neutral-400);\n  border-radius: 50%;\n  content: \"\";\n  height: 28%;\n  left: 50%;\n  position: absolute;\n  top: 18%;\n  transform: translateX(-50%);\n  width: 30%;\n}\n\n.home-about-preview__image[_ngcontent-%COMP%]::after {\n  background: var(--color-secondary);\n  border-radius: 48% 48% 0 0;\n  bottom: -4%;\n  content: \"\";\n  height: 50%;\n  left: 50%;\n  position: absolute;\n  transform: translateX(-50%);\n  width: 72%;\n}\n\n.home-about-preview__image--performance[_ngcontent-%COMP%] {\n  background-color: var(--color-primary-dark);\n}\n\n.home-about-preview__image--performance[_ngcontent-%COMP%]::before {\n  background: var(--color-soft-blue);\n}\n\n.home-about-preview__image--performance[_ngcontent-%COMP%]::after {\n  background: var(--color-primary);\n}\n\n.home-about-preview__image--guitar[_ngcontent-%COMP%] {\n  background-color: var(--color-warm-white);\n}\n\n.home-about-preview__image--guitar[_ngcontent-%COMP%]::after {\n  background: var(--color-neutral-700);\n}\n\n.home-about-preview__image--portrait[_ngcontent-%COMP%] {\n  background-color: var(--color-soft-blue);\n}\n\n.home-about-preview__image--portrait[_ngcontent-%COMP%]::before {\n  background: var(--color-neutral-100);\n}\n\n.home-about-preview__image--portrait[_ngcontent-%COMP%]::after {\n  background: var(--color-secondary);\n}\n\n.home-about-preview__image--studio[_ngcontent-%COMP%] {\n  background-color: var(--color-secondary);\n}\n\n.home-about-preview__image--studio[_ngcontent-%COMP%]::before {\n  background: var(--color-neutral-200);\n}\n\n.home-about-preview__image--studio[_ngcontent-%COMP%]::after {\n  background: var(--color-primary);\n}\n\n.home-about-preview__image[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background: color-mix(in srgb, var(--color-primary) 76%, transparent);\n  color: var(--color-white);\n  font-family: var(--font-mono);\n  font-size: var(--text-xs);\n  padding: 0.3rem 0.45rem;\n  position: relative;\n  z-index: 1;\n}\n\n.home-about-preview__copy[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  color: var(--color-neutral-700);\n  margin: 1rem 0 0;\n}\n\n.home-about-preview__heading[_ngcontent-%COMP%] {\n  color: var(--color-primary);\n  font-size: var(--text-h3);\n  margin: 0;\n}\n\n.home-about-preview__link[_ngcontent-%COMP%] {\n  color: var(--color-primary);\n  display: inline-block;\n  font-weight: 600;\n  margin-top: 1.25rem;\n}\n\n.home-about-preview__link[_ngcontent-%COMP%]:hover {\n  color: var(--color-secondary);\n}\n\n.home-about-preview__link[_ngcontent-%COMP%]:focus-visible {\n  outline: 3px solid var(--color-accent);\n  outline-offset: 3px;\n}\n\n.home-writing[_ngcontent-%COMP%] {\n  background: var(--color-primary);\n  color: var(--color-white);\n  padding: clamp(3rem, 7vw, 6rem) clamp(1.5rem, 4vw, 3.5rem);\n}\n\n.home-writing__inner[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  max-width: 76rem;\n}\n\n.home-writing__header[_ngcontent-%COMP%] {\n  align-items: end;\n  display: flex;\n  gap: 2rem;\n  justify-content: space-between;\n  margin-bottom: 1.5rem;\n}\n\n.home-writing__heading[_ngcontent-%COMP%] {\n  color: var(--color-white);\n  font-size: var(--text-h3);\n  margin: 0;\n}\n\n.home-writing__intro[_ngcontent-%COMP%], \n.home-writing__meta[_ngcontent-%COMP%], \n.home-writing__description[_ngcontent-%COMP%] {\n  color: var(--color-soft-blue);\n  font-family: var(--font-mono);\n  font-size: var(--text-xs);\n}\n\n.home-writing__intro[_ngcontent-%COMP%] {\n  margin: 0.4rem 0 0;\n}\n\n.home-writing__all-link[_ngcontent-%COMP%] {\n  color: var(--color-white);\n  flex-shrink: 0;\n  font-size: var(--text-sm);\n  font-weight: 600;\n}\n\n.home-writing__all-link[_ngcontent-%COMP%]:hover, \n.home-writing__item[_ngcontent-%COMP%]:hover   .home-writing__title[_ngcontent-%COMP%] {\n  color: var(--color-soft-blue);\n}\n\n.home-writing__all-link[_ngcontent-%COMP%]:focus-visible, \n.home-writing__item[_ngcontent-%COMP%]:focus-visible {\n  outline: 3px solid var(--color-accent);\n  outline-offset: 4px;\n}\n\n.home-writing__item[_ngcontent-%COMP%] {\n  border-top: 1px solid color-mix(in srgb, var(--color-soft-blue) 28%, transparent);\n  color: inherit;\n  display: block;\n  padding: 1.5rem 1rem;\n  transition: background-color 160ms ease;\n}\n\n.home-writing__item[_ngcontent-%COMP%]:last-child {\n  border-bottom: 1px solid color-mix(in srgb, var(--color-soft-blue) 28%, transparent);\n}\n\n.home-writing__item[_ngcontent-%COMP%]:hover {\n  background: color-mix(in srgb, var(--color-white) 4%, transparent);\n}\n\n.home-writing__meta[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n  gap: 0.7rem;\n  letter-spacing: 0.05em;\n  margin: 0 0 0.55rem;\n  text-transform: uppercase;\n}\n\n.home-writing__number[_ngcontent-%COMP%] {\n  font-variant-numeric: tabular-nums;\n  min-width: 1.25rem;\n}\n\n.home-writing__title[_ngcontent-%COMP%] {\n  color: var(--color-white);\n  font-size: var(--text-h4);\n  margin: 0;\n  transition: color 160ms ease;\n}\n\n.home-writing__description[_ngcontent-%COMP%] {\n  margin: 0.45rem 0 0;\n}\n\n.home-music-preview[_ngcontent-%COMP%] {\n  background: var(--color-soft-blue);\n  color: var(--color-primary);\n  padding: clamp(3rem, 7vw, 6rem) clamp(1.5rem, 4vw, 3.5rem);\n}\n\n.home-music-preview__inner[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  max-width: 76rem;\n}\n\n.home-music-preview__heading[_ngcontent-%COMP%] {\n  color: var(--color-primary);\n  font-size: var(--text-h3);\n  margin: 0 0 1.5rem;\n}\n\n.home-music-preview__image[_ngcontent-%COMP%] {\n  align-items: center;\n  aspect-ratio: 2.7/1;\n  background-color: var(--color-warm-white);\n  background-image: linear-gradient(157deg, transparent calc(50% - 1px), color-mix(in srgb, var(--color-neutral-500) 45%, transparent) 50%, transparent calc(50% + 1px)), linear-gradient(23deg, transparent calc(50% - 1px), color-mix(in srgb, var(--color-neutral-500) 45%, transparent) 50%, transparent calc(50% + 1px));\n  border: 1px solid color-mix(in srgb, var(--color-primary) 30%, transparent);\n  border-radius: 0.75rem;\n  color: var(--color-neutral-500);\n  display: flex;\n  justify-content: center;\n  overflow: hidden;\n}\n\n.home-music-preview__image[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background: var(--color-warm-white);\n  font-family: var(--font-mono);\n  font-size: var(--text-xs);\n  padding: 0.4rem 0.6rem;\n}\n\n.home-music-preview__copy[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  max-width: 42rem;\n}\n\n.home-music-preview__copy[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: var(--color-primary);\n  font-size: var(--text-h4);\n  margin: 0;\n}\n\n.home-music-preview__copy[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--color-neutral-700);\n  font-family: var(--font-mono);\n  font-size: var(--text-xs);\n  margin: 0.4rem 0 0;\n}\n\n.home-music-preview__copy[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--color-primary);\n  display: inline-block;\n  font-size: var(--text-sm);\n  font-weight: 600;\n  margin-top: 0.75rem;\n}\n\n.home-music-preview__copy[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: var(--color-secondary);\n}\n\n.home-music-preview__copy[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus-visible {\n  outline: 3px solid var(--color-accent);\n  outline-offset: 3px;\n}\n\n.home-hero__portrait[_ngcontent-%COMP%] {\n  align-items: flex-end;\n  aspect-ratio: 4/5;\n  background: linear-gradient(145deg, var(--color-secondary), var(--color-primary-dark));\n  border: 1px solid color-mix(in srgb, var(--color-soft-blue) 28%, transparent);\n  border-radius: 1rem;\n  display: flex;\n  justify-content: center;\n  max-height: 27rem;\n  overflow: hidden;\n  position: relative;\n  width: 100%;\n}\n\n.home-hero__silhouette[_ngcontent-%COMP%] {\n  background: var(--color-neutral-900);\n  border-radius: 48% 48% 0 0;\n  bottom: 0;\n  height: 48%;\n  position: absolute;\n  width: 75%;\n}\n\n.home-hero__silhouette[_ngcontent-%COMP%]::before {\n  background: var(--color-neutral-200);\n  border-radius: 50%;\n  content: \"\";\n  height: 8rem;\n  left: 50%;\n  position: absolute;\n  top: -7.2rem;\n  transform: translateX(-50%);\n  width: 7rem;\n}\n\n.home-hero__silhouette[_ngcontent-%COMP%]::after {\n  background: var(--color-neutral-400);\n  border-radius: 50% 50% 0 0;\n  content: \"\";\n  height: 2rem;\n  left: 50%;\n  position: absolute;\n  top: -0.5rem;\n  transform: translateX(-50%);\n  width: 9rem;\n}\n\n.home-hero__portrait-label[_ngcontent-%COMP%] {\n  background: color-mix(in srgb, var(--color-primary) 72%, transparent);\n  color: var(--color-soft-blue);\n  font-family: var(--font-mono);\n  font-size: var(--text-xs);\n  margin: 1rem;\n  padding: 0.45rem 0.65rem;\n  position: relative;\n  text-transform: uppercase;\n}\n\n@media (max-width: 48rem) {\n  .home-projects__header[_ngcontent-%COMP%] {\n    align-items: flex-start;\n  }\n  .home-hero__inner[_ngcontent-%COMP%] {\n    gap: 2.5rem;\n    grid-template-columns: minmax(0, 1fr) minmax(12rem, 17rem);\n    min-height: auto;\n  }\n  .home-hero__heading[_ngcontent-%COMP%] {\n    font-size: clamp(2.5rem, 7vw, 4rem);\n  }\n  .home-about-preview__inner[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .home-about-preview__gallery[_ngcontent-%COMP%] {\n    max-width: 34rem;\n  }\n  .home-writing__header[_ngcontent-%COMP%] {\n    align-items: flex-start;\n  }\n  .home-about-preview__image[_ngcontent-%COMP%]:nth-child(n+3) {\n    display: none;\n  }\n}\n@media (max-width: 36rem) {\n  .home-hero[_ngcontent-%COMP%] {\n    padding: 3rem 1.25rem 4rem;\n  }\n  .home-hero__inner[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .home-projects[_ngcontent-%COMP%] {\n    padding-inline: 1.25rem;\n  }\n  .home-projects__header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 0.75rem;\n  }\n  .project-card__image--wide[_ngcontent-%COMP%] {\n    aspect-ratio: 16/9;\n  }\n  .home-projects__grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .home-about-preview[_ngcontent-%COMP%] {\n    padding-inline: 1.25rem;\n  }\n  .home-about-preview__gallery[_ngcontent-%COMP%] {\n    gap: 0.75rem;\n    grid-template-columns: 1fr;\n    justify-self: center;\n    max-width: 18rem;\n  }\n  .home-writing[_ngcontent-%COMP%] {\n    padding-inline: 1.25rem;\n  }\n  .home-writing__header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 0.75rem;\n  }\n  .home-music-preview[_ngcontent-%COMP%] {\n    padding-inline: 1.25rem;\n  }\n  .home-music-preview__image[_ngcontent-%COMP%] {\n    aspect-ratio: 16/9;\n  }\n  .home-writing__item[_ngcontent-%COMP%] {\n    padding-inline: 0.25rem;\n  }\n  .home-writing__meta[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    gap: 0.45rem;\n  }\n  .home-about-preview__image[_ngcontent-%COMP%]:nth-child(n+2) {\n    display: none;\n  }\n  .home-hero__portrait[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .home-hero__website[_ngcontent-%COMP%] {\n    margin-top: 2rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,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QkFBQTtFQVJGO0VBV0E7SUFDRSxhQUFBO0VBVEY7QUFDRjtBQVlBO0VBQ0U7SUFDRSwwQkFBQTtFQVZGO0VBYUE7SUFDRSwwQkFBQTtFQVhGO0VBY0E7SUFDRSx1QkFBQTtFQVpGO0VBZUE7SUFDRSxzQkFBQTtJQUNBLFlBQUE7RUFiRjtFQWdCQTtJQUNFLGtCQUFBO0VBZEY7RUFpQkE7SUFDRSwwQkFBQTtFQWZGO0VBa0JBO0lBQ0UsdUJBQUE7RUFoQkY7RUFtQkE7SUFDRSxZQUFBO0lBQ0EsMEJBQUE7SUFDQSxvQkFBQTtJQUNBLGdCQUFBO0VBakJGO0VBb0JBO0lBQ0UsdUJBQUE7RUFsQkY7RUFxQkE7SUFDRSxzQkFBQTtJQUNBLFlBQUE7RUFuQkY7RUFzQkE7SUFDRSx1QkFBQTtFQXBCRjtFQXVCQTtJQUNFLGtCQUFBO0VBckJGO0VBd0JBO0lBQ0UsdUJBQUE7RUF0QkY7RUF5QkE7SUFDRSxlQUFBO0lBQ0EsWUFBQTtFQXZCRjtFQTBCQTtJQUNFLGFBQUE7RUF4QkY7RUEyQkE7SUFDRSxhQUFBO0VBekJGO0VBNEJBO0lBQ0UsZ0JBQUE7RUExQkY7QUFDRiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhvbWUtcGFnZSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xufVxuXG4uaG9tZS1oZXJvIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XG4gIHBhZGRpbmc6IGNsYW1wKDNyZW0sIDh2dywgNnJlbSkgY2xhbXAoMS41cmVtLCA0dncsIDMuNXJlbSk7XG59XG5cbi5ob21lLWhlcm9fX2lubmVyIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiBjbGFtcCgzcmVtLCA4dncsIDdyZW0pO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgwLCAxZnIpIG1pbm1heCgxNXJlbSwgMjFyZW0pO1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWF4LXdpZHRoOiA3NnJlbTtcbiAgbWluLWhlaWdodDogbWluKDM2cmVtLCA2OHZoKTtcbn1cblxuLmhvbWUtaGVyb19fY29weSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuXG4uaG9tZS1oZXJvX19leWVicm93LFxuLmhvbWUtaGVyb19fd2Vic2l0ZSB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1zb2Z0LWJsdWUpO1xuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1tb25vKTtcbiAgZm9udC1zaXplOiB2YXIoLS10ZXh0LXhzKTtcbn1cblxuLmhvbWUtaGVyb19fZXllYnJvdyB7XG4gIG1hcmdpbjogMCAwIDAuOHJlbTtcbn1cblxuLmhvbWUtaGVyb19faGVhZGluZyB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XG4gIGZvbnQtc2l6ZTogdmFyKC0tdGV4dC1kaXNwbGF5KTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjAzNWVtO1xuICBsaW5lLWhlaWdodDogdmFyKC0tbGVhZGluZy10aWdodCk7XG4gIG1hcmdpbjogMDtcbn1cblxuLmhvbWUtaGVyb19faW50cm8ge1xuICBjb2xvcjogdmFyKC0tY29sb3Itc29mdC1ibHVlKTtcbiAgZm9udC1zaXplOiB2YXIoLS10ZXh0LWxnKTtcbiAgbGluZS1oZWlnaHQ6IHZhcigtLWxlYWRpbmctYm9keSk7XG4gIG1hcmdpbjogMXJlbSAwIDA7XG4gIG1heC13aWR0aDogMzhyZW07XG59XG5cbi5ob21lLWhlcm9fX3NraWxscyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZ2FwOiAwLjZyZW07XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG1hcmdpbjogMXJlbSAwIDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5ob21lLWhlcm9fX3NraWxscyBsaSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGNvbG9yLW1peChpbiBzcmdiLCB2YXIoLS1jb2xvci1zb2Z0LWJsdWUpIDM1JSwgdHJhbnNwYXJlbnQpO1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICBjb2xvcjogdmFyKC0tY29sb3ItbmV1dHJhbC0xMDApO1xuICBmb250LXNpemU6IHZhcigtLXRleHQteHMpO1xuICBwYWRkaW5nOiAwLjNyZW0gMC42NXJlbTtcbn1cblxuLmhvbWUtaGVyb19fd2Vic2l0ZSB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbi10b3A6IGNsYW1wKDIuNXJlbSwgNnZ3LCA0LjVyZW0pO1xufVxuXG4uaG9tZS1oZXJvX193ZWJzaXRlOmhvdmVyIHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlKTtcbn1cblxuLmhvbWUtcHJvamVjdHMge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1zb2Z0LWJsdWUpO1xuICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG4gIHBhZGRpbmc6IGNsYW1wKDNyZW0sIDZ2dywgNS41cmVtKSBjbGFtcCgxLjVyZW0sIDR2dywgMy41cmVtKTtcbn1cblxuLmhvbWUtcHJvamVjdHNfX2lubmVyIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1heC13aWR0aDogNzZyZW07XG59XG5cbi5ob21lLXByb2plY3RzX19oZWFkZXIge1xuICBhbGlnbi1pdGVtczogZW5kO1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDJyZW07XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xufVxuXG4uaG9tZS1wcm9qZWN0c19faGVhZGluZyB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbiAgZm9udC1zaXplOiB2YXIoLS10ZXh0LWgzKTtcbiAgbWFyZ2luOiAwO1xufVxuXG4uaG9tZS1wcm9qZWN0c19faW50cm8ge1xuICBjb2xvcjogdmFyKC0tY29sb3ItbmV1dHJhbC03MDApO1xuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1tb25vKTtcbiAgZm9udC1zaXplOiB2YXIoLS10ZXh0LXhzKTtcbiAgbWFyZ2luOiAwLjM1cmVtIDAgMDtcbn1cblxuLmhvbWUtcHJvamVjdHNfX2FsbC1saW5rIHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xuICBmbGV4LXNocmluazogMDtcbiAgZm9udC1zaXplOiB2YXIoLS10ZXh0LXNtKTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgcGFkZGluZy1ib3R0b206IDAuMTVyZW07XG59XG5cbi5ob21lLXByb2plY3RzX19hbGwtbGluazpob3ZlciB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xufVxuXG4ucHJvamVjdC1jYXJkIHtcbiAgYmFja2dyb3VuZDogY29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLWNvbG9yLXdoaXRlKSAzOCUsIHZhcigtLWNvbG9yLXNvZnQtYmx1ZSkpO1xuICBib3JkZXI6IDFweCBzb2xpZCBjb2xvci1taXgoaW4gc3JnYiwgdmFyKC0tY29sb3Itd2hpdGUpIDMwJSwgdHJhbnNwYXJlbnQpO1xuICBib3JkZXItcmFkaXVzOiAwLjc1cmVtO1xuICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwYWRkaW5nOiAwLjc1cmVtO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMTgwbXMgZWFzZSwgYm94LXNoYWRvdyAxODBtcyBlYXNlO1xufVxuXG4ucHJvamVjdC1jYXJkOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMCAwLjc1cmVtIDEuNzVyZW0gY29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLWNvbG9yLXByaW1hcnkpIDE2JSwgdHJhbnNwYXJlbnQpO1xuICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcbn1cblxuLnByb2plY3QtY2FyZDpmb2N1cy12aXNpYmxlLFxuLmhvbWUtcHJvamVjdHNfX2FsbC1saW5rOmZvY3VzLXZpc2libGUge1xuICBvdXRsaW5lOiAzcHggc29saWQgdmFyKC0tY29sb3ItYWNjZW50KTtcbiAgb3V0bGluZS1vZmZzZXQ6IDNweDtcbn1cblxuLnByb2plY3QtY2FyZC0tZmVhdHVyZWQge1xuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG59XG5cbi5wcm9qZWN0LWNhcmRfX2ltYWdlIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYXNwZWN0LXJhdGlvOiAxNiAvIDk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXdhcm0td2hpdGUpO1xuICBiYWNrZ3JvdW5kLWltYWdlOlxuICAgIGxpbmVhci1ncmFkaWVudCgxNTNkZWcsIHRyYW5zcGFyZW50IGNhbGMoNTAlIC0gMXB4KSwgY29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLWNvbG9yLW5ldXRyYWwtNTAwKSA0OCUsIHRyYW5zcGFyZW50KSA1MCUsIHRyYW5zcGFyZW50IGNhbGMoNTAlICsgMXB4KSksXG4gICAgbGluZWFyLWdyYWRpZW50KDI3ZGVnLCB0cmFuc3BhcmVudCBjYWxjKDUwJSAtIDFweCksIGNvbG9yLW1peChpbiBzcmdiLCB2YXIoLS1jb2xvci1uZXV0cmFsLTUwMCkgNDglLCB0cmFuc3BhcmVudCkgNTAlLCB0cmFuc3BhcmVudCBjYWxjKDUwJSArIDFweCkpO1xuICBib3JkZXItcmFkaXVzOiAwLjRyZW07XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1uZXV0cmFsLTUwMCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5wcm9qZWN0LWNhcmRfX2ltYWdlIHNwYW4ge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci13YXJtLXdoaXRlKTtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtbW9ubyk7XG4gIGZvbnQtc2l6ZTogdmFyKC0tdGV4dC14cyk7XG4gIHBhZGRpbmc6IDAuMzVyZW0gMC41cmVtO1xufVxuXG4ucHJvamVjdC1jYXJkX19pbWFnZS0td2lkZSB7XG4gIGFzcGVjdC1yYXRpbzogMy4yIC8gMTtcbn1cblxuLnByb2plY3QtY2FyZF9fY29udGVudCB7XG4gIHBhZGRpbmc6IDAuNzVyZW0gMC4yNXJlbSAwLjI1cmVtO1xufVxuXG4ucHJvamVjdC1jYXJkX19jYXRlZ29yeSB7XG4gIGNvbG9yOiBjb2xvci1taXgoaW4gc3JnYiwgdmFyKC0tY29sb3ItcHJpbWFyeSkgNjIlLCB0cmFuc3BhcmVudCk7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LW1vbm8pO1xuICBmb250LXNpemU6IHZhcigtLXRleHQteHMpO1xuICBsZXR0ZXItc3BhY2luZzogMC4wNGVtO1xuICBtYXJnaW46IDAgMCAwLjNyZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5wcm9qZWN0LWNhcmRfX3RpdGxlIHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xuICBmb250LXNpemU6IHZhcigtLXRleHQtaDQpO1xuICBtYXJnaW46IDA7XG59XG5cbi5wcm9qZWN0LWNhcmRfX2Rlc2NyaXB0aW9uIHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLW5ldXRyYWwtNzAwKTtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtbW9ubyk7XG4gIGZvbnQtc2l6ZTogdmFyKC0tdGV4dC14cyk7XG4gIG1hcmdpbjogMC40cmVtIDAgMDtcbn1cblxuLmhvbWUtcHJvamVjdHNfX2dyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6IGNsYW1wKDFyZW0sIDN2dywgMi41cmVtKTtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgbWlubWF4KDAsIDFmcikpO1xufVxuXG4uaG9tZS1hYm91dC1wcmV2aWV3IHtcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3Itd2FybS13aGl0ZSk7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbiAgcGFkZGluZzogY2xhbXAoM3JlbSwgN3Z3LCA2cmVtKSBjbGFtcCgxLjVyZW0sIDR2dywgMy41cmVtKTtcbn1cblxuLmhvbWUtYWJvdXQtcHJldmlld19faW5uZXIge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6IGNsYW1wKDJyZW0sIDV2dywgNHJlbSk7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDAsIDAuOTVmcikgbWlubWF4KDAsIDEuMDVmcik7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXgtd2lkdGg6IDc2cmVtO1xufVxuXG4uaG9tZS1hYm91dC1wcmV2aWV3X19nYWxsZXJ5IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiAxcmVtO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBtaW5tYXgoMCwgMWZyKSk7XG59XG5cbi5ob21lLWFib3V0LXByZXZpZXdfX2ltYWdlIHtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBhc3BlY3QtcmF0aW86IDQgLyA1O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1uZXV0cmFsLTIwMCk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxNDVkZWcsIGNvbG9yLW1peChpbiBzcmdiLCB2YXIoLS1jb2xvci1zb2Z0LWJsdWUpIDU1JSwgdHJhbnNwYXJlbnQpLCB0cmFuc3BhcmVudCA3MCUpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvci1ib3JkZXItZGVmYXVsdCk7XG4gIGJvcmRlci1yYWRpdXM6IDAuNzVyZW07XG4gIGJveC1zaGFkb3c6IDAgMC41cmVtIDFyZW0gY29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLWNvbG9yLXByaW1hcnkpIDE2JSwgdHJhbnNwYXJlbnQpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwYWRkaW5nOiAwLjc1cmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5ob21lLWFib3V0LXByZXZpZXdfX2ltYWdlOjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1uZXV0cmFsLTQwMCk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgY29udGVudDogJyc7XG4gIGhlaWdodDogMjglO1xuICBsZWZ0OiA1MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxOCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgd2lkdGg6IDMwJTtcbn1cblxuLmhvbWUtYWJvdXQtcHJldmlld19faW1hZ2U6OmFmdGVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcbiAgYm9yZGVyLXJhZGl1czogNDglIDQ4JSAwIDA7XG4gIGJvdHRvbTogLTQlO1xuICBjb250ZW50OiAnJztcbiAgaGVpZ2h0OiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIHdpZHRoOiA3MiU7XG59XG5cbi5ob21lLWFib3V0LXByZXZpZXdfX2ltYWdlLS1wZXJmb3JtYW5jZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnktZGFyayk7XG59XG5cbi5ob21lLWFib3V0LXByZXZpZXdfX2ltYWdlLS1wZXJmb3JtYW5jZTo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3Itc29mdC1ibHVlKTtcbn1cblxuLmhvbWUtYWJvdXQtcHJldmlld19faW1hZ2UtLXBlcmZvcm1hbmNlOjphZnRlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xufVxuXG4uaG9tZS1hYm91dC1wcmV2aWV3X19pbWFnZS0tZ3VpdGFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itd2FybS13aGl0ZSk7XG59XG5cbi5ob21lLWFib3V0LXByZXZpZXdfX2ltYWdlLS1ndWl0YXI6OmFmdGVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItbmV1dHJhbC03MDApO1xufVxuXG4uaG9tZS1hYm91dC1wcmV2aWV3X19pbWFnZS0tcG9ydHJhaXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1zb2Z0LWJsdWUpO1xufVxuXG4uaG9tZS1hYm91dC1wcmV2aWV3X19pbWFnZS0tcG9ydHJhaXQ6OmJlZm9yZSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLW5ldXRyYWwtMTAwKTtcbn1cblxuLmhvbWUtYWJvdXQtcHJldmlld19faW1hZ2UtLXBvcnRyYWl0OjphZnRlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLXNlY29uZGFyeSk7XG59XG5cbi5ob21lLWFib3V0LXByZXZpZXdfX2ltYWdlLS1zdHVkaW8ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xufVxuXG4uaG9tZS1hYm91dC1wcmV2aWV3X19pbWFnZS0tc3R1ZGlvOjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1uZXV0cmFsLTIwMCk7XG59XG5cbi5ob21lLWFib3V0LXByZXZpZXdfX2ltYWdlLS1zdHVkaW86OmFmdGVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG59XG5cbi5ob21lLWFib3V0LXByZXZpZXdfX2ltYWdlIHNwYW4ge1xuICBiYWNrZ3JvdW5kOiBjb2xvci1taXgoaW4gc3JnYiwgdmFyKC0tY29sb3ItcHJpbWFyeSkgNzYlLCB0cmFuc3BhcmVudCk7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LW1vbm8pO1xuICBmb250LXNpemU6IHZhcigtLXRleHQteHMpO1xuICBwYWRkaW5nOiAwLjNyZW0gMC40NXJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xufVxuXG4uaG9tZS1hYm91dC1wcmV2aWV3X19jb3B5ID4gcCB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1uZXV0cmFsLTcwMCk7XG4gIG1hcmdpbjogMXJlbSAwIDA7XG59XG5cbi5ob21lLWFib3V0LXByZXZpZXdfX2hlYWRpbmcge1xuICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG4gIGZvbnQtc2l6ZTogdmFyKC0tdGV4dC1oMyk7XG4gIG1hcmdpbjogMDtcbn1cblxuLmhvbWUtYWJvdXQtcHJldmlld19fbGluayB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW4tdG9wOiAxLjI1cmVtO1xufVxuXG4uaG9tZS1hYm91dC1wcmV2aWV3X19saW5rOmhvdmVyIHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXNlY29uZGFyeSk7XG59XG5cbi5ob21lLWFib3V0LXByZXZpZXdfX2xpbms6Zm9jdXMtdmlzaWJsZSB7XG4gIG91dGxpbmU6IDNweCBzb2xpZCB2YXIoLS1jb2xvci1hY2NlbnQpO1xuICBvdXRsaW5lLW9mZnNldDogM3B4O1xufVxuXG4uaG9tZS13cml0aW5nIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XG4gIHBhZGRpbmc6IGNsYW1wKDNyZW0sIDd2dywgNnJlbSkgY2xhbXAoMS41cmVtLCA0dncsIDMuNXJlbSk7XG59XG5cbi5ob21lLXdyaXRpbmdfX2lubmVyIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1heC13aWR0aDogNzZyZW07XG59XG5cbi5ob21lLXdyaXRpbmdfX2hlYWRlciB7XG4gIGFsaWduLWl0ZW1zOiBlbmQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMnJlbTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG59XG5cbi5ob21lLXdyaXRpbmdfX2hlYWRpbmcge1xuICBjb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpO1xuICBmb250LXNpemU6IHZhcigtLXRleHQtaDMpO1xuICBtYXJnaW46IDA7XG59XG5cbi5ob21lLXdyaXRpbmdfX2ludHJvLFxuLmhvbWUtd3JpdGluZ19fbWV0YSxcbi5ob21lLXdyaXRpbmdfX2Rlc2NyaXB0aW9uIHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXNvZnQtYmx1ZSk7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LW1vbm8pO1xuICBmb250LXNpemU6IHZhcigtLXRleHQteHMpO1xufVxuXG4uaG9tZS13cml0aW5nX19pbnRybyB7XG4gIG1hcmdpbjogMC40cmVtIDAgMDtcbn1cblxuLmhvbWUtd3JpdGluZ19fYWxsLWxpbmsge1xuICBjb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpO1xuICBmbGV4LXNocmluazogMDtcbiAgZm9udC1zaXplOiB2YXIoLS10ZXh0LXNtKTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmhvbWUtd3JpdGluZ19fYWxsLWxpbms6aG92ZXIsXG4uaG9tZS13cml0aW5nX19pdGVtOmhvdmVyIC5ob21lLXdyaXRpbmdfX3RpdGxlIHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXNvZnQtYmx1ZSk7XG59XG5cbi5ob21lLXdyaXRpbmdfX2FsbC1saW5rOmZvY3VzLXZpc2libGUsXG4uaG9tZS13cml0aW5nX19pdGVtOmZvY3VzLXZpc2libGUge1xuICBvdXRsaW5lOiAzcHggc29saWQgdmFyKC0tY29sb3ItYWNjZW50KTtcbiAgb3V0bGluZS1vZmZzZXQ6IDRweDtcbn1cblxuLmhvbWUtd3JpdGluZ19faXRlbSB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCBjb2xvci1taXgoaW4gc3JnYiwgdmFyKC0tY29sb3Itc29mdC1ibHVlKSAyOCUsIHRyYW5zcGFyZW50KTtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAxLjVyZW0gMXJlbTtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxNjBtcyBlYXNlO1xufVxuXG4uaG9tZS13cml0aW5nX19pdGVtOmxhc3QtY2hpbGQge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgY29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLWNvbG9yLXNvZnQtYmx1ZSkgMjglLCB0cmFuc3BhcmVudCk7XG59XG5cbi5ob21lLXdyaXRpbmdfX2l0ZW06aG92ZXIge1xuICBiYWNrZ3JvdW5kOiBjb2xvci1taXgoaW4gc3JnYiwgdmFyKC0tY29sb3Itd2hpdGUpIDQlLCB0cmFuc3BhcmVudCk7XG59XG5cbi5ob21lLXdyaXRpbmdfX21ldGEge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDAuN3JlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcbiAgbWFyZ2luOiAwIDAgMC41NXJlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmhvbWUtd3JpdGluZ19fbnVtYmVyIHtcbiAgZm9udC12YXJpYW50LW51bWVyaWM6IHRhYnVsYXItbnVtcztcbiAgbWluLXdpZHRoOiAxLjI1cmVtO1xufVxuXG4uaG9tZS13cml0aW5nX190aXRsZSB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XG4gIGZvbnQtc2l6ZTogdmFyKC0tdGV4dC1oNCk7XG4gIG1hcmdpbjogMDtcbiAgdHJhbnNpdGlvbjogY29sb3IgMTYwbXMgZWFzZTtcbn1cblxuLmhvbWUtd3JpdGluZ19fZGVzY3JpcHRpb24ge1xuICBtYXJnaW46IDAuNDVyZW0gMCAwO1xufVxuXG4uaG9tZS1tdXNpYy1wcmV2aWV3IHtcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3Itc29mdC1ibHVlKTtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xuICBwYWRkaW5nOiBjbGFtcCgzcmVtLCA3dncsIDZyZW0pIGNsYW1wKDEuNXJlbSwgNHZ3LCAzLjVyZW0pO1xufVxuXG4uaG9tZS1tdXNpYy1wcmV2aWV3X19pbm5lciB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXgtd2lkdGg6IDc2cmVtO1xufVxuXG4uaG9tZS1tdXNpYy1wcmV2aWV3X19oZWFkaW5nIHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xuICBmb250LXNpemU6IHZhcigtLXRleHQtaDMpO1xuICBtYXJnaW46IDAgMCAxLjVyZW07XG59XG5cbi5ob21lLW11c2ljLXByZXZpZXdfX2ltYWdlIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYXNwZWN0LXJhdGlvOiAyLjcgLyAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci13YXJtLXdoaXRlKTtcbiAgYmFja2dyb3VuZC1pbWFnZTpcbiAgICBsaW5lYXItZ3JhZGllbnQoMTU3ZGVnLCB0cmFuc3BhcmVudCBjYWxjKDUwJSAtIDFweCksIGNvbG9yLW1peChpbiBzcmdiLCB2YXIoLS1jb2xvci1uZXV0cmFsLTUwMCkgNDUlLCB0cmFuc3BhcmVudCkgNTAlLCB0cmFuc3BhcmVudCBjYWxjKDUwJSArIDFweCkpLFxuICAgIGxpbmVhci1ncmFkaWVudCgyM2RlZywgdHJhbnNwYXJlbnQgY2FsYyg1MCUgLSAxcHgpLCBjb2xvci1taXgoaW4gc3JnYiwgdmFyKC0tY29sb3ItbmV1dHJhbC01MDApIDQ1JSwgdHJhbnNwYXJlbnQpIDUwJSwgdHJhbnNwYXJlbnQgY2FsYyg1MCUgKyAxcHgpKTtcbiAgYm9yZGVyOiAxcHggc29saWQgY29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLWNvbG9yLXByaW1hcnkpIDMwJSwgdHJhbnNwYXJlbnQpO1xuICBib3JkZXItcmFkaXVzOiAwLjc1cmVtO1xuICBjb2xvcjogdmFyKC0tY29sb3ItbmV1dHJhbC01MDApO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmhvbWUtbXVzaWMtcHJldmlld19faW1hZ2Ugc3BhbiB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLXdhcm0td2hpdGUpO1xuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1tb25vKTtcbiAgZm9udC1zaXplOiB2YXIoLS10ZXh0LXhzKTtcbiAgcGFkZGluZzogMC40cmVtIDAuNnJlbTtcbn1cblxuLmhvbWUtbXVzaWMtcHJldmlld19fY29weSB7XG4gIG1hcmdpbi10b3A6IDFyZW07XG4gIG1heC13aWR0aDogNDJyZW07XG59XG5cbi5ob21lLW11c2ljLXByZXZpZXdfX2NvcHkgaDMge1xuICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG4gIGZvbnQtc2l6ZTogdmFyKC0tdGV4dC1oNCk7XG4gIG1hcmdpbjogMDtcbn1cblxuLmhvbWUtbXVzaWMtcHJldmlld19fY29weSBwIHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLW5ldXRyYWwtNzAwKTtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtbW9ubyk7XG4gIGZvbnQtc2l6ZTogdmFyKC0tdGV4dC14cyk7XG4gIG1hcmdpbjogMC40cmVtIDAgMDtcbn1cblxuLmhvbWUtbXVzaWMtcHJldmlld19fY29weSBhIHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogdmFyKC0tdGV4dC1zbSk7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbi10b3A6IDAuNzVyZW07XG59XG5cbi5ob21lLW11c2ljLXByZXZpZXdfX2NvcHkgYTpob3ZlciB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xufVxuXG4uaG9tZS1tdXNpYy1wcmV2aWV3X19jb3B5IGE6Zm9jdXMtdmlzaWJsZSB7XG4gIG91dGxpbmU6IDNweCBzb2xpZCB2YXIoLS1jb2xvci1hY2NlbnQpO1xuICBvdXRsaW5lLW9mZnNldDogM3B4O1xufVxuXG4uaG9tZS1oZXJvX19wb3J0cmFpdCB7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgYXNwZWN0LXJhdGlvOiA0IC8gNTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE0NWRlZywgdmFyKC0tY29sb3Itc2Vjb25kYXJ5KSwgdmFyKC0tY29sb3ItcHJpbWFyeS1kYXJrKSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGNvbG9yLW1peChpbiBzcmdiLCB2YXIoLS1jb2xvci1zb2Z0LWJsdWUpIDI4JSwgdHJhbnNwYXJlbnQpO1xuICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWF4LWhlaWdodDogMjdyZW07XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5ob21lLWhlcm9fX3NpbGhvdWV0dGUge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1uZXV0cmFsLTkwMCk7XG4gIGJvcmRlci1yYWRpdXM6IDQ4JSA0OCUgMCAwO1xuICBib3R0b206IDA7XG4gIGhlaWdodDogNDglO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA3NSU7XG59XG5cbi5ob21lLWhlcm9fX3NpbGhvdWV0dGU6OmJlZm9yZSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLW5ldXRyYWwtMjAwKTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBjb250ZW50OiAnJztcbiAgaGVpZ2h0OiA4cmVtO1xuICBsZWZ0OiA1MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtNy4ycmVtO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIHdpZHRoOiA3cmVtO1xufVxuXG4uaG9tZS1oZXJvX19zaWxob3VldHRlOjphZnRlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLW5ldXRyYWwtNDAwKTtcbiAgYm9yZGVyLXJhZGl1czogNTAlIDUwJSAwIDA7XG4gIGNvbnRlbnQ6ICcnO1xuICBoZWlnaHQ6IDJyZW07XG4gIGxlZnQ6IDUwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0wLjVyZW07XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgd2lkdGg6IDlyZW07XG59XG5cbi5ob21lLWhlcm9fX3BvcnRyYWl0LWxhYmVsIHtcbiAgYmFja2dyb3VuZDogY29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLWNvbG9yLXByaW1hcnkpIDcyJSwgdHJhbnNwYXJlbnQpO1xuICBjb2xvcjogdmFyKC0tY29sb3Itc29mdC1ibHVlKTtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtbW9ubyk7XG4gIGZvbnQtc2l6ZTogdmFyKC0tdGV4dC14cyk7XG4gIG1hcmdpbjogMXJlbTtcbiAgcGFkZGluZzogMC40NXJlbSAwLjY1cmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA0OHJlbSkge1xuICAuaG9tZS1wcm9qZWN0c19faGVhZGVyIHtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgfVxuXG4gIC5ob21lLWhlcm9fX2lubmVyIHtcbiAgICBnYXA6IDIuNXJlbTtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgwLCAxZnIpIG1pbm1heCgxMnJlbSwgMTdyZW0pO1xuICAgIG1pbi1oZWlnaHQ6IGF1dG87XG4gIH1cblxuICAuaG9tZS1oZXJvX19oZWFkaW5nIHtcbiAgICBmb250LXNpemU6IGNsYW1wKDIuNXJlbSwgN3Z3LCA0cmVtKTtcbiAgfVxuXG4gIC5ob21lLWFib3V0LXByZXZpZXdfX2lubmVyIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgfVxuXG4gIC5ob21lLWFib3V0LXByZXZpZXdfX2dhbGxlcnkge1xuICAgIG1heC13aWR0aDogMzRyZW07XG4gIH1cblxuICAuaG9tZS13cml0aW5nX19oZWFkZXIge1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICB9XG5cbiAgLmhvbWUtYWJvdXQtcHJldmlld19faW1hZ2U6bnRoLWNoaWxkKG4gKyAzKSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMzZyZW0pIHtcbiAgLmhvbWUtaGVybyB7XG4gICAgcGFkZGluZzogM3JlbSAxLjI1cmVtIDRyZW07XG4gIH1cblxuICAuaG9tZS1oZXJvX19pbm5lciB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIH1cblxuICAuaG9tZS1wcm9qZWN0cyB7XG4gICAgcGFkZGluZy1pbmxpbmU6IDEuMjVyZW07XG4gIH1cblxuICAuaG9tZS1wcm9qZWN0c19faGVhZGVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMC43NXJlbTtcbiAgfVxuXG4gIC5wcm9qZWN0LWNhcmRfX2ltYWdlLS13aWRlIHtcbiAgICBhc3BlY3QtcmF0aW86IDE2IC8gOTtcbiAgfVxuXG4gIC5ob21lLXByb2plY3RzX19ncmlkIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgfVxuXG4gIC5ob21lLWFib3V0LXByZXZpZXcge1xuICAgIHBhZGRpbmctaW5saW5lOiAxLjI1cmVtO1xuICB9XG5cbiAgLmhvbWUtYWJvdXQtcHJldmlld19fZ2FsbGVyeSB7XG4gICAgZ2FwOiAwLjc1cmVtO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICAgIG1heC13aWR0aDogMThyZW07XG4gIH1cblxuICAuaG9tZS13cml0aW5nIHtcbiAgICBwYWRkaW5nLWlubGluZTogMS4yNXJlbTtcbiAgfVxuXG4gIC5ob21lLXdyaXRpbmdfX2hlYWRlciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDAuNzVyZW07XG4gIH1cblxuICAuaG9tZS1tdXNpYy1wcmV2aWV3IHtcbiAgICBwYWRkaW5nLWlubGluZTogMS4yNXJlbTtcbiAgfVxuXG4gIC5ob21lLW11c2ljLXByZXZpZXdfX2ltYWdlIHtcbiAgICBhc3BlY3QtcmF0aW86IDE2IC8gOTtcbiAgfVxuXG4gIC5ob21lLXdyaXRpbmdfX2l0ZW0ge1xuICAgIHBhZGRpbmctaW5saW5lOiAwLjI1cmVtO1xuICB9XG5cbiAgLmhvbWUtd3JpdGluZ19fbWV0YSB7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGdhcDogMC40NXJlbTtcbiAgfVxuXG4gIC5ob21lLWFib3V0LXByZXZpZXdfX2ltYWdlOm50aC1jaGlsZChuICsgMikge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAuaG9tZS1oZXJvX19wb3J0cmFpdCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5ob21lLWhlcm9fX3dlYnNpdGUge1xuICAgIG1hcmdpbi10b3A6IDJyZW07XG4gIH1cbn1cbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdGVjaC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQ0FBQTtBQUNGOztBQUVBO0VBQ0UsZ0NBQUE7RUFDQSx5QkFBQTtFQUNBLDBEQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLDBEQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FBQ0Y7O0FBRUE7O0VBRUUsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxpQ0FBQTtFQUNBLFNBQUE7QUFDRjs7QUFFQTtFQUNFLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0FBQ0Y7O0FBRUE7RUFDRSw2RUFBQTtFQUNBLHNCQUFBO0VBQ0EsK0JBQUE7RUFDQSx5QkFBQTtFQUNBLHVCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLHNDQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtBQUNGOztBQUVBO0VBQ0Usa0NBQUE7RUFDQSwyQkFBQTtFQUNBLDREQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7RUFDQSw4QkFBQTtFQUNBLHFCQUFBO0FBQ0Y7O0FBRUE7RUFDRSwyQkFBQTtFQUNBLHlCQUFBO0VBQ0EsU0FBQTtBQUNGOztBQUVBO0VBQ0UsK0JBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLDJCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQUNGOztBQUVBO0VBQ0UsNkJBQUE7QUFDRjs7QUFFQTtFQUNFLDhFQUFBO0VBQ0EseUVBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1REFBQTtBQUNGOztBQUVBO0VBQ0UsdUZBQUE7RUFDQSwyQkFBQTtFQUNBLDJCQUFBO0FBQ0Y7O0FBRUE7O0VBRUUsc0NBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx5Q0FBQTtFQUNBLDJUQUNFO0VBRUYscUJBQUE7RUFDQSwrQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFERjs7QUFJQTtFQUNFLG1DQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLHVCQUFBO0FBREY7O0FBSUE7RUFDRSxtQkFBQTtBQURGOztBQUlBO0VBQ0UsZ0NBQUE7QUFERjs7QUFJQTtFQUNFLGdFQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQURGOztBQUlBO0VBQ0UsMkJBQUE7RUFDQSx5QkFBQTtFQUNBLFNBQUE7QUFERjs7QUFJQTtFQUNFLCtCQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FBREY7O0FBSUE7RUFDRSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxnREFBQTtBQURGOztBQUlBO0VBQ0UsbUNBQUE7RUFDQSwyQkFBQTtFQUNBLDBEQUFBO0FBREY7O0FBSUE7RUFDRSxtQkFBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLDBEQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBREY7O0FBSUE7RUFDRSxhQUFBO0VBQ0EsU0FBQTtFQUNBLGdEQUFBO0FBREY7O0FBSUE7RUFDRSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsMENBQUE7RUFDQSx1SEFBQTtFQUNBLDZDQUFBO0VBQ0Esc0JBQUE7RUFDQSxtRkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFERjs7QUFJQTtFQUNFLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtFQUNBLFVBQUE7QUFERjs7QUFJQTtFQUNFLGtDQUFBO0VBQ0EsMEJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUNBLFVBQUE7QUFERjs7QUFJQTtFQUNFLDJDQUFBO0FBREY7O0FBSUE7RUFDRSxrQ0FBQTtBQURGOztBQUlBO0VBQ0UsZ0NBQUE7QUFERjs7QUFJQTtFQUNFLHlDQUFBO0FBREY7O0FBSUE7RUFDRSxvQ0FBQTtBQURGOztBQUlBO0VBQ0Usd0NBQUE7QUFERjs7QUFJQTtFQUNFLG9DQUFBO0FBREY7O0FBSUE7RUFDRSxrQ0FBQTtBQURGOztBQUlBO0VBQ0Usd0NBQUE7QUFERjs7QUFJQTtFQUNFLG9DQUFBO0FBREY7O0FBSUE7RUFDRSxnQ0FBQTtBQURGOztBQUlBO0VBQ0UscUVBQUE7RUFDQSx5QkFBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQURGOztBQUlBO0VBQ0UsK0JBQUE7RUFDQSxnQkFBQTtBQURGOztBQUlBO0VBQ0UsMkJBQUE7RUFDQSx5QkFBQTtFQUNBLFNBQUE7QUFERjs7QUFJQTtFQUNFLDJCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBREY7O0FBSUE7RUFDRSw2QkFBQTtBQURGOztBQUlBO0VBQ0Usc0NBQUE7RUFDQSxtQkFBQTtBQURGOztBQUlBO0VBQ0UsZ0NBQUE7RUFDQSx5QkFBQTtFQUNBLDBEQUFBO0FBREY7O0FBSUE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUFERjs7QUFJQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7RUFDQSw4QkFBQTtFQUNBLHFCQUFBO0FBREY7O0FBSUE7RUFDRSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsU0FBQTtBQURGOztBQUlBOzs7RUFHRSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7QUFERjs7QUFJQTtFQUNFLGtCQUFBO0FBREY7O0FBSUE7RUFDRSx5QkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0FBREY7O0FBSUE7O0VBRUUsNkJBQUE7QUFERjs7QUFJQTs7RUFFRSxzQ0FBQTtFQUNBLG1CQUFBO0FBREY7O0FBSUE7RUFDRSxpRkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSx1Q0FBQTtBQURGOztBQUlBO0VBQ0Usb0ZBQUE7QUFERjs7QUFJQTtFQUNFLGtFQUFBO0FBREY7O0FBSUE7RUFDRSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FBREY7O0FBSUE7RUFDRSxrQ0FBQTtFQUNBLGtCQUFBO0FBREY7O0FBSUE7RUFDRSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsU0FBQTtFQUNBLDRCQUFBO0FBREY7O0FBSUE7RUFDRSxtQkFBQTtBQURGOztBQUlBO0VBQ0Usa0NBQUE7RUFDQSwyQkFBQTtFQUNBLDBEQUFBO0FBREY7O0FBSUE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUFERjs7QUFJQTtFQUNFLDJCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQURGOztBQUlBO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlDQUFBO0VBQ0EsMlRBQ0U7RUFFRiwyRUFBQTtFQUNBLHNCQUFBO0VBQ0EsK0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQUhGOztBQU1BO0VBQ0UsbUNBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7QUFIRjs7QUFNQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUFIRjs7QUFNQTtFQUNFLDJCQUFBO0VBQ0EseUJBQUE7RUFDQSxTQUFBO0FBSEY7O0FBTUE7RUFDRSwrQkFBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQUhGOztBQU1BO0VBQ0UsMkJBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUhGOztBQU1BO0VBQ0UsNkJBQUE7QUFIRjs7QUFNQTtFQUNFLHNDQUFBO0VBQ0EsbUJBQUE7QUFIRjs7QUFNQTtFQUNFLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxzRkFBQTtFQUNBLDZFQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBSEY7O0FBTUE7RUFDRSxvQ0FBQTtFQUNBLDBCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFIRjs7QUFNQTtFQUNFLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7QUFIRjs7QUFNQTtFQUNFLG9DQUFBO0VBQ0EsMEJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7QUFIRjs7QUFNQTtFQUNFLHFFQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQUhGOztBQU1BO0VBQ0U7SUFDRSx1QkFBQTtFQUhGO0VBTUE7SUFDRSxXQUFBO0lBQ0EsMERBQUE7SUFDQSxnQkFBQTtFQUpGO0VBT0E7SUFDRSxtQ0FBQTtFQUxGO0VBUUE7SUFDRSwwQkFBQTtFQU5GO0VBU0E7SUFDRSxnQkFBQTtFQVBGO0VBVUE7SUFDRSx1QkFBQTtFQVJGO0VBV0E7SUFDRSxhQUFBO0VBVEY7QUFDRjtBQVlBO0VBQ0U7SUFDRSwwQkFBQTtFQVZGO0VBYUE7SUFDRSwwQkFBQTtFQVhGO0VBY0E7SUFDRSx1QkFBQTtFQVpGO0VBZUE7SUFDRSxzQkFBQTtJQUNBLFlBQUE7RUFiRjtFQWdCQTtJQUNFLGtCQUFBO0VBZEY7RUFpQkE7SUFDRSwwQkFBQTtFQWZGO0VBa0JBO0lBQ0UsdUJBQUE7RUFoQkY7RUFtQkE7SUFDRSxZQUFBO0lBQ0EsMEJBQUE7SUFDQSxvQkFBQTtJQUNBLGdCQUFBO0VBakJGO0VBb0JBO0lBQ0UsdUJBQUE7RUFsQkY7RUFxQkE7SUFDRSxzQkFBQTtJQUNBLFlBQUE7RUFuQkY7RUFzQkE7SUFDRSx1QkFBQTtFQXBCRjtFQXVCQTtJQUNFLGtCQUFBO0VBckJGO0VBd0JBO0lBQ0UsdUJBQUE7RUF0QkY7RUF5QkE7SUFDRSxlQUFBO0lBQ0EsWUFBQTtFQXZCRjtFQTBCQTtJQUNFLGFBQUE7RUF4QkY7RUEyQkE7SUFDRSxhQUFBO0VBekJGO0VBNEJBO0lBQ0UsZ0JBQUE7RUExQkY7QUFDRjtBQUNBLGczMEJBQWczMEIiLCJzb3VyY2VzQ29udGVudCI6WyIuaG9tZS1wYWdlIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG59XG5cbi5ob21lLWhlcm8ge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlKTtcbiAgcGFkZGluZzogY2xhbXAoM3JlbSwgOHZ3LCA2cmVtKSBjbGFtcCgxLjVyZW0sIDR2dywgMy41cmVtKTtcbn1cblxuLmhvbWUtaGVyb19faW5uZXIge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6IGNsYW1wKDNyZW0sIDh2dywgN3JlbSk7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDAsIDFmcikgbWlubWF4KDE1cmVtLCAyMXJlbSk7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXgtd2lkdGg6IDc2cmVtO1xuICBtaW4taGVpZ2h0OiBtaW4oMzZyZW0sIDY4dmgpO1xufVxuXG4uaG9tZS1oZXJvX19jb3B5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG5cbi5ob21lLWhlcm9fX2V5ZWJyb3csXG4uaG9tZS1oZXJvX193ZWJzaXRlIHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXNvZnQtYmx1ZSk7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LW1vbm8pO1xuICBmb250LXNpemU6IHZhcigtLXRleHQteHMpO1xufVxuXG4uaG9tZS1oZXJvX19leWVicm93IHtcbiAgbWFyZ2luOiAwIDAgMC44cmVtO1xufVxuXG4uaG9tZS1oZXJvX19oZWFkaW5nIHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlKTtcbiAgZm9udC1zaXplOiB2YXIoLS10ZXh0LWRpc3BsYXkpO1xuICBmb250LXdlaWdodDogNzAwO1xuICBsZXR0ZXItc3BhY2luZzogLTAuMDM1ZW07XG4gIGxpbmUtaGVpZ2h0OiB2YXIoLS1sZWFkaW5nLXRpZ2h0KTtcbiAgbWFyZ2luOiAwO1xufVxuXG4uaG9tZS1oZXJvX19pbnRybyB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1zb2Z0LWJsdWUpO1xuICBmb250LXNpemU6IHZhcigtLXRleHQtbGcpO1xuICBsaW5lLWhlaWdodDogdmFyKC0tbGVhZGluZy1ib2R5KTtcbiAgbWFyZ2luOiAxcmVtIDAgMDtcbiAgbWF4LXdpZHRoOiAzOHJlbTtcbn1cblxuLmhvbWUtaGVyb19fc2tpbGxzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBnYXA6IDAuNnJlbTtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luOiAxcmVtIDAgMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLmhvbWUtaGVyb19fc2tpbGxzIGxpIHtcbiAgYm9yZGVyOiAxcHggc29saWQgY29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLWNvbG9yLXNvZnQtYmx1ZSkgMzUlLCB0cmFuc3BhcmVudCk7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1uZXV0cmFsLTEwMCk7XG4gIGZvbnQtc2l6ZTogdmFyKC0tdGV4dC14cyk7XG4gIHBhZGRpbmc6IDAuM3JlbSAwLjY1cmVtO1xufVxuXG4uaG9tZS1oZXJvX193ZWJzaXRlIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luLXRvcDogY2xhbXAoMi41cmVtLCA2dncsIDQuNXJlbSk7XG59XG5cbi5ob21lLWhlcm9fX3dlYnNpdGU6aG92ZXIge1xuICBjb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpO1xufVxuXG4uaG9tZS1wcm9qZWN0cyB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLXNvZnQtYmx1ZSk7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbiAgcGFkZGluZzogY2xhbXAoM3JlbSwgNnZ3LCA1LjVyZW0pIGNsYW1wKDEuNXJlbSwgNHZ3LCAzLjVyZW0pO1xufVxuXG4uaG9tZS1wcm9qZWN0c19faW5uZXIge1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWF4LXdpZHRoOiA3NnJlbTtcbn1cblxuLmhvbWUtcHJvamVjdHNfX2hlYWRlciB7XG4gIGFsaWduLWl0ZW1zOiBlbmQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMnJlbTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG59XG5cbi5ob21lLXByb2plY3RzX19oZWFkaW5nIHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xuICBmb250LXNpemU6IHZhcigtLXRleHQtaDMpO1xuICBtYXJnaW46IDA7XG59XG5cbi5ob21lLXByb2plY3RzX19pbnRybyB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1uZXV0cmFsLTcwMCk7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LW1vbm8pO1xuICBmb250LXNpemU6IHZhcigtLXRleHQteHMpO1xuICBtYXJnaW46IDAuMzVyZW0gMCAwO1xufVxuXG4uaG9tZS1wcm9qZWN0c19fYWxsLWxpbmsge1xuICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBmb250LXNpemU6IHZhcigtLXRleHQtc20pO1xuICBmb250LXdlaWdodDogNjAwO1xuICBwYWRkaW5nLWJvdHRvbTogMC4xNXJlbTtcbn1cblxuLmhvbWUtcHJvamVjdHNfX2FsbC1saW5rOmhvdmVyIHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXNlY29uZGFyeSk7XG59XG5cbi5wcm9qZWN0LWNhcmQge1xuICBiYWNrZ3JvdW5kOiBjb2xvci1taXgoaW4gc3JnYiwgdmFyKC0tY29sb3Itd2hpdGUpIDM4JSwgdmFyKC0tY29sb3Itc29mdC1ibHVlKSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGNvbG9yLW1peChpbiBzcmdiLCB2YXIoLS1jb2xvci13aGl0ZSkgMzAlLCB0cmFuc3BhcmVudCk7XG4gIGJvcmRlci1yYWRpdXM6IDAuNzVyZW07XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBhZGRpbmc6IDAuNzVyZW07XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxODBtcyBlYXNlLCBib3gtc2hhZG93IDE4MG1zIGVhc2U7XG59XG5cbi5wcm9qZWN0LWNhcmQ6aG92ZXIge1xuICBib3gtc2hhZG93OiAwIDAuNzVyZW0gMS43NXJlbSBjb2xvci1taXgoaW4gc3JnYiwgdmFyKC0tY29sb3ItcHJpbWFyeSkgMTYlLCB0cmFuc3BhcmVudCk7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xufVxuXG4ucHJvamVjdC1jYXJkOmZvY3VzLXZpc2libGUsXG4uaG9tZS1wcm9qZWN0c19fYWxsLWxpbms6Zm9jdXMtdmlzaWJsZSB7XG4gIG91dGxpbmU6IDNweCBzb2xpZCB2YXIoLS1jb2xvci1hY2NlbnQpO1xuICBvdXRsaW5lLW9mZnNldDogM3B4O1xufVxuXG4ucHJvamVjdC1jYXJkLS1mZWF0dXJlZCB7XG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbn1cblxuLnByb2plY3QtY2FyZF9faW1hZ2Uge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBhc3BlY3QtcmF0aW86IDE2IC8gOTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itd2FybS13aGl0ZSk7XG4gIGJhY2tncm91bmQtaW1hZ2U6XG4gICAgbGluZWFyLWdyYWRpZW50KDE1M2RlZywgdHJhbnNwYXJlbnQgY2FsYyg1MCUgLSAxcHgpLCBjb2xvci1taXgoaW4gc3JnYiwgdmFyKC0tY29sb3ItbmV1dHJhbC01MDApIDQ4JSwgdHJhbnNwYXJlbnQpIDUwJSwgdHJhbnNwYXJlbnQgY2FsYyg1MCUgKyAxcHgpKSxcbiAgICBsaW5lYXItZ3JhZGllbnQoMjdkZWcsIHRyYW5zcGFyZW50IGNhbGMoNTAlIC0gMXB4KSwgY29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLWNvbG9yLW5ldXRyYWwtNTAwKSA0OCUsIHRyYW5zcGFyZW50KSA1MCUsIHRyYW5zcGFyZW50IGNhbGMoNTAlICsgMXB4KSk7XG4gIGJvcmRlci1yYWRpdXM6IDAuNHJlbTtcbiAgY29sb3I6IHZhcigtLWNvbG9yLW5ldXRyYWwtNTAwKTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnByb2plY3QtY2FyZF9faW1hZ2Ugc3BhbiB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLXdhcm0td2hpdGUpO1xuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1tb25vKTtcbiAgZm9udC1zaXplOiB2YXIoLS10ZXh0LXhzKTtcbiAgcGFkZGluZzogMC4zNXJlbSAwLjVyZW07XG59XG5cbi5wcm9qZWN0LWNhcmRfX2ltYWdlLS13aWRlIHtcbiAgYXNwZWN0LXJhdGlvOiAzLjIgLyAxO1xufVxuXG4ucHJvamVjdC1jYXJkX19jb250ZW50IHtcbiAgcGFkZGluZzogMC43NXJlbSAwLjI1cmVtIDAuMjVyZW07XG59XG5cbi5wcm9qZWN0LWNhcmRfX2NhdGVnb3J5IHtcbiAgY29sb3I6IGNvbG9yLW1peChpbiBzcmdiLCB2YXIoLS1jb2xvci1wcmltYXJ5KSA2MiUsIHRyYW5zcGFyZW50KTtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtbW9ubyk7XG4gIGZvbnQtc2l6ZTogdmFyKC0tdGV4dC14cyk7XG4gIGxldHRlci1zcGFjaW5nOiAwLjA0ZW07XG4gIG1hcmdpbjogMCAwIDAuM3JlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLnByb2plY3QtY2FyZF9fdGl0bGUge1xuICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG4gIGZvbnQtc2l6ZTogdmFyKC0tdGV4dC1oNCk7XG4gIG1hcmdpbjogMDtcbn1cblxuLnByb2plY3QtY2FyZF9fZGVzY3JpcHRpb24ge1xuICBjb2xvcjogdmFyKC0tY29sb3ItbmV1dHJhbC03MDApO1xuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1tb25vKTtcbiAgZm9udC1zaXplOiB2YXIoLS10ZXh0LXhzKTtcbiAgbWFyZ2luOiAwLjRyZW0gMCAwO1xufVxuXG4uaG9tZS1wcm9qZWN0c19fZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogY2xhbXAoMXJlbSwgM3Z3LCAyLjVyZW0pO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBtaW5tYXgoMCwgMWZyKSk7XG59XG5cbi5ob21lLWFib3V0LXByZXZpZXcge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci13YXJtLXdoaXRlKTtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xuICBwYWRkaW5nOiBjbGFtcCgzcmVtLCA3dncsIDZyZW0pIGNsYW1wKDEuNXJlbSwgNHZ3LCAzLjVyZW0pO1xufVxuXG4uaG9tZS1hYm91dC1wcmV2aWV3X19pbm5lciB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogY2xhbXAoMnJlbSwgNXZ3LCA0cmVtKTtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMCwgMC45NWZyKSBtaW5tYXgoMCwgMS4wNWZyKTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1heC13aWR0aDogNzZyZW07XG59XG5cbi5ob21lLWFib3V0LXByZXZpZXdfX2dhbGxlcnkge1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6IDFyZW07XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIG1pbm1heCgwLCAxZnIpKTtcbn1cblxuLmhvbWUtYWJvdXQtcHJldmlld19faW1hZ2Uge1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIGFzcGVjdC1yYXRpbzogNCAvIDU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLW5ldXRyYWwtMjAwKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDE0NWRlZywgY29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLWNvbG9yLXNvZnQtYmx1ZSkgNTUlLCB0cmFuc3BhcmVudCksIHRyYW5zcGFyZW50IDcwJSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yLWJvcmRlci1kZWZhdWx0KTtcbiAgYm9yZGVyLXJhZGl1czogMC43NXJlbTtcbiAgYm94LXNoYWRvdzogMCAwLjVyZW0gMXJlbSBjb2xvci1taXgoaW4gc3JnYiwgdmFyKC0tY29sb3ItcHJpbWFyeSkgMTYlLCB0cmFuc3BhcmVudCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBhZGRpbmc6IDAuNzVyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmhvbWUtYWJvdXQtcHJldmlld19faW1hZ2U6OmJlZm9yZSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLW5ldXRyYWwtNDAwKTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBjb250ZW50OiAnJztcbiAgaGVpZ2h0OiAyOCU7XG4gIGxlZnQ6IDUwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE4JTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICB3aWR0aDogMzAlO1xufVxuXG4uaG9tZS1hYm91dC1wcmV2aWV3X19pbWFnZTo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xuICBib3JkZXItcmFkaXVzOiA0OCUgNDglIDAgMDtcbiAgYm90dG9tOiAtNCU7XG4gIGNvbnRlbnQ6ICcnO1xuICBoZWlnaHQ6IDUwJTtcbiAgbGVmdDogNTAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgd2lkdGg6IDcyJTtcbn1cblxuLmhvbWUtYWJvdXQtcHJldmlld19faW1hZ2UtLXBlcmZvcm1hbmNlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeS1kYXJrKTtcbn1cblxuLmhvbWUtYWJvdXQtcHJldmlld19faW1hZ2UtLXBlcmZvcm1hbmNlOjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1zb2Z0LWJsdWUpO1xufVxuXG4uaG9tZS1hYm91dC1wcmV2aWV3X19pbWFnZS0tcGVyZm9ybWFuY2U6OmFmdGVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG59XG5cbi5ob21lLWFib3V0LXByZXZpZXdfX2ltYWdlLS1ndWl0YXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci13YXJtLXdoaXRlKTtcbn1cblxuLmhvbWUtYWJvdXQtcHJldmlld19faW1hZ2UtLWd1aXRhcjo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1uZXV0cmFsLTcwMCk7XG59XG5cbi5ob21lLWFib3V0LXByZXZpZXdfX2ltYWdlLS1wb3J0cmFpdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXNvZnQtYmx1ZSk7XG59XG5cbi5ob21lLWFib3V0LXByZXZpZXdfX2ltYWdlLS1wb3J0cmFpdDo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItbmV1dHJhbC0xMDApO1xufVxuXG4uaG9tZS1hYm91dC1wcmV2aWV3X19pbWFnZS0tcG9ydHJhaXQ6OmFmdGVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcbn1cblxuLmhvbWUtYWJvdXQtcHJldmlld19faW1hZ2UtLXN0dWRpbyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXNlY29uZGFyeSk7XG59XG5cbi5ob21lLWFib3V0LXByZXZpZXdfX2ltYWdlLS1zdHVkaW86OmJlZm9yZSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLW5ldXRyYWwtMjAwKTtcbn1cblxuLmhvbWUtYWJvdXQtcHJldmlld19faW1hZ2UtLXN0dWRpbzo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbn1cblxuLmhvbWUtYWJvdXQtcHJldmlld19faW1hZ2Ugc3BhbiB7XG4gIGJhY2tncm91bmQ6IGNvbG9yLW1peChpbiBzcmdiLCB2YXIoLS1jb2xvci1wcmltYXJ5KSA3NiUsIHRyYW5zcGFyZW50KTtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlKTtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtbW9ubyk7XG4gIGZvbnQtc2l6ZTogdmFyKC0tdGV4dC14cyk7XG4gIHBhZGRpbmc6IDAuM3JlbSAwLjQ1cmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5ob21lLWFib3V0LXByZXZpZXdfX2NvcHkgPiBwIHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLW5ldXRyYWwtNzAwKTtcbiAgbWFyZ2luOiAxcmVtIDAgMDtcbn1cblxuLmhvbWUtYWJvdXQtcHJldmlld19faGVhZGluZyB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbiAgZm9udC1zaXplOiB2YXIoLS10ZXh0LWgzKTtcbiAgbWFyZ2luOiAwO1xufVxuXG4uaG9tZS1hYm91dC1wcmV2aWV3X19saW5rIHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbi10b3A6IDEuMjVyZW07XG59XG5cbi5ob21lLWFib3V0LXByZXZpZXdfX2xpbms6aG92ZXIge1xuICBjb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcbn1cblxuLmhvbWUtYWJvdXQtcHJldmlld19fbGluazpmb2N1cy12aXNpYmxlIHtcbiAgb3V0bGluZTogM3B4IHNvbGlkIHZhcigtLWNvbG9yLWFjY2VudCk7XG4gIG91dGxpbmUtb2Zmc2V0OiAzcHg7XG59XG5cbi5ob21lLXdyaXRpbmcge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlKTtcbiAgcGFkZGluZzogY2xhbXAoM3JlbSwgN3Z3LCA2cmVtKSBjbGFtcCgxLjVyZW0sIDR2dywgMy41cmVtKTtcbn1cblxuLmhvbWUtd3JpdGluZ19faW5uZXIge1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWF4LXdpZHRoOiA3NnJlbTtcbn1cblxuLmhvbWUtd3JpdGluZ19faGVhZGVyIHtcbiAgYWxpZ24taXRlbXM6IGVuZDtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAycmVtO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbn1cblxuLmhvbWUtd3JpdGluZ19faGVhZGluZyB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XG4gIGZvbnQtc2l6ZTogdmFyKC0tdGV4dC1oMyk7XG4gIG1hcmdpbjogMDtcbn1cblxuLmhvbWUtd3JpdGluZ19faW50cm8sXG4uaG9tZS13cml0aW5nX19tZXRhLFxuLmhvbWUtd3JpdGluZ19fZGVzY3JpcHRpb24ge1xuICBjb2xvcjogdmFyKC0tY29sb3Itc29mdC1ibHVlKTtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtbW9ubyk7XG4gIGZvbnQtc2l6ZTogdmFyKC0tdGV4dC14cyk7XG59XG5cbi5ob21lLXdyaXRpbmdfX2ludHJvIHtcbiAgbWFyZ2luOiAwLjRyZW0gMCAwO1xufVxuXG4uaG9tZS13cml0aW5nX19hbGwtbGluayB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBmb250LXNpemU6IHZhcigtLXRleHQtc20pO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uaG9tZS13cml0aW5nX19hbGwtbGluazpob3Zlcixcbi5ob21lLXdyaXRpbmdfX2l0ZW06aG92ZXIgLmhvbWUtd3JpdGluZ19fdGl0bGUge1xuICBjb2xvcjogdmFyKC0tY29sb3Itc29mdC1ibHVlKTtcbn1cblxuLmhvbWUtd3JpdGluZ19fYWxsLWxpbms6Zm9jdXMtdmlzaWJsZSxcbi5ob21lLXdyaXRpbmdfX2l0ZW06Zm9jdXMtdmlzaWJsZSB7XG4gIG91dGxpbmU6IDNweCBzb2xpZCB2YXIoLS1jb2xvci1hY2NlbnQpO1xuICBvdXRsaW5lLW9mZnNldDogNHB4O1xufVxuXG4uaG9tZS13cml0aW5nX19pdGVtIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGNvbG9yLW1peChpbiBzcmdiLCB2YXIoLS1jb2xvci1zb2Z0LWJsdWUpIDI4JSwgdHJhbnNwYXJlbnQpO1xuICBjb2xvcjogaW5oZXJpdDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDEuNXJlbSAxcmVtO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDE2MG1zIGVhc2U7XG59XG5cbi5ob21lLXdyaXRpbmdfX2l0ZW06bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBjb2xvci1taXgoaW4gc3JnYiwgdmFyKC0tY29sb3Itc29mdC1ibHVlKSAyOCUsIHRyYW5zcGFyZW50KTtcbn1cblxuLmhvbWUtd3JpdGluZ19faXRlbTpob3ZlciB7XG4gIGJhY2tncm91bmQ6IGNvbG9yLW1peChpbiBzcmdiLCB2YXIoLS1jb2xvci13aGl0ZSkgNCUsIHRyYW5zcGFyZW50KTtcbn1cblxuLmhvbWUtd3JpdGluZ19fbWV0YSB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMC43cmVtO1xuICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xuICBtYXJnaW46IDAgMCAwLjU1cmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uaG9tZS13cml0aW5nX19udW1iZXIge1xuICBmb250LXZhcmlhbnQtbnVtZXJpYzogdGFidWxhci1udW1zO1xuICBtaW4td2lkdGg6IDEuMjVyZW07XG59XG5cbi5ob21lLXdyaXRpbmdfX3RpdGxlIHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlKTtcbiAgZm9udC1zaXplOiB2YXIoLS10ZXh0LWg0KTtcbiAgbWFyZ2luOiAwO1xuICB0cmFuc2l0aW9uOiBjb2xvciAxNjBtcyBlYXNlO1xufVxuXG4uaG9tZS13cml0aW5nX19kZXNjcmlwdGlvbiB7XG4gIG1hcmdpbjogMC40NXJlbSAwIDA7XG59XG5cbi5ob21lLW11c2ljLXByZXZpZXcge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1zb2Z0LWJsdWUpO1xuICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG4gIHBhZGRpbmc6IGNsYW1wKDNyZW0sIDd2dywgNnJlbSkgY2xhbXAoMS41cmVtLCA0dncsIDMuNXJlbSk7XG59XG5cbi5ob21lLW11c2ljLXByZXZpZXdfX2lubmVyIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1heC13aWR0aDogNzZyZW07XG59XG5cbi5ob21lLW11c2ljLXByZXZpZXdfX2hlYWRpbmcge1xuICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG4gIGZvbnQtc2l6ZTogdmFyKC0tdGV4dC1oMyk7XG4gIG1hcmdpbjogMCAwIDEuNXJlbTtcbn1cblxuLmhvbWUtbXVzaWMtcHJldmlld19faW1hZ2Uge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBhc3BlY3QtcmF0aW86IDIuNyAvIDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXdhcm0td2hpdGUpO1xuICBiYWNrZ3JvdW5kLWltYWdlOlxuICAgIGxpbmVhci1ncmFkaWVudCgxNTdkZWcsIHRyYW5zcGFyZW50IGNhbGMoNTAlIC0gMXB4KSwgY29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLWNvbG9yLW5ldXRyYWwtNTAwKSA0NSUsIHRyYW5zcGFyZW50KSA1MCUsIHRyYW5zcGFyZW50IGNhbGMoNTAlICsgMXB4KSksXG4gICAgbGluZWFyLWdyYWRpZW50KDIzZGVnLCB0cmFuc3BhcmVudCBjYWxjKDUwJSAtIDFweCksIGNvbG9yLW1peChpbiBzcmdiLCB2YXIoLS1jb2xvci1uZXV0cmFsLTUwMCkgNDUlLCB0cmFuc3BhcmVudCkgNTAlLCB0cmFuc3BhcmVudCBjYWxjKDUwJSArIDFweCkpO1xuICBib3JkZXI6IDFweCBzb2xpZCBjb2xvci1taXgoaW4gc3JnYiwgdmFyKC0tY29sb3ItcHJpbWFyeSkgMzAlLCB0cmFuc3BhcmVudCk7XG4gIGJvcmRlci1yYWRpdXM6IDAuNzVyZW07XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1uZXV0cmFsLTUwMCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uaG9tZS1tdXNpYy1wcmV2aWV3X19pbWFnZSBzcGFuIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3Itd2FybS13aGl0ZSk7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LW1vbm8pO1xuICBmb250LXNpemU6IHZhcigtLXRleHQteHMpO1xuICBwYWRkaW5nOiAwLjRyZW0gMC42cmVtO1xufVxuXG4uaG9tZS1tdXNpYy1wcmV2aWV3X19jb3B5IHtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbiAgbWF4LXdpZHRoOiA0MnJlbTtcbn1cblxuLmhvbWUtbXVzaWMtcHJldmlld19fY29weSBoMyB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbiAgZm9udC1zaXplOiB2YXIoLS10ZXh0LWg0KTtcbiAgbWFyZ2luOiAwO1xufVxuXG4uaG9tZS1tdXNpYy1wcmV2aWV3X19jb3B5IHAge1xuICBjb2xvcjogdmFyKC0tY29sb3ItbmV1dHJhbC03MDApO1xuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1tb25vKTtcbiAgZm9udC1zaXplOiB2YXIoLS10ZXh0LXhzKTtcbiAgbWFyZ2luOiAwLjRyZW0gMCAwO1xufVxuXG4uaG9tZS1tdXNpYy1wcmV2aWV3X19jb3B5IGEge1xuICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiB2YXIoLS10ZXh0LXNtKTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luLXRvcDogMC43NXJlbTtcbn1cblxuLmhvbWUtbXVzaWMtcHJldmlld19fY29weSBhOmhvdmVyIHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXNlY29uZGFyeSk7XG59XG5cbi5ob21lLW11c2ljLXByZXZpZXdfX2NvcHkgYTpmb2N1cy12aXNpYmxlIHtcbiAgb3V0bGluZTogM3B4IHNvbGlkIHZhcigtLWNvbG9yLWFjY2VudCk7XG4gIG91dGxpbmUtb2Zmc2V0OiAzcHg7XG59XG5cbi5ob21lLWhlcm9fX3BvcnRyYWl0IHtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBhc3BlY3QtcmF0aW86IDQgLyA1O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTQ1ZGVnLCB2YXIoLS1jb2xvci1zZWNvbmRhcnkpLCB2YXIoLS1jb2xvci1wcmltYXJ5LWRhcmspKTtcbiAgYm9yZGVyOiAxcHggc29saWQgY29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLWNvbG9yLXNvZnQtYmx1ZSkgMjglLCB0cmFuc3BhcmVudCk7XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXgtaGVpZ2h0OiAyN3JlbTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmhvbWUtaGVyb19fc2lsaG91ZXR0ZSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLW5ldXRyYWwtOTAwKTtcbiAgYm9yZGVyLXJhZGl1czogNDglIDQ4JSAwIDA7XG4gIGJvdHRvbTogMDtcbiAgaGVpZ2h0OiA0OCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDc1JTtcbn1cblxuLmhvbWUtaGVyb19fc2lsaG91ZXR0ZTo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItbmV1dHJhbC0yMDApO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGNvbnRlbnQ6ICcnO1xuICBoZWlnaHQ6IDhyZW07XG4gIGxlZnQ6IDUwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC03LjJyZW07XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgd2lkdGg6IDdyZW07XG59XG5cbi5ob21lLWhlcm9fX3NpbGhvdWV0dGU6OmFmdGVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItbmV1dHJhbC00MDApO1xuICBib3JkZXItcmFkaXVzOiA1MCUgNTAlIDAgMDtcbiAgY29udGVudDogJyc7XG4gIGhlaWdodDogMnJlbTtcbiAgbGVmdDogNTAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTAuNXJlbTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICB3aWR0aDogOXJlbTtcbn1cblxuLmhvbWUtaGVyb19fcG9ydHJhaXQtbGFiZWwge1xuICBiYWNrZ3JvdW5kOiBjb2xvci1taXgoaW4gc3JnYiwgdmFyKC0tY29sb3ItcHJpbWFyeSkgNzIlLCB0cmFuc3BhcmVudCk7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1zb2Z0LWJsdWUpO1xuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1tb25vKTtcbiAgZm9udC1zaXplOiB2YXIoLS10ZXh0LXhzKTtcbiAgbWFyZ2luOiAxcmVtO1xuICBwYWRkaW5nOiAwLjQ1cmVtIDAuNjVyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4cmVtKSB7XG4gIC5ob21lLXByb2plY3RzX19oZWFkZXIge1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICB9XG5cbiAgLmhvbWUtaGVyb19faW5uZXIge1xuICAgIGdhcDogMi41cmVtO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDAsIDFmcikgbWlubWF4KDEycmVtLCAxN3JlbSk7XG4gICAgbWluLWhlaWdodDogYXV0bztcbiAgfVxuXG4gIC5ob21lLWhlcm9fX2hlYWRpbmcge1xuICAgIGZvbnQtc2l6ZTogY2xhbXAoMi41cmVtLCA3dncsIDRyZW0pO1xuICB9XG5cbiAgLmhvbWUtYWJvdXQtcHJldmlld19faW5uZXIge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICB9XG5cbiAgLmhvbWUtYWJvdXQtcHJldmlld19fZ2FsbGVyeSB7XG4gICAgbWF4LXdpZHRoOiAzNHJlbTtcbiAgfVxuXG4gIC5ob21lLXdyaXRpbmdfX2hlYWRlciB7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIH1cblxuICAuaG9tZS1hYm91dC1wcmV2aWV3X19pbWFnZTpudGgtY2hpbGQobiArIDMpIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAzNnJlbSkge1xuICAuaG9tZS1oZXJvIHtcbiAgICBwYWRkaW5nOiAzcmVtIDEuMjVyZW0gNHJlbTtcbiAgfVxuXG4gIC5ob21lLWhlcm9fX2lubmVyIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgfVxuXG4gIC5ob21lLXByb2plY3RzIHtcbiAgICBwYWRkaW5nLWlubGluZTogMS4yNXJlbTtcbiAgfVxuXG4gIC5ob21lLXByb2plY3RzX19oZWFkZXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAwLjc1cmVtO1xuICB9XG5cbiAgLnByb2plY3QtY2FyZF9faW1hZ2UtLXdpZGUge1xuICAgIGFzcGVjdC1yYXRpbzogMTYgLyA5O1xuICB9XG5cbiAgLmhvbWUtcHJvamVjdHNfX2dyaWQge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICB9XG5cbiAgLmhvbWUtYWJvdXQtcHJldmlldyB7XG4gICAgcGFkZGluZy1pbmxpbmU6IDEuMjVyZW07XG4gIH1cblxuICAuaG9tZS1hYm91dC1wcmV2aWV3X19nYWxsZXJ5IHtcbiAgICBnYXA6IDAuNzVyZW07XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gICAgbWF4LXdpZHRoOiAxOHJlbTtcbiAgfVxuXG4gIC5ob21lLXdyaXRpbmcge1xuICAgIHBhZGRpbmctaW5saW5lOiAxLjI1cmVtO1xuICB9XG5cbiAgLmhvbWUtd3JpdGluZ19faGVhZGVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMC43NXJlbTtcbiAgfVxuXG4gIC5ob21lLW11c2ljLXByZXZpZXcge1xuICAgIHBhZGRpbmctaW5saW5lOiAxLjI1cmVtO1xuICB9XG5cbiAgLmhvbWUtbXVzaWMtcHJldmlld19faW1hZ2Uge1xuICAgIGFzcGVjdC1yYXRpbzogMTYgLyA5O1xuICB9XG5cbiAgLmhvbWUtd3JpdGluZ19faXRlbSB7XG4gICAgcGFkZGluZy1pbmxpbmU6IDAuMjVyZW07XG4gIH1cblxuICAuaG9tZS13cml0aW5nX19tZXRhIHtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgZ2FwOiAwLjQ1cmVtO1xuICB9XG5cbiAgLmhvbWUtYWJvdXQtcHJldmlld19faW1hZ2U6bnRoLWNoaWxkKG4gKyAyKSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5ob21lLWhlcm9fX3BvcnRyYWl0IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLmhvbWUtaGVyb19fd2Vic2l0ZSB7XG4gICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 9703:
/*!*************************************************!*\
  !*** ./src/app/tech/skills/skills.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SkillsComponent: () => (/* binding */ SkillsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class SkillsComponent {
  static {
    this.ɵfac = function SkillsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SkillsComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SkillsComponent,
      selectors: [["app-skills"]],
      decls: 2,
      vars: 0,
      template: function SkillsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "skills works!");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJza2lsbHMuY29tcG9uZW50LnNjc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdGVjaC9za2lsbHMvc2tpbGxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxvS0FBb0siLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 4992:
/*!*********************************************!*\
  !*** ./src/app/tech/tech-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TechRoutingModule: () => (/* binding */ TechRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/layout/layout.component */ 8588);
/* harmony import */ var _shared_components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/components/page-not-found/page-not-found.component */ 8003);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ 1881);
/* harmony import */ var _work_work_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./work/work.component */ 5397);
/* harmony import */ var _work_detail_work_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./work-detail/work-detail.component */ 8193);
/* harmony import */ var _writing_writing_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./writing/writing.component */ 2745);
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about/about.component */ 113);
/* harmony import */ var _writing_detail_writing_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./writing-detail/writing-detail.component */ 6735);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7580);











const routes = [{
  path: '',
  component: _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_0__.LayoutComponent,
  children: [{
    path: '',
    component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__.HomeComponent
  }, {
    path: 'work',
    component: _work_work_component__WEBPACK_IMPORTED_MODULE_3__.WorkComponent
  }, {
    path: 'work/:slug',
    component: _work_detail_work_detail_component__WEBPACK_IMPORTED_MODULE_4__.WorkDetailComponent
  }, {
    path: 'writing',
    component: _writing_writing_component__WEBPACK_IMPORTED_MODULE_5__.WritingComponent
  }, {
    path: 'writing/:slug',
    component: _writing_detail_writing_detail_component__WEBPACK_IMPORTED_MODULE_7__.WritingDetailComponent
  }, {
    path: 'about',
    component: _about_about_component__WEBPACK_IMPORTED_MODULE_6__.AboutComponent
  }, {
    path: '404',
    component: _shared_components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_1__.PageNotFoundComponent
  }]
}];
class TechRoutingModule {
  static {
    this.ɵfac = function TechRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || TechRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
      type: TechRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](TechRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule]
  });
})();

/***/ }),

/***/ 8721:
/*!*************************************!*\
  !*** ./src/app/tech/tech.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TechModule: () => (/* binding */ TechModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _tech_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tech-routing.module */ 4992);
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./skills/skills.component */ 9703);
/* harmony import */ var _experience_experience_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./experience/experience.component */ 9599);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ 1881);
/* harmony import */ var _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/layout/layout.component */ 8588);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/shared.module */ 3887);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7580);








class TechModule {
  static {
    this.ɵfac = function TechModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || TechModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
      type: TechModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _tech_routing_module__WEBPACK_IMPORTED_MODULE_0__.TechRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__.SharedModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](TechModule, {
    declarations: [_skills_skills_component__WEBPACK_IMPORTED_MODULE_1__.SkillsComponent, _experience_experience_component__WEBPACK_IMPORTED_MODULE_2__.ExperienceComponent, _home_home_component__WEBPACK_IMPORTED_MODULE_3__.HomeComponent, _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_4__.LayoutComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _tech_routing_module__WEBPACK_IMPORTED_MODULE_0__.TechRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__.SharedModule]
  });
})();

/***/ }),

/***/ 8193:
/*!***********************************************************!*\
  !*** ./src/app/tech/work-detail/work-detail.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WorkDetailComponent: () => (/* binding */ WorkDetailComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);





const _c0 = () => [1, 2, 3];
function WorkDetailComponent_main_0_li_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const technology_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](technology_r1);
  }
}
function WorkDetailComponent_main_0_article_24_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Architecture diagram placeholder");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
function WorkDetailComponent_main_0_article_24_div_11_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Screenshot placeholder");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
function WorkDetailComponent_main_0_article_24_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WorkDetailComponent_main_0_article_24_div_11_div_1_Template, 3, 0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
  }
}
function WorkDetailComponent_main_0_article_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article", 18)(1, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "/");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, WorkDetailComponent_main_0_article_24_div_10_Template, 3, 0, "div", 21)(11, WorkDetailComponent_main_0_article_24_div_11_Template, 2, 2, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const section_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", section_r2.number, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", section_r2.label, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](section_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](section_r2.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", section_r2.image === "architecture");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", section_r2.image === "screenshots");
  }
}
function WorkDetailComponent_main_0_div_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27)(1, "dt");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "dd");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.value);
  }
}
function WorkDetailComponent_main_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 2)(1, "header", 3)(2, "div", 4)(3, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Work ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "/");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "/");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h1", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ul", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, WorkDetailComponent_main_0_li_16_Template, 2, 1, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "section", 10)(18, "div", 11)(19, "div", 12)(20, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Project image placeholder");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13)(23, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, WorkDetailComponent_main_0_article_24_Template, 12, 6, "article", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "aside", 16)(26, "dl");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, WorkDetailComponent_main_0_div_27_Template, 5, 2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const currentProject_r4 = ctx.ngIf;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", currentProject_r4.category, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", currentProject_r4.year, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](currentProject_r4.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](currentProject_r4.summary);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", currentProject_r4.technologies);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", currentProject_r4.title + " image placeholder");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.storySections);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", currentProject_r4.metadata);
  }
}
function WorkDetailComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 28)(1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Project not found");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Back to all projects ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u2192");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
}
class WorkDetailComponent {
  constructor(route) {
    this.footerConfig = {
      eyebrowText: 'Keep exploring',
      showEyebrow: true,
      headerText: "Curious what else I've built?",
      showBody: false,
      buttonText: 'All Projects',
      buttonIcon: 'arrow',
      buttonHref: '/work'
    };
    this.projects = [{
      slug: 'compliance-management-platform',
      title: 'Compliance Management Platform',
      category: 'Client project',
      year: '2026',
      summary: 'Designing and developing a platform to make compliance workflows easier to manage.',
      technologies: ['Angular', 'Java', 'Spring', 'Docker', 'Postgres'],
      metadata: [{
        label: 'Project type',
        value: 'Client work · Hibera'
      }, {
        label: 'Client / organization',
        value: 'Normwaard b.v.'
      }, {
        label: 'My role',
        value: 'Software Engineer'
      }, {
        label: 'Technologies',
        value: 'Java · Angular · Heroku'
      }, {
        label: 'Project period',
        value: '2022 – 2026'
      }, {
        label: 'GitHub / Live URL',
        value: 'Project links to be added'
      }]
    }, {
      slug: 'my-homelab',
      title: 'My Homelab',
      category: 'Personal project',
      year: 'Ongoing',
      summary: 'A personal infrastructure project. The project overview and outcomes will be added here.',
      technologies: ['Infrastructure', 'Self-hosting'],
      metadata: [{
        label: 'Project type',
        value: 'Personal · Infrastructure'
      }, {
        label: 'Client / organization',
        value: 'Personal project'
      }, {
        label: 'My role',
        value: 'Independent'
      }, {
        label: 'Technologies',
        value: 'To be confirmed'
      }, {
        label: 'Project period',
        value: 'Ongoing'
      }, {
        label: 'GitHub / Live URL',
        value: 'Project links to be added'
      }]
    }, {
      slug: 'monitoring-platform',
      title: 'Monitoring Platform',
      category: 'Personal project',
      year: 'Ongoing',
      summary: 'A monitoring platform project. The project overview and outcomes will be added here.',
      technologies: ['Monitoring', 'Software architecture'],
      metadata: [{
        label: 'Project type',
        value: 'Personal · Building in public'
      }, {
        label: 'Client / organization',
        value: 'Personal project'
      }, {
        label: 'My role',
        value: 'Independent'
      }, {
        label: 'Technologies',
        value: 'To be confirmed'
      }, {
        label: 'Project period',
        value: 'Ongoing'
      }, {
        label: 'GitHub / Live URL',
        value: 'Project links to be added'
      }]
    }, {
      slug: 'personal-portfolio',
      title: 'Personal Portfolio',
      category: 'Personal project',
      year: '2026',
      summary: 'A redesign of my personal portfolio. Project decisions and implementation details will be added here.',
      technologies: ['Angular', 'TypeScript', 'SCSS'],
      metadata: [{
        label: 'Project type',
        value: 'Personal · Web development'
      }, {
        label: 'Client / organization',
        value: 'Personal project'
      }, {
        label: 'My role',
        value: 'Designer and developer'
      }, {
        label: 'Technologies',
        value: 'Angular · TypeScript · SCSS'
      }, {
        label: 'Project period',
        value: '2026 – ongoing'
      }, {
        label: 'GitHub / Live URL',
        value: 'Project links to be added'
      }]
    }];
    this.storySections = [{
      number: '01',
      label: 'The problem',
      title: 'Understanding the challenge',
      description: 'Add the project context, the problem to solve and the requirements that shaped the work.'
    }, {
      number: '02',
      label: 'My contribution',
      title: 'What I was responsible for.',
      description: 'Describe the features, decisions and responsibilities you personally owned.'
    }, {
      number: '03',
      label: 'Architecture & decisions',
      title: 'Architecture',
      description: 'Add the important architectural choices and explain why they were made.',
      image: 'architecture'
    }, {
      number: '04',
      label: 'Challenges',
      title: "What didn't go according to plan?",
      description: 'Describe an engineering challenge, a trade-off and how it was resolved.'
    }, {
      number: '05',
      label: 'Outcome & lessons',
      title: 'What I learned along the way.',
      description: "Add what was delivered, what you learned and what you'd do differently next time."
    }, {
      number: '06',
      label: 'Screenshots',
      title: 'A closer look at the product.',
      description: 'Add product screenshots or other supporting project images.',
      image: 'screenshots'
    }];
    this.project = null;
    this.nextProject = null;
    route.paramMap.subscribe(params => this.setProject(params.get('slug')));
  }
  setProject(slug) {
    const projectIndex = this.projects.findIndex(project => project.slug === slug);
    this.project = projectIndex >= 0 ? this.projects[projectIndex] : null;
    this.nextProject = projectIndex >= 0 ? this.projects[(projectIndex + 1) % this.projects.length] : null;
    this.footerConfig.secondaryLink = this.nextProject ? {
      eyebrow: 'Next project',
      label: this.nextProject.title,
      href: `/work/${this.nextProject.slug}`
    } : undefined;
  }
  static {
    this.ɵfac = function WorkDetailComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || WorkDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.ActivatedRoute));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: WorkDetailComponent,
      selectors: [["app-work-detail"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 3,
      vars: 2,
      consts: [["projectNotFound", ""], ["class", "work-detail", 4, "ngIf", "ngIfElse"], [1, "work-detail"], ["aria-labelledby", "project-title", 1, "work-detail-hero"], [1, "work-detail-hero__inner"], [1, "work-detail-hero__breadcrumb"], ["id", "project-title"], [1, "work-detail-hero__summary"], ["aria-label", "Project technologies", 1, "work-detail-hero__technologies"], [4, "ngFor", "ngForOf"], ["aria-label", "Project details", 1, "work-detail-content"], [1, "work-detail-content__inner"], ["role", "img", 1, "work-detail-cover"], [1, "work-detail-layout"], [1, "work-detail-story"], ["class", "work-detail-section", 4, "ngFor", "ngForOf"], ["aria-label", "Project information", 1, "project-meta"], ["class", "project-meta__item", 4, "ngFor", "ngForOf"], [1, "work-detail-section"], [1, "work-detail-section__label"], [1, "work-detail-section__description"], ["class", "work-detail-media work-detail-media--architecture", "role", "img", "aria-label", "Architecture diagram placeholder", 4, "ngIf"], ["class", "work-detail-media-grid", "aria-label", "Project screenshot placeholders", 4, "ngIf"], ["role", "img", "aria-label", "Architecture diagram placeholder", 1, "work-detail-media", "work-detail-media--architecture"], ["aria-label", "Project screenshot placeholders", 1, "work-detail-media-grid"], ["class", "work-detail-media", "role", "img", "aria-label", "Product screenshot placeholder", 4, "ngFor", "ngForOf"], ["role", "img", "aria-label", "Product screenshot placeholder", 1, "work-detail-media"], [1, "project-meta__item"], [1, "work-detail-not-found"], ["routerLink", "/work"], ["aria-hidden", "true"]],
      template: function WorkDetailComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, WorkDetailComponent_main_0_Template, 28, 8, "main", 1)(1, WorkDetailComponent_ng_template_1_Template, 7, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }
        if (rf & 2) {
          const projectNotFound_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.project)("ngIfElse", projectNotFound_r6);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
      styles: [".work-detail-hero[_ngcontent-%COMP%] {\n  background: var(--color-primary);\n  color: var(--color-white);\n  padding: clamp(3.5rem, 8vw, 6.5rem) clamp(1.5rem, 4vw, 3.5rem);\n}\n\n.work-detail-hero__inner[_ngcontent-%COMP%], \n.work-detail-content__inner[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  max-width: 76rem;\n}\n\n.work-detail-hero__breadcrumb[_ngcontent-%COMP%], \n.work-detail-hero__technologies[_ngcontent-%COMP%], \n.work-detail-section__label[_ngcontent-%COMP%] {\n  font-family: var(--font-mono);\n  font-size: var(--text-xs);\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n}\n\n.work-detail-hero__breadcrumb[_ngcontent-%COMP%] {\n  color: var(--color-soft-blue);\n  font-weight: 600;\n  margin: 0 0 0.75rem;\n}\n\n.work-detail-hero__breadcrumb[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.work-detail-section__label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-inline: 0.35rem;\n}\n\n.work-detail-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: var(--color-white);\n  font-size: var(--text-display);\n  line-height: var(--leading-tight);\n  margin: 0;\n}\n\n.work-detail-hero__summary[_ngcontent-%COMP%] {\n  color: var(--color-soft-blue);\n  font-size: var(--text-lg);\n  line-height: var(--leading-heading);\n  margin: 0.8rem 0 0;\n  max-width: 46rem;\n}\n\n.work-detail-hero__technologies[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.65rem;\n  list-style: none;\n  margin: 1.25rem 0 0;\n  padding: 0;\n  text-transform: none;\n}\n\n.work-detail-hero__technologies[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  border: 1px solid color-mix(in srgb, var(--color-soft-blue) 45%, transparent);\n  border-radius: 0.35rem;\n  color: var(--color-neutral-100);\n  font-family: var(--font-body);\n  font-size: var(--text-sm);\n  letter-spacing: 0;\n  padding: 0.35rem 0.75rem;\n}\n\n.work-detail-content[_ngcontent-%COMP%] {\n  background: var(--color-warm-white);\n  color: var(--color-primary);\n  padding: clamp(2rem, 4vw, 3rem) clamp(1.5rem, 4vw, 3.5rem) clamp(3rem, 6vw, 5rem);\n}\n\n.work-detail-cover[_ngcontent-%COMP%] {\n  align-items: center;\n  aspect-ratio: 3.2/1;\n  background-color: var(--color-warm-white);\n  background-image: linear-gradient(157deg, transparent calc(50% - 1px), color-mix(in srgb, var(--color-neutral-500) 50%, transparent) 50%, transparent calc(50% + 1px)), linear-gradient(23deg, transparent calc(50% - 1px), color-mix(in srgb, var(--color-neutral-500) 50%, transparent) 50%, transparent calc(50% + 1px));\n  border: 1rem solid var(--color-soft-blue);\n  border-radius: 0.8rem;\n  color: var(--color-neutral-500);\n  display: flex;\n  justify-content: center;\n  overflow: hidden;\n}\n\n.work-detail-cover[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.work-detail-media[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background: var(--color-warm-white);\n  font-family: var(--font-mono);\n  font-size: var(--text-xs);\n  padding: 0.4rem 0.6rem;\n}\n\n.work-detail-layout[_ngcontent-%COMP%] {\n  display: grid;\n  gap: clamp(2rem, 6vw, 5rem);\n  grid-template-areas: \"story meta\";\n  grid-template-columns: minmax(0, 1fr) minmax(15rem, 21rem);\n  margin-top: 2.25rem;\n}\n\n.work-detail-story[_ngcontent-%COMP%] {\n  grid-area: story;\n  min-width: 0;\n}\n\n.work-detail-section[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--color-border-default);\n  padding: 0 0 1.25rem;\n  margin: 0 0 1.25rem;\n}\n\n.work-detail-section__label[_ngcontent-%COMP%] {\n  color: var(--color-soft-blue);\n  font-weight: 600;\n  margin: 0 0 0.55rem;\n}\n\n.work-detail-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: var(--color-primary);\n  font-size: var(--text-h3);\n  margin: 0;\n}\n\n.work-detail-section__description[_ngcontent-%COMP%] {\n  color: var(--color-neutral-500);\n  font-family: var(--font-mono);\n  font-size: var(--text-xs);\n  margin: 0.5rem 0 0;\n  max-width: 49rem;\n}\n\n.work-detail-media[_ngcontent-%COMP%] {\n  align-items: center;\n  aspect-ratio: 16/9;\n  background-color: var(--color-soft-blue);\n  border-radius: 0.65rem;\n  color: color-mix(in srgb, var(--color-primary) 60%, transparent);\n  display: flex;\n  justify-content: center;\n  margin-top: 1rem;\n  overflow: hidden;\n}\n\n.work-detail-media--architecture[_ngcontent-%COMP%] {\n  max-width: 34rem;\n}\n\n.work-detail-media-grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.75rem;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n\n.work-detail-media-grid[_ngcontent-%COMP%]   .work-detail-media[_ngcontent-%COMP%]:first-child {\n  grid-column: 1/-1;\n}\n\n.project-meta[_ngcontent-%COMP%] {\n  align-self: start;\n  background: color-mix(in srgb, var(--color-white) 38%, var(--color-soft-blue));\n  border-radius: 0.75rem;\n  grid-area: meta;\n  padding: 1rem 1.25rem;\n}\n\n.project-meta[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.project-meta__item[_ngcontent-%COMP%] {\n  border-bottom: 1px solid color-mix(in srgb, var(--color-primary) 12%, transparent);\n  padding: 0.7rem 0;\n}\n\n.project-meta__item[_ngcontent-%COMP%]:first-child {\n  padding-top: 0;\n}\n\n.project-meta__item[_ngcontent-%COMP%]:last-child {\n  border-bottom: 0;\n  padding-bottom: 0;\n}\n\n.project-meta[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%] {\n  color: color-mix(in srgb, var(--color-primary) 65%, transparent);\n  font-family: var(--font-mono);\n  font-size: var(--text-xs);\n  letter-spacing: 0.05em;\n  text-transform: uppercase;\n}\n\n.project-meta[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%] {\n  color: var(--color-primary);\n  font-size: var(--text-base);\n  font-weight: 600;\n  margin: 0.15rem 0 0;\n  overflow-wrap: anywhere;\n}\n\n.work-detail-not-found[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus-visible {\n  outline: 3px solid var(--color-accent);\n  outline-offset: 4px;\n}\n\n.work-detail-not-found[_ngcontent-%COMP%] {\n  background: var(--color-warm-white);\n  color: var(--color-primary);\n  min-height: 50vh;\n  padding: 5rem clamp(1.5rem, 4vw, 3.5rem);\n  text-align: center;\n}\n\n.work-detail-not-found[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--color-primary);\n  font-weight: 600;\n}\n\n@media (max-width: 48rem) {\n  .work-detail-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: clamp(2.5rem, 7vw, 4.25rem);\n  }\n  .work-detail-cover[_ngcontent-%COMP%] {\n    aspect-ratio: 2.3/1;\n    border-width: 0.7rem;\n  }\n  .work-detail-layout[_ngcontent-%COMP%] {\n    gap: 1.5rem;\n    grid-template-areas: \"meta\" \"story\";\n    grid-template-columns: minmax(0, 1fr);\n  }\n  .project-meta[_ngcontent-%COMP%] {\n    max-width: none;\n  }\n}\n@media (max-width: 36rem) {\n  .work-detail-hero[_ngcontent-%COMP%], \n   .work-detail-content[_ngcontent-%COMP%] {\n    padding-inline: 1.25rem;\n  }\n  .work-detail-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: clamp(2.25rem, 10vw, 3.5rem);\n  }\n  .work-detail-cover[_ngcontent-%COMP%] {\n    aspect-ratio: 16/9;\n    border-width: 0.45rem;\n  }\n  .work-detail-media-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .work-detail-media-grid[_ngcontent-%COMP%]   .work-detail-media[_ngcontent-%COMP%]:first-child {\n    grid-column: auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndvcmstZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0NBQUE7RUFDQSx5QkFBQTtFQUNBLDhEQUFBO0FBQ0Y7O0FBRUE7O0VBRUUsY0FBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7OztFQUdFLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTs7RUFFRSxzQkFBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7RUFDQSw4QkFBQTtFQUNBLGlDQUFBO0VBQ0EsU0FBQTtBQUNGOztBQUVBO0VBQ0UsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLG1DQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtBQUNGOztBQUVBO0VBQ0UsNkVBQUE7RUFDQSxzQkFBQTtFQUNBLCtCQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0Esd0JBQUE7QUFDRjs7QUFFQTtFQUNFLG1DQUFBO0VBQ0EsMkJBQUE7RUFDQSxpRkFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlDQUFBO0VBQ0EsMlRBQ0U7RUFFRix5Q0FBQTtFQUNBLHFCQUFBO0VBQ0EsK0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQURGOztBQUlBOztFQUVFLG1DQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0FBREY7O0FBSUE7RUFDRSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQ0FBQTtFQUNBLDBEQUFBO0VBQ0EsbUJBQUE7QUFERjs7QUFJQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtBQURGOztBQUlBO0VBQ0Usb0RBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0FBREY7O0FBSUE7RUFDRSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFERjs7QUFJQTtFQUNFLDJCQUFBO0VBQ0EseUJBQUE7RUFDQSxTQUFBO0FBREY7O0FBSUE7RUFDRSwrQkFBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBREY7O0FBSUE7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0NBQUE7RUFDQSxzQkFBQTtFQUNBLGdFQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQURGOztBQUlBO0VBQ0UsZ0JBQUE7QUFERjs7QUFJQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZ0RBQUE7QUFERjs7QUFJQTtFQUNFLGlCQUFBO0FBREY7O0FBSUE7RUFDRSxpQkFBQTtFQUNBLDhFQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUFERjs7QUFJQTtFQUNFLFNBQUE7QUFERjs7QUFJQTtFQUNFLGtGQUFBO0VBQ0EsaUJBQUE7QUFERjs7QUFJQTtFQUNFLGNBQUE7QUFERjs7QUFJQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7QUFERjs7QUFJQTtFQUNFLGdFQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7QUFERjs7QUFJQTtFQUNFLDJCQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFERjs7QUFJQTtFQUNFLHNDQUFBO0VBQ0EsbUJBQUE7QUFERjs7QUFJQTtFQUNFLG1DQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQkFBQTtFQUNBLHdDQUFBO0VBQ0Esa0JBQUE7QUFERjs7QUFJQTtFQUNFLDJCQUFBO0VBQ0EsZ0JBQUE7QUFERjs7QUFJQTtFQUNFO0lBQ0Usc0NBQUE7RUFERjtFQUlBO0lBQ0UsbUJBQUE7SUFDQSxvQkFBQTtFQUZGO0VBS0E7SUFDRSxXQUFBO0lBQ0EsbUNBQUE7SUFDQSxxQ0FBQTtFQUhGO0VBTUE7SUFDRSxlQUFBO0VBSkY7QUFDRjtBQU9BO0VBQ0U7O0lBRUUsdUJBQUE7RUFMRjtFQVFBO0lBQ0UsdUNBQUE7RUFORjtFQVNBO0lBQ0Usa0JBQUE7SUFDQSxxQkFBQTtFQVBGO0VBVUE7SUFDRSwwQkFBQTtFQVJGO0VBV0E7SUFDRSxpQkFBQTtFQVRGO0FBQ0YiLCJmaWxlIjoid29yay1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud29yay1kZXRhaWwtaGVybyB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xuICBjb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpO1xuICBwYWRkaW5nOiBjbGFtcCgzLjVyZW0sIDh2dywgNi41cmVtKSBjbGFtcCgxLjVyZW0sIDR2dywgMy41cmVtKTtcbn1cblxuLndvcmstZGV0YWlsLWhlcm9fX2lubmVyLFxuLndvcmstZGV0YWlsLWNvbnRlbnRfX2lubmVyIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1heC13aWR0aDogNzZyZW07XG59XG5cbi53b3JrLWRldGFpbC1oZXJvX19icmVhZGNydW1iLFxuLndvcmstZGV0YWlsLWhlcm9fX3RlY2hub2xvZ2llcyxcbi53b3JrLWRldGFpbC1zZWN0aW9uX19sYWJlbCB7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LW1vbm8pO1xuICBmb250LXNpemU6IHZhcigtLXRleHQteHMpO1xuICBsZXR0ZXItc3BhY2luZzogMC4wNmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4ud29yay1kZXRhaWwtaGVyb19fYnJlYWRjcnVtYiB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1zb2Z0LWJsdWUpO1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW46IDAgMCAwLjc1cmVtO1xufVxuXG4ud29yay1kZXRhaWwtaGVyb19fYnJlYWRjcnVtYiBzcGFuLFxuLndvcmstZGV0YWlsLXNlY3Rpb25fX2xhYmVsIHNwYW4ge1xuICBtYXJnaW4taW5saW5lOiAwLjM1cmVtO1xufVxuXG4ud29yay1kZXRhaWwtaGVybyBoMSB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XG4gIGZvbnQtc2l6ZTogdmFyKC0tdGV4dC1kaXNwbGF5KTtcbiAgbGluZS1oZWlnaHQ6IHZhcigtLWxlYWRpbmctdGlnaHQpO1xuICBtYXJnaW46IDA7XG59XG5cbi53b3JrLWRldGFpbC1oZXJvX19zdW1tYXJ5IHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXNvZnQtYmx1ZSk7XG4gIGZvbnQtc2l6ZTogdmFyKC0tdGV4dC1sZyk7XG4gIGxpbmUtaGVpZ2h0OiB2YXIoLS1sZWFkaW5nLWhlYWRpbmcpO1xuICBtYXJnaW46IDAuOHJlbSAwIDA7XG4gIG1heC13aWR0aDogNDZyZW07XG59XG5cbi53b3JrLWRldGFpbC1oZXJvX190ZWNobm9sb2dpZXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGdhcDogMC42NXJlbTtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luOiAxLjI1cmVtIDAgMDtcbiAgcGFkZGluZzogMDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG59XG5cbi53b3JrLWRldGFpbC1oZXJvX190ZWNobm9sb2dpZXMgbGkge1xuICBib3JkZXI6IDFweCBzb2xpZCBjb2xvci1taXgoaW4gc3JnYiwgdmFyKC0tY29sb3Itc29mdC1ibHVlKSA0NSUsIHRyYW5zcGFyZW50KTtcbiAgYm9yZGVyLXJhZGl1czogMC4zNXJlbTtcbiAgY29sb3I6IHZhcigtLWNvbG9yLW5ldXRyYWwtMTAwKTtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtYm9keSk7XG4gIGZvbnQtc2l6ZTogdmFyKC0tdGV4dC1zbSk7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICBwYWRkaW5nOiAwLjM1cmVtIDAuNzVyZW07XG59XG5cbi53b3JrLWRldGFpbC1jb250ZW50IHtcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3Itd2FybS13aGl0ZSk7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbiAgcGFkZGluZzogY2xhbXAoMnJlbSwgNHZ3LCAzcmVtKSBjbGFtcCgxLjVyZW0sIDR2dywgMy41cmVtKSBjbGFtcCgzcmVtLCA2dncsIDVyZW0pO1xufVxuXG4ud29yay1kZXRhaWwtY292ZXIge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBhc3BlY3QtcmF0aW86IDMuMiAvIDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXdhcm0td2hpdGUpO1xuICBiYWNrZ3JvdW5kLWltYWdlOlxuICAgIGxpbmVhci1ncmFkaWVudCgxNTdkZWcsIHRyYW5zcGFyZW50IGNhbGMoNTAlIC0gMXB4KSwgY29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLWNvbG9yLW5ldXRyYWwtNTAwKSA1MCUsIHRyYW5zcGFyZW50KSA1MCUsIHRyYW5zcGFyZW50IGNhbGMoNTAlICsgMXB4KSksXG4gICAgbGluZWFyLWdyYWRpZW50KDIzZGVnLCB0cmFuc3BhcmVudCBjYWxjKDUwJSAtIDFweCksIGNvbG9yLW1peChpbiBzcmdiLCB2YXIoLS1jb2xvci1uZXV0cmFsLTUwMCkgNTAlLCB0cmFuc3BhcmVudCkgNTAlLCB0cmFuc3BhcmVudCBjYWxjKDUwJSArIDFweCkpO1xuICBib3JkZXI6IDFyZW0gc29saWQgdmFyKC0tY29sb3Itc29mdC1ibHVlKTtcbiAgYm9yZGVyLXJhZGl1czogMC44cmVtO1xuICBjb2xvcjogdmFyKC0tY29sb3ItbmV1dHJhbC01MDApO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLndvcmstZGV0YWlsLWNvdmVyIHNwYW4sXG4ud29yay1kZXRhaWwtbWVkaWEgc3BhbiB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLXdhcm0td2hpdGUpO1xuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1tb25vKTtcbiAgZm9udC1zaXplOiB2YXIoLS10ZXh0LXhzKTtcbiAgcGFkZGluZzogMC40cmVtIDAuNnJlbTtcbn1cblxuLndvcmstZGV0YWlsLWxheW91dCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogY2xhbXAoMnJlbSwgNnZ3LCA1cmVtKTtcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJzdG9yeSBtZXRhXCI7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDAsIDFmcikgbWlubWF4KDE1cmVtLCAyMXJlbSk7XG4gIG1hcmdpbi10b3A6IDIuMjVyZW07XG59XG5cbi53b3JrLWRldGFpbC1zdG9yeSB7XG4gIGdyaWQtYXJlYTogc3Rvcnk7XG4gIG1pbi13aWR0aDogMDtcbn1cblxuLndvcmstZGV0YWlsLXNlY3Rpb24ge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tY29sb3ItYm9yZGVyLWRlZmF1bHQpO1xuICBwYWRkaW5nOiAwIDAgMS4yNXJlbTtcbiAgbWFyZ2luOiAwIDAgMS4yNXJlbTtcbn1cblxuLndvcmstZGV0YWlsLXNlY3Rpb25fX2xhYmVsIHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXNvZnQtYmx1ZSk7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbjogMCAwIDAuNTVyZW07XG59XG5cbi53b3JrLWRldGFpbC1zZWN0aW9uIGgyIHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xuICBmb250LXNpemU6IHZhcigtLXRleHQtaDMpO1xuICBtYXJnaW46IDA7XG59XG5cbi53b3JrLWRldGFpbC1zZWN0aW9uX19kZXNjcmlwdGlvbiB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1uZXV0cmFsLTUwMCk7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LW1vbm8pO1xuICBmb250LXNpemU6IHZhcigtLXRleHQteHMpO1xuICBtYXJnaW46IDAuNXJlbSAwIDA7XG4gIG1heC13aWR0aDogNDlyZW07XG59XG5cbi53b3JrLWRldGFpbC1tZWRpYSB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGFzcGVjdC1yYXRpbzogMTYgLyA5O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1zb2Z0LWJsdWUpO1xuICBib3JkZXItcmFkaXVzOiAwLjY1cmVtO1xuICBjb2xvcjogY29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLWNvbG9yLXByaW1hcnkpIDYwJSwgdHJhbnNwYXJlbnQpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLndvcmstZGV0YWlsLW1lZGlhLS1hcmNoaXRlY3R1cmUge1xuICBtYXgtd2lkdGg6IDM0cmVtO1xufVxuXG4ud29yay1kZXRhaWwtbWVkaWEtZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogMC43NXJlbTtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgbWlubWF4KDAsIDFmcikpO1xufVxuXG4ud29yay1kZXRhaWwtbWVkaWEtZ3JpZCAud29yay1kZXRhaWwtbWVkaWE6Zmlyc3QtY2hpbGQge1xuICBncmlkLWNvbHVtbjogMSAvIC0xO1xufVxuXG4ucHJvamVjdC1tZXRhIHtcbiAgYWxpZ24tc2VsZjogc3RhcnQ7XG4gIGJhY2tncm91bmQ6IGNvbG9yLW1peChpbiBzcmdiLCB2YXIoLS1jb2xvci13aGl0ZSkgMzglLCB2YXIoLS1jb2xvci1zb2Z0LWJsdWUpKTtcbiAgYm9yZGVyLXJhZGl1czogMC43NXJlbTtcbiAgZ3JpZC1hcmVhOiBtZXRhO1xuICBwYWRkaW5nOiAxcmVtIDEuMjVyZW07XG59XG5cbi5wcm9qZWN0LW1ldGEgZGwge1xuICBtYXJnaW46IDA7XG59XG5cbi5wcm9qZWN0LW1ldGFfX2l0ZW0ge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgY29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLWNvbG9yLXByaW1hcnkpIDEyJSwgdHJhbnNwYXJlbnQpO1xuICBwYWRkaW5nOiAwLjdyZW0gMDtcbn1cblxuLnByb2plY3QtbWV0YV9faXRlbTpmaXJzdC1jaGlsZCB7XG4gIHBhZGRpbmctdG9wOiAwO1xufVxuXG4ucHJvamVjdC1tZXRhX19pdGVtOmxhc3QtY2hpbGQge1xuICBib3JkZXItYm90dG9tOiAwO1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbn1cblxuLnByb2plY3QtbWV0YSBkdCB7XG4gIGNvbG9yOiBjb2xvci1taXgoaW4gc3JnYiwgdmFyKC0tY29sb3ItcHJpbWFyeSkgNjUlLCB0cmFuc3BhcmVudCk7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LW1vbm8pO1xuICBmb250LXNpemU6IHZhcigtLXRleHQteHMpO1xuICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4ucHJvamVjdC1tZXRhIGRkIHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xuICBmb250LXNpemU6IHZhcigtLXRleHQtYmFzZSk7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbjogMC4xNXJlbSAwIDA7XG4gIG92ZXJmbG93LXdyYXA6IGFueXdoZXJlO1xufVxuXG4ud29yay1kZXRhaWwtbm90LWZvdW5kIGE6Zm9jdXMtdmlzaWJsZSB7XG4gIG91dGxpbmU6IDNweCBzb2xpZCB2YXIoLS1jb2xvci1hY2NlbnQpO1xuICBvdXRsaW5lLW9mZnNldDogNHB4O1xufVxuXG4ud29yay1kZXRhaWwtbm90LWZvdW5kIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3Itd2FybS13aGl0ZSk7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbiAgbWluLWhlaWdodDogNTB2aDtcbiAgcGFkZGluZzogNXJlbSBjbGFtcCgxLjVyZW0sIDR2dywgMy41cmVtKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ud29yay1kZXRhaWwtbm90LWZvdW5kIGEge1xuICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA0OHJlbSkge1xuICAud29yay1kZXRhaWwtaGVybyBoMSB7XG4gICAgZm9udC1zaXplOiBjbGFtcCgyLjVyZW0sIDd2dywgNC4yNXJlbSk7XG4gIH1cblxuICAud29yay1kZXRhaWwtY292ZXIge1xuICAgIGFzcGVjdC1yYXRpbzogMi4zIC8gMTtcbiAgICBib3JkZXItd2lkdGg6IDAuN3JlbTtcbiAgfVxuXG4gIC53b3JrLWRldGFpbC1sYXlvdXQge1xuICAgIGdhcDogMS41cmVtO1xuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwibWV0YVwiIFwic3RvcnlcIjtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgwLCAxZnIpO1xuICB9XG5cbiAgLnByb2plY3QtbWV0YSB7XG4gICAgbWF4LXdpZHRoOiBub25lO1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAzNnJlbSkge1xuICAud29yay1kZXRhaWwtaGVybyxcbiAgLndvcmstZGV0YWlsLWNvbnRlbnQge1xuICAgIHBhZGRpbmctaW5saW5lOiAxLjI1cmVtO1xuICB9XG5cbiAgLndvcmstZGV0YWlsLWhlcm8gaDEge1xuICAgIGZvbnQtc2l6ZTogY2xhbXAoMi4yNXJlbSwgMTB2dywgMy41cmVtKTtcbiAgfVxuXG4gIC53b3JrLWRldGFpbC1jb3ZlciB7XG4gICAgYXNwZWN0LXJhdGlvOiAxNiAvIDk7XG4gICAgYm9yZGVyLXdpZHRoOiAwLjQ1cmVtO1xuICB9XG5cbiAgLndvcmstZGV0YWlsLW1lZGlhLWdyaWQge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICB9XG5cbiAgLndvcmstZGV0YWlsLW1lZGlhLWdyaWQgLndvcmstZGV0YWlsLW1lZGlhOmZpcnN0LWNoaWxkIHtcbiAgICBncmlkLWNvbHVtbjogYXV0bztcbiAgfVxufVxuXG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdGVjaC93b3JrLWRldGFpbC93b3JrLWRldGFpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdDQUFBO0VBQ0EseUJBQUE7RUFDQSw4REFBQTtBQUNGOztBQUVBOztFQUVFLGNBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBOzs7RUFHRSw2QkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtBQUNGOztBQUVBO0VBQ0UsNkJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7O0VBRUUsc0JBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQ0FBQTtFQUNBLFNBQUE7QUFDRjs7QUFFQTtFQUNFLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0Esb0JBQUE7QUFDRjs7QUFFQTtFQUNFLDZFQUFBO0VBQ0Esc0JBQUE7RUFDQSwrQkFBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLHdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsaUZBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx5Q0FBQTtFQUNBLDJUQUNFO0VBRUYseUNBQUE7RUFDQSxxQkFBQTtFQUNBLCtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUFERjs7QUFJQTs7RUFFRSxtQ0FBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtBQURGOztBQUlBO0VBQ0UsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsaUNBQUE7RUFDQSwwREFBQTtFQUNBLG1CQUFBO0FBREY7O0FBSUE7RUFDRSxnQkFBQTtFQUNBLFlBQUE7QUFERjs7QUFJQTtFQUNFLG9EQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtBQURGOztBQUlBO0VBQ0UsNkJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBREY7O0FBSUE7RUFDRSwyQkFBQTtFQUNBLHlCQUFBO0VBQ0EsU0FBQTtBQURGOztBQUlBO0VBQ0UsK0JBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQURGOztBQUlBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHdDQUFBO0VBQ0Esc0JBQUE7RUFDQSxnRUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFERjs7QUFJQTtFQUNFLGdCQUFBO0FBREY7O0FBSUE7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGdEQUFBO0FBREY7O0FBSUE7RUFDRSxpQkFBQTtBQURGOztBQUlBO0VBQ0UsaUJBQUE7RUFDQSw4RUFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FBREY7O0FBSUE7RUFDRSxTQUFBO0FBREY7O0FBSUE7RUFDRSxrRkFBQTtFQUNBLGlCQUFBO0FBREY7O0FBSUE7RUFDRSxjQUFBO0FBREY7O0FBSUE7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FBREY7O0FBSUE7RUFDRSxnRUFBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0FBREY7O0FBSUE7RUFDRSwyQkFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBREY7O0FBSUE7RUFDRSxzQ0FBQTtFQUNBLG1CQUFBO0FBREY7O0FBSUE7RUFDRSxtQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3Q0FBQTtFQUNBLGtCQUFBO0FBREY7O0FBSUE7RUFDRSwyQkFBQTtFQUNBLGdCQUFBO0FBREY7O0FBSUE7RUFDRTtJQUNFLHNDQUFBO0VBREY7RUFJQTtJQUNFLG1CQUFBO0lBQ0Esb0JBQUE7RUFGRjtFQUtBO0lBQ0UsV0FBQTtJQUNBLG1DQUFBO0lBQ0EscUNBQUE7RUFIRjtFQU1BO0lBQ0UsZUFBQTtFQUpGO0FBQ0Y7QUFPQTtFQUNFOztJQUVFLHVCQUFBO0VBTEY7RUFRQTtJQUNFLHVDQUFBO0VBTkY7RUFTQTtJQUNFLGtCQUFBO0lBQ0EscUJBQUE7RUFQRjtFQVVBO0lBQ0UsMEJBQUE7RUFSRjtFQVdBO0lBQ0UsaUJBQUE7RUFURjtBQUNGO0FBQ0Esb2lWQUFvaVYiLCJzb3VyY2VzQ29udGVudCI6WyIud29yay1kZXRhaWwtaGVybyB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xuICBjb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpO1xuICBwYWRkaW5nOiBjbGFtcCgzLjVyZW0sIDh2dywgNi41cmVtKSBjbGFtcCgxLjVyZW0sIDR2dywgMy41cmVtKTtcbn1cblxuLndvcmstZGV0YWlsLWhlcm9fX2lubmVyLFxuLndvcmstZGV0YWlsLWNvbnRlbnRfX2lubmVyIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1heC13aWR0aDogNzZyZW07XG59XG5cbi53b3JrLWRldGFpbC1oZXJvX19icmVhZGNydW1iLFxuLndvcmstZGV0YWlsLWhlcm9fX3RlY2hub2xvZ2llcyxcbi53b3JrLWRldGFpbC1zZWN0aW9uX19sYWJlbCB7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LW1vbm8pO1xuICBmb250LXNpemU6IHZhcigtLXRleHQteHMpO1xuICBsZXR0ZXItc3BhY2luZzogMC4wNmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4ud29yay1kZXRhaWwtaGVyb19fYnJlYWRjcnVtYiB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1zb2Z0LWJsdWUpO1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW46IDAgMCAwLjc1cmVtO1xufVxuXG4ud29yay1kZXRhaWwtaGVyb19fYnJlYWRjcnVtYiBzcGFuLFxuLndvcmstZGV0YWlsLXNlY3Rpb25fX2xhYmVsIHNwYW4ge1xuICBtYXJnaW4taW5saW5lOiAwLjM1cmVtO1xufVxuXG4ud29yay1kZXRhaWwtaGVybyBoMSB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XG4gIGZvbnQtc2l6ZTogdmFyKC0tdGV4dC1kaXNwbGF5KTtcbiAgbGluZS1oZWlnaHQ6IHZhcigtLWxlYWRpbmctdGlnaHQpO1xuICBtYXJnaW46IDA7XG59XG5cbi53b3JrLWRldGFpbC1oZXJvX19zdW1tYXJ5IHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXNvZnQtYmx1ZSk7XG4gIGZvbnQtc2l6ZTogdmFyKC0tdGV4dC1sZyk7XG4gIGxpbmUtaGVpZ2h0OiB2YXIoLS1sZWFkaW5nLWhlYWRpbmcpO1xuICBtYXJnaW46IDAuOHJlbSAwIDA7XG4gIG1heC13aWR0aDogNDZyZW07XG59XG5cbi53b3JrLWRldGFpbC1oZXJvX190ZWNobm9sb2dpZXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGdhcDogMC42NXJlbTtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luOiAxLjI1cmVtIDAgMDtcbiAgcGFkZGluZzogMDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG59XG5cbi53b3JrLWRldGFpbC1oZXJvX190ZWNobm9sb2dpZXMgbGkge1xuICBib3JkZXI6IDFweCBzb2xpZCBjb2xvci1taXgoaW4gc3JnYiwgdmFyKC0tY29sb3Itc29mdC1ibHVlKSA0NSUsIHRyYW5zcGFyZW50KTtcbiAgYm9yZGVyLXJhZGl1czogMC4zNXJlbTtcbiAgY29sb3I6IHZhcigtLWNvbG9yLW5ldXRyYWwtMTAwKTtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtYm9keSk7XG4gIGZvbnQtc2l6ZTogdmFyKC0tdGV4dC1zbSk7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICBwYWRkaW5nOiAwLjM1cmVtIDAuNzVyZW07XG59XG5cbi53b3JrLWRldGFpbC1jb250ZW50IHtcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3Itd2FybS13aGl0ZSk7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbiAgcGFkZGluZzogY2xhbXAoMnJlbSwgNHZ3LCAzcmVtKSBjbGFtcCgxLjVyZW0sIDR2dywgMy41cmVtKSBjbGFtcCgzcmVtLCA2dncsIDVyZW0pO1xufVxuXG4ud29yay1kZXRhaWwtY292ZXIge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBhc3BlY3QtcmF0aW86IDMuMiAvIDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXdhcm0td2hpdGUpO1xuICBiYWNrZ3JvdW5kLWltYWdlOlxuICAgIGxpbmVhci1ncmFkaWVudCgxNTdkZWcsIHRyYW5zcGFyZW50IGNhbGMoNTAlIC0gMXB4KSwgY29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLWNvbG9yLW5ldXRyYWwtNTAwKSA1MCUsIHRyYW5zcGFyZW50KSA1MCUsIHRyYW5zcGFyZW50IGNhbGMoNTAlICsgMXB4KSksXG4gICAgbGluZWFyLWdyYWRpZW50KDIzZGVnLCB0cmFuc3BhcmVudCBjYWxjKDUwJSAtIDFweCksIGNvbG9yLW1peChpbiBzcmdiLCB2YXIoLS1jb2xvci1uZXV0cmFsLTUwMCkgNTAlLCB0cmFuc3BhcmVudCkgNTAlLCB0cmFuc3BhcmVudCBjYWxjKDUwJSArIDFweCkpO1xuICBib3JkZXI6IDFyZW0gc29saWQgdmFyKC0tY29sb3Itc29mdC1ibHVlKTtcbiAgYm9yZGVyLXJhZGl1czogMC44cmVtO1xuICBjb2xvcjogdmFyKC0tY29sb3ItbmV1dHJhbC01MDApO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLndvcmstZGV0YWlsLWNvdmVyIHNwYW4sXG4ud29yay1kZXRhaWwtbWVkaWEgc3BhbiB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLXdhcm0td2hpdGUpO1xuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1tb25vKTtcbiAgZm9udC1zaXplOiB2YXIoLS10ZXh0LXhzKTtcbiAgcGFkZGluZzogMC40cmVtIDAuNnJlbTtcbn1cblxuLndvcmstZGV0YWlsLWxheW91dCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogY2xhbXAoMnJlbSwgNnZ3LCA1cmVtKTtcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJzdG9yeSBtZXRhXCI7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDAsIDFmcikgbWlubWF4KDE1cmVtLCAyMXJlbSk7XG4gIG1hcmdpbi10b3A6IDIuMjVyZW07XG59XG5cbi53b3JrLWRldGFpbC1zdG9yeSB7XG4gIGdyaWQtYXJlYTogc3Rvcnk7XG4gIG1pbi13aWR0aDogMDtcbn1cblxuLndvcmstZGV0YWlsLXNlY3Rpb24ge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tY29sb3ItYm9yZGVyLWRlZmF1bHQpO1xuICBwYWRkaW5nOiAwIDAgMS4yNXJlbTtcbiAgbWFyZ2luOiAwIDAgMS4yNXJlbTtcbn1cblxuLndvcmstZGV0YWlsLXNlY3Rpb25fX2xhYmVsIHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXNvZnQtYmx1ZSk7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbjogMCAwIDAuNTVyZW07XG59XG5cbi53b3JrLWRldGFpbC1zZWN0aW9uIGgyIHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xuICBmb250LXNpemU6IHZhcigtLXRleHQtaDMpO1xuICBtYXJnaW46IDA7XG59XG5cbi53b3JrLWRldGFpbC1zZWN0aW9uX19kZXNjcmlwdGlvbiB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1uZXV0cmFsLTUwMCk7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LW1vbm8pO1xuICBmb250LXNpemU6IHZhcigtLXRleHQteHMpO1xuICBtYXJnaW46IDAuNXJlbSAwIDA7XG4gIG1heC13aWR0aDogNDlyZW07XG59XG5cbi53b3JrLWRldGFpbC1tZWRpYSB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGFzcGVjdC1yYXRpbzogMTYgLyA5O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1zb2Z0LWJsdWUpO1xuICBib3JkZXItcmFkaXVzOiAwLjY1cmVtO1xuICBjb2xvcjogY29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLWNvbG9yLXByaW1hcnkpIDYwJSwgdHJhbnNwYXJlbnQpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLndvcmstZGV0YWlsLW1lZGlhLS1hcmNoaXRlY3R1cmUge1xuICBtYXgtd2lkdGg6IDM0cmVtO1xufVxuXG4ud29yay1kZXRhaWwtbWVkaWEtZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogMC43NXJlbTtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgbWlubWF4KDAsIDFmcikpO1xufVxuXG4ud29yay1kZXRhaWwtbWVkaWEtZ3JpZCAud29yay1kZXRhaWwtbWVkaWE6Zmlyc3QtY2hpbGQge1xuICBncmlkLWNvbHVtbjogMSAvIC0xO1xufVxuXG4ucHJvamVjdC1tZXRhIHtcbiAgYWxpZ24tc2VsZjogc3RhcnQ7XG4gIGJhY2tncm91bmQ6IGNvbG9yLW1peChpbiBzcmdiLCB2YXIoLS1jb2xvci13aGl0ZSkgMzglLCB2YXIoLS1jb2xvci1zb2Z0LWJsdWUpKTtcbiAgYm9yZGVyLXJhZGl1czogMC43NXJlbTtcbiAgZ3JpZC1hcmVhOiBtZXRhO1xuICBwYWRkaW5nOiAxcmVtIDEuMjVyZW07XG59XG5cbi5wcm9qZWN0LW1ldGEgZGwge1xuICBtYXJnaW46IDA7XG59XG5cbi5wcm9qZWN0LW1ldGFfX2l0ZW0ge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgY29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLWNvbG9yLXByaW1hcnkpIDEyJSwgdHJhbnNwYXJlbnQpO1xuICBwYWRkaW5nOiAwLjdyZW0gMDtcbn1cblxuLnByb2plY3QtbWV0YV9faXRlbTpmaXJzdC1jaGlsZCB7XG4gIHBhZGRpbmctdG9wOiAwO1xufVxuXG4ucHJvamVjdC1tZXRhX19pdGVtOmxhc3QtY2hpbGQge1xuICBib3JkZXItYm90dG9tOiAwO1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbn1cblxuLnByb2plY3QtbWV0YSBkdCB7XG4gIGNvbG9yOiBjb2xvci1taXgoaW4gc3JnYiwgdmFyKC0tY29sb3ItcHJpbWFyeSkgNjUlLCB0cmFuc3BhcmVudCk7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LW1vbm8pO1xuICBmb250LXNpemU6IHZhcigtLXRleHQteHMpO1xuICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4ucHJvamVjdC1tZXRhIGRkIHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xuICBmb250LXNpemU6IHZhcigtLXRleHQtYmFzZSk7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbjogMC4xNXJlbSAwIDA7XG4gIG92ZXJmbG93LXdyYXA6IGFueXdoZXJlO1xufVxuXG4ud29yay1kZXRhaWwtbm90LWZvdW5kIGE6Zm9jdXMtdmlzaWJsZSB7XG4gIG91dGxpbmU6IDNweCBzb2xpZCB2YXIoLS1jb2xvci1hY2NlbnQpO1xuICBvdXRsaW5lLW9mZnNldDogNHB4O1xufVxuXG4ud29yay1kZXRhaWwtbm90LWZvdW5kIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3Itd2FybS13aGl0ZSk7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbiAgbWluLWhlaWdodDogNTB2aDtcbiAgcGFkZGluZzogNXJlbSBjbGFtcCgxLjVyZW0sIDR2dywgMy41cmVtKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ud29yay1kZXRhaWwtbm90LWZvdW5kIGEge1xuICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA0OHJlbSkge1xuICAud29yay1kZXRhaWwtaGVybyBoMSB7XG4gICAgZm9udC1zaXplOiBjbGFtcCgyLjVyZW0sIDd2dywgNC4yNXJlbSk7XG4gIH1cblxuICAud29yay1kZXRhaWwtY292ZXIge1xuICAgIGFzcGVjdC1yYXRpbzogMi4zIC8gMTtcbiAgICBib3JkZXItd2lkdGg6IDAuN3JlbTtcbiAgfVxuXG4gIC53b3JrLWRldGFpbC1sYXlvdXQge1xuICAgIGdhcDogMS41cmVtO1xuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwibWV0YVwiIFwic3RvcnlcIjtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgwLCAxZnIpO1xuICB9XG5cbiAgLnByb2plY3QtbWV0YSB7XG4gICAgbWF4LXdpZHRoOiBub25lO1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAzNnJlbSkge1xuICAud29yay1kZXRhaWwtaGVybyxcbiAgLndvcmstZGV0YWlsLWNvbnRlbnQge1xuICAgIHBhZGRpbmctaW5saW5lOiAxLjI1cmVtO1xuICB9XG5cbiAgLndvcmstZGV0YWlsLWhlcm8gaDEge1xuICAgIGZvbnQtc2l6ZTogY2xhbXAoMi4yNXJlbSwgMTB2dywgMy41cmVtKTtcbiAgfVxuXG4gIC53b3JrLWRldGFpbC1jb3ZlciB7XG4gICAgYXNwZWN0LXJhdGlvOiAxNiAvIDk7XG4gICAgYm9yZGVyLXdpZHRoOiAwLjQ1cmVtO1xuICB9XG5cbiAgLndvcmstZGV0YWlsLW1lZGlhLWdyaWQge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICB9XG5cbiAgLndvcmstZGV0YWlsLW1lZGlhLWdyaWQgLndvcmstZGV0YWlsLW1lZGlhOmZpcnN0LWNoaWxkIHtcbiAgICBncmlkLWNvbHVtbjogYXV0bztcbiAgfVxufVxuXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 5397:
/*!*********************************************!*\
  !*** ./src/app/tech/work/work.component.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WorkComponent: () => (/* binding */ WorkComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);




const _c0 = a0 => ["/work", a0];
function WorkComponent_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WorkComponent_button_10_Template_button_click_0_listener() {
      const filter_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.setFilter(filter_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const filter_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("work-filters__button--active", ctx_r2.activeFilter === filter_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-pressed", ctx_r2.activeFilter === filter_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", filter_r2, " ");
  }
}
function WorkComponent_a_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 13)(1, "div", 14)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Project image placeholder");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 15)(5, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx_r2.featuredProject.slug));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.featuredProject.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.featuredProject.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.featuredProject.description);
  }
}
function WorkComponent_a_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 19)(1, "div", 20)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Project image placeholder");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 15)(5, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const project_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, project_r4.slug));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r4.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r4.title);
  }
}
function WorkComponent_p_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No projects in this category yet. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
class WorkComponent {
  constructor() {
    this.filters = ['All Work', 'Client Work', 'Personal'];
    this.activeFilter = 'All Work';
    this.featuredProject = {
      slug: 'compliance-management-platform',
      category: 'Client work · Hibera',
      title: 'Compliance Management Platform',
      description: 'Designing and developing a platform to make compliance workflows easier to manage.',
      scope: 'Client Work'
    };
    this.projects = [{
      slug: 'my-homelab',
      category: 'Personal · Infrastructure',
      title: 'My Homelab',
      scope: 'Personal'
    }, {
      slug: 'monitoring-platform',
      category: 'Personal · Building in public',
      title: 'Monitoring Platform',
      scope: 'Personal'
    }, {
      slug: 'personal-portfolio',
      category: 'Personal · Web development',
      title: 'Personal Portfolio',
      scope: 'Personal'
    }];
  }
  setFilter(filter) {
    this.activeFilter = filter;
  }
  get showFeaturedProject() {
    return this.activeFilter === 'All Work' || this.activeFilter === this.featuredProject.scope;
  }
  get filteredProjects() {
    return this.activeFilter === 'All Work' ? this.projects : this.projects.filter(project => project.scope === this.activeFilter);
  }
  static {
    this.ɵfac = function WorkComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || WorkComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: WorkComponent,
      selectors: [["app-work"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 15,
      vars: 4,
      consts: [[1, "work-page"], ["aria-labelledby", "work-heading", 1, "work-hero"], [1, "work-hero__inner"], ["id", "work-heading"], ["aria-label", "Project portfolio", 1, "work-listing"], [1, "work-listing__inner"], ["role", "group", "aria-label", "Filter projects", 1, "work-filters"], ["type", "button", "class", "work-filters__button", 3, "work-filters__button--active", "click", 4, "ngFor", "ngForOf"], ["class", "work-card work-card--featured", 3, "routerLink", 4, "ngIf"], ["aria-live", "polite", 1, "work-grid"], ["class", "work-card", 3, "routerLink", 4, "ngFor", "ngForOf"], ["class", "work-listing__empty", 4, "ngIf"], ["type", "button", 1, "work-filters__button", 3, "click"], [1, "work-card", "work-card--featured", 3, "routerLink"], ["role", "img", "aria-label", "Featured project image placeholder", 1, "work-card__image", "work-card__image--wide"], [1, "work-card__content"], [1, "work-card__category"], [1, "work-card__title"], [1, "work-card__description"], [1, "work-card", 3, "routerLink"], ["role", "img", "aria-label", "Project image placeholder", 1, "work-card__image"], [1, "work-listing__empty"]],
      template: function WorkComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0)(1, "header", 1)(2, "div", 2)(3, "h1", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Things I\u2019ve Built.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "A collection of software products, client projects and experiments. Each one taught me something different about building better systems.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "section", 4)(8, "div", 5)(9, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, WorkComponent_button_10_Template, 2, 4, "button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, WorkComponent_a_11_Template, 11, 6, "a", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, WorkComponent_a_13_Template, 9, 5, "a", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, WorkComponent_p_14_Template, 2, 0, "p", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.filters);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showFeaturedProject);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.filteredProjects);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showFeaturedProject && ctx.filteredProjects.length === 0);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
      styles: [".work-hero[_ngcontent-%COMP%] {\n  background: var(--color-primary);\n  color: var(--color-white);\n  padding: clamp(3.5rem, 8vw, 7rem) clamp(1.5rem, 4vw, 3.5rem);\n}\n\n.work-hero__inner[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  max-width: 76rem;\n}\n\n.work-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: var(--color-white);\n  font-size: var(--text-display);\n  line-height: var(--leading-tight);\n  margin: 0;\n}\n\n.work-hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--color-soft-blue);\n  font-size: var(--text-lg);\n  line-height: var(--leading-heading);\n  margin: 0.75rem 0 0;\n  max-width: 39rem;\n}\n\n.work-listing[_ngcontent-%COMP%] {\n  background: var(--color-warm-white);\n  color: var(--color-primary);\n  padding: clamp(2.5rem, 5vw, 4rem) clamp(1.5rem, 4vw, 3.5rem) clamp(4rem, 8vw, 7rem);\n}\n\n.work-listing__inner[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  max-width: 76rem;\n}\n\n.work-filters[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.65rem;\n  margin-bottom: 2.5rem;\n}\n\n.work-filters__button[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 2px solid var(--color-primary);\n  border-radius: 999px;\n  color: var(--color-primary);\n  cursor: pointer;\n  font: 500 var(--text-sm) var(--font-body);\n  padding: 0.4rem 0.9rem;\n  transition: background-color 160ms ease, color 160ms ease, transform 160ms ease;\n}\n\n.work-filters__button[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n}\n\n.work-filters__button--active[_ngcontent-%COMP%], \n.work-filters__button--active[_ngcontent-%COMP%]:hover {\n  background: var(--color-primary);\n  color: var(--color-white);\n}\n\n.work-filters__button[_ngcontent-%COMP%]:focus-visible, \n.work-card[_ngcontent-%COMP%]:focus-visible {\n  outline: 3px solid var(--color-accent);\n  outline-offset: 4px;\n}\n\n.work-card[_ngcontent-%COMP%] {\n  background: color-mix(in srgb, var(--color-white) 38%, var(--color-soft-blue));\n  border: 1px solid color-mix(in srgb, var(--color-primary) 9%, transparent);\n  border-radius: 0.75rem;\n  color: var(--color-primary);\n  display: block;\n  overflow: hidden;\n  padding: 0.75rem;\n  transition: box-shadow 180ms ease, transform 180ms ease;\n}\n\n.work-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0.75rem 1.75rem color-mix(in srgb, var(--color-primary) 16%, transparent);\n  color: var(--color-primary);\n  transform: translateY(-3px);\n}\n\n.work-card--featured[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n\n.work-card__image[_ngcontent-%COMP%] {\n  align-items: center;\n  aspect-ratio: 16/9;\n  background-color: var(--color-warm-white);\n  background-image: linear-gradient(153deg, transparent calc(50% - 1px), color-mix(in srgb, var(--color-neutral-500) 48%, transparent) 50%, transparent calc(50% + 1px)), linear-gradient(27deg, transparent calc(50% - 1px), color-mix(in srgb, var(--color-neutral-500) 48%, transparent) 50%, transparent calc(50% + 1px));\n  border-radius: 0.4rem;\n  color: var(--color-neutral-500);\n  display: flex;\n  justify-content: center;\n  overflow: hidden;\n}\n\n.work-card__image--wide[_ngcontent-%COMP%] {\n  aspect-ratio: 3.2/1;\n}\n\n.work-card__image[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  align-self: center;\n  background: var(--color-warm-white);\n  font-family: var(--font-mono);\n  font-size: var(--text-xs);\n  padding: 0.35rem 0.5rem;\n}\n\n.work-card__content[_ngcontent-%COMP%] {\n  padding: 0.75rem 0.25rem 0.25rem;\n}\n\n.work-card__category[_ngcontent-%COMP%] {\n  color: color-mix(in srgb, var(--color-primary) 62%, transparent);\n  font-family: var(--font-mono);\n  font-size: var(--text-xs);\n  letter-spacing: 0.04em;\n  margin: 0 0 0.3rem;\n  text-transform: uppercase;\n}\n\n.work-card__title[_ngcontent-%COMP%] {\n  color: var(--color-primary);\n  font-size: var(--text-h4);\n  margin: 0;\n}\n\n.work-card__description[_ngcontent-%COMP%], \n.work-listing__empty[_ngcontent-%COMP%] {\n  color: var(--color-neutral-700);\n  font-family: var(--font-mono);\n  font-size: var(--text-xs);\n  margin: 0.4rem 0 0;\n}\n\n.work-grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: clamp(1rem, 3vw, 2rem);\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n}\n\n@media (max-width: 48rem) {\n  .work-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .work-card__image--wide[_ngcontent-%COMP%] {\n    aspect-ratio: 2.5/1;\n  }\n}\n@media (max-width: 36rem) {\n  .work-hero[_ngcontent-%COMP%], \n   .work-listing[_ngcontent-%COMP%] {\n    padding-inline: 1.25rem;\n  }\n  .work-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: clamp(2.5rem, 12vw, 4rem);\n  }\n  .work-filters[_ngcontent-%COMP%] {\n    gap: 0.5rem;\n    margin-bottom: 1.75rem;\n  }\n  .work-filters__button[_ngcontent-%COMP%] {\n    font-size: var(--text-xs);\n    padding: 0.4rem 0.7rem;\n  }\n  .work-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .work-card__image--wide[_ngcontent-%COMP%] {\n    aspect-ratio: 16/9;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .work-filters__button[_ngcontent-%COMP%], \n   .work-card[_ngcontent-%COMP%] {\n    transition: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndvcmsuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsNERBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7RUFDQSw4QkFBQTtFQUNBLGlDQUFBO0VBQ0EsU0FBQTtBQUNGOztBQUVBO0VBQ0UsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLG1DQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsbUNBQUE7RUFDQSwyQkFBQTtFQUNBLG1GQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx1QkFBQTtFQUNBLHNDQUFBO0VBQ0Esb0JBQUE7RUFDQSwyQkFBQTtFQUNBLGVBQUE7RUFDQSx5Q0FBQTtFQUNBLHNCQUFBO0VBQ0EsK0VBQUE7QUFDRjs7QUFFQTtFQUNFLDJCQUFBO0FBQ0Y7O0FBRUE7O0VBRUUsZ0NBQUE7RUFDQSx5QkFBQTtBQUNGOztBQUVBOztFQUVFLHNDQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLDhFQUFBO0VBQ0EsMEVBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1REFBQTtBQUNGOztBQUVBO0VBQ0UsdUZBQUE7RUFDQSwyQkFBQTtFQUNBLDJCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlDQUFBO0VBQ0EsMlRBQ0U7RUFFRixxQkFBQTtFQUNBLCtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUFERjs7QUFJQTtFQUNFLG1CQUFBO0FBREY7O0FBSUE7RUFDRSxrQkFBQTtFQUNBLG1DQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLHVCQUFBO0FBREY7O0FBSUE7RUFDRSxnQ0FBQTtBQURGOztBQUlBO0VBQ0UsZ0VBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBREY7O0FBSUE7RUFDRSwyQkFBQTtFQUNBLHlCQUFBO0VBQ0EsU0FBQTtBQURGOztBQUlBOztFQUVFLCtCQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FBREY7O0FBSUE7RUFDRSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxnREFBQTtBQURGOztBQUlBO0VBQ0U7SUFDRSxnREFBQTtFQURGO0VBSUE7SUFDRSxtQkFBQTtFQUZGO0FBQ0Y7QUFLQTtFQUNFOztJQUVFLHVCQUFBO0VBSEY7RUFNQTtJQUNFLG9DQUFBO0VBSkY7RUFPQTtJQUNFLFdBQUE7SUFDQSxzQkFBQTtFQUxGO0VBUUE7SUFDRSx5QkFBQTtJQUNBLHNCQUFBO0VBTkY7RUFTQTtJQUNFLDBCQUFBO0VBUEY7RUFVQTtJQUNFLGtCQUFBO0VBUkY7QUFDRjtBQVdBO0VBQ0U7O0lBRUUsZ0JBQUE7RUFURjtBQUNGIiwiZmlsZSI6IndvcmsuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud29yay1oZXJvIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XG4gIHBhZGRpbmc6IGNsYW1wKDMuNXJlbSwgOHZ3LCA3cmVtKSBjbGFtcCgxLjVyZW0sIDR2dywgMy41cmVtKTtcbn1cblxuLndvcmstaGVyb19faW5uZXIge1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWF4LXdpZHRoOiA3NnJlbTtcbn1cblxuLndvcmstaGVybyBoMSB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XG4gIGZvbnQtc2l6ZTogdmFyKC0tdGV4dC1kaXNwbGF5KTtcbiAgbGluZS1oZWlnaHQ6IHZhcigtLWxlYWRpbmctdGlnaHQpO1xuICBtYXJnaW46IDA7XG59XG5cbi53b3JrLWhlcm8gcCB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1zb2Z0LWJsdWUpO1xuICBmb250LXNpemU6IHZhcigtLXRleHQtbGcpO1xuICBsaW5lLWhlaWdodDogdmFyKC0tbGVhZGluZy1oZWFkaW5nKTtcbiAgbWFyZ2luOiAwLjc1cmVtIDAgMDtcbiAgbWF4LXdpZHRoOiAzOXJlbTtcbn1cblxuLndvcmstbGlzdGluZyB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLXdhcm0td2hpdGUpO1xuICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG4gIHBhZGRpbmc6IGNsYW1wKDIuNXJlbSwgNXZ3LCA0cmVtKSBjbGFtcCgxLjVyZW0sIDR2dywgMy41cmVtKSBjbGFtcCg0cmVtLCA4dncsIDdyZW0pO1xufVxuXG4ud29yay1saXN0aW5nX19pbm5lciB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXgtd2lkdGg6IDc2cmVtO1xufVxuXG4ud29yay1maWx0ZXJzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBnYXA6IDAuNjVyZW07XG4gIG1hcmdpbi1ib3R0b206IDIuNXJlbTtcbn1cblxuLndvcmstZmlsdGVyc19fYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNvbG9yLXByaW1hcnkpO1xuICBib3JkZXItcmFkaXVzOiA5OTlweDtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQ6IDUwMCB2YXIoLS10ZXh0LXNtKSB2YXIoLS1mb250LWJvZHkpO1xuICBwYWRkaW5nOiAwLjRyZW0gMC45cmVtO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDE2MG1zIGVhc2UsIGNvbG9yIDE2MG1zIGVhc2UsIHRyYW5zZm9ybSAxNjBtcyBlYXNlO1xufVxuXG4ud29yay1maWx0ZXJzX19idXR0b246aG92ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XG59XG5cbi53b3JrLWZpbHRlcnNfX2J1dHRvbi0tYWN0aXZlLFxuLndvcmstZmlsdGVyc19fYnV0dG9uLS1hY3RpdmU6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlKTtcbn1cblxuLndvcmstZmlsdGVyc19fYnV0dG9uOmZvY3VzLXZpc2libGUsXG4ud29yay1jYXJkOmZvY3VzLXZpc2libGUge1xuICBvdXRsaW5lOiAzcHggc29saWQgdmFyKC0tY29sb3ItYWNjZW50KTtcbiAgb3V0bGluZS1vZmZzZXQ6IDRweDtcbn1cblxuLndvcmstY2FyZCB7XG4gIGJhY2tncm91bmQ6IGNvbG9yLW1peChpbiBzcmdiLCB2YXIoLS1jb2xvci13aGl0ZSkgMzglLCB2YXIoLS1jb2xvci1zb2Z0LWJsdWUpKTtcbiAgYm9yZGVyOiAxcHggc29saWQgY29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLWNvbG9yLXByaW1hcnkpIDklLCB0cmFuc3BhcmVudCk7XG4gIGJvcmRlci1yYWRpdXM6IDAuNzVyZW07XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBhZGRpbmc6IDAuNzVyZW07XG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMTgwbXMgZWFzZSwgdHJhbnNmb3JtIDE4MG1zIGVhc2U7XG59XG5cbi53b3JrLWNhcmQ6aG92ZXIge1xuICBib3gtc2hhZG93OiAwIDAuNzVyZW0gMS43NXJlbSBjb2xvci1taXgoaW4gc3JnYiwgdmFyKC0tY29sb3ItcHJpbWFyeSkgMTYlLCB0cmFuc3BhcmVudCk7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xufVxuXG4ud29yay1jYXJkLS1mZWF0dXJlZCB7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG5cbi53b3JrLWNhcmRfX2ltYWdlIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYXNwZWN0LXJhdGlvOiAxNiAvIDk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXdhcm0td2hpdGUpO1xuICBiYWNrZ3JvdW5kLWltYWdlOlxuICAgIGxpbmVhci1ncmFkaWVudCgxNTNkZWcsIHRyYW5zcGFyZW50IGNhbGMoNTAlIC0gMXB4KSwgY29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLWNvbG9yLW5ldXRyYWwtNTAwKSA0OCUsIHRyYW5zcGFyZW50KSA1MCUsIHRyYW5zcGFyZW50IGNhbGMoNTAlICsgMXB4KSksXG4gICAgbGluZWFyLWdyYWRpZW50KDI3ZGVnLCB0cmFuc3BhcmVudCBjYWxjKDUwJSAtIDFweCksIGNvbG9yLW1peChpbiBzcmdiLCB2YXIoLS1jb2xvci1uZXV0cmFsLTUwMCkgNDglLCB0cmFuc3BhcmVudCkgNTAlLCB0cmFuc3BhcmVudCBjYWxjKDUwJSArIDFweCkpO1xuICBib3JkZXItcmFkaXVzOiAwLjRyZW07XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1uZXV0cmFsLTUwMCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ud29yay1jYXJkX19pbWFnZS0td2lkZSB7XG4gIGFzcGVjdC1yYXRpbzogMy4yIC8gMTtcbn1cblxuLndvcmstY2FyZF9faW1hZ2Ugc3BhbiB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3Itd2FybS13aGl0ZSk7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LW1vbm8pO1xuICBmb250LXNpemU6IHZhcigtLXRleHQteHMpO1xuICBwYWRkaW5nOiAwLjM1cmVtIDAuNXJlbTtcbn1cblxuLndvcmstY2FyZF9fY29udGVudCB7XG4gIHBhZGRpbmc6IDAuNzVyZW0gMC4yNXJlbSAwLjI1cmVtO1xufVxuXG4ud29yay1jYXJkX19jYXRlZ29yeSB7XG4gIGNvbG9yOiBjb2xvci1taXgoaW4gc3JnYiwgdmFyKC0tY29sb3ItcHJpbWFyeSkgNjIlLCB0cmFuc3BhcmVudCk7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LW1vbm8pO1xuICBmb250LXNpemU6IHZhcigtLXRleHQteHMpO1xuICBsZXR0ZXItc3BhY2luZzogMC4wNGVtO1xuICBtYXJnaW46IDAgMCAwLjNyZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi53b3JrLWNhcmRfX3RpdGxlIHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xuICBmb250LXNpemU6IHZhcigtLXRleHQtaDQpO1xuICBtYXJnaW46IDA7XG59XG5cbi53b3JrLWNhcmRfX2Rlc2NyaXB0aW9uLFxuLndvcmstbGlzdGluZ19fZW1wdHkge1xuICBjb2xvcjogdmFyKC0tY29sb3ItbmV1dHJhbC03MDApO1xuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1tb25vKTtcbiAgZm9udC1zaXplOiB2YXIoLS10ZXh0LXhzKTtcbiAgbWFyZ2luOiAwLjRyZW0gMCAwO1xufVxuXG4ud29yay1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiBjbGFtcCgxcmVtLCAzdncsIDJyZW0pO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCBtaW5tYXgoMCwgMWZyKSk7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA0OHJlbSkge1xuICAud29yay1ncmlkIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBtaW5tYXgoMCwgMWZyKSk7XG4gIH1cblxuICAud29yay1jYXJkX19pbWFnZS0td2lkZSB7XG4gICAgYXNwZWN0LXJhdGlvOiAyLjUgLyAxO1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAzNnJlbSkge1xuICAud29yay1oZXJvLFxuICAud29yay1saXN0aW5nIHtcbiAgICBwYWRkaW5nLWlubGluZTogMS4yNXJlbTtcbiAgfVxuXG4gIC53b3JrLWhlcm8gaDEge1xuICAgIGZvbnQtc2l6ZTogY2xhbXAoMi41cmVtLCAxMnZ3LCA0cmVtKTtcbiAgfVxuXG4gIC53b3JrLWZpbHRlcnMge1xuICAgIGdhcDogMC41cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDEuNzVyZW07XG4gIH1cblxuICAud29yay1maWx0ZXJzX19idXR0b24ge1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tdGV4dC14cyk7XG4gICAgcGFkZGluZzogMC40cmVtIDAuN3JlbTtcbiAgfVxuXG4gIC53b3JrLWdyaWQge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICB9XG5cbiAgLndvcmstY2FyZF9faW1hZ2UtLXdpZGUge1xuICAgIGFzcGVjdC1yYXRpbzogMTYgLyA5O1xuICB9XG59XG5cbkBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKSB7XG4gIC53b3JrLWZpbHRlcnNfX2J1dHRvbixcbiAgLndvcmstY2FyZCB7XG4gICAgdHJhbnNpdGlvbjogbm9uZTtcbiAgfVxufVxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdGVjaC93b3JrL3dvcmsuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsNERBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7RUFDQSw4QkFBQTtFQUNBLGlDQUFBO0VBQ0EsU0FBQTtBQUNGOztBQUVBO0VBQ0UsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLG1DQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsbUNBQUE7RUFDQSwyQkFBQTtFQUNBLG1GQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx1QkFBQTtFQUNBLHNDQUFBO0VBQ0Esb0JBQUE7RUFDQSwyQkFBQTtFQUNBLGVBQUE7RUFDQSx5Q0FBQTtFQUNBLHNCQUFBO0VBQ0EsK0VBQUE7QUFDRjs7QUFFQTtFQUNFLDJCQUFBO0FBQ0Y7O0FBRUE7O0VBRUUsZ0NBQUE7RUFDQSx5QkFBQTtBQUNGOztBQUVBOztFQUVFLHNDQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLDhFQUFBO0VBQ0EsMEVBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1REFBQTtBQUNGOztBQUVBO0VBQ0UsdUZBQUE7RUFDQSwyQkFBQTtFQUNBLDJCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlDQUFBO0VBQ0EsMlRBQ0U7RUFFRixxQkFBQTtFQUNBLCtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUFERjs7QUFJQTtFQUNFLG1CQUFBO0FBREY7O0FBSUE7RUFDRSxrQkFBQTtFQUNBLG1DQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLHVCQUFBO0FBREY7O0FBSUE7RUFDRSxnQ0FBQTtBQURGOztBQUlBO0VBQ0UsZ0VBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBREY7O0FBSUE7RUFDRSwyQkFBQTtFQUNBLHlCQUFBO0VBQ0EsU0FBQTtBQURGOztBQUlBOztFQUVFLCtCQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FBREY7O0FBSUE7RUFDRSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxnREFBQTtBQURGOztBQUlBO0VBQ0U7SUFDRSxnREFBQTtFQURGO0VBSUE7SUFDRSxtQkFBQTtFQUZGO0FBQ0Y7QUFLQTtFQUNFOztJQUVFLHVCQUFBO0VBSEY7RUFNQTtJQUNFLG9DQUFBO0VBSkY7RUFPQTtJQUNFLFdBQUE7SUFDQSxzQkFBQTtFQUxGO0VBUUE7SUFDRSx5QkFBQTtJQUNBLHNCQUFBO0VBTkY7RUFTQTtJQUNFLDBCQUFBO0VBUEY7RUFVQTtJQUNFLGtCQUFBO0VBUkY7QUFDRjtBQVdBO0VBQ0U7O0lBRUUsZ0JBQUE7RUFURjtBQUNGO0FBQ0Esd3dQQUF3d1AiLCJzb3VyY2VzQ29udGVudCI6WyIud29yay1oZXJvIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XG4gIHBhZGRpbmc6IGNsYW1wKDMuNXJlbSwgOHZ3LCA3cmVtKSBjbGFtcCgxLjVyZW0sIDR2dywgMy41cmVtKTtcbn1cblxuLndvcmstaGVyb19faW5uZXIge1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWF4LXdpZHRoOiA3NnJlbTtcbn1cblxuLndvcmstaGVybyBoMSB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XG4gIGZvbnQtc2l6ZTogdmFyKC0tdGV4dC1kaXNwbGF5KTtcbiAgbGluZS1oZWlnaHQ6IHZhcigtLWxlYWRpbmctdGlnaHQpO1xuICBtYXJnaW46IDA7XG59XG5cbi53b3JrLWhlcm8gcCB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1zb2Z0LWJsdWUpO1xuICBmb250LXNpemU6IHZhcigtLXRleHQtbGcpO1xuICBsaW5lLWhlaWdodDogdmFyKC0tbGVhZGluZy1oZWFkaW5nKTtcbiAgbWFyZ2luOiAwLjc1cmVtIDAgMDtcbiAgbWF4LXdpZHRoOiAzOXJlbTtcbn1cblxuLndvcmstbGlzdGluZyB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLXdhcm0td2hpdGUpO1xuICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG4gIHBhZGRpbmc6IGNsYW1wKDIuNXJlbSwgNXZ3LCA0cmVtKSBjbGFtcCgxLjVyZW0sIDR2dywgMy41cmVtKSBjbGFtcCg0cmVtLCA4dncsIDdyZW0pO1xufVxuXG4ud29yay1saXN0aW5nX19pbm5lciB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXgtd2lkdGg6IDc2cmVtO1xufVxuXG4ud29yay1maWx0ZXJzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBnYXA6IDAuNjVyZW07XG4gIG1hcmdpbi1ib3R0b206IDIuNXJlbTtcbn1cblxuLndvcmstZmlsdGVyc19fYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNvbG9yLXByaW1hcnkpO1xuICBib3JkZXItcmFkaXVzOiA5OTlweDtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQ6IDUwMCB2YXIoLS10ZXh0LXNtKSB2YXIoLS1mb250LWJvZHkpO1xuICBwYWRkaW5nOiAwLjRyZW0gMC45cmVtO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDE2MG1zIGVhc2UsIGNvbG9yIDE2MG1zIGVhc2UsIHRyYW5zZm9ybSAxNjBtcyBlYXNlO1xufVxuXG4ud29yay1maWx0ZXJzX19idXR0b246aG92ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XG59XG5cbi53b3JrLWZpbHRlcnNfX2J1dHRvbi0tYWN0aXZlLFxuLndvcmstZmlsdGVyc19fYnV0dG9uLS1hY3RpdmU6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlKTtcbn1cblxuLndvcmstZmlsdGVyc19fYnV0dG9uOmZvY3VzLXZpc2libGUsXG4ud29yay1jYXJkOmZvY3VzLXZpc2libGUge1xuICBvdXRsaW5lOiAzcHggc29saWQgdmFyKC0tY29sb3ItYWNjZW50KTtcbiAgb3V0bGluZS1vZmZzZXQ6IDRweDtcbn1cblxuLndvcmstY2FyZCB7XG4gIGJhY2tncm91bmQ6IGNvbG9yLW1peChpbiBzcmdiLCB2YXIoLS1jb2xvci13aGl0ZSkgMzglLCB2YXIoLS1jb2xvci1zb2Z0LWJsdWUpKTtcbiAgYm9yZGVyOiAxcHggc29saWQgY29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLWNvbG9yLXByaW1hcnkpIDklLCB0cmFuc3BhcmVudCk7XG4gIGJvcmRlci1yYWRpdXM6IDAuNzVyZW07XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBhZGRpbmc6IDAuNzVyZW07XG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMTgwbXMgZWFzZSwgdHJhbnNmb3JtIDE4MG1zIGVhc2U7XG59XG5cbi53b3JrLWNhcmQ6aG92ZXIge1xuICBib3gtc2hhZG93OiAwIDAuNzVyZW0gMS43NXJlbSBjb2xvci1taXgoaW4gc3JnYiwgdmFyKC0tY29sb3ItcHJpbWFyeSkgMTYlLCB0cmFuc3BhcmVudCk7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xufVxuXG4ud29yay1jYXJkLS1mZWF0dXJlZCB7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG5cbi53b3JrLWNhcmRfX2ltYWdlIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYXNwZWN0LXJhdGlvOiAxNiAvIDk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXdhcm0td2hpdGUpO1xuICBiYWNrZ3JvdW5kLWltYWdlOlxuICAgIGxpbmVhci1ncmFkaWVudCgxNTNkZWcsIHRyYW5zcGFyZW50IGNhbGMoNTAlIC0gMXB4KSwgY29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLWNvbG9yLW5ldXRyYWwtNTAwKSA0OCUsIHRyYW5zcGFyZW50KSA1MCUsIHRyYW5zcGFyZW50IGNhbGMoNTAlICsgMXB4KSksXG4gICAgbGluZWFyLWdyYWRpZW50KDI3ZGVnLCB0cmFuc3BhcmVudCBjYWxjKDUwJSAtIDFweCksIGNvbG9yLW1peChpbiBzcmdiLCB2YXIoLS1jb2xvci1uZXV0cmFsLTUwMCkgNDglLCB0cmFuc3BhcmVudCkgNTAlLCB0cmFuc3BhcmVudCBjYWxjKDUwJSArIDFweCkpO1xuICBib3JkZXItcmFkaXVzOiAwLjRyZW07XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1uZXV0cmFsLTUwMCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ud29yay1jYXJkX19pbWFnZS0td2lkZSB7XG4gIGFzcGVjdC1yYXRpbzogMy4yIC8gMTtcbn1cblxuLndvcmstY2FyZF9faW1hZ2Ugc3BhbiB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3Itd2FybS13aGl0ZSk7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LW1vbm8pO1xuICBmb250LXNpemU6IHZhcigtLXRleHQteHMpO1xuICBwYWRkaW5nOiAwLjM1cmVtIDAuNXJlbTtcbn1cblxuLndvcmstY2FyZF9fY29udGVudCB7XG4gIHBhZGRpbmc6IDAuNzVyZW0gMC4yNXJlbSAwLjI1cmVtO1xufVxuXG4ud29yay1jYXJkX19jYXRlZ29yeSB7XG4gIGNvbG9yOiBjb2xvci1taXgoaW4gc3JnYiwgdmFyKC0tY29sb3ItcHJpbWFyeSkgNjIlLCB0cmFuc3BhcmVudCk7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LW1vbm8pO1xuICBmb250LXNpemU6IHZhcigtLXRleHQteHMpO1xuICBsZXR0ZXItc3BhY2luZzogMC4wNGVtO1xuICBtYXJnaW46IDAgMCAwLjNyZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi53b3JrLWNhcmRfX3RpdGxlIHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xuICBmb250LXNpemU6IHZhcigtLXRleHQtaDQpO1xuICBtYXJnaW46IDA7XG59XG5cbi53b3JrLWNhcmRfX2Rlc2NyaXB0aW9uLFxuLndvcmstbGlzdGluZ19fZW1wdHkge1xuICBjb2xvcjogdmFyKC0tY29sb3ItbmV1dHJhbC03MDApO1xuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1tb25vKTtcbiAgZm9udC1zaXplOiB2YXIoLS10ZXh0LXhzKTtcbiAgbWFyZ2luOiAwLjRyZW0gMCAwO1xufVxuXG4ud29yay1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiBjbGFtcCgxcmVtLCAzdncsIDJyZW0pO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCBtaW5tYXgoMCwgMWZyKSk7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA0OHJlbSkge1xuICAud29yay1ncmlkIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBtaW5tYXgoMCwgMWZyKSk7XG4gIH1cblxuICAud29yay1jYXJkX19pbWFnZS0td2lkZSB7XG4gICAgYXNwZWN0LXJhdGlvOiAyLjUgLyAxO1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAzNnJlbSkge1xuICAud29yay1oZXJvLFxuICAud29yay1saXN0aW5nIHtcbiAgICBwYWRkaW5nLWlubGluZTogMS4yNXJlbTtcbiAgfVxuXG4gIC53b3JrLWhlcm8gaDEge1xuICAgIGZvbnQtc2l6ZTogY2xhbXAoMi41cmVtLCAxMnZ3LCA0cmVtKTtcbiAgfVxuXG4gIC53b3JrLWZpbHRlcnMge1xuICAgIGdhcDogMC41cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDEuNzVyZW07XG4gIH1cblxuICAud29yay1maWx0ZXJzX19idXR0b24ge1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tdGV4dC14cyk7XG4gICAgcGFkZGluZzogMC40cmVtIDAuN3JlbTtcbiAgfVxuXG4gIC53b3JrLWdyaWQge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICB9XG5cbiAgLndvcmstY2FyZF9faW1hZ2UtLXdpZGUge1xuICAgIGFzcGVjdC1yYXRpbzogMTYgLyA5O1xuICB9XG59XG5cbkBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKSB7XG4gIC53b3JrLWZpbHRlcnNfX2J1dHRvbixcbiAgLndvcmstY2FyZCB7XG4gICAgdHJhbnNpdGlvbjogbm9uZTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 6735:
/*!*****************************************************************!*\
  !*** ./src/app/tech/writing-detail/writing-detail.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WritingDetailComponent: () => (/* binding */ WritingDetailComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);





const _c0 = a0 => ["/writing", a0];
function WritingDetailComponent_main_0_section_22_p_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const paragraph_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](paragraph_r1);
  }
}
function WritingDetailComponent_main_0_section_22_aside_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "aside", 22)(1, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const record_r2 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](record_r2.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](record_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](record_r2.flow);
  }
}
function WritingDetailComponent_main_0_section_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 19)(1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, WritingDetailComponent_main_0_section_22_p_3_Template, 2, 1, "p", 20)(4, WritingDetailComponent_main_0_section_22_aside_4_Template, 7, 3, "aside", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const section_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", section_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](section_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", section_r3.paragraphs);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", section_r3.decisionRecord);
  }
}
function WritingDetailComponent_main_0_a_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const section_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", "#" + section_r4.id, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](section_r4.title);
  }
}
function WritingDetailComponent_main_0_section_37_a_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 32)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u2192");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const related_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, related_r5.slug));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](related_r5.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", related_r5.title, " ");
  }
}
function WritingDetailComponent_main_0_section_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 26)(1, "div", 27)(2, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "More to explore");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Keep reading.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, WritingDetailComponent_main_0_section_37_a_7_Template, 7, 5, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.relatedArticles);
  }
}
function WritingDetailComponent_main_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 2)(1, "header", 3)(2, "div", 4)(3, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Writing ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "/");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7)(13, "time");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u00B7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "section", 9)(20, "div", 10)(21, "article", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, WritingDetailComponent_main_0_section_22_Template, 5, 4, "section", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "nav", 13)(24, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "On this page");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, WritingDetailComponent_main_0_a_26_Template, 2, 2, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "section", 15)(28, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "TC");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div")(31, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Written by");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Tyra A.O. Cudjoe");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Software engineer, builder and curious by nature.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, WritingDetailComponent_main_0_section_37_Template, 8, 1, "section", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const currentArticle_r7 = ctx.ngIf;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", currentArticle_r7.category, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](currentArticle_r7.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](currentArticle_r7.excerpt);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](currentArticle_r7.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", currentArticle_r7.readingTime, " min read");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", currentArticle_r7.sections);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", currentArticle_r7.sections);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.relatedArticles.length);
  }
}
function WritingDetailComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 33)(1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Article not found");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Back to all writing ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u2192");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
}
class WritingDetailComponent {
  constructor(route) {
    this.footerConfig = {
      showCallout: false
    };
    this.articles = [{
      slug: 'documenting-architecture-decisions',
      category: 'Software architecture',
      title: 'Why I document architecture decisions.',
      excerpt: 'Good code explains what happens. Good documentation explains why.',
      date: '19 August 2026',
      readingTime: 6,
      sections: [{
        id: 'the-problem',
        title: 'The problem with undocumented decisions',
        paragraphs: ['Imagine joining a software team and discovering that nobody knows why an important architectural decision was made. The code tells you how the system works, but rarely why it was designed that way.', 'This is why understanding and documenting technical decisions matters.'],
        decisionRecord: {
          label: 'Example / architecture decision record',
          title: 'ADR-001: Database selection',
          flow: 'Context → Decision → Alternatives → Consequences'
        }
      }, {
        id: 'making-decisions',
        title: 'Making decisions visible',
        paragraphs: ['An architecture decision record captures the context around a choice, the options considered and the reason a team moved forward with one of them.', 'Keeping the record short and close to the code makes it easier for the next person to understand the trade-offs.']
      }, {
        id: 'trade-offs',
        title: 'Trade-offs are part of the story',
        paragraphs: ['Most engineering choices solve one problem while creating constraints elsewhere. Writing those constraints down helps teams revisit a decision when the context changes.']
      }, {
        id: 'lessons-learned',
        title: 'What I learned',
        paragraphs: ['The useful part is not producing documentation for its own sake. It is creating a shared record of reasoning that helps a team make its next decision with more context.']
      }]
    }, {
      slug: 'another-perspective-on-system-design',
      category: 'Software architecture',
      title: 'Another Perspective on System Design',
      excerpt: 'A practical look at the questions that make system design clearer.',
      date: 'To be announced',
      readingTime: 5,
      sections: [{
        id: 'start-with-the-problem',
        title: 'Start with the problem',
        paragraphs: ['System design gets easier when the user needs, constraints and expected scale are clear before choosing technologies.']
      }, {
        id: 'make-trade-offs-explicit',
        title: 'Make trade-offs explicit',
        paragraphs: ['There is rarely one perfect architecture. A useful design explains what it optimizes for and what it makes harder.']
      }, {
        id: 'design-for-change',
        title: 'Design for change',
        paragraphs: ['Prefer clear boundaries that let the system evolve as requirements become better understood.']
      }]
    }, {
      slug: 'lessons-from-building-a-monitoring-platform',
      category: 'Building in public',
      title: 'Lessons from building a monitoring platform.',
      excerpt: 'Notes on turning a monitoring idea into a maintainable system.',
      date: 'To be announced',
      readingTime: 7,
      sections: [{
        id: 'start-small',
        title: 'Start with a small signal',
        paragraphs: ['A useful monitoring platform starts with a focused question: what needs attention, and how quickly should someone know?']
      }, {
        id: 'reliable-data',
        title: 'Make the data reliable',
        paragraphs: ['Collection, storage and alerting each need clear failure behavior so missing data does not look like a healthy system.']
      }, {
        id: 'iterate-from-use',
        title: 'Iterate from real use',
        paragraphs: ['Dashboards and alerts become more useful when they are shaped by the decisions people need to make.']
      }]
    }];
    this.article = null;
    this.relatedArticles = [];
    route.paramMap.subscribe(params => this.setArticle(params.get('slug')));
  }
  setArticle(slug) {
    const articleIndex = this.articles.findIndex(article => article.slug === slug);
    this.article = articleIndex >= 0 ? this.articles[articleIndex] : null;
    this.relatedArticles = this.article ? this.articles.filter((_, index) => index !== articleIndex).slice(0, 2) : [];
  }
  static {
    this.ɵfac = function WritingDetailComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || WritingDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.ActivatedRoute));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: WritingDetailComponent,
      selectors: [["app-writing-detail"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 3,
      vars: 2,
      consts: [["articleNotFound", ""], ["class", "writing-detail", 4, "ngIf", "ngIfElse"], [1, "writing-detail"], [1, "writing-detail-hero"], [1, "writing-detail-hero__inner"], [1, "writing-detail-hero__category"], [1, "writing-detail-hero__excerpt"], [1, "writing-detail-hero__meta"], ["aria-hidden", "true"], ["aria-label", "Article", 1, "writing-detail-content"], [1, "writing-detail-content__inner"], [1, "writing-article"], ["class", "writing-article__section", 3, "id", 4, "ngFor", "ngForOf"], ["aria-label", "On this page", 1, "writing-toc"], [3, "href", 4, "ngFor", "ngForOf"], ["aria-label", "About the author", 1, "writing-author"], ["role", "img", "aria-label", "Author photo placeholder", 1, "writing-author__avatar"], [1, "writing-author__eyebrow"], ["class", "writing-related", "aria-labelledby", "related-heading", 4, "ngIf"], [1, "writing-article__section", 3, "id"], [4, "ngFor", "ngForOf"], ["class", "decision-record", "aria-label", "Architecture decision record example", 4, "ngIf"], ["aria-label", "Architecture decision record example", 1, "decision-record"], [1, "decision-record__label"], [1, "decision-record__flow"], [3, "href"], ["aria-labelledby", "related-heading", 1, "writing-related"], [1, "writing-related__inner"], [1, "writing-related__eyebrow"], ["id", "related-heading"], [1, "writing-related__grid"], ["class", "writing-related-card", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "writing-related-card", 3, "routerLink"], [1, "writing-detail-not-found"], ["routerLink", "/writing"]],
      template: function WritingDetailComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, WritingDetailComponent_main_0_Template, 38, 8, "main", 1)(1, WritingDetailComponent_ng_template_1_Template, 7, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }
        if (rf & 2) {
          const articleNotFound_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.article)("ngIfElse", articleNotFound_r8);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
      styles: [".writing-detail-hero[_ngcontent-%COMP%] {\n  background: var(--color-primary);\n  color: var(--color-white);\n  padding: clamp(4rem, 9vw, 7rem) clamp(1.5rem, 4vw, 3.5rem);\n}\n\n.writing-detail-hero__inner[_ngcontent-%COMP%], \n.writing-detail-content__inner[_ngcontent-%COMP%], \n.writing-related__inner[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  max-width: 76rem;\n}\n\n.writing-detail-hero__category[_ngcontent-%COMP%], \n.writing-detail-hero__meta[_ngcontent-%COMP%], \n.writing-related__eyebrow[_ngcontent-%COMP%], \n.writing-author__eyebrow[_ngcontent-%COMP%] {\n  font-family: var(--font-mono);\n  font-size: var(--text-xs);\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n}\n\n.writing-detail-hero__category[_ngcontent-%COMP%] {\n  color: var(--color-soft-blue);\n  font-weight: 600;\n  margin: 0 0 0.75rem;\n}\n\n.writing-detail-hero__category[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-inline: 0.35rem;\n}\n\n.writing-detail-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: var(--color-white);\n  font-size: var(--text-display);\n  line-height: var(--leading-tight);\n  margin: 0;\n  max-width: 68rem;\n}\n\n.writing-detail-hero__excerpt[_ngcontent-%COMP%] {\n  color: var(--color-soft-blue);\n  font-size: var(--text-lg);\n  line-height: var(--leading-heading);\n  margin: 0.9rem 0 0;\n  max-width: 54rem;\n}\n\n.writing-detail-hero__meta[_ngcontent-%COMP%] {\n  align-items: center;\n  border-top: 1px solid #38516D;\n  color: var(--color-soft-blue);\n  display: flex;\n  gap: 0.65rem;\n  margin-top: 1.75rem;\n  padding-top: 1.25rem;\n}\n\n.writing-detail-content[_ngcontent-%COMP%] {\n  background: var(--color-warm-white);\n  color: var(--color-primary);\n  padding: clamp(3rem, 6vw, 5rem) clamp(1.5rem, 4vw, 3.5rem);\n}\n\n.writing-detail-content__inner[_ngcontent-%COMP%] {\n  display: grid;\n  gap: clamp(2rem, 7vw, 6rem);\n  grid-template-columns: minmax(0, 1fr) minmax(17rem, 22rem);\n  grid-template-areas: \"article toc\" \"author author\";\n}\n\n.writing-article[_ngcontent-%COMP%] {\n  grid-area: article;\n  min-width: 0;\n}\n\n.writing-article__section[_ngcontent-%COMP%] {\n  margin: 0 0 2rem;\n  scroll-margin-top: 2rem;\n}\n\n.writing-article__section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: var(--color-primary);\n  font-size: var(--text-h3);\n  margin: 0 0 0.75rem;\n}\n\n.writing-article__section[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  color: var(--color-neutral-700);\n  font-size: var(--text-lg);\n  line-height: var(--leading-body);\n  margin: 0 0 1rem;\n  max-width: 52rem;\n}\n\n.writing-toc[_ngcontent-%COMP%] {\n  align-self: start;\n  background: color-mix(in srgb, var(--color-white) 38%, var(--color-soft-blue));\n  border-radius: 0.8rem;\n  display: grid;\n  gap: 0.35rem;\n  grid-area: toc;\n  padding: 1.25rem 1.4rem;\n  position: sticky;\n  top: 1.5rem;\n}\n\n.writing-toc[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: color-mix(in srgb, var(--color-primary) 62%, transparent);\n  font-family: var(--font-mono);\n  font-size: var(--text-xs);\n  letter-spacing: 0.06em;\n  margin: 0 0 0.15rem;\n  text-transform: uppercase;\n}\n\n.writing-toc[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  border-radius: 0.2rem;\n  color: var(--color-primary);\n  font-size: var(--text-base);\n  font-weight: 600;\n  line-height: var(--leading-heading);\n  padding: 0.12rem 0;\n  text-decoration: none;\n  transition: color 160ms ease;\n}\n\n.writing-toc[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: var(--color-secondary);\n}\n\n.writing-toc[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus-visible, \n.writing-related-card[_ngcontent-%COMP%]:focus-visible, \n.writing-detail-not-found[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus-visible {\n  outline: 3px solid var(--color-accent);\n  outline-offset: 4px;\n}\n\n.decision-record[_ngcontent-%COMP%] {\n  background: var(--color-soft-blue);\n  border-radius: 0.8rem;\n  color: var(--color-primary);\n  margin: 2rem 0 2.5rem;\n  max-width: 44rem;\n  padding: clamp(1.25rem, 3vw, 1.75rem);\n}\n\n.decision-record__label[_ngcontent-%COMP%] {\n  color: color-mix(in srgb, var(--color-primary) 48%, transparent);\n  font-family: var(--font-mono);\n  font-size: var(--text-xs);\n  letter-spacing: 0.06em;\n  margin: 0 0 0.5rem;\n  text-transform: uppercase;\n}\n\n.decision-record[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: var(--color-primary);\n  font-size: var(--text-h4);\n  margin: 0;\n}\n\n.decision-record__flow[_ngcontent-%COMP%] {\n  color: var(--color-neutral-700);\n  font-family: var(--font-mono);\n  font-size: var(--text-xs);\n  margin: 0.5rem 0 0;\n}\n\n.writing-author[_ngcontent-%COMP%] {\n  align-items: center;\n  border-bottom: 1px solid var(--color-border-default);\n  border-top: 1px solid var(--color-border-default);\n  display: flex;\n  gap: 1.5rem;\n  grid-area: author;\n  padding: 1.25rem 1.5rem;\n}\n\n.writing-author__avatar[_ngcontent-%COMP%] {\n  align-items: center;\n  background: var(--color-neutral-200);\n  border-radius: 50%;\n  color: var(--color-primary);\n  display: flex;\n  flex: 0 0 6rem;\n  font-family: var(--font-heading);\n  font-size: var(--text-h4);\n  font-weight: 700;\n  height: 6rem;\n  justify-content: center;\n}\n\n.writing-author__eyebrow[_ngcontent-%COMP%] {\n  color: var(--color-soft-blue);\n  font-weight: 600;\n  margin: 0 0 0.25rem;\n}\n\n.writing-author[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: var(--color-primary);\n  font-size: var(--text-h3);\n  margin: 0;\n}\n\n.writing-author[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%]:last-child {\n  color: var(--color-neutral-700);\n  font-family: var(--font-mono);\n  font-size: var(--text-sm);\n  margin: 0.25rem 0 0;\n}\n\n.writing-related[_ngcontent-%COMP%] {\n  background: var(--color-soft-blue);\n  color: var(--color-primary);\n  padding: clamp(3.5rem, 7vw, 5rem) clamp(1.5rem, 4vw, 3.5rem);\n}\n\n.writing-related__eyebrow[_ngcontent-%COMP%] {\n  color: var(--color-primary);\n  font-weight: 600;\n  margin: 0 0 0.5rem;\n}\n\n.writing-related[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: var(--color-primary);\n  font-size: var(--text-h3);\n  margin: 0;\n}\n\n.writing-related__grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: clamp(1rem, 3vw, 2.5rem);\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  margin-top: 1.25rem;\n}\n\n.writing-related-card[_ngcontent-%COMP%] {\n  background: color-mix(in srgb, var(--color-white) 38%, var(--color-soft-blue));\n  border-radius: 0.8rem;\n  color: var(--color-primary);\n  display: grid;\n  gap: 0.45rem;\n  min-height: 9rem;\n  padding: clamp(1.25rem, 3vw, 1.75rem);\n  text-decoration: none;\n  transition: background-color 160ms ease, transform 160ms ease;\n}\n\n.writing-related-card[_ngcontent-%COMP%]:hover {\n  background: var(--color-warm-white);\n  transform: translateY(-2px);\n}\n\n.writing-related-card[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  color: color-mix(in srgb, var(--color-primary) 48%, transparent);\n  font-family: var(--font-mono);\n  font-size: var(--text-xs);\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n}\n\n.writing-related-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  align-self: start;\n  font-size: var(--text-base);\n}\n\n.writing-detail-not-found[_ngcontent-%COMP%] {\n  background: var(--color-warm-white);\n  color: var(--color-primary);\n  min-height: 50vh;\n  padding: 5rem clamp(1.5rem, 4vw, 3.5rem);\n  text-align: center;\n}\n\n.writing-detail-not-found[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--color-primary);\n  font-weight: 600;\n}\n\n@media (max-width: 48rem) {\n  .writing-detail-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: clamp(2.5rem, 7vw, 4.25rem);\n  }\n  .writing-detail-content__inner[_ngcontent-%COMP%] {\n    gap: 2rem;\n    grid-template-columns: minmax(0, 1fr);\n    grid-template-areas: \"toc\" \"article\" \"author\";\n  }\n  .writing-toc[_ngcontent-%COMP%] {\n    position: static;\n  }\n}\n@media (max-width: 36rem) {\n  .writing-detail-hero[_ngcontent-%COMP%], \n   .writing-detail-content[_ngcontent-%COMP%], \n   .writing-related[_ngcontent-%COMP%] {\n    padding-inline: 1.25rem;\n  }\n  .writing-detail-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: clamp(2.25rem, 10vw, 3.5rem);\n  }\n  .writing-detail-hero__meta[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n  .writing-related__grid[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr);\n  }\n  .writing-author[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    flex-direction: column;\n    padding-inline: 0;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .writing-toc[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], \n   .writing-related-card[_ngcontent-%COMP%] {\n    transition: none;\n  }\n  .writing-related-card[_ngcontent-%COMP%]:hover {\n    transform: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndyaXRpbmctZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0NBQUE7RUFDQSx5QkFBQTtFQUNBLDBEQUFBO0FBQ0Y7O0FBRUE7OztFQUdFLGNBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBOzs7O0VBSUUsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7QUFDRjs7QUFFQTtFQUNFLDZCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0Usc0JBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQ0FBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLG1DQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsMERBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSwyQkFBQTtFQUNBLDBEQUFBO0VBQ0Esa0RBQ0U7QUFBSjs7QUFJQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtBQURGOztBQUlBO0VBQ0UsZ0JBQUE7RUFDQSx1QkFBQTtBQURGOztBQUlBO0VBQ0UsMkJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FBREY7O0FBSUE7RUFDRSwrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBREY7O0FBSUE7RUFDRSxpQkFBQTtFQUNBLDhFQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQURGOztBQUlBO0VBQ0UsZ0VBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FBREY7O0FBSUE7RUFDRSxxQkFBQTtFQUNBLDJCQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQkFBQTtFQUNBLG1DQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLDRCQUFBO0FBREY7O0FBSUE7RUFDRSw2QkFBQTtBQURGOztBQUlBOzs7RUFHRSxzQ0FBQTtFQUNBLG1CQUFBO0FBREY7O0FBSUE7RUFDRSxrQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUNBQUE7QUFERjs7QUFJQTtFQUNFLGdFQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQURGOztBQUlBO0VBQ0UsMkJBQUE7RUFDQSx5QkFBQTtFQUNBLFNBQUE7QUFERjs7QUFJQTtFQUNFLCtCQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FBREY7O0FBSUE7RUFDRSxtQkFBQTtFQUNBLG9EQUFBO0VBQ0EsaURBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7QUFERjs7QUFJQTtFQUNFLG1CQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxnQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7QUFERjs7QUFJQTtFQUNFLDZCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQURGOztBQUlBO0VBQ0UsMkJBQUE7RUFDQSx5QkFBQTtFQUNBLFNBQUE7QUFERjs7QUFJQTtFQUNFLCtCQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FBREY7O0FBSUE7RUFDRSxrQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsNERBQUE7QUFERjs7QUFJQTtFQUNFLDJCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQURGOztBQUlBO0VBQ0UsMkJBQUE7RUFDQSx5QkFBQTtFQUNBLFNBQUE7QUFERjs7QUFJQTtFQUNFLGFBQUE7RUFDQSw2QkFBQTtFQUNBLGdEQUFBO0VBQ0EsbUJBQUE7QUFERjs7QUFJQTtFQUNFLDhFQUFBO0VBQ0EscUJBQUE7RUFDQSwyQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsNkRBQUE7QUFERjs7QUFJQTtFQUNFLG1DQUFBO0VBQ0EsMkJBQUE7QUFERjs7QUFJQTtFQUNFLGdFQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7QUFERjs7QUFJQTtFQUNFLGlCQUFBO0VBQ0EsMkJBQUE7QUFERjs7QUFJQTtFQUNFLG1DQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQkFBQTtFQUNBLHdDQUFBO0VBQ0Esa0JBQUE7QUFERjs7QUFJQTtFQUNFLDJCQUFBO0VBQ0EsZ0JBQUE7QUFERjs7QUFJQTtFQUNFO0lBQ0Usc0NBQUE7RUFERjtFQUlBO0lBQ0UsU0FBQTtJQUNBLHFDQUFBO0lBQ0EsNkNBQUE7RUFGRjtFQUtBO0lBQ0UsZ0JBQUE7RUFIRjtBQUNGO0FBTUE7RUFDRTs7O0lBR0UsdUJBQUE7RUFKRjtFQU9BO0lBQ0UsdUNBQUE7RUFMRjtFQVFBO0lBQ0UsZUFBQTtFQU5GO0VBU0E7SUFDRSxxQ0FBQTtFQVBGO0VBVUE7SUFDRSx1QkFBQTtJQUNBLHNCQUFBO0lBQ0EsaUJBQUE7RUFSRjtBQUNGO0FBV0E7RUFDRTs7SUFFRSxnQkFBQTtFQVRGO0VBWUE7SUFDRSxlQUFBO0VBVkY7QUFDRiIsImZpbGUiOiJ3cml0aW5nLWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cml0aW5nLWRldGFpbC1oZXJvIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XG4gIHBhZGRpbmc6IGNsYW1wKDRyZW0sIDl2dywgN3JlbSkgY2xhbXAoMS41cmVtLCA0dncsIDMuNXJlbSk7XG59XG5cbi53cml0aW5nLWRldGFpbC1oZXJvX19pbm5lcixcbi53cml0aW5nLWRldGFpbC1jb250ZW50X19pbm5lcixcbi53cml0aW5nLXJlbGF0ZWRfX2lubmVyIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1heC13aWR0aDogNzZyZW07XG59XG5cbi53cml0aW5nLWRldGFpbC1oZXJvX19jYXRlZ29yeSxcbi53cml0aW5nLWRldGFpbC1oZXJvX19tZXRhLFxuLndyaXRpbmctcmVsYXRlZF9fZXllYnJvdyxcbi53cml0aW5nLWF1dGhvcl9fZXllYnJvdyB7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LW1vbm8pO1xuICBmb250LXNpemU6IHZhcigtLXRleHQteHMpO1xuICBsZXR0ZXItc3BhY2luZzogMC4wNmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4ud3JpdGluZy1kZXRhaWwtaGVyb19fY2F0ZWdvcnkge1xuICBjb2xvcjogdmFyKC0tY29sb3Itc29mdC1ibHVlKTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luOiAwIDAgMC43NXJlbTtcbn1cblxuLndyaXRpbmctZGV0YWlsLWhlcm9fX2NhdGVnb3J5IHNwYW4ge1xuICBtYXJnaW4taW5saW5lOiAwLjM1cmVtO1xufVxuXG4ud3JpdGluZy1kZXRhaWwtaGVybyBoMSB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XG4gIGZvbnQtc2l6ZTogdmFyKC0tdGV4dC1kaXNwbGF5KTtcbiAgbGluZS1oZWlnaHQ6IHZhcigtLWxlYWRpbmctdGlnaHQpO1xuICBtYXJnaW46IDA7XG4gIG1heC13aWR0aDogNjhyZW07XG59XG5cbi53cml0aW5nLWRldGFpbC1oZXJvX19leGNlcnB0IHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXNvZnQtYmx1ZSk7XG4gIGZvbnQtc2l6ZTogdmFyKC0tdGV4dC1sZyk7XG4gIGxpbmUtaGVpZ2h0OiB2YXIoLS1sZWFkaW5nLWhlYWRpbmcpO1xuICBtYXJnaW46IDAuOXJlbSAwIDA7XG4gIG1heC13aWR0aDogNTRyZW07XG59XG5cbi53cml0aW5nLWRldGFpbC1oZXJvX19tZXRhIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMzODUxNkQ7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1zb2Z0LWJsdWUpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDAuNjVyZW07XG4gIG1hcmdpbi10b3A6IDEuNzVyZW07XG4gIHBhZGRpbmctdG9wOiAxLjI1cmVtO1xufVxuXG4ud3JpdGluZy1kZXRhaWwtY29udGVudCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLXdhcm0td2hpdGUpO1xuICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG4gIHBhZGRpbmc6IGNsYW1wKDNyZW0sIDZ2dywgNXJlbSkgY2xhbXAoMS41cmVtLCA0dncsIDMuNXJlbSk7XG59XG5cbi53cml0aW5nLWRldGFpbC1jb250ZW50X19pbm5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogY2xhbXAoMnJlbSwgN3Z3LCA2cmVtKTtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMCwgMWZyKSBtaW5tYXgoMTdyZW0sIDIycmVtKTtcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICBcImFydGljbGUgdG9jXCJcbiAgICBcImF1dGhvciBhdXRob3JcIjtcbn1cblxuLndyaXRpbmctYXJ0aWNsZSB7XG4gIGdyaWQtYXJlYTogYXJ0aWNsZTtcbiAgbWluLXdpZHRoOiAwO1xufVxuXG4ud3JpdGluZy1hcnRpY2xlX19zZWN0aW9uIHtcbiAgbWFyZ2luOiAwIDAgMnJlbTtcbiAgc2Nyb2xsLW1hcmdpbi10b3A6IDJyZW07XG59XG5cbi53cml0aW5nLWFydGljbGVfX3NlY3Rpb24gaDIge1xuICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG4gIGZvbnQtc2l6ZTogdmFyKC0tdGV4dC1oMyk7XG4gIG1hcmdpbjogMCAwIDAuNzVyZW07XG59XG5cbi53cml0aW5nLWFydGljbGVfX3NlY3Rpb24gPiBwIHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLW5ldXRyYWwtNzAwKTtcbiAgZm9udC1zaXplOiB2YXIoLS10ZXh0LWxnKTtcbiAgbGluZS1oZWlnaHQ6IHZhcigtLWxlYWRpbmctYm9keSk7XG4gIG1hcmdpbjogMCAwIDFyZW07XG4gIG1heC13aWR0aDogNTJyZW07XG59XG5cbi53cml0aW5nLXRvYyB7XG4gIGFsaWduLXNlbGY6IHN0YXJ0O1xuICBiYWNrZ3JvdW5kOiBjb2xvci1taXgoaW4gc3JnYiwgdmFyKC0tY29sb3Itd2hpdGUpIDM4JSwgdmFyKC0tY29sb3Itc29mdC1ibHVlKSk7XG4gIGJvcmRlci1yYWRpdXM6IDAuOHJlbTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiAwLjM1cmVtO1xuICBncmlkLWFyZWE6IHRvYztcbiAgcGFkZGluZzogMS4yNXJlbSAxLjRyZW07XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMS41cmVtO1xufVxuXG4ud3JpdGluZy10b2MgcCB7XG4gIGNvbG9yOiBjb2xvci1taXgoaW4gc3JnYiwgdmFyKC0tY29sb3ItcHJpbWFyeSkgNjIlLCB0cmFuc3BhcmVudCk7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LW1vbm8pO1xuICBmb250LXNpemU6IHZhcigtLXRleHQteHMpO1xuICBsZXR0ZXItc3BhY2luZzogMC4wNmVtO1xuICBtYXJnaW46IDAgMCAwLjE1cmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4ud3JpdGluZy10b2MgYSB7XG4gIGJvcmRlci1yYWRpdXM6IDAuMnJlbTtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xuICBmb250LXNpemU6IHZhcigtLXRleHQtYmFzZSk7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxpbmUtaGVpZ2h0OiB2YXIoLS1sZWFkaW5nLWhlYWRpbmcpO1xuICBwYWRkaW5nOiAwLjEycmVtIDA7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdHJhbnNpdGlvbjogY29sb3IgMTYwbXMgZWFzZTtcbn1cblxuLndyaXRpbmctdG9jIGE6aG92ZXIge1xuICBjb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcbn1cblxuLndyaXRpbmctdG9jIGE6Zm9jdXMtdmlzaWJsZSxcbi53cml0aW5nLXJlbGF0ZWQtY2FyZDpmb2N1cy12aXNpYmxlLFxuLndyaXRpbmctZGV0YWlsLW5vdC1mb3VuZCBhOmZvY3VzLXZpc2libGUge1xuICBvdXRsaW5lOiAzcHggc29saWQgdmFyKC0tY29sb3ItYWNjZW50KTtcbiAgb3V0bGluZS1vZmZzZXQ6IDRweDtcbn1cblxuLmRlY2lzaW9uLXJlY29yZCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLXNvZnQtYmx1ZSk7XG4gIGJvcmRlci1yYWRpdXM6IDAuOHJlbTtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xuICBtYXJnaW46IDJyZW0gMCAyLjVyZW07XG4gIG1heC13aWR0aDogNDRyZW07XG4gIHBhZGRpbmc6IGNsYW1wKDEuMjVyZW0sIDN2dywgMS43NXJlbSk7XG59XG5cbi5kZWNpc2lvbi1yZWNvcmRfX2xhYmVsIHtcbiAgY29sb3I6IGNvbG9yLW1peChpbiBzcmdiLCB2YXIoLS1jb2xvci1wcmltYXJ5KSA0OCUsIHRyYW5zcGFyZW50KTtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtbW9ubyk7XG4gIGZvbnQtc2l6ZTogdmFyKC0tdGV4dC14cyk7XG4gIGxldHRlci1zcGFjaW5nOiAwLjA2ZW07XG4gIG1hcmdpbjogMCAwIDAuNXJlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmRlY2lzaW9uLXJlY29yZCBoMyB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbiAgZm9udC1zaXplOiB2YXIoLS10ZXh0LWg0KTtcbiAgbWFyZ2luOiAwO1xufVxuXG4uZGVjaXNpb24tcmVjb3JkX19mbG93IHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLW5ldXRyYWwtNzAwKTtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtbW9ubyk7XG4gIGZvbnQtc2l6ZTogdmFyKC0tdGV4dC14cyk7XG4gIG1hcmdpbjogMC41cmVtIDAgMDtcbn1cblxuLndyaXRpbmctYXV0aG9yIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWNvbG9yLWJvcmRlci1kZWZhdWx0KTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWNvbG9yLWJvcmRlci1kZWZhdWx0KTtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxLjVyZW07XG4gIGdyaWQtYXJlYTogYXV0aG9yO1xuICBwYWRkaW5nOiAxLjI1cmVtIDEuNXJlbTtcbn1cblxuLndyaXRpbmctYXV0aG9yX19hdmF0YXIge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1uZXV0cmFsLTIwMCk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4OiAwIDAgNnJlbTtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtaGVhZGluZyk7XG4gIGZvbnQtc2l6ZTogdmFyKC0tdGV4dC1oNCk7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGhlaWdodDogNnJlbTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi53cml0aW5nLWF1dGhvcl9fZXllYnJvdyB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1zb2Z0LWJsdWUpO1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW46IDAgMCAwLjI1cmVtO1xufVxuXG4ud3JpdGluZy1hdXRob3IgaDIge1xuICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG4gIGZvbnQtc2l6ZTogdmFyKC0tdGV4dC1oMyk7XG4gIG1hcmdpbjogMDtcbn1cblxuLndyaXRpbmctYXV0aG9yIGRpdiA+IHA6bGFzdC1jaGlsZCB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1uZXV0cmFsLTcwMCk7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LW1vbm8pO1xuICBmb250LXNpemU6IHZhcigtLXRleHQtc20pO1xuICBtYXJnaW46IDAuMjVyZW0gMCAwO1xufVxuXG4ud3JpdGluZy1yZWxhdGVkIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3Itc29mdC1ibHVlKTtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xuICBwYWRkaW5nOiBjbGFtcCgzLjVyZW0sIDd2dywgNXJlbSkgY2xhbXAoMS41cmVtLCA0dncsIDMuNXJlbSk7XG59XG5cbi53cml0aW5nLXJlbGF0ZWRfX2V5ZWJyb3cge1xuICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbjogMCAwIDAuNXJlbTtcbn1cblxuLndyaXRpbmctcmVsYXRlZCBoMiB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbiAgZm9udC1zaXplOiB2YXIoLS10ZXh0LWgzKTtcbiAgbWFyZ2luOiAwO1xufVxuXG4ud3JpdGluZy1yZWxhdGVkX19ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiBjbGFtcCgxcmVtLCAzdncsIDIuNXJlbSk7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIG1pbm1heCgwLCAxZnIpKTtcbiAgbWFyZ2luLXRvcDogMS4yNXJlbTtcbn1cblxuLndyaXRpbmctcmVsYXRlZC1jYXJkIHtcbiAgYmFja2dyb3VuZDogY29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLWNvbG9yLXdoaXRlKSAzOCUsIHZhcigtLWNvbG9yLXNvZnQtYmx1ZSkpO1xuICBib3JkZXItcmFkaXVzOiAwLjhyZW07XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiAwLjQ1cmVtO1xuICBtaW4taGVpZ2h0OiA5cmVtO1xuICBwYWRkaW5nOiBjbGFtcCgxLjI1cmVtLCAzdncsIDEuNzVyZW0pO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMTYwbXMgZWFzZSwgdHJhbnNmb3JtIDE2MG1zIGVhc2U7XG59XG5cbi53cml0aW5nLXJlbGF0ZWQtY2FyZDpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLXdhcm0td2hpdGUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG59XG5cbi53cml0aW5nLXJlbGF0ZWQtY2FyZCA+IHNwYW4ge1xuICBjb2xvcjogY29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLWNvbG9yLXByaW1hcnkpIDQ4JSwgdHJhbnNwYXJlbnQpO1xuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1tb25vKTtcbiAgZm9udC1zaXplOiB2YXIoLS10ZXh0LXhzKTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDZlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLndyaXRpbmctcmVsYXRlZC1jYXJkIHN0cm9uZyB7XG4gIGFsaWduLXNlbGY6IHN0YXJ0O1xuICBmb250LXNpemU6IHZhcigtLXRleHQtYmFzZSk7XG59XG5cbi53cml0aW5nLWRldGFpbC1ub3QtZm91bmQge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci13YXJtLXdoaXRlKTtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xuICBtaW4taGVpZ2h0OiA1MHZoO1xuICBwYWRkaW5nOiA1cmVtIGNsYW1wKDEuNXJlbSwgNHZ3LCAzLjVyZW0pO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi53cml0aW5nLWRldGFpbC1ub3QtZm91bmQgYSB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4cmVtKSB7XG4gIC53cml0aW5nLWRldGFpbC1oZXJvIGgxIHtcbiAgICBmb250LXNpemU6IGNsYW1wKDIuNXJlbSwgN3Z3LCA0LjI1cmVtKTtcbiAgfVxuXG4gIC53cml0aW5nLWRldGFpbC1jb250ZW50X19pbm5lciB7XG4gICAgZ2FwOiAycmVtO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDAsIDFmcik7XG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJ0b2NcIiBcImFydGljbGVcIiBcImF1dGhvclwiO1xuICB9XG5cbiAgLndyaXRpbmctdG9jIHtcbiAgICBwb3NpdGlvbjogc3RhdGljO1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAzNnJlbSkge1xuICAud3JpdGluZy1kZXRhaWwtaGVybyxcbiAgLndyaXRpbmctZGV0YWlsLWNvbnRlbnQsXG4gIC53cml0aW5nLXJlbGF0ZWQge1xuICAgIHBhZGRpbmctaW5saW5lOiAxLjI1cmVtO1xuICB9XG5cbiAgLndyaXRpbmctZGV0YWlsLWhlcm8gaDEge1xuICAgIGZvbnQtc2l6ZTogY2xhbXAoMi4yNXJlbSwgMTB2dywgMy41cmVtKTtcbiAgfVxuXG4gIC53cml0aW5nLWRldGFpbC1oZXJvX19tZXRhIHtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gIH1cblxuICAud3JpdGluZy1yZWxhdGVkX19ncmlkIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgwLCAxZnIpO1xuICB9XG5cbiAgLndyaXRpbmctYXV0aG9yIHtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBhZGRpbmctaW5saW5lOiAwO1xuICB9XG59XG5cbkBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKSB7XG4gIC53cml0aW5nLXRvYyBhLFxuICAud3JpdGluZy1yZWxhdGVkLWNhcmQge1xuICAgIHRyYW5zaXRpb246IG5vbmU7XG4gIH1cblxuICAud3JpdGluZy1yZWxhdGVkLWNhcmQ6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgfVxufVxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdGVjaC93cml0aW5nLWRldGFpbC93cml0aW5nLWRldGFpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdDQUFBO0VBQ0EseUJBQUE7RUFDQSwwREFBQTtBQUNGOztBQUVBOzs7RUFHRSxjQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTs7OztFQUlFLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLHNCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0EsaUNBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtBQUNGOztBQUVBO0VBQ0UsbUNBQUE7RUFDQSwyQkFBQTtFQUNBLDBEQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSwwREFBQTtFQUNBLGtEQUNFO0FBQUo7O0FBSUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7QUFERjs7QUFJQTtFQUNFLGdCQUFBO0VBQ0EsdUJBQUE7QUFERjs7QUFJQTtFQUNFLDJCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQURGOztBQUlBO0VBQ0UsK0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQURGOztBQUlBO0VBQ0UsaUJBQUE7RUFDQSw4RUFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFERjs7QUFJQTtFQUNFLGdFQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQURGOztBQUlBO0VBQ0UscUJBQUE7RUFDQSwyQkFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQ0FBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtBQURGOztBQUlBO0VBQ0UsNkJBQUE7QUFERjs7QUFJQTs7O0VBR0Usc0NBQUE7RUFDQSxtQkFBQTtBQURGOztBQUlBO0VBQ0Usa0NBQUE7RUFDQSxxQkFBQTtFQUNBLDJCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFDQUFBO0FBREY7O0FBSUE7RUFDRSxnRUFBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFERjs7QUFJQTtFQUNFLDJCQUFBO0VBQ0EseUJBQUE7RUFDQSxTQUFBO0FBREY7O0FBSUE7RUFDRSwrQkFBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQURGOztBQUlBO0VBQ0UsbUJBQUE7RUFDQSxvREFBQTtFQUNBLGlEQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0FBREY7O0FBSUE7RUFDRSxtQkFBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsZ0NBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FBREY7O0FBSUE7RUFDRSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFERjs7QUFJQTtFQUNFLDJCQUFBO0VBQ0EseUJBQUE7RUFDQSxTQUFBO0FBREY7O0FBSUE7RUFDRSwrQkFBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQURGOztBQUlBO0VBQ0Usa0NBQUE7RUFDQSwyQkFBQTtFQUNBLDREQUFBO0FBREY7O0FBSUE7RUFDRSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFERjs7QUFJQTtFQUNFLDJCQUFBO0VBQ0EseUJBQUE7RUFDQSxTQUFBO0FBREY7O0FBSUE7RUFDRSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxnREFBQTtFQUNBLG1CQUFBO0FBREY7O0FBSUE7RUFDRSw4RUFBQTtFQUNBLHFCQUFBO0VBQ0EsMkJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EscUNBQUE7RUFDQSxxQkFBQTtFQUNBLDZEQUFBO0FBREY7O0FBSUE7RUFDRSxtQ0FBQTtFQUNBLDJCQUFBO0FBREY7O0FBSUE7RUFDRSxnRUFBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0FBREY7O0FBSUE7RUFDRSxpQkFBQTtFQUNBLDJCQUFBO0FBREY7O0FBSUE7RUFDRSxtQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3Q0FBQTtFQUNBLGtCQUFBO0FBREY7O0FBSUE7RUFDRSwyQkFBQTtFQUNBLGdCQUFBO0FBREY7O0FBSUE7RUFDRTtJQUNFLHNDQUFBO0VBREY7RUFJQTtJQUNFLFNBQUE7SUFDQSxxQ0FBQTtJQUNBLDZDQUFBO0VBRkY7RUFLQTtJQUNFLGdCQUFBO0VBSEY7QUFDRjtBQU1BO0VBQ0U7OztJQUdFLHVCQUFBO0VBSkY7RUFPQTtJQUNFLHVDQUFBO0VBTEY7RUFRQTtJQUNFLGVBQUE7RUFORjtFQVNBO0lBQ0UscUNBQUE7RUFQRjtFQVVBO0lBQ0UsdUJBQUE7SUFDQSxzQkFBQTtJQUNBLGlCQUFBO0VBUkY7QUFDRjtBQVdBO0VBQ0U7O0lBRUUsZ0JBQUE7RUFURjtFQVlBO0lBQ0UsZUFBQTtFQVZGO0FBQ0Y7QUFDQSx3amFBQXdqYSIsInNvdXJjZXNDb250ZW50IjpbIi53cml0aW5nLWRldGFpbC1oZXJvIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XG4gIHBhZGRpbmc6IGNsYW1wKDRyZW0sIDl2dywgN3JlbSkgY2xhbXAoMS41cmVtLCA0dncsIDMuNXJlbSk7XG59XG5cbi53cml0aW5nLWRldGFpbC1oZXJvX19pbm5lcixcbi53cml0aW5nLWRldGFpbC1jb250ZW50X19pbm5lcixcbi53cml0aW5nLXJlbGF0ZWRfX2lubmVyIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1heC13aWR0aDogNzZyZW07XG59XG5cbi53cml0aW5nLWRldGFpbC1oZXJvX19jYXRlZ29yeSxcbi53cml0aW5nLWRldGFpbC1oZXJvX19tZXRhLFxuLndyaXRpbmctcmVsYXRlZF9fZXllYnJvdyxcbi53cml0aW5nLWF1dGhvcl9fZXllYnJvdyB7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LW1vbm8pO1xuICBmb250LXNpemU6IHZhcigtLXRleHQteHMpO1xuICBsZXR0ZXItc3BhY2luZzogMC4wNmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4ud3JpdGluZy1kZXRhaWwtaGVyb19fY2F0ZWdvcnkge1xuICBjb2xvcjogdmFyKC0tY29sb3Itc29mdC1ibHVlKTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luOiAwIDAgMC43NXJlbTtcbn1cblxuLndyaXRpbmctZGV0YWlsLWhlcm9fX2NhdGVnb3J5IHNwYW4ge1xuICBtYXJnaW4taW5saW5lOiAwLjM1cmVtO1xufVxuXG4ud3JpdGluZy1kZXRhaWwtaGVybyBoMSB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XG4gIGZvbnQtc2l6ZTogdmFyKC0tdGV4dC1kaXNwbGF5KTtcbiAgbGluZS1oZWlnaHQ6IHZhcigtLWxlYWRpbmctdGlnaHQpO1xuICBtYXJnaW46IDA7XG4gIG1heC13aWR0aDogNjhyZW07XG59XG5cbi53cml0aW5nLWRldGFpbC1oZXJvX19leGNlcnB0IHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXNvZnQtYmx1ZSk7XG4gIGZvbnQtc2l6ZTogdmFyKC0tdGV4dC1sZyk7XG4gIGxpbmUtaGVpZ2h0OiB2YXIoLS1sZWFkaW5nLWhlYWRpbmcpO1xuICBtYXJnaW46IDAuOXJlbSAwIDA7XG4gIG1heC13aWR0aDogNTRyZW07XG59XG5cbi53cml0aW5nLWRldGFpbC1oZXJvX19tZXRhIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMzODUxNkQ7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1zb2Z0LWJsdWUpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDAuNjVyZW07XG4gIG1hcmdpbi10b3A6IDEuNzVyZW07XG4gIHBhZGRpbmctdG9wOiAxLjI1cmVtO1xufVxuXG4ud3JpdGluZy1kZXRhaWwtY29udGVudCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLXdhcm0td2hpdGUpO1xuICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG4gIHBhZGRpbmc6IGNsYW1wKDNyZW0sIDZ2dywgNXJlbSkgY2xhbXAoMS41cmVtLCA0dncsIDMuNXJlbSk7XG59XG5cbi53cml0aW5nLWRldGFpbC1jb250ZW50X19pbm5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogY2xhbXAoMnJlbSwgN3Z3LCA2cmVtKTtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMCwgMWZyKSBtaW5tYXgoMTdyZW0sIDIycmVtKTtcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICBcImFydGljbGUgdG9jXCJcbiAgICBcImF1dGhvciBhdXRob3JcIjtcbn1cblxuLndyaXRpbmctYXJ0aWNsZSB7XG4gIGdyaWQtYXJlYTogYXJ0aWNsZTtcbiAgbWluLXdpZHRoOiAwO1xufVxuXG4ud3JpdGluZy1hcnRpY2xlX19zZWN0aW9uIHtcbiAgbWFyZ2luOiAwIDAgMnJlbTtcbiAgc2Nyb2xsLW1hcmdpbi10b3A6IDJyZW07XG59XG5cbi53cml0aW5nLWFydGljbGVfX3NlY3Rpb24gaDIge1xuICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG4gIGZvbnQtc2l6ZTogdmFyKC0tdGV4dC1oMyk7XG4gIG1hcmdpbjogMCAwIDAuNzVyZW07XG59XG5cbi53cml0aW5nLWFydGljbGVfX3NlY3Rpb24gPiBwIHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLW5ldXRyYWwtNzAwKTtcbiAgZm9udC1zaXplOiB2YXIoLS10ZXh0LWxnKTtcbiAgbGluZS1oZWlnaHQ6IHZhcigtLWxlYWRpbmctYm9keSk7XG4gIG1hcmdpbjogMCAwIDFyZW07XG4gIG1heC13aWR0aDogNTJyZW07XG59XG5cbi53cml0aW5nLXRvYyB7XG4gIGFsaWduLXNlbGY6IHN0YXJ0O1xuICBiYWNrZ3JvdW5kOiBjb2xvci1taXgoaW4gc3JnYiwgdmFyKC0tY29sb3Itd2hpdGUpIDM4JSwgdmFyKC0tY29sb3Itc29mdC1ibHVlKSk7XG4gIGJvcmRlci1yYWRpdXM6IDAuOHJlbTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiAwLjM1cmVtO1xuICBncmlkLWFyZWE6IHRvYztcbiAgcGFkZGluZzogMS4yNXJlbSAxLjRyZW07XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMS41cmVtO1xufVxuXG4ud3JpdGluZy10b2MgcCB7XG4gIGNvbG9yOiBjb2xvci1taXgoaW4gc3JnYiwgdmFyKC0tY29sb3ItcHJpbWFyeSkgNjIlLCB0cmFuc3BhcmVudCk7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LW1vbm8pO1xuICBmb250LXNpemU6IHZhcigtLXRleHQteHMpO1xuICBsZXR0ZXItc3BhY2luZzogMC4wNmVtO1xuICBtYXJnaW46IDAgMCAwLjE1cmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4ud3JpdGluZy10b2MgYSB7XG4gIGJvcmRlci1yYWRpdXM6IDAuMnJlbTtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xuICBmb250LXNpemU6IHZhcigtLXRleHQtYmFzZSk7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxpbmUtaGVpZ2h0OiB2YXIoLS1sZWFkaW5nLWhlYWRpbmcpO1xuICBwYWRkaW5nOiAwLjEycmVtIDA7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdHJhbnNpdGlvbjogY29sb3IgMTYwbXMgZWFzZTtcbn1cblxuLndyaXRpbmctdG9jIGE6aG92ZXIge1xuICBjb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcbn1cblxuLndyaXRpbmctdG9jIGE6Zm9jdXMtdmlzaWJsZSxcbi53cml0aW5nLXJlbGF0ZWQtY2FyZDpmb2N1cy12aXNpYmxlLFxuLndyaXRpbmctZGV0YWlsLW5vdC1mb3VuZCBhOmZvY3VzLXZpc2libGUge1xuICBvdXRsaW5lOiAzcHggc29saWQgdmFyKC0tY29sb3ItYWNjZW50KTtcbiAgb3V0bGluZS1vZmZzZXQ6IDRweDtcbn1cblxuLmRlY2lzaW9uLXJlY29yZCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLXNvZnQtYmx1ZSk7XG4gIGJvcmRlci1yYWRpdXM6IDAuOHJlbTtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xuICBtYXJnaW46IDJyZW0gMCAyLjVyZW07XG4gIG1heC13aWR0aDogNDRyZW07XG4gIHBhZGRpbmc6IGNsYW1wKDEuMjVyZW0sIDN2dywgMS43NXJlbSk7XG59XG5cbi5kZWNpc2lvbi1yZWNvcmRfX2xhYmVsIHtcbiAgY29sb3I6IGNvbG9yLW1peChpbiBzcmdiLCB2YXIoLS1jb2xvci1wcmltYXJ5KSA0OCUsIHRyYW5zcGFyZW50KTtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtbW9ubyk7XG4gIGZvbnQtc2l6ZTogdmFyKC0tdGV4dC14cyk7XG4gIGxldHRlci1zcGFjaW5nOiAwLjA2ZW07XG4gIG1hcmdpbjogMCAwIDAuNXJlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmRlY2lzaW9uLXJlY29yZCBoMyB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbiAgZm9udC1zaXplOiB2YXIoLS10ZXh0LWg0KTtcbiAgbWFyZ2luOiAwO1xufVxuXG4uZGVjaXNpb24tcmVjb3JkX19mbG93IHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLW5ldXRyYWwtNzAwKTtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtbW9ubyk7XG4gIGZvbnQtc2l6ZTogdmFyKC0tdGV4dC14cyk7XG4gIG1hcmdpbjogMC41cmVtIDAgMDtcbn1cblxuLndyaXRpbmctYXV0aG9yIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWNvbG9yLWJvcmRlci1kZWZhdWx0KTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWNvbG9yLWJvcmRlci1kZWZhdWx0KTtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxLjVyZW07XG4gIGdyaWQtYXJlYTogYXV0aG9yO1xuICBwYWRkaW5nOiAxLjI1cmVtIDEuNXJlbTtcbn1cblxuLndyaXRpbmctYXV0aG9yX19hdmF0YXIge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1uZXV0cmFsLTIwMCk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4OiAwIDAgNnJlbTtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtaGVhZGluZyk7XG4gIGZvbnQtc2l6ZTogdmFyKC0tdGV4dC1oNCk7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGhlaWdodDogNnJlbTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi53cml0aW5nLWF1dGhvcl9fZXllYnJvdyB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1zb2Z0LWJsdWUpO1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW46IDAgMCAwLjI1cmVtO1xufVxuXG4ud3JpdGluZy1hdXRob3IgaDIge1xuICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG4gIGZvbnQtc2l6ZTogdmFyKC0tdGV4dC1oMyk7XG4gIG1hcmdpbjogMDtcbn1cblxuLndyaXRpbmctYXV0aG9yIGRpdiA+IHA6bGFzdC1jaGlsZCB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1uZXV0cmFsLTcwMCk7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LW1vbm8pO1xuICBmb250LXNpemU6IHZhcigtLXRleHQtc20pO1xuICBtYXJnaW46IDAuMjVyZW0gMCAwO1xufVxuXG4ud3JpdGluZy1yZWxhdGVkIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3Itc29mdC1ibHVlKTtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xuICBwYWRkaW5nOiBjbGFtcCgzLjVyZW0sIDd2dywgNXJlbSkgY2xhbXAoMS41cmVtLCA0dncsIDMuNXJlbSk7XG59XG5cbi53cml0aW5nLXJlbGF0ZWRfX2V5ZWJyb3cge1xuICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbjogMCAwIDAuNXJlbTtcbn1cblxuLndyaXRpbmctcmVsYXRlZCBoMiB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbiAgZm9udC1zaXplOiB2YXIoLS10ZXh0LWgzKTtcbiAgbWFyZ2luOiAwO1xufVxuXG4ud3JpdGluZy1yZWxhdGVkX19ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiBjbGFtcCgxcmVtLCAzdncsIDIuNXJlbSk7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIG1pbm1heCgwLCAxZnIpKTtcbiAgbWFyZ2luLXRvcDogMS4yNXJlbTtcbn1cblxuLndyaXRpbmctcmVsYXRlZC1jYXJkIHtcbiAgYmFja2dyb3VuZDogY29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLWNvbG9yLXdoaXRlKSAzOCUsIHZhcigtLWNvbG9yLXNvZnQtYmx1ZSkpO1xuICBib3JkZXItcmFkaXVzOiAwLjhyZW07XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiAwLjQ1cmVtO1xuICBtaW4taGVpZ2h0OiA5cmVtO1xuICBwYWRkaW5nOiBjbGFtcCgxLjI1cmVtLCAzdncsIDEuNzVyZW0pO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMTYwbXMgZWFzZSwgdHJhbnNmb3JtIDE2MG1zIGVhc2U7XG59XG5cbi53cml0aW5nLXJlbGF0ZWQtY2FyZDpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLXdhcm0td2hpdGUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG59XG5cbi53cml0aW5nLXJlbGF0ZWQtY2FyZCA+IHNwYW4ge1xuICBjb2xvcjogY29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLWNvbG9yLXByaW1hcnkpIDQ4JSwgdHJhbnNwYXJlbnQpO1xuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1tb25vKTtcbiAgZm9udC1zaXplOiB2YXIoLS10ZXh0LXhzKTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDZlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLndyaXRpbmctcmVsYXRlZC1jYXJkIHN0cm9uZyB7XG4gIGFsaWduLXNlbGY6IHN0YXJ0O1xuICBmb250LXNpemU6IHZhcigtLXRleHQtYmFzZSk7XG59XG5cbi53cml0aW5nLWRldGFpbC1ub3QtZm91bmQge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci13YXJtLXdoaXRlKTtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xuICBtaW4taGVpZ2h0OiA1MHZoO1xuICBwYWRkaW5nOiA1cmVtIGNsYW1wKDEuNXJlbSwgNHZ3LCAzLjVyZW0pO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi53cml0aW5nLWRldGFpbC1ub3QtZm91bmQgYSB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4cmVtKSB7XG4gIC53cml0aW5nLWRldGFpbC1oZXJvIGgxIHtcbiAgICBmb250LXNpemU6IGNsYW1wKDIuNXJlbSwgN3Z3LCA0LjI1cmVtKTtcbiAgfVxuXG4gIC53cml0aW5nLWRldGFpbC1jb250ZW50X19pbm5lciB7XG4gICAgZ2FwOiAycmVtO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDAsIDFmcik7XG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJ0b2NcIiBcImFydGljbGVcIiBcImF1dGhvclwiO1xuICB9XG5cbiAgLndyaXRpbmctdG9jIHtcbiAgICBwb3NpdGlvbjogc3RhdGljO1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAzNnJlbSkge1xuICAud3JpdGluZy1kZXRhaWwtaGVybyxcbiAgLndyaXRpbmctZGV0YWlsLWNvbnRlbnQsXG4gIC53cml0aW5nLXJlbGF0ZWQge1xuICAgIHBhZGRpbmctaW5saW5lOiAxLjI1cmVtO1xuICB9XG5cbiAgLndyaXRpbmctZGV0YWlsLWhlcm8gaDEge1xuICAgIGZvbnQtc2l6ZTogY2xhbXAoMi4yNXJlbSwgMTB2dywgMy41cmVtKTtcbiAgfVxuXG4gIC53cml0aW5nLWRldGFpbC1oZXJvX19tZXRhIHtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gIH1cblxuICAud3JpdGluZy1yZWxhdGVkX19ncmlkIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgwLCAxZnIpO1xuICB9XG5cbiAgLndyaXRpbmctYXV0aG9yIHtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBhZGRpbmctaW5saW5lOiAwO1xuICB9XG59XG5cbkBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKSB7XG4gIC53cml0aW5nLXRvYyBhLFxuICAud3JpdGluZy1yZWxhdGVkLWNhcmQge1xuICAgIHRyYW5zaXRpb246IG5vbmU7XG4gIH1cblxuICAud3JpdGluZy1yZWxhdGVkLWNhcmQ6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 2745:
/*!***************************************************!*\
  !*** ./src/app/tech/writing/writing.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WritingComponent: () => (/* binding */ WritingComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class WritingComponent {
  static {
    this.ɵfac = function WritingComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || WritingComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: WritingComponent,
      selectors: [["app-writing"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 2,
      vars: 0,
      template: function WritingComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "writing works!");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3cml0aW5nLmNvbXBvbmVudC5zY3NzIn0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdGVjaC93cml0aW5nL3dyaXRpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLG9LQUFvSyIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_tech_tech_module_ts.js.map