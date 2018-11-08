<template>
<div id="todo-view">
  <h2>TODO</h2>
</div>
</template>

<script lang="ts">
import Counter from '@/components/counter';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
  }
})
export default class CounterVue extends Vue {
}
</script>
