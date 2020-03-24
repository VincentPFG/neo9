import DefaultLayout from '~/layouts/Default.vue'
import Vuex from 'vuex'

export default (Vue, {appOptions}) ->

	Vue.component 'Layout', DefaultLayout

	Vue.use Vuex
	appOptions.store = new Vuex.Store
		state: count: 0
		mutations:
			increment: ({count}) -> count++