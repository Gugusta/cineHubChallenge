import styled from "styled-components"

export const PaginationContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  width: 600px;
  padding-top: 2rem;
`

export const ControlButton = styled.button`
  background: #8fbcbb;
  border: none;
  border-radius: 1rem;
  line-height: 2.1rem;
  font-size: 1.5rem;

  color: #fff;
  cursor: pointer;
  width: 9rem;
  transition: all 0.3s ease-out;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    filter: brightness(1.05);
    box-shadow: 0px 0px 15px -3px #88c0d0;
  }

  @media (min-width: 768px) {
    width: 10.6rem;
    font-size: 1.7rem;
  }
`

export const PageList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  color: #d8dee0;

  p {
    font-size: 2rem;
  }
`

export const PageItem = styled.li`
  display: block;
  align-items: center;
  border: none;
  background: none;

  font-size: 2.5rem;
  line-height: 1.9rem;
  letter-spacing: 0.25rem;
  padding: 0 1.5rem;
`
