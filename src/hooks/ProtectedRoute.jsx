import {Navigate,Outlet} from 'react-router-dom'

export const ProtectedRoute = (user,redirectTo,children)=>{

    if(user==null) return <Navigate  to={redirectTo} replace/>
    return children?children:<Outlet/>

}



