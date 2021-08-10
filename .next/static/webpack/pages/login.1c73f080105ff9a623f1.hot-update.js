self["webpackHotUpdate_N_E"]("pages/login",{

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _defineProperty; }
/* harmony export */ });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

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

  var _errors$email, _errors$message, _errors$message2;

  var _useForm = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_6__.useForm)(),
      register = _useForm.register,
      handleSubmit = _useForm.handleSubmit,
      setError = _useForm.setError,
      errors = _useForm.formState.errors;

  var onSubmit = function onSubmit(values) {
    if (!!values.message.trim()) {
      fetch("/api/hello", {
        body: JSON.stringify(values),
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        }
      });
    } else {
      setError("message", {
        type: "blank_space"
      });
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: "min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "max-w-md w-full space-y-8",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h2", {
          className: "mt-6 text-center text-3xl font-extrabold text-gray-900",
          children: "Sign in to your account"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
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
          lineNumber: 45,
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
              lineNumber: 48,
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
              lineNumber: 51,
              columnNumber: 8
            }, this), ((_errors$email = errors.email) === null || _errors$email === void 0 ? void 0 : _errors$email.type) === "required" && "A valid email is required"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("label", {
              htmlFor: "password",
              className: "sr-only",
              children: "Password"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 67,
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
              lineNumber: 70,
              columnNumber: 8
            }, this), ((_errors$message = errors.message) === null || _errors$message === void 0 ? void 0 : _errors$message.type) === "required" && "Field should not be blank", ((_errors$message2 = errors.message) === null || _errors$message2 === void 0 ? void 0 : _errors$message2.type) === "blank_space" && "Field is blank."]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
            type: "submit",
            className: "group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
            children: "Sign in"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 7
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 4
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 33,
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9sb2dpbi5qcyJdLCJuYW1lcyI6WyJMb2dpbiIsInVzZUZvcm0iLCJyZWdpc3RlciIsImhhbmRsZVN1Ym1pdCIsInNldEVycm9yIiwiZXJyb3JzIiwiZm9ybVN0YXRlIiwib25TdWJtaXQiLCJ2YWx1ZXMiLCJtZXNzYWdlIiwidHJpbSIsImZldGNoIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJtZXRob2QiLCJoZWFkZXJzIiwidHlwZSIsInJlcXVpcmVkIiwiZW1haWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiQTtBQUNBO0NBRUE7O0FBQ0E7QUFDQTtDQUVBO0FBRUE7O0FBRWUsU0FBU0EsS0FBVCxHQUFpQjtBQUFBOztBQUFBOztBQUFBLGlCQU0zQkMsd0RBQU8sRUFOb0I7QUFBQSxNQUU5QkMsUUFGOEIsWUFFOUJBLFFBRjhCO0FBQUEsTUFHOUJDLFlBSDhCLFlBRzlCQSxZQUg4QjtBQUFBLE1BSTlCQyxRQUo4QixZQUk5QkEsUUFKOEI7QUFBQSxNQUtqQkMsTUFMaUIsWUFLOUJDLFNBTDhCLENBS2pCRCxNQUxpQjs7QUFPL0IsTUFBTUUsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsTUFBRCxFQUFZO0FBQzVCLFFBQUksQ0FBQyxDQUFDQSxNQUFNLENBQUNDLE9BQVAsQ0FBZUMsSUFBZixFQUFOLEVBQTZCO0FBQzVCQyxXQUFLLGVBQWU7QUFDbkJDLFlBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWVOLE1BQWYsQ0FEYTtBQUVuQk8sY0FBTSxF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ODAxMDVmZjlhNjIzZjEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufSIsImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgd2l0aFNlc3Npb24gZnJvbSBcIi4uL2xpYi9TZXNzaW9uLmpzXCI7XHJcbi8vIGltcG9ydCBiY3J5cHQgZnJvbSBcImJjcnlwdGpzXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSBcInJlYWN0LWhvb2stZm9ybVwiO1xyXG5pbXBvcnQgdG9hc3QsIHsgVG9hc3RlciB9IGZyb20gXCJyZWFjdC1ob3QtdG9hc3RcIjtcclxuLy8gaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XHJcblxyXG4vLyBjb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbigpIHtcclxuXHRjb25zdCB7XHJcblx0XHRyZWdpc3RlcixcclxuXHRcdGhhbmRsZVN1Ym1pdCxcclxuXHRcdHNldEVycm9yLFxyXG5cdFx0Zm9ybVN0YXRlOiB7IGVycm9ycyB9XHJcblx0fSA9IHVzZUZvcm0oKTtcclxuXHRjb25zdCBvblN1Ym1pdCA9ICh2YWx1ZXMpID0+IHtcclxuXHRcdGlmICghIXZhbHVlcy5tZXNzYWdlLnRyaW0oKSkge1xyXG5cdFx0XHRmZXRjaChgL2FwaS9oZWxsb2AsIHtcclxuXHRcdFx0XHRib2R5OiBKU09OLnN0cmluZ2lmeSh2YWx1ZXMpLFxyXG5cdFx0XHRcdG1ldGhvZDogXCJQT1NUXCIsXHJcblx0XHRcdFx0aGVhZGVyczoge1xyXG5cdFx0XHRcdFx0XCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0c2V0RXJyb3IoXCJtZXNzYWdlXCIsIHsgdHlwZTogXCJibGFua19zcGFjZVwiIH0pO1xyXG5cdFx0fVxyXG5cdH07XHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGJnLWdyYXktNTAgcHktMTIgcHgtNCBzbTpweC02IGxnOnB4LThcIj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtYXgtdy1tZCB3LWZ1bGwgc3BhY2UteS04XCI+XHJcblx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdDxoMiBjbGFzc05hbWU9XCJtdC02IHRleHQtY2VudGVyIHRleHQtM3hsIGZvbnQtZXh0cmFib2xkIHRleHQtZ3JheS05MDBcIj5cclxuXHRcdFx0XHRcdFx0U2lnbiBpbiB0byB5b3VyIGFjY291bnRcclxuXHRcdFx0XHRcdDwvaDI+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGZvcm1cclxuXHRcdFx0XHRcdG9uU3VibWl0PXtoYW5kbGVTdWJtaXQob25TdWJtaXQpfVxyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwibXQtOCBzcGFjZS15LTZcIlxyXG5cdFx0XHRcdFx0YWN0aW9uPVwiI1wiXHJcblx0XHRcdFx0XHRtZXRob2Q9XCJQT1NUXCI+XHJcblx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJyZW1lbWJlclwiIGRlZmF1bHRWYWx1ZT1cInRydWVcIiAvPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkLW1kIHNoYWRvdy1zbSAtc3BhY2UteS1weFwiPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxsYWJlbCBodG1sRm9yPVwiZW1haWwtYWRkcmVzc1wiIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5cclxuXHRcdFx0XHRcdFx0XHRcdEVtYWlsIGFkZHJlc3NcclxuXHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHRcdFx0ey4uLnJlZ2lzdGVyKFwiZW1haWxcIiwge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRyZXF1aXJlZDogdHJ1ZVxyXG5cdFx0XHRcdFx0XHRcdFx0fSl9XHJcblx0XHRcdFx0XHRcdFx0XHRpZD1cImVtYWlsLWFkZHJlc3NcIlxyXG5cdFx0XHRcdFx0XHRcdFx0bmFtZT1cImVtYWlsXCJcclxuXHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJlbWFpbFwiXHJcblx0XHRcdFx0XHRcdFx0XHRhdXRvQ29tcGxldGU9XCJlbWFpbFwiXHJcblx0XHRcdFx0XHRcdFx0XHRyZXF1aXJlZFxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiYXBwZWFyYW5jZS1ub25lIHJvdW5kZWQtbm9uZSByZWxhdGl2ZSBibG9jayB3LWZ1bGwgcHgtMyBweS0yIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcGxhY2Vob2xkZXItZ3JheS01MDAgdGV4dC1ncmF5LTkwMCByb3VuZGVkLXQtbWQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctaW5kaWdvLTUwMCBmb2N1czpib3JkZXItaW5kaWdvLTUwMCBmb2N1czp6LTEwIHNtOnRleHQtc21cIlxyXG5cdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJFbWFpbCBhZGRyZXNzXCJcclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdHtlcnJvcnMuZW1haWw/LnR5cGUgPT09IFwicmVxdWlyZWRcIiAmJlxyXG5cdFx0XHRcdFx0XHRcdFx0XCJBIHZhbGlkIGVtYWlsIGlzIHJlcXVpcmVkXCJ9XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIiBjbGFzc05hbWU9XCJzci1vbmx5XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRQYXNzd29yZFxyXG5cdFx0XHRcdFx0XHRcdDwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdFx0XHR7Li4ucmVnaXN0ZXIoXCJwYXNzd29yZFwiLCB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHJlcXVpcmVkOiB0cnVlXHJcblx0XHRcdFx0XHRcdFx0XHR9KX1cclxuXHRcdFx0XHRcdFx0XHRcdGlkPVwicGFzc3dvcmRcIlxyXG5cdFx0XHRcdFx0XHRcdFx0bmFtZT1cInBhc3N3b3JkXCJcclxuXHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJwYXNzd29yZFwiXHJcblx0XHRcdFx0XHRcdFx0XHRhdXRvQ29tcGxldGU9XCJjdXJyZW50LXBhc3N3b3JkXCJcclxuXHRcdFx0XHRcdFx0XHRcdHJlcXVpcmVkXHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJhcHBlYXJhbmNlLW5vbmUgcm91bmRlZC1ub25lIHJlbGF0aXZlIGJsb2NrIHctZnVsbCBweC0zIHB5LTIgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCBwbGFjZWhvbGRlci1ncmF5LTUwMCB0ZXh0LWdyYXktOTAwIHJvdW5kZWQtYi1tZCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy1pbmRpZ28tNTAwIGZvY3VzOmJvcmRlci1pbmRpZ28tNTAwIGZvY3VzOnotMTAgc206dGV4dC1zbVwiXHJcblx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdHtlcnJvcnMubWVzc2FnZT8udHlwZSA9PT0gXCJyZXF1aXJlZFwiICYmXHJcblx0XHRcdFx0XHRcdFx0XHRcIkZpZWxkIHNob3VsZCBub3QgYmUgYmxhbmtcIn1cclxuXHRcdFx0XHRcdFx0XHR7ZXJyb3JzLm1lc3NhZ2U/LnR5cGUgPT09IFwiYmxhbmtfc3BhY2VcIiAmJlxyXG5cdFx0XHRcdFx0XHRcdFx0XCJGaWVsZCBpcyBibGFuay5cIn1cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHQ8YnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0dHlwZT1cInN1Ym1pdFwiXHJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiZ3JvdXAgcmVsYXRpdmUgdy1mdWxsIGZsZXgganVzdGlmeS1jZW50ZXIgcHktMiBweC00IGJvcmRlciBib3JkZXItdHJhbnNwYXJlbnQgdGV4dC1zbSBmb250LW1lZGl1bSByb3VuZGVkLW1kIHRleHQtd2hpdGUgYmctaW5kaWdvLTYwMCBob3ZlcjpiZy1pbmRpZ28tNzAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1vZmZzZXQtMiBmb2N1czpyaW5nLWluZGlnby01MDBcIj5cclxuXHRcdFx0XHRcdFx0XHRTaWduIGluXHJcblx0XHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9mb3JtPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==