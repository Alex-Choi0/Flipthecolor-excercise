const hex = "0123456789ABCDEF";
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', () => {
    console.log(document.body);
    // const randomNumber = getRendomNumber();
    let randomNumber = "#";
    for(let i = 0; i < 6; i++){
        randomNumber += hex[getRendomNumber()];
    }
    console.log(randomNumber);
    document.body.style.backgroundColor = randomNumber;
    color.textContent = randomNumber;
});

function getRendomNumber(){
    return Math.floor(Math.random()*hex.length);
}