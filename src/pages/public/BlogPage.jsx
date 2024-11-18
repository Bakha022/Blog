import React from 'react'
import { useParams } from 'react-router-dom'
import Post from '../../components/posts/Post'
const BlogPage = () => {
	const params = useParams()

	

	return (
		<div className='container mt-[88px] pt-[44px] sm:pt-[64px]'>
			<Post />
		</div>
	)
}

export default BlogPage
