import "./footer.css";
import { FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function Footer (){
    return (
        <>
        <footer className="footer">
        <div className="footer-container">
            <div className="footer-section about">
                <h3>KainShop.</h3>
                <p>Nếu bạn có câu hỏi gì hãy liên hệ ngay với chúng tôi.</p>
                <div className="social-icons">
                    <li><FaTiktok /></li>
                    <li><FaFacebook /></li>
                    <li><FaTwitter /></li>
                    <li><FaTiktok /></li>
                </div>
            </div>
            <div className="footer-section links">
                <h3>Company</h3>
                <div className="line"></div>
                <ul>
                    <li>About Us</li>
                    <li>Features</li>
                    <li>Contact</li>
                    <li>Latest News</li>
                </ul>
            </div>
            <div className="footer-section links">
                <h3>Support</h3>
                <div className="line"></div>
                <ul>
                    <li>FAQ's</li>
                    <li>Terms & Conditions</li>
                    <li>Privacy Policy</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div className="footer-section contact">
                <h3>Address</h3>
                <p><strong>Location:</strong>Ngõ 216,Định Công,Hoàng Mai,Hà Nội</p>
                <p><strong>Email:</strong> khanhbk0102@gmail.com</p>
                <p><strong>Phone:</strong> 0963927338</p>
            </div>
        </div>
        <div className="footer-bottom">
            <h2>Được tạo bởi KainShop</h2>
        </div>
    </footer>
        </>
    )
}
export default Footer;