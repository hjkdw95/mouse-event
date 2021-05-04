let btn_yes;
let btn_no;
let cursorItem;
let circle;
let x = 0;
let y = 0;
let mx = 0;
let my = 0;
let speed = 0.2;

// 마우스 따라 움직이게 하기
function mouseFunc(e){
    x = e.clientX;
    y = e.clientY;
    // translate랑 뒤 괄호 사이에 여백 없게 하기!
    //cursorItem.style.transform = `translate(${x}px, ${y}px)`;
};

// 마우스에 loop 효과 주기
function loop(){
    mx += (x - mx) * speed;
    my += (y - my) * speed;
    cursorItem.style.transform = `translate(${mx}px, ${my}px)`;
    requestAnimationFrame(loop);
};

// 마우스 크기 키웠다 줄이기
function overFunc(e){
    circle.style.transform = `scale(0.3)`;
};

function outFunc(e){
    circle.style.transform = `scale(1)`;
};

function init(){
    btn_yes = document.querySelector("#yes");
    btn_no = document.querySelector("#no");

    cursorItem = document.querySelector(".cursorItem");
    circle = document.querySelector(".circle");

    // 네 버튼 이벤트
    btn_yes.addEventListener("mouseover", overFunc);
    btn_yes.addEventListener("mouseout", outFunc);

    // 아니오 버튼 이벤트
    btn_no.addEventListener("mouseover", overFunc);
    btn_no.addEventListener("mouseout", outFunc);

    // 마우스가 따라다니게 하는 작업
    window.addEventListener("mousemove", mouseFunc);

    loop();
};


init();

