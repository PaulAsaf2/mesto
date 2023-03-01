(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,r){for(var n=0;n<r.length;n++){var o=r[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,r){if("object"!==t(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(i)?i:String(i)),o)}var i}var r=function(){function t(e,r,n,o,i,u){var a=e.name,c=e.link,l=e.likes,s=e._id,f=e.owner;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._title=a,this._link=c,this._likes=l,this._id=s,this._owner=f,this._templateSelector=r,this.handleCardClick=n,this.openPopupDeleteCard=o,this._toggleLike=i,this._userId=u}var r,n;return r=t,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".card").cloneNode(!0)}},{key:"generateCard",value:function(){var t=this;return this._element=this._getTemplate(),this._cardImage=this._element.querySelector(".card__image"),this._trashButton=this._element.querySelector(".card__trash"),this._likeButton=this._element.querySelector(".card__like"),this._likeCount=this._element.querySelector(".card__like-count"),this.isLiked=this._likes.some((function(e){return e._id==t._userId})),this._element.querySelector(".card__text").textContent=this._title,this._cardImage.src=this._link,this._cardImage.alt=this._title,this._likeCount.textContent=this._likes.length,this.isLiked&&this._likeButton.classList.add("card__like_active"),this._hideTrashButton(),this._setEventListeners(),this._element}},{key:"_setEventListeners",value:function(){var t=this;this._cardImage.addEventListener("click",(function(){t.handleCardClick(t._title,t._link)})),this._trashButton.addEventListener("click",(function(){t.openPopupDeleteCard(t._id,t._element)})),this._likeButton.addEventListener("click",(function(){t._toggleLikeState()}))}},{key:"_hideTrashButton",value:function(){this._owner._id!==this._userId&&this._trashButton.remove()}},{key:"_toggleLikeState",value:function(){this._likeButton.classList.toggle("card__like_active"),this._toggleLike(this._id,this.isLiked,this),this.isLiked=!this.isLiked}},{key:"updateLike",value:function(t){this._likeCount.textContent=t}}])&&e(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),t}();function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function o(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,e){if("object"!==n(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,"string");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===n(i)?i:String(i)),o)}var i}var i=function(){function t(e,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._config=e,this._form=r}var e,r;return e=t,(r=[{key:"deleteTextError",value:function(){this._form.querySelectorAll(this._config.errorText).forEach((function(t){t.textContent=""}))}},{key:"deleteLineError",value:function(){var t=this;this._inputList.forEach((function(e){e.classList.remove(t._config.inputErrorClass)}))}},{key:"deleteErrorElements",value:function(){var t=this;this._inputList.forEach((function(e){t.deleteTextError(),t.deleteLineError(),t.toggleButtonState()}))}},{key:"_showInputError",value:function(t,e){var r=this._form.querySelector(".".concat(t.id,"-error"));t.classList.add(this._config.inputErrorClass),r.textContent=e,r.classList.add(this._config.errorClass)}},{key:"_hideInputError",value:function(t){var e=this._form.querySelector(".".concat(t.id,"-error"));t.classList.remove(this._config.inputErrorClass),e.classList.remove(this._config.errorClass),e.textContent=""}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(t){return!t.validity.valid}))}},{key:"toggleButtonState",value:function(){this._hasInvalidInput()?(this._buttonElement.classList.add(this._config.inactiveButtonClass),this._buttonElement.disabled=!0):(this._buttonElement.classList.remove(this._config.inactiveButtonClass),this._buttonElement.disabled=!1)}},{key:"_checkInputValidity",value:function(t){t.validity.valid?this._hideInputError(t):this._showInputError(t,t.validationMessage)}},{key:"_setEventListeners",value:function(){var t=this;this._inputList=Array.from(this._form.querySelectorAll(this._config.inputSelector)),this._buttonElement=this._form.querySelector(this._config.submitButtonSelector),this._inputList.forEach((function(e){e.addEventListener("input",(function(){t._checkInputValidity(e),t.toggleButtonState()}))}))}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&o(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function a(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==u(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==u(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===u(o)?o:String(o)),n)}var o}var c=function(){function t(e,r){var n=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=n,this._container=r}var e,r;return e=t,(r=[{key:"rendererItems",value:function(t){var e=this;t.forEach((function(t){return e._renderer(t)}))}},{key:"addDefaultItem",value:function(t){this._container.append(t)}},{key:"addUserItem",value:function(t){this._container.prepend(t)}}])&&a(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function s(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==l(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==l(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===l(o)?o:String(o)),n)}var o}var f=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popup=document.querySelector(e),this._closeElement=this._popup.querySelector(".popup__close"),this._handleEscClose=this._handleEscClose.bind(this)}var e,r;return e=t,(r=[{key:"openPopup",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"closePopup",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(t){"Escape"===t.key&&this.closePopup()}},{key:"_closeClickOutside",value:function(t){t.target===t.currentTarget&&this.closePopup()}},{key:"setEventListeners",value:function(){var t=this;this._closeElement.addEventListener("click",(function(){t.closePopup()})),this._popup.addEventListener("mousedown",(function(e){t._closeClickOutside(e)}))}}])&&s(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function p(t){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(t)}function y(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==p(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==p(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===p(o)?o:String(o)),n)}var o}function h(){return h="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=m(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},h.apply(this,arguments)}function d(t,e){return d=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},d(t,e)}function m(t){return m=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},m(t)}var v=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&d(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=m(n);if(o){var r=m(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===p(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var r,n=t.popupImageCaption,o=t.popupImageOpened;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(r=i.call(this,e)).caption=n,r.image=o,r}return e=u,(r=[{key:"openPopup",value:function(t,e){this.image.src=e,this.image.alt=t,this.caption.textContent=t,h(m(u.prototype),"openPopup",this).call(this)}}])&&y(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(f);function b(t){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},b(t)}function _(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==b(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==b(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===b(o)?o:String(o)),n)}var o}function g(){return g="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=k(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},g.apply(this,arguments)}function S(t,e){return S=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},S(t,e)}function k(t){return k=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},k(t)}var w=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&S(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=k(n);if(o){var r=k(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===b(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e,r=t.selector,n=t.handleFormSubmit;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,r))._handleFormSubmit=n,e._formElement=e._popup.querySelector(".form"),e._inputList=e._formElement.querySelectorAll(".form__item"),e._submitButton=e._formElement.querySelector(".form__button"),e._loading=e._formElement.querySelector(".form__loading"),e}return e=u,(r=[{key:"_getInputValues",value:function(){var t=this;return this._formValues={},this._inputList.forEach((function(e){t._formValues[e.name]=e.value})),this._formValues}},{key:"setInputValues",value:function(t){this._inputList.forEach((function(e){e.value=t[e.name]}))}},{key:"closePopup",value:function(){g(k(u.prototype),"closePopup",this).call(this),this._formElement.reset()}},{key:"setEventListeners",value:function(){var t=this;g(k(u.prototype),"setEventListeners",this).call(this),this._formElement.addEventListener("submit",(function(e){e.preventDefault();var r=t._submitButton.textContent;t._submitButton.textContent="Сохранение...",t._handleFormSubmit(t._getInputValues()).then((function(){return t.closePopup()})).finally((function(){return t._submitButton.textContent=r}))}))}}])&&_(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(f);function E(t){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},E(t)}function P(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==E(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==E(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===E(o)?o:String(o)),n)}var o}var O=function(){function t(e){var r=e.name,n=e.about,o=e.avatar;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=r,this._about=n,this._avatar=o}var e,r;return e=t,r=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,about:this._about.textContent}}},{key:"setUserInfo",value:function(t){var e=t.name,r=t.about;this._name.textContent=e,this._about.textContent=r}},{key:"setAvatar",value:function(t){var e=t.avatar;this._avatar.src=e}}],r&&P(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}(),j=document.querySelector(".profile"),C=j.querySelector(".profile__add"),L=j.querySelector(".profile__edit"),I=j.querySelector(".profile__avatar_edit"),T=document.querySelector(".popup__button_type_delete"),R=j.querySelector(".profile__name"),B=j.querySelector(".profile__activity"),q=j.querySelector(".profile__avatar"),x=document.querySelector(".images"),D=document.querySelector(".popup__image"),U=document.querySelector(".popup__caption"),A=document.forms.edit_profile,V=document.forms.add_card,F=document.forms.edit_avatar,N={formSelector:".form",inputSelector:".form__item",submitButtonSelector:".form__button",inactiveButtonClass:"form__button_disabled",inputErrorClass:"form__input_type_error",errorClass:"form__error_visible",errorText:".form__input-error"},J={name:R,about:B,avatar:q};function H(t){return H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},H(t)}function M(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==H(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==H(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===H(o)?o:String(o)),n)}var o}var z=function(){function t(e){var r=e.baseUrl,n=e.headers;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._baseUrl=r,this._headers=n}var e,r;return e=t,(r=[{key:"_checkResponse",value:function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}},{key:"getProfileData",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then(this._checkResponse)}},{key:"setProfileData",value:function(t){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify(t)}).then(this._checkResponse)}},{key:"setAvatar",value:function(t){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify(t)}).then(this._checkResponse)}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then(this._checkResponse)}},{key:"createCard",value:function(t){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify(t)}).then(this._checkResponse)}},{key:"deleteCard",value:function(t){return fetch("".concat(this._baseUrl,"/cards/").concat(t),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}},{key:"putLike",value:function(t){return fetch("".concat(this._baseUrl,"/cards/").concat(t,"/likes"),{method:"PUT",headers:this._headers}).then(this._checkResponse)}},{key:"deleteLike",value:function(t){return fetch("".concat(this._baseUrl,"/cards/").concat(t,"/likes"),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}}])&&M(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function $(t){return $="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},$(t)}function G(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==$(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==$(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===$(o)?o:String(o)),n)}var o}function K(){return K="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=W(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},K.apply(this,arguments)}function Q(t,e){return Q=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},Q(t,e)}function W(t){return W=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},W(t)}var X=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&Q(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=W(n);if(o){var r=W(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===$(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var r,n=t.popupDelete,o=t.handleFormSubmit;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(r=i.call(this,e))._popupDeleteCardButton=n,r._handleFormSubmit=o,r}return e=u,(r=[{key:"getDataForDeleteCard",value:function(t,e){this._idValue=t,this._card=e}},{key:"_removeCard",value:function(){this._card.remove(),this._card=null}},{key:"setEventListeners",value:function(){var t=this;K(W(u.prototype),"setEventListeners",this).call(this),this._popupDeleteCardButton.addEventListener("click",(function(){var e=t._popupDeleteCardButton.textContent;t._popupDeleteCardButton.textContent="Удаление...",t._handleFormSubmit(t._idValue).then((function(){return t._removeCard()})).then((function(){return t.closePopup()})).finally((function(){t._popupDeleteCardButton.textContent=e}))}))}}])&&G(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(f);function Y(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var Z,tt=new z({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-60",headers:{authorization:"b9ad9483-6c42-4e9a-8a8f-d7555df6de20","Content-Type":"application/json"}}),et=new i(N,A),rt=new i(N,V),nt=new i(N,F);et.enableValidation(),rt.enableValidation(),nt.enableValidation(),Promise.all([tt.getProfileData(),tt.getInitialCards()]).then((function(t){var e,r,n=(r=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,u,a=[],c=!0,l=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=i.call(r)).done)&&(a.push(n.value),a.length!==e);c=!0);}catch(t){l=!0,o=t}finally{try{if(!c&&null!=r.return&&(u=r.return(),Object(u)!==u))return}finally{if(l)throw o}}return a}}(e,r)||function(t,e){if(t){if("string"==typeof t)return Y(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Y(t,e):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=n[0],i=n[1];ot.setUserInfo(o),ot.setAvatar(o),Z=o._id,at.rendererItems(i)})).catch((function(t){return console.log(t)}));var ot=new O(J);L.addEventListener("click",(function(){it.setInputValues(ot.getUserInfo()),et.deleteErrorElements(),it.openPopup()}));var it=new w({selector:".popup_type_profile",handleFormSubmit:function(t){return tt.setProfileData(t).then((function(t){return ot.setUserInfo(t)})).catch((function(t){return console.log(t)}))}});it.setEventListeners();var ut=new w({selector:".popup_type_avatar",handleFormSubmit:function(t){return tt.setAvatar(t).then((function(t){return ot.setAvatar(t)})).catch((function(t){return console.log(t)}))}});I.addEventListener("click",(function(){ut.openPopup(),nt.deleteErrorElements()})),ut.setEventListeners();var at=new c({renderer:function(t){var e=new r(t,"#card-template",pt,st,yt,Z).generateCard();at.addDefaultItem(e)}},x),ct=new w({selector:".popup_type_card",handleFormSubmit:function(t){return tt.createCard(t).then((function(t){var e=new r(t,"#card-template",pt,st,yt,Z).generateCard();at.addUserItem(e)})).catch((function(t){return console.log(t)}))}});ct.setEventListeners(),C.addEventListener("click",(function(){rt.deleteErrorElements(),ct.openPopup()}));var lt=new X({popupDelete:T,handleFormSubmit:function(t){return tt.deleteCard(t).catch((function(t){return console.log(t)}))}},".popup_type_delete-card"),st=function(t,e){lt.getDataForDeleteCard(t,e),lt.openPopup()};lt.setEventListeners();var ft=new v({popupImageCaption:U,popupImageOpened:D},".popup_type_image"),pt=function(t,e){ft.openPopup(t,e)};ft.setEventListeners();var yt=function(t,e,r){e?tt.deleteLike(t).then((function(t){r.updateLike(t.likes.length)})).catch((function(t){return console.log(t)})):tt.putLike(t).then((function(t){r.updateLike(t.likes.length)})).catch((function(t){return console.log(t)}))}})();