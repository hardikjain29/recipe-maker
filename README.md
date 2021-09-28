# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.

1) There is a container called RecipeMaker which holds all the business logic.
2) This container has 2 components RecipeCard which shows all the previews of recipes with URL and title as mentioned in the problem statement and a RecipeDetails component which shows all the details of a recipe.
3) RecipeDetails component is rendered in a Modal for now, but I think it would be better to have it's own page, since if the user wants to share that recipe with anyone they can do it. Also it will help to SEO an entire page of recipe.

To faciliate this, we could use react-router, and just change the RecipeMaker component to have 2 routes, hence RecipeDetails is in the RecipeMaker container, so in future if we want to bring routes, we can just remove the Modal with a very minimal change.
```
<Switch>
  <Route exact path="/">
    <RecipeCard />
  </Route>
  <Route path="/:recipeId">
    <RecipeDetails />
  </Route>
<Switch>
```
Given the time constraint of 5 hours, I couldn't implement this.

4) The response we get from the API's is transformed to a cleaner and efficient data model. Transform done in `utility/recipeData.ts`. This helps in searching anything in O(1) complexity
```
{
  recipes: {
    '1': {
      id: '1',
      title: 'Tofu Saag Paneer',
      description: 'Tofu Saag Paneer',
      calories: '23',
      image: '12',
      chef: '2',
      tags: ['1','2']
    }
  },
  images: {
    '12': {
      id: '12',
      title: 'Hero 154',
      file: {
        url: '//images.ctfassets.net/kk2bw5ojx476/48S44TRZN626y4Wy4CuOmA/9c0a510bc3d18dda9318c6bf49fac327/SKU1498_Hero_154__2_-adb6124909b48c69f869afecb78b6808-2.jpg',
      }
    }
  },
  tags: {
    '1': {
      id: '1',
      name: 'Gluten free'
    },
    '2': {
      id: '2',
      name: 'Vegan'
    }
  },
  chefs: {
    '2': {
      id: '2',
      name: 'Jony Chives'
    }
  }
}
```

5) The project is made using Typescript, all the types are present in their places and common types are in the commonTypes folder.
6) There is no loading state in the RecipeMaker currently, we could add that in the useState when we call the api.
7) The utility folder contains a common Contentful fetch, for which any api call to contentful can reside here.
8) Due to time constraint, I couldn't add server side rendering, If I had to do, I would create a server folder and a frontend folder, in `server/index.ts` take the public/index.html and call ReactDom server renderToString and take that HTML and send it with express. If we add routes, like I mentioned, instead of BrowserRouter, we will use StaticRouter and then pass context prop to it, to check if there is any redirect, so that we can redirect from server itself (res.redirect)

PS: When I first started out with React.js, https://github.com/hardikjain29/FoodMaker - This is the project I created. It takes all the ingredients and shows you recipes you can make with them! :)
