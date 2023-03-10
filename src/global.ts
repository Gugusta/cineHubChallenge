import styled, { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
    overflow-x: hidden;
  }

  body, 
  input, 
  button, 
  textarea, 
  select {
    font-family: 'Space Mono', sans-serif;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

`
