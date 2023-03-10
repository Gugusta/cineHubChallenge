import styled from "styled-components"

export const MainContainer = styled.div`
  width: 100%;
  height: 100vh;

  background-color: #2e3440;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
export const SearchInputField = styled.input`
  width: 37.5rem;
  height: 3rem;

  margin-bottom: 25px;
  margin-top: 25px;
  border-radius: 1.5rem;
  box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.198567);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.7rem 0.7rem 0.7rem 1.6rem;
  transition: height 0.3s ease;
  position: relative;
`

export const MainHeader = styled.h1`
  font-size: 5rem;
  font-weight: bold;
  color: #d8dee0;
`
