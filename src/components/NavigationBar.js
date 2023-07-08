import React, { useState } from "react";

const NavigationBar = () => {
  const [index, setIndex] = useState(0);

  const colours = [
    '#2274A5',
    '#0A7147',
    '#162527',
    '#BF211E',
    '#FFE066'
  ];

  const handleClick = () => {
    if (index == 4) {
      setIndex(0)
    } else {
      setIndex(index + 1)
    }
  };

  const backgroundColor = () => {
    return {backgroundColor: colours[index]};
  };

  const textColour = () => {
    return (colours[index] == '#FFE066') ? {color: '#000000'} : {color: '#ffffff'}
  };

  return (
    <section className="hero is-small is-info" style={backgroundColor()} onClick={handleClick}>
      <div className="hero-body">
        <div className="container">
          <p className="title is-size-1" style={textColour()}>RecipeMiner</p>
          <p className="subtitle" style={textColour()}>
            curated recipe search
          </p>
        </div>
      </div>
    </section>
  );
};

export default NavigationBar;
