<template>
<div>
  <h2>Home</h2>
  <div class="nav">
    <ul>
      <li><router-link to="/counter.html">Counter</router-link></li>
      <li><router-link to="/todo.html">TODO</router-link></li>
    </ul>
  </div>
</div>
</template>

<script lang="ts">
import Counter from '@/components/counter';
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class CounterVue extends Vue {
}
</script>
