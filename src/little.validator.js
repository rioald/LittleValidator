
var FormValidator = function(form) {
	var self = this;
	
	var getByteLength = function(str, bytePerUnicode) {
		var byte = bytePerUnicode || 3;
		
		var b = 0;
		var c = '';
		
		for(var i = 0; c = str.charCodeAt(i++); b += c >> 11 ? byte : c >> 7 ? 2 : 1);
		
		return b;
	};
	
	var rules = {
		'required': function(ruleValue, inputValue) {
			if(ruleValue == true) {
				if(!inputValue) {
					return true;
				}
			}
		},
		
		'min-length': function(ruleValue, inputValue) {
			if(inputValue.length < ruleValue) {
				return true;
			}
		},
		
		'max-length': function(ruleValue, inputValue) {
			if(inputValue.length > ruleValue) {
				return true;
			}
		},
		
		'min-byte': function(ruleValue, inputValue) {
			var inputValueByte = getByteLength(inputValue, 2);
			
			if(inputValueByte < ruleValue) {
				return true;
			}
		},
		
		'max-byte': function(ruleValue, inputValue) {
			var inputValueByte = getByteLength(inputValue, 2);
			
			if(inputValueByte > ruleValue) {
				return true;
			}			
		},
		
		'exact-length': function(ruleValue, inputValue) {
			if(inputValue.length != ruleValue) {
				return true;
			}
		},
		
		'email': function(ruleValue, inputValue) {
			var r = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
			
			return !r.test(inputValue);
		},
		
		'regexp': function(ruleValue, inputValue) {
			var r = ruleValue;
			
			return !r.test(inputValue);
		},
		
		'allow-char': function(ruleValue, inputValue) {
			// alphabet, alphabet-upper, alphabet-lower, hangul, numeric
			// (any special characters)
			
			var rStr = '';
			
			$.each(ruleValue, function(i, v) {
				if(v == 'alphabet') {
					rStr += 'a-zA-Z';
				} else if(v == 'alphabet-upper') {
					rStr += 'A-Z';
				} else if(v == 'alphabet-lower') {
					rStr += 'a-z';
				} else if(v == 'hangul') {
					rStr += '가-힣';
				} else if(v == 'numeric') {
					rStr += '0-9';
				} else {
					rStr += v;
				}
			});
			
			var r = new RegExp('^[' + rStr + ']$');
			
			return !r.test(inputValue);
		}
	};
	
	this.add = function(inputName, ruleName, ruleValue, onErrorCallback) {
		
	};
	
	this.addCustomValue = function(customValue, ruleName, ruleValue, onErrorCallback) {
		
	}
	
	this.addCustom = function(custom) {
		custom.apply(self);
	};
	
	this.validate = function() {
		
	};
};