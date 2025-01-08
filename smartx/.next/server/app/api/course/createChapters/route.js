"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
  var exports = {};
  exports.id = "app/api/course/createChapters/route";
  exports.ids = ["app/api/course/createChapters/route"];
  exports.modules = {
    /***/ "@prisma/client":
      /*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
      /***/ (module) => {
        module.exports = require("@prisma/client");

        /***/
      },

    /***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
      /*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
      /***/ (module) => {
        module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

        /***/
      },

    /***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
      /*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
      /***/ (module) => {
        module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

        /***/
      },

    /***/ assert:
      /*!*************************!*\
  !*** external "assert" ***!
  \*************************/
      /***/ (module) => {
        module.exports = require("assert");

        /***/
      },

    /***/ events:
      /*!*************************!*\
  !*** external "events" ***!
  \*************************/
      /***/ (module) => {
        module.exports = require("events");

        /***/
      },

    /***/ fs:
      /*!*********************!*\
  !*** external "fs" ***!
  \*********************/
      /***/ (module) => {
        module.exports = require("fs");

        /***/
      },

    /***/ http:
      /*!***********************!*\
  !*** external "http" ***!
  \***********************/
      /***/ (module) => {
        module.exports = require("http");

        /***/
      },

    /***/ https:
      /*!************************!*\
  !*** external "https" ***!
  \************************/
      /***/ (module) => {
        module.exports = require("https");

        /***/
      },

    /***/ os:
      /*!*********************!*\
  !*** external "os" ***!
  \*********************/
      /***/ (module) => {
        module.exports = require("os");

        /***/
      },

    /***/ path:
      /*!***********************!*\
  !*** external "path" ***!
  \***********************/
      /***/ (module) => {
        module.exports = require("path");

        /***/
      },

    /***/ stream:
      /*!*************************!*\
  !*** external "stream" ***!
  \*************************/
      /***/ (module) => {
        module.exports = require("stream");

        /***/
      },

    /***/ tty:
      /*!**********************!*\
  !*** external "tty" ***!
  \**********************/
      /***/ (module) => {
        module.exports = require("tty");

        /***/
      },

    /***/ url:
      /*!**********************!*\
  !*** external "url" ***!
  \**********************/
      /***/ (module) => {
        module.exports = require("url");

        /***/
      },

    /***/ util:
      /*!***********************!*\
  !*** external "util" ***!
  \***********************/
      /***/ (module) => {
        module.exports = require("util");

        /***/
      },

    /***/ zlib:
      /*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
      /***/ (module) => {
        module.exports = require("zlib");

        /***/
      },

    /***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fcourse%2FcreateChapters%2Froute&page=%2Fapi%2Fcourse%2FcreateChapters%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcourse%2FcreateChapters%2Froute.ts&appDir=C%3A%5CUsers%5Cshrey%5CMy%20PC%20(XPS)%5CDownloads%5CSmartLearningX%20-%20Copy%5Csmartx%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cshrey%5CMy%20PC%20(XPS)%5CDownloads%5CSmartLearningX%20-%20Copy%5Csmartx&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
      /*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fcourse%2FcreateChapters%2Froute&page=%2Fapi%2Fcourse%2FcreateChapters%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcourse%2FcreateChapters%2Froute.ts&appDir=C%3A%5CUsers%5Cshrey%5CMy%20PC%20(XPS)%5CDownloads%5CSmartLearningX%20-%20Copy%5Csmartx%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cshrey%5CMy%20PC%20(XPS)%5CDownloads%5CSmartLearningX%20-%20Copy%5Csmartx&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ "(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ "(rsc)/./node_modules/next/dist/server/future/route-kind.js");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ "(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_shrey_My_PC_XPS_Downloads_SmartLearningX_Copy_smartx_src_app_api_course_createChapters_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/course/createChapters/route.ts */ "(rsc)/./src/app/api/course/createChapters/route.ts");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = ""\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: "/api/course/createChapters/route",\n        pathname: "/api/course/createChapters",\n        filename: "route",\n        bundlePath: "app/api/course/createChapters/route"\n    },\n    resolvedPagePath: "C:\\\\Users\\\\shrey\\\\My PC (XPS)\\\\Downloads\\\\SmartLearningX - Copy\\\\smartx\\\\src\\\\app\\\\api\\\\course\\\\createChapters\\\\route.ts",\n    nextConfigOutput,\n    userland: C_Users_shrey_My_PC_XPS_Downloads_SmartLearningX_Copy_smartx_src_app_api_course_createChapters_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we\'ve moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = "/api/course/createChapters/route";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZjb3Vyc2UlMkZjcmVhdGVDaGFwdGVycyUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGY291cnNlJTJGY3JlYXRlQ2hhcHRlcnMlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZjb3Vyc2UlMkZjcmVhdGVDaGFwdGVycyUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNzaHJleSU1Q015JTIwUEMlMjAoWFBTKSU1Q0Rvd25sb2FkcyU1Q1NtYXJ0TGVhcm5pbmdYJTIwLSUyMENvcHklNUNzbWFydHglNUNzcmMlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUMlM0ElNUNVc2VycyU1Q3NocmV5JTVDTXklMjBQQyUyMChYUFMpJTVDRG93bmxvYWRzJTVDU21hcnRMZWFybmluZ1glMjAtJTIwQ29weSU1Q3NtYXJ0eCZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDd0U7QUFDcko7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRUFBaUU7QUFDekU7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUN1SDs7QUFFdkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zbWFydHgvP2ZiZmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcc2hyZXlcXFxcTXkgUEMgKFhQUylcXFxcRG93bmxvYWRzXFxcXFNtYXJ0TGVhcm5pbmdYIC0gQ29weVxcXFxzbWFydHhcXFxcc3JjXFxcXGFwcFxcXFxhcGlcXFxcY291cnNlXFxcXGNyZWF0ZUNoYXB0ZXJzXFxcXHJvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9jb3Vyc2UvY3JlYXRlQ2hhcHRlcnMvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9jb3Vyc2UvY3JlYXRlQ2hhcHRlcnNcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2NvdXJzZS9jcmVhdGVDaGFwdGVycy9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkM6XFxcXFVzZXJzXFxcXHNocmV5XFxcXE15IFBDIChYUFMpXFxcXERvd25sb2Fkc1xcXFxTbWFydExlYXJuaW5nWCAtIENvcHlcXFxcc21hcnR4XFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXGNvdXJzZVxcXFxjcmVhdGVDaGFwdGVyc1xcXFxyb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvY291cnNlL2NyZWF0ZUNoYXB0ZXJzL3JvdXRlXCI7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHNlcnZlckhvb2tzLFxuICAgICAgICBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fcourse%2FcreateChapters%2Froute&page=%2Fapi%2Fcourse%2FcreateChapters%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcourse%2FcreateChapters%2Froute.ts&appDir=C%3A%5CUsers%5Cshrey%5CMy%20PC%20(XPS)%5CDownloads%5CSmartLearningX%20-%20Copy%5Csmartx%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cshrey%5CMy%20PC%20(XPS)%5CDownloads%5CSmartLearningX%20-%20Copy%5Csmartx&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n'
        );

        /***/
      },

    /***/ "(rsc)/./src/app/api/course/createChapters/route.ts":
      /*!****************************************************!*\
  !*** ./src/app/api/course/createChapters/route.ts ***!
  \****************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/db */ "(rsc)/./src/lib/db.ts");\n/* harmony import */ var _lib_gemini__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/gemini */ "(rsc)/./src/lib/gemini.ts");\n/* harmony import */ var _lib_unsplash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/unsplash */ "(rsc)/./src/lib/unsplash.ts");\n/* harmony import */ var _validators_course__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/validators/course */ "(rsc)/./src/validators/course.ts");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/server */ "(rsc)/./node_modules/next/dist/api/server.js");\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! zod */ "(rsc)/./node_modules/zod/lib/index.mjs");\n// api/course/createChapters.ts\n\n\n\n\n\n\nasync function POST(req, res) {\n    try {\n        const body = await req.json();\n        const { title, units } = _validators_course__WEBPACK_IMPORTED_MODULE_3__.createChaptersSchema.parse(body);\n        const userPrompts = units.map((unit)=>`It is your job to create a chapter about ${unit} for the course "${title}". Provide a detailed YouTube search query that can be used to find an informative educational video for this chapter. The query should give an educational informative course in English on YouTube.`);\n        let output_units = await (0,_lib_gemini__WEBPACK_IMPORTED_MODULE_1__.strict_output)("You are an AI capable of curating course content, coming up with relevant chapter titles, and finding relevant YouTube videos for each chapter", userPrompts, {\n            title: "title of the unit",\n            chapters: "an array of chapters, each chapter should have a youtube_search_query (in the search query please append -in English in the end to get only english videos )and a chapter_title key in the JSON object"\n        });\n        const imageSearchTerm = await (0,_lib_gemini__WEBPACK_IMPORTED_MODULE_1__.strict_output)("you are an AI capable of finding the most relevant image for a course", `Please provide a good image search term in one to two words only for the title of a course about ${title}. This search term will be fed into the unsplash API, so make sure it is a good search term that will return good results.Make sure the search term is simple for the unsplash API yet effective`, {\n            image_search_term: "a good search term for the title of the course"\n        });\n        const course_image = await (0,_lib_unsplash__WEBPACK_IMPORTED_MODULE_2__.getUnsplashImage)(imageSearchTerm.image_search_term);\n        const course = await _lib_db__WEBPACK_IMPORTED_MODULE_0__.prisma.course.create({\n            data: {\n                name: title,\n                image: course_image\n            }\n        });\n        for (const unit of output_units){\n            const title = unit.title;\n            const prismaUnit = await _lib_db__WEBPACK_IMPORTED_MODULE_0__.prisma.unit.create({\n                data: {\n                    name: title,\n                    courseId: course.id\n                }\n            });\n            await _lib_db__WEBPACK_IMPORTED_MODULE_0__.prisma.chapter.createMany({\n                data: unit.chapters.map((chapter)=>{\n                    return {\n                        name: chapter.chapter_title,\n                        youtubeSearchQuery: chapter.youtube_search_query,\n                        unitId: prismaUnit.id\n                    };\n                })\n            });\n        }\n        console.log(output_units);\n        return next_server__WEBPACK_IMPORTED_MODULE_4__.NextResponse.json({\n            course_id: course.id\n        });\n    } catch (error) {\n        if (error instanceof zod__WEBPACK_IMPORTED_MODULE_5__.ZodError) {\n            return new next_server__WEBPACK_IMPORTED_MODULE_4__.NextResponse("invalid body", {\n                status: 400\n            });\n        } else {\n            console.error(error);\n            return new next_server__WEBPACK_IMPORTED_MODULE_4__.NextResponse("internal server error", {\n                status: 500\n            });\n        }\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9jb3Vyc2UvY3JlYXRlQ2hhcHRlcnMvcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLCtCQUErQjtBQUNHO0FBQ1c7QUFDSztBQUNTO0FBQ2hCO0FBQ1o7QUFFeEIsZUFBZU0sS0FBS0MsR0FBWSxFQUFFQyxHQUFhO0lBQ2xELElBQUk7UUFDQSxNQUFNQyxPQUFPLE1BQU1GLElBQUlHLElBQUk7UUFDM0IsTUFBTSxFQUFFQyxLQUFLLEVBQUVDLEtBQUssRUFBRSxHQUFHVCxvRUFBb0JBLENBQUNVLEtBQUssQ0FBQ0o7UUFVcEQsTUFBTUssY0FBY0YsTUFBTUcsR0FBRyxDQUN6QixDQUFDQyxPQUFTLENBQUMseUNBQXlDLEVBQUVBLEtBQUssaUJBQWlCLEVBQUVMLE1BQU0scU1BQXFNLENBQUM7UUFHOVIsSUFBSU0sZUFBNEIsTUFBTWhCLDBEQUFhQSxDQUMvQyxrSkFDQWEsYUFDQTtZQUNJSCxPQUFPO1lBQ1BPLFVBQVU7UUFDZDtRQUdKLE1BQU1DLGtCQUFrQixNQUFNbEIsMERBQWFBLENBQ3ZDLHlFQUNBLENBQUMsaUdBQWlHLEVBQUVVLE1BQU0sZ01BQWdNLENBQUMsRUFDM1M7WUFDRVMsbUJBQW1CO1FBQ3JCO1FBR0osTUFBTUMsZUFBZSxNQUFNbkIsK0RBQWdCQSxDQUN2Q2lCLGdCQUFnQkMsaUJBQWlCO1FBRXJDLE1BQU1FLFNBQVMsTUFBTXRCLDJDQUFNQSxDQUFDc0IsTUFBTSxDQUFDQyxNQUFNLENBQUM7WUFDMUNDLE1BQU07Z0JBQ0ZDLE1BQU1kO2dCQUNOZSxPQUFPTDtZQUNMO1FBQ047UUFFQSxLQUFLLE1BQU1MLFFBQVFDLGFBQWM7WUFDN0IsTUFBTU4sUUFBUUssS0FBS0wsS0FBSztZQUN4QixNQUFNZ0IsYUFBYSxNQUFNM0IsMkNBQU1BLENBQUNnQixJQUFJLENBQUNPLE1BQU0sQ0FBQztnQkFDMUNDLE1BQU07b0JBQ0pDLE1BQU1kO29CQUNOaUIsVUFBVU4sT0FBT08sRUFBRTtnQkFDckI7WUFDRjtZQUNKLE1BQU03QiwyQ0FBTUEsQ0FBQzhCLE9BQU8sQ0FBQ0MsVUFBVSxDQUFDO2dCQUM1QlAsTUFBTVIsS0FBS0UsUUFBUSxDQUFDSCxHQUFHLENBQUMsQ0FBQ2U7b0JBQ3JCLE9BQU87d0JBQ1BMLE1BQU1LLFFBQVFFLGFBQWE7d0JBQzNCQyxvQkFBb0JILFFBQVFJLG9CQUFvQjt3QkFDaERDLFFBQVFSLFdBQVdFLEVBQUU7b0JBQ3JCO2dCQUNKO1lBQ0E7UUFDSjtRQUlBTyxRQUFRQyxHQUFHLENBQUNwQjtRQUNaLE9BQU9iLHFEQUFZQSxDQUFDTSxJQUFJLENBQUM7WUFBQzRCLFdBQVdoQixPQUFPTyxFQUFFO1FBQUE7SUFFbEQsRUFBRSxPQUFPVSxPQUFPO1FBQ1osSUFBSUEsaUJBQWlCbEMseUNBQVFBLEVBQUU7WUFDM0IsT0FBTyxJQUFJRCxxREFBWUEsQ0FBQyxnQkFBZ0I7Z0JBQUVvQyxRQUFRO1lBQUk7UUFDMUQsT0FBTztZQUNISixRQUFRRyxLQUFLLENBQUNBO1lBQ2QsT0FBTyxJQUFJbkMscURBQVlBLENBQUMseUJBQXlCO2dCQUFFb0MsUUFBUTtZQUFJO1FBQ25FO0lBQ0o7QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL3NtYXJ0eC8uL3NyYy9hcHAvYXBpL2NvdXJzZS9jcmVhdGVDaGFwdGVycy9yb3V0ZS50cz85ZmFkIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGFwaS9jb3Vyc2UvY3JlYXRlQ2hhcHRlcnMudHNcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gXCJAL2xpYi9kYlwiO1xuaW1wb3J0IHsgc3RyaWN0X291dHB1dCB9IGZyb20gXCJAL2xpYi9nZW1pbmlcIjtcbmltcG9ydCB7IGdldFVuc3BsYXNoSW1hZ2UgfSBmcm9tIFwiQC9saWIvdW5zcGxhc2hcIjtcbmltcG9ydCB7IGNyZWF0ZUNoYXB0ZXJzU2NoZW1hIH0gZnJvbSBcIkAvdmFsaWRhdG9ycy9jb3Vyc2VcIjtcbmltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xuaW1wb3J0IHsgWm9kRXJyb3IgfSBmcm9tIFwiem9kXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGJvZHkgPSBhd2FpdCByZXEuanNvbigpO1xuICAgICAgICBjb25zdCB7IHRpdGxlLCB1bml0cyB9ID0gY3JlYXRlQ2hhcHRlcnNTY2hlbWEucGFyc2UoYm9keSk7XG5cbiAgICAgICAgdHlwZSBvdXRwdXRVbml0cyA9IHtcbiAgICAgICAgICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgICAgICAgICBjaGFwdGVyczoge1xuICAgICAgICAgICAgICAgIHlvdXR1YmVfc2VhcmNoX3F1ZXJ5OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgY2hhcHRlcl90aXRsZTogc3RyaW5nO1xuICAgICAgICAgICAgfVtdO1xuICAgICAgICB9W107XG5cbiAgICAgICAgY29uc3QgdXNlclByb21wdHMgPSB1bml0cy5tYXAoXG4gICAgICAgICAgICAodW5pdCkgPT4gYEl0IGlzIHlvdXIgam9iIHRvIGNyZWF0ZSBhIGNoYXB0ZXIgYWJvdXQgJHt1bml0fSBmb3IgdGhlIGNvdXJzZSBcIiR7dGl0bGV9XCIuIFByb3ZpZGUgYSBkZXRhaWxlZCBZb3VUdWJlIHNlYXJjaCBxdWVyeSB0aGF0IGNhbiBiZSB1c2VkIHRvIGZpbmQgYW4gaW5mb3JtYXRpdmUgZWR1Y2F0aW9uYWwgdmlkZW8gZm9yIHRoaXMgY2hhcHRlci4gVGhlIHF1ZXJ5IHNob3VsZCBnaXZlIGFuIGVkdWNhdGlvbmFsIGluZm9ybWF0aXZlIGNvdXJzZSBpbiBFbmdsaXNoIG9uIFlvdVR1YmUuYFxuICAgICAgICApO1xuXG4gICAgICAgIGxldCBvdXRwdXRfdW5pdHM6IG91dHB1dFVuaXRzID0gYXdhaXQgc3RyaWN0X291dHB1dChcbiAgICAgICAgICAgIFwiWW91IGFyZSBhbiBBSSBjYXBhYmxlIG9mIGN1cmF0aW5nIGNvdXJzZSBjb250ZW50LCBjb21pbmcgdXAgd2l0aCByZWxldmFudCBjaGFwdGVyIHRpdGxlcywgYW5kIGZpbmRpbmcgcmVsZXZhbnQgWW91VHViZSB2aWRlb3MgZm9yIGVhY2ggY2hhcHRlclwiLFxuICAgICAgICAgICAgdXNlclByb21wdHMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6IFwidGl0bGUgb2YgdGhlIHVuaXRcIixcbiAgICAgICAgICAgICAgICBjaGFwdGVyczogXCJhbiBhcnJheSBvZiBjaGFwdGVycywgZWFjaCBjaGFwdGVyIHNob3VsZCBoYXZlIGEgeW91dHViZV9zZWFyY2hfcXVlcnkgKGluIHRoZSBzZWFyY2ggcXVlcnkgcGxlYXNlIGFwcGVuZCAtaW4gRW5nbGlzaCBpbiB0aGUgZW5kIHRvIGdldCBvbmx5IGVuZ2xpc2ggdmlkZW9zIClhbmQgYSBjaGFwdGVyX3RpdGxlIGtleSBpbiB0aGUgSlNPTiBvYmplY3RcIixcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCBpbWFnZVNlYXJjaFRlcm0gPSBhd2FpdCBzdHJpY3Rfb3V0cHV0KFxuICAgICAgICAgICAgXCJ5b3UgYXJlIGFuIEFJIGNhcGFibGUgb2YgZmluZGluZyB0aGUgbW9zdCByZWxldmFudCBpbWFnZSBmb3IgYSBjb3Vyc2VcIixcbiAgICAgICAgICAgIGBQbGVhc2UgcHJvdmlkZSBhIGdvb2QgaW1hZ2Ugc2VhcmNoIHRlcm0gaW4gb25lIHRvIHR3byB3b3JkcyBvbmx5IGZvciB0aGUgdGl0bGUgb2YgYSBjb3Vyc2UgYWJvdXQgJHt0aXRsZX0uIFRoaXMgc2VhcmNoIHRlcm0gd2lsbCBiZSBmZWQgaW50byB0aGUgdW5zcGxhc2ggQVBJLCBzbyBtYWtlIHN1cmUgaXQgaXMgYSBnb29kIHNlYXJjaCB0ZXJtIHRoYXQgd2lsbCByZXR1cm4gZ29vZCByZXN1bHRzLk1ha2Ugc3VyZSB0aGUgc2VhcmNoIHRlcm0gaXMgc2ltcGxlIGZvciB0aGUgdW5zcGxhc2ggQVBJIHlldCBlZmZlY3RpdmVgLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBpbWFnZV9zZWFyY2hfdGVybTogXCJhIGdvb2Qgc2VhcmNoIHRlcm0gZm9yIHRoZSB0aXRsZSBvZiB0aGUgY291cnNlXCIsXG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICBcbiAgICAgICAgY29uc3QgY291cnNlX2ltYWdlID0gYXdhaXQgZ2V0VW5zcGxhc2hJbWFnZShcbiAgICAgICAgICAgIGltYWdlU2VhcmNoVGVybS5pbWFnZV9zZWFyY2hfdGVybVxuICAgICAgICAgICk7XG4gICAgICAgIGNvbnN0IGNvdXJzZSA9IGF3YWl0IHByaXNtYS5jb3Vyc2UuY3JlYXRlKHtcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgbmFtZTogdGl0bGUsXG4gICAgICAgICAgICBpbWFnZTogY291cnNlX2ltYWdlLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICB9KTtcblxuICAgICAgICBmb3IgKGNvbnN0IHVuaXQgb2Ygb3V0cHV0X3VuaXRzKSB7XG4gICAgICAgICAgICBjb25zdCB0aXRsZSA9IHVuaXQudGl0bGU7XG4gICAgICAgICAgICBjb25zdCBwcmlzbWFVbml0ID0gYXdhaXQgcHJpc21hLnVuaXQuY3JlYXRlKHtcbiAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIG5hbWU6IHRpdGxlLFxuICAgICAgICAgICAgICAgIGNvdXJzZUlkOiBjb3Vyc2UuaWQsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgYXdhaXQgcHJpc21hLmNoYXB0ZXIuY3JlYXRlTWFueSh7XG4gICAgICAgICAgICBkYXRhOiB1bml0LmNoYXB0ZXJzLm1hcCgoY2hhcHRlcikgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbmFtZTogY2hhcHRlci5jaGFwdGVyX3RpdGxlLFxuICAgICAgICAgICAgICAgIHlvdXR1YmVTZWFyY2hRdWVyeTogY2hhcHRlci55b3V0dWJlX3NlYXJjaF9xdWVyeSxcbiAgICAgICAgICAgICAgICB1bml0SWQ6IHByaXNtYVVuaXQuaWQsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuXG4gICAgICAgIFxuICAgICAgICBjb25zb2xlLmxvZyhvdXRwdXRfdW5pdHMpO1xuICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oe2NvdXJzZV9pZDogY291cnNlLmlkfSk7XG5cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBab2RFcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBOZXh0UmVzcG9uc2UoXCJpbnZhbGlkIGJvZHlcIiwgeyBzdGF0dXM6IDQwMCB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBOZXh0UmVzcG9uc2UoXCJpbnRlcm5hbCBzZXJ2ZXIgZXJyb3JcIiwgeyBzdGF0dXM6IDUwMCB9KTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdLCJuYW1lcyI6WyJwcmlzbWEiLCJzdHJpY3Rfb3V0cHV0IiwiZ2V0VW5zcGxhc2hJbWFnZSIsImNyZWF0ZUNoYXB0ZXJzU2NoZW1hIiwiTmV4dFJlc3BvbnNlIiwiWm9kRXJyb3IiLCJQT1NUIiwicmVxIiwicmVzIiwiYm9keSIsImpzb24iLCJ0aXRsZSIsInVuaXRzIiwicGFyc2UiLCJ1c2VyUHJvbXB0cyIsIm1hcCIsInVuaXQiLCJvdXRwdXRfdW5pdHMiLCJjaGFwdGVycyIsImltYWdlU2VhcmNoVGVybSIsImltYWdlX3NlYXJjaF90ZXJtIiwiY291cnNlX2ltYWdlIiwiY291cnNlIiwiY3JlYXRlIiwiZGF0YSIsIm5hbWUiLCJpbWFnZSIsInByaXNtYVVuaXQiLCJjb3Vyc2VJZCIsImlkIiwiY2hhcHRlciIsImNyZWF0ZU1hbnkiLCJjaGFwdGVyX3RpdGxlIiwieW91dHViZVNlYXJjaFF1ZXJ5IiwieW91dHViZV9zZWFyY2hfcXVlcnkiLCJ1bml0SWQiLCJjb25zb2xlIiwibG9nIiwiY291cnNlX2lkIiwiZXJyb3IiLCJzdGF0dXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/course/createChapters/route.ts\n'
        );

        /***/
      },

    /***/ "(rsc)/./src/lib/db.ts":
      /*!***********************!*\
  !*** ./src/lib/db.ts ***!
  \***********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   prisma: () => (/* binding */ prisma)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ "@prisma/client");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var server_only__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! server-only */ "(rsc)/./node_modules/next/dist/compiled/server-only/empty.js");\n/* harmony import */ var server_only__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(server_only__WEBPACK_IMPORTED_MODULE_1__);\n\n\nlet prisma;\nif (false) {} else {\n    if (!global.cachedPrisma) {\n        global.cachedPrisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n    }\n    prisma = global.cachedPrisma;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL2RiLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQThDO0FBQ3pCO0FBT2QsSUFBSUMsT0FBcUI7QUFDaEMsSUFBSUMsS0FBcUMsRUFBRSxFQUUxQyxNQUFNO0lBQ0wsSUFBSSxDQUFDQyxPQUFPQyxZQUFZLEVBQUU7UUFDeEJELE9BQU9DLFlBQVksR0FBRyxJQUFJSix3REFBWUE7SUFDeEM7SUFDQUMsU0FBU0UsT0FBT0MsWUFBWTtBQUM5QiIsInNvdXJjZXMiOlsid2VicGFjazovL3NtYXJ0eC8uL3NyYy9saWIvZGIudHM/OWU0ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcbmltcG9ydCBcInNlcnZlci1vbmx5XCI7XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXZhciwgbm8tdW51c2VkLXZhcnNcbiAgdmFyIGNhY2hlZFByaXNtYTogUHJpc21hQ2xpZW50O1xufVxuXG5leHBvcnQgbGV0IHByaXNtYTogUHJpc21hQ2xpZW50O1xuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIikge1xuICBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XG59IGVsc2Uge1xuICBpZiAoIWdsb2JhbC5jYWNoZWRQcmlzbWEpIHtcbiAgICBnbG9iYWwuY2FjaGVkUHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xuICB9XG4gIHByaXNtYSA9IGdsb2JhbC5jYWNoZWRQcmlzbWE7XG59Il0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsInByaXNtYSIsInByb2Nlc3MiLCJnbG9iYWwiLCJjYWNoZWRQcmlzbWEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/db.ts\n'
        );

        /***/
      },

    /***/ "(rsc)/./src/lib/gemini.ts":
      /*!***************************!*\
  !*** ./src/lib/gemini.ts ***!
  \***************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   strict_output: () => (/* binding */ strict_output)\n/* harmony export */ });\n/* harmony import */ var _google_generative_ai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @google/generative-ai */ "(rsc)/./node_modules/@google/generative-ai/dist/index.mjs");\n\nconst genAI = new _google_generative_ai__WEBPACK_IMPORTED_MODULE_0__.GoogleGenerativeAI("<Google API Key>");\nasync function strict_output(system_prompt, user_prompt, output_format, default_category = "", output_value_only = false, model = "gemini-pro", temperature = 1, num_tries = 3, verbose = false) {\n    const list_input = Array.isArray(user_prompt);\n    const dynamic_elements = /<.*?>/.test(JSON.stringify(output_format));\n    const list_output = /\\[.*?\\]/.test(JSON.stringify(output_format));\n    let error_msg = "";\n    const generativeModel = genAI.getGenerativeModel({\n        model\n    });\n    for(let i = 0; i < num_tries; i++){\n        let output_format_prompt = `\\nYou are to output ${list_output && "an array of objects in"} the following in json format: ${JSON.stringify(output_format)}. \\nDo not put quotation marks or escape character \\\\ in the output fields.`;\n        if (list_output) {\n            output_format_prompt += `\\nIf output field is a list, classify output into the best element of the list.`;\n        }\n        if (dynamic_elements) {\n            output_format_prompt += `\\nAny text enclosed by < and > indicates you must generate content to replace it. Example input: Go to <location>, Example output: Go to the garden\\nAny output key containing < and > indicates you must generate the key name to replace it. Example input: {\'<location>\': \'description of location\'}, Example output: {school: a place for education}`;\n        }\n        if (list_input) {\n            output_format_prompt += `\\nGenerate an array of json, one json for each input element.`;\n        }\n        const prompt = `${system_prompt}${output_format_prompt}${error_msg}\\n\\n${user_prompt.toString()}`;\n        const result = await generativeModel.generateContent(prompt);\n        const response = await result.response;\n        const text = response.text();\n        if (verbose) {\n            console.log("System prompt:", prompt);\n            console.log("\\nGemini response:", text);\n        }\n        try {\n            // Ensure proper escaping of quotes within the JSON string\n            const sanitizedText = text.replace(/\\\\n/g, "\\\\\\\\n").replace(/\\\\"/g, \'\\\\\\\\"\');\n            const cleanedText = sanitizedText.replace(/\\n/g, "");\n            let output = JSON.parse(cleanedText);\n            if (list_input) {\n                if (!Array.isArray(output)) {\n                    throw new Error("Output format not in an array of json");\n                }\n            } else {\n                output = [\n                    output\n                ];\n            }\n            for(let index = 0; index < output.length; index++){\n                for(const key in output_format){\n                    if (/<.*?>/.test(key)) {\n                        continue;\n                    }\n                    if (!(key in output[index])) {\n                        throw new Error(`${key} not in json output`);\n                    }\n                    if (Array.isArray(output_format[key])) {\n                        const choices = output_format[key];\n                        if (Array.isArray(output[index][key])) {\n                            output[index][key] = output[index][key][0];\n                        }\n                        if (!choices.includes(output[index][key]) && default_category) {\n                            output[index][key] = default_category;\n                        }\n                        if (output[index][key].includes(":")) {\n                            output[index][key] = output[index][key].split(":")[0];\n                        }\n                    }\n                }\n                if (output_value_only) {\n                    output[index] = Object.values(output[index]);\n                    if (output[index].length === 1) {\n                        output[index] = output[index][0];\n                    }\n                }\n            }\n            return list_input ? output : output[0];\n        } catch (e) {\n            error_msg = `\\n\\nResult: ${text}\\n\\nError message: ${e}`;\n            console.log("An exception occurred:", e);\n            console.log("Current invalid json format ", text);\n        }\n    }\n    return [];\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFNLENBQUNFLElBQUksQ0FBQyxFQUFFO3dCQUM1Qzt3QkFDQSxJQUFJLENBQUNDLFFBQVFDLFFBQVEsQ0FBQ1AsTUFBTSxDQUFDRyxNQUFNLENBQUNFLElBQUksS0FBS25DLGtCQUFrQjs0QkFDN0Q4QixNQUFNLENBQUNHLE1BQU0sQ0FBQ0UsSUFBSSxHQUFHbkM7d0JBQ3ZCO3dCQUNBLElBQUk4QixNQUFNLENBQUNHLE1BQU0sQ0FBQ0UsSUFBSSxDQUFDRSxRQUFRLENBQUMsTUFBTTs0QkFDcENQLE1BQU0sQ0FBQ0csTUFBTSxDQUFDRSxJQUFJLEdBQUdMLE1BQU0sQ0FBQ0csTUFBTSxDQUFDRSxJQUFJLENBQUNHLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRTt3QkFDdkQ7b0JBQ0Y7Z0JBQ0Y7Z0JBRUEsSUFBSXJDLG1CQUFtQjtvQkFDckI2QixNQUFNLENBQUNHLE1BQU0sR0FBR00sT0FBT0MsTUFBTSxDQUFDVixNQUFNLENBQUNHLE1BQU07b0JBQzNDLElBQUlILE1BQU0sQ0FBQ0csTUFBTSxDQUFDQyxNQUFNLEtBQUssR0FBRzt3QkFDOUJKLE1BQU0sQ0FBQ0csTUFBTSxHQUFHSCxNQUFNLENBQUNHLE1BQU0sQ0FBQyxFQUFFO29CQUNsQztnQkFDRjtZQUNGO1lBRUEsT0FBTzNCLGFBQWF3QixTQUFTQSxNQUFNLENBQUMsRUFBRTtRQUN4QyxFQUFFLE9BQU9XLEdBQUc7WUFDVjNCLFlBQVksQ0FBQyxZQUFZLEVBQUVVLEtBQUssbUJBQW1CLEVBQUVpQixFQUFFLENBQUM7WUFDeERoQixRQUFRQyxHQUFHLENBQUMsMEJBQTBCZTtZQUN0Q2hCLFFBQVFDLEdBQUcsQ0FBQyxnQ0FBZ0NGO1FBQzlDO0lBQ0Y7SUFFQSxPQUFPLEVBQUU7QUFDWCIsInNvdXJjZXMiOlsid2VicGFjazovL3NtYXJ0eC8uL3NyYy9saWIvZ2VtaW5pLnRzPzk5NGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR29vZ2xlR2VuZXJhdGl2ZUFJIH0gZnJvbSBcIkBnb29nbGUvZ2VuZXJhdGl2ZS1haVwiO1xuXG5jb25zdCBnZW5BSSA9IG5ldyBHb29nbGVHZW5lcmF0aXZlQUkoXCJBSXphU3lEZDJQOHo0OVRkQVNyNzJQWjFxZ3J4ZzVuQlFLZm9Bb0VcIik7XG5cbmludGVyZmFjZSBPdXRwdXRGb3JtYXQge1xuICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB8IE91dHB1dEZvcm1hdDtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHN0cmljdF9vdXRwdXQoXG4gIHN5c3RlbV9wcm9tcHQ6IHN0cmluZyxcbiAgdXNlcl9wcm9tcHQ6IHN0cmluZyB8IHN0cmluZ1tdLFxuICBvdXRwdXRfZm9ybWF0OiBPdXRwdXRGb3JtYXQsXG4gIGRlZmF1bHRfY2F0ZWdvcnk6IHN0cmluZyA9IFwiXCIsXG4gIG91dHB1dF92YWx1ZV9vbmx5OiBib29sZWFuID0gZmFsc2UsXG4gIG1vZGVsOiBzdHJpbmcgPSBcImdlbWluaS1wcm9cIixcbiAgdGVtcGVyYXR1cmU6IG51bWJlciA9IDEsXG4gIG51bV90cmllczogbnVtYmVyID0gMyxcbiAgdmVyYm9zZTogYm9vbGVhbiA9IGZhbHNlXG4pIHtcbiAgY29uc3QgbGlzdF9pbnB1dDogYm9vbGVhbiA9IEFycmF5LmlzQXJyYXkodXNlcl9wcm9tcHQpO1xuICBjb25zdCBkeW5hbWljX2VsZW1lbnRzOiBib29sZWFuID0gLzwuKj8+Ly50ZXN0KEpTT04uc3RyaW5naWZ5KG91dHB1dF9mb3JtYXQpKTtcbiAgY29uc3QgbGlzdF9vdXRwdXQ6IGJvb2xlYW4gPSAvXFxbLio/XFxdLy50ZXN0KEpTT04uc3RyaW5naWZ5KG91dHB1dF9mb3JtYXQpKTtcbiAgbGV0IGVycm9yX21zZzogc3RyaW5nID0gXCJcIjtcblxuICBjb25zdCBnZW5lcmF0aXZlTW9kZWwgPSBnZW5BSS5nZXRHZW5lcmF0aXZlTW9kZWwoeyBtb2RlbCB9KTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IG51bV90cmllczsgaSsrKSB7XG4gICAgbGV0IG91dHB1dF9mb3JtYXRfcHJvbXB0OiBzdHJpbmcgPSBgXFxuWW91IGFyZSB0byBvdXRwdXQgJHtcbiAgICAgIGxpc3Rfb3V0cHV0ICYmIFwiYW4gYXJyYXkgb2Ygb2JqZWN0cyBpblwiXG4gICAgfSB0aGUgZm9sbG93aW5nIGluIGpzb24gZm9ybWF0OiAke0pTT04uc3RyaW5naWZ5KFxuICAgICAgb3V0cHV0X2Zvcm1hdFxuICAgICl9LiBcXG5EbyBub3QgcHV0IHF1b3RhdGlvbiBtYXJrcyBvciBlc2NhcGUgY2hhcmFjdGVyIFxcXFwgaW4gdGhlIG91dHB1dCBmaWVsZHMuYDtcblxuICAgIGlmIChsaXN0X291dHB1dCkge1xuICAgICAgb3V0cHV0X2Zvcm1hdF9wcm9tcHQgKz0gYFxcbklmIG91dHB1dCBmaWVsZCBpcyBhIGxpc3QsIGNsYXNzaWZ5IG91dHB1dCBpbnRvIHRoZSBiZXN0IGVsZW1lbnQgb2YgdGhlIGxpc3QuYDtcbiAgICB9XG5cbiAgICBpZiAoZHluYW1pY19lbGVtZW50cykge1xuICAgICAgb3V0cHV0X2Zvcm1hdF9wcm9tcHQgKz0gYFxcbkFueSB0ZXh0IGVuY2xvc2VkIGJ5IDwgYW5kID4gaW5kaWNhdGVzIHlvdSBtdXN0IGdlbmVyYXRlIGNvbnRlbnQgdG8gcmVwbGFjZSBpdC4gRXhhbXBsZSBpbnB1dDogR28gdG8gPGxvY2F0aW9uPiwgRXhhbXBsZSBvdXRwdXQ6IEdvIHRvIHRoZSBnYXJkZW5cXG5Bbnkgb3V0cHV0IGtleSBjb250YWluaW5nIDwgYW5kID4gaW5kaWNhdGVzIHlvdSBtdXN0IGdlbmVyYXRlIHRoZSBrZXkgbmFtZSB0byByZXBsYWNlIGl0LiBFeGFtcGxlIGlucHV0OiB7Jzxsb2NhdGlvbj4nOiAnZGVzY3JpcHRpb24gb2YgbG9jYXRpb24nfSwgRXhhbXBsZSBvdXRwdXQ6IHtzY2hvb2w6IGEgcGxhY2UgZm9yIGVkdWNhdGlvbn1gO1xuICAgIH1cblxuICAgIGlmIChsaXN0X2lucHV0KSB7XG4gICAgICBvdXRwdXRfZm9ybWF0X3Byb21wdCArPSBgXFxuR2VuZXJhdGUgYW4gYXJyYXkgb2YganNvbiwgb25lIGpzb24gZm9yIGVhY2ggaW5wdXQgZWxlbWVudC5gO1xuICAgIH1cblxuICAgIGNvbnN0IHByb21wdCA9IGAke3N5c3RlbV9wcm9tcHR9JHtvdXRwdXRfZm9ybWF0X3Byb21wdH0ke2Vycm9yX21zZ31cXG5cXG4ke3VzZXJfcHJvbXB0LnRvU3RyaW5nKCl9YDtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZW5lcmF0aXZlTW9kZWwuZ2VuZXJhdGVDb250ZW50KHByb21wdCk7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZXN1bHQucmVzcG9uc2U7XG4gICAgY29uc3QgdGV4dCA9IHJlc3BvbnNlLnRleHQoKTtcblxuICAgIGlmICh2ZXJib3NlKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIlN5c3RlbSBwcm9tcHQ6XCIsIHByb21wdCk7XG4gICAgICBjb25zb2xlLmxvZyhcIlxcbkdlbWluaSByZXNwb25zZTpcIiwgdGV4dCk7XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIC8vIEVuc3VyZSBwcm9wZXIgZXNjYXBpbmcgb2YgcXVvdGVzIHdpdGhpbiB0aGUgSlNPTiBzdHJpbmdcbiAgICAgIGNvbnN0IHNhbml0aXplZFRleHQgPSB0ZXh0LnJlcGxhY2UoL1xcXFxuL2csICdcXFxcXFxcXG4nKS5yZXBsYWNlKC9cXFxcXCIvZywgJ1xcXFxcXFxcXFxcIicpO1xuICAgIGNvbnN0IGNsZWFuZWRUZXh0ID0gc2FuaXRpemVkVGV4dC5yZXBsYWNlKC9cXG4vZywgJycpO1xuICAgIGxldCBvdXRwdXQ6IGFueSA9IEpTT04ucGFyc2UoY2xlYW5lZFRleHQpO1xuXG4gICAgICBpZiAobGlzdF9pbnB1dCkge1xuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkob3V0cHV0KSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk91dHB1dCBmb3JtYXQgbm90IGluIGFuIGFycmF5IG9mIGpzb25cIik7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG91dHB1dCA9IFtvdXRwdXRdO1xuICAgICAgfVxuXG4gICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgb3V0cHV0Lmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBvdXRwdXRfZm9ybWF0KSB7XG4gICAgICAgICAgaWYgKC88Lio/Pi8udGVzdChrZXkpKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoIShrZXkgaW4gb3V0cHV0W2luZGV4XSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgJHtrZXl9IG5vdCBpbiBqc29uIG91dHB1dGApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KG91dHB1dF9mb3JtYXRba2V5XSkpIHtcbiAgICAgICAgICAgIGNvbnN0IGNob2ljZXMgPSBvdXRwdXRfZm9ybWF0W2tleV0gYXMgc3RyaW5nW107XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShvdXRwdXRbaW5kZXhdW2tleV0pKSB7XG4gICAgICAgICAgICAgIG91dHB1dFtpbmRleF1ba2V5XSA9IG91dHB1dFtpbmRleF1ba2V5XVswXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghY2hvaWNlcy5pbmNsdWRlcyhvdXRwdXRbaW5kZXhdW2tleV0pICYmIGRlZmF1bHRfY2F0ZWdvcnkpIHtcbiAgICAgICAgICAgICAgb3V0cHV0W2luZGV4XVtrZXldID0gZGVmYXVsdF9jYXRlZ29yeTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvdXRwdXRbaW5kZXhdW2tleV0uaW5jbHVkZXMoXCI6XCIpKSB7XG4gICAgICAgICAgICAgIG91dHB1dFtpbmRleF1ba2V5XSA9IG91dHB1dFtpbmRleF1ba2V5XS5zcGxpdChcIjpcIilbMF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG91dHB1dF92YWx1ZV9vbmx5KSB7XG4gICAgICAgICAgb3V0cHV0W2luZGV4XSA9IE9iamVjdC52YWx1ZXMob3V0cHV0W2luZGV4XSk7XG4gICAgICAgICAgaWYgKG91dHB1dFtpbmRleF0ubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICBvdXRwdXRbaW5kZXhdID0gb3V0cHV0W2luZGV4XVswXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGxpc3RfaW5wdXQgPyBvdXRwdXQgOiBvdXRwdXRbMF07XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgZXJyb3JfbXNnID0gYFxcblxcblJlc3VsdDogJHt0ZXh0fVxcblxcbkVycm9yIG1lc3NhZ2U6ICR7ZX1gO1xuICAgICAgY29uc29sZS5sb2coXCJBbiBleGNlcHRpb24gb2NjdXJyZWQ6XCIsIGUpO1xuICAgICAgY29uc29sZS5sb2coXCJDdXJyZW50IGludmFsaWQganNvbiBmb3JtYXQgXCIsIHRleHQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBbXTtcbn1cbiJdLCJuYW1lcyI6WyJHb29nbGVHZW5lcmF0aXZlQUkiLCJnZW5BSSIsInN0cmljdF9vdXRwdXQiLCJzeXN0ZW1fcHJvbXB0IiwidXNlcl9wcm9tcHQiLCJvdXRwdXRfZm9ybWF0IiwiZGVmYXVsdF9jYXRlZ29yeSIsIm91dHB1dF92YWx1ZV9vbmx5IiwibW9kZWwiLCJ0ZW1wZXJhdHVyZSIsIm51bV90cmllcyIsInZlcmJvc2UiLCJsaXN0X2lucHV0IiwiQXJyYXkiLCJpc0FycmF5IiwiZHluYW1pY19lbGVtZW50cyIsInRlc3QiLCJKU09OIiwic3RyaW5naWZ5IiwibGlzdF9vdXRwdXQiLCJlcnJvcl9tc2ciLCJnZW5lcmF0aXZlTW9kZWwiLCJnZXRHZW5lcmF0aXZlTW9kZWwiLCJpIiwib3V0cHV0X2Zvcm1hdF9wcm9tcHQiLCJwcm9tcHQiLCJ0b1N0cmluZyIsInJlc3VsdCIsImdlbmVyYXRlQ29udGVudCIsInJlc3BvbnNlIiwidGV4dCIsImNvbnNvbGUiLCJsb2ciLCJzYW5pdGl6ZWRUZXh0IiwicmVwbGFjZSIsImNsZWFuZWRUZXh0Iiwib3V0cHV0IiwicGFyc2UiLCJFcnJvciIsImluZGV4IiwibGVuZ3RoIiwia2V5IiwiY2hvaWNlcyIsImluY2x1ZGVzIiwic3BsaXQiLCJPYmplY3QiLCJ2YWx1ZXMiLCJlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/gemini.ts\n'
        );

        /***/
      },

    /***/ "(rsc)/./src/lib/unsplash.ts":
      /*!*****************************!*\
  !*** ./src/lib/unsplash.ts ***!
  \*****************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getUnsplashImage: () => (/* binding */ getUnsplashImage)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "(rsc)/./node_modules/axios/lib/axios.js");\n\nconst getUnsplashImage = async (query)=>{\n    const { data } = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(`\n    https://api.unsplash.com/search/photos?per_page=1&query=${query}&client_id=${process.env.UNSPLASH_API_KEY}\n    `);\n    return data.results[0].urls.small_s3;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL3Vuc3BsYXNoLnRzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQTBCO0FBQ25CLE1BQU1DLG1CQUFtQixPQUFPQztJQUNyQyxNQUFNLEVBQUVDLElBQUksRUFBRSxHQUFHLE1BQU1ILDZDQUFLQSxDQUFDSSxHQUFHLENBQUMsQ0FBQzs0REFDd0IsRUFBRUYsTUFBTSxXQUFXLEVBQUVHLFFBQVFDLEdBQUcsQ0FBQ0MsZ0JBQWdCLENBQUM7SUFDMUcsQ0FBQztJQUNILE9BQU9KLEtBQUtLLE9BQU8sQ0FBQyxFQUFFLENBQUNDLElBQUksQ0FBQ0MsUUFBUTtBQUN0QyxFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc21hcnR4Ly4vc3JjL2xpYi91bnNwbGFzaC50cz8wYjExIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmV4cG9ydCBjb25zdCBnZXRVbnNwbGFzaEltYWdlID0gYXN5bmMgKHF1ZXJ5OiBzdHJpbmcpID0+IHtcbiAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQoYFxuICAgIGh0dHBzOi8vYXBpLnVuc3BsYXNoLmNvbS9zZWFyY2gvcGhvdG9zP3Blcl9wYWdlPTEmcXVlcnk9JHtxdWVyeX0mY2xpZW50X2lkPSR7cHJvY2Vzcy5lbnYuVU5TUExBU0hfQVBJX0tFWX1cbiAgICBgKTtcbiAgcmV0dXJuIGRhdGEucmVzdWx0c1swXS51cmxzLnNtYWxsX3MzO1xufTsiXSwibmFtZXMiOlsiYXhpb3MiLCJnZXRVbnNwbGFzaEltYWdlIiwicXVlcnkiLCJkYXRhIiwiZ2V0IiwicHJvY2VzcyIsImVudiIsIlVOU1BMQVNIX0FQSV9LRVkiLCJyZXN1bHRzIiwidXJscyIsInNtYWxsX3MzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/unsplash.ts\n'
        );

        /***/
      },

    /***/ "(rsc)/./src/validators/course.ts":
      /*!**********************************!*\
  !*** ./src/validators/course.ts ***!
  \**********************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createChaptersSchema: () => (/* binding */ createChaptersSchema)\n/* harmony export */ });\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zod */ "(rsc)/./node_modules/zod/lib/index.mjs");\n\nconst createChaptersSchema = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({\n    title: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().min(3).max(100),\n    units: zod__WEBPACK_IMPORTED_MODULE_0__.z.array(zod__WEBPACK_IMPORTED_MODULE_0__.z.string())\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvdmFsaWRhdG9ycy9jb3Vyc2UudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBdUI7QUFFaEIsTUFBTUMsdUJBQXVCRCxrQ0FBQ0EsQ0FBQ0UsTUFBTSxDQUFDO0lBQ3pDQyxPQUFPSCxrQ0FBQ0EsQ0FBQ0ksTUFBTSxHQUFHQyxHQUFHLENBQUMsR0FBR0MsR0FBRyxDQUFDO0lBQzdCQyxPQUFPUCxrQ0FBQ0EsQ0FBQ1EsS0FBSyxDQUFDUixrQ0FBQ0EsQ0FBQ0ksTUFBTTtBQUUzQixHQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc21hcnR4Ly4vc3JjL3ZhbGlkYXRvcnMvY291cnNlLnRzPzMxZWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgeiB9IGZyb20gJ3pvZCdcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUNoYXB0ZXJzU2NoZW1hID0gei5vYmplY3Qoe1xuICAgIHRpdGxlOiB6LnN0cmluZygpLm1pbigzKS5tYXgoMTAwKSxcbiAgICB1bml0czogei5hcnJheSh6LnN0cmluZygpKSxcblxufSkiXSwibmFtZXMiOlsieiIsImNyZWF0ZUNoYXB0ZXJzU2NoZW1hIiwib2JqZWN0IiwidGl0bGUiLCJzdHJpbmciLCJtaW4iLCJtYXgiLCJ1bml0cyIsImFycmF5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/validators/course.ts\n'
        );

        /***/
      },
  };
  // load runtime
  var __webpack_require__ = require("../../../../webpack-runtime.js");
  __webpack_require__.C(exports);
  var __webpack_exec__ = (moduleId) =>
    __webpack_require__((__webpack_require__.s = moduleId));
  var __webpack_exports__ = __webpack_require__.X(
    0,
    [
      "vendor-chunks/next",
      "vendor-chunks/mime-db",
      "vendor-chunks/axios",
      "vendor-chunks/follow-redirects",
      "vendor-chunks/debug",
      "vendor-chunks/form-data",
      "vendor-chunks/asynckit",
      "vendor-chunks/combined-stream",
      "vendor-chunks/mime-types",
      "vendor-chunks/proxy-from-env",
      "vendor-chunks/ms",
      "vendor-chunks/supports-color",
      "vendor-chunks/delayed-stream",
      "vendor-chunks/has-flag",
      "vendor-chunks/zod",
      "vendor-chunks/@google",
    ],
    () =>
      __webpack_exec__(
        "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fcourse%2FcreateChapters%2Froute&page=%2Fapi%2Fcourse%2FcreateChapters%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcourse%2FcreateChapters%2Froute.ts&appDir=C%3A%5CUsers%5Cshrey%5CMy%20PC%20(XPS)%5CDownloads%5CSmartLearningX%20-%20Copy%5Csmartx%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cshrey%5CMy%20PC%20(XPS)%5CDownloads%5CSmartLearningX%20-%20Copy%5Csmartx&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!"
      )
  );
  module.exports = __webpack_exports__;
})();
