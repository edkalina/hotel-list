import React from "react";
import { createGlobalStyle } from "styled-components";

import SearchResultPage from "./SearchResultPage/SearchResultPage";

const GlobalStyle = createGlobalStyle`
  body {
    color: #212223;
    padding: 0;
    margin: 0;
  }
`;

export default function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <SearchResultPage />
    </React.Fragment>
  );
}
