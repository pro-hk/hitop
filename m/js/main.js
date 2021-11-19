const mainVisualSlider = new Swiper("#mainVisual", {
  autoplay: true,
  speed: 1000,
  effect: "cube",
  loop: true,
  navigation: {
    prevEl: "#mainVisual .prev",
    nextEl: "#mainVisual .next",
  },
});

// swiper-wrapper 부모에 적용
const newsSlider = new Swiper("#news .listBox", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 2,
  centeredSlide: true,
});

//f(x,y) = x+y*3; f(3,5) = 18

// const : 상수로 인식하겠다 - 값 변화 X
// let : 변수로 인식하겠다 - 값 변화 O
// 중복선언 불가
// let x = 10;
// x = x + 10;
// console.log(x);
// 변수는 1번만 지정
// const pi = 3.14;
// pi = pi + 10;
// console.log(pi);

// 1. 찾기
const btnAll = document.querySelector(".all");
const gnb = document.querySelector("#gnb");
console.log(btnAll);
// 2. 찾은 것에 이벤트 걸기
btnAll.addEventListener("click", function () {
  // alert("all 을 눌렀습니다.");
  gnb.classList.toggle("on");
  // 3. gnb에 on class 추가하기
  // add : 추가, remove : 제거
  // toggle : 있으면 추가, 없으면 제거
  btnAll.classList.toggle("on");
});
// alert("나는 바로뜨는 경고창입니다.");
