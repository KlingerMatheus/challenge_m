<template>
  <div class="page-container">
    <PageHeader :title="page.title" :description="page.description" />
  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader.vue";

export default {
  name: "RegisterUser",
  components: { PageHeader },
  data: () => {
    return {
      page: {
        title: "Register User",
        description: "Here you can register a user.",
      },
    };
  },
};
</script>
