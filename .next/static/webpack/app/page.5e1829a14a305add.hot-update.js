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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst Chat = (param)=>{\n    let { setModalSuport, setModalGPT, setTypeUser, setNameConversation, setFirstMessage } = param;\n    _s();\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [typing, setTyping] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const updateUser = ()=>{\n        setNameConversation(\"Human support\");\n        setFirstMessage(\"Please wait a moment and you will be assisted by human support\");\n        setTypeUser(\"user\");\n        setModalGPT(false);\n        setModalSuport(true);\n    };\n    const sendMessage = ()=>{\n        setMessages((prevMessages)=>[\n                ...prevMessages,\n                {\n                    name: \"user\",\n                    res: message\n                }\n            ]);\n        gptResponse();\n        setTyping(true);\n        setMessage(\"\");\n    };\n    const gptResponse = ()=>{\n        axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].request({\n            method: \"POST\",\n            url: \"https://api.edenai.run/v2/text/question_answer\",\n            headers: {\n                authorization: \"Bearer token\"\n            },\n            data: {\n                texts: [\n                    \"Linux is a family of open-source Unix-like operating systems based on the Linux kernel, an operating system kernel first released on September 17.\"\n                ],\n                temperature: 0.8,\n                examples: [\n                    [\n                        \"What is human life expectancy in the United States?\",\n                        \"78 years.\"\n                    ]\n                ],\n                providers: \"openai\",\n                question: message,\n                examples_context: \"In 2017, U.S. life expectancy was 78.6 years.\",\n                fallback_providers: \"\"\n            }\n        }).then((response)=>{\n            response.data.openai.answers.map((message)=>{\n                setMessages((prevMessages)=>[\n                        ...prevMessages,\n                        {\n                            name: \"gpt\",\n                            res: message\n                        }\n                    ]);\n            });\n            setTyping(false);\n        }).catch(()=>{\n            setMessages((prevMessages)=>[\n                    ...prevMessages,\n                    {\n                        name: \"gpt\",\n                        res: \"An internal error has occurred, please re-ask your question or wait a few moments\"\n                    }\n                ]);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"fixed bottom-4 right-4 bg-white p-4 shadow-md rounded-md animate-fade-in\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-sm font-semibold text-gray-700\",\n                            children: \"Support aritificial intelligence (GPT 3.5)\"\n                        }, void 0, false, {\n                            fileName: \"/home/cybermazinho/contact_page_for_mongSO/src/app/components/Chat.tsx\",\n                            lineNumber: 63,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-xs text-gray-500\",\n                            children: [\n                                \" \",\n                                typing ? \"Typing...\" : \"Online\",\n                                \" \"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/cybermazinho/contact_page_for_mongSO/src/app/components/Chat.tsx\",\n                            lineNumber: 64,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/cybermazinho/contact_page_for_mongSO/src/app/components/Chat.tsx\",\n                    lineNumber: 62,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/cybermazinho/contact_page_for_mongSO/src/app/components/Chat.tsx\",\n                lineNumber: 61,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-2 max-h-96 overflow-y-auto\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-blue-100 border border-blue-300 p-4 rounded-lg mt-2 max-w-[500px]\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-sm text-blue-800\",\n                            children: \" Hello, how can I help you today? \"\n                        }, void 0, false, {\n                            fileName: \"/home/cybermazinho/contact_page_for_mongSO/src/app/components/Chat.tsx\",\n                            lineNumber: 69,\n                            columnNumber: 15\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/cybermazinho/contact_page_for_mongSO/src/app/components/Chat.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 11\n                    }, undefined),\n                    messages.map((message, index)=>message.name === \"user\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"bg-green-100 border border-green-300 p-4 rounded-lg mt-2 max-w-[500px]\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-sm text-green-800\",\n                                children: [\n                                    \" \",\n                                    message.res,\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/cybermazinho/contact_page_for_mongSO/src/app/components/Chat.tsx\",\n                                lineNumber: 75,\n                                columnNumber: 21\n                            }, undefined)\n                        }, index, false, {\n                            fileName: \"/home/cybermazinho/contact_page_for_mongSO/src/app/components/Chat.tsx\",\n                            lineNumber: 74,\n                            columnNumber: 19\n                        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"bg-blue-100 border border-blue-300 p-4 rounded-lg mt-2 max-w-[500px]\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-sm text-blue-800\",\n                                children: [\n                                    \" \",\n                                    message.res,\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/cybermazinho/contact_page_for_mongSO/src/app/components/Chat.tsx\",\n                                lineNumber: 79,\n                                columnNumber: 23\n                            }, undefined)\n                        }, index, false, {\n                            fileName: \"/home/cybermazinho/contact_page_for_mongSO/src/app/components/Chat.tsx\",\n                            lineNumber: 78,\n                            columnNumber: 19\n                        }, undefined))\n                ]\n            }, void 0, true, {\n                fileName: \"/home/cybermazinho/contact_page_for_mongSO/src/app/components/Chat.tsx\",\n                lineNumber: 67,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                        className: \"input-clear w-full h-16 p-2 border border-gray-300 rounded-md\",\n                        placeholder: \"Enter your message...\",\n                        onChange: (e)=>setMessage(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"/home/cybermazinho/contact_page_for_mongSO/src/app/components/Chat.tsx\",\n                        lineNumber: 85,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: sendMessage,\n                        className: \"chat-button mt-2 text-white py-2 px-4 rounded-md\",\n                        children: \"Send\"\n                    }, void 0, false, {\n                        fileName: \"/home/cybermazinho/contact_page_for_mongSO/src/app/components/Chat.tsx\",\n                        lineNumber: 90,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"#\",\n                        onClick: updateUser,\n                        className: \"ml-2 text-sm text-gray-500 hover:underline\",\n                        children: \"Talk to support\"\n                    }, void 0, false, {\n                        fileName: \"/home/cybermazinho/contact_page_for_mongSO/src/app/components/Chat.tsx\",\n                        lineNumber: 93,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/cybermazinho/contact_page_for_mongSO/src/app/components/Chat.tsx\",\n                lineNumber: 84,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/cybermazinho/contact_page_for_mongSO/src/app/components/Chat.tsx\",\n        lineNumber: 60,\n        columnNumber: 7\n    }, undefined);\n};\n_s(Chat, \"oPZToC7wNXo50HqP32PTp7mpyJE=\");\n_c = Chat;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Chat);\nvar _c;\n$RefreshReg$(_c, \"Chat\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9DaGF0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRWlDO0FBQ1A7QUFFMUIsTUFBTUUsT0FBTztRQUFDLEVBQUVDLGNBQWMsRUFBRUMsV0FBVyxFQUFFQyxXQUFXLEVBQUVDLG1CQUFtQixFQUFFQyxlQUFlLEVBQU07O0lBRWhHLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHVCwrQ0FBUUEsQ0FBUztJQUMvQyxNQUFNLENBQUNVLFVBQVVDLFlBQVksR0FBR1gsK0NBQVFBLENBQWtDLEVBQUU7SUFDNUUsTUFBTSxDQUFDWSxRQUFRQyxVQUFVLEdBQUdiLCtDQUFRQSxDQUFDO0lBRXJDLE1BQU1jLGFBQWE7UUFDakJSLG9CQUFvQjtRQUNwQkMsZ0JBQWdCO1FBQ2hCRixZQUFZO1FBQ1pELFlBQVk7UUFDWkQsZUFBZTtJQUNqQjtJQUVBLE1BQU1ZLGNBQWM7UUFDbEJKLFlBQVksQ0FBQ0ssZUFBc0I7bUJBQUlBO2dCQUFjO29CQUFDQyxNQUFNO29CQUFRQyxLQUFLVjtnQkFBTzthQUFFO1FBQ2xGVztRQUNBTixVQUFVO1FBQ1ZKLFdBQVc7SUFDYjtJQUVBLE1BQU1VLGNBQWM7UUFDbEJsQiw2Q0FBS0EsQ0FBQ21CLE9BQU8sQ0FBQztZQUNaQyxRQUFRO1lBQ1JDLEtBQUs7WUFDTEMsU0FBUztnQkFDUEMsZUFBZTtZQUNqQjtZQUNBQyxNQUFNO2dCQUNKQyxPQUFPO29CQUNMO2lCQUNEO2dCQUNEQyxhQUFhO2dCQUNiQyxVQUFVO29CQUNSO3dCQUFDO3dCQUF1RDtxQkFBWTtpQkFDckU7Z0JBQ0RDLFdBQVc7Z0JBQ1hDLFVBQVV0QjtnQkFDVnVCLGtCQUFrQjtnQkFDbEJDLG9CQUFvQjtZQUN0QjtRQUNGLEdBQ0NDLElBQUksQ0FBQyxDQUFDQztZQUNMQSxTQUFTVCxJQUFJLENBQUNVLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUUsQ0FBQzdCO2dCQUNqQ0csWUFBWSxDQUFDSyxlQUFzQjsyQkFBSUE7d0JBQWM7NEJBQUNDLE1BQU07NEJBQU9DLEtBQUtWO3dCQUFPO3FCQUFFO1lBQ25GO1lBQ0FLLFVBQVU7UUFDWixHQUNDeUIsS0FBSyxDQUFDO1lBQ0gzQixZQUFZLENBQUNLLGVBQXNCO3VCQUFJQTtvQkFBYzt3QkFBQ0MsTUFBTTt3QkFBT0MsS0FBSztvQkFBbUY7aUJBQUU7UUFDaks7SUFDRjtJQUVBLHFCQUNFLDhEQUFDcUI7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDRDs7c0NBQ0MsOERBQUNFOzRCQUFFRCxXQUFVO3NDQUFzQzs7Ozs7O3NDQUNuRCw4REFBQ0M7NEJBQUVELFdBQVU7O2dDQUF3QjtnQ0FBRzVCLFNBQVMsY0FBYztnQ0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUc1RSw4REFBQzJCO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0Q7d0JBQUlDLFdBQVU7a0NBQ1gsNEVBQUNDOzRCQUFFRCxXQUFVO3NDQUF3Qjs7Ozs7Ozs7Ozs7b0JBR3JDOUIsU0FBUzJCLEdBQUcsQ0FBQyxDQUFDN0IsU0FBU2tDLFFBQ3JCbEMsUUFBUVMsSUFBSSxLQUFLLHVCQUNmLDhEQUFDc0I7NEJBQWdCQyxXQUFVO3NDQUN6Qiw0RUFBQ0M7Z0NBQUVELFdBQVU7O29DQUF5QjtvQ0FBRWhDLFFBQVFVLEdBQUc7b0NBQUM7Ozs7Ozs7MkJBRDVDd0I7Ozs7c0RBSVYsOERBQUNIOzRCQUFnQkMsV0FBVTtzQ0FDdkIsNEVBQUNDO2dDQUFFRCxXQUFVOztvQ0FBd0I7b0NBQUVoQyxRQUFRVSxHQUFHO29DQUFDOzs7Ozs7OzJCQUQ3Q3dCOzs7Ozs7Ozs7OzswQkFNcEIsOERBQUNIO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0c7d0JBQ0NILFdBQVU7d0JBQ1ZJLGFBQVk7d0JBQ1pDLFVBQVUsQ0FBQ0MsSUFBV3JDLFdBQVdxQyxFQUFFQyxNQUFNLENBQUNDLEtBQUs7Ozs7OztrQ0FFakQsOERBQUNDO3dCQUFPQyxTQUFTbkM7d0JBQWF5QixXQUFVO2tDQUFtRDs7Ozs7O2tDQUczRiw4REFBQ1c7d0JBQUVDLE1BQUs7d0JBQUlGLFNBQVNwQzt3QkFBYTBCLFdBQVU7a0NBQTZDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJakc7R0EzRkl0QztLQUFBQTtBQTZGTiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvQ2hhdC50c3g/N2JjMSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcblxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmNvbnN0IENoYXQgPSAoeyBzZXRNb2RhbFN1cG9ydCwgc2V0TW9kYWxHUFQsIHNldFR5cGVVc2VyLCBzZXROYW1lQ29udmVyc2F0aW9uLCBzZXRGaXJzdE1lc3NhZ2V9OiBhbnkpID0+IHtcblxuICAgIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIilcbiAgICBjb25zdCBbbWVzc2FnZXMsIHNldE1lc3NhZ2VzXSA9IHVzZVN0YXRlPHsgbmFtZTogc3RyaW5nOyByZXM6IHN0cmluZyB9W10+KFtdKTtcbiAgICBjb25zdCBbdHlwaW5nLCBzZXRUeXBpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgY29uc3QgdXBkYXRlVXNlciA9ICgpID0+IHtcbiAgICAgIHNldE5hbWVDb252ZXJzYXRpb24oXCJIdW1hbiBzdXBwb3J0XCIpXG4gICAgICBzZXRGaXJzdE1lc3NhZ2UoXCJQbGVhc2Ugd2FpdCBhIG1vbWVudCBhbmQgeW91IHdpbGwgYmUgYXNzaXN0ZWQgYnkgaHVtYW4gc3VwcG9ydFwiKVxuICAgICAgc2V0VHlwZVVzZXIoXCJ1c2VyXCIpXG4gICAgICBzZXRNb2RhbEdQVChmYWxzZSlcbiAgICAgIHNldE1vZGFsU3Vwb3J0KHRydWUpXG4gICAgfVxuXG4gICAgY29uc3Qgc2VuZE1lc3NhZ2UgPSAoKSA9PiB7XG4gICAgICBzZXRNZXNzYWdlcygocHJldk1lc3NhZ2VzOiBhbnkpID0+IFsuLi5wcmV2TWVzc2FnZXMsIHtuYW1lOiBcInVzZXJcIiwgcmVzOiBtZXNzYWdlfV0pO1xuICAgICAgZ3B0UmVzcG9uc2UoKVxuICAgICAgc2V0VHlwaW5nKHRydWUpXG4gICAgICBzZXRNZXNzYWdlKFwiXCIpOyBcbiAgICB9XG4gICAgXG4gICAgY29uc3QgZ3B0UmVzcG9uc2UgPSAoKSA9PiB7XG4gICAgICBheGlvcy5yZXF1ZXN0KHtcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgdXJsOiBcImh0dHBzOi8vYXBpLmVkZW5haS5ydW4vdjIvdGV4dC9xdWVzdGlvbl9hbnN3ZXJcIixcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIGF1dGhvcml6YXRpb246IFwiQmVhcmVyIHRva2VuXCIsXG4gICAgICAgIH0sXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICB0ZXh0czogW1xuICAgICAgICAgICAgXCJMaW51eCBpcyBhIGZhbWlseSBvZiBvcGVuLXNvdXJjZSBVbml4LWxpa2Ugb3BlcmF0aW5nIHN5c3RlbXMgYmFzZWQgb24gdGhlIExpbnV4IGtlcm5lbCwgYW4gb3BlcmF0aW5nIHN5c3RlbSBrZXJuZWwgZmlyc3QgcmVsZWFzZWQgb24gU2VwdGVtYmVyIDE3LlwiLFxuICAgICAgICAgIF0sXG4gICAgICAgICAgdGVtcGVyYXR1cmU6IDAuOCxcbiAgICAgICAgICBleGFtcGxlczogW1xuICAgICAgICAgICAgW1wiV2hhdCBpcyBodW1hbiBsaWZlIGV4cGVjdGFuY3kgaW4gdGhlIFVuaXRlZCBTdGF0ZXM/XCIsIFwiNzggeWVhcnMuXCJdLFxuICAgICAgICAgIF0sXG4gICAgICAgICAgcHJvdmlkZXJzOiBcIm9wZW5haVwiLFxuICAgICAgICAgIHF1ZXN0aW9uOiBtZXNzYWdlLFxuICAgICAgICAgIGV4YW1wbGVzX2NvbnRleHQ6IFwiSW4gMjAxNywgVS5TLiBsaWZlIGV4cGVjdGFuY3kgd2FzIDc4LjYgeWVhcnMuXCIsXG4gICAgICAgICAgZmFsbGJhY2tfcHJvdmlkZXJzOiBcIlwiLFxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICAgIC50aGVuKChyZXNwb25zZTogYW55KSA9PiB7XG4gICAgICAgIHJlc3BvbnNlLmRhdGEub3BlbmFpLmFuc3dlcnMubWFwKCAobWVzc2FnZTogYW55KSA9PiB7XG4gICAgICAgICAgc2V0TWVzc2FnZXMoKHByZXZNZXNzYWdlczogYW55KSA9PiBbLi4ucHJldk1lc3NhZ2VzLCB7bmFtZTogXCJncHRcIiwgcmVzOiBtZXNzYWdlfV0pO1xuICAgICAgICB9KVxuICAgICAgICBzZXRUeXBpbmcoZmFsc2UpXG4gICAgICB9KVxuICAgICAgLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICBzZXRNZXNzYWdlcygocHJldk1lc3NhZ2VzOiBhbnkpID0+IFsuLi5wcmV2TWVzc2FnZXMsIHtuYW1lOiBcImdwdFwiLCByZXM6IFwiQW4gaW50ZXJuYWwgZXJyb3IgaGFzIG9jY3VycmVkLCBwbGVhc2UgcmUtYXNrIHlvdXIgcXVlc3Rpb24gb3Igd2FpdCBhIGZldyBtb21lbnRzXCJ9XSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgICBcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaXhlZCBib3R0b20tNCByaWdodC00IGJnLXdoaXRlIHAtNCBzaGFkb3ctbWQgcm91bmRlZC1tZCBhbmltYXRlLWZhZGUtaW5cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTcwMFwiPlN1cHBvcnQgYXJpdGlmaWNpYWwgaW50ZWxsaWdlbmNlIChHUFQgMy41KTwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1ncmF5LTUwMFwiPiB7IHR5cGluZyA/IFwiVHlwaW5nLi4uXCIgOiBcIk9ubGluZVwifSA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTIgbWF4LWgtOTYgb3ZlcmZsb3cteS1hdXRvXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ibHVlLTEwMCBib3JkZXIgYm9yZGVyLWJsdWUtMzAwIHAtNCByb3VuZGVkLWxnIG10LTIgbWF4LXctWzUwMHB4XVwiPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtYmx1ZS04MDBcIj4gSGVsbG8sIGhvdyBjYW4gSSBoZWxwIHlvdSB0b2RheT8gPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbWVzc2FnZXMubWFwKChtZXNzYWdlLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgIG1lc3NhZ2UubmFtZSA9PT0gXCJ1c2VyXCIgP1xuICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJiZy1ncmVlbi0xMDAgYm9yZGVyIGJvcmRlci1ncmVlbi0zMDAgcC00IHJvdW5kZWQtbGcgbXQtMiBtYXgtdy1bNTAwcHhdXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmVlbi04MDBcIj4ge21lc3NhZ2UucmVzfSA8L3A+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImJnLWJsdWUtMTAwIGJvcmRlciBib3JkZXItYmx1ZS0zMDAgcC00IHJvdW5kZWQtbGcgbXQtMiBtYXgtdy1bNTAwcHhdXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWJsdWUtODAwXCI+IHttZXNzYWdlLnJlc30gPC9wPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICkpXG4gICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC00XCI+XG4gICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dC1jbGVhciB3LWZ1bGwgaC0xNiBwLTIgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLW1kXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBtZXNzYWdlLi4uXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZTogYW55KSA9PiBzZXRNZXNzYWdlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICA+PC90ZXh0YXJlYT5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3NlbmRNZXNzYWdlfSBjbGFzc05hbWU9XCJjaGF0LWJ1dHRvbiBtdC0yIHRleHQtd2hpdGUgcHktMiBweC00IHJvdW5kZWQtbWRcIj5cbiAgICAgICAgICAgIFNlbmRcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8YSBocmVmPVwiI1wiIG9uQ2xpY2s9e3VwZGF0ZVVzZXJ9ICBjbGFzc05hbWU9XCJtbC0yIHRleHQtc20gdGV4dC1ncmF5LTUwMCBob3Zlcjp1bmRlcmxpbmVcIj5UYWxrIHRvIHN1cHBvcnQ8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfTtcbiAgXG5leHBvcnQgZGVmYXVsdCBDaGF0OyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsImF4aW9zIiwiQ2hhdCIsInNldE1vZGFsU3Vwb3J0Iiwic2V0TW9kYWxHUFQiLCJzZXRUeXBlVXNlciIsInNldE5hbWVDb252ZXJzYXRpb24iLCJzZXRGaXJzdE1lc3NhZ2UiLCJtZXNzYWdlIiwic2V0TWVzc2FnZSIsIm1lc3NhZ2VzIiwic2V0TWVzc2FnZXMiLCJ0eXBpbmciLCJzZXRUeXBpbmciLCJ1cGRhdGVVc2VyIiwic2VuZE1lc3NhZ2UiLCJwcmV2TWVzc2FnZXMiLCJuYW1lIiwicmVzIiwiZ3B0UmVzcG9uc2UiLCJyZXF1ZXN0IiwibWV0aG9kIiwidXJsIiwiaGVhZGVycyIsImF1dGhvcml6YXRpb24iLCJkYXRhIiwidGV4dHMiLCJ0ZW1wZXJhdHVyZSIsImV4YW1wbGVzIiwicHJvdmlkZXJzIiwicXVlc3Rpb24iLCJleGFtcGxlc19jb250ZXh0IiwiZmFsbGJhY2tfcHJvdmlkZXJzIiwidGhlbiIsInJlc3BvbnNlIiwib3BlbmFpIiwiYW5zd2VycyIsIm1hcCIsImNhdGNoIiwiZGl2IiwiY2xhc3NOYW1lIiwicCIsImluZGV4IiwidGV4dGFyZWEiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiYnV0dG9uIiwib25DbGljayIsImEiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/Chat.tsx\n"));

/***/ })

});