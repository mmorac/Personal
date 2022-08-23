let slider = document.querySelector('.slider');
let innerSlider = document.querySelector('.slider-inner');

let pressed = false;
let startx;
let x;

slider.addEventListener('mousedown', (e)=>{
    pressed = true;
    startx = e.offsetX - innerSlider.offsetLeft;
    slider.style.cursor = 'grabbing';
    console.log(innerSlider.offsetLeft);
});

slider.addEventListener('mouseenter', ()=>{
    slider.style.cursor = 'grab';
});

slider.addEventListener('mouseup', ()=>{
    slider.style.cursor = 'grab';
});

window.addEventListener('mouseup', ()=>{
    pressed = false;
});

slider.addEventListener('mousemove', (e)=>{
    if(!pressed) return;

    e.preventDefault();
    x = e.offsetX;
    innerSlider.style.left = `${x - startx}px`;

    checkBoundary();
});

function checkBoundary(){
    let outer = slider.getBoundingClientRect();
    let inner = innerSlider.getBoundingClientRect();

    if(parseInt(innerSlider.style.left) > 0){
        innerSlider.style.left = '0px';
    }else if(inner.right < outer.right){
        innerSlider.style.left = `-${inner.width - outer.width}px`;
    }
}

function showAbout(){
    document.getElementById("about").style.display = "inline";
    document.getElementById("portfolio").style.display = "none";
}

function showPortfolio(){
    document.getElementById("about").style.display = "none";
    document.getElementById("portfolio").style.display = "block";
}