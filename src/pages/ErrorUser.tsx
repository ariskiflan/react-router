import { useRouteError } from "react-router-dom";

const ErrorUser = () => {
    const error:any = useRouteError()
	return (
		<div>
			<h1>Error!</h1> 
            <p>Terjadi error saat memuat data</p>
            <pre>{error.message}</pre>
		</div>
	);
};

export default ErrorUser;
