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
  <div class="select-box">
    <select name="category" id="category" @change="handleCategoryChange">
      <option value="">Random category</option>
      <option v-for="category, index in categories" :key="index" :value="category">{{ category }}</option>
    </select>
  </div>
</template>

<style>
#category {
  border: none;
  border-radius: 5px;
  outline: none;
  padding: 5px 20px;
  font-size: 14px;
}

.select-box {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}
</style>