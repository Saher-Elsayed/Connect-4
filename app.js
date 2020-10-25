var tableRow =document.getElementsByTagName("tr");
var tableCol =document.getElementsByTagName("td");

var  playerTurn=document.querySelector(".playerTurn");
const tableCells =document.querySelectorAll(".tableCell");
const reset =document.querySelector(".reset")

// Testing for click detections
for(let i=0; i<tableCol.length; i++)
{
    console.log("I am HERE")
    tableCol[i].addEventListener("click",  (e) => {
        console.log(`${e.target.parentElement.rowIndex},${e.target.cellIndex}`)
    });
};




//adding names (Phase I)
    while(!player1){
        var player1=prompt("Player 1 name:")
    }
    while(!player2){
        var player2=prompt("player 2 name:")
    }
    console.log(player1,player2)
    p2Color="blue";
    P1Color="red";

//just printing the name of the player who is taking turn 
let currentPlayer = 1;
playerTurn.textContent=`${player1}'s turn`;

//switching turns(Phase II)
function changecolor(e){
    let col =e.target.cellIndex;
    let row=[];
    for (let i=5;i>-1;i--)
    {
        if(tableRow[i].children[col].style.backgroundColor == "white"){
            row.push(tableRow[i].children[col])
            if(currentPlayer === 1){
                row[0].style.backgroundColor = P1Color;
            }
        }
    }
}
// Create new game by whitening all the cells of the table 
Array.prototype.forEach.call(tableCells,(cell)=>{
    cell.addEventListener("click",changecolor);
    cell.style.background="white";
});
