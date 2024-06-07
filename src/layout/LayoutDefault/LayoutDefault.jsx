import { NavLink, Outlet } from "react-router-dom";
import "./LayoutDefault.scss"

const navLinkActive = (e) => {
    // console.log(e);
    return e.isActive ? "menu__link menu__link--active" : "";
}

function LayoutDefault() {
    return (
        <>
            <div className="layout-default">
                <header className="layout-default__header">
                    <div className="layout-default__logo">Logo</div>
                    <div className="menu">
                        <ul>
                            <li>
                                <NavLink to="/" className={navLinkActive}>
                                    Home
                                </NavLink>
                                {/* Giống Link nhưng nếu url trùng với Link thì tự động thêm class active */}
                            </li>
                            <li>
                                <NavLink to="/about" className={navLinkActive}>
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact" className={navLinkActive}>
                                    Contact
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/blog" className={navLinkActive}>
                                    Blog
                                </NavLink>
                                <ul className="menu__sub">
                                    <li>
                                        <NavLink to="/blog/news" className=
                                            {navLinkActive}>
                                            Blog News
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/blog/related" className=
                                            {navLinkActive}>
                                            Blog Related
                                        </NavLink>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <NavLink to="/info-user" className={navLinkActive}>
                                    Info User
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </header>
                <main className="layout-default__main">
                    <Outlet />
                    {/* Xác địng vị trí các componate được hiển thị */}
                </main>
                <footer className="layout-default__footer">
                    Fpt 2024
                </footer>
            </div>
        </>
    )
}

export default LayoutDefault;