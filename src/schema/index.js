import * as yup from 'yup';

export const ProfileSchema = yup.object({
  image: yup.string().required('Image is required'),
  name: yup.string().required('Name is required'),
  username: yup.string().required('Username is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
  dob: yup.date().required('Date of birth is required'),
  presentAddress: yup.string().required('Present address is required'),
  permanentAddress: yup.string().required('Permanent address is required'),
  city: yup.string().required('City is required'),
  postalCode: yup
    .string()
    .matches(/^[0-9]{5}$/, 'Postal code must be 5 digits')
    .required('Postal code is required'),
  country: yup.string().required('Country is required'),
});
