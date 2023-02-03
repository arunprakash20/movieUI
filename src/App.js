import {useEffect, useState} from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';
//f3c2d44b

const API_URL = 'http://www.omdbapi.com?apikey=f3c2d44b';

const m1 = 
    {
        "Title": "Remo",
        "Year": "2016",
        "imdbID": "tt6126294",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZjRjYWIxZjYtMDY0OS00ODE1LTk2ZWMtZjgwOGNiNjg0ZGFkXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_SX300.jpg"
    }
        

const App = () => {

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async(title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
    }

    useEffect(()=>{
        searchMovies('Remo');
    },[]);

    return (
        <div className='app'>
            <h1>MovieBuff</h1>
            <div className='search'>
                <input
                    placeholder="Search for movies"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img
                    src={SearchIcon}
                    alt='search'
                    onClick={() => searchMovies(searchTerm)}
                />
            </div>

        {movies?.length > 0
            ? (
                <div className='container'>
                    {movies.map((movie)=>(
                        <MovieCard movie={movie}/>
                    ))}
                </div>
            ) 
            : (
                <div className='empty'>
                    <h2>No movies found</h2>
                </div>
              )
        }

            
        </div>
    );
}

export default App;