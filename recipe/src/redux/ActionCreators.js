import * as ActionTypes from './ActionTypes';
import {baseUrl} from '../shared/baseUrl';

// add comment
export const addComment = (comment) => ({
    
    
  // every action object should contain 'type'
  type: ActionTypes.ADD_COMMENT,
  
  // data to be carried in action object to reducers
  payload: comment
  
});

export const postComment = (dishId,name,comment) => (dispatch) => {

  const newComment = {
      dishId : dishId,
      name: name,
      comment: comment
  }
  newComment.date = new Date().toISOString();

  return fetch(baseUrl + 'comments', {
      method : 'POST',
      body: JSON.stringify(newComment),
      headers : {
          'Content-Type' : 'application/json'
      },
      credentials: 'same-origin'
  })
  .then(response => {
      if (response.ok) {
        return response;
      } else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    },
    error => {
          var errmess = new Error(error.message);
          throw errmess;
    })
    .then(response => response.json())
      .then(response => dispatch(addComment(response)))
      .catch(error => { 
          console.log('Post comments', error.message)
          alert("Comments could not be posted\nError: " + error.message); });    
  }


export const fetchDishes = () => (dispatch) => {

    dispatch(dishesLoading(true));

    return fetch(baseUrl + 'dishes')
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
    .then(response => response.json())
    .then(dishes => dispatch(addDishes(dishes)))
    .catch(error => dispatch(dishesFailed(error.message)));
}

export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING
});

export const dishesFailed = (errmess) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errmess
})

export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
});


export const fetchComments = () => (dispatch) => {    
  return fetch(baseUrl + 'comments')
  .then(response => {
      if (response.ok) {
        return response;
      } else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    },
    error => {
          var errmess = new Error(error.message);
          throw errmess;
    })
  .then(response => response.json())
  .then(comments => dispatch(addComments(comments)))
  .catch(error => dispatch(commentsFailed(error.message)));
};


export const commentsFailed = (errmess) => ({
  type: ActionTypes.COMMENTS_FAILED,
  payload: errmess
})

export const addComments = (comments) => ({
  type: ActionTypes.ADD_COMMENTS,
  payload: comments
});



// Veg
export const fetchVegDishes = () => (dispatch) => {

  dispatch(vegLoading(true));

  return fetch(baseUrl + 'veg')
  .then(response => {
      if (response.ok) {
        return response;
      } else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    },
    error => {
          var errmess = new Error(error.message);
          throw errmess;
    })
  .then(response => response.json())
  .then(vegs => dispatch(addVeg(vegs)))
  .catch(error => dispatch(vegFailed(error.message)));
}

export const vegLoading = () => ({
  type: ActionTypes.VEG_LOADING
});

export const vegFailed = (errmess) => ({
  type: ActionTypes.VEG_FAILED,
  payload: errmess
})

export const addVeg = (vegs) => ({
  type: ActionTypes.ADD_VEG,
  payload: vegs
});

// Non Veg
export const fetchNonVegDishes = () => (dispatch) => {

  dispatch(nonvegLoading(true));

  return fetch(baseUrl + 'nonveg')
  .then(response => {
      if (response.ok) {
        return response;
      } else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    },
    error => {
          var errmess = new Error(error.message);
          throw errmess;
    })
  .then(response => response.json())
  .then(nonvegs => dispatch(addNonVeg(nonvegs)))
  .catch(error => dispatch(nonvegFailed(error.message)));
}

export const nonvegLoading = () => ({
  type: ActionTypes.NONVEG_LOADING
});

export const nonvegFailed = (errmess) => ({
  type: ActionTypes.NONVEG_FAILED,
  payload: errmess
})

export const addNonVeg = (nonvegs) => ({
  type: ActionTypes.ADD_NONVEG,
  payload: nonvegs
});

// Desserts
export const fetchDessert = () => (dispatch) => {

  dispatch(dessertLoading(true));

  return fetch(baseUrl + 'dessert')
  .then(response => {
      if (response.ok) {
        return response;
      } else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    },
    error => {
          var errmess = new Error(error.message);
          throw errmess;
    })
  .then(response => response.json())
  .then(desserts => dispatch(addDessert(desserts)))
  .catch(error => dispatch(dessertFailed(error.message)));
}

export const dessertLoading = () => ({
  type: ActionTypes.DESSERT_LOADING
});

export const dessertFailed = (errmess) => ({
  type: ActionTypes.DESSERT_FAILED,
  payload: errmess
})

export const addDessert = (desserts) => ({
  type: ActionTypes.ADD_DESSERT,
  payload: desserts
});

// Drink
export const fetchDrink = () => (dispatch) => {

  dispatch(drinkLoading(true));

  return fetch(baseUrl + 'drink')
  .then(response => {
      if (response.ok) {
        return response;
      } else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    },
    error => {
          var errmess = new Error(error.message);
          throw errmess;
    })
  .then(response => response.json())
  .then(drinks => dispatch(addDrink(drinks)))
  .catch(error => dispatch(dessertFailed(error.message)));
}

export const drinkLoading = () => ({
  type: ActionTypes.DRINK_LOADING
});

export const drinkFailed = (errmess) => ({
  type: ActionTypes.DRINK_FAILED,
  payload: errmess
})

export const addDrink = (drinks) => ({
  type: ActionTypes.ADD_DRINK,
  payload: drinks
});

// Add Image

export const postImage = (name,author,image,category,description,preptime,cooktime,totaltime,ingredients,directions) => (dispatch) => {

  const newImage = {
    
    name,
    author,
    image ,
    category,
    description,
    preptime,
    cooktime,
    totaltime,
    ingredients,
    directions
  }

  return fetch(baseUrl + 'dishes', {
      method : 'POST',
      body: JSON.stringify(newImage),
      headers : {
          'Content-Type' : 'application/json'
      },
      credentials: 'same-origin'
  })
  .then(response => {
      if (response.ok) {
        return response;
      } else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    },
    error => {
          var errmess = new Error(error.message);
          throw errmess;
    })
    .then(response => response.json())
      .then(response => dispatch(addDish(response)))
      .then(response => alert('Successfully added new dish'))
      .catch(error => { 
          console.log('Adding New Dish : ', error.message)
          alert("dish could not be posted\nError: " + error.message); });    
  }

  export const addDish = (dish) => ({
    type: ActionTypes.ADD_DISH,
    payload: dish
});
