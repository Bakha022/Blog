import React from 'react'
import Title from '../title/Title'

const Post = () => {
	return (
		<>
			<div className='img mb-[50px]'>
				<img className='w-full' src='/postImg.png' alt='post-img' />
			</div>
			<div className='custom:px-[200px]'>
				<div className='flex gap-5 mb-6'>
					<img
						className='w-[60px] h-[60px]  object-cover rounded-full'
						src='/user.png'
						alt='user-img'
					/>
					<div className='flex flex-col justify-between'>
						<h1 className='text-[#592EA9] text-[28px] text-sen font-medium leading-[40px] tracking-[-1px]'>
							Andrew Jonson
						</h1>
						<p className='leading-7 text-base text-inter font-normal text-[#6D6E76]'>
							Posted on 27th January 2022
						</p>
					</div>
				</div>
				<Title title={'Step-by-step guide to choosing great font pairs'} />
				<p className='subtitle mt-8 text-2xl mb-[48px] text-sen font-medium leading-8'>
					Startup (
					<span className='bg-[#f2ff00] rounded-xl px-2 text-'>#business</span>,{' '}
					<span className='bg-red-400 rounded-xl px-2 text-'> #screen</span> ,
					<span className='bg-blue-600 rounded-xl px-2 text-'>#life</span>)
				</p>
				<p className='text text-[#6D6E76] text-inter font-normal text-base leading-7'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
					blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At
					risus viverra adipiscing at in tellus. Sociis natoque penatibus et
					magnis dis parturient montes. Ridiculus mus mauris vitae ultricies
					leo. Neque egestas congue quisque egestas diam. Risus in hendrerit
					gravida rutrum quisque non. Lorem ipsum dolor sit amet, consectetur
					adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
					magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris
					in aliquam sem. At risus viverra adipiscing at in tellus. Sociis
					natoque penatibus et magnis dis parturient montes. Ridiculus mus
					mauris vitae ultricies leo. Neque egestas congue quisque egestas diam.
					Risus in hendrerit gravida rutrum quisque non.
				</p>
			</div>
		</>
	)
}

export default Post
