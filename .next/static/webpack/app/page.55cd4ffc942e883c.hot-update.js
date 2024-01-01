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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst Chat = ()=>{\n    _s();\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const sendMessage = ()=>{\n        setMessages((prevMessages)=>[\n                ...prevMessages,\n                {\n                    name: \"user\",\n                    res: message\n                }\n            ]);\n        setMessage(\"\");\n        gptResponse();\n    };\n    const gptResponse = ()=>{\n        axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].request({\n            method: \"POST\",\n            url: \"https://api.edenai.run/v2/text/question_answer\",\n            headers: {\n                authorization: \"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiM2NhNDI5MWItNzU4My00MDhkLTk1ZTItYmNlY2I5NmNjYTU3IiwidHlwZSI6ImFwaV90b2tlbiJ9.389O_LbenyRydrHhkwC_E0n79kiqbq0WU_KiUK2S_kk\"\n            },\n            data: {\n                texts: [\n                    \"Linux is a family of open-source Unix-like operating systems based on the Linux kernel, an operating system kernel first released on September 17.\"\n                ],\n                temperature: 0.8,\n                examples: [\n                    [\n                        \"What is human life expectancy in the United States?\",\n                        \"78 years.\"\n                    ]\n                ],\n                providers: \"openai\",\n                question: message,\n                examples_context: \"In 2017, U.S. life expectancy was 78.6 years.\",\n                fallback_providers: \"\"\n            }\n        }).then((response)=>{\n            response.data.openai.answers.map((message)=>{\n                setMessages((prevMessages)=>[\n                        ...prevMessages,\n                        {\n                            name: \"gpt\",\n                            res: message\n                        }\n                    ]);\n            });\n        }).catch((error)=>{\n            console.error(error);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"fixed bottom-4 right-4 bg-white p-4 shadow-md rounded-md animate-fade-in\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-sm font-semibold text-gray-700\",\n                            children: \"Support aritificial intelligence (GPT 3.5)\"\n                        }, void 0, false, {\n                            fileName: \"/home/cybermazinho/contact_page_for_mongSO/src/app/components/Chat.tsx\",\n                            lineNumber: 52,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-xs text-gray-500\",\n                            children: \"Online\"\n                        }, void 0, false, {\n                            fileName: \"/home/cybermazinho/contact_page_for_mongSO/src/app/components/Chat.tsx\",\n                            lineNumber: 53,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/cybermazinho/contact_page_for_mongSO/src/app/components/Chat.tsx\",\n                    lineNumber: 51,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/cybermazinho/contact_page_for_mongSO/src/app/components/Chat.tsx\",\n                lineNumber: 50,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-2 max-h-96 overflow-y-auto\",\n                children: messages.map((message, index)=>message.name === \"user\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-green-100 border border-green-300 p-4 rounded-lg mt-2\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-sm text-green-800\",\n                            children: [\n                                \" \",\n                                message.res,\n                                \" \"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/cybermazinho/contact_page_for_mongSO/src/app/components/Chat.tsx\",\n                            lineNumber: 61,\n                            columnNumber: 21\n                        }, undefined)\n                    }, index, false, {\n                        fileName: \"/home/cybermazinho/contact_page_for_mongSO/src/app/components/Chat.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 19\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-blue-100 border border-blue-300 p-4 rounded-lg mt-2\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-sm text-blue-800\",\n                            children: [\n                                \" \",\n                                message.res,\n                                \" \"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/cybermazinho/contact_page_for_mongSO/src/app/components/Chat.tsx\",\n                            lineNumber: 65,\n                            columnNumber: 23\n                        }, undefined)\n                    }, index, false, {\n                        fileName: \"/home/cybermazinho/contact_page_for_mongSO/src/app/components/Chat.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 19\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/home/cybermazinho/contact_page_for_mongSO/src/app/components/Chat.tsx\",\n                lineNumber: 56,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                        className: \"w-full h-16 p-2 border border-gray-300 rounded-md\",\n                        placeholder: \"Enter your message...\",\n                        onChange: (e)=>setMessage(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"/home/cybermazinho/contact_page_for_mongSO/src/app/components/Chat.tsx\",\n                        lineNumber: 71,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: sendMessage,\n                        className: \"chat-button mt-2 text-white py-2 px-4 rounded-md\",\n                        children: \"Send\"\n                    }, void 0, false, {\n                        fileName: \"/home/cybermazinho/contact_page_for_mongSO/src/app/components/Chat.tsx\",\n                        lineNumber: 76,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/cybermazinho/contact_page_for_mongSO/src/app/components/Chat.tsx\",\n                lineNumber: 70,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/cybermazinho/contact_page_for_mongSO/src/app/components/Chat.tsx\",\n        lineNumber: 49,\n        columnNumber: 7\n    }, undefined);\n};\n_s(Chat, \"R9cL6wTFJ4Cm4nINx8rfDHzMChE=\");\n_c = Chat;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Chat);\nvar _c;\n$RefreshReg$(_c, \"Chat\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9DaGF0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRWlDO0FBQ1A7QUFFMUIsTUFBTUUsT0FBTzs7SUFFWCxNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR0osK0NBQVFBLENBQUM7SUFDdkMsTUFBTSxDQUFDSyxVQUFVQyxZQUFZLEdBQUdOLCtDQUFRQSxDQUFXLEVBQUU7SUFFbkQsTUFBTU8sY0FBYztRQUNsQkQsWUFBWSxDQUFDRSxlQUFzQjttQkFBSUE7Z0JBQWM7b0JBQUNDLE1BQU07b0JBQVFDLEtBQUtQO2dCQUFPO2FBQUU7UUFDbEZDLFdBQVc7UUFDWE87SUFDRjtJQUVBLE1BQU1BLGNBQWM7UUFDbEJWLDZDQUFLQSxDQUFDVyxPQUFPLENBQUM7WUFDWkMsUUFBUTtZQUNSQyxLQUFLO1lBQ0xDLFNBQVM7Z0JBQ1BDLGVBQWU7WUFDakI7WUFDQUMsTUFBTTtnQkFDSkMsT0FBTztvQkFDTDtpQkFDRDtnQkFDREMsYUFBYTtnQkFDYkMsVUFBVTtvQkFDUjt3QkFBQzt3QkFBdUQ7cUJBQVk7aUJBQ3JFO2dCQUNEQyxXQUFXO2dCQUNYQyxVQUFVbkI7Z0JBQ1ZvQixrQkFBa0I7Z0JBQ2xCQyxvQkFBb0I7WUFDdEI7UUFDRixHQUNDQyxJQUFJLENBQUMsQ0FBQ0M7WUFDTEEsU0FBU1QsSUFBSSxDQUFDVSxNQUFNLENBQUNDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFFLENBQUMxQjtnQkFDakNHLFlBQVksQ0FBQ0UsZUFBc0I7MkJBQUlBO3dCQUFjOzRCQUFDQyxNQUFNOzRCQUFPQyxLQUFLUDt3QkFBTztxQkFBRTtZQUNuRjtRQUNGLEdBQ0MyQixLQUFLLENBQUMsQ0FBQ0M7WUFDTkMsUUFBUUQsS0FBSyxDQUFDQTtRQUNoQjtJQUNGO0lBRUEscUJBQ0UsOERBQUNFO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0Q7O3NDQUNDLDhEQUFDRTs0QkFBRUQsV0FBVTtzQ0FBc0M7Ozs7OztzQ0FDbkQsOERBQUNDOzRCQUFFRCxXQUFVO3NDQUF3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBR3pDLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFFVDdCLFNBQVN3QixHQUFHLENBQUMsQ0FBQzFCLFNBQVNpQyxRQUNyQmpDLFFBQVFNLElBQUksS0FBSyx1QkFDZiw4REFBQ3dCO3dCQUFnQkMsV0FBVTtrQ0FDekIsNEVBQUNDOzRCQUFFRCxXQUFVOztnQ0FBeUI7Z0NBQUUvQixRQUFRTyxHQUFHO2dDQUFDOzs7Ozs7O3VCQUQ1QzBCOzs7O2tEQUlWLDhEQUFDSDt3QkFBZ0JDLFdBQVU7a0NBQ3ZCLDRFQUFDQzs0QkFBRUQsV0FBVTs7Z0NBQXdCO2dDQUFFL0IsUUFBUU8sR0FBRztnQ0FBQzs7Ozs7Ozt1QkFEN0MwQjs7Ozs7Ozs7OzswQkFNcEIsOERBQUNIO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0c7d0JBQ0NILFdBQVU7d0JBQ1ZJLGFBQVk7d0JBQ1pDLFVBQVUsQ0FBQ0MsSUFBV3BDLFdBQVdvQyxFQUFFQyxNQUFNLENBQUNDLEtBQUs7Ozs7OztrQ0FFakQsOERBQUNDO3dCQUFPQyxTQUFTckM7d0JBQWEyQixXQUFVO2tDQUFtRDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTW5HO0dBNUVJaEM7S0FBQUE7QUE4RU4sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL0NoYXQudHN4PzdiYzEiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5cbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5jb25zdCBDaGF0ID0gKCkgPT4ge1xuXG4gIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBbbWVzc2FnZXMsIHNldE1lc3NhZ2VzXSA9IHVzZVN0YXRlPHN0cmluZ1tdPihbXSk7XG5cbiAgICBjb25zdCBzZW5kTWVzc2FnZSA9ICgpID0+IHtcbiAgICAgIHNldE1lc3NhZ2VzKChwcmV2TWVzc2FnZXM6IGFueSkgPT4gWy4uLnByZXZNZXNzYWdlcywge25hbWU6IFwidXNlclwiLCByZXM6IG1lc3NhZ2V9XSk7XG4gICAgICBzZXRNZXNzYWdlKCcnKTsgXG4gICAgICBncHRSZXNwb25zZSgpXG4gICAgfVxuICAgIFxuICAgIGNvbnN0IGdwdFJlc3BvbnNlID0gKCkgPT4ge1xuICAgICAgYXhpb3MucmVxdWVzdCh7XG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIHVybDogXCJodHRwczovL2FwaS5lZGVuYWkucnVuL3YyL3RleHQvcXVlc3Rpb25fYW5zd2VyXCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBhdXRob3JpemF0aW9uOiBcIkJlYXJlciBleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKMWMyVnlYMmxrSWpvaU0yTmhOREk1TVdJdE56VTRNeTAwTURoa0xUazFaVEl0WW1ObFkySTVObU5qWVRVM0lpd2lkSGx3WlNJNkltRndhVjkwYjJ0bGJpSjkuMzg5T19MYmVueVJ5ZHJIaGt3Q19FMG43OWtpcWJxMFdVX0tpVUsyU19ra1wiLFxuICAgICAgICB9LFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgdGV4dHM6IFtcbiAgICAgICAgICAgIFwiTGludXggaXMgYSBmYW1pbHkgb2Ygb3Blbi1zb3VyY2UgVW5peC1saWtlIG9wZXJhdGluZyBzeXN0ZW1zIGJhc2VkIG9uIHRoZSBMaW51eCBrZXJuZWwsIGFuIG9wZXJhdGluZyBzeXN0ZW0ga2VybmVsIGZpcnN0IHJlbGVhc2VkIG9uIFNlcHRlbWJlciAxNy5cIixcbiAgICAgICAgICBdLFxuICAgICAgICAgIHRlbXBlcmF0dXJlOiAwLjgsXG4gICAgICAgICAgZXhhbXBsZXM6IFtcbiAgICAgICAgICAgIFtcIldoYXQgaXMgaHVtYW4gbGlmZSBleHBlY3RhbmN5IGluIHRoZSBVbml0ZWQgU3RhdGVzP1wiLCBcIjc4IHllYXJzLlwiXSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIHByb3ZpZGVyczogXCJvcGVuYWlcIixcbiAgICAgICAgICBxdWVzdGlvbjogbWVzc2FnZSxcbiAgICAgICAgICBleGFtcGxlc19jb250ZXh0OiBcIkluIDIwMTcsIFUuUy4gbGlmZSBleHBlY3RhbmN5IHdhcyA3OC42IHllYXJzLlwiLFxuICAgICAgICAgIGZhbGxiYWNrX3Byb3ZpZGVyczogXCJcIixcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgICAudGhlbigocmVzcG9uc2U6IGFueSkgPT4ge1xuICAgICAgICByZXNwb25zZS5kYXRhLm9wZW5haS5hbnN3ZXJzLm1hcCggKG1lc3NhZ2U6IGFueSkgPT4ge1xuICAgICAgICAgIHNldE1lc3NhZ2VzKChwcmV2TWVzc2FnZXM6IGFueSkgPT4gWy4uLnByZXZNZXNzYWdlcywge25hbWU6IFwiZ3B0XCIsIHJlczogbWVzc2FnZX1dKTtcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICB9KTtcbiAgICB9XG4gICAgICBcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaXhlZCBib3R0b20tNCByaWdodC00IGJnLXdoaXRlIHAtNCBzaGFkb3ctbWQgcm91bmRlZC1tZCBhbmltYXRlLWZhZGUtaW5cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTcwMFwiPlN1cHBvcnQgYXJpdGlmaWNpYWwgaW50ZWxsaWdlbmNlIChHUFQgMy41KTwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1ncmF5LTUwMFwiPk9ubGluZTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMiBtYXgtaC05NiBvdmVyZmxvdy15LWF1dG9cIj5cbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIG1lc3NhZ2VzLm1hcCgobWVzc2FnZSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICBtZXNzYWdlLm5hbWUgPT09IFwidXNlclwiID9cbiAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwiYmctZ3JlZW4tMTAwIGJvcmRlciBib3JkZXItZ3JlZW4tMzAwIHAtNCByb3VuZGVkLWxnIG10LTJcIj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyZWVuLTgwMFwiPiB7bWVzc2FnZS5yZXN9IDwvcD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwiYmctYmx1ZS0xMDAgYm9yZGVyIGJvcmRlci1ibHVlLTMwMCBwLTQgcm91bmRlZC1sZyBtdC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWJsdWUtODAwXCI+IHttZXNzYWdlLnJlc30gPC9wPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICkpXG4gICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC00XCI+XG4gICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgaC0xNiBwLTIgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLW1kXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBtZXNzYWdlLi4uXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZTogYW55KSA9PiBzZXRNZXNzYWdlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICA+PC90ZXh0YXJlYT5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3NlbmRNZXNzYWdlfSBjbGFzc05hbWU9XCJjaGF0LWJ1dHRvbiBtdC0yIHRleHQtd2hpdGUgcHktMiBweC00IHJvdW5kZWQtbWRcIj5cbiAgICAgICAgICAgIFNlbmRcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9O1xuICBcbmV4cG9ydCBkZWZhdWx0IENoYXQ7Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwiYXhpb3MiLCJDaGF0IiwibWVzc2FnZSIsInNldE1lc3NhZ2UiLCJtZXNzYWdlcyIsInNldE1lc3NhZ2VzIiwic2VuZE1lc3NhZ2UiLCJwcmV2TWVzc2FnZXMiLCJuYW1lIiwicmVzIiwiZ3B0UmVzcG9uc2UiLCJyZXF1ZXN0IiwibWV0aG9kIiwidXJsIiwiaGVhZGVycyIsImF1dGhvcml6YXRpb24iLCJkYXRhIiwidGV4dHMiLCJ0ZW1wZXJhdHVyZSIsImV4YW1wbGVzIiwicHJvdmlkZXJzIiwicXVlc3Rpb24iLCJleGFtcGxlc19jb250ZXh0IiwiZmFsbGJhY2tfcHJvdmlkZXJzIiwidGhlbiIsInJlc3BvbnNlIiwib3BlbmFpIiwiYW5zd2VycyIsIm1hcCIsImNhdGNoIiwiZXJyb3IiLCJjb25zb2xlIiwiZGl2IiwiY2xhc3NOYW1lIiwicCIsImluZGV4IiwidGV4dGFyZWEiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/Chat.tsx\n"));

/***/ })

});