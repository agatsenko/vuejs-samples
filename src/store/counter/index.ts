import * as actions from '@/store/counter/actions';
import * as getters from '@/store/counter/getters';
import * as mutations from '@/store/counter/mutations';
import { RootState } from '@/store/index';
import { Module } from 'vuex';

export interface CounterState {
  value: number;
}

export const counter: Module<CounterState, RootState> = {
  namespaced: true,

  state: {
    value: 0
  },

  getters: {
    [getters.COUNTER_VALUE](state: CounterState): number {
      return state.value;
    }
  },

  mutations: {
    [mutations.INCREMENT](state: CounterState) {
      ++state.value;
    },

    [mutations.DECREMENT](state) {
      --state.value;
    },

    [mutations.SET_VALUE](state, payload: number) {
      state.value = payload;
    }
  },

  actions: {
    [actions.DELAY_INCREMENT](context): Promise<number> {
      return new Promise<number>((resolve, reject) => {
        setTimeout(() => {
          context.commit(mutations.INCREMENT);
          resolve(context.state.value);
        }, 2000);
      });
    }
  }
};
