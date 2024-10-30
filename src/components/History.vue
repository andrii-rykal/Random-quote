<script>
export default {
  props: ["quotes"],
  methods: {
    copyToClipboard(quote) {
      if (quote) {
        navigator.clipboard.writeText(quote.quote)
      }
    },
  }
};
</script>

<template>
  <div v-if="quotes.length > 0" class="history quotes-block">
    <div v-for="quote in quotes">
      <div class="copy-block">
        <p class="quotes">
          {{ quote.quote }}
        </p>
        <button @click="copyToClipboard(quote)">Copy</button>
      </div>
      <p class="author">
        {{ quote.author }} ({{ quote.category }})
      </p>
      <hr>
    </div>
  </div>
</template>

<style>
.copy-block {
  display: flex;
  justify-content: space-between;
}

.copy-block button {
  height: max-content;
  border-radius: 5px;
  border: none;
  margin-top: 5px;
  cursor: pointer;
  box-shadow: 0 2px 0 gray;
  transition: all 0.3s;
}

.copy-block button:hover {
  background-color: #fff;
}

.copy-block button:active {
 transform: translateY(2px);
 box-shadow: none;
}
.history {
  background-color: lightgrey;
}

.history .quotes {
  padding-top: 5px;
  font-size: 16px;
}

.history .author {
  font-size: 14px;
}



</style>
