const chicken = document.querySelector('#chicken')
const egg = document.querySelector('#egg')

const number = document.getElementById('number');
const video = document.getElementById('video');

let randomX;
let randomY;
let number2 = 0;

function createEgg (oldX, oldY) {
    const eggContainer = document.createElement('div');
    const eggImg = document.createElement('img');

    const chickenCall = document.getElementById('chickenCall');

    eggImg.src = "imgs/2.png";

    eggContainer.appendChild(eggImg);
    eggContainer.classList.add('absolute');
    eggContainer.style.width = '6%';
    eggImg.style.width = '100%';
    eggContainer.style.left = oldX;
    eggContainer.style.top = oldY;

    return eggContainer;
}

document.body.onkeyup = function(e) {
if (e.key == " " ||
    e.code == "Space" ||      
    e.keyCode == 32      
) { 

    if (number2<20) {
        number2 = number2+1;
        number.innerText = number2;
    } else {
        number.innerText = "BRAWO!! GRAŁAŚ!";
        video.classList.remove('deactive');
    }

    chickenCall.play();
    let oldX = chicken.style.left;
    let oldY = chicken.style.top;
    
    document.body.appendChild(createEgg(oldX, oldY));

    randomX = Math.floor(Math.random() *100);
    randomY = Math.floor(Math.random() *100);

    chicken.style.left = `${randomX}%`;
    chicken.style.top = `${randomY}%`;


}
}

