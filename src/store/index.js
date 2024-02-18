import { applyMiddleware, compose, createStore } from "redux";
import { rootReducer } from "./root-reducer";
import { thunk, withExtraArgument } from 'redux-thunk';
import axios from "axios";
import * as api from '../config';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(
            withExtraArgument({
                client: axios,
                api
            })
        )
    )
);

export { store }