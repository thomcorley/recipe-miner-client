import React from "react";
import "bulma/css/bulma.min.css";
import { Container, Hero, Heading } from "react-bulma-components";

const NavigationBar = () => {
  return (
    <Hero color="info" size="small">
      <Hero.Body>
        <Container>
          <Heading size={2} >RecipeMiner</Heading>
          <Heading
            size={6}
            weight="light"
            subtitle
          >
            curated recipe search
          </Heading>
        </Container>
      </Hero.Body>
    </Hero>
  );
};

export default NavigationBar;
