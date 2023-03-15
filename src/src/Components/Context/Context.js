import { createContext, useReducer } from "react";
// import { act } from "react-dom/test-utils";

export const CartContext = createContext();

export const Context = (props) => {

    const reducer = (state, action) => {
        switch (action.type) {
            case 'ADD':
                const temp = state.filter((item) => action.payload.id === item.id);
                if (temp.length > 0) {
                    return state;
                } else {
                    return [...state, action.payload]
                }
            case 'REMOVE':
                const tempstate = state.filter((item) => item.id !== action.payload.id)
                return tempstate

            default: return state;
        }

    }
    const [state, dispatch] = useReducer(reducer, [])
    const info = { state, dispatch };


    return (
        <CartContext.Provider value={info}>
            {props.children}
        </CartContext.Provider>
    )
}