import CategoryActionTypes from "./category.types";
import { APIKey } from "../news/news.action";


export const fetchCategorySuccess = (category)=>({
    type:CategoryActionTypes.FETCH_CATEGORIES_SUCCESS,
    payload:category,
});

export const fetchCategoryFailure = (error)=>({
    type:CategoryActionTypes.FETCH_CATEGORIES_FAILURE,
    payload:error,
});


export const fetchCategoriesStartAsync = (url)=>{
    return (dispatch)=>{
//   url=url.replace('http','https');

        fetch(`https://get.scrapehero.com/news-api/categories/?x-api-key=${APIKey}`)
        .then(response =>{
          if(response.status !== 200)
            throw new Error("Server responded with error");
          return response.json()
        }).then((data) =>{
            dispatch(fetchCategorySuccess(data))
        }).catch((err)=> dispatch(fetchCategoryFailure(err.message)))
            
    };
};

