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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst Chat = ()=>{\n    _s();\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [messagesGPT, setMessagesGPT] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const sendMessage = ()=>{\n        setMessages((prevMessages)=>[\n                ...prevMessages,\n                message\n            ]);\n        setMessage(\"\");\n        gptResponse();\n    };\n    const gptResponse = ()=>{\n        axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].request({\n            method: \"POST\",\n            url: \"https://api.edenai.run/v2/text/question_answer\",\n            headers: {\n                authorization: \"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiM2NhNDI5MWItNzU4My00MDhkLTk1ZTItYmNlY2I5NmNjYTU3IiwidHlwZSI6ImFwaV90b2tlbiJ9.389O_LbenyRydrHhkwC_E0n79kiqbq0WU_KiUK2S_kk\"\n            },\n            data: {\n                texts: [\n                    \"Linux is a family of open-source Unix-like operating systems based on the Linux kernel, an operating system kernel first released on September 17.\"\n                ],\n                temperature: 0.8,\n                examples: [\n                    [\n                        \"What is human life expectancy in the United States?\",\n                        \"78 years.\"\n                    ]\n                ],\n                providers: \"openai\",\n                question: message,\n                examples_context: \"In 2017, U.S. life expectancy was 78.6 years.\",\n                fallback_providers: \"\"\n            }\n        }).then((response)=>{\n            response.data.openai.answers.map((res)=>{\n                setMessagesGPT((prevMessages)=>[\n                        ...prevMessages,\n                        res\n                    ]);\n            });\n        }).catch((error)=>{\n            console.error(error);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"fixed bottom-4 right-4 bg-white p-4 shadow-md rounded-md animate-fade-in\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-sm font-semibold text-gray-700\",\n                            children: \"Support aritificial intelligence (GPT 3.5)\"\n                        }, void 0, false, {\n                            fileName: \"/home/cybermazinho/contact_page_for_mongSO/src/app/components/Chat.tsx\",\n                            lineNumber: 53,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-xs text-gray-500\",\n                            children: \"Online\"\n                        }, void 0, false, {\n                            fileName: \"/home/cybermazinho/contact_page_for_mongSO/src/app/components/Chat.tsx\",\n                            lineNumber: 54,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/cybermazinho/contact_page_for_mongSO/src/app/components/Chat.tsx\",\n                    lineNumber: 52,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/cybermazinho/contact_page_for_mongSO/src/app/components/Chat.tsx\",\n                lineNumber: 51,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-2 max-h-96 overflow-y-auto\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-blue-100 border border-blue-300 p-4 rounded-lg\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-sm text-blue-800\",\n                            children: \"Hello! How can I help you?\"\n                        }, void 0, false, {\n                            fileName: \"/home/cybermazinho/contact_page_for_mongSO/src/app/components/Chat.tsx\",\n                            lineNumber: 59,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/cybermazinho/contact_page_for_mongSO/src/app/components/Chat.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 11\n                    }, undefined),\n                    messages.map((message, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"bg-green-100 border border-green-300 p-4 rounded-lg mt-2\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-sm text-green-800\",\n                                children: [\n                                    \" \",\n                                    message,\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/cybermazinho/contact_page_for_mongSO/src/app/components/Chat.tsx\",\n                                lineNumber: 65,\n                                columnNumber: 17\n                            }, undefined)\n                        }, index, false, {\n                            fileName: \"/home/cybermazinho/contact_page_for_mongSO/src/app/components/Chat.tsx\",\n                            lineNumber: 64,\n                            columnNumber: 16\n                        }, undefined)),\n                    messagesGPT.map((message, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"bg-blue-100 border border-blue-300 p-4 rounded-lg\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-sm text-blue-800\",\n                                children: [\n                                    \" \",\n                                    message,\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/cybermazinho/contact_page_for_mongSO/src/app/components/Chat.tsx\",\n                                lineNumber: 74,\n                                columnNumber: 17\n                            }, undefined)\n                        }, index, false, {\n                            fileName: \"/home/cybermazinho/contact_page_for_mongSO/src/app/components/Chat.tsx\",\n                            lineNumber: 73,\n                            columnNumber: 15\n                        }, undefined))\n                ]\n            }, void 0, true, {\n                fileName: \"/home/cybermazinho/contact_page_for_mongSO/src/app/components/Chat.tsx\",\n                lineNumber: 57,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                        className: \"w-full h-16 p-2 border border-gray-300 rounded-md\",\n                        placeholder: \"Enter your message...\",\n                        onChange: (e)=>setMessage(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"/home/cybermazinho/contact_page_for_mongSO/src/app/components/Chat.tsx\",\n                        lineNumber: 81,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: sendMessage,\n                        className: \"chat-button mt-2 text-white py-2 px-4 rounded-md\",\n                        children: \"Send\"\n                    }, void 0, false, {\n                        fileName: \"/home/cybermazinho/contact_page_for_mongSO/src/app/components/Chat.tsx\",\n                        lineNumber: 86,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/cybermazinho/contact_page_for_mongSO/src/app/components/Chat.tsx\",\n                lineNumber: 80,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/cybermazinho/contact_page_for_mongSO/src/app/components/Chat.tsx\",\n        lineNumber: 50,\n        columnNumber: 7\n    }, undefined);\n};\n_s(Chat, \"L+J0C5P1fs5lre2GNanBWbyE9iQ=\");\n_c = Chat;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Chat);\nvar _c;\n$RefreshReg$(_c, \"Chat\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9DaGF0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRWlDO0FBQ1A7QUFFMUIsTUFBTUUsT0FBTzs7SUFFWCxNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR0osK0NBQVFBLENBQUM7SUFDdkMsTUFBTSxDQUFDSyxVQUFVQyxZQUFZLEdBQUdOLCtDQUFRQSxDQUFXLEVBQUU7SUFDckQsTUFBTSxDQUFDTyxhQUFhQyxlQUFlLEdBQUdSLCtDQUFRQSxDQUFXLEVBQUU7SUFFekQsTUFBTVMsY0FBYztRQUNsQkgsWUFBWSxDQUFDSSxlQUFzQjttQkFBSUE7Z0JBQWNQO2FBQVE7UUFDN0RDLFdBQVc7UUFDWE87SUFDRjtJQUVBLE1BQU1BLGNBQWM7UUFDbEJWLDZDQUFLQSxDQUFDVyxPQUFPLENBQUM7WUFDWkMsUUFBUTtZQUNSQyxLQUFLO1lBQ0xDLFNBQVM7Z0JBQ1BDLGVBQWU7WUFDakI7WUFDQUMsTUFBTTtnQkFDSkMsT0FBTztvQkFDTDtpQkFDRDtnQkFDREMsYUFBYTtnQkFDYkMsVUFBVTtvQkFDUjt3QkFBQzt3QkFBdUQ7cUJBQVk7aUJBQ3JFO2dCQUNEQyxXQUFXO2dCQUNYQyxVQUFVbkI7Z0JBQ1ZvQixrQkFBa0I7Z0JBQ2xCQyxvQkFBb0I7WUFDdEI7UUFDRixHQUNDQyxJQUFJLENBQUMsQ0FBQ0M7WUFDTEEsU0FBU1QsSUFBSSxDQUFDVSxNQUFNLENBQUNDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFFLENBQUNDO2dCQUNqQ3RCLGVBQWUsQ0FBQ0UsZUFBc0I7MkJBQUlBO3dCQUFjb0I7cUJBQUk7WUFDOUQ7UUFDRixHQUNDQyxLQUFLLENBQUMsQ0FBQ0M7WUFDTkMsUUFBUUQsS0FBSyxDQUFDQTtRQUNoQjtJQUNGO0lBRUEscUJBQ0UsOERBQUNFO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0Q7O3NDQUNDLDhEQUFDRTs0QkFBRUQsV0FBVTtzQ0FBc0M7Ozs7OztzQ0FDbkQsOERBQUNDOzRCQUFFRCxXQUFVO3NDQUF3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBR3pDLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNEO3dCQUFJQyxXQUFVO2tDQUNiLDRFQUFDQzs0QkFBRUQsV0FBVTtzQ0FBd0I7Ozs7Ozs7Ozs7O29CQUlyQzlCLFNBQVN3QixHQUFHLENBQUUsQ0FBQzFCLFNBQVNrQyxzQkFDckIsOERBQUNIOzRCQUFnQkMsV0FBVTtzQ0FDMUIsNEVBQUNDO2dDQUFFRCxXQUFVOztvQ0FBeUI7b0NBQUVoQztvQ0FBUTs7Ozs7OzsyQkFEdkNrQzs7Ozs7b0JBUWI5QixZQUFZc0IsR0FBRyxDQUFFLENBQUMxQixTQUFTa0Msc0JBQ3pCLDhEQUFDSDs0QkFBZ0JDLFdBQVU7c0NBQ3pCLDRFQUFDQztnQ0FBRUQsV0FBVTs7b0NBQXdCO29DQUFFaEM7b0NBQVE7Ozs7Ozs7MkJBRHZDa0M7Ozs7Ozs7Ozs7OzBCQU9oQiw4REFBQ0g7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDRzt3QkFDQ0gsV0FBVTt3QkFDVkksYUFBWTt3QkFDWkMsVUFBVSxDQUFDQyxJQUFXckMsV0FBV3FDLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSzs7Ozs7O2tDQUVqRCw4REFBQ0M7d0JBQU9DLFNBQVNwQzt3QkFBYTBCLFdBQVU7a0NBQW1EOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNbkc7R0F0RklqQztLQUFBQTtBQXdGTiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvQ2hhdC50c3g/N2JjMSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcblxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmNvbnN0IENoYXQgPSAoKSA9PiB7XG5cbiAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGUoXCJcIilcbiAgY29uc3QgW21lc3NhZ2VzLCBzZXRNZXNzYWdlc10gPSB1c2VTdGF0ZTxzdHJpbmdbXT4oW10pO1xuICBjb25zdCBbbWVzc2FnZXNHUFQsIHNldE1lc3NhZ2VzR1BUXSA9IHVzZVN0YXRlPHN0cmluZ1tdPihbXSk7XG5cbiAgICBjb25zdCBzZW5kTWVzc2FnZSA9ICgpID0+IHtcbiAgICAgIHNldE1lc3NhZ2VzKChwcmV2TWVzc2FnZXM6IGFueSkgPT4gWy4uLnByZXZNZXNzYWdlcywgbWVzc2FnZV0pO1xuICAgICAgc2V0TWVzc2FnZSgnJyk7IFxuICAgICAgZ3B0UmVzcG9uc2UoKVxuICAgIH1cbiAgICBcbiAgICBjb25zdCBncHRSZXNwb25zZSA9ICgpID0+IHtcbiAgICAgIGF4aW9zLnJlcXVlc3Qoe1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICB1cmw6IFwiaHR0cHM6Ly9hcGkuZWRlbmFpLnJ1bi92Mi90ZXh0L3F1ZXN0aW9uX2Fuc3dlclwiLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgYXV0aG9yaXphdGlvbjogXCJCZWFyZXIgZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SjFjMlZ5WDJsa0lqb2lNMk5oTkRJNU1XSXROelU0TXkwME1EaGtMVGsxWlRJdFltTmxZMkk1Tm1OallUVTNJaXdpZEhsd1pTSTZJbUZ3YVY5MGIydGxiaUo5LjM4OU9fTGJlbnlSeWRySGhrd0NfRTBuNzlraXFicTBXVV9LaVVLMlNfa2tcIixcbiAgICAgICAgfSxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIHRleHRzOiBbXG4gICAgICAgICAgICBcIkxpbnV4IGlzIGEgZmFtaWx5IG9mIG9wZW4tc291cmNlIFVuaXgtbGlrZSBvcGVyYXRpbmcgc3lzdGVtcyBiYXNlZCBvbiB0aGUgTGludXgga2VybmVsLCBhbiBvcGVyYXRpbmcgc3lzdGVtIGtlcm5lbCBmaXJzdCByZWxlYXNlZCBvbiBTZXB0ZW1iZXIgMTcuXCIsXG4gICAgICAgICAgXSxcbiAgICAgICAgICB0ZW1wZXJhdHVyZTogMC44LFxuICAgICAgICAgIGV4YW1wbGVzOiBbXG4gICAgICAgICAgICBbXCJXaGF0IGlzIGh1bWFuIGxpZmUgZXhwZWN0YW5jeSBpbiB0aGUgVW5pdGVkIFN0YXRlcz9cIiwgXCI3OCB5ZWFycy5cIl0sXG4gICAgICAgICAgXSxcbiAgICAgICAgICBwcm92aWRlcnM6IFwib3BlbmFpXCIsXG4gICAgICAgICAgcXVlc3Rpb246IG1lc3NhZ2UsXG4gICAgICAgICAgZXhhbXBsZXNfY29udGV4dDogXCJJbiAyMDE3LCBVLlMuIGxpZmUgZXhwZWN0YW5jeSB3YXMgNzguNiB5ZWFycy5cIixcbiAgICAgICAgICBmYWxsYmFja19wcm92aWRlcnM6IFwiXCIsXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgICAgLnRoZW4oKHJlc3BvbnNlOiBhbnkpID0+IHtcbiAgICAgICAgcmVzcG9uc2UuZGF0YS5vcGVuYWkuYW5zd2Vycy5tYXAoIChyZXM6IFN0cmluZykgPT4ge1xuICAgICAgICAgIHNldE1lc3NhZ2VzR1BUKChwcmV2TWVzc2FnZXM6IGFueSkgPT4gWy4uLnByZXZNZXNzYWdlcywgcmVzXSk7XG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgfSk7XG4gICAgfVxuICAgICAgXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQgYm90dG9tLTQgcmlnaHQtNCBiZy13aGl0ZSBwLTQgc2hhZG93LW1kIHJvdW5kZWQtbWQgYW5pbWF0ZS1mYWRlLWluXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LXNlbWlib2xkIHRleHQtZ3JheS03MDBcIj5TdXBwb3J0IGFyaXRpZmljaWFsIGludGVsbGlnZW5jZSAoR1BUIDMuNSk8L3A+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtZ3JheS01MDBcIj5PbmxpbmU8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTIgbWF4LWgtOTYgb3ZlcmZsb3cteS1hdXRvXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ibHVlLTEwMCBib3JkZXIgYm9yZGVyLWJsdWUtMzAwIHAtNCByb3VuZGVkLWxnXCI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtYmx1ZS04MDBcIj5IZWxsbyEgSG93IGNhbiBJIGhlbHAgeW91PzwvcD5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG1lc3NhZ2VzLm1hcCggKG1lc3NhZ2UsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImJnLWdyZWVuLTEwMCBib3JkZXIgYm9yZGVyLWdyZWVuLTMwMCBwLTQgcm91bmRlZC1sZyBtdC0yXCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyZWVuLTgwMFwiPiB7bWVzc2FnZX0gPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICApKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG1lc3NhZ2VzR1BULm1hcCggKG1lc3NhZ2UsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwiYmctYmx1ZS0xMDAgYm9yZGVyIGJvcmRlci1ibHVlLTMwMCBwLTQgcm91bmRlZC1sZ1wiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ibHVlLTgwMFwiPiB7bWVzc2FnZX0gPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpXG4gICAgICAgICAgfVxuXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTRcIj5cbiAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLTE2IHAtMiBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbWRcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIG1lc3NhZ2UuLi5cIlxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlOiBhbnkpID0+IHNldE1lc3NhZ2UoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgID48L3RleHRhcmVhPlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17c2VuZE1lc3NhZ2V9IGNsYXNzTmFtZT1cImNoYXQtYnV0dG9uIG10LTIgdGV4dC13aGl0ZSBweS0yIHB4LTQgcm91bmRlZC1tZFwiPlxuICAgICAgICAgICAgU2VuZFxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH07XG4gIFxuZXhwb3J0IGRlZmF1bHQgQ2hhdDsiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJheGlvcyIsIkNoYXQiLCJtZXNzYWdlIiwic2V0TWVzc2FnZSIsIm1lc3NhZ2VzIiwic2V0TWVzc2FnZXMiLCJtZXNzYWdlc0dQVCIsInNldE1lc3NhZ2VzR1BUIiwic2VuZE1lc3NhZ2UiLCJwcmV2TWVzc2FnZXMiLCJncHRSZXNwb25zZSIsInJlcXVlc3QiLCJtZXRob2QiLCJ1cmwiLCJoZWFkZXJzIiwiYXV0aG9yaXphdGlvbiIsImRhdGEiLCJ0ZXh0cyIsInRlbXBlcmF0dXJlIiwiZXhhbXBsZXMiLCJwcm92aWRlcnMiLCJxdWVzdGlvbiIsImV4YW1wbGVzX2NvbnRleHQiLCJmYWxsYmFja19wcm92aWRlcnMiLCJ0aGVuIiwicmVzcG9uc2UiLCJvcGVuYWkiLCJhbnN3ZXJzIiwibWFwIiwicmVzIiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJkaXYiLCJjbGFzc05hbWUiLCJwIiwiaW5kZXgiLCJ0ZXh0YXJlYSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/Chat.tsx\n"));

/***/ })

});