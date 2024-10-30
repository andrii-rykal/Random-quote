<script>
import Quote from "./components/Quote.vue";
import History from "./components/History.vue";
import Loader from "./components/Loader.vue";
import { getQuote } from "./api/quotes";

export default {
  components: {
    Quote,
    History,
    Loader,
  },
  data() {
    return {
      quote: null,
      quotes: [],
      errorMessage: "",
      isLoading: false,
    };
  },
  mounted() {
    this.download();
  },
  methods: {
    onClick() {
      if (this.quote) {
        this.quotes.push(this.quote[0]);
      }
      this.download();
    },
    download() {
      this.errorMessage = "";
      this.isLoading = true;
      getQuote()
        .then((response) => {
          this.quote = response.data;
        })
        .catch(() => {
          this.errorMessage =
            "Sorry, the server is not responding right now. Try again later.";
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
  },
};
</script>

<template>
  <main>
    <h1 class="title">Quotes of famous people</h1>
    <MainName />
    <Loader v-if="isLoading" />
    <Quote
      :quote="quote"
      @history="onClick"
      @reload="download"
      :message="errorMessage"
    />
    <History :quotes="quotes" />
  </main>
</template>

<style>
.title {
  font-size: 42px;
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
  padding: 20px;
  margin-bottom: 50px;
}</style>
