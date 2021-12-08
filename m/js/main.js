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

/*
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
*/

// jQuery : 자바스크립트를 편하게 쓰려고 만든 라이브러리
// jQuery : class 관련한 4가지 method 제공
// 1. addClass
// 2. removeClass
// 3. hasClass
// 4. toggleClass

// dom제어 스크립트는 일단 잘 찾아야한다.
// 찾은 다음 조작

const btnAll = $(".all");
// const btnAll = jQuery(".all")
const gnb = $("#gnb");
const depth01 = gnb.find(".list > li > a");
const depth02 = gnb.find(".list > li > .depth02");
/* const _depth02 = document.querySelectorAll("#gnb .list > li");
_depth02.forEach(function (item, idx) {});*/
btnAll.on("click", () => {
  gnb.toggleClass("on");
  btnAll.toggleClass("on");
  depth02.stop().delay(500).slideUp();
});
depth01.on("click", function () {
  // e.preventDefault();
  // 기본 능력을 막음
  console.log("aaa");
  const selectedDepth02 = $(this).siblings(".depth02");
  const parentDepth02 = $(this).parent().siblings().find(".depth02");
  parentDepth02.stop().slideUp(1000);
  selectedDepth02.stop().slideToggle(1000);
  return false;
});
// this : context환경에 따라 달라짐
// find : 자식 관계에서 찾을 때
// siblings : 형제 관계에서 찾을 때
// a태그에 이벤트 걸 때 : (e) & e.preventDefault() or (마지막 줄)return false
// show() : display를 block으로 바꿔줌
// hide() : display를 none으로 바꿔줌
// toggle() : display block none 바꿔줌

//bom : 브라우저..
const header = $("#header");
/*
const header01 = document.querySelector("#header");
console.log(header);
console.log(header01); 서로 다름
*/
$(window).on("scroll", function () {
  const st = $(window).scrollTop();
  if (st > 0 || !header.hasClass("scroll")) {
    header.addClass("scroll");
  } else {
    header.removeClass("scroll");
  }
});
// console.log($(window).scrollTop()) : 스크롤바 위치값
