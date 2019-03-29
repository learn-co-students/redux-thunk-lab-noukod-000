function catsReducer(state={loading:false,pictures:[]},action){
    switch(action.type){
        case "FETCH_CATS":
            console.log(action)
            return {loading:false,pictures:[...action.payload]};
        break;
        case "LOADING_CATS":
            console.log("LOADING ACTION DISPATCHED!")
            return {...state,loading:true}
        break;
        default:
            return state;
        break;
    }
}

export default catsReducer;