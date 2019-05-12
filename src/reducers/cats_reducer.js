function catsReducer(state = {loading: false, cats: []}, action) {
  switch (action.type) {

    case 'LOADING_CATS':
      return {...state, loading: true}

    case 'FETCH_CATS':
      return {loading: false, cats: action.cats}

    default:
      return state;
  }
};
