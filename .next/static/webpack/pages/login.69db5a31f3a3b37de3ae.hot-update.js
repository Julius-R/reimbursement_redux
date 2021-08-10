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

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();

  var _useForm = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_6__.useForm)(),
      register = _useForm.register,
      handleSubmit = _useForm.handleSubmit,
      setError = _useForm.setError,
      reset = _useForm.reset,
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
        if (res.status === 401) {
          react_hot_toast__WEBPACK_IMPORTED_MODULE_7__.default.error("Username or password was invalid!");
        } else {
          reset();
          router.push("/");
        }
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
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_hot_toast__WEBPACK_IMPORTED_MODULE_7__.Toaster, {
        position: "top-right"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "max-w-md w-full space-y-8",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h2", {
          className: "mt-6 text-center text-3xl font-extrabold text-gray-900",
          children: "Sign in to your account"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
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
          lineNumber: 58,
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
              lineNumber: 61,
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
              lineNumber: 64,
              columnNumber: 8
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: "my-4",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("label", {
              htmlFor: "password",
              className: "sr-only",
              children: "Password"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 78,
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
              lineNumber: 81,
              columnNumber: 8
            }, this), ((_errors$password = errors.password) === null || _errors$password === void 0 ? void 0 : _errors$password.type) === "required" && "Field should not be blank", ((_errors$password2 = errors.password) === null || _errors$password2 === void 0 ? void 0 : _errors$password2.type) === "blank_space" && "Field is blank."]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
            type: "submit",
            className: "group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
            children: "Sign in"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 7
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 3
  }, this);
}

_s(Login, "ZRyRnrnrIY61CQ/Ymnrn1S5IGgs=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter, react_hook_form__WEBPACK_IMPORTED_MODULE_6__.useForm];
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9naW4uanMiXSwibmFtZXMiOlsiTG9naW4iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VGb3JtIiwicmVnaXN0ZXIiLCJoYW5kbGVTdWJtaXQiLCJzZXRFcnJvciIsInJlc2V0IiwiZXJyb3JzIiwiZm9ybVN0YXRlIiwib25TdWJtaXQiLCJ2YWx1ZXMiLCJwYXNzd29yZCIsInRyaW0iLCJjb25zb2xlIiwibG9nIiwiZmV0Y2giLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIm1ldGhvZCIsImhlYWRlcnMiLCJ0aGVuIiwicmVzIiwic3RhdHVzIiwidG9hc3QiLCJwdXNoIiwidHlwZSIsInJlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0NBRUE7O0FBQ0E7QUFDQTtDQUVBO0FBRUE7O0FBRWUsU0FBU0EsS0FBVCxHQUFpQjtBQUFBOztBQUFBOztBQUMvQixNQUFNQyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCOztBQUQrQixpQkFRM0JDLHdEQUFPLEVBUm9CO0FBQUEsTUFHOUJDLFFBSDhCLFlBRzlCQSxRQUg4QjtBQUFBLE1BSTlCQyxZQUo4QixZQUk5QkEsWUFKOEI7QUFBQSxNQUs5QkMsUUFMOEIsWUFLOUJBLFFBTDhCO0FBQUEsTUFNOUJDLEtBTjhCLFlBTTlCQSxLQU44QjtBQUFBLE1BT2pCQyxNQVBpQixZQU85QkMsU0FQOEIsQ0FPakJELE1BUGlCOztBQVMvQixNQUFNRSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxNQUFELEVBQVk7QUFDNUIsUUFBSSxDQUFDLENBQUNBLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsSUFBaEIsRUFBTixFQUE4QjtBQUM3QkMsYUFBTyxDQUFDQyxHQUFSLENBQVlKLE1BQVo7QUFDQUssV0FBSyxDQUFDLFlBQUQsRUFBZTtBQUNuQkMsWUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZVIsTUFB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QUksRUFBQyxRQUROO0FBRUMscUJBQVMsRUFBQyxxT0FGWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBL0NEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU5EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBcUVBOztHQW5HdUIzQixLO1VBQ1JFLGtELEVBT1hDLG9EOzs7S0FSbUJILEsiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbG9naW4uNjlkYjVhMzFmM2EzYjM3ZGUzYWUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgd2l0aFNlc3Npb24gZnJvbSBcIi4uL2xpYi9TZXNzaW9uLmpzXCI7XHJcbi8vIGltcG9ydCBiY3J5cHQgZnJvbSBcImJjcnlwdGpzXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSBcInJlYWN0LWhvb2stZm9ybVwiO1xyXG5pbXBvcnQgdG9hc3QsIHsgVG9hc3RlciB9IGZyb20gXCJyZWFjdC1ob3QtdG9hc3RcIjtcclxuLy8gaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XHJcblxyXG4vLyBjb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbigpIHtcclxuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHRjb25zdCB7XHJcblx0XHRyZWdpc3RlcixcclxuXHRcdGhhbmRsZVN1Ym1pdCxcclxuXHRcdHNldEVycm9yLFxyXG5cdFx0cmVzZXQsXHJcblx0XHRmb3JtU3RhdGU6IHsgZXJyb3JzIH1cclxuXHR9ID0gdXNlRm9ybSgpO1xyXG5cdGNvbnN0IG9uU3VibWl0ID0gKHZhbHVlcykgPT4ge1xyXG5cdFx0aWYgKCEhdmFsdWVzLnBhc3N3b3JkLnRyaW0oKSkge1xyXG5cdFx0XHRjb25zb2xlLmxvZyh2YWx1ZXMpO1xyXG5cdFx0XHRmZXRjaChcIi9hcGkvbG9naW5cIiwge1xyXG5cdFx0XHRcdGJvZHk6IEpTT04uc3RyaW5naWZ5KHZhbHVlcyksXHJcblx0XHRcdFx0bWV0aG9kOiBcIlBPU1RcIixcclxuXHRcdFx0XHRoZWFkZXJzOiB7XHJcblx0XHRcdFx0XHRcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSkudGhlbigocmVzKSA9PiB7XHJcblx0XHRcdFx0aWYgKHJlcy5zdGF0dXMgPT09IDQwMSkge1xyXG5cdFx0XHRcdFx0dG9hc3QuZXJyb3IoXCJVc2VybmFtZSBvciBwYXNzd29yZCB3YXMgaW52YWxpZCFcIik7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHJlc2V0KCk7XHJcblx0XHRcdFx0XHRyb3V0ZXIucHVzaChcIi9cIik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHNldEVycm9yKFwicGFzc3dvcmRcIiwgeyB0eXBlOiBcImJsYW5rX3NwYWNlXCIgfSk7XHJcblx0XHR9XHJcblx0fTtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgYmctZ3JheS01MCBweS0xMiBweC00IHNtOnB4LTYgbGc6cHgtOFwiPlxyXG5cdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdDxUb2FzdGVyIHBvc2l0aW9uPVwidG9wLXJpZ2h0XCIgLz5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibWF4LXctbWQgdy1mdWxsIHNwYWNlLXktOFwiPlxyXG5cdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHQ8aDIgY2xhc3NOYW1lPVwibXQtNiB0ZXh0LWNlbnRlciB0ZXh0LTN4bCBmb250LWV4dHJhYm9sZCB0ZXh0LWdyYXktOTAwXCI+XHJcblx0XHRcdFx0XHRcdFNpZ24gaW4gdG8geW91ciBhY2NvdW50XHJcblx0XHRcdFx0XHQ8L2gyPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxmb3JtXHJcblx0XHRcdFx0XHRvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uU3VibWl0KX1cclxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cIm10LTggc3BhY2UteS02XCJcclxuXHRcdFx0XHRcdGFjdGlvbj1cIiNcIlxyXG5cdFx0XHRcdFx0bWV0aG9kPVwiUE9TVFwiPlxyXG5cdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwicmVtZW1iZXJcIiBkZWZhdWx0VmFsdWU9XCJ0cnVlXCIgLz5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm91bmRlZC1tZCBzaGFkb3ctc20gLXNwYWNlLXktcHhcIj5cclxuXHRcdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0XHQ8bGFiZWwgaHRtbEZvcj1cImVtYWlsLWFkZHJlc3NcIiBjbGFzc05hbWU9XCJzci1vbmx5XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRFbWFpbCBhZGRyZXNzXHJcblx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0XHRcdHsuLi5yZWdpc3RlcihcImVtYWlsXCIsIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0cmVxdWlyZWQ6IHRydWVcclxuXHRcdFx0XHRcdFx0XHRcdH0pfVxyXG5cdFx0XHRcdFx0XHRcdFx0aWQ9XCJlbWFpbC1hZGRyZXNzXCJcclxuXHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJlbWFpbFwiXHJcblx0XHRcdFx0XHRcdFx0XHR0eXBlPVwiZW1haWxcIlxyXG5cdFx0XHRcdFx0XHRcdFx0YXV0b0NvbXBsZXRlPVwiZW1haWxcIlxyXG5cdFx0XHRcdFx0XHRcdFx0cmVxdWlyZWRcclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImFwcGVhcmFuY2Utbm9uZSByb3VuZGVkLW5vbmUgcmVsYXRpdmUgYmxvY2sgdy1mdWxsIHB4LTMgcHktMiBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHBsYWNlaG9sZGVyLWdyYXktNTAwIHRleHQtZ3JheS05MDAgcm91bmRlZC10LW1kIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLWluZGlnby01MDAgZm9jdXM6Ym9yZGVyLWluZGlnby01MDAgZm9jdXM6ei0xMCBzbTp0ZXh0LXNtXCJcclxuXHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiRW1haWwgYWRkcmVzc1wiXHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibXktNFwiPlxyXG5cdFx0XHRcdFx0XHRcdDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIiBjbGFzc05hbWU9XCJzci1vbmx5XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRQYXNzd29yZFxyXG5cdFx0XHRcdFx0XHRcdDwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdFx0XHR7Li4ucmVnaXN0ZXIoXCJwYXNzd29yZFwiLCB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHJlcXVpcmVkOiB0cnVlXHJcblx0XHRcdFx0XHRcdFx0XHR9KX1cclxuXHRcdFx0XHRcdFx0XHRcdGlkPVwicGFzc3dvcmRcIlxyXG5cdFx0XHRcdFx0XHRcdFx0bmFtZT1cInBhc3N3b3JkXCJcclxuXHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJwYXNzd29yZFwiXHJcblx0XHRcdFx0XHRcdFx0XHRhdXRvQ29tcGxldGU9XCJjdXJyZW50LXBhc3N3b3JkXCJcclxuXHRcdFx0XHRcdFx0XHRcdHJlcXVpcmVkXHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJhcHBlYXJhbmNlLW5vbmUgcm91bmRlZC1ub25lIHJlbGF0aXZlIGJsb2NrIHctZnVsbCBweC0zIHB5LTIgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCBwbGFjZWhvbGRlci1ncmF5LTUwMCB0ZXh0LWdyYXktOTAwIHJvdW5kZWQtYi1tZCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy1pbmRpZ28tNTAwIGZvY3VzOmJvcmRlci1pbmRpZ28tNTAwIGZvY3VzOnotMTAgc206dGV4dC1zbVwiXHJcblx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdHtlcnJvcnMucGFzc3dvcmQ/LnR5cGUgPT09IFwicmVxdWlyZWRcIiAmJlxyXG5cdFx0XHRcdFx0XHRcdFx0XCJGaWVsZCBzaG91bGQgbm90IGJlIGJsYW5rXCJ9XHJcblx0XHRcdFx0XHRcdFx0e2Vycm9ycy5wYXNzd29yZD8udHlwZSA9PT0gXCJibGFua19zcGFjZVwiICYmXHJcblx0XHRcdFx0XHRcdFx0XHRcIkZpZWxkIGlzIGJsYW5rLlwifVxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdDxidXR0b25cclxuXHRcdFx0XHRcdFx0XHR0eXBlPVwic3VibWl0XCJcclxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJncm91cCByZWxhdGl2ZSB3LWZ1bGwgZmxleCBqdXN0aWZ5LWNlbnRlciBweS0yIHB4LTQgYm9yZGVyIGJvcmRlci10cmFuc3BhcmVudCB0ZXh0LXNtIGZvbnQtbWVkaXVtIHJvdW5kZWQtbWQgdGV4dC13aGl0ZSBiZy1pbmRpZ28tNjAwIGhvdmVyOmJnLWluZGlnby03MDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLW9mZnNldC0yIGZvY3VzOnJpbmctaW5kaWdvLTUwMFwiPlxyXG5cdFx0XHRcdFx0XHRcdFNpZ24gaW5cclxuXHRcdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Zvcm0+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9