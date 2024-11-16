import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import { registerSchema } from '../../schemas/Register'

const RegisterForm = () => {
	const { registered, loading } = useAuth()
	const navigate = useNavigate()
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({ resolver: yupResolver(registerSchema) })

	const onSubmit = data => {
		registered(data, navigate)
	}
	return (
		<div className='flex justify-center items-start mb-[200px]'>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className='flex flex-col gap-5 w-[440px]'
			>
				<input
					{...register('first_name')}
					placeholder='Firstname'
					className='text-insert w-full p-3  rounded-md text-normal text-base border'
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
					className='text-insert w-full p-3  rounded-md text-normal text-base border'
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
					className='text-insert w-full p-3  rounded-md text-normal text-base border'
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
					className='text-insert w-full p-3  rounded-md text-normal text-base border'
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
					className='text-insert w-full p-3  rounded-md text-normal text-base border'
					type='password'
				/>
				{errors.confirm_password ? (
					<p className='text-red-500 text-set'>
						{errors.confirm_password.message}
					</p>
				) : (
					''
				)}

				<button
					disabled={loading}
					type='submit'
					className='w-full bg-[#FFD050] text-center flex gap-2 items-center justify-center rounded-md font-medium text-[#232536] p-3
					disabled:bg-[#ffd0507a] disabled:cursor-not-allowed'
				>
					{loading ? 'Loading...' : "Register"}
				</button>
			</form>
		</div>
	)
}

export default RegisterForm
