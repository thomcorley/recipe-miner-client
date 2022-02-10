import React, { useState, useEffect } from "react";
// import _ from "lodash";
import axios from "axios";
import { Section, Container, Form } from "react-bulma-components";
import "bulma/css/bulma.min.css";
import "../styles/search-bar.css";
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
    const { data } = await axios.get("http://localhost:2020/search.json", {
      params: {
        query: term
      },
    });
    console.log(data)
    setResults(data);
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
