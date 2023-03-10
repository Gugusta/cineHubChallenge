import {
  ControlButton,
  PageList,
  PaginationContainer,
  PageItem,
} from "./styles"

export function Pagination({
  moviesShowing,
  NextPage,
  PreviousPage,
  totalMovies,
}: any) {
  return (
    <PaginationContainer>
      <ControlButton onClick={PreviousPage}>Previous</ControlButton>
      <PageList>
        <PageItem> {moviesShowing} </PageItem> <p>from</p>
        <PageItem> {totalMovies} </PageItem>
      </PageList>

      <ControlButton onClick={NextPage}>Next</ControlButton>
    </PaginationContainer>
  )
}
