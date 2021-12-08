Splitting();

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

gsap.from("#mainVisual .slogan .main .char", { opacity: 0, y: -150, ease: "bounce", duration: 2, stagger: 0.1 });
gsap.from("#mainVisual .slogan .sub .char", { opacity: 0, y: -150, ease: "bounce", duration: 2, delay: 2, stagger: 0.1 });

/*
const gnbItem = document.querySelectorAll("#gnb .list >li");
const header = document.querySelector("#header");
console.log(gnbItem);
console.log(gnbItem.length);
for (let i = 0; i < gnbItem.length; i++) {
  gnbItem[i].addEventListener("mouseenter", function () {
    header.classList.add("open");
  });
  gnbItem[i].addEventListener("mouseleave", function () {
    header.classList.remove("open");
  });
}
*/
const gnbList = $("#gnb .list >li");
const header = $("#header");

/* fulldown 메뉴
gnbList.on("mouseenter", function () {
  header.addClass("open");
});
gnbList.on("mouseleave", function () {
  header.removeClass("open");
});
*/

gnbList.on("mouseenter", function () {
  const selectedDepth02 = $(this).find(".depth02");
  selectedDepth02.stop().slideDown(200);
});
gnbList.on("mouseleave", function () {
  const selectedDepth02 = $(this).find(".depth02");
  selectedDepth02.stop().slideUp(100);
});

$(window).on("scroll", function () {
  const st = $(window).scrollTop();
  if (st > 0 || !header.hasClass("open")) {
    header.addClass("open");
  } else {
    header.removeClass("open");
  }
});
