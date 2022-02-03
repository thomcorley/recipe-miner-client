import React from "react";

const RecipeCard = ({recipe}) => {
  return (
    // TODO: add Bulma styles for a nicely designed recipe card with photo
    <a
      key={recipe.title}
      href={`https://www.grubdaily.com/recipes/${recipe.id}`}
      target="_blank"
    >
      <h2>{recipe.title}</h2>
    </a>
  )
};

export default RecipeCard;
