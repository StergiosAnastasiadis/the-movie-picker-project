import React from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import Cart from "./components/Cart";
import Card from "./components/Card";
import cards from "./cards";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Input />
      <Cart />
      {/* Hint - use array method with jsx element and you can use flex-wrap for lay out | DONE Flex-wrap */}
      <div className="add_your_flex_styling_check_wrap">
        {cards.map((item) => (<Card key={item.key} title={item.title} imgSrc={item.src} />))}
      </div>
    </div>
  );
}

export default App;
