import { useSelector,useDispatch } from "react-redux";
import "./cart.css";
import ListCart from "./listCart";
import { deleteAll } from "../../Action/cart";
import { NavLink } from "react-router-dom";
function Cart (){
    const cart = useSelector(state => state.CartReduce);

    const dispatch= useDispatch();
    //hàm tính tổng giá tiền
    const total = cart.reduce((sum,item)=>{
        const priceNew = ((item.info.price * (100 - item.info.discount) / 100)).toFixed(0);
        return sum + priceNew * item.quality
    },0);
    //hàm xóa tất cả sản phẩm trong giỏ hàng
    const handleDeleteAll = ()=>{
        dispatch(deleteAll());
    }
    return (
        <>
       <>
        {cart.length > 0 ? (
            <>
            <div >
                <div className="header">
                    <h2>Giỏ hàng</h2>
                    
                </div> 
                <ListCart />
                <div className="total">
                    Tổng tiền : 
                    <span> {total}$</span>
                </div>
                <div className="delete">
                     <button onClick={handleDeleteAll} className="deleteAll" >Xóa tất cả</button>
                </div>
            </div>
            </>
        ):(
            <> 
            <div className="empty-cart">
                <p>Chưa có đơn hàng nào trong giỏ.</p>
                <NavLink to="/">Khám phá sản phẩm</NavLink>
            </div>
            
            </>
        )}
        </>
        </>
    )
}
export default Cart;