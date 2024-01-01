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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ \"(app-pages-browser)/./node_modules/socket.io-client/build/esm/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst Support = (param)=>{\n    let { nameConversation, firstMessage, typeUser } = param;\n    _s();\n    const [socket, setSocket] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const newSocket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_2__.io)(\"http://localhost:3001\");\n        newSocket.on(\"message\", (response1)=>{\n            setMessages((prevMessages)=>[\n                    ...prevMessages,\n                    {\n                        name: response1.name,\n                        res: response1.res\n                    }\n                ]);\n        });\n        setSocket(newSocket);\n        return ()=>{\n            newSocket.off(\"message\");\n            newSocket.disconnect();\n        };\n    }, []);\n    const sendMessage = ()=>{\n        socket.emit(\"message\", {\n            name: typeUser,\n            res: message\n        });\n        setMessages((prevMessages)=>[\n                ...prevMessages,\n                {\n                    name: typeUser,\n                    res: response.res\n                }\n            ]);\n        setMessage(\"\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"fixed bottom-4 right-4 bg-white p-4 shadow-md rounded-md animate-fade-in\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-sm font-semibold text-gray-700\",\n                        children: [\n                            \" \",\n                            nameConversation,\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/cybermazinho/contact_page_for_mongSO/src/app/components/Support.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/home/cybermazinho/contact_page_for_mongSO/src/app/components/Support.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/cybermazinho/contact_page_for_mongSO/src/app/components/Support.tsx\",\n                lineNumber: 35,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-2 max-h-96 overflow-y-auto\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-blue-100 border border-blue-300 p-4 rounded-lg mt-2 max-w-[500px]\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-sm text-blue-800\",\n                            children: [\n                                \" \",\n                                firstMessage,\n                                \" \"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/cybermazinho/contact_page_for_mongSO/src/app/components/Support.tsx\",\n                            lineNumber: 42,\n                            columnNumber: 15\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/cybermazinho/contact_page_for_mongSO/src/app/components/Support.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 11\n                    }, undefined),\n                    messages.map((message, index)=>message.name === \"user\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"bg-green-100 border border-green-300 p-4 rounded-lg mt-2 max-w-[500px]\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-sm text-green-800\",\n                                children: [\n                                    \" \",\n                                    message.res,\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/cybermazinho/contact_page_for_mongSO/src/app/components/Support.tsx\",\n                                lineNumber: 48,\n                                columnNumber: 21\n                            }, undefined)\n                        }, index, false, {\n                            fileName: \"/home/cybermazinho/contact_page_for_mongSO/src/app/components/Support.tsx\",\n                            lineNumber: 47,\n                            columnNumber: 19\n                        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"bg-blue-100 border border-blue-300 p-4 rounded-lg mt-2 max-w-[500px]\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-sm text-blue-800\",\n                                children: [\n                                    \" \",\n                                    message.res,\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/cybermazinho/contact_page_for_mongSO/src/app/components/Support.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 23\n                            }, undefined)\n                        }, index, false, {\n                            fileName: \"/home/cybermazinho/contact_page_for_mongSO/src/app/components/Support.tsx\",\n                            lineNumber: 51,\n                            columnNumber: 19\n                        }, undefined))\n                ]\n            }, void 0, true, {\n                fileName: \"/home/cybermazinho/contact_page_for_mongSO/src/app/components/Support.tsx\",\n                lineNumber: 40,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                        className: \"w-full h-16 p-2 border border-gray-300 rounded-md\",\n                        placeholder: \"Enter your message...\",\n                        onChange: (e)=>setMessage(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"/home/cybermazinho/contact_page_for_mongSO/src/app/components/Support.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: sendMessage,\n                        className: \"chat-button mt-2 text-white py-2 px-4 rounded-md\",\n                        children: \"Send\"\n                    }, void 0, false, {\n                        fileName: \"/home/cybermazinho/contact_page_for_mongSO/src/app/components/Support.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/cybermazinho/contact_page_for_mongSO/src/app/components/Support.tsx\",\n                lineNumber: 57,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/cybermazinho/contact_page_for_mongSO/src/app/components/Support.tsx\",\n        lineNumber: 34,\n        columnNumber: 7\n    }, undefined);\n};\n_s(Support, \"eNdcbvSng0RArIziybXqrsr/rSg=\");\n_c = Support;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Support);\nvar _c;\n$RefreshReg$(_c, \"Support\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9TdXBwb3J0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQzRDO0FBQ047QUFFdEMsTUFBTUcsVUFBVTtRQUFDLEVBQUNDLGdCQUFnQixFQUFFQyxZQUFZLEVBQUVDLFFBQVEsRUFBTTs7SUFFOUQsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdSLCtDQUFRQSxDQUFvRDtJQUN4RixNQUFNLENBQUNTLFNBQVNDLFdBQVcsR0FBR1YsK0NBQVFBLENBQVM7SUFDL0MsTUFBTSxDQUFDVyxVQUFVQyxZQUFZLEdBQUdaLCtDQUFRQSxDQUFrQyxFQUFFO0lBRTVFQyxnREFBU0EsQ0FBQztRQUNSLE1BQU1ZLFlBQVlYLG9EQUFFQSxDQUFDO1FBRXJCVyxVQUFVQyxFQUFFLENBQUMsV0FBVyxDQUFDQztZQUN2QkgsWUFBWSxDQUFDSSxlQUFzQjt1QkFBSUE7b0JBQWM7d0JBQUNDLE1BQU1GLFVBQVNFLElBQUk7d0JBQUVDLEtBQUtILFVBQVNHLEdBQUc7b0JBQUE7aUJBQUU7UUFDaEc7UUFFQVYsVUFBVUs7UUFFVixPQUFPO1lBQ0xBLFVBQVVNLEdBQUcsQ0FBQztZQUNkTixVQUFVTyxVQUFVO1FBQ3RCO0lBRUYsR0FBRyxFQUFFO0lBRUgsTUFBTUMsY0FBYztRQUNsQmQsT0FBT2UsSUFBSSxDQUFDLFdBQVc7WUFBQ0wsTUFBTVg7WUFBVVksS0FBS1Q7UUFBTztRQUNwREcsWUFBWSxDQUFDSSxlQUFzQjttQkFBSUE7Z0JBQWM7b0JBQUNDLE1BQU1YO29CQUFVWSxLQUFLSCxTQUFTRyxHQUFHO2dCQUFBO2FBQUU7UUFDekZSLFdBQVc7SUFDYjtJQUVBLHFCQUNFLDhEQUFDYTtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNEOzhCQUNDLDRFQUFDRTt3QkFBRUQsV0FBVTs7NEJBQXNDOzRCQUFFcEI7NEJBQWlCOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFHMUUsOERBQUNtQjtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNEO3dCQUFJQyxXQUFVO2tDQUNYLDRFQUFDQzs0QkFBRUQsV0FBVTs7Z0NBQXdCO2dDQUFFbkI7Z0NBQWE7Ozs7Ozs7Ozs7OztvQkFHcERNLFNBQVNlLEdBQUcsQ0FBQyxDQUFDakIsU0FBU2tCLFFBQ3JCbEIsUUFBUVEsSUFBSSxLQUFLLHVCQUNmLDhEQUFDTTs0QkFBZ0JDLFdBQVU7c0NBQ3pCLDRFQUFDQztnQ0FBRUQsV0FBVTs7b0NBQXlCO29DQUFFZixRQUFRUyxHQUFHO29DQUFDOzs7Ozs7OzJCQUQ1Q1M7Ozs7c0RBSVYsOERBQUNKOzRCQUFnQkMsV0FBVTtzQ0FDdkIsNEVBQUNDO2dDQUFFRCxXQUFVOztvQ0FBd0I7b0NBQUVmLFFBQVFTLEdBQUc7b0NBQUM7Ozs7Ozs7MkJBRDdDUzs7Ozs7Ozs7Ozs7MEJBTXBCLDhEQUFDSjtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNJO3dCQUNDSixXQUFVO3dCQUNWSyxhQUFZO3dCQUNaQyxVQUFVLENBQUNDLElBQVdyQixXQUFXcUIsRUFBRUMsTUFBTSxDQUFDQyxLQUFLOzs7Ozs7a0NBRWpELDhEQUFDQzt3QkFBT0MsU0FBU2Q7d0JBQWFHLFdBQVU7a0NBQW1EOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNbkc7R0FoRUlyQjtLQUFBQTtBQWtFTiwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvU3VwcG9ydC50c3g/MWFkNyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGlvIH0gZnJvbSBcInNvY2tldC5pby1jbGllbnRcIjtcblxuY29uc3QgU3VwcG9ydCA9ICh7bmFtZUNvbnZlcnNhdGlvbiwgZmlyc3RNZXNzYWdlLCB0eXBlVXNlcn06IGFueSkgPT4ge1xuXG4gIGNvbnN0IFtzb2NrZXQsIHNldFNvY2tldF0gPSB1c2VTdGF0ZTxTb2NrZXQ8RGVmYXVsdEV2ZW50c01hcCwgRGVmYXVsdEV2ZW50c01hcD4gfCBudWxsPihudWxsKTtcbiAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKVxuICBjb25zdCBbbWVzc2FnZXMsIHNldE1lc3NhZ2VzXSA9IHVzZVN0YXRlPHsgbmFtZTogc3RyaW5nOyByZXM6IHN0cmluZyB9W10+KFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IG5ld1NvY2tldCA9IGlvKCdodHRwOi8vbG9jYWxob3N0OjMwMDEnKTtcbiAgICBcbiAgICBuZXdTb2NrZXQub24oXCJtZXNzYWdlXCIsIChyZXNwb25zZSkgPT4ge1xuICAgICAgc2V0TWVzc2FnZXMoKHByZXZNZXNzYWdlczogYW55KSA9PiBbLi4ucHJldk1lc3NhZ2VzLCB7bmFtZTogcmVzcG9uc2UubmFtZSwgcmVzOiByZXNwb25zZS5yZXN9XSk7XG4gICAgfSk7XG5cbiAgICBzZXRTb2NrZXQobmV3U29ja2V0KTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBuZXdTb2NrZXQub2ZmKFwibWVzc2FnZVwiKTtcbiAgICAgIG5ld1NvY2tldC5kaXNjb25uZWN0KCk7IFxuICAgIH07XG5cbiAgfSwgW10pO1xuXG4gICAgY29uc3Qgc2VuZE1lc3NhZ2UgPSAoKSA9PiB7XG4gICAgICBzb2NrZXQuZW1pdChcIm1lc3NhZ2VcIiwge25hbWU6IHR5cGVVc2VyLCByZXM6IG1lc3NhZ2V9KTtcbiAgICAgIHNldE1lc3NhZ2VzKChwcmV2TWVzc2FnZXM6IGFueSkgPT4gWy4uLnByZXZNZXNzYWdlcywge25hbWU6IHR5cGVVc2VyLCByZXM6IHJlc3BvbnNlLnJlc31dKTtcbiAgICAgIHNldE1lc3NhZ2UoXCJcIik7IFxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpeGVkIGJvdHRvbS00IHJpZ2h0LTQgYmctd2hpdGUgcC00IHNoYWRvdy1tZCByb3VuZGVkLW1kIGFuaW1hdGUtZmFkZS1pblwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktNzAwXCI+IHtuYW1lQ29udmVyc2F0aW9ufSA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTIgbWF4LWgtOTYgb3ZlcmZsb3cteS1hdXRvXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ibHVlLTEwMCBib3JkZXIgYm9yZGVyLWJsdWUtMzAwIHAtNCByb3VuZGVkLWxnIG10LTIgbWF4LXctWzUwMHB4XVwiPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtYmx1ZS04MDBcIj4ge2ZpcnN0TWVzc2FnZX0gPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbWVzc2FnZXMubWFwKChtZXNzYWdlLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgIG1lc3NhZ2UubmFtZSA9PT0gXCJ1c2VyXCIgP1xuICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJiZy1ncmVlbi0xMDAgYm9yZGVyIGJvcmRlci1ncmVlbi0zMDAgcC00IHJvdW5kZWQtbGcgbXQtMiBtYXgtdy1bNTAwcHhdXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmVlbi04MDBcIj4ge21lc3NhZ2UucmVzfSA8L3A+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImJnLWJsdWUtMTAwIGJvcmRlciBib3JkZXItYmx1ZS0zMDAgcC00IHJvdW5kZWQtbGcgbXQtMiBtYXgtdy1bNTAwcHhdXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWJsdWUtODAwXCI+IHttZXNzYWdlLnJlc30gPC9wPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICkpXG4gICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC00XCI+XG4gICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgaC0xNiBwLTIgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLW1kXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBtZXNzYWdlLi4uXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZTogYW55KSA9PiBzZXRNZXNzYWdlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICA+PC90ZXh0YXJlYT5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3NlbmRNZXNzYWdlfSBjbGFzc05hbWU9XCJjaGF0LWJ1dHRvbiBtdC0yIHRleHQtd2hpdGUgcHktMiBweC00IHJvdW5kZWQtbWRcIj5cbiAgICAgICAgICAgIFNlbmRcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9O1xuICBcbmV4cG9ydCBkZWZhdWx0IFN1cHBvcnQ7Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiaW8iLCJTdXBwb3J0IiwibmFtZUNvbnZlcnNhdGlvbiIsImZpcnN0TWVzc2FnZSIsInR5cGVVc2VyIiwic29ja2V0Iiwic2V0U29ja2V0IiwibWVzc2FnZSIsInNldE1lc3NhZ2UiLCJtZXNzYWdlcyIsInNldE1lc3NhZ2VzIiwibmV3U29ja2V0Iiwib24iLCJyZXNwb25zZSIsInByZXZNZXNzYWdlcyIsIm5hbWUiLCJyZXMiLCJvZmYiLCJkaXNjb25uZWN0Iiwic2VuZE1lc3NhZ2UiLCJlbWl0IiwiZGl2IiwiY2xhc3NOYW1lIiwicCIsIm1hcCIsImluZGV4IiwidGV4dGFyZWEiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/Support.tsx\n"));

/***/ })

});