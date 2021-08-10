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
    if (!!values.password.trim()) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9naW4uanMiXSwibmFtZXMiOlsiTG9naW4iLCJ1c2VGb3JtIiwicmVnaXN0ZXIiLCJoYW5kbGVTdWJtaXQiLCJzZXRFcnJvciIsImVycm9ycyIsImZvcm1TdGF0ZSIsIm9uU3VibWl0IiwidmFsdWVzIiwicGFzc3dvcmQiLCJ0cmltIiwiY29uc29sZSIsImxvZyIsInR5cGUiLCJyZXF1aXJlZCIsImVtYWlsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Q0FFQTs7QUFDQTtBQUNBO0NBRUE7QUFFQTs7QUFFZSxTQUFTQSxLQUFULEdBQWlCO0FBQUE7O0FBQUE7O0FBQUEsaUJBTTNCQyx3REFBTyxFQU5vQjtBQUFBLE1BRTlCQyxRQUY4QixZQUU5QkEsUUFGOEI7QUFBQSxNQUc5QkMsWUFIOEIsWUFHOUJBLFlBSDhCO0FBQUEsTUFJOUJDLFFBSjhCLFlBSTlCQSxRQUo4QjtBQUFBLE1BS2pCQyxNQUxpQixZQUs5QkMsU0FMOEIsQ0FLakJELE1BTGlCOztBQU8vQixNQUFNRSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxNQUFELEVBQVk7QUFDNUIsUUFBSSxDQUFDLENBQUNBLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsSUFBaEIsRUFBTixFQUE4QjtBQUM3QkMsYUFBTyxDQUFDQyxHQUFSLENBQVksT0FBWjtBQUNBLEtBRkQsTUFFTztBQUNOUixjQUFRLENBQUMsVUFBRCxFQUFhO0FBQUVTLFlBQUksRUFBRTtBQUFSLE9BQWIsQ0FBUjtBQUNBO0FBQ0QsR0FORDs7QUFPQSxzQkFDQztBQUFLLGFBQVMsRUFBQyxxRkFBZjtBQUFBLDJCQUNDO0FBQUssZUFBUyxFQUFDLDJCQUFmO0FBQUEsOEJBQ0M7QUFBQSwrQkFDQztBQUFJLG1CQUFTLEVBQUMsd0RBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREQsZUFNQztBQUNDLGdCQUFRLEVBQUVWLFlBQVksQ0FBQ0ksUUFBRCxDQUR2QjtBQUVDLGlCQUFTLEVBQUMsZ0JBRlg7QUFHQyxjQUFNLEVBQUMsR0FIUjtBQUlDLGNBQU0sRUFBQyxNQUpSO0FBQUEsZ0NBS0M7QUFBTyxjQUFJLEVBQUMsUUFBWjtBQUFxQixjQUFJLEVBQUMsVUFBMUI7QUFBcUMsc0JBQVksRUFBQztBQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUxELGVBTUM7QUFBSyxtQkFBUyxFQUFDLGtDQUFmO0FBQUEsa0NBQ0M7QUFBQSxvQ0FDQztBQUFPLHFCQUFPLEVBQUMsZUFBZjtBQUErQix1QkFBUyxFQUFDLFNBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURELGVBSUMsdUdBQ0tMLFFBQVEsQ0FBQyxPQUFELEVBQVU7QUFDckJZLHNCQUFRLEVBQUU7QUFEVyxhQUFWLENBRGI7QUFJQyxnQkFBRSxFQUFDLGVBSko7QUFLQyxrQkFBSSxFQUFDLE9BTE47QUFNQyxrQkFBSSxFQUFDLE9BTk47QUFPQywwQkFBWSxFQUFDLE9BUGQ7QUFRQyxzQkFBUSxNQVJUO0FBU0MsdUJBQVMsRUFBQyw0TkFUWDtBQVVDLHlCQUFXLEVBQUM7QUFWYjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUpELEVBZ0JFLGtCQUFBVCxNQUFNLENBQUNVLEtBQVAsZ0VBQWNGLElBQWQsTUFBdUIsVUFBdkIsSUFDQSwyQkFqQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURELGVBb0JDO0FBQUEsb0NBQ0M7QUFBTyxxQkFBTyxFQUFDLFVBQWY7QUFBMEIsdUJBQVMsRUFBQyxTQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERCxlQUlDLHVHQUNLWCxRQUFRLENBQUMsVUFBRCxFQUFhO0FBQ3hCWSxzQkFBUSxFQUFFO0FBRGMsYUFBYixDQURiO0FBSUMsZ0JBQUUsRUFBQyxVQUpKO0FBS0Msa0JBQUksRUFBQyxVQUxOO0FBTUMsa0JBQUksRUFBQyxVQU5OO0FBT0MsMEJBQVksRUFBQyxrQkFQZDtBQVFDLHNCQUFRLE1BUlQ7QUFTQyx1QkFBUyxFQUFDLDROQVRYO0FBVUMseUJBQVcsRUFBQztBQVZiO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBSkQsRUFnQkUscUJBQUFULE1BQU0sQ0FBQ0ksUUFBUCxzRUFBaUJJLElBQWpCLE1BQTBCLFVBQTFCLElBQ0EsMkJBakJGLEVBa0JFLHNCQUFBUixNQUFNLENBQUNJLFFBQVAsd0VBQWlCSSxJQUFqQixNQUEwQixhQUExQixJQUNBLGlCQW5CRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBcEJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFORCxlQWlEQztBQUFBLGlDQUNDO0FBQ0MsZ0JBQUksRUFBQyxRQUROO0FBRUMscUJBQVMsRUFBQyxxT0FGWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBakREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU5EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERDtBQW9FQTs7R0FsRnVCYixLO1VBTW5CQyxvRDs7O0tBTm1CRCxLIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2xvZ2luLmFkYzAxNTdjN2UyZWJlN2FmZGExLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHdpdGhTZXNzaW9uIGZyb20gXCIuLi9saWIvU2Vzc2lvbi5qc1wiO1xyXG4vLyBpbXBvcnQgYmNyeXB0IGZyb20gXCJiY3J5cHRqc1wiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gXCJyZWFjdC1ob29rLWZvcm1cIjtcclxuaW1wb3J0IHRvYXN0LCB7IFRvYXN0ZXIgfSBmcm9tIFwicmVhY3QtaG90LXRvYXN0XCI7XHJcbi8vIGltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xyXG5cclxuLy8gY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9naW4oKSB7XHJcblx0Y29uc3Qge1xyXG5cdFx0cmVnaXN0ZXIsXHJcblx0XHRoYW5kbGVTdWJtaXQsXHJcblx0XHRzZXRFcnJvcixcclxuXHRcdGZvcm1TdGF0ZTogeyBlcnJvcnMgfVxyXG5cdH0gPSB1c2VGb3JtKCk7XHJcblx0Y29uc3Qgb25TdWJtaXQgPSAodmFsdWVzKSA9PiB7XHJcblx0XHRpZiAoISF2YWx1ZXMucGFzc3dvcmQudHJpbSgpKSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwiV29ya3NcIik7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRzZXRFcnJvcihcInBhc3N3b3JkXCIsIHsgdHlwZTogXCJibGFua19zcGFjZVwiIH0pO1xyXG5cdFx0fVxyXG5cdH07XHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGJnLWdyYXktNTAgcHktMTIgcHgtNCBzbTpweC02IGxnOnB4LThcIj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtYXgtdy1tZCB3LWZ1bGwgc3BhY2UteS04XCI+XHJcblx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdDxoMiBjbGFzc05hbWU9XCJtdC02IHRleHQtY2VudGVyIHRleHQtM3hsIGZvbnQtZXh0cmFib2xkIHRleHQtZ3JheS05MDBcIj5cclxuXHRcdFx0XHRcdFx0U2lnbiBpbiB0byB5b3VyIGFjY291bnRcclxuXHRcdFx0XHRcdDwvaDI+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGZvcm1cclxuXHRcdFx0XHRcdG9uU3VibWl0PXtoYW5kbGVTdWJtaXQob25TdWJtaXQpfVxyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwibXQtOCBzcGFjZS15LTZcIlxyXG5cdFx0XHRcdFx0YWN0aW9uPVwiI1wiXHJcblx0XHRcdFx0XHRtZXRob2Q9XCJQT1NUXCI+XHJcblx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJyZW1lbWJlclwiIGRlZmF1bHRWYWx1ZT1cInRydWVcIiAvPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkLW1kIHNoYWRvdy1zbSAtc3BhY2UteS1weFwiPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxsYWJlbCBodG1sRm9yPVwiZW1haWwtYWRkcmVzc1wiIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5cclxuXHRcdFx0XHRcdFx0XHRcdEVtYWlsIGFkZHJlc3NcclxuXHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHRcdFx0ey4uLnJlZ2lzdGVyKFwiZW1haWxcIiwge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRyZXF1aXJlZDogdHJ1ZVxyXG5cdFx0XHRcdFx0XHRcdFx0fSl9XHJcblx0XHRcdFx0XHRcdFx0XHRpZD1cImVtYWlsLWFkZHJlc3NcIlxyXG5cdFx0XHRcdFx0XHRcdFx0bmFtZT1cImVtYWlsXCJcclxuXHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJlbWFpbFwiXHJcblx0XHRcdFx0XHRcdFx0XHRhdXRvQ29tcGxldGU9XCJlbWFpbFwiXHJcblx0XHRcdFx0XHRcdFx0XHRyZXF1aXJlZFxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiYXBwZWFyYW5jZS1ub25lIHJvdW5kZWQtbm9uZSByZWxhdGl2ZSBibG9jayB3LWZ1bGwgcHgtMyBweS0yIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcGxhY2Vob2xkZXItZ3JheS01MDAgdGV4dC1ncmF5LTkwMCByb3VuZGVkLXQtbWQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctaW5kaWdvLTUwMCBmb2N1czpib3JkZXItaW5kaWdvLTUwMCBmb2N1czp6LTEwIHNtOnRleHQtc21cIlxyXG5cdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJFbWFpbCBhZGRyZXNzXCJcclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdHtlcnJvcnMuZW1haWw/LnR5cGUgPT09IFwicmVxdWlyZWRcIiAmJlxyXG5cdFx0XHRcdFx0XHRcdFx0XCJBIHZhbGlkIGVtYWlsIGlzIHJlcXVpcmVkXCJ9XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIiBjbGFzc05hbWU9XCJzci1vbmx5XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRQYXNzd29yZFxyXG5cdFx0XHRcdFx0XHRcdDwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdFx0XHR7Li4ucmVnaXN0ZXIoXCJwYXNzd29yZFwiLCB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHJlcXVpcmVkOiB0cnVlXHJcblx0XHRcdFx0XHRcdFx0XHR9KX1cclxuXHRcdFx0XHRcdFx0XHRcdGlkPVwicGFzc3dvcmRcIlxyXG5cdFx0XHRcdFx0XHRcdFx0bmFtZT1cInBhc3N3b3JkXCJcclxuXHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJwYXNzd29yZFwiXHJcblx0XHRcdFx0XHRcdFx0XHRhdXRvQ29tcGxldGU9XCJjdXJyZW50LXBhc3N3b3JkXCJcclxuXHRcdFx0XHRcdFx0XHRcdHJlcXVpcmVkXHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJhcHBlYXJhbmNlLW5vbmUgcm91bmRlZC1ub25lIHJlbGF0aXZlIGJsb2NrIHctZnVsbCBweC0zIHB5LTIgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCBwbGFjZWhvbGRlci1ncmF5LTUwMCB0ZXh0LWdyYXktOTAwIHJvdW5kZWQtYi1tZCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy1pbmRpZ28tNTAwIGZvY3VzOmJvcmRlci1pbmRpZ28tNTAwIGZvY3VzOnotMTAgc206dGV4dC1zbVwiXHJcblx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdHtlcnJvcnMucGFzc3dvcmQ/LnR5cGUgPT09IFwicmVxdWlyZWRcIiAmJlxyXG5cdFx0XHRcdFx0XHRcdFx0XCJGaWVsZCBzaG91bGQgbm90IGJlIGJsYW5rXCJ9XHJcblx0XHRcdFx0XHRcdFx0e2Vycm9ycy5wYXNzd29yZD8udHlwZSA9PT0gXCJibGFua19zcGFjZVwiICYmXHJcblx0XHRcdFx0XHRcdFx0XHRcIkZpZWxkIGlzIGJsYW5rLlwifVxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdDxidXR0b25cclxuXHRcdFx0XHRcdFx0XHR0eXBlPVwic3VibWl0XCJcclxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJncm91cCByZWxhdGl2ZSB3LWZ1bGwgZmxleCBqdXN0aWZ5LWNlbnRlciBweS0yIHB4LTQgYm9yZGVyIGJvcmRlci10cmFuc3BhcmVudCB0ZXh0LXNtIGZvbnQtbWVkaXVtIHJvdW5kZWQtbWQgdGV4dC13aGl0ZSBiZy1pbmRpZ28tNjAwIGhvdmVyOmJnLWluZGlnby03MDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLW9mZnNldC0yIGZvY3VzOnJpbmctaW5kaWdvLTUwMFwiPlxyXG5cdFx0XHRcdFx0XHRcdFNpZ24gaW5cclxuXHRcdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Zvcm0+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9