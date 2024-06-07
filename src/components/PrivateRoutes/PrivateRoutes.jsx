import { Navigate, Outlet } from "react-router-dom";

function PrivateRoutes() {
    const isLogin = false;
    return (
        <>
            Private Router <br />
            {/* Sử dụng component Navigate để chuyển hướng trến 1 trang nào đo (Slide) */}
            {isLogin ? (<Outlet />) : (<> <Navigate to="/login" /> </>)}

        </>
    )
}
export default PrivateRoutes;