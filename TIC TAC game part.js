let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#resetbtn");
let newBtn=document.querySelector("#new-btn");
let msg=document.querySelector("#msg");
let msgContainer=document.querySelector(".new-container");

let turnO=true; // playerX , playerO

const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const resetGame=()=>{
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");

};

const disabledBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};

const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
        
    }
};



boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
    if(turnO){
        // PlayerO
        box.innerText="O";
        turnO=false;
    }else{
        // Playerx
        box.innerText="X";
        turnO=true;
    }
    
    disabledBoxes();

    checkWinner();

    });
});

const showWinner=(winner)=>{
    msg.innerText=`Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBoxes();

};

const checkWinner=()=>{
    for(let pattern of winPatterns){
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(
        //     boxes[pattern[0]].innerText,
        //     boxes[pattern[1]].innerText,
        //     boxes[pattern[2]].innerText
        // );
        let posVal1= boxes[pattern[0]].innerText;
        let posVal2= boxes[pattern[1]].innerText;
        let posVal3= boxes[pattern[2]].innerText;

        if(posVal1 != "" && posVal2 !="" && posVal3 != ""){
            if(posVal1===posVal2 && posVal2===posVal3){
                console.log("Winner",posVal1);
                showWinner(posVal1);
            }
               
        }
    }

};

newBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);

