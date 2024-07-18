'use client';

import { useState, FormEvent } from 'react';
import { login } from '@/app/login/actions';

export default function LoginPage() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    try {
      await login({ email, password });
    } catch (error) {
      setError('Invalid login credentials');
    }
  };
  return (
    <div className='container'>
      <div className='flex'>
        <div className='w-96 mx-auto'>
          <form
            className='bg-white shadow-md rounded p-8'
            onSubmit={handleSubmit}
          >
            <div className='mb-4'>
              <label
                className='block text-black text-sm font-medium mb-2'
                htmlFor='email'
              >
                Email
              </label>
              <input
                className='shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='email'
                name='email'
                type='text'
                placeholder='Email'
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className='mb-4'>
              <label
                className='block text-black text-sm font-medium mb-2'
                htmlFor='password'
              >
                Email
              </label>
              <input
                className='shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='password'
                name='password'
                type='password'
                placeholder='Password'
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {error && <div className='mb-4 text-red-500'>{error}</div>}
            <div className='mb-4'>
              <button
                className='bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                type='submit'
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
