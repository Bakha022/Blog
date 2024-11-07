import React from 'react'
import Title from '../title/Title'

const Category = () => {
	return (
		<div className='container'>
			<Title title={'Choose A Catagory'} center={'center'} />
			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4'>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	)
}

export default Category
