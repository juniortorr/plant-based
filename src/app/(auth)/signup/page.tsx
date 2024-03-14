'use client';
import { handleAddUser } from '../../(actions)/actions';
import { useFormState } from 'react-dom';

const initial = {
  email: null,
  password: null,
};

export default function SignUp() {
  const [state, formAction] = useFormState(handleAddUser, initial);
  return (
    <>
      <h1>Sign Up Here</h1>
      <form action={formAction}>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="firstName"
          name="firstName"
          id="firstName"
          pattern="^[A-Za-z]+$"
          title="must only use letters"
        />
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="lastName"
          name="lastName"
          id="lastName"
          pattern="^[A-Za-z]+$"
          title="must only use letters"
        />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        <label htmlFor="password">Password:</label>
        <input type="text" id="password" minLength={8} name="password" required />
        <button>Create Account</button>
        {state.password && (
          <p>
            password must be 8 characters long, contain at least 1 uppercase, and contain one
            special character
          </p>
        )}
        {state.email && <p>A user with this account already exists!</p>}
      </form>
    </>
  );
}

// List of validations
// Email:
// Empty String: Validated with required
// Correct format: Validated with Type attribute
// Password:
// Must be a min-length 8 characters
// Must contain one capital
// Create Validation tests
