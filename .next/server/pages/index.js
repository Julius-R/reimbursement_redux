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



 // const prisma = new PrismaClient();

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
      children: ["Hello There ", user.user_uname]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 18,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvU2Vzc2lvbi5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAcHJpc21hL2NsaWVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtaXJvbi1zZXNzaW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJ3aXRoU2Vzc2lvbiIsImhhbmRsZXIiLCJ3aXRoSXJvblNlc3Npb24iLCJwYXNzd29yZCIsImNvb2tpZU5hbWUiLCJjb29raWVPcHRpb25zIiwic2VjdXJlIiwiSG9tZSIsInVzZXIiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VyX3VuYW1lIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwicmVxIiwicmVzIiwic2Vzc2lvbiIsImdldCIsInJlZGlyZWN0IiwiZGVzdGluYXRpb24iLCJwZXJtYW5lbnQiLCJwcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFZSxTQUFTQSxXQUFULENBQXFCQyxPQUFyQixFQUE4QjtBQUM1QyxTQUFPQyxrRUFBZSxDQUFDRCxPQUFELEVBQVU7QUFDL0JFLFlBQVEsRUFBRSw4Q0FEcUI7QUFFL0JDLGNBQVUsRUFBRSxrQkFGbUI7QUFHL0I7QUFDQUMsaUJBQWEsRUFBRTtBQUNkQyxZQUFNO0FBRFE7QUFKZ0IsR0FBVixDQUF0QjtBQVFBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1pEO0FBQ0E7QUFDQTtDQUdBOztBQUVlLFNBQVNDLElBQVQsQ0FBYztBQUFFQztBQUFGLENBQWQsRUFBd0I7QUFDdEMsUUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4QjtBQUVBLHNCQUNDO0FBQUssYUFBUyxFQUFDLDZEQUFmO0FBQUEsNEJBQ0MsOERBQUMsa0RBQUQ7QUFBQSw4QkFDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURELGVBRUM7QUFBTSxXQUFHLEVBQUMsTUFBVjtBQUFpQixZQUFJLEVBQUM7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURELGVBTUM7QUFBTSxlQUFTLEVBQUMsMkVBQWhCO0FBQUEsaUNBQ2NGLElBQUksQ0FBQ0csVUFEbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7QUFZQTtBQUVNLE1BQU1DLGtCQUFrQixHQUFHWixxREFBVyxDQUFDLGdCQUFnQjtBQUFFYSxLQUFGO0FBQU9DO0FBQVAsQ0FBaEIsRUFBOEI7QUFDM0UsUUFBTU4sSUFBSSxHQUFHSyxHQUFHLENBQUNFLE9BQUosQ0FBWUMsR0FBWixDQUFnQixNQUFoQixDQUFiOztBQUVBLE1BQUksQ0FBQ1IsSUFBTCxFQUFXO0FBQ1YsV0FBTztBQUNOUyxjQUFRLEVBQUU7QUFDVEMsbUJBQVcsRUFBRSxRQURKO0FBRVRDLGlCQUFTLEVBQUU7QUFGRjtBQURKLEtBQVA7QUFNQTs7QUFFRCxTQUFPO0FBQ05DLFNBQUssRUFBRTtBQUNOWjtBQURNO0FBREQsR0FBUDtBQUtBLENBakI0QyxDQUF0QyxDOzs7Ozs7Ozs7OztBQ3hCUCw0Qzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxtRCIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHRoaXMgZmlsZSBpcyBhIHdyYXBwZXIgd2l0aCBkZWZhdWx0cyB0byBiZSB1c2VkIGluIGJvdGggQVBJIHJvdXRlcyBhbmQgYGdldFNlcnZlclNpZGVQcm9wc2AgZnVuY3Rpb25zXHJcbmltcG9ydCB7IHdpdGhJcm9uU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWlyb24tc2Vzc2lvblwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aFNlc3Npb24oaGFuZGxlcikge1xyXG5cdHJldHVybiB3aXRoSXJvblNlc3Npb24oaGFuZGxlciwge1xyXG5cdFx0cGFzc3dvcmQ6IFwiY29tcGxleF9wYXNzd29yZF9hdF9sZWFzdF8zMl9jaGFyYWN0ZXJzX2xvbmdcIixcclxuXHRcdGNvb2tpZU5hbWU6IFwibXlhcHBfY29va2llbmFtZVwiLFxyXG5cdFx0Ly8gaWYgeW91ciBsb2NhbGhvc3QgaXMgc2VydmVkIG9uIGh0dHA6Ly8gdGhlbiBkaXNhYmxlIHRoZSBzZWN1cmUgZmxhZ1xyXG5cdFx0Y29va2llT3B0aW9uczoge1xyXG5cdFx0XHRzZWN1cmU6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIlxyXG5cdFx0fVxyXG5cdH0pO1xyXG59XHJcbiIsImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB3aXRoU2Vzc2lvbiBmcm9tIFwiLi4vbGliL1Nlc3Npb25cIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XG5cbi8vIGNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7IHVzZXIgfSkge1xuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbWluLWgtc2NyZWVuIHB5LTJcIj5cblx0XHRcdDxIZWFkPlxuXHRcdFx0XHQ8dGl0bGU+Q3JlYXRlIE5leHQgQXBwPC90aXRsZT5cblx0XHRcdFx0PGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuXHRcdFx0PC9IZWFkPlxuXG5cdFx0XHQ8bWFpbiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB3LWZ1bGwgZmxleC0xIHB4LTIwIHRleHQtY2VudGVyXCI+XG5cdFx0XHRcdEhlbGxvIFRoZXJlIHt1c2VyLnVzZXJfdW5hbWV9XG5cdFx0XHQ8L21haW4+XG5cdFx0PC9kaXY+XG5cdCk7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSB3aXRoU2Vzc2lvbihhc3luYyBmdW5jdGlvbiAoeyByZXEsIHJlcyB9KSB7XG5cdGNvbnN0IHVzZXIgPSByZXEuc2Vzc2lvbi5nZXQoXCJ1c2VyXCIpO1xuXG5cdGlmICghdXNlcikge1xuXHRcdHJldHVybiB7XG5cdFx0XHRyZWRpcmVjdDoge1xuXHRcdFx0XHRkZXN0aW5hdGlvbjogXCIvbG9naW5cIixcblx0XHRcdFx0cGVybWFuZW50OiBmYWxzZVxuXHRcdFx0fVxuXHRcdH07XG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdHByb3BzOiB7XG5cdFx0XHR1c2VyXG5cdFx0fVxuXHR9O1xufSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcHJpc21hL2NsaWVudFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1pcm9uLXNlc3Npb25cIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==