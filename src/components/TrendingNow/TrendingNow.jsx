import React, { useState, useEffect, useLayoutEffect } from 'react';
import './TrendingNow.css';
 
function TrendingNow({ data,onMovieClick }){
    
  const handleMovieClick = (video) => {
    onMovieClick(video);
  };



  return (
      <div className="trending_now_container">
    <h2>Trending Now</h2>

        <div className="trending_list">
          <ul>
            {data && data.TendingNow.map((video) => (
              <div key={video.Id} className="trending_item">
                <img
                  src={require('../../assets/'+video.CoverImage)}
                  alt={video.Title}
                  onClick={() => handleMovieClick(video)}
                />
              </div>
            ))}
            </ul>
        </div>
      </div>
  );
};

export default TrendingNow;
