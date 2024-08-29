import "./Home.css";
import { Headerthree } from "../../Components/assets/assets";

function HeaderThree (){
    return (
        <>
        <div className="headerThree">
           
                <div className="title">
                    <h2>Sản phẩm bản chạy nhất</h2>
                    <div className="line"></div>
                </div>
                <div className="content-list">
                    {Headerthree.map((item)=>(
                       <div className="content-item" key={item.id}>
                            <div className="image">
                                <img src={item.img} alt="img"/>
                            </div>
                            <div className="name">{item.title}</div>
                       </div>
                    ))}
                </div>
        </div>
        </>
    )
}
export default HeaderThree;