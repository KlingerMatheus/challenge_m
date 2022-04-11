<template>
  <Transition>
    <div class="loader-container">
      <p>Wait a second...</p>
      <span class="loader"></span>
    </div>
  </Transition>
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
  font-size: 18px;
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

/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.75s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
