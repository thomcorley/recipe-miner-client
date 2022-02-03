import React, { useState, useEffect } from "react";
// import axios from "axios";
import { Section, Container, Form } from "react-bulma-components";
import "bulma/css/bulma.min.css";
import _ from "lodash";
import "../styles/search-bar.css";
import recipes from "../data/grubdailyRecipes.json";
import RecipeCard from "./RecipeCard";

const SearchBar = () => {
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

      // TODO: watch the React course to find out why this is needed
      return () => {
        clearTimeout(timeoutId);
      }
    }
  }, [term]);

  const search = async () => {
    // const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
    //   params: {
    //     action: "query",
    //     list: "search",
    //     origin: "*",
    //     format: "json",
    //     srsearch: term,
    //   },
    // });

    setResults(_.sampleSize(recipes, 10));
  };

  const handleOnChange = (event) => {
    setTerm(event.target.value);
  };

  const renderedResults = results.map(result => {
    return <RecipeCard recipe={result} />
  });

  return (
    <div className="search-container">
      <Section>
        <Container className="inner-container">
          <Form.Field>
            <Form.Control>
              <Form.Input
                placeholder="search for a recipe"
                type="text"
                onChange={handleOnChange}
              />
            </Form.Control>
          </Form.Field>
        </Container>

        <Container className="inner-container">
          <div>
            {term && renderedResults}
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default SearchBar;
