'use client';
import { handleAddUser } from '../../actions';
import { useFormState } from 'react-dom';

export default function SignUp() {
  const [state, formAction] = useFormState(handleAddUser, null);
  return (
    <>
      <h1>Sign Up Here</h1>
      <form action={formAction}>
        <label htmlFor="email">Email:</label>
        <input type="text" id="email" name="email" required />
        <label htmlFor="password">Password:</label>
        <input type="text" id="password" name="password" required />
        <button>Create Account</button>
        {state && <p>{state}</p>}
      </form>
    </>
  );
}
