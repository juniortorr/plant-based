'use client';
import { handleAddUser } from '../../(actions)/actions';
import { useFormState, useFormStatus } from 'react-dom';
import Link from 'next/link';

const initial = {
  email: null,
  password: null,
};

export default function SignUp() {
  const [state, formAction] = useFormState(handleAddUser, initial);
  const { pending } = useFormStatus();
  return (
    <>
      <form
        action={formAction}
        className="mx-auto flex w-11/12 max-w-sm flex-col items-center gap-2.5 bg-accent/60 py-8 sm:max-w-md sm:gap-3.5 sm:py-10"
      >
        <h1 className="text-2xl font-bold text-white">Sign Up</h1>
        {state.zod && <p className="w-4/5 text-xs text-red-500">*{state.zod}</p>}
        <label htmlFor="firstName" className="w-4/5 text-white">
          First Name:
        </label>
        <input
          type="firstName"
          name="firstName"
          id="firstName"
          className="box-border h-8 w-4/5 px-1"
          // pattern="^[A-Za-z]+$"
          // title="must only use letters"
        />
        <label htmlFor="lastName" className="w-4/5 text-white">
          Last Name:
        </label>
        <input
          type="lastName"
          name="lastName"
          id="lastName"
          className="box-border h-8 w-4/5 px-1"
          // pattern="^[A-Za-z]+$"
          // title="must only use letters"
        />
        <label htmlFor="email" className="w-4/5 text-white">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="box-border h-8 w-4/5 px-1"
        />
        {state.email && (
          <p className="w-4/5 text-xs text-red-300">*A user with this account already exists!</p>
        )}
        <label htmlFor="password" className="w-4/5 text-white">
          Password:
        </label>
        <input
          type="text"
          id="password"
          minLength={8}
          name="password"
          required
          className="box-border h-8 w-4/5 px-1"
        />
        {state.password && (
          <p className="w-4/5 text-xs text-red-300">
            *password must be 8 characters long, contain at least 1 uppercase, and contain one
            special character.
          </p>
        )}
        <button
          aria-disabled={pending}
          className="mt-2 h-11 w-4/5 bg-green text-white transition-all duration-300 ease-in-out hover:bg-white hover:text-green"
        >
          Submit
        </button>

        <div className="text-center text-xs text-white">
          <p>Already Have An Account?</p>
          <p>
            Login{' '}
            <Link href={'/login'} className="underline">
              here!
            </Link>
          </p>
        </div>
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
