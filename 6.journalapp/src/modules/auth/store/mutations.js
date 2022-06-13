export const loginUser = ( state, { user, idToken, refreshToken } ) => {
    
    if ( idToken ) {
        // Si rebem el idToken el guardem al objecte que teniem creat al state.js 
        localStorage.setItem( 'idToken', idToken )
        state.idToken = idToken
    }

    if ( refreshToken ) {
        // Si rebem el refreshToken el guardem al objecte que teniem creat al state.js 
        localStorage.setItem( 'refreshToken', refreshToken )
        state.refreshToken = refreshToken
    }

    state.user = user
    state.status = 'authenticated'
}

export const logout = (state) => {
    
    state.user = null
    state.idToken = null
    state.refreshToken = null
    state.status = 'not-authenticated'

    localStorage.removeItem('idToken')
    localStorage.removeItem('refreshToken')
}