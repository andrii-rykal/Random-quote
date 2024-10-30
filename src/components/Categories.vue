<script>
import categories from '../data/categories'
export default {
  data() {
    return {
      categories, 
    };
  },
  emits: ['category'],
  methods: {
    handleCategoryChange(event) {
      this.$emit('category', event.target.value); 
    },
  },
}
</script>

<template>
  <div>
    <select name="category" id="category" @change="handleCategoryChange">
      <option value="">Chose category</option>
      <option v-for="category, index in categories" :key="index" :value="category">{{ category }}</option>
    </select>
  </div>
</template>

<style>
</style>