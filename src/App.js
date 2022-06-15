import CardContainer from "./components/card-container/card-container";
import Header from "./components/header/header";
import data from "./data";
import "./app.css";

function App() {
  return (
    <div className="app">
      <Header />
      <CardContainer cards={data} />
    </div>
  );
}

export default App;
