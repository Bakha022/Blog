import * as yup from 'yup'

export const loginSchemas = yup.object({
	username: yup.string().required('Fill in the username field'),
	password: yup.string().required('Fill in the password field'),
})
