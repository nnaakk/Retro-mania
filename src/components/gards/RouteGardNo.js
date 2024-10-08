import { Navigate } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";

export const RouteGardNo = ({
    children
}) => {
    const { isAuthenticated } = useAuthContext()

    if (isAuthenticated) {

        return <Navigate to="/" />
    }

    return (
        <>
            {children}
        </>
    )
}