import Layout from './layout/Layout';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import {
	RouterProvider,
	createBrowserRouter,
	Link,
	BrowserRouter,
	Routes,
	Route,
} from 'react-router-dom';
import Product from './pages/Product';
import Team from './pages/Team';
import Users from './pages/Users';
import ErrorUser from './pages/ErrorUser';
import ProtectedRoute from './routes/ProtectedRoute';

const router = createBrowserRouter([
	{
		path: '/',
		element: (
			<Layout>
				<Home />
			</Layout>
		),
	},
	{
		path: '/about',
		element: (
			<Layout>
				<About />
			</Layout>
		),
		children: [
			{
				path: 'team',
				element:<Team/>
			}
		]
	},
	{
		path: '/contact',
		element: (
			<Layout>
				<Contact />
			</Layout>
		),
	},
	{
		path: '/product/:productId',
		element: <ProtectedRoute isAuthenticated={false}/>,
		children: [
			{
				path: '',
				element: <Product/>
			}
		]
	},
	{
		path: '/users',
		element: <Users/>,
		loader: async () => {
			const response = await fetch('https://jsonplaceholder.typicode.com/users')
			if(!response.ok) throw new Error('Gagal memuat data')
			return response.json()
		},
		errorElement: <ErrorUser/>
	},
	{
		path: '/login',
		element: <h1>Please Login</h1>
	}
	
]);

function App() {
	return <RouterProvider router={router} />;

	// return (
	// 	<BrowserRouter>
	// 		<Routes>
	// 			<Route path='/' element={<Home/>}/>
	// 			<Route path='/about' element={<About/>}/>
	// 		</Routes>
	// 	</BrowserRouter>
	// );
}

export default App;
