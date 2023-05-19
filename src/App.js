import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header text-center">
          <h1>Dictionary</h1>
        </header>
        <main>
          <h3>What word do you want to look up?</h3>
          <Dictionary />
        </main>
        <footer className="text-center">Coded by Liza Fernandez</footer>
      </div>
    </div>
  );
}

export default App;
