<template>
  <div class="container">
    <div class="banner">
      <div class="left">
        <p class="title">Сайт с рецептами</p>
        <p>
          На этом сайте есть рецепты различных блюд! <br>
          Все возможности данного сайта:
          <br>
          - Регистрация и авторизация
          <br>
          - Добавления своего рецепта
          <br>
          - Зарегестрированный пользователь может добавлять рецепты к себе в Избранное
        </p>
        <button>
          <NuxtLink to="/reg">Зарегистрироваться</NuxtLink>
        </button>
      </div>
      <div class="right"></div>
    </div>

    <div class="filter-list">
      <ol>
        <li class="filter-block">Без глютена</li>
        <li class="filter-block">Без сахара</li>
        <li class="filter-block">Мало калорий</li>
        <li class="filter-block">Много белка</li>
        <li class="filter-block">Без мяса</li>
        <li class="filter-block">Мало углеводов</li>
      </ol>
    </div>

    <div class="cards">
      <div class="card" v-for="recipe in recipes" :key="recipe.id">
        <div v-if="recipe.image" class="card-img" :style="{backgroundImage: `url( ${recipe.image})`}"></div>
        <div v-else class="card-img">no img</div>
        <p class="card-title">{{recipe.name}}</p>
        <div class="action-container">
          <p class="clock"><i class="bi bi-clock"></i>{{recipe.time}}</p>
                <NuxtLink :to="`/recipes/${recipe.id}`">
                  <button class="btn">Перейти</button>
                </NuxtLink>
        </div>
      </div>

    </div>

  </div>
</template>
<script>
export default {
  async asyncData() {
    const recipes = await fetch(
      'http://localhost:3001/recipes'
    ).then((res) => res.json())

    return { recipes }
  }
}
</script>
<style scoped>
h1{
  display: flex;
  justify-content: center;
  align-items: center;
}
.container{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.banner{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  border: 2px solid #8A8A8A;
  margin: 20px 0 0 0;
  width: 50%;
  height: 600px;
}
.banner button{
  font-size: 25px;
  margin-right: 50%;
  padding: 20px;
  background-color: #729343;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
}
.banner button a{
  text-decoration: none;
  color: white;
}
.banner button:hover{
  background-color: #628037;
}
.left{
  display: flex;
  flex-direction: column;
  border: none;
  justify-content: center;
  align-items: center;
  text-align: left;
}
.left .title{
  font-size: 50px;
  margin: 0;
}
.left p{
  width: 700px;
  font-size: 30px;
}
.right{
  display: flex;
  background-position: center;
  background-size: contain;
  background-image: url("../assets/plate.png");
  background-repeat: no-repeat;
}
.card{
  width: 400px;
  border: 2px solid #c4c4c4;
  font-weight: bold;
  display: flex;
  flex-direction: column;
}
.card-img{
  background-repeat: no-repeat;
  background-size: cover;
  height: 250px;
}
.cards{
  display: grid;
  grid-template-columns: repeat(5,1fr);
  flex-direction: column;
  gap: 50px;
}
.action-container{
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
  gap: 20px;
}
.clock{
  font-size: 20px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
}
.clock i{
  font-size: 30px;
}
.btn-heart{
  font-size: 20px;
  border: none;
  cursor: pointer;
  background-color: transparent;
}
.btn-heart-active{
  border: none;
  display: none;
  font-size: 20px;
  cursor: pointer;
  color: #de5c5c;
  background-color: transparent;
}
.btn{
  background-color: #729343;
  color: white;
  margin: 20px;
  border: none;
  font-size: 25px;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
}
.btn a{
  text-decoration: none;
  color: white;
}
.btn:hover{
  background-color: #628037;
}
h1{
  margin: 50px;
}
.card-title{
  font-size: 22px;
  text-align: center;
}
.filter-list ol{
  margin: 50px 0;
  display: flex;
  width: 100%;
  flex-direction: row;
  gap: 100px;
}
.filter-block{
  cursor: pointer;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  width: 150px;
  border-radius: 20px;
  padding: 10px;
  background-color: #729343;
  color: white;
}
.filter-block:hover{
  background-color: #628037;
}
</style>
