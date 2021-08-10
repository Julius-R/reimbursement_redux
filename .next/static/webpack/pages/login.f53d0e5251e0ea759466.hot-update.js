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
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_Session_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/Session.js */ "./lib/Session.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "C:\\Users\\Julius Robinson\\Sandbox\\reimburement_redux\\pages\\login.js";


 // import bcrypt from "bcryptjs";



 // import { PrismaClient } from "@prisma/client";
// const prisma = new PrismaClient();

function Login() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "max-w-md w-full space-y-8",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          className: "mx-auto h-12 w-auto",
          src: "https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg",
          alt: "Workflow"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          className: "mt-6 text-center text-3xl font-extrabold text-gray-900",
          children: "Sign in to your account"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          className: "mt-2 text-center text-sm text-gray-600",
          children: ["Or", " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "#",
            className: "font-medium text-indigo-600 hover:text-indigo-500",
            children: "start your 14-day free trial"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
        className: "mt-8 space-y-6",
        action: "#",
        method: "POST",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "hidden",
          name: "remember",
          defaultValue: "true"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "rounded-md shadow-sm -space-y-px",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              htmlFor: "email-address",
              className: "sr-only",
              children: "Email address"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 38,
              columnNumber: 8
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
              id: "email-address",
              name: "email",
              type: "email",
              autoComplete: "email",
              required: true,
              className: "appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm",
              placeholder: "Email address"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 8
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              htmlFor: "password",
              className: "sr-only",
              children: "Password"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 8
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
              id: "password",
              name: "password",
              type: "password",
              autoComplete: "current-password",
              required: true,
              className: "appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm",
              placeholder: "Password"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 8
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "flex items-center justify-between",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "flex items-center",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
              id: "remember-me",
              name: "remember-me",
              type: "checkbox",
              className: "h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 8
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              htmlFor: "remember-me",
              className: "ml-2 block text-sm text-gray-900",
              children: "Remember me"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 75,
              columnNumber: 8
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "text-sm",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              href: "#",
              className: "font-medium text-indigo-600 hover:text-indigo-500",
              children: "Forgot your password?"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 8
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            type: "submit",
            className: "group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
            children: "Sign in"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 7
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 4
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 3
  }, this);
}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9naW4uanMiXSwibmFtZXMiOlsiTG9naW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtDQUVBOztBQUNBO0FBQ0E7Q0FFQTtBQUVBOztBQUVlLFNBQVNBLEtBQVQsR0FBaUI7QUFDL0Isc0JBQ0M7QUFBSyxhQUFTLEVBQUMscUZBQWY7QUFBQSwyQkFDQztBQUFLLGVBQVMsRUFBQywyQkFBZjtBQUFBLDhCQUNDO0FBQUEsZ0NBQ0M7QUFDQyxtQkFBUyxFQUFDLHFCQURYO0FBRUMsYUFBRyxFQUFDLCtEQUZMO0FBR0MsYUFBRyxFQUFDO0FBSEw7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERCxlQU1DO0FBQUksbUJBQVMsRUFBQyx3REFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFORCxlQVNDO0FBQUcsbUJBQVMsRUFBQyx3Q0FBYjtBQUFBLDJCQUNJLEdBREosZUFFQztBQUNDLGdCQUFJLEVBQUMsR0FETjtBQUVDLHFCQUFTLEVBQUMsbURBRlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURELGVBbUJDO0FBQU0saUJBQVMsRUFBQyxnQkFBaEI7QUFBaUMsY0FBTSxFQUFDLEdBQXhDO0FBQTRDLGNBQU0sRUFBQyxNQUFuRDtBQUFBLGdDQUNDO0FBQU8sY0FBSSxFQUFDLFFBQVo7QUFBcUIsY0FBSSxFQUFDLFVBQTFCO0FBQXFDLHNCQUFZLEVBQUM7QUFBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERCxlQUVDO0FBQUssbUJBQVMsRUFBQyxrQ0FBZjtBQUFBLGtDQUNDO0FBQUEsb0NBQ0M7QUFBTyxxQkFBTyxFQUFDLGVBQWY7QUFBK0IsdUJBQVMsRUFBQyxTQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERCxlQUlDO0FBQ0MsZ0JBQUUsRUFBQyxlQURKO0FBRUMsa0JBQUksRUFBQyxPQUZOO0FBR0Msa0JBQUksRUFBQyxPQUhOO0FBSUMsMEJBQVksRUFBQyxPQUpkO0FBS0Msc0JBQVEsTUFMVDtBQU1DLHVCQUFTLEVBQUMsNE5BTlg7QUFPQyx5QkFBVyxFQUFDO0FBUGI7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFKRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREQsZUFlQztBQUFBLG9DQUNDO0FBQU8scUJBQU8sRUFBQyxVQUFmO0FBQTBCLHVCQUFTLEVBQUMsU0FBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREQsZUFJQztBQUNDLGdCQUFFLEVBQUMsVUFESjtBQUVDLGtCQUFJLEVBQUMsVUFGTjtBQUdDLGtCQUFJLEVBQUMsVUFITjtBQUlDLDBCQUFZLEVBQUMsa0JBSmQ7QUFLQyxzQkFBUSxNQUxUO0FBTUMsdUJBQVMsRUFBQyw0TkFOWDtBQU9DLHlCQUFXLEVBQUM7QUFQYjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFmRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkQsZUFpQ0M7QUFBSyxtQkFBUyxFQUFDLG1DQUFmO0FBQUEsa0NBQ0M7QUFBSyxxQkFBUyxFQUFDLG1CQUFmO0FBQUEsb0NBQ0M7QUFDQyxnQkFBRSxFQUFDLGFBREo7QUFFQyxrQkFBSSxFQUFDLGFBRk47QUFHQyxrQkFBSSxFQUFDLFVBSE47QUFJQyx1QkFBUyxFQUFDO0FBSlg7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERCxlQU9DO0FBQ0MscUJBQU8sRUFBQyxhQURUO0FBRUMsdUJBQVMsRUFBQyxrQ0FGWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFQRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREQsZUFlQztBQUFLLHFCQUFTLEVBQUMsU0FBZjtBQUFBLG1DQUNDO0FBQ0Msa0JBQUksRUFBQyxHQUROO0FBRUMsdUJBQVMsRUFBQyxtREFGWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBZkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWpDRCxlQXlEQztBQUFBLGlDQUNDO0FBQ0MsZ0JBQUksRUFBQyxRQUROO0FBRUMscUJBQVMsRUFBQyxxT0FGWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBekREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQW5CRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7QUF5RkE7S0ExRnVCQSxLIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2xvZ2luLmY1M2QwZTUyNTFlMGVhNzU5NDY2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHdpdGhTZXNzaW9uIGZyb20gXCIuLi9saWIvU2Vzc2lvbi5qc1wiO1xyXG4vLyBpbXBvcnQgYmNyeXB0IGZyb20gXCJiY3J5cHRqc1wiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gXCJyZWFjdC1ob29rLWZvcm1cIjtcclxuaW1wb3J0IHRvYXN0LCB7IFRvYXN0ZXIgfSBmcm9tIFwicmVhY3QtaG90LXRvYXN0XCI7XHJcbi8vIGltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xyXG5cclxuLy8gY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9naW4oKSB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGJnLWdyYXktNTAgcHktMTIgcHgtNCBzbTpweC02IGxnOnB4LThcIj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtYXgtdy1tZCB3LWZ1bGwgc3BhY2UteS04XCI+XHJcblx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdDxpbWdcclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwibXgtYXV0byBoLTEyIHctYXV0b1wiXHJcblx0XHRcdFx0XHRcdHNyYz1cImh0dHBzOi8vdGFpbHdpbmR1aS5jb20vaW1nL2xvZ29zL3dvcmtmbG93LW1hcmstaW5kaWdvLTYwMC5zdmdcIlxyXG5cdFx0XHRcdFx0XHRhbHQ9XCJXb3JrZmxvd1wiXHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PGgyIGNsYXNzTmFtZT1cIm10LTYgdGV4dC1jZW50ZXIgdGV4dC0zeGwgZm9udC1leHRyYWJvbGQgdGV4dC1ncmF5LTkwMFwiPlxyXG5cdFx0XHRcdFx0XHRTaWduIGluIHRvIHlvdXIgYWNjb3VudFxyXG5cdFx0XHRcdFx0PC9oMj5cclxuXHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cIm10LTIgdGV4dC1jZW50ZXIgdGV4dC1zbSB0ZXh0LWdyYXktNjAwXCI+XHJcblx0XHRcdFx0XHRcdE9ye1wiIFwifVxyXG5cdFx0XHRcdFx0XHQ8YVxyXG5cdFx0XHRcdFx0XHRcdGhyZWY9XCIjXCJcclxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJmb250LW1lZGl1bSB0ZXh0LWluZGlnby02MDAgaG92ZXI6dGV4dC1pbmRpZ28tNTAwXCI+XHJcblx0XHRcdFx0XHRcdFx0c3RhcnQgeW91ciAxNC1kYXkgZnJlZSB0cmlhbFxyXG5cdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGZvcm0gY2xhc3NOYW1lPVwibXQtOCBzcGFjZS15LTZcIiBhY3Rpb249XCIjXCIgbWV0aG9kPVwiUE9TVFwiPlxyXG5cdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwicmVtZW1iZXJcIiBkZWZhdWx0VmFsdWU9XCJ0cnVlXCIgLz5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm91bmRlZC1tZCBzaGFkb3ctc20gLXNwYWNlLXktcHhcIj5cclxuXHRcdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0XHQ8bGFiZWwgaHRtbEZvcj1cImVtYWlsLWFkZHJlc3NcIiBjbGFzc05hbWU9XCJzci1vbmx5XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRFbWFpbCBhZGRyZXNzXHJcblx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0XHRcdGlkPVwiZW1haWwtYWRkcmVzc1wiXHJcblx0XHRcdFx0XHRcdFx0XHRuYW1lPVwiZW1haWxcIlxyXG5cdFx0XHRcdFx0XHRcdFx0dHlwZT1cImVtYWlsXCJcclxuXHRcdFx0XHRcdFx0XHRcdGF1dG9Db21wbGV0ZT1cImVtYWlsXCJcclxuXHRcdFx0XHRcdFx0XHRcdHJlcXVpcmVkXHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJhcHBlYXJhbmNlLW5vbmUgcm91bmRlZC1ub25lIHJlbGF0aXZlIGJsb2NrIHctZnVsbCBweC0zIHB5LTIgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCBwbGFjZWhvbGRlci1ncmF5LTUwMCB0ZXh0LWdyYXktOTAwIHJvdW5kZWQtdC1tZCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy1pbmRpZ28tNTAwIGZvY3VzOmJvcmRlci1pbmRpZ28tNTAwIGZvY3VzOnotMTAgc206dGV4dC1zbVwiXHJcblx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIkVtYWlsIGFkZHJlc3NcIlxyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIiBjbGFzc05hbWU9XCJzci1vbmx5XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRQYXNzd29yZFxyXG5cdFx0XHRcdFx0XHRcdDwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdFx0XHRpZD1cInBhc3N3b3JkXCJcclxuXHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJwYXNzd29yZFwiXHJcblx0XHRcdFx0XHRcdFx0XHR0eXBlPVwicGFzc3dvcmRcIlxyXG5cdFx0XHRcdFx0XHRcdFx0YXV0b0NvbXBsZXRlPVwiY3VycmVudC1wYXNzd29yZFwiXHJcblx0XHRcdFx0XHRcdFx0XHRyZXF1aXJlZFxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiYXBwZWFyYW5jZS1ub25lIHJvdW5kZWQtbm9uZSByZWxhdGl2ZSBibG9jayB3LWZ1bGwgcHgtMyBweS0yIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcGxhY2Vob2xkZXItZ3JheS01MDAgdGV4dC1ncmF5LTkwMCByb3VuZGVkLWItbWQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctaW5kaWdvLTUwMCBmb2N1czpib3JkZXItaW5kaWdvLTUwMCBmb2N1czp6LTEwIHNtOnRleHQtc21cIlxyXG5cdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XHJcblx0XHRcdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdFx0XHRpZD1cInJlbWVtYmVyLW1lXCJcclxuXHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJyZW1lbWJlci1tZVwiXHJcblx0XHRcdFx0XHRcdFx0XHR0eXBlPVwiY2hlY2tib3hcIlxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiaC00IHctNCB0ZXh0LWluZGlnby02MDAgZm9jdXM6cmluZy1pbmRpZ28tNTAwIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkXCJcclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdDxsYWJlbFxyXG5cdFx0XHRcdFx0XHRcdFx0aHRtbEZvcj1cInJlbWVtYmVyLW1lXCJcclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cIm1sLTIgYmxvY2sgdGV4dC1zbSB0ZXh0LWdyYXktOTAwXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRSZW1lbWJlciBtZVxyXG5cdFx0XHRcdFx0XHRcdDwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXNtXCI+XHJcblx0XHRcdFx0XHRcdFx0PGFcclxuXHRcdFx0XHRcdFx0XHRcdGhyZWY9XCIjXCJcclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtIHRleHQtaW5kaWdvLTYwMCBob3Zlcjp0ZXh0LWluZGlnby01MDBcIj5cclxuXHRcdFx0XHRcdFx0XHRcdEZvcmdvdCB5b3VyIHBhc3N3b3JkP1xyXG5cdFx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHQ8YnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0dHlwZT1cInN1Ym1pdFwiXHJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiZ3JvdXAgcmVsYXRpdmUgdy1mdWxsIGZsZXgganVzdGlmeS1jZW50ZXIgcHktMiBweC00IGJvcmRlciBib3JkZXItdHJhbnNwYXJlbnQgdGV4dC1zbSBmb250LW1lZGl1bSByb3VuZGVkLW1kIHRleHQtd2hpdGUgYmctaW5kaWdvLTYwMCBob3ZlcjpiZy1pbmRpZ28tNzAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1vZmZzZXQtMiBmb2N1czpyaW5nLWluZGlnby01MDBcIj5cclxuXHRcdFx0XHRcdFx0XHRTaWduIGluXHJcblx0XHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9mb3JtPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==