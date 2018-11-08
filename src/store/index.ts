import { counter } from '@/store/counter/index';
import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';

Vue.use(Vuex);

export interface RootState {
  version: string;
}

const store: StoreOptions<RootState> = {
  state: {
    version: '1.0.0',
  },
  modules: {
    counter,
  },
  strict: true,
};

export default new Vuex.Store(store);
