import { z } from 'zod';

const regex = new RegExp(
  '^(?:(?:(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]))|(?:(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|]))|(?:(?=.*[0-9])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|]))|(?:(?=.*[0-9])(?=.*[a-z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|]))).{8,32}$'
);

export const blogSchema = z.object({
  id: z.string().uuid(),
  date: z.string(),
  title: z.string().trim().min(1, { message: 'must be more than 1 letter' }),
  content: z.string().trim().min(1, { message: 'must be more than 1' }),
  private: z.boolean(),
});

export const userSchema = z.object({
  id: z.string().uuid(),
  firstName: z.string().trim().min(1, { message: 'must be more than 1' }),
  lastName: z.string().trim().min(1, { message: 'must be more than 1' }),
  email: z
    .string()
    .trim()
    .email({ message: 'must be email format' })
    .min(1, { message: 'must be more than 1' }),
  password: z.string().trim().min(8, { message: 'must be at least 8 characters long' }),
  savedBlogs: z.array(),
  admin: z.boolean(),
});

const passwordValidation = (pw) => regex.test(pw);

export default passwordValidation;
