import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import useAuth from '../../hooks/useAuth'
import { loginSchemas } from '../../schemas/Login'

const LoginForm = () => {
	const { login, loading } = useAuth()
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({ resolver: yupResolver(loginSchemas) })

	const onSubmit = data => {
		login(data)
		// reset({
		// 	username: '',
		// 	password: '',
		// })
	}

	return (
		<div className='flex justify-center items-start mb-[200px]'>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className='flex flex-col gap-5 w-[500px]'
			>
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
				<button
					disabled={loading}
					type='submit'
					className='w-full bg-[#FFD050] text-center font-medium text-[#232536] p-4'
				>
					{loading ? 'Loading ...' : 'Login'}
				</button>
			</form>
		</div>
	)
}

export default LoginForm
