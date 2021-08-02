import SourceActionTypes from "./source.types";

const INITIAL_STATE = {
    source:null,
    sourceError:undefined,
};

const SourceReducer = (state=INITIAL_STATE,action)=>{
    switch(action.type){
        case SourceActionTypes.FETCH_SOURCE_SUCCESS:
            return{
                ...state,
                source:action.payload
            }
        case SourceActionTypes.FETCH_SOURCE_FAILURE:
            return{
                ...state,
                sourceError:action.payload
            }
        default:
            return state;
    }
}


export default SourceReducer;