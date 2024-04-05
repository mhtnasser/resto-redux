import { useSelector } from "react-redux";
import { getProductList, getTotalOrder } from "../../app/selectors";

export const Total = () => {
    const list = useSelector(getProductList);

    const totalOrder = useSelector(getTotalOrder)

    return (
        <div className="TotalCommand">
        { 
            list.length === 0 ? 
            <div>Aucun produit sélectionné</div>
             : 
            <div>Total commande {totalOrder} euros</div>
        }
        </div>
    )
}