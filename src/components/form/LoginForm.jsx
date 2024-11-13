import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import { loginSchemas } from '../../schemas/Login'

const LoginForm = () => {
	const navigate = useNavigate()
	const { login, loading } = useAuth()
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ resolver: yupResolver(loginSchemas) })

	const onSubmit = data => {
		login(data, navigate)
	}

	return (
		<div className='flex justify-center items-start mb-[200px]'>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className='flex flex-col gap-5 w-[440px]'
			>
				<input
					{...register('username')}
					placeholder='Username'
					className='text-insert w-full p-3 rounded-md text-normal text-base border'
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
					className='text-insert w-full p-3 rounded-md  text-normal text-base border'
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
					className='w-full bg-[#FFD050] text-center rounded-md font-medium text-[#232536] p-3'
				>
					{loading ? 'Loading ...' : 'Login'}
				</button>
			</form>
		</div>
	)
}

export default LoginForm
