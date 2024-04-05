import { useDispatch } from "react-redux"
import { ProductCard } from "../../common/components/ProductCard"
import * as ProductList from "../../common/models"
import { addProductThunk } from "../cart/cartSlice"

export const Menu = () => {
    const dispatch = useDispatch();
    
    return <div className="Menu">
        {
            Object.values(
                ProductList
            ).map(
                product => <ProductCard 
                key={product.title} 
                product={product} 
                onSelect={() => 
                    dispatch(addProductThunk(product))
                } />
            )
        }
    </div>
}