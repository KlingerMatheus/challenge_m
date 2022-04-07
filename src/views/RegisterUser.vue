<template>
  <div class="page-container">
    <PageHeader :title="page.title" :description="page.description" />
    <FormRegisterUser />
  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader.vue";
import FormRegisterUser from "@/components/FormRegisterUser.vue";

export default {
  name: "RegisterUser",
  components: { PageHeader, FormRegisterUser },
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
