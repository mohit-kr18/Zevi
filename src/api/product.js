import prod1 from "../assets/prod1.png";
import prod6 from "../assets/prod6.png";
import prod7 from "../assets/prod7.png";
import prod8 from "../assets/prod8.png";
import prod9 from "../assets/prod9.png";
import prod10 from "../assets/prod10.png";
import prod11 from "../assets/prod11.png";
import prod12 from "../assets/prod12.png";
import fivestar from "../assets/fivestar.svg";
import prod3 from "../assets/prod3.png";
import prod4 from "../assets/prod4.png";

export const products = [
  {
    id: 1,
    name: "Round neck cotton Tree",
    img: prod6,
    price1: 599,
    price2: 1549,
    star: fivestar,
    brand: "Mango",
  },
  {
    id: 2,
    name: "High waist trousers",
    img: prod7,
    price1: 999,
    price2: 1749,
    star: fivestar,
    brand: "H and M",
  },
  {
    id: 3,
    name: "High neck pullover",
    img: prod8,
    price1: 899,
    price2: 849,
    star: fivestar,
    brand: "H and M",
  },
  {
    id: 4,
    name: "Satin jumpsuit",
    img: prod9,
    price1: 650,
    price2: 449,
    star: fivestar,
    brand: "Mango",
  },
  {
    id: 5,
    name: "Off shoulder cropped shirt",
    img: prod10,
    price1: 599,
    price2: 549,
    star: fivestar,
    brand: "H and M",
  },
  {
    id: 6,
    name: "Dusk leaf dress",
    img: prod11,
    price1: 599,
    price2: 449,
    star: fivestar,
    brand: "Mango",
  },
  {
    id: 7,
    name: "Shirt with puffed sleeves",
    img: prod1,
    price1: 599,
    price2: 1549,
    star: fivestar,
    brand: "H and M",
  },
  {
    id: 8,
    name: "White formal suit",
    img: prod12,
    price1: 599,
    price2: 2549,
    star: fivestar,
    brand: "Mango",
  },
  {
    id: 9,
    name: "Linen jumpsuit",
    img: prod3,
    price1: 999,
    price2: 2649,
    star: fivestar,
    brand: "H and M",
  },
  {
    id: 10,
    name: "Pattern dresses",
    img: prod4,
    price1: 559,
    price2: 399,
    star: fivestar,
    brand: "Mango",
  },
];

// export const getProducts = async () => {
//   return new Promise((resolve, _) => {
//     setTimeout(() => {
//       resolve(products);
//     }, 1000);
//   });
// }