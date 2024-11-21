import { Pagination } from 'antd'
import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import CategoryHero from '../../components/category/CategoryHero'
import Loading from '../../components/loading/Loading'
import PostItem from '../../components/posts/PostItem'
import Search from '../../components/search/Search'
import { SearchingContext } from '../../context/searching'
import useData from '../../hooks/useData'
import { LIMIT } from '../../utils'
import EmptyPage from './EmptyPage'

const CagegoryPage = () => {
	const { id } = useParams()

	const [page, setPage] = useState(1)
	const limit = LIMIT

	const { searchingValue } = useContext(SearchingContext)

	const { data, loading } = useData('post', {
		page,
		limit,
		search: searchingValue,
		category: id,
	})
	return (
		<div className='mt-[78px]'>
			<CategoryHero id={id} />
			<div className='container my-[57px]'>
				<Search />
				<>
					{loading ? (
						<Loading width='100%' size='12px' height='100vh' />
					) : data?.data.length > 0 ? (
						data.data.map((item, index) => <PostItem key={index} {...item} />)
					) : (
						<EmptyPage />
					)}
					<Pagination
						align='center'
						defaultCurrent={page}
						total={data?.pagination.total}
						onChange={e => setPage(e)}
					/>
				</>
			</div>
		</div>
	)
}

export default CagegoryPage
