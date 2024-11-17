import React from 'react'
import Posts from '../../components/posts/Posts'
import Search from '../../components/search/Search'
import Title from '../../components/title/Title'

const BlogsPage = () => {
	return (
		<div className='container mt-[88px] pt-[44px] sm:pt-[64px]'>
			<Search />
			<Title title={'All posts'} />
			<Posts />
		</div>
	)
}

export default BlogsPage
