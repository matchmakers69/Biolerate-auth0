import * as yup from 'yup';

export const loginSchema = yup.object().shape({
  email: yup.string().email('Sorry invalid email').required('Email is a required'),
  password: yup
    .string()
    .required('Please enter your password')
    .min(6, 'Password must be at least 6 characters')
    .max(10, 'Password too long'),
});
