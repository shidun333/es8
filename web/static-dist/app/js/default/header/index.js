webpackJsonp(["app/js/default/header/index"],[function(o,e,n){"use strict";function t(o){return o&&o.__esModule?o:{default:o}}var i=n("d684b1eba6c0b776a43a"),c=t(i),a=$(".js-switch-pc"),l=$(".js-switch-mobile");a.length&&a.on("click",function(){c.default.set("PCVersion",1),window.location.reload()}),l.length&&l.on("click",function(){c.default.remove("PCVersion"),window.location.reload()}),$(".js-back").click(function(){1!==history.length?history.go(-1):location.href="/"})}]);