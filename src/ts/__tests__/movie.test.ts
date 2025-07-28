import { Movie } from "../movie";

test("should create Movie instance with correct properties", () => {
  const movie = new Movie(
    1,
    "Мстители",
    300,
    2012,
    "США",
    "Герои объединяются ради спасения мира",
    "боевик",
    143
  );

  expect(movie.id).toBe(1);
  expect(movie.name).toBe("Мстители");
  expect(movie.price).toBe(300);
  expect(movie.year).toBe(2012);
  expect(movie.country).toBe("США");
  expect(movie.slogan).toBe("Герои объединяются ради спасения мира");
  expect(movie.genre).toBe("боевик");
  expect(movie.duration).toBe(143);
});
