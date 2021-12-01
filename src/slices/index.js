import { combineReducers } from "redux";

import restaurantsReducer from './restaurants'
import listEndReducer from "./listEnd";

const rootReducer = combineReducers({
    restaurants: restaurantsReducer,
    listEnd: listEndReducer,
})

export default rootReducer;