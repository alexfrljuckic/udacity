import { useNavigate } from "react-router-dom";
import "../styling/ErrorPage.css"

const ErrorPage = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/");
    }
    return (
        <div className="section">
            <p className="error-msg">404 Page not Found :(</p>
            <div>
                <button onClick={() => handleClick()}>Go back to the login page</button>
            </div>

        </div>
    )
}

export default ErrorPage;