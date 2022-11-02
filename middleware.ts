import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export function middleware(request: NextRequest) {

  const guest = ['/login', '/register']

  // If The Token Exist but you're in Guest URL
  if (request.cookies.get('access_token')) {
    for (const url of guest) {
      if (request.nextUrl.pathname.startsWith(url)) {
        return NextResponse.redirect(new URL('/dashboard', request.url))
      }
    }

    // If you're in Auth URL
    return NextResponse.next()
  }

  // If The Token Is Undefined and You're in Guest URL
  for (const url of guest) {
    if (request.nextUrl.pathname.startsWith(url)) {
      return NextResponse.next()
    }
  }

  // Need Token in Auth URL 
  return NextResponse.redirect(new URL('/login', request.url))

}

export const config = {
  matcher: [
    '/dashboard/:path*', '/login', '/register'
  ]
}
