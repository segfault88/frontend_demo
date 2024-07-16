<template>
  <div class="about">
    <h1>Items</h1>
    <ul>
      <!-- <li v-for="item in items" :key="item.id">
        {{ item.name }}
      </li> -->
    </ul>
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
import { itemsItemsGet } from '../client/services.gen'

//   import axios from 'axios'

export default {
  data() {
    return {
      items: []
    }
  },
  async created() {
    const response = await itemsItemsGet()
    console.log('response', response)
    //   const response = await axios.get('/')
    //   this.message = response.data.message
  }
}
</script>
