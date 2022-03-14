import React from "react";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import ToDoList from "./ToDoList";

const GlobalStyle = createGlobalStyle`
    ${reset};
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <ToDoList />
    </>
  );
}

export default App;
