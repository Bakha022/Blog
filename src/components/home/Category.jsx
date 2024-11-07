import React from 'react'
import Title from '../title/Title'
import CategoryItem from './CategoryItem.jsx'

const Category = () => {
	const db = [
		{
			img: '/Icon.svg',
			title: 'Business',
			describtion: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
		},
		{
			img: '/Icon (1).svg',
			title: 'Startup',
			describtion: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
		},
		{
			img: '/icon (2).svg',
			title: 'Economy',
			describtion: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
		},
		{
			img: 'business-and-trade 1.svg',
			title: 'Technology',
			describtion: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
		},
	]
	return (
		<div className='container mb-[73px]'>
			<Title title={'Choose A Catagory'} center={'center'} />
			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 lg:grid-cols-4'>
				{db?.map((item, _) => (
					<CategoryItem key={_} {...item} />
				))}
			</div>
		</div>
	)
}

export default Category
