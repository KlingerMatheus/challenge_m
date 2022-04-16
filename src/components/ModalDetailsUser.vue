<template>
  <div class="modal-details-container animate__animated animate__fadeIn">
    <button class="btn-close" @click="$emit('emitCloseModal')">
      <i class="fa fa-times"></i>
    </button>
    <div
      class="modal-content animate__animated animate__backInUp animate__delay"
    >
      <div class="modal-header">
        <small>ID: {{ user.id }}</small>
        <h2>{{ user.first_name }} {{ user.last_name }}</h2>
      </div>
      <div class="modal-body">
        <p class="sub-title">Address:</p>
        <hr />
        <p>
          {{ user.street }}, {{ user.number }}, {{ user.neighborhood }},
          {{ user.city }} - {{ user.state }}, {{ user.zip }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalDetailsUser",
  props: ["user"],
  emits: ["emitCloseModal"],
  data: () => {
    return {};
  },
};
</script>

<style scoped>
.modal-details-container {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(4px);
}

.btn-close {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
  width: 50px;
  height: 50px;
  border-radius: 100px;
  font-size: 24px;
  cursor: pointer;
  transition: ease 250ms;
}

.btn-close:hover {
  background-color: rgb(0, 160, 255);
  color: #fff;
}

.modal-body .sub-title {
  text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  padding: 6px 24px;
  border-radius: 100px;
  font-size: 16px;
  font-weight: bolder;
}

.modal-content {
  background-color: rgb(60, 60, 60);
  border-radius: 6px;
  padding: 26px;
}

.modal-body {
  margin-block: 18px;
}

hr {
  background-color: rgba(255, 255, 255, 0.05);
  height: 1px;
  margin-block: 12px;
}
</style>
