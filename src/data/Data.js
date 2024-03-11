import {
  FaDrumstickBite,
  FaHamburger,
  FaPizzaSlice,
  FaRegStar,
  FaStar,
} from "react-icons/fa";
import {
  FaBoxesPacking,
  FaQuoteRight,
  FaArrowRightLong,
} from "react-icons/fa6";
import img1 from "../images/menu/menu1.png";
import img2 from "../images/menu/menu2.png";
import img3 from "../images/menu/menu3.png";
import img4 from "../images/menu/menu4.png";
import imgDishes1 from "../images/dishes/d1.png";
import imgDishes2 from "../images/dishes/d2.png";
import imgDishes3 from "../images/dishes/d3.png";
import imgDishes4 from "../images/dishes/d4.png";
import imgDishes5 from "../images/dishes/d5.png";
import imgDishes6 from "../images/dishes/d6.png";
import teamImg1 from "../images/team/t1.png";
import teamImg2 from "../images/team/t2.png";
import teamImg3 from "../images/team/t3.png";
import customerImg1 from "../images/customer/c1.png";
import customerImg2 from "../images/customer/c2.png";
import blogImg1 from "../images/blog/b1.jpg";
import blogImg2 from "../images/blog/b2.jpg";
import blogImg3 from "../images/blog/b3.jpg";

export const navList = [
  {
    text: "Home",
    path: "/",
  },
  {
    text: "About",
    path: "/about",
  },
  {
    text: "Pages",
    path: "/dishes",
  },
  {
    text: "Shop",
    path: "/shop",
  },
  {
    text: "Blog",
    path: "/blog",
  },
  {
    text: "Contact",
    path: "/contact",
  },
];
export const hero = [
  {
    id: 1,
    title: "GREAT LOCATION",
    desc: "Rorem ipsum dolor sit amet, etur advoluptatem voluptatem",
  },
  {
    id: 2,
    title: "NATURE FIRST",
    desc: "Rorem ipsum dolor sit amet, etur advoluptatem voluptatem",
  },
  {
    id: 3,
    title: "HEALTHY FOOD",
    desc: "Rorem ipsum dolor sit amet, etur advoluptatem voluptatem",
  },
];
export const socialIcon = [
  {
    icon: <i className="fab fa-facebook-f"></i>,
    name: "facebook",
  },
  {
    icon: <i className="fab fa-twitter"></i>,
    name: "twitter",
  },
  {
    icon: <i className="fab fa-youtube"></i>,
    name: "youtube",
  },
  {
    icon: <i className="fab fa-instagram"></i>,
    name: "instagram",
  },
];
export const menu = [
  {
    id: 1,
    icon: <FaDrumstickBite />,
    title: "Chicken",
    desc: "Rorem ipsum advolu ptateme  volupta tem Rorem ipsuey",
    cover: img1,
  },
  {
    id: 2,
    icon: <FaPizzaSlice />,
    title: "Pizza and drink",
    desc: "Rorem ipsum advolu ptateme  volupta tem Rorem ipsuey",
    cover: img2,
  },
  {
    id: 3,
    title: "box meals",
    icon: <FaHamburger />,
    desc: "Rorem ipsum advolu ptateme  volupta tem Rorem ipsuey",
    cover: img3,
  },
  {
    id: 4,
    icon: <FaBoxesPacking />,
    title: "combo pack",
    desc: "Rorem ipsum advolu ptateme  volupta tem Rorem ipsuey",
    cover: img4,
  },
];
export const dishes = [
  {
    id: 1,
    cover: imgDishes1,
    title: "POTATO WEDGES",
    category: "DRINK",
    sub: "CHICKEN CHUP",
    price: 100.0,
    qty: 1,
    rate: [
      <FaRegStar />,
      <FaRegStar />,
      <FaRegStar />,
      <FaRegStar />,
      <FaRegStar />,
    ],
  },
  {
    id: 2,
    cover: imgDishes2,
    title: "SALMON BURGER",
    category: "PIZZA",
    sub: "ICE CREAM",
    price: 70.0,
    qty: 1,
    rate: [
      <FaRegStar />,
      <FaRegStar />,
      <FaRegStar />,
      <FaRegStar />,
      <FaRegStar />,
    ],
  },
  {
    id: 3,
    cover: imgDishes3,
    title: "SALMON BURGER",
    category: "DRINK",
    sub: "CHICKEN CHUP",
    price: 20.0,
    qty: 1,
    rate: [
      <FaRegStar />,
      <FaRegStar />,
      <FaRegStar />,
      <FaRegStar />,
      <FaRegStar />,
    ],
  },
  {
    id: 4,
    cover: imgDishes4,
    title: "SMOKED SALMON",
    category: "PIZZA",
    sub: "DRINK",
    price: 20.0,
    qty: 1,
    rate: [
      <FaRegStar />,
      <FaRegStar />,
      <FaRegStar />,
      <FaRegStar />,
      <FaRegStar />,
    ],
  },
  {
    id: 5,
    cover: imgDishes5,
    title: "CAULIFLOWER MASH",
    category: "BURGER",
    sub: "BLUEBERRY SHAKE",
    price: 65.0,
    qty: 1,
    rate: [
      <FaRegStar />,
      <FaRegStar />,
      <FaRegStar />,
      <FaRegStar />,
      <FaRegStar />,
    ],
  },
  {
    id: 6,
    cover: imgDishes6,
    title: "EGG BURGER",
    category: "DRINK",
    sub: "CHICKEN CHUP",
    price: 80.0,
    qty: 1,
    rate: [
      <FaRegStar />,
      <FaRegStar />,
      <FaRegStar />,
      <FaRegStar />,
      <FaRegStar />,
    ],
  },
];
export const team = [
  {
    id: 1,
    name: "RASALINA DE",
    exper: "12 YEAR EXPERIENCE",
    cover: teamImg1,
  },
  {
    id: 2,
    name: "MARK HENERYTIX",
    exper: "09 YEAR EXPERIENCE",
    cover: teamImg2,
  },
  {
    id: 3,
    name: "YLINA PITERSON KIM",
    exper: "06 YEAR EXPERIENCE",
    cover: teamImg3,
  },
];
export const customer = [
  {
    id: 1,
    cover: customerImg1,
    icon: <FaQuoteRight />,
    desc: "Great food! Fresh, quick, friendly, delicious, affordable! Very flexible with orders. Great service! Great portions! If you want great seafood, this place will not disappoint you. Definitely.",
    name: "Ronalnd D. Morgan",
    post: "Founder & co",
    rate: [<FaStar />, <FaStar />, <FaStar />, <FaRegStar />, <FaRegStar />],
    ratenum: "3 Star",
  },
  {
    id: 2,
    cover: customerImg2,
    icon: <FaQuoteRight />,
    desc: "Great food! Fresh, quick, friendly, delicious, affordable! Very flexible with orders. Great service! Great portions! If you want great seafood, this place will not disappoint you. Definitely.",
    name: "Rasalina De",
    post: "Developer",
    rate: [<FaStar />, <FaStar />, <FaRegStar />, <FaRegStar />, <FaRegStar />],
    ratenum: "2 Star",
  },
];
export const cdata = [
  {
    num: "14k+",
    name: "HAPPY CUSTOMER",
  },
  {
    num: "16k+",
    name: "AWARD WINING",
  },
  {
    num: "68k+",
    name: "FOOD MENU",
  },
];
export const blog = [
  {
    id: 1,
    date: "JAN 15, 2022",
    name: "BEST BURGER IN YOUR SOCI...",
    cover: blogImg1,
    icon: <FaArrowRightLong />,
    read: "READ MORE",
  },
  {
    id: 2,
    date: "JAN 15, 2022",
    name: "12 SPEEDY SEAFOOD RECIPES..",
    cover: blogImg2,
    icon: <FaArrowRightLong />,
    read: "READ MORE",
  },
  {
    id: 3,
    date: "JAN 15, 2022",
    name: "WHO’S WINNING THE FAST...",
    cover: blogImg3,
    icon: <FaArrowRightLong />,
    read: "READ MORE",
  },
];
