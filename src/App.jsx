import { useEffect, useState } from 'react';
import './App.css';
import MainMenu from './components/MainMenu/MainMenu';
import jsonData from './data/data.json'
import TrendingNow from './components/TrendingNow/TrendingNow';
import FeaturedVideo from './components/FeaturedVideo/FeaturedVideo';

function App() {
  const [data, setData] = useState();
  useEffect(() => {
    const data_movies = sessionStorage.getItem('movies');
    if (data_movies) {
      setData(JSON.parse(data_movies));
    } else {
      const fetchData = async () => {
        try {
          setData(jsonData);
          sessionStorage.setItem('movies', JSON.stringify(jsonData));
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      fetchData();
    }
  }, [])
  
  const [backgroundVideoUrl, setBackgroundVideoUrl] = useState(jsonData.Featured);

  const handleMenuClick = (item) => {
    const items = document.querySelectorAll('.menu_item');
    items.forEach(item=>item.style.background = 'transparent');
    item.style.background = '#3b486d';
    // navigate to selected page...
  };

  const handleMovieClick = (movie) => {
    setTimeout(() => {
      setBackgroundVideoUrl(movie);
    }, 2000);
    const data_movies = JSON.parse(sessionStorage.getItem('movies'));
    const new_TendingNow = data_movies.TendingNow.filter(item => item.Id !== movie.Id);
    new_TendingNow.unshift(movie)
    data_movies.TendingNow = new_TendingNow
    sessionStorage.setItem('movies', JSON.stringify(data_movies));
    console.log(JSON.parse(sessionStorage.getItem('movies')));
  };

  return (
    <div>
    <MainMenu onMenuClick={handleMenuClick} />
    <main>
      <FeaturedVideo selectedMovie={backgroundVideoUrl} onMovieClick={handleMovieClick} />
      <TrendingNow data={data} onMovieClick={handleMovieClick} />
    </main>
  </div>
  );
}

export default App;



