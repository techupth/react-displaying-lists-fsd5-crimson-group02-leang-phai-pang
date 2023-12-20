import movies from "../data/movies";

function MoviesList() {
  const movieList = movies;
  console.log(movieList);
  return (
    <div className=" ">
    {movieList.map((item, index) => (
        <div
          key={index}
          className="w-[520px] h-[265px] rounded-[10px] bg-[#FFF] shadow-lg text-black text-[20px] flex p-[18px] w-100% ml-auto mr-auto mt-4 border-[1px]"
        >
          <div className="rounded-[10px] w-[100px] h-[100px] bg-slate-400 mr-[20px]">
            <img
              src={item.image}
              alt={item.title}
              className="rounded-[10px] w-[100px] h-[100px] object-cover"
            />
          </div>
    
          <div>
            <p>{item.title}</p>
            <p className="mt-2">{item.year}</p>
            <p className="mt-2">{item.runtime}</p>
            <div className="flex gap-3 mt-2">
              <p>Genres:</p>
              {item.genres.map((genre, index) => (
                <div key={index} className="p-[5px] bg-[#EAAC99] rounded-lg">
                  <p>{genre}</p>
                </div>
              ))}
            </div>
            <p className="mt-2">IMDB Ratings: {item.imdbRating}</p>
            <p className="mt-2">IMDB Votes: {item.imdbVotes}</p>
          </div>
        </div>
      ))}
      </div>
      );

}

export default MoviesList;
