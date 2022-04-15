<template>
  <div class="page-container">
    <PageHeader :title="page.title" :description="page.description" />
    <ListViewUser />
  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader.vue";
import ListViewUser from "@/components/ListViewUser.vue";

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
  components: { PageHeader, ListViewUser },
};
</script>

<style scoped>
.page-container {
  position: relative;
  width: 100%;
}
</style>
