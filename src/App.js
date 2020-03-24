import React from "react";
import { Provider } from "react-redux";
import Store from "./redux/store";
import SearchBar from "./components/NavBar/SearchBar";
import ProductCards from "./components/ProductCard/ProductCards";

function App() {
  return (
    <Provider store={Store}>
      <SearchBar></SearchBar>
      <ProductCards></ProductCards>
    </Provider>
  );
}
export default App;
