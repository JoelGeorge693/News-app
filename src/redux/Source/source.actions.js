import SourceActionTypes from "./source.types";
import { APIKey } from "../news/news.action";

export const fetchSourceSuccess = (source)=>({
    type:SourceActionTypes.FETCH_SOURCE_SUCCESS,
    payload:source,
});

export const fetchSourceFailure = (error)=>({
    type:SourceActionTypes.FETCH_SOURCE_FAILURE,
    payload:error,
});


export const fetchSourceStartAsync = (url)=>{
    return (dispatch)=>{
        // url = url.replace('http',"https");
        fetch(`https://get.scrapehero.com/news-api/sources/?x-api-key=${APIKey}`)
        .then(response =>{
          if(response.status !== 200)
            throw new Error("Server responded with error");
          return response.json()
        }).then((data) =>{dispatch(fetchSourceSuccess(data))}
        ).catch((err)=> dispatch(fetchSourceFailure(err.message)))
            
    };
};