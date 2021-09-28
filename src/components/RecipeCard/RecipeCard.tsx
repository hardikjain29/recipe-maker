import React from 'react';
import RecipeCardItem from './RecipeCardItem';
import { RecipeData } from '../../commonTypes/RecipeTypes';
import './RecipeCard.css';

interface Props {
  recipeData: RecipeData,
  onRecipeClicked: (recipeId: string) => void,
}

const RecipeCard: React.FC<Props> = ({ recipeData: { recipes, images }, onRecipeClicked }) => {
  return (
    <div className="recipe-card">
      {
        Object.values(recipes).map((recipe) => (
          <RecipeCardItem
            key={recipe.id}
            recipe={recipe}
            onRecipeClicked={onRecipeClicked}
            images={images}
          />
        ))
      }
    </div>
  )
}

export default RecipeCard;