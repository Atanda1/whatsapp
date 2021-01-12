import Vue from "vue";
import Vuex from "vuex";
import authen from './authen'

Vue.use(Vuex);

export default new Vuex.Store({
  modules : {
    authen
  }
});
