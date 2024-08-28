import "./contact.css";
function Contact (){
    return (
        <>
        <div className="contact">
            <div className="container-contact">
                <div className="address">
                    <h2>Trụ sở chính Hà Nội</h2>
                    <p>KainShop CTTN một thành viên</p>
                    <p>Địa chỉ: Ngõ 216,Định công,Hoàng mai,Hà nội</p>
                    <p>Hotline:0963927337</p>
                    <p>Email:khanhbk0102@gmail.com</p>
                </div>
                <div className="contact-min">
                    <h2>Liên hệ</h2>
                    <form>
                        <div className="contact-one">
                            <div className="contact-name">
                                <label for="name">
                                    Họ và tên
                                    <span>*</span>
                                </label>
                                <input name="name" type="text" />
                            </div>
                            <div className="contact-tel">
                                <label for="tel">
                                    Số điện thoại
                                    <span>*</span>
                                </label>
                                <input name="tel" type="text" />
                            </div>
                        </div>
                        <div className="contact-two">
                            <label for="title">Tiêu đề</label>
                            <input name="title" type="text" />
                        </div>
                        <div className="contact-three">
                            <label for="content">Nội dung</label>
                            <textarea  name="content" maxLength = "500"></textarea>
                        </div>
                        <button className="button-contact">Gửi yêu cầu</button>

                    </form>
                    
                </div>
            </div>
        </div>
        </>
    )
}
export default Contact;