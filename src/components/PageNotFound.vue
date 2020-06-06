<template>
  <v-container>
    <v-row class="text-center">
      {{ message }}
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "pageNotFound",

  data: () => ({
    message: "This is not the page you're looking for."
  })
};
</script>
