(function() {
var exports = {};
exports.id = "pages/api/login";
exports.ids = ["pages/api/login"];
exports.modules = {

/***/ "./pages/api/login.js":
/*!****************************!*\
  !*** ./pages/api/login.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_iron_session__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-iron-session */ "next-iron-session");
/* harmony import */ var next_iron_session__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_iron_session__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @prisma/client */ "@prisma/client");
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_1__);


const prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_1__.PrismaClient();

async function handler(req, res) {
  if (!req.method === "POST") {
    res.status(405).send("Method not allowed");
  }

  const {
    email,
    password
  } = req.body;
  const user = await prisma.users.findMany({
    where: {
      user_email: email,
      user_password: password
    }
  });
  req.session.set("user", user[0]);
  console.log(user[0]);

  if (user[0] === undefined) {
    return res.status(401).send("Unauthorized");
  }

  await req.session.save();
  res.send("session created");
}

/* harmony default export */ __webpack_exports__["default"] = ((0,next_iron_session__WEBPACK_IMPORTED_MODULE_0__.withIronSession)(handler, {
  password: "complex_password_at_least_32_characters_long",
  cookieName: "myapp_cookiename" // if your localhost is served on http:// then disable the secure flag
  // cookieOptions: {
  // 	secure: process.env.NODE_ENV === "production"
  // }

}));

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/api/login.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvbG9naW4uanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHByaXNtYS9jbGllbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWlyb24tc2Vzc2lvblwiIl0sIm5hbWVzIjpbInByaXNtYSIsIlByaXNtYUNsaWVudCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJzdGF0dXMiLCJzZW5kIiwiZW1haWwiLCJwYXNzd29yZCIsImJvZHkiLCJ1c2VyIiwidXNlcnMiLCJmaW5kTWFueSIsIndoZXJlIiwidXNlcl9lbWFpbCIsInVzZXJfcGFzc3dvcmQiLCJzZXNzaW9uIiwic2V0IiwiY29uc29sZSIsImxvZyIsInVuZGVmaW5lZCIsInNhdmUiLCJ3aXRoSXJvblNlc3Npb24iLCJjb29raWVOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsTUFBTUEsTUFBTSxHQUFHLElBQUlDLHdEQUFKLEVBQWY7O0FBRUEsZUFBZUMsT0FBZixDQUF1QkMsR0FBdkIsRUFBNEJDLEdBQTVCLEVBQWlDO0FBQ2hDLE1BQUksQ0FBQ0QsR0FBRyxDQUFDRSxNQUFMLEtBQWdCLE1BQXBCLEVBQTRCO0FBQzNCRCxPQUFHLENBQUNFLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQixvQkFBckI7QUFDQTs7QUFFRCxRQUFNO0FBQUVDLFNBQUY7QUFBU0M7QUFBVCxNQUFzQk4sR0FBRyxDQUFDTyxJQUFoQztBQUVBLFFBQU1DLElBQUksR0FBRyxNQUFNWCxNQUFNLENBQUNZLEtBQVAsQ0FBYUMsUUFBYixDQUFzQjtBQUN4Q0MsU0FBSyxFQUFFO0FBQ05DLGdCQUFVLEVBQUVQLEtBRE47QUFFTlEsbUJBQWEsRUFBRVA7QUFGVDtBQURpQyxHQUF0QixDQUFuQjtBQU9BTixLQUFHLENBQUNjLE9BQUosQ0FBWUMsR0FBWixDQUFnQixNQUFoQixFQUF3QlAsSUFBSSxDQUFDLENBQUQsQ0FBNUI7QUFDQVEsU0FBTyxDQUFDQyxHQUFSLENBQVlULElBQUksQ0FBQyxDQUFELENBQWhCOztBQUNBLE1BQUlBLElBQUksQ0FBQyxDQUFELENBQUosS0FBWVUsU0FBaEIsRUFBMkI7QUFDMUIsV0FBT2pCLEdBQUcsQ0FBQ0UsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCLGNBQXJCLENBQVA7QUFDQTs7QUFDRCxRQUFNSixHQUFHLENBQUNjLE9BQUosQ0FBWUssSUFBWixFQUFOO0FBQ0FsQixLQUFHLENBQUNHLElBQUosQ0FBUyxpQkFBVDtBQUNBOztBQUVELCtEQUFlZ0Isa0VBQWUsQ0FBQ3JCLE9BQUQsRUFBVTtBQUN2Q08sVUFBUSxFQUFFLDhDQUQ2QjtBQUV2Q2UsWUFBVSxFQUFFLGtCQUYyQixDQUd2QztBQUNBO0FBQ0E7QUFDQTs7QUFOdUMsQ0FBVixDQUE5QixFOzs7Ozs7Ozs7OztBQzVCQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSwrQyIsImZpbGUiOiJwYWdlcy9hcGkvbG9naW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB3aXRoSXJvblNlc3Npb24gfSBmcm9tIFwibmV4dC1pcm9uLXNlc3Npb25cIjtcclxuaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XHJcblxyXG5jb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcblx0aWYgKCFyZXEubWV0aG9kID09PSBcIlBPU1RcIikge1xyXG5cdFx0cmVzLnN0YXR1cyg0MDUpLnNlbmQoXCJNZXRob2Qgbm90IGFsbG93ZWRcIik7XHJcblx0fVxyXG5cclxuXHRjb25zdCB7IGVtYWlsLCBwYXNzd29yZCB9ID0gcmVxLmJvZHk7XHJcblxyXG5cdGNvbnN0IHVzZXIgPSBhd2FpdCBwcmlzbWEudXNlcnMuZmluZE1hbnkoe1xyXG5cdFx0d2hlcmU6IHtcclxuXHRcdFx0dXNlcl9lbWFpbDogZW1haWwsXHJcblx0XHRcdHVzZXJfcGFzc3dvcmQ6IHBhc3N3b3JkXHJcblx0XHR9XHJcblx0fSk7XHJcblxyXG5cdHJlcS5zZXNzaW9uLnNldChcInVzZXJcIiwgdXNlclswXSk7XHJcblx0Y29uc29sZS5sb2codXNlclswXSk7XHJcblx0aWYgKHVzZXJbMF0gPT09IHVuZGVmaW5lZCkge1xyXG5cdFx0cmV0dXJuIHJlcy5zdGF0dXMoNDAxKS5zZW5kKFwiVW5hdXRob3JpemVkXCIpO1xyXG5cdH1cclxuXHRhd2FpdCByZXEuc2Vzc2lvbi5zYXZlKCk7XHJcblx0cmVzLnNlbmQoXCJzZXNzaW9uIGNyZWF0ZWRcIik7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhJcm9uU2Vzc2lvbihoYW5kbGVyLCB7XHJcblx0cGFzc3dvcmQ6IFwiY29tcGxleF9wYXNzd29yZF9hdF9sZWFzdF8zMl9jaGFyYWN0ZXJzX2xvbmdcIixcclxuXHRjb29raWVOYW1lOiBcIm15YXBwX2Nvb2tpZW5hbWVcIlxyXG5cdC8vIGlmIHlvdXIgbG9jYWxob3N0IGlzIHNlcnZlZCBvbiBodHRwOi8vIHRoZW4gZGlzYWJsZSB0aGUgc2VjdXJlIGZsYWdcclxuXHQvLyBjb29raWVPcHRpb25zOiB7XHJcblx0Ly8gXHRzZWN1cmU6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIlxyXG5cdC8vIH1cclxufSk7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBwcmlzbWEvY2xpZW50XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LWlyb24tc2Vzc2lvblwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==