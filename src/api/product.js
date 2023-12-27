import prod1 from "../assets/prod1.png";
import prod6 from "../assets/prod6.png";
import prod7 from "../assets/prod7.png";
import prod8 from "../assets/prod8.png";
import prod9 from "../assets/prod9.png";
import prod10 from "../assets/prod10.png";
import prod11 from "../assets/prod11.png";
import prod12 from "../assets/prod12.png";
import fivestar from "../assets/fivestar.svg";

const products = [
  {
    id: 1,
    name: "Round neck cotton Tree",
    img: prod6,
    price1:599,
    price2:549,
    star:fivestar
  },
  {
    id: 2,
    name: "High waist trousers",
    img: prod7,
    price1:999,
    price2:749,
    star:fivestar
  },
  {
    id: 3,
    name: "High neck pullover",
    img: prod8,
    price1:899,
    price2:849,
    star:fivestar
  },
  {
    id: 4,
    name: "Satin jumpsuit",
    img: prod9,
    price1:650,
    price2:549,
    star:fivestar
  },
  {
    id: 5,
    name: "Off shoulder cropped shirt",
    img: prod10,
    price1:599,
    price2:549,
    star:fivestar
  },
  {
    id: 6,
    name: "Dusk leaf dress",
    img: prod11,
    price1:599,
    price2:549,
    star:fivestar
  },
  {
    id: 7,
    name: "Shirt with puffed sleeves",
    img: prod1,
    price1:599,
    price2:549,
    star:fivestar
  },
  {
    id: 8,
    name: "White formal suit",
    img: prod12,
    price1:599,
    price2:549,
    star:fivestar
  },
];

export const getProducts = async () => {
  return new Promise((resolve, _) => {
    setTimeout(() => {
      resolve(products);
    }, 1000);
  });
}