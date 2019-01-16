import Vue from 'vue'
import Vuex from 'vuex'
import axios from "./axios.js"
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list:""
  },
  mutations: {
    setdata(state,data){
      console.log(data)
      state.list=data
    }
  },
  actions: {
    getdata({commit}){
      axios.get("/data").then(res=>{
        commit("setdata",res.data.res)
      })
    }
  }
})
