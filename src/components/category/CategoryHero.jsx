import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import useData from '../../hooks/useData'
import Title from '../title/Title'

const CategoryHero = ({ id }) => {
	const { data } = useData(`category/${id}`)

	return (
		<div className='bg-[#F4F0F8] py-[50px]'>
			<div className='container text-center'>
				<Title margin_y={'1px'} title={`${data?.name}`} />
				<p className='text-[#6D6E76]  custom:w-[515px]  mb-6 mx-auto text-inter font-normal text-base leading-7'>
					{data?.description}
				</p>
				<p className='flex justify-center items-center gap-2 uppercase text-base text-inter font-medium text-[#232536]'>
					Blog <FaArrowRight size={14} /> {data?.name}
				</p>
			</div>
		</div>
	)
}

export default CategoryHero
