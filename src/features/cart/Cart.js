import { useSelector } from "react-redux";
import { getListQuantityProductPerName } from "../../app/selectors";

export const Cart = () => {
    const list = useSelector(getListQuantityProductPerName)

    return <div className="Selection">
        <h1>Vos produit sélectionné</h1>
        {
            list.filter(
                product => product.quantity !== 0
            ).map((product, index) => 
            <span key={index} className="SelectedProduct">
                {product.quantity} x {product.title}{" "}
            </span>
            )
        }
    </div>
}