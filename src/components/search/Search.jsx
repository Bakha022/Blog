import React, { useContext } from 'react'
import { SearchingContext } from '../../context/searching'
const Search = () => {
	const { searchingParam, searchingValue } = useContext(SearchingContext)

	return (
		<>
			<input
				className='text-base border rounded-md p-4 mb-8 leading-7 sm:p-5 w-full	sm:mb-12 text-inter font-normal'
				onChange={searchingParam}
				value={searchingValue}
				placeholder='Searching...'
				type='text'
			/>
		</>
	)
}

export default Search
