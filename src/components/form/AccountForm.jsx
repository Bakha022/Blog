import React from 'react'
import { useForm } from 'react-hook-form'
import { FiUpload } from 'react-icons/fi'
const AccountForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm()

	const onSubmit = data => {
		console.log(data)
	}
	return (
		<div className='container'>
			<div className='pt-[124px] md:pt-[132px]'>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className='border rounded-md p-5 mb-10'>
						<div className='flex gap-8 items-start screen_bnt:items-center'>
							<img
								className='rounded-full w-[80px]  md:w-[100px]'
								src='/myself.jpg'
								alt='user-img'
							/>
							<div className='flex flex-wrap gap-3 sm:gap-5'>
								<button className='flex gap-1 items-center border py-0.5 px-1 sm:px-2 sm:py-1 rounded-md font-normal text-sen text-[14px] sm:text-base leading-7 text-blue-600 border-blue-600 hover:text-blue-700'>
									<FiUpload />
									Upload
								</button>
								<button className='border px-1 py-0.5  sm:px-2 sm:py-1 rounded-md font-normal text-[14px] text-sen sm:text-base leading-7 text-red-600 border-red-600 hover:text-red-700'>
									Deleted
								</button>
							</div>
						</div>
					</div>

					<div className='border rounded-md p-5 mb-2'>
						<div className='grid grid-cols-1 screen_bnt:grid-cols-2 gap-5'>
							<div>
								<label
									className={`block font-normal text-sen  leading-7 ${
										errors.first_name ? 'text-red-500' : ''
									}`}
									htmlFor='first_name'
								>
									Name
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
									Lastname
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
									Username
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
									{...register('birthday', { required: true })}
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
									{...register('address', { required: true })}
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
									{...register('email', { required: true })}
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
									{...register('info', { required: true })}
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
									{...register('phoneNumber', { required: true })}
									className={`mt-1 border rounded-md p-[5px] w-full ${
										errors.phoneNumber ? 'border-red-500' : ''
									}`}
									name='phoneNumber'
									type='tel'
								/>
							</div>
						</div>
						<div className='grid grid-cols-1 screen_bnt:grid-cols-2 mt-5 gap-5 justify-between'>
							<button className='border py-0.5 px-1 sm:px-2 sm:py-1 rounded-md font-normal text-sen  sm:text-base leading-7 text-white bg-blue-600'>
								Save Change
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
