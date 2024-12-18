import React from 'react'

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import AdminLayout from './components/layout/AdminLayout'
import UserLayout from './components/layout/UserLayout'
import useAuth from './hooks/useAuth'
import DashboardPage from './pages/protected/admin/DashboardPage'
import AccountPage from './pages/protected/user/AccountPage'
import MyBlogsPage from './pages/protected/user/MyBlogsPage'
import AboutPage from './pages/public/AboutPage'
import BlogPage from './pages/public/BlogPage'
import BlogsPage from './pages/public/BlogsPage'
import CategoryPage from './pages/public/CategoryPage'
import HomePage from './pages/public/HomePage'
import LoginPage from './pages/public/LoginPage'
import NotFoundPage from './pages/public/NotFoundPage'
import RegisterPage from './pages/public/RegisterPage'

const App = () => {
	const { user } = useAuth()

	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route element={<UserLayout />}>
						<Route index element={<HomePage />} />
						<Route path='/blogs' element={<BlogsPage />} />
						<Route path='/category/:id' element={<CategoryPage />} />
						<Route path='/blog/:id' element={<BlogPage />} />

						<Route path='/login' element={<LoginPage />} />
						<Route path='/about' element={<AboutPage />} />
						<Route path='/register' element={<RegisterPage />} />

						{/* {user?.role === 'user' && (
							<>
								<Route path='/myblogs' element={<MyBlogsPage />} />
								<Route path='/account-page' element={<AccountPage />} />
							</>
						)} */}

						{
							<>
								<Route
									path='/myblogs'
									element={
										user?.role === 'user' ? (
											<MyBlogsPage />
										) : (
											<Navigate to='/login' />
										)
									}
								/>
								<Route
									path='/account-page'
									element={
										user?.role === 'user' ? (
											<AccountPage />
										) : (
											<Navigate to='/login' />
										)
									}
								/>
							</>
						}
					</Route>

					{user?.role === 'admin' && (
						<Route element={<AdminLayout />}>
							<Route path='/dashboard' element={<DashboardPage />} />
						</Route>
					)}

					<Route path='*' element={<NotFoundPage />} />
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App
