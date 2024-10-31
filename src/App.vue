<script>
import Quote from "./components/Quote.vue";
import History from "./components/History.vue";
import { getQuote, getQuoteCategory } from "./api/quotes";
import Categories from "./components/Categories.vue";
import Loader from "./components/Loader.vue";
import Social from "./components/Social.vue";

export default {
  components: {
    Quote,
    History,
    Loader,
    Categories,
    Social,
  },
  data() {
    return {
      quote: null,
      quotes: [],
      errorMessage: "",
      isLoading: false,
      category: '',
      isShare: false,
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
    shareTelegram() {
      if (this.quote && this.quote.length > 0) {
        const quoteText = encodeURIComponent(`${this.quote[0].quote} - ${this.quote[0].author}`);
        const telegramUrl = `https://t.me/share/url?url=${window.location.href}&text=${quoteText}`;
        window.open(telegramUrl, "_blank");
        console.log(quoteText);
        this.isShare = false;
      }
    },
    shareFacebook() {
      if (this.quote && this.quote.length > 0) {
        const currentUrl = window.location.href; 
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`;
        window.open(facebookUrl, "_blank");
        this.isShare = false;
    
      }
    },
  },
};
</script>

<template>
  <main>
    <h1 class="title">Quotes of famous people</h1>
    <Loader v-if="isLoading" />
    <Social v-if="isShare" @close="isShare = false"
    @telegramm="shareTelegram"
    @facebook="shareFacebook"
    />
    <Categories class="category" @category="category = $event" />
    <Quote
      :quote="quote"
      :message="errorMessage"
      @history="onClick"
      @reload="download"
      @share="isShare = true"
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
