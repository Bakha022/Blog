import React, { useContext, useEffect } from 'react'
import LazyLoad from 'react-lazyload'

import { DateContext } from '../../context/date'

import { Link } from 'react-router-dom'
import { __UPLOAD_IMG } from '../../utils'
import demoUserImg from '/two-women.png'

const PopularItems = ({ title, category, user, photo, description, _id }) => {
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
					className='w-full rounded-md object-cover h-[450px] custom:h-[250px]'
					src={`${__UPLOAD_IMG}${photo?._id}.${photo?.name.split('.')[1]}`}
					alt='card-img'
					onError={e => {
						e.target.onerror = null
						e.target.src = demoUserImg
					}}
				/>
			</LazyLoad>
			<div className='card-text mt-8 flex flex-col gap-4 justify-between'>
				<p className='text-inter font-medium text-sm leading-5'>
					By{' '}
					<Link
						onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
						to={`/blog/${_id}`}
						className='text-blue-600'
					>
						{user.first_name} {user.last_name}{' '}
					</Link>{' '}
					l {month} {blogDay}, {blogYear}
				</p>
				<h2 className='text-sen font-bold text-[22px] md:text-[24px] custom:text-[28px] md:leading-10 tracking-[-1px]'>
					{title}
				</h2>
				<p className='text-inter text-base leading-7 category-subtitle text-[#232536]'>
					{description}
				</p>
			</div>
		</div>
	)
}

export default PopularItems
