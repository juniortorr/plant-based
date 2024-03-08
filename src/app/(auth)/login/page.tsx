import { handleLogin } from '../../actions';

export default function Login() {
  return (
    <>
      <h1>Login Here</h1>
      <form action={handleLogin}>
        <label htmlFor="username">Username:</label>
        <input type="text" name="username" id="password" />
        <label htmlFor="password">Password:</label>
        <input type="text" name="password" id="password" />
        <button>submit</button>
      </form>
    </>
  );
}
