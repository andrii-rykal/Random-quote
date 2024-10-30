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
      console.log(this.quote);
      })
  },
  methods: {
    onClick() {
      this.quotes.push(this.quote[0]);
      getQuote()
      .then((response) => {
        this.quote = response.data;
        console.log(this.quotes);
      
      })
    }
  }
  
};
</script>

<template>
  <main>
    <MainName />
    <Quote :quote="quote" @history="onClick" />
    <History :quotes="quotes"/>
  </main>
</template>

<style></style>
