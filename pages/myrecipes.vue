<template>
  <div class="container">
    <h1>Ваши рецепты</h1>
<!--    <h3>Пока рецептов нет</h3>-->
    <button class="addRecipeBtn" @click="openMenuAddRecipe">Добавить рецепт</button>
    <div class="addRecipeForm" :style="{display: openMenu ? 'flex': 'none'}">
      <form @submit.prevent="addRecipes">
<!--        name-->
<!--        description-->
<!--        category-->
<!--        time-->
<!--        imageUrl-->
<!--        tags-->
<!--        ingredients-->
<!--        steps-->
<!--        fat-->
<!--        protein-->
<!--        carb-->
<!--        calories-->
        <input type="text" name="name" placeholder="Название">
        <input type="text" name="description" placeholder="Описание">
        <input type="text" name="category" placeholder="Категория(Например: Завтрак)">
        <input type="text" name="img" placeholder="Ссылка на изображение">
        <textarea class="inp-long" name="ingredients" placeholder="Ингредиенты"></textarea>
        <textarea class="inp-long" name="steps" placeholder="Способ приготовления"></textarea>
        <button type="submit" class="addRecipeBtn">Добавить</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name:"my-recipes-page",
  data(){
    return {
      openMenu: false,
      recipeTitle: "",
      recipeDesc: "",
      recipeImg: "",
      recipeIng: [],
      recipeSteps: []
    }
  },
  methods:{
    openMenuAddRecipe(){
      this.openMenu = !this.openMenu
    },
    addRecipes: async function(e){

    }
  }
}
</script>

<style scoped>
.container{
  text-align: center;
  position: relative;
}
.container h3{
  text-align: center;
  font-size: 35px;
}
.container .addRecipeBtn{
  padding: 10px;
  font-size: 30px;
  cursor: pointer;
  background-color: #729343;
  color: white;
  width: 400px;
  margin-bottom: 50px;
  border-radius: 10px;
  border: none;
}
.container .addRecipeBtn:hover{
  background-color: #628037;
}
.addRecipeForm{
  display: flex;
  position: absolute;
  left: 41%;
  justify-content: center;
}
.addRecipeForm form{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
}
.inp-long{
  width: 400px;
  font-size: 25px;
  align-items: flex-end;
  height: 200px;

}
input{
  width: 400px;
  height: 50px;
  border-radius: 5px;
  font-size: 25px;
}

</style>
