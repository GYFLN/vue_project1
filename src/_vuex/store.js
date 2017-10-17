
import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
Vue.use(Vuex)

const state = {
	
}

const getters = {
	
}

const mutations = {
	// changePositionCity(state,city){
	// 	console.log(city)
	// 	let _position = {city:city}
	// 	state.position=_position
	// }
}





const store = new Vuex.Store({
	state,getters,mutations,actions
})


export default store