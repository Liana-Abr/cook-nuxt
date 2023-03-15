<template>
  <div class="container">
    <h1>Рецепты</h1>
    <div class="banner">

    </div>
    <div class="cards">
      <div class="card" v-for="item in data" :key="item.id">
        <div class="card-img" :style="{ backgroundImage: `url('${item.imageURL}')` }"/>
        <p class="card-title">{{item.name}}</p>

        <div class="action-container">
          <p class="clock"><i class="bi bi-clock"></i>{{item.time}}</p>
<!--          <button class="btn-heart" @click.prevent="like = !like" :style="{display: like ? 'none':'flex'}">-->
<!--            <i class="bi bi-heart"></i>-->
<!--          </button>-->

<!--          <button class="btn-heart-active" @click.prevent="like = !like" :style="{display: like ? 'flex':'none'}">-->
<!--            <i class="bi bi-heart-fill"></i>-->
<!--          </button>-->
          <button class="btn">Перейти</button>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
import jsonData from "../cook.json"
export default {
  name: "home-page",
  data(){
    return{
      data: jsonData,
      // like: false
    }
  }
}

</script>
<style>
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
  width: 50%;
  height: 20%;
  background-color: #628037;
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
</style>
