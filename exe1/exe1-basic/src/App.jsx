import "./App.css";
import Header from "./Header";
import Flawer from "./Flawer";
function App() {
  const flowers = [
    { id: 1, name: "חמניה", color: "yellow", c: "brown" },
    { id: 2, name: "שושנה", color: "red", c: "black" },
    { id: 3, name: "ורד", color: "pink", c: "darkred" },
    { id: 4, name: "כלנית", color: "purple", c: "white" },
    { id: 5, name: "רקפת", color: "violet", c: "green" },
  ];
  return (
    <div>
      <Header />
      <h1 style={{ textAlign: "center" }}>רשימת פרחים</h1>

      {flowers.map((flawer) => (
        <Flawer
          key={flawer.id}
          name={flawer.name}
          color={flawer.color}
          c={flawer.c}
        />
      ))}
    </div>
  );
}

export default App;
