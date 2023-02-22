<template>
  <header>
    <div class="logo"><span>let's</span> cook</div>
    <NuxtLink to="/">Главная</NuxtLink>
    <NuxtLink to="/favorites">Избранное</NuxtLink>
    <NuxtLink to="/myrecipes">Мои рецепты</NuxtLink>
    <NuxtLink to="/search">Поиск</NuxtLink>
    <NuxtLink to="/profile" :style="{display: seeLink ? 'flex' : 'none'}" >{{ username }}</NuxtLink>
    <NuxtLink to="/login" :style="{display: seeLink ? 'flex' : 'none'}" @click="profileExit">Выход</NuxtLink>
    <NuxtLink to="/login" :style="{display: seeLink ? 'none' : 'flex'}" @click="profileExit">Вход</NuxtLink>
  </header>
</template>

<script>
export default {
  name: "page-header",
  auth: false ,
  data(){
    return {
      seeLink: false,
      username: ""
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
    // this.seeLink = !!localStorage.getItem("userName");
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
a.router-link-active,
a.router-link-exact-active {
  color: #8A8A8A;
  cursor: pointer;
}
</style>
