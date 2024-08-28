import { useSelector } from "react-redux";
import "./cart.css";
import ItemCart from "./itemCart";
function ListCart (){
    const cart = useSelector(state => state.CartReduce);
    console.log(cart);
  
    return (
        <>
        <div className="cart">
            <div className="cart-items">
                <div className="cart-items-title">
                    <p>Image</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>
                <br />
                <hr />
                {cart.map(item =>(
                    <ItemCart  item={item} key={item.id}/>  
                ))}
            </div>
        </div>
        </>
    )
}
export default ListCart;