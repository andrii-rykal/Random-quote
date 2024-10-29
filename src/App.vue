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
    };
  },
  mounted() {
    getQuote()
      .then((response) => {
      this.quote = response.data;
      console.log(this.quote);
      })
      .catch((error) => {
        this.error = "Error fetching quote: " + error.message;
        console.error(this.error); 
      });
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
