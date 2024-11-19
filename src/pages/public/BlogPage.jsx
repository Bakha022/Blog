import React from 'react'
import { useParams } from 'react-router-dom'
import Loading from '../../components/loading/Loading'
import Post from '../../components/posts/Post'
import useData from '../../hooks/useData'
const BlogPage = () => {
	const { id } = useParams()

	const { data, loading } = useData(`post/${id}`)

	if (loading) {
		return <Loading widht='100%' size={'12px'} height='100vh' />
	}

	return (
		<div className='container mt-[88px] pt-[44px] sm:pt-[64px]'>
			<Post {...data} />
		</div>
	)
}

export default BlogPage
