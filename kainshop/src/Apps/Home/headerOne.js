import watch1 from "../../Components/assets/watch1.png";
import watch2 from "../../Components/assets/watch2.png";
import watch3 from "../../Components/assets/watch3.png";
import {useState} from "react";
import {ImageList} from "../../Components/assets/assets";
function HeaderOne (){
    const [imageId, setImageId] = useState(watch1);
    const [title, setTitle] = useState("Best & Smart Digital Products");
    const [description, setDescription] = useState(
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    );
    return (
        <>
        <div className = "header-one">
            <div className="container-home">
                <div className="section">
                    <div className="section-title">
                    <h1 className="title">
                        {title}
                    </h1>
                    <p className="description">
                        {description}
                    </p>
                    <button>Order now</button>
                    <div className="list">
                        {ImageList.map(item=>(
                            <div 
                                className="item" 
                                key={item.id}
                                onClick={() => {
                                    setImageId(
                                      item.id === 1 ? watch1 : item.id === 2 ? watch2 : watch3
                                    );
                                    setTitle(item.title);
                                    setDescription(item.description);
                                  }}
                                >
                                    <img src={item.img} alt="img" className="images"/>
                                    <div className="content">
                                        <div className="price">{item.price}</div>
                                        <div className="tag">{item.tag}</div>
                                    </div>
                            </div>
                        ))}
                    </div>
                    </div>
                    <div className="section-image">
                        <div className="center">
                            <img  src={imageId} alt="img"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default HeaderOne;