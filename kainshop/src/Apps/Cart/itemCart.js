import "./cart.css";
import { useDispatch } from "react-redux";
import { deleteItem,updateQuality } from "../../Action/cart";
import { useRef } from "react";
import { AiFillDelete } from "react-icons/ai";
function ItemCart (props){
    const {item}=props;
    const dispatch=useDispatch();
    const inputRef = useRef();
    //xóa đi 1 sản phẩm ở giỏ hàng
    const handleDelete = () =>{
       dispatch(deleteItem(item.id));
    }
    //hạ xuống 1 sản phẩm
    const handleUp = ()=>{
        dispatch(updateQuality(item.id));
        inputRef.current.value = parseInt(inputRef.current.value)+1;
    }
    //tăng lên 1 sản phẩm

    const handleDown = ()=>{
        if(item.quality > 1){
            dispatch(updateQuality(item.id,-1));
            inputRef.current.value = parseInt(inputRef.current.value)-1;
        }
        
    }
    return (
        <>
        <div> 
             <div className="cart-items-title cart-items-item">
                            <img src={item.info.image} alt="" />
                            <p>{item.info.title}</p>
                            <p>{(item.info.price * (100-item.info.discount)/100).toFixed(0)}$</p>
                            <p className="quality">
                                <button onClick={handleDown} >-</button>
                                <input ref={inputRef} defaultValue={item.quality} />
                                <button onClick={handleUp} >+</button>
                            </p>
                            <p>
                                  {item.quality * (item.info.price * (100-item.info.discount)/100).toFixed(0)}$
                            </p>
                            <p onClick={handleDelete} className="DeleteItem">
                                <AiFillDelete />
                            </p>
                        </div>
                         <hr/>
        </div>
        </>
    )
}
export default ItemCart;