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
eval("__webpack_require__.r(__webpack_exports__);\nconst students = [\n    {\n        name: 'Aaron Short',\n        imageUrl: 'https://avatars.githubusercontent.com/u/30273596?v=4',\n    },\n    {\n        name: 'Aletheia Kim',\n        imageUrl: 'https://avatars.githubusercontent.com/u/89177551?v=4',\n    },\n    {\n        name: 'Andres Aguilar-Garcia',\n        imageUrl: 'https://avatars.githubusercontent.com/u/81390005?v=4',\n    },\n    {\n        name: 'Andrew Tran',\n        imageUrl: 'https://avatars.githubusercontent.com/u/39511577?v=4',\n    },\n    {\n        name: 'Anthony Adams',\n        imageUrl: 'src/students/anthonyAdams.jpg',\n    },\n    {\n        name: 'Asia Le',\n        imageUrl: 'https://avatars.githubusercontent.com/u/89109803?v=4',\n    },\n    {\n        name: 'Cameron Abbott',\n        imageUrl:\n            'https://media-exp1.licdn.com/dms/image/C4E03AQFlQ42WuopiSQ/profile-displayphoto-shrink_200_200/0/1571685959244?e=1652313600&v=beta&t=AorOw6oiNDJF-38StIWXjw8oDARp5B6nsJ2xqrmVgSs',\n    },\n    {\n        name: 'Cameron Whiteside',\n        imageUrl: 'https://avatars.githubusercontent.com/u/35665916?v=4',\n    },\n    // {\n    //     name: 'Corbin Arcus',\n    //     imageUrl: 'src/students/corbinArcus.jpg',\n    // },\n    {\n        name: 'Christy Chen',\n        imageUrl: 'https://avatars.githubusercontent.com/u/55429132?v=4',\n    },\n    {\n        name: 'Cody Lavene',\n        imageUrl: 'https://avatars.githubusercontent.com/u/85128425?v=4',\n    },\n    {\n        name: 'Daniel Lavergne',\n        imageUrl: 'https://avatars.githubusercontent.com/u/58845762?v=4',\n    },\n    {\n        name: 'Denise Li',\n        imageUrl: 'https://avatars.githubusercontent.com/u/86686513?v=4',\n    },\n    {\n        name: 'Dominique Samuels',\n        imageUrl: 'src/students/dominiqueSamuels.jpg',\n    },\n    {\n        name: 'Dylan Silva',\n        imageUrl: 'https://avatars.githubusercontent.com/u/83935429?v=4',\n    },\n    {\n        name: 'Eddie Verdusco',\n        imageUrl: '',\n    },\n    {\n        name: 'Eric Cortez',\n        imageUrl: 'https://avatars.githubusercontent.com/u/80999718?v=4',\n    },\n    {\n        name: 'Fiona Choi',\n        imageUrl: 'https://avatars.githubusercontent.com/u/87952279?v=4',\n    },\n    {\n        name: 'Gabriel Aspuria',\n        imageUrl: 'https://avatars.githubusercontent.com/u/87732225?v=4',\n    },\n    {\n        name: 'Grant Russell',\n        imageUrl: 'https://avatars.githubusercontent.com/u/87715410?v=4',\n    },\n    {\n        name: 'Haozhen Shu',\n        imageUrl:\n            'https://media-exp1.licdn.com/dms/image/C5603AQHog3wTT3o2sg/profile-displayphoto-shrink_200_200/0/1610405340740?e=1652313600&v=beta&t=Ajr1r0TsI9HOIi9_hKenqIXGFplxrKFCn42MewnYoZQ',\n    },\n    {\n        name: 'Jake Weber',\n        imageUrl: 'https://avatars.githubusercontent.com/u/85136034?v=4',\n    },\n    {\n        name: 'Jedd Basden',\n        imageUrl: 'https://avatars.githubusercontent.com/u/74204664?v=4',\n    },\n    {\n        name: 'Jennifer Dijaili',\n        imageUrl: 'https://avatars.githubusercontent.com/u/85316372?v=4',\n    },\n    {\n        name: 'Jesse Brooks',\n        imageUrl: 'https://avatars.githubusercontent.com/u/61536705?v=4',\n    },\n    {\n        name: 'Karandeep Singh',\n        imageUrl: 'https://avatars.githubusercontent.com/u/90893496?v=4',\n    },\n    {\n        name: 'Ken Dodson-Knapp',\n        imageUrl: 'https://avatars.githubusercontent.com/u/85452797?v=4',\n    },\n    {\n        name: 'Kielvin Bariso',\n        imageUrl: 'https://avatars.githubusercontent.com/u/86331220?v=4',\n    },\n    {\n        name: 'Kreston Caldwell-Mcmurrin',\n        imageUrl: 'https://avatars.githubusercontent.com/u/48869138?v=4',\n    },\n    {\n        name: 'Matt Satterwhite',\n        imageUrl: 'https://avatars.githubusercontent.com/u/85750283?v=4',\n    },\n    {\n        name: 'Maxim Grigg',\n        imageUrl: 'https://avatars.githubusercontent.com/u/38057287?v=4',\n    },\n    {\n        name: 'Megan Mckenna',\n        imageUrl: 'https://avatars.githubusercontent.com/u/81714737?v=4',\n    },\n    {\n        name: 'Mei Shih',\n        imageUrl: 'https://avatars.githubusercontent.com/u/86375959?v=4',\n    },\n    {\n        name: 'Minu Kim',\n        imageUrl: 'https://avatars.githubusercontent.com/u/88391760?v=4',\n    },\n    {\n        name: 'Nate Treadaway',\n        imageUrl:\n            'https://media-exp1.licdn.com/dms/image/C5603AQEDk4n8UDT1-A/profile-displayphoto-shrink_200_200/0/1527615408336?e=1652313600&v=beta&t=RbsqDazpFhEKM7YQ2g9IE4ON4lLAMszc0elQrHpSNVo',\n    },\n    {\n        name: 'Nathaniel Tseng',\n        imageUrl: 'https://avatars.githubusercontent.com/u/6503151?v=4',\n    },\n    {\n        name: 'Nik Tyler',\n        imageUrl: 'https://avatars.githubusercontent.com/u/86486046?v=4',\n    },\n    {\n        name: 'Peter Shin',\n        imageUrl:\n            'https://media-exp1.licdn.com/dms/image/C5603AQHRpB-i4WQugQ/profile-displayphoto-shrink_200_200/0/1642537708219?e=1652313600&v=beta&t=3zu0I05fZUh2gzmtmg-sSRfBLEJ4qjORRbwlrN6MMlE',\n    },\n    {\n        name: 'Robert Popphan',\n        imageUrl: 'src/students/robertPopphan.png',\n    },\n    {\n        name: 'Ryan Bender',\n        imageUrl:\n            'https://media-exp1.licdn.com/dms/image/C5603AQHIGsTmwFfi0Q/profile-displayphoto-shrink_200_200/0/1544051265782?e=1652313600&v=beta&t=xCwvTsntYd64rcKKOluEEjH4NSK2D_Na8XJHB-8dYwo',\n    },\n    {\n        name: 'Savanah Trewman',\n        imageUrl: 'https://avatars.githubusercontent.com/u/88953247?v=4',\n    },\n    {\n        name: 'Seth Corbett',\n        imageUrl: 'src/students/sethCorbett.jpg',\n    },\n    {\n        name: 'Sophia Bui',\n        imageUrl: 'https://avatars.githubusercontent.com/u/90008924?v=4',\n    },\n    {\n        name: 'Sornam Vairavan',\n        imageUrl: 'https://avatars.githubusercontent.com/u/80495013?v=4',\n    },\n    {\n        name: 'Steve Correa',\n        imageUrl: 'https://avatars.githubusercontent.com/u/46228676?v=4',\n    },\n    {\n        name: 'Suhayl Khan',\n        imageUrl: 'https://avatars.githubusercontent.com/u/90187183?v=4',\n    },\n    {\n        name: 'Tanner Shaw',\n        imageUrl: 'https://avatars.githubusercontent.com/u/88640606?v=4',\n    },\n    {\n        name: 'Thien Dang',\n        imageUrl: 'https://avatars.githubusercontent.com/u/42271625?v=4',\n    },\n    {\n        name: 'Vivian Thach',\n        imageUrl: 'https://avatars.githubusercontent.com/u/12629902?v=4',\n    },\n    {\n        name: 'Vladimir Radovanovic',\n        imageUrl: 'https://avatars.githubusercontent.com/u/88914047?v=4',\n    },\n    {\n        name: 'Will Duffy',\n        imageUrl: 'https://avatars.githubusercontent.com/u/82291955?v=4',\n    },\n    {\n        name: 'Yu Ra Kim',\n        imageUrl: 'https://avatars.githubusercontent.com/u/89601983?v=4',\n    },\n    {\n        name: 'Zhen Yu',\n        imageUrl: 'https://avatars.githubusercontent.com/u/90713907?v=4',\n    },\n    // {\n    //     name: '',\n    //     imageUrl: '',\n    // },\n]\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (students);\n\n\n//# sourceURL=webpack:///./src/students/Five-20.js?");

/***/ })

/******/ });