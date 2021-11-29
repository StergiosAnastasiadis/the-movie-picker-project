import Header from "./components/Header";
import Input from "./components/Input";
import Cart from "./components/Cart";
import Card from "./components/Card";
import cards from "./cards";
import "./App.css";

const createCards = (cardItem) => {
  return (
    <Card
      key={cardItem.key}
      title={cardItem.title}
    />
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <Input />
      <Cart />
      {cards.map(createCards)}
    </div>
  );
}

export default App;
