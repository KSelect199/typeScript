import "./css/style.css";

import { Cart } from "./ts/cart";
import { Movie } from "./ts/movie";

const cart = new Cart();
const movie = new Movie(
  1,
  "Тестовый фильм",
  400,
  2023,
  "Россия",
  "...",
  "фантастика",
  150
);

cart.add(movie);
console.log("Total:", cart.getTotalPrice());
