<template>
  <header>
    <NuxtLink to="/"><div class="logo"><span>let's</span> cook</div></NuxtLink>
    <NuxtLink to="/favorites">Избранное</NuxtLink>
    <NuxtLink to="/myrecipes">Мои рецепты</NuxtLink>
    <NuxtLink to="/search">Поиск</NuxtLink>
    <NuxtLink to="/test">Test</NuxtLink>
<!--    <NuxtLink to="/profile" :style="{display: seeLink ? 'flex' : 'none'}" >{{ username }}</NuxtLink>-->
<!--    <NuxtLink to="/login" :style="{display: seeLink ? 'flex' : 'none'}">Выход</NuxtLink>-->
<!--    <NuxtLink to="/login" :style="{display: seeLink ? 'none' : 'flex'}">Вход</NuxtLink>-->
  </header>
</template>

<script>
export default {
  name: "page-header",
  auth: false ,
  data(){
    return {
      seeLink: false,
    }
  },
  methods:{
    // profileExit(){
    //   if(this.seeLink == true){
    //     localStorage.removeItem("userName");
    //     localStorage.removeItem("userEmail");
    //     localStorage.removeItem("userPwd");
    //     this.$router.replace("/")
    //   }
    // }
  },
  created() {
    // this.seeLink = !!localStorage.getItem("UserToken");
    // if(this.seeLink == true){
    //   this.username = localStorage.getItem("userName")
    // }
  },
}
</script>
<style scoped>
header{
  margin: 20px 0 0 0;
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
a.nuxt-link-active,
a.nuxt-link-exact-active {
  color: #8A8A8A;
  cursor: pointer;
}
</style>
