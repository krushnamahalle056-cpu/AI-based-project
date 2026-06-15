let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choise");
const msg=document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score")

const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const ranIdx=Math.floor(Math.random()*3);
    return options[ranIdx];
};

const drowGame=()=>{
    msg.innerText="Game was drown.Play again";
    msg.style.backgroundColor="#081b31";
};

const showWinner=(userWin)=>{
    if(userWin){
        userScore ++;
        userScorePara.innerText=userScore;
        msg.innerText="You win ";
        msg.style.backgroundColor="green";
    }else{
        compScore ++;
        compScorePara.innerText=compScore;
        msg.innerText=`You lost`;
        msg.style.backgroundColor="red";
    }
};

const playGame=(userChoice)=>{
    console.log(`user choice=${userChoice}`);
    
    // Genarate computer choice
    const compChoice=genCompChoice();
    console.log(`comp Choice=${compChoice}`);

    if(userChoice===compChoice){
        // game drow 
        drowGame();
    }else{
        let userWin=true;
        if(userChoice==="rock"){
            // comp:paper,scissors
            userWin=compChoice==="paper" ? false : true;
        }else if(userChoice==="paper"){
            // comp:rock,scissors
            userWin=compChoice=== "scissors" ? false : true;
        }else{
            // comp:rock,paper
            userWin=compChoice=== "rock" ? false : true;
        }

        showWinner(userWin);
    }
};

choices.forEach((choise) => {
    const userChoice=choise.getAttribute("id");
    choise.addEventListener("click",()=>{
        playGame(userChoice);
    })

    
});