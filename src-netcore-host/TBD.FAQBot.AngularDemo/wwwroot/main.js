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
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"] }
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-header></app-header>\n<router-outlet></router-outlet>\n<app-footer></app-footer>\n<div style=\"right: 0; bottom: 0; position: fixed;\">\n  <!-- <app-chat-bot-modal></app-chat-bot-modal> -->\n  <app-azure-chat-bot></app-azure-chat-bot>\n</div>\n"

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

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'chat-bot';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _chat_bot_modal_chat_bot_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./chat-bot-modal/chat-bot-modal.component */ "./src/app/chat-bot-modal/chat-bot-modal.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _azure_chat_bot_azure_chat_bot_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./azure-chat-bot/azure-chat-bot.component */ "./src/app/azure-chat-bot/azure-chat-bot.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _chat_bot_modal_chat_bot_modal_component__WEBPACK_IMPORTED_MODULE_7__["ChatBotModalComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_8__["SignupComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"],
                _azure_chat_bot_azure_chat_bot_component__WEBPACK_IMPORTED_MODULE_12__["AzureChatBotComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/azure-chat-bot/azure-chat-bot.component.css":
/*!*************************************************************!*\
  !*** ./src/app/azure-chat-bot/azure-chat-bot.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  #BotChatGoesHere {\r\n    float: left;\r\n    height: 600px;\r\n    position: relative;\r\n    width: 460px;\r\n    background-color: white;\r\n  }\r\n  @media(max-width:475px) {\r\n    #BotChatGoesHere {\r\n      float: left;\r\n      height: 400px;\r\n      position: relative;\r\n      width: 100vw;\r\n      background-color: white;\r\n    }\r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXp1cmUtY2hhdC1ib3QvYXp1cmUtY2hhdC1ib3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiRUFBRTtJQUNFLFlBQVk7SUFDWixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYix3QkFBd0I7R0FDekI7RUFDRDtJQUNFO01BQ0UsWUFBWTtNQUNaLGNBQWM7TUFDZCxtQkFBbUI7TUFDbkIsYUFBYTtNQUNiLHdCQUF3QjtLQUN6QjtHQUNGIiwiZmlsZSI6InNyYy9hcHAvYXp1cmUtY2hhdC1ib3QvYXp1cmUtY2hhdC1ib3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiAgI0JvdENoYXRHb2VzSGVyZSB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGhlaWdodDogNjAwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogNDYwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgQG1lZGlhKG1heC13aWR0aDo0NzVweCkge1xyXG4gICAgI0JvdENoYXRHb2VzSGVyZSB7XHJcbiAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHdpZHRoOiAxMDB2dztcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbiAgfVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/azure-chat-bot/azure-chat-bot.component.html":
/*!**************************************************************!*\
  !*** ./src/app/azure-chat-bot/azure-chat-bot.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"BotChatGoesHere\" [hidden]=\"hideChatForm\" [@openClose]=\"hideChatForm ? 'open' : 'closed'\"></div>\n\n<button class=\"btn btn--large\" (click)=\"startChat()\" *ngIf=\"hideChatForm\">\n  <svg aria-hidden=\"true\" class=\"btn__icon\">\n    <use xlink:href=\"#icon-customer-care\"></use>\n  </svg>\n  <span class=\"btn__icon-text\">Ask for help</span>\n</button>\n"

/***/ }),

/***/ "./src/app/azure-chat-bot/azure-chat-bot.component.ts":
/*!************************************************************!*\
  !*** ./src/app/azure-chat-bot/azure-chat-bot.component.ts ***!
  \************************************************************/
/*! exports provided: AzureChatBotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AzureChatBotComponent", function() { return AzureChatBotComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AzureChatBotComponent = /** @class */ (function () {
    function AzureChatBotComponent(elementRef, renderer2) {
        this.elementRef = elementRef;
        this.renderer2 = renderer2;
        this.hideChatForm = true;
    }
    AzureChatBotComponent.prototype.ngOnInit = function () {
        this.loadAzureChatBot();
    };
    AzureChatBotComponent.prototype.startChat = function () {
        this.hideChatForm = false;
    };
    AzureChatBotComponent.prototype.endChat = function () {
        this.hideChatForm = true;
    };
    AzureChatBotComponent.prototype.loadAzureChatBot = function () {
        var params = BotChat.queryParams(location.search);
        var user = {
            id: params['userid'] || 'userid',
            name: params['username'] || 'You'
        };
        var bot = {
            id: params['botid'] || 'botid',
            name: params['botname'] || 'botname'
        };
        window.botchatDebug = params['debug'] && params['debug'] === 'true';
        var speechOptions = {
            speechRecognizer: new BotChat.Speech.BrowserSpeechRecognizer(),
            speechSynthesizer: new BotChat.Speech.BrowserSpeechSynthesizer()
        };
        BotChat.App({
            bot: bot,
            locale: params['locale'],
            resize: 'detect',
            // sendTyping: true,    // defaults to false. set to true to send 'typing' activities to bot (and other users) when user is typing
            speechOptions: speechOptions,
            user: user,
            directLine: {
                secret: 'yKz3-z_ndWI.cwA._eg.YGEC3MjKXt6JB55KeY0cHRL6aHJVdQSWmFA1JpeTR6s',
                webSocket: params['webSocket'] && params['webSocket'] === 'true' // defaults to true
            }
        }, document.getElementById('BotChatGoesHere'));
    };
    AzureChatBotComponent.prototype.ngAfterViewInit = function () {
        var el = this.elementRef.nativeElement.querySelector('.wc-header');
        var closeIcon = document.createElement('span');
        var text = this.renderer2.createText('X');
        this.renderer2.setStyle(closeIcon, 'float', 'right');
        this.renderer2.appendChild(closeIcon, text);
        this.renderer2.insertBefore(el, closeIcon, el.firstChild);
        if (el) {
            el.addEventListener('click', this.endChat.bind(this));
        }
    };
    AzureChatBotComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-azure-chat-bot',
            template: __webpack_require__(/*! ./azure-chat-bot.component.html */ "./src/app/azure-chat-bot/azure-chat-bot.component.html"),
            styles: [__webpack_require__(/*! ./azure-chat-bot.component.css */ "./src/app/azure-chat-bot/azure-chat-bot.component.css")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('openClose', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('open => closed', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(100%)' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(800)
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]])
    ], AzureChatBotComponent);
    return AzureChatBotComponent;
}());



/***/ }),

/***/ "./src/app/chat-bot-modal/chat-bot-modal.component.css":
/*!*************************************************************!*\
  !*** ./src/app/chat-bot-modal/chat-bot-modal.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form {\r\n    width: 350px !important;\r\n    height: 550px !important;\r\n}\r\n.input {\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n.message-container {\r\n    width: 350px !important;\r\n    height: 502px !important;\r\n}\r\n.message-header {\r\n    background-color: #4fc143;\r\n    cursor: pointer;\r\n    padding: 10px;\r\n    color: white;\r\n    margin-bottom: 10px;\r\n}\r\n.message-header svg {\r\n    color: white;\r\n}\r\n.input__select-arrow {\r\n    color: black;\r\n    cursor: pointer;\r\n}\r\n.message-content {\r\n    overflow: auto;\r\n    height: 95%;\r\n}\r\n.message-block {\r\n    margin-top: 10px;\r\n}\r\n.bot-message {\r\n    margin-top: 10px;\r\n    position: relative;\r\n    width: 200px;\r\n    min-height: 35px;\r\n    background: #4fc143;\r\n    border-radius: 5px;\r\n    line-height: 50px;\r\n    margin-left: 10px;\r\n    word-break: break-word;\r\n    color: white;\r\n    padding: 5px;\r\n    line-height: 18px;\r\n}\r\n.bot-message::after {\r\n    content: \"\";\r\n    display: block;\r\n    position: absolute;\r\n    width: 0;\r\n    height: 0;\r\n    border: 8px solid transparent;\r\n    border-right-color: #4fc143;\r\n    top: 8px;\r\n    left: -16px;\r\n}\r\n.user-message {\r\n    float: right;\r\n    margin-top: 10px;\r\n    margin-right: 5px;\r\n    position: relative;\r\n    width: 200px;\r\n    min-height: 35px;\r\n    background: #f0f2f2;\r\n    border-radius: 5px;\r\n    line-height: 50px;\r\n    margin-left: 10px;\r\n    word-break: break-word;\r\n    color: black;\r\n    padding: 5px;\r\n    line-height: 18px;\r\n  }\r\n.user-message:after {\r\n    content: '';\r\n    width: 0;\r\n    height: 0;\r\n    position: absolute;\r\n    top: 5px;\r\n    right: -16px;\r\n    border: solid 8px;\r\n    border-color: transparent transparent transparent #f0f2f2;\r\n    font-size: 0;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC1ib3QtbW9kYWwvY2hhdC1ib3QtbW9kYWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHdCQUF3QjtJQUN4Qix5QkFBeUI7Q0FDNUI7QUFDRDtJQUNJLFdBQVc7SUFDWCxVQUFVO0NBQ2I7QUFDRDtJQUNJLHdCQUF3QjtJQUN4Qix5QkFBeUI7Q0FDNUI7QUFDRDtJQUNJLDBCQUEwQjtJQUMxQixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGFBQWE7SUFDYixvQkFBb0I7Q0FDdkI7QUFDRDtJQUNJLGFBQWE7Q0FDaEI7QUFDRDtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7Q0FDbkI7QUFDRDtJQUNJLGVBQWU7SUFDZixZQUFZO0NBQ2Y7QUFFRDtJQUNJLGlCQUFpQjtDQUNwQjtBQUVEO0lBQ0ksaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLGFBQWE7SUFDYixrQkFBa0I7Q0FDckI7QUFDQTtJQUNHLFlBQVk7SUFDWixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxVQUFVO0lBQ1YsOEJBQThCO0lBQzlCLDRCQUE0QjtJQUM1QixTQUFTO0lBQ1QsWUFBWTtDQUNmO0FBRUQ7SUFDSSxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixhQUFhO0lBQ2Isa0JBQWtCO0dBQ25CO0FBRUQ7SUFDRSxZQUFZO0lBQ1osU0FBUztJQUNULFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsU0FBUztJQUNULGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsMERBQTBEO0lBQzFELGFBQWE7R0FDZCIsImZpbGUiOiJzcmMvYXBwL2NoYXQtYm90LW1vZGFsL2NoYXQtYm90LW1vZGFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb3JtIHtcclxuICAgIHdpZHRoOiAzNTBweCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiA1NTBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5pbnB1dCB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcbi5tZXNzYWdlLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMzUwcHggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogNTAycHggIWltcG9ydGFudDtcclxufVxyXG4ubWVzc2FnZS1oZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRmYzE0MztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbi5tZXNzYWdlLWhlYWRlciBzdmcge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5pbnB1dF9fc2VsZWN0LWFycm93IHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4ubWVzc2FnZS1jb250ZW50IHtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgaGVpZ2h0OiA5NSU7XHJcbn1cclxuXHJcbi5tZXNzYWdlLWJsb2NrIHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5ib3QtbWVzc2FnZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgbWluLWhlaWdodDogMzVweDtcclxuICAgIGJhY2tncm91bmQ6ICM0ZmMxNDM7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBsaW5lLWhlaWdodDogNTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgd29yZC1icmVhazogYnJlYWstd29yZDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG59XHJcbiAuYm90LW1lc3NhZ2U6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gICAgYm9yZGVyOiA4cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItcmlnaHQtY29sb3I6ICM0ZmMxNDM7XHJcbiAgICB0b3A6IDhweDtcclxuICAgIGxlZnQ6IC0xNnB4O1xyXG59XHJcblxyXG4udXNlci1tZXNzYWdlIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDM1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjBmMmYyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDUwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMThweDtcclxuICB9XHJcblxyXG4gIC51c2VyLW1lc3NhZ2U6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIGhlaWdodDogMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNXB4O1xyXG4gICAgcmlnaHQ6IC0xNnB4O1xyXG4gICAgYm9yZGVyOiBzb2xpZCA4cHg7XHJcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICNmMGYyZjI7XHJcbiAgICBmb250LXNpemU6IDA7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/chat-bot-modal/chat-bot-modal.component.html":
/*!**************************************************************!*\
  !*** ./src/app/chat-bot-modal/chat-bot-modal.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form *ngIf=\"showChatForm\" class=\"bg-color-white\">\n  <div class=\"message-container\">\n    <div class=\"message-header\" (click)=\"closeChat()\">\n      <span>Chatting</span>\n      <svg class=\"input__select-arrow\" aria-hidden=\"true\">\n        <use xlink:href=\"#icon-chevron-down\"></use>\n      </svg>\n    </div>\n    <div class=\"message-content\">\n      <div *ngFor=\"let message of messageList\" class=\"message-block\">\n        <div class=\"user-message\">\n          <span>{{message.question}}</span>\n        </div>\n        <div style=\"clear: both\"></div>\n        <div class=\"bot-message\">\n          <span>{{message.answer}}</span>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"input js-input\">\n    <div class=\"input__inner\">\n      <input class=\"input__field\" placeholder=\"Your question\" [(ngModel)]=\"question\" name=\"question\" (keyup.enter)=\"sendMessage()\"\n        autocomplete=\"off\" autofocus>\n      <svg class=\"input__select-arrow\" aria-hidden=\"true\" (click)=\"sendMessage()\">\n        <use xlink:href=\"#icon-feedback\"></use>\n      </svg>\n    </div>\n    <div class=\"input__error-text\">Lorem ipsum dolor sit amet</div>\n  </div>\n</form>\n<button class=\"btn btn--large\" (click)=\"startChat()\" *ngIf=\"!showChatForm\">\n  <svg aria-hidden=\"true\" class=\"btn__icon\">\n    <use xlink:href=\"#icon-customer-care\"></use>\n  </svg>\n  <span class=\"btn__icon-text\">Ask for help</span>\n</button>"

/***/ }),

/***/ "./src/app/chat-bot-modal/chat-bot-modal.component.ts":
/*!************************************************************!*\
  !*** ./src/app/chat-bot-modal/chat-bot-modal.component.ts ***!
  \************************************************************/
/*! exports provided: ChatBotModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatBotModalComponent", function() { return ChatBotModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _chat_bot_modal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat-bot-modal.service */ "./src/app/chat-bot-modal/chat-bot-modal.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChatBotModalComponent = /** @class */ (function () {
    function ChatBotModalComponent(chatBotService) {
        this.chatBotService = chatBotService;
        this.showChatForm = false;
        this.question = '';
        this.answer = '';
        this.messageList = [];
    }
    ChatBotModalComponent.prototype.ngOnInit = function () {
    };
    ChatBotModalComponent.prototype.startChat = function () {
        this.showChatForm = true;
    };
    ChatBotModalComponent.prototype.closeChat = function () {
        this.showChatForm = false;
    };
    ChatBotModalComponent.prototype.sendMessage = function () {
        var _this = this;
        this.messageList.push({
            question: this.question,
            answer: 'Loading'
        });
        var requestData = {
            question: this.question
        };
        this.chatBotService.post(requestData).subscribe(function (data) {
            if (data) {
                _this.messageList[_this.messageList.length - 1].answer = data.answers[0].answer;
            }
        });
        this.question = '';
    };
    ChatBotModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chat-bot-modal',
            template: __webpack_require__(/*! ./chat-bot-modal.component.html */ "./src/app/chat-bot-modal/chat-bot-modal.component.html"),
            styles: [__webpack_require__(/*! ./chat-bot-modal.component.css */ "./src/app/chat-bot-modal/chat-bot-modal.component.css")],
            providers: [_chat_bot_modal_service__WEBPACK_IMPORTED_MODULE_1__["ChatBotService"]]
        }),
        __metadata("design:paramtypes", [_chat_bot_modal_service__WEBPACK_IMPORTED_MODULE_1__["ChatBotService"]])
    ], ChatBotModalComponent);
    return ChatBotModalComponent;
}());



/***/ }),

/***/ "./src/app/chat-bot-modal/chat-bot-modal.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/chat-bot-modal/chat-bot-modal.service.ts ***!
  \**********************************************************/
/*! exports provided: Name, ChatBotService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Name", function() { return Name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatBotService", function() { return ChatBotService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Name = /** @class */ (function () {
    function Name() {
    }
    return Name;
}());

var ChatBotService = /** @class */ (function () {
    function ChatBotService(httpClient) {
        this.httpClient = httpClient;
    }
    ChatBotService.prototype.post = function (data) {
        // tslint:disable-next-line:max-line-length
        var url = 'https://hackathon-chat-bot.azurewebsites.net/qnamaker/knowledgebases/8fefbcbf-1428-4cde-928d-cd4e63f0388d/generateAnswer';
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': 'EndpointKey 82a22ca1-af08-413d-aa2a-8efbaf66ea4e'
        });
        var options = { headers: headers };
        return this.httpClient.post(url, data, options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) { return res; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) { return err; }));
    };
    ChatBotService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ChatBotService);
    return ChatBotService;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <!-- START GREEN DOT FOOTER - FULL BLOCK -->\n    <footer class=\"page-footer\" role=\"contentinfo\">\n      <div class=\"page-footer__inner\">\n        <div class=\"page-footer__links\">\n          <div class=\"page-footer__link-section\">\n            <button class=\"page-footer__link-heading js-page-footer-link-heading\">\n              <span class=\"page-footer__link-heading-text tnt tnt-link-heading-text1\">RELOADABLE DEBIT CARDS</span>\n              <svg class=\"page-footer__link-heading-arrow\" aria-hidden=\"true\">\n                <use xlink:href=\"#icon-chevron-down\"></use>\n              </svg>\n            </button>\n            <div class=\"page-footer__link-list js-page-footer-link-list\">\n              <div class=\"page-footer__link-list-inner js-page-footer-link-list-inner\">\n                <a class=\"page-footer__link tnt tnt-footer-link1\" href=\"/our-products/visa-rewards-card\">CASH BACK\n                  DEBIT CARD</a>\n                <a class=\"page-footer__link tnt tnt-footer-link2\" href=\"/our-products/new-everyday\">PREPAID CARD</a>\n                <a class=\"page-footer__link tnt tnt-footer-link3 js-append-query\" href=\"https://www.greendot.com/signup\">OPEN\n                  AN ACCOUNT</a>\n                <a class=\"page-footer__link tnt tnt-footer-link4 js-append-query\" href=\"https://www.greendot.com/register\">REGISTER\n                  CARD</a>\n                <a class=\"page-footer__link tnt tnt-footer-link5 js-append-query\" href=\"https://www.greendot.com/greendot/account/activate-card\">ACTIVATE\n                  CARD</a>\n                <a class=\"page-footer__link tnt tnt-footer-link6\" href=\"https://www.greendot.com/help/how-to-videos\">HOW-TO\n                  VIDEOS</a>\n                <a class=\"page-footer__link tnt tnt-footer-link7\" href=\"/how-it-works\">HOW IT WORKS</a>\n              </div>\n            </div>\n          </div>\n          <div class=\"page-footer__link-section\">\n            <button class=\"page-footer__link-heading js-page-footer-link-heading\">\n              <span class=\"page-footer__link-heading-text tnt tnt-link-heading-text2\">SERVICES &amp; FEATURES</span>\n              <svg class=\"page-footer__link-heading-arrow\" aria-hidden=\"true\">\n                <use xlink:href=\"#icon-chevron-down\"></use>\n              </svg>\n            </button>\n            <div class=\"page-footer__link-list js-page-footer-link-list\">\n              <div class=\"page-footer__link-list-inner js-page-footer-link-list-inner\">\n                <a class=\"page-footer__link tnt tnt-footer-link8\" href=\"/how-it-works/add-money\">DEPOSIT MONEY</a>\n                <a class=\"page-footer__link tnt tnt-footer-link9\" href=\"/how-it-works/add-money/direct-deposit\">DIRECT\n                  DEPOSIT</a>\n                <a class=\"page-footer__link tnt tnt-footer-link10\" href=\"/how-it-works/add-money/reload-at-register\">ADDING\n                  CASH</a>\n                <a class=\"page-footer__link tnt tnt-footer-link11\" href=\"/how-it-works/add-money/deposit-checks-smart-phone\">MOBILE\n                  DEPOSIT</a>\n                <a class=\"page-footer__link tnt tnt-footer-link12\" href=\"/how-it-works/send-receive-money/personal-checks\">PERSONAL\n                  CHECKS</a>\n                <a class=\"page-footer__link tnt tnt-footer-link13\" href=\"/how-it-works/add-money/ach-bank-transfers\">BANK\n                  TRANSFER</a>\n                <a class=\"page-footer__link tnt tnt-footer-link14\" href=\"/how-it-works/manage-money/online-bill-pay\">ONLINE\n                  BILL PAY</a>\n                <a class=\"page-footer__link tnt tnt-footer-link15\" href=\"/how-it-works/send-receive-money\">SEND &\n                  RECEIVE MONEY</a>\n                <a class=\"page-footer__link tnt tnt-footer-link16\" href=\"/how-it-works/manage-money/mobile-banking-app\">MOBILE\n                  APP</a>\n                <a class=\"page-footer__link tnt tnt-footer-link17\" href=\"/how-it-works/add-money/moneypak\">MONEYPAK</a>\n              </div>\n            </div>\n          </div>\n          <div class=\"page-footer__link-section\">\n            <button class=\"page-footer__link-heading js-page-footer-link-heading\">\n              <span class=\"page-footer__link-heading-text tnt tnt-link-heading-text3\">FOR CARDHOLDERS</span>\n              <svg class=\"page-footer__link-heading-arrow\" aria-hidden=\"true\">\n                <use xlink:href=\"#icon-chevron-down\"></use>\n              </svg>\n            </button>\n            <div class=\"page-footer__link-list js-page-footer-link-list\">\n              <div class=\"page-footer__link-list-inner js-page-footer-link-list-inner\">\n                <a class=\"page-footer__link tnt tnt-footer-link18 js-append-query\" href=\"https://www.greendot.com/greendot/login\">LOG\n                  IN</a>\n                <a class=\"page-footer__link tnt tnt-footer-link19\" href=\"https://www.attheregister.com/locations\">RELOAD\n                  LOCATIONS</a>\n                <a class=\"page-footer__link tnt tnt-footer-link20\" href=\"/how-it-works/manage-money/sms-text-account-alerts\">ACCOUNT\n                  ALERTS</a>\n                <a class=\"page-footer__link tnt tnt-footer-link21\" href=\"/about/legal#legal-pp\">PRIVACY</a>\n                <a class=\"page-footer__link tnt tnt-footer-link22\" href=\"https://www.aboutads.info/choices/\">AD CHOICES</a>\n                <a class=\"page-footer__link tnt tnt-footer-link23\" href=\"/about/legal\">LEGAL INFO</a>\n              </div>\n            </div>\n          </div>\n          <div class=\"page-footer__link-section\">\n            <button class=\"page-footer__link-heading js-page-footer-link-heading\">\n              <span class=\"page-footer__link-heading-text tnt tnt-link-heading-text4\">GREEN DOT</span>\n              <svg class=\"page-footer__link-heading-arrow\" aria-hidden=\"true\">\n                <use xlink:href=\"#icon-chevron-down\"></use>\n              </svg>\n            </button>\n            <div class=\"page-footer__link-list js-page-footer-link-list\">\n              <div class=\"page-footer__link-list-inner js-page-footer-link-list-inner\">\n                <a class=\"page-footer__link tnt tnt-footer-link24\" href=\"https://www.greendot.com/blog/\">BLOG</a>\n                <a class=\"page-footer__link tnt tnt-footer-link25\" href=\"/about\">ABOUT US</a>\n                <a class=\"page-footer__link tnt tnt-footer-link26\" href=\"/help\">HELP & FAQ'S</a>\n                <a class=\"page-footer__link tnt tnt-footer-link27\" href=\"/about/contact-us\">CONTACT US</a>\n                <a class=\"page-footer__link tnt tnt-footer-link28\" href=\"/about/reviews\">TESTIMONIALS</a>\n                <a class=\"page-footer__link tnt tnt-footer-link32\" href=\"/baas/\">PARTNER</a>\n                <a class=\"page-footer__link tnt tnt-footer-link29\" href=\"http://ir.greendot.com/phoenix.zhtml?c=235286&p=irol-irhome\">INVESTOR\n                  RELATIONS</a>\n                <a class=\"page-footer__link tnt tnt-footer-link30\" href=\"http://careers.greendot.com/\">CAREERS</a>\n                <a class=\"page-footer__link tnt tnt-footer-link31\" href=\"/about/docs/StateLicensingNotices(8-2018).pdf\">STATE\n                  LICENSING NOTICES</a>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"page-footer__copy\">\n          Apple, the Apple logo, and iPhone are trademarks of Apple Inc., registered in the U.S. and other countries.\n          App Store is\n          a service mark of Apple Inc.\n          <br> Google, Android and Google Play are trademarks of Google Inc., registered in the U.S. and other\n          countries.\n          <br>\n          <br> Prepaid cards are not available to Vermont residents.\n          <br>\n          <br> Cards provided by Green Dot Corporation. The MasterCard Card is issued by Green Dot Bank pursuant to a\n          license from\n          MasterCard International Incorporated. The Visa Card is issued by Green Dot Bank pursuant to a license from\n          Visa U.S.A\n          Inc. Green Dot Corporation is a member service provider for Green Dot Bank, Member FDIC. MasterCard and the\n          MasterCard\n          Brand Mark are registered trademarks of MasterCard International Incorporated. Visa is a registered trademark\n          of Visa\n          International Service Association. Green Dot is a registered trademark of Green Dot Corporation.\n          <br>\n          <br>Green Dot Bank operates under the following registered trade names: GoBank, Green Dot Bank and Bonneville\n          Bank. All\n          of these registered trade names are used by, and refer to, a single FDIC-insured bank, Green Dot Bank.\n          Deposits under\n          any of these trade names are deposits with Green Dot Bank and are aggregated for deposit insurance coverage.\n        </div>\n        <div class=\"page-footer__social\">\n          <div class=\"page-footer__social-inner\">\n            <div class=\"page-footer__social-heading\">Follow us on</div>\n            <a class=\"page-footer__social-link\" href=\"https://www.facebook.com/GreenDot\">\n              <svg class=\"page-footer__social-icon\" role=\"img\" aria-label=\"Facebook icon\">\n                <use xlink:href=\"#icon-facebook-circle\"></use>\n              </svg>\n            </a>\n            <a class=\"page-footer__social-link\" href=\"https://instagram.com/greendotcards\">\n              <svg class=\"page-footer__social-icon\" role=\"img\" aria-label=\"Instagram icon\">\n                <use xlink:href=\"#icon-instagram-circle\"></use>\n              </svg>\n            </a>\n            <a class=\"page-footer__social-link\" href=\"https://youtube.com/GreenDotPrepaid\">\n              <svg class=\"page-footer__social-icon\" role=\"img\" aria-label=\"YouTube icon\">\n                <use xlink:href=\"#icon-youtube-circle\"></use>\n              </svg>\n            </a>\n            <a class=\"page-footer__social-link\" href=\"https://twitter.com/greendotcards\">\n              <svg class=\"page-footer__social-icon\" role=\"img\" aria-label=\"Twitter icon\">\n                <use xlink:href=\"#icon-twitter-circle\"></use>\n              </svg>\n            </a>\n          </div>\n        </div>\n        <div class=\"page-footer__app-download\">\n          <a class=\"page-footer__app-download-badge page-footer__app-download-badge--ios\" href=\"https://itunes.apple.com/us/app/green-dot/id437092808?mt=8\"></a>\n          <a class=\"page-footer__app-download-badge page-footer__app-download-badge--android\" href=\"https://play.google.com/store/apps/details?id=com.cardinalcommerce.greendot&amp;hl=en\"></a>\n        </div>\n        <div class=\"page-footer__copyright flex-fixed flex page-footer__justify page-footer--gdb\">\n          <div>\n            <svg class=\"page-footer__copyright-dot\" role=\"img\" aria-label=\"Green Dot logo\">\n              <use xlink:href=\"#icon-circle\"></use>\n            </svg>© 2003-\n            <script>document.write(new Date().getFullYear())</script> Green Dot Corporation\n          </div>\n          <div class=\"page-footer__logo-secondary\"></div>\n        </div>\n      </div>\n    </footer>\n    <!-- END GREEN DOT FOOTER - FULL BLOCK -->"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
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

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- START GREEN DOT HEADER - FULL BLOCK -->\n<header class=\"page-header js-page-header page-header--full js-page-header-full page-header--brands-on page-header\"\n  role=\"banner\">\n  <div class=\"page-header__notification js-page-header-notification\">\n    <div class=\"page-header__notification-copy\">\n      <a class=\"page-header__notification-link\" href=\"https://www.greendot.com/how-it-works/add-money/tax-refund-center?utm_source=HPTop&utm_medium=InternalLink&utm_content=TopBar\">Get\n        a $25 Tax Refund Reward - Click here for more info</a>\n    </div>\n    <button class=\"page-header__notification-close-button js-page-header-notification-close-button\" aria-label=\"Close notification\">\n      <svg class=\"page-header__notification-close-icon\" aria-hidden=\"true\">\n        <use xlink:href=\"#icon-close\"></use>\n      </svg>\n    </button>\n  </div>\n  <div class=\"page-header__brands\">\n    <div class=\"page-header__brands-inner\">\n      <button class=\"page-header__brands-menu-button js-page-header-brands-menu-button\">Our Products\n        <svg class=\"page-header__brands-menu-button-arrow\" aria-hidden=\"true\">\n          <use xlink:href=\"#icon-chevron-down\"></use>\n        </svg>\n      </button>\n      <button class=\"page-header__brands-close-button js-page-header-brands-close-button\">\n        <svg class=\"page-header__brands-close-button-icon\" role=\"img\" aria-label=\"Close Our Brands\">\n          <use xlink:href=\"#icon-close-circle\"></use>\n        </svg>\n      </button>\n    </div>\n    <nav class=\"page-header__brands-navigation js-page-header-brands-navigation\">\n      <a class=\"page-header__brands-navigation-link\" href=\"https://secure.greendot.com/signup?utm_source=HP-CS-SF-1&amp;utm_medium=InternalLink\">\n        <div class=\"page-header__brands-navigation-link-subheading\">Cash Back</div>\n        <div class=\"page-header__brands-navigation-link-heading\">Debit Card</div>\n      </a>\n      <a class=\"page-header__brands-navigation-link\" href=\"https://secure.greendot.com/signup/?Card=sfevc&amp;utm_source=HP-CS-OS-1&amp;utm_medium=InternalLink\">\n        <div class=\"page-header__brands-navigation-link-subheading\">Reloadable</div>\n        <div class=\"page-header__brands-navigation-link-heading\">Prepaid Card</div>\n      </a>\n      <a class=\"page-header__brands-navigation-link\" href=\"https://www.greendot.com/platinum?utm_source=HP-CS-1&amp;utm_medium=InternalLink\">\n        <div class=\"page-header__brands-navigation-link-subheading\">Platinum</div>\n        <div class=\"page-header__brands-navigation-link-heading\">Credit Card</div>\n      </a>\n      <a class=\"page-header__brands-navigation-link\" href=\"https://www.moneypak.com?utm_source=HP-CS-1&amp;utm_medium=InternalLink\">\n        <div class=\"page-header__brands-navigation-link-subheading\">&nbsp;</div>\n        <div class=\"page-header__brands-navigation-link-heading\">MoneyPak</div>\n      </a>\n      <a class=\"page-header__brands-navigation-link\" href=\"https://www.greendot.com/how-it-works/add-money/tax-refund-center\">\n        <div class=\"page-header__brands-navigation-link-subheading\">Get your</div>\n        <div class=\"page-header__brands-navigation-link-heading\">Tax Refund Fast</div>\n      </a>\n      <a class=\"page-header__brands-navigation-link page-header__brands-navigation-link--right\" href=\"/baas/\">\n        <div class=\"page-header__brands-navigation-link-subheading\"> </div>\n        <div class=\"page-header__brands-navigation-link-heading\">Banking as a Service</div>\n      </a>\n    </nav>\n  </div>\n  <div class=\"page-header__inner js-page-header-inner\">\n    <a class=\"page-header__logo\" href=\"/\" aria-label=\"Home\"></a>\n    <div class=\"page-header__menu\">\n      <a class=\"page-header__menu-login js-append-query\" routerLink=\"/home\">Home\n      </a>\n      &nbsp;&nbsp;&nbsp;\n      <a class=\"page-header__menu-login js-append-query\"\n        routerLink=\"/signup\">Register Card</a>\n    </div>\n  </div>\n  <nav class=\"page-navigation js-page-navigation\" role=\"navigation\">\n\n    <div class=\"page-navigation__item\">\n      <a class=\"page-navigation__item-link tnt tnt-nav-link1\" routerLink=\"/home\">Home</a>\n    </div>\n    <svg class=\"page-navigation__divider\" aria-hidden=\"true\">\n      <use xlink:href=\"#icon-circle\"></use>\n    </svg>\n    <div class=\"page-navigation__buttons\">\n      <a class=\"page-navigation__btn page-navigation__btn--cta-secondary tnt tnt-nav-button1 js-append-query\"\n        routerLink=\"/signup\">Register\n        Card</a>\n    </div>\n  </nav>\n</header>\n<!-- END GREEN DOT HEADER - FULL BLOCK -->"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
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

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-container\">\n  <main class=\"page-main\" role=\"main\" id=\"page-main\">\n    <!-- START HERO - CTA LIST BLOCK -->\n    <section class=\"js-hero bg-color-white gap-bottom-zero hero--hide-arrow js-adobe-target-hero-default\">\n      <div class=\"hero__image-container\">\n        <picture class=\"hero__image js-hero-image tnt tnt-image\">\n          <source media=\"(min-width: 1280px)\" srcset=\"/assets/img/greendot-a-new-kind-of-bank-character-2560x900.jpg, /assets/img/greendot-a-new-kind-of-bank-character-5120x1800.jpg 2x\">\n          <source media=\"(min-width: 1144px)\" srcset=\"/assets/img/greendot-a-new-kind-of-bank-character-1144x650.jpg, /assets/img/greendot-a-new-kind-of-bank-character-2288x1300.jpg 2x\">\n          <source media=\"(min-width: 768px)\" srcset=\"/assets/img/greendot-a-new-kind-of-bank-character-768x450.jpg, /assets/img/greendot-a-new-kind-of-bank-character-1536x900.jpg 2x\">\n          <source media=\"(min-width: 375px)\" srcset=\"/assets/img/greendot-a-new-kind-of-bank-character-375x600.jpg, /assets/img/greendot-a-new-kind-of-bank-character-750x1200.jpg 2x\">\n          <source srcset=\"/assets/img/greendot-a-new-kind-of-bank-character-320x600.jpg, /assets/img/greendot-a-new-kind-of-bank-character-640x1200.jpg 2x\"><img\n            class=\"js-hero-image-img\" src=\"/assets/img/greendot-a-new-kind-of-bank-character-1144x650.jpg\" alt=\"Green Dot - A New Kind of Bank\">\n        </picture>\n      </div>\n      <div class=\"hero__content\">\n        <div class=\"hero__content-inner\">\n          <h1 class=\"hero__heading tnt tnt-heading\"><strong>A new kind of bank</strong><a class=\"hero__heading-link-small\"\n              href=\"#\"></a>\n          </h1>\n          <p class=\"hero__copy tnt tnt-copy\"></p>\n          <a class=\"hero__cta tnt tnt-cta btn--width-medium js-append-query\" href=\"https://secure.greendot.com/signup?utm_source=GDTHP_Hero_F2D&utm_medium=InternalLink&utm_campaign=Smart&utm_content=Hero\">Get\n            Started</a>\n          <a class=\"hero__cta-secondary tnt tnt-cta-secondary\" href=\"https://m2.greendot.com/locate\">Or, find it at\n            stores nationwide</a>\n          <div class=\"hero__disclaimer-copy\"></div>\n        </div>\n        <button class=\"hero__arrow js-hero-arrow\" title=\"Scroll to next section\">\n          <svg class=\"hero__arrow-icon\" role=\"img\" aria-label=\"Arrow down\">\n            <use xlink:href=\"#icon-chevron-down\"></use>\n          </svg>\n        </button>\n      </div>\n    </section>\n    <!-- END HERO - CTA LIST BLOCK -->\n\n    <!-- ****************************** -->\n    <!-- BEGIN PROMO BLOCK B1: 2 Column Image left -->\n    <!-- ****************************** -->\n\n    <!-- START TWO COLUMN IMAGE LEFT BLOCK -->\n    <section class=\"two-column-text-image-pair bg-color-darker js-adobe-target-banner-dd\">\n      <div class=\"grid-container two-column-text-image-pair__content\">\n        <div class=\"column small-4 medium-4 large-6 two-column-text-image-pair__flex-container two-column-text-image-pair__flex-container--first\">\n          <picture class=\"two-column-text-image-pair__image tnt tnt-image\">\n            <source media=\"(min-width: 1144px)\" srcset=\"/assets/img/gd-bts-homepage-banner-asap-dd-525x330.png, /assets/img/gd-bts-homepage-banner-asap-dd-1050x660.png 2x\">\n            <source media=\"(min-width: 768px)\" srcset=\"/assets/img/gd-bts-homepage-banner-asap-dd-342x215.png, /assets/img/gd-bts-homepage-banner-asap-dd-684x430.png 2x\">\n            <source media=\"(min-width: 375px)\" srcset=\"/assets/img/gd-bts-homepage-banner-asap-dd-290x182.png, /assets/img/gd-bts-homepage-banner-asap-dd-580x364.png 2x\">\n            <source srcset=\"/assets/img/gd-bts-homepage-banner-asap-dd-290x182.png, /assets/img/gd-bts-homepage-banner-asap-dd-580x364.png 2x\"><img\n              src=\"/assets/img/gd-bts-homepage-banner-asap-dd-525x330.png\" alt=\"ASAP Direct Deposit. Get your pay up to 2 days before payday.\nGet your government benefits up to 4 days before benefits day.\">\n          </picture>\n        </div>\n        <div class=\"column small-4 medium-4 large-6 two-column-text-image-pair__flex-container two-column-text-image-pair__flex-container--last\">\n          <h4 class=\"two-column-text-image-pair__heading tnt tnt-heading type-align-center\">Get your pay up to\n            <strong>2 days</strong> before payday.<br>Get your government benefits up to <strong>4 days</strong>\n            before benefits day.</h4>\n          <p class=\"type-align-center gap-top-zero\"><a href=\"https://www.greendot.com/how-it-works/add-money/direct-deposit?utm_source=GDTHP_DD&utm_medium=InternalLink&utm_campaign=Smart&utm_content=banner\"\n              style=\"text-decoration:underline;\">Learn More</a></p>\n          <a class=\"two-column-text-image-pair__cta tnt tnt-cta btn btn--width-medium center block gap-top-medium\" href=\"https://secure.greendot.com/signup?utm_source=GDTHP_DD&utm_medium=InternalLink&utm_campaign=Smart&utm_content=banner\">OPEN\n            A NEW ACCOUNT</a>\n          <div class=\"two-column-text-image-pair__disclaimer-copy gap-top-medium\">Timing depends on deposit\n            verification and when we get notice from your employer, and may vary from pay period to pay period. But\n            when we get it, you’ll get it.</div>\n        </div>\n      </div>\n    </section>\n    <!-- END TWO COLUMN IMAGE LEFT BLOCK -->\n\n    <!-- ****************************** -->\n    <!-- END PROMO BLOCK B1: 2 Column Image left -->\n    <!-- ****************************** -->\n\n    <!-- START MODULE CONTAINER - TWO COLUMN BLOCK -->\n    <section class=\"module-container module-container--two-column module-container--first-column-one-third bg-color-dark pad-top-xlarge pad-bottom-large js-adobe-target-banner-cashback hidden\">\n      <div class=\"module-container__content\">\n        <div class=\"module-container__content-inner\">\n          <div class=\"module-container__content-inner-column module-container__content-inner-column--first\">\n            <!-- ADD MODULES HERE -->\n            <!-- START IMAGE - ONE THIRD MODULE-->\n            <picture class=\"image\">\n              <source media=\"(min-width: 1144px)\" srcset=\"/assets/img/greendot-cash-back-visa-debit-card-340x191.jpg, /assets/img/greendot-cash-back-visa-debit-card-680x382.jpg 2x\">\n              <source media=\"(min-width: 768px)\" srcset=\"/assets/img/greendot-cash-back-visa-debit-card-220x124.jpg, /assets/img/greendot-cash-back-visa-debit-card-440x248.jpg 2x\">\n              <source media=\"(min-width: 375px)\" srcset=\"/assets/img/greendot-cash-back-visa-debit-card-340x191.jpg, /assets/img/greendot-cash-back-visa-debit-card-680x382.jpg 2x\">\n              <source srcset=\"/assets/img/greendot-cash-back-visa-debit-card-290x163.jpg, /assets/img/greendot-cash-back-visa-debit-card-580x326.jpg 2x\"><img\n                src=\"/assets/img/greendot-cash-back-visa-debit-card-340x191.jpg\" alt=\"Green Dot Cash Back Visa Debit Card\">\n            </picture>\n            <!-- END IMAGE - ONE THIRD MODULE-->\n          </div>\n          <div class=\"module-container__content-inner-column module-container__content-inner-column--second\">\n            <!-- ADD MODULES HERE -->\n            <!-- START TEXT - H4 MODULE-->\n            <h3 class=\"text type-xlarge type-align-center gap-bottom-small\">Earn 5% Cash Back\n            </h3>\n            <!-- END TEXT - H4 MODULE-->\n            <!-- START TEXT - H4 MODULE-->\n            <p class=\"text type-medium type-align-center\">on everyday purchases, up to $100 every year. <a href=\"https://www.greendot.com/our-products/visa-rewards-card\">Learn\n                More</a>\n            </p>\n            <!-- END TEXT - H4 MODULE-->\n\n            <a href=\"https://secure.greendot.com/signup?utm_source=GDTHP_Cashback&utm_medium=InternalLink&utm_campaign=Smart&utm_content=banner\">\n              <!-- START BUTTON MODULE-->\n              <button class=\"btn btn--primary btn btn--width-medium center block\">Open a new account</button>\n              <!-- END BUTTON MODULE-->\n            </a>\n            <!-- START TEXT - PARAGRAPH MODULE-->\n            <p class=\"text type-xxsmall type-align-center gap-top-medium\">Fees apply.\n            </p>\n            <!-- END TEXT - PARAGRAPH MODULE-->\n          </div>\n        </div>\n      </div>\n    </section>\n    <!-- END MODULE CONTAINER - TWO COLUMN BLOCK -->\n\n    <!-- START MODULE CONTAINER BLOCK -->\n    <section class=\"module-container bg-color-white pad-bottom-zero js-adobe-target-banner-tv hidden\">\n      <div class=\"module-container__content\">\n        <div class=\"module-container__content-inner\">\n          <!-- ADD MODULES HERE -->\n          <!-- START DIVIDER - HEADING BLOCK -->\n          <div class=\"divider divider--heading\">\n            <div class=\"grid-container\">\n              <div class=\"column-all\">\n                <div class=\"divider__inner\">\n                  <div class=\"divider__decoration\" aria-hidden=\"true\">............................................................................................................................................................................................................................................................................</div>\n                  <h2 class=\"divider__heading\"><span class=\"divider__heading-inner tnt tnt-heading\">Green Dot on TV</span></h2>\n                </div>\n              </div>\n            </div>\n          </div>\n          <!-- END DIVIDER - HEADING BLOCK -->\n          <!-- START VIDEO - VIMEO MODULE-->\n          <div class=\"video video--large pad-top-medium\">\n            <iframe class=\"video__player js-video-player bg-color-white\" src=\"https://player.vimeo.com/video/258677422\"\n              webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>\n          </div>\n          <!-- END VIDEO - VIMEO MODULE-->\n        </div>\n      </div>\n    </section>\n    <!-- END MODULE CONTAINER BLOCK -->\n\n    <!-- ******************** -->\n    <!-- BEGIN BLOCK: Divider -->\n    <!-- ******************** -->\n\n    <!-- START DIVIDER - HEADING BLOCK -->\n    <div class=\"divider divider--heading pad-top-xlarge  pad-bottom-zero gap-bottom-zero bg-color-white\">\n      <div class=\"grid-container\">\n        <div class=\"column-all\">\n          <div class=\"divider__inner\">\n            <div class=\"divider__decoration\" aria-hidden=\"true\">............................................................................................................................................................................................................................................................................</div>\n            <h2 class=\"divider__heading\"><span class=\"divider__heading-inner tnt tnt-heading\">Why Green Dot</span></h2>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- END DIVIDER - HEADING BLOCK -->\n\n    <!-- ****************** -->\n    <!-- END BLOCK: Divider -->\n    <!-- ****************** -->\n\n\n    <!-- START FOUR COLUMN FEATURE - ANCHOR BLOCK -->\n    <section class=\"n-column-feature bg-color-white\">\n      <div class=\"grid-container\">\n        <!-- START 2 COLUMN FEATURE ROW -->\n        <div class=\"column-spacer small-0 medium-0 large-1 large-break\"></div>\n        <div class=\"column small-4 medium-4 large-5\"><a class=\"n-column-feature__inner\" href=\"/how-it-works/add-money/direct-deposit\">\n            <div class=\"n-column-feature__image-container\">\n              <svg class=\"n-column-feature__icon tnt tnt-image1\" role=\"img\" aria-label=\"Early Direct Deposit icon\">\n                <use xlink:href=\"#icon-direct-deposit\"></use>\n              </svg>\n            </div>\n            <h4 class=\"n-column-feature__heading  tnt tnt-heading1\">ASAP Direct Deposit™</h4>\n            <p class=\"n-column-feature__copy  tnt tnt-copy1\">Get your pay up to 2 days before payday! Get your\n              government benefits up to 4 days before benefits day!</p>\n          </a>\n        </div>\n        <div class=\"column small-4 medium-4 large-5\"><a class=\"n-column-feature__inner\" href=\"https://secure.greendot.com/signup?fl=ID&utm_term=redirect&utm_source=GDTHP_Smart&utm_medium=InternalLink&utm_content=Homepage\">\n            <div class=\"n-column-feature__image-container\">\n              <svg class=\"n-column-feature__icon tnt tnt-image2\" role=\"img\" aria-label=\"Sign Up icon\">\n                <use xlink:href=\"#icon-paid\"></use>\n              </svg>\n            </div>\n            <h4 class=\"n-column-feature__heading  tnt tnt-heading2\">No overdraft fees</h4>\n            <p class=\"n-column-feature__copy  tnt tnt-copy2\">No overdraft or bounced check fees, ever</p>\n          </a>\n        </div><!-- END 2 COLUMN FEATURE ROW -->\n        <!-- START 2 COLUMN FEATURE ROW -->\n        <div class=\"column-spacer small-0 medium-0 large-1 large-break\"></div>\n        <div class=\"column small-4 medium-4 large-5\"><a class=\"n-column-feature__inner\" href=\"/our-products/visa-rewards-card\">\n            <div class=\"n-column-feature__image-container\">\n              <svg class=\"n-column-feature__icon tnt tnt-image3\" role=\"img\" aria-label=\"Wallet icon\">\n                <use xlink:href=\"#icon-wallet\"></use>\n              </svg>\n            </div>\n            <h4 class=\"n-column-feature__heading  tnt tnt-heading3\">Earn 5% Cash Back</h4>\n            <p class=\"n-column-feature__copy  tnt tnt-copy3\">Earn 5% on purchases, up to $100 cash back annually,\n              with the 5% Cash Back Visa Debit Card</p>\n          </a>\n        </div>\n        <div class=\"column small-4 medium-4 large-5\"><a class=\"n-column-feature__inner\" href=\"https://m2.greendot.com/locate\">\n            <div class=\"n-column-feature__image-container\">\n              <svg class=\"n-column-feature__icon tnt tnt-image4\" role=\"img\" aria-label=\"Location icon\">\n                <use xlink:href=\"#icon-location\"></use>\n              </svg>\n            </div>\n            <h4 class=\"n-column-feature__heading  tnt tnt-heading4\">Get it at a store near you</h4>\n            <p class=\"n-column-feature__copy  tnt tnt-copy4\">Find the Green Dot 5% Cash Back Visa Debit Card at\n              stores nationwide</p>\n          </a>\n        </div><!-- END 2 COLUMN FEATURE ROW -->\n        <div class=\"n-column-feature__disclaimer-copy\">Fees apply. See <a href=\"https://www.greendot.com/about/docs/greendotrewardsdaa.pdf\">Deposit\n            Account Agreement</a>.</div>\n      </div>\n    </section>\n    <!-- END FOUR COLUMN FEATURE - ANCHOR BLOCK -->\n\n    <!-- START TWO COLUMN IMAGE LEFT BLOCK -->\n    <section class=\"two-column-text-image-pair module-container--second-column-mobile-order-first\">\n      <div class=\"grid-container two-column-text-image-pair__content\">\n        <div class=\"column small-4 medium-4 large-6 two-column-text-image-pair__flex-container two-column-text-image-pair__flex-container--first\">\n          <picture class=\"two-column-text-image-pair__image tnt tnt-image\">\n            <source media=\"(min-width: 1144px)\" srcset=\"/assets/img/greendot-cash-back-visa-debit-card-525x525.jpg, /assets/img/greendot-cash-back-visa-debit-card-1050x1050.jpg 2x\">\n            <source media=\"(min-width: 768px)\" srcset=\"/assets/img/greendot-cash-back-visa-debit-card-342x342.jpg, /assets/img/greendot-cash-back-visa-debit-card-684x684.jpg 2x\">\n            <source media=\"(min-width: 375px)\" srcset=\"/assets/img/greendot-cash-back-visa-debit-card-342x342.jpg, /assets/img/greendot-cash-back-visa-debit-card-684x684.jpg 2x\">\n            <source srcset=\"/assets/img/greendot-cash-back-visa-debit-card-290x290.jpg, /assets/img/greendot-cash-back-visa-debit-card-580x580.jpg 2x\"><img\n              src=\"/assets/img/greendot-cash-back-visa-debit-card-525x525.jpg\" alt=\"Green Dot 5% Cash Back Visa Debit Card - Get 5% Cash back on all your purchases\">\n          </picture>\n        </div>\n        <div class=\"column small-4 medium-4 large-6 two-column-text-image-pair__flex-container two-column-text-image-pair__flex-container--last\">\n          <h4 class=\"two-column-text-image-pair__heading tnt tnt-heading type-align-center type-xlarge\">5% Cash Back\n            Visa&reg; Debit Card</h4>\n          <h5 class=\"two-column-text-image-pair__subheading tnt tnt-subheading\"></h5>\n          <p class=\"two-column-text-image-pair__copy tnt tnt-copy type-align-center\">Earn 5% cash back on all your\n            purchases, up to $100 annually.</p>\n          <a class=\"two-column-text-image-pair__cta tnt tnt-cta btn center block js-append-query\" href=\"https://secure.greendot.com/signup?fl=ID&utm_term=redirect&utm_source=GDTHP_Smart&utm_medium=InternalLink&utm_content=Homepage\">Get\n            a Card</a>\n          <div class=\"two-column-text-image-pair__disclaimer-copy font-light type-medium\">Or, find Green Dot at <a href=\"https://m2.greendot.com/locate\">stores\n              nationwide</a></div>\n        </div>\n      </div>\n    </section>\n    <!-- END TWO COLUMN IMAGE LEFT BLOCK -->\n\n    <!-- START MODULE CONTAINER - TWO COLUMN BLOCK -->\n    <section class=\"module-container module-container--two-column module-container--second-column-one-third module-container--second-column-mobile-order-first bg-color-light pad-top-xxlarge pad-bottom-large\">\n      <div class=\"module-container__content\">\n        <div class=\"module-container__content-inner\">\n          <div class=\"module-container__content-inner-column module-container__content-inner-column--first\">\n            <!-- ADD MODULES HERE -->\n            <!-- START TEXT - H4 MODULE-->\n            <h3 class=\"text type-xlarge type-align-center gap-bottom-small\">Green Dot Platinum Visa&reg; Credit Card\n            </h3>\n            <!-- END TEXT - H4 MODULE-->\n            <!-- START TEXT - H4 MODULE-->\n            <p class=\"text type-medium type-align-center\">Establish or rebuild credit history with responsible use.\n            </p>\n            <!-- END TEXT - H4 MODULE-->\n\n            <a href=\"https://secure.greendot.com/platinum/registration/sign-up-p1\" target=\"_blank\">\n              <!-- START BUTTON MODULE-->\n              <button class=\"btn btn--primary btn btn--width-medium center block\">Apply Now\n              </button>\n              <!-- END BUTTON MODULE-->\n            </a>\n\n          </div>\n          <div class=\"module-container__content-inner-column module-container__content-inner-column--second\">\n            <!-- ADD MODULES HERE -->\n            <!-- START IMAGE - ONE THIRD MODULE-->\n            <picture class=\"image\">\n              <source media=\"(min-width: 1144px)\" srcset=\"/assets/img/secured-credit-card-get-greendot-platinum-visa-credit-card-340x191.jpg, /assets/img/secured-credit-card-get-greendot-platinum-visa-credit-card-680x382.jpg 2x\">\n              <source media=\"(min-width: 768px)\" srcset=\"/assets/img/secured-credit-card-get-greendot-platinum-visa-credit-card-220x124.jpg, /assets/img/secured-credit-card-get-greendot-platinum-visa-credit-card-440x248.jpg 2x\">\n              <source media=\"(min-width: 375px)\" srcset=\"/assets/img/secured-credit-card-get-greendot-platinum-visa-credit-card-340x191.jpg, /assets/img/secured-credit-card-get-greendot-platinum-visa-credit-card-680x382.jpg 2x\">\n              <source srcset=\"/assets/img/secured-credit-card-get-greendot-platinum-visa-credit-card-290x163.jpg, /assets/img/secured-credit-card-get-greendot-platinum-visa-credit-card-580x326.jpg 2x\"><img\n                src=\"/assets/img/secured-credit-card-get-greendot-platinum-visa-credit-card-340x191.jpg\" alt=\"Secured Credit Card to fix build credit history - Greendot platinum visa credit card\">\n            </picture>\n            <!-- END IMAGE - ONE THIRD MODULE-->\n\n          </div>\n        </div>\n      </div>\n    </section>\n    <!-- END MODULE CONTAINER - TWO COLUMN BLOCK -->\n\n  </main>\n  <!-- START MODULE CONTAINER BLOCK -->\n  <section class=\"module-container pad-top-zero pad-bottom-zero bg-color-dark\">\n    <div class=\"module-container__content\">\n      <div class=\"module-container__content-inner\">\n        <!-- START IMAGE - FULL MODULE-->\n        <picture class=\"image gap-bottom-zero\">\n          <img src=\"https://ds.reson8.com/insights.gif?rand=[cache_buster]&t=0&pixt=resonate&advkey=0010M00001PHJlWQAX&opptykey=GDOC1017A&evkey=100207034&evtype=custom\"\n            style=\"height:1px;width:1px;\" alt=\"\">\n        </picture>\n        <!-- END IMAGE - FULL MODULE-->\n      </div>\n    </div>\n  </section>\n  <!-- END MODULE CONTAINER BLOCK -->\n\n  <!-- PLACE MODAL MODULES HERE-->\n  <!-- START MODAL - VIDEO MODULE-->\n  <div class=\"modal js-modal modal--video\" id=\"modal-video\" data-video=\"youtube-SnEYtya5t7g\">\n    <button class=\"modal__close modal__close--outer js-modal-close\" aria-label=\"Close modal\">\n      <svg class=\"modal__close-icon\" aria-hidden=\"true\">\n        <use xlink:href=\"#icon-close\"></use>\n      </svg>\n    </button>\n    <div class=\"modal__content js-modal-content\">\n      <div class=\"video\">\n        <div class=\"video__player js-video-player\"></div>\n      </div>\n    </div>\n    <div class=\"modal__success js-modal-success\">\n      <svg class=\"modal__success-icon\" role=\"img\" aria-label=\"Success icon\">\n        <use xlink:href=\"#icon-checkmark-circle\"></use>\n      </svg>\n    </div>\n  </div>\n  <div class=\"modal-background js-modal-close\"></div>\n  <!-- END MODAL - VIDEO MODULE-->\n\n  <!-- START MODAL - VIDEO MODULE-->\n  <div class=\"modal js-modal modal--video\" id=\"modal-philip\" data-video=\"vimeo-257760209\">\n    <button class=\"modal__close modal__close--outer js-modal-close\" aria-label=\"Close modal\">\n      <svg class=\"modal__close-icon\" aria-hidden=\"true\">\n        <use xlink:href=\"#icon-close\"></use>\n      </svg>\n    </button>\n    <div class=\"modal__content js-modal-content\">\n      <div class=\"video\">\n        <div class=\"video__player js-video-player\"></div>\n      </div>\n    </div>\n    <div class=\"modal__success js-modal-success\">\n      <svg class=\"modal__success-icon\" role=\"img\" aria-label=\"Success icon\">\n        <use xlink:href=\"#icon-checkmark-circle\"></use>\n      </svg>\n    </div>\n  </div>\n  <div class=\"modal-background js-modal-close\"></div>\n  <!-- END MODAL - VIDEO MODULE-->\n\n  <!-- START MODAL - VIDEO MODULE-->\n  <div class=\"modal js-modal modal--video\" id=\"modal-liza\" data-video=\"vimeo-257764697\">\n    <button class=\"modal__close modal__close--outer js-modal-close\" aria-label=\"Close modal\">\n      <svg class=\"modal__close-icon\" aria-hidden=\"true\">\n        <use xlink:href=\"#icon-close\"></use>\n      </svg>\n    </button>\n    <div class=\"modal__content js-modal-content\">\n      <div class=\"video\">\n        <div class=\"video__player js-video-player\"></div>\n      </div>\n    </div>\n    <div class=\"modal__success js-modal-success\">\n      <svg class=\"modal__success-icon\" role=\"img\" aria-label=\"Success icon\">\n        <use xlink:href=\"#icon-checkmark-circle\"></use>\n      </svg>\n    </div>\n  </div>\n  <div class=\"modal-background js-modal-close\"></div>\n  <!-- END MODAL - VIDEO MODULE-->\n\n  <!-- START MODAL - VIDEO MODULE-->\n  <div class=\"modal js-modal modal--video\" id=\"modal-michael\" data-video=\"vimeo-257764211\">\n    <button class=\"modal__close modal__close--outer js-modal-close\" aria-label=\"Close modal\">\n      <svg class=\"modal__close-icon\" aria-hidden=\"true\">\n        <use xlink:href=\"#icon-close\"></use>\n      </svg>\n    </button>\n    <div class=\"modal__content js-modal-content\">\n      <div class=\"video\">\n        <div class=\"video__player js-video-player\"></div>\n      </div>\n    </div>\n    <div class=\"modal__success js-modal-success\">\n      <svg class=\"modal__success-icon\" role=\"img\" aria-label=\"Success icon\">\n        <use xlink:href=\"#icon-checkmark-circle\"></use>\n      </svg>\n    </div>\n  </div>\n  <div class=\"modal-background js-modal-close\"></div>\n  <!-- END MODAL - VIDEO MODULE-->\n\n  <!-- START MODAL - ACCOUNT MODULE-->\n  <div class=\"modal js-modal modal--account\" id=\"modal-account\">\n    <header class=\"modal__header js-modal-header\">\n      <div class=\"modal__header-title js-modal-header-title\">Modal Title</div>\n      <button class=\"modal__close js-modal-close\" aria-label=\"Close modal\">\n        <svg class=\"modal__close-icon\" aria-hidden=\"true\">\n          <use xlink:href=\"#icon-close\"></use>\n        </svg>\n      </button>\n    </header>\n    <div class=\"modal__content js-modal-content\">\n      <div class=\"modal__logo\"></div>\n      <!-- ADD MODULES HERE -->\n      <!-- START TEXT - H4 MODULE-->\n      <h4 class=\"text type-large\">Enter for a chance to win every week with ASAP Direct Deposit, <strong>plus a\n          $1,500 Grand Prize</strong>.\n      </h4>\n      <!-- END TEXT - H4 MODULE-->\n      <!-- START TEXT - PARAGRAPH MODULE-->\n      <p class=\"text type-medium\">You’re automatically entered to win a prize when you receive a payroll or\n        government benefits direct deposit of $100 or more.\n      </p>\n      <!-- END TEXT - PARAGRAPH MODULE-->\n      <!-- START TEXT - PARAGRAPH MODULE-->\n      <p class=\"text type-medium\"><a href=\"http://pages.email.greendot.com/spring#rules\" target=\"_blank\">Click here\n          for official rules</a>\n      </p>\n      <!-- END TEXT - PARAGRAPH MODULE-->\n    </div>\n    <div class=\"modal__success js-modal-success\">\n      <svg class=\"modal__success-icon\" role=\"img\" aria-label=\"Success icon\">\n        <use xlink:href=\"#icon-checkmark-circle\"></use>\n      </svg>\n    </div>\n  </div>\n  <div class=\"modal-background js-modal-close\"></div>\n  <!-- END MODAL - ACCOUNT MODULE-->\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
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

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.css":
/*!*********************************************!*\
  !*** ./src/app/signup/signup.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".module-container__content {\r\n    margin-top: 200px;\r\n}\r\n.modal {\r\n    z-index: 0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0NBQ3JCO0FBQ0Q7SUFDSSxXQUFXO0NBQ2QiLCJmaWxlIjoic3JjL2FwcC9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW9kdWxlLWNvbnRhaW5lcl9fY29udGVudCB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMDBweDtcclxufVxyXG4ubW9kYWwge1xyXG4gICAgei1pbmRleDogMDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/signup/signup.component.html":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- START MODULE CONTAINER BLOCK -->\n<section class=\"module-container module-container--medium \">\n  <div class=\"module-container__content\">\n    <div class=\"module-container__content-inner\">\n      <!-- START TEXT - H1 MODULE-->\n      <h1 class=\"text type-xxxlarge type-uppercase\">Register Your Card</h1>\n      <!-- END TEXT - H1 MODULE-->\n      <form action=\"/register/\" autocomplete=\"off\" id=\"frm-enter-card\" method=\"post\"><input name=\"__RequestVerificationToken\"\n          type=\"hidden\" value=\"-YicJAaB4ptj5GvahEOygiwBJY7Z95oLr2YUCNEdlugNY5kCLlwtHxSJvpM0GiSzGJjA1QHdqwCsaEP7tnMQpCcMrj41\" />\n        <div class=\"gap-bottom-large\"></div>\n        <!-- START MODAL - BASIC MODULE-->\n        <div class=\"modal js-modal modal--inline modal--large\" id=\"\">\n          <header class=\"modal__header js-modal-header\">\n            <div class=\"modal__header-title js-modal-header-title\"></div>\n            <button class=\"modal__close js-modal-close\" aria-label=\"Close modal\">\n              <svg class=\"modal__close-icon\" aria-hidden=\"true\">\n                <use xlink:href=\"#icon-close\"></use>\n              </svg>\n            </button>\n          </header>\n          <div class=\"modal__content js-modal-content gap-bottom-small\">\n            <!-- START TEXT - PARAGRAPH MODULE-->\n            <p class=\"text type-medium input-password-requirements__heading\">Please enter your 16-digit card number,\n              expiration date and the 3-digit security code on the back of your card.</p>\n            <!-- END TEXT - PARAGRAPH MODULE-->\n            <!-- START INPUT PAN W/CVV AND EXPIRATION MODULE-->\n            <div class=\"input-container \">\n              <div class=\"input js-input input--one-half\">\n                <div class=\"input__inner\">\n                  <label class=\"input__label\">\n                    <div class=\"input__label-content js-input-label-content\">16-digit card number</div>\n                  </label>\n\n                  <input autocomplete=\"cc-number\" autocorrect=\"off\" class=\"input__field js-input-field js-input-mask-pan\"\n                    data-field-name=\"CardNumber\" data-val=\"true\" data-val-regex=\"Please enter the card number.\"\n                    data-val-regex-pattern=\"\\d{4}\\s*\\d{4}\\s*\\d{4}\\s*\\d{4}\\s*\" data-val-required=\"Please enter the card number.\"\n                    id=\"CardNumber\" name=\"CardNumber\" pattern=\"\\d*\" placeholder=\"16-digit card number\" type=\"tel\" value=\"\" />\n                  <div class=\"input__required-badge\"></div>\n                </div>\n                <span class=\"field-validation-valid\" data-valmsg-for=\"CardNumber\" data-valmsg-replace=\"true\"></span>\n              </div>\n              <div class=\"input js-input input--one-quarter\">\n                <div class=\"input__inner\">\n                  <label class=\"input__label\">\n                    <div class=\"input__label-content js-input-label-content\">MM/YY</div>\n                  </label>\n                  <input autocomplete=\"cc-exp\" autocorrect=\"off\" class=\"input__field js-input-field js-input-mask-expiration\"\n                    data-field-name=\"ExpireDate\" data-val=\"true\" data-val-regex=\"Please enter a valid expiration date.\"\n                    data-val-regex-pattern=\"^(0?[1-9]|1[012])[-/]\\d\\d$\" data-val-required=\"Please enter the card expiration date.\"\n                    id=\"ExpireDate\" name=\"ExpireDate\" pattern=\"\\d*\" placeholder=\"MM/YY\" type=\"tel\" value=\"\" />\n                  <div class=\"input__required-badge\"></div>\n                </div>\n                <span class=\"field-validation-valid\" data-valmsg-for=\"ExpireDate\" data-valmsg-replace=\"true\"></span>\n              </div>\n              <div class=\"input js-input input--one-quarter\">\n                <div class=\"input__inner\">\n                  <label class=\"input__label\">\n                    <div class=\"input__label-content js-input-label-content\">CVV</div>\n                  </label>\n                  <input autocomplete=\"cc-csc\" autocorrect=\"off\" class=\"input__field js-input-field js-input-mask-char-three\"\n                    data-field-name=\"CVV\" data-val=\"true\" data-val-regex=\"Please enter the 3 digit security code.\"\n                    data-val-regex-pattern=\"\\d{3}\" data-val-required=\"Please enter the 3 digit security code.\" id=\"CVV\"\n                    name=\"CVV\" pattern=\"\\d*\" placeholder=\"CVV\" type=\"tel\" value=\"\" />\n                  <div class=\"input__required-badge\"></div>\n                </div>\n                <span class=\"field-validation-valid\" data-valmsg-for=\"CVV\" data-valmsg-replace=\"true\"></span>\n              </div>\n            </div>\n            <!-- END INPUT PAN W/CVV AND EXPIRATION MODULE-->\n          </div>\n          <div class=\"modal__success js-modal-success\" id=\"-success\">\n            <svg class=\"modal__success-icon\" role=\"img\" aria-label=\"Success icon\">\n              <use xlink:href=\"#icon-checkmark-circle\"></use>\n            </svg>\n          </div>\n        </div>\n        <div class=\"modal-background js-modal-close\"></div>\n        <!-- END MODAL - BASIC MODULE-->\n        <!-- START BUTTON MODULE-->\n        <button class=\"btn small-4 medium-4 large-4 pull-right \" name=\"\" value=\"\" id=\"submit-button\" type=\"submit\">\n          Continue </button>\n        <!-- END BUTTON MODULE-->\n        <div id=\"recaptcha\">\n        </div>\n      </form>\n    </div>\n  </div>\n</section>\n<!-- END MODULE CONTAINER BLOCK -->"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
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

var SignupComponent = /** @class */ (function () {
    function SignupComponent() {
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SignupComponent);
    return SignupComponent;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\study\chat-bot\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map