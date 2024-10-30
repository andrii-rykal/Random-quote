<script>
export default {
  props: ["quotes"],
  
};
</script>

<template>
  <div v-if="quotes.length > 0" class="history quotes-block">
    <div v-for="quote in quotes">
      <p class="quotes">
        {{ quote.quote }}
      </p>
      <p class="author">
        {{ quote.author }}
      </p>
      <hr>
    </div>
  </div>
</template>

<style>
.history {
  background-color: lightgrey;
}

.history .quotes {
  padding-top: 5px;
  font-size: 16px;
}

.history .author {
  font-size: 14px;
}

</style>
