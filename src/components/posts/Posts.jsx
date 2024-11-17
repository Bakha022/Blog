import React from 'react'

const Posts = () => {
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
		<div>
			<div className='flex flex-col gap-[35px]  custom:flex-row'>
				<div className='post-img h-96 bg-red-400'>
					<img width={447} src='' alt='' />
				</div>
				<div className='post-texts'>
					<h2 className='font-semibold text-inter text-[#592EA9] text-base leading-5 tracking-[3px] mb-5'>
						Business
					</h2>
					<h3 className='text-sen font-bold text-4xl mb-4'>
						Top 6 free website mockup tools 2022
					</h3>
					<p className='text-inter font-normal text-base leading-7 text-[#6D6E76]'>
						Lorenorfont-normal ipsum dolor sit amet, consectetur adipiscing
						elit, sed do eiusmod tempor incididunt ut labore et dolore magna
						aliqua. Non blandit massa enim nec.
					</p>
				</div>
			</div>
		</div>
	)
}

export default Posts
