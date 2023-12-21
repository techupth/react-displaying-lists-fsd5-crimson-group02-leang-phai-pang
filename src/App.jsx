import "./App.css";
import { MoviesList } from "./components/MovieList";

function App() {
  return (
    <div className="App">
      <section className="movie-list-section">
        <MoviesList />
      </section>
    </div>
  );
}

export default App;
