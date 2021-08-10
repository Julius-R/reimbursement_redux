self["webpackHotUpdate_N_E"]("pages/login",{

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Login; }
/* harmony export */ });
/* harmony import */ var C_Users_Julius_Robinson_Sandbox_reimburement_redux_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_Session_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/Session.js */ "./lib/Session.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-hot-toast */ "./node_modules/react-hot-toast/dist/react-hot-toast.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\Julius Robinson\\Sandbox\\reimburement_redux\\pages\\login.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_Julius_Robinson_Sandbox_reimburement_redux_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



 // import bcrypt from "bcryptjs";



 // import { PrismaClient } from "@prisma/client";
// const prisma = new PrismaClient();

function Login() {
  _s();

  var _errors$password, _errors$password2;

  var _useForm = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_6__.useForm)(),
      register = _useForm.register,
      handleSubmit = _useForm.handleSubmit,
      setError = _useForm.setError,
      errors = _useForm.formState.errors;

  var onSubmit = function onSubmit(values) {
    if (!!values.password.trim()) {
      console.log(values);
      fetch("/api/login", {
        body: JSON.stringify(values),
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        }
      }).then(function (res) {
        if (res.status === 401) {} else {}
      });
    } else {
      setError("password", {
        type: "blank_space"
      });
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: "min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_hot_toast__WEBPACK_IMPORTED_MODULE_7__.Toaster, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "max-w-md w-full space-y-8",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h2", {
          className: "mt-6 text-center text-3xl font-extrabold text-gray-900",
          children: "Sign in to your account"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("form", {
        onSubmit: handleSubmit(onSubmit),
        className: "mt-8 space-y-6",
        action: "#",
        method: "POST",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", {
          type: "hidden",
          name: "remember",
          defaultValue: "true"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "rounded-md shadow-sm -space-y-px",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("label", {
              htmlFor: "email-address",
              className: "sr-only",
              children: "Email address"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 8
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", _objectSpread(_objectSpread({}, register("email", {
              required: true
            })), {}, {
              id: "email-address",
              name: "email",
              type: "email",
              autoComplete: "email",
              required: true,
              className: "appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm",
              placeholder: "Email address"
            }), void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 8
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: "my-4",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("label", {
              htmlFor: "password",
              className: "sr-only",
              children: "Password"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 73,
              columnNumber: 8
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", _objectSpread(_objectSpread({}, register("password", {
              required: true
            })), {}, {
              id: "password",
              name: "password",
              type: "password",
              autoComplete: "current-password",
              required: true,
              className: "appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm",
              placeholder: "Password"
            }), void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 76,
              columnNumber: 8
            }, this), ((_errors$password = errors.password) === null || _errors$password === void 0 ? void 0 : _errors$password.type) === "required" && "Field should not be blank", ((_errors$password2 = errors.password) === null || _errors$password2 === void 0 ? void 0 : _errors$password2.type) === "blank_space" && "Field is blank."]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
            type: "submit",
            className: "group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
            children: "Sign in"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 7
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 3
  }, this);
}

_s(Login, "ws22EEXsISAdAYxLl8uTeqxvJ48=", false, function () {
  return [react_hook_form__WEBPACK_IMPORTED_MODULE_6__.useForm];
});

_c = Login;

var _c;

$RefreshReg$(_c, "Login");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/goober/dist/goober.modern.js":
/*!***************************************************!*\
  !*** ./node_modules/goober/dist/goober.modern.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "css": function() { return /* binding */ p; },
/* harmony export */   "extractCss": function() { return /* binding */ r; },
/* harmony export */   "glob": function() { return /* binding */ g; },
/* harmony export */   "keyframes": function() { return /* binding */ b; },
/* harmony export */   "setup": function() { return /* binding */ h; },
/* harmony export */   "styled": function() { return /* binding */ j; }
/* harmony export */ });
let e={data:""},t=t=>"object"==typeof window?((t?t.querySelector("#_goober"):window._goober)||Object.assign((t||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:t||e,r=e=>{let r=t(e),l=r.data;return r.data="",l},l=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(})/g,a=/\/\*[^]*?\*\/|\s\s+|\n/g,o=(e,t)=>{let r,l="",a="",n="";for(let c in e){let s=e[c];"object"==typeof s?(r=t?t.replace(/([^,])+/g,e=>c.replace(/([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):c,a+="@"==c[0]?"f"==c[1]?o(s,c):c+"{"+o(s,"k"==c[1]?"":t)+"}":o(s,r)):"@"==c[0]&&"i"==c[1]?l=c+" "+s+";":(c=c.replace(/[A-Z]/g,"-$&").toLowerCase(),n+=o.p?o.p(c,s):c+":"+s+";")}return n[0]?(r=t?t+"{"+n+"}":n,l+r+a):l+a},n={},c=e=>{let t="";for(let r in e)t+=r+("object"==typeof e[r]?c(e[r]):e[r]);return t},s=(e,t,r,s,i)=>{let p="object"==typeof e?c(e):e,u=n[p]||(n[p]=(e=>{let t=0,r=11;for(;t<e.length;)r=101*r+e.charCodeAt(t++)>>>0;return"go"+r})(p));if(!n[u]){let t="object"==typeof e?e:(e=>{let t,r=[{}];for(;t=l.exec(e.replace(a,""));)t[4]&&r.shift(),t[3]?r.unshift(r[0][t[3]]=r[0][t[3]]||{}):t[4]||(r[0][t[1]]=t[2]);return r[0]})(e);n[u]=o(i?{["@keyframes "+u]:t}:t,r?"":"."+u)}return((e,t,r)=>{-1==t.data.indexOf(e)&&(t.data=r?e+t.data:t.data+e)})(n[u],t,s),u},i=(e,t,r)=>e.reduce((e,l,a)=>{let n=t[a];if(n&&n.call){let e=n(r),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;n=t?"."+t:e&&"object"==typeof e?e.props?"":o(e,""):e}return e+l+(null==n?"":n)},"");function p(e){let r=this||{},l=e.call?e(r.p):e;return s(l.unshift?l.raw?i(l,[].slice.call(arguments,1),r.p):l.reduce((e,t)=>t?Object.assign(e,t.call?t(r.p):t):e,{}):l,t(r.target),r.g,r.o,r.k)}let u,f,d,g=p.bind({g:1}),b=p.bind({k:1});function h(e,t,r,l){o.p=t,u=e,f=r,d=l}function j(e,t){let r=this||{};return function(){let l=arguments;function a(o,n){let c=Object.assign({},o),s=c.className||a.className;r.p=Object.assign({theme:f&&f()},c),r.o=/ *go\d+/.test(s),c.className=p.apply(r,l)+(s?" "+s:""),t&&(c.ref=n);let i=c.as||e;return d&&i[0]&&d(c),u(i,c)}return t?t(a):a}}


/***/ }),

/***/ "./node_modules/react-hot-toast/dist/react-hot-toast.esm.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-hot-toast/dist/react-hot-toast.esm.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckmarkIcon": function() { return /* binding */ CheckmarkIcon; },
/* harmony export */   "ErrorIcon": function() { return /* binding */ ErrorIcon; },
/* harmony export */   "LoaderIcon": function() { return /* binding */ LoaderIcon; },
/* harmony export */   "ToastBar": function() { return /* binding */ ToastBar; },
/* harmony export */   "ToastIcon": function() { return /* binding */ ToastIcon; },
/* harmony export */   "Toaster": function() { return /* binding */ Toaster; },
/* harmony export */   "resolveValue": function() { return /* binding */ resolveValue; },
/* harmony export */   "toast": function() { return /* binding */ toast; },
/* harmony export */   "useToaster": function() { return /* binding */ useToaster; },
/* harmony export */   "useToasterStore": function() { return /* binding */ useStore; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var goober__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! goober */ "./node_modules/goober/dist/goober.modern.js");



function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _taggedTemplateLiteralLoose(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  strings.raw = raw;
  return strings;
}

var isFunction = function isFunction(valOrFunction) {
  return typeof valOrFunction === 'function';
};

var resolveValue = function resolveValue(valOrFunction, arg) {
  return isFunction(valOrFunction) ? valOrFunction(arg) : valOrFunction;
};

var genId = /*#__PURE__*/function () {
  var count = 0;
  return function () {
    return (++count).toString();
  };
}();
var createRectRef = function createRectRef(onRect) {
  return function (el) {
    if (el) {
      setTimeout(function () {
        var boundingRect = el.getBoundingClientRect();
        onRect(boundingRect);
      });
    }
  };
};
var prefersReducedMotion = /*#__PURE__*/function () {
  // Cache result
  var shouldReduceMotion = undefined;
  return function () {
    if (shouldReduceMotion === undefined) {
      var mediaQuery = matchMedia('(prefers-reduced-motion: reduce)');
      shouldReduceMotion = !mediaQuery || mediaQuery.matches;
    }

    return shouldReduceMotion;
  };
}();

var TOAST_LIMIT = 20;
var ActionType;

(function (ActionType) {
  ActionType[ActionType["ADD_TOAST"] = 0] = "ADD_TOAST";
  ActionType[ActionType["UPDATE_TOAST"] = 1] = "UPDATE_TOAST";
  ActionType[ActionType["UPSERT_TOAST"] = 2] = "UPSERT_TOAST";
  ActionType[ActionType["DISMISS_TOAST"] = 3] = "DISMISS_TOAST";
  ActionType[ActionType["REMOVE_TOAST"] = 4] = "REMOVE_TOAST";
  ActionType[ActionType["START_PAUSE"] = 5] = "START_PAUSE";
  ActionType[ActionType["END_PAUSE"] = 6] = "END_PAUSE";
})(ActionType || (ActionType = {}));

var toastTimeouts = /*#__PURE__*/new Map();

var addToRemoveQueue = function addToRemoveQueue(toastId) {
  if (toastTimeouts.has(toastId)) {
    return;
  }

  var timeout = setTimeout(function () {
    toastTimeouts["delete"](toastId);
    dispatch({
      type: ActionType.REMOVE_TOAST,
      toastId: toastId
    });
  }, 1000);
  toastTimeouts.set(toastId, timeout);
};

var clearFromRemoveQueue = function clearFromRemoveQueue(toastId) {
  var timeout = toastTimeouts.get(toastId);

  if (timeout) {
    clearTimeout(timeout);
  }
};

var reducer = function reducer(state, action) {
  switch (action.type) {
    case ActionType.ADD_TOAST:
      return _extends({}, state, {
        toasts: [action.toast].concat(state.toasts).slice(0, TOAST_LIMIT)
      });

    case ActionType.UPDATE_TOAST:
      //  ! Side effects !
      if (action.toast.id) {
        clearFromRemoveQueue(action.toast.id);
      }

      return _extends({}, state, {
        toasts: state.toasts.map(function (t) {
          return t.id === action.toast.id ? _extends({}, t, action.toast) : t;
        })
      });

    case ActionType.UPSERT_TOAST:
      var toast = action.toast;
      return state.toasts.find(function (t) {
        return t.id === toast.id;
      }) ? reducer(state, {
        type: ActionType.UPDATE_TOAST,
        toast: toast
      }) : reducer(state, {
        type: ActionType.ADD_TOAST,
        toast: toast
      });

    case ActionType.DISMISS_TOAST:
      var toastId = action.toastId; // ! Side effects ! - This could be execrated into a dismissToast() action, but I'll keep it here for simplicity

      if (toastId) {
        addToRemoveQueue(toastId);
      } else {
        state.toasts.forEach(function (toast) {
          addToRemoveQueue(toast.id);
        });
      }

      return _extends({}, state, {
        toasts: state.toasts.map(function (t) {
          return t.id === toastId || toastId === undefined ? _extends({}, t, {
            visible: false
          }) : t;
        })
      });

    case ActionType.REMOVE_TOAST:
      if (action.toastId === undefined) {
        return _extends({}, state, {
          toasts: []
        });
      }

      return _extends({}, state, {
        toasts: state.toasts.filter(function (t) {
          return t.id !== action.toastId;
        })
      });

    case ActionType.START_PAUSE:
      return _extends({}, state, {
        pausedAt: action.time
      });

    case ActionType.END_PAUSE:
      var diff = action.time - (state.pausedAt || 0);
      return _extends({}, state, {
        pausedAt: undefined,
        toasts: state.toasts.map(function (t) {
          return _extends({}, t, {
            pauseDuration: t.pauseDuration + diff
          });
        })
      });
  }
};
var listeners = [];
var memoryState = {
  toasts: [],
  pausedAt: undefined
};
var dispatch = function dispatch(action) {
  memoryState = reducer(memoryState, action);
  listeners.forEach(function (listener) {
    listener(memoryState);
  });
};
var defaultTimeouts = {
  blank: 4000,
  error: 4000,
  success: 2000,
  loading: Infinity,
  custom: 4000
};
var useStore = function useStore(toastOptions) {
  if (toastOptions === void 0) {
    toastOptions = {};
  }

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(memoryState),
      state = _useState[0],
      setState = _useState[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    listeners.push(setState);
    return function () {
      var index = listeners.indexOf(setState);

      if (index > -1) {
        listeners.splice(index, 1);
      }
    };
  }, [state]);
  var mergedToasts = state.toasts.map(function (t) {
    var _toastOptions$t$type, _toastOptions, _toastOptions$t$type2;

    return _extends({}, toastOptions, toastOptions[t.type], t, {
      duration: t.duration || ((_toastOptions$t$type = toastOptions[t.type]) == null ? void 0 : _toastOptions$t$type.duration) || ((_toastOptions = toastOptions) == null ? void 0 : _toastOptions.duration) || defaultTimeouts[t.type],
      style: _extends({}, toastOptions.style, (_toastOptions$t$type2 = toastOptions[t.type]) == null ? void 0 : _toastOptions$t$type2.style, t.style)
    });
  });
  return _extends({}, state, {
    toasts: mergedToasts
  });
};

var createToast = function createToast(message, type, opts) {
  if (type === void 0) {
    type = 'blank';
  }

  return _extends({
    createdAt: Date.now(),
    visible: true,
    type: type,
    ariaProps: {
      role: 'status',
      'aria-live': 'polite'
    },
    message: message,
    pauseDuration: 0
  }, opts, {
    id: (opts == null ? void 0 : opts.id) || genId()
  });
};

var createHandler = function createHandler(type) {
  return function (message, options) {
    var toast = createToast(message, type, options);
    dispatch({
      type: ActionType.UPSERT_TOAST,
      toast: toast
    });
    return toast.id;
  };
};

var toast = function toast(message, opts) {
  return createHandler('blank')(message, opts);
};

toast.error = /*#__PURE__*/createHandler('error');
toast.success = /*#__PURE__*/createHandler('success');
toast.loading = /*#__PURE__*/createHandler('loading');
toast.custom = /*#__PURE__*/createHandler('custom');

toast.dismiss = function (toastId) {
  dispatch({
    type: ActionType.DISMISS_TOAST,
    toastId: toastId
  });
};

toast.remove = function (toastId) {
  return dispatch({
    type: ActionType.REMOVE_TOAST,
    toastId: toastId
  });
};

toast.promise = function (promise, msgs, opts) {
  var id = toast.loading(msgs.loading, _extends({}, opts, opts == null ? void 0 : opts.loading));
  promise.then(function (p) {
    toast.success(resolveValue(msgs.success, p), _extends({
      id: id
    }, opts, opts == null ? void 0 : opts.success));
    return p;
  })["catch"](function (e) {
    toast.error(resolveValue(msgs.error, e), _extends({
      id: id
    }, opts, opts == null ? void 0 : opts.error));
  });
  return promise;
};

var useToaster = function useToaster(toastOptions) {
  var _useStore = useStore(toastOptions),
      toasts = _useStore.toasts,
      pausedAt = _useStore.pausedAt;

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (pausedAt) {
      return;
    }

    var now = Date.now();
    var timeouts = toasts.map(function (t) {
      if (t.duration === Infinity) {
        return;
      }

      var durationLeft = (t.duration || 0) + t.pauseDuration - (now - t.createdAt);

      if (durationLeft < 0) {
        if (t.visible) {
          toast.dismiss(t.id);
        }

        return;
      }

      return setTimeout(function () {
        return toast.dismiss(t.id);
      }, durationLeft);
    });
    return function () {
      timeouts.forEach(function (timeout) {
        return timeout && clearTimeout(timeout);
      });
    };
  }, [toasts, pausedAt]);
  var handlers = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return {
      startPause: function startPause() {
        dispatch({
          type: ActionType.START_PAUSE,
          time: Date.now()
        });
      },
      endPause: function endPause() {
        if (pausedAt) {
          dispatch({
            type: ActionType.END_PAUSE,
            time: Date.now()
          });
        }
      },
      updateHeight: function updateHeight(toastId, height) {
        return dispatch({
          type: ActionType.UPDATE_TOAST,
          toast: {
            id: toastId,
            height: height
          }
        });
      },
      calculateOffset: function calculateOffset(toast, opts) {
        var _relevantToasts$filte;

        var _ref = opts || {},
            _ref$reverseOrder = _ref.reverseOrder,
            reverseOrder = _ref$reverseOrder === void 0 ? false : _ref$reverseOrder,
            _ref$gutter = _ref.gutter,
            gutter = _ref$gutter === void 0 ? 8 : _ref$gutter,
            defaultPosition = _ref.defaultPosition;

        var relevantToasts = toasts.filter(function (t) {
          return (t.position || defaultPosition) === (toast.position || defaultPosition) && t.height;
        });
        var toastIndex = relevantToasts.findIndex(function (t) {
          return t.id === toast.id;
        });
        var toastsBefore = relevantToasts.filter(function (toast, i) {
          return i < toastIndex && toast.visible;
        }).length;

        var offset = (_relevantToasts$filte = relevantToasts.filter(function (t) {
          return t.visible;
        })).slice.apply(_relevantToasts$filte, reverseOrder ? [toastsBefore + 1] : [0, toastsBefore]).reduce(function (acc, t) {
          return acc + (t.height || 0) + gutter;
        }, 0);

        return offset;
      }
    };
  }, [toasts, pausedAt]);
  return {
    toasts: toasts,
    handlers: handlers
  };
};

function _templateObject4() {
  var data = _taggedTemplateLiteralLoose(["\n  width: 20px;\n  opacity: 0;\n  height: 20px;\n  border-radius: 10px;\n  background: ", ";\n  position: relative;\n  transform: rotate(45deg);\n\n  animation: ", " 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n  animation-delay: 100ms;\n\n  &:after,\n  &:before {\n    content: '';\n    animation: ", " 0.15s ease-out forwards;\n    animation-delay: 150ms;\n    position: absolute;\n    border-radius: 3px;\n    opacity: 0;\n    background: ", ";\n    bottom: 9px;\n    left: 4px;\n    height: 2px;\n    width: 12px;\n  }\n\n  &:before {\n    animation: ", " 0.15s ease-out forwards;\n    animation-delay: 180ms;\n    transform: rotate(90deg);\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteralLoose(["\nfrom {\n  transform: scale(0) rotate(90deg);\n\topacity: 0;\n}\nto {\n  transform: scale(1) rotate(90deg);\n\topacity: 1;\n}"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\nfrom {\n  transform: scale(0);\n  opacity: 0;\n}\nto {\n  transform: scale(1);\n  opacity: 1;\n}"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\nfrom {\n  transform: scale(0) rotate(45deg);\n\topacity: 0;\n}\nto {\n transform: scale(1) rotate(45deg);\n  opacity: 1;\n}"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var circleAnimation = /*#__PURE__*/(0,goober__WEBPACK_IMPORTED_MODULE_1__.keyframes)( /*#__PURE__*/_templateObject());
var firstLineAnimation = /*#__PURE__*/(0,goober__WEBPACK_IMPORTED_MODULE_1__.keyframes)( /*#__PURE__*/_templateObject2());
var secondLineAnimation = /*#__PURE__*/(0,goober__WEBPACK_IMPORTED_MODULE_1__.keyframes)( /*#__PURE__*/_templateObject3());
var ErrorIcon = /*#__PURE__*/(0,goober__WEBPACK_IMPORTED_MODULE_1__.styled)('div')( /*#__PURE__*/_templateObject4(), function (p) {
  return p.primary || '#ff4b4b';
}, circleAnimation, firstLineAnimation, function (p) {
  return p.secondary || '#fff';
}, secondLineAnimation);

function _templateObject2$1() {
  var data = _taggedTemplateLiteralLoose(["\n  width: 12px;\n  height: 12px;\n  box-sizing: border-box;\n  border: 2px solid;\n  border-radius: 100%;\n  border-color: ", ";\n  border-right-color: ", ";\n  animation: ", " 1s linear infinite;\n"]);

  _templateObject2$1 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$1() {
  var data = _taggedTemplateLiteralLoose(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}
var rotate = /*#__PURE__*/(0,goober__WEBPACK_IMPORTED_MODULE_1__.keyframes)( /*#__PURE__*/_templateObject$1());
var LoaderIcon = /*#__PURE__*/(0,goober__WEBPACK_IMPORTED_MODULE_1__.styled)('div')( /*#__PURE__*/_templateObject2$1(), function (p) {
  return p.secondary || '#e0e0e0';
}, function (p) {
  return p.primary || '#616161';
}, rotate);

function _templateObject3$1() {
  var data = _taggedTemplateLiteralLoose(["\n  width: 20px;\n  opacity: 0;\n  height: 20px;\n  border-radius: 10px;\n  background: ", ";\n  position: relative;\n  transform: rotate(45deg);\n\n  animation: ", " 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n  animation-delay: 100ms;\n  &:after {\n    content: '';\n    box-sizing: border-box;\n    animation: ", " 0.2s ease-out forwards;\n    opacity: 0;\n    animation-delay: 200ms;\n    position: absolute;\n    border-right: 2px solid;\n    border-bottom: 2px solid;\n    border-color: ", ";\n    bottom: 6px;\n    left: 6px;\n    height: 10px;\n    width: 6px;\n  }\n"]);

  _templateObject3$1 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$2() {
  var data = _taggedTemplateLiteralLoose(["\n0% {\n\theight: 0;\n\twidth: 0;\n\topacity: 0;\n}\n40% {\n  height: 0;\n\twidth: 6px;\n\topacity: 1;\n}\n100% {\n  opacity: 1;\n  height: 10px;\n}"]);

  _templateObject2$2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$2() {
  var data = _taggedTemplateLiteralLoose(["\nfrom {\n  transform: scale(0) rotate(45deg);\n\topacity: 0;\n}\nto {\n  transform: scale(1) rotate(45deg);\n\topacity: 1;\n}"]);

  _templateObject$2 = function _templateObject() {
    return data;
  };

  return data;
}
var circleAnimation$1 = /*#__PURE__*/(0,goober__WEBPACK_IMPORTED_MODULE_1__.keyframes)( /*#__PURE__*/_templateObject$2());
var checkmarkAnimation = /*#__PURE__*/(0,goober__WEBPACK_IMPORTED_MODULE_1__.keyframes)( /*#__PURE__*/_templateObject2$2());
var CheckmarkIcon = /*#__PURE__*/(0,goober__WEBPACK_IMPORTED_MODULE_1__.styled)('div')( /*#__PURE__*/_templateObject3$1(), function (p) {
  return p.primary || '#61d345';
}, circleAnimation$1, checkmarkAnimation, function (p) {
  return p.secondary || '#fff';
});

function _templateObject4$1() {
  var data = _taggedTemplateLiteralLoose(["\n  position: relative;\n  transform: scale(0.6);\n  opacity: 0.4;\n  min-width: 20px;\n  animation: ", " 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n"]);

  _templateObject4$1 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$2() {
  var data = _taggedTemplateLiteralLoose(["\nfrom {\n  transform: scale(0.6);\n  opacity: 0.4;\n}\nto {\n  transform: scale(1);\n  opacity: 1;\n}"]);

  _templateObject3$2 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$3() {
  var data = _taggedTemplateLiteralLoose(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-width: 20px;\n  min-height: 20px;\n"]);

  _templateObject2$3 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$3() {
  var data = _taggedTemplateLiteralLoose(["\n  position: absolute;\n"]);

  _templateObject$3 = function _templateObject() {
    return data;
  };

  return data;
}
var StatusWrapper = /*#__PURE__*/(0,goober__WEBPACK_IMPORTED_MODULE_1__.styled)('div')( /*#__PURE__*/_templateObject$3());
var IndicatorWrapper = /*#__PURE__*/(0,goober__WEBPACK_IMPORTED_MODULE_1__.styled)('div')( /*#__PURE__*/_templateObject2$3());
var enter = /*#__PURE__*/(0,goober__WEBPACK_IMPORTED_MODULE_1__.keyframes)( /*#__PURE__*/_templateObject3$2());
var AnimatedIconWrapper = /*#__PURE__*/(0,goober__WEBPACK_IMPORTED_MODULE_1__.styled)('div')( /*#__PURE__*/_templateObject4$1(), enter);
var ToastIcon = function ToastIcon(_ref) {
  var toast = _ref.toast;
  var icon = toast.icon,
      type = toast.type,
      iconTheme = toast.iconTheme;

  if (icon !== undefined) {
    if (typeof icon === 'string') {
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(AnimatedIconWrapper, null, icon);
    } else {
      return icon;
    }
  }

  if (type === 'blank') {
    return null;
  }

  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(IndicatorWrapper, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(LoaderIcon, Object.assign({}, iconTheme)), type !== 'loading' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(StatusWrapper, null, type === 'error' ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ErrorIcon, Object.assign({}, iconTheme)) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(CheckmarkIcon, Object.assign({}, iconTheme))));
};

function _templateObject2$4() {
  var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  justify-content: center;\n  margin: 4px 10px;\n  color: inherit;\n  flex: 1 1 auto;\n"]);

  _templateObject2$4 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$4() {
  var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  align-items: center;\n  background: #fff;\n  color: #363636;\n  line-height: 1.3;\n  will-change: transform;\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);\n  max-width: 350px;\n  pointer-events: auto;\n  padding: 8px 10px;\n  border-radius: 8px;\n"]);

  _templateObject$4 = function _templateObject() {
    return data;
  };

  return data;
}

var enterAnimation = function enterAnimation(factor) {
  return "\n0% {transform: translate3d(0," + factor * -200 + "%,0) scale(.6); opacity:.5;}\n100% {transform: translate3d(0,0,0) scale(1); opacity:1;}\n";
};

var exitAnimation = function exitAnimation(factor) {
  return "\n0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}\n100% {transform: translate3d(0," + factor * -150 + "%,-1px) scale(.6); opacity:0;}\n";
};

var fadeInAnimation = "0%{opacity:0;} 100%{opacity:1;}";
var fadeOutAnimation = "0%{opacity:1;} 100%{opacity:0;}";
var ToastBarBase = /*#__PURE__*/(0,goober__WEBPACK_IMPORTED_MODULE_1__.styled)('div', react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)( /*#__PURE__*/_templateObject$4());
var Message = /*#__PURE__*/(0,goober__WEBPACK_IMPORTED_MODULE_1__.styled)('div')( /*#__PURE__*/_templateObject2$4());

var getAnimationStyle = function getAnimationStyle(position, visible) {
  var top = position.includes('top');
  var factor = top ? 1 : -1;

  var _ref = prefersReducedMotion() ? [fadeInAnimation, fadeOutAnimation] : [enterAnimation(factor), exitAnimation(factor)],
      enter = _ref[0],
      exit = _ref[1];

  return {
    animation: visible ? (0,goober__WEBPACK_IMPORTED_MODULE_1__.keyframes)(enter) + " 0.35s cubic-bezier(.21,1.02,.73,1) forwards" : (0,goober__WEBPACK_IMPORTED_MODULE_1__.keyframes)(exit) + " 0.4s forwards cubic-bezier(.06,.71,.55,1)"
  };
};

var ToastBar = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(function (_ref2) {
  var toast = _ref2.toast,
      position = _ref2.position,
      style = _ref2.style,
      children = _ref2.children;
  var animationStyle = toast != null && toast.height ? getAnimationStyle(toast.position || position || 'top-center', toast.visible) : {
    opacity: 0
  };
  var icon = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToastIcon, {
    toast: toast
  });
  var message = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Message, Object.assign({}, toast.ariaProps), resolveValue(toast.message, toast));
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToastBarBase, {
    className: toast.className,
    style: _extends({}, animationStyle, style, toast.style)
  }, typeof children === 'function' ? children({
    icon: icon,
    message: message
  }) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, icon, message));
});

function _templateObject$5() {
  var data = _taggedTemplateLiteralLoose(["\n  z-index: 9999;\n  > * {\n    pointer-events: auto;\n  }\n"]);

  _templateObject$5 = function _templateObject() {
    return data;
  };

  return data;
}
(0,goober__WEBPACK_IMPORTED_MODULE_1__.setup)(react__WEBPACK_IMPORTED_MODULE_0__.createElement);

var getPositionStyle = function getPositionStyle(position, offset) {
  var top = position.includes('top');
  var verticalStyle = top ? {
    top: 0
  } : {
    bottom: 0
  };
  var horizontalStyle = position.includes('center') ? {
    justifyContent: 'center'
  } : position.includes('right') ? {
    justifyContent: 'flex-end'
  } : {};
  return _extends({
    left: 0,
    right: 0,
    display: 'flex',
    position: 'absolute',
    transition: prefersReducedMotion() ? undefined : "all 230ms cubic-bezier(.21,1.02,.73,1)",
    transform: "translateY(" + offset * (top ? 1 : -1) + "px)"
  }, verticalStyle, horizontalStyle);
};

var activeClass = /*#__PURE__*/(0,goober__WEBPACK_IMPORTED_MODULE_1__.css)( /*#__PURE__*/_templateObject$5());
var DEFAULT_OFFSET = 16;
var Toaster = function Toaster(_ref) {
  var reverseOrder = _ref.reverseOrder,
      _ref$position = _ref.position,
      position = _ref$position === void 0 ? 'top-center' : _ref$position,
      toastOptions = _ref.toastOptions,
      gutter = _ref.gutter,
      children = _ref.children,
      containerStyle = _ref.containerStyle,
      containerClassName = _ref.containerClassName;

  var _useToaster = useToaster(toastOptions),
      toasts = _useToaster.toasts,
      handlers = _useToaster.handlers;

  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: _extends({
      position: 'fixed',
      zIndex: 9999,
      top: DEFAULT_OFFSET,
      left: DEFAULT_OFFSET,
      right: DEFAULT_OFFSET,
      bottom: DEFAULT_OFFSET,
      pointerEvents: 'none'
    }, containerStyle),
    className: containerClassName,
    onMouseEnter: handlers.startPause,
    onMouseLeave: handlers.endPause
  }, toasts.map(function (t) {
    var toastPosition = t.position || position;
    var offset = handlers.calculateOffset(t, {
      reverseOrder: reverseOrder,
      gutter: gutter,
      defaultPosition: position
    });
    var positionStyle = getPositionStyle(toastPosition, offset);
    var ref = t.height ? undefined : createRectRef(function (rect) {
      handlers.updateHeight(t.id, rect.height);
    });
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      ref: ref,
      className: t.visible ? activeClass : '',
      key: t.id,
      style: positionStyle
    }, t.type === 'custom' ? resolveValue(t.message, t) : children ? children(t) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToastBar, {
      toast: t,
      position: toastPosition
    }));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (toast);

//# sourceMappingURL=react-hot-toast.esm.js.map


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9naW4uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9nb29iZXIvZGlzdC9nb29iZXIubW9kZXJuLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtaG90LXRvYXN0L2Rpc3QvcmVhY3QtaG90LXRvYXN0LmVzbS5qcyJdLCJuYW1lcyI6WyJMb2dpbiIsInVzZUZvcm0iLCJyZWdpc3RlciIsImhhbmRsZVN1Ym1pdCIsInNldEVycm9yIiwiZXJyb3JzIiwiZm9ybVN0YXRlIiwib25TdWJtaXQiLCJ2YWx1ZXMiLCJwYXNzd29yZCIsInRyaW0iLCJjb25zb2xlIiwibG9nIiwiZmV0Y2giLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIm1ldGhvZCIsImhlYWRlcnMiLCJ0aGVuIiwicmVzIiwic3RhdHVzIiwidHlwZSIsInJlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0NBRUE7O0FBQ0E7QUFDQTtDQUVBO0FBRUE7O0FBRWUsU0FBU0EsS0FBVCxHQUFpQjtBQUFBOztBQUFBOztBQUFBLGlCQU0zQkMsd0RBQU8sRUFOb0I7QUFBQSxNQUU5QkMsUUFGOEIsWUFFOUJBLFFBRjhCO0FBQUEsTUFHOUJDLFlBSDhCLFlBRzlCQSxZQUg4QjtBQUFBLE1BSTlCQyxRQUo4QixZQUk5QkEsUUFKOEI7QUFBQSxNQUtqQkMsTUFMaUIsWUFLOUJDLFNBTDhCLENBS2pCRCxNQUxpQjs7QUFPL0IsTUFBTUUsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsTUFBRCxFQUFZO0FBQzVCLFFBQUksQ0FBQyxDQUFDQSxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLElBQWhCLEVBQU4sRUFBOEI7QUFDN0JDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZSixNQUFaO0FBQ0FLLFdBQUssQ0FBQyxZQUFELEVBQWU7QUFDbkJDLFlBQUksRUFBRUMs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O0FBQ0E7O0FBRUEsNEJBQTRCLDJDQUFJO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxvREFBYTtBQUMxQjtBQUNBLEdBQUc7QUFDSCxnQkFBZ0Isb0RBQWEsMEJBQTBCO0FBQ3ZELFNBQVMsb0RBQWE7QUFDdEI7QUFDQSxzQkFBc0I7QUFDdEIsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHLElBQUksb0RBQWEsQ0FBQywyQ0FBUTtBQUM3QixDQUFDOztBQUVEO0FBQ0EsNkRBQTZELFNBQVMsMkJBQTJCLEtBQUs7O0FBRXRHO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNkNBQUssQ0FBQyxnREFBYTs7QUFFbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsK0JBQStCLDJDQUFHO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTLG9EQUFhO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLFdBQVcsb0RBQWE7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLDhFQUE4RSxvREFBYTtBQUNoRztBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDs7QUFFQSwrREFBZSxLQUFLLEVBQUM7QUFDdUg7QUFDNUkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbG9naW4uMWVkN2JlZGY3NzJlMDUxOGJlNTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgd2l0aFNlc3Npb24gZnJvbSBcIi4uL2xpYi9TZXNzaW9uLmpzXCI7XHJcbi8vIGltcG9ydCBiY3J5cHQgZnJvbSBcImJjcnlwdGpzXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSBcInJlYWN0LWhvb2stZm9ybVwiO1xyXG5pbXBvcnQgdG9hc3QsIHsgVG9hc3RlciB9IGZyb20gXCJyZWFjdC1ob3QtdG9hc3RcIjtcclxuLy8gaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XHJcblxyXG4vLyBjb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbigpIHtcclxuXHRjb25zdCB7XHJcblx0XHRyZWdpc3RlcixcclxuXHRcdGhhbmRsZVN1Ym1pdCxcclxuXHRcdHNldEVycm9yLFxyXG5cdFx0Zm9ybVN0YXRlOiB7IGVycm9ycyB9XHJcblx0fSA9IHVzZUZvcm0oKTtcclxuXHRjb25zdCBvblN1Ym1pdCA9ICh2YWx1ZXMpID0+IHtcclxuXHRcdGlmICghIXZhbHVlcy5wYXNzd29yZC50cmltKCkpIHtcclxuXHRcdFx0Y29uc29sZS5sb2codmFsdWVzKTtcclxuXHRcdFx0ZmV0Y2goXCIvYXBpL2xvZ2luXCIsIHtcclxuXHRcdFx0XHRib2R5OiBKU09OLnN0cmluZ2lmeSh2YWx1ZXMpLFxyXG5cdFx0XHRcdG1ldGhvZDogXCJQT1NUXCIsXHJcblx0XHRcdFx0aGVhZGVyczoge1xyXG5cdFx0XHRcdFx0XCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pLnRoZW4oKHJlcykgPT4ge1xyXG5cdFx0XHRcdGlmIChyZXMuc3RhdHVzID09PSA0MDEpIHtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRzZXRFcnJvcihcInBhc3N3b3JkXCIsIHsgdHlwZTogXCJibGFua19zcGFjZVwiIH0pO1xyXG5cdFx0fVxyXG5cdH07XHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGJnLWdyYXktNTAgcHktMTIgcHgtNCBzbTpweC02IGxnOnB4LThcIj5cclxuXHRcdFx0PGRpdj5cclxuXHRcdFx0XHQ8VG9hc3RlciAvPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtYXgtdy1tZCB3LWZ1bGwgc3BhY2UteS04XCI+XHJcblx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdDxoMiBjbGFzc05hbWU9XCJtdC02IHRleHQtY2VudGVyIHRleHQtM3hsIGZvbnQtZXh0cmFib2xkIHRleHQtZ3JheS05MDBcIj5cclxuXHRcdFx0XHRcdFx0U2lnbiBpbiB0byB5b3VyIGFjY291bnRcclxuXHRcdFx0XHRcdDwvaDI+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGZvcm1cclxuXHRcdFx0XHRcdG9uU3VibWl0PXtoYW5kbGVTdWJtaXQob25TdWJtaXQpfVxyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwibXQtOCBzcGFjZS15LTZcIlxyXG5cdFx0XHRcdFx0YWN0aW9uPVwiI1wiXHJcblx0XHRcdFx0XHRtZXRob2Q9XCJQT1NUXCI+XHJcblx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJyZW1lbWJlclwiIGRlZmF1bHRWYWx1ZT1cInRydWVcIiAvPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkLW1kIHNoYWRvdy1zbSAtc3BhY2UteS1weFwiPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxsYWJlbCBodG1sRm9yPVwiZW1haWwtYWRkcmVzc1wiIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5cclxuXHRcdFx0XHRcdFx0XHRcdEVtYWlsIGFkZHJlc3NcclxuXHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHRcdFx0ey4uLnJlZ2lzdGVyKFwiZW1haWxcIiwge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRyZXF1aXJlZDogdHJ1ZVxyXG5cdFx0XHRcdFx0XHRcdFx0fSl9XHJcblx0XHRcdFx0XHRcdFx0XHRpZD1cImVtYWlsLWFkZHJlc3NcIlxyXG5cdFx0XHRcdFx0XHRcdFx0bmFtZT1cImVtYWlsXCJcclxuXHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJlbWFpbFwiXHJcblx0XHRcdFx0XHRcdFx0XHRhdXRvQ29tcGxldGU9XCJlbWFpbFwiXHJcblx0XHRcdFx0XHRcdFx0XHRyZXF1aXJlZFxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiYXBwZWFyYW5jZS1ub25lIHJvdW5kZWQtbm9uZSByZWxhdGl2ZSBibG9jayB3LWZ1bGwgcHgtMyBweS0yIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcGxhY2Vob2xkZXItZ3JheS01MDAgdGV4dC1ncmF5LTkwMCByb3VuZGVkLXQtbWQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctaW5kaWdvLTUwMCBmb2N1czpib3JkZXItaW5kaWdvLTUwMCBmb2N1czp6LTEwIHNtOnRleHQtc21cIlxyXG5cdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJFbWFpbCBhZGRyZXNzXCJcclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJteS00XCI+XHJcblx0XHRcdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFBhc3N3b3JkXHJcblx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0XHRcdHsuLi5yZWdpc3RlcihcInBhc3N3b3JkXCIsIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0cmVxdWlyZWQ6IHRydWVcclxuXHRcdFx0XHRcdFx0XHRcdH0pfVxyXG5cdFx0XHRcdFx0XHRcdFx0aWQ9XCJwYXNzd29yZFwiXHJcblx0XHRcdFx0XHRcdFx0XHRuYW1lPVwicGFzc3dvcmRcIlxyXG5cdFx0XHRcdFx0XHRcdFx0dHlwZT1cInBhc3N3b3JkXCJcclxuXHRcdFx0XHRcdFx0XHRcdGF1dG9Db21wbGV0ZT1cImN1cnJlbnQtcGFzc3dvcmRcIlxyXG5cdFx0XHRcdFx0XHRcdFx0cmVxdWlyZWRcclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImFwcGVhcmFuY2Utbm9uZSByb3VuZGVkLW5vbmUgcmVsYXRpdmUgYmxvY2sgdy1mdWxsIHB4LTMgcHktMiBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHBsYWNlaG9sZGVyLWdyYXktNTAwIHRleHQtZ3JheS05MDAgcm91bmRlZC1iLW1kIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLWluZGlnby01MDAgZm9jdXM6Ym9yZGVyLWluZGlnby01MDAgZm9jdXM6ei0xMCBzbTp0ZXh0LXNtXCJcclxuXHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0e2Vycm9ycy5wYXNzd29yZD8udHlwZSA9PT0gXCJyZXF1aXJlZFwiICYmXHJcblx0XHRcdFx0XHRcdFx0XHRcIkZpZWxkIHNob3VsZCBub3QgYmUgYmxhbmtcIn1cclxuXHRcdFx0XHRcdFx0XHR7ZXJyb3JzLnBhc3N3b3JkPy50eXBlID09PSBcImJsYW5rX3NwYWNlXCIgJiZcclxuXHRcdFx0XHRcdFx0XHRcdFwiRmllbGQgaXMgYmxhbmsuXCJ9XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0PGJ1dHRvblxyXG5cdFx0XHRcdFx0XHRcdHR5cGU9XCJzdWJtaXRcIlxyXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImdyb3VwIHJlbGF0aXZlIHctZnVsbCBmbGV4IGp1c3RpZnktY2VudGVyIHB5LTIgcHgtNCBib3JkZXIgYm9yZGVyLXRyYW5zcGFyZW50IHRleHQtc20gZm9udC1tZWRpdW0gcm91bmRlZC1tZCB0ZXh0LXdoaXRlIGJnLWluZGlnby02MDAgaG92ZXI6YmctaW5kaWdvLTcwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctb2Zmc2V0LTIgZm9jdXM6cmluZy1pbmRpZ28tNTAwXCI+XHJcblx0XHRcdFx0XHRcdFx0U2lnbiBpblxyXG5cdFx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZm9ybT5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59XHJcbiIsImxldCBlPXtkYXRhOlwiXCJ9LHQ9dD0+XCJvYmplY3RcIj09dHlwZW9mIHdpbmRvdz8oKHQ/dC5xdWVyeVNlbGVjdG9yKFwiI19nb29iZXJcIik6d2luZG93Ll9nb29iZXIpfHxPYmplY3QuYXNzaWduKCh0fHxkb2N1bWVudC5oZWFkKS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIikpLHtpbm5lckhUTUw6XCIgXCIsaWQ6XCJfZ29vYmVyXCJ9KSkuZmlyc3RDaGlsZDp0fHxlLHI9ZT0+e2xldCByPXQoZSksbD1yLmRhdGE7cmV0dXJuIHIuZGF0YT1cIlwiLGx9LGw9Lyg/OihbXFx1MDA4MC1cXHVGRkZGXFx3LSVAXSspICo6PyAqKFteeztdKz8pO3woW147fXtdKj8pICp7KXwofSkvZyxhPS9cXC9cXCpbXl0qP1xcKlxcL3xcXHNcXHMrfFxcbi9nLG89KGUsdCk9PntsZXQgcixsPVwiXCIsYT1cIlwiLG49XCJcIjtmb3IobGV0IGMgaW4gZSl7bGV0IHM9ZVtjXTtcIm9iamVjdFwiPT10eXBlb2Ygcz8ocj10P3QucmVwbGFjZSgvKFteLF0pKy9nLGU9PmMucmVwbGFjZSgvKFteLF0pKy9nLHQ9Pi8mLy50ZXN0KHQpP3QucmVwbGFjZSgvJi9nLGUpOmU/ZStcIiBcIit0OnQpKTpjLGErPVwiQFwiPT1jWzBdP1wiZlwiPT1jWzFdP28ocyxjKTpjK1wie1wiK28ocyxcImtcIj09Y1sxXT9cIlwiOnQpK1wifVwiOm8ocyxyKSk6XCJAXCI9PWNbMF0mJlwiaVwiPT1jWzFdP2w9YytcIiBcIitzK1wiO1wiOihjPWMucmVwbGFjZSgvW0EtWl0vZyxcIi0kJlwiKS50b0xvd2VyQ2FzZSgpLG4rPW8ucD9vLnAoYyxzKTpjK1wiOlwiK3MrXCI7XCIpfXJldHVybiBuWzBdPyhyPXQ/dCtcIntcIituK1wifVwiOm4sbCtyK2EpOmwrYX0sbj17fSxjPWU9PntsZXQgdD1cIlwiO2ZvcihsZXQgciBpbiBlKXQrPXIrKFwib2JqZWN0XCI9PXR5cGVvZiBlW3JdP2MoZVtyXSk6ZVtyXSk7cmV0dXJuIHR9LHM9KGUsdCxyLHMsaSk9PntsZXQgcD1cIm9iamVjdFwiPT10eXBlb2YgZT9jKGUpOmUsdT1uW3BdfHwobltwXT0oZT0+e2xldCB0PTAscj0xMTtmb3IoO3Q8ZS5sZW5ndGg7KXI9MTAxKnIrZS5jaGFyQ29kZUF0KHQrKyk+Pj4wO3JldHVyblwiZ29cIityfSkocCkpO2lmKCFuW3VdKXtsZXQgdD1cIm9iamVjdFwiPT10eXBlb2YgZT9lOihlPT57bGV0IHQscj1be31dO2Zvcig7dD1sLmV4ZWMoZS5yZXBsYWNlKGEsXCJcIikpOyl0WzRdJiZyLnNoaWZ0KCksdFszXT9yLnVuc2hpZnQoclswXVt0WzNdXT1yWzBdW3RbM11dfHx7fSk6dFs0XXx8KHJbMF1bdFsxXV09dFsyXSk7cmV0dXJuIHJbMF19KShlKTtuW3VdPW8oaT97W1wiQGtleWZyYW1lcyBcIit1XTp0fTp0LHI/XCJcIjpcIi5cIit1KX1yZXR1cm4oKGUsdCxyKT0+ey0xPT10LmRhdGEuaW5kZXhPZihlKSYmKHQuZGF0YT1yP2UrdC5kYXRhOnQuZGF0YStlKX0pKG5bdV0sdCxzKSx1fSxpPShlLHQscik9PmUucmVkdWNlKChlLGwsYSk9PntsZXQgbj10W2FdO2lmKG4mJm4uY2FsbCl7bGV0IGU9bihyKSx0PWUmJmUucHJvcHMmJmUucHJvcHMuY2xhc3NOYW1lfHwvXmdvLy50ZXN0KGUpJiZlO249dD9cIi5cIit0OmUmJlwib2JqZWN0XCI9PXR5cGVvZiBlP2UucHJvcHM/XCJcIjpvKGUsXCJcIik6ZX1yZXR1cm4gZStsKyhudWxsPT1uP1wiXCI6bil9LFwiXCIpO2Z1bmN0aW9uIHAoZSl7bGV0IHI9dGhpc3x8e30sbD1lLmNhbGw/ZShyLnApOmU7cmV0dXJuIHMobC51bnNoaWZ0P2wucmF3P2kobCxbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywxKSxyLnApOmwucmVkdWNlKChlLHQpPT50P09iamVjdC5hc3NpZ24oZSx0LmNhbGw/dChyLnApOnQpOmUse30pOmwsdChyLnRhcmdldCksci5nLHIubyxyLmspfWxldCB1LGYsZCxnPXAuYmluZCh7ZzoxfSksYj1wLmJpbmQoe2s6MX0pO2Z1bmN0aW9uIGgoZSx0LHIsbCl7by5wPXQsdT1lLGY9cixkPWx9ZnVuY3Rpb24gaihlLHQpe2xldCByPXRoaXN8fHt9O3JldHVybiBmdW5jdGlvbigpe2xldCBsPWFyZ3VtZW50cztmdW5jdGlvbiBhKG8sbil7bGV0IGM9T2JqZWN0LmFzc2lnbih7fSxvKSxzPWMuY2xhc3NOYW1lfHxhLmNsYXNzTmFtZTtyLnA9T2JqZWN0LmFzc2lnbih7dGhlbWU6ZiYmZigpfSxjKSxyLm89LyAqZ29cXGQrLy50ZXN0KHMpLGMuY2xhc3NOYW1lPXAuYXBwbHkocixsKSsocz9cIiBcIitzOlwiXCIpLHQmJihjLnJlZj1uKTtsZXQgaT1jLmFzfHxlO3JldHVybiBkJiZpWzBdJiZkKGMpLHUoaSxjKX1yZXR1cm4gdD90KGEpOmF9fWV4cG9ydHtwIGFzIGNzcyxyIGFzIGV4dHJhY3RDc3MsZyBhcyBnbG9iLGIgYXMga2V5ZnJhbWVzLGggYXMgc2V0dXAsaiBhcyBzdHlsZWR9O1xuIiwiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlTWVtbywgY3JlYXRlRWxlbWVudCwgbWVtbywgRnJhZ21lbnQsIGZvcndhcmRSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBzdHlsZWQsIGtleWZyYW1lcywgc2V0dXAsIGNzcyB9IGZyb20gJ2dvb2Jlcic7XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbmZ1bmN0aW9uIF90YWdnZWRUZW1wbGF0ZUxpdGVyYWxMb29zZShzdHJpbmdzLCByYXcpIHtcbiAgaWYgKCFyYXcpIHtcbiAgICByYXcgPSBzdHJpbmdzLnNsaWNlKDApO1xuICB9XG5cbiAgc3RyaW5ncy5yYXcgPSByYXc7XG4gIHJldHVybiBzdHJpbmdzO1xufVxuXG52YXIgaXNGdW5jdGlvbiA9IGZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsT3JGdW5jdGlvbikge1xuICByZXR1cm4gdHlwZW9mIHZhbE9yRnVuY3Rpb24gPT09ICdmdW5jdGlvbic7XG59O1xuXG52YXIgcmVzb2x2ZVZhbHVlID0gZnVuY3Rpb24gcmVzb2x2ZVZhbHVlKHZhbE9yRnVuY3Rpb24sIGFyZykge1xuICByZXR1cm4gaXNGdW5jdGlvbih2YWxPckZ1bmN0aW9uKSA/IHZhbE9yRnVuY3Rpb24oYXJnKSA6IHZhbE9yRnVuY3Rpb247XG59O1xuXG52YXIgZ2VuSWQgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICB2YXIgY291bnQgPSAwO1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAoKytjb3VudCkudG9TdHJpbmcoKTtcbiAgfTtcbn0oKTtcbnZhciBjcmVhdGVSZWN0UmVmID0gZnVuY3Rpb24gY3JlYXRlUmVjdFJlZihvblJlY3QpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChlbCkge1xuICAgIGlmIChlbCkge1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBib3VuZGluZ1JlY3QgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgb25SZWN0KGJvdW5kaW5nUmVjdCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG59O1xudmFyIHByZWZlcnNSZWR1Y2VkTW90aW9uID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgLy8gQ2FjaGUgcmVzdWx0XG4gIHZhciBzaG91bGRSZWR1Y2VNb3Rpb24gPSB1bmRlZmluZWQ7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHNob3VsZFJlZHVjZU1vdGlvbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB2YXIgbWVkaWFRdWVyeSA9IG1hdGNoTWVkaWEoJyhwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2UpJyk7XG4gICAgICBzaG91bGRSZWR1Y2VNb3Rpb24gPSAhbWVkaWFRdWVyeSB8fCBtZWRpYVF1ZXJ5Lm1hdGNoZXM7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNob3VsZFJlZHVjZU1vdGlvbjtcbiAgfTtcbn0oKTtcblxudmFyIFRPQVNUX0xJTUlUID0gMjA7XG52YXIgQWN0aW9uVHlwZTtcblxuKGZ1bmN0aW9uIChBY3Rpb25UeXBlKSB7XG4gIEFjdGlvblR5cGVbQWN0aW9uVHlwZVtcIkFERF9UT0FTVFwiXSA9IDBdID0gXCJBRERfVE9BU1RcIjtcbiAgQWN0aW9uVHlwZVtBY3Rpb25UeXBlW1wiVVBEQVRFX1RPQVNUXCJdID0gMV0gPSBcIlVQREFURV9UT0FTVFwiO1xuICBBY3Rpb25UeXBlW0FjdGlvblR5cGVbXCJVUFNFUlRfVE9BU1RcIl0gPSAyXSA9IFwiVVBTRVJUX1RPQVNUXCI7XG4gIEFjdGlvblR5cGVbQWN0aW9uVHlwZVtcIkRJU01JU1NfVE9BU1RcIl0gPSAzXSA9IFwiRElTTUlTU19UT0FTVFwiO1xuICBBY3Rpb25UeXBlW0FjdGlvblR5cGVbXCJSRU1PVkVfVE9BU1RcIl0gPSA0XSA9IFwiUkVNT1ZFX1RPQVNUXCI7XG4gIEFjdGlvblR5cGVbQWN0aW9uVHlwZVtcIlNUQVJUX1BBVVNFXCJdID0gNV0gPSBcIlNUQVJUX1BBVVNFXCI7XG4gIEFjdGlvblR5cGVbQWN0aW9uVHlwZVtcIkVORF9QQVVTRVwiXSA9IDZdID0gXCJFTkRfUEFVU0VcIjtcbn0pKEFjdGlvblR5cGUgfHwgKEFjdGlvblR5cGUgPSB7fSkpO1xuXG52YXIgdG9hc3RUaW1lb3V0cyA9IC8qI19fUFVSRV9fKi9uZXcgTWFwKCk7XG5cbnZhciBhZGRUb1JlbW92ZVF1ZXVlID0gZnVuY3Rpb24gYWRkVG9SZW1vdmVRdWV1ZSh0b2FzdElkKSB7XG4gIGlmICh0b2FzdFRpbWVvdXRzLmhhcyh0b2FzdElkKSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciB0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgdG9hc3RUaW1lb3V0c1tcImRlbGV0ZVwiXSh0b2FzdElkKTtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBBY3Rpb25UeXBlLlJFTU9WRV9UT0FTVCxcbiAgICAgIHRvYXN0SWQ6IHRvYXN0SWRcbiAgICB9KTtcbiAgfSwgMTAwMCk7XG4gIHRvYXN0VGltZW91dHMuc2V0KHRvYXN0SWQsIHRpbWVvdXQpO1xufTtcblxudmFyIGNsZWFyRnJvbVJlbW92ZVF1ZXVlID0gZnVuY3Rpb24gY2xlYXJGcm9tUmVtb3ZlUXVldWUodG9hc3RJZCkge1xuICB2YXIgdGltZW91dCA9IHRvYXN0VGltZW91dHMuZ2V0KHRvYXN0SWQpO1xuXG4gIGlmICh0aW1lb3V0KSB7XG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICB9XG59O1xuXG52YXIgcmVkdWNlciA9IGZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUsIGFjdGlvbikge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBBY3Rpb25UeXBlLkFERF9UT0FTVDpcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgdG9hc3RzOiBbYWN0aW9uLnRvYXN0XS5jb25jYXQoc3RhdGUudG9hc3RzKS5zbGljZSgwLCBUT0FTVF9MSU1JVClcbiAgICAgIH0pO1xuXG4gICAgY2FzZSBBY3Rpb25UeXBlLlVQREFURV9UT0FTVDpcbiAgICAgIC8vICAhIFNpZGUgZWZmZWN0cyAhXG4gICAgICBpZiAoYWN0aW9uLnRvYXN0LmlkKSB7XG4gICAgICAgIGNsZWFyRnJvbVJlbW92ZVF1ZXVlKGFjdGlvbi50b2FzdC5pZCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgdG9hc3RzOiBzdGF0ZS50b2FzdHMubWFwKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgcmV0dXJuIHQuaWQgPT09IGFjdGlvbi50b2FzdC5pZCA/IF9leHRlbmRzKHt9LCB0LCBhY3Rpb24udG9hc3QpIDogdDtcbiAgICAgICAgfSlcbiAgICAgIH0pO1xuXG4gICAgY2FzZSBBY3Rpb25UeXBlLlVQU0VSVF9UT0FTVDpcbiAgICAgIHZhciB0b2FzdCA9IGFjdGlvbi50b2FzdDtcbiAgICAgIHJldHVybiBzdGF0ZS50b2FzdHMuZmluZChmdW5jdGlvbiAodCkge1xuICAgICAgICByZXR1cm4gdC5pZCA9PT0gdG9hc3QuaWQ7XG4gICAgICB9KSA/IHJlZHVjZXIoc3RhdGUsIHtcbiAgICAgICAgdHlwZTogQWN0aW9uVHlwZS5VUERBVEVfVE9BU1QsXG4gICAgICAgIHRvYXN0OiB0b2FzdFxuICAgICAgfSkgOiByZWR1Y2VyKHN0YXRlLCB7XG4gICAgICAgIHR5cGU6IEFjdGlvblR5cGUuQUREX1RPQVNULFxuICAgICAgICB0b2FzdDogdG9hc3RcbiAgICAgIH0pO1xuXG4gICAgY2FzZSBBY3Rpb25UeXBlLkRJU01JU1NfVE9BU1Q6XG4gICAgICB2YXIgdG9hc3RJZCA9IGFjdGlvbi50b2FzdElkOyAvLyAhIFNpZGUgZWZmZWN0cyAhIC0gVGhpcyBjb3VsZCBiZSBleGVjcmF0ZWQgaW50byBhIGRpc21pc3NUb2FzdCgpIGFjdGlvbiwgYnV0IEknbGwga2VlcCBpdCBoZXJlIGZvciBzaW1wbGljaXR5XG5cbiAgICAgIGlmICh0b2FzdElkKSB7XG4gICAgICAgIGFkZFRvUmVtb3ZlUXVldWUodG9hc3RJZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdGF0ZS50b2FzdHMuZm9yRWFjaChmdW5jdGlvbiAodG9hc3QpIHtcbiAgICAgICAgICBhZGRUb1JlbW92ZVF1ZXVlKHRvYXN0LmlkKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgdG9hc3RzOiBzdGF0ZS50b2FzdHMubWFwKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgcmV0dXJuIHQuaWQgPT09IHRvYXN0SWQgfHwgdG9hc3RJZCA9PT0gdW5kZWZpbmVkID8gX2V4dGVuZHMoe30sIHQsIHtcbiAgICAgICAgICAgIHZpc2libGU6IGZhbHNlXG4gICAgICAgICAgfSkgOiB0O1xuICAgICAgICB9KVxuICAgICAgfSk7XG5cbiAgICBjYXNlIEFjdGlvblR5cGUuUkVNT1ZFX1RPQVNUOlxuICAgICAgaWYgKGFjdGlvbi50b2FzdElkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICAgIHRvYXN0czogW11cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgdG9hc3RzOiBzdGF0ZS50b2FzdHMuZmlsdGVyKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgcmV0dXJuIHQuaWQgIT09IGFjdGlvbi50b2FzdElkO1xuICAgICAgICB9KVxuICAgICAgfSk7XG5cbiAgICBjYXNlIEFjdGlvblR5cGUuU1RBUlRfUEFVU0U6XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgIHBhdXNlZEF0OiBhY3Rpb24udGltZVxuICAgICAgfSk7XG5cbiAgICBjYXNlIEFjdGlvblR5cGUuRU5EX1BBVVNFOlxuICAgICAgdmFyIGRpZmYgPSBhY3Rpb24udGltZSAtIChzdGF0ZS5wYXVzZWRBdCB8fCAwKTtcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgcGF1c2VkQXQ6IHVuZGVmaW5lZCxcbiAgICAgICAgdG9hc3RzOiBzdGF0ZS50b2FzdHMubWFwKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCB0LCB7XG4gICAgICAgICAgICBwYXVzZUR1cmF0aW9uOiB0LnBhdXNlRHVyYXRpb24gKyBkaWZmXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgICB9KTtcbiAgfVxufTtcbnZhciBsaXN0ZW5lcnMgPSBbXTtcbnZhciBtZW1vcnlTdGF0ZSA9IHtcbiAgdG9hc3RzOiBbXSxcbiAgcGF1c2VkQXQ6IHVuZGVmaW5lZFxufTtcbnZhciBkaXNwYXRjaCA9IGZ1bmN0aW9uIGRpc3BhdGNoKGFjdGlvbikge1xuICBtZW1vcnlTdGF0ZSA9IHJlZHVjZXIobWVtb3J5U3RhdGUsIGFjdGlvbik7XG4gIGxpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uIChsaXN0ZW5lcikge1xuICAgIGxpc3RlbmVyKG1lbW9yeVN0YXRlKTtcbiAgfSk7XG59O1xudmFyIGRlZmF1bHRUaW1lb3V0cyA9IHtcbiAgYmxhbms6IDQwMDAsXG4gIGVycm9yOiA0MDAwLFxuICBzdWNjZXNzOiAyMDAwLFxuICBsb2FkaW5nOiBJbmZpbml0eSxcbiAgY3VzdG9tOiA0MDAwXG59O1xudmFyIHVzZVN0b3JlID0gZnVuY3Rpb24gdXNlU3RvcmUodG9hc3RPcHRpb25zKSB7XG4gIGlmICh0b2FzdE9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgIHRvYXN0T3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgdmFyIF91c2VTdGF0ZSA9IHVzZVN0YXRlKG1lbW9yeVN0YXRlKSxcbiAgICAgIHN0YXRlID0gX3VzZVN0YXRlWzBdLFxuICAgICAgc2V0U3RhdGUgPSBfdXNlU3RhdGVbMV07XG5cbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBsaXN0ZW5lcnMucHVzaChzZXRTdGF0ZSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBpbmRleCA9IGxpc3RlbmVycy5pbmRleE9mKHNldFN0YXRlKTtcblxuICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgbGlzdGVuZXJzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICB9XG4gICAgfTtcbiAgfSwgW3N0YXRlXSk7XG4gIHZhciBtZXJnZWRUb2FzdHMgPSBzdGF0ZS50b2FzdHMubWFwKGZ1bmN0aW9uICh0KSB7XG4gICAgdmFyIF90b2FzdE9wdGlvbnMkdCR0eXBlLCBfdG9hc3RPcHRpb25zLCBfdG9hc3RPcHRpb25zJHQkdHlwZTI7XG5cbiAgICByZXR1cm4gX2V4dGVuZHMoe30sIHRvYXN0T3B0aW9ucywgdG9hc3RPcHRpb25zW3QudHlwZV0sIHQsIHtcbiAgICAgIGR1cmF0aW9uOiB0LmR1cmF0aW9uIHx8ICgoX3RvYXN0T3B0aW9ucyR0JHR5cGUgPSB0b2FzdE9wdGlvbnNbdC50eXBlXSkgPT0gbnVsbCA/IHZvaWQgMCA6IF90b2FzdE9wdGlvbnMkdCR0eXBlLmR1cmF0aW9uKSB8fCAoKF90b2FzdE9wdGlvbnMgPSB0b2FzdE9wdGlvbnMpID09IG51bGwgPyB2b2lkIDAgOiBfdG9hc3RPcHRpb25zLmR1cmF0aW9uKSB8fCBkZWZhdWx0VGltZW91dHNbdC50eXBlXSxcbiAgICAgIHN0eWxlOiBfZXh0ZW5kcyh7fSwgdG9hc3RPcHRpb25zLnN0eWxlLCAoX3RvYXN0T3B0aW9ucyR0JHR5cGUyID0gdG9hc3RPcHRpb25zW3QudHlwZV0pID09IG51bGwgPyB2b2lkIDAgOiBfdG9hc3RPcHRpb25zJHQkdHlwZTIuc3R5bGUsIHQuc3R5bGUpXG4gICAgfSk7XG4gIH0pO1xuICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgdG9hc3RzOiBtZXJnZWRUb2FzdHNcbiAgfSk7XG59O1xuXG52YXIgY3JlYXRlVG9hc3QgPSBmdW5jdGlvbiBjcmVhdGVUb2FzdChtZXNzYWdlLCB0eXBlLCBvcHRzKSB7XG4gIGlmICh0eXBlID09PSB2b2lkIDApIHtcbiAgICB0eXBlID0gJ2JsYW5rJztcbiAgfVxuXG4gIHJldHVybiBfZXh0ZW5kcyh7XG4gICAgY3JlYXRlZEF0OiBEYXRlLm5vdygpLFxuICAgIHZpc2libGU6IHRydWUsXG4gICAgdHlwZTogdHlwZSxcbiAgICBhcmlhUHJvcHM6IHtcbiAgICAgIHJvbGU6ICdzdGF0dXMnLFxuICAgICAgJ2FyaWEtbGl2ZSc6ICdwb2xpdGUnXG4gICAgfSxcbiAgICBtZXNzYWdlOiBtZXNzYWdlLFxuICAgIHBhdXNlRHVyYXRpb246IDBcbiAgfSwgb3B0cywge1xuICAgIGlkOiAob3B0cyA9PSBudWxsID8gdm9pZCAwIDogb3B0cy5pZCkgfHwgZ2VuSWQoKVxuICB9KTtcbn07XG5cbnZhciBjcmVhdGVIYW5kbGVyID0gZnVuY3Rpb24gY3JlYXRlSGFuZGxlcih0eXBlKSB7XG4gIHJldHVybiBmdW5jdGlvbiAobWVzc2FnZSwgb3B0aW9ucykge1xuICAgIHZhciB0b2FzdCA9IGNyZWF0ZVRvYXN0KG1lc3NhZ2UsIHR5cGUsIG9wdGlvbnMpO1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IEFjdGlvblR5cGUuVVBTRVJUX1RPQVNULFxuICAgICAgdG9hc3Q6IHRvYXN0XG4gICAgfSk7XG4gICAgcmV0dXJuIHRvYXN0LmlkO1xuICB9O1xufTtcblxudmFyIHRvYXN0ID0gZnVuY3Rpb24gdG9hc3QobWVzc2FnZSwgb3B0cykge1xuICByZXR1cm4gY3JlYXRlSGFuZGxlcignYmxhbmsnKShtZXNzYWdlLCBvcHRzKTtcbn07XG5cbnRvYXN0LmVycm9yID0gLyojX19QVVJFX18qL2NyZWF0ZUhhbmRsZXIoJ2Vycm9yJyk7XG50b2FzdC5zdWNjZXNzID0gLyojX19QVVJFX18qL2NyZWF0ZUhhbmRsZXIoJ3N1Y2Nlc3MnKTtcbnRvYXN0LmxvYWRpbmcgPSAvKiNfX1BVUkVfXyovY3JlYXRlSGFuZGxlcignbG9hZGluZycpO1xudG9hc3QuY3VzdG9tID0gLyojX19QVVJFX18qL2NyZWF0ZUhhbmRsZXIoJ2N1c3RvbScpO1xuXG50b2FzdC5kaXNtaXNzID0gZnVuY3Rpb24gKHRvYXN0SWQpIHtcbiAgZGlzcGF0Y2goe1xuICAgIHR5cGU6IEFjdGlvblR5cGUuRElTTUlTU19UT0FTVCxcbiAgICB0b2FzdElkOiB0b2FzdElkXG4gIH0pO1xufTtcblxudG9hc3QucmVtb3ZlID0gZnVuY3Rpb24gKHRvYXN0SWQpIHtcbiAgcmV0dXJuIGRpc3BhdGNoKHtcbiAgICB0eXBlOiBBY3Rpb25UeXBlLlJFTU9WRV9UT0FTVCxcbiAgICB0b2FzdElkOiB0b2FzdElkXG4gIH0pO1xufTtcblxudG9hc3QucHJvbWlzZSA9IGZ1bmN0aW9uIChwcm9taXNlLCBtc2dzLCBvcHRzKSB7XG4gIHZhciBpZCA9IHRvYXN0LmxvYWRpbmcobXNncy5sb2FkaW5nLCBfZXh0ZW5kcyh7fSwgb3B0cywgb3B0cyA9PSBudWxsID8gdm9pZCAwIDogb3B0cy5sb2FkaW5nKSk7XG4gIHByb21pc2UudGhlbihmdW5jdGlvbiAocCkge1xuICAgIHRvYXN0LnN1Y2Nlc3MocmVzb2x2ZVZhbHVlKG1zZ3Muc3VjY2VzcywgcCksIF9leHRlbmRzKHtcbiAgICAgIGlkOiBpZFxuICAgIH0sIG9wdHMsIG9wdHMgPT0gbnVsbCA/IHZvaWQgMCA6IG9wdHMuc3VjY2VzcykpO1xuICAgIHJldHVybiBwO1xuICB9KVtcImNhdGNoXCJdKGZ1bmN0aW9uIChlKSB7XG4gICAgdG9hc3QuZXJyb3IocmVzb2x2ZVZhbHVlKG1zZ3MuZXJyb3IsIGUpLCBfZXh0ZW5kcyh7XG4gICAgICBpZDogaWRcbiAgICB9LCBvcHRzLCBvcHRzID09IG51bGwgPyB2b2lkIDAgOiBvcHRzLmVycm9yKSk7XG4gIH0pO1xuICByZXR1cm4gcHJvbWlzZTtcbn07XG5cbnZhciB1c2VUb2FzdGVyID0gZnVuY3Rpb24gdXNlVG9hc3Rlcih0b2FzdE9wdGlvbnMpIHtcbiAgdmFyIF91c2VTdG9yZSA9IHVzZVN0b3JlKHRvYXN0T3B0aW9ucyksXG4gICAgICB0b2FzdHMgPSBfdXNlU3RvcmUudG9hc3RzLFxuICAgICAgcGF1c2VkQXQgPSBfdXNlU3RvcmUucGF1c2VkQXQ7XG5cbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAocGF1c2VkQXQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgbm93ID0gRGF0ZS5ub3coKTtcbiAgICB2YXIgdGltZW91dHMgPSB0b2FzdHMubWFwKGZ1bmN0aW9uICh0KSB7XG4gICAgICBpZiAodC5kdXJhdGlvbiA9PT0gSW5maW5pdHkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgZHVyYXRpb25MZWZ0ID0gKHQuZHVyYXRpb24gfHwgMCkgKyB0LnBhdXNlRHVyYXRpb24gLSAobm93IC0gdC5jcmVhdGVkQXQpO1xuXG4gICAgICBpZiAoZHVyYXRpb25MZWZ0IDwgMCkge1xuICAgICAgICBpZiAodC52aXNpYmxlKSB7XG4gICAgICAgICAgdG9hc3QuZGlzbWlzcyh0LmlkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdG9hc3QuZGlzbWlzcyh0LmlkKTtcbiAgICAgIH0sIGR1cmF0aW9uTGVmdCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHRpbWVvdXRzLmZvckVhY2goZnVuY3Rpb24gKHRpbWVvdXQpIHtcbiAgICAgICAgcmV0dXJuIHRpbWVvdXQgJiYgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgfSk7XG4gICAgfTtcbiAgfSwgW3RvYXN0cywgcGF1c2VkQXRdKTtcbiAgdmFyIGhhbmRsZXJzID0gdXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN0YXJ0UGF1c2U6IGZ1bmN0aW9uIHN0YXJ0UGF1c2UoKSB7XG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiBBY3Rpb25UeXBlLlNUQVJUX1BBVVNFLFxuICAgICAgICAgIHRpbWU6IERhdGUubm93KClcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgZW5kUGF1c2U6IGZ1bmN0aW9uIGVuZFBhdXNlKCkge1xuICAgICAgICBpZiAocGF1c2VkQXQpIHtcbiAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICB0eXBlOiBBY3Rpb25UeXBlLkVORF9QQVVTRSxcbiAgICAgICAgICAgIHRpbWU6IERhdGUubm93KClcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHVwZGF0ZUhlaWdodDogZnVuY3Rpb24gdXBkYXRlSGVpZ2h0KHRvYXN0SWQsIGhlaWdodCkge1xuICAgICAgICByZXR1cm4gZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6IEFjdGlvblR5cGUuVVBEQVRFX1RPQVNULFxuICAgICAgICAgIHRvYXN0OiB7XG4gICAgICAgICAgICBpZDogdG9hc3RJZCxcbiAgICAgICAgICAgIGhlaWdodDogaGVpZ2h0XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICBjYWxjdWxhdGVPZmZzZXQ6IGZ1bmN0aW9uIGNhbGN1bGF0ZU9mZnNldCh0b2FzdCwgb3B0cykge1xuICAgICAgICB2YXIgX3JlbGV2YW50VG9hc3RzJGZpbHRlO1xuXG4gICAgICAgIHZhciBfcmVmID0gb3B0cyB8fCB7fSxcbiAgICAgICAgICAgIF9yZWYkcmV2ZXJzZU9yZGVyID0gX3JlZi5yZXZlcnNlT3JkZXIsXG4gICAgICAgICAgICByZXZlcnNlT3JkZXIgPSBfcmVmJHJldmVyc2VPcmRlciA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcmVmJHJldmVyc2VPcmRlcixcbiAgICAgICAgICAgIF9yZWYkZ3V0dGVyID0gX3JlZi5ndXR0ZXIsXG4gICAgICAgICAgICBndXR0ZXIgPSBfcmVmJGd1dHRlciA9PT0gdm9pZCAwID8gOCA6IF9yZWYkZ3V0dGVyLFxuICAgICAgICAgICAgZGVmYXVsdFBvc2l0aW9uID0gX3JlZi5kZWZhdWx0UG9zaXRpb247XG5cbiAgICAgICAgdmFyIHJlbGV2YW50VG9hc3RzID0gdG9hc3RzLmZpbHRlcihmdW5jdGlvbiAodCkge1xuICAgICAgICAgIHJldHVybiAodC5wb3NpdGlvbiB8fCBkZWZhdWx0UG9zaXRpb24pID09PSAodG9hc3QucG9zaXRpb24gfHwgZGVmYXVsdFBvc2l0aW9uKSAmJiB0LmhlaWdodDtcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciB0b2FzdEluZGV4ID0gcmVsZXZhbnRUb2FzdHMuZmluZEluZGV4KGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgcmV0dXJuIHQuaWQgPT09IHRvYXN0LmlkO1xuICAgICAgICB9KTtcbiAgICAgICAgdmFyIHRvYXN0c0JlZm9yZSA9IHJlbGV2YW50VG9hc3RzLmZpbHRlcihmdW5jdGlvbiAodG9hc3QsIGkpIHtcbiAgICAgICAgICByZXR1cm4gaSA8IHRvYXN0SW5kZXggJiYgdG9hc3QudmlzaWJsZTtcbiAgICAgICAgfSkubGVuZ3RoO1xuXG4gICAgICAgIHZhciBvZmZzZXQgPSAoX3JlbGV2YW50VG9hc3RzJGZpbHRlID0gcmVsZXZhbnRUb2FzdHMuZmlsdGVyKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgcmV0dXJuIHQudmlzaWJsZTtcbiAgICAgICAgfSkpLnNsaWNlLmFwcGx5KF9yZWxldmFudFRvYXN0cyRmaWx0ZSwgcmV2ZXJzZU9yZGVyID8gW3RvYXN0c0JlZm9yZSArIDFdIDogWzAsIHRvYXN0c0JlZm9yZV0pLnJlZHVjZShmdW5jdGlvbiAoYWNjLCB0KSB7XG4gICAgICAgICAgcmV0dXJuIGFjYyArICh0LmhlaWdodCB8fCAwKSArIGd1dHRlcjtcbiAgICAgICAgfSwgMCk7XG5cbiAgICAgICAgcmV0dXJuIG9mZnNldDtcbiAgICAgIH1cbiAgICB9O1xuICB9LCBbdG9hc3RzLCBwYXVzZWRBdF0pO1xuICByZXR1cm4ge1xuICAgIHRvYXN0czogdG9hc3RzLFxuICAgIGhhbmRsZXJzOiBoYW5kbGVyc1xuICB9O1xufTtcblxuZnVuY3Rpb24gX3RlbXBsYXRlT2JqZWN0NCgpIHtcbiAgdmFyIGRhdGEgPSBfdGFnZ2VkVGVtcGxhdGVMaXRlcmFsTG9vc2UoW1wiXFxuICB3aWR0aDogMjBweDtcXG4gIG9wYWNpdHk6IDA7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYmFja2dyb3VuZDogXCIsIFwiO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcblxcbiAgYW5pbWF0aW9uOiBcIiwgXCIgMC4zcyBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSlcXG4gICAgZm9yd2FyZHM7XFxuICBhbmltYXRpb24tZGVsYXk6IDEwMG1zO1xcblxcbiAgJjphZnRlcixcXG4gICY6YmVmb3JlIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIGFuaW1hdGlvbjogXCIsIFwiIDAuMTVzIGVhc2Utb3V0IGZvcndhcmRzO1xcbiAgICBhbmltYXRpb24tZGVsYXk6IDE1MG1zO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgYmFja2dyb3VuZDogXCIsIFwiO1xcbiAgICBib3R0b206IDlweDtcXG4gICAgbGVmdDogNHB4O1xcbiAgICBoZWlnaHQ6IDJweDtcXG4gICAgd2lkdGg6IDEycHg7XFxuICB9XFxuXFxuICAmOmJlZm9yZSB7XFxuICAgIGFuaW1hdGlvbjogXCIsIFwiIDAuMTVzIGVhc2Utb3V0IGZvcndhcmRzO1xcbiAgICBhbmltYXRpb24tZGVsYXk6IDE4MG1zO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxuICB9XFxuXCJdKTtcblxuICBfdGVtcGxhdGVPYmplY3Q0ID0gZnVuY3Rpb24gX3RlbXBsYXRlT2JqZWN0NCgpIHtcbiAgICByZXR1cm4gZGF0YTtcbiAgfTtcblxuICByZXR1cm4gZGF0YTtcbn1cblxuZnVuY3Rpb24gX3RlbXBsYXRlT2JqZWN0MygpIHtcbiAgdmFyIGRhdGEgPSBfdGFnZ2VkVGVtcGxhdGVMaXRlcmFsTG9vc2UoW1wiXFxuZnJvbSB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDApIHJvdGF0ZSg5MGRlZyk7XFxuXFx0b3BhY2l0eTogMDtcXG59XFxudG8ge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKSByb3RhdGUoOTBkZWcpO1xcblxcdG9wYWNpdHk6IDE7XFxufVwiXSk7XG5cbiAgX3RlbXBsYXRlT2JqZWN0MyA9IGZ1bmN0aW9uIF90ZW1wbGF0ZU9iamVjdDMoKSB7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH07XG5cbiAgcmV0dXJuIGRhdGE7XG59XG5cbmZ1bmN0aW9uIF90ZW1wbGF0ZU9iamVjdDIoKSB7XG4gIHZhciBkYXRhID0gX3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbExvb3NlKFtcIlxcbmZyb20ge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gIG9wYWNpdHk6IDA7XFxufVxcbnRvIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICBvcGFjaXR5OiAxO1xcbn1cIl0pO1xuXG4gIF90ZW1wbGF0ZU9iamVjdDIgPSBmdW5jdGlvbiBfdGVtcGxhdGVPYmplY3QyKCkge1xuICAgIHJldHVybiBkYXRhO1xuICB9O1xuXG4gIHJldHVybiBkYXRhO1xufVxuXG5mdW5jdGlvbiBfdGVtcGxhdGVPYmplY3QoKSB7XG4gIHZhciBkYXRhID0gX3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbExvb3NlKFtcIlxcbmZyb20ge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKSByb3RhdGUoNDVkZWcpO1xcblxcdG9wYWNpdHk6IDA7XFxufVxcbnRvIHtcXG4gdHJhbnNmb3JtOiBzY2FsZSgxKSByb3RhdGUoNDVkZWcpO1xcbiAgb3BhY2l0eTogMTtcXG59XCJdKTtcblxuICBfdGVtcGxhdGVPYmplY3QgPSBmdW5jdGlvbiBfdGVtcGxhdGVPYmplY3QoKSB7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH07XG5cbiAgcmV0dXJuIGRhdGE7XG59XG52YXIgY2lyY2xlQW5pbWF0aW9uID0gLyojX19QVVJFX18qL2tleWZyYW1lcyggLyojX19QVVJFX18qL190ZW1wbGF0ZU9iamVjdCgpKTtcbnZhciBmaXJzdExpbmVBbmltYXRpb24gPSAvKiNfX1BVUkVfXyova2V5ZnJhbWVzKCAvKiNfX1BVUkVfXyovX3RlbXBsYXRlT2JqZWN0MigpKTtcbnZhciBzZWNvbmRMaW5lQW5pbWF0aW9uID0gLyojX19QVVJFX18qL2tleWZyYW1lcyggLyojX19QVVJFX18qL190ZW1wbGF0ZU9iamVjdDMoKSk7XG52YXIgRXJyb3JJY29uID0gLyojX19QVVJFX18qL3N0eWxlZCgnZGl2JykoIC8qI19fUFVSRV9fKi9fdGVtcGxhdGVPYmplY3Q0KCksIGZ1bmN0aW9uIChwKSB7XG4gIHJldHVybiBwLnByaW1hcnkgfHwgJyNmZjRiNGInO1xufSwgY2lyY2xlQW5pbWF0aW9uLCBmaXJzdExpbmVBbmltYXRpb24sIGZ1bmN0aW9uIChwKSB7XG4gIHJldHVybiBwLnNlY29uZGFyeSB8fCAnI2ZmZic7XG59LCBzZWNvbmRMaW5lQW5pbWF0aW9uKTtcblxuZnVuY3Rpb24gX3RlbXBsYXRlT2JqZWN0MiQxKCkge1xuICB2YXIgZGF0YSA9IF90YWdnZWRUZW1wbGF0ZUxpdGVyYWxMb29zZShbXCJcXG4gIHdpZHRoOiAxMnB4O1xcbiAgaGVpZ2h0OiAxMnB4O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkO1xcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gIGJvcmRlci1jb2xvcjogXCIsIFwiO1xcbiAgYm9yZGVyLXJpZ2h0LWNvbG9yOiBcIiwgXCI7XFxuICBhbmltYXRpb246IFwiLCBcIiAxcyBsaW5lYXIgaW5maW5pdGU7XFxuXCJdKTtcblxuICBfdGVtcGxhdGVPYmplY3QyJDEgPSBmdW5jdGlvbiBfdGVtcGxhdGVPYmplY3QyKCkge1xuICAgIHJldHVybiBkYXRhO1xuICB9O1xuXG4gIHJldHVybiBkYXRhO1xufVxuXG5mdW5jdGlvbiBfdGVtcGxhdGVPYmplY3QkMSgpIHtcbiAgdmFyIGRhdGEgPSBfdGFnZ2VkVGVtcGxhdGVMaXRlcmFsTG9vc2UoW1wiXFxuICBmcm9tIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICB9XFxuICB0byB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICB9XFxuXCJdKTtcblxuICBfdGVtcGxhdGVPYmplY3QkMSA9IGZ1bmN0aW9uIF90ZW1wbGF0ZU9iamVjdCgpIHtcbiAgICByZXR1cm4gZGF0YTtcbiAgfTtcblxuICByZXR1cm4gZGF0YTtcbn1cbnZhciByb3RhdGUgPSAvKiNfX1BVUkVfXyova2V5ZnJhbWVzKCAvKiNfX1BVUkVfXyovX3RlbXBsYXRlT2JqZWN0JDEoKSk7XG52YXIgTG9hZGVySWNvbiA9IC8qI19fUFVSRV9fKi9zdHlsZWQoJ2RpdicpKCAvKiNfX1BVUkVfXyovX3RlbXBsYXRlT2JqZWN0MiQxKCksIGZ1bmN0aW9uIChwKSB7XG4gIHJldHVybiBwLnNlY29uZGFyeSB8fCAnI2UwZTBlMCc7XG59LCBmdW5jdGlvbiAocCkge1xuICByZXR1cm4gcC5wcmltYXJ5IHx8ICcjNjE2MTYxJztcbn0sIHJvdGF0ZSk7XG5cbmZ1bmN0aW9uIF90ZW1wbGF0ZU9iamVjdDMkMSgpIHtcbiAgdmFyIGRhdGEgPSBfdGFnZ2VkVGVtcGxhdGVMaXRlcmFsTG9vc2UoW1wiXFxuICB3aWR0aDogMjBweDtcXG4gIG9wYWNpdHk6IDA7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYmFja2dyb3VuZDogXCIsIFwiO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcblxcbiAgYW5pbWF0aW9uOiBcIiwgXCIgMC4zcyBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSlcXG4gICAgZm9yd2FyZHM7XFxuICBhbmltYXRpb24tZGVsYXk6IDEwMG1zO1xcbiAgJjphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBhbmltYXRpb246IFwiLCBcIiAwLjJzIGVhc2Utb3V0IGZvcndhcmRzO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBhbmltYXRpb24tZGVsYXk6IDIwMG1zO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkO1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQ7XFxuICAgIGJvcmRlci1jb2xvcjogXCIsIFwiO1xcbiAgICBib3R0b206IDZweDtcXG4gICAgbGVmdDogNnB4O1xcbiAgICBoZWlnaHQ6IDEwcHg7XFxuICAgIHdpZHRoOiA2cHg7XFxuICB9XFxuXCJdKTtcblxuICBfdGVtcGxhdGVPYmplY3QzJDEgPSBmdW5jdGlvbiBfdGVtcGxhdGVPYmplY3QzKCkge1xuICAgIHJldHVybiBkYXRhO1xuICB9O1xuXG4gIHJldHVybiBkYXRhO1xufVxuXG5mdW5jdGlvbiBfdGVtcGxhdGVPYmplY3QyJDIoKSB7XG4gIHZhciBkYXRhID0gX3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbExvb3NlKFtcIlxcbjAlIHtcXG5cXHRoZWlnaHQ6IDA7XFxuXFx0d2lkdGg6IDA7XFxuXFx0b3BhY2l0eTogMDtcXG59XFxuNDAlIHtcXG4gIGhlaWdodDogMDtcXG5cXHR3aWR0aDogNnB4O1xcblxcdG9wYWNpdHk6IDE7XFxufVxcbjEwMCUge1xcbiAgb3BhY2l0eTogMTtcXG4gIGhlaWdodDogMTBweDtcXG59XCJdKTtcblxuICBfdGVtcGxhdGVPYmplY3QyJDIgPSBmdW5jdGlvbiBfdGVtcGxhdGVPYmplY3QyKCkge1xuICAgIHJldHVybiBkYXRhO1xuICB9O1xuXG4gIHJldHVybiBkYXRhO1xufVxuXG5mdW5jdGlvbiBfdGVtcGxhdGVPYmplY3QkMigpIHtcbiAgdmFyIGRhdGEgPSBfdGFnZ2VkVGVtcGxhdGVMaXRlcmFsTG9vc2UoW1wiXFxuZnJvbSB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDApIHJvdGF0ZSg0NWRlZyk7XFxuXFx0b3BhY2l0eTogMDtcXG59XFxudG8ge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKSByb3RhdGUoNDVkZWcpO1xcblxcdG9wYWNpdHk6IDE7XFxufVwiXSk7XG5cbiAgX3RlbXBsYXRlT2JqZWN0JDIgPSBmdW5jdGlvbiBfdGVtcGxhdGVPYmplY3QoKSB7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH07XG5cbiAgcmV0dXJuIGRhdGE7XG59XG52YXIgY2lyY2xlQW5pbWF0aW9uJDEgPSAvKiNfX1BVUkVfXyova2V5ZnJhbWVzKCAvKiNfX1BVUkVfXyovX3RlbXBsYXRlT2JqZWN0JDIoKSk7XG52YXIgY2hlY2ttYXJrQW5pbWF0aW9uID0gLyojX19QVVJFX18qL2tleWZyYW1lcyggLyojX19QVVJFX18qL190ZW1wbGF0ZU9iamVjdDIkMigpKTtcbnZhciBDaGVja21hcmtJY29uID0gLyojX19QVVJFX18qL3N0eWxlZCgnZGl2JykoIC8qI19fUFVSRV9fKi9fdGVtcGxhdGVPYmplY3QzJDEoKSwgZnVuY3Rpb24gKHApIHtcbiAgcmV0dXJuIHAucHJpbWFyeSB8fCAnIzYxZDM0NSc7XG59LCBjaXJjbGVBbmltYXRpb24kMSwgY2hlY2ttYXJrQW5pbWF0aW9uLCBmdW5jdGlvbiAocCkge1xuICByZXR1cm4gcC5zZWNvbmRhcnkgfHwgJyNmZmYnO1xufSk7XG5cbmZ1bmN0aW9uIF90ZW1wbGF0ZU9iamVjdDQkMSgpIHtcbiAgdmFyIGRhdGEgPSBfdGFnZ2VkVGVtcGxhdGVMaXRlcmFsTG9vc2UoW1wiXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuNik7XFxuICBvcGFjaXR5OiAwLjQ7XFxuICBtaW4td2lkdGg6IDIwcHg7XFxuICBhbmltYXRpb246IFwiLCBcIiAwLjNzIDAuMTJzIGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KVxcbiAgICBmb3J3YXJkcztcXG5cIl0pO1xuXG4gIF90ZW1wbGF0ZU9iamVjdDQkMSA9IGZ1bmN0aW9uIF90ZW1wbGF0ZU9iamVjdDQoKSB7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH07XG5cbiAgcmV0dXJuIGRhdGE7XG59XG5cbmZ1bmN0aW9uIF90ZW1wbGF0ZU9iamVjdDMkMigpIHtcbiAgdmFyIGRhdGEgPSBfdGFnZ2VkVGVtcGxhdGVMaXRlcmFsTG9vc2UoW1wiXFxuZnJvbSB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuNik7XFxuICBvcGFjaXR5OiAwLjQ7XFxufVxcbnRvIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICBvcGFjaXR5OiAxO1xcbn1cIl0pO1xuXG4gIF90ZW1wbGF0ZU9iamVjdDMkMiA9IGZ1bmN0aW9uIF90ZW1wbGF0ZU9iamVjdDMoKSB7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH07XG5cbiAgcmV0dXJuIGRhdGE7XG59XG5cbmZ1bmN0aW9uIF90ZW1wbGF0ZU9iamVjdDIkMygpIHtcbiAgdmFyIGRhdGEgPSBfdGFnZ2VkVGVtcGxhdGVMaXRlcmFsTG9vc2UoW1wiXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWluLXdpZHRoOiAyMHB4O1xcbiAgbWluLWhlaWdodDogMjBweDtcXG5cIl0pO1xuXG4gIF90ZW1wbGF0ZU9iamVjdDIkMyA9IGZ1bmN0aW9uIF90ZW1wbGF0ZU9iamVjdDIoKSB7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH07XG5cbiAgcmV0dXJuIGRhdGE7XG59XG5cbmZ1bmN0aW9uIF90ZW1wbGF0ZU9iamVjdCQzKCkge1xuICB2YXIgZGF0YSA9IF90YWdnZWRUZW1wbGF0ZUxpdGVyYWxMb29zZShbXCJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cIl0pO1xuXG4gIF90ZW1wbGF0ZU9iamVjdCQzID0gZnVuY3Rpb24gX3RlbXBsYXRlT2JqZWN0KCkge1xuICAgIHJldHVybiBkYXRhO1xuICB9O1xuXG4gIHJldHVybiBkYXRhO1xufVxudmFyIFN0YXR1c1dyYXBwZXIgPSAvKiNfX1BVUkVfXyovc3R5bGVkKCdkaXYnKSggLyojX19QVVJFX18qL190ZW1wbGF0ZU9iamVjdCQzKCkpO1xudmFyIEluZGljYXRvcldyYXBwZXIgPSAvKiNfX1BVUkVfXyovc3R5bGVkKCdkaXYnKSggLyojX19QVVJFX18qL190ZW1wbGF0ZU9iamVjdDIkMygpKTtcbnZhciBlbnRlciA9IC8qI19fUFVSRV9fKi9rZXlmcmFtZXMoIC8qI19fUFVSRV9fKi9fdGVtcGxhdGVPYmplY3QzJDIoKSk7XG52YXIgQW5pbWF0ZWRJY29uV3JhcHBlciA9IC8qI19fUFVSRV9fKi9zdHlsZWQoJ2RpdicpKCAvKiNfX1BVUkVfXyovX3RlbXBsYXRlT2JqZWN0NCQxKCksIGVudGVyKTtcbnZhciBUb2FzdEljb24gPSBmdW5jdGlvbiBUb2FzdEljb24oX3JlZikge1xuICB2YXIgdG9hc3QgPSBfcmVmLnRvYXN0O1xuICB2YXIgaWNvbiA9IHRvYXN0Lmljb24sXG4gICAgICB0eXBlID0gdG9hc3QudHlwZSxcbiAgICAgIGljb25UaGVtZSA9IHRvYXN0Lmljb25UaGVtZTtcblxuICBpZiAoaWNvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgaWYgKHR5cGVvZiBpY29uID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoQW5pbWF0ZWRJY29uV3JhcHBlciwgbnVsbCwgaWNvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBpY29uO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlID09PSAnYmxhbmsnKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gY3JlYXRlRWxlbWVudChJbmRpY2F0b3JXcmFwcGVyLCBudWxsLCBjcmVhdGVFbGVtZW50KExvYWRlckljb24sIE9iamVjdC5hc3NpZ24oe30sIGljb25UaGVtZSkpLCB0eXBlICE9PSAnbG9hZGluZycgJiYgY3JlYXRlRWxlbWVudChTdGF0dXNXcmFwcGVyLCBudWxsLCB0eXBlID09PSAnZXJyb3InID8gY3JlYXRlRWxlbWVudChFcnJvckljb24sIE9iamVjdC5hc3NpZ24oe30sIGljb25UaGVtZSkpIDogY3JlYXRlRWxlbWVudChDaGVja21hcmtJY29uLCBPYmplY3QuYXNzaWduKHt9LCBpY29uVGhlbWUpKSkpO1xufTtcblxuZnVuY3Rpb24gX3RlbXBsYXRlT2JqZWN0MiQ0KCkge1xuICB2YXIgZGF0YSA9IF90YWdnZWRUZW1wbGF0ZUxpdGVyYWxMb29zZShbXCJcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbjogNHB4IDEwcHg7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIGZsZXg6IDEgMSBhdXRvO1xcblwiXSk7XG5cbiAgX3RlbXBsYXRlT2JqZWN0MiQ0ID0gZnVuY3Rpb24gX3RlbXBsYXRlT2JqZWN0MigpIHtcbiAgICByZXR1cm4gZGF0YTtcbiAgfTtcblxuICByZXR1cm4gZGF0YTtcbn1cblxuZnVuY3Rpb24gX3RlbXBsYXRlT2JqZWN0JDQoKSB7XG4gIHZhciBkYXRhID0gX3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbExvb3NlKFtcIlxcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgY29sb3I6ICMzNjM2MzY7XFxuICBsaW5lLWhlaWdodDogMS4zO1xcbiAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcXG4gIGJveC1zaGFkb3c6IDAgM3B4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpLCAwIDNweCAzcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcXG4gIG1heC13aWR0aDogMzUwcHg7XFxuICBwb2ludGVyLWV2ZW50czogYXV0bztcXG4gIHBhZGRpbmc6IDhweCAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcblwiXSk7XG5cbiAgX3RlbXBsYXRlT2JqZWN0JDQgPSBmdW5jdGlvbiBfdGVtcGxhdGVPYmplY3QoKSB7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH07XG5cbiAgcmV0dXJuIGRhdGE7XG59XG5cbnZhciBlbnRlckFuaW1hdGlvbiA9IGZ1bmN0aW9uIGVudGVyQW5pbWF0aW9uKGZhY3Rvcikge1xuICByZXR1cm4gXCJcXG4wJSB7dHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLFwiICsgZmFjdG9yICogLTIwMCArIFwiJSwwKSBzY2FsZSguNik7IG9wYWNpdHk6LjU7fVxcbjEwMCUge3RyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwwLDApIHNjYWxlKDEpOyBvcGFjaXR5OjE7fVxcblwiO1xufTtcblxudmFyIGV4aXRBbmltYXRpb24gPSBmdW5jdGlvbiBleGl0QW5pbWF0aW9uKGZhY3Rvcikge1xuICByZXR1cm4gXCJcXG4wJSB7dHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLDAsLTFweCkgc2NhbGUoMSk7IG9wYWNpdHk6MTt9XFxuMTAwJSB7dHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLFwiICsgZmFjdG9yICogLTE1MCArIFwiJSwtMXB4KSBzY2FsZSguNik7IG9wYWNpdHk6MDt9XFxuXCI7XG59O1xuXG52YXIgZmFkZUluQW5pbWF0aW9uID0gXCIwJXtvcGFjaXR5OjA7fSAxMDAle29wYWNpdHk6MTt9XCI7XG52YXIgZmFkZU91dEFuaW1hdGlvbiA9IFwiMCV7b3BhY2l0eToxO30gMTAwJXtvcGFjaXR5OjA7fVwiO1xudmFyIFRvYXN0QmFyQmFzZSA9IC8qI19fUFVSRV9fKi9zdHlsZWQoJ2RpdicsIGZvcndhcmRSZWYpKCAvKiNfX1BVUkVfXyovX3RlbXBsYXRlT2JqZWN0JDQoKSk7XG52YXIgTWVzc2FnZSA9IC8qI19fUFVSRV9fKi9zdHlsZWQoJ2RpdicpKCAvKiNfX1BVUkVfXyovX3RlbXBsYXRlT2JqZWN0MiQ0KCkpO1xuXG52YXIgZ2V0QW5pbWF0aW9uU3R5bGUgPSBmdW5jdGlvbiBnZXRBbmltYXRpb25TdHlsZShwb3NpdGlvbiwgdmlzaWJsZSkge1xuICB2YXIgdG9wID0gcG9zaXRpb24uaW5jbHVkZXMoJ3RvcCcpO1xuICB2YXIgZmFjdG9yID0gdG9wID8gMSA6IC0xO1xuXG4gIHZhciBfcmVmID0gcHJlZmVyc1JlZHVjZWRNb3Rpb24oKSA/IFtmYWRlSW5BbmltYXRpb24sIGZhZGVPdXRBbmltYXRpb25dIDogW2VudGVyQW5pbWF0aW9uKGZhY3RvciksIGV4aXRBbmltYXRpb24oZmFjdG9yKV0sXG4gICAgICBlbnRlciA9IF9yZWZbMF0sXG4gICAgICBleGl0ID0gX3JlZlsxXTtcblxuICByZXR1cm4ge1xuICAgIGFuaW1hdGlvbjogdmlzaWJsZSA/IGtleWZyYW1lcyhlbnRlcikgKyBcIiAwLjM1cyBjdWJpYy1iZXppZXIoLjIxLDEuMDIsLjczLDEpIGZvcndhcmRzXCIgOiBrZXlmcmFtZXMoZXhpdCkgKyBcIiAwLjRzIGZvcndhcmRzIGN1YmljLWJlemllciguMDYsLjcxLC41NSwxKVwiXG4gIH07XG59O1xuXG52YXIgVG9hc3RCYXIgPSAvKiNfX1BVUkVfXyovbWVtbyhmdW5jdGlvbiAoX3JlZjIpIHtcbiAgdmFyIHRvYXN0ID0gX3JlZjIudG9hc3QsXG4gICAgICBwb3NpdGlvbiA9IF9yZWYyLnBvc2l0aW9uLFxuICAgICAgc3R5bGUgPSBfcmVmMi5zdHlsZSxcbiAgICAgIGNoaWxkcmVuID0gX3JlZjIuY2hpbGRyZW47XG4gIHZhciBhbmltYXRpb25TdHlsZSA9IHRvYXN0ICE9IG51bGwgJiYgdG9hc3QuaGVpZ2h0ID8gZ2V0QW5pbWF0aW9uU3R5bGUodG9hc3QucG9zaXRpb24gfHwgcG9zaXRpb24gfHwgJ3RvcC1jZW50ZXInLCB0b2FzdC52aXNpYmxlKSA6IHtcbiAgICBvcGFjaXR5OiAwXG4gIH07XG4gIHZhciBpY29uID0gY3JlYXRlRWxlbWVudChUb2FzdEljb24sIHtcbiAgICB0b2FzdDogdG9hc3RcbiAgfSk7XG4gIHZhciBtZXNzYWdlID0gY3JlYXRlRWxlbWVudChNZXNzYWdlLCBPYmplY3QuYXNzaWduKHt9LCB0b2FzdC5hcmlhUHJvcHMpLCByZXNvbHZlVmFsdWUodG9hc3QubWVzc2FnZSwgdG9hc3QpKTtcbiAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoVG9hc3RCYXJCYXNlLCB7XG4gICAgY2xhc3NOYW1lOiB0b2FzdC5jbGFzc05hbWUsXG4gICAgc3R5bGU6IF9leHRlbmRzKHt9LCBhbmltYXRpb25TdHlsZSwgc3R5bGUsIHRvYXN0LnN0eWxlKVxuICB9LCB0eXBlb2YgY2hpbGRyZW4gPT09ICdmdW5jdGlvbicgPyBjaGlsZHJlbih7XG4gICAgaWNvbjogaWNvbixcbiAgICBtZXNzYWdlOiBtZXNzYWdlXG4gIH0pIDogY3JlYXRlRWxlbWVudChGcmFnbWVudCwgbnVsbCwgaWNvbiwgbWVzc2FnZSkpO1xufSk7XG5cbmZ1bmN0aW9uIF90ZW1wbGF0ZU9iamVjdCQ1KCkge1xuICB2YXIgZGF0YSA9IF90YWdnZWRUZW1wbGF0ZUxpdGVyYWxMb29zZShbXCJcXG4gIHotaW5kZXg6IDk5OTk7XFxuICA+ICoge1xcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcXG4gIH1cXG5cIl0pO1xuXG4gIF90ZW1wbGF0ZU9iamVjdCQ1ID0gZnVuY3Rpb24gX3RlbXBsYXRlT2JqZWN0KCkge1xuICAgIHJldHVybiBkYXRhO1xuICB9O1xuXG4gIHJldHVybiBkYXRhO1xufVxuc2V0dXAoY3JlYXRlRWxlbWVudCk7XG5cbnZhciBnZXRQb3NpdGlvblN0eWxlID0gZnVuY3Rpb24gZ2V0UG9zaXRpb25TdHlsZShwb3NpdGlvbiwgb2Zmc2V0KSB7XG4gIHZhciB0b3AgPSBwb3NpdGlvbi5pbmNsdWRlcygndG9wJyk7XG4gIHZhciB2ZXJ0aWNhbFN0eWxlID0gdG9wID8ge1xuICAgIHRvcDogMFxuICB9IDoge1xuICAgIGJvdHRvbTogMFxuICB9O1xuICB2YXIgaG9yaXpvbnRhbFN0eWxlID0gcG9zaXRpb24uaW5jbHVkZXMoJ2NlbnRlcicpID8ge1xuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJ1xuICB9IDogcG9zaXRpb24uaW5jbHVkZXMoJ3JpZ2h0JykgPyB7XG4gICAganVzdGlmeUNvbnRlbnQ6ICdmbGV4LWVuZCdcbiAgfSA6IHt9O1xuICByZXR1cm4gX2V4dGVuZHMoe1xuICAgIGxlZnQ6IDAsXG4gICAgcmlnaHQ6IDAsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHRyYW5zaXRpb246IHByZWZlcnNSZWR1Y2VkTW90aW9uKCkgPyB1bmRlZmluZWQgOiBcImFsbCAyMzBtcyBjdWJpYy1iZXppZXIoLjIxLDEuMDIsLjczLDEpXCIsXG4gICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZVkoXCIgKyBvZmZzZXQgKiAodG9wID8gMSA6IC0xKSArIFwicHgpXCJcbiAgfSwgdmVydGljYWxTdHlsZSwgaG9yaXpvbnRhbFN0eWxlKTtcbn07XG5cbnZhciBhY3RpdmVDbGFzcyA9IC8qI19fUFVSRV9fKi9jc3MoIC8qI19fUFVSRV9fKi9fdGVtcGxhdGVPYmplY3QkNSgpKTtcbnZhciBERUZBVUxUX09GRlNFVCA9IDE2O1xudmFyIFRvYXN0ZXIgPSBmdW5jdGlvbiBUb2FzdGVyKF9yZWYpIHtcbiAgdmFyIHJldmVyc2VPcmRlciA9IF9yZWYucmV2ZXJzZU9yZGVyLFxuICAgICAgX3JlZiRwb3NpdGlvbiA9IF9yZWYucG9zaXRpb24sXG4gICAgICBwb3NpdGlvbiA9IF9yZWYkcG9zaXRpb24gPT09IHZvaWQgMCA/ICd0b3AtY2VudGVyJyA6IF9yZWYkcG9zaXRpb24sXG4gICAgICB0b2FzdE9wdGlvbnMgPSBfcmVmLnRvYXN0T3B0aW9ucyxcbiAgICAgIGd1dHRlciA9IF9yZWYuZ3V0dGVyLFxuICAgICAgY2hpbGRyZW4gPSBfcmVmLmNoaWxkcmVuLFxuICAgICAgY29udGFpbmVyU3R5bGUgPSBfcmVmLmNvbnRhaW5lclN0eWxlLFxuICAgICAgY29udGFpbmVyQ2xhc3NOYW1lID0gX3JlZi5jb250YWluZXJDbGFzc05hbWU7XG5cbiAgdmFyIF91c2VUb2FzdGVyID0gdXNlVG9hc3Rlcih0b2FzdE9wdGlvbnMpLFxuICAgICAgdG9hc3RzID0gX3VzZVRvYXN0ZXIudG9hc3RzLFxuICAgICAgaGFuZGxlcnMgPSBfdXNlVG9hc3Rlci5oYW5kbGVycztcblxuICByZXR1cm4gY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgc3R5bGU6IF9leHRlbmRzKHtcbiAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgICAgekluZGV4OiA5OTk5LFxuICAgICAgdG9wOiBERUZBVUxUX09GRlNFVCxcbiAgICAgIGxlZnQ6IERFRkFVTFRfT0ZGU0VULFxuICAgICAgcmlnaHQ6IERFRkFVTFRfT0ZGU0VULFxuICAgICAgYm90dG9tOiBERUZBVUxUX09GRlNFVCxcbiAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJ1xuICAgIH0sIGNvbnRhaW5lclN0eWxlKSxcbiAgICBjbGFzc05hbWU6IGNvbnRhaW5lckNsYXNzTmFtZSxcbiAgICBvbk1vdXNlRW50ZXI6IGhhbmRsZXJzLnN0YXJ0UGF1c2UsXG4gICAgb25Nb3VzZUxlYXZlOiBoYW5kbGVycy5lbmRQYXVzZVxuICB9LCB0b2FzdHMubWFwKGZ1bmN0aW9uICh0KSB7XG4gICAgdmFyIHRvYXN0UG9zaXRpb24gPSB0LnBvc2l0aW9uIHx8IHBvc2l0aW9uO1xuICAgIHZhciBvZmZzZXQgPSBoYW5kbGVycy5jYWxjdWxhdGVPZmZzZXQodCwge1xuICAgICAgcmV2ZXJzZU9yZGVyOiByZXZlcnNlT3JkZXIsXG4gICAgICBndXR0ZXI6IGd1dHRlcixcbiAgICAgIGRlZmF1bHRQb3NpdGlvbjogcG9zaXRpb25cbiAgICB9KTtcbiAgICB2YXIgcG9zaXRpb25TdHlsZSA9IGdldFBvc2l0aW9uU3R5bGUodG9hc3RQb3NpdGlvbiwgb2Zmc2V0KTtcbiAgICB2YXIgcmVmID0gdC5oZWlnaHQgPyB1bmRlZmluZWQgOiBjcmVhdGVSZWN0UmVmKGZ1bmN0aW9uIChyZWN0KSB7XG4gICAgICBoYW5kbGVycy51cGRhdGVIZWlnaHQodC5pZCwgcmVjdC5oZWlnaHQpO1xuICAgIH0pO1xuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgIHJlZjogcmVmLFxuICAgICAgY2xhc3NOYW1lOiB0LnZpc2libGUgPyBhY3RpdmVDbGFzcyA6ICcnLFxuICAgICAga2V5OiB0LmlkLFxuICAgICAgc3R5bGU6IHBvc2l0aW9uU3R5bGVcbiAgICB9LCB0LnR5cGUgPT09ICdjdXN0b20nID8gcmVzb2x2ZVZhbHVlKHQubWVzc2FnZSwgdCkgOiBjaGlsZHJlbiA/IGNoaWxkcmVuKHQpIDogY3JlYXRlRWxlbWVudChUb2FzdEJhciwge1xuICAgICAgdG9hc3Q6IHQsXG4gICAgICBwb3NpdGlvbjogdG9hc3RQb3NpdGlvblxuICAgIH0pKTtcbiAgfSkpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdG9hc3Q7XG5leHBvcnQgeyBDaGVja21hcmtJY29uLCBFcnJvckljb24sIExvYWRlckljb24sIFRvYXN0QmFyLCBUb2FzdEljb24sIFRvYXN0ZXIsIHJlc29sdmVWYWx1ZSwgdG9hc3QsIHVzZVRvYXN0ZXIsIHVzZVN0b3JlIGFzIHVzZVRvYXN0ZXJTdG9yZSB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVhY3QtaG90LXRvYXN0LmVzbS5qcy5tYXBcbiJdLCJzb3VyY2VSb290IjoiIn0=