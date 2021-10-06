/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  box-sizing: border-box;\\n  padding: 0;\\n  margin: 0;\\n  font-family: 'Comfortaa', cursive;\\n}\\n\\n.wrapper {\\n  display: grid;\\n  grid-template-columns: 1fr 1fr 1fr 1fr;\\n  grid-template-rows: 1fr 5fr 0.5fr;\\n  grid-template-areas: \\n    \\\"header header header header\\\"\\n    \\\"sidebar content content content\\\"\\n    \\\"footer footer footer footer\\\";\\n  width: 100vw;\\n  height: 100vh;\\n}\\n\\n.inactive {\\n  pointer-events: none;\\n  filter: blur(2px);\\n}\\n\\n.header {\\n  grid-area: header;\\n  border: 1px solid black;\\n  background-color: #696969;\\n}\\n\\nh1 {\\n  padding: 10px;\\n  font-size: 3rem;\\n  margin: 20px 20px;\\n  text-align: center;\\n  color: #F8F8FF;\\n}\\n\\n.project-sidebar-title {\\n  margin-bottom: 20px;\\n  padding: 10px;\\n}\\n\\n#new-project-btn {\\n  font-weight: 800;\\n  font-size: 1rem;\\n  position: relative;\\n  top: 25px;\\n  left: 20%;\\n  height: 4rem;\\n  width: 9rem;\\n  border-radius: 10px;\\n}\\n\\n#new-project-btn:hover {\\n  cursor: pointer;\\n  background: #FFFFFF;\\n}\\n\\n.add-project-popup {\\n  display: none;\\n  position: relative;\\n  left: 10%;\\n  top: 30px;\\n  height: 100px;\\n  width: 250px;\\n  padding: 20px;\\n}\\n\\n#project-name-input {\\n  box-sizing: content-box;\\n  border-radius: 2px;\\n  padding: 5px;\\n  width: 170px;\\n  height: 30px;\\n  font-size: 1rem;\\n}\\n\\n.project-buttons {\\n  display: flex;\\n  flex-direction: row;\\n  border-radius: 2px;\\n}\\n\\n.add-btn, .cancel-btn {\\n  width: 92px;\\n  height: 35px;\\n  font-size: 1rem;\\n  font-weight: 900;\\n}\\n\\n.active-list {\\n  font-weight: bolder;\\n  background-color: #DCDCDC;\\n}\\n\\n.sidebar {\\n  border: 1px solid black;\\n  grid-area: sidebar;\\n  background-color: #F8F8FF;\\n}\\n\\n.sidebar-projects-div {\\n  height: 80%;\\n  margin-top: 15px;\\n  margin-left: 15px;  \\n}\\n\\n.project-name {\\n  list-style-type: none;\\n  width: 90%;\\n  padding: 10px;\\n}\\n\\n.project-name:hover {\\n  cursor: pointer;\\n  background: #DCDCDC;\\n  border-radius: 5px;\\n}\\n\\n.content {\\n  grid-area: content;\\n  background-color: #F5F5F5;\\n  border: 1px solid black;\\n  overflow: hidden;\\n  overflow-y: scroll;\\n}\\n\\n.todo-list-container {\\n  display: none;\\n  border: 1px solid black;\\n  border-radius: 5px;\\n  position: relative;\\n  top: 20px;\\n  left: 50px;\\n  padding: 10px;\\n  margin-bottom: 60px;\\n  width: 80%;\\n  box-shadow: 5px 5px 5px black;\\n}\\n\\n.task-popup {\\n  position: relative;\\n  bottom: 470px;\\n  left: 500px;\\n  background-color: #D3D3D3;\\n  border: 1px solid black;\\n  box-shadow: 2px 2px 2px black;\\n  width: 300px;\\n  height: 400px;\\n  display: block;\\n  border-radius: 5px;\\n  padding: 30px;\\n}\\n\\n.input-fields {\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n.input-fields input, textarea {\\n  margin: 15px;\\n  padding: 5px;\\n}\\n\\n.input-fields label {\\n  font-weight: 800\\n}\\n\\n.task-popup button {\\n  position: relative;\\n  left: 22px;\\n  width: 40%;\\n  padding: 10px;\\n  margin-top: 5px;\\n  border-radius: 5px;\\n  font-weight: 700;\\n}\\n\\n.hidden {\\n  display: none;\\n}\\n\\n.container-buttons {\\n  margin-top: 10px;\\n}\\n\\n.input-task {\\n  display: block;\\n}\\n\\n.project-title-preview {\\n  margin-bottom: 20px;\\n}\\n\\n.task-div {\\n  padding: 5px;\\n  margin: 5px;\\n  width: 100%;\\n  height: 30px;\\n}\\n\\n.task-div:hover {\\n  cursor: pointer;\\n  border-radius: 5px;\\n  background-color: #DCDCDC;\\n}\\n\\n.task-name{\\n  padding: 2px;\\n  background-color: #F5F5F5;\\n  background: transparent;\\n  border: none;\\n}\\n\\n.task-name:hover {\\n  cursor: pointer;\\n  background-color: #DCDCDC;\\n}\\n\\n.remove-task-link {\\n  text-decoration: none;\\n  color: black;\\n}\\n\\n.util-div {\\n  float: right;\\n  position: relative;\\n  top: -2px;\\n}\\n\\n#task-input {\\n  border: none;\\n  border-bottom: 1px solid blue;\\n  background-color: #F5F5F5;\\n}\\n\\n#task-input:focus {\\n  outline: none;\\n}\\n\\n.task-list-name {\\n  display: inline;\\n  list-style-type: none;\\n  border: none;\\n  background-color: #F5F5F5;\\n  font-size: 1rem;\\n}\\n\\n.delete-project-btn {\\n  float: right;\\n  height: 40px;\\n  width: 150px;\\n  border-bottom: 3px solid black;\\n  border-radius: 5px;\\n  font-size: 1rem;\\n  padding: 2px;\\n  margin: 10px;\\n}\\n\\n.add-task-btn {\\n  padding: 2px;\\n  height: 30px;\\n  border-radius: 5px;\\n  width: 100px;\\n}\\n\\n.delete-project-btn:hover, \\n.add-task-btn:hover, \\n.save-task-btn:hover, \\n.cancel-task-btn:hover {\\n  cursor: pointer;\\n  background: #FFFFFF;\\n}\\n\\n.remove-task-btn:hover,\\n.edit-task-btn:hover {\\n  cursor: pointer;\\n}\\n\\n.fa-github {\\n  text-transform: none;\\n  font-size: 25px;\\n  color: #F8F8FF;\\n}\\n\\n.copyright-div {\\n  margin: 5px 10px;\\n  text-align: center;\\n}\\n\\n.footer-span {\\n  color: #F8F8FF;\\n}\\n\\n.footer {\\n  grid-area: footer;\\n  border: 1px solid black;\\n  background-color: #696969;\\n}\\n\\n.active {\\n  display: block;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://Todo_List/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://Todo_List/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://Todo_List/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://Todo_List/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://Todo_List/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var style = document.createElement(\"style\");\n  options.setAttributes(style, options.attributes);\n  options.insert(style);\n  return style;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://Todo_List/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(style) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    style.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://Todo_List/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute(\"media\", media);\n  } else {\n    style.removeAttribute(\"media\");\n  }\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, style);\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var style = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(style, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(style);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://Todo_List/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, style) {\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://Todo_List/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n\n\n// DOM elements\nconst newProjectBtn = document.querySelector('#new-project-btn');\nconst popUp = document.querySelector('.add-project-popup');\nconst addProjectBtn = document.querySelector('.add-btn');\nconst cancelBtn = document.querySelector('.cancel-btn');\nconst containerList = document.querySelector('[data-lists]');\nconst newInput = document.querySelector('[data-new-input-list]');\nconst wrapperDiv = document.querySelector('.wrapper');\nconst previewContainer = document.querySelector('.todo-list-container');\nconst projectTitlePreview = document.querySelector('.project-title-preview');\nconst taskTemplate = document.querySelector('#task-template');\nconst tasksContainer = document.querySelector('[data-tasks-container]');\nconst taskPopup = document.querySelector('.task-popup');\nconst taskNameInput = document.querySelector('#task-name-input');\n// const taskDateInput = document.querySelector('#task-date-input');\nconst taskDescriptionInput = document.querySelector('#task-description');\nconst addTaskBtnPopUp = document.querySelector('.add-task-btn');\nconst saveTaskBtn = document.querySelector('.save-task-btn');\nconst cancelTaskBtn = document.querySelector('.cancel-task-btn');\nconst deleteProjectBtn = document.querySelector('.delete-project-btn');\n\n// Create Local Storage keys\nconst LOCAL_STORAGE_LIST_KEY = 'project.lists';\nconst LOCAL_STORAGE_ID_KEY = 'project.selected.id';\n\nlet projectList;\nlet selectedProjectID = localStorage.getItem(LOCAL_STORAGE_ID_KEY);\nlet selectedTaskID;\n\ndocument.addEventListener('DOMContentLoaded', function getProjectList() {\n  projectList = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)); \n  if(projectList !== null) {\n    renderList();\n  } else {\n    projectList = [\n      {\n       id: Date.now().toString(),\n       name: 'Example', \n       tasks: [\n         {id: Date.now().toString(), name: 'Homework'},\n         {id: Date.now().toString(), name:'Car Wash'},\n         {id: Date.now().toString(), name: 'House Cleaning'}\n       ]\n      }\n    ];\n    renderList();\n  }\n})\n\n// window.onload = function getProjectList() {\n//   projectList = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)); \n//   if(projectList !== null) {\n//     renderList();\n//   } else {\n//     projectList = [\n//       {\n//        id: Date.now().toString(),\n//        name: 'Example', \n//        tasks: [\n//          {id: Date.now().toString(), name: 'Homework'},\n//          {id: Date.now().toString(), name:'Car Wash'},\n//          {id: Date.now().toString(), name: 'House Cleaning'}\n//        ]\n//       }\n//     ];\n//     renderList();\n//   }\n// }\n\n// EVENT LISTENERS\nnewProjectBtn.addEventListener('click', function clickNewProjectBtn() {\n  showPopUp();\n  newProjectBtn.style.display = 'none';\n})\n\ncancelBtn.addEventListener('click', function cancelProjectBtn() {\n  hidePopUp();\n  newInput.value = '';\n  newProjectBtn.style.display = 'block';\n})\n\naddProjectBtn.addEventListener('click', function addNewProject() {\n  let projectName = newInput.value;\n  if(projectName == null || projectName === '') return;\n\n  // Create the project object and push it to the project list array\n  const project = CreateProject(projectName);\n  newInput.value = null;\n  projectList.push(project);\n  newProjectBtn.style.display = 'block';\n  hidePopUp();\n  clearList(containerList);\n  save();\n  renderList();\n})\n\naddTaskBtnPopUp.addEventListener('click', function addNewTaskPopUp() {\n  taskPopup.classList.remove('hidden');\n  wrapperDiv.classList.add('inactive');\n})\n\nsaveTaskBtn.addEventListener('click', function getTaskInfo() {\n  let taskName = taskNameInput.value;\n  let taskDescription = taskDescriptionInput.value;\n\n  if(taskName === null || taskName === '') return;\n  \n  const task = CreateTask(taskName, taskDescription);\n  taskNameInput.value = null;\n  taskPopup.classList.add('hidden');\n  wrapperDiv.classList.remove('inactive');\n  let selectedProject = projectList.find(item => item.id === selectedProjectID);\n  selectedProject.tasks.push(task);\n  saveAndRender();\n})\n\ncancelTaskBtn.addEventListener('click', function cancelTaskButton() {\n  taskPopup.classList.add('hidden');\n  wrapperDiv.classList.remove('inactive');\n})\n\ncontainerList.addEventListener('click', function selectProjectFromList(e) {\n  \n  if (e.target.tagName.toLowerCase() === 'li') {\n    selectedProjectID = e.target.dataset.listID;\n    saveAndRender();\n  } \n})\n\ndeleteProjectBtn.addEventListener('click', function deleteProjectFromList() {\n\n  Swal.fire({\n    title: 'Are you sure?',\n    icon: 'warning',\n    showCancelButton: true,\n    confirmButtonColor: '#3085d6',\n    cancelButtonColor: '#d33',\n    confirmButtonText: 'Yes, delete it!'\n  }).then((result) => {\n    if (result.isConfirmed) {\n      Swal.fire(\n        'Deleted!',\n        'Your project has been deleted.',\n        'success'\n      )\n      projectList = projectList.filter(project => project.id !== selectedProjectID);\n      selectedProjectID = null;\n      saveAndRender(); \n    }\n  })\n})\n\ntasksContainer.addEventListener('click', function deleteSingleTask(e) {\n  \n  // Get Task ID\n  if(e.target.className === 'fa fa-trash') {\n\n    selectedTaskID = e.target.parentElement.parentElement.previousElementSibling.htmlFor;\n    projectList.forEach(project => {\n      if(project.id === selectedProjectID) {\n\n        Swal.fire({\n          title: 'Are you sure?',\n          icon: 'warning',\n          showCancelButton: true,\n          confirmButtonColor: '#3085d6',\n          cancelButtonColor: '#d33',\n          confirmButtonText: 'Yes, delete it!'\n        }).then((result) => {\n\n          if (result.isConfirmed) {\n            project.tasks = project.tasks.filter(task => task.id !== selectedTaskID);\n            saveAndRender(); \n          }\n        })\n      }\n    })\n  }\n})\n\n// FUNCTIONS\nfunction CreateProject(name) {\n  return {\n    id: Date.now().toString(),\n    name: name,\n    tasks: []\n  }\n}\n\nfunction CreateTask(name, description) {\n  return {\n    id: Date.now().toString(),\n    name: name,\n    description: description,\n  }\n}\n\nfunction render() {\n  clearList(containerList);\n  renderList();\n  showPreview();\n}\n\nfunction clearList(element) {\n  while (element.firstChild) {\n    element.removeChild(element.firstChild);\n  }\n}\n\nfunction renderList() {\n  projectList.forEach(list => {\n    const listElement = document.createElement('li');\n    listElement.classList.add('project-name');\n    // Create a unique data-attribute ID for every li \n    listElement.dataset.listID = list.id;\n    listElement.innerText = list.name;\n\n    if(list.id == selectedProjectID) {\n      listElement.classList.add('active-list');\n    }\n    containerList.appendChild(listElement);\n  })\n}\n\nfunction renderTasks(selectedProject) {\n  selectedProject.tasks.forEach(task => {\n    const taskElement = document.importNode(taskTemplate.content, true);\n    const input = taskElement.querySelector('input');\n    input.id = task.id;\n    input.value = task.name;\n    const label = taskElement.querySelector('label');\n    label.htmlFor = task.id;\n    label.classList.add('single-task-label');\n    label.append(task.name);\n    tasksContainer.appendChild(taskElement);\n  })\n}\n\nfunction showPreview() {\n  // If the ID of the selected project exists (data-attribute on li), find that element in the array\n  let selectedProject = projectList.find(element => element.id === selectedProjectID);\n\n  // Hide or show the preview container on the main content\n  if (selectedProjectID === null) {\n    previewContainer.style.display = 'none';\n  } else {\n    previewContainer.style.display = 'block';\n    projectTitlePreview.innerText = selectedProject.name;\n    clearList(tasksContainer);\n    renderTasks(selectedProject);\n  }\n}\n\n// LOCAL STORAGE\nfunction save() {\n  localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(projectList));\n  localStorage.setItem(LOCAL_STORAGE_ID_KEY, selectedProjectID);\n}\n\nfunction saveAndRender() {\n  save();\n  render();\n}\n\nfunction showPopUp() {\n  popUp.classList.add('active');\n}\n\nfunction hidePopUp() {\n  popUp.classList.remove('active');\n}\n\n\n//# sourceURL=webpack://Todo_List/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;