import React from 'react';
import './FeaturedVideo.css';

const FeaturedVideo = ({ selectedMovie, onMovieClick }) => {
  const { Category,TitleImage,ReleaseYear,MpaRating,Duration,Description,VideoUrl,CoverImage} = selectedMovie;

  return (
    <div className="featured-video">

      <div className="background-video">
        {
          VideoUrl ? <video className='background_movie' autoPlay muted loop src={VideoUrl}></video> : <img className='background_movie' src={require('../../assets/'+CoverImage)} alt='movie cover' />
        }
      </div>

      <div className='movie_content'>
          <label className="category">{Category}</label>
          <img src={require('../../assets/'+TitleImage)} alt="category" className="movie_title"/>
          <span className="info_movie">{ReleaseYear} {MpaRating} {Duration}</span>
          <p className="about_movie">{Description}</p>
      </div>
          <div className="control_btns">
            <button id='play'>Play</button>
            <button id='more_info'>More Info</button>
          </div>


    </div>
  );
};

export default FeaturedVideo;
