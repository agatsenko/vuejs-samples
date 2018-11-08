<template>
<div>
  <h2>Home</h2>
  <counter/>
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
