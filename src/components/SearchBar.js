import React, { useState, useEffect } from "react";
import axios from "axios";
import "bulma/css/bulma.min.css";
import "../styles/search-bar.css";
import { Section, Container, Form } from "react-bulma-components";

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

      return () => {
        clearTimeout(timeoutId);
      }
    }
  }, [term]);

  const search = async () => {
    const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
      params: {
        action: "query",
        list: "search",
        origin: "*",
        format: "json",
        srsearch: term,
      },
    });

    setResults(data.query.search);
  };

  const handleOnChange = (event) => {
    setTerm(event.target.value);
  };

  const recipes = ["apples", "bananas", "oranges"];

  const renderedResults = results.map(result => {
    return (
      <a href={`https://en.wikipedia.org?curid=${result.pageid}`} target="_blank">
        <h2>{result.title}</h2>
      </a>
    )
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
