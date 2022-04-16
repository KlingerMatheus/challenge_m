<template>
  <div class="loader-container">
    <p>Wait a second...</p>
    <span class="loader"></span>
  </div>
</template>

<script>
export default {
  name: "LoadingEffect",
};
</script>

<style scoped>
.loader-container {
  background: rgba(0, 160, 255, 0.84);
  backdrop-filter: blur(4px);
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 0px;
  left: 0px;
  z-index: 9999;
  width: 100%;
  height: 100%;
}

.loader-container p {
  font-weight: 400;
  font-size: 40px;
}

.loader {
  border: 4px solid #f3f3f3;
  position: relative;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  margin-top: 18px;
  border-top: 4px solid #3498db;
  width: 70px;
  height: 70px;
  animation: spin 1s linear infinite;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 1s ease-in-out;
}

.v-enter-from,
.v-leave-to {
  opacity: 4px;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@media screen and (max-width: 900px) {
  .loader-container {
    justify-content: center;
    position: fixed;
  }

  .loader-container p {
    font-size: 36px;
  }
}
</style>
