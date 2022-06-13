import { createStore } from 'vuex'
import getRandomInt from '../helpers/getRandomint'

export default createStore({
    state: {
        count: 1,
        lastMutation: 'none',
        isLoading: false
    },

    mutations: {
        increment( state ) {
            state.count++
            state.lastMutation = 'increment'
        },
        incrementBy(state, val) {
            state.count += val
            state.lastMutation = 'incrementBy'
            state.lastRandomInt = val
        },
        setLoading(state, val){   
            state.isLoading = val
            state.lastMutation = 'setLoading' + val
        }
    },

    actions: {
        async incrementRandomInt({ commit }) {
            commit('setLoading', true)
            const randomInt = await getRandomInt()
            commit('incrementBy', randomInt)
            commit('setLoading', false)
        }
    },

    getters: {
        squareCount( state ) {
            return state.count * state.count
        }
    }
})