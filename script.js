let boxes = document.getElementsByClassName("box");
let turnNow = document.getElementsByClassName("turn")[0];
let resetButton = document.getElementsByClassName("resetButton")[0];
let boxText = document.getElementsByClassName("boxtext");
let WinImage = document.getElementsByClassName("WinImage")[0];
let LoseImage = document.getElementsByClassName("LoseImage")[0];
let myArray =[];
let isGameWin = false;
WinImage.style.display="none";
LoseImage.style.display="none";
let ticks = 0;

let changeTurn = ()=>{
    if(turnNow.innerText=='turn for X'){
        turnNow.innerText='turn for O';
        return 'X';
    }
    else{
        turnNow.innerText='turn for X';
        return 'O';
    }
}


let reset = ()=>{
    turnNow.innerText= 'turn for X';
}

let clearBoxes = ()=>{
    Array.from(boxText).forEach( (element)=>{
        element.innerText='';
    });
}


resetButton.addEventListener('click', ()=>{
    reset();
    clearBoxes();
    resetStyle();
    WinImage.style.display="none";
    LoseImage.style.display="none";
    isGameWin=false;
    ticks=0;
    enableBoxes();
})

let getValue = ()=>{
    Array.from(boxes).forEach((val, idx)=>{
        boxesArray = Array.from(boxes);
        myArray[idx] = boxesArray[idx].firstChild.innerText;
    });
}    



let changeStyle = (idx1, idx2, idx3)=>{
    boxText[idx1].parentElement.style.backgroundColor="blue";
    boxText[idx1].parentElement.style.color="white";
    boxText[idx1].parentElement.style.fontWeight="bolder";
    boxText[idx2].parentElement.style.backgroundColor="blue";
    boxText[idx2].parentElement.style.color="white";
    boxText[idx2].parentElement.style.fontWeight="bolder";
    boxText[idx3].parentElement.style.backgroundColor="blue";
    boxText[idx3].parentElement.style.color="white";
    boxText[idx3].parentElement.style.fontWeight="bolder";
    WinImage.style.display="inline";
}

let resetStyle = ()=>{
    Array.from(boxText).forEach((element)=>{
        element.parentElement.style.backgroundColor="orange";
        element.parentElement.style.color="black";
        element.parentElement.style.fontWeight="normal";
    });
}



let check = ()=>{

    if((myArray[0]===myArray[1] && myArray[1]===myArray[2]) && (myArray[0]!=='' && myArray[1]!=='' && myArray[2]!=='') ){
        changeStyle(0,1,2); 
        isGameWin=true; 
        disableBoxes();  
    }
    else if((myArray[3]===myArray[4] && myArray[4]===myArray[5]) && (myArray[3]!=='' && myArray[4]!=='' && myArray[5]!=='')){
        changeStyle(3,4,5);
        isGameWin=true;
    }
    else if((myArray[6]===myArray[7] && myArray[7]===myArray[8]) && (myArray[6]!=='' && myArray[7]!=='' && myArray[8]!=='')){
        changeStyle(6,7,8);
        isGameWin=true;
        disableBoxes();
    }
    else if((myArray[0]===myArray[3] && myArray[3]===myArray[6]) && (myArray[0]!=='' && myArray[3]!=='' && myArray[6]!=='')){
        changeStyle(0,3,6);
        isGameWin=true;
        disableBoxes();
    }
    else if((myArray[1]===myArray[4] && myArray[4]===myArray[7]) && (myArray[1]!=='' && myArray[4]!=='' && myArray[7]!=='')){
        changeStyle(1,4,7);
        isGameWin=true;
        disableBoxes();
    }
    else if((myArray[2]===myArray[5] && myArray[5]===myArray[8]) && (myArray[2]!=='' && myArray[5]!=='' && myArray[8]!=='')){
        changeStyle(2,5,8);
        isGameWin=true;
        disableBoxes();
    }
    else if((myArray[0]===myArray[4] && myArray[4]===myArray[8]) && (myArray[0]!=='' && myArray[4]!=='' && myArray[8]!=='')){
        changeStyle(0,4,8);
        isGameWin=true;
        disableBoxes();
    }
    else if((myArray[2]===myArray[4] && myArray[4]===myArray[6]) && (myArray[2]!=='' && myArray[4]!=='' && myArray[6]!=='')){
        changeStyle(2,4,6);
        isGameWin=true;
        disableBoxes();
    }

    if(ticks==9 && isGameWin==false){
        LoseImage.style.display="inline";
        ticks=0;
        
   }
}

let disableBoxes = () => {
    Array.from(boxes).forEach((element) => {
        element.removeEventListener('click', handleBoxClick); // Remove the event listener
    });
};

let enableBoxes = () => {
    Array.from(boxes).forEach((element) => {
        element.addEventListener('click', handleBoxClick); // Re-add the event listener
    });
};

let handleBoxClick = (event) => {
    let boxChild = event.currentTarget.firstChild;
    if (boxChild.innerText == '') {
        boxChild.innerText = changeTurn();
        ticks++;
    }
    getValue();
    check();
};


Array.from(boxes).forEach( (element)=>{
  
        element.addEventListener('click', handleBoxClick);
    
});