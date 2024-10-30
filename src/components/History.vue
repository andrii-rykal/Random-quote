<script>
export default {
  props: ["quotes"],
};
</script>

<template>
  <div class="history quotes-block">
    <div v-if="quotes.length > 0" v-for="quote of quotes">
      <p class="quotes">
        {{ quote[0].quote }}
      </p>
      <p class="author">
        {{ quote[0].author }}
      </p>
    </div>
  </div>
</template>

<style>
.history {
  background-color: lightgrey;
}

.history .quotes {
  font-size: 16px;
}

.history .author {
  font-size: 14px;
}
</style>
