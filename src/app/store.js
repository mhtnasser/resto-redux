import { applyMiddleware, combineReducers, configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "../features/cart/cartSlice";
import { ownerSlice } from "../features/owner/ownerSlice";
import { notesSlice } from "../features/notes/notesSlice";
import { thunk } from "redux-thunk"


let state = {
    owner: {},
    list: []
}

export const store = configureStore(
    {
        preloadedState: state,
        reducer: combineReducers({
            owner: ownerSlice.reducer,
            list: cartSlice.reducer,
            notes: notesSlice.reducer,
        }),
        // le widdleware intercepte les action avant de les transmettre aux reducers
        //middleware: (getDefaultMiddleware) =>
        //    getDefaultMiddleware().prepend([
        //        (store) => (next) => (action) => {
        //            console.log('Action', action);
        //            next(action);
        //        }
        //    ])
        
    },
    applyMiddleware(thunk)
)