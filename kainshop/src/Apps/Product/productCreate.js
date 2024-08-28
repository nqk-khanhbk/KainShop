import Modal from 'react-modal';
import { useEffect, useState } from "react";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import "./ProductFeck.css";
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
function ProductCreate (props){
    const {onReload} = props;
    const [showModel, setShowModel] = useState(false);
    const [data,setData]=useState({});
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
      },[]);
    // mở tab để thêm sp
    const openModal = () =>{
        setShowModel(true);
    }
    //đóng tab để thêm sp
    const closeModal = () =>{
        setShowModel(false);
    }
    // lấy thông tin từ form
    const handleSubmit = (e)=>{
        e.preventDefault();
        fetch(`http://localhost:4000/products`,{
            method:"POST",
            headers:{
                Accept:"application/json",
                "Content-Type":"application/json"
            },
            body:JSON.stringify(data)
        })
        .then(res =>res.json())
        .then(data =>{
            if(data){
                closeModal();
                // setShowModel(false);
                onReload();

                //show tbao thanh cong
                Swal.fire({
                    position: 'center',
                    icon: "success",
                    title: "Tạo mới sản phẩm thành công",
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
      };
    return (
        <>
        <button onClick={openModal} className="product-button">+Thêm sản phẩm</button>

        <Modal
            isOpen={showModel}    
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
        >
        <form onSubmit={handleSubmit}  className="product-form">
            <table>
                <thead>
                    <tr>
                        <td>Tiêu đề</td>
                        <td>
                            <input type="text" name="title" onChange={handleChange}/>
                        </td>
                    </tr>
                    <tr>
                        <td>Danh mục</td>
                        <td>
                            <select name="category"  onChange={handleChange}>
                                {dataCategory.map(item=>(
                                    <option key={item.id} value={item.name}>{item.name}</option>
                                ))}
                                
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>Giá</td>
                        <td>
                            <input type="text" name="price"  onChange={handleChange}/>
                        </td>
                    </tr>
                    <tr>
                        <td>Giảm giá</td>
                        <td>
                            <input type="text" name="discount"  onChange={handleChange}/>
                        </td>
                    </tr>
                    <tr>
                        <td>Số lượng còn lại</td>
                        <td>
                            <input type="text" name="stock"  onChange={handleChange}/>
                        </td>
                    </tr>
                    <tr>
                        <td>Đường dẫn ảnh</td>
                        <td>
                            <input type="text" name="image"  onChange={handleChange}/>
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
                            <button className="btn btn-cancel" onClick={closeModal}>Hủy</button>
                        </td>
                        <td>
                            <input type="submit" value="Tạo mới" className="btn btn-submit"/>
                        </td>
                    </tr>
                    
                    
                </thead>
            </table>
        </form>
      </Modal>
        </>
    )
}
export default ProductCreate;