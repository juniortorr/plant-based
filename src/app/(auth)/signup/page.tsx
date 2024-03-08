import { handleAddUser } from '../../actions';

export default function SignUp() {
  return (
    <>
      <h1>Sign Up Here</h1>
      <form action={handleAddUser}>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" />
        <label htmlFor="password">Password:</label>
        <input type="text" id="password" name="password" />
        <button>Create Account</button>
      </form>
    </>
  );
}
