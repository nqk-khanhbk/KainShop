import ProductList from "./productList";
import ProductCreate from "./productCreate";
import { useState } from "react";
function Product (){
    const [reloat,setReloat] = useState(false);

    const handleReloat =()=>{
        setReloat(!reloat);
    }
    return (
        <>
        <h2>Danh sách sản phẩm</h2>
        <ProductCreate onReload ={handleReloat}/>
        <ProductList reloat={reloat} />
        </>
    )
}
export default Product;