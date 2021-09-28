export type Tag = {
  id: string,
  name: string
}

export type Chef = {
  id: string,
  name: string,
}

export type Image = {
  id: string,
  title: string,
  file: {
    url: string,
  }
}

export type Recipe = {
  id: string,
  title: string,
  description: string,
  calories: string,
  image: string,
  chef?: string,
  tags?: Array<string> 
}

export interface RecipeData {
  recipes: Record<string, Recipe>,
  tags: Record<string, Tag>,
  chefs: Record<string, Chef>,
  images: Record<string, Image>,
}