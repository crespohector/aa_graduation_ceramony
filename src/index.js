import { Graduate } from "./graduate";
import Ceremony from "./ceremony"; //there is no reason that these two imports are different. I was messing around with how you can import files
import students from  "./students/Five-20";

document.addEventListener("DOMContentLoaded", () => {
    let canvas = document.getElementById("canvas");
    let nextStudentButton = document.getElementById("next-student");
    let ctx = canvas.getContext("2d");
    let ol1 = document.getElementById("ol1");
    let ol2 = document.getElementById("ol2");
    let punch = document.getElementById("punch");
    let submitButton = document.querySelector("#current-student-button");

    let graduates = [] ;
    students.forEach((student) => {
        let graduate = new Graduate(ctx,student.name,student.imageUrl);
        graduates.push(graduate);
    });

    let mid = Math.floor(graduates.length/2);
    ol2.start = mid + 1;

    for (let i = 0; i < mid; i++) {
        let listItem = document.createElement("li");
        listItem.textContent = graduates[i].name;
        ol1.appendChild(listItem);
    }

    for (let i = mid; i < graduates.length; i++) {
        let listItem = document.createElement("li");
        listItem.textContent = graduates[i].name;
        ol2.appendChild(listItem);
    }

    let ceremony = new Ceremony(ctx, graduates);
    ceremony.sound = punch; // give sound to ceremony instance

    submitButton.addEventListener("click", () => {
        let input = document.querySelector("input");
        ceremony.currentStudent = parseInt(input.value) - 1;
    });

    ceremony.constructStage();


    nextStudentButton.addEventListener("click", (e) => {
        ceremony.nextStudentMoves(e.target);
    });


});
