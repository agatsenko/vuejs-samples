<template>
<div>
  Counter: {{ counterValue }}
  <div :style="{ display: (enableActions === true ? 'inline' : 'none') }">
    <button @click="incrementCounter">+</button>
    <button @click="delayIncrementCounter">~+</button>
    <button @click="decrementCounter">-</button>
    <button @click="clearCounter">clear</button>
  </div>
</div>
</template>

<script lang="ts" src="./counter.ts"></script>
