'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server';
import { LoginParams } from '@/types';


export async function login({ email, password }: LoginParams) {
  const supabase = createClient();

  try {
    const { error } = await (await supabase).auth.signInWithPassword({
      email, password
    })

    if (error) {
      console.error('Error logging in:', error.message);
      throw new Error('Invalid login credentials');
    }

    console.log('User logged in successfully');
    revalidatePath('/', 'layout')
    redirect('/dashborad')

  } catch (error) {
    console.error('Login failed: ', error);
    throw error;
  }
}