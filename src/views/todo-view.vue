<template>
<div id="todo-view">
  <home-link/>
  <h2>TODO</h2>
</div>
</template>

<script lang="ts">
import Counter from '@/components/counter';
import HomeLink from '@/components/home-link.vue';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    HomeLink,
  }
})
export default class CounterVue extends Vue {
}
</script>
