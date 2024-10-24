let userscore = 0;
let compscore = 0;


const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");


const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");


const gencompchoice =() =>{
    const options = ["rock","paper","Scissors"];
    const randidx = Math.floor(Math.random() * 3);
    return options[randidx];
};

const drawgame = () =>{
    // console.log("Game was draw");

    msg.innerText = "Game was draw!.Play again.";
    msg.style.backgroundColor ="#00b4d8";
    // msg.style.color ="red";

    

}

const showwinner = (userwin,userchoice,compchoice) =>{
    if(userwin){
        userscore++;
        userscorepara.innerText = userscore;

        // console.log("you win!");
        msg.innerText = `You Win! Your ${userchoice} beats ${compchoice}`;


    }else{
        compscore++;
        compscorepara.innerText = compscore;

        // console.log("you lose");

        msg.innerText = `You Lose! ${compchoice} beats Your ${userchoice}`;
        msg.style.backgroundColor ="red";

    }
}

const playGame = (userchoice) => {
      console.log ("user choice =",userchoice);

      //Generated computer choice;
      const  compchoice = gencompchoice();
      console.log ("computer choice =",compchoice);

      if(userchoice === compchoice){
         drawgame();
      }else{
        let userwin =true;
        if(userchoice ==="rock"){
            //Scissors, paper
           userwin = compchoice ==="paper" ? false : true;
        }else if(userchoice === "paper"){
            //rock , Scissors
          userwin= compchoice === "Scissors" ? false :true;
        }else{
            // rock ,paper
          userwin = compchoice ==="rock" ? false :true;
        }
        showwinner(userwin,userchoice,compchoice);
      }
};

choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click", () =>{
        const userchoice = choice.getAttribute("id");
        // console.log("choice was clicked =",userchoice);
        playGame(userchoice);
    });
});