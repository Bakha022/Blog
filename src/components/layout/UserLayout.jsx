import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar'

const UserLayout = () => {
	return (
		<>
			<header>
				<Navbar />
			</header>

			<main className='grid'>
				<Outlet />
			</main>

			<footer>
				<Footer />
			</footer>
		</>
	)
}

export default UserLayout
