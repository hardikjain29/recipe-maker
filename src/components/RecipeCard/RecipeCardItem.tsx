import React from 'react';
import { Image, Recipe } from '../../commonTypes/RecipeTypes';
import './RecipeCard.css';

interface Props {
  recipe: Recipe,
  images: Record<string, Image>,
  onRecipeClicked: (recipeId: string) => void,
}

const RecipeCardItem: React.FC<Props> = ({ recipe, images, onRecipeClicked }) => {
  return (
    <div className="recipe-card__item">
      <img className="recipe-card__item-img" src={images[recipe.image]?.file?.url} alt={recipe.title} />
      <div className="recipe-card__item-content">
        <h1 className="recipe-card__item-header">{recipe.title}</h1>
        <button onClick={() => onRecipeClicked(recipe.id)} className="recipe-card__item-btn">Read more</button>
      </div>
    </div>
  )
}

export default RecipeCardItem;