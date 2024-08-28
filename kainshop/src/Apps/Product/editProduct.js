import { useEffect, useState } from "react";
import Modal from 'react-modal';
import "./ProductFeck.css";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { FaEdit } from "react-icons/fa";
const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
function EditProduct (props){
    const {item,onReload} = props;
    const [showModel, setShowModel] = useState(false);
    const [data,setData]=useState(item);
    const [dataCategory,setDataCategory] = useState([]);

      //goi API cho category
      useEffect(()=>{
        const fetchApi= ()=>{
            fetch(`http://localhost:4000/categories`)
            .then(ress =>ress.json())
            .then(dataCategory =>{
                
                setDataCategory(dataCategory);
            })
        }
        fetchApi();
      },[])

    const openModal = () =>{
        console.log(item);
        setShowModel(true);
      }

    const closeModal = () =>{
        setShowModel(false);
      }

      const handleSubmit = (e)=>{
        e.preventDefault();
        fetch(`http://localhost:4000/products/${item.id}`,{
            method:"PATCH",
            headers:{
                Accept:"application/json",
                "Content-Type":"application/json"
            },
            body:JSON.stringify(data)
        })
        .then(res =>res.json())
        .then(data =>{
            if(data){
                setShowModel(false);
                onReload();
                
                //show tbao thanh cong
                Swal.fire({
                    position: 'center',
                    icon: "success",
                    title: "Cập nhật sản phẩm thành công",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
            console.log(data);
        })
      }
      
      const handleChange = (e)=>{
        
        const name = e.target.name;
        const value = e.target.value;
        setData({
            ...data,
           [name]:value
        })
      }
    
    
    return (
        <>
        <button className="product__button-icons" onClick={openModal}> <FaEdit /> </button>

     <Modal
        isOpen={showModel}
        
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <form onSubmit={handleSubmit} className="product-form">
            <table>
                <thead>
                    <tr>
                        <td>Tiêu đề</td>
                        <td>
                            <input type="text" name="title" onChange={handleChange} value={data.title} />
                        </td>
                    </tr>
                    <tr>
                        <td>Danh mục</td>
                        <td>
                            <select name="category"  onChange={handleChange} value={data.category}>
                                {dataCategory.map(item=>(
                                    <option key={item.id} value={item.name}>{item.name}</option>
                                ))}
                                
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>Giá</td>
                        <td>
                            <input type="text" name="price"  onChange={handleChange} value={data.price}/>
                        </td>
                    </tr>
                    <tr>
                        <td>Giảm giá</td>
                        <td>
                            <input type="text" name="discount"  onChange={handleChange} value={data.discount}/>
                        </td>
                    </tr>
                    <tr>
                        <td>Số lượng còn lại</td>
                        <td>
                            <input type="text" name="stock"  onChange={handleChange} value={data.stock}/>
                        </td>
                    </tr>
                    <tr>
                        <td>Đường dẫn ảnh</td>
                        <td>
                            <input type="text" name="image"  onChange={handleChange} value = {data.image}/>
                        </td>
                    </tr>
                    <tr>
                        <td>Mô tả</td>
                        <td>
                            <textarea rows={4} name="description"  onChange={handleChange}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button onClick={closeModal} className="btn btn-cancel">Hủy</button>
                        </td>
                        <td>
                            <input type="submit" value="Cập nhật" className="btn btn-submit" />
                        </td>
                    </tr>
                    
                    
                </thead>
            </table>
        </form>
      </Modal>
        </>
    )
}
export default EditProduct;