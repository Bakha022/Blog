import { message } from 'antd'
import Cookies from 'js-cookie'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { AuthContext } from '../hooks/useAuth'
import request from '../services/request'
import { TOKEN, USER } from '../utils/index'

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(JSON.parse(localStorage.getItem(USER)))
	const [loading, setLoading] = useState(false)

	const login = async (values, navigate) => {
		try {
			setLoading(true)
			const {
				data: { token },
			} = await request.post('auth/login', values)

			Cookies.set(TOKEN, token)
			request.defaults.headers.common.Authorization = `Bearer ${token}`

			const { data: user } = await request.get('auth/me')
			localStorage.setItem(USER, JSON.stringify(user))
			setUser(user)
			message.success('Success')

			const { role } = user

			if (role === 'user') {
				navigate('/myblogs')
			} else if (role === 'admin') {
				navigate('/dashboard')
			}
		} finally {
			setLoading(false)
		}
	}

	const state = { user, loading, login, setUser }
	return <AuthContext.Provider value={state}>{children}</AuthContext.Provider>
}

AuthProvider.propTypes = {
	children: PropTypes.node,
}

export default AuthProvider
