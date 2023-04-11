/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/ceremony.js":
/*!*************************!*\
  !*** ./src/ceremony.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Ceremony {\n    constructor(ctx, graduates, currentStudent = 0) {\n        this.ctx = ctx;\n        this.graduates = graduates;\n        this.currentStudent = currentStudent;\n        this.potatSpriteSheet = new Image();\n        this.stage = new Image();\n        this.audienceChairs = new Image();\n        this.diploma = new Image();\n        this.aalogo = new Image();\n\n        this.potatSpriteSheet.src = \"./dist/assets/potat-sprite-sheet.png\";\n        this.stage.src = './dist/assets/pixel_art_stage.png';\n        this.audienceChairs.src = \"./dist/assets/theatre_chairs.png\";\n        this.diploma.src = \"./dist/assets/diploma.png\";\n        this.aalogo.src = \"./dist/assets/logo.png\";\n    }\n\n    constructStage() {\n        let waitingSprite = [750, 0];\n        let spriteSize = [375, 500];\n\n        this.interval = setInterval(() => {\n            this.ctx.drawImage(this.stage, 20, 50, 850, 300);\n            this.ctx.drawImage(this.audienceChairs, 20, 349, 850, 70);\n            this.ctx.drawImage(this.audienceChairs, 20, 349, 850, 130);\n            this.ctx.drawImage(this.potatSpriteSheet,\n                waitingSprite[0], waitingSprite[1],\n                spriteSize[0], spriteSize[1],\n                80, 245,\n                // spriteSize[0], spriteSize[1])\n                80, 80);\n                // clearInterval(this.interval)\n        },100);\n    }\n\n    nextStudentMoves(button) {\n        button.disabled = true;\n        this.graduates[this.currentStudent].moveAcrossScreen(this, button);\n        this.currentStudent += 1;\n    }\n\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Ceremony);\n\n//# sourceURL=webpack:///./src/ceremony.js?");

/***/ }),

/***/ "./src/graduate.js":
/*!*************************!*\
  !*** ./src/graduate.js ***!
  \*************************/
/*! exports provided: Graduate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Graduate\", function() { return Graduate; });\nclass Graduate {\n    constructor(ctx, name, img_url) {\n        this.ctx = ctx\n        this.name = name\n        this.img_url = new Image()\n        this.img_url.src = img_url\n    }\n\n    drawGraduate(ceremony, i, startingPosition, jumpHeight){\n        let spriteSize = [375, 500]\n        let runningSprites = [[0, 0], [375, 0], [0, 0]];\n        let dashSprites = [[0, 0], [375, 0], [0, 0]];\n        let jumpSprite = [1125, 0];\n        let grabSprite = [0, 500];\n\n        this.ctx.clearRect(0, 0, 1000, 1000)\n\n        this.ctx.drawImage(ceremony.stage, 20, 50, 850, 300);\n        this.ctx.drawImage(ceremony.audienceChairs, 20, 349, 850, 70)\n        this.ctx.drawImage(ceremony.audienceChairs, 20, 349, 850, 130)\n\n        this.scaleGraduateImg();\n\n        if (startingPosition[0] >= 390 && startingPosition[0] <= 490) { // grabbing diploma\n            if (startingPosition[0] <= 420) {\n                jumpHeight[0] = jumpHeight[0] + 5;\n            } else {\n                jumpHeight[0] = jumpHeight[0] - 5;\n            }\n\n            this.ctx.drawImage(ceremony.potatSpriteSheet,\n                grabSprite[0], grabSprite[1],\n                spriteSize[0], spriteSize[1],\n                startingPosition[0], startingPosition[1] - jumpHeight,\n                80, 80)\n        } else if (startingPosition[0] >= 350 && startingPosition[0] <= 490) {\n            if (startingPosition[0] <= 420) {\n                jumpHeight[0] = jumpHeight[0] + 11;\n            } else {\n                jumpHeight[0] = jumpHeight[0] - 11;\n            }\n\n            this.ctx.drawImage(ceremony.potatSpriteSheet,\n                // runningSprites[i % runningSprites.length][0], runningSprites[i % runningSprites.length][1],\n                jumpSprite[0], jumpSprite[1],\n                spriteSize[0], spriteSize[1],\n                startingPosition[0], startingPosition[1] - jumpHeight,\n                80, 80)\n        } else if (startingPosition[0] > 490) { // after landing from diploma catch\n            this.ctx.drawImage(ceremony.potatSpriteSheet,\n                dashSprites[i % dashSprites.length][0], dashSprites[i % runningSprites.length][1],\n                spriteSize[0], spriteSize[1],\n                startingPosition[0], startingPosition[1],\n                80, 80)\n        } else {\n            this.ctx.drawImage(ceremony.potatSpriteSheet,\n                runningSprites[i % runningSprites.length][0], runningSprites[i % runningSprites.length][1],\n                spriteSize[0], spriteSize[1],\n                startingPosition[0], startingPosition[1],\n                80, 80)\n        }\n\n        if (startingPosition[0] < 440) {\n            this.ctx.drawImage(ceremony.diploma, 440, 235, 20, 20); //draw diploma\n        } else if (startingPosition[0] === 440) {\n            ceremony.sound.play();\n        } else {\n            this.ctx.drawImage(ceremony.aalogo, 365, 55, 170, 150);\n        }\n    }\n\n    moveAcrossScreen(ceremony,button) {\n        clearInterval(ceremony.interval);\n        let startingPosition = [80, 245]\n        let jumpSprite = [300, 100] //might get to use this later\n        let studentName = document.querySelector(\"#student\")\n        studentName.innerHTML = this.name\n        let i = 0;\n        let jumpHeight = [0];\n\n        let interval = setInterval(() => {\n            startingPosition[0] += 20\n            i++\n\n            this.drawGraduate(ceremony,i, startingPosition, jumpHeight)\n\n            if (startingPosition[0] >= 740) {\n                clearInterval(interval)\n                this.ctx.clearRect(0, 0, 1000, 1000)\n                ceremony.constructStage()\n                button.disabled = false\n                studentName.innerHTML  = \"\"\n            }\n        }, 100)\n    }\n\n    scaleGraduateImg() {\n        let scale = Math.max(150 / this.img_url.width, 170 / this.img_url.height);\n        let x = 450 - ((this.img_url.width / 2) * scale);\n        let y = 140 - ((this.img_url.height / 2) * scale);\n        this.ctx.drawImage(this.img_url, x, y, this.img_url.width * scale, this.img_url.height * scale);\n    }\n\n    jumpAndGrabDiploma(ceremony, i, startingPosition) {\n\n    }\n}\n\n\n\n//# sourceURL=webpack:///./src/graduate.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _graduate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./graduate */ \"./src/graduate.js\");\n/* harmony import */ var _ceremony__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ceremony */ \"./src/ceremony.js\");\n/* harmony import */ var _students_Five_20__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./students/Five-20 */ \"./src/students/Five-20.js\");\n\n //there is no reason that these two imports are different. I was messing around with how you can import files\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    let canvas = document.getElementById(\"canvas\");\n    let nextStudentButton = document.getElementById(\"next-student\");\n    let ctx = canvas.getContext(\"2d\");\n    let ol1 = document.getElementById(\"ol1\");\n    let ol2 = document.getElementById(\"ol2\");\n    let punch = document.getElementById(\"punch\");\n    let submitButton = document.querySelector(\"#current-student-button\");\n\n    let graduates = [] ;\n    _students_Five_20__WEBPACK_IMPORTED_MODULE_2__[\"default\"].forEach((student) => {\n        let graduate = new _graduate__WEBPACK_IMPORTED_MODULE_0__[\"Graduate\"](ctx,student.name,student.imageUrl);\n        graduates.push(graduate);\n    });\n\n    let mid = Math.floor(graduates.length/2);\n    ol2.start = mid + 1;\n\n    for (let i = 0; i < mid; i++) {\n        let listItem = document.createElement(\"li\");\n        listItem.textContent = graduates[i].name;\n        ol1.appendChild(listItem);\n    }\n\n    for (let i = mid; i < graduates.length; i++) {\n        let listItem = document.createElement(\"li\");\n        listItem.textContent = graduates[i].name;\n        ol2.appendChild(listItem);\n    }\n\n    let ceremony = new _ceremony__WEBPACK_IMPORTED_MODULE_1__[\"default\"](ctx, graduates);\n    ceremony.sound = punch; // give sound to ceremony instance\n\n    submitButton.addEventListener(\"click\", () => {\n        let input = document.querySelector(\"input\");\n        ceremony.currentStudent = parseInt(input.value) - 1;\n    });\n\n    ceremony.constructStage();\n\n\n    nextStudentButton.addEventListener(\"click\", (e) => {\n        ceremony.nextStudentMoves(e.target);\n    });\n\n\n});\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/students/Five-20.js":
/*!*********************************!*\
  !*** ./src/students/Five-20.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst students = [\n  { name: \"Alexander (Alex) Travis\", imageUrl: \"https://secure.gravatar.com/avatar/98c1fae036933fa8b3777b95d3bc35aa?secure=true&size=300\"},\n  { name: \"Anthony (Anton) Licas\", imageUrl: \"https://secure.gravatar.com/avatar/98c1fae036933fa8b3777b95d3bc35aa?secure=true&size=300\"},\n  { name: \"Arko Chakrabarty\", imageUrl: \"https://secure.gravatar.com/avatar/98c1fae036933fa8b3777b95d3bc35aa?secure=true&size=300\"},\n  { name: \"Austin Lam-Tran\", imageUrl: \"https://secure.gravatar.com/avatar/98c1fae036933fa8b3777b95d3bc35aa?secure=true&size=300\"},\n  { name: \"Chase Donahoe\", imageUrl: \"https://secure.gravatar.com/avatar/98c1fae036933fa8b3777b95d3bc35aa?secure=true&size=300\"},\n  { name: \"Christian Tam\", imageUrl: \"https://secure.gravatar.com/avatar/98c1fae036933fa8b3777b95d3bc35aa?secure=true&size=300\"},\n  { name: \"Christopher Eatmon\", imageUrl: \"https://secure.gravatar.com/avatar/98c1fae036933fa8b3777b95d3bc35aa?secure=true&size=300\"},\n  { name: \"Ciara Fumar Christensen\", imageUrl: \"https://secure.gravatar.com/avatar/98c1fae036933fa8b3777b95d3bc35aa?secure=true&size=300\"},\n  { name: \"Enkhzaya Munkhochir\", imageUrl: \"https://secure.gravatar.com/avatar/98c1fae036933fa8b3777b95d3bc35aa?secure=true&size=300\"},\n  { name: \"Glen Wojnar\", imageUrl: \"https://secure.gravatar.com/avatar/98c1fae036933fa8b3777b95d3bc35aa?secure=true&size=300\"},\n  { name: \"Henry Woodmansee\", imageUrl: \"https://secure.gravatar.com/avatar/98c1fae036933fa8b3777b95d3bc35aa?secure=true&size=300\"},\n  { name: \"Jared Hem\", imageUrl: \"https://secure.gravatar.com/avatar/98c1fae036933fa8b3777b95d3bc35aa?secure=true&size=300\"},\n  { name: \"Jeffrey (Jeff) Liu\", imageUrl: \"https://secure.gravatar.com/avatar/98c1fae036933fa8b3777b95d3bc35aa?secure=true&size=300\"},\n  { name: \"Jhass Theisen\", imageUrl: \"https://secure.gravatar.com/avatar/98c1fae036933fa8b3777b95d3bc35aa?secure=true&size=300\"},\n  { name: \"Jonathan Lin\", imageUrl: \"https://secure.gravatar.com/avatar/98c1fae036933fa8b3777b95d3bc35aa?secure=true&size=300\"},\n  { name: \"Joseph Dumas\", imageUrl: \"https://secure.gravatar.com/avatar/98c1fae036933fa8b3777b95d3bc35aa?secure=true&size=300\"},\n  { name: \"Katherin Garcia\", imageUrl: \"https://secure.gravatar.com/avatar/98c1fae036933fa8b3777b95d3bc35aa?secure=true&size=300\"},\n  { name: \"Keenly Chung\", imageUrl: \"https://secure.gravatar.com/avatar/98c1fae036933fa8b3777b95d3bc35aa?secure=true&size=300\"},\n  { name: \"Kevin Ong\", imageUrl: \"https://secure.gravatar.com/avatar/98c1fae036933fa8b3777b95d3bc35aa?secure=true&size=300\"},\n  { name: \"Ki Woo Kim\", imageUrl: \"https://secure.gravatar.com/avatar/98c1fae036933fa8b3777b95d3bc35aa?secure=true&size=300\"},\n  { name: \"Lillyann (Lilly) Hidalgo\", imageUrl: \"https://secure.gravatar.com/avatar/98c1fae036933fa8b3777b95d3bc35aa?secure=true&size=300\"},\n  { name: \"Marc Smith\", imageUrl: \"https://secure.gravatar.com/avatar/98c1fae036933fa8b3777b95d3bc35aa?secure=true&size=300\"},\n  { name: \"Mauro Alvarez\", imageUrl: \"https://secure.gravatar.com/avatar/98c1fae036933fa8b3777b95d3bc35aa?secure=true&size=300\"},\n  { name: \"Noraa Stoke\", imageUrl: \"https://secure.gravatar.com/avatar/98c1fae036933fa8b3777b95d3bc35aa?secure=true&size=300\"},\n  { name: \"Oleg Volkov\", imageUrl: \"https://secure.gravatar.com/avatar/98c1fae036933fa8b3777b95d3bc35aa?secure=true&size=300\"},\n  { name: \"Paul Fixler\", imageUrl: \"https://secure.gravatar.com/avatar/98c1fae036933fa8b3777b95d3bc35aa?secure=true&size=300\"},\n  { name: \"Peter Nguyen\", imageUrl: \"https://secure.gravatar.com/avatar/98c1fae036933fa8b3777b95d3bc35aa?secure=true&size=300\"},\n  { name: \"Philip (Dexter) Assaf\", imageUrl: \"https://secure.gravatar.com/avatar/98c1fae036933fa8b3777b95d3bc35aa?secure=true&size=300\"},\n  { name: \"Richard Diaz\", imageUrl: \"https://secure.gravatar.com/avatar/98c1fae036933fa8b3777b95d3bc35aa?secure=true&size=300\"},\n  { name: \"Roysa Peguero Martinez\", imageUrl: \"https://secure.gravatar.com/avatar/98c1fae036933fa8b3777b95d3bc35aa?secure=true&size=300\"},\n  { name: \"Ryan Harden\", imageUrl: \"https://secure.gravatar.com/avatar/98c1fae036933fa8b3777b95d3bc35aa?secure=true&size=300\"},\n  { name: \"Sang Heon (Bryan) Lee\", imageUrl: \"https://secure.gravatar.com/avatar/98c1fae036933fa8b3777b95d3bc35aa?secure=true&size=300\"},\n  { name: \"Sean Kennedy\", imageUrl: \"https://secure.gravatar.com/avatar/98c1fae036933fa8b3777b95d3bc35aa?secure=true&size=300\"},\n  { name: \"Sean Kim\", imageUrl: \"https://secure.gravatar.com/avatar/98c1fae036933fa8b3777b95d3bc35aa?secure=true&size=300\"},\n  { name: \"Sophie Main\", imageUrl: \"https://secure.gravatar.com/avatar/98c1fae036933fa8b3777b95d3bc35aa?secure=true&size=300\"},\n  { name: \"Steven Picazo\", imageUrl: \"https://secure.gravatar.com/avatar/98c1fae036933fa8b3777b95d3bc35aa?secure=true&size=300\"},\n  { name: \"Syed Fahd (Fahd) Ahsan\", imageUrl: \"https://secure.gravatar.com/avatar/98c1fae036933fa8b3777b95d3bc35aa?secure=true&size=300\"},\n  { name: \"Tiana Huynh\", imageUrl: \"https://secure.gravatar.com/avatar/98c1fae036933fa8b3777b95d3bc35aa?secure=true&size=300\"},\n  { name: \"Truong (Ned) Nguyen\", imageUrl: \"https://secure.gravatar.com/avatar/98c1fae036933fa8b3777b95d3bc35aa?secure=true&size=300\"},\n  { name: \"Wasiq Rashid\", imageUrl: \"https://secure.gravatar.com/avatar/98c1fae036933fa8b3777b95d3bc35aa?secure=true&size=300\"},\n  { name: \"Xi (Sarah) Ling\", imageUrl: \"https://secure.gravatar.com/avatar/98c1fae036933fa8b3777b95d3bc35aa?secure=true&size=300\"},\n  { name: \"Xiaoguang Wang\", imageUrl: \"https://secure.gravatar.com/avatar/98c1fae036933fa8b3777b95d3bc35aa?secure=true&size=300\"},\n\n];\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (students);\n\n\n//# sourceURL=webpack:///./src/students/Five-20.js?");

/***/ })

/******/ });