export default async function authenticated(context) {
  // функицю не нужно всю комментировать а то ошибки
  const isAuthenticated = window.localStorage.getItem('logged')
  if (isAuthenticated === "" || isAuthenticated === null || isAuthenticated === undefined ) {
    // if ( context.$route.name !== "login" )
    //     await context.$router.push('/login')
  } else {
    // if (context.$route.name !== "default")
    //     await context.$router.push({name: 'default'})
  }
}