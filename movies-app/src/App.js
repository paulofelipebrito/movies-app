import { useEffect, useState } from 'react';
import Movie from './components/Movie';
import MovieService from './Services/MovieService';

function App() {
  const [movies, setMovies] = useState(['']);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(async () => {
    await getMovies();
  }, [])

  async function getMovies(){
    try{
      const moviesResp = await MovieService.listMovies();
      await setMovies(moviesResp.results);
    } catch(error){
      console.error(error);
    }
  }
  async function getMoviesBySearch(){
    try{
      const moviesResp = await MovieService.listMoviesBySearch(searchTerm);
      await setMovies(moviesResp.results);
    } catch(error){
      console.error(error);
    }
  }

  async function handlerSubmit(event){
    event.preventDefault();
    if(searchTerm){
      getMoviesBySearch();
    }

    setSearchTerm('');
  }
  function handleOnChange(event){
    setSearchTerm(event.target.value);
  }

  return (
    <>
      <header>
        <form onSubmit={handlerSubmit}>
          <input 
            className="search" 
            type="search" 
            placeholder="Search..."
            value={searchTerm}
            onChange={handleOnChange}            
            />
        </form>
      </header>
      <div className="movie-container">
        {movies.length > 0 && movies.map((movie, index) => (
        <Movie key={index   } {...movie}/>
        ))}
      </div>
    </>
  );  
    
    
}

export default App;
