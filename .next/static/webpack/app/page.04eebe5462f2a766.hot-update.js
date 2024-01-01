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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ \"(app-pages-browser)/./node_modules/socket.io-client/build/esm/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst Support = (param)=>{\n    let { nameConversation, firstMessage, typeUser } = param;\n    _s();\n    const [socket, setSocket] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const newSocket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_2__.io)(\"http://localhost:3001\");\n        newSocket.on(\"message\", (response)=>{\n            setMessages((prevMessages)=>[\n                    ...prevMessages,\n                    {\n                        name: response.name,\n                        res: response.res\n                    }\n                ]);\n        });\n        setSocket(newSocket);\n        return ()=>{\n            newSocket.off(\"message\");\n            newSocket.disconnect();\n        };\n    }, []);\n    const sendMessage = ()=>{\n        const User = {\n            name: typeUser,\n            res: message\n        };\n        socket.emit(\"message\", User);\n        setMessages((prevMessages)=>[\n                ...prevMessages,\n                User\n            ]);\n        setMessage(\"\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"fixed bottom-4 right-4 bg-white p-4 shadow-md rounded-md animate-fade-in\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-sm font-semibold text-gray-700\",\n                        children: [\n                            \" \",\n                            nameConversation,\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/cybermazinho/contact_page_for_mongSO/src/app/components/Support.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/home/cybermazinho/contact_page_for_mongSO/src/app/components/Support.tsx\",\n                    lineNumber: 39,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/cybermazinho/contact_page_for_mongSO/src/app/components/Support.tsx\",\n                lineNumber: 38,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-2 max-h-96 overflow-y-auto\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-blue-100 border border-blue-300 p-4 rounded-lg mt-2 max-w-[500px]\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-sm text-blue-800\",\n                            children: [\n                                \" \",\n                                firstMessage,\n                                \" \"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/cybermazinho/contact_page_for_mongSO/src/app/components/Support.tsx\",\n                            lineNumber: 45,\n                            columnNumber: 15\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/cybermazinho/contact_page_for_mongSO/src/app/components/Support.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 11\n                    }, undefined),\n                    messages.map((message, index)=>message.name === \"user\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"bg-green-100 border border-green-300 p-4 rounded-lg mt-2 max-w-[500px]\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-sm text-green-800\",\n                                children: [\n                                    \" \",\n                                    message.res,\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/cybermazinho/contact_page_for_mongSO/src/app/components/Support.tsx\",\n                                lineNumber: 51,\n                                columnNumber: 21\n                            }, undefined)\n                        }, index, false, {\n                            fileName: \"/home/cybermazinho/contact_page_for_mongSO/src/app/components/Support.tsx\",\n                            lineNumber: 50,\n                            columnNumber: 19\n                        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"bg-blue-100 border border-blue-300 p-4 rounded-lg mt-2 max-w-[500px]\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-sm text-blue-800\",\n                                children: [\n                                    \" \",\n                                    message.res,\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/cybermazinho/contact_page_for_mongSO/src/app/components/Support.tsx\",\n                                lineNumber: 55,\n                                columnNumber: 23\n                            }, undefined)\n                        }, index, false, {\n                            fileName: \"/home/cybermazinho/contact_page_for_mongSO/src/app/components/Support.tsx\",\n                            lineNumber: 54,\n                            columnNumber: 19\n                        }, undefined))\n                ]\n            }, void 0, true, {\n                fileName: \"/home/cybermazinho/contact_page_for_mongSO/src/app/components/Support.tsx\",\n                lineNumber: 43,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                        className: \"w-full h-16 p-2 border border-gray-300 rounded-md\",\n                        placeholder: \"Enter your message...\",\n                        onChange: (e)=>setMessage(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"/home/cybermazinho/contact_page_for_mongSO/src/app/components/Support.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: sendMessage,\n                        className: \"chat-button mt-2 text-white py-2 px-4 rounded-md\",\n                        children: \"Send\"\n                    }, void 0, false, {\n                        fileName: \"/home/cybermazinho/contact_page_for_mongSO/src/app/components/Support.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/cybermazinho/contact_page_for_mongSO/src/app/components/Support.tsx\",\n                lineNumber: 60,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/cybermazinho/contact_page_for_mongSO/src/app/components/Support.tsx\",\n        lineNumber: 37,\n        columnNumber: 7\n    }, undefined);\n};\n_s(Support, \"eNdcbvSng0RArIziybXqrsr/rSg=\");\n_c = Support;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Support);\nvar _c;\n$RefreshReg$(_c, \"Support\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9TdXBwb3J0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQzRDO0FBQ047QUFFdEMsTUFBTUcsVUFBVTtRQUFDLEVBQUNDLGdCQUFnQixFQUFFQyxZQUFZLEVBQUVDLFFBQVEsRUFBTTs7SUFFOUQsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdSLCtDQUFRQSxDQUFvRDtJQUN4RixNQUFNLENBQUNTLFNBQVNDLFdBQVcsR0FBR1YsK0NBQVFBLENBQVM7SUFDL0MsTUFBTSxDQUFDVyxVQUFVQyxZQUFZLEdBQUdaLCtDQUFRQSxDQUFrQyxFQUFFO0lBRTVFQyxnREFBU0EsQ0FBQztRQUNSLE1BQU1ZLFlBQVlYLG9EQUFFQSxDQUFDO1FBRXJCVyxVQUFVQyxFQUFFLENBQUMsV0FBVyxDQUFDQztZQUN2QkgsWUFBWSxDQUFDSSxlQUFzQjt1QkFBSUE7b0JBQWM7d0JBQUNDLE1BQU1GLFNBQVNFLElBQUk7d0JBQUVDLEtBQUtILFNBQVNHLEdBQUc7b0JBQUE7aUJBQUU7UUFDaEc7UUFFQVYsVUFBVUs7UUFFVixPQUFPO1lBQ0xBLFVBQVVNLEdBQUcsQ0FBQztZQUNkTixVQUFVTyxVQUFVO1FBQ3RCO0lBRUYsR0FBRyxFQUFFO0lBRUgsTUFBTUMsY0FBYztRQUVsQixNQUFNQyxPQUFPO1lBQUNMLE1BQU1YO1lBQVVZLEtBQUtUO1FBQU87UUFFMUNGLE9BQU9nQixJQUFJLENBQUMsV0FBV0Q7UUFDdkJWLFlBQVksQ0FBQ0ksZUFBc0I7bUJBQUlBO2dCQUFjTTthQUFLO1FBQzFEWixXQUFXO0lBQ2I7SUFFQSxxQkFDRSw4REFBQ2M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDRDs4QkFDQyw0RUFBQ0U7d0JBQUVELFdBQVU7OzRCQUFzQzs0QkFBRXJCOzRCQUFpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBRzFFLDhEQUFDb0I7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDRDt3QkFBSUMsV0FBVTtrQ0FDWCw0RUFBQ0M7NEJBQUVELFdBQVU7O2dDQUF3QjtnQ0FBRXBCO2dDQUFhOzs7Ozs7Ozs7Ozs7b0JBR3BETSxTQUFTZ0IsR0FBRyxDQUFDLENBQUNsQixTQUFTbUIsUUFDckJuQixRQUFRUSxJQUFJLEtBQUssdUJBQ2YsOERBQUNPOzRCQUFnQkMsV0FBVTtzQ0FDekIsNEVBQUNDO2dDQUFFRCxXQUFVOztvQ0FBeUI7b0NBQUVoQixRQUFRUyxHQUFHO29DQUFDOzs7Ozs7OzJCQUQ1Q1U7Ozs7c0RBSVYsOERBQUNKOzRCQUFnQkMsV0FBVTtzQ0FDdkIsNEVBQUNDO2dDQUFFRCxXQUFVOztvQ0FBd0I7b0NBQUVoQixRQUFRUyxHQUFHO29DQUFDOzs7Ozs7OzJCQUQ3Q1U7Ozs7Ozs7Ozs7OzBCQU1wQiw4REFBQ0o7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDSTt3QkFDQ0osV0FBVTt3QkFDVkssYUFBWTt3QkFDWkMsVUFBVSxDQUFDQyxJQUFXdEIsV0FBV3NCLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSzs7Ozs7O2tDQUVqRCw4REFBQ0M7d0JBQU9DLFNBQVNmO3dCQUFhSSxXQUFVO2tDQUFtRDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTW5HO0dBbkVJdEI7S0FBQUE7QUFxRU4sK0RBQWVBLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL1N1cHBvcnQudHN4PzFhZDciXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBpbyB9IGZyb20gXCJzb2NrZXQuaW8tY2xpZW50XCI7XG5cbmNvbnN0IFN1cHBvcnQgPSAoe25hbWVDb252ZXJzYXRpb24sIGZpcnN0TWVzc2FnZSwgdHlwZVVzZXJ9OiBhbnkpID0+IHtcblxuICBjb25zdCBbc29ja2V0LCBzZXRTb2NrZXRdID0gdXNlU3RhdGU8U29ja2V0PERlZmF1bHRFdmVudHNNYXAsIERlZmF1bHRFdmVudHNNYXA+IHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIilcbiAgY29uc3QgW21lc3NhZ2VzLCBzZXRNZXNzYWdlc10gPSB1c2VTdGF0ZTx7IG5hbWU6IHN0cmluZzsgcmVzOiBzdHJpbmcgfVtdPihbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBuZXdTb2NrZXQgPSBpbygnaHR0cDovL2xvY2FsaG9zdDozMDAxJyk7XG4gICAgXG4gICAgbmV3U29ja2V0Lm9uKFwibWVzc2FnZVwiLCAocmVzcG9uc2UpID0+IHtcbiAgICAgIHNldE1lc3NhZ2VzKChwcmV2TWVzc2FnZXM6IGFueSkgPT4gWy4uLnByZXZNZXNzYWdlcywge25hbWU6IHJlc3BvbnNlLm5hbWUsIHJlczogcmVzcG9uc2UucmVzfV0pO1xuICAgIH0pO1xuXG4gICAgc2V0U29ja2V0KG5ld1NvY2tldCk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgbmV3U29ja2V0Lm9mZihcIm1lc3NhZ2VcIik7XG4gICAgICBuZXdTb2NrZXQuZGlzY29ubmVjdCgpOyBcbiAgICB9O1xuXG4gIH0sIFtdKTtcblxuICAgIGNvbnN0IHNlbmRNZXNzYWdlID0gKCkgPT4ge1xuXG4gICAgICBjb25zdCBVc2VyID0ge25hbWU6IHR5cGVVc2VyLCByZXM6IG1lc3NhZ2V9XG5cbiAgICAgIHNvY2tldC5lbWl0KFwibWVzc2FnZVwiLCBVc2VyKTtcbiAgICAgIHNldE1lc3NhZ2VzKChwcmV2TWVzc2FnZXM6IGFueSkgPT4gWy4uLnByZXZNZXNzYWdlcywgVXNlcl0pO1xuICAgICAgc2V0TWVzc2FnZShcIlwiKTsgXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQgYm90dG9tLTQgcmlnaHQtNCBiZy13aGl0ZSBwLTQgc2hhZG93LW1kIHJvdW5kZWQtbWQgYW5pbWF0ZS1mYWRlLWluXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LXNlbWlib2xkIHRleHQtZ3JheS03MDBcIj4ge25hbWVDb252ZXJzYXRpb259IDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMiBtYXgtaC05NiBvdmVyZmxvdy15LWF1dG9cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWJsdWUtMTAwIGJvcmRlciBib3JkZXItYmx1ZS0zMDAgcC00IHJvdW5kZWQtbGcgbXQtMiBtYXgtdy1bNTAwcHhdXCI+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ibHVlLTgwMFwiPiB7Zmlyc3RNZXNzYWdlfSA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAge1xuICAgICAgICAgICAgICBtZXNzYWdlcy5tYXAoKG1lc3NhZ2UsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgbWVzc2FnZS5uYW1lID09PSBcInVzZXJcIiA/XG4gICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImJnLWdyZWVuLTEwMCBib3JkZXIgYm9yZGVyLWdyZWVuLTMwMCBwLTQgcm91bmRlZC1sZyBtdC0yIG1heC13LVs1MDBweF1cIj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyZWVuLTgwMFwiPiB7bWVzc2FnZS5yZXN9IDwvcD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwiYmctYmx1ZS0xMDAgYm9yZGVyIGJvcmRlci1ibHVlLTMwMCBwLTQgcm91bmRlZC1sZyBtdC0yIG1heC13LVs1MDBweF1cIj5cbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtYmx1ZS04MDBcIj4ge21lc3NhZ2UucmVzfSA8L3A+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKSlcbiAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTRcIj5cbiAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLTE2IHAtMiBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbWRcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIG1lc3NhZ2UuLi5cIlxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlOiBhbnkpID0+IHNldE1lc3NhZ2UoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgID48L3RleHRhcmVhPlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17c2VuZE1lc3NhZ2V9IGNsYXNzTmFtZT1cImNoYXQtYnV0dG9uIG10LTIgdGV4dC13aGl0ZSBweS0yIHB4LTQgcm91bmRlZC1tZFwiPlxuICAgICAgICAgICAgU2VuZFxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH07XG4gIFxuZXhwb3J0IGRlZmF1bHQgU3VwcG9ydDsiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJpbyIsIlN1cHBvcnQiLCJuYW1lQ29udmVyc2F0aW9uIiwiZmlyc3RNZXNzYWdlIiwidHlwZVVzZXIiLCJzb2NrZXQiLCJzZXRTb2NrZXQiLCJtZXNzYWdlIiwic2V0TWVzc2FnZSIsIm1lc3NhZ2VzIiwic2V0TWVzc2FnZXMiLCJuZXdTb2NrZXQiLCJvbiIsInJlc3BvbnNlIiwicHJldk1lc3NhZ2VzIiwibmFtZSIsInJlcyIsIm9mZiIsImRpc2Nvbm5lY3QiLCJzZW5kTWVzc2FnZSIsIlVzZXIiLCJlbWl0IiwiZGl2IiwiY2xhc3NOYW1lIiwicCIsIm1hcCIsImluZGV4IiwidGV4dGFyZWEiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/Support.tsx\n"));

/***/ })

});