(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,r){for(var n=0;n<r.length;n++){var o=r[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,r){if("object"!==t(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(i)?i:String(i)),o)}var i}var r=function(){function t(e,r,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._title=e.title,this._link=e.link,this._templateSelector=r,this._handleCardClick=n}var r,n;return r=t,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".card").cloneNode(!0)}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._cardImage=this._element.querySelector(".card__image"),this._trashButton=this._element.querySelector(".card__trash"),this._likeButton=this._element.querySelector(".card__like"),this._element.querySelector(".card__text").textContent=this._title,this._cardImage.src=this._link,this._cardImage.alt=this._title,this._setEventListeners(),this._element}},{key:"_setEventListeners",value:function(){var t=this;this._cardImage.addEventListener("click",(function(){t._handleCardClick(t._title,t._link)})),this._trashButton.addEventListener("click",(function(){t._removeCard()})),this._likeButton.addEventListener("click",(function(e){t._toggleLikeButtonState(e)}))}},{key:"_removeCard",value:function(){this._element.remove(),this._element=null}},{key:"_toggleLikeButtonState",value:function(){this._likeButton.classList.toggle("card__like_active")}}])&&e(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),t}();function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function o(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,e){if("object"!==n(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,"string");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===n(i)?i:String(i)),o)}var i}var i=function(){function t(e,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._config=e,this._form=r}var e,r;return e=t,(r=[{key:"deleteTextError",value:function(){this._form.querySelectorAll(this._config.errorText).forEach((function(t){t.textContent=""}))}},{key:"deleteLineError",value:function(){var t=this;this._inputList.forEach((function(e){e.classList.remove(t._config.inputErrorClass)}))}},{key:"deleteErrorElements",value:function(){var t=this;this._inputList.forEach((function(e){t.deleteTextError(),t.deleteLineError(),t.toggleButtonState()}))}},{key:"_showInputError",value:function(t,e){var r=this._form.querySelector(".".concat(t.id,"-error"));t.classList.add(this._config.inputErrorClass),r.textContent=e,r.classList.add(this._config.errorClass)}},{key:"_hideInputError",value:function(t){var e=this._form.querySelector(".".concat(t.id,"-error"));t.classList.remove(this._config.inputErrorClass),e.classList.remove(this._config.errorClass),e.textContent=""}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(t){return!t.validity.valid}))}},{key:"toggleButtonState",value:function(){this._hasInvalidInput()?(this._buttonElement.classList.add(this._config.inactiveButtonClass),this._buttonElement.disabled=!0):(this._buttonElement.classList.remove(this._config.inactiveButtonClass),this._buttonElement.disabled=!1)}},{key:"_checkInputValidity",value:function(t){t.validity.valid?this._hideInputError(t):this._showInputError(t,t.validationMessage)}},{key:"_setEventListeners",value:function(){var t=this;this._inputList=Array.from(this._form.querySelectorAll(this._config.inputSelector)),this._buttonElement=this._form.querySelector(this._config.submitButtonSelector),this._inputList.forEach((function(e){e.addEventListener("input",(function(){t._checkInputValidity(e),t.toggleButtonState()}))}))}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&o(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function l(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==u(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==u(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===u(o)?o:String(o)),n)}var o}var a=function(){function t(e,r){var n=e.data,o=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._initialArray=n,this._renderer=o,this._container=r}var e,r;return e=t,(r=[{key:"rendererItems",value:function(){var t=this;this._initialArray.forEach((function(e){return t._renderer(e)}))}},{key:"addDefaultItem",value:function(t){this._container.append(t)}},{key:"addUserItem",value:function(t){this._container.prepend(t)}}])&&l(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function c(t){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}function s(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==c(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==c(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===c(o)?o:String(o)),n)}var o}var f=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popup=document.querySelector(e),this._closeElement=this._popup.querySelector(".popup__close"),this._handleEscClose=this._handleEscClose.bind(this)}var e,r;return e=t,(r=[{key:"openPopup",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"closePopup",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(t){"Escape"===t.key&&this.closePopup()}},{key:"_closeClickOutside",value:function(t){t.target===t.currentTarget&&this.closePopup()}},{key:"setEventListeners",value:function(){var t=this;this._closeElement.addEventListener("click",(function(){t.closePopup()})),this._popup.addEventListener("mousedown",(function(e){t._closeClickOutside(e)}))}}])&&s(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function p(t){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(t)}function y(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==p(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==p(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===p(o)?o:String(o)),n)}var o}function m(){return m="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=h(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},m.apply(this,arguments)}function v(t,e){return v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},v(t,e)}function h(t){return h=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},h(t)}var b=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&v(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=h(n);if(o){var r=h(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===p(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var r,n=t.popupImageCaption,o=t.popupImageOpened;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(r=i.call(this,e)).caption=n,r.image=o,r}return e=u,(r=[{key:"openPopup",value:function(t,e){this.image.src=e,this.image.alt=t,this.caption.textContent=t,m(h(u.prototype),"openPopup",this).call(this)}}])&&y(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(f);function d(t){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(t)}function _(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==d(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==d(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===d(o)?o:String(o)),n)}var o}function g(){return g="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=S(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},g.apply(this,arguments)}function w(t,e){return w=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},w(t,e)}function S(t){return S=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},S(t)}var E=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&w(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=S(n);if(o){var r=S(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===d(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e,r=t.selector,n=t.handleFormSubmit;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,r))._handleFormSubmit=n,e._formElement=e._popup.querySelector(".form"),e._inputList=e._formElement.querySelectorAll(".form__item"),e}return e=u,(r=[{key:"_getInputValues",value:function(){var t=this;return this._formValues={},this._inputList.forEach((function(e){t._formValues[e.name]=e.value})),this._formValues}},{key:"setInputValues",value:function(t){this._inputList.forEach((function(e){e.value=t[e.name]}))}},{key:"closePopup",value:function(){g(S(u.prototype),"closePopup",this).call(this),this._formElement.reset()}},{key:"setEventListeners",value:function(){var t=this;g(S(u.prototype),"setEventListeners",this).call(this),this._formElement.addEventListener("submit",(function(e){e.preventDefault(),t._handleFormSubmit(t._getInputValues()),t.closePopup()}))}}])&&_(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(f);function k(t){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},k(t)}function P(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==k(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==k(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===k(o)?o:String(o)),n)}var o}var j=function(){function t(e){var r=e.name,n=e.activity;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=r,this._activity=n}var e,r;return e=t,(r=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,activity:this._activity.textContent}}},{key:"setUserInfo",value:function(t){var e=t.name,r=t.activity;this._name.textContent=e,this._activity.textContent=r}}])&&P(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}(),x=document.querySelector(".profile"),O=x.querySelector(".profile__add"),C=x.querySelector(".profile__edit"),L=x.querySelector(".profile__name"),I=x.querySelector(".profile__activity"),B=document.querySelector(".images"),q=document.querySelector(".popup__image"),T=document.querySelector(".popup__caption"),D=document.forms.edit_profile,M=document.forms.add_card,H={formSelector:".form",inputSelector:".form__item",submitButtonSelector:".form__button",inactiveButtonClass:"form__button_disabled",inputErrorClass:"form__input_type_error",errorClass:"form__error_visible",errorText:".form__input-error"},R=new j({name:L,activity:I}),V=new i(H,D),A=new i(H,M),G=new b({popupImageCaption:T,popupImageOpened:q},".popup_type_image"),U=function(t,e){G.openPopup(t,e)},W=new a({data:[{title:"Москва",link:"https://images.unsplash.com/photo-1547448415-e9f5b28e570d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"},{title:"Пекин",link:"https://images.unsplash.com/photo-1620964780032-81ef649db4d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"},{title:"Нью-Дели",link:"https://images.unsplash.com/photo-1592639296346-560c37a0f711?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"},{title:"Пальмира",link:"https://images.unsplash.com/photo-1602674471917-2f5fbd54535e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1330&q=80"},{title:"Минск",link:"https://images.unsplash.com/photo-1591509352193-c3e6676f71c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"},{title:"Тегеран",link:"https://images.unsplash.com/photo-1613881348993-bc547b53daba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"}],renderer:function(t){var e=new r(t,"#card-template",U).generateCard();W.addDefaultItem(e)}},B);O.addEventListener("click",(function(){A.deleteErrorElements(),Y.openPopup()})),C.addEventListener("click",(function(){F.setInputValues(R.getUserInfo()),V.deleteErrorElements(),F.openPopup()}));var Y=new E({selector:".popup_type_card",handleFormSubmit:function(t){var e=new r(t,"#card-template",U).generateCard();W.addUserItem(e)}}),F=new E({selector:".popup_type_profile",handleFormSubmit:function(t){R.setUserInfo(t)}});W.rendererItems(),G.setEventListeners(),Y.setEventListeners(),F.setEventListeners(),V.enableValidation(),A.enableValidation()})();