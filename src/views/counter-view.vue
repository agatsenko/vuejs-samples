<template>
<div id="counter-view">
  <h2>Counter</h2>
  <counter :enableActions="true"/>
</div>
</template>

<script lang="ts">
import Counter from '@/components/counter';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    Counter,
  }
})
export default class CounterVue extends Vue {
}
</script>
