import NewsActionTypes from "./news.types";

export const fetchNewStart = ()=>({
    type:NewsActionTypes.FETCH_NEWS_START,
});

export const fetchNewsSuccess = (news)=>({
    type:NewsActionTypes.FETCH_NEWS_SUCCESS,
    payload:news,
});

export const fetchNewsFailure = (error)=>({
    type:NewsActionTypes.FETCH_NEWS_FAILURE,
    payload:error,
});

export const dispatchContentOnCLick = (content)=>({
    type:NewsActionTypes.CONTENT,
    payload:content
});

export const dispatchTitleOnCLick = (title)=>({
    type:NewsActionTypes.TITLE,
    payload:title
});


export const APIKey = 'IHEwbeb7kN3f7I3Qizc1FqAJVexvcKUE';


export const fetchNewsStartAsync = (url)=>{
    return (dispatch)=>{
        
  url = (url===`http://get.scrapehero.com/news-api/news/?x-api-key=${APIKey}`)?`http://get.scrapehero.com/news-api/news/?x-api-key=${APIKey}`:`${url}&x-api-key=${APIKey}`
  url=url.replace('http','https');
        dispatch(fetchNewStart());

        fetch(`${url}`)
        .then(response =>{
          if(response.status !== 200)
            throw new Error("Server responded with error");
          return response.json()
        }).then((data) =>dispatch(fetchNewsSuccess(data.result))
        ).catch((err)=> dispatch(fetchNewsFailure(err.message)))
            
    };
};


