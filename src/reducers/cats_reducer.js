function catsReducer(state = {loading: false, images: []}, action) {
  switch (action.type) {

    case 'LOADING_CATS':
      return {...state, loading: true}

    case 'FETCH_CATS':
      return {loading: false, images: action.cats}

    default:
      return state;
  }
};
