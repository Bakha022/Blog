import { CloseOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
	const [toogle, setToogle] = useState(false)
	const handleLinkClick = () => {
		setToogle(false)
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}
	return (
		<nav className='py-6 bg-[#232536] w-full fixed top-0'>
			<div className='container'>
				<div className='flex items-center justify-between'>
					<div className='logo'>
						<Link to='/'>
							<img
								onClick={handleLinkClick}
								className='w-[100px] md:w-[140px]'
								src='/Logo.svg'
								alt='logo'
							/>
						</Link>
					</div>
					<div className='toogle'>
						<MenuUnfoldOutlined
							onClick={() => setToogle(!toogle)}
							className={` ${toogle ? 'hidden' : ''}  md:hidden`}
							style={{ fontSize: '22px', cursor: 'pointer', color: '#ffffff' }}
						/>
						<CloseOutlined
							onClick={() => setToogle(!toogle)}
							className={` ${toogle ? '' : 'hidden'}  md:hidden`}
							style={{ fontSize: '22px', cursor: 'pointer', color: '#ffffff' }}
						/>
					</div>
					<ul
						className={`flex flex-col gap-4 w-full fixed bottom-0 px-[40px] ${
							toogle ? 'right-[0]' : 'right-[1200px]'
						} transition-all duration-300 ease-in-out right-0 top-16 bg-[#232536]  md:flex-row md:static md:p-0 md:items-center md:gap-[24px] md:w-auto`}
					>
						<li>
							<Link
								onClick={handleLinkClick}
								className='font-normal text-sen text-white text-base leading-7 hover:text-gray-400'
								to='/'
							>
								Home
							</Link>
						</li>
						<li>
							<Link
								onClick={handleLinkClick}
								className='font-normal text-sen text-white text-base leading-7 hover:text-gray-400'
								to='/blogs'
							>
								Blog
							</Link>
						</li>
						<li>
							<Link
								onClick={handleLinkClick}
								className='font-normal text-sen text-white text-base leading-7 hover:text-gray-400'
								to='/about'
							>
								About Us
							</Link>
						</li>
						<li>
							<Link
								onClick={handleLinkClick}
								className='font-normal text-sen text-white text-base leading-7 hover:text-gray-400'
								to='/register'
							>
								Register
							</Link>
						</li>

						<Link
							onClick={handleLinkClick}
							className='text-inter text-[#232536] font-bold'
							to='/login'
						>
							<li className='w-[55px] rounded-sm p-0.5 text-center bg-white md:py-4 md:px-12 md:w-auto'>
								Login
							</li>
						</Link>
					</ul>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
