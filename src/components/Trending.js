import React, { useState, useEffect } from 'react';

const Trending = () => {
    const [trendingNews, setTrendingNews] = useState([]);
    const API_KEY = "0c5e171021c74198b852039622758663";
    useEffect(() => {
        fetch(
          "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=" +
            API_KEY
        )
          .then((res) => res.json())
          .then((data) => setTrendingNews(data.articles))
      }, []);
    return ( 
        <div className="container d-flex">
            <div className="bg-primary p-1 text-light">Trending Now</div>
            <div className="p-1" style={{width: '60vw'}}>
                <marquee>
                {trendingNews.length > 0 
                        ? trendingNews.map((news, index) => (
                            <span key={index}>{news.title}{index < trendingNews.length - 1 && ' • '}</span>
                          ))
                        : 'Loading...'}
                </marquee>
            </div>
        </div>
     );
}
 
export default Trending;