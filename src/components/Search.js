import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/search-bar.css";
import RecipeCard from "./RecipeCard";
import SearchInput from "./SearchInput";

const Search = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (term === "") {
      setResults([]);
    };

    if (term && !results.length) {
      search();
    } else {
      const timeoutId = setTimeout(() => {
        if (term) {
          search();
        }
      }, 500)

      return () => {
        clearTimeout(timeoutId);
      }
    }
  }, [term]);

  const search = async () => {
    const { data } = await axios.get("http://localhost:2020/search.json", {
      params: {
        query: term
      },
    });

    setResults(data);
  };

  const handleOnChange = (event) => {
    setTerm(event.target.value);
  };

  const renderedResults = results.map(result => {
    return <RecipeCard recipe={result} key={`recipe-${result.id}`} />
  });

  return (
    <div className="search-container">
      <section className="section">
        <div className="container inner-container">
          <div className="field">
            <div className="control">
              <SearchInput handleChange={handleOnChange} />
            </div>
          </div>
        </div>

        <div className="inner-container">
          <div>
            {term && renderedResults}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Search;
