/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import movies from "../data/movies";

export function MoviesList() {
  let result;
  return (result = movies.map((item, index) => {
    return (
      <dev
        key={index}
        className="movie-card"
        css={css`
          display: flex;
          flex-direction: row;
          justify-content: center;
          width: 400px;
          height: 250px;
          flex-shrink: 0;
          border-radius: 10px;
          background: #fff;
          margin-top: 10px;
          box-shadow: 0px 4px 40px rgba(145, 124, 124, 0.25);
        `}
      >
        <div
          css={css`
            display: flex;
          `}
        >
          <img
            src={item.image}
            css={css`
              width: 103px;
              height: 100px;
              border-radius: 10px;
              object-fit: cover;
              flex-shrink: 0;
              margin-right: 20px;
              margin-top: 15px;
            `}
          />
        </div>
        <div
          className="movie-data-con"
          css={css`
            display: flex;
            flex-direction: column;
            // justify-item: center;
            justify-content: space-between;
            align-items: flex-start;
            width: 231px;
            height: 211px;
            flex-shrink: 0;
            color: black;
            margin-top: 15px;

            color: #181818;
            font-family: Kanit;
            font-size: 20px;
            font-style: normal;
            font-weight: 400;
            line-height: 18px; /* 90% */
          `}
        >
          <div className="text-title" css={css``}>
            Title: {item.title}
          </div>
          <div css={css``}>Year: {item.year}</div>
          <div css={css``}>Runtime: {item.runtime}</div>
          <div css={css``}>Director: {item.director}</div>
          <div
            css={css`
              display: flex;
              flex-direction: row;
              justify-content: center;
              align-items: center;
            `}
          >
            <div
              css={css`
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
              `}
            >
              Genres:
              <div
                css={css`
                  display: flex;
                  flex-direction: row;

                  color: #000;
                  font-family: Kanit;
                  font-size: 16px;
                  font-style: normal;
                  font-weight: 400;
                  line-height: 18px; /* 112.5% */
                `}
              >
                <div
                  css={css`
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 68px;
                    height: 27px;
                    flex-shrink: 0;
                    border-radius: 10px;
                    background: #eaac99;
                    margin: 0px 2px;
                    padding: 0px 8px;
                  `}
                >
                  {item.genres[0]}
                </div>
                <div
                  css={css`
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 68px;
                    height: 27px;
                    flex-shrink: 0;
                    border-radius: 10px;
                    background: #eaac99;
                    margin: 0px 4px;
                    padding: 0px 8px;
                  `}
                >
                  {item.genres[1]}
                </div>
              </div>
            </div>
          </div>

          <div css={css``}>IMDB Rating: {item.imdbRating}</div>
          <div css={css``}>IMDB Votes: {item.imdbVotes}</div>
        </div>
      </dev>
    );
  }));
}
