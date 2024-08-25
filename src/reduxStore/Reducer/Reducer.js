import { combineReducers } from "redux";

import searchArticle from "../Action/ReducerAction";



const reducer = combineReducers({
    search: searchArticle,
});

export default reducer