import React, { createContext, useState } from 'react'

export const DateContext = createContext()

const DateContextProvider = ({ children }) => {
	const [blogYear, setBlogYear] = useState('')
	const [blogMonth, setBlogMonth] = useState('')
	const [blogDay, setBlogDay] = useState('')
	const [month, setMonth] = useState('')

	const dateConvertion = date => {
		if (date) {
			const [year, month, day] = date.split('T')[0].split('-')
			setBlogYear(year)
			setBlogMonth(month)
			setBlogDay(day)

			const months = [
				'January',
				'February',
				'March',
				'April',
				'May',
				'June',
				'July',
				'August',
				'September',
				'October',
				'November',
				'December',
			]

			setMonth(months[parseInt(month, 10) - 1])
		}
	}

	const state = { blogYear, blogDay, month, dateConvertion }

	return <DateContext.Provider value={state}>{children}</DateContext.Provider>
}

export default DateContextProvider
