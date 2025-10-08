import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { Container } from "./components/Container";

export const App = () => (
  <Provider store={store}>
    <Container />
  </Provider>
);
