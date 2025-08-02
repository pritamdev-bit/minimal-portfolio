import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request) {
  return NextResponse.redirect(new URL('https://drive.google.com/file/d/1bkeNzosmy3rkwn1r0kM50M8kQ4LJOHUZ/view?usp=sharing', request.url))
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/resume',
}