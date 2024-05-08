export default defineNuxtRouteMiddleware(async (to, from) => {
  const {session} =  useAuth()
  const user = session.value?.user

  if (to.path.startsWith('/sign') && user) {
    console.log('redirecting to dashboard')
    return navigateTo('/dashboard/pages')
  }
  if (!user && to.path.startsWith('/dashboard')) {
    console.log('Not Authorized! redirecting to main-page')
    return navigateTo('/')
  }
})