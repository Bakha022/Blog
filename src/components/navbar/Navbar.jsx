import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
	return (
		<nav className='py-6 bg-[#232536]'>
			<div className='container'>
				<div className='flex items-center justify-between'>
					<div className='logo'>
						<Link to='/'>
							<img src='/Logo.svg' alt='logo' />
						</Link>
					</div>
					<ul className='flex gap-[24px] items-center'>
						<li>
							<Link
								className='font-normal text-sen text-white text-base leading-7 hover:text-gray-400'
								to='/'
							>
								Home
							</Link>
						</li>
						<li>
							<Link
								className='font-normal text-sen text-white text-base leading-7 hover:text-gray-400'
								to='/blog'
							>
								Blog
							</Link>
						</li>
						<li>
							<Link
								className='font-normal text-sen text-white text-base leading-7 hover:text-gray-400'
								to='/about'
							>
								About Us
							</Link>
						</li>
						<li>
							<Link
								className='font-normal text-sen text-white text-base leading-7 hover:text-gray-400'
								to='/register'
							>
								Register
							</Link>
						</li>
						<li className='bg-white py-4 px-12'>
							<Link className='text-inter text-[#232536] font-bold' to='/login'>
								Login
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
