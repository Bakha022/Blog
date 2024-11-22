import React from 'react'

const AddButton = ({ showModal }) => {
	return (
		<button
			onClick={showModal}
			className='bg-[#FFD050] py-4 px-12 text-sen text-[#232536] leading-6 text-lg font-bold'
		>
			Add post
		</button>
	)
}

export default AddButton
