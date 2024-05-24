import React from "react";
import ReactDOM from "react-dom/client";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { ThemeProvider } from "@mui/material";

import "./styles/index.css";
import "./styles/fonts.css";
import App from "./App";
import theme from "./mui/theme";
import { BrowserRouter } from "react-router-dom";

const client = new ApolloClient({
  uri: "https://api-us-west-2.hygraph.com/v2/clwi3zeet01n308uhev5zrho2/master",
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //<React.StrictMode>
  <ApolloProvider client={client}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </ApolloProvider>
  //</React.StrictMode>
);
