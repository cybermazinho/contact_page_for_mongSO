"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/components/Support.tsx":
/*!****************************************!*\
  !*** ./src/app/components/Support.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ \"(app-pages-browser)/./node_modules/socket.io-client/build/esm/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst Support = (param)=>{\n    let { nameConversation, firstMessage, typeUser } = param;\n    _s();\n    const [socket, setSocket] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const newSocket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_2__.io)(\"http://localhost:3001\");\n        newSocket.on(\"message\", (res)=>{\n            console.log(res);\n        });\n        setSocket(newSocket);\n        return ()=>{\n            newSocket.off(\"message\");\n            newSocket.disconnect();\n        };\n    }, []);\n    const sendMessage = ()=>{\n        socket.emit(\"message\", \"oi\");\n    // setMessages((prevMessages: any) => [...prevMessages, {name: typeUser, res: message}]);\n    // setMessage(\"\"); \n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"fixed bottom-4 right-4 bg-white p-4 shadow-md rounded-md animate-fade-in\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-sm font-semibold text-gray-700\",\n                        children: [\n                            \" \",\n                            nameConversation,\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/cybermazinho/contact_page_for_mongSO/src/app/components/Support.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/home/cybermazinho/contact_page_for_mongSO/src/app/components/Support.tsx\",\n                    lineNumber: 37,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/cybermazinho/contact_page_for_mongSO/src/app/components/Support.tsx\",\n                lineNumber: 36,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-2 max-h-96 overflow-y-auto\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-blue-100 border border-blue-300 p-4 rounded-lg mt-2 max-w-[500px]\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-sm text-blue-800\",\n                            children: [\n                                \" \",\n                                firstMessage,\n                                \" \"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/cybermazinho/contact_page_for_mongSO/src/app/components/Support.tsx\",\n                            lineNumber: 43,\n                            columnNumber: 15\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/cybermazinho/contact_page_for_mongSO/src/app/components/Support.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 11\n                    }, undefined),\n                    messages.map((message, index)=>message.name === \"user\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"bg-green-100 border border-green-300 p-4 rounded-lg mt-2 max-w-[500px]\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-sm text-green-800\",\n                                children: [\n                                    \" \",\n                                    message.res,\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/cybermazinho/contact_page_for_mongSO/src/app/components/Support.tsx\",\n                                lineNumber: 49,\n                                columnNumber: 21\n                            }, undefined)\n                        }, index, false, {\n                            fileName: \"/home/cybermazinho/contact_page_for_mongSO/src/app/components/Support.tsx\",\n                            lineNumber: 48,\n                            columnNumber: 19\n                        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"bg-blue-100 border border-blue-300 p-4 rounded-lg mt-2 max-w-[500px]\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-sm text-blue-800\",\n                                children: [\n                                    \" \",\n                                    message.res,\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/cybermazinho/contact_page_for_mongSO/src/app/components/Support.tsx\",\n                                lineNumber: 53,\n                                columnNumber: 23\n                            }, undefined)\n                        }, index, false, {\n                            fileName: \"/home/cybermazinho/contact_page_for_mongSO/src/app/components/Support.tsx\",\n                            lineNumber: 52,\n                            columnNumber: 19\n                        }, undefined))\n                ]\n            }, void 0, true, {\n                fileName: \"/home/cybermazinho/contact_page_for_mongSO/src/app/components/Support.tsx\",\n                lineNumber: 41,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                        className: \"w-full h-16 p-2 border border-gray-300 rounded-md\",\n                        placeholder: \"Enter your message...\",\n                        onChange: (e)=>setMessage(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"/home/cybermazinho/contact_page_for_mongSO/src/app/components/Support.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: sendMessage,\n                        className: \"chat-button mt-2 text-white py-2 px-4 rounded-md\",\n                        children: \"Send\"\n                    }, void 0, false, {\n                        fileName: \"/home/cybermazinho/contact_page_for_mongSO/src/app/components/Support.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/cybermazinho/contact_page_for_mongSO/src/app/components/Support.tsx\",\n                lineNumber: 58,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/cybermazinho/contact_page_for_mongSO/src/app/components/Support.tsx\",\n        lineNumber: 35,\n        columnNumber: 7\n    }, undefined);\n};\n_s(Support, \"eNdcbvSng0RArIziybXqrsr/rSg=\");\n_c = Support;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Support);\nvar _c;\n$RefreshReg$(_c, \"Support\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9TdXBwb3J0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQzRDO0FBQ047QUFFdEMsTUFBTUcsVUFBVTtRQUFDLEVBQUNDLGdCQUFnQixFQUFFQyxZQUFZLEVBQUVDLFFBQVEsRUFBTTs7SUFFOUQsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdSLCtDQUFRQSxDQUFvRDtJQUN4RixNQUFNLENBQUNTLFNBQVNDLFdBQVcsR0FBR1YsK0NBQVFBLENBQVM7SUFDL0MsTUFBTSxDQUFDVyxVQUFVQyxZQUFZLEdBQUdaLCtDQUFRQSxDQUFrQyxFQUFFO0lBRTVFQyxnREFBU0EsQ0FBQztRQUNSLE1BQU1ZLFlBQVlYLG9EQUFFQSxDQUFDO1FBRXJCVyxVQUFVQyxFQUFFLENBQUMsV0FBVyxDQUFDQztZQUN2QkMsUUFBUUMsR0FBRyxDQUFDRjtRQUNkO1FBR0FQLFVBQVVLO1FBRVYsT0FBTztZQUNMQSxVQUFVSyxHQUFHLENBQUM7WUFDZEwsVUFBVU0sVUFBVTtRQUN0QjtJQUVGLEdBQUcsRUFBRTtJQUVILE1BQU1DLGNBQWM7UUFDbEJiLE9BQU9jLElBQUksQ0FBQyxXQUFXO0lBQ3ZCLHlGQUF5RjtJQUN6RixtQkFBbUI7SUFDckI7SUFFQSxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDRDs4QkFDQyw0RUFBQ0U7d0JBQUVELFdBQVU7OzRCQUFzQzs0QkFBRW5COzRCQUFpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBRzFFLDhEQUFDa0I7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDRDt3QkFBSUMsV0FBVTtrQ0FDWCw0RUFBQ0M7NEJBQUVELFdBQVU7O2dDQUF3QjtnQ0FBRWxCO2dDQUFhOzs7Ozs7Ozs7Ozs7b0JBR3BETSxTQUFTYyxHQUFHLENBQUMsQ0FBQ2hCLFNBQVNpQixRQUNyQmpCLFFBQVFrQixJQUFJLEtBQUssdUJBQ2YsOERBQUNMOzRCQUFnQkMsV0FBVTtzQ0FDekIsNEVBQUNDO2dDQUFFRCxXQUFVOztvQ0FBeUI7b0NBQUVkLFFBQVFNLEdBQUc7b0NBQUM7Ozs7Ozs7MkJBRDVDVzs7OztzREFJViw4REFBQ0o7NEJBQWdCQyxXQUFVO3NDQUN2Qiw0RUFBQ0M7Z0NBQUVELFdBQVU7O29DQUF3QjtvQ0FBRWQsUUFBUU0sR0FBRztvQ0FBQzs7Ozs7OzsyQkFEN0NXOzs7Ozs7Ozs7OzswQkFNcEIsOERBQUNKO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0s7d0JBQ0NMLFdBQVU7d0JBQ1ZNLGFBQVk7d0JBQ1pDLFVBQVUsQ0FBQ0MsSUFBV3JCLFdBQVdxQixFQUFFQyxNQUFNLENBQUNDLEtBQUs7Ozs7OztrQ0FFakQsOERBQUNDO3dCQUFPQyxTQUFTZjt3QkFBYUcsV0FBVTtrQ0FBbUQ7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1uRztHQWpFSXBCO0tBQUFBO0FBbUVOLCtEQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9TdXBwb3J0LnRzeD8xYWQ3Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgaW8gfSBmcm9tIFwic29ja2V0LmlvLWNsaWVudFwiO1xuXG5jb25zdCBTdXBwb3J0ID0gKHtuYW1lQ29udmVyc2F0aW9uLCBmaXJzdE1lc3NhZ2UsIHR5cGVVc2VyfTogYW55KSA9PiB7XG5cbiAgY29uc3QgW3NvY2tldCwgc2V0U29ja2V0XSA9IHVzZVN0YXRlPFNvY2tldDxEZWZhdWx0RXZlbnRzTWFwLCBEZWZhdWx0RXZlbnRzTWFwPiB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpXG4gIGNvbnN0IFttZXNzYWdlcywgc2V0TWVzc2FnZXNdID0gdXNlU3RhdGU8eyBuYW1lOiBzdHJpbmc7IHJlczogc3RyaW5nIH1bXT4oW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgbmV3U29ja2V0ID0gaW8oJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMScpO1xuICAgIFxuICAgIG5ld1NvY2tldC5vbihcIm1lc3NhZ2VcIiwgKHJlcykgPT4ge1xuICAgICAgY29uc29sZS5sb2cocmVzKTtcbiAgICB9KTtcblxuXG4gICAgc2V0U29ja2V0KG5ld1NvY2tldCk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgbmV3U29ja2V0Lm9mZihcIm1lc3NhZ2VcIik7XG4gICAgICBuZXdTb2NrZXQuZGlzY29ubmVjdCgpOyBcbiAgICB9O1xuXG4gIH0sIFtdKTtcblxuICAgIGNvbnN0IHNlbmRNZXNzYWdlID0gKCkgPT4ge1xuICAgICAgc29ja2V0LmVtaXQoXCJtZXNzYWdlXCIsIFwib2lcIik7XG4gICAgICAvLyBzZXRNZXNzYWdlcygocHJldk1lc3NhZ2VzOiBhbnkpID0+IFsuLi5wcmV2TWVzc2FnZXMsIHtuYW1lOiB0eXBlVXNlciwgcmVzOiBtZXNzYWdlfV0pO1xuICAgICAgLy8gc2V0TWVzc2FnZShcIlwiKTsgXG4gICAgfVxuICAgIFxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpeGVkIGJvdHRvbS00IHJpZ2h0LTQgYmctd2hpdGUgcC00IHNoYWRvdy1tZCByb3VuZGVkLW1kIGFuaW1hdGUtZmFkZS1pblwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktNzAwXCI+IHtuYW1lQ29udmVyc2F0aW9ufSA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTIgbWF4LWgtOTYgb3ZlcmZsb3cteS1hdXRvXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ibHVlLTEwMCBib3JkZXIgYm9yZGVyLWJsdWUtMzAwIHAtNCByb3VuZGVkLWxnIG10LTIgbWF4LXctWzUwMHB4XVwiPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtYmx1ZS04MDBcIj4ge2ZpcnN0TWVzc2FnZX0gPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbWVzc2FnZXMubWFwKChtZXNzYWdlLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgIG1lc3NhZ2UubmFtZSA9PT0gXCJ1c2VyXCIgP1xuICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJiZy1ncmVlbi0xMDAgYm9yZGVyIGJvcmRlci1ncmVlbi0zMDAgcC00IHJvdW5kZWQtbGcgbXQtMiBtYXgtdy1bNTAwcHhdXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmVlbi04MDBcIj4ge21lc3NhZ2UucmVzfSA8L3A+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImJnLWJsdWUtMTAwIGJvcmRlciBib3JkZXItYmx1ZS0zMDAgcC00IHJvdW5kZWQtbGcgbXQtMiBtYXgtdy1bNTAwcHhdXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWJsdWUtODAwXCI+IHttZXNzYWdlLnJlc30gPC9wPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICkpXG4gICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC00XCI+XG4gICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgaC0xNiBwLTIgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLW1kXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBtZXNzYWdlLi4uXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZTogYW55KSA9PiBzZXRNZXNzYWdlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICA+PC90ZXh0YXJlYT5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3NlbmRNZXNzYWdlfSBjbGFzc05hbWU9XCJjaGF0LWJ1dHRvbiBtdC0yIHRleHQtd2hpdGUgcHktMiBweC00IHJvdW5kZWQtbWRcIj5cbiAgICAgICAgICAgIFNlbmRcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9O1xuICBcbmV4cG9ydCBkZWZhdWx0IFN1cHBvcnQ7Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiaW8iLCJTdXBwb3J0IiwibmFtZUNvbnZlcnNhdGlvbiIsImZpcnN0TWVzc2FnZSIsInR5cGVVc2VyIiwic29ja2V0Iiwic2V0U29ja2V0IiwibWVzc2FnZSIsInNldE1lc3NhZ2UiLCJtZXNzYWdlcyIsInNldE1lc3NhZ2VzIiwibmV3U29ja2V0Iiwib24iLCJyZXMiLCJjb25zb2xlIiwibG9nIiwib2ZmIiwiZGlzY29ubmVjdCIsInNlbmRNZXNzYWdlIiwiZW1pdCIsImRpdiIsImNsYXNzTmFtZSIsInAiLCJtYXAiLCJpbmRleCIsIm5hbWUiLCJ0ZXh0YXJlYSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/Support.tsx\n"));

/***/ })

});