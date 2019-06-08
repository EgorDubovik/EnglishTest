// js dybovik Egor
(function(global,undefined) {
	"use strict";
	var Test;

	Test = function(){
		var _test = {};
	}

	if (typeof define === "function") {
		define([], function () { return new Ramka(); });
	} else if (typeof global.ramka === "undefined") {
		global.ramka = new Ramka();
	}
}(this));