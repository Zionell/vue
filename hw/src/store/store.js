import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        paymentsList: [],
        countPage: [],
        renderPage: [],
        category:[]
    },
    mutations: {
        setInitData(state, payload) {
            state.paymentsList = payload
            state.countPage = Object.keys(payload[0])
            state.renderPage = payload[0]['page1']
        },
        setInitCategory(state, payload) {
            state.category = payload
        },
        setNewCost(state, payload) {
            let length = Object.keys(state.paymentsList[0]).length;
            let currentPageNum = Object.keys(state.paymentsList[0])[length - 1];
            let CurrentPage = state.paymentsList[0][currentPageNum];
            if (CurrentPage.length === 2) {
                let newCurrentPageNum = currentPageNum.replace(/page\d\b/, `page${length + 1}`)
                state.paymentsList[0][newCurrentPageNum] = []
            }
            state.countPage = Object.keys(state.paymentsList[0])
            CurrentPage.push(payload)
        },
        setNewRenderPage(state, key) {
            state.renderPage = state.paymentsList[0][key]
        }
    },
    getters: {
        getCountPages: state => state.countPage,
        getRenderPage: state => state.renderPage,
        getCategory: state => state.category
    },
    actions: {
        fetchData({commit}) {
            return fetch('https://raw.githubusercontent.com/Zionell/VuexData/main/data.json')
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