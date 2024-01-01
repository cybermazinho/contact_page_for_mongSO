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

/***/ "(app-pages-browser)/./src/app/components/Chat.tsx":
/*!*************************************!*\
  !*** ./src/app/components/Chat.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst Chat = ()=>{\n    _s();\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [messagesGPT, setMessagesGPT] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const sendMessage = ()=>{\n        setMessages((prevMessages)=>[\n                ...prevMessages,\n                message\n            ]);\n        setMessage(\"\");\n        gptResponse();\n    };\n    const gptResponse = ()=>{\n        axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].request({\n            method: \"POST\",\n            url: \"https://api.edenai.run/v2/text/question_answer\",\n            headers: {\n                authorization: \"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiM2NhNDI5MWItNzU4My00MDhkLTk1ZTItYmNlY2I5NmNjYTU3IiwidHlwZSI6ImFwaV90b2tlbiJ9.389O_LbenyRydrHhkwC_E0n79kiqbq0WU_KiUK2S_kk\"\n            },\n            data: {\n                texts: [\n                    \"Linux is a family of open-source Unix-like operating systems based on the Linux kernel, an operating system kernel first released on September 17.\"\n                ],\n                temperature: 0.8,\n                examples: [\n                    [\n                        \"What is human life expectancy in the United States?\",\n                        \"78 years.\"\n                    ]\n                ],\n                providers: \"openai\",\n                question: message,\n                examples_context: \"In 2017, U.S. life expectancy was 78.6 years.\",\n                fallback_providers: \"\"\n            }\n        }).then((response)=>{\n            console.log(response.data.openai.answers);\n        // setMessages(prevMessages => [...prevMessages, {name: \"gpt\", res: response.data}]);\n        }).catch((error)=>{\n            console.error(error);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"fixed bottom-4 right-4 bg-white p-4 shadow-md rounded-md animate-fade-in\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-sm font-semibold text-gray-700\",\n                            children: \"Support aritificial intelligence (GPT 3.5)\"\n                        }, void 0, false, {\n                            fileName: \"/home/cybermazinho/contact_page_for_mongSO/src/app/components/Chat.tsx\",\n                            lineNumber: 52,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-xs text-gray-500\",\n                            children: \"Online\"\n                        }, void 0, false, {\n                            fileName: \"/home/cybermazinho/contact_page_for_mongSO/src/app/components/Chat.tsx\",\n                            lineNumber: 53,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/cybermazinho/contact_page_for_mongSO/src/app/components/Chat.tsx\",\n                    lineNumber: 51,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/cybermazinho/contact_page_for_mongSO/src/app/components/Chat.tsx\",\n                lineNumber: 50,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-2 max-h-96 overflow-y-auto\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-blue-100 border border-blue-300 p-4 rounded-lg\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-sm text-blue-800\",\n                            children: \"Hello! How can I help you?\"\n                        }, void 0, false, {\n                            fileName: \"/home/cybermazinho/contact_page_for_mongSO/src/app/components/Chat.tsx\",\n                            lineNumber: 58,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/cybermazinho/contact_page_for_mongSO/src/app/components/Chat.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 11\n                    }, undefined),\n                    messages.map((message, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"bg-green-100 border border-green-300 p-4 rounded-lg mt-2\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-sm text-green-800\",\n                                children: [\n                                    \" \",\n                                    message.res,\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/cybermazinho/contact_page_for_mongSO/src/app/components/Chat.tsx\",\n                                lineNumber: 64,\n                                columnNumber: 17\n                            }, undefined)\n                        }, index, false, {\n                            fileName: \"/home/cybermazinho/contact_page_for_mongSO/src/app/components/Chat.tsx\",\n                            lineNumber: 63,\n                            columnNumber: 16\n                        }, undefined)),\n                    messagesGPT.map((message, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"bg-blue-100 border border-blue-300 p-4 rounded-lg\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-sm text-blue-800\",\n                                children: [\n                                    \" \",\n                                    message.res,\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/cybermazinho/contact_page_for_mongSO/src/app/components/Chat.tsx\",\n                                lineNumber: 73,\n                                columnNumber: 17\n                            }, undefined)\n                        }, index, false, {\n                            fileName: \"/home/cybermazinho/contact_page_for_mongSO/src/app/components/Chat.tsx\",\n                            lineNumber: 72,\n                            columnNumber: 15\n                        }, undefined))\n                ]\n            }, void 0, true, {\n                fileName: \"/home/cybermazinho/contact_page_for_mongSO/src/app/components/Chat.tsx\",\n                lineNumber: 56,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                        className: \"w-full h-16 p-2 border border-gray-300 rounded-md\",\n                        placeholder: \"Enter your message...\",\n                        onChange: (e)=>setMessage(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"/home/cybermazinho/contact_page_for_mongSO/src/app/components/Chat.tsx\",\n                        lineNumber: 80,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: sendMessage,\n                        className: \"chat-button mt-2 text-white py-2 px-4 rounded-md\",\n                        children: \"Send\"\n                    }, void 0, false, {\n                        fileName: \"/home/cybermazinho/contact_page_for_mongSO/src/app/components/Chat.tsx\",\n                        lineNumber: 85,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/cybermazinho/contact_page_for_mongSO/src/app/components/Chat.tsx\",\n                lineNumber: 79,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/cybermazinho/contact_page_for_mongSO/src/app/components/Chat.tsx\",\n        lineNumber: 49,\n        columnNumber: 7\n    }, undefined);\n};\n_s(Chat, \"L+J0C5P1fs5lre2GNanBWbyE9iQ=\");\n_c = Chat;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Chat);\nvar _c;\n$RefreshReg$(_c, \"Chat\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9DaGF0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRWlDO0FBQ1A7QUFFMUIsTUFBTUUsT0FBTzs7SUFFWCxNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR0osK0NBQVFBLENBQUM7SUFDdkMsTUFBTSxDQUFDSyxVQUFVQyxZQUFZLEdBQUdOLCtDQUFRQSxDQUFRLEVBQUU7SUFDbEQsTUFBTSxDQUFDTyxhQUFhQyxlQUFlLEdBQUdSLCtDQUFRQSxDQUF1QyxFQUFFO0lBRXJGLE1BQU1TLGNBQWM7UUFDbEJILFlBQVlJLENBQUFBLGVBQWdCO21CQUFJQTtnQkFBY1A7YUFBUTtRQUN0REMsV0FBVztRQUNYTztJQUNGO0lBRUEsTUFBTUEsY0FBYztRQUNsQlYsNkNBQUtBLENBQUNXLE9BQU8sQ0FBQztZQUNaQyxRQUFRO1lBQ1JDLEtBQUs7WUFDTEMsU0FBUztnQkFDUEMsZUFBZTtZQUNqQjtZQUNBQyxNQUFNO2dCQUNKQyxPQUFPO29CQUNMO2lCQUNEO2dCQUNEQyxhQUFhO2dCQUNiQyxVQUFVO29CQUNSO3dCQUFDO3dCQUF1RDtxQkFBWTtpQkFDckU7Z0JBQ0RDLFdBQVc7Z0JBQ1hDLFVBQVVuQjtnQkFDVm9CLGtCQUFrQjtnQkFDbEJDLG9CQUFvQjtZQUN0QjtRQUNGLEdBQ0NDLElBQUksQ0FBQyxDQUFDQztZQUNMQyxRQUFRQyxHQUFHLENBQUNGLFNBQVNULElBQUksQ0FBQ1ksTUFBTSxDQUFDQyxPQUFPO1FBQ3hDLHFGQUFxRjtRQUN2RixHQUNDQyxLQUFLLENBQUMsQ0FBQ0M7WUFDTkwsUUFBUUssS0FBSyxDQUFDQTtRQUNoQjtJQUNGO0lBRUEscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0Q7O3NDQUNDLDhEQUFDRTs0QkFBRUQsV0FBVTtzQ0FBc0M7Ozs7OztzQ0FDbkQsOERBQUNDOzRCQUFFRCxXQUFVO3NDQUF3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBR3pDLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNEO3dCQUFJQyxXQUFVO2tDQUNiLDRFQUFDQzs0QkFBRUQsV0FBVTtzQ0FBd0I7Ozs7Ozs7Ozs7O29CQUlyQzdCLFNBQVMrQixHQUFHLENBQUUsQ0FBQ2pDLFNBQVNrQyxzQkFDckIsOERBQUNKOzRCQUFnQkMsV0FBVTtzQ0FDMUIsNEVBQUNDO2dDQUFFRCxXQUFVOztvQ0FBeUI7b0NBQUUvQixRQUFRbUMsR0FBRztvQ0FBQzs7Ozs7OzsyQkFEM0NEOzs7OztvQkFRYjlCLFlBQVk2QixHQUFHLENBQUUsQ0FBQ2pDLFNBQVNrQyxzQkFDekIsOERBQUNKOzRCQUFnQkMsV0FBVTtzQ0FDekIsNEVBQUNDO2dDQUFFRCxXQUFVOztvQ0FBd0I7b0NBQUUvQixRQUFRbUMsR0FBRztvQ0FBQzs7Ozs7OzsyQkFEM0NEOzs7Ozs7Ozs7OzswQkFPaEIsOERBQUNKO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0s7d0JBQ0NMLFdBQVU7d0JBQ1ZNLGFBQVk7d0JBQ1pDLFVBQVUsQ0FBQ0MsSUFBV3RDLFdBQVdzQyxFQUFFQyxNQUFNLENBQUNDLEtBQUs7Ozs7OztrQ0FFakQsOERBQUNDO3dCQUFPQyxTQUFTckM7d0JBQWF5QixXQUFVO2tDQUFtRDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTW5HO0dBckZJaEM7S0FBQUE7QUF1Rk4sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL0NoYXQudHN4PzdiYzEiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5cbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5jb25zdCBDaGF0ID0gKCkgPT4ge1xuXG4gIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKFwiXCIpXG4gIGNvbnN0IFttZXNzYWdlcywgc2V0TWVzc2FnZXNdID0gdXNlU3RhdGU8QXJyYXk+KFtdKTtcbiAgY29uc3QgW21lc3NhZ2VzR1BULCBzZXRNZXNzYWdlc0dQVF0gPSB1c2VTdGF0ZTxBcnJheTx7IG5hbWU6IHN0cmluZzsgcmVzOiBzdHJpbmcgfT4+KFtdKTtcblxuICAgIGNvbnN0IHNlbmRNZXNzYWdlID0gKCkgPT4ge1xuICAgICAgc2V0TWVzc2FnZXMocHJldk1lc3NhZ2VzID0+IFsuLi5wcmV2TWVzc2FnZXMsIG1lc3NhZ2VdKTtcbiAgICAgIHNldE1lc3NhZ2UoJycpOyBcbiAgICAgIGdwdFJlc3BvbnNlKClcbiAgICB9XG4gICAgXG4gICAgY29uc3QgZ3B0UmVzcG9uc2UgPSAoKSA9PiB7XG4gICAgICBheGlvcy5yZXF1ZXN0KHtcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgdXJsOiBcImh0dHBzOi8vYXBpLmVkZW5haS5ydW4vdjIvdGV4dC9xdWVzdGlvbl9hbnN3ZXJcIixcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIGF1dGhvcml6YXRpb246IFwiQmVhcmVyIGV5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUoxYzJWeVgybGtJam9pTTJOaE5ESTVNV0l0TnpVNE15MDBNRGhrTFRrMVpUSXRZbU5sWTJJNU5tTmpZVFUzSWl3aWRIbHdaU0k2SW1Gd2FWOTBiMnRsYmlKOS4zODlPX0xiZW55Unlkckhoa3dDX0Uwbjc5a2lxYnEwV1VfS2lVSzJTX2trXCIsXG4gICAgICAgIH0sXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICB0ZXh0czogW1xuICAgICAgICAgICAgXCJMaW51eCBpcyBhIGZhbWlseSBvZiBvcGVuLXNvdXJjZSBVbml4LWxpa2Ugb3BlcmF0aW5nIHN5c3RlbXMgYmFzZWQgb24gdGhlIExpbnV4IGtlcm5lbCwgYW4gb3BlcmF0aW5nIHN5c3RlbSBrZXJuZWwgZmlyc3QgcmVsZWFzZWQgb24gU2VwdGVtYmVyIDE3LlwiLFxuICAgICAgICAgIF0sXG4gICAgICAgICAgdGVtcGVyYXR1cmU6IDAuOCxcbiAgICAgICAgICBleGFtcGxlczogW1xuICAgICAgICAgICAgW1wiV2hhdCBpcyBodW1hbiBsaWZlIGV4cGVjdGFuY3kgaW4gdGhlIFVuaXRlZCBTdGF0ZXM/XCIsIFwiNzggeWVhcnMuXCJdLFxuICAgICAgICAgIF0sXG4gICAgICAgICAgcHJvdmlkZXJzOiBcIm9wZW5haVwiLFxuICAgICAgICAgIHF1ZXN0aW9uOiBtZXNzYWdlLFxuICAgICAgICAgIGV4YW1wbGVzX2NvbnRleHQ6IFwiSW4gMjAxNywgVS5TLiBsaWZlIGV4cGVjdGFuY3kgd2FzIDc4LjYgeWVhcnMuXCIsXG4gICAgICAgICAgZmFsbGJhY2tfcHJvdmlkZXJzOiBcIlwiLFxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICAgIC50aGVuKChyZXNwb25zZTogYW55KSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEub3BlbmFpLmFuc3dlcnMpXG4gICAgICAgIC8vIHNldE1lc3NhZ2VzKHByZXZNZXNzYWdlcyA9PiBbLi4ucHJldk1lc3NhZ2VzLCB7bmFtZTogXCJncHRcIiwgcmVzOiByZXNwb25zZS5kYXRhfV0pO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICAgIFxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpeGVkIGJvdHRvbS00IHJpZ2h0LTQgYmctd2hpdGUgcC00IHNoYWRvdy1tZCByb3VuZGVkLW1kIGFuaW1hdGUtZmFkZS1pblwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktNzAwXCI+U3VwcG9ydCBhcml0aWZpY2lhbCBpbnRlbGxpZ2VuY2UgKEdQVCAzLjUpPC9wPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LWdyYXktNTAwXCI+T25saW5lPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0yIG1heC1oLTk2IG92ZXJmbG93LXktYXV0b1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctYmx1ZS0xMDAgYm9yZGVyIGJvcmRlci1ibHVlLTMwMCBwLTQgcm91bmRlZC1sZ1wiPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWJsdWUtODAwXCI+SGVsbG8hIEhvdyBjYW4gSSBoZWxwIHlvdT88L3A+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICB7XG4gICAgICAgICAgICBtZXNzYWdlcy5tYXAoIChtZXNzYWdlLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJiZy1ncmVlbi0xMDAgYm9yZGVyIGJvcmRlci1ncmVlbi0zMDAgcC00IHJvdW5kZWQtbGcgbXQtMlwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmVlbi04MDBcIj4ge21lc3NhZ2UucmVzfSA8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICkpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAge1xuICAgICAgICAgICAgbWVzc2FnZXNHUFQubWFwKCAobWVzc2FnZSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJiZy1ibHVlLTEwMCBib3JkZXIgYm9yZGVyLWJsdWUtMzAwIHAtNCByb3VuZGVkLWxnXCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWJsdWUtODAwXCI+IHttZXNzYWdlLnJlc30gPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpXG4gICAgICAgICAgfVxuXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTRcIj5cbiAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLTE2IHAtMiBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbWRcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIG1lc3NhZ2UuLi5cIlxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlOiBhbnkpID0+IHNldE1lc3NhZ2UoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgID48L3RleHRhcmVhPlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17c2VuZE1lc3NhZ2V9IGNsYXNzTmFtZT1cImNoYXQtYnV0dG9uIG10LTIgdGV4dC13aGl0ZSBweS0yIHB4LTQgcm91bmRlZC1tZFwiPlxuICAgICAgICAgICAgU2VuZFxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH07XG4gIFxuZXhwb3J0IGRlZmF1bHQgQ2hhdDsiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJheGlvcyIsIkNoYXQiLCJtZXNzYWdlIiwic2V0TWVzc2FnZSIsIm1lc3NhZ2VzIiwic2V0TWVzc2FnZXMiLCJtZXNzYWdlc0dQVCIsInNldE1lc3NhZ2VzR1BUIiwic2VuZE1lc3NhZ2UiLCJwcmV2TWVzc2FnZXMiLCJncHRSZXNwb25zZSIsInJlcXVlc3QiLCJtZXRob2QiLCJ1cmwiLCJoZWFkZXJzIiwiYXV0aG9yaXphdGlvbiIsImRhdGEiLCJ0ZXh0cyIsInRlbXBlcmF0dXJlIiwiZXhhbXBsZXMiLCJwcm92aWRlcnMiLCJxdWVzdGlvbiIsImV4YW1wbGVzX2NvbnRleHQiLCJmYWxsYmFja19wcm92aWRlcnMiLCJ0aGVuIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwib3BlbmFpIiwiYW5zd2VycyIsImNhdGNoIiwiZXJyb3IiLCJkaXYiLCJjbGFzc05hbWUiLCJwIiwibWFwIiwiaW5kZXgiLCJyZXMiLCJ0ZXh0YXJlYSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/Chat.tsx\n"));

/***/ })

});