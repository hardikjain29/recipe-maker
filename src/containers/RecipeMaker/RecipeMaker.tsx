import React, { useState, useEffect } from 'react';
import RecipeCard from '../../components/RecipeCard/RecipeCard';
import { getRecipes } from '../../utility/contentfulFetch';
import { transformRecipeData } from '../../utility/recipeData';
import { RecipeData } from '../../commonTypes/RecipeTypes';

const RecipeMaker: React.FC = () => {
  const [recipeData, setRecipeData] = useState<RecipeData>({
    recipes: {},
    tags: {},
    chefs: {},
    images: {}
  } as RecipeData);

  useEffect(() => {
    const fetchRecipes = async () => {
      const recipes = await getRecipes();
      setRecipeData(transformRecipeData(recipes));
    }
    fetchRecipes();
  }, [])

  return (
    <RecipeCard recipeData={recipeData} />
  )
}

export default RecipeMaker;