import { IMovies } from "../../interfaces/MoviesInterface"
import { MovieCard } from "../MovieCard"
import { MovieCardsContainer } from "./styles"

interface CardsContainerProps {
  movies: IMovies[]
}

export default function CardsContainer({ movies }: CardsContainerProps) {
  return (
    <MovieCardsContainer>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          id={movie.id}
          year={movie.year}
          title={movie.title}
          director={movie.director}
          description={movie.description}
          coverImage={movie.coverImage}
        />
      ))}
    </MovieCardsContainer>
  )
}
