import React from 'react'
import Title from '../title/Title'
import Line from './Line'
import PopularItems from './PopularItems'

const Papulars = () => {
	const db = [
		{
			img: '/two-women.png',
			person: 'John Doe',
			date: 'Aug 23, 2021 ',
			title: 'A UX Case Study Creating a Studious Environment for Students: ',
			describtion:
				'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
		},
		{
			img: '/people.png',
			person: 'John Doe',
			date: 'Aug 23, 2021 ',
			title: 'A UX Case Study Creating a Studious Environment for Students: ',
			describtion:
				'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
		},
		{
			img: '/woman-looking.png',
			person: 'John Doe',
			date: 'Aug 23, 2021 ',
			title: 'A UX Case Study Creating a Studious Environment for Students: ',
			describtion:
				'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
		},
	]
	return (
		<div className='container pb-[66px] mt-[60px] sm:mt-[70px] md:mt-[94px]'>
			<Title title={'Popular blogs'} />
			<div className='grid grid-cols-1 sm:grid-cols-3 gap-8'>
				{db?.map((item, index) => (
					<PopularItems key={index} {...item} />
				))}
			</div>
			<Line />
		</div>
	)
}

export default Papulars
