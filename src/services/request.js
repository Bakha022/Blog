import {message} from 'antd'
import axios from 'axios'

const request = axios.create({
	baseURL: 'https://ap-blog-backend.up.railway.app/api/v1',
	timeout: 9000,
})

request.interceptors.response.use(
	function (response) {
		return response
	},
	function (error) {
		message.error(error.response.data)
		return Promise.reject(error)
	}
)

export default request
