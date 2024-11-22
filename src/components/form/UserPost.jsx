import React from 'react'
import { useForm } from 'react-hook-form'
import useData from '../../hooks/useData'
import request from '../../services/request'

const UserPost = ({ handleOk, formSubmitRef, setModalLoading }) => {
	const { data: categoryData } = useData('category')
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm()

	const handleData = async data => {
		try {
			setModalLoading(true)
			await request.post('post', data)
			handleOk()
		} finally {
			setModalLoading(false)
			reset()
		}
	}

	formSubmitRef.current = handleSubmit(handleData)

	return (
		<form>
			<input
				placeholder='Title'
				{...register('title', { required: true })}
				className={`mt-3 border rounded-md p-[5px] w-full ${
					errors.title ? 'border-red-500 placeholder-red-700' : ''
				}`}
				name='title'
				type='text'
			/>
			<select
				className={`mt-3 border rounded-md p-[5px] w-full ${
					errors.category ? 'border-red-500 placeholder-red-700' : ''
				}`}
				name='category'
			>
				{categoryData
					? categoryData?.data.map((item, index) => (
							<option key={index} value={item._id}>
								{item.name}
							</option>
					  ))
					: ''}
			</select>
			<input
				placeholder='Hashtags'
				{...register('tags', { required: true })}
				className={`mt-3 !w-auto me-2 border rounded-md p-[5px] ${
					errors.tags ? 'border-red-500 placeholder-red-700' : ''
				}`}
				name='tags'
				type='text'
			/>
			<textarea
				placeholder='Description'
				{...register('description', { required: true })}
				className={`mt-3 border rounded-md p-[5px] w-full ${
					errors.description ? 'border-red-500 placeholder-red-700' : ''
				}`}
				name='description'
			></textarea>
			<input
				value={'673e0d5fb56c107055f2ef0e'}
				type='text'
				name='photo'
				{...register('photo', { required: true })}
				className={`mt-3 w-full border rounded-md p-[5px] ${
					errors.photo ? 'border-red-500 placeholder-red-700' : ''
				}`}
			/>
		</form>
	)
}

export default UserPost
