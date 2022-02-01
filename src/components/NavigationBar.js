import React from "react";
import "bulma/css/bulma.min.css";
import { Container, Hero, Heading } from "react-bulma-components";

const NavigationBar = () => {
  return (
      <Hero color="info" size="small">
        <Hero.Body>
          <Container>
            <Heading>RecipeMiner</Heading>
            <Heading
              size={4}
              weight="light"
              subtitle
              spaced
            >
              curated recipe search
            </Heading>
          </Container>
      </Hero.Body>
    </Hero>
  );
};

export default NavigationBar;
