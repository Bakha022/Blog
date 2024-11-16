import { useEffect, useState } from 'react'
import request from '../services/request'
import { __END_POINT } from '../utils'

const useData = url => {
	const [data, setData] = useState(null)
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		const getData = async () => {
			try {
				setLoading(true)
				const { data } = await request.get(`${__END_POINT}${url}`)
				setData(data)
			} finally {
				setLoading(false)
			}
		}

		getData()
	}, [])

	return { data, loading }
}

export default useData
