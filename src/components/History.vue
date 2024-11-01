<script>
import { copyToClipboard } from "@/data/copy";

export default {
  props: ["quotes"],
  methods: {
    copyQuote(obj) {
      copyToClipboard(obj);
    },
  },
};
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
}

.copy-btn {
  height: max-content;
  border-radius: 5px;
  border: none;
  margin-top: 5px;
  cursor: pointer;
  box-shadow: 0 2px 0 gray;
  transition: all 0.3s;
}

.copy-btn:hover {
  background-color: #fff;
}

.copy-btn:active {
  transform: translateY(2px);
  box-shadow: none;
}
.history {
  background-color: lightgrey;
  width: 90vw;
  margin: 0 auto 50px;
  border-radius: 10px;
  padding: 16px;
}

.history .quotes {
  padding-top: 5px;
  font-size: 16px;
}

.history .author {
  font-size: 14px;
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
