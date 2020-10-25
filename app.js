
let tableRow =document.getElementsByTagName("tr");
let tableCol =document.getElementsByTagName("td");
let cells = document.querySelector(".cell");

let playerTurn=document.querySelector(".playerTurn");
let reset =document.querySelector(".reset")

// Testing for click detections
for(let i=0; i<tableCol.length; i++)
{
    console.log("I am HERE")
    tableCol[i].addEventListener("click", (e) =>{
        console.log(`${e.target.parentElement.rowIndex}, ${e.target.parentElement.cellIndex}`)
    });
};