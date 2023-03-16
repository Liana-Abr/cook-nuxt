<template>
  <div class="container">
    <h1>Поиск</h1>
    <search-component/>
    <h3>Другие рецепты</h3>
    <div class="cards">
      <div class="card" v-for="item in data" :key="item.id">
        <div class="card-img" :style="{ backgroundImage: `url('${item.imageURL}')` }"/>
        <p class="card-title">{{item.name}}</p>
        <div class="action-container">
          <button class="btn">Перейти</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import jsonData from "../cook.json"
import SearchComponent from "~/components/search";
export default {
  name:"search-page",
  components: {SearchComponent},
  data(){
    return{
      data: jsonData.slice(0,3),
    }
  }
}
</script>

<style scoped>
.container{
  display: flex;
  align-items: center;
  flex-direction: column;
}

.card{
  width: 333px;
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
h3{
  margin: 100px 0 20px 0;
  font-size: 25px;
}
.cards{
  display: grid;
  grid-template-columns: repeat(3,1fr);
  flex-direction: column;
  gap: 50px;
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
</style>
