/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import "./App.css";
import MoviesList from './data/movies';


function App() {
  return (
    <div className="App">
      <section className="movie-list-section">
        <h1 css={css`
        text-align: center;
        `}>Movie List Section</h1>
        <MoviesList />
      </section>
    </div>
  );
}

export default App;
