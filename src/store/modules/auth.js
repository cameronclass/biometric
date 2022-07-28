

const state = {
    isAuthenticated: false,
    roles: [],
    defaultRole: "",

};

// getters
const getters = {
    isAuthenticated ( state ) {
        return state.isAuthenticated
    },
    roles(state){
        return state.roles;
    },
    defaultRole(state){
        return state.defaultRole;
    },
};

// mutations
const mutations = {
    SET_AUTH(state, payload) {
        state.isAuthenticated = payload
    },
    SET_ROLES(state, payload){
        state.roles = payload
    },
    SET_DEFAULT_ROLE(state, payload){
        state.defaultRole = payload
    },

};

// actions
const actions = {
    async login ( { commit, }, payload ) {
        window.localStorage.setItem( 'logged', JSON.stringify( payload ) );
        commit( 'SET_AUTH', true )
    },
    async roles({commit}, payload){
        commit('SET_ROLES', payload.roles);
        commit('SET_DEFAULT_ROLE', payload.default);

    }
};


export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
