var tableRow =document.getElementsByTagName("tr");
var tableCol =document.getElementsByTagName("td");

var  playerTurn=document.querySelector(".playerTurn");
const tableCells =document.querySelectorAll(".tableCell");
const reset =document.querySelector(".reset")

// Testing for click detections
for(let i=0; i<tableCol.length; i++)
{
    console.log("Total cells sir")
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
    //console.log(player1,player2)
  let P2Color="blue";
  let P1Color="red";

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
            if(winCheck()){
                return alert(`${player1} WINS!!`)
            }
            
        }
    }
    console.log(winCheck())
}
//checking for 4 in horizonal, vertical, diagonal
function winCheck(){
    let row = 6; 
    let col =7; 
    //horizontal check;
    /* 
    for(let i =0; i<row;i++){
        for(let j=0; j<col-3;j++){
            let color = tableRow[i].children[j].style.backgroundColor; 
            if(color !== "white" && tableRow[i].children[j+1].style.backgroundColor === color && tableRow[i].children[j+2].style.backgroundColor===color && tableRow[i].children[j+3].style.backgroundColor===color ){
                return true; 
            }
        }
    } 

    //vertical check
    for(let i =0; i<row-3;i++){
        for(let j =0; j<col;j++){
            let color = tableRow[i].children[j].style.backgroundColor; 
            if(color !== "white" && tableRow[i+1].children[j].style.backgroundColor === color && tableRow[i+2].children[j].style.backgroundColor===color && tableRow[i+3].children[j].style.backgroundColor===color){
                console.log("reached");
                return true; 
            }
        }
    }*/

    //Diagonal check(Part 1) 
    /* 
    for(let i =0; i<4;i++){
        for(let j =0; j<3;j++){
            let color = tableRow[j].children[i].style.backgroundColor; 
            if(color !== "white" && tableRow[j+1].children[i+1].style.backgroundColor === color && tableRow[j+2].children[i+2].style.backgroundColor===color && tableRow[j+3].children[i+3].style.backgroundColor===color){
                console.log("reached");
                return true; 
            }
        }
    }
  */
     //Diagonal check(Part 2) 
    for(let i =0; i<4; i++){
        for(let j =5; j>2; j--){
            let color = tableRow[j].children[i].style.backgroundColor; 
            if(color !== "white" && tableRow[j-1].children[i+1].style.backgroundColor === color && tableRow[j-2].children[i+2].style.backgroundColor===color && tableRow[j-3].children[i+3].style.backgroundColor===color){
                console.log("reached");
                return true; 
        }
    }
}
    return false;

}



// Create new game by whitening all the cells of the table 
Array.prototype.forEach.call(tableCells,(cell)=>{
    cell.addEventListener("click",changecolor);
    cell.style.background="white";
});

