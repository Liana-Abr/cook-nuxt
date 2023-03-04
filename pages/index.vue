<template>
  <div class="container">
    <h1>Рецепты</h1>


    <div class="cards">
      <div class="card" v-for="item in data" :key="item.id">
        <div class="card-img" :style="{ backgroundImage: `url('${item.imageURL}')` }"/>
        <p class="card-title">{{item.name}}</p>
        <div class="action-container">
          <p class="clock"><i class="bi bi-clock"></i>{{item.time}}</p>
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
      users: []
    }

  },
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
.cards{
  display: grid;
  grid-template-columns: repeat(5,1fr);
  flex-direction: column;
  gap: 50px;
}
.action-container{
  display: flex;
  margin: 20px;
  gap: 20px;
}
.clock{
  padding: 10px;
}
.btn{
  background-color: #729343;
  height: 25px;
  color: white;
  margin: 20px;
  padding: 10px;
  border-radius: 10px;

}
h1{
  margin: 50px;
}
.card-title{
  font-size: 22px;
}
</style>
