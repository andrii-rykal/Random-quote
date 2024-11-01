<script>
import { copyToClipboard } from '@/data/copy';
import { defineComponent, toRefs } from 'vue';

export default defineComponent({
  props: {
    quote: Object,
    message: String,
  },
  emits: ['history', 'reload', 'share'],
  setup(props, { emit }) {
    const { currentQuote: currentQuote, message: errorMessage } = toRefs(props);

    const copyQuote = obj => {
      copyToClipboard(obj);
    };

    return {
      currentQuote,
      errorMessage,
      copyQuote,
      emitHistory: () => emit('history'),
      emitReload: () => emit('reload'),
      emitShare: () => emit('share'),
    };
  },
});
</script>

<template>
  <div v-if="currentQuote" class="quotes-block">
    <p class="quotes">
      {{ currentQuote.quote }}
    </p>
    <p class="author">
      {{ currentQuote.author }}
      <span v-if="currentQuote.category">({{ currentQuote.category }})</span>
    </p>
    <div class="block-btn">
      <button
        @click="emitHistory"
        class="btn"
        title="Get quote and add to history"
      >
        get quote
      </button>
      <button v-if="currentQuote" @click="copyQuote(currentQuote)" class="btn">
        Copy Quote
      </button>
      <button @click="emitShare" class="btn">to share</button>
    </div>
  </div>
  <div v-if="errorMessage" class="error-block">
    <p>
      {{ errorMessage }}
    </p>
    <button @click="emitReload" class="btn">reload</button>
  </div>
</template>

<style scoped>
.block-btn {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
}

.error-block {
  width: 90vw;
  margin: auto;
  background-color: var(--error-color);
  box-shadow: 0px 3px 5px var(--error-shadow);
  border-radius: 10px;
  padding: 16px;
  font-size: 24px;
}

.error-block p {
  text-align: center;
  margin-bottom: 20px;
}

.error-block .btn:hover {
  background-color: var(--error-hover);
}

.quotes-block {
  background-color: var(--color-white);
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
  padding: 5px;
  font-size: 12px;
  letter-spacing: -0.5px;
  cursor: pointer;
  font-weight: bold;
  text-transform: uppercase;
  border-radius: 10px;
  border: none;
  transition: all 0.3s;
  background-color: var(--primary-color);
  box-shadow: 0px 3px 3px var(--button-shadow);
}

.btn:hover {
  background-color: var(--secondary-color);
}

.btn:active {
  box-shadow: none;
  transform: translateY(2px);
}

@media (min-width: 768px) {
  .error-block,
  .quotes-block {
    width: 70vw;
  }

  .btn {
    padding: 5px 30px 3px;
    font-size: 14px;
    letter-spacing: normal;
  }
}

@media (min-width: 1024px) {
  .error-block,
  .quotes-block {
    max-width: 800px;
    width: 50vw;
  }

  .btn {
    padding: 5px 30px 3px;
    font-size: 16px;
  }
}
</style>
