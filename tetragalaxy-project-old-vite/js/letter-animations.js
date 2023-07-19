export function applyAllEffects(loopAnimation = false) {
  effect7(loopAnimation);
  effect10(true);
}

export function effect7(loopAnimation) {
  // Wrap every letter in a span
  let wrappedElements = document.querySelectorAll(".ml7 .letters");
  for (let textWrapper of wrappedElements) {
    textWrapper.innerHTML = textWrapper.textContent.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
    );

    let timeline = anime.timeline({ loop: loopAnimation }).add({
      targets: ".ml7 .letter",
      translateY: ["1.1em", 0],
      translateX: ["0.55em", 0],
      translateZ: 0,
      rotateZ: [180, 0],
      duration: 750,
      easing: "easeOutExpo",
      delay: (el, i) => 50 * i,
    });
    if (loopAnimation) {
      timeline.add({
        targets: ".ml7",
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000,
      });
    }
  }
}

export function effect10(loopAnimation) {
  // Wrap every letter in a span
  let wrappedElements = document.querySelectorAll(".ml10 .letters");
  for (let textWrapper of wrappedElements) {
    textWrapper.innerHTML = textWrapper.textContent.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
    );

    let timeline = anime.timeline({ loop: loopAnimation }).add({
      targets: ".ml10 .letter",
      rotateY: [-90, 0],
      duration: 1300,
      delay: (el, i) => 45 * i,
    });

    if (loopAnimation) {
      timeline.add({
        targets: ".ml10",
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000,
      });
    }
  }
}
