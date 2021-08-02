import NewsActionTypes from "./news.types";

const INITIAL_STATE = {
    news:null,
    errorMessage:undefined,
    content:'',
    title:'',
};

const NewsReducer = (state=INITIAL_STATE,action)=>{
    switch(action.type){
        case NewsActionTypes.FETCH_NEWS_START:
            return{
                ...state,
            }
        case NewsActionTypes.FETCH_NEWS_SUCCESS:
            return{
                ...state,
                news:action.payload,
            }
        case NewsActionTypes.FETCH_NEWS_FAILURE:
            return{
                ...state,
                errorMessage:action.payload
            }
        case NewsActionTypes.CONTENT:
            return{
                ...state,
                content:action.payload
            }
        case NewsActionTypes.TITLE:
            return{
                ...state,
                title:action.payload
            }
        default:
            return state;
    }
}


export default NewsReducer;