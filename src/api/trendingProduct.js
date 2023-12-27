import prod1 from '../assets/prod1.png';
import prod2 from '../assets/prod2.png';
import prod3 from '../assets/prod3.png';
import prod4 from '../assets/prod4.png';
import prod5 from '../assets/prod5.png';


const trendingProducts = [
  {
    id: 1,
    name: "Shirt with puffed sleeves",
    img: prod1,
  },
  {
    id: 2,
    name: "Linen jumpsuit",
    img: prod2,
  },
  {
    id: 3,
    name: "White formal suit",
    img: prod3,
  },
  {
    id: 4,
    name: "Pattern dresses",
    img: prod4,
  },
  {
    id: 5,
    name: "Leather Shirt dress",
    img: prod5,
  }
];

export const getTrendingProducts = async () => {
  return new Promise((resolve, _) => {
    setTimeout(() => {
      resolve(trendingProducts);
    }, 1000);
  });
};
