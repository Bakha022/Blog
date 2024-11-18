import { useEffect, useState } from 'react'
import request from '../services/request'
import { __END_POINT } from '../utils'

const useData = (url, params = {}) => {
	const [data, setData] = useState(null)
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		const getData = async () => {
			try {
				setLoading(true)
				const queryString = new URLSearchParams(params).toString()
				const fullUrl = `${__END_POINT}${url}${
					queryString ? `?${queryString}` : ''
				}`
				const { data } = await request.get(fullUrl)
				setData(data)
			} finally {
				setLoading(false)
			}
		}

		getData()
	}, [url, JSON.stringify(params)])

	return { data, loading }
}

export default useData
