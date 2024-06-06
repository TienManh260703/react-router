import { Outlet } from "react-router-dom";


function Blog() {
    return (
        <>
            <h1>Blog</h1>
            <Outlet />
            {/* Muốn hiển thị trang con bên trong thì dùng Outlet 'note lại không mai sau quên"  */}
        </>
    )
}

export default Blog;