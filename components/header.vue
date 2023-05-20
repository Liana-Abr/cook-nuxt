<template>
  <header>
    <NuxtLink to="/"><div class="logo"><span>let's</span> cook</div></NuxtLink>
    <NuxtLink to="/favorites" :style="{display: seeLink ? 'flex' : 'none'}">Избранное</NuxtLink>
    <NuxtLink to="/createrecipes" :style="{display: seeLink ? 'flex' : 'none'}">Создать рецепты</NuxtLink>
    <ul class="drop" @click="openNav = !openNav"><a>Категории<i class="bi bi-chevron-down" ></i></a>
      <li class="drop_menu" :style="{display: openNav ? 'flex' : 'none'}">
        <NuxtLink to="/category/breakfast">Завтраки</NuxtLink>
        <NuxtLink to="/category/salads">Салаты</NuxtLink>
        <NuxtLink to="/category/pastry">Выпечка и десерты</NuxtLink>
      </li>
    </ul>

    <NuxtLink to="/search">Поиск</NuxtLink>
<!--    <NuxtLink to="/profile" :style="{display: seeLink ? 'flex' : 'none'}" >{{ username }}</NuxtLink>-->
<!--    <NuxtLink to="/login" :style="{display: seeLink ? 'flex' : 'none'}">Выход</NuxtLink>-->
    <NuxtLink to="/login" :style="{display: seeLink ? 'none' : 'flex'}">Войти</NuxtLink>
    <NuxtLink to="/profile" :style="{display: seeLink ? 'flex' : 'none'}">Профиль</NuxtLink>
    <button class="exitBtn" @click="profileExit" :style="{display: seeLink ? 'flex' : 'none'}">Выйти</button>
  </header>
</template>

<script>
export default {
  name: "page-header",
  data(){
    return {
      seeLink: false,
      openNav: false
    }
  },
  mounted() {
    this.seeLink = !!localStorage.getItem("UserEmail") && !!localStorage.getItem("UserToken")
  },
  methods:{
    profileExit(){
      if(localStorage.getItem("UserEmail") && localStorage.getItem("UserToken")){
        localStorage.removeItem("UserName")
        localStorage.removeItem("UserToken")
        localStorage.removeItem("UserEmail")
        console.log("Exit")
      }
      window.location.reload(true)
    },
  }
}
</script>
<style scoped>
header{
  position: relative;
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
  font-size: 30px;
}
.drop{
  text-decoration: none;
}
.drop_menu{
  gap: 20px;
  padding: 10px;
  margin: 20px 0 0 0;
  width: 300px;
  background-color: white;
  border: 2px solid;
  position: absolute;
  display: none;
  flex-direction: column;
  z-index: 999;
}
.exitBtn{
  font-size: 25px;
  padding: 10px;
  background-color: #729343;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
}
.exitBtn:hover{
  background-color: #628037;
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
