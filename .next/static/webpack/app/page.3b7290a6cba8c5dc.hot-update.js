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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst Chat = ()=>{\n    _s();\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const sendMessage = ()=>{\n        setMessages((prevMessages)=>[\n                ...prevMessages,\n                {\n                    name: \"user\",\n                    res: message\n                }\n            ]);\n        setMessage(\"\");\n        gptResponse();\n    };\n    const gptResponse = ()=>{\n        axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].request({\n            method: \"POST\",\n            url: \"https://api.edenai.run/v2/text/question_answer\",\n            headers: {\n                authorization: \"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiM2NhNDI5MWItNzU4My00MDhkLTk1ZTItYmNlY2I5NmNjYTU3IiwidHlwZSI6ImFwaV90b2tlbiJ9.389O_LbenyRydrHhkwC_E0n79kiqbq0WU_KiUK2S_kk\"\n            },\n            data: {\n                texts: [\n                    \"Linux is a family of open-source Unix-like operating systems based on the Linux kernel, an operating system kernel first released on September 17.\"\n                ],\n                temperature: 0.8,\n                examples: [\n                    [\n                        \"What is human life expectancy in the United States?\",\n                        \"78 years.\"\n                    ]\n                ],\n                providers: \"openai\",\n                question: message,\n                examples_context: \"In 2017, U.S. life expectancy was 78.6 years.\",\n                fallback_providers: \"\"\n            }\n        }).then((response)=>{\n            response.data.openai.answers.map((res)=>{\n                setMessages((prevMessages)=>[\n                        ...prevMessages,\n                        res\n                    ]);\n            });\n        }).catch((error)=>{\n            console.error(error);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"fixed bottom-4 right-4 bg-white p-4 shadow-md rounded-md animate-fade-in\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-sm font-semibold text-gray-700\",\n                            children: \"Support aritificial intelligence (GPT 3.5)\"\n                        }, void 0, false, {\n                            fileName: \"/home/cybermazinho/contact_page_for_mongSO/src/app/components/Chat.tsx\",\n                            lineNumber: 52,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-xs text-gray-500\",\n                            children: \"Online\"\n                        }, void 0, false, {\n                            fileName: \"/home/cybermazinho/contact_page_for_mongSO/src/app/components/Chat.tsx\",\n                            lineNumber: 53,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/cybermazinho/contact_page_for_mongSO/src/app/components/Chat.tsx\",\n                    lineNumber: 51,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/cybermazinho/contact_page_for_mongSO/src/app/components/Chat.tsx\",\n                lineNumber: 50,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-2 max-h-96 overflow-y-auto\",\n                children: [\n                    messages.map((message, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"bg-green-100 border border-green-300 p-4 rounded-lg mt-2\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-sm text-green-800\",\n                                children: [\n                                    \" \",\n                                    message.res,\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/cybermazinho/contact_page_for_mongSO/src/app/components/Chat.tsx\",\n                                lineNumber: 61,\n                                columnNumber: 21\n                            }, undefined)\n                        }, index, false, {\n                            fileName: \"/home/cybermazinho/contact_page_for_mongSO/src/app/components/Chat.tsx\",\n                            lineNumber: 60,\n                            columnNumber: 17\n                        }, undefined)),\n                    messagesGPT.map((chatGPTMessage, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"bg-blue-100 border border-blue-300 p-4 rounded-lg mt-2\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-sm text-blue-800\",\n                                children: [\n                                    \" \",\n                                    chatGPTMessage,\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/cybermazinho/contact_page_for_mongSO/src/app/components/Chat.tsx\",\n                                lineNumber: 69,\n                                columnNumber: 21\n                            }, undefined)\n                        }, index, false, {\n                            fileName: \"/home/cybermazinho/contact_page_for_mongSO/src/app/components/Chat.tsx\",\n                            lineNumber: 68,\n                            columnNumber: 17\n                        }, undefined))\n                ]\n            }, void 0, true, {\n                fileName: \"/home/cybermazinho/contact_page_for_mongSO/src/app/components/Chat.tsx\",\n                lineNumber: 56,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                        className: \"w-full h-16 p-2 border border-gray-300 rounded-md\",\n                        placeholder: \"Enter your message...\",\n                        onChange: (e)=>setMessage(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"/home/cybermazinho/contact_page_for_mongSO/src/app/components/Chat.tsx\",\n                        lineNumber: 75,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: sendMessage,\n                        className: \"chat-button mt-2 text-white py-2 px-4 rounded-md\",\n                        children: \"Send\"\n                    }, void 0, false, {\n                        fileName: \"/home/cybermazinho/contact_page_for_mongSO/src/app/components/Chat.tsx\",\n                        lineNumber: 80,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/cybermazinho/contact_page_for_mongSO/src/app/components/Chat.tsx\",\n                lineNumber: 74,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/cybermazinho/contact_page_for_mongSO/src/app/components/Chat.tsx\",\n        lineNumber: 49,\n        columnNumber: 7\n    }, undefined);\n};\n_s(Chat, \"U9TGHUzUNYWp5NAzD9i91TIyGKE=\");\n_c = Chat;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Chat);\nvar _c;\n$RefreshReg$(_c, \"Chat\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9DaGF0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRWlDO0FBQ1A7QUFFMUIsTUFBTUUsT0FBTzs7SUFFWCxNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR0osK0NBQVFBLENBQUM7SUFDdkMsTUFBTSxDQUFDSyxVQUFVQyxZQUFZLEdBQUdOLCtDQUFRQSxDQUFXLEVBQUU7SUFFbkQsTUFBTU8sY0FBYztRQUNsQkQsWUFBWSxDQUFDRSxlQUFzQjttQkFBSUE7Z0JBQWM7b0JBQUNDLE1BQU07b0JBQVFDLEtBQUtQO2dCQUFPO2FBQUU7UUFDbEZDLFdBQVc7UUFDWE87SUFDRjtJQUVBLE1BQU1BLGNBQWM7UUFDbEJWLDZDQUFLQSxDQUFDVyxPQUFPLENBQUM7WUFDWkMsUUFBUTtZQUNSQyxLQUFLO1lBQ0xDLFNBQVM7Z0JBQ1BDLGVBQWU7WUFDakI7WUFDQUMsTUFBTTtnQkFDSkMsT0FBTztvQkFDTDtpQkFDRDtnQkFDREMsYUFBYTtnQkFDYkMsVUFBVTtvQkFDUjt3QkFBQzt3QkFBdUQ7cUJBQVk7aUJBQ3JFO2dCQUNEQyxXQUFXO2dCQUNYQyxVQUFVbkI7Z0JBQ1ZvQixrQkFBa0I7Z0JBQ2xCQyxvQkFBb0I7WUFDdEI7UUFDRixHQUNDQyxJQUFJLENBQUMsQ0FBQ0M7WUFDTEEsU0FBU1QsSUFBSSxDQUFDVSxNQUFNLENBQUNDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFFLENBQUNuQjtnQkFDakNKLFlBQVksQ0FBQ0UsZUFBc0I7MkJBQUlBO3dCQUFjRTtxQkFBSTtZQUMzRDtRQUNGLEdBQ0NvQixLQUFLLENBQUMsQ0FBQ0M7WUFDTkMsUUFBUUQsS0FBSyxDQUFDQTtRQUNoQjtJQUNGO0lBRUEscUJBQ0UsOERBQUNFO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0Q7O3NDQUNDLDhEQUFDRTs0QkFBRUQsV0FBVTtzQ0FBc0M7Ozs7OztzQ0FDbkQsOERBQUNDOzRCQUFFRCxXQUFVO3NDQUF3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBR3pDLDhEQUFDRDtnQkFBSUMsV0FBVTs7b0JBR1Q3QixTQUFTd0IsR0FBRyxDQUFDLENBQUMxQixTQUFTaUMsc0JBQ3JCLDhEQUFDSDs0QkFBZ0JDLFdBQVU7c0NBQ3ZCLDRFQUFDQztnQ0FBRUQsV0FBVTs7b0NBQXlCO29DQUFFL0IsUUFBUU8sR0FBRztvQ0FBQzs7Ozs7OzsyQkFEOUMwQjs7Ozs7b0JBT1pDLFlBQVlSLEdBQUcsQ0FBQyxDQUFDUyxnQkFBZ0JGLHNCQUMvQiw4REFBQ0g7NEJBQWdCQyxXQUFVO3NDQUN2Qiw0RUFBQ0M7Z0NBQUVELFdBQVU7O29DQUF3QjtvQ0FBRUk7b0NBQWU7Ozs7Ozs7MkJBRGhERjs7Ozs7Ozs7Ozs7MEJBTWxCLDhEQUFDSDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNLO3dCQUNDTCxXQUFVO3dCQUNWTSxhQUFZO3dCQUNaQyxVQUFVLENBQUNDLElBQVd0QyxXQUFXc0MsRUFBRUMsTUFBTSxDQUFDQyxLQUFLOzs7Ozs7a0NBRWpELDhEQUFDQzt3QkFBT0MsU0FBU3ZDO3dCQUFhMkIsV0FBVTtrQ0FBbUQ7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1uRztHQWhGSWhDO0tBQUFBO0FBa0ZOLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9DaGF0LnRzeD83YmMxIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuY29uc3QgQ2hhdCA9ICgpID0+IHtcblxuICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZShcIlwiKVxuICBjb25zdCBbbWVzc2FnZXMsIHNldE1lc3NhZ2VzXSA9IHVzZVN0YXRlPHN0cmluZ1tdPihbXSk7XG5cbiAgICBjb25zdCBzZW5kTWVzc2FnZSA9ICgpID0+IHtcbiAgICAgIHNldE1lc3NhZ2VzKChwcmV2TWVzc2FnZXM6IGFueSkgPT4gWy4uLnByZXZNZXNzYWdlcywge25hbWU6IFwidXNlclwiLCByZXM6IG1lc3NhZ2V9XSk7XG4gICAgICBzZXRNZXNzYWdlKCcnKTsgXG4gICAgICBncHRSZXNwb25zZSgpXG4gICAgfVxuICAgIFxuICAgIGNvbnN0IGdwdFJlc3BvbnNlID0gKCkgPT4ge1xuICAgICAgYXhpb3MucmVxdWVzdCh7XG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIHVybDogXCJodHRwczovL2FwaS5lZGVuYWkucnVuL3YyL3RleHQvcXVlc3Rpb25fYW5zd2VyXCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBhdXRob3JpemF0aW9uOiBcIkJlYXJlciBleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKMWMyVnlYMmxrSWpvaU0yTmhOREk1TVdJdE56VTRNeTAwTURoa0xUazFaVEl0WW1ObFkySTVObU5qWVRVM0lpd2lkSGx3WlNJNkltRndhVjkwYjJ0bGJpSjkuMzg5T19MYmVueVJ5ZHJIaGt3Q19FMG43OWtpcWJxMFdVX0tpVUsyU19ra1wiLFxuICAgICAgICB9LFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgdGV4dHM6IFtcbiAgICAgICAgICAgIFwiTGludXggaXMgYSBmYW1pbHkgb2Ygb3Blbi1zb3VyY2UgVW5peC1saWtlIG9wZXJhdGluZyBzeXN0ZW1zIGJhc2VkIG9uIHRoZSBMaW51eCBrZXJuZWwsIGFuIG9wZXJhdGluZyBzeXN0ZW0ga2VybmVsIGZpcnN0IHJlbGVhc2VkIG9uIFNlcHRlbWJlciAxNy5cIixcbiAgICAgICAgICBdLFxuICAgICAgICAgIHRlbXBlcmF0dXJlOiAwLjgsXG4gICAgICAgICAgZXhhbXBsZXM6IFtcbiAgICAgICAgICAgIFtcIldoYXQgaXMgaHVtYW4gbGlmZSBleHBlY3RhbmN5IGluIHRoZSBVbml0ZWQgU3RhdGVzP1wiLCBcIjc4IHllYXJzLlwiXSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIHByb3ZpZGVyczogXCJvcGVuYWlcIixcbiAgICAgICAgICBxdWVzdGlvbjogbWVzc2FnZSxcbiAgICAgICAgICBleGFtcGxlc19jb250ZXh0OiBcIkluIDIwMTcsIFUuUy4gbGlmZSBleHBlY3RhbmN5IHdhcyA3OC42IHllYXJzLlwiLFxuICAgICAgICAgIGZhbGxiYWNrX3Byb3ZpZGVyczogXCJcIixcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgICAudGhlbigocmVzcG9uc2U6IGFueSkgPT4ge1xuICAgICAgICByZXNwb25zZS5kYXRhLm9wZW5haS5hbnN3ZXJzLm1hcCggKHJlczogYW55KSA9PiB7XG4gICAgICAgICAgc2V0TWVzc2FnZXMoKHByZXZNZXNzYWdlczogYW55KSA9PiBbLi4ucHJldk1lc3NhZ2VzLCByZXNdKTtcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICB9KTtcbiAgICB9XG4gICAgICBcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaXhlZCBib3R0b20tNCByaWdodC00IGJnLXdoaXRlIHAtNCBzaGFkb3ctbWQgcm91bmRlZC1tZCBhbmltYXRlLWZhZGUtaW5cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTcwMFwiPlN1cHBvcnQgYXJpdGlmaWNpYWwgaW50ZWxsaWdlbmNlIChHUFQgMy41KTwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1ncmF5LTUwMFwiPk9ubGluZTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMiBtYXgtaC05NiBvdmVyZmxvdy15LWF1dG9cIj5cbiAgICAgICAgICB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgbWVzc2FnZXMubWFwKChtZXNzYWdlLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwiYmctZ3JlZW4tMTAwIGJvcmRlciBib3JkZXItZ3JlZW4tMzAwIHAtNCByb3VuZGVkLWxnIG10LTJcIj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyZWVuLTgwMFwiPiB7bWVzc2FnZS5yZXN9IDwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKSlcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIG1lc3NhZ2VzR1BULm1hcCgoY2hhdEdQVE1lc3NhZ2UsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJiZy1ibHVlLTEwMCBib3JkZXIgYm9yZGVyLWJsdWUtMzAwIHAtNCByb3VuZGVkLWxnIG10LTJcIj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWJsdWUtODAwXCI+IHtjaGF0R1BUTWVzc2FnZX0gPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApKVxuICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNFwiPlxuICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGgtMTYgcC0yIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1tZFwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgbWVzc2FnZS4uLlwiXG4gICAgICAgICAgICBvbkNoYW5nZT17KGU6IGFueSkgPT4gc2V0TWVzc2FnZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgPjwvdGV4dGFyZWE+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzZW5kTWVzc2FnZX0gY2xhc3NOYW1lPVwiY2hhdC1idXR0b24gbXQtMiB0ZXh0LXdoaXRlIHB5LTIgcHgtNCByb3VuZGVkLW1kXCI+XG4gICAgICAgICAgICBTZW5kXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfTtcbiAgXG5leHBvcnQgZGVmYXVsdCBDaGF0OyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsImF4aW9zIiwiQ2hhdCIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwibWVzc2FnZXMiLCJzZXRNZXNzYWdlcyIsInNlbmRNZXNzYWdlIiwicHJldk1lc3NhZ2VzIiwibmFtZSIsInJlcyIsImdwdFJlc3BvbnNlIiwicmVxdWVzdCIsIm1ldGhvZCIsInVybCIsImhlYWRlcnMiLCJhdXRob3JpemF0aW9uIiwiZGF0YSIsInRleHRzIiwidGVtcGVyYXR1cmUiLCJleGFtcGxlcyIsInByb3ZpZGVycyIsInF1ZXN0aW9uIiwiZXhhbXBsZXNfY29udGV4dCIsImZhbGxiYWNrX3Byb3ZpZGVycyIsInRoZW4iLCJyZXNwb25zZSIsIm9wZW5haSIsImFuc3dlcnMiLCJtYXAiLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsImRpdiIsImNsYXNzTmFtZSIsInAiLCJpbmRleCIsIm1lc3NhZ2VzR1BUIiwiY2hhdEdQVE1lc3NhZ2UiLCJ0ZXh0YXJlYSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/Chat.tsx\n"));

/***/ })

});