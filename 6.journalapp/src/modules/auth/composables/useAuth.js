import { computed } from "vue"
import { useStore } from "vuex"

const useAuth = () => {
    
    const store = useStore()

    const createUser = async(user) => {
        // Petició a la url del actions dins el Store pasan com a paremetre el usuari i la seva informació
        const resp = await store.dispatch('auth/createUser', user)
        // Retornem la resposta
        return resp
    }

    const loginUser = async(user) => {
        // Petició a la url del actions dins el Store pasan com a paremetre el usuari i la seva informació
        const resp = await store.dispatch('auth/signInUser', user)
        // Retornem la resposta
        return resp
    }

    const checkAuthStatus = async() => {
        const resp = await store.dispatch('auth/checkAuthentication')
        return resp
    }

    return {
        createUser,
        loginUser,
        checkAuthStatus,

        // Variable computada pasada a la funció del arxiu getters 
        authStatus: computed(() => store.getters['auth/currentState'])
    }
}

export default useAuth