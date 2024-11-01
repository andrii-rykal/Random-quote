<script>
export default {
  emits: ["close", "telegramm", "facebook"],
  methods: {},
};
</script>

<template>
  <div class="social-block">
    <button @click="$emit('close')" class="social-btn">X</button>

    <button @click="$emit('telegramm')" class="social-btn">
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="40" height="40" rx="20" fill="#27A6E5" />
        <path
          d="M28 12.6022L24.9946 28.2923C24.9946 28.2923 24.5741 29.3801 23.4189 28.8584L16.4846 23.3526L16.4524 23.3364C17.3891 22.4654 24.6524 15.7027 24.9698 15.3961C25.4613 14.9214 25.1562 14.6387 24.5856 14.9974L13.8568 22.053L9.71764 20.6108C9.71764 20.6108 9.06626 20.3708 9.00359 19.8491C8.9401 19.3265 9.73908 19.0439 9.73908 19.0439L26.6131 12.1889C26.6131 12.1889 28 11.5579 28 12.6022Z"
          fill="#FEFEFE"
        />
      </svg>
    </button>
    <button @click="$emit('facebook')" class="social-btn">
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="40" height="40" rx="20" fill="#0B84EE" />
        <path
          d="M21.6571 20.3648H25.3793L25.9637 16.5605H21.6563V14.4813C21.6563 12.901 22.1696 11.4996 23.6389 11.4996H26V8.17974C25.5852 8.12338 24.7078 8 23.05 8C19.5882 8 17.5587 9.8393 17.5587 14.0297V16.5605H14V20.3648H17.5587V30.821C18.2634 30.9276 18.9773 31 19.7101 31C20.3724 31 21.0189 30.9391 21.6571 30.8522V20.3648Z"
          fill="white"
        />
      </svg>
    </button>
  </div>
</template>

<style scoped>
.social-block {
  position: fixed;
  left: 50%;
  top: 30%;
  transform: translateX(-50%);
  width: 200px;
  height: 100px;
  background-color: rgba(144, 238, 144, 0.9);
  border-radius: 10px;
  padding: 20px;
}

.social-block .social-btn:first-child {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 20px;
}

.social-btn {
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  transition: 0.3s transform;
}

.social-btn:hover {
  transform: scale(0.95);
}
</style>
