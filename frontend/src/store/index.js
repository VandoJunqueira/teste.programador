import { createStore } from 'vuex'

// Create a new store instance.
export default createStore({
    state() {
        return {
            pageLoading: false,
        }
    },
    mutations: {
        setLoading(state, loading) {
            state.pageLoading = loading.status;
        }
    },
    getters: {
        getPageLoading(state) {
            return state.pageLoading;
        },
    },
    actions: {

    }
})
