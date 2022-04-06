<template>
  <div class="page-header">
    <h1>{{ title }}</h1>
    <p>{{ description }}</p>
    <hr />
  </div>
</template>

<script>
export default {
  name: "PageHeader",
  props: { title: String, description: String },
};
</script>

<style scoped>
h1,
p {
  margin-left: 16px;
}

hr {
  background-color: rgba(255, 255, 255, 0.1);
  height: 1px;
  width: 100%;
  margin-block: 16px;
}
</style>
