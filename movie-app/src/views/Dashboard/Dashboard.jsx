import React, { useState, useEffect } from "react";
import MovieCards from "../../components/MovieCards/MovieCards";
import { useQuery } from "@tanstack/react-query";
import "./Dashboard.scss";
import Searchbar from "../../components/Searchbar/Searchbar";

const Dashboard = ({data}) => {
  const [movieList, setMovieList] = useState([]);
  const [searchedValue, setSearchedValue] = useState("");

  useEffect(() => {
    if (searchedValue.trim() === "") {
      setMovieList(data?.results);
    }
  }, [data]);

  useEffect(() => {
    if (searchedValue.trim() === "") {
      setMovieList(data?.results);
    }
  }, [searchedValue]);
  const handleSearchChange = (e) => {
    console.log("are you getting called?")
    if (searchedValue.trim() === "") {
      console.log('inside if')
      setMovieList(data?.results);
    } 
    else if (e.target.value.trim() !== "") {
      console.log("inside else")
      let filteredData = data?.results?.filter((d) =>
        d.original_title.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setMovieList(filteredData);
    }
  };
console.log("movieList",movieList)
  return (
    <>
      <div>
        <div className="title-search-container">
          <h2 className="section-title">Movies List</h2>
          {/* <input
            placeholder="Search movie title here"
            onChange={(e) => {
              setSearchedValue(e.target.value);
              handleSearchChange(e);
            }}
          /> */}
          <Searchbar
            placeholder="Search movie name"
            onChange={(e) => {setSearchedValue(e.target.value);handleSearchChange(e)}}
          />
        </div>

        <MovieCards movieList={movieList || []} />
      </div>
    </>
  );
};
export default Dashboard;