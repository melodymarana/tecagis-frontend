import { Routes, Route } from 'react-router-dom'

import Chat from './pages/chat'
import Error404 from './pages/error404'
import Example from './pages/example'
import Home from './pages/home'
import Product from './pages/product'
import ProductDetail from './pages/product/detail'

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/404" element={<Error404 />} />
			<Route path="/chat" element={<Chat />} />
			<Route path="/product" element={<Product />} />
			<Route path="/product/detail" element={<ProductDetail />} />
			<Route path="/example" element={<Example />} />
		</Routes>
	)
}

export default App
