import React from "react";
import "bulma/css/bulma.min.css";
import { Navbar } from "react-bulma-components";

const NavigationBar = () => {
  return (
    <Navbar>
      <Navbar.Brand>
        <Navbar.Item>
          <h1>Recipe Miner</h1>
        </Navbar.Item>
        <Navbar.Burger />
      </Navbar.Brand>
    </Navbar>
  );
};

export default NavigationBar;
