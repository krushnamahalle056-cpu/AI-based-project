const Fav_movie="Chhava";
let guess=prompt("enter my favrate movie");

while(guess!=Fav_movie){
    if(guess="quite"){
        console.log("you quite the game");
        break;
    }
    let guess=prompt("enter my favrate movie");
}

if(guess==Fav_movie){
    console.log(`Congrajulation ! you guess the correct movie ${Fav_movie}`);
}