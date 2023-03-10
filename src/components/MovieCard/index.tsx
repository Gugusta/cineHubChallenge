import {
  MoiveCardImage,
  MovieCardContainer,
  MovieCardTitle,
  MovieCardDescription,
  MovieCardYear,
  MainLine,
  InfoContainer,
  MovieCardDirector,
} from "./styles"

import { IMovies } from "../../interfaces/MoviesInterface"

export const MovieCard = ({
  title,
  description,
  year,
  coverImage,
  director,
}: IMovies) => {
  return (
    <MovieCardContainer>
      <MoiveCardImage src={coverImage}></MoiveCardImage>
      <InfoContainer>
        <MainLine>
          <MovieCardTitle>{title}</MovieCardTitle>
          <MovieCardYear>{year}</MovieCardYear>
        </MainLine>
        <MovieCardDirector> Director: {director} </MovieCardDirector>
        <MovieCardDescription>{description}</MovieCardDescription>
      </InfoContainer>
    </MovieCardContainer>
  )
}
