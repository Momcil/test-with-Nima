import { Link } from "react-router-dom";


function User(){
    return(
        <>
            <h2>User Page</h2>
            <input type="text" />
            <button>
                <Link to="/">Home</Link>
            </button>
        </>
    )

}


export default User