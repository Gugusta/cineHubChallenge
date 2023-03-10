import { MainContainer, MainHeader, SearchInputField } from "./styles"
import { MOVIE } from "../../db"
import { useEffect, useState } from "react"
import { IMovies } from "../../interfaces/MoviesInterface"
import CardsContainer from "../../components/CardsContainer"
import { Pagination } from "../../components/Pagination"

export default function HomePage() {
  const [movies, setMovies] = useState<IMovies[]>([])

  useEffect(() => {
    setMovies(MOVIE)
  }, [])

  const [search, setSearch] = useState("")

  const filteredMovies = movies.filter((movie) => {
    return movie.title.toLowerCase().includes(search.toLowerCase())
  })

  const [currentPage, setCurrentPage] = useState<number>(1)
  const [moviesPerPage, setMoviesPerPage] = useState<number>(6)
  const [moviesShowing, setMoviesShowing] = useState(6)
  const totalMovies = filteredMovies.length

  const pageNumbers = []
  for (let i = 1; i <= Math.ceil(totalMovies / moviesPerPage); i++) {
    pageNumbers.push(i)
  }

  const indexOfLastMovie = currentPage * moviesPerPage
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage
  const currentMovies = filteredMovies.slice(
    indexOfFirstMovie,
    indexOfLastMovie
  )

  const NextPage = () => {
    if (currentPage === pageNumbers.length) {
      return
    }

    setCurrentPage(currentPage + 1)
    setMoviesShowing(moviesShowing + moviesPerPage)
  }

  const PreviousPage = () => {
    if (currentPage === 1) return
    setCurrentPage(currentPage - 1)
    setMoviesShowing(moviesShowing - moviesPerPage)
  }

  return (
    <MainContainer>
      <MainHeader> Cine Hub </MainHeader>
      <SearchInputField
        type="text"
        value={search}
        onChange={(ev) => setSearch(ev.target.value)}
      />
      <CardsContainer movies={currentMovies} />
      <Pagination
        NextPage={NextPage}
        PreviousPage={PreviousPage}
        totalMovies={totalMovies}
        moviesShowing={moviesShowing}
      />
    </MainContainer>
  )
}
