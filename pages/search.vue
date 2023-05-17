<template>
  <div class="container">
    <h1>Поиск</h1>
    <div class="search-container">
      <input class="search-input" v-model="query" type="Text" placeholder="Введите название">
    </div>
    <div class="cards" v-if="query !== ''">
      <div class="card" v-for="(item,index) in filteredRecipes" :key="index">
        <div class="card-img" :style="{ backgroundImage: `url('${item.image}')` }"/>
        <p class="card-title">{{item.name}}</p>
        <div class="action-container">
          <button class="btn">Перейти</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:"search-page",
  async asyncData() {
    const recipes = await fetch(
      'http://localhost:3001/api/recipes'
    ).then((res) => res.json())
    return {recipes}
  },
  data(){
    return{
      query: "",
    }
  },
  computed:{
    filteredRecipes(){
      return this.recipes.filter(card =>{
        return card.name.toUpperCase().indexOf(this.query.toUpperCase()) !== -1
      })
    }
  },

}
</script>

<style scoped>
.container{
  display: flex;
  align-items: center;
  flex-direction: column;
}
.search-container{
  justify-content: center;
  display: flex;
  gap: 20px;
  width: 100%;
}
.search-container .search-input{
  width: 700px;
  padding: 20px;
  font-size: 32px;
  outline: none;
}
.cards{
  margin-top: 50px;
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
  background-position: center;
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
