import authApi from "@/api/authApi"

export const createUser = async ({ commit }, user) => {

    // Desestructura el user amb la informació que ens interesa
    const { name, email, password } = user

    try {
        // Utilitzant la funció authApi fem una petició al servidor pasan els parametres per crear un nou usuari
        const { data } = await authApi.post(':signUp', { email, password, returnSecureToken: true  }) 
        // Desestructura la data per extreure el idToken i el refreshToken
        const { idToken, refreshToken } = data
        // Amb la funcio o Url authApi fem una petició per actulitzar el usuari nom del usuari creat previament
        await  authApi.post(':update', { displayName: name, idToken, refreshToken })

        // Eliminem la contasenya del objecte user que conte tota la informació del usuari
        delete user.password
        // En el cas que el usuari s'ha creat correctament es logejara dins la applicació utilitzant la funció de l'arxiu mutations
        commit('loginUser', { user, idToken, refreshToken })

        return { ok: true }
    } catch (error) {
        return { ok: false, message: error.response.data.error.message}
    }
}


export const signInUser = async ({ commit }, user) => {

    // Desestructura el user amb la informació que ens interesa
    const { email, password } = user

    try {
        // Utilitzant la funció authApi fem una petició al servidor pasan els parametres per crear un nou usuari
        const { data } = await authApi.post(':signInWithPassword', { email, password, returnSecureToken: true  }) 
        // Desestructura la data per extreure el idToken i el refreshToken
        const { displayName, idToken, refreshToken } = data
        
        // Afegim al objecte user el nom del usuari logejat
        user.name = displayName
        // En el cas que el usuari s'ha creat correctament es logejara dins la applicació utilitzant la funció de l'arxiu mutations
        commit('loginUser', { user, idToken, refreshToken })

        return { ok: true }

    } catch (error) {
        return { ok: false, message: error.response.data.error.message}
    }
}

export const checkAuthentication = async ({ commit }) => {
    
    const idToken = localStorage.getItem('idToken')
    const refreshToken = localStorage.getItem('refreshToken')

    if ( !idToken ) {
        commit('logout')
        return { ok :false , message: 'No hay token!'}
    }

    try {

        const {data} = await authApi.post('lookup', { idToken })
        const { displayName, email } = data.users[0]

        const user = {
            name: displayName,
            email
        }
        
        commit('loginUser', { user, idToken, refreshToken })

        return { ok: true }


    } catch (error) {
        commit('logout')
        return { ok :false , message: error.response.data.error.message}

    }
}