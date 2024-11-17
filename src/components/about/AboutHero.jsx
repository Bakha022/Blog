import React from 'react'

const AboutHero = () => {
	return (
		<div className='flex flex-col md:flex-row p-[30px] screen_bnt:p-[50px] md:py-[80px] gap-[54px] md:px-[85px] bg-[#F4F0F8] mb-[100px]'>
			<div className='left'>
				<h2 className='text-inter text-[#232536]  mb-6 text-base leading-5 tracking-[3px] font-semibold'>
					Our mision
				</h2>
				<h1 className='text-sen text-[#232536] text-[28px] leading-[35px] tracking-[-1px] font-bold mb-4'>
					Creating valuable content for creatives all around the world
				</h1>
				<p className='text-inter font-normal text-base leading-7 text-[#6D6E76]'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
					blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At
					risus viverra adipiscing at in tellus.
				</p>
			</div>
			<div className='right'>
				<h2 className='text-inter text-[#232536]  mb-6 text-base leading-5 tracking-[3px] font-semibold'>
					Our Vision
				</h2>
				<h1 className='text-sen text-[#232536] text-[28px] leading-[35px] tracking-[-1px] font-bold mb-4'>
					A platform that empowers individuals to improve
				</h1>
				<p className='text-inter font-normal text-base leading-7 text-[#6D6E76]'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
					blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At
					risus viverra adipiscing at in tellus.
				</p>
			</div>
		</div>
	)
}

export default AboutHero
