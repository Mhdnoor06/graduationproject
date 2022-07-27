window.addEventListener("load", () => {
  const params = new URL(document.location).searchParams;
  const name = params.get("name");

  document.getElementById("result").innerHTML = name.toUpperCase();
});

const t3 = gsap.timeline({ defaults: { ease: "power1.out" } });
const left = document.querySelector(".left");
const right = document.querySelector(".right");
t3.to(left, { x: "0%", duration: 1, delay: 1 });
t3.to(right, { x: "0%", duration: 1, delay: 0 });
