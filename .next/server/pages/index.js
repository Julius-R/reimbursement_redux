(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./lib/Session.js":
/*!************************!*\
  !*** ./lib/Session.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ withSession; }
/* harmony export */ });
/* harmony import */ var next_iron_session__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-iron-session */ "next-iron-session");
/* harmony import */ var next_iron_session__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_iron_session__WEBPACK_IMPORTED_MODULE_0__);
// this file is a wrapper with defaults to be used in both API routes and `getServerSideProps` functions

function withSession(handler) {
  return (0,next_iron_session__WEBPACK_IMPORTED_MODULE_0__.withIronSession)(handler, {
    password: "complex_password_at_least_32_characters_long",
    cookieName: "myapp_cookiename",
    // if your localhost is served on http:// then disable the secure flag
    cookieOptions: {
      secure: false
    }
  });
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Home; },
/* harmony export */   "getServerSideProps": function() { return /* binding */ getServerSideProps; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_Session__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/Session */ "./lib/Session.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @prisma/client */ "@prisma/client");
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\Julius Robinson\\Sandbox\\reimburement_redux\\pages\\index.js";




const prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_4__.PrismaClient();
function Home({
  user
}) {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "flex flex-col items-center justify-center min-h-screen py-2",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Create Next App"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
      className: "flex flex-col items-center justify-center w-full flex-1 px-20 text-center",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        className: "text-6xl font-bold",
        children: [console.log(user), "Welcome to", " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          className: "text-blue-600",
          href: "https://nextjs.org",
          children: "Next.js!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "mt-3 text-2xl",
        children: ["Get started by editing", " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("code", {
          className: "p-3 font-mono text-lg bg-gray-100 rounded-md",
          children: "pages/index.js"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          href: "https://nextjs.org/docs",
          className: "p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
            className: "text-2xl font-bold",
            children: "Documentation \u2192"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: "mt-4 text-xl",
            children: "Find in-depth information about Next.js features and API."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          href: "https://nextjs.org/learn",
          className: "p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
            className: "text-2xl font-bold",
            children: "Learn \u2192"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: "mt-4 text-xl",
            children: "Learn about Next.js in an interactive course with quizzes!"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          href: "https://github.com/vercel/next.js/tree/master/examples",
          className: "p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
            className: "text-2xl font-bold",
            children: "Examples \u2192"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: "mt-4 text-xl",
            children: "Discover and deploy boilerplate example Next.js projects."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          href: "https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
          className: "p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
            className: "text-2xl font-bold",
            children: "Deploy \u2192"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: "mt-4 text-xl",
            children: "Instantly deploy your Next.js site to a public URL with Vercel."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("footer", {
      className: "flex items-center justify-center w-full h-24 border-t",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        className: "flex items-center justify-center",
        href: "https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
        target: "_blank",
        rel: "noopener noreferrer",
        children: ["Powered by", " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          src: "/vercel.svg",
          alt: "Vercel Logo",
          className: "h-4 ml-2"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 3
  }, this);
}
const getServerSideProps = (0,_lib_Session__WEBPACK_IMPORTED_MODULE_2__.default)(async function ({
  req,
  res
}) {
  const user = req.session.get("user");

  if (!user) {
    return {
      redirect: {
        destination: "/login",
        permanent: false
      }
    };
  }

  return {
    props: {
      user
    }
  };
});

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@prisma/client");;

/***/ }),

/***/ "next-iron-session":
/*!************************************!*\
  !*** external "next-iron-session" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-iron-session");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvU2Vzc2lvbi5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAcHJpc21hL2NsaWVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtaXJvbi1zZXNzaW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJ3aXRoU2Vzc2lvbiIsImhhbmRsZXIiLCJ3aXRoSXJvblNlc3Npb24iLCJwYXNzd29yZCIsImNvb2tpZU5hbWUiLCJjb29raWVPcHRpb25zIiwic2VjdXJlIiwicHJpc21hIiwiUHJpc21hQ2xpZW50IiwiSG9tZSIsInVzZXIiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJjb25zb2xlIiwibG9nIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwicmVxIiwicmVzIiwic2Vzc2lvbiIsImdldCIsInJlZGlyZWN0IiwiZGVzdGluYXRpb24iLCJwZXJtYW5lbnQiLCJwcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFZSxTQUFTQSxXQUFULENBQXFCQyxPQUFyQixFQUE4QjtBQUM1QyxTQUFPQyxrRUFBZSxDQUFDRCxPQUFELEVBQVU7QUFDL0JFLFlBQVEsRUFBRSw4Q0FEcUI7QUFFL0JDLGNBQVUsRUFBRSxrQkFGbUI7QUFHL0I7QUFDQUMsaUJBQWEsRUFBRTtBQUNkQyxZQUFNO0FBRFE7QUFKZ0IsR0FBVixDQUF0QjtBQVFBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1pEO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUMsTUFBTSxHQUFHLElBQUlDLHdEQUFKLEVBQWY7QUFFZSxTQUFTQyxJQUFULENBQWM7QUFBRUM7QUFBRixD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O0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFuRUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7QUFvRkE7QUFFTSxNQUFNSyxrQkFBa0IsR0FBR2YscURBQVcsQ0FBQyxnQkFBZ0I7QUFBRWdCLEtBQUY7QUFBT0M7QUFBUCxDQUFoQixFQUE4QjtBQUMzRSxRQUFNUCxJQUFJLEdBQUdNLEdBQUcsQ0FBQ0UsT0FBSixDQUFZQyxHQUFaLENBQWdCLE1BQWhCLENBQWI7O0FBRUEsTUFBSSxDQUFDVCxJQUFMLEVBQVc7QUFDVixXQUFPO0FBQ05VLGNBQVEsRUFBRTtBQUNUQyxtQkFBVyxFQUFFLFFBREo7QUFFVEMsaUJBQVMsRUFBRTtBQUZGO0FBREosS0FBUDtBQU1BOztBQUVELFNBQU87QUFDTkMsU0FBSyxFQUFFO0FBQ05iO0FBRE07QUFERCxHQUFQO0FBS0EsQ0FqQjRDLENBQXRDLEM7Ozs7Ozs7Ozs7O0FDaEdQLDRDOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLG1EIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdGhpcyBmaWxlIGlzIGEgd3JhcHBlciB3aXRoIGRlZmF1bHRzIHRvIGJlIHVzZWQgaW4gYm90aCBBUEkgcm91dGVzIGFuZCBgZ2V0U2VydmVyU2lkZVByb3BzYCBmdW5jdGlvbnNcclxuaW1wb3J0IHsgd2l0aElyb25TZXNzaW9uIH0gZnJvbSBcIm5leHQtaXJvbi1zZXNzaW9uXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoU2Vzc2lvbihoYW5kbGVyKSB7XHJcblx0cmV0dXJuIHdpdGhJcm9uU2Vzc2lvbihoYW5kbGVyLCB7XHJcblx0XHRwYXNzd29yZDogXCJjb21wbGV4X3Bhc3N3b3JkX2F0X2xlYXN0XzMyX2NoYXJhY3RlcnNfbG9uZ1wiLFxyXG5cdFx0Y29va2llTmFtZTogXCJteWFwcF9jb29raWVuYW1lXCIsXHJcblx0XHQvLyBpZiB5b3VyIGxvY2FsaG9zdCBpcyBzZXJ2ZWQgb24gaHR0cDovLyB0aGVuIGRpc2FibGUgdGhlIHNlY3VyZSBmbGFnXHJcblx0XHRjb29raWVPcHRpb25zOiB7XHJcblx0XHRcdHNlY3VyZTogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiXHJcblx0XHR9XHJcblx0fSk7XHJcbn1cclxuIiwiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHdpdGhTZXNzaW9uIGZyb20gXCIuLi9saWIvU2Vzc2lvblwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcblxuY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHsgdXNlciB9KSB7XG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBtaW4taC1zY3JlZW4gcHktMlwiPlxuXHRcdFx0PEhlYWQ+XG5cdFx0XHRcdDx0aXRsZT5DcmVhdGUgTmV4dCBBcHA8L3RpdGxlPlxuXHRcdFx0XHQ8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG5cdFx0XHQ8L0hlYWQ+XG5cblx0XHRcdDxtYWluIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHctZnVsbCBmbGV4LTEgcHgtMjAgdGV4dC1jZW50ZXJcIj5cblx0XHRcdFx0PGgxIGNsYXNzTmFtZT1cInRleHQtNnhsIGZvbnQtYm9sZFwiPlxuXHRcdFx0XHRcdHtjb25zb2xlLmxvZyh1c2VyKX1cblx0XHRcdFx0XHRXZWxjb21lIHRve1wiIFwifVxuXHRcdFx0XHRcdDxhIGNsYXNzTmFtZT1cInRleHQtYmx1ZS02MDBcIiBocmVmPVwiaHR0cHM6Ly9uZXh0anMub3JnXCI+XG5cdFx0XHRcdFx0XHROZXh0LmpzIVxuXHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0PC9oMT5cblxuXHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJtdC0zIHRleHQtMnhsXCI+XG5cdFx0XHRcdFx0R2V0IHN0YXJ0ZWQgYnkgZWRpdGluZ3tcIiBcIn1cblx0XHRcdFx0XHQ8Y29kZSBjbGFzc05hbWU9XCJwLTMgZm9udC1tb25vIHRleHQtbGcgYmctZ3JheS0xMDAgcm91bmRlZC1tZFwiPlxuXHRcdFx0XHRcdFx0cGFnZXMvaW5kZXguanNcblx0XHRcdFx0XHQ8L2NvZGU+XG5cdFx0XHRcdDwvcD5cblxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWFyb3VuZCBtYXgtdy00eGwgbXQtNiBzbTp3LWZ1bGxcIj5cblx0XHRcdFx0XHQ8YVxuXHRcdFx0XHRcdFx0aHJlZj1cImh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzXCJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInAtNiBtdC02IHRleHQtbGVmdCBib3JkZXIgdy05NiByb3VuZGVkLXhsIGhvdmVyOnRleHQtYmx1ZS02MDAgZm9jdXM6dGV4dC1ibHVlLTYwMFwiPlxuXHRcdFx0XHRcdFx0PGgzIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZFwiPlxuXHRcdFx0XHRcdFx0XHREb2N1bWVudGF0aW9uICZyYXJyO1xuXHRcdFx0XHRcdFx0PC9oMz5cblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cIm10LTQgdGV4dC14bFwiPlxuXHRcdFx0XHRcdFx0XHRGaW5kIGluLWRlcHRoIGluZm9ybWF0aW9uIGFib3V0IE5leHQuanMgZmVhdHVyZXMgYW5kXG5cdFx0XHRcdFx0XHRcdEFQSS5cblx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHQ8L2E+XG5cblx0XHRcdFx0XHQ8YVxuXHRcdFx0XHRcdFx0aHJlZj1cImh0dHBzOi8vbmV4dGpzLm9yZy9sZWFyblwiXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJwLTYgbXQtNiB0ZXh0LWxlZnQgYm9yZGVyIHctOTYgcm91bmRlZC14bCBob3Zlcjp0ZXh0LWJsdWUtNjAwIGZvY3VzOnRleHQtYmx1ZS02MDBcIj5cblx0XHRcdFx0XHRcdDxoMyBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGRcIj5MZWFybiAmcmFycjs8L2gzPlxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibXQtNCB0ZXh0LXhsXCI+XG5cdFx0XHRcdFx0XHRcdExlYXJuIGFib3V0IE5leHQuanMgaW4gYW4gaW50ZXJhY3RpdmUgY291cnNlIHdpdGhcblx0XHRcdFx0XHRcdFx0cXVpenplcyFcblx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHQ8L2E+XG5cblx0XHRcdFx0XHQ8YVxuXHRcdFx0XHRcdFx0aHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS92ZXJjZWwvbmV4dC5qcy90cmVlL21hc3Rlci9leGFtcGxlc1wiXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJwLTYgbXQtNiB0ZXh0LWxlZnQgYm9yZGVyIHctOTYgcm91bmRlZC14bCBob3Zlcjp0ZXh0LWJsdWUtNjAwIGZvY3VzOnRleHQtYmx1ZS02MDBcIj5cblx0XHRcdFx0XHRcdDxoMyBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGRcIj5FeGFtcGxlcyAmcmFycjs8L2gzPlxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibXQtNCB0ZXh0LXhsXCI+XG5cdFx0XHRcdFx0XHRcdERpc2NvdmVyIGFuZCBkZXBsb3kgYm9pbGVycGxhdGUgZXhhbXBsZSBOZXh0LmpzXG5cdFx0XHRcdFx0XHRcdHByb2plY3RzLlxuXHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdDwvYT5cblxuXHRcdFx0XHRcdDxhXG5cdFx0XHRcdFx0XHRocmVmPVwiaHR0cHM6Ly92ZXJjZWwuY29tL2ltcG9ydD9maWx0ZXI9bmV4dC5qcyZ1dG1fc291cmNlPWNyZWF0ZS1uZXh0LWFwcCZ1dG1fbWVkaXVtPWRlZmF1bHQtdGVtcGxhdGUmdXRtX2NhbXBhaWduPWNyZWF0ZS1uZXh0LWFwcFwiXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJwLTYgbXQtNiB0ZXh0LWxlZnQgYm9yZGVyIHctOTYgcm91bmRlZC14bCBob3Zlcjp0ZXh0LWJsdWUtNjAwIGZvY3VzOnRleHQtYmx1ZS02MDBcIj5cblx0XHRcdFx0XHRcdDxoMyBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGRcIj5EZXBsb3kgJnJhcnI7PC9oMz5cblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cIm10LTQgdGV4dC14bFwiPlxuXHRcdFx0XHRcdFx0XHRJbnN0YW50bHkgZGVwbG95IHlvdXIgTmV4dC5qcyBzaXRlIHRvIGEgcHVibGljIFVSTFxuXHRcdFx0XHRcdFx0XHR3aXRoIFZlcmNlbC5cblx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9tYWluPlxuXG5cdFx0XHQ8Zm9vdGVyIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHctZnVsbCBoLTI0IGJvcmRlci10XCI+XG5cdFx0XHRcdDxhXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIlxuXHRcdFx0XHRcdGhyZWY9XCJodHRwczovL3ZlcmNlbC5jb20/dXRtX3NvdXJjZT1jcmVhdGUtbmV4dC1hcHAmdXRtX21lZGl1bT1kZWZhdWx0LXRlbXBsYXRlJnV0bV9jYW1wYWlnbj1jcmVhdGUtbmV4dC1hcHBcIlxuXHRcdFx0XHRcdHRhcmdldD1cIl9ibGFua1wiXG5cdFx0XHRcdFx0cmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPlxuXHRcdFx0XHRcdFBvd2VyZWQgYnl7XCIgXCJ9XG5cdFx0XHRcdFx0PGltZ1xuXHRcdFx0XHRcdFx0c3JjPVwiL3ZlcmNlbC5zdmdcIlxuXHRcdFx0XHRcdFx0YWx0PVwiVmVyY2VsIExvZ29cIlxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiaC00IG1sLTJcIlxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvYT5cblx0XHRcdDwvZm9vdGVyPlxuXHRcdDwvZGl2PlxuXHQpO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gd2l0aFNlc3Npb24oYXN5bmMgZnVuY3Rpb24gKHsgcmVxLCByZXMgfSkge1xuXHRjb25zdCB1c2VyID0gcmVxLnNlc3Npb24uZ2V0KFwidXNlclwiKTtcblxuXHRpZiAoIXVzZXIpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0cmVkaXJlY3Q6IHtcblx0XHRcdFx0ZGVzdGluYXRpb246IFwiL2xvZ2luXCIsXG5cdFx0XHRcdHBlcm1hbmVudDogZmFsc2Vcblx0XHRcdH1cblx0XHR9O1xuXHR9XG5cblx0cmV0dXJuIHtcblx0XHRwcm9wczoge1xuXHRcdFx0dXNlclxuXHRcdH1cblx0fTtcbn0pO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHByaXNtYS9jbGllbnRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtaXJvbi1zZXNzaW9uXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=