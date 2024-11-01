<script>
import { defineComponent, onMounted, ref } from "vue";
import Quote from "./components/Quote.vue";
import History from "./components/History.vue";
import { getQuotes } from "./api/quotes";
import Categories from "./components/Categories.vue";
import Loader from "./components/Loader.vue";
import Social from "./components/Social.vue";
import { shareOnFacebook, shareOnTelegram } from "./data/share";

export default defineComponent({
  components: {
    Quote,
    History,
    Loader,
    Categories,
    Social,
  },
  setup() {
    const quote = ref(null);
    const quotes = ref([]);
    const errorMessage = ref("");
    const isLoading = ref(false);
    const category = ref("");
    const isShare = ref(false);

    const download = () => {
      errorMessage.value = "";
      isLoading.value = true;
      isShare.value = false;
      (category.value ? getQuotes(category.value) : getQuotes())
        .then(({ data }) => {
          quote.value = data && data[0];
        })
        .catch((error) => {
          errorMessage.value =
            error.response?.status === 404
              ? "No quote found for this category."
              : "Sorry, the server is currently unavailable. Try again later.";
        })
        .finally(() => {
          isLoading.value = false;
        });
    };

    const onClick = () => {
      if (quote.value) {
        quotes.value.unshift(quote.value);
        download();
      }
    };

    const shareTelegram = () => {
      if (quote.value) {
        shareOnTelegram(quote.value);
        isShare.value = false;
      }
    };

    const shareFacebook = () => {
      if (quote.value) {
        shareOnFacebook();
        isShare.value = false;
      }
    };

    onMounted(() => {
      download();
    });

    return {
      quote,
      quotes,
      errorMessage,
      isLoading,
      isShare,
      onClick,
      shareFacebook,
      shareTelegram,
      download,
    }
  },
});
</script>

<template>
  <main>
    <h1 class="title">Quotes of famous people</h1>
    <Loader v-if="isLoading" />
    <Social
      v-if="isShare"
      @close="isShare = false"
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

<style scoped>
.title {
  font-size: 42px;
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
  padding: 20px;
  margin-bottom: 20px;
}
</style>
