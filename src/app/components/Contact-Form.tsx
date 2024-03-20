'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { handleAddUser } from '../(actions)/actions';

const initial = {
  email: null,
  password: null,
};

const ContactForm = () => {
  const [formState, formAction] = useFormState(handleAddUser, initial);
  return (
    <form
      action={formAction}
      className="mx-auto mb-5 flex w-full max-w-sm flex-col items-center gap-1 bg-green px-6 py-9"
    >
      {formState.email}
      {formState.password}
      <label className="mt-3 self-start text-white" htmlFor="first-name">
        First Name:
      </label>
      <input
        className="h-9 w-full border-2"
        type="text"
        id="first-name"
        name="firstName"
        required
      />
      <label className="mt-3 self-start text-white" htmlFor="last-name">
        Last Name:
      </label>
      <input className="h-9 w-full border-2" type="text" id="last-name" name="lastName" required />
      <label className="mt-3 self-start text-white" htmlFor="email">
        Email:
      </label>
      <input className="h-9 w-full border-2" type="text" id="email" name="email" />
      <label className="mt-3 self-start text-white" htmlFor="password">
        Password:
      </label>
      <input type="text" id="password" name="password" className="h-9 w-full border-2" />
      <button className="mt-6 h-11 w-full bg-accent">Create Account</button>
    </form>
  );
};

export default ContactForm;
