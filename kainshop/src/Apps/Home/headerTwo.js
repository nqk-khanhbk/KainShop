import "./Home.css";
import { Header } from "../../Components/assets/assets";
import { useState } from "react";
function HeaderTwo (){
    // Thiết lập ảnh đầu tiên làm ảnh mặc định
    const [activeIndex, setActiveIndex] = useState(0);
    const handleClick = (index) => {
         setActiveIndex(index);
      };
    return (
        <>
        {/* Header */}
        <div className="header">
            <div className="title">
                <h2>Sản phẩm của chúng tôi</h2>
                <div className="line"></div>
            </div>
            <div className="container">
                {Header.map ((item,index) =>(
                    <div onClick={() => handleClick(index)} className={`paner ${activeIndex === index ? 'active' : ''}`} key={index} style = {{backgroundImage:`url(${item.header_image})`}} >
                            <h3>{item.header_name}</h3>
                            <button>Buy Now</button>
          
                    </div>
                    
                ))}
            </div>
        </div>
        {/* end header */}
        </>
    )
}
export default HeaderTwo;