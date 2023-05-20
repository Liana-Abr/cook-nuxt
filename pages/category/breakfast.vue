<template>
  <div class="breakfast-container">
    <h1>Завтраки</h1>
    <div class="breakfast-container__cards">
      <div class="breakfast-container__card" v-for="(item,index) in filteredRecipes" :key="index">
        <div v-if="item.image" class="card-img" :style="{backgroundImage: `url( ${item.image})`}"></div>
        <div v-else class="card-img">no img</div>
        <p class="card-title">{{item.name}}</p>
        <div class="action-container">
          <p class="clock"><i class="bi bi-clock"></i>{{item.time}}</p>
          <NuxtLink :to="`/recipes/${item.id}`">
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
      'http://localhost:3001/api/recipes'
    ).then((res) => res.json())
    return {recipes}
  },
  data(){
    return {
      category: "Завтраки"
    }
  },
  computed:{
    filteredRecipes() {
      if(this.category){
        return this.recipes.filter(item =>{
          return item.category.includes(this.category);
        })
      }
      return this.recipes
    }
  }
}
</script>
<style scoped>
.breakfast-container{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.breakfast-container h1{
  text-align: center;
}
.breakfast-container__cards{
  display: grid;
  grid-template-columns: repeat(3,1fr);
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 50px;
}
.breakfast-container__card{
  width: 400px;
  border: 2px solid #c4c4c4;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
}
.card-img{
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 250px;
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
</style>
