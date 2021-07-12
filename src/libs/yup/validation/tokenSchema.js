import * as yup from 'yup';

export const tokenSchema = yup.object().shape({
  accessToken: yup
    .string()
    .required('accessToken is required')
    .min(6, 'accessToken must be at least 2 characters')
    .max(40, 'accessToken too long'),
});
