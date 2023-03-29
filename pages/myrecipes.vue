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
        <input type="text" name="name" placeholder="Название" v-model="recipeName">
        <input type="text" name="description" placeholder="Описание" v-model="recipeDesc">
        <input type="text" name="category" placeholder="Категория(Например: Завтрак)" v-model="recipeCategory">
        <input type="text" name="time" placeholder="Время готовки" v-model="recipeTime">
        <input type="text" name="img" placeholder="Ссылка на изображение" v-model="recipeImg">
        <input type="text" name="tags" placeholder="Теги" v-model="formattedTags">
        <input type="text" name="ingredients" placeholder="Ингредиенты" v-model="formattedIng">
        <input type="text" name="steps" placeholder="Способ приготовления" v-model="formattedSteps">
<!--        <textarea class="inp-long" name="ingredients" placeholder="Ингредиенты" v-model="recipeIng"></textarea>-->
<!--        <textarea class="inp-long" name="steps" placeholder="Способ приготовления"  v-model="recipeSteps"></textarea>-->
        <p>КБЖУ</p>
        <input type="text" name="fat" placeholder="Жиры" v-model="recipeFat">
        <input type="text" name="protein" placeholder="Белки" v-model="recipeProt">
        <input type="text" name="carb" placeholder="Углеводы" v-model="recipeCarb">
        <input type="text" name="calories" placeholder="Калорийность" v-model="recipeCal">
        <button type="submit" class="addRecipeBtn" >Добавить</button>
      </form>

    </div>
<!--    <input type="text" v-model="newTag" />-->
<!--    <button @click="splitArray">Добавить</button>-->
  </div>
</template>

<script>
export default {
  name:"my-recipes-page",
  data(){
    return {
      openMenu: false,
      recipeName: "",
      recipeDesc: "",
      recipeCategory: "",
      recipeTime: "",
      recipeImg: "",
      recipeTags: [],
      recipeIng: [],
      recipeSteps: [],
      recipeFat: "",
      recipeProt: "",
      recipeCarb: "",
      recipeCal: "",
      // name, description, category, time, image, tags, ingredients, steps, fat, protein, carb, calories
    }
  },
  computed: {
    formattedTags :{
      get(){
        return this.recipeTags.join(",");
      },
      set(value){
        this.recipeTags = value.split(',');
      }
    },
    formattedIng :{
      get(){
        return this.recipeIng.join(",");
      },
      set(value){
        this.recipeIng = value.split(',');
      }
    },
    formattedSteps :{
      get(){
        return this.recipeSteps.join(",");
      },
      set(value){
        this.recipeSteps = value.split(',');
      }
    }
  },
  methods:{
    openMenuAddRecipe(){
      this.openMenu = !this.openMenu
    },
    addRecipes: async function(e){
      e.preventDefault()
      let body = {
        name: this.recipeName,
        description: this.recipeDesc ,
        category: this.recipeCategory,
        time:this.recipeTime ,
        image: this.recipeImg,
        tags:this.recipeTags ,
        ingredients:this.recipeIng ,
        steps:this.recipeSteps ,
        fat: this.recipeFat,
        protein: this.recipeProt,
        carb:this.recipeCarb ,
        calories:this.recipeCal ,
      }
      const data = await fetch("http://localhost:3001/recipes/add",{
        method: "POST",
        headers:{
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(body)
      }).then(res => res.json());
      console.log(data)
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
  left: 45%;
  justify-content: center;
}
.addRecipeForm form{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
}
.addRecipeForm p{
  font-size: 30px;
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
