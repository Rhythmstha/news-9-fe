import React, { useState, useEffect } from "react";

const Headlines = () => {
  const [articles, setArticles] = useState([]);
  const API_KEY = "0c5e171021c74198b852039622758663";
  const handleArticleClick = (url) => {
    console.log(url);
    
    window.open(url, '_blank', 'noopener,noreferrer');
};


  useEffect(() => {
    fetch("https://newsapi.org/v2/top-headlines?sources=cnn&apiKey=" + API_KEY)
      .then((res) => res.json())
      .then((data) => {setArticles(data.articles); console.log(data.articles);
      });

      console.log(articles);
      
  }, []);
  return (
    <div className="container-fluid d-flex">
      <div className="parent">
        <div className="headline-div div1" style={{ backgroundImage: `url(${articles[0]?.urlToImage})`}}
        onClick={() => handleArticleClick(articles[0]?.url)}
        >
          <div className="source">{articles[0]?.source.name}</div>
          <div className="title">{articles[0]?.title}</div>
          <div className="d-flex">
            <div className="author">{articles[0]?.author}</div> • 
            <div className="publishedAt">{articles[0]?.publishedAt}</div>
          </div>
        </div>
        <div className="headline-div div2" style={{ backgroundImage: `url(${articles[1]?.urlToImage})`}}>
          <div className="source">{articles[1]?.source.name}</div>
          <div className="title">{articles[1]?.title}</div>
          <div className="d-flex">
            <div className="author">{articles[1]?.author}</div> • 
            <div className="publishedAt">{articles[1]?.publishedAt}</div>
          </div>
        </div>
        <div className="headline-div div3" style={{ backgroundImage: `url(${articles[2]?.urlToImage})`}}>
          <div className="source">{articles[2]?.source.name}</div>
          <div className="title">{articles[2]?.title}</div>
          <div className="d-flex">
            <div className="author">{articles[2]?.author}</div> • 
            <div className="publishedAt">{articles[2]?.publishedAt}</div>
          </div>
        </div>
        <div className="headline-div div4" style={{ backgroundImage: `url(${articles[3]?.urlToImage})`}}>
          <div className="source">{articles[3]?.source.name}</div>
          <div className="title">{articles[3]?.title}</div>
          <div className="d-flex">
            <div className="author">{articles[3]?.author}</div> • 
            <div className="publishedAt">{articles[3]?.publishedAt}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Headlines;
