<template>
  <div class="page-container">
    <PageHeader :title="page.title" :description="page.description" />
  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader.vue";

export default {
  name: "ViewUsers",
  data: () => {
    return {
      page: {
        title: "View Users",
        description:
          "Here you can view all the users registered on the system.",
      },
    };
  },
  components: { PageHeader },
};
</script>

<style scoped>
.page-container {
  position: relative;
  width: 100%;
}
</style>
