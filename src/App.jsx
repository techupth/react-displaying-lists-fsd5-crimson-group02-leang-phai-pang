
import "./App.css";
import MoviesList from "./components/MoviesList";

function App() {
  return (
    <div className="App">
      <section className="movie-list-section">
        {/* Render Movie Lists Here */}
        <MoviesList/>
      </section>
    </div>
  );
}

export default App;
