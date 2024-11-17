import React from 'react'
import useData from '../../hooks/useData'
import Loading from '../loading/Loading'
import PostItem from './PostItem'

const Posts = () => {
	const { data, loading } = useData('post')

	if (loading) {
		return <Loading widht='100%' size={'12px'} height='100vh' />
	}
	return (
		<div>
			{data?.data.map((item, index) => (
				<PostItem key={index} {...item} />
			))}
		</div>
	)
}

export default Posts
