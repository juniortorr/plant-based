import { v4 as uuidv4 } from 'uuid';

export const getCredentials = (formData: FormData) => {
  return {
    id: uuidv4(),
    firstName: formData.get('firstName'),
    lastName: formData.get('lastName'),
    email: formData.get('email'),
    password: formData.get('password'),
    savedBlogs: [],
    admin: false,
  };
};

export const initializeErrors = () => {
  return {
    email: null,
    password: null,
    zod: null,
  };
};
