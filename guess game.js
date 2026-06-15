const max=prompt("plese enter any max number ");

const random=Math.floor(Math.random()*max)+1;
let guess=prompt("plese guess the currect number");

while(true){
    if(guess=="quit"){
        console.log("you quit the game ");
        break;
    }
    
    if(guess==random){
        console.log("congrates ! You guess the currect number that is",random);
        break;
    }else if(guess<random){
        guess=prompt("Hint : you guess was too small number.plese enter the large number ");
    }else{
        guess=prompt("Hint : you guess was too large number. plese enter the small number");
    }

};