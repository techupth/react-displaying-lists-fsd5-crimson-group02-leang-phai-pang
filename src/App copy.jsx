import { getByTitle } from "@testing-library/react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <section className="movie-list-section">
        {/* Render Movie Lists Here */}
      </section>
    </div>
  );
}

export default App;


//<div App>
//-----Background for Movie List   ----
// width: 1000px;
// height: 1428px;
// flex-shrink: 0;

//----Header Title  "Movie List Section"   flex ----
// color: #000;
// font-family: Kanit;
// font-size: 40px;
// font-style: normal;
// font-weight: 400;
// line-height: 18px; /* 45% */


//---   <div className="movie-card-container"><div>    flex flex-row----
// width: 400px;
// height: 250px;
// flex-shrink: 0;

// border-radius: 10px;
// background: #FFF;
// box-shadow: 0px 4px 40px 0px rgba(145, 124, 124, 0.25);

//<div><div>   flex
//  <img className="movie-image" type="image" />
// const imagePath = '<path-to-image>';  //Replace this with the actual path to your image
// <div
//   css={css`
//     width: 102px;
//     height: 100px;
//     flex-shrink: 0;
//     border-radius: 10px;
//     background: url(${imagePath}), lightgray 50% / cover no-repeat;
//   `}
// >
//   {/* Your component content */}
// </div>;



// ---------   Title   --------------



//---        <div className="movie-details" type="movie-detail"><div>   flex-col---
//---common ----  font ----
// color: #181818;
// font-family: Kanit;
// font-size: 20px;
// font-style: normal;
// font-weight: 400;
// line-height: 18px; /* 90% */

// "Title:"
// "Year:"
// "Runtime:"
// "Genres:"
// "IMDB Ratings:"
// "IMDB Votes"

// "Title:";
// display: flex;
// width: 231px;
// height: 15px;
// flex-direction: column;
// justify-content: center;
// flex-shrink: 0;

// "Year:";
// display: flex;
// width: 96px;
// height: 21px;
// flex-direction: column;
// justify-content: center;
// flex-shrink: 0;

// "Runtime:";
// display: flex;
// width: 96px;
// height: 21px;
// flex-direction: column;
// justify-content: center;
// flex-shrink: 0;


// "Genres:";
// display: flex;
// width: 96px;
// height: 21px;
// flex-direction: column;
// justify-content: center;
// flex-shrink: 0;

//genres-data  (2sets)
// width: 68px;
// height: 27px;
// flex-shrink: 0;
// border-radius: 10px;
// background: #EAAC99;



// "IMDB Ratings:";
// display: flex;
// width: 155px;
// height: 21px;
// flex-direction: column;
// justify-content: center;
// flex-shrink: 0;

// "IMDB Votes";
// display: flex;
// width: 150px;
// height: 21px;
// flex-direction: column;
// justify-content: center;
// flex-shrink: 0;




