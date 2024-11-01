<script>
import { copyToClipboard } from '@/data/copy';
import { defineComponent, toRefs } from 'vue';

export default defineComponent ({
  props: {
    quote: Object,
    message: String,
  },
  emits: ["history", "reload", "share"],
  setup(props, { emit }) {
    const { quote, message } = toRefs(props);

    const copyQuote = (obj) => {
      copyToClipboard(obj);
    };

    return {
      quote,
      message,
      copyQuote,
      emitHistory: () => emit('history'),
      emitReload: () => emit('reload'),
      emitShare: () => emit('share')
    }
  }
});
</script>

<template>
  <div v-if="quote" class="quotes-block">
    <p class="quotes">
      {{ quote.quote }}
    </p>
    <p class="author">
      {{ quote.author }}
      <span v-if="quote.category">({{ quote.category }})</span>
    </p>
    <div class="block-btn">
      <button @click="emitHistory" class="btn">get quote</button>
      <button v-if="quote" @click="copyQuote(quote)" class="btn">
        Copy Quote
      </button>
      <button @click="emitShare" class="btn">to share</button>
    </div>
  </div>
  <div v-if="message" class="error-block">
    <p>
      {{ message }}
    </p>
    <button @click="emitReload" class="btn">reload</button>
  </div>
</template>

<style scoped>
.block-btn {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}

.block-btn p {
  color: grey;
}

.error-block {
  width: 90vw;
  margin: auto;
  background-color: lightskyblue;
  border-radius: 10px;
  padding: 16px;
  font-size: 24px;
}

.error-block p {
  text-align: center;
  margin-bottom: 20px;
}

.error-block .btn {
  background-color: lightcoral;
  box-shadow: 0px 3px 3px #f35a5a;
}

.error-block .btn:hover {
  background-color: #f4a4a4;
}

.quotes-block {
  background-color: #fff;
  width: 90vw;
  margin: 0 auto 50px;
  border-radius: 10px;
  padding: 16px;
}

.quotes {
  font-size: 18px;
  margin-bottom: 8px;
}

.author {
  text-align: right;
  margin-bottom: 8px;
}

.btn {
  cursor: pointer;
  font-weight: bold;
  text-transform: uppercase;
  padding: 5px 30px 2px;
  border-radius: 10px;
  border: none;
  background-color: lightblue;
  box-shadow: 0px 3px 3px lightskyblue;
  transition: all 0.3s;
}

.btn:hover {
  background-color: lightskyblue;
}

.btn:active {
  box-shadow: none;
  transform: translateY(2px);
}

@media (min-width: 900px) {
  .error-block,
  .quotes-block {
    width: 70vw;
  }
}

@media (min-width: 1400px) {
  .error-block,
  .quotes-block {
    width: 50vw;
  }
}
</style>
