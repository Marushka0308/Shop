import {Link} from "react-router-dom";
const NotFound = () => {
    return (
        <>
            <h1>404 Error Page not found</h1>
            <Link to = "/">Redirect to home</Link> 
        </>
    );

}
export default NotFound;