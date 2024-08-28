import {useEffect, useState} from "react";
import "./product.scss";
import DeleteProduct from "./deleteProduct";
import EditProduct from "./editProduct";
import { assets } from "../../Components/assets/assets";

import ProductCart from "./productCart";
function ProductList (props){
    const {reloat} = props;
    const [editProduct,setEditProduct] = useState(false);
    const handReloadEdit = ()=>{
        setEditProduct(!editProduct);
    }
    //phân trang sản phẩm
    const limit = 8;
    //đặt 1 biến để khi click sang các trang,ví dụ như trang 1,2,3
    const [pageActive,setPageActive] = useState(0);

    //đặt 1 biến chứa số lượng các trang
    const [qualityPage,setQualityPage] = useState(0)
  
    const [product,setProduct] = useState([]);

    useEffect(()=>{
        const fetchApi = async()=>{
            fetch(`http://localhost:4000/products?_start=${pageActive*limit}&_limit=${limit}`)
            .then(res =>res.json())
            .then(data =>{
                setProduct(data);
                setQualityPage(Math.ceil(30/limit));
            })
        }
        fetchApi();
    },[pageActive,reloat,editProduct]);
    //khi click vào các trang
    const handleClick = (e)=>{
        setPageActive(e);
    }

    
    return (
        <>
         <div className="product__list">
         {product.map(item =>(
            <div className="product__item" key={item.id}>
                <div className="product__image">
                    <img src={item.image} alt={item.title} />
                    <div className="product__image-discount">-{item.discount}%</div>
                 </div>
                 <div className="product__title">
                    <h3> {item.title} </h3>
                    <img src={assets.rating_starts} alt = "anh"/>
                </div>
                 <h3 className="product__price">
                    <div className="product__price-new">
                        {(item.price * (100-item.discount)/100).toFixed(0)}$
                    </div>
                    <div className="product__price-old">{item.price}$</div>
                 </h3>
                 
                 <div className="product__button">
                    <EditProduct item={item} onReload={handReloadEdit}/>
                    <DeleteProduct item={item} onReload={handReloadEdit}/>
                    
                    <ProductCart item={item}/>
                 </div>
                 
           
            </div>
                ))}
            </div>

        <ul className="pagination">
            {[...Array(qualityPage)].map((_,index) => (
                <li className={`pagination__item ${index === pageActive ? 'active' : ''}`} key={index} onClick={() =>handleClick(index)}>{index+1}</li>             
            ))}
        </ul>
        </>
    )
}
export default ProductList;