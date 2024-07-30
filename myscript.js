let boxes=document.querySelectorAll(".box");
let reset =document.querySelector("#reset");
let msg =document.querySelector("#para");
let turno= true ;
let rset=true;

const winpttrns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8]
]

const disableallbox=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
//writing a function code for display the winner name on screen...
const showwinner=(winner)=>{

    if(winner=="X"){
        msg.innerHTML=` Winner Is ${winner}`;
    }
    else if(winner=="O"){
        msg.innerHTML=` Winner Is ${winner}`;
    }

    else if (winner!=="O"&& winner!=="X"){
    msg.innerHTML="REMATCH PLEASE ";
    }
    
    disableallbox();
}

//writing a code for finding the check winner step after step move...
const checkwinner=()=>{
    for(let pattern of winpttrns){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;

    if(pos1 !=""&& pos2!="" &&pos3!=""){
        if(pos1 ===pos2 && pos2===pos3){
            console.log("WINNER =",pos1);
            showwinner(pos1);
             }
        }  

    }   
}


//code for entering the o and x entries in a game....
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");//////////////////
        box.innerText="X";
        if(turno){
            box.innerText="O";
            turno=false;
        }
        else{
            box.innerText="X";
            turno=true;
        }
        box.disabled=true;
        checkwinner();
    })
})

//code for rest the game....

reset.addEventListener("click",()=>{
    console.log("game is reset");
    boxes.forEach((box)=>{
            reset.disabled=true;
            box.disabled=false;
            if(rset){
                //player 0 turn .....
                box.innerText="";
                msg.innerHTML="WELCOME";
                rset=false;
                reset.disabled=false;
            }
            else{
                //player 1 turn .....
                box.innerText="";
                msg.innerHTML="WELCOME";
                rset=true;
                reset.disabled=false;
            }
    })
})

