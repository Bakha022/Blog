import * as yup from 'yup'

export const registerSchema = yup.object({
	first_name: yup.string().required('Fill in the firstname field'),
	last_name: yup.string().required('Fill in the lastname field'),
	username: yup.string().required('Fill in the username field'),
	password: yup.string().required('Fill in the password field'),
	confirm_password: yup.string().required('Fill in the confirm password field'),
})
