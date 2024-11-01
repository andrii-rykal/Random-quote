<script>
import { copyToClipboard } from "@/data/copy";
import { defineComponent, toRefs } from "vue";

export default defineComponent ({
  props: {
    quotes: Array,
  },
  setup(props) {
    const { quotes } = toRefs(props);

    const copyQuote = (obj) => {
      copyToClipboard(obj);
    };

    return {
      quotes,
      copyQuote
    }
  }
});
</script>

<template>
  <div v-if="quotes.length > 0" class="history">
    <div v-for="quote in quotes">
      <div class="copy-block">
        <p class="quotes">
          {{ quote.quote }}
        </p>
        <button class="copy-btn" @click="copyQuote(quote)">Copy</button>
      </div>
      <p class="author">{{ quote.author }} ({{ quote.category }})</p>
      <hr />
    </div>
  </div>
</template>

<style scoped>
.copy-block {
  display: flex;
  justify-content: space-between;
  gap: 5px;
  margin-bottom: 4px;
}

.copy-btn {
  height: max-content;
  border-radius: 5px;
  border: none;
  margin-top: 5px;
  cursor: pointer;
  box-shadow: 0 2px 0 var(--color-gray);
  transition: all 0.3s;
}

.copy-btn:hover {
  background-color: var(--color-white);
}

.copy-btn:active {
  transform: translateY(2px);
  box-shadow: none;
}
.history {
  background-color: var(--history-bg-color);
  width: 90vw;
  margin: 0 auto 50px;
  border-radius: 10px;
  padding: 16px;
}

.quotes {
  padding-top: 5px;
  font-size: 16px;
}

.author {
  font-size: 14px;
  text-align: right;
  margin: 0 50px 8px 0;
}

@media (min-width: 900px) {
  .history {
    width: 70vw;
  }
}

@media (min-width: 1400px) {
  .history {
    width: 50vw;
  }
}
</style>
