import React from 'react';
import RecipeCardItem from './RecipeCardItem';
import { RecipeData } from '../../commonTypes/RecipeTypes';
import './RecipeCard.css';

interface Props {
  recipeData: RecipeData,
}

const RecipeCard: React.FC<Props> = ({ recipeData: { recipes, images } }) => {
  return (
    <div className="recipe-card">
      {
        Object.values(recipes).map((recipe) => (
          <RecipeCardItem
            key={recipe.id}
            recipe={recipe}
            images={images}
          />
        ))
      }
    </div>
  )
}

export default RecipeCard;