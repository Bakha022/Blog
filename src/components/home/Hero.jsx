import React from 'react'
import { Link } from 'react-router-dom'
const Hero = () => {
	return (
		<div className='bg-[url("/public/hero.png")] bg-cover bg-center  md:h-[720px] w-full'>
			<div className='container'>
				<div className='pt-[124px] md:pt-[192px]'>
					<p className='mb-3 sm:mb-6 text-inter text-[14px] font-semibold sm:text-base uppercase leading-5 tracking-[3px] text-white'>
						Posted on <span className='font-black'>startup</span>
					</p>
					<h1 className='text-sen font-bold text-white text-[40px] sm:text-[54px] leading-[64px] mb-6  tracking-[-1px] custom:w-[803px]'>
						Step-by-step guide to choosing great font pairs
					</h1>
					<p className='text-inter font-normal leading-7 text-base text-white mb-4'>
						By <span className='text-[#FFD050]'>James West</span> | May 23, 2022{' '}
					</p>
					<p className='text-inter font-normal leading-7 text-base text-white mb-12 md:w-[599px]'>
						Duis aute irure dolor in reprehenderit in voluptate velit esse
						cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
						cupidatat non proident.
					</p>
					<button className='mb-[100px] sm:mb-[192px] py-2 px-3 sm:py-4 sm:px-12 text-center bg-[#FFD050] text-sen font-bold text-[18px] text-[#232536] leading-6'>
						<Link to={''}>Read More > </Link>
					</button>
				</div>
			</div>
		</div>
	)
}

export default Hero
