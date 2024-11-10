import React from 'react'
import LazyLoad from 'react-lazyload'
import { Link } from 'react-router-dom'

const PopularItems = ({ img, person, date, title, describtion }) => {
	return (
		<div>
			<LazyLoad height={200} offset={100}>
				<img className='w-full rounded-md' src={img} alt='card-img' />
			</LazyLoad>
			<div className='card-text mt-8 flex flex-col gap-4 justify-between'>
				<p className='text-inter font-medium text-sm leading-5'>
					By <Link className='text-blue-600'>{person}</Link> l {date}
				</p>
				<h2 className='text-sen font-bold text-[22px] md:text-[24px] custom:text-[28px] md:leading-10 tracking-[-1px]'>
					{title}
				</h2>
				<p className='text-inter text-base leading-7 text-[#232536]'>
					{describtion}
				</p>
			</div>
		</div>
	)
}

export default PopularItems
