import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import {FetchAction, FetchActionTypes, FetchState} from "../types/types";

const initialState = {
    orders: [],
    isLoading: false,
    requestToken: '',
    publicKey: "aa7cbba087b84788bbfb6d5dc69e7465",
    privateKey: "26ef85ee8f304ba9af3975931a8b789f",
}

const rootReducer = (state: FetchState = initialState, action: FetchAction): FetchState => {
    switch(action.type) {
        case FetchActionTypes.FETCH_REQUEST_TOKEN:
            return {...state,requestToken: action.payload}
        case FetchActionTypes.FETCH_ORDERS:
            return {...state, orders: action.payload, isLoading: false}
        case FetchActionTypes.SET_IS_LOADING:
            return {...state, isLoading: action.payload}
        default:
            return state
    }
}

export const store = createStore(rootReducer,applyMiddleware(thunk));

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch