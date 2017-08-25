/*!
 * tinyjs-plugin-keyboard
 * Description: KeyboardManager
 * Author: fangjun.yfj
 * Version: v0.0.1
 */
!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.Keyboard=n():(e.Tiny=e.Tiny||{},e.Tiny.Keyboard=n())}(this,function(){return function(e){function n(t){if(o[t])return o[t].exports;var r=o[t]={exports:{},id:t,loaded:!1};return e[t].call(r.exports,r,r.exports,n),r.loaded=!0,r.exports}var o={};return n.m=e,n.c=o,n.p="/dist",n(0)}([function(e,n,o){e.exports=o(1)},function(e,n){"use strict";function o(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}var t=function e(n){o(this,e);var t={};return t.code=n,t.isDown=!1,t.isUp=!0,t.press=void 0,t.release=void 0,t.downHandler=function(e){e.keyCode===t.code&&(t.isUp&&t.press&&t.press(),t.isDown=!0,t.isUp=!1),e.preventDefault()},t.upHandler=function(e){e.keyCode===t.code&&(t.isDown&&t.release&&t.release(),t.isDown=!1,t.isUp=!0),e.preventDefault()},window.addEventListener("keydown",t.downHandler.bind(t),!1),window.addEventListener("keyup",t.upHandler.bind(t),!1),t};e.exports=t}])});