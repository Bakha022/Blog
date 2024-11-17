import React, { useContext, useEffect } from 'react'
import LazyLoad from 'react-lazyload'

import { DateContext } from '../../context/date'

import { Link } from 'react-router-dom'

const PopularItems = ({ title, category, user, description }) => {
	const { dateConvertion, blogYear, blogDay, month } = useContext(DateContext)

	useEffect(() => {
		if (category?.createdAt) {
			dateConvertion(category?.createdAt)
		}
	}, [category, dateConvertion])

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
					By{' '}
					<Link className='text-blue-600'>
						{user.first_name} {user.last_name}{' '}
					</Link>{' '}
					l {month} {blogDay}, {blogYear}
				</p>
				<h2 className='text-sen font-bold text-[22px] md:text-[24px] custom:text-[28px] md:leading-10 tracking-[-1px]'>
					{title}
				</h2>
				<p className='text-inter text-base leading-7 text-[#232536]'>
					{description}
				</p>
			</div>
		</div>
	)
}

export default PopularItems
