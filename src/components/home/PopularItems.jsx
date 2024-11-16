import React from 'react'
import LazyLoad from 'react-lazyload'
import { Link } from 'react-router-dom'

const PopularItems = ({ title, category }) => {
	console.log(title, category)

	return (
		<div className='select-none mr-8'>
			<LazyLoad height={200} offset={100}>
				<img
					className='w-full rounded-md'
					src={`/two-women.png`}
					alt='card-img'
				/>
			</LazyLoad>
			<div className='card-text mt-8 flex flex-col gap-4 justify-between'>
				<p className='text-inter font-medium text-sm leading-5'>
					By <Link className='text-blue-600'>{}</Link> l {}
				</p>
				<h2 className='text-sen font-bold text-[22px] md:text-[24px] custom:text-[28px] md:leading-10 tracking-[-1px]'>
					{title}
				</h2>
				<p className='text-inter text-base leading-7 text-[#232536]'>{}</p>
			</div>
		</div>
	)
}

export default PopularItems
