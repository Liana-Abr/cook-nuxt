<template>
  <header>
    <NuxtLink to="/"><div class="logo"><span>let's</span> cook</div></NuxtLink>
    <NuxtLink to="/favorites" :style="{display: seeLink ? 'flex' : 'none'}">Избранное</NuxtLink>
    <NuxtLink to="/myrecipes" :style="{display: seeLink ? 'flex' : 'none'}">Мои рецепты</NuxtLink>
    <NuxtLink to="/search">Поиск</NuxtLink>
<!--    <NuxtLink to="/profile" :style="{display: seeLink ? 'flex' : 'none'}" >{{ username }}</NuxtLink>-->
<!--    <NuxtLink to="/login" :style="{display: seeLink ? 'flex' : 'none'}">Выход</NuxtLink>-->
    <NuxtLink to="/login" :style="{display: seeLink ? 'none' : 'flex'}">Войти</NuxtLink>
    <NuxtLink to="/profile" :style="{display: seeLink ? 'flex' : 'none'}">Профиль</NuxtLink>
    <button class="exitBtn" @click.prevent="profileExit" :style="{display: seeLink ? 'flex' : 'none'}">Выйти</button>
  </header>
</template>

<script>
export default {
  name: "page-header",
  data(){
    return {
      seeLink: false,
    }
  },
  mounted() {
    this.seeLink = !!localStorage.getItem("UserName") && !!localStorage.getItem("UserToken")
  },
  methods:{
    profileExit(){
      if(localStorage.getItem("UserName") && localStorage.getItem("UserToken") && localStorage.getItem("UserEmail")){
        localStorage.removeItem("UserName")
        localStorage.removeItem("UserToken")
        console.log("Exit")
      }
    }
  }
}
</script>
<style scoped>
header{
  margin: 20px 0 0 0;
  font-size: 25px;
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
.exitBtn{
  font-size: 25px;
  padding: 10px;
  background-color: #729343;
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
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
