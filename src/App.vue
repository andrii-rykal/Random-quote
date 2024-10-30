<script>
import Quote from "./components/Quote.vue";
import History from "./components/History.vue";
import MainName from "./components/MainName.vue";
import { getQuote } from "./api/quotes";

export default {
  components: {
    MainName,
    Quote,
    History,
  },
  data() {
    return {
      quote: null,
      quotes: [],
    };
  },
  mounted() {
    getQuote()
      .then((response) => {
      this.quote = response.data;
      console.log(response);
      })
  },
};
</script>

<template>
  <main>
    <MainName />
    <Quote :quote="quote" />
    <History />
  </main>
</template>

<style></style>
