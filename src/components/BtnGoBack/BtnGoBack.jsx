import { useNavigate } from "react-router-dom";

function BtnGoBack() {
    const navigate = useNavigate();
    // console.log(navigate);

    const handleClick = () => {
        navigate(-1);
        // -1 Lùi lại 1 bước 
        // -2 Lùi lại 2 bước ...
    }
    return (
        <>
            <button onClick={handleClick}>Trở lại</button>
        </>
    )
}
export default BtnGoBack;