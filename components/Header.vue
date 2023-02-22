<template>
  <header>
    <div class="logo"><span>let's</span> cook</div>
    хэдер
  </header>
</template>
<script>
export default {
  name: "page-header",
}
</script>
<style scoped>
header{
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  text-transform: uppercase;
}
.logo{
  color: #729343;
  font-weight: bold;
  font-size: 20px;
}
span{
  color: #8A8A8A;
}
a{
  text-decoration: none;
  color: black;
}
a:hover,
a.router-link-active,
a.router-link-exact-active {
  color: #8A8A8A;
  cursor: pointer;
}
</style>
