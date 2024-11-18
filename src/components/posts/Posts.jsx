import { Pagination } from 'antd'
import React, { useContext, useState } from 'react'
import { SearchingContext } from '../../context/searching'
import useData from '../../hooks/useData'
import { LIMIT } from '../../utils'
import Loading from '../loading/Loading'
import PostItem from './PostItem'

const Posts = () => {
	const [page, setPage] = useState(1)
	const limit = LIMIT

	const { searchingValue } = useContext(SearchingContext)

	const { data, loading } = useData('post', {
		page,
		limit,
		search: searchingValue,
	})

	if (loading) {
		return <Loading widht='100%' size={'12px'} height='100vh' />
	}

	return (
		<div>
			{data?.data.map((item, index) => (
				<PostItem key={index} {...item} />
			))}
			<Pagination
				align='center'
				defaultCurrent={page}
				total={data?.pagination.total}
				onChange={e => setPage(e)}
			/>
		</div>
	)
}

export default Posts
