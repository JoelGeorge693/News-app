import { combineReducers } from "redux";
import NewsReducer from "./news/news.reducer";
import SourceReducer from "./Source/source.reducer";
import CategoryReducer from "./Category/category.reducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";



const persistConfig = {
    key: "root",
    storage,
    whitelist: ["newsState"],
  };

const rootReducer = combineReducers({
    newsState:NewsReducer,
    sourceState:SourceReducer,
    categoryState:CategoryReducer,
});

export default persistReducer(persistConfig, rootReducer);
