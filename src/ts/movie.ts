export interface IMovie {
  id: number;
  name: string;
  price: number;
  year: number;
  country: string;
  slogan: string;
  genre: string;
  duration: number;
}

export class Movie {
  id: number;
  name: string;
  price: number;
  year: number;
  country: string;
  slogan: string;
  genre: string;
  duration: number;

  constructor(
    id: number,
    name: string,
    price: number,
    year: number,
    country: string,
    slogan: string,
    genre: string,
    duration: number
  ) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.year = year;
    this.country = country;
    this.slogan = slogan;
    this.genre = genre;
    this.duration = duration;
  }
}
