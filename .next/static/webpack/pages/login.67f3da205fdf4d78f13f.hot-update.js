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
        lineNumber: 43,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "max-w-md w-full space-y-8",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h2", {
          className: "mt-6 text-center text-3xl font-extrabold text-gray-900",
          children: "Sign in to your account"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
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
          lineNumber: 56,
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
              lineNumber: 59,
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
              lineNumber: 62,
              columnNumber: 8
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: "my-4",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("label", {
              htmlFor: "password",
              className: "sr-only",
              children: "Password"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 76,
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
              lineNumber: 79,
              columnNumber: 8
            }, this), ((_errors$password = errors.password) === null || _errors$password === void 0 ? void 0 : _errors$password.type) === "required" && "Field should not be blank", ((_errors$password2 = errors.password) === null || _errors$password2 === void 0 ? void 0 : _errors$password2.type) === "blank_space" && "Field is blank."]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
            type: "submit",
            className: "group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
            children: "Sign in"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 7
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 41,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9naW4uanMiXSwibmFtZXMiOlsiTG9naW4iLCJ1c2VGb3JtIiwicmVnaXN0ZXIiLCJoYW5kbGVTdWJtaXQiLCJzZXRFcnJvciIsImVycm9ycyIsImZvcm1TdGF0ZSIsIm9uU3VibWl0IiwidmFsdWVzIiwicGFzc3dvcmQiLCJ0cmltIiwiY29uc29sZSIsImxvZyIsImZldGNoIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJtZXRob2QiLCJoZWFkZXJzIiwidGhlbiIsInJlcyIsInN0YXR1cyIsInRvYXN0IiwicmVzZXQiLCJyb3V0ZXIiLCJwdXNoIiwidHlwZSIsInJlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0NBRUE7O0FBQ0E7QUFDQTtDQUVBO0FBRUE7O0FBRWUsU0FBU0EsS0FBVCxHQUFpQjtBQUFBOztBQUFBOztBQUFBLGlCQU0zQkMsd0RBQU8sRUFOb0I7QUFBQSxNQUU5QkMsUUFGOEIsWUFFOUJBLFFBRjhCO0FBQUEsTUFHOUJDLFlBSDhCLFlBRzlCQSxZQUg4QjtBQUFBLE1BSTlCQyxRQUo4QixZQUk5QkEsUUFKOEI7QUFBQSxNQUtqQkMsTUFMaUIsWUFLOUJDLFNBTDhCLENBS2pCRCxNQUxpQjs7QUFPL0IsTUFBTUUsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsTUFBRCxFQUFZO0FBQzVCLFFBQUksQ0FBQyxDQUFDQSxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLElBQWhCLEVBQU4sRUFBOEI7QUFDN0JDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZSixNQUFaO0FBQ0FLLFdBQUssQ0FBQyxZQUFELEVBQWU7QUFDbkJDLFlBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWVSLE1BQWYsQ0FEYTtBQUVuQlMsY0FBTSxFQUFFLE1BRlc7QUFHbkJDLGVBQU8sRUFBRTtBQUNSLDBCQUFnQjtBQURSO0FBSFUsT0FBZixDQUFMLENB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QUFBQTtBQUFBLGdCQS9DRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FORDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERDtBQXFFQTs7R0FqR3VCMUIsSztVQU1uQkMsb0Q7OztLQU5tQkQsSyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9sb2dpbi42N2YzZGEyMDVmZGY0ZDc4ZjEzZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB3aXRoU2Vzc2lvbiBmcm9tIFwiLi4vbGliL1Nlc3Npb24uanNcIjtcclxuLy8gaW1wb3J0IGJjcnlwdCBmcm9tIFwiYmNyeXB0anNcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHVzZUZvcm0gfSBmcm9tIFwicmVhY3QtaG9vay1mb3JtXCI7XHJcbmltcG9ydCB0b2FzdCwgeyBUb2FzdGVyIH0gZnJvbSBcInJlYWN0LWhvdC10b2FzdFwiO1xyXG4vLyBpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcclxuXHJcbi8vIGNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luKCkge1xyXG5cdGNvbnN0IHtcclxuXHRcdHJlZ2lzdGVyLFxyXG5cdFx0aGFuZGxlU3VibWl0LFxyXG5cdFx0c2V0RXJyb3IsXHJcblx0XHRmb3JtU3RhdGU6IHsgZXJyb3JzIH1cclxuXHR9ID0gdXNlRm9ybSgpO1xyXG5cdGNvbnN0IG9uU3VibWl0ID0gKHZhbHVlcykgPT4ge1xyXG5cdFx0aWYgKCEhdmFsdWVzLnBhc3N3b3JkLnRyaW0oKSkge1xyXG5cdFx0XHRjb25zb2xlLmxvZyh2YWx1ZXMpO1xyXG5cdFx0XHRmZXRjaChcIi9hcGkvbG9naW5cIiwge1xyXG5cdFx0XHRcdGJvZHk6IEpTT04uc3RyaW5naWZ5KHZhbHVlcyksXHJcblx0XHRcdFx0bWV0aG9kOiBcIlBPU1RcIixcclxuXHRcdFx0XHRoZWFkZXJzOiB7XHJcblx0XHRcdFx0XHRcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSkudGhlbigocmVzKSA9PiB7XHJcblx0XHRcdFx0aWYgKHJlcy5zdGF0dXMgPT09IDQwMSkge1xyXG5cdFx0XHRcdFx0dG9hc3QuZXJyb3IoXCJVc2VybmFtZSBvciBwYXNzd29yZCB3YXMgaW52YWxpZCFcIik7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHJlc2V0KCk7XHJcblx0XHRcdFx0XHRyb3V0ZXIucHVzaChcIi9cIik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHNldEVycm9yKFwicGFzc3dvcmRcIiwgeyB0eXBlOiBcImJsYW5rX3NwYWNlXCIgfSk7XHJcblx0XHR9XHJcblx0fTtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgYmctZ3JheS01MCBweS0xMiBweC00IHNtOnB4LTYgbGc6cHgtOFwiPlxyXG5cdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdDxUb2FzdGVyIHBvc2l0aW9uPVwidG9wLXJpZ2h0XCIgLz5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibWF4LXctbWQgdy1mdWxsIHNwYWNlLXktOFwiPlxyXG5cdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHQ8aDIgY2xhc3NOYW1lPVwibXQtNiB0ZXh0LWNlbnRlciB0ZXh0LTN4bCBmb250LWV4dHJhYm9sZCB0ZXh0LWdyYXktOTAwXCI+XHJcblx0XHRcdFx0XHRcdFNpZ24gaW4gdG8geW91ciBhY2NvdW50XHJcblx0XHRcdFx0XHQ8L2gyPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxmb3JtXHJcblx0XHRcdFx0XHRvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uU3VibWl0KX1cclxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cIm10LTggc3BhY2UteS02XCJcclxuXHRcdFx0XHRcdGFjdGlvbj1cIiNcIlxyXG5cdFx0XHRcdFx0bWV0aG9kPVwiUE9TVFwiPlxyXG5cdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwicmVtZW1iZXJcIiBkZWZhdWx0VmFsdWU9XCJ0cnVlXCIgLz5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm91bmRlZC1tZCBzaGFkb3ctc20gLXNwYWNlLXktcHhcIj5cclxuXHRcdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0XHQ8bGFiZWwgaHRtbEZvcj1cImVtYWlsLWFkZHJlc3NcIiBjbGFzc05hbWU9XCJzci1vbmx5XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRFbWFpbCBhZGRyZXNzXHJcblx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0XHRcdHsuLi5yZWdpc3RlcihcImVtYWlsXCIsIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0cmVxdWlyZWQ6IHRydWVcclxuXHRcdFx0XHRcdFx0XHRcdH0pfVxyXG5cdFx0XHRcdFx0XHRcdFx0aWQ9XCJlbWFpbC1hZGRyZXNzXCJcclxuXHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJlbWFpbFwiXHJcblx0XHRcdFx0XHRcdFx0XHR0eXBlPVwiZW1haWxcIlxyXG5cdFx0XHRcdFx0XHRcdFx0YXV0b0NvbXBsZXRlPVwiZW1haWxcIlxyXG5cdFx0XHRcdFx0XHRcdFx0cmVxdWlyZWRcclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImFwcGVhcmFuY2Utbm9uZSByb3VuZGVkLW5vbmUgcmVsYXRpdmUgYmxvY2sgdy1mdWxsIHB4LTMgcHktMiBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHBsYWNlaG9sZGVyLWdyYXktNTAwIHRleHQtZ3JheS05MDAgcm91bmRlZC10LW1kIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLWluZGlnby01MDAgZm9jdXM6Ym9yZGVyLWluZGlnby01MDAgZm9jdXM6ei0xMCBzbTp0ZXh0LXNtXCJcclxuXHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiRW1haWwgYWRkcmVzc1wiXHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibXktNFwiPlxyXG5cdFx0XHRcdFx0XHRcdDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIiBjbGFzc05hbWU9XCJzci1vbmx5XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRQYXNzd29yZFxyXG5cdFx0XHRcdFx0XHRcdDwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdFx0XHR7Li4ucmVnaXN0ZXIoXCJwYXNzd29yZFwiLCB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHJlcXVpcmVkOiB0cnVlXHJcblx0XHRcdFx0XHRcdFx0XHR9KX1cclxuXHRcdFx0XHRcdFx0XHRcdGlkPVwicGFzc3dvcmRcIlxyXG5cdFx0XHRcdFx0XHRcdFx0bmFtZT1cInBhc3N3b3JkXCJcclxuXHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJwYXNzd29yZFwiXHJcblx0XHRcdFx0XHRcdFx0XHRhdXRvQ29tcGxldGU9XCJjdXJyZW50LXBhc3N3b3JkXCJcclxuXHRcdFx0XHRcdFx0XHRcdHJlcXVpcmVkXHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJhcHBlYXJhbmNlLW5vbmUgcm91bmRlZC1ub25lIHJlbGF0aXZlIGJsb2NrIHctZnVsbCBweC0zIHB5LTIgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCBwbGFjZWhvbGRlci1ncmF5LTUwMCB0ZXh0LWdyYXktOTAwIHJvdW5kZWQtYi1tZCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy1pbmRpZ28tNTAwIGZvY3VzOmJvcmRlci1pbmRpZ28tNTAwIGZvY3VzOnotMTAgc206dGV4dC1zbVwiXHJcblx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdHtlcnJvcnMucGFzc3dvcmQ/LnR5cGUgPT09IFwicmVxdWlyZWRcIiAmJlxyXG5cdFx0XHRcdFx0XHRcdFx0XCJGaWVsZCBzaG91bGQgbm90IGJlIGJsYW5rXCJ9XHJcblx0XHRcdFx0XHRcdFx0e2Vycm9ycy5wYXNzd29yZD8udHlwZSA9PT0gXCJibGFua19zcGFjZVwiICYmXHJcblx0XHRcdFx0XHRcdFx0XHRcIkZpZWxkIGlzIGJsYW5rLlwifVxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdDxidXR0b25cclxuXHRcdFx0XHRcdFx0XHR0eXBlPVwic3VibWl0XCJcclxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJncm91cCByZWxhdGl2ZSB3LWZ1bGwgZmxleCBqdXN0aWZ5LWNlbnRlciBweS0yIHB4LTQgYm9yZGVyIGJvcmRlci10cmFuc3BhcmVudCB0ZXh0LXNtIGZvbnQtbWVkaXVtIHJvdW5kZWQtbWQgdGV4dC13aGl0ZSBiZy1pbmRpZ28tNjAwIGhvdmVyOmJnLWluZGlnby03MDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLW9mZnNldC0yIGZvY3VzOnJpbmctaW5kaWdvLTUwMFwiPlxyXG5cdFx0XHRcdFx0XHRcdFNpZ24gaW5cclxuXHRcdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Zvcm0+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9