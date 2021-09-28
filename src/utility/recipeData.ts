type Entry = {
  fields: Record<string, any>
  sys: Record<string, any>
}

type RecipeDataResponse = {
  items: Array<Entry>
  includes: {
    Asset: Array<Entry>,
    Entry: Array<Entry>
  }
}

export const transformRecipeData = (recipeData: RecipeDataResponse) => {
  const recipes = transformRecipes(recipeData.items);

  const tagEntries: Array<Entry> = [];
  const chefEntries: Array<Entry> = [];

  recipeData.includes.Entry.forEach((entry) => {
    if (entry.sys?.contentType?.sys?.id === 'chef') {
      chefEntries.push(entry);
    } else { // Assuming for now, only chef and tags are there in includes
      tagEntries.push(entry);
    }
  })

  const tags = transformTagsOrChefsOrImages(tagEntries);
  const chefs = transformTagsOrChefsOrImages(chefEntries);
  const images = transformTagsOrChefsOrImages(recipeData.includes.Asset);

  return {
    recipes,
    tags,
    chefs,
    images,
  }
}

const transformRecipes = (recipes: Array<Entry>) => {
  return recipes.reduce((recipeObject, { sys, fields }) => ({
    ...recipeObject,
    [sys.id]: {
      id: sys.id,
      title: fields.title,
      description: fields.description,
      calories: fields.calories,
      image: fields.photo.sys.id,
      chef: fields.chef?.sys?.id || {},
      tags: fields.tags?.map((tag: Entry) => tag.sys.id) || []
    }
  }), {});
}

const transformTagsOrChefsOrImages = (items: Array<Entry>) => {
  return items.reduce((itemObject, { sys, fields }) => ({
    ...itemObject,
    [sys.id]: {
      id: sys.id,
      ...fields
    }
  }), {})
}