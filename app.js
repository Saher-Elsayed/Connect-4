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
            //if(winCheck()){
            //    return console.log(`${player1} Won`)
            //}

        }
    }
    winCheck();
}
//checking for 4 in horizonal, vertical, diagonal
function winCheck(){
    //check the horizontal
    for (i=0;i<6;i++)//row
    {
        for (j=0;j<7;j++)//Column
        {
        //(0,0)->(0,1)->(0,2)->(0,3)->(0,4)......
        //(1,0)->(1,1)->(1,2)......
        if(j<=2)
        {
            if(tableRow[i].children[j].style.backgroundColor == tableRow[i].children[j+1].style.backgroundColor &&
                tableRow[i].children[j+1].style.backgroundColor == tableRow[i].children[j+2].style.backgroundColor &&
                tableRow[i].children[j+2].style.backgroundColor == tableRow[i].children[j+3].style.backgroundColor &&
                tableRow[i].children[j+3].style.backgroundColor == tableRow[i].children[j+4].style.backgroundColor)
            {
                console.log("I made to the postive ");
                console.log(i,j,tableRow[i].children[j].style.backgroundColor);

            }
        }
            else if (j>2 && j<6)
            {
                if(tableRow[i].children[j].style.backgroundColor == tableRow[i].children[j+1].style.backgroundColor &&
                tableRow[i].children[j].style.backgroundColor == tableRow[i].children[j-1].style.backgroundColor &&
                tableRow[i].children[j].style.backgroundColor == tableRow[i].children[j-2].style.backgroundColor &&
                tableRow[i].children[j].style.backgroundColor == tableRow[i].children[j-3].style.backgroundColor)
                {
                    console.log("I made it to the negative");
                    console.log(i,j,tableRow[i].children[j].style.backgroundColor);
                }
            }
            else if(j=6)
            {
                if(tableRow[i].children[j].style.backgroundColor == tableRow[i].children[j-1].style.backgroundColor &&
                tableRow[i].children[j].style.backgroundColor == tableRow[i].children[j-2].style.backgroundColor &&
                tableRow[i].children[j].style.backgroundColor == tableRow[i].children[j-3].style.backgroundColor &&
                tableRow[i].children[j].style.backgroundColor == tableRow[i].children[j-4].style.backgroundColor )
            {
                console.log("left most bound brother")
                console.log(i,j,tableRow[i].children[j].style.backgroundColor);

            }
            }
        }
    }
return true;
}







// Create new game by whitening all the cells of the table 
Array.prototype.forEach.call(tableCells,(cell)=>{
    cell.addEventListener("click",changecolor);
    cell.style.background="white";
});
