'use client';
import { FormEventHandler, useState } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import Link from 'next/link';
import { handleLogin } from '../../(actions)/actions';

export default function Login() {
  const [formState, formAction] = useFormState(handleLogin, null);
  const { pending } = useFormStatus();

  return (
    <>
      <form
        action={formAction}
        className="mx-auto flex  w-4/5 max-w-sm flex-col items-center gap-6 bg-accent/60 p-7 text-white"
      >
        <h1 className="text-2xl font-bold">Login</h1>
        <section className="flex w-full flex-col gap-2">
          <div className="flex w-full flex-col gap-1">
            <label htmlFor="email">Email:</label>
            <input className="h-8 px-1 text-black" type="email" name="email" id="email" />
          </div>
          <div className="flex w-full flex-col gap-1">
            <label htmlFor="password">Password:</label>
            <input className="h-8 px-1 text-black" type="text" name="password" id="password" />
          </div>
        </section>

        <section className="mb-2 flex w-full flex-col items-center gap-2 text-xs">
          <button
            disabled={pending}
            aria-disabled={pending}
            className="h-11 w-full bg-green text-white transition duration-300 ease-in-out hover:bg-white hover:text-green"
          >
            Submit
          </button>
          <div className="flex flex-col items-center">
            <p>Don&apos;t have an account yet?</p>
            <p>
              Register{' '}
              <Link className="underline" href={'/signup'}>
                here!
              </Link>{' '}
            </p>
          </div>
        </section>

        {formState && <p>{formState}</p>}
      </form>
    </>
  );
}
