import { Pagination } from 'antd'
import React, { useContext, useState } from 'react'
import AddButton from '../../../components/addButton/AddButton'
import Loading from '../../../components/loading/Loading'
import PostItem from '../../../components/posts/PostItem'
import Searching from '../../../components/search/Search'
import Title from '../../../components/title/Title'
import { SearchingContext } from '../../../context/searching'
import useData from '../../../hooks/useData'
import { LIMIT, USER } from '../../../utils'
import EmptyPage from '../../public/EmptyPage'

const MyBlogsPage = () => {
	const [page, setPage] = useState(1)
	const user = JSON.parse(localStorage.getItem(USER))?._id
	const limit = LIMIT

	const { searchingValue } = useContext(SearchingContext)

	const { data, loading } = useData('post', {
		page,
		limit,
		user,
		search: searchingValue,
	})

	console.log(data)

	return (
		<div className='container mt-[88px]'>
			<div className='flex flex-col text-center screen_bnt:text-start screen_bnt:flex-row mb-6  screen_bnt:justify-between screen_bnt:items-start pt-[40px]'>
				<Title size={48} title='My posts' />
				<AddButton />
			</div>
			<hr className='mb-8' />
			<>
				<Searching />
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
			</>
		</div>
	)
}

export default MyBlogsPage
