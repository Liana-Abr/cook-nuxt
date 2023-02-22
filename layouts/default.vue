<template>
  <div>
   <page-header/>
    <nuxt/>
  </div>

</template>
<script>
import PageHeader from "~/components/Header";
export default {
  components: {PageHeader}
}
</script>
<style>
* {
  font-family: 'Sofia Sans', sans-serif;
}
</style>
