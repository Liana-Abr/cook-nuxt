<template>
  <div class="category-container">
    <h1>
      {{ category }}
      {{category2 || ""}}
    </h1>
    <div class="changeStyle-buttons">
      <button @click="saveDisplay" class="grid-btn" :class="{'grid-btn-active': !CardsStyle}" :style="{backgroundColor : CardsStyle ? 'transparent' : '#729343'}"><i class="bi bi-grid-3x3"></i></button>
      <button @click="saveDisplay" class="list-btn" :class="{'list-btn-active': CardsStyle}"><i class="bi bi-card-list"></i></button>
    </div>

    <div class="category-container__cards" v-if="!CardsStyle">
      <div class="category-container__card" v-for="(item,index) in filteredRecipes" :key="index">
        <div v-if="item.image" class="card-img" :style="{backgroundImage: `url( ${item.image})`}"></div>
        <div v-else class="card-img">no img</div>
        <p class="card-title">{{item.name}}</p>
        <div class="action-container">
          <div class="clock">
            <i class="bi bi-clock"></i>
            <p>{{item.time}}</p>
          </div>
          <NuxtLink :to="`/recipes/${item.id}`">
            <button class="btn">Перейти</button>
          </NuxtLink>
        </div>
      </div>
    </div>

      <div class="category-container__cards-list" v-if="!!CardsStyle">
      <div class="category-container__card-list" v-for="(item,index) in filteredRecipes" :key="index">
        <div v-if="item.image" class="card-img-list" :style="{backgroundImage: `url( ${item.image})`}"></div>
        <div v-else class="card-img">no img</div>
        <p class="card-title-list">{{item.name}}</p>
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
  data(){
    return {
      category: "",
      category2: "",
      CardsStyle: false,
    }
  },
  async asyncData() {
    const recipes = await fetch(
      'http://localhost:3001/api/recipes'
    ).then((res) => res.json())
    return {recipes}
  },
  computed:{
    filteredRecipes() {
      //Фильтрация категорий по пути
      if(this.$route.params.category === "breakfast"){
        this.category = "Завтраки"
      } else if(this.$route.params.category === "pastry"){
        this.category = "Выпечка"
        this.category2 = "Десерты"
      } else {
        this.category = "Салаты"
      }
      if(this.category){
        return this.recipes.filter(item =>{
          return item.category.includes(this.category);
        })
      }
      return this.recipes
    }
  },
  methods:{
    saveDisplay() {
      this.CardsStyle = !this.CardsStyle
    }
  }
}
</script>
<style scoped>
.category-container{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.category-container h1{
  text-align: center;
}
/*CARDS GRID*/

.category-container__cards{
  display: grid;
  grid-template-columns: repeat(3,1fr);
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 50px;
}
.category-container__card{
  width: 400px;
  border: 2px solid #c4c4c4;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
}
.changeStyle-buttons{
  display: flex;
  gap: 15px;
  margin: 20px;
}
.list-btn, .grid-btn{
  cursor: pointer;
  border: 1px solid;
  font-size: 30px;
  border-radius: 5px;
  background-color: transparent;
  padding: 20px;
}
/*.list-btn:hover, .grid-btn:hover{*/
/*  background-color: rgba(217, 214, 214, 0.24);*/
/*}*/
.list-btn-active, .grid-btn-active{
  background-color: #729343;
  box-shadow: none;
  cursor: pointer;
  border: none;
  font-size: 30px;
  border-radius: 5px;
  padding: 20px;
}
.list-btn-active i, .grid-btn-active i{
  color: white;
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
.card-title{
  font-size: 22px;
  text-align: center;
}
/*CARDS LIST*/

.category-container__cards-list{
  display: flex;
  flex-direction: column;
}
.category-container__card-list{
  display: flex;
  align-items: center;
  gap: 50px;
  border: 2px solid #c4c4c4;
  font-weight: bold;
  margin-bottom: 50px;
}
.card-img-list{
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 400px;
  height: 250px;
}
.card-title-list{
  width: 200px;
  font-size: 22px;
  text-align: center;
}
</style>
