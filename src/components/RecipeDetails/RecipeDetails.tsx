import React from 'react';
import './RecipeDetails.css';

interface Props {
  image: string,
  title: string,
  description: string,
  tags: Array<string>,
  calories: string,
  chef: string,
}

const RecipeDetails: React.FC<Props> = ({ image, title, tags, description, calories, chef }) => {
  return (
    <div className="recipe-details">
      <div className="recipe-details__img-container">
       <img className="recipe-details__img" src={image} alt={title} />
      </div>
      <div className="recipe-details__content">
        <h1 className="recipe-details__title">{title}</h1>
        {
          tags.length ? (
            <div className="recipe-details__tags">
              {
                tags?.map((tag) => (
                  <div className="recipe-details__tag">{tag}</div>
                ))
              }
            </div>
          ) : null
        }
        <p className="recipe-details__description">{description}</p>
        <p className="recipe-details__calories">Calories: <span className="recipe-details__calories-count">{calories}Kcal</span></p>
        {
          chef ? (
            <p className="recipe-details__chef">Chef: {chef}</p>
          ) : null
        }
      </div>
    </div>
  )
}

export default RecipeDetails;