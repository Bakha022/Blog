import React from 'react'

const Title = ({ title, center }) => {
	return (
		<h1
			className={`text-sen  text-${center} text-3xl md:text-text-4xl font-bold text-[36px] leading-[48px] tracking-[-1px] mb-[64px]`}
		>
			{title}
		</h1>
	)
}

export default Title
