<script>
export default {
  props: ['quote'],
  emits: ['history'],
}
</script>

<template>
  <div v-if="quote" class="quotes-block">
      <p class="quotes">
        {{ quote[0].quote }}
      </p>
      <p class="author">
        {{ quote[0].author }}
      </p>
      <button @click="$emit('history', quote)" class="get-quotes">get</button>
    </div>
</template>

<style>
.quotes-block {
  width: 50%;
  background-color: #fff;
  margin: 0 auto 50px;
  border-radius: 10px;
  padding: 16px;
}

.quotes {
  font-size: 18px;
  margin-bottom: 8px;
}

.author {
  text-align: right;
  margin-bottom: 8px;
}

.get-quotes {
  cursor: pointer;
  font-weight: bold;
  text-transform: uppercase;
  padding: 5px 30px;
  border-radius: 10px;
  border: none;
  background-color: lightblue;
  box-shadow: 0px 3px 3px lightskyblue;
  transition: all 0.3s;
}

.get-quotes:hover {
  background-color: lightskyblue;
}

.get-quotes:active {
  box-shadow: none;
  transform: translateY(2px);
}
</style>