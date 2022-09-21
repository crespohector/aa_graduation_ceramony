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
eval("__webpack_require__.r(__webpack_exports__);\nconst students = [\n  { name: \"Alex Zelinsky\", imageUrl: \"https://avatars.githubusercontent.com/u/95510710?v=4\" },\n  { name: \"Allan Yang\", imageUrl: \"http://www.ayang740.com/assets/img/profile.jpg\" },\n  { name: \"Benjamin (Ben) Durham\", imageUrl: \"https://avatars.githubusercontent.com/u/103156527?v=4\" },\n  { name: \"Brendan Lau\", imageUrl: \"https://avatars.githubusercontent.com/u/101230473?v=4\" },\n  { name: \"Brian Aguilar\", imageUrl: \"https://avatars.githubusercontent.com/u/100168977?v=4\" },\n  { name: \"Calvin Lieu\", imageUrl: \"https://avatars.githubusercontent.com/u/98150408?v=4\" },\n  { name: \"David Jetsupphasuk\", imageUrl: \"https://avatars.githubusercontent.com/u/102331121?v=4\" },\n  { name: \"Erik Nguyen\", imageUrl: \"https://avatars.githubusercontent.com/u/46208016?v=4\" },\n  { name: \"Fangru Zhou\", imageUrl: \"https://avatars.githubusercontent.com/u/101694480?v=4\" },\n  { name: \"Grant Christopherson\", imageUrl: \"https://avatars.githubusercontent.com/u/95774634?v=4\" },\n  { name: \"Hansen Guo\", imageUrl: \"https://avatars.githubusercontent.com/u/77709211?v=4\" },\n  { name: \"Heng Wang\", imageUrl: \"https://avatars.githubusercontent.com/u/8013146?v=4\" },\n  { name: \"Hui (Abby) Feng\", imageUrl: \"https://media-exp1.licdn.com/dms/image/C5603AQGoKGzw1A4b3w/profile-displayphoto-shrink_400_400/0/1663562377067?e=1669248000&v=beta&t=7_ezFAvsHnX8XMfyUk3MsRG3b-AvkL0cXZAS3Jt-xBs\" },\n  { name: \"Irving Arreola Palacios\", imageUrl: \"https://avatars.githubusercontent.com/u/96028000?v=4\" },\n  { name: \"Isabel Arredondo\", imageUrl: \"https://avatars.githubusercontent.com/u/98997692?v=4\" },\n  { name: \"Jair Carbajal\", imageUrl: \"https://avatars.githubusercontent.com/u/28913072?v=4\" },\n  { name: \"Joel Cruz\", imageUrl: \"https://avatars.githubusercontent.com/u/79065322?v=4\" },\n  { name: \"Jonatan Aguilar\", imageUrl: \"https://avatars.githubusercontent.com/u/61948122?v=4\" },\n  { name: \"Kevin Gao\", imageUrl: \"https://avatars.githubusercontent.com/u/100536560?v=4\" },\n  { name: \"Kevin Zhang\", imageUrl: \"https://avatars.githubusercontent.com/u/44452044?v=4\" },\n  { name: \"Krista Strucke\", imageUrl: \"https://krista.red/images/new_linkedin.jpg\" },\n  { name: \"Lynn Luong\", imageUrl: \"https://avatars.githubusercontent.com/u/100899731?v=4\" },\n  { name: \"Lynnette Nguyen\", imageUrl: \"https://avatars.githubusercontent.com/u/98368183?v=4\" },\n  { name: \"Qiaoyi (Joyce) Liu\", imageUrl: \"https://avatars.githubusercontent.com/u/92266749?v=4\" },\n  { name: \"Qing (Alice) Li\", imageUrl: \"https://avatars.githubusercontent.com/u/93701088?v=4\" },\n  { name: \"Rongrong (Renee) Luo\", imageUrl: \"https://avatars.githubusercontent.com/u/103155560?v=4\" },\n  { name: \"Samantha (Sam) Weglinski\", imageUrl: \"https://avatars.githubusercontent.com/u/32751992?v=4\" },\n  { name: \"Sang Joon (Joon) Bae\", imageUrl: \"https://avatars.githubusercontent.com/u/94085979?v=4\" },\n  { name: \"Thomas (Drew) Anton\", imageUrl: \"https://avatars.githubusercontent.com/u/101833447?v=4\" },\n  { name: \"Timothy (Tim) Reinhardt\", imageUrl: \"https://avatars.githubusercontent.com/u/95321368?v=4\" },\n  { name: \"Ting Feng\", imageUrl: \"https://avatars.githubusercontent.com/u/101086307?v=4\" },\n  { name: \"Varsha Harikishan Gade\", imageUrl: \"https://avatars.githubusercontent.com/u/88607196?v=4\" },\n  { name: \"Wanting (Christine) Zhang\", imageUrl: \"https://avatars.githubusercontent.com/u/99835281?v=4\" },\n  { name: \"Waseem Alame\", imageUrl: \"https://avatars.githubusercontent.com/u/73668892?v=4\" },\n  { name: \"Wesley Blackburn\", imageUrl: \"https://avatars.githubusercontent.com/u/98054974?v=4\" },\n  { name: \"Yonatan (Yoni) Lurie\", imageUrl: \"https://avatars.githubusercontent.com/u/92499732?v=4\" },\n  { name: \"Yue Huang\", imageUrl: \"https://avatars.githubusercontent.com/u/93162290?v=4\" },\n  { name: \"Zachary (Zach) Hoschar\", imageUrl: \"https://avatars.githubusercontent.com/u/56608122?v=4\" },\n  { name: \"Zeus Ronzan\", imageUrl: \"https://avatars.githubusercontent.com/u/100141010?v=4\" },\n  { name: \"Zhihong Liu\", imageUrl: \"https://avatars.githubusercontent.com/u/102339574?v=4\" },\n\n];\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (students);\n\n\n//# sourceURL=webpack:///./src/students/Five-20.js?");

/***/ })

/******/ });