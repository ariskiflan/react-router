/** @format */
import { useNavigate } from "react-router-dom";

const Home = () => {
	const navigate = useNavigate() 
	const handleClick = () => {
		navigate('/about')
	}

	return (
		<div className="flex flex-col">
			<h1 className="text-3xl">Welcome to Home Page</h1>
			<button onClick={handleClick} className='bg-slate-400 px-4 py-2 rounded-lg text-sm'>
				Go To About Page
			</button>
		</div>
	);
};

export default Home;
