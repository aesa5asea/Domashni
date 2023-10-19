import PropTypes from "prop-types";
import { Navigate, Outlet, redirect} from "react-router-dom"
import { getToken } from "./../config/StorageFunction"

export const PrivateRoute =((redirectPath="/login", children)) => {
    if(!getToken()){
        <Navigate to={redirectPath}/>
    } return children ? children : <Outlet/>
}

PrivateRoute.propTypes={
    redirectPath:PropTypes.string,
    children:PropTypes.element
}