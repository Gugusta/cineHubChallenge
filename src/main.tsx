import React from "react"
import ReactDOM from "react-dom/client"
import { GlobalStyle } from "./global"
import HomePage from "./Pages/home"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <HomePage />
  </React.StrictMode>
)
