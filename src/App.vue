<script>
import { defineComponent, onMounted, ref } from 'vue';
import FamousQuote from './components/FamousQuote.vue';
import QuotesHistory from './components/QuotesHistory.vue';
import { getQuotes } from './api/quotes';
import SelectCategories from './components/SelectCategories.vue';
import DownloadLoader from './components/DownloadLoader.vue';
import SocialShare from './components/SocialShare.vue';
import { shareOnFacebook, shareOnTelegram } from './data/share';

export default defineComponent({
  components: {
    FamousQuote,
    QuotesHistory,
    DownloadLoader,
    SelectCategories,
    SocialShare,
  },
  setup() {
    const quote = ref(null);
    const quotes = ref([]);
    const errorMessage = ref('');
    const isLoading = ref(false);
    const category = ref('');
    const isShare = ref(false);

    const download = () => {
      errorMessage.value = '';
      isLoading.value = true;
      isShare.value = false;
      (category.value ? getQuotes(category.value) : getQuotes())
        .then(({ data }) => {
          quote.value = data && data[0];
        })
        .catch(error => {
          errorMessage.value =
            error.response?.status === 404
              ? 'No quote found for this category.'
              : 'Sorry, the server is currently unavailable. Try again later.';
        })
        .finally(() => {
          isLoading.value = false;
        });
    };

    const setCategory = newCategory => {
      category.value = newCategory;
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
      setCategory,
      download,
    };
  },
});
</script>

<template>
  <main>
    <h1 class="title">Quotes of famous people</h1>
    <DownloadLoader v-if="isLoading" />
    <SocialShare
      v-if="isShare"
      @close="isShare = false"
      @telegramm="shareTelegram"
      @facebook="shareFacebook"
    />
    <SelectCategories
      v-if="!errorMessage && quote"
      class="category"
      @category="setCategory"
    />
    <FamousQuote
      :currentQuote="quote"
      :message="errorMessage"
      @history="onClick"
      @reload="download"
      @share="isShare = true"
    />
    <QuotesHistory :quotes="quotes" />
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
  color: var(--title-color);
}
</style>
