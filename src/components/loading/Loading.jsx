// import React from 'react'
import { OrbitProgress } from 'react-loading-indicators'

const Loading = ({ widht, height, size }) => {
	return (
		<div
			style={{ height: '100vh' }}
			className={`w-[${widht}] h-[${height}] flex items-center justify-center`}
		>
			<OrbitProgress
				variant='dotted'
				size='medium'
				style={{ fontSize: size }}
				color='#232536'
				text=''
				textColor=''
			/>
		</div>
	)
}

export default Loading
