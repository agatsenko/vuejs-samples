<template>
<div id="counter-view">
  <home-link/>
  <h2>Counter</h2>
  <counter :enableActions="true"/>
</div>
</template>

<script lang="ts">
import Counter from '@/components/counter';
import HomeLink from '@/components/home-link.vue';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    HomeLink,
    Counter,
  }
})
export default class CounterVue extends Vue {
}
</script>
