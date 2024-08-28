import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { FaRegTrashAlt } from "react-icons/fa";
function DeleteProduct (props){
    const {item,onReload} = props;
    //ham delete
    const handleDelete =()=>{
        console.log(item.id);
        Swal.fire({
            title: "Bạn có chắc chắn muốn xóa?",
            text: "Xóa xong sẽ không khôi phục được!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Xóa",
            cancelButtonText:"Hủy"
          })
          .then((result) => {
            if (result.isConfirmed) {
                //khi đã xác nhận xóa thì vào đây
                fetch(`http://localhost:4000/products/${item.id}`,{
                    method:"DELETE"
                })
                .then(res =>res.json())
                .then(data =>{
                    onReload();
                })

                //thông báo xóa thành công
              Swal.fire({
                title: "Xong!",
                text: "Đã xóa thành công!",
                icon: "success"
              });
            }
          });
    }
    return (
        <>
        <button className="product__button-icons" onClick={handleDelete}> <FaRegTrashAlt /></button>
        </>
    )
}
export default DeleteProduct;