import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MovieCard from './MovieCard' 

const MOUNT1 = document.querySelector('#section1')
const MOUNT2 = document.querySelector('#section2')
const MOUNT3 = document.querySelector('#section3')
const MOUNT4 = document.querySelector('#section4')

ReactDOM.render(<App />, document.getElementById('root'));

const jurassicCities = ["Bao", "Catalona", "Botswanna"]
ReactDOM.render(
  <MovieCard 
    title="Mad Max: Fury Road, starring George Costanza"
    poster="http://image.tmdb.org/t/p/w342/kqjL17yufvn9OVLyXYpvtyrFfak.jpg"
    genres={['Action', 'Adventure', 'Science Fiction', 'Thriller', 'Drama']}
    cities={['Boston', 'San Francisco', 'Chicago', 'Atlanta', 'Ocala']}
  />,
  MOUNT3
);

ReactDOM.render(
  <MovieCard
    title="Jurassic World"
    poster= {"http://image.tmdb.org/t/p/w342/jjBgi2r5cRt36xF6iNUEhzscEcb.jpg"}
    cities= {jurassicCities}
    genres= {['Sci-Fi', 'ChickFlick', 'SitCom']}
  />,
  MOUNT2
);

ReactDOM.render(
  <MovieCard
    title="Wayne's World"
 
    cities= {["Waltham", "Groton", "Assonet"]}
    genres= {['Sci-Fi', 'ChickFlick', 'SitCom']}
  />,
  MOUNT1
);