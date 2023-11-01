import React from "react";
import Movie from './components/Movie/Movie';
import { movies } from './components/API/movieDummy';
import { AppContainer } from './components/Movie/Movie.style';

function App() {
  return (
      <AppContainer>
     {
        movies.results.map((item) => {
          return (
            <Movie 
            key={item.id}
            title={item.title}
            poster_path={item.poster_path}
            vote_average={item.vote_average}
            overview={item.overview}
            />
          )
        })
      }

      </AppContainer>
  );
}

export default App;
