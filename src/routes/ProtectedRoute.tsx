/** @format */

import { Navigate, Outlet } from 'react-router-dom';

interface ProtectedRouteProps {
	isAuthenticated: boolean;
	redirectPath?: string;
}

const ProtectedRoute = ({
	isAuthenticated,
	redirectPath = '/login',
}: ProtectedRouteProps) => {
	if (!isAuthenticated) {
		return <Navigate replace to={redirectPath} />;
	}

	return <Outlet />;
};

export default ProtectedRoute;
