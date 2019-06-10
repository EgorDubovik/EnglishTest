// js dybovik Egor
(function(global,undefined) {
	"use strict";
	var Test;

	Test = function(){
		var _test = {};
		var _test_option_1 = {};
		var id_question = 0;
		_test = {
			init : function(){
				_test_option_1.init();
			}
		}

		_test_option_1 = {
			need_ckeck : false,
			random_true_ansver : 0,
			init : function(){
				this.createTemplate();
				this.make_question();
				this.setDocumentEvent();
			},

			createTemplate : function(){
				$('.general').html('<div class="central_block">'+
										'<div class="title_rus_verb"></div>'+
										'<div class="cont_eng_verbs">'+
											
										'</div>'+
										'<div class="cont_btn_next">дальше</div>'+
									'</div>');
			},
			make_question : function(){
				var randomInt = getRndInteger(0,verbs.length-1);
				id_question = randomInt;
				this.random_true_ansver = getRndInteger(1,3);
				this.need_ckeck = true; 
				$('.cont_btn_next').css("visibility","hidden");
				$('.title_rus_verb').html(verbs[randomInt].rus);
				$('.cont_eng_verbs').html('');
				for(var i = 1;i<=3;i++){
					if(i == this.random_true_ansver){
						$('.cont_eng_verbs').append('<div class="item_answer"><span>'+i+'</span>'+verbs[randomInt].v1+'</div>');
					} else {

						var id_false_answer = randomInt; 
						while(id_false_answer==randomInt) id_false_answer = getRndInteger(0,verbs.length-1);
						$('.cont_eng_verbs').append('<div class="item_answer"><span>'+i+'</span>'+verbs[id_false_answer].v1+'</div>');
					}
				}
			},
			checkKeyDown : function(key,self){
				var keyCheck = key.keyCode;
				if(keyCheck>=49 && keyCheck<=51){
					if(self.need_ckeck){
						self.need_ckeck = false;
						self.checkAnswer(keyCheck,self);
					}
				} else if(keyCheck == 13){
					self.make_question();
				}
			},
			checkAnswer : function(num,self){
				if(num-48 != self.random_true_ansver){
					$('.item_answer').eq(num-48-1).addClass("false_a");
				} 
				console.log(self.random_true_ansver);
				$('.item_answer').eq(self.random_true_ansver-1).addClass("true_a");
				$('.cont_btn_next').css("visibility","visible");
			},
			setDocumentEvent : function(){
				var self = this;
				console.log("addEventListener");
				document.getElementsByTagName("body")[0].addEventListener("keydown",function(key){
					self.checkKeyDown(key,self);
				});
			},


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

function getRndInteger(min, max) {
	return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function removeEvents(){
	document.getElementsByTagName("body")[0].removeEventListener("keydown",function(){console.log("event");});
}