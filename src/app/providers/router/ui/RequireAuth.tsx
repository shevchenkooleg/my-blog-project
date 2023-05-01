import { useSelector } from "react-redux";
import { getUserAuthData, getUserRoles, type UserRole } from "entities/User";
import { Navigate, useLocation } from "react-router-dom";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import { useMemo } from "react";

interface RequireAuthProps {
    children: JSX.Element
    roles?: UserRole[]
}

export function RequireAuth ({ children, roles }: RequireAuthProps) {
    const auth = useSelector(getUserAuthData);
    const location = useLocation();
    const userRoles = useSelector(getUserRoles)

    const harRequireRoles = useMemo(() => {
        if (!roles) {
            return true
        }

        return roles.some(requiredRole => {
            const hasRole = userRoles?.includes(requiredRole)
            return hasRole
        })
    }, [roles, userRoles])

    if (!auth?.id) {
        return <Navigate to={RoutePath.main} state={{ from: location }} replace />;
    }

    if (!harRequireRoles) {
        return <Navigate to={RoutePath.forbidden_page} state={{ from: location }} replace />;
    }

    return children;
}
