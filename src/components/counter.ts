import * as actions from '@/store/counter/actions';
import * as getters from '@/store/counter/getters';
import { CounterState } from '@/store/counter/index';
import * as mutations from '@/store/counter/mutations';
import * as modules from '@/store/modules';
import { Component, Prop, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';

const CounterModule = namespace(modules.COUNTER);

@Component
export default class Counter extends Vue {
  @CounterModule.State(state => state)
  counterState!: CounterState;

  @CounterModule.Getter(getters.COUNTER_VALUE) counterValue!: number;

  @CounterModule.Mutation(mutations.INCREMENT) incrementCounter!: () => void;

  @CounterModule.Mutation(mutations.DECREMENT) decrementCounter!: () => void;

  @CounterModule.Mutation(mutations.SET_VALUE)
  private setCounterMutation!: (value: number) => void;

  @CounterModule.Action(actions.DELAY_INCREMENT)
  private delayIncrementCounterAction!: () => Promise<number>;

  @Prop({
    type: Boolean,
    required: false,
    default: false
  })
  private enableActions!: boolean;

  clearCounter() {
    this.setCounterMutation(0);
  }

  mounted() {
    console.log('mounted');
  }

  delayIncrementCounter() {
    this.delayIncrementCounterAction().then(value =>
      alert(`delay increment counter: ${value}`)
    );
  }
}
