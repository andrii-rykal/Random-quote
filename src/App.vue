<script>
import Quote from "./components/Quote.vue";
import History from "./components/History.vue";
import { getQuote, getQuoteCategory } from "./api/quotes";
import Categories from "./components/Categories.vue";
import Loader from "./components/Loader.vue";

export default {
  components: {
    Quote,
    History,
    Loader,
    Categories,
  },
  data() {
    return {
      quote: null,
      quotes: [],
      errorMessage: "",
      isLoading: false,
      category: '',
    };
  },
  mounted() {
    this.download();
  },
  methods: {
    onClick() {
      if (this.quote[0]) {
        this.quotes.unshift(this.quote[0]);
      }
      this.download();
    },
    download() {
      this.errorMessage = "";
      this.isLoading = true;
      (this.category ? getQuoteCategory(this.category) : getQuote())
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
    <Loader v-if="isLoading" />
    <Categories class="category" @category="category = $event" />
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
  margin-bottom: 20px;
}

</style>
