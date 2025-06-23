import "./App.css";
import Counter from "./components/Counter.jsx";
import LiveInput from "./components/LiveInput.jsx";
import VisibilityToggle from "./components/VisibilityToggle.jsx";

function App() {
  return (
    <>
      <div style={{ padding: "10px", color: "black", fontFamily: "serif" }}>
        <h1>React State & Event Handling</h1>
        <Counter />
        <LiveInput />
        <VisibilityToggle />
      </div>
    </>
  );
}

export default App;
