
animateElem = document.getElementById("animateDiv");
let rotate = 0;
let mLeft = 0;
let mRight = 0;

function animateDiv(){
    rotate++;
    mLeft++;
    mRight++;

    animateElem.style.rotate = `${rotate}deg`;
    animateElem.style.marginLeft = `${mLeft}px`;
    animateElem.style.marginRight = `${mRight}px`;

    requestAnimationFrame(animateDiv);
}

animateDiv();
function colorChange(){
    document.getElementById("animateDiv").style.backgroundColor = "lightgreen";
}
