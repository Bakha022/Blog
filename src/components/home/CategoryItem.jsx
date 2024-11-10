import React from 'react'
import Title from '../title/Title'

const CategoryItem = ({ title, img, describtion }) => {
	return (
		<div className='p-[30px] border rounded-md hover:bg-[#FFD050] hover:cursor-pointer hover:transition transition flex flex-col justify-between'>
			<div className='bg-white w-[48px] sm:w-[60px] p-3 rounded-lg mb-[3px]'>
				<img width={'100%'} src={img} alt='icon' />
			</div>
			<Title title={title} margin_y={5} />
			<p className='text-inter font-normal leading-7 text-base'>
				{describtion}
			</p>
		</div>
	)
}

export default CategoryItem
