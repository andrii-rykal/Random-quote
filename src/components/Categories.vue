<script>
import { defineComponent, ref } from "vue";
import categories from "../data/categories";

export default defineComponent({
  emits: ["category"],
  setup(_, { emit }) {
    const select = ref(categories);

    const handleCategoryChange = (event) => {
      emit("category", event.target.value);
    };

    return {
      select,
      handleCategoryChange,
    };
  }
});
</script>

<template>
  <div class="select-box">
    <select name="category" id="category" @change="handleCategoryChange">
      <option value="">Random category</option>
      <option
        v-for="(category, index) in select"
        :key="index"
        :value="category"
      >
        {{ category }}
      </option>
    </select>
  </div>
</template>

<style scoped>
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
