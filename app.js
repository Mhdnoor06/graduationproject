const t2 = gsap.timeline({ defaults: { ease: "power1.out" } });
// const slider4 = document.querySelector(".slider4");

t2.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
t2.to(".slider2", { y: "-100%", duration: 1.5, delay: 0.5 });
t2.to(".intro", { y: "-100%", duration: 1 }, "-=1");
t2.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 });
t2.fromTo(".big-text", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
t2.to(".slider3", { y: "0%", duration: 1.5, delay: 1 });
// t2.to(slider4, { x: "50%", duration: 1.5, delay: 1 });

const hero = document.querySelector(".hero");
const slider = document.querySelector(".slider");
const logo = document.querySelector("#logo");
const hamburger = document.querySelector(".hamburger");
const headline = document.querySelector(".headline");

const tl = new TimelineMax();

tl.fromTo(
  hero,
  1,
  { height: "0%" },
  { height: "100%", ease: Power2.easeInout, delay: 3 }
)
  .fromTo(
    hero,
    1.2,
    { width: "100%" },
    { width: "80%", ease: Power2.easeInout }
  )
  .fromTo(
    slider,
    1.2,
    { x: "-100%" },
    { x: "0%", ease: Power2.easeInout },
    "-=1.2"
  )

  .fromTo(logo, 0.5, { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, "-=0.5")
  .fromTo(hamburger, 0.5, { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, "-=0.5")
  .fromTo(headline, 0.5, { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, "-=0.5");
// var currentDelay = myAnimation.delay();

//sets delay

// document.querySelector('#name').addEventListener('click', function () {
//   const name = document.querySelector('#name');
//   console.log(guess, typeof guess);
// }
