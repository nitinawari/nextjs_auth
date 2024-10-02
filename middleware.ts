import authConfig from "@/auth.config"
import NextAuth from "next-auth"

import {
  publicRoutes,
  authRoutes,
  apiAuthPrefix,
  DEFAULT_LOGIN_REDIRECT
  
} from "@/routes"

const { auth } = NextAuth(authConfig)
export default auth((req) =>{
         const { nextUrl } = req;
         const isLoggedIn  = !!req.auth;  //!! this turn null value in false 

         const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);

         const isPublicRoutes = publicRoutes.includes(nextUrl.pathname);

         const isAuthRoute = authRoutes.includes(nextUrl.pathname);

  if (isApiAuthRoute){
  return undefined;
  }  
 
  if(isAuthRoute){
    if (isLoggedIn) {
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT , nextUrl));    
    }
    return undefined ;
  };

if(!isLoggedIn && !isPublicRoutes){
  return Response.redirect(new URL("/auth/login" , nextUrl))
}
return undefined;
})
 
export const config = {
         matcher: [
                  // Skip Next.js internals and all static files, unless found in search params
                  '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
                  // Always run for API routes
                  '/(api|trpc)(.*)',
                ],
}