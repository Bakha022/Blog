import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import { registerSchema } from '../../schemas/Register'

const RegisterForm = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({ resolver: yupResolver(registerSchema) })

	const onSubmit = data => {
		console.log(data)

		reset({
			first_name: '',
			last_name: '',
			username: '',
			password: '',
			confirm_password: '',
		})
	}
	return (
		<div className='flex justify-center items-start mb-[200px]'>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className='flex flex-col gap-5 w-[500px]'
			>
				<input
					{...register('first_name')}
					placeholder='Firstname'
					className='text-insert w-full p-3 sm:p-5 text-normal text-base border'
					type='text'
				/>
				{errors.first_name ? (
					<p className='text-red-500 text-set'>{errors.first_name.message}</p>
				) : (
					''
				)}

				<input
					{...register('last_name')}
					placeholder='Lastname'
					className='text-insert w-full p-3 sm:p-5 text-normal text-base border'
					type='text'
				/>
				{errors.last_name ? (
					<p className='text-red-500 text-set'>{errors.last_name.message}</p>
				) : (
					''
				)}

				{/*  */}
				<input
					{...register('username')}
					placeholder='Username'
					className='text-insert w-full p-3 sm:p-5 text-normal text-base border'
					type='text'
				/>
				{errors.username ? (
					<p className='text-red-500 text-set'>{errors.username.message}</p>
				) : (
					''
				)}
				<input
					{...register('password')}
					placeholder='Password'
					className='text-insert w-full p-3 sm:p-5 text-normal text-base border'
					type='password'
				/>
				{errors.password ? (
					<p className='text-red-500 text-set'>{errors.password.message}</p>
				) : (
					''
				)}

				<input
					{...register('confirm_password')}
					placeholder='Confirm password'
					className='text-insert w-full p-3 sm:p-5 text-normal text-base border'
					type='confirm_password'
				/>
				{errors.confirm_password ? (
					<p className='text-red-500 text-set'>
						{errors.confirm_password.message}
					</p>
				) : (
					''
				)}

				<button
					type='submit'
					className='w-full bg-[#FFD050] text-center font-medium text-[#232536] p-3 sm:p-4'
				>
					Register
				</button>
			</form>
		</div>
	)
}

export default RegisterForm
