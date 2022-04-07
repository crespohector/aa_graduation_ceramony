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
eval("__webpack_require__.r(__webpack_exports__);\nconst students = [\n    {\n        name: 'Andrew Murray',\n        imageUrl: 'https://avatars.githubusercontent.com/u/92741849?v=4',\n    },\n    {\n        name: 'Andrés Soca',\n        imageUrl: 'https://avatars.githubusercontent.com/u/80717932?v=4',\n    },\n    {\n        name: 'Brandon Copeland',\n        imageUrl: 'https://avatars.githubusercontent.com/u/69406415?v=4',\n    },\n    {\n        name: 'Brandon Vicchiollo',\n        imageUrl: 'https://avatars.githubusercontent.com/u/75706553?v=4',\n    },\n    {\n        name: 'Brendon James',\n        imageUrl: 'https://avatars.githubusercontent.com/u/92548825?v=4',\n    },\n    {\n        name: 'Brittany Moliver',\n        imageUrl: 'https://avatars.githubusercontent.com/u/87881860?v=4',\n    },\n    {\n        name: 'Bryan Arnold',\n        imageUrl: 'https://avatars.githubusercontent.com/u/89806866?v=4',\n    },\n    {\n        name: 'Casey Cochran',\n        imageUrl: 'https://avatars.githubusercontent.com/u/90711743?v=4',\n    },\n    // {\n    //     name: 'Corbin Arcus',\n    //     imageUrl: 'src/students/corbinArcus.jpg',\n    // },\n    {\n        name: 'Casey Spears',\n        imageUrl: 'https://avatars.githubusercontent.com/u/92146309?v=4',\n    },\n    {\n        name: 'Cesar Solano',\n        imageUrl: 'https://avatars.githubusercontent.com/u/70457320?v=4',\n    },\n    {\n        name: 'Charlie Woods',\n        imageUrl: 'https://avatars.githubusercontent.com/u/83300311?v=4',\n    },\n    {\n        name: 'Chiew Saetern',\n        imageUrl: 'https://avatars.githubusercontent.com/u/90011085?v=4',\n    },\n    {\n        name: 'Chris Breen',\n        imageUrl: 'https://avatars.githubusercontent.com/u/91027574?v=4',\n    },\n    {\n        name: 'Chris Young',\n        imageUrl: 'https://avatars.githubusercontent.com/u/86635475?v=4',\n    },\n    {\n        name: 'Dane Becker',\n        imageUrl: 'https://avatars.githubusercontent.com/u/38844314?v=4',\n    },\n    {\n        name: 'Daniel Thai',\n        imageUrl: 'https://avatars.githubusercontent.com/u/83685703?v=4',\n    },\n    {\n        name: 'David Alliger',\n        imageUrl: 'https://avatars.githubusercontent.com/u/88861592?v=4',\n    },\n    {\n        name: 'David Lee',\n        imageUrl: 'https://avatars.githubusercontent.com/u/86549729?v=4',\n    },\n    {\n        name: 'David Nash',\n        imageUrl: 'https://avatars.githubusercontent.com/u/61633951?v=4',\n    },\n    {\n        name: 'Eric Huang',\n        imageUrl: 'https://avatars.githubusercontent.com/u/9221453?v=4',\n    },\n    {\n        name: 'George Eng',\n        imageUrl: 'https://avatars.githubusercontent.com/u/88999544?v=4',\n    },\n    {\n        name: 'Hamlet Villa',\n        imageUrl: 'https://avatars.githubusercontent.com/u/17211586?v=4',\n    },\n    {\n        name: 'Jake Richardson',\n        imageUrl: 'https://avatars.githubusercontent.com/u/88405940?v=4',\n    },\n    {\n        name: 'James Chen',\n        imageUrl: 'https://avatars.githubusercontent.com/u/87781597?v=4',\n    },\n    {\n        name: 'James Tuttle',\n        imageUrl: 'https://avatars.githubusercontent.com/u/2349101?v=4',\n    },\n    {\n        name: 'Joan Buck',\n        imageUrl: 'https://avatars.githubusercontent.com/u/90011287?v=4',\n    },\n    {\n        name: 'John Amini',\n        imageUrl: 'https://avatars.githubusercontent.com/u/91162716?v=4',\n    },\n    {\n        name: 'Justin Chau',\n        imageUrl: 'https://avatars.githubusercontent.com/u/87829544?v=4',\n    },\n    {\n        name: 'Justin Sweeney',\n        imageUrl: 'https://avatars.githubusercontent.com/u/86797221?v=4',\n    },\n    {\n        name: 'Karl Felter',\n        imageUrl: 'https://avatars.githubusercontent.com/u/91348857?v=4',\n    },\n    {\n        name: 'Katerina Kreibich',\n        imageUrl: 'https://avatars.githubusercontent.com/u/87352324?v=4',\n    },\n    {\n        name: 'Laura Maser',\n        imageUrl: 'https://avatars.githubusercontent.com/u/92398763?v=4',\n    },\n    {\n        name: 'Leonel Murillo',\n        imageUrl: 'https://avatars.githubusercontent.com/u/72574258?v=4',\n    },\n    {\n        name: 'Lucas Monteiro',\n        imageUrl: 'https://avatars.githubusercontent.com/u/79651942?v=4',\n    },\n    {\n        name: 'Matthew Pierik',\n        imageUrl: 'https://avatars.githubusercontent.com/u/92738445?v=4',\n    },\n    {\n        name: 'Mia Joubert',\n        imageUrl: 'https://avatars.githubusercontent.com/u/91270578?v=4',\n    },\n    {\n        name: 'Mitch Depree',\n        imageUrl: 'https://avatars.githubusercontent.com/u/90070157?v=4',\n    },\n    {\n        name: 'Sai Byri',\n        imageUrl: 'https://avatars.githubusercontent.com/u/85528106?v=4',\n    },\n    {\n        name: 'Srdan Vorkapic',\n        imageUrl: 'https://avatars.githubusercontent.com/u/56381552?v=4',\n    },\n    {\n        name: 'Vern Chao',\n        imageUrl: 'https://avatars.githubusercontent.com/u/91238232?v=4',\n    },\n    {\n        name: 'Vu Co',\n        imageUrl: 'https://avatars.githubusercontent.com/u/87354065?v=4',\n    },\n    {\n        name: 'Whitney Minson',\n        imageUrl: 'https://avatars.githubusercontent.com/u/89945390?v=4',\n    },\n    {\n        name: 'Wilvanson Dutervil',\n        imageUrl: 'https://avatars.githubusercontent.com/u/90806686?v=4',\n    },\n    {\n        name: 'Yanelys Mena',\n        imageUrl: 'https://avatars.githubusercontent.com/u/88916829?v=4',\n    },\n    // {\n    //     name: '',\n    //     imageUrl: '',\n    // },\n]\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (students);\n\n\n//# sourceURL=webpack:///./src/students/Five-20.js?");

/***/ })

/******/ });