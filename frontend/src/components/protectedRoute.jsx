import { Navigate } from "react-router-dom";
import Cookies from 'js-cookie'

const protectedRouter=({children})=>{
 
    const token=Cookies.get("token")
   
    if (!token){
        return <Navigate to='/login' replace/>
    }

    return children


}

export default protectedRouter;