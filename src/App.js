import Header from "./components/Header";
import Input from "./components/Input";
import Card from "./components/Card";
import cards from "./cards";
import "./App.css";

const createCards = (cardItem) => {
  return (
    <Card
      key={cardItem.id}
      title={cardItem.title}
    />
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <Input />
      {cards.map(createCards)}
    </div>
  );
}

export default App;
