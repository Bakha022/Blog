import React from 'react'
import useData from '../../hooks/useData.js'
import Title from '../title/Title'
import CategoryItem from './CategoryItem.jsx'

const Category = () => {
	

	const { data } = useData('category')

	const categoryData = data?.data

	return (
		<div className='container'>
			<Title title={'Choose A Catagory'} center={'center'} />
			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 lg:grid-cols-4'>
				{categoryData?.map((item, _) => (
					<CategoryItem key={_} {...item} />
				))}
			</div>
		</div>
	)
}

export default Category
