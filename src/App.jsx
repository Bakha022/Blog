import React from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AdminLayout from './components/layout/AdminLayout'
import PublicLayout from './components/layout/PublicLayout'
import DashboardPage from './pages/protected/admin/DashboardPage'
import AboutPage from './pages/public/AboutPage'
import BlogsPage from './pages/public/BlogsPage'
import CategoryPage from './pages/public/CategoryPage'
import HomePage from './pages/public/HomePage'
import LoginPage from './pages/public/LoginPage'
import NotFoundPage from './pages/public/NotFoundPage'
import RegisterPage from './pages/public/RegisterPage'

const App = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route element={<PublicLayout />}>
						<Route index element={<HomePage />} />
						<Route path='/blogs' element={<BlogsPage />} />
						<Route path='/category' element={<CategoryPage />} />
						<Route path='/login' element={<LoginPage />} />
						<Route path='/about' element={<AboutPage />} />
						<Route path='/register' element={<RegisterPage />} />
					</Route>

					<Route element={<AdminLayout />}>
						<Route path='dashboard' element={<DashboardPage />} />
					</Route>

					<Route path='*' element={<NotFoundPage />} />
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App
