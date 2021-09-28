const space = 'kk2bw5ojx476';
const environment = 'master';
const accessToken = '7ac531648a1b5e1dab6c18b0979f822a5aad0fe5f1109829b8a197eb2be4b84c';

export const getRecipes = async () => {
  const recipeResponse = await fetch(`https://cdn.contentful.com/spaces/${space}/environments/${environment}/entries?access_token=${accessToken}&content_type=recipe&select=sys,fields`);
  const recipes = await recipeResponse.json();
  return recipes;
};

