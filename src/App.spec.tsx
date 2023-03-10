// Unit Tests
import { render, fireEvent, screen } from "@testing-library/react"
import HomePage from "./Pages/home"
import { Pagination } from "./components/Pagination"
import { MovieCard } from "./components/MovieCard"
import "@testing-library/jest-dom"

describe("HomePage", () => {
  it("should render the main container", () => {
    const { getByText } = render(<HomePage />)

    expect(getByText("Cine Hub")).toBeInTheDocument()
  })
})

describe("Search Input", () => {
  it("should update the search value when typing in the search input field", () => {
    const { getByPlaceholderText } = render(<HomePage />)

    const searchInputField = getByPlaceholderText("Search")

    fireEvent.change(searchInputField, { target: { value: "test" } })
  })
})

describe("MovieCard", () => {
  it("should render the title, year, director and description", () => {
    const title = "The Matrix"
    const description =
      "A computer hacker learns about the true nature of his reality and his role in the war against its controllers."
    const year = 1999
    const coverImage =
      "https://upload.wikimedia.org/wikipedia/pt/c/c1/The_Matrix_Poster.jpg"
    const director = "Lana Wachowski"

    render(
      <MovieCard
        title={title}
        description={description}
        year={year}
        coverImage={coverImage}
        director={director}
      />
    )

    expect(screen.getByText(title)).toBeInTheDocument() //Title should be rendered in the document.
    expect(screen.getByText(year)).toBeInTheDocument() //Year should be rendered in the document.
    expect(screen.getByText(`Director: ${director}`)).toBeInTheDocument() //Director should be rendered in the document.
    expect(screen.getByText(description)).toBeInTheDocument() //Description should be rendered in the document.
  })

  it("should render an image with a given coverImage", () => {
    const title = "The Matrix"
    const coverImage =
      "https://upload.wikimedia.org/wikipedia/pt/c/c1/The_Matrix_Poster.jpg"
    render(<MovieCard coverImage={coverImage} title={title} />)

    expect(screen.getByRole("img")).toHaveAttribute("src", coverImage) // Image should have a given src attribute set to coverImage value.
  })
})

describe("Pagination", () => {
  const mockPreviousPage = jest.fn()
  const mockNextPage = jest.fn()

  it("should render the correct number of movies and total movies", () => {
    const { getByText } = render(
      <Pagination
        moviesShowing={20}
        totalMovies={100}
        PreviousPage={mockPreviousPage}
        NextPage={mockNextPage}
      />
    )

    expect(getByText("20")).toBeInTheDocument()
    expect(getByText("from")).toBeInTheDocument()
    expect(getByText("100")).toBeInTheDocument()
  })

  it("should call the PreviousPage function when the Previous button is clicked", () => {
    const { getByText } = render(
      <Pagination
        moviesShowing={20}
        totalMovies={100}
        PreviousPage={mockPreviousPage}
        NextPage={mockNextPage}
      />
    )

    fireEvent.click(getByText("Previous"))

    expect(mockPreviousPage).toHaveBeenCalledTimes(1)
  })

  it("should call the NextPage function when the Next button is clicked", () => {
    const { getByText } = render(
      <Pagination
        moviesShowing={20}
        totalMovies={100}
        PreviousPage={mockPreviousPage}
        NextPage={mockNextPage}
      />
    )

    fireEvent.click(getByText("Next"))

    expect(mockNextPage).toHaveBeenCalledTimes(1)
  })
})
