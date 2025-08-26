import { ReactNode } from "react";
import { Link, NavLink } from "react-router-dom";

type LayoutProps = {
    children : ReactNode
}

const Layout = ({children}: LayoutProps) => {
	return (
		<div>
			<nav>
				<Link to='/'>Home</Link> | 
                <NavLink to='/about' className={({isActive}) => isActive ? 'text-blue-600': ''}>About</NavLink> | 
                <NavLink to='/contact' className={({isActive}) => isActive ? 'text-blue-600': ''}>Contact</NavLink> 
                
			</nav>
            <main>
                {children}
            </main>
		</div>
	);
};

export default Layout;
