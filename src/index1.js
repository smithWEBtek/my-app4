import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MovieCard from './MovieCard'
import {Profile, Order} from './Profiles'
import Product from './Product'

const MOUNT1 = document.querySelector('#section1')
const MOUNT2 = document.querySelector('#section2')
const MOUNT3 = document.querySelector('#section3')
const MOUNT4 = document.querySelector('#section4')
const MOUNT5 = document.querySelector('#section5')
const MOUNT6 = document.querySelector('#section6')

ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(
  <Profile
    firstName= 'George'
    lastName= 'Costanza'
    tvshow= 'Seinfeld'
  />,
  MOUNT1
);

// ReactDOM.render(
//   <MovieCard
//     title="Wayne's World"
 
//     cities= {["Waltham", "Groton", "Assonet"]}
//     genres= {['Sci-Fi', 'ChickFlick', 'SitCom']}
//   />,
//   MOUNT2
// );

// const jurassicCities = ["Bao", "Catalona", "Botswanna"]
// ReactDOM.render(
//   <MovieCard 
//     title="Mad Max: Fury Road, starring George Costanza"
//     poster="http://image.tmdb.org/t/p/w342/kqjL17yufvn9OVLyXYpvtyrFfak.jpg"
//     genres={['Action', 'Adventure', 'Science Fiction', 'Thriller', 'Drama']}
//     cities={['Boston', 'San Francisco', 'Chicago', 'Atlanta', 'Ocala']}
//   />,
//   MOUNT3
// );

// ReactDOM.render(
//   <MovieCard
//     title="Jurassic World"
//     poster= {"http://image.tmdb.org/t/p/w342/jjBgi2r5cRt36xF6iNUEhzscEcb.jpg"}
//     cities= {jurassicCities}
//     genres= {['Sci-Fi', 'ChickFlick', 'SitCom']}
//   />,
//   MOUNT4
// );

// const orderInfo = {
//   customerName: "bob",
//   orderedAt: "3"
// }


// ReactDOM.render(
//   <Order 
//     cone='Sugar'
//     size='Small'
//     flavor='Vanilla'

//     customerName={orderInfo.customerName}
//     orderedAt={orderInfo.orderedAt}
//   />,
//   MOUNT5
// );

ReactDOM.render(
  <Product
    name="Dunder Mifflin"
    producer="PaperCo"
    color="white"
    weight={210}
  />,
  MOUNT6
);
