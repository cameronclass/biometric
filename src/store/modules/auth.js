

const state = {
    isAuthenticated: false,

};

// getters
const getters = {
    isAuthenticated ( state ) {
        return state.isAuthenticated
    }
};

// mutations
const mutations = {
    SET_AUTH(state, payload) {
        state.isAuthenticated = payload
    }
};

// actions
const actions = {
    async login ( { commit, }, payload ) {
        window.localStorage.setItem( 'logged', JSON.stringify( payload ) );
        commit( 'SET_AUTH', true )
    },
};


export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
