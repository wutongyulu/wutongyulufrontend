import Vue from 'vue'
import Vuex from 'vuex'
import  mutations  from './mutations'
import  getters  from './getters'
import  actions  from './actions'





Vue.use(Vuex)

const store =  new Vuex.Store({
    state:{
        requestStatus:false,
        registeMessage:"",
        document:[],
        documentSize:10,
        documentById:[],
    },
    getters,
    mutations,
    actions,
    modules:{
        

    }

})

export default store