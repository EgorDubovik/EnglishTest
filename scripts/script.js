// js dybovik Egor
(function(global,undefined) {
	"use strict";
	var Test;

	Test = function(){
		var _test = {};
		var _test_option_1 = {};
		var verbs = [
			{
				rus : "Быть",
				v1 : "be",
				v2 : "was, were",
				v3 : "been"
			},
			{
				rus : "Становиться",
				v1 : "become",
				v2 : "became",
				v3 : "become"
			},
			{
				rus : "Начинать",
				v1 : "begin",
				v2 : "began",
				v3 : "begun"
			},
		];
		_test = {
			init : function(){
				
			}
		}

		_test_option_1 = {
			init : function(){

			},

			createTemplate : function(){
				
			}

		}

		return {
			init:_test.init
		}
	};

	if (typeof define === "function") {
		define([], function () { return new Test(); });
	} else if (typeof global.test === "undefined") {
		global.test = new Test();
	}
}(this));