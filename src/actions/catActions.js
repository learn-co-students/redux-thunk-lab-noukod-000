function fetchCats(){
    // fetch('http://localhost:4000/db')
    // .then(response => response.json())
    // .then(jsonResponse=>jsonResponse.images)
    // .then(cats => {
    //     return { type: 'FETCH_CATS', payload:cats }
    // })
    return (dispatch) => {
        dispatch({ type: "LOADING_CATS" })
        return fetch('http://localhost:4000/db')
                .then(response => response.json())
                .then(jsonResponse=>jsonResponse.images)
                .then(cats => dispatch({ type: 'FETCH_CATS', payload:cats }));
    }
  
}

export { fetchCats };