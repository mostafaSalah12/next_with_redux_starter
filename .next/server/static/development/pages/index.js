module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/CounterControl/CounterControl.css":
/*!******************************************************!*\
  !*** ./components/CounterControl/CounterControl.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/CounterControl/CounterControl.js":
/*!*****************************************************!*\
  !*** ./components/CounterControl/CounterControl.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CounterControl_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CounterControl.css */ "./components/CounterControl/CounterControl.css");
/* harmony import */ var _CounterControl_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_CounterControl_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\mostafa\\Desktop\\eduedge\\components\\CounterControl\\CounterControl.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const counterControl = props => __jsx("div", {
  className: "CounterControl",
  onClick: props.clicked,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, props.label);

/* harmony default export */ __webpack_exports__["default"] = (counterControl);

/***/ }),

/***/ "./components/CounterOutput/CounterOutput.css":
/*!****************************************************!*\
  !*** ./components/CounterOutput/CounterOutput.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/CounterOutput/CounterOutput.js":
/*!***************************************************!*\
  !*** ./components/CounterOutput/CounterOutput.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CounterOutput_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CounterOutput.css */ "./components/CounterOutput/CounterOutput.css");
/* harmony import */ var _CounterOutput_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_CounterOutput_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\mostafa\\Desktop\\eduedge\\components\\CounterOutput\\CounterOutput.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const counterOutput = props => __jsx("div", {
  className: "CounterOutput",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, "Current Counter: ", props.value);

/* harmony default export */ __webpack_exports__["default"] = (counterOutput);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_actions_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/actions/index */ "./store/actions/index.js");
/* harmony import */ var _components_CounterControl_CounterControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/CounterControl/CounterControl */ "./components/CounterControl/CounterControl.js");
/* harmony import */ var _components_CounterOutput_CounterOutput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/CounterOutput/CounterOutput */ "./components/CounterOutput/CounterOutput.js");
var _jsxFileName = "C:\\Users\\mostafa\\Desktop\\eduedge\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






class Index extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  static getInitialProps({
    reduxStore,
    req
  }) {
    return {};
  }

  render() {
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, __jsx(_components_CounterOutput_CounterOutput__WEBPACK_IMPORTED_MODULE_4__["default"], {
      value: this.props.ctr,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }), __jsx(_components_CounterControl_CounterControl__WEBPACK_IMPORTED_MODULE_3__["default"], {
      label: "Increment",
      clicked: this.props.onIncrementCounter,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }), __jsx(_components_CounterControl_CounterControl__WEBPACK_IMPORTED_MODULE_3__["default"], {
      label: "Decrement",
      clicked: this.props.onDecrementCounter,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }), __jsx(_components_CounterControl_CounterControl__WEBPACK_IMPORTED_MODULE_3__["default"], {
      label: "Add 10",
      clicked: this.props.onAddCounter,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }), __jsx(_components_CounterControl_CounterControl__WEBPACK_IMPORTED_MODULE_3__["default"], {
      label: "Subtract 15",
      clicked: this.props.onSubtractCounter,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }), __jsx("hr", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }), __jsx("button", {
      onClick: () => this.props.onStoreResult(this.props.ctr),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, "Store Result"), __jsx("ul", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, this.props.storedResults.map(strResult => __jsx("li", {
      key: strResult.id,
      onClick: () => this.props.onDeleteResult(strResult.id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, strResult.value))));
  }

}

const mapStateToProps = state => {
  return {
    ctr: state.counterReducer.counter,
    storedResults: state.resultReducer.results
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch(_store_actions_index__WEBPACK_IMPORTED_MODULE_2__["increment"]()),
    onDecrementCounter: () => dispatch(_store_actions_index__WEBPACK_IMPORTED_MODULE_2__["decrement"]()),
    onAddCounter: () => dispatch(_store_actions_index__WEBPACK_IMPORTED_MODULE_2__["add"](10)),
    onSubtractCounter: () => dispatch(_store_actions_index__WEBPACK_IMPORTED_MODULE_2__["subtract"](15)),
    onStoreResult: result => dispatch(_store_actions_index__WEBPACK_IMPORTED_MODULE_2__["storeResult"](result)),
    onDeleteResult: id => dispatch(_store_actions_index__WEBPACK_IMPORTED_MODULE_2__["deleteResult"](id))
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(Index));

/***/ }),

/***/ "./store/actions/actionTypes.js":
/*!**************************************!*\
  !*** ./store/actions/actionTypes.js ***!
  \**************************************/
/*! exports provided: INCREMENT, DECREMENT, ADD, SUBTRACT, STORE_RESULT, DELETE_RESULT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INCREMENT", function() { return INCREMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DECREMENT", function() { return DECREMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD", function() { return ADD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUBTRACT", function() { return SUBTRACT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STORE_RESULT", function() { return STORE_RESULT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_RESULT", function() { return DELETE_RESULT; });
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const ADD = 'ADD';
const SUBTRACT = 'SUBTRACT';
const STORE_RESULT = 'STORE_RESULT';
const DELETE_RESULT = 'DELETE_RESULT';

/***/ }),

/***/ "./store/actions/counter.js":
/*!**********************************!*\
  !*** ./store/actions/counter.js ***!
  \**********************************/
/*! exports provided: increment, decrement, add, subtract */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "increment", function() { return increment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decrement", function() { return decrement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subtract", function() { return subtract; });
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actionTypes */ "./store/actions/actionTypes.js");

const increment = () => {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["INCREMENT"]
  };
};
const decrement = () => {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["DECREMENT"]
  };
};
const add = value => {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["ADD"],
    val: value
  };
};
const subtract = value => {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SUBTRACT"],
    val: value
  };
};

/***/ }),

/***/ "./store/actions/index.js":
/*!********************************!*\
  !*** ./store/actions/index.js ***!
  \********************************/
/*! exports provided: add, subtract, increment, decrement, storeResult, deleteResult */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _counter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./counter */ "./store/actions/counter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "add", function() { return _counter__WEBPACK_IMPORTED_MODULE_0__["add"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "subtract", function() { return _counter__WEBPACK_IMPORTED_MODULE_0__["subtract"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "increment", function() { return _counter__WEBPACK_IMPORTED_MODULE_0__["increment"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "decrement", function() { return _counter__WEBPACK_IMPORTED_MODULE_0__["decrement"]; });

/* harmony import */ var _result__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./result */ "./store/actions/result.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "storeResult", function() { return _result__WEBPACK_IMPORTED_MODULE_1__["storeResult"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteResult", function() { return _result__WEBPACK_IMPORTED_MODULE_1__["deleteResult"]; });




/***/ }),

/***/ "./store/actions/result.js":
/*!*********************************!*\
  !*** ./store/actions/result.js ***!
  \*********************************/
/*! exports provided: saveResult, storeResult, deleteResult */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveResult", function() { return saveResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeResult", function() { return storeResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteResult", function() { return deleteResult; });
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actionTypes */ "./store/actions/actionTypes.js");

const saveResult = res => {
  // const updatedResult = res * 2;
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["STORE_RESULT"],
    result: res
  };
};
const storeResult = res => {
  return (dispatch, getState) => {
    setTimeout(() => {
      // const oldCounter = getState().ctr.counter;
      // console.log(oldCounter);
      dispatch(saveResult(res));
    }, 1000);
  };
};
const deleteResult = resElId => {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["DELETE_RESULT"],
    resultElId: resElId
  };
};

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\mostafa\Desktop\eduedge\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map