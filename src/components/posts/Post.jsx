import React, { useContext, useEffect } from 'react'
import { DateContext } from '../../context/date'
import { __UPLOAD_IMG } from '../../utils'
import Title from '../title/Title'
import demoUserImg from '/user.png'

import demoImage from '/postImg.png'

const Post = ({ category, user, description, title, tags, photo, _id }) => {
	const { dateConvertion, blogYear, blogDay, month } = useContext(DateContext)

	// console.log(user?.photo)

	useEffect(() => {
		if (category?.createdAt) {
			dateConvertion(category?.createdAt)
		}
	}, [category, dateConvertion])
	return (
		<>
			<div className='img mb-[50px]'>
				<img
					onError={e => {
						e.target.onerror = null
						e.target.src = demoImage
					}}
					className='w-full h-[582px] object-cover'
					src={`${__UPLOAD_IMG}${photo?._id}.${photo?.name.split('.')[1]}`}
					alt='post-img'
				/>
			</div>
			<div className='custom:px-[200px]'>
				<div className='flex gap-5 mb-6'>
					<img
						className='w-[60px] h-[60px]  object-cover rounded-full'
						src={`${__UPLOAD_IMG}${user?.photo}`}
						alt='user-img'
						onError={e => {
							e.target.onerror = null
							e.target.src = demoUserImg
						}}
					/>
					<div className='flex flex-col justify-between'>
						<h1 className='text-[#592EA9] text-[28px] text-sen font-medium leading-[40px] tracking-[-1px]'>
							{user?.first_name} {user?.last_name}
						</h1>
						<p className='leading-7 text-base text-inter font-normal text-[#6D6E76]'>
							Posted on {blogDay}
							{(blogDay[1] == 1 && 'st') ||
								(blogDay[1] == 2 && 'nd') ||
								(blogDay[1] == 3 && 'rd') ||
								(blogDay[1] >= 4 && 'th')}{' '}
							{month} {blogYear}
						</p>
					</div>
				</div>
				<Title title={title} />
				<p className='subtitle mt-8 text-2xl mb-[48px] text-sen font-medium leading-8'>
					{category?.name}(
					{tags?.map((item, index) => {
						const colors = ['bg-[#f2ff00]', 'bg-red-400', 'bg-blue-600']
						const bgColor = colors[index % colors.length]
						return <span className={`${bgColor} rounded-xl px-2`}>#{item}</span>
					})}
					)
				</p>
				<p className='text text-[#6D6E76] text-inter font-normal text-base leading-7'>
					{description}
				</p>
			</div>
		</>
	)
}

export default Post
