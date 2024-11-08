import React from 'react'
import LoginForm from '../../components/form/LoginForm'
import Title from '../../components/title/Title'

const LoginPage = () => {
	return (
		<div className='container mt-[148px]'>
			<Title center='center' title='Login' />
			<LoginForm />
		</div>
	)
}

export default LoginPage
