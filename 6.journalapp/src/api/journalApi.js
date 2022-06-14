import axios from 'axios'

const journalApi = axios.create({
    baseURL: 'https://vue-journal-133c7-default-rtdb.europe-west1.firebasedatabase.app'
})

// Interceptem totes les peticions que van a la baseURL i afegim al heder el idToken del usuari
journalApi.interceptors.request.use( (config) => {

    config.params = {
        auth: localStorage.getItem('idToken')
    }

    return config
})

export default journalApi