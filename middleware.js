import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request) {
  return NextResponse.redirect(new URL('https://drive.google.com/file/d/1eI9nBIXJv_Po-zfFe83w0xfj-WJTT-Ny/view?usp=sharing', request.url))
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/resume',
}