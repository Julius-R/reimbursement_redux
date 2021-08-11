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

/** @param {import('next').InferGetServerSidePropsType<typeof getServerSideProps> } props */

function Home({
  user
}) {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();

  async function handleLogout() {
    await fetch("/api/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }
    });
    router.push("/login");
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "flex flex-col items-center justify-center min-h-screen py-2",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Create Next App"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
      className: "flex flex-col items-center justify-center w-full flex-1 px-20 text-center",
      children: ["Hello There ", user.user_uname, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        onClick: handleLogout,
        children: "Logout"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 23,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvU2Vzc2lvbi5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAcHJpc21hL2NsaWVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtaXJvbi1zZXNzaW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJ3aXRoU2Vzc2lvbiIsImhhbmRsZXIiLCJ3aXRoSXJvblNlc3Npb24iLCJwYXNzd29yZCIsImNvb2tpZU5hbWUiLCJjb29raWVPcHRpb25zIiwic2VjdXJlIiwiSG9tZSIsInVzZXIiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJoYW5kbGVMb2dvdXQiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJwdXNoIiwidXNlcl91bmFtZSIsImdldFNlcnZlclNpZGVQcm9wcyIsInJlcSIsInJlcyIsInNlc3Npb24iLCJnZXQiLCJyZWRpcmVjdCIsImRlc3RpbmF0aW9uIiwicGVybWFuZW50IiwicHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRWUsU0FBU0EsV0FBVCxDQUFxQkMsT0FBckIsRUFBOEI7QUFDNUMsU0FBT0Msa0VBQWUsQ0FBQ0QsT0FBRCxFQUFVO0FBQy9CRSxZQUFRLEVBQUUsOENBRHFCO0FBRS9CQyxjQUFVLEVBQUUsa0JBRm1CO0FBRy9CO0FBQ0FDLGlCQUFhLEVBQUU7QUFDZEMsWUFBTTtBQURRO0FBSmdCLEdBQVYsQ0FBdEI7QUFRQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaRDtBQUNBO0FBQ0E7Q0FHQTs7QUFFQTs7QUFDZSxTQUFTQyxJQUFULENBQWM7QUFBRUM7QUFBRixDQUFkLEVBQXdCO0FBQ3RDLFFBQU1DLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7O0FBRUEsaUJBQWVDLFlBQWYsR0FBOEI7QUFDN0IsVUFBTUMsS0FBSyxDQUFDLGFBQUQsRUFBZ0I7QUFDMUJDLFlBQU0sRUFBRSxNQURrQjtBQUUxQkMsYUFBTyxFQUFFO0FBQ1Isd0JBQWdCO0FBRFI7QUFGaUIsS0FBaEIsQ0FBWDtBQU1BTCxVQUFNLENBQUNNLElBQVAsQ0FBWSxRQUFaO0FBQ0E7O0FBRUQsc0JBQ0M7QUFBSyxhQUFTLEVBQUMsNkRBQWY7QUFBQSw0QkFDQyw4REFBQyxrREFBRDtBQUFBLDhCQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREQsZUFFQztBQUFNLFdBQUcsRUFBQyxNQUFWO0FBQWlCLFlBQUksRUFBQztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREQsZUFNQztBQUFNLGVBQVMsRUFBQywyRUFBaEI7QUFBQSxpQ0FDY1AsSUFBSSxDQUFDUSxVQURuQixlQUVDO0FBQVEsZUFBTyxFQUFFTCxZQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBYUE7QUFFTSxNQUFNTSxrQkFBa0IsR0FBR2pCLHFEQUFXLENBQUMsZ0JBQWdCO0FBQUVrQixLQUFGO0FBQU9DO0FBQVAsQ0FBaEIsRUFBOEI7QUFDM0UsUUFBTVgsSUFBSSxHQUFHVSxHQUFHLENBQUNFLE9BQUosQ0FBWUMsR0FBWixDQUFnQixNQUFoQixDQUFiOztBQUVBLE1BQUksQ0FBQ2IsSUFBTCxFQUFXO0FBQ1YsV0FBTztBQUNOYyxjQUFRLEVBQUU7QUFDVEMsbUJBQVcsRUFBRSxRQURKO0FBRVRDLGlCQUFTLEVBQUU7QUFGRjtBQURKLEtBQVA7QUFNQTs7QUFFRCxTQUFPO0FBQ05DLFNBQUssRUFBRTtBQUNOakI7QUFETTtBQURELEdBQVA7QUFLQSxDQWpCNEMsQ0FBdEMsQzs7Ozs7Ozs7Ozs7QUNwQ1AsNEM7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsbUQiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0aGlzIGZpbGUgaXMgYSB3cmFwcGVyIHdpdGggZGVmYXVsdHMgdG8gYmUgdXNlZCBpbiBib3RoIEFQSSByb3V0ZXMgYW5kIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgIGZ1bmN0aW9uc1xyXG5pbXBvcnQgeyB3aXRoSXJvblNlc3Npb24gfSBmcm9tIFwibmV4dC1pcm9uLXNlc3Npb25cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhTZXNzaW9uKGhhbmRsZXIpIHtcclxuXHRyZXR1cm4gd2l0aElyb25TZXNzaW9uKGhhbmRsZXIsIHtcclxuXHRcdHBhc3N3b3JkOiBcImNvbXBsZXhfcGFzc3dvcmRfYXRfbGVhc3RfMzJfY2hhcmFjdGVyc19sb25nXCIsXHJcblx0XHRjb29raWVOYW1lOiBcIm15YXBwX2Nvb2tpZW5hbWVcIixcclxuXHRcdC8vIGlmIHlvdXIgbG9jYWxob3N0IGlzIHNlcnZlZCBvbiBodHRwOi8vIHRoZW4gZGlzYWJsZSB0aGUgc2VjdXJlIGZsYWdcclxuXHRcdGNvb2tpZU9wdGlvbnM6IHtcclxuXHRcdFx0c2VjdXJlOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCJcclxuXHRcdH1cclxuXHR9KTtcclxufVxyXG4iLCJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgd2l0aFNlc3Npb24gZnJvbSBcIi4uL2xpYi9TZXNzaW9uXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuXG4vLyBjb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XG5cbi8qKiBAcGFyYW0ge2ltcG9ydCgnbmV4dCcpLkluZmVyR2V0U2VydmVyU2lkZVByb3BzVHlwZTx0eXBlb2YgZ2V0U2VydmVyU2lkZVByb3BzPiB9IHByb3BzICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHsgdXNlciB9KSB7XG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG5cdGFzeW5jIGZ1bmN0aW9uIGhhbmRsZUxvZ291dCgpIHtcblx0XHRhd2FpdCBmZXRjaChcIi9hcGkvbG9nb3V0XCIsIHtcblx0XHRcdG1ldGhvZDogXCJQT1NUXCIsXG5cdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0cm91dGVyLnB1c2goXCIvbG9naW5cIik7XG5cdH1cblxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbWluLWgtc2NyZWVuIHB5LTJcIj5cblx0XHRcdDxIZWFkPlxuXHRcdFx0XHQ8dGl0bGU+Q3JlYXRlIE5leHQgQXBwPC90aXRsZT5cblx0XHRcdFx0PGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuXHRcdFx0PC9IZWFkPlxuXG5cdFx0XHQ8bWFpbiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB3LWZ1bGwgZmxleC0xIHB4LTIwIHRleHQtY2VudGVyXCI+XG5cdFx0XHRcdEhlbGxvIFRoZXJlIHt1c2VyLnVzZXJfdW5hbWV9XG5cdFx0XHRcdDxidXR0b24gb25DbGljaz17aGFuZGxlTG9nb3V0fT5Mb2dvdXQ8L2J1dHRvbj5cblx0XHRcdDwvbWFpbj5cblx0XHQ8L2Rpdj5cblx0KTtcbn1cblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IHdpdGhTZXNzaW9uKGFzeW5jIGZ1bmN0aW9uICh7IHJlcSwgcmVzIH0pIHtcblx0Y29uc3QgdXNlciA9IHJlcS5zZXNzaW9uLmdldChcInVzZXJcIik7XG5cblx0aWYgKCF1c2VyKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHJlZGlyZWN0OiB7XG5cdFx0XHRcdGRlc3RpbmF0aW9uOiBcIi9sb2dpblwiLFxuXHRcdFx0XHRwZXJtYW5lbnQ6IGZhbHNlXG5cdFx0XHR9XG5cdFx0fTtcblx0fVxuXG5cdHJldHVybiB7XG5cdFx0cHJvcHM6IHtcblx0XHRcdHVzZXJcblx0XHR9XG5cdH07XG59KTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBwcmlzbWEvY2xpZW50XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LWlyb24tc2Vzc2lvblwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9