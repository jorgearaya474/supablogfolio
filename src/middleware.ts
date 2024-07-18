// src/middleware.ts
import { NextResponse, NextRequest } from 'next/server';
import { updateSession } from '@/utils/supabase/middleware';
import { createServerClient } from '@supabase/ssr';
console.log('testing');
export async function middleware(request: NextRequest) {
  // Update user's auth session
  const response = await updateSession(request);

  // Create a Supabase client
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    { cookies: { getAll: () => request.cookies.getAll() } }
  );

  // Check if the user is authenticated
  const { data: { user }, error } = await supabase.auth.getUser();

  console.log('User:', user);
  console.log('Error:', error);


  if (!user) {
    // If not authenticated, redirect to the login page
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return response;
}

export const config = {
  matcher: ['/dashboard/:path*'],
};
