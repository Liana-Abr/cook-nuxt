<template>
  <div>
  <page-header/>
    <nuxt/>
  </div>

</template>
<script>
import PageHeader from "~/components/header";
export default {
  components: {PageHeader}
}
</script>
<style>
* {
  font-family: 'Sofia Sans', sans-serif;
}
</style>
