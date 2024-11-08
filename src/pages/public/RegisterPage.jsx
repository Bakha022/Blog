import React from 'react'
import RegisterForm from '../../components/form/RegisterForm'
import Title from '../../components/title/Title'

const RegisterPage = () => {
	return (
		<div className='container mt-[148px]'>
			<Title center='center' title='Register' />
			<RegisterForm />
		</div>
	)
}

export default RegisterPage
