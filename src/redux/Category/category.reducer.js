import CategoryActionTypes from "./category.types";

const INITIAL_STATE = {
    categories:null,
    categoryError:undefined
};

const CategoryReducer = (state=INITIAL_STATE,action)=>{
    switch(action.type){
        case CategoryActionTypes.FETCH_CATEGORIES_SUCCESS:
            return{
                ...state,
                categories:action.payload
            }
        case CategoryActionTypes.FETCH_CATEGORIES_FAILURE:
            return{
                ...state,
                categoryError:action.payload
            }    
        default:
            return state;
    }
}


export default CategoryReducer;