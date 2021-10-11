import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        paymentsList: [],
        categories: [],
    },
    mutations: {
        setInitData(state, payload) {
            state.paymentsList = payload
        },
        setInitCategory(state, payload) {
            state.categories = payload
        },
        setNewCost(state, payload) {
            state.paymentsList.unshift(payload)
        },
        editNewCost(state, payload) {
            state.paymentsList.splice(state.paymentsList.findIndex(item => {
                if (item === payload.data) {
                    return item
                }
                return false
            }), 1, payload.editData)
            console.log(payload)
        },
        deleteCost(state, payload) {
            state.paymentsList.splice(state.paymentsList.indexOf(payload), 1)
        },
    },
    getters: {
        getPaymentsList: state => state.paymentsList,
        getCategory: state => state.categories
    },
    actions: {
        fetchData({commit}) {
            return fetch('https://raw.githubusercontent.com/Zionell/VuexData/main/newData.json')
                .then(response => response.json())
                .then(data =>
                    commit('setInitData', data)
                )
        },
        fetchCategory({commit}) {
            return fetch('https://raw.githubusercontent.com/Zionell/VuexData/main/category.json')
                .then(response => response.json())
                .then(data =>
                    commit('setInitCategory', data)
                )
        },
    }
})
export default store