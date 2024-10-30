<script>
export default {
  props: ["quote", "message"],
  emits: ["history", "reload"],
  methods: {
    copyToClipboard() {
      if (this.quote) {
        navigator.clipboard.writeText(this.quote[0].quote)
      }
    },
  }
};
</script>

<template>
  <div v-if="quote" class="quotes-block">
    <p class="quotes">
      {{ quote[0].quote }}
    </p>    
    <p class="author">
      {{ quote[0].author }}
    </p>
    <div class="block-btn">
      <button @click="$emit('history')" class="btn">get</button>
      <button v-if="quote" @click="copyToClipboard" class="btn">Copy Quote</button>
    </div>
  </div>
  <div v-if="message" class="error-block">
    <p >
      {{ message }}
    </p>
    <button @click="$emit('reload')" class="btn">reload</button>
  </div>
</template>

<style>
.block-btn {
  display: flex;
  align-items: center;
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
  width: 90vw;
  background-color: #fff;
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
  .error-block, .quotes-block {
    width: 70vw;
  }
}

@media (min-width: 1400px) {
  .error-block, .quotes-block {
    width: 50vw;
  }
}
</style>
