import { faker } from "@faker-js/faker"

import { IMovies } from "./interfaces/MoviesInterface"

export const MOVIE: IMovies[] = []

export function createMovieList(): IMovies {
  const capitalizeFirstLetter = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  return {
    id: `movie-${MOVIE.length + 1}`,
    title: capitalizeFirstLetter(faker.lorem.words()),
    director: faker.name.findName(),
    description: faker.lorem.paragraph(),
    year: faker.date.past(10).getFullYear(),
    coverImage: faker.image.nature(),
  }
}

Array.from({ length: 1000 }).forEach(() => {
  MOVIE.push(createMovieList())
})
