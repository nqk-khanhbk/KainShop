import { FaCartPlus } from "react-icons/fa";
import {useDispatch,useSelector} from "react-redux";
import { addToCart,updateQuality } from "../../Action/cart";
function ProductCart (props){
    const {item} = props;
    const dispatch = useDispatch();
    const cart = useSelector(state =>state.CartReduce)
    const handleAddToCart = ()=>{
        if(cart.some(itemCart => itemCart.id === item.id)){
            dispatch(updateQuality(item.id));
        }
        else{
            dispatch(addToCart(item.id,item));
        }
    }
    return (
        <>
         <button onClick={handleAddToCart} className="product__button-icons"> <FaCartPlus /> </button>
        </>
    )
}
export default ProductCart;