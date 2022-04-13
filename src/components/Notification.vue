<template>
  <div class="notification">
    <div id="body-style" class="body animate__animated animate__fadeInDown">
      <h3>{{ title }} !</h3>
      <p>{{ message }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Notification",
  props: {
    title: String,
    message: String,
    styleBox: String,
  },
  mounted() {
    this.styleBox !== "" ? this.notificationStyle() : false;
  },
  methods: {
    successMessage() {
      return document.querySelector();
    },
    notificationStyle() {
      const styles = ["success", "warning", "danger"];
      let count = 0;

      for (; count < styles.length; count++) {
        document.getElementById("body-style").classList.remove(styles[count]);
      }

      return document.getElementById("body-style").classList.add(this.styleBox);
    },
  },
};
</script>

<style scoped>
.notification {
  position: fixed;
  display: flex;
  justify-content: center;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9999999999999999999999999999;
}

.notification .body {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 52px;
  width: max-content;
  height: max-content;
  border-radius: 0 0 12px 12px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.3);
  border-bottom: 4px solid rgba(0, 0, 0, 0.3);
  color: rgba(0, 0, 0, 0.8);
}

.success {
  background-color: rgb(0, 210, 0);
}

.warning {
  background-color: rgb(210, 210, 0);
}

.danger {
  background-color: rgb(210, 0, 0);
}

.notification h3,
.notification p {
}
</style>
