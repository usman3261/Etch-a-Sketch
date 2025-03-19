let color="black";
let click=true;
function createboard(size){
    let board=document.querySelector(".board");
    let squares=board.querySelectorAll("div")
    squares.forEach((div)=>div.remove());
board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
board.style.gridTemplateRows=`repeat(${size},1fr)`;
let amount=size * size;

for(let i=0;i<amount;i++){
    let square=document.createElement("div");
    square.addEventListener("mouseover",colorsketch);
    square.style.backgroundColor="white";
    board.insertAdjacentElement("beforeend",square)
    //board.appendChild(square);
}



}
function colorsketch(){
    if(click){
    if(color==="random")
        this.style.backgroundColor=`hsl(${Math.random() * 360 }, 100%, 50%)`;
    else
    this.style.backgroundColor=color;
}
}
function choosecolor(choice){
    color=choice;

}

createboard(16);

function boardsize(input){
    if(input>2 && input<=100)
        createboard(input);
    else
        console.log("Choose between 2 and 100")
}

function resetboard(){
    let board=document.querySelector(".board");
    let squares=board.querySelectorAll("div")
    squares.forEach((div)=>div.style.backgroundColor="white");
}
document.querySelector("body").addEventListener("click",(e)=>{
    if(e.target.tagName!="BUTTON")
    {
        click=!click;
        if(click)
            document.querySelector(".mode").textContent="Coloring";
        if(!click)
            document.querySelector(".mode").textContent="Not Coloring";
}
}
);
