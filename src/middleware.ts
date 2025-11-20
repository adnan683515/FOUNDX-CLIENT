
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'


const AuthRoutes = ['/login', '/register']


const roleBasedRoute: Record<string, RegExp[]> = {
  USER: [/^\/profile/],
  ADMIN: [/^\/admin/],
}

const getUser = (request: NextRequest) => {

  return {
    name: 'mir',
    role: 'USER', 
  }
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  const user = getUser(request)


  if (!user) {
    if (AuthRoutes.includes(pathname)) { //login or register a jdi jaite chai tayle ok jaw

      return NextResponse.next()
    } else {
 
        //protect routes handle kortesi
      return NextResponse.redirect(new URL('/login', request.url))
    }
  }


  if (user.role && roleBasedRoute[user.role]) {
    const routes = roleBasedRoute[user.role]


    const hasAccess = routes.some((route) => {
        console.log(route.test(pathname))
        return route.test(pathname)
    })

    if (hasAccess) { // route access korte parbe kina/// true kina
      return NextResponse.next()
    }
  }


  return NextResponse.redirect(new URL('/', request.url))
}

export const config = {
  matcher: [
    '/profile/:path*', 
    '/user/account',
    '/admin/:path*',
    '/login',
    '/register',
  ],
}
