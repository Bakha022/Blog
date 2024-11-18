import React, { createContext, useState } from 'react'

export const SearchingContext = createContext()

const Searching = ({ children }) => {
	const [searchingValue, setSearchingValue] = useState('')
	const searchingParam = e => {
		setSearchingValue(e.target.value.toLowerCase())
	}

	const state = { searchingParam, searchingValue }
	return (
		<SearchingContext.Provider value={state}>
			{children}
		</SearchingContext.Provider>
	)
}

export default Searching
