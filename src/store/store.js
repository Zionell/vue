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
            if(state.paymentsList.indexOf(payload.oldData)===-1){
                state.paymentsList.unshift(payload.data)
            }else{
                state.paymentsList.splice(state.paymentsList.findIndex(item => {
                    if (item === payload.oldData) {
                        return item
                    }
                }), 1, payload.data)
            }
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
            return fetch('https://raw.githubusercontent.com/Zionell/VuexData/main/finalData.json')
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