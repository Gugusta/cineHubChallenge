import styled from "styled-components"

export const MovieCardContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 200px;
  height: 300px;

  background: #d8dee9;
  margin-left: 2.5rem;
  margin-bottom: 2.5rem;
  border-radius: 15px;

  &:hover {
    filter: brightness(1.05);
    box-shadow: 0px 0px 15px -3px #88c0d0;
  }
`
export const MoiveCardImage = styled.img`
  border-radius: 15px 15px 0 0;
  width: 100%;
`

export const MovieCardTitle = styled.h3`
  font-size: 1.5rem;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
`

export const MovieCardDescription = styled.p`
  font-size: 0.8rem;
  text-align: justify;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  line-clamp: 5;
  -webkit-box-orient: vertical;
`

export const MovieCardYear = styled.p`
  font-size: 1.5rem;
`

export const MovieCardDirector = styled.p`
  font-size: 1.2rem;
  padding-bottom: 0.5rem;
`
export const MainLine = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 3.5rem;
  margin-bottom: 0.8rem;
`

export const InfoContainer = styled.div`
  padding: 1.5rem;
  width: 100%;
`
