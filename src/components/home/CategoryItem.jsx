import React from 'react'
import { Link } from 'react-router-dom'
import { __UPLOAD_IMG } from '../../utils'
import Title from '../title/Title'

const CategoryItem = ({ photo, description, name }) => {
	return (
		<div className='p-[30px] border rounded-md hover:bg-[#FFD050] hover:cursor-pointer hover:transition transition flex flex-col justify-between'>
			<Link to={'/'}>
				<div className='bg-white w-[48px] sm:w-[60px] p-3 rounded-lg mb-[3px]'>
					<img
						width={'100%'}
						src={`${__UPLOAD_IMG}${photo._id}.${photo.name.split('.')[1]}`}
						alt='icon'
					/>
				</div>
				<Title title={name} margin_y={5} />
				<p className='text-inter font-normal leading-7 text-base'>
					{description}
				</p>
			</Link>
		</div>
	)
}

export default CategoryItem
