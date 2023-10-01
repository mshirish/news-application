import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";
import { Button } from "@material-tailwind/react";
import Spinner from "./Spinner";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const getNews = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.selectedCountry}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
  };

  useEffect(() => {
    getNews();
    // eslint-disable-next-line
  }, [
    props.selectedCountry,
    props.category,
    props.apiKey,
    page,
    props.pageSize,
  ]);

  const handlePrevClick = () => {
    setPage((prev) => prev - 1);
  };

  const handleNextClick = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <>
      <div className="container mx-auto z-30 mb-5">
        <div className="text-2xl font-bold my-3 flex justify-center items-center">
          <h1 className="mr-2">{props.category.toUpperCase()} - </h1>
          {props.selectedCountry === "in" ? (
            <h1>INDIA</h1>
          ) : props.selectedCountry === "us" ? (
            <h1>USA</h1>
          ) : (
            <h1>AUSTRALIA</h1>
          )}
        </div>
        {loading && <Spinner />}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-2">
          {articles.map((element, index) => (
            <div className="col-md-4" key={index}>
              <NewsItem
                title={element.title ? element.title.slice(0, 45) : ""}
                description={
                  element.description ? element.description.slice(0, 88) : ""
                }
                urlToImage={
                  element.urlToImage ||
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/640px-Image_not_available.png"
                }
                url={element.url}
                author={element.author}
                date={element.publishedAt}
                source={element.source.name}
              />
            </div>
          ))}
        </div>
        <div className="flex justify-between">
          <Button
            disabled={page <= 1}
            onClick={handlePrevClick}
            className="bg-custom-color text-black"
          >
            &larr; Previous
          </Button>
          <Button
            disabled={page + 1 > Math.ceil(totalResults / props.pageSize)}
            onClick={handleNextClick}
            className="bg-custom-color text-black"
          >
            Next &rarr;
          </Button>
        </div>
      </div>
    </>
  );
};

News.defaultProps = {
  category: "general",
  pageSize: 6,
  apiKey: "f0dfd5c5ada44fdb999e20e3a1afe542",
};

News.propTypes = {
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
