/*!
 * Tiny.Weapon
 * Description:World Wrap Plugin
 * Author: fusheng.sfs
 * Version: v0.0.1
 * Github: https://github.com/qingyangmoke/tinyjs-plugin-worldwrap.git
 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.WorldWrap=e():(t.Tiny=t.Tiny||{},t.Tiny.WorldWrap=e())}(this,function(){return function(t){function e(r){if(o[r])return o[r].exports;var i=o[r]={exports:{},id:r,loaded:!1};return t[r].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var o={};return e.m=t,e.c=o,e.p="/Users/song/Develop/github/tinyjs-plugin-worldwrap/dist",e(0)}([function(t,e,o){t.exports=o(1)},function(t,e,o){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.wrap=void 0;var i=o(2),n=r(i);e.wrap=n.default},function(t,e){"use strict";function o(t,e,o,r,i,n){void 0===o&&(o=0),void 0===r&&(r=!1),void 0===i&&(i=!0),void 0===n&&(n=!0);var d={x:0,y:0,width:t.renderer.width,height:t.renderer.height,left:0,top:0,right:t.renderer.width,bottom:t.renderer.height};r?(i&&(e.x+e.width<d.x?e.x=d.right:e.x>d.right&&(e.x=d.left)),n&&(e.y+e.height<d.top?e.y=d.bottom:e.y>d.bottom&&(e.y=d.top))):(i&&e.x+o<d.x?e.x=d.right+o:i&&e.x-o>d.right&&(e.x=d.left-o),n&&e.y+o<d.top?e.y=d.bottom+o:n&&e.y-o>d.bottom&&(e.y=d.top-o))}Object.defineProperty(e,"__esModule",{value:!0}),e.default=o}])});