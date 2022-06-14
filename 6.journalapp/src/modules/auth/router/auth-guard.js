import store from "@/store"

// to -> La ruta on vol anar from -> De on ve  next -> Comprobació si pasa o el redirecciono
const isAuthenticatedGuard = async(to, from, next) => {

    const { ok } = await store.dispatch('auth/checkAuthentication')

    if ( ok ) next()
    else next({ name: 'login' })
}

export default isAuthenticatedGuard