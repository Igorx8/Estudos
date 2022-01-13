import Vuex from 'vuex'
import Vue from 'vue'
import http from './http/index.js'

Vue.use(Vuex)

const estado = {
    token: null,
    usuario: {}
}

const mutations = {}

const actions = {}

export default new Vuex.Store({
    state: estado,
    mutations,
    actions
})