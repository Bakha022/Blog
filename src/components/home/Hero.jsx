import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { DateContext } from '../../context/date'
import useData from '../../hooks/useData'
import Loading from '../loading/Loading'
const Hero = () => {
	const { data, loading } = useData('post/lastone')
	const { dateConvertion, blogYear, blogDay, month } = useContext(DateContext)

	useEffect(() => {
		if (data?.category.createdAt) {
			dateConvertion(data?.category.createdAt)
		}
	}, [data, dateConvertion])

	if (loading) {
		return <Loading widht='100%' size={'12px'} height='100vh' />
	}

	return (
		<div className='bg-[url("/public/hero.png")] bg-cover bg-center  md:h-[720px] w-full'>
			<div className='container'>
				<div className='pt-[124px] md:pt-[192px]'>
					<p className='mb-3 sm:mb-6 text-inter text-[14px] font-semibold sm:text-base uppercase leading-5 tracking-[3px] text-white'>
						Posted on <span className='font-black'>{data?.category.name}</span>
					</p>
					<h1 className='text-sen font-bold text-white text-[40px] sm:text-[54px] leading-[64px] mb-6  tracking-[-1px] custom:w-[803px]'>
						{data?.title}
					</h1>
					<p className='text-inter font-normal leading-7 text-base text-white mb-4'>
						By{' '}
						<span className='text-[#FFD050]'>
							{data?.user.first_name} {data?.user.last_name}
						</span>{' '}
						| {month} {blogDay}, {blogYear}{' '}
					</p>
					<p className='text-inter font-normal leading-7 text-base text-white mb-12 md:w-[599px]'>
						{data?.category.description}
					</p>
					<button className='mb-[100px] sm:mb-[192px] py-2 px-3 sm:py-4 sm:px-12 text-center bg-[#FFD050]  rounded-md text-sen font-bold text-[18px] text-[#232536] leading-6'>
						<Link to={'/'}>Read More {'>'} </Link>
					</button>
				</div>
				{/* <img
					src={`${__UPLOAD_IMG}${data?.photo._id}.${
						data?.photo.name.split('.')[1]
					}`}
					alt=''
				/> */}
			</div>
		</div>
	)
}

export default Hero
