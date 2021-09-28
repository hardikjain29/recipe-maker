import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import RecipeCard from '../../components/RecipeCard/RecipeCard';
import RecipeDetails from '../../components/RecipeDetails';
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeRecipeId, setActiveRecipeId] = useState('');

  const onRecipeClicked = (recipeId: string) => {
    setIsModalOpen(true);
    setActiveRecipeId(recipeId);
  }

  const activeRecipe = recipeData.recipes[activeRecipeId] || {};

  useEffect(() => {
    const fetchRecipes = async () => {
      const recipes = await getRecipes();
      setRecipeData(transformRecipeData(recipes));
    }
    fetchRecipes();
  }, [])

  return (
    <>
      <RecipeCard recipeData={recipeData} onRecipeClicked={onRecipeClicked} />
      <Modal // This can get removed if we use react router
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Recipe Details"
      >
        <img className="modal-close-btn" onClick={() => setIsModalOpen(false)} src="https://img.icons8.com/material-rounded/24/000000/multiply.png" alt="close" />
        <RecipeDetails // All these props don't need to be sent if we use react-router since when supplied with the id, it can fetch it's own Entry from /entry API
          image={recipeData.images[activeRecipe.image]?.file?.url}
          title={activeRecipe.title}
          tags={activeRecipe.tags?.map((tag) => recipeData.tags[tag].name) || []}
          description={activeRecipe.description}
          calories={activeRecipe.calories}
          chef={activeRecipe.chef ? recipeData.chefs[activeRecipe.chef]?.name : ''}
        />
      </Modal>
    </>
  )
}

export default RecipeMaker;