
var tableRow =document.getElementsByTagName("tr");
var tableCol =document.getElementsByTagName("td");
var tableCells =document.querySelector(".tableCell");

const playerTurn=document.querySelector(".playerTurn");
const reset =document.querySelector(".reset")

// Testing for click detections
for(let i=0; i<tableCol.length; i++)
{
    console.log("I am HERE")
    tableCol[i].addEventListener("click", (e) =>{
    console.log(`${e.target.parentElement.rowIndex}, ${e.target.parentElement.cellIndex}`)
    });
};

p2Color="blue";
P1Color="red";


//adding names (Phase I)
    while(!player1){
        var player1=prompt("Player 1 name:")
    }
    while(!player2){
        var player2=prompt("player 2 name:")
    }
    console.log(player1,player2)

//switching turns(Phase II)
function chnagecolor(e){
    
}

let currentPlayer=1;
playerTurn.textContent=`${player1}'s turn`;
Array.prototype.forEach.call(tableCells,(cell)=>{
    cell.addEventListener("click",changecolor);
    cell.style.background="white";
});
