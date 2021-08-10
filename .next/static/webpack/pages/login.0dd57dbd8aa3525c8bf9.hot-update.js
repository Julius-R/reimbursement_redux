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

  var _errors$email, _errors$password, _errors$password2;

  var _useForm = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_6__.useForm)(),
      register = _useForm.register,
      handleSubmit = _useForm.handleSubmit,
      setError = _useForm.setError,
      errors = _useForm.formState.errors;

  var onSubmit = function onSubmit(values) {
    if (!!values.message.trim()) {
      console.log("Works");
    } else {
      setError("password", {
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
          lineNumber: 30,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
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
          lineNumber: 39,
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
              lineNumber: 42,
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
              lineNumber: 45,
              columnNumber: 8
            }, this), ((_errors$email = errors.email) === null || _errors$email === void 0 ? void 0 : _errors$email.type) === "required" && "A valid email is required"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("label", {
              htmlFor: "password",
              className: "sr-only",
              children: "Password"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 61,
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
              lineNumber: 64,
              columnNumber: 8
            }, this), ((_errors$password = errors.password) === null || _errors$password === void 0 ? void 0 : _errors$password.type) === "required" && "Field should not be blank", ((_errors$password2 = errors.password) === null || _errors$password2 === void 0 ? void 0 : _errors$password2.type) === "blank_space" && "Field is blank."]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
            type: "submit",
            className: "group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
            children: "Sign in"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 7
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 4
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 27,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9naW4uanMiXSwibmFtZXMiOlsiTG9naW4iLCJ1c2VGb3JtIiwicmVnaXN0ZXIiLCJoYW5kbGVTdWJtaXQiLCJzZXRFcnJvciIsImVycm9ycyIsImZvcm1TdGF0ZSIsIm9uU3VibWl0IiwidmFsdWVzIiwibWVzc2FnZSIsInRyaW0iLCJjb25zb2xlIiwibG9nIiwidHlwZSIsInJlcXVpcmVkIiwiZW1haWwiLCJwYXNzd29yZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0NBRUE7O0FBQ0E7QUFDQTtDQUVBO0FBRUE7O0FBRWUsU0FBU0EsS0FBVCxHQUFpQjtBQUFBOztBQUFBOztBQUFBLGlCQU0zQkMsd0RBQU8sRUFOb0I7QUFBQSxNQUU5QkMsUUFGOEIsWUFFOUJBLFFBRjhCO0FBQUEsTUFHOUJDLFlBSDhCLFlBRzlCQSxZQUg4QjtBQUFBLE1BSTlCQyxRQUo4QixZQUk5QkEsUUFKOEI7QUFBQSxNQUtqQkMsTUFMaUIsWUFLOUJDLFNBTDhCLENBS2pCRCxNQUxpQjs7QUFPL0IsTUFBTUUsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsTUFBRCxFQUFZO0FBQzVCLFFBQUksQ0FBQyxDQUFDQSxNQUFNLENBQUNDLE9BQVAsQ0FBZUMsSUFBZixFQUFOLEVBQTZCO0FBQzVCQyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaO0FBQ0EsS0FGRCxNQUVPO0FBQ05SLGNBQVEsQ0FBQyxVQUFELEVBQWE7QUFBRVMsWUFBSSxFQUFFO0FBQVIsT0FBYixDQUFSO0FBQ0E7QUFDRCxHQU5EOztBQU9BLHNCQUNDO0FBQUssYUFBUyxFQUFDLHFGQUFmO0FBQUEsMkJBQ0M7QUFBSyxlQUFTLEVBQUMsMkJBQWY7QUFBQSw4QkFDQztBQUFBLCtCQUNDO0FBQUksbUJBQVMsRUFBQyx3REFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERCxlQU1DO0FBQ0MsZ0JBQVEsRUFBRVYsWUFBWSxDQUFDSSxRQUFELENBRHZCO0FBRUMsaUJBQVMsRUFBQyxnQkFGWDtBQUdDLGNBQU0sRUFBQyxHQUhSO0FBSUMsY0FBTSxFQUFDLE1BSlI7QUFBQSxnQ0FLQztBQUFPLGNBQUksRUFBQyxRQUFaO0FBQXFCLGNBQUksRUFBQyxVQUExQjtBQUFxQyxzQkFBWSxFQUFDO0FBQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTEQsZUFNQztBQUFLLG1CQUFTLEVBQUMsa0NBQWY7QUFBQSxrQ0FDQztBQUFBLG9DQUNDO0FBQU8scUJBQU8sRUFBQyxlQUFmO0FBQStCLHVCQUFTLEVBQUMsU0FBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREQsZUFJQyx1R0FDS0wsUUFBUSxDQUFDLE9BQUQsRUFBVTtBQUNyQlksc0JBQVEsRUFBRTtBQURXLGFBQVYsQ0FEYjtBQUlDLGdCQUFFLEVBQUMsZUFKSjtBQUtDLGtCQUFJLEVBQUMsT0FMTjtBQU1DLGtCQUFJLEVBQUMsT0FOTjtBQU9DLDBCQUFZLEVBQUMsT0FQZDtBQVFDLHNCQUFRLE1BUlQ7QUFTQyx1QkFBUyxFQUFDLDROQVRYO0FBVUMseUJBQVcsRUFBQztBQVZiO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBSkQsRUFnQkUsa0JBQUFULE1BQU0sQ0FBQ1UsS0FBUCxnRUFBY0YsSUFBZCxNQUF1QixVQUF2QixJQUNBLDJCQWpCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREQsZUFvQkM7QUFBQSxvQ0FDQztBQUFPLHFCQUFPLEVBQUMsVUFBZjtBQUEwQix1QkFBUyxFQUFDLFNBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURELGVBSUMsdUdBQ0tYLFFBQVEsQ0FBQyxVQUFELEVBQWE7QUFDeEJZLHNCQUFRLEVBQUU7QUFEYyxhQUFiLENBRGI7QUFJQyxnQkFBRSxFQUFDLFVBSko7QUFLQyxrQkFBSSxFQUFDLFVBTE47QUFNQyxrQkFBSSxFQUFDLFVBTk47QUFPQywwQkFBWSxFQUFDLGtCQVBkO0FBUUMsc0JBQVEsTUFSVDtBQVNDLHVCQUFTLEVBQUMsNE5BVFg7QUFVQyx5QkFBVyxFQUFDO0FBVmI7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFKRCxFQWdCRSxxQkFBQVQsTUFBTSxDQUFDVyxRQUFQLHNFQUFpQkgsSUFBakIsTUFBMEIsVUFBMUIsSUFDQSwyQkFqQkYsRUFrQkUsc0JBQUFSLE1BQU0sQ0FBQ1csUUFBUCx3RUFBaUJILElBQWpCLE1BQTBCLGFBQTFCLElBQ0EsaUJBbkJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFwQkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQU5ELGVBaURDO0FBQUEsaUNBQ0M7QUFDQyxnQkFBSSxFQUFDLFFBRE47QUFFQyxxQkFBUyxFQUFDLHFPQUZYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFqREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBb0VBOztHQWxGdUJiLEs7VUFNbkJDLG9EOzs7S0FObUJELEsiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbG9naW4uMGRkNTdkYmQ4YWEzNTI1YzhiZjkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgd2l0aFNlc3Npb24gZnJvbSBcIi4uL2xpYi9TZXNzaW9uLmpzXCI7XHJcbi8vIGltcG9ydCBiY3J5cHQgZnJvbSBcImJjcnlwdGpzXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSBcInJlYWN0LWhvb2stZm9ybVwiO1xyXG5pbXBvcnQgdG9hc3QsIHsgVG9hc3RlciB9IGZyb20gXCJyZWFjdC1ob3QtdG9hc3RcIjtcclxuLy8gaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XHJcblxyXG4vLyBjb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbigpIHtcclxuXHRjb25zdCB7XHJcblx0XHRyZWdpc3RlcixcclxuXHRcdGhhbmRsZVN1Ym1pdCxcclxuXHRcdHNldEVycm9yLFxyXG5cdFx0Zm9ybVN0YXRlOiB7IGVycm9ycyB9XHJcblx0fSA9IHVzZUZvcm0oKTtcclxuXHRjb25zdCBvblN1Ym1pdCA9ICh2YWx1ZXMpID0+IHtcclxuXHRcdGlmICghIXZhbHVlcy5tZXNzYWdlLnRyaW0oKSkge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcIldvcmtzXCIpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0c2V0RXJyb3IoXCJwYXNzd29yZFwiLCB7IHR5cGU6IFwiYmxhbmtfc3BhY2VcIiB9KTtcclxuXHRcdH1cclxuXHR9O1xyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBiZy1ncmF5LTUwIHB5LTEyIHB4LTQgc206cHgtNiBsZzpweC04XCI+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibWF4LXctbWQgdy1mdWxsIHNwYWNlLXktOFwiPlxyXG5cdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHQ8aDIgY2xhc3NOYW1lPVwibXQtNiB0ZXh0LWNlbnRlciB0ZXh0LTN4bCBmb250LWV4dHJhYm9sZCB0ZXh0LWdyYXktOTAwXCI+XHJcblx0XHRcdFx0XHRcdFNpZ24gaW4gdG8geW91ciBhY2NvdW50XHJcblx0XHRcdFx0XHQ8L2gyPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxmb3JtXHJcblx0XHRcdFx0XHRvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uU3VibWl0KX1cclxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cIm10LTggc3BhY2UteS02XCJcclxuXHRcdFx0XHRcdGFjdGlvbj1cIiNcIlxyXG5cdFx0XHRcdFx0bWV0aG9kPVwiUE9TVFwiPlxyXG5cdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwicmVtZW1iZXJcIiBkZWZhdWx0VmFsdWU9XCJ0cnVlXCIgLz5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm91bmRlZC1tZCBzaGFkb3ctc20gLXNwYWNlLXktcHhcIj5cclxuXHRcdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0XHQ8bGFiZWwgaHRtbEZvcj1cImVtYWlsLWFkZHJlc3NcIiBjbGFzc05hbWU9XCJzci1vbmx5XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRFbWFpbCBhZGRyZXNzXHJcblx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0XHRcdHsuLi5yZWdpc3RlcihcImVtYWlsXCIsIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0cmVxdWlyZWQ6IHRydWVcclxuXHRcdFx0XHRcdFx0XHRcdH0pfVxyXG5cdFx0XHRcdFx0XHRcdFx0aWQ9XCJlbWFpbC1hZGRyZXNzXCJcclxuXHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJlbWFpbFwiXHJcblx0XHRcdFx0XHRcdFx0XHR0eXBlPVwiZW1haWxcIlxyXG5cdFx0XHRcdFx0XHRcdFx0YXV0b0NvbXBsZXRlPVwiZW1haWxcIlxyXG5cdFx0XHRcdFx0XHRcdFx0cmVxdWlyZWRcclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImFwcGVhcmFuY2Utbm9uZSByb3VuZGVkLW5vbmUgcmVsYXRpdmUgYmxvY2sgdy1mdWxsIHB4LTMgcHktMiBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHBsYWNlaG9sZGVyLWdyYXktNTAwIHRleHQtZ3JheS05MDAgcm91bmRlZC10LW1kIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLWluZGlnby01MDAgZm9jdXM6Ym9yZGVyLWluZGlnby01MDAgZm9jdXM6ei0xMCBzbTp0ZXh0LXNtXCJcclxuXHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiRW1haWwgYWRkcmVzc1wiXHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHR7ZXJyb3JzLmVtYWlsPy50eXBlID09PSBcInJlcXVpcmVkXCIgJiZcclxuXHRcdFx0XHRcdFx0XHRcdFwiQSB2YWxpZCBlbWFpbCBpcyByZXF1aXJlZFwifVxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0XHQ8bGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkXCIgY2xhc3NOYW1lPVwic3Itb25seVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0UGFzc3dvcmRcclxuXHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHRcdFx0ey4uLnJlZ2lzdGVyKFwicGFzc3dvcmRcIiwge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRyZXF1aXJlZDogdHJ1ZVxyXG5cdFx0XHRcdFx0XHRcdFx0fSl9XHJcblx0XHRcdFx0XHRcdFx0XHRpZD1cInBhc3N3b3JkXCJcclxuXHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJwYXNzd29yZFwiXHJcblx0XHRcdFx0XHRcdFx0XHR0eXBlPVwicGFzc3dvcmRcIlxyXG5cdFx0XHRcdFx0XHRcdFx0YXV0b0NvbXBsZXRlPVwiY3VycmVudC1wYXNzd29yZFwiXHJcblx0XHRcdFx0XHRcdFx0XHRyZXF1aXJlZFxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiYXBwZWFyYW5jZS1ub25lIHJvdW5kZWQtbm9uZSByZWxhdGl2ZSBibG9jayB3LWZ1bGwgcHgtMyBweS0yIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcGxhY2Vob2xkZXItZ3JheS01MDAgdGV4dC1ncmF5LTkwMCByb3VuZGVkLWItbWQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctaW5kaWdvLTUwMCBmb2N1czpib3JkZXItaW5kaWdvLTUwMCBmb2N1czp6LTEwIHNtOnRleHQtc21cIlxyXG5cdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHR7ZXJyb3JzLnBhc3N3b3JkPy50eXBlID09PSBcInJlcXVpcmVkXCIgJiZcclxuXHRcdFx0XHRcdFx0XHRcdFwiRmllbGQgc2hvdWxkIG5vdCBiZSBibGFua1wifVxyXG5cdFx0XHRcdFx0XHRcdHtlcnJvcnMucGFzc3dvcmQ/LnR5cGUgPT09IFwiYmxhbmtfc3BhY2VcIiAmJlxyXG5cdFx0XHRcdFx0XHRcdFx0XCJGaWVsZCBpcyBibGFuay5cIn1cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHQ8YnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0dHlwZT1cInN1Ym1pdFwiXHJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiZ3JvdXAgcmVsYXRpdmUgdy1mdWxsIGZsZXgganVzdGlmeS1jZW50ZXIgcHktMiBweC00IGJvcmRlciBib3JkZXItdHJhbnNwYXJlbnQgdGV4dC1zbSBmb250LW1lZGl1bSByb3VuZGVkLW1kIHRleHQtd2hpdGUgYmctaW5kaWdvLTYwMCBob3ZlcjpiZy1pbmRpZ28tNzAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1vZmZzZXQtMiBmb2N1czpyaW5nLWluZGlnby01MDBcIj5cclxuXHRcdFx0XHRcdFx0XHRTaWduIGluXHJcblx0XHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9mb3JtPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==