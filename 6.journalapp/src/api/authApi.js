import axios from 'axios'

const authApi = axios.create({
    baseURL: 'https://identitytoolkit.googleapis.com/v1/accounts',
    // Especifiquem els querry params que utilizarem
    params: {
        key: 'AIzaSyDV5W7O3pY9erNJDkxPYdjwtJIPStL8WJo'
    }
})

export default authApi