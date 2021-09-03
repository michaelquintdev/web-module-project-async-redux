import * as yup from 'yup'

const formSchema = yup.object().shape({
    username: yup
        .string()
        .trim()
        .required('Username is required')
        .min(3, 'Username must be betweem 3 - 24 characters')
        .max(24, 'Username must be betweem 3 - 24 characters'),
    password: yup
        .string()
        .trim()
        .required('Password is required')
        .min(8, 'Password must be between 8 - 30 characters')
        .max(30, 'Password must be between 8 - 30 characters')
})

export default formSchema