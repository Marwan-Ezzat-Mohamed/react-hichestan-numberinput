(this["webpackJsonpreact-hichestan-numberinput"]=this["webpackJsonpreact-hichestan-numberinput"]||[]).push([[0],{17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),u=a(11),o=a(2),l=a(3),s=a(5),i=a(4),p=a(6),d=a(8),c=a(7),h=a.n(c),v="FARSI",b="LATIN";function f(e){return e?e.toString().replace(/[1234567890\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669\u0660]/gi,(function(e){var t=e.charCodeAt(0);return String.fromCharCode(t+(t<60?1728:144))})):e}function m(e){return e?e.toString().replace(/[\u06f1\u06f2\u06f3\u06f4\u06f5\u06f6\u06f7\u06f8\u06f9\u06f0\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669\u0660]/gi,(function(e){var t=e.charCodeAt(0);return String.fromCharCode(t-(t<1770?1584:1728))})):e}function g(e){return e?e.toString().replace(/[^1234567890\u06f1\u06f2\u06f3\u06f4\u06f5\u06f6\u06f7\u06f8\u06f9\u06f0\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669\u0660]/gi,""):e}function y(e,t){for(var a="",r=0;r<t;r++)a+=e;return a}var S=a(0),j=["value","onChange","onInput","onPast","onKeyDown","pattern","inputMode","type","ref","inputRef","getInputRef","numberFormat","defaultValue"],C=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(e){var r;Object(o.a)(this,a),(r=t.call(this,e)).readValuesFromProps=function(e){var t=e.value||"";return{value:t,valueToShow:r.mapValue(t,e.numberFormat),selectionStart:void 0,selectionEnd:void 0}},r.handleKeyDown=function(e){r.props.disabled||r.props.readOnly?e.preventDefault():8===e.keyCode?(e.preventDefault(),r.updateState(r.deleteValue(e.target,-1))):46===e.keyCode?(e.preventDefault(),r.updateState(r.deleteValue(e.target,1))):e.keyCode>=48&&e.keyCode<=57?(e.preventDefault(),r.updateState(r.updateValue(e.target,(e.keyCode-48).toString(),r.props.numberFormat))):e.keyCode>=96&&e.keyCode<=105?(e.preventDefault(),r.updateState(r.updateValue(e.target,(e.keyCode-96).toString(),r.props.numberFormat))):e.key>="\u06f0"&&e.key<="\u06f9"||e.key>="\u0660"&&e.key<="\u0669"?(e.preventDefault(),r.updateState(r.updateValue(e.target,e.key,r.props.numberFormat))):e.keyCode>=35&&e.keyCode<=40||9===e.keyCode||(13===e.keyCode?r.hideKeyboard():(!e.ctrlKey&&!e.metaKey||67!==e.keyCode&&86!==e.keyCode&&88!==e.keyCode)&&((e.ctrlKey||e.metaKey)&&82===e.keyCode||(e.ctrlKey||e.metaKey)&&82===e.keyCode||(e.ctrlKey||e.metaKey)&&73===e.keyCode||(e.ctrlKey||e.metaKey)&&65===e.keyCode||(e.ctrlKey||e.metaKey)&&76===e.keyCode||e.keyCode>=112&&e.keyCode<=123||229===e.keyCode||e.preventDefault()))},r.hideKeyboard=function(){r.inputRef.current.blur()},r.handlePaste=function(e){if(e.preventDefault(),!r.props.disabled&&!r.props.readOnly){var t=g((e.clipboardData||window.clipboardData).getData("text"));r.updateState(r.updateValue(e.target,t,r.props.numberFormat))}},r.handleInput=function(e){if(!r.props.disabled&&!r.props.readOnly&&r.values.valueToShow!==e.target.value){var t=g(e.target.value);r.updateState(r.recheckValue(e.target,t,r.props.numberFormat),!0)}},r.mapValue=function(e,t){return t===v?f(e):t===b?m(e):f(e)},r.updateState=function(e,t,a){if(e){r.values=e;var n=!1;r.inputRef.current.value!==r.values.valueToShow&&(n=!0,r.inputRef.current.value=r.values.valueToShow),r.inputRef.current===document.activeElement&&r.inputRef.current.setSelectionRange(r.values.selectionStart,r.values.selectionEnd),(n||t)&&(a||r.fireOnChange())}},r.updateValue=function(e,t,a){var n=r.mapValue(t,a),u=e.value,o=e.selectionStart,l=e.selectionEnd,s=u.length+t.length-(l-o);if(!(r.props.maxLength&&s>r.props.maxLength))return u=u.substring(0,o)+n+u.substring(l),l=o+=n.length,{value:m(u),valueToShow:u,selectionStart:o,selectionEnd:l}},r.recheckValue=function(e,t,a){var n=r.mapValue(t,a),u=e.selectionStart,o=e.selectionEnd;return{value:m(n),valueToShow:n,selectionStart:u,selectionEnd:o}},r.deleteValue=function(e,t){var a=e.value,r=e.selectionStart,n=e.selectionEnd;if(r===n)if(t<0){if(0===r)return;a=a.substring(0,r+t)+a.substring(n),r+=t}else{if(n===a.length)return;a=a.substring(0,r)+a.substring(n+t)}else a=a.substring(0,r)+a.substring(n);return n=r,{value:m(a),valueToShow:a,selectionStart:r,selectionEnd:n}},r.fireOnChange=function(){r.props.onChange&&r.props.onChange({target:{name:r.props.name,value:r.values.value}})};var u=e.inputRef||e.getInputRef;return u&&"function"===typeof u&&(u=u()),r.inputRef=u||n.a.createRef(),r.values=r.readValuesFromProps(e),r}return Object(l.a)(a,[{key:"shouldComponentUpdate",value:function(e,t){return e.value===this.values.value&&e.numberFormat===this.props.numberFormat||this.updateState(this.readValuesFromProps(e),!1,!0),!h()(e.style,this.props.style)||(e.className!==this.props.className&&(this.inputRef.current.className=e.className),e.disabled!==this.props.disabled&&(this.inputRef.current.disabled=e.disabled),e.readOnly!==this.props.readOnly&&(this.inputRef.current.readOnly=e.readOnly),e.placeholder!==this.props.placeholder&&(this.inputRef.current.placeholder=e.placeholder),!1)}},{key:"render",value:function(){var e=this.props,t=(e.value,e.onChange,e.onInput,e.onPast,e.onKeyDown,e.pattern,e.inputMode,e.type,e.ref,e.inputRef,e.getInputRef,e.numberFormat,e.defaultValue,Object(d.a)(e,j)),a=this.values.valueToShow;return Object(S.jsx)("input",Object(p.a)({ref:this.inputRef,type:"tel",dir:"ltr",defaultValue:a,onKeyDown:this.handleKeyDown,onPaste:this.handlePaste,onInput:this.handleInput},t))}}]),a}(r.Component),O=["value","onChange","onInput","onPast","onKeyDown","pattern","inputMode","type","ref","inputRef","getInputRef","numberFormat","defaultValue","asString","maxDecimal","maxDigits","thousandSeparator","decimalSeparator"],x=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(e){var r;Object(o.a)(this,a),(r=t.call(this,e)).defaultThousandSeparator=function(){return","},r.defaultDecimalSeparator=function(){return"."},r.readValuesFromProps=function(e){if(e.value||0===e.value){var t=e.value.toString();return r.updateValue("",0,0,t,e.numberFormat,e.asString)}return{value:void 0,valueToShow:"",selectionStart:void 0,selectionEnd:void 0}},r.handleKeyDown=function(e){r.props.disabled||r.props.readOnly?e.preventDefault():8===e.keyCode?(e.preventDefault(),r.updateState(r.deleteValue(e.target,-1,r.props.asString))):46===e.keyCode?(e.preventDefault(),r.updateState(r.deleteValue(e.target,1,r.props.asString))):e.keyCode>=48&&e.keyCode<=57?(e.preventDefault(),r.updateState(r.updateElementValue(e.target,(e.keyCode-48).toString(),r.props.numberFormat,r.props.asString))):e.keyCode>=96&&e.keyCode<=105?(e.preventDefault(),r.updateState(r.updateElementValue(e.target,(e.keyCode-96).toString(),r.props.numberFormat,r.props.asString))):e.key>="\u06f0"&&e.key<="\u06f9"||e.key>="\u0660"&&e.key<="\u0669"?(e.preventDefault(),r.updateState(r.updateElementValue(e.target,e.key,r.props.numberFormat,r.props.asString))):e.key===r.decimalSeparator||190===e.keyCode?(e.preventDefault(),(null===r.props.maxDecimal||void 0===r.props.maxDecimal||r.props.maxDecimal>0)&&r.updateState(r.updateElementValue(e.target,r.decimalSeparator,r.props.numberFormat,r.props.asString))):"-"===e.key||189===e.keyCode?(e.preventDefault(),r.updateState(r.negate())):e.keyCode>=35&&e.keyCode<=40||9===e.keyCode||(13===e.keyCode?r.hideKeyboard():(!e.ctrlKey&&!e.metaKey||67!==e.keyCode&&86!==e.keyCode&&88!==e.keyCode)&&((e.ctrlKey||e.metaKey)&&82===e.keyCode||(e.ctrlKey||e.metaKey)&&82===e.keyCode||(e.ctrlKey||e.metaKey)&&73===e.keyCode||(e.ctrlKey||e.metaKey)&&65===e.keyCode||(e.ctrlKey||e.metaKey)&&76===e.keyCode||e.keyCode>=112&&e.keyCode<=123||229===e.keyCode||e.preventDefault()))},r.hideKeyboard=function(){r.inputRef.current.blur()},r.handlePaste=function(e){if(e.preventDefault(),!r.props.disabled&&!r.props.readOnly){var t=r.stripAnyThingButNumber((e.clipboardData||window.clipboardData).getData("text"));""!==r.values.valueToShow&&(t=t.replace(/[-]/g,"")),r.updateState(r.updateElementValue(e.target,t,r.props.numberFormat,r.props.asString))}},r.handleInput=function(e){if(r.values.valueToShow!==e.target.value&&!r.props.disabled&&!r.props.readOnly){var t=r.stripAnyThingButNumber(e.target.value),a=t.indexOf("-");if(t.indexOf("-",a+1)>=0||a>0)r.updateState(r.negate());else{var n=e.target.selectionStart,u=e.target.selectionEnd,o=r.updateValue("",n,u,t,r.props.numberFormat,r.props.asString);r.updateState(o,!0)}}},r.mapValue=function(e,t){return t===v?f(e):t===b?m(e):f(e)},r.mapDecimalSeparator=function(e){return e.replace(r.decimalSeparatorRegex,r.decimalSeparator)},r.updateState=function(e,t,a){if(e){r.values=e;var n=!1;r.inputRef.current.value!==r.values.valueToShow&&(n=!0,r.inputRef.current.value=r.values.valueToShow),r.inputRef.current===document.activeElement&&r.inputRef.current.setSelectionRange(r.values.selectionStart,r.values.selectionEnd),(n||t)&&(a||r.fireOnChange())}},r.negate=function(){var e=r.values,t=e.value,a=e.valueToShow,n=e.valueIsValid,u=e.selectionStart,o=e.selectionEnd;if(t>0)t=-t,a="-"+a,u++,o++;else{if(!(t<0))return;t=-t,a=a.substring(1),u--,o--}return{value:t,valueToShow:a,valueIsValid:n,selectionStart:u,selectionEnd:o}},r.updateElementValue=function(e,t,a,n){var u=e.value,o=e.selectionStart,l=e.selectionEnd;return r.updateValue(u,o,l,t,a,n)},r.updateValue=function(e,t,a,n,u,o){var l=r.mapDecimalSeparator(r.mapValue(n,u)),s=e;if(l===r.decimalSeparator&&s.indexOf(r.decimalSeparator)>-1)return;var i=s.substring(0,t),p=s.substring(a);if(t-=r.countThousandSeparator(i),s=(i=r.stripThousandSeparator(i))+l+(p=r.stripThousandSeparator(p)),t+=l.length,"number"===typeof r.props.maxDecimal){var d=s.indexOf(r.decimalSeparator);if(d>-1)s.length-d-1>r.props.maxDecimal&&t>(s=s.substring(0,d+(r.props.maxDecimal?1:0)+r.props.maxDecimal)).length&&(t=s.length)}var c=m(s),h=r.firstNonZeroDigit(c,0);if(h>0&&s.length>1?(s=s.substring(h),t-=h):0===h&&"."===c.charAt(0)&&(s=r.mapValue("0",u)+s,t++),"number"===typeof r.props.maxDigits){var v=s.indexOf(r.decimalSeparator);(v>-1?v:s.length)>r.props.maxDigits&&(-1===v?t>(s=s.substring(0,r.props.maxDigits)).length&&(t=s.length):(s=s.substring(0,r.props.maxDigits)+(-1===v?"":s.substring(v)),t>r.props.maxDigits&&(t=r.props.maxDigits)))}var b=r.addThousandSeparator(s,t);s=b.valueToShowWithSeparator,a=t=b.selectionStart;var f,g=r.stripThousandSeparator(m(s));if(o){var y=Number(g);f="number"===typeof y||void 0===y||null===y}else f="number"===typeof(g=Number(g))||void 0===g||null===g;return{value:g,valueToShow:s,valueIsValid:f,selectionStart:t,selectionEnd:a}},r.deleteValue=function(e,t,a){var n=e.value,u=e.selectionStart,o=e.selectionEnd;if(u===o)if(t<0){if(0===u)return;var l=n.substring(0,u+t),s=n.substring(o);u-=r.countThousandSeparator(l),n=(l=r.stripThousandSeparator(l))+(s=r.stripThousandSeparator(s)),u+=t}else{if(o===n.length)return;var i=n.substring(0,u),p=n.substring(o+t);u-=r.countThousandSeparator(i),n=(i=r.stripThousandSeparator(i))+(p=r.stripThousandSeparator(p))}else{var d=n.substring(0,u),c=n.substring(o);u-=r.countThousandSeparator(d),n=(d=r.stripThousandSeparator(d))+(c=r.stripThousandSeparator(c))}var h=r.addThousandSeparator(n,u);n=h.valueToShowWithSeparator,o=u=h.selectionStart;var v,b=r.stripThousandSeparator(m(n));if(a){var f=Number(b);v="number"===typeof f||void 0===f||null===f}else v="number"===typeof(b=Number(b))||void 0===b||null===b;return{value:b,valueToShow:n,valueIsValid:v,selectionStart:u,selectionEnd:o}},r.addThousandSeparator=function(e,t){if(""===r.thousandSeparator)return{valueToShowWithSeparator:e,selectionStart:t};for(var a="",n=!1,u=-1===e.indexOf(r.decimalSeparator),o=0,l=e.length-1;l>=0;l--){var s=e.charAt(l);s===r.decimalSeparator?n?l<=t&&t--:(n=!0,a=s+a,u=!0,o=0):(u&&3===o&&"-"!==s&&(a=r.thousandSeparator+a,o=0,l<t-1&&t++),a=s+a,o++)}return{valueToShowWithSeparator:a,selectionStart:t}},r.firstNonZeroDigit=function(e,t){return e.charAt(t)===r.decimalSeparator?t>0?t-1:t:"0"===e.charAt(t)?r.firstNonZeroDigit(e,t+1):t},r.countThousandSeparator=function(e){return""===r.thousandSeparator?0:(e.match(r.thousandSeparatorRegex)||[]).length},r.stripThousandSeparator=function(e){return""===r.thousandSeparator?e:e.replace(r.thousandSeparatorRegex,"")},r.stripAnyThingButNumber=function(e){return e?e.toString().replace(r.numberRegex,""):e},r.fireOnChange=function(){r.props.onChange&&r.props.onChange({target:{name:r.props.name,value:r.values.value}})};var u=e.inputRef||e.getInputRef;return u&&"function"===typeof u&&(u=u()),r.inputRef=u||n.a.createRef(),r.thousandSeparator=""===e.thousandSeparator?"":e.thousandSeparator||r.defaultThousandSeparator(),r.decimalSeparator=e.decimalSeparator||r.defaultDecimalSeparator(),r.thousandSeparatorRegex=new RegExp("[".concat(r.thousandSeparator,"]"),"g"),r.decimalSeparatorRegex=new RegExp("[.".concat(r.decimalSeparator,"]"),"g"),r.numberRegex=new RegExp("[^-1234567890\u06f1\u06f2\u06f3\u06f4\u06f5\u06f6\u06f7\u06f8\u06f9\u06f0.".concat(r.decimalSeparator,"]"),"gi"),r.values=r.readValuesFromProps(e),r}return Object(l.a)(a,[{key:"shouldComponentUpdate",value:function(e,t){return e.value===this.values.value&&e.numberFormat===this.props.numberFormat||this.updateState(this.readValuesFromProps(e),!1,!0),!h()(e.style,this.props.style)||(e.className!==this.props.className&&(this.inputRef.current.className=e.className),e.disabled!==this.props.disabled&&(this.inputRef.current.disabled=e.disabled),e.readOnly!==this.props.readOnly&&(this.inputRef.current.readOnly=e.readOnly),e.placeholder!==this.props.placeholder&&(this.inputRef.current.placeholder=e.placeholder),!1)}},{key:"render",value:function(){var e=this.props,t=(e.value,e.onChange,e.onInput,e.onPast,e.onKeyDown,e.pattern,e.inputMode,e.type,e.ref,e.inputRef,e.getInputRef,e.numberFormat,e.defaultValue,e.asString,e.maxDecimal,e.maxDigits,e.thousandSeparator,e.decimalSeparator,Object(d.a)(e,O)),a=this.values.valueToShow;return Object(S.jsx)("input",Object(p.a)({ref:this.inputRef,type:"tel",dir:"ltr",defaultValue:a,onKeyDown:this.handleKeyDown,onPaste:this.handlePaste,onInput:this.handleInput},t))}}]),a}(r.Component),k=a(9),V=["value","onChange","onFocus","onBlur","onInput","onPast","onKeyDown","onShowDialog","pattern","inputMode","type","inputRef","getInputRef","numberFormat","defaultValue"],R="-",D=new RegExp("[ ".concat(R,"]"),"g"),T=new RegExp("[0-9]{4}[".concat(R,"][0-9]{4}[").concat(R,"][0-9]{4}[").concat(R,"][0-9]{4}")),w="    ".concat(R,"    ").concat(R,"    ").concat(R,"    "),K=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(e){var r;Object(o.a)(this,a),(r=t.call(this,e)).readCardNumberFromValue=function(e){if(e){var t=m(e),a=t.match(/[0-9]{4}[^0-9]*[0-9]{4}[^0-9]*[0-9]{4}[^0-9]*[0-9]{4}/);if(a){var n=a[0].replace(/[^0-9]*/g,"");return"".concat(n.substring(0,4)).concat(R).concat(n.substring(4,8)).concat(R).concat(n.substring(8,12)).concat(R).concat(n.substring(12,16))}var u=t.match(/[0-9]{4}/);u&&r.updateState(r.updateValue(r.inputRef.current,u[0],r.props.numberFormat))}},r.readValues=function(e,t){return{value:e,valueToShow:r.mapValue(e,t||r.props.numberFormat),valueIsValid:r.isValueValidCardNumber(e),selectionStart:void 0,selectionEnd:void 0}},r.handleFocus=function(e){r.isValueEmpty(r.values.value)&&r.jumpTo(1),r.props.onFocus&&r.props.onFocus(e)},r.handleBlur=function(e){r.props.onBlur&&r.props.onBlur(e)},r.jumpToNext=function(){var e=r.inputRef.current.selectionStart,t=r.whereIsCaret(e);return t<4&&(r.jumpTo(t+1),!0)},r.jumpToPrevious=function(){var e=r.inputRef.current.selectionStart,t=r.whereIsCaret(e);return t>1&&(r.jumpTo(t-1),!0)},r.isValueEmpty=function(e){return""===e.replace(D,"")},r.jumpTo=function(e){var t=5*(e-1);r.values.selectionStart=t,r.values.selectionEnd=t,r.inputRef.current.setSelectionRange(r.values.selectionStart,r.values.selectionEnd)},r.handleKeyDown=function(e){if(r.props.disabled||r.props.readOnly)e.preventDefault();else if(8===e.keyCode)e.preventDefault(),r.updateState(r.deleteValue(e.target,-1));else if(46===e.keyCode)e.preventDefault(),r.updateState(r.deleteValue(e.target,1));else if(e.keyCode>=48&&e.keyCode<=57)e.preventDefault(),r.updateState(r.updateValue(e.target,(e.keyCode-48).toString(),r.props.numberFormat));else if(e.keyCode>=96&&e.keyCode<=105)e.preventDefault(),r.updateState(r.updateValue(e.target,(e.keyCode-96).toString(),r.props.numberFormat));else if(e.key>="\u06f0"&&e.key<="\u06f9"||e.key>="\u0660"&&e.key<="\u0669")e.preventDefault(),r.updateState(r.updateValue(e.target,e.key,r.props.numberFormat));else if("."===e.key||"/"===e.key||"-"===e.key||"*"===e.key||"#"===e.key||188===e.keyCode||189===e.keyCode||190===e.keyCode||191===e.keyCode)e.preventDefault(),e.ctrlKey||e.shiftKey||e.metaKey||"#"===e.key?r.jumpToPrevious():r.jumpToNext();else if(e.keyCode>=36&&e.keyCode<=40);else if(9===e.keyCode){if(Math.abs(r.inputRef.current.selectionStart-r.inputRef.current.selectionEnd)===r.inputRef.current.value.length)return;e.ctrlKey||e.shiftKey||e.metaKey?r.jumpToPrevious()&&e.preventDefault():r.jumpToNext()&&e.preventDefault()}else 13===e.keyCode?r.hideKeyboard():(!e.ctrlKey&&!e.metaKey||67!==e.keyCode&&86!==e.keyCode&&88!==e.keyCode)&&((e.ctrlKey||e.metaKey)&&82===e.keyCode||(e.ctrlKey||e.metaKey)&&73===e.keyCode||(e.ctrlKey||e.metaKey)&&65===e.keyCode||(e.ctrlKey||e.metaKey)&&76===e.keyCode||(115===e.keyCode?r.props.onShowDialog&&(e.preventDefault(),r.props.onShowDialog()):e.keyCode>=112&&e.keyCode<=123||(229===e.keyCode?(r.values.selectionStart=r.inputRef.current.selectionStart,r.values.selectionEnd=r.inputRef.current.selectionEnd):e.preventDefault())))},r.hideKeyboard=function(){r.inputRef.current.blur()},r.handlePaste=function(e){if(e.preventDefault(),!r.props.disabled&&!r.props.readOnly){var t=r.readCardNumberFromValue((e.clipboardData||window.clipboardData).getData("text"));if(t){var a=r.readValues(t);a.valueIsValid&&r.updateState(a)}}},r.handleInput=function(e){if(e.preventDefault(),!r.props.disabled&&!r.props.readOnly&&r.values.valueToShow!==e.target.value){var t,a=e.target.value;r.inputRef.current.value!==r.values.valueToShow&&(r.inputRef.current.value=r.values.valueToShow,r.inputRef.current.setSelectionRange(r.values.selectionStart,r.values.selectionEnd)),((t=a).indexOf(".")>=0||t.indexOf(",")>=0||t.indexOf("-")>=0||t.indexOf(";")>=0||t.indexOf("*")>=0||t.indexOf("#")>=0||t.indexOf(" ")>=0||t.indexOf("\u060c")>=0)&&r.jumpToNext()}},r.mapValue=function(e,t){return t===v?f(e):t===b?m(e):f(e)},r.updateState=function(e,t){if(e){r.values=e,void 0===r.values.valueIsValid&&(r.values.valueIsValid=r.isValueValidCardNumber(r.values.value));var a=!1;r.inputRef.current.value!==r.values.valueToShow&&(a=!0,r.inputRef.current.value=r.values.valueToShow),r.inputRef.current===document.activeElement&&r.inputRef.current.setSelectionRange(r.values.selectionStart,r.values.selectionEnd),a&&(t||r.fireOnChange())}},r.updateValue=function(e,t,a){var n=r.mapValue(t,a),u=e.value;""===u&&(u=w);var o=e.selectionStart,l=e.selectionEnd;u=u.substring(0,o)+n+u.substring(l),o+=n.length;var s=u.lastIndexOf(R,o-1)+1,i=u.indexOf(R,o);-1===i&&(i=u.length),i-s>4&&(o-s>=4?(u=u.substring(0,s)+u.substring(o-4,o)+u.substring(i),o=s+4):u=u.substring(0,s+4)+u.substring(i));var p=m(u),d=r.isValueValidCardNumber(p);return o<u.length&&p.substring(o-4,o).match(/[0-9]{4}/)&&o++,{value:p,valueToShow:u,valueIsValid:d,selectionStart:o,selectionEnd:l=o}},r.whereIsCaret=function(e){return Math.floor(e/5)+1},r.isValueValidCardNumber=function(e){return!!e&&!!e.match(T)},r.resetValues=function(){return{value:"",valueToShow:r.mapValue("",r.props.numberFormat),valueIsValid:!1,selectionStart:0,selectionEnd:0}},r.deleteValue=function(e,t){var a=e.value,n=e.selectionStart,u=e.selectionEnd;if(n===u){if(t<0){if(0===n)return;if(a.substring(n+t,n)===R){var o=Object(p.a)({},r.values);return o.selectionStart--,o.selectionEnd--,o}a=a.substring(0,n+t)+a.substring(u),n+=t}else{if(u===a.length)return;if(a.substring(n,n+t)===R)return;a=a.substring(0,n)+a.substring(u+t)}var l=a.indexOf(R,n);-1===l?a+=" ":a=a.substring(0,l)+y(" ",Math.abs(t))+a.substring(l)}else a.substring(n,u).indexOf(R)>=0?(a="",n=0):a=a.substring(0,n)+y(" ",u-n)+a.substring(u);u=n;var s=m(a);return{value:s,valueToShow:a,valueIsValid:r.isValueValidCardNumber(s),selectionStart:n,selectionEnd:u}},r.fireOnChange=function(){if(r.props.onChange){var e=r.values.value;if(r.previousValue!==e){r.previousValue=e;var t={name:r.props.name,value:r.values.value,valueIsValid:r.values.valueIsValid};r.props.onChange({target:t})}}},r.emptyValue=r.emptyValue.bind(Object(k.a)(r));var u=e.inputRef||e.getInputRef;return u&&"function"===typeof u&&(u=u()),r.inputRef=u||n.a.createRef(),r.values=r.readValues(e.value),r.previousValue=r.values.value,r}return Object(l.a)(a,[{key:"emptyValue",value:function(){this.updateState(this.resetValues())}},{key:"shouldComponentUpdate",value:function(e,t){return e.value===this.values.value&&e.numberFormat===this.props.numberFormat||this.updateState(this.readValues(e.value,e.numberFormat),!0),!h()(e.style,this.props.style)||(e.className!==this.props.className&&(this.inputRef.current.className=e.className),e.disabled!==this.props.disabled&&(this.inputRef.current.disabled=e.disabled),e.readOnly!==this.props.readOnly&&(this.inputRef.current.readOnly=e.readOnly),e.placeholder!==this.props.placeholder&&(this.inputRef.current.placeholder=e.placeholder),!1)}},{key:"render",value:function(){var e=this.props,t=(e.value,e.onChange,e.onFocus,e.onBlur,e.onInput,e.onPast,e.onKeyDown,e.onShowDialog,e.pattern,e.inputMode,e.type,e.inputRef,e.getInputRef,e.numberFormat,e.defaultValue,Object(d.a)(e,V)),a=this.values.valueToShow;return Object(S.jsx)("input",Object(p.a)({ref:this.inputRef,type:"tel",dir:"ltr",defaultValue:a,onKeyDown:this.handleKeyDown,onPaste:this.handlePaste,onInput:this.handleInput,onFocus:this.handleFocus,onBlur:this.handleBlur},t))}}]),a}(r.Component),N=(a(17),function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={Number1:"123",Number2:"",Number3:1200.246,color:!1,bgColor:!1,disabled:!1,readOnly:!1,Tel1:"0912",value1:"",placeholder:"type/paste a number"},e.handleChange=function(t){var a={},r=t.target;a[r.name]=r.value,e.setState(a,(function(){console.log("state",e.state)}))},e.handleValueChange=function(t){var a={},r=t.target;a[r.name.substr(0,7)]=r.value,e.setState(a,(function(){console.log("state",e.state)}))},e.toggleColor=function(){e.setState({color:!e.state.color})},e.toggleBgColor=function(){e.setState({bgColor:!e.state.bgColor})},e.toggleDisabled=function(){e.setState({disabled:!e.state.disabled})},e.toggleReadOnly=function(){e.setState({readOnly:!e.state.readOnly})},e.togglePlaceholder=function(){e.setState({placeholder:"\u067e\u06cc\u0633\u062a \u06cc\u0627 \u062a\u0627\u06cc\u067e \u06a9\u0646\u06cc\u062f"})},e.spanRef=n.a.createRef(),e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){var e=this,t=this.state.color?"red":"",a=this.state.bgColor?{backgroundColor:"aqua"}:{},r=this.state,u=r.disabled,o=r.readOnly,l=r.placeholder;return Object(S.jsxs)(n.a.Fragment,{children:[Object(S.jsxs)("form",{autoComplete:"on",onKeyPress:function(t){e.spanRef.current.innerHTML="Key Code: "+t.charCode.toString()},children:[Object(S.jsxs)("div",{children:[Object(S.jsx)("br",{}),Object(S.jsx)("br",{}),Object(S.jsxs)("label",{children:["\u062e\u0631\u0648\u062c\u06cc \u0639\u062f\u062f \u0644\u0627\u062a\u06cc\u0646",Object(S.jsx)("br",{}),Object(S.jsx)("input",{type:"text",name:"Number1_value",style:{width:250},value:this.state.Number1,onChange:this.handleValueChange,placeholder:"\u0627\u0632 \u0627\u06cc\u0646\u062c\u0627 \u06a9\u0644\u06cc\u062f \u062a\u0628 \u0631\u0627 \u0686\u0646\u062f \u0628\u0627\u0631 \u0628\u0632\u0646\u06cc\u062f"})]}),Object(S.jsx)("br",{}),Object(S.jsx)("br",{}),Object(S.jsxs)("label",{children:["\u0646\u0645\u0648\u0646\u0647 \u0641\u0627\u0631\u0633\u06cc",Object(S.jsx)("br",{}),Object(S.jsx)(C,{name:"Number1",disabled:u,readOnly:o,className:t,style:a,value:this.state.Number1,onChange:this.handleChange,placeholder:l})]})]}),Object(S.jsx)("br",{}),Object(S.jsx)("div",{children:Object(S.jsxs)("label",{children:["\u0646\u0645\u0648\u0646\u0647 \u0644\u0627\u062a\u06cc\u0646",Object(S.jsx)("br",{}),Object(S.jsx)(C,{name:"Number2",disabled:u,readOnly:o,className:t,style:a,value:this.state.Number2,numberFormat:b,onChange:this.handleChange,placeholder:"type/paste a number"})]})}),Object(S.jsxs)("label",{children:["\u062e\u0631\u0648\u062c\u06cc",Object(S.jsx)("br",{}),Object(S.jsx)("input",{type:"text",name:"Number2_value",style:{width:250},value:this.state.Number2,onChange:this.handleValueChange,placeholder:"\u0627\u06cc\u0646 \u0641\u06cc\u0644\u062f \u062e\u0631\u0648\u062c\u06cc \u0627\u0633\u062a"})]}),Object(S.jsx)("br",{}),Object(S.jsx)("br",{}),Object(S.jsx)("br",{}),Object(S.jsx)("div",{children:Object(S.jsxs)("label",{children:["\u0639\u062f\u062f \u0627\u0639\u0634\u0627\u0631\u06cc",Object(S.jsx)("br",{}),Object(S.jsx)(x,{name:"Number3",disabled:u,readOnly:o,className:t,style:a,value:this.state.Number3,asString:!1,maxDigits:5,maxDecimal:2,numberFormat:v,onChange:this.handleChange,placeholder:"type/paste a number"})]})}),Object(S.jsxs)("label",{children:["\u062e\u0631\u0648\u062c\u06cc",Object(S.jsx)("br",{}),Object(S.jsx)("input",{type:"text",name:"Number3_value",style:{width:250},value:this.state.Number3,onChange:this.handleValueChange,placeholder:"\u0627\u06cc\u0646 \u0641\u06cc\u0644\u062f \u062e\u0631\u0648\u062c\u06cc \u0627\u0633\u062a"})]}),Object(S.jsx)("br",{}),Object(S.jsx)("br",{}),Object(S.jsx)("div",{children:Object(S.jsxs)("label",{children:["\u0646\u0645\u0648\u0646\u0647 \u062a\u0644\u0641\u0646 \u0641\u0627\u0631\u0633\u06cc",Object(S.jsx)("br",{}),Object(S.jsx)(C,{type:"tel",name:"Tel1",disabled:u,readOnly:o,className:t,style:a,value:this.state.Tel1,onChange:this.handleChange,maxLength:12,placeholder:"type/paste a number"})]})}),Object(S.jsx)("br",{}),Object(S.jsxs)("label",{children:["\u0648\u0631\u0648\u062f\u06cc \u0634\u0645\u0627\u0631\u0647 \u06a9\u0627\u0631\u062a",Object(S.jsx)("br",{}),Object(S.jsx)(K,{value:this.state.value1,disabled:u,readOnly:o,name:"value1",className:t,style:a,onChange:this.handleChange,placeholder:"\u0634\u0645\u0627\u0631\u0647 \u06a9\u0627\u0631\u062a"}),Object(S.jsx)("br",{}),"\u062e\u0631\u0648\u062c\u06cc",Object(S.jsx)("br",{}),Object(S.jsx)("input",{type:"tel",name:"value1",dir:"ltr",value:this.state.value1,onChange:this.handleChange})]}),Object(S.jsx)("br",{}),Object(S.jsx)("br",{}),Object(S.jsx)("button",{type:"button",onClick:this.toggleColor,children:"toggle className"}),Object(S.jsx)("button",{type:"button",onClick:this.toggleBgColor,children:"toggle style"}),Object(S.jsx)("button",{type:"button",onClick:this.toggleDisabled,children:u?"enable":"disable"}),Object(S.jsx)("button",{type:"button",onClick:this.toggleReadOnly,children:o?"writable":"read only"}),Object(S.jsx)("button",{type:"button",onClick:this.togglePlaceholder,children:"change place holder"}),Object(S.jsx)("input",{type:"submit"})]}),Object(S.jsx)("span",{ref:this.spanRef})]})}}]),a}(r.Component)),F=function(){return Object(S.jsxs)("div",{dir:"rtl",style:{margin:"35px auto",padding:25},children:[Object(S.jsx)("h1",{children:"\u06a9\u0645\u067e\u0646\u0646\u062a \u0639\u062f\u062f"}),Object(S.jsx)("br",{}),"\u0648\u0631\u0698\u0646 \u06f2\u060c\u06f0 \u0633\u0627\u062e\u062a \u06f2\u06f1",Object(S.jsxs)("ul",{children:[Object(S.jsx)("li",{children:"\u0646\u0645\u0627\u06cc\u0634 \u0639\u062f\u062f \u0641\u0627\u0631\u0633\u06cc \u06cc\u0627 \u0644\u0627\u062a\u06cc\u0646"}),Object(S.jsx)("li",{children:"\u0630\u062e\u06cc\u0631\u0647 \u0639\u062f\u062f \u0644\u0627\u062a\u06cc\u0646\u060c \u0628\u0627\u0639\u062b \u0645\u06cc\u0634\u0648\u062f \u06a9\u0647 \u062f\u0627\u062f\u0647 \u0635\u062d\u06cc\u062d \u0628\u0647 \u0633\u0631\u0648\u0631 \u062f\u0627\u062f\u0647 \u0634\u0648\u062f"}),Object(S.jsx)("li",{children:"\u0646\u0645\u0627\u06cc\u0634 \u063a\u06cc\u0631 \u0639\u062f\u062f \u062f\u0631 \u0635\u0648\u0631\u062a\u06cc \u06a9\u0647 \u062f\u0627\u062f\u0647 \u0627\u0632 \u0628\u06cc\u0631\u0648\u0646 \u0628\u0647 \u0622\u0646 \u0648\u0627\u0631\u062f \u0634\u0648\u062f."}),Object(S.jsx)("li",{children:"\u0646\u0645\u0627\u06cc\u0634 \u06a9\u06cc\u0628\u0648\u0631\u062f \u0639\u062f\u062f\u06cc \u062f\u0631 \u0645\u0628\u0627\u06cc\u0644 (\u063a\u06cc\u0631 \u0627\u0632 \u0645\u0631\u0648\u0631\u06af\u0631 \u0633\u0627\u0645\u0633\u0648\u0646\u06af) "}),Object(S.jsx)("li",{children:"\u0642\u0627\u0628\u0644 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0628\u0627 Create-React-App / NextJs"})]}),Object(S.jsx)(N,{})]})};Object(u.render)(Object(S.jsx)(F,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.4d5252d6.chunk.js.map