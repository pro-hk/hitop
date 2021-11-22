const mainVisualSlider = new Swiper("#mainVisual", {
  autoplay: true,
  speed: 1000,
  effect: "fade",
  loop: true,
  navigation: {
    prevEl: "#mainVisual .prev",
    nextEl: "#mainVisual .next",
  },
});
//f(x,y) = x+y*3; f(3,5) = 18

const gnbItem = document.querySelectorAll("#gnb .list >li");
const header = document.querySelector("#header");
gnbItem.addEventListener("mouseenter", function() {
  header.classList.add("open");
})

// 12,278   : Number
// "장성호" : String
// 참, 거짓 : Boolean
let height = 180;
height = height + 5; 
// =  대입연산자

// 변수는 한글 가능, 띄어쓰기 불가, 특수문자는 "$","_" 가능하며 보통 맨 앞에 적음, 첫글자 숫자 불가, 예약어(if 등) 불가

// 사칙연산 : +, -, *, / , %(나머지 구하기-mod)

// 문 statement(조건, 반복) - 행위   
// expression - 값을 생성

let isOK - true;
if (isOK){
  console.log("나는 참이어서 출력됩니다.");
}


