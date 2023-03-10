import { MovieCard } from "./components/MovieCard"
import { mainContainer } from "./global"
import { MOVIE } from "./db"

export default function App() {
  return (
      <div>
        <h1>Movie List</h1>
      </div>
      <h1>
        {MOVIE.map((movie) => {
          return (
            <MovieCard
              id={movie.id}
              title={movie.title}
              director={movie.title}
              description={movie.description}
              year={movie.year}
              coverImage={movie.coverImage}
            />
          )
        })}
      </h1>
  )
}
