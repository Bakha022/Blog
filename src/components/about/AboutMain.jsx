import React from 'react'

const AboutMain = ({ first_text, text, title, subtitle, shapes, img }) => {
	return (
		<div
			className={`flex flex-col ${
				!first_text ? 'md:flex-row' : 'md:flex-row-reverse'
			} md:items-start lg:items-center gap-[70px] mb-[100px]`}
		>
			<div className='left'>
				<h2 className='text-inter mb-6 text-4xl  text-[#232536]  font-semibold'>
					{title}
				</h2>
				<h1 className='text-sen text-[24px] leading-[32px]  font-bold mb-4 text-[#232536]'>
					{text}
				</h1>
				<p className='text-inter font-normal text-base leading-7 text-[#232536]'>
					{subtitle}
				</p>
			</div>
			<div className='right relative'>
				<div className={shapes}></div>
				<img className='w-[2000px]' src={img} alt={`${title}-img`} />
			</div>
		</div>
	)
}

export default AboutMain
