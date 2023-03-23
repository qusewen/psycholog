import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { reduserModalState } from "./modalReduser";


declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({
modal: reduserModalState

});

export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
)

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch;