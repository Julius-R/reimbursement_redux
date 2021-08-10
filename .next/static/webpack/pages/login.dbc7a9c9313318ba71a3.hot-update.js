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

  var _errors$password, _errors$password2;

  var _useForm = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_6__.useForm)(),
      register = _useForm.register,
      handleSubmit = _useForm.handleSubmit,
      setError = _useForm.setError,
      errors = _useForm.formState.errors;

  var onSubmit = function onSubmit(values) {
    if (!!values.password.trim()) {
      console.log(values); // fetch("/api/login", {
      // 	body: JSON.stringify(values),
      // 	method: "POST",
      // 	headers: {
      // 		"Content-Type": "application/json"
      // 	}
      // }).then((res) => {
      // 	console.log(res.json());
      // });
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
          lineNumber: 39,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
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
          lineNumber: 48,
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
              lineNumber: 51,
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
              lineNumber: 54,
              columnNumber: 8
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: "my-4",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("label", {
              htmlFor: "password",
              className: "sr-only",
              children: "Password"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 68,
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
              lineNumber: 71,
              columnNumber: 8
            }, this), ((_errors$password = errors.password) === null || _errors$password === void 0 ? void 0 : _errors$password.type) === "required" && "Field should not be blank", ((_errors$password2 = errors.password) === null || _errors$password2 === void 0 ? void 0 : _errors$password2.type) === "blank_space" && "Field is blank."]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
            type: "submit",
            className: "group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
            children: "Sign in"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 7
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 4
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 36,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9naW4uanMiXSwibmFtZXMiOlsiTG9naW4iLCJ1c2VGb3JtIiwicmVnaXN0ZXIiLCJoYW5kbGVTdWJtaXQiLCJzZXRFcnJvciIsImVycm9ycyIsImZvcm1TdGF0ZSIsIm9uU3VibWl0IiwidmFsdWVzIiwicGFzc3dvcmQiLCJ0cmltIiwiY29uc29sZSIsImxvZyIsInR5cGUiLCJyZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0NBRUE7O0FBQ0E7QUFDQTtDQUVBO0FBRUE7O0FBRWUsU0FBU0EsS0FBVCxHQUFpQjtBQUFBOztBQUFBOztBQUFBLGlCQU0zQkMsd0RBQU8sRUFOb0I7QUFBQSxNQUU5QkMsUUFGOEIsWUFFOUJBLFFBRjhCO0FBQUEsTUFHOUJDLFlBSDhCLFlBRzlCQSxZQUg4QjtBQUFBLE1BSTlCQyxRQUo4QixZQUk5QkEsUUFKOEI7QUFBQSxNQUtqQkMsTUFMaUIsWUFLOUJDLFNBTDhCLENBS2pCRCxNQUxpQjs7QUFPL0IsTUFBTUUsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsTUFBRCxFQUFZO0FBQzVCLFFBQUksQ0FBQyxDQUFDQSxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLElBQWhCLEVBQU4sRUFBOEI7QUFDN0JDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZSixNQUFaLEVBRDZCLENBRTdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBWEQsTUFXTztBQUNOSixjQUFRLENBQUMsVUFBRCxFQUFhO0FBQUVTLFlBQUksRUFBRTtBQUFSLE9BQWIsQ0FBUjtBQUNBO0FBQ0QsR0FmRDs7QUFnQkEsc0JBQ0M7QUFBSyxhQUFTLEVBQUMscUZBQWY7QUFBQSwyQkFDQztBQUFLLGVBQVMsRUFBQywyQkFBZjtBQUFBLDhCQUNDO0FBQUEsK0JBQ0M7QUFBSSxtQkFBUyxFQUFDLHdEQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURELGVBTUM7QUFDQyxnQkFBUSxFQUFFVixZQUFZLENBQUNJLFFBQUQsQ0FEdkI7QUFFQyxpQkFBUyxFQUFDLGdCQUZYO0FBR0MsY0FBTSxFQUFDLEdBSFI7QUFJQyxjQUFNLEVBQUMsTUFKUjtBQUFBLGdDQUtDO0FBQU8sY0FBSSxFQUFDLFFBQVo7QUFBcUIsY0FBSSxFQUFDLFVBQTFCO0FBQXFDLHNCQUFZLEVBQUM7QUFBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFMRCxlQU1DO0FBQUssbUJBQVMsRUFBQyxrQ0FBZjtBQUFBLGtDQUNDO0FBQUEsb0NBQ0M7QUFBTyxxQkFBTyxFQUFDLGVBQWY7QUFBK0IsdUJBQVMsRUFBQyxTQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERCxlQUlDLHVHQUNLTCxRQUFRLENBQUMsT0FBRCxFQUFVO0FBQ3JCWSxzQkFBUSxFQUFFO0FBRFcsYUFBVixDQURiO0FBSUMsZ0JBQUUsRUFBQyxlQUpKO0FBS0Msa0JBQUksRUFBQyxPQUxOO0FBTUMsa0JBQUksRUFBQyxPQU5OO0FBT0MsMEJBQVksRUFBQyxPQVBkO0FBUUMsc0JBQVEsTUFSVDtBQVNDLHVCQUFTLEVBQUMsNE5BVFg7QUFVQyx5QkFBVyxFQUFDO0FBVmI7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFKRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREQsZUFrQkM7QUFBSyxxQkFBUyxFQUFDLE1BQWY7QUFBQSxvQ0FDQztBQUFPLHFCQUFPLEVBQUMsVUFBZjtBQUEwQix1QkFBUyxFQUFDLFNBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURELGVBSUMsdUdBQ0taLFFBQVEsQ0FBQyxVQUFELEVBQWE7QUFDeEJZLHNCQUFRLEVBQUU7QUFEYyxhQUFiLENBRGI7QUFJQyxnQkFBRSxFQUFDLFVBSko7QUFLQyxrQkFBSSxFQUFDLFVBTE47QUFNQyxrQkFBSSxFQUFDLFVBTk47QUFPQywwQkFBWSxFQUFDLGtCQVBkO0FBUUMsc0JBQVEsTUFSVDtBQVNDLHVCQUFTLEVBQUMsNE5BVFg7QUFVQyx5QkFBVyxFQUFDO0FBVmI7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFKRCxFQWdCRSxxQkFBQVQsTUFBTSxDQUFDSSxRQUFQLHNFQUFpQkksSUFBakIsTUFBMEIsVUFBMUIsSUFDQSwyQkFqQkYsRUFrQkUsc0JBQUFSLE1BQU0sQ0FBQ0ksUUFBUCx3RUFBaUJJLElBQWpCLE1BQTBCLGFBQTFCLElBQ0EsaUJBbkJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFsQkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQU5ELGVBK0NDO0FBQUEsaUNBQ0M7QUFDQyxnQkFBSSxFQUFDLFFBRE47QUFFQyxxQkFBUyxFQUFDLHFPQUZYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkEvQ0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBa0VBOztHQXpGdUJiLEs7VUFNbkJDLG9EOzs7S0FObUJELEsiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbG9naW4uZGJjN2E5YzkzMTMzMThiYTcxYTMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgd2l0aFNlc3Npb24gZnJvbSBcIi4uL2xpYi9TZXNzaW9uLmpzXCI7XHJcbi8vIGltcG9ydCBiY3J5cHQgZnJvbSBcImJjcnlwdGpzXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSBcInJlYWN0LWhvb2stZm9ybVwiO1xyXG5pbXBvcnQgdG9hc3QsIHsgVG9hc3RlciB9IGZyb20gXCJyZWFjdC1ob3QtdG9hc3RcIjtcclxuLy8gaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XHJcblxyXG4vLyBjb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbigpIHtcclxuXHRjb25zdCB7XHJcblx0XHRyZWdpc3RlcixcclxuXHRcdGhhbmRsZVN1Ym1pdCxcclxuXHRcdHNldEVycm9yLFxyXG5cdFx0Zm9ybVN0YXRlOiB7IGVycm9ycyB9XHJcblx0fSA9IHVzZUZvcm0oKTtcclxuXHRjb25zdCBvblN1Ym1pdCA9ICh2YWx1ZXMpID0+IHtcclxuXHRcdGlmICghIXZhbHVlcy5wYXNzd29yZC50cmltKCkpIHtcclxuXHRcdFx0Y29uc29sZS5sb2codmFsdWVzKTtcclxuXHRcdFx0Ly8gZmV0Y2goXCIvYXBpL2xvZ2luXCIsIHtcclxuXHRcdFx0Ly8gXHRib2R5OiBKU09OLnN0cmluZ2lmeSh2YWx1ZXMpLFxyXG5cdFx0XHQvLyBcdG1ldGhvZDogXCJQT1NUXCIsXHJcblx0XHRcdC8vIFx0aGVhZGVyczoge1xyXG5cdFx0XHQvLyBcdFx0XCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcclxuXHRcdFx0Ly8gXHR9XHJcblx0XHRcdC8vIH0pLnRoZW4oKHJlcykgPT4ge1xyXG5cdFx0XHQvLyBcdGNvbnNvbGUubG9nKHJlcy5qc29uKCkpO1xyXG5cdFx0XHQvLyB9KTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHNldEVycm9yKFwicGFzc3dvcmRcIiwgeyB0eXBlOiBcImJsYW5rX3NwYWNlXCIgfSk7XHJcblx0XHR9XHJcblx0fTtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgYmctZ3JheS01MCBweS0xMiBweC00IHNtOnB4LTYgbGc6cHgtOFwiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1heC13LW1kIHctZnVsbCBzcGFjZS15LThcIj5cclxuXHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0PGgyIGNsYXNzTmFtZT1cIm10LTYgdGV4dC1jZW50ZXIgdGV4dC0zeGwgZm9udC1leHRyYWJvbGQgdGV4dC1ncmF5LTkwMFwiPlxyXG5cdFx0XHRcdFx0XHRTaWduIGluIHRvIHlvdXIgYWNjb3VudFxyXG5cdFx0XHRcdFx0PC9oMj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8Zm9ybVxyXG5cdFx0XHRcdFx0b25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChvblN1Ym1pdCl9XHJcblx0XHRcdFx0XHRjbGFzc05hbWU9XCJtdC04IHNwYWNlLXktNlwiXHJcblx0XHRcdFx0XHRhY3Rpb249XCIjXCJcclxuXHRcdFx0XHRcdG1ldGhvZD1cIlBPU1RcIj5cclxuXHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cInJlbWVtYmVyXCIgZGVmYXVsdFZhbHVlPVwidHJ1ZVwiIC8+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQtbWQgc2hhZG93LXNtIC1zcGFjZS15LXB4XCI+XHJcblx0XHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJlbWFpbC1hZGRyZXNzXCIgY2xhc3NOYW1lPVwic3Itb25seVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0RW1haWwgYWRkcmVzc1xyXG5cdFx0XHRcdFx0XHRcdDwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdFx0XHR7Li4ucmVnaXN0ZXIoXCJlbWFpbFwiLCB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHJlcXVpcmVkOiB0cnVlXHJcblx0XHRcdFx0XHRcdFx0XHR9KX1cclxuXHRcdFx0XHRcdFx0XHRcdGlkPVwiZW1haWwtYWRkcmVzc1wiXHJcblx0XHRcdFx0XHRcdFx0XHRuYW1lPVwiZW1haWxcIlxyXG5cdFx0XHRcdFx0XHRcdFx0dHlwZT1cImVtYWlsXCJcclxuXHRcdFx0XHRcdFx0XHRcdGF1dG9Db21wbGV0ZT1cImVtYWlsXCJcclxuXHRcdFx0XHRcdFx0XHRcdHJlcXVpcmVkXHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJhcHBlYXJhbmNlLW5vbmUgcm91bmRlZC1ub25lIHJlbGF0aXZlIGJsb2NrIHctZnVsbCBweC0zIHB5LTIgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCBwbGFjZWhvbGRlci1ncmF5LTUwMCB0ZXh0LWdyYXktOTAwIHJvdW5kZWQtdC1tZCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy1pbmRpZ28tNTAwIGZvY3VzOmJvcmRlci1pbmRpZ28tNTAwIGZvY3VzOnotMTAgc206dGV4dC1zbVwiXHJcblx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIkVtYWlsIGFkZHJlc3NcIlxyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm15LTRcIj5cclxuXHRcdFx0XHRcdFx0XHQ8bGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkXCIgY2xhc3NOYW1lPVwic3Itb25seVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0UGFzc3dvcmRcclxuXHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHRcdFx0ey4uLnJlZ2lzdGVyKFwicGFzc3dvcmRcIiwge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRyZXF1aXJlZDogdHJ1ZVxyXG5cdFx0XHRcdFx0XHRcdFx0fSl9XHJcblx0XHRcdFx0XHRcdFx0XHRpZD1cInBhc3N3b3JkXCJcclxuXHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJwYXNzd29yZFwiXHJcblx0XHRcdFx0XHRcdFx0XHR0eXBlPVwicGFzc3dvcmRcIlxyXG5cdFx0XHRcdFx0XHRcdFx0YXV0b0NvbXBsZXRlPVwiY3VycmVudC1wYXNzd29yZFwiXHJcblx0XHRcdFx0XHRcdFx0XHRyZXF1aXJlZFxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiYXBwZWFyYW5jZS1ub25lIHJvdW5kZWQtbm9uZSByZWxhdGl2ZSBibG9jayB3LWZ1bGwgcHgtMyBweS0yIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcGxhY2Vob2xkZXItZ3JheS01MDAgdGV4dC1ncmF5LTkwMCByb3VuZGVkLWItbWQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctaW5kaWdvLTUwMCBmb2N1czpib3JkZXItaW5kaWdvLTUwMCBmb2N1czp6LTEwIHNtOnRleHQtc21cIlxyXG5cdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHR7ZXJyb3JzLnBhc3N3b3JkPy50eXBlID09PSBcInJlcXVpcmVkXCIgJiZcclxuXHRcdFx0XHRcdFx0XHRcdFwiRmllbGQgc2hvdWxkIG5vdCBiZSBibGFua1wifVxyXG5cdFx0XHRcdFx0XHRcdHtlcnJvcnMucGFzc3dvcmQ/LnR5cGUgPT09IFwiYmxhbmtfc3BhY2VcIiAmJlxyXG5cdFx0XHRcdFx0XHRcdFx0XCJGaWVsZCBpcyBibGFuay5cIn1cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHQ8YnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0dHlwZT1cInN1Ym1pdFwiXHJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiZ3JvdXAgcmVsYXRpdmUgdy1mdWxsIGZsZXgganVzdGlmeS1jZW50ZXIgcHktMiBweC00IGJvcmRlciBib3JkZXItdHJhbnNwYXJlbnQgdGV4dC1zbSBmb250LW1lZGl1bSByb3VuZGVkLW1kIHRleHQtd2hpdGUgYmctaW5kaWdvLTYwMCBob3ZlcjpiZy1pbmRpZ28tNzAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1vZmZzZXQtMiBmb2N1czpyaW5nLWluZGlnby01MDBcIj5cclxuXHRcdFx0XHRcdFx0XHRTaWduIGluXHJcblx0XHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9mb3JtPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==