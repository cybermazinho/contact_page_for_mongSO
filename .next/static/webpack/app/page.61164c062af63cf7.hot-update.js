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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst Chat = ()=>{\n    _s();\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [typing, setTyping] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const sendMessage = ()=>{\n        setMessages((prevMessages)=>[\n                ...prevMessages,\n                {\n                    name: \"user\",\n                    res: message\n                }\n            ]);\n        gptResponse();\n        setTyping(true);\n        setMessage(\"\");\n    };\n    const gptResponse = ()=>{\n        axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].request({\n            method: \"POST\",\n            url: \"https://api.edenai.run/v2/text/question_answer\",\n            headers: {\n                authorization: \"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiM2NhNDI5MWItNzU4My00MDhkLTk1ZTItYmNlY2I5NmNjYTU3IiwidHlwZSI6ImFwaV90b2tlbiJ9.389O_LbenyRydrHhkwC_E0n79kiqbq0WU_KiUK2S_kk\"\n            },\n            data: {\n                texts: [\n                    \"Linux is a family of open-source Unix-like operating systems based on the Linux kernel, an operating system kernel first released on September 17.\"\n                ],\n                temperature: 0.8,\n                examples: [\n                    [\n                        \"What is human life expectancy in the United States?\",\n                        \"78 years.\"\n                    ]\n                ],\n                providers: \"openai\",\n                question: message,\n                examples_context: \"In 2017, U.S. life expectancy was 78.6 years.\",\n                fallback_providers: \"\"\n            }\n        }).then((response)=>{\n            response.data.openai.answers.map((message)=>{\n                setMessages((prevMessages)=>[\n                        ...prevMessages,\n                        {\n                            name: \"gpt\",\n                            res: message\n                        }\n                    ]);\n            });\n            setTyping(false);\n        }).catch(()=>{\n            setMessages((prevMessages)=>[\n                    ...prevMessages,\n                    {\n                        name: \"gpt\",\n                        res: \"An internal error has occurred, please re-ask your question or wait a few moments\"\n                    }\n                ]);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"fixed bottom-4 right-4 bg-white p-4 shadow-md rounded-md animate-fade-in\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-sm font-semibold text-gray-700\",\n                            children: \"Support aritificial intelligence (GPT 3.5)\"\n                        }, void 0, false, {\n                            fileName: \"/home/cybermazinho/contact_page_for_mongSO/src/app/components/Chat.tsx\",\n                            lineNumber: 55,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-xs text-gray-500\",\n                            children: [\n                                \" \",\n                                typing ? \"Typing...\" : \"Online\",\n                                \" \"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/cybermazinho/contact_page_for_mongSO/src/app/components/Chat.tsx\",\n                            lineNumber: 56,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/cybermazinho/contact_page_for_mongSO/src/app/components/Chat.tsx\",\n                    lineNumber: 54,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/cybermazinho/contact_page_for_mongSO/src/app/components/Chat.tsx\",\n                lineNumber: 53,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-2 max-h-96 overflow-y-auto\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-blue-100 border border-blue-300 p-4 rounded-lg mt-2 max-w-[300px]\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-sm text-blue-800\",\n                            children: \"  \"\n                        }, void 0, false, {\n                            fileName: \"/home/cybermazinho/contact_page_for_mongSO/src/app/components/Chat.tsx\",\n                            lineNumber: 61,\n                            columnNumber: 15\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/cybermazinho/contact_page_for_mongSO/src/app/components/Chat.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 11\n                    }, undefined),\n                    messages.map((message, index)=>message.name === \"user\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"bg-green-100 border border-green-300 p-4 rounded-lg mt-2 max-w-[300px]\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-sm text-green-800\",\n                                children: [\n                                    \" \",\n                                    message.res,\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/cybermazinho/contact_page_for_mongSO/src/app/components/Chat.tsx\",\n                                lineNumber: 67,\n                                columnNumber: 21\n                            }, undefined)\n                        }, index, false, {\n                            fileName: \"/home/cybermazinho/contact_page_for_mongSO/src/app/components/Chat.tsx\",\n                            lineNumber: 66,\n                            columnNumber: 19\n                        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"bg-blue-100 border border-blue-300 p-4 rounded-lg mt-2 max-w-[300px]\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-sm text-blue-800\",\n                                children: [\n                                    \" \",\n                                    message.res,\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/cybermazinho/contact_page_for_mongSO/src/app/components/Chat.tsx\",\n                                lineNumber: 71,\n                                columnNumber: 23\n                            }, undefined)\n                        }, index, false, {\n                            fileName: \"/home/cybermazinho/contact_page_for_mongSO/src/app/components/Chat.tsx\",\n                            lineNumber: 70,\n                            columnNumber: 19\n                        }, undefined))\n                ]\n            }, void 0, true, {\n                fileName: \"/home/cybermazinho/contact_page_for_mongSO/src/app/components/Chat.tsx\",\n                lineNumber: 59,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                        className: \"w-full h-16 p-2 border border-gray-300 rounded-md\",\n                        placeholder: \"Enter your message...\",\n                        onChange: (e)=>setMessage(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"/home/cybermazinho/contact_page_for_mongSO/src/app/components/Chat.tsx\",\n                        lineNumber: 77,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: sendMessage,\n                        className: \"chat-button mt-2 text-white py-2 px-4 rounded-md\",\n                        children: \"Send\"\n                    }, void 0, false, {\n                        fileName: \"/home/cybermazinho/contact_page_for_mongSO/src/app/components/Chat.tsx\",\n                        lineNumber: 82,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/cybermazinho/contact_page_for_mongSO/src/app/components/Chat.tsx\",\n                lineNumber: 76,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/cybermazinho/contact_page_for_mongSO/src/app/components/Chat.tsx\",\n        lineNumber: 52,\n        columnNumber: 7\n    }, undefined);\n};\n_s(Chat, \"oPZToC7wNXo50HqP32PTp7mpyJE=\");\n_c = Chat;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Chat);\nvar _c;\n$RefreshReg$(_c, \"Chat\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9DaGF0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRWlDO0FBQ1A7QUFFMUIsTUFBTUUsT0FBTzs7SUFFWCxNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR0osK0NBQVFBLENBQVM7SUFDL0MsTUFBTSxDQUFDSyxVQUFVQyxZQUFZLEdBQUdOLCtDQUFRQSxDQUFrQyxFQUFFO0lBQzVFLE1BQU0sQ0FBQ08sUUFBUUMsVUFBVSxHQUFHUiwrQ0FBUUEsQ0FBQztJQUVuQyxNQUFNUyxjQUFjO1FBQ2xCSCxZQUFZLENBQUNJLGVBQXNCO21CQUFJQTtnQkFBYztvQkFBQ0MsTUFBTTtvQkFBUUMsS0FBS1Q7Z0JBQU87YUFBRTtRQUNsRlU7UUFDQUwsVUFBVTtRQUNWSixXQUFXO0lBQ2I7SUFFQSxNQUFNUyxjQUFjO1FBQ2xCWiw2Q0FBS0EsQ0FBQ2EsT0FBTyxDQUFDO1lBQ1pDLFFBQVE7WUFDUkMsS0FBSztZQUNMQyxTQUFTO2dCQUNQQyxlQUFlO1lBQ2pCO1lBQ0FDLE1BQU07Z0JBQ0pDLE9BQU87b0JBQ0w7aUJBQ0Q7Z0JBQ0RDLGFBQWE7Z0JBQ2JDLFVBQVU7b0JBQ1I7d0JBQUM7d0JBQXVEO3FCQUFZO2lCQUNyRTtnQkFDREMsV0FBVztnQkFDWEMsVUFBVXJCO2dCQUNWc0Isa0JBQWtCO2dCQUNsQkMsb0JBQW9CO1lBQ3RCO1FBQ0YsR0FDQ0MsSUFBSSxDQUFDLENBQUNDO1lBQ0xBLFNBQVNULElBQUksQ0FBQ1UsTUFBTSxDQUFDQyxPQUFPLENBQUNDLEdBQUcsQ0FBRSxDQUFDNUI7Z0JBQ2pDRyxZQUFZLENBQUNJLGVBQXNCOzJCQUFJQTt3QkFBYzs0QkFBQ0MsTUFBTTs0QkFBT0MsS0FBS1Q7d0JBQU87cUJBQUU7WUFDbkY7WUFDQUssVUFBVTtRQUNaLEdBQ0N3QixLQUFLLENBQUM7WUFDSDFCLFlBQVksQ0FBQ0ksZUFBc0I7dUJBQUlBO29CQUFjO3dCQUFDQyxNQUFNO3dCQUFPQyxLQUFLO29CQUFtRjtpQkFBRTtRQUNqSztJQUNGO0lBRUEscUJBQ0UsOERBQUNxQjtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNEOztzQ0FDQyw4REFBQ0U7NEJBQUVELFdBQVU7c0NBQXNDOzs7Ozs7c0NBQ25ELDhEQUFDQzs0QkFBRUQsV0FBVTs7Z0NBQXdCO2dDQUFHM0IsU0FBUyxjQUFjO2dDQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBRzVFLDhEQUFDMEI7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDRDt3QkFBSUMsV0FBVTtrQ0FDWCw0RUFBQ0M7NEJBQUVELFdBQVU7c0NBQXdCOzs7Ozs7Ozs7OztvQkFHckM3QixTQUFTMEIsR0FBRyxDQUFDLENBQUM1QixTQUFTaUMsUUFDckJqQyxRQUFRUSxJQUFJLEtBQUssdUJBQ2YsOERBQUNzQjs0QkFBZ0JDLFdBQVU7c0NBQ3pCLDRFQUFDQztnQ0FBRUQsV0FBVTs7b0NBQXlCO29DQUFFL0IsUUFBUVMsR0FBRztvQ0FBQzs7Ozs7OzsyQkFENUN3Qjs7OztzREFJViw4REFBQ0g7NEJBQWdCQyxXQUFVO3NDQUN2Qiw0RUFBQ0M7Z0NBQUVELFdBQVU7O29DQUF3QjtvQ0FBRS9CLFFBQVFTLEdBQUc7b0NBQUM7Ozs7Ozs7MkJBRDdDd0I7Ozs7Ozs7Ozs7OzBCQU1wQiw4REFBQ0g7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDRzt3QkFDQ0gsV0FBVTt3QkFDVkksYUFBWTt3QkFDWkMsVUFBVSxDQUFDQyxJQUFXcEMsV0FBV29DLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSzs7Ozs7O2tDQUVqRCw4REFBQ0M7d0JBQU9DLFNBQVNuQzt3QkFBYXlCLFdBQVU7a0NBQW1EOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNbkc7R0FsRkloQztLQUFBQTtBQW9GTiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvQ2hhdC50c3g/N2JjMSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcblxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmNvbnN0IENoYXQgPSAoKSA9PiB7XG5cbiAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKVxuICBjb25zdCBbbWVzc2FnZXMsIHNldE1lc3NhZ2VzXSA9IHVzZVN0YXRlPHsgbmFtZTogc3RyaW5nOyByZXM6IHN0cmluZyB9W10+KFtdKTtcbiAgY29uc3QgW3R5cGluZywgc2V0VHlwaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIGNvbnN0IHNlbmRNZXNzYWdlID0gKCkgPT4ge1xuICAgICAgc2V0TWVzc2FnZXMoKHByZXZNZXNzYWdlczogYW55KSA9PiBbLi4ucHJldk1lc3NhZ2VzLCB7bmFtZTogXCJ1c2VyXCIsIHJlczogbWVzc2FnZX1dKTtcbiAgICAgIGdwdFJlc3BvbnNlKClcbiAgICAgIHNldFR5cGluZyh0cnVlKVxuICAgICAgc2V0TWVzc2FnZShcIlwiKTsgXG4gICAgfVxuICAgIFxuICAgIGNvbnN0IGdwdFJlc3BvbnNlID0gKCkgPT4ge1xuICAgICAgYXhpb3MucmVxdWVzdCh7XG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIHVybDogXCJodHRwczovL2FwaS5lZGVuYWkucnVuL3YyL3RleHQvcXVlc3Rpb25fYW5zd2VyXCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBhdXRob3JpemF0aW9uOiBcIkJlYXJlciBleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKMWMyVnlYMmxrSWpvaU0yTmhOREk1TVdJdE56VTRNeTAwTURoa0xUazFaVEl0WW1ObFkySTVObU5qWVRVM0lpd2lkSGx3WlNJNkltRndhVjkwYjJ0bGJpSjkuMzg5T19MYmVueVJ5ZHJIaGt3Q19FMG43OWtpcWJxMFdVX0tpVUsyU19ra1wiLFxuICAgICAgICB9LFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgdGV4dHM6IFtcbiAgICAgICAgICAgIFwiTGludXggaXMgYSBmYW1pbHkgb2Ygb3Blbi1zb3VyY2UgVW5peC1saWtlIG9wZXJhdGluZyBzeXN0ZW1zIGJhc2VkIG9uIHRoZSBMaW51eCBrZXJuZWwsIGFuIG9wZXJhdGluZyBzeXN0ZW0ga2VybmVsIGZpcnN0IHJlbGVhc2VkIG9uIFNlcHRlbWJlciAxNy5cIixcbiAgICAgICAgICBdLFxuICAgICAgICAgIHRlbXBlcmF0dXJlOiAwLjgsXG4gICAgICAgICAgZXhhbXBsZXM6IFtcbiAgICAgICAgICAgIFtcIldoYXQgaXMgaHVtYW4gbGlmZSBleHBlY3RhbmN5IGluIHRoZSBVbml0ZWQgU3RhdGVzP1wiLCBcIjc4IHllYXJzLlwiXSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIHByb3ZpZGVyczogXCJvcGVuYWlcIixcbiAgICAgICAgICBxdWVzdGlvbjogbWVzc2FnZSxcbiAgICAgICAgICBleGFtcGxlc19jb250ZXh0OiBcIkluIDIwMTcsIFUuUy4gbGlmZSBleHBlY3RhbmN5IHdhcyA3OC42IHllYXJzLlwiLFxuICAgICAgICAgIGZhbGxiYWNrX3Byb3ZpZGVyczogXCJcIixcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgICAudGhlbigocmVzcG9uc2U6IGFueSkgPT4ge1xuICAgICAgICByZXNwb25zZS5kYXRhLm9wZW5haS5hbnN3ZXJzLm1hcCggKG1lc3NhZ2U6IGFueSkgPT4ge1xuICAgICAgICAgIHNldE1lc3NhZ2VzKChwcmV2TWVzc2FnZXM6IGFueSkgPT4gWy4uLnByZXZNZXNzYWdlcywge25hbWU6IFwiZ3B0XCIsIHJlczogbWVzc2FnZX1dKTtcbiAgICAgICAgfSlcbiAgICAgICAgc2V0VHlwaW5nKGZhbHNlKVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgc2V0TWVzc2FnZXMoKHByZXZNZXNzYWdlczogYW55KSA9PiBbLi4ucHJldk1lc3NhZ2VzLCB7bmFtZTogXCJncHRcIiwgcmVzOiBcIkFuIGludGVybmFsIGVycm9yIGhhcyBvY2N1cnJlZCwgcGxlYXNlIHJlLWFzayB5b3VyIHF1ZXN0aW9uIG9yIHdhaXQgYSBmZXcgbW9tZW50c1wifV0pO1xuICAgICAgfSk7XG4gICAgfVxuICAgICAgXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQgYm90dG9tLTQgcmlnaHQtNCBiZy13aGl0ZSBwLTQgc2hhZG93LW1kIHJvdW5kZWQtbWQgYW5pbWF0ZS1mYWRlLWluXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LXNlbWlib2xkIHRleHQtZ3JheS03MDBcIj5TdXBwb3J0IGFyaXRpZmljaWFsIGludGVsbGlnZW5jZSAoR1BUIDMuNSk8L3A+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtZ3JheS01MDBcIj4geyB0eXBpbmcgPyBcIlR5cGluZy4uLlwiIDogXCJPbmxpbmVcIn0gPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0yIG1heC1oLTk2IG92ZXJmbG93LXktYXV0b1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctYmx1ZS0xMDAgYm9yZGVyIGJvcmRlci1ibHVlLTMwMCBwLTQgcm91bmRlZC1sZyBtdC0yIG1heC13LVszMDBweF1cIj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWJsdWUtODAwXCI+ICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAge1xuICAgICAgICAgICAgICBtZXNzYWdlcy5tYXAoKG1lc3NhZ2UsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgbWVzc2FnZS5uYW1lID09PSBcInVzZXJcIiA/XG4gICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImJnLWdyZWVuLTEwMCBib3JkZXIgYm9yZGVyLWdyZWVuLTMwMCBwLTQgcm91bmRlZC1sZyBtdC0yIG1heC13LVszMDBweF1cIj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyZWVuLTgwMFwiPiB7bWVzc2FnZS5yZXN9IDwvcD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwiYmctYmx1ZS0xMDAgYm9yZGVyIGJvcmRlci1ibHVlLTMwMCBwLTQgcm91bmRlZC1sZyBtdC0yIG1heC13LVszMDBweF1cIj5cbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtYmx1ZS04MDBcIj4ge21lc3NhZ2UucmVzfSA8L3A+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKSlcbiAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTRcIj5cbiAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLTE2IHAtMiBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbWRcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIG1lc3NhZ2UuLi5cIlxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlOiBhbnkpID0+IHNldE1lc3NhZ2UoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgID48L3RleHRhcmVhPlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17c2VuZE1lc3NhZ2V9IGNsYXNzTmFtZT1cImNoYXQtYnV0dG9uIG10LTIgdGV4dC13aGl0ZSBweS0yIHB4LTQgcm91bmRlZC1tZFwiPlxuICAgICAgICAgICAgU2VuZFxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH07XG4gIFxuZXhwb3J0IGRlZmF1bHQgQ2hhdDsiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJheGlvcyIsIkNoYXQiLCJtZXNzYWdlIiwic2V0TWVzc2FnZSIsIm1lc3NhZ2VzIiwic2V0TWVzc2FnZXMiLCJ0eXBpbmciLCJzZXRUeXBpbmciLCJzZW5kTWVzc2FnZSIsInByZXZNZXNzYWdlcyIsIm5hbWUiLCJyZXMiLCJncHRSZXNwb25zZSIsInJlcXVlc3QiLCJtZXRob2QiLCJ1cmwiLCJoZWFkZXJzIiwiYXV0aG9yaXphdGlvbiIsImRhdGEiLCJ0ZXh0cyIsInRlbXBlcmF0dXJlIiwiZXhhbXBsZXMiLCJwcm92aWRlcnMiLCJxdWVzdGlvbiIsImV4YW1wbGVzX2NvbnRleHQiLCJmYWxsYmFja19wcm92aWRlcnMiLCJ0aGVuIiwicmVzcG9uc2UiLCJvcGVuYWkiLCJhbnN3ZXJzIiwibWFwIiwiY2F0Y2giLCJkaXYiLCJjbGFzc05hbWUiLCJwIiwiaW5kZXgiLCJ0ZXh0YXJlYSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/Chat.tsx\n"));

/***/ })

});