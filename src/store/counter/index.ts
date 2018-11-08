import { namespace } from 'vuex-class';
import { RootState } from '@/store/index';
import { Module } from 'vuex';
import * as mutations from '@/store/counter/mutations';

export interface CounterState {
  value: number;
}

export const counter: Module<CounterState, RootState> = {
  namespaced: true,

  state: {
    value: 0
  },

  getters: {
    counterValue(state: CounterState): number {
      return state.value;
    }
  },

  mutations: {
    increment(state: CounterState) {
      ++state.value;
    },

    decrement(state) {
      --state.value;
    },

    setValue(state, payload: number) {
      state.value = payload;
    }
  },

  actions: {
    delayIncrement(context): Promise<number> {
      return new Promise<number>((resolve, reject) => {
        setTimeout(() => {
          context.commit(mutations.INCREMENT);
          resolve(context.state.value);
        }, 2000);
      });
    }
  }
};
