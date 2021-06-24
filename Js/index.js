const container = document.getElementById("container");
const box_card = document.querySelectorAll(".box_card");
const btn_random = document.getElementById("btn_random");
let ArrayPoke = [];
let ArrayCard = [];

container.addEventListener("click", (e) => {
  FlipCard(e);
});

const FlipCard = (e) => {
  let value = e.target.classList.contains("front");
  if (value) {
    e.target.parentElement.classList.add("flip");
    let BoxCard = e.target.parentElement;
    let image =e.target.parentElement.children[1].children[0].getAttribute("src");
    ArrayPoke.push(image);
    ArrayCard.push(BoxCard);
    VerificationArrayPoke();
  }
};

const VerificationArrayPoke = () => {
  if (ArrayPoke.length > 1) {
    if (ArrayPoke[0] === ArrayPoke[1]) {
      ArrayPoke = [];
      ArrayCard = [];
    } else {
      CleanItems();
    }
  }
};

const CleanItems = () => {
  setTimeout(() => {
    ArrayCard[0].classList.remove("flip");
    ArrayCard[1].classList.remove("flip");
    ArrayPoke = [];
    ArrayCard = [];
  }, 750);
};

const ramdon = () => {
  for (let index = container.children.length; index >= 0; index--) {
    container.appendChild(container.children[(Math.random() * index) | 0]);
  }
};

btn_random.addEventListener("click", () => {
  ramdon();
  for (let index of box_card) {
    index.classList.remove("flip");
  }
});
