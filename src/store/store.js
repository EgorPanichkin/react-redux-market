import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import { thunk } from "redux-thunk"; 
import { prodReducer } from "./prodReducer";
import { buyReducer } from "./buyReducer";

const rootReducer = combineReducers({
  products: prodReducer,
  buyProducts: buyReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))