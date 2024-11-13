import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { FaTrash } from 'react-icons/fa6'
import request from '../../services/request'
import { __UPLOAD_IMG } from '../../utils'
import Loading from '../loading/Loading'

import { FaCloudUploadAlt } from 'react-icons/fa'
const AccountForm = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm()

	const [loading, setLoading] = useState(false)
	const [uploadImg, setUploadImg] = useState(null)
	const [btnLoading, setBtnLoading] = useState(false)

	const onSubmit = async data => {
		try {
			setBtnLoading(true)
			await request.put('auth/details', data)
		} finally {
			setBtnLoading(false)
		}
	}

	const handleUploadImg = async e => {
		let formData = new FormData()
		formData.append('file', e.target.files[0])
		const { data } = await request.post('auth/upload', formData)
		setUploadImg(data)
	}

	const handleDeleteImg = async () => {
		await request.delete(`auth/upload/${uploadImg}`)
		setUploadImg(null)
	}

	useEffect(() => {
		const getData = async () => {
			try {
				setLoading(true)
				const { data } = await request.get('auth/me')
				setUploadImg(data.photo)
				let birthday = data.birthday ? data.birthday.split('T')[0] : ''
				reset({ ...data, birthday: birthday })
			} finally {
				setLoading(false)
			}
		}
		getData()
	}, [reset, btnLoading])

	// if (loading) {
	// 	return <Loading widht='full' size={'12px'} height='screen' />
	// }

	return (
		<div className='container'>
			<div className='pt-[124px] md:pt-[132px]'>
				<div className='border rounded-md p-5 mb-10'>
					<div className='flex gap-8 items-start screen_bnt:items-center'>
						{uploadImg ? (
							<img
								className='rounded-full w-[80px]  md:w-[100px]'
								src={`${__UPLOAD_IMG}${uploadImg}`}
								alt='user-img'
							/>
						) : (
							''
						)}
						<div className='flex flex-wrap gap-3 sm:gap-5'>
							<label
								htmlFor='file-upload'
								className='flex gap-1 cursor-pointer items-center border py-0.5 px-1 sm:px-2 sm:py-1 rounded-md font-normal text-sen text-[14px] sm:text-base leading-7 text-blue-600 border-blue-600 hover:text-blue-700'
							>
								<FaCloudUploadAlt />
								Upload Image
							</label>
							<input
								onChange={handleUploadImg}
								className='hidden'
								accept='image/*'
								type='file'
								id='file-upload'
							/>

							{uploadImg ? (
								<button
									onClick={handleDeleteImg}
									className='flex gap-1 cursor-pointer items-center border px-1 py-0.5  sm:px-2 sm:py-1 rounded-md font-normal text-[14px] text-sen sm:text-base leading-7 text-red-600 border-red-600 hover:text-red-700'
								>
									<FaTrash />
									Deleted Image
								</button>
							) : (
								''
							)}
						</div>
					</div>
				</div>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className='border rounded-md p-5 mb-2'>
						<div className='grid grid-cols-1 screen_bnt:grid-cols-2 gap-5'>
							<div>
								<label
									className={`block font-normal text-sen  leading-7 ${
										errors.first_name ? 'text-red-500' : ''
									}`}
									htmlFor='first_name'
								>
									Name*
								</label>
								<input
									{...register('first_name', { required: true })}
									className={`mt-1 border rounded-md p-[5px] w-full ${
										errors.first_name ? 'border-red-500' : ''
									}`}
									name='first_name'
									type='text'
								/>
							</div>
							<div>
								<label
									className={`block font-normal text-sen  leading-7 ${
										errors.last_name ? 'text-red-500' : ''
									}`}
									htmlFor='last_name'
								>
									Lastname*
								</label>
								<input
									className={`mt-1 border rounded-md p-[5px] w-full ${
										errors.last_name ? 'border-red-500' : ''
									}`}
									{...register('last_name', { required: true })}
									name='last_name'
									type='text'
								/>
							</div>
							<div>
								<label
									className={`block font-normal text-sen  leading-7 ${
										errors.username ? 'text-red-500' : ''
									}`}
									htmlFor='username'
								>
									Username*
								</label>
								<input
									{...register('username', { required: true })}
									className={`mt-1 border rounded-md p-[5px] w-full ${
										errors.username ? 'border-red-500' : ''
									}`}
									name='username'
									type='text'
								/>
							</div>
							<div>
								<label
									className={`block font-normal text-sen  leading-7 ${
										errors.birthday ? 'text-red-500' : ''
									}`}
									htmlFor='birthday'
								>
									Birthday
								</label>

								<input
									{...register('birthday')}
									className={`mt-1 border rounded-md p-[3.7px] px-[5px] w-full ${
										errors.birthday ? 'border-red-500' : ''
									}`}
									name='birthday'
									type='date'
								/>
							</div>
							<div>
								<label
									className={`block font-normal text-sen  leading-7 ${
										errors.address ? 'text-red-500' : ''
									}`}
									htmlFor='address'
								>
									Address
								</label>
								<input
									{...register('address')}
									className={`mt-1 border rounded-md p-[5px] w-full ${
										errors.address ? 'border-red-500' : ''
									}`}
									name='address'
									type='text'
								/>
							</div>
							<div>
								<label
									className={`block font-normal text-sen  leading-7 ${
										errors.email ? 'text-red-500' : ''
									}`}
									htmlFor='email'
								>
									Email
								</label>
								<input
									{...register('email')}
									className={`mt-1 border rounded-md p-[5px] w-full ${
										errors.email ? 'border-red-500' : ''
									}`}
									name='email'
									type='email'
								/>
							</div>
							<div>
								<label
									className={`block font-normal text-sen  leading-7 ${
										errors.info ? 'text-red-500' : ''
									}`}
									htmlFor='info'
								>
									Info
								</label>
								<textarea
									{...register('info')}
									className={`mt-1 border rounded-md p-[5px] w-full ${
										errors.info ? 'border-red-500' : ''
									}`}
									name='info'
									id=''
								></textarea>
							</div>
							<div>
								<label
									className={`block font-normal text-sen  leading-7 ${
										errors.phoneNumber ? 'text-red-500' : ''
									}`}
									htmlFor='phoneNumber'
								>
									Phone number
								</label>
								<input
									{...register('phoneNumber')}
									className={`mt-1 border rounded-md p-[5px] w-full ${
										errors.phoneNumber ? 'border-red-500' : ''
									}`}
									name='phoneNumber'
									type='tel'
								/>
							</div>
						</div>
						<div className='grid grid-cols-1 screen_bnt:grid-cols-2 mt-5 gap-5 justify-between'>
							<button
								disabled={btnLoading}
								className={
									'border py-0.5 px-1 sm:px-2 sm:py-1 rounded-md font-normal text-sen  sm:text-base leading-7 text-white bg-[#FFD050] disabled:bg-[#ffd0507a] disabled:cursor-not-allowed'
								}
							>
								{btnLoading ? (
									<div className='flex items-center justify-center gap-3 text-black'>
										Loading...{' '}
										<Loading widht={'20px'} height={'20px'} size={'5px'} />
									</div>
								) : (
									'Save Change'
								)}
							</button>
							<button className='border py-0.5 px-1 sm:px-2 sm:py-1 rounded-md font-normal text-sen  sm:text-base leading-7 text-white bg-red-600'>
								Deleted Account
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	)
}

export default AccountForm
