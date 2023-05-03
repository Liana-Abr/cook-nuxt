<template>
  <div class="container">
    <div class="recipe-container">
      <div class="left-container">
        <div class="back-btn">
          <router-link to="/">
            <i class="bi bi-chevron-left"></i>
          </router-link>
        </div>
        <p class="path">главная/рецепты/{{recipe.name}}</p>
        <h3>{{recipe.name}}</h3>
        <div v-if="recipe.image" class="img" :style="{backgroundImage: `url( ${recipe.image})`}"></div>
        <div v-else class="img">no img</div>
        <!--        <div class="img"></div>-->
        <div class="contain">
          <div class="tags">
            <div class="tag"></div>
            <div class="tag">Тег 2</div>
          </div>
          <p class="clock"><i class="bi bi-clock">{{recipe.time}}</i></p>
        </div>
      </div>
      <div class="vl"></div>
      <div class="right">
        <h3>Ингредиенты</h3>
        <div class="right-container">

          <div class="ingredients">
            <div class="ingredient" v-for="ingredient in recipe.ingredients" :key="ingredient.id">
              <p>{{ ingredient }}</p>
            </div>
          </div>

        </div>
        <h3>Способ приготовления</h3>
        <div class="steps">
          <ul v-for="step in recipe.steps" :key="step.id">
            <li>{{ step }}</li>
          </ul>
        </div>

      </div>

    </div>
  </div>
</template>
<script>
export default {
  async asyncData({ params }) {
    const id = params.id
    const recipe = await fetch(
      `http://localhost:3001/recipes/${id}`
    ).then((res) => res.json())
    return { id, recipe }
  },
}
</script>
<style>
.container{
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.container h3{
  text-transform: uppercase;
  text-align: left;
  font-weight: normal;
  font-size: 30px;
  margin: 5% 20%;
}
.right{
  height: 900px;
  box-sizing: border-box;
  overflow-y: inherit;
}
.back-btn a{
  font-size: 25px;
  border-radius: 50%;
  border: 1px solid;
  padding: 10px;
  text-decoration: none;
  color: black;
}
.recipe-container{
  border: none;
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: repeat(3,1fr);
}
.left-container, .contain{
  margin: 8% 0 0 15%;
}
.left-container h3{
  font-size: 40px;
  width: 100%;
}
.path{
  color: gray;
  font-size: 20px;
  margin-left: 20%;
  text-transform: lowercase;
}
.contain .clock {
  font-size: 30px;
  gap: 10px;
}
.tags{
  display: flex;
  gap: 20px;
  text-transform: uppercase;
  font-size: 30px;
  cursor: pointer;
}
.tag:hover{
  color: #8A8A8A;
}
.img{
  /*background-image: url("https://cdn11.bigcommerce.com/s-1812kprzl2/images/stencil/original/products/426/5082/no-image__12882.1665668288.jpg?c=2");*/
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 600px;
  margin: 0 0 0 20%;
  height: 600px;
}
.vl {
  border-left: 2px solid;
  margin: 0 70%;
  height: 500px;
  width: 10px;
}
.right{
  position: absolute;
  left: 60%;
}
.right h3 {
  text-transform: uppercase;
  font-size: 40px;
  margin-left: 0px;
}
.right-container{
  /*display: grid;*/
  /*grid-template-rows: repeat(2,1fr);*/
}
.ingredients{
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.ingredient{
  display: flex;
  gap: 50px;
  font-size: 30px;
  word-spacing: 5px;
}
.steps{
  text-transform: uppercase;
  font-size: 25px;
}
.steps li{
  margin-bottom: 50px;
}
.clock{
  font-size: 20px;
  padding: 10px;
  display: flex;
  gap: 10px;
}
.clock i{
  font-size: 30px;
}
</style>
