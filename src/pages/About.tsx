import { Outlet, Link } from "react-router-dom";

const About = () => {
	return (
		<div>
			<h1>Tentang kami</h1>
			<Link to='team'>Tim Kami</Link>
			<Outlet/>
		</div>
	);
};

export default About;
