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
        <div class="card" v-for="card in recipes" :key="card.id">
          <div class="card-img" :style="{backgroundImage: `url(${card.image || 'https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-6.png' })`}"></div>
          <p class="card-title">{{card.name}}</p>
          <div class="action-container">
            <p class="clock"><i class="bi bi-clock"></i>{{card.time}}</p>
            <button class="btn" @click="$router.push(`/recipes/${card.id}`)">Перейти
            </button>
          </div>
        </div>

    </div>

  </div>
</template>
<script>
// import jsonData from "../cook.json"
export default {
  name: "home-page",
  created() {
    let apiURL = `http://localhost:3001/recipes/`;
    fetch(apiURL)
      .then(res => res.json())
      .then(res => (this.recipes = res))
      .catch(error => console.log(error));
  },
  data(){
    return{
      recipes: []
    }
  },

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
