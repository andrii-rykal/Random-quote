<script>

</script>

<template>
  <div className="loader">
    <div className="loader-content"></div>
  </div>
</template>

<style>
.loader {
  position: absolute;
  display: flex;
  width: 100%;
  height: 100vh;
}

.loader-content {
  border-radius: 50%;
  width: 5em;
  height: 5em;
  margin: 1em auto;
  border: 0.5em solid #ddd;
  border-left-color: #000;
  animation: load 1.2s infinite linear;
}

@keyframes load {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
