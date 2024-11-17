import React from 'react'

const Title = ({ title, center, margin_y }) => {
	return (
		<h1
			className={`text-sen mb-[32px] text-${center} text-3xl md:text-text-4xl font-bold text-[36px] leading-[48px] tracking-[-1px]  ${
				margin_y ? `mb-[${margin_y}]` : 'sm:mb-[64px] '
			}`}
		>
			{title}
		</h1>
	)
}

export default Title
