let help = document.querySelector('.help');
let color = document.querySelector('.color-box');
let input = document.querySelector('.input');

const onClick = function() {
    if(input.value == 1){
        color.style = 'background-color:red';  
        help.innerHTML = "red";
        help.style.color = 'red';
    }
    else if(input.value ==2){
        color.style = 'background-color:	green';
        help.innerHTML = "green";
        help.style.color = 'green';
    }
    else if(input.value ==3){
        color.style = 'background-color:blue';
        help.style.color = 'blue';
        help.innerHTML = "blue";
    }
    else if(input.value ==4){
        color.style = 'background-color:yellow';
        help.innerHTML = "yellow";
        help.style.color = 'yellow';
    }
    else{
        help.innerHTML = 'wrong input';
    }
    
}

const again = function(){
    color.textContent = 'Change my color';
    color.style = 'background-color: grey';
    help.innerHTML = 'put numbers';
    help.style.color = 'black'
}
document.querySelector('#again').addEventListener('click',again);
document.querySelector('#change').addEventListener('click', onClick);
document.querySelector('.choices').style = 'word-spacing:30px'