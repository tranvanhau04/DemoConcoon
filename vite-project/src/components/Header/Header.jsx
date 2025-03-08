import { useState } from "react";
import "./Header.css";
import LoginForm from "../../pages/LogIn/LogIn";
import { Link } from "react-router-dom";
import SidebarCocoon from "../Sidebar/SidebarCocoon";

function Header() {
    const [showLogin, setShowLogin] = useState(false);
    const [showSidebar, setShowSidebar] = useState(false);

    return (
        <>
            <header className="header d-flex justify-content-between align-items-center px-4 py-2 bg-light">
                <div className="header-left d-flex align-items-center gap-3">
                    <input type="text" className="form-control btn-search" placeholder="Tìm kiếm..." style={{ width: "200px" }} />
                    <nav className="d-flex gap-3">
                        <a href="#" className="text-dark fw-bold">Sản phẩm</a>
                        <a href="#" className="text-dark fw-bold" onClick={() => setShowSidebar(true)}>Cocoon</a>
                        <a href="#" className="text-dark fw-bold">Bài viết</a>
                    </nav>
                </div>
                <div className="header-mid d-flex align-items-center gap-3">
                    <a href="#" className='logo-link'>
                        <img src="/images/logoCocoon.svg" alt="" />
                    </a>
                </div>
                <div className="header-right d-flex align-items-center gap-3">
                    <a href="#" className="text-dark fw-bold" onClick={() => setShowLogin(true)}>Đăng nhập</a>
                    <a href="#" className="text-dark fw-bold">Liên hệ</a>
                    <a href="#" className="text-dark fw-bold">Giỏ hàng (1)</a>
                </div>
            </header>

            {showLogin && <div className="overlay" onClick={() => setShowLogin(false)}></div>}
            {showLogin && (
                <div className="modal-container">
                    <LoginForm setShowLogin={setShowLogin} />
                </div>
            )}

{showSidebar && <div className="overlay" onClick={() => setShowSidebar(false)}></div>}
<SidebarCocoon show={showSidebar} onClose={() => setShowSidebar(false)} />

        </>
    );
}

export default Header;
