import styled from "styled-components"

export const MovieCardsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 700px;

  @media (max-width: 900px) {
    width: 12.5rem;
  }
`
