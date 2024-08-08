let userScore=0;
let  compScore=0;

let choices=document.querySelectorAll(".choice");
let user=document.querySelector("#user");
let computer=document.querySelector("#comp");
let myMsg=document.querySelector("#msg");

let draw=()=>{
   console.log("match is draw");
   myMsg.innerText="match is draw";
   myMsg.style.backgroundColor="brown";
}
let userWin=()=>{
   console.log("you win");
   myMsg.innerText="Good move and you won" ;
   myMsg.style.backgroundColor="green";
   userScore++;
   user.innerText=userScore;
}
let userLose=()=>{
   console.log("you loose");
   myMsg.innerText="OOPS!You lose";
   myMsg.style.backgroundColor="red";
   compScore++;
   computer.innerText=compScore;
}


let genCompChoice=()=>{
    let option=["stone","paper","scissor"];
    let getIndex=Math.floor(Math.random()*3);
       return option[getIndex];

}
   let playGame=(userChoice)=>{
    console.log( "USERCHOICE:-", userChoice);
    let select=genCompChoice();
    console.log("computer choice:", select);
    if(userChoice===select){
        draw();
        
    }
     if(userChoice==="stone" && select==="paper"){
              userLose();
        
    }
    else if(userChoice==="stone" && select ==="scissor"){
      userWin();
      
}else if(userChoice==="paper" && select==="scissor"){
   userLose();

}else if(userChoice==="paper" && select==="stone"){
   userWin();

}else if(userChoice==="scissor" && select==="paper"){
   userWin();

}else if(userChoice==="scissor" && select==="stone"){
   userLose();



}
  };


choices.forEach((choice) =>{
    console.log(choice);
    choice.addEventListener("click", () => {
       let userChoice= choice.getAttribute("id");
    playGame(userChoice);
        
   });
});
 