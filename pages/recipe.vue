<template>
  <div class="container">

    <div class="recipe-container">
      <div class="left-container">
        <h3>Название рецепта</h3>
        <div class="img"></div>
        <div class="contain">
          <div class="tags">
            <div class="tag">Тег 1</div>
            <div class="tag">Тег 2</div>
          </div>
          <p class="clock"><i class="bi bi-clock"></i>40 мин</p>
        </div>
      </div>
      <div class="vl"></div>
      <div class="right">
        <h3>Ингредиенты</h3>
        <div class="right-container">

          <div class="ingredients">
            <div class="ingredient">
              <p>Ингредиент</p> <p>50г</p>
            </div>
            <div class="ingredient">
              <p>Ингредиент</p> <p>50г</p>
            </div>
            <div class="ingredient">
              <p>Ингредиент</p> <p>50г</p>
            </div>
            <div class="ingredient">
              <p>Ингредиент</p> <p>50г</p>
            </div>

          </div>

        </div>
        <h3>Способ приготовления</h3>
        <div class="parts">
          <ol>
            <li>Инструкция к приготовлению</li>
            <li>Инструкция к приготовлению</li>
          </ol>
        </div>

      </div>

    </div>
  </div>
</template>
<script>
export default {
  name: "recipe-page"
}
</script>

<style scoped>
.container{
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
.recipe-container{
  border: none;
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: repeat(3,1fr);
}
.left-container, .contain{
  margin: 8% 0 0 20%;
}
.left-container h3{
  font-size: 40px;
  width: 100%;
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
  background-image: url("https://cdn.lifehacker.ru/wp-content/uploads/2020/01/Depositphotos_77997072_l-2015_1580203384-e1580203435458-1600x800.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 600px;
  margin: 0 0 0 20%;
  height: 600px;
}
.vl {
  border-left: 2px solid;
  margin: 0 50%;
  height: 800px;
  width: 10px;
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
  text-decoration: underline;
}
.ingredient{
  display: flex;
  gap: 50px;
  font-size: 30px;
}
.parts{
  text-transform: uppercase;
  font-size: 25px;
}
.parts li{
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
