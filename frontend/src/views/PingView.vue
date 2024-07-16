<template>
  <div class="about">
    <h1>Ping: {{ message }}</h1>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

<script lang="ts">
import axios from 'axios'

export default class PingView {
  data() {
    return {
      message: '...'
    }
  },
  async created() {
    const response = await axios.get('/')
    this.message = response.data.message
  }
}
</script>
