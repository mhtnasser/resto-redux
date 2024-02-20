import { useEffect, useState } from "react";
import { useStore } from "react-redux";
import { SuperCremeux } from "../../common/models";

export const Cart = () => {
    const store = useStore();
    const [list, setList] = useState(store.getState().list)

    useEffect(() => {
        store.subscribe(() => setList(store.getState().list))
    })

    return <div className="Selection">
        <h1>Choisir son menu</h1>
        {
            list.map(
                (item, index) => <span key={index} className="SelectedProduct">
                    {item.title} {item.price} €
                </span>
            )
        }
        <div className="CartNavBar">
            <button onClick={() => store.dispatch({type: 'ADD_PRODUCT', payload: SuperCremeux})}>
                Ajouter un Super crémeux
            </button>
        </div>
    </div>
}