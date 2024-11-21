import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { __UPLOAD_IMG } from '../../utils'
import demoImage from '/people.png'

const PostItem = ({ category, description, title, photo, _id }) => {
	return (
		<>
			<div className='grid  grid-cols-1 !gap-[35px]  custom:grid-cols-3 mb-[64px]'>
				<div className='post-img grow-[1] '>
					<img
						className='w-full custom:w-[447px] h-[312px] object-cover'
						src={`${__UPLOAD_IMG}${photo._id}.${photo.name.split('.')[1]}`}
						alt='img-title'
						onError={e => {
							e.target.onerror = null
							e.target.src = demoImage
						}}
					/>
				</div>
				<div className='post-texts grow-[2]'>
					<h2 className='font-semibold text-inter text-[#592EA9] text-base leading-5 tracking-[3px] mb-5'>
						{category.name}
					</h2>
					<h3 className='text-sen font-bold text-4xl mb-4'>{title}</h3>
					<p className='text-inter font-normal text-base leading-7 text-[#6D6E76]'>
						{description}
					</p>
					<Link
						onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
						to={`/blog/${_id}`}
						className='flex gap-2 items-center text-[#232536] py-1 px-2  w-[118px] rounded-xl mt-5 bg-[#FFD050]'
					>
						Read More <FaArrowRight />
					</Link>
				</div>
			</div>
		</>
	)
}

export default PostItem
