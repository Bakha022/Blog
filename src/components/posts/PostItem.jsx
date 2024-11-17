import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { __UPLOAD_IMG } from '../../utils'

const PostItem = ({ category, description, title, photo }) => {
	return (
		<>
			<div className='flex flex-col gap-[35px]  custom:flex-row mb-[64px]'>
				<div className='post-img'>
					<img
						src={`${__UPLOAD_IMG}${photo._id}.${photo.name.split('.')[1]}`}
						alt='img-title'
					/>
				</div>
				<div className='post-texts'>
					<h2 className='font-semibold text-inter text-[#592EA9] text-base leading-5 tracking-[3px] mb-5'>
						{category.name}
					</h2>
					<h3 className='text-sen font-bold text-4xl mb-4'>{title}</h3>
					<p className='text-inter font-normal text-base leading-7 text-[#6D6E76]'>
						{description}
						<Link
							to='/'
							className='flex gap-2 items-center text-[#592EA9] py-1 px-2 border w-[120px] rounded-xl mt-5'
						>
							Read More <FaArrowRight />
						</Link>
					</p>
				</div>
			</div>
		</>
	)
}

export default PostItem
