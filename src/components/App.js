import React from "react";
import "bulma/css/bulma.min.css";
import NavigationBar from "./NavigationBar";
import Search from "./Search";

const App = () => {
  return (
    <div className="has-text-centered">
      <NavigationBar />
      <Search />
    </div>
  )
};

export default App;
