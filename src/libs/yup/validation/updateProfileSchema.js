import * as yup from 'yup';

export const profilSchema = yup.object().shape({
  nickname: yup
    .string()
    .required('Nickname is required')
    .min(2, 'Nickname must be at least 2 characters')
    .max(20, 'Nickname too long'),
  name: yup.string().email('Sorry invalid email').required('Email is a required'),
});
