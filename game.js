let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let newImage = document.createElement('img');



let turnO = true; //playerX , playerO

const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
    resetBtn.classList.remove("hide");

    

};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("Box Click");
        if (turnO) { 
            //PlayerO
            box.innerText = "O";
            box.style.color = "#ffffff";
            turnO = false;
        } else {  
            //PlayerX
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
    
};

const showWinner = (winner) => {
    msg.innerText = `Congratulation, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    resetBtn.classList.add("hide");

    disableBoxes();
    document.body.style.backgroundImage = "url(TicTakToe.jpg)";
    document.body.style.backgroundSize= "86rem 80rem";

};

const checkWinner = () => {
    for (pattern of winPattern) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("Winner", pos1Val);
                showWinner(pos1Val);
            }
        }
    }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
resetBtn.classList.remove("hide");

newImage.src = 'winner.png';
    msgContainer.appendChild(newImage);
    newImage.height= "350";
    newImage.width= "350";
