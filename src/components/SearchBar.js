import { React, useState } from "react";
import "bulma/css/bulma.min.css";
import "../styles/search-bar.css";
import { Section, Container, Form } from "react-bulma-components";

const SearchBar = () => {
  const [term, setTerm] = useState("");

  const handleOnChange = (event) => {
    setTerm(event.target.value);
  };

  return (
    <div className="search-container">
      <Section>
        <Container>
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
      </Section>
    </div>
  );
};

export default SearchBar;
